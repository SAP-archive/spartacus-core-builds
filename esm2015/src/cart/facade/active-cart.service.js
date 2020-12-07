import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, EMPTY, of, Subscription, timer, using, } from 'rxjs';
import { debounce, distinctUntilChanged, filter, map, pairwise, shareReplay, switchMap, switchMapTo, take, tap, withLatestFrom, } from 'rxjs/operators';
import { UserIdService } from '../../auth/index';
import { OCC_CART_ID_CURRENT, OCC_USER_ID_ANONYMOUS, OCC_USER_ID_GUEST, } from '../../occ/utils/occ-constants';
import { EMAIL_PATTERN } from '../../util/regex-pattern';
import { activeCartInitialState } from '../store/reducers/multi-cart.reducer';
import { MultiCartSelectors } from '../store/selectors/index';
import { getCartIdByUserId, isTempCartId } from '../utils/utils';
import { MultiCartService } from './multi-cart.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "./multi-cart.service";
import * as i3 from "../../auth/user-auth/facade/user-id.service";
export class ActiveCartService {
    constructor(store, multiCartService, userIdService) {
        this.store = store;
        this.multiCartService = multiCartService;
        this.userIdService = userIdService;
        this.subscription = new Subscription();
        // This stream is used for referencing carts in API calls.
        this.activeCartId$ = this.userIdService.getUserId().pipe(
        // We want to wait with initialization of cartId until we have userId initialized
        // We have take(1) to not trigger this stream, when userId changes.
        take(1), switchMapTo(this.store), select(MultiCartSelectors.getActiveCartId), 
        // We also wait until we initialize cart from localStorage. Before that happens cartId in store === null
        filter((cartId) => cartId !== activeCartInitialState), map((cartId) => {
            if (cartId === '') {
                // We fallback to current when we don't have particular cart id -> cartId === '', because that's how you reference latest user cart.
                return OCC_CART_ID_CURRENT;
            }
            return cartId;
        }));
        this.cartSelector$ = this.activeCartId$.pipe(switchMap((cartId) => this.multiCartService.getCartEntity(cartId)));
        this.initActiveCart();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    initActiveCart() {
        // Any change of user id is also interesting for us, because we have to merge/load/switch cart in those cases.
        this.subscription.add(this.userIdService
            .getUserId()
            .pipe(
        // We never trigger cart merge/load on app initialization here and that's why we wait with pairwise for a change of userId (not initialization).
        pairwise(), switchMap(([previousUserId, userId]) => 
        // We need cartId once we have the previous and current userId. We don't want to subscribe to cartId stream before.
        combineLatest([
            of(previousUserId),
            of(userId),
            this.activeCartId$,
        ]).pipe(take(1))))
            .subscribe(([previousUserId, userId, cartId]) => {
            // Only change of user and not a logout (current user id !== anonymous) should trigger loading mechanism
            if (this.isJustLoggedIn(userId, previousUserId)) {
                this.loadOrMerge(cartId, userId, previousUserId);
            }
        }));
        // Stream for getting the cart value
        const activeCartValue$ = this.cartSelector$.pipe(map((cartEntity) => {
            return {
                cart: cartEntity.value,
                isStable: !cartEntity.loading && cartEntity.processesCount === 0,
                loaded: (cartEntity.error || cartEntity.success) && !cartEntity.loading,
            };
        }), 
        // we want to emit empty carts even if those are not stable
        // on merge cart action we want to switch to empty cart so no one would use old cartId which can be already obsolete
        // so on merge action the resulting stream looks like this: old_cart -> {} -> new_cart
        filter(({ isStable, cart }) => isStable || this.isEmpty(cart)));
        // Responsible for loading cart when it's not (eg. app initialization when we have only cart id)
        const activeCartLoading$ = activeCartValue$.pipe(withLatestFrom(this.activeCartId$, this.userIdService.getUserId()), tap(([{ cart, loaded, isStable }, cartId, userId]) => {
            if (isStable &&
                this.isEmpty(cart) &&
                !loaded &&
                !isTempCartId(cartId)) {
                this.load(cartId, userId);
            }
        }));
        this.activeCart$ = using(() => activeCartLoading$.subscribe(), () => activeCartValue$).pipe(
        // Normalization for empty cart value. It will always be returned as empty object.
        map(({ cart }) => (cart ? cart : {})), distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Returns active cart
     */
    getActive() {
        return this.activeCart$;
    }
    /**
     * Returns active cart id
     */
    getActiveCartId() {
        return this.activeCart$.pipe(withLatestFrom(this.userIdService.getUserId()), map(([cart, userId]) => getCartIdByUserId(cart, userId)), distinctUntilChanged());
    }
    /**
     * Returns cart entries
     */
    getEntries() {
        return this.activeCartId$.pipe(switchMap((cartId) => this.multiCartService.getEntries(cartId)), distinctUntilChanged());
    }
    /**
     * Returns last cart entry for provided product code.
     * Needed to cover processes where multiple entries can share the same product code
     * (e.g. promotions or configurable products)
     *
     * @param productCode
     */
    getLastEntry(productCode) {
        return this.activeCartId$.pipe(switchMap((cartId) => this.multiCartService.getLastEntry(cartId, productCode)), distinctUntilChanged());
    }
    /**
     * Returns cart loading state
     */
    getLoading() {
        return this.cartSelector$.pipe(map((cartEntity) => cartEntity.loading), distinctUntilChanged());
    }
    /**
     * Returns true when cart is stable (not loading and not pending processes on cart)
     */
    isStable() {
        // Debounce is used here, to avoid flickering when we switch between different cart entities.
        // For example during `addEntry` method. We might try to load current cart, so `current cart will be then active id.
        // After load fails we might create new cart so we switch to `temp-${uuid}` cart entity used when creating cart.
        // At the end we finally switch to cart `code` for cart id. Between those switches cart `isStable` function should not flicker.
        return this.activeCartId$.pipe(switchMap((cartId) => this.multiCartService.isStable(cartId)), debounce((state) => (state ? timer(0) : EMPTY)), distinctUntilChanged());
    }
    loadOrMerge(cartId, userId, previousUserId) {
        // for login user, whenever there's an existing cart, we will load the user
        // current cart and merge it into the existing cart
        // cartId will be defined (not '', null, undefined)
        if (cartId === OCC_CART_ID_CURRENT) {
            this.multiCartService.loadCart({
                userId,
                cartId: OCC_CART_ID_CURRENT,
                extraData: {
                    active: true,
                },
            });
        }
        else if (this.isGuestCart()) {
            this.guestCartMerge(cartId);
        }
        else if (userId !== previousUserId &&
            userId !== OCC_USER_ID_ANONYMOUS &&
            previousUserId !== OCC_USER_ID_ANONYMOUS) {
            // This case covers the case when you are logged in and then asm user logs in and you don't want to merge, but only load emulated user cart
            // Similarly when you are logged in as asm user and you logout and want to resume previous user session
            this.multiCartService.loadCart({
                userId,
                cartId,
                extraData: {
                    active: true,
                },
            });
        }
        else {
            // We have particular cart locally, but we logged in, so we need to combine this with current cart or make it ours.
            this.multiCartService.mergeToCurrentCart({
                userId,
                cartId,
                extraData: {
                    active: true,
                },
            });
        }
    }
    load(cartId, userId) {
        // We want to load cart in every case apart from anonymous user and current cart combination
        if (!(userId === OCC_USER_ID_ANONYMOUS && cartId === OCC_CART_ID_CURRENT)) {
            this.multiCartService.loadCart({
                userId,
                cartId,
                extraData: {
                    active: true,
                },
            });
        }
    }
    addEntriesGuestMerge(cartEntries) {
        const entriesToAdd = cartEntries.map((entry) => ({
            productCode: entry.product.code,
            quantity: entry.quantity,
        }));
        this.requireLoadedCartForGuestMerge()
            .pipe(withLatestFrom(this.userIdService.getUserId()))
            .subscribe(([cartState, userId]) => {
            this.multiCartService.addEntries(userId, getCartIdByUserId(cartState.value, userId), entriesToAdd);
        });
    }
    requireLoadedCartForGuestMerge() {
        return this.requireLoadedCart(this.cartSelector$.pipe(filter(() => !this.isGuestCart())));
    }
    isCartCreating(cartState, cartId) {
        // cart creating is always represented with loading flags
        // when all loading flags are false it means that we restored wrong cart id
        // could happen on context change or reload right in the middle on cart create call
        return (isTempCartId(cartId) &&
            (cartState.loading || cartState.success || cartState.error));
    }
    requireLoadedCart(customCartSelector$) {
        // For guest cart merge we want to filter guest cart in the whole stream
        // We have to wait with load/create/addEntry after guest cart will be deleted.
        // That's why you can provide custom selector with this filter applied.
        const cartSelector$ = customCartSelector$
            ? customCartSelector$
            : this.cartSelector$;
        return cartSelector$.pipe(filter((cartState) => !cartState.loading), 
        // Avoid load/create call when there are new cart creating at the moment
        withLatestFrom(this.activeCartId$), filter(([cartState, cartId]) => !this.isCartCreating(cartState, cartId)), map(([cartState]) => cartState), take(1), withLatestFrom(this.userIdService.getUserId()), tap(([cartState, userId]) => {
            // Try to load the cart, because it might have been created on another device between our login and add entry call
            if (this.isEmpty(cartState.value) && userId !== OCC_USER_ID_ANONYMOUS) {
                this.load(OCC_CART_ID_CURRENT, userId);
            }
        }), switchMap(() => {
            return cartSelector$;
        }), filter((cartState) => !cartState.loading), 
        // create cart can happen to anonymous user if it is not empty or to any other user if it is loaded and empty
        withLatestFrom(this.userIdService.getUserId()), filter(([cartState, userId]) => userId === OCC_USER_ID_ANONYMOUS ||
            cartState.success ||
            cartState.error), take(1), tap(([cartState, userId]) => {
            if (this.isEmpty(cartState.value)) {
                this.multiCartService.createCart({
                    userId,
                    extraData: {
                        active: true,
                    },
                });
            }
        }), switchMap(() => {
            return cartSelector$;
        }), filter((cartState) => !cartState.loading), filter((cartState) => cartState.success || cartState.error), 
        // wait for active cart id to point to code/guid to avoid some work on temp cart entity
        withLatestFrom(this.activeCartId$), filter(([cartState, cartId]) => !this.isCartCreating(cartState, cartId)), map(([cartState]) => cartState), filter((cartState) => !this.isEmpty(cartState.value)), take(1));
    }
    /**
     * Add entry to active cart
     *
     * @param productCode
     * @param quantity
     */
    addEntry(productCode, quantity) {
        this.requireLoadedCart()
            .pipe(withLatestFrom(this.userIdService.getUserId()))
            .subscribe(([cartState, userId]) => {
            this.multiCartService.addEntry(userId, getCartIdByUserId(cartState.value, userId), productCode, quantity);
        });
    }
    /**
     * Remove entry
     *
     * @param entry
     */
    removeEntry(entry) {
        this.activeCartId$
            .pipe(withLatestFrom(this.userIdService.getUserId()), take(1))
            .subscribe(([cartId, userId]) => {
            this.multiCartService.removeEntry(userId, cartId, entry.entryNumber);
        });
    }
    /**
     * Update entry
     *
     * @param entryNumber
     * @param quantity
     */
    updateEntry(entryNumber, quantity) {
        this.activeCartId$
            .pipe(withLatestFrom(this.userIdService.getUserId()), take(1))
            .subscribe(([cartId, userId]) => {
            this.multiCartService.updateEntry(userId, cartId, entryNumber, quantity);
        });
    }
    /**
     * Returns cart entry
     *
     * @param productCode
     */
    getEntry(productCode) {
        return this.activeCartId$.pipe(switchMap((cartId) => this.multiCartService.getEntry(cartId, productCode)), distinctUntilChanged());
    }
    /**
     * Assign email to cart
     *
     * @param email
     */
    addEmail(email) {
        this.activeCartId$
            .pipe(withLatestFrom(this.userIdService.getUserId()), take(1))
            .subscribe(([cartId, userId]) => {
            this.multiCartService.assignEmail(cartId, userId, email);
        });
    }
    /**
     * Get assigned user to cart
     */
    getAssignedUser() {
        return this.getActive().pipe(map((cart) => cart.user));
    }
    // TODO: Make cart required param in 4.0 and drop the subscribe/unsubscribe.
    /**
     * Returns true for guest cart
     */
    isGuestCart(cart) {
        if (!cart) {
            this.activeCart$
                .subscribe((activeCart) => (cart = activeCart))
                .unsubscribe();
        }
        const cartUser = cart === null || cart === void 0 ? void 0 : cart.user;
        return (cartUser &&
            (cartUser.name === OCC_USER_ID_GUEST ||
                this.isEmail(cartUser.uid.split('|').slice(1).join('|'))));
    }
    /**
     * Add multiple entries to a cart
     *
     * @param cartEntries : list of entries to add (OrderEntry[])
     */
    addEntries(cartEntries) {
        cartEntries.forEach((entry) => {
            this.addEntry(entry.product.code, entry.quantity);
        });
    }
    isEmail(str) {
        if (str) {
            return str.match(EMAIL_PATTERN) ? true : false;
        }
        return false;
    }
    // TODO: Remove once backend is updated
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     */
    guestCartMerge(cartId) {
        let cartEntries;
        this.getEntries()
            .pipe(take(1))
            .subscribe((entries) => {
            cartEntries = entries;
            this.multiCartService.deleteCart(cartId, OCC_USER_ID_ANONYMOUS);
            this.addEntriesGuestMerge(cartEntries);
        });
    }
    isEmpty(cart) {
        return (!cart || (typeof cart === 'object' && Object.keys(cart).length === 0));
    }
    isJustLoggedIn(userId, previousUserId) {
        return (userId !== OCC_USER_ID_ANONYMOUS && // not logged out
            previousUserId !== userId // *just* logged in / switched to ASM emulation
        );
    }
}
ActiveCartService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ActiveCartService_Factory() { return new ActiveCartService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.MultiCartService), i0.ɵɵinject(i3.UserIdService)); }, token: ActiveCartService, providedIn: "root" });
ActiveCartService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ActiveCartService.ctorParameters = () => [
    { type: Store },
    { type: MultiCartService },
    { type: UserIdService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NhcnQvZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsYUFBYSxFQUNiLEtBQUssRUFFTCxFQUFFLEVBQ0YsWUFBWSxFQUNaLEtBQUssRUFDTCxLQUFLLEdBQ04sTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxFQUNULFdBQVcsRUFDWCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUlqRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUt4RCxNQUFNLE9BQU8saUJBQWlCO0lBMEI1QixZQUNZLEtBQWdDLEVBQ2hDLGdCQUFr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QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNoRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELHVDQUF1QztJQUN2Qzs7O09BR0c7SUFDSyxjQUFjLENBQUMsTUFBYztRQUNuQyxJQUFJLFdBQXlCLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFBRTthQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNyQixXQUFXLEdBQUcsT0FBTyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLHFCQUFxQixDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLE9BQU8sQ0FBQyxJQUFVO1FBQ3hCLE9BQU8sQ0FDTCxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FDdEUsQ0FBQztJQUNKLENBQUM7SUFFTyxjQUFjLENBQUMsTUFBYyxFQUFFLGNBQXNCO1FBQzNELE9BQU8sQ0FDTCxNQUFNLEtBQUsscUJBQXFCLElBQUksaUJBQWlCO1lBQ3JELGNBQWMsS0FBSyxNQUFNLENBQUMsK0NBQStDO1NBQzFFLENBQUM7SUFDSixDQUFDOzs7O1lBbGVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBMUNnQixLQUFLO1lBc0NiLGdCQUFnQjtZQWZoQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgY29tYmluZUxhdGVzdCxcbiAgRU1QVFksXG4gIE9ic2VydmFibGUsXG4gIG9mLFxuICBTdWJzY3JpcHRpb24sXG4gIHRpbWVyLFxuICB1c2luZyxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBwYWlyd2lzZSxcbiAgc2hhcmVSZXBsYXksXG4gIHN3aXRjaE1hcCxcbiAgc3dpdGNoTWFwVG8sXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVzZXJJZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQge1xuICBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIE9DQ19VU0VSX0lEX0dVRVNULFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBQcm9jZXNzZXNMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL3Byb2Nlc3Nlcy1sb2FkZXIvcHJvY2Vzc2VzLWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBFTUFJTF9QQVRURVJOIH0gZnJvbSAnLi4vLi4vdXRpbC9yZWdleC1wYXR0ZXJuJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgYWN0aXZlQ2FydEluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3JlZHVjZXJzL211bHRpLWNhcnQucmVkdWNlcic7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQsIGlzVGVtcENhcnRJZCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL211bHRpLWNhcnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVDYXJ0U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgYWN0aXZlQ2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgLy8gVGhpcyBzdHJlYW0gaXMgdXNlZCBmb3IgcmVmZXJlbmNpbmcgY2FydHMgaW4gQVBJIGNhbGxzLlxuICBwcml2YXRlIGFjdGl2ZUNhcnRJZCQgPSB0aGlzLnVzZXJJZFNlcnZpY2UuZ2V0VXNlcklkKCkucGlwZShcbiAgICAvLyBXZSB3YW50IHRvIHdhaXQgd2l0aCBpbml0aWFsaXphdGlvbiBvZiBjYXJ0SWQgdW50aWwgd2UgaGF2ZSB1c2VySWQgaW5pdGlhbGl6ZWRcbiAgICAvLyBXZSBoYXZlIHRha2UoMSkgdG8gbm90IHRyaWdnZXIgdGhpcyBzdHJlYW0sIHdoZW4gdXNlcklkIGNoYW5nZXMuXG4gICAgdGFrZSgxKSxcbiAgICBzd2l0Y2hNYXBUbyh0aGlzLnN0b3JlKSxcbiAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldEFjdGl2ZUNhcnRJZCksXG4gICAgLy8gV2UgYWxzbyB3YWl0IHVudGlsIHdlIGluaXRpYWxpemUgY2FydCBmcm9tIGxvY2FsU3RvcmFnZS4gQmVmb3JlIHRoYXQgaGFwcGVucyBjYXJ0SWQgaW4gc3RvcmUgPT09IG51bGxcbiAgICBmaWx0ZXIoKGNhcnRJZCkgPT4gY2FydElkICE9PSBhY3RpdmVDYXJ0SW5pdGlhbFN0YXRlKSxcbiAgICBtYXAoKGNhcnRJZCkgPT4ge1xuICAgICAgaWYgKGNhcnRJZCA9PT0gJycpIHtcbiAgICAgICAgLy8gV2UgZmFsbGJhY2sgdG8gY3VycmVudCB3aGVuIHdlIGRvbid0IGhhdmUgcGFydGljdWxhciBjYXJ0IGlkIC0+IGNhcnRJZCA9PT0gJycsIGJlY2F1c2UgdGhhdCdzIGhvdyB5b3UgcmVmZXJlbmNlIGxhdGVzdCB1c2VyIGNhcnQuXG4gICAgICAgIHJldHVybiBPQ0NfQ0FSVF9JRF9DVVJSRU5UO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcnRJZDtcbiAgICB9KVxuICApO1xuXG4gIHByaXZhdGUgY2FydFNlbGVjdG9yJCA9IHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgIHN3aXRjaE1hcCgoY2FydElkKSA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0Q2FydEVudGl0eShjYXJ0SWQpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PixcbiAgICBwcm90ZWN0ZWQgbXVsdGlDYXJ0U2VydmljZTogTXVsdGlDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlcklkU2VydmljZTogVXNlcklkU2VydmljZVxuICApIHtcbiAgICB0aGlzLmluaXRBY3RpdmVDYXJ0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRBY3RpdmVDYXJ0KCkge1xuICAgIC8vIEFueSBjaGFuZ2Ugb2YgdXNlciBpZCBpcyBhbHNvIGludGVyZXN0aW5nIGZvciB1cywgYmVjYXVzZSB3ZSBoYXZlIHRvIG1lcmdlL2xvYWQvc3dpdGNoIGNhcnQgaW4gdGhvc2UgY2FzZXMuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy51c2VySWRTZXJ2aWNlXG4gICAgICAgIC5nZXRVc2VySWQoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICAvLyBXZSBuZXZlciB0cmlnZ2VyIGNhcnQgbWVyZ2UvbG9hZCBvbiBhcHAgaW5pdGlhbGl6YXRpb24gaGVyZSBhbmQgdGhhdCdzIHdoeSB3ZSB3YWl0IHdpdGggcGFpcndpc2UgZm9yIGEgY2hhbmdlIG9mIHVzZXJJZCAobm90IGluaXRpYWxpemF0aW9uKS5cbiAgICAgICAgICBwYWlyd2lzZSgpLFxuICAgICAgICAgIHN3aXRjaE1hcCgoW3ByZXZpb3VzVXNlcklkLCB1c2VySWRdKSA9PlxuICAgICAgICAgICAgLy8gV2UgbmVlZCBjYXJ0SWQgb25jZSB3ZSBoYXZlIHRoZSBwcmV2aW91cyBhbmQgY3VycmVudCB1c2VySWQuIFdlIGRvbid0IHdhbnQgdG8gc3Vic2NyaWJlIHRvIGNhcnRJZCBzdHJlYW0gYmVmb3JlLlxuICAgICAgICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgICAgIG9mKHByZXZpb3VzVXNlcklkKSxcbiAgICAgICAgICAgICAgb2YodXNlcklkKSxcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDYXJ0SWQkLFxuICAgICAgICAgICAgXSkucGlwZSh0YWtlKDEpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChbcHJldmlvdXNVc2VySWQsIHVzZXJJZCwgY2FydElkXSkgPT4ge1xuICAgICAgICAgIC8vIE9ubHkgY2hhbmdlIG9mIHVzZXIgYW5kIG5vdCBhIGxvZ291dCAoY3VycmVudCB1c2VyIGlkICE9PSBhbm9ueW1vdXMpIHNob3VsZCB0cmlnZ2VyIGxvYWRpbmcgbWVjaGFuaXNtXG4gICAgICAgICAgaWYgKHRoaXMuaXNKdXN0TG9nZ2VkSW4odXNlcklkLCBwcmV2aW91c1VzZXJJZCkpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZE9yTWVyZ2UoY2FydElkLCB1c2VySWQsIHByZXZpb3VzVXNlcklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFN0cmVhbSBmb3IgZ2V0dGluZyB0aGUgY2FydCB2YWx1ZVxuICAgIGNvbnN0IGFjdGl2ZUNhcnRWYWx1ZSQgPSB0aGlzLmNhcnRTZWxlY3RvciQucGlwZShcbiAgICAgIG1hcCgoY2FydEVudGl0eTogUHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4pOiB7XG4gICAgICAgIGNhcnQ6IENhcnQ7XG4gICAgICAgIGlzU3RhYmxlOiBib29sZWFuO1xuICAgICAgICBsb2FkZWQ6IGJvb2xlYW47XG4gICAgICB9ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXJ0OiBjYXJ0RW50aXR5LnZhbHVlLFxuICAgICAgICAgIGlzU3RhYmxlOiAhY2FydEVudGl0eS5sb2FkaW5nICYmIGNhcnRFbnRpdHkucHJvY2Vzc2VzQ291bnQgPT09IDAsXG4gICAgICAgICAgbG9hZGVkOlxuICAgICAgICAgICAgKGNhcnRFbnRpdHkuZXJyb3IgfHwgY2FydEVudGl0eS5zdWNjZXNzKSAmJiAhY2FydEVudGl0eS5sb2FkaW5nLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICAvLyB3ZSB3YW50IHRvIGVtaXQgZW1wdHkgY2FydHMgZXZlbiBpZiB0aG9zZSBhcmUgbm90IHN0YWJsZVxuICAgICAgLy8gb24gbWVyZ2UgY2FydCBhY3Rpb24gd2Ugd2FudCB0byBzd2l0Y2ggdG8gZW1wdHkgY2FydCBzbyBubyBvbmUgd291bGQgdXNlIG9sZCBjYXJ0SWQgd2hpY2ggY2FuIGJlIGFscmVhZHkgb2Jzb2xldGVcbiAgICAgIC8vIHNvIG9uIG1lcmdlIGFjdGlvbiB0aGUgcmVzdWx0aW5nIHN0cmVhbSBsb29rcyBsaWtlIHRoaXM6IG9sZF9jYXJ0IC0+IHt9IC0+IG5ld19jYXJ0XG4gICAgICBmaWx0ZXIoKHsgaXNTdGFibGUsIGNhcnQgfSkgPT4gaXNTdGFibGUgfHwgdGhpcy5pc0VtcHR5KGNhcnQpKVxuICAgICk7XG5cbiAgICAvLyBSZXNwb25zaWJsZSBmb3IgbG9hZGluZyBjYXJ0IHdoZW4gaXQncyBub3QgKGVnLiBhcHAgaW5pdGlhbGl6YXRpb24gd2hlbiB3ZSBoYXZlIG9ubHkgY2FydCBpZClcbiAgICBjb25zdCBhY3RpdmVDYXJ0TG9hZGluZyQgPSBhY3RpdmVDYXJ0VmFsdWUkLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFjdGl2ZUNhcnRJZCQsIHRoaXMudXNlcklkU2VydmljZS5nZXRVc2VySWQoKSksXG4gICAgICB0YXAoKFt7IGNhcnQsIGxvYWRlZCwgaXNTdGFibGUgfSwgY2FydElkLCB1c2VySWRdKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc1N0YWJsZSAmJlxuICAgICAgICAgIHRoaXMuaXNFbXB0eShjYXJ0KSAmJlxuICAgICAgICAgICFsb2FkZWQgJiZcbiAgICAgICAgICAhaXNUZW1wQ2FydElkKGNhcnRJZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKGNhcnRJZCwgdXNlcklkKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5hY3RpdmVDYXJ0JCA9IHVzaW5nKFxuICAgICAgKCkgPT4gYWN0aXZlQ2FydExvYWRpbmckLnN1YnNjcmliZSgpLFxuICAgICAgKCkgPT4gYWN0aXZlQ2FydFZhbHVlJFxuICAgICkucGlwZShcbiAgICAgIC8vIE5vcm1hbGl6YXRpb24gZm9yIGVtcHR5IGNhcnQgdmFsdWUuIEl0IHdpbGwgYWx3YXlzIGJlIHJldHVybmVkIGFzIGVtcHR5IG9iamVjdC5cbiAgICAgIG1hcCgoeyBjYXJ0IH0pID0+IChjYXJ0ID8gY2FydCA6IHt9KSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhY3RpdmUgY2FydFxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnQkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWN0aXZlIGNhcnQgaWRcbiAgICovXG4gIGdldEFjdGl2ZUNhcnRJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnQkLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLnVzZXJJZFNlcnZpY2UuZ2V0VXNlcklkKCkpLFxuICAgICAgbWFwKChbY2FydCwgdXNlcklkXSkgPT4gZ2V0Q2FydElkQnlVc2VySWQoY2FydCwgdXNlcklkKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50cmllc1xuICAgKi9cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY2FydElkKSA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0RW50cmllcyhjYXJ0SWQpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbGFzdCBjYXJ0IGVudHJ5IGZvciBwcm92aWRlZCBwcm9kdWN0IGNvZGUuXG4gICAqIE5lZWRlZCB0byBjb3ZlciBwcm9jZXNzZXMgd2hlcmUgbXVsdGlwbGUgZW50cmllcyBjYW4gc2hhcmUgdGhlIHNhbWUgcHJvZHVjdCBjb2RlXG4gICAqIChlLmcuIHByb21vdGlvbnMgb3IgY29uZmlndXJhYmxlIHByb2R1Y3RzKVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICovXG4gIGdldExhc3RFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChjYXJ0SWQpID0+XG4gICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRMYXN0RW50cnkoY2FydElkLCBwcm9kdWN0Q29kZSlcbiAgICAgICksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgZ2V0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICBtYXAoKGNhcnRFbnRpdHkpID0+IGNhcnRFbnRpdHkubG9hZGluZyksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgd2hlbiBjYXJ0IGlzIHN0YWJsZSAobm90IGxvYWRpbmcgYW5kIG5vdCBwZW5kaW5nIHByb2Nlc3NlcyBvbiBjYXJ0KVxuICAgKi9cbiAgaXNTdGFibGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgLy8gRGVib3VuY2UgaXMgdXNlZCBoZXJlLCB0byBhdm9pZCBmbGlja2VyaW5nIHdoZW4gd2Ugc3dpdGNoIGJldHdlZW4gZGlmZmVyZW50IGNhcnQgZW50aXRpZXMuXG4gICAgLy8gRm9yIGV4YW1wbGUgZHVyaW5nIGBhZGRFbnRyeWAgbWV0aG9kLiBXZSBtaWdodCB0cnkgdG8gbG9hZCBjdXJyZW50IGNhcnQsIHNvIGBjdXJyZW50IGNhcnQgd2lsbCBiZSB0aGVuIGFjdGl2ZSBpZC5cbiAgICAvLyBBZnRlciBsb2FkIGZhaWxzIHdlIG1pZ2h0IGNyZWF0ZSBuZXcgY2FydCBzbyB3ZSBzd2l0Y2ggdG8gYHRlbXAtJHt1dWlkfWAgY2FydCBlbnRpdHkgdXNlZCB3aGVuIGNyZWF0aW5nIGNhcnQuXG4gICAgLy8gQXQgdGhlIGVuZCB3ZSBmaW5hbGx5IHN3aXRjaCB0byBjYXJ0IGBjb2RlYCBmb3IgY2FydCBpZC4gQmV0d2VlbiB0aG9zZSBzd2l0Y2hlcyBjYXJ0IGBpc1N0YWJsZWAgZnVuY3Rpb24gc2hvdWxkIG5vdCBmbGlja2VyLlxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY2FydElkKSA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuaXNTdGFibGUoY2FydElkKSksXG4gICAgICBkZWJvdW5jZSgoc3RhdGUpID0+IChzdGF0ZSA/IHRpbWVyKDApIDogRU1QVFkpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkT3JNZXJnZShcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwcmV2aW91c1VzZXJJZDogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIC8vIGZvciBsb2dpbiB1c2VyLCB3aGVuZXZlciB0aGVyZSdzIGFuIGV4aXN0aW5nIGNhcnQsIHdlIHdpbGwgbG9hZCB0aGUgdXNlclxuICAgIC8vIGN1cnJlbnQgY2FydCBhbmQgbWVyZ2UgaXQgaW50byB0aGUgZXhpc3RpbmcgY2FydFxuICAgIC8vIGNhcnRJZCB3aWxsIGJlIGRlZmluZWQgKG5vdCAnJywgbnVsbCwgdW5kZWZpbmVkKVxuICAgIGlmIChjYXJ0SWQgPT09IE9DQ19DQVJUX0lEX0NVUlJFTlQpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNHdWVzdENhcnQoKSkge1xuICAgICAgdGhpcy5ndWVzdENhcnRNZXJnZShjYXJ0SWQpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB1c2VySWQgIT09IHByZXZpb3VzVXNlcklkICYmXG4gICAgICB1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyAmJlxuICAgICAgcHJldmlvdXNVc2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VU1xuICAgICkge1xuICAgICAgLy8gVGhpcyBjYXNlIGNvdmVycyB0aGUgY2FzZSB3aGVuIHlvdSBhcmUgbG9nZ2VkIGluIGFuZCB0aGVuIGFzbSB1c2VyIGxvZ3MgaW4gYW5kIHlvdSBkb24ndCB3YW50IHRvIG1lcmdlLCBidXQgb25seSBsb2FkIGVtdWxhdGVkIHVzZXIgY2FydFxuICAgICAgLy8gU2ltaWxhcmx5IHdoZW4geW91IGFyZSBsb2dnZWQgaW4gYXMgYXNtIHVzZXIgYW5kIHlvdSBsb2dvdXQgYW5kIHdhbnQgdG8gcmVzdW1lIHByZXZpb3VzIHVzZXIgc2Vzc2lvblxuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBoYXZlIHBhcnRpY3VsYXIgY2FydCBsb2NhbGx5LCBidXQgd2UgbG9nZ2VkIGluLCBzbyB3ZSBuZWVkIHRvIGNvbWJpbmUgdGhpcyB3aXRoIGN1cnJlbnQgY2FydCBvciBtYWtlIGl0IG91cnMuXG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UubWVyZ2VUb0N1cnJlbnRDYXJ0KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZChjYXJ0SWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBXZSB3YW50IHRvIGxvYWQgY2FydCBpbiBldmVyeSBjYXNlIGFwYXJ0IGZyb20gYW5vbnltb3VzIHVzZXIgYW5kIGN1cnJlbnQgY2FydCBjb21iaW5hdGlvblxuICAgIGlmICghKHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTICYmIGNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEVudHJpZXNHdWVzdE1lcmdlKGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W10pIHtcbiAgICBjb25zdCBlbnRyaWVzVG9BZGQgPSBjYXJ0RW50cmllcy5tYXAoKGVudHJ5KSA9PiAoe1xuICAgICAgcHJvZHVjdENvZGU6IGVudHJ5LnByb2R1Y3QuY29kZSxcbiAgICAgIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSxcbiAgICB9KSk7XG4gICAgdGhpcy5yZXF1aXJlTG9hZGVkQ2FydEZvckd1ZXN0TWVyZ2UoKVxuICAgICAgLnBpcGUod2l0aExhdGVzdEZyb20odGhpcy51c2VySWRTZXJ2aWNlLmdldFVzZXJJZCgpKSlcbiAgICAgIC5zdWJzY3JpYmUoKFtjYXJ0U3RhdGUsIHVzZXJJZF0pID0+IHtcbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJpZXMoXG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGdldENhcnRJZEJ5VXNlcklkKGNhcnRTdGF0ZS52YWx1ZSwgdXNlcklkKSxcbiAgICAgICAgICBlbnRyaWVzVG9BZGRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1aXJlTG9hZGVkQ2FydEZvckd1ZXN0TWVyZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZUxvYWRlZENhcnQoXG4gICAgICB0aGlzLmNhcnRTZWxlY3RvciQucGlwZShmaWx0ZXIoKCkgPT4gIXRoaXMuaXNHdWVzdENhcnQoKSkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDYXJ0Q3JlYXRpbmcoXG4gICAgY2FydFN0YXRlOiBQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0PixcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApIHtcbiAgICAvLyBjYXJ0IGNyZWF0aW5nIGlzIGFsd2F5cyByZXByZXNlbnRlZCB3aXRoIGxvYWRpbmcgZmxhZ3NcbiAgICAvLyB3aGVuIGFsbCBsb2FkaW5nIGZsYWdzIGFyZSBmYWxzZSBpdCBtZWFucyB0aGF0IHdlIHJlc3RvcmVkIHdyb25nIGNhcnQgaWRcbiAgICAvLyBjb3VsZCBoYXBwZW4gb24gY29udGV4dCBjaGFuZ2Ugb3IgcmVsb2FkIHJpZ2h0IGluIHRoZSBtaWRkbGUgb24gY2FydCBjcmVhdGUgY2FsbFxuICAgIHJldHVybiAoXG4gICAgICBpc1RlbXBDYXJ0SWQoY2FydElkKSAmJlxuICAgICAgKGNhcnRTdGF0ZS5sb2FkaW5nIHx8IGNhcnRTdGF0ZS5zdWNjZXNzIHx8IGNhcnRTdGF0ZS5lcnJvcilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1aXJlTG9hZGVkQ2FydChcbiAgICBjdXN0b21DYXJ0U2VsZWN0b3IkPzogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj5cbiAgKTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj4ge1xuICAgIC8vIEZvciBndWVzdCBjYXJ0IG1lcmdlIHdlIHdhbnQgdG8gZmlsdGVyIGd1ZXN0IGNhcnQgaW4gdGhlIHdob2xlIHN0cmVhbVxuICAgIC8vIFdlIGhhdmUgdG8gd2FpdCB3aXRoIGxvYWQvY3JlYXRlL2FkZEVudHJ5IGFmdGVyIGd1ZXN0IGNhcnQgd2lsbCBiZSBkZWxldGVkLlxuICAgIC8vIFRoYXQncyB3aHkgeW91IGNhbiBwcm92aWRlIGN1c3RvbSBzZWxlY3RvciB3aXRoIHRoaXMgZmlsdGVyIGFwcGxpZWQuXG4gICAgY29uc3QgY2FydFNlbGVjdG9yJCA9IGN1c3RvbUNhcnRTZWxlY3RvciRcbiAgICAgID8gY3VzdG9tQ2FydFNlbGVjdG9yJFxuICAgICAgOiB0aGlzLmNhcnRTZWxlY3RvciQ7XG5cbiAgICByZXR1cm4gY2FydFNlbGVjdG9yJC5waXBlKFxuICAgICAgZmlsdGVyKChjYXJ0U3RhdGUpID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAvLyBBdm9pZCBsb2FkL2NyZWF0ZSBjYWxsIHdoZW4gdGhlcmUgYXJlIG5ldyBjYXJ0IGNyZWF0aW5nIGF0IHRoZSBtb21lbnRcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYWN0aXZlQ2FydElkJCksXG4gICAgICBmaWx0ZXIoKFtjYXJ0U3RhdGUsIGNhcnRJZF0pID0+ICF0aGlzLmlzQ2FydENyZWF0aW5nKGNhcnRTdGF0ZSwgY2FydElkKSksXG4gICAgICBtYXAoKFtjYXJ0U3RhdGVdKSA9PiBjYXJ0U3RhdGUpLFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMudXNlcklkU2VydmljZS5nZXRVc2VySWQoKSksXG4gICAgICB0YXAoKFtjYXJ0U3RhdGUsIHVzZXJJZF0pID0+IHtcbiAgICAgICAgLy8gVHJ5IHRvIGxvYWQgdGhlIGNhcnQsIGJlY2F1c2UgaXQgbWlnaHQgaGF2ZSBiZWVuIGNyZWF0ZWQgb24gYW5vdGhlciBkZXZpY2UgYmV0d2VlbiBvdXIgbG9naW4gYW5kIGFkZCBlbnRyeSBjYWxsXG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSAmJiB1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgICAgIHRoaXMubG9hZChPQ0NfQ0FSVF9JRF9DVVJSRU5ULCB1c2VySWQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoKGNhcnRTdGF0ZSkgPT4gIWNhcnRTdGF0ZS5sb2FkaW5nKSxcbiAgICAgIC8vIGNyZWF0ZSBjYXJ0IGNhbiBoYXBwZW4gdG8gYW5vbnltb3VzIHVzZXIgaWYgaXQgaXMgbm90IGVtcHR5IG9yIHRvIGFueSBvdGhlciB1c2VyIGlmIGl0IGlzIGxvYWRlZCBhbmQgZW1wdHlcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMudXNlcklkU2VydmljZS5nZXRVc2VySWQoKSksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChbY2FydFN0YXRlLCB1c2VySWRdKSA9PlxuICAgICAgICAgIHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTIHx8XG4gICAgICAgICAgY2FydFN0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICBjYXJ0U3RhdGUuZXJyb3JcbiAgICAgICksXG4gICAgICB0YWtlKDEpLFxuICAgICAgdGFwKChbY2FydFN0YXRlLCB1c2VySWRdKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSkge1xuICAgICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5jcmVhdGVDYXJ0KHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoKGNhcnRTdGF0ZSkgPT4gIWNhcnRTdGF0ZS5sb2FkaW5nKSxcbiAgICAgIGZpbHRlcigoY2FydFN0YXRlKSA9PiBjYXJ0U3RhdGUuc3VjY2VzcyB8fCBjYXJ0U3RhdGUuZXJyb3IpLFxuICAgICAgLy8gd2FpdCBmb3IgYWN0aXZlIGNhcnQgaWQgdG8gcG9pbnQgdG8gY29kZS9ndWlkIHRvIGF2b2lkIHNvbWUgd29yayBvbiB0ZW1wIGNhcnQgZW50aXR5XG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFjdGl2ZUNhcnRJZCQpLFxuICAgICAgZmlsdGVyKChbY2FydFN0YXRlLCBjYXJ0SWRdKSA9PiAhdGhpcy5pc0NhcnRDcmVhdGluZyhjYXJ0U3RhdGUsIGNhcnRJZCkpLFxuICAgICAgbWFwKChbY2FydFN0YXRlXSkgPT4gY2FydFN0YXRlKSxcbiAgICAgIGZpbHRlcigoY2FydFN0YXRlKSA9PiAhdGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkpLFxuICAgICAgdGFrZSgxKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGVudHJ5IHRvIGFjdGl2ZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJlcXVpcmVMb2FkZWRDYXJ0KClcbiAgICAgIC5waXBlKHdpdGhMYXRlc3RGcm9tKHRoaXMudXNlcklkU2VydmljZS5nZXRVc2VySWQoKSkpXG4gICAgICAuc3Vic2NyaWJlKChbY2FydFN0YXRlLCB1c2VySWRdKSA9PiB7XG4gICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hZGRFbnRyeShcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgZ2V0Q2FydElkQnlVc2VySWQoY2FydFN0YXRlLnZhbHVlLCB1c2VySWQpLFxuICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIGVudHJ5XG4gICAqL1xuICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlQ2FydElkJFxuICAgICAgLnBpcGUod2l0aExhdGVzdEZyb20odGhpcy51c2VySWRTZXJ2aWNlLmdldFVzZXJJZCgpKSwgdGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKFtjYXJ0SWQsIHVzZXJJZF0pID0+IHtcbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KHVzZXJJZCwgY2FydElkLCBlbnRyeS5lbnRyeU51bWJlcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlQ2FydElkJFxuICAgICAgLnBpcGUod2l0aExhdGVzdEZyb20odGhpcy51c2VySWRTZXJ2aWNlLmdldFVzZXJJZCgpKSwgdGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKFtjYXJ0SWQsIHVzZXJJZF0pID0+IHtcbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KFxuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgZW50cnlOdW1iZXIsXG4gICAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICovXG4gIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGNhcnRJZCkgPT5cbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldEVudHJ5KGNhcnRJZCwgcHJvZHVjdENvZGUpXG4gICAgICApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIGVtYWlsIHRvIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGVtYWlsXG4gICAqL1xuICBhZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVDYXJ0SWQkXG4gICAgICAucGlwZSh3aXRoTGF0ZXN0RnJvbSh0aGlzLnVzZXJJZFNlcnZpY2UuZ2V0VXNlcklkKCkpLCB0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoW2NhcnRJZCwgdXNlcklkXSkgPT4ge1xuICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYXNzaWduRW1haWwoY2FydElkLCB1c2VySWQsIGVtYWlsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhc3NpZ25lZCB1c2VyIHRvIGNhcnRcbiAgICovXG4gIGdldEFzc2lnbmVkVXNlcigpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRBY3RpdmUoKS5waXBlKG1hcCgoY2FydCkgPT4gY2FydC51c2VyKSk7XG4gIH1cblxuICAvLyBUT0RPOiBNYWtlIGNhcnQgcmVxdWlyZWQgcGFyYW0gaW4gNC4wIGFuZCBkcm9wIHRoZSBzdWJzY3JpYmUvdW5zdWJzY3JpYmUuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgZm9yIGd1ZXN0IGNhcnRcbiAgICovXG4gIGlzR3Vlc3RDYXJ0KGNhcnQ/OiBDYXJ0KTogYm9vbGVhbiB7XG4gICAgaWYgKCFjYXJ0KSB7XG4gICAgICB0aGlzLmFjdGl2ZUNhcnQkXG4gICAgICAgIC5zdWJzY3JpYmUoKGFjdGl2ZUNhcnQpID0+IChjYXJ0ID0gYWN0aXZlQ2FydCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBjb25zdCBjYXJ0VXNlciA9IGNhcnQ/LnVzZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIGNhcnRVc2VyICYmXG4gICAgICAoY2FydFVzZXIubmFtZSA9PT0gT0NDX1VTRVJfSURfR1VFU1QgfHxcbiAgICAgICAgdGhpcy5pc0VtYWlsKGNhcnRVc2VyLnVpZC5zcGxpdCgnfCcpLnNsaWNlKDEpLmpvaW4oJ3wnKSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbXVsdGlwbGUgZW50cmllcyB0byBhIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGNhcnRFbnRyaWVzIDogbGlzdCBvZiBlbnRyaWVzIHRvIGFkZCAoT3JkZXJFbnRyeVtdKVxuICAgKi9cbiAgYWRkRW50cmllcyhjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdKTogdm9pZCB7XG4gICAgY2FydEVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIHRoaXMuYWRkRW50cnkoZW50cnkucHJvZHVjdC5jb2RlLCBlbnRyeS5xdWFudGl0eSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1haWwoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLm1hdGNoKEVNQUlMX1BBVFRFUk4pID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUT0RPOiBSZW1vdmUgb25jZSBiYWNrZW5kIGlzIHVwZGF0ZWRcbiAgLyoqXG4gICAqIFRlbXBvcmFyeSBtZXRob2QgdG8gbWVyZ2UgZ3Vlc3QgY2FydCB3aXRoIHVzZXIgY2FydCBiZWNhdXNlIG9mIGJhY2tlbmQgbGltaXRhdGlvblxuICAgKiBUaGlzIGlzIGZvciBhbiBlZGdlIGNhc2VcbiAgICovXG4gIHByaXZhdGUgZ3Vlc3RDYXJ0TWVyZ2UoY2FydElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXTtcbiAgICB0aGlzLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKGVudHJpZXMpID0+IHtcbiAgICAgICAgY2FydEVudHJpZXMgPSBlbnRyaWVzO1xuICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZGVsZXRlQ2FydChjYXJ0SWQsIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyk7XG4gICAgICAgIHRoaXMuYWRkRW50cmllc0d1ZXN0TWVyZ2UoY2FydEVudHJpZXMpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1wdHkoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhY2FydCB8fCAodHlwZW9mIGNhcnQgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGNhcnQpLmxlbmd0aCA9PT0gMClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbih1c2VySWQ6IHN0cmluZywgcHJldmlvdXNVc2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyAmJiAvLyBub3QgbG9nZ2VkIG91dFxuICAgICAgcHJldmlvdXNVc2VySWQgIT09IHVzZXJJZCAvLyAqanVzdCogbG9nZ2VkIGluIC8gc3dpdGNoZWQgdG8gQVNNIGVtdWxhdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==