import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, EMPTY, Subscription, timer } from 'rxjs';
import { auditTime, debounce, distinctUntilChanged, filter, map, shareReplay, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { UserIdService } from '../../auth/index';
import { OCC_CART_ID_CURRENT, OCC_USER_ID_ANONYMOUS, OCC_USER_ID_GUEST, } from '../../occ/utils/occ-constants';
import { EMAIL_PATTERN } from '../../util/regex-pattern';
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
        this.PREVIOUS_USER_ID_INITIAL_VALUE = 'PREVIOUS_USER_ID_INITIAL_VALUE';
        this.previousUserId = this.PREVIOUS_USER_ID_INITIAL_VALUE;
        this.subscription = new Subscription();
        this.userId = OCC_USER_ID_ANONYMOUS;
        this.activeCartId$ = this.store.pipe(select(MultiCartSelectors.getActiveCartId), filter((cartId) => typeof cartId !== 'undefined'), map((cartId) => {
            if (!cartId) {
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
        this.subscription.add(combineLatest([
            this.userIdService.getUserId(),
            this.activeCartId$.pipe(auditTime(0)),
        ])
            .pipe(map(([userId]) => userId))
            .subscribe((userId) => {
            this.userId = userId;
            if (this.userId !== OCC_USER_ID_ANONYMOUS) {
                if (this.isJustLoggedIn(userId)) {
                    this.loadOrMerge(this.cartId);
                }
            }
            this.previousUserId = userId;
        }));
        this.subscription.add(this.activeCartId$.subscribe((cartId) => {
            this.cartId = cartId;
        }));
        this.activeCart$ = this.cartSelector$.pipe(withLatestFrom(this.activeCartId$), map(([cartEntity, activeCartId]) => {
            return {
                cart: cartEntity.value,
                cartId: activeCartId,
                isStable: !cartEntity.loading && cartEntity.processesCount === 0,
                loaded: (cartEntity.error || cartEntity.success) && !cartEntity.loading,
            };
        }), 
        // we want to emit empty carts even if those are not stable
        // on merge cart action we want to switch to empty cart so no one would use old cartId which can be already obsolete
        // so on merge action the resulting stream looks like this: old_cart -> {} -> new_cart
        filter(({ isStable, cart }) => isStable || this.isEmpty(cart)), tap(({ cart, cartId, loaded, isStable }) => {
            if (isStable &&
                this.isEmpty(cart) &&
                !loaded &&
                !isTempCartId(cartId)) {
                this.load(cartId);
            }
        }), map(({ cart }) => (cart ? cart : {})), tap((cart) => {
            if (cart) {
                this.cartUser = cart.user;
            }
        }), distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));
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
        return this.activeCart$.pipe(map((cart) => getCartIdByUserId(cart, this.userId)), distinctUntilChanged());
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
    loadOrMerge(cartId) {
        // for login user, whenever there's an existing cart, we will load the user
        // current cart and merge it into the existing cart
        if (!cartId || cartId === OCC_CART_ID_CURRENT) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: OCC_CART_ID_CURRENT,
                extraData: {
                    active: true,
                },
            });
        }
        else if (this.isGuestCart()) {
            this.guestCartMerge(cartId);
        }
        else if (this.userId !== this.previousUserId &&
            this.userId !== OCC_USER_ID_ANONYMOUS &&
            this.previousUserId !== OCC_USER_ID_ANONYMOUS) {
            // This case covers the case when you are logged in and then asm user logs in and you don't want to merge, but only load emulated user cart
            // Similarly when you are logged in as asm user and you logout and want to resume previous user session
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId,
                extraData: {
                    active: true,
                },
            });
        }
        else {
            this.multiCartService.mergeToCurrentCart({
                userId: this.userId,
                cartId,
                extraData: {
                    active: true,
                },
            });
        }
    }
    load(cartId) {
        if (this.userId !== OCC_USER_ID_ANONYMOUS) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: cartId ? cartId : OCC_CART_ID_CURRENT,
                extraData: {
                    active: true,
                },
            });
        }
        else if (cartId && cartId !== OCC_CART_ID_CURRENT) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: cartId,
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
        this.requireLoadedCartForGuestMerge().subscribe((cartState) => {
            this.multiCartService.addEntries(this.userId, getCartIdByUserId(cartState.value, this.userId), entriesToAdd);
        });
    }
    requireLoadedCartForGuestMerge() {
        return this.requireLoadedCart(this.cartSelector$.pipe(filter(() => !this.isGuestCart())));
    }
    isCartCreating(cartState) {
        // cart creating is always represented with loading flags
        // when all loading flags are false it means that we restored wrong cart id
        // could happen on context change or reload right in the middle on cart create call
        return (isTempCartId(this.cartId) &&
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
        filter((cartState) => !this.isCartCreating(cartState)), take(1), switchMap((cartState) => {
            // Try to load the cart, because it might have been created on another device between our login and add entry call
            if (this.isEmpty(cartState.value) &&
                this.userId !== OCC_USER_ID_ANONYMOUS) {
                this.load(undefined);
            }
            return cartSelector$;
        }), filter((cartState) => !cartState.loading), 
        // create cart can happen to anonymous user if it is not empty or to any other user if it is loaded and empty
        filter((cartState) => this.userId === OCC_USER_ID_ANONYMOUS ||
            cartState.success ||
            cartState.error), take(1), switchMap((cartState) => {
            if (this.isEmpty(cartState.value)) {
                this.multiCartService.createCart({
                    userId: this.userId,
                    extraData: {
                        active: true,
                    },
                });
            }
            return cartSelector$;
        }), filter((cartState) => !cartState.loading), filter((cartState) => cartState.success || cartState.error), 
        // wait for active cart id to point to code/guid to avoid some work on temp cart entity
        filter((cartState) => !this.isCartCreating(cartState)), filter((cartState) => !this.isEmpty(cartState.value)), take(1));
    }
    /**
     * Add entry to active cart
     *
     * @param productCode
     * @param quantity
     */
    addEntry(productCode, quantity) {
        this.requireLoadedCart().subscribe((cartState) => {
            this.multiCartService.addEntry(this.userId, getCartIdByUserId(cartState.value, this.userId), productCode, quantity);
        });
    }
    /**
     * Remove entry
     *
     * @param entry
     */
    removeEntry(entry) {
        this.multiCartService.removeEntry(this.userId, this.cartId, entry.entryNumber);
    }
    /**
     * Update entry
     *
     * @param entryNumber
     * @param quantity
     */
    updateEntry(entryNumber, quantity) {
        this.multiCartService.updateEntry(this.userId, this.cartId, entryNumber, quantity);
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
        this.multiCartService.assignEmail(this.cartId, this.userId, email);
    }
    /**
     * Get assigned user to cart
     */
    getAssignedUser() {
        return this.getActive().pipe(map((cart) => cart.user));
    }
    /**
     * Returns true for guest cart
     */
    isGuestCart() {
        return (this.cartUser &&
            (this.cartUser.name === OCC_USER_ID_GUEST ||
                this.isEmail(this.cartUser.uid.split('|').slice(1).join('|'))));
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
    isJustLoggedIn(userId) {
        return (this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NhcnQvZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFdBQVcsRUFDWCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJakQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsaUJBQWlCLEdBQ2xCLE1BQU0sK0JBQStCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFLeEQsTUFBTSxPQUFPLGlCQUFpQjtJQXlCNUIsWUFDWSxLQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsYUFBNEI7UUFGNUIsVUFBSyxHQUFMLEtBQUssQ0FBMkI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtR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RUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxPQUFPLENBQUMsSUFBVTtRQUN4QixPQUFPLENBQ0wsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQ3RFLENBQUM7SUFDSixDQUFDO0lBRU8sY0FBYyxDQUFDLE1BQWM7UUFDbkMsT0FBTyxDQUNMLElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTSxJQUFJLG1CQUFtQjtZQUNyRCxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyx5QkFBeUI7U0FDdEYsQ0FBQztJQUNKLENBQUM7Ozs7WUE5YkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFoQ2dCLEtBQUs7WUE0QmIsZ0JBQWdCO1lBZGhCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBFTVBUWSwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgYXVkaXRUaW1lLFxuICBkZWJvdW5jZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzaGFyZVJlcGxheSxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVc2VySWRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9HVUVTVCxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJvY2Vzc2VzTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9wcm9jZXNzZXMtbG9hZGVyL3Byb2Nlc3Nlcy1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgRU1BSUxfUEFUVEVSTiB9IGZyb20gJy4uLy4uL3V0aWwvcmVnZXgtcGF0dGVybic7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBnZXRDYXJ0SWRCeVVzZXJJZCwgaXNUZW1wQ2FydElkIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VydmljZSB9IGZyb20gJy4vbXVsdGktY2FydC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNhcnRTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWFkb25seSBQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgPVxuICAgICdQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUnO1xuICBwcml2YXRlIHByZXZpb3VzVXNlcklkID0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUU7XG4gIHByaXZhdGUgYWN0aXZlQ2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcHJpdmF0ZSB1c2VySWQgPSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gIHByaXZhdGUgY2FydElkO1xuICBwcml2YXRlIGNhcnRVc2VyOiBVc2VyO1xuXG4gIHByaXZhdGUgYWN0aXZlQ2FydElkJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldEFjdGl2ZUNhcnRJZCksXG4gICAgZmlsdGVyKChjYXJ0SWQpID0+IHR5cGVvZiBjYXJ0SWQgIT09ICd1bmRlZmluZWQnKSxcbiAgICBtYXAoKGNhcnRJZCkgPT4ge1xuICAgICAgaWYgKCFjYXJ0SWQpIHtcbiAgICAgICAgcmV0dXJuIE9DQ19DQVJUX0lEX0NVUlJFTlQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FydElkO1xuICAgIH0pXG4gICk7XG4gIHByaXZhdGUgY2FydFNlbGVjdG9yJCA9IHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgIHN3aXRjaE1hcCgoY2FydElkKSA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0Q2FydEVudGl0eShjYXJ0SWQpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PixcbiAgICBwcm90ZWN0ZWQgbXVsdGlDYXJ0U2VydmljZTogTXVsdGlDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlcklkU2VydmljZTogVXNlcklkU2VydmljZVxuICApIHtcbiAgICB0aGlzLmluaXRBY3RpdmVDYXJ0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRBY3RpdmVDYXJ0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICB0aGlzLnVzZXJJZFNlcnZpY2UuZ2V0VXNlcklkKCksXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKGF1ZGl0VGltZSgwKSksXG4gICAgICBdKVxuICAgICAgICAucGlwZShtYXAoKFt1c2VySWRdKSA9PiB1c2VySWQpKVxuICAgICAgICAuc3Vic2NyaWJlKCh1c2VySWQpID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgICBpZiAodGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNKdXN0TG9nZ2VkSW4odXNlcklkKSkge1xuICAgICAgICAgICAgICB0aGlzLmxvYWRPck1lcmdlKHRoaXMuY2FydElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5hY3RpdmVDYXJ0SWQkLnN1YnNjcmliZSgoY2FydElkKSA9PiB7XG4gICAgICAgIHRoaXMuY2FydElkID0gY2FydElkO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5hY3RpdmVDYXJ0JCA9IHRoaXMuY2FydFNlbGVjdG9yJC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hY3RpdmVDYXJ0SWQkKSxcbiAgICAgIG1hcCgoW2NhcnRFbnRpdHksIGFjdGl2ZUNhcnRJZF06IFtQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Piwgc3RyaW5nXSk6IHtcbiAgICAgICAgY2FydDogQ2FydDtcbiAgICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICAgIGlzU3RhYmxlOiBib29sZWFuO1xuICAgICAgICBsb2FkZWQ6IGJvb2xlYW47XG4gICAgICB9ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXJ0OiBjYXJ0RW50aXR5LnZhbHVlLFxuICAgICAgICAgIGNhcnRJZDogYWN0aXZlQ2FydElkLFxuICAgICAgICAgIGlzU3RhYmxlOiAhY2FydEVudGl0eS5sb2FkaW5nICYmIGNhcnRFbnRpdHkucHJvY2Vzc2VzQ291bnQgPT09IDAsXG4gICAgICAgICAgbG9hZGVkOlxuICAgICAgICAgICAgKGNhcnRFbnRpdHkuZXJyb3IgfHwgY2FydEVudGl0eS5zdWNjZXNzKSAmJiAhY2FydEVudGl0eS5sb2FkaW5nLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICAvLyB3ZSB3YW50IHRvIGVtaXQgZW1wdHkgY2FydHMgZXZlbiBpZiB0aG9zZSBhcmUgbm90IHN0YWJsZVxuICAgICAgLy8gb24gbWVyZ2UgY2FydCBhY3Rpb24gd2Ugd2FudCB0byBzd2l0Y2ggdG8gZW1wdHkgY2FydCBzbyBubyBvbmUgd291bGQgdXNlIG9sZCBjYXJ0SWQgd2hpY2ggY2FuIGJlIGFscmVhZHkgb2Jzb2xldGVcbiAgICAgIC8vIHNvIG9uIG1lcmdlIGFjdGlvbiB0aGUgcmVzdWx0aW5nIHN0cmVhbSBsb29rcyBsaWtlIHRoaXM6IG9sZF9jYXJ0IC0+IHt9IC0+IG5ld19jYXJ0XG4gICAgICBmaWx0ZXIoKHsgaXNTdGFibGUsIGNhcnQgfSkgPT4gaXNTdGFibGUgfHwgdGhpcy5pc0VtcHR5KGNhcnQpKSxcbiAgICAgIHRhcCgoeyBjYXJ0LCBjYXJ0SWQsIGxvYWRlZCwgaXNTdGFibGUgfSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNTdGFibGUgJiZcbiAgICAgICAgICB0aGlzLmlzRW1wdHkoY2FydCkgJiZcbiAgICAgICAgICAhbG9hZGVkICYmXG4gICAgICAgICAgIWlzVGVtcENhcnRJZChjYXJ0SWQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZChjYXJ0SWQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoeyBjYXJ0IH0pID0+IChjYXJ0ID8gY2FydCA6IHt9KSksXG4gICAgICB0YXAoKGNhcnQpID0+IHtcbiAgICAgICAgaWYgKGNhcnQpIHtcbiAgICAgICAgICB0aGlzLmNhcnRVc2VyID0gY2FydC51c2VyO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFjdGl2ZSBjYXJ0XG4gICAqL1xuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydCQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhY3RpdmUgY2FydCBpZFxuICAgKi9cbiAgZ2V0QWN0aXZlQ2FydElkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydCQucGlwZShcbiAgICAgIG1hcCgoY2FydCkgPT4gZ2V0Q2FydElkQnlVc2VySWQoY2FydCwgdGhpcy51c2VySWQpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBlbnRyaWVzXG4gICAqL1xuICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChjYXJ0SWQpID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRFbnRyaWVzKGNhcnRJZCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBsYXN0IGNhcnQgZW50cnkgZm9yIHByb3ZpZGVkIHByb2R1Y3QgY29kZS5cbiAgICogTmVlZGVkIHRvIGNvdmVyIHByb2Nlc3NlcyB3aGVyZSBtdWx0aXBsZSBlbnRyaWVzIGNhbiBzaGFyZSB0aGUgc2FtZSBwcm9kdWN0IGNvZGVcbiAgICogKGUuZy4gcHJvbW90aW9ucyBvciBjb25maWd1cmFibGUgcHJvZHVjdHMpXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKi9cbiAgZ2V0TGFzdEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGNhcnRJZCkgPT5cbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldExhc3RFbnRyeShjYXJ0SWQsIHByb2R1Y3RDb2RlKVxuICAgICAgKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBnZXRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNhcnRTZWxlY3RvciQucGlwZShcbiAgICAgIG1hcCgoY2FydEVudGl0eSkgPT4gY2FydEVudGl0eS5sb2FkaW5nKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSB3aGVuIGNhcnQgaXMgc3RhYmxlIChub3QgbG9hZGluZyBhbmQgbm90IHBlbmRpbmcgcHJvY2Vzc2VzIG9uIGNhcnQpXG4gICAqL1xuICBpc1N0YWJsZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAvLyBEZWJvdW5jZSBpcyB1c2VkIGhlcmUsIHRvIGF2b2lkIGZsaWNrZXJpbmcgd2hlbiB3ZSBzd2l0Y2ggYmV0d2VlbiBkaWZmZXJlbnQgY2FydCBlbnRpdGllcy5cbiAgICAvLyBGb3IgZXhhbXBsZSBkdXJpbmcgYGFkZEVudHJ5YCBtZXRob2QuIFdlIG1pZ2h0IHRyeSB0byBsb2FkIGN1cnJlbnQgY2FydCwgc28gYGN1cnJlbnQgY2FydCB3aWxsIGJlIHRoZW4gYWN0aXZlIGlkLlxuICAgIC8vIEFmdGVyIGxvYWQgZmFpbHMgd2UgbWlnaHQgY3JlYXRlIG5ldyBjYXJ0IHNvIHdlIHN3aXRjaCB0byBgdGVtcC0ke3V1aWR9YCBjYXJ0IGVudGl0eSB1c2VkIHdoZW4gY3JlYXRpbmcgY2FydC5cbiAgICAvLyBBdCB0aGUgZW5kIHdlIGZpbmFsbHkgc3dpdGNoIHRvIGNhcnQgYGNvZGVgIGZvciBjYXJ0IGlkLiBCZXR3ZWVuIHRob3NlIHN3aXRjaGVzIGNhcnQgYGlzU3RhYmxlYCBmdW5jdGlvbiBzaG91bGQgbm90IGZsaWNrZXIuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChjYXJ0SWQpID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5pc1N0YWJsZShjYXJ0SWQpKSxcbiAgICAgIGRlYm91bmNlKChzdGF0ZSkgPT4gKHN0YXRlID8gdGltZXIoMCkgOiBFTVBUWSkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRPck1lcmdlKGNhcnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gZm9yIGxvZ2luIHVzZXIsIHdoZW5ldmVyIHRoZXJlJ3MgYW4gZXhpc3RpbmcgY2FydCwgd2Ugd2lsbCBsb2FkIHRoZSB1c2VyXG4gICAgLy8gY3VycmVudCBjYXJ0IGFuZCBtZXJnZSBpdCBpbnRvIHRoZSBleGlzdGluZyBjYXJ0XG4gICAgaWYgKCFjYXJ0SWQgfHwgY2FydElkID09PSBPQ0NfQ0FSVF9JRF9DVVJSRU5UKSB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UubG9hZENhcnQoe1xuICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0d1ZXN0Q2FydCgpKSB7XG4gICAgICB0aGlzLmd1ZXN0Q2FydE1lcmdlKGNhcnRJZCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMudXNlcklkICE9PSB0aGlzLnByZXZpb3VzVXNlcklkICYmXG4gICAgICB0aGlzLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTICYmXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVNcbiAgICApIHtcbiAgICAgIC8vIFRoaXMgY2FzZSBjb3ZlcnMgdGhlIGNhc2Ugd2hlbiB5b3UgYXJlIGxvZ2dlZCBpbiBhbmQgdGhlbiBhc20gdXNlciBsb2dzIGluIGFuZCB5b3UgZG9uJ3Qgd2FudCB0byBtZXJnZSwgYnV0IG9ubHkgbG9hZCBlbXVsYXRlZCB1c2VyIGNhcnRcbiAgICAgIC8vIFNpbWlsYXJseSB3aGVuIHlvdSBhcmUgbG9nZ2VkIGluIGFzIGFzbSB1c2VyIGFuZCB5b3UgbG9nb3V0IGFuZCB3YW50IHRvIHJlc3VtZSBwcmV2aW91cyB1c2VyIHNlc3Npb25cbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5tZXJnZVRvQ3VycmVudENhcnQoe1xuICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZChjYXJ0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UubG9hZENhcnQoe1xuICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IGNhcnRJZCA/IGNhcnRJZCA6IE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY2FydElkICYmIGNhcnRJZCAhPT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBjYXJ0SWQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRW50cmllc0d1ZXN0TWVyZ2UoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSkge1xuICAgIGNvbnN0IGVudHJpZXNUb0FkZCA9IGNhcnRFbnRyaWVzLm1hcCgoZW50cnkpID0+ICh7XG4gICAgICBwcm9kdWN0Q29kZTogZW50cnkucHJvZHVjdC5jb2RlLFxuICAgICAgcXVhbnRpdHk6IGVudHJ5LnF1YW50aXR5LFxuICAgIH0pKTtcbiAgICB0aGlzLnJlcXVpcmVMb2FkZWRDYXJ0Rm9yR3Vlc3RNZXJnZSgpLnN1YnNjcmliZSgoY2FydFN0YXRlKSA9PiB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYWRkRW50cmllcyhcbiAgICAgICAgdGhpcy51c2VySWQsXG4gICAgICAgIGdldENhcnRJZEJ5VXNlcklkKGNhcnRTdGF0ZS52YWx1ZSwgdGhpcy51c2VySWQpLFxuICAgICAgICBlbnRyaWVzVG9BZGRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVpcmVMb2FkZWRDYXJ0Rm9yR3Vlc3RNZXJnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlTG9hZGVkQ2FydChcbiAgICAgIHRoaXMuY2FydFNlbGVjdG9yJC5waXBlKGZpbHRlcigoKSA9PiAhdGhpcy5pc0d1ZXN0Q2FydCgpKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NhcnRDcmVhdGluZyhjYXJ0U3RhdGUpIHtcbiAgICAvLyBjYXJ0IGNyZWF0aW5nIGlzIGFsd2F5cyByZXByZXNlbnRlZCB3aXRoIGxvYWRpbmcgZmxhZ3NcbiAgICAvLyB3aGVuIGFsbCBsb2FkaW5nIGZsYWdzIGFyZSBmYWxzZSBpdCBtZWFucyB0aGF0IHdlIHJlc3RvcmVkIHdyb25nIGNhcnQgaWRcbiAgICAvLyBjb3VsZCBoYXBwZW4gb24gY29udGV4dCBjaGFuZ2Ugb3IgcmVsb2FkIHJpZ2h0IGluIHRoZSBtaWRkbGUgb24gY2FydCBjcmVhdGUgY2FsbFxuICAgIHJldHVybiAoXG4gICAgICBpc1RlbXBDYXJ0SWQodGhpcy5jYXJ0SWQpICYmXG4gICAgICAoY2FydFN0YXRlLmxvYWRpbmcgfHwgY2FydFN0YXRlLnN1Y2Nlc3MgfHwgY2FydFN0YXRlLmVycm9yKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVpcmVMb2FkZWRDYXJ0KFxuICAgIGN1c3RvbUNhcnRTZWxlY3RvciQ/OiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PlxuICApOiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PiB7XG4gICAgLy8gRm9yIGd1ZXN0IGNhcnQgbWVyZ2Ugd2Ugd2FudCB0byBmaWx0ZXIgZ3Vlc3QgY2FydCBpbiB0aGUgd2hvbGUgc3RyZWFtXG4gICAgLy8gV2UgaGF2ZSB0byB3YWl0IHdpdGggbG9hZC9jcmVhdGUvYWRkRW50cnkgYWZ0ZXIgZ3Vlc3QgY2FydCB3aWxsIGJlIGRlbGV0ZWQuXG4gICAgLy8gVGhhdCdzIHdoeSB5b3UgY2FuIHByb3ZpZGUgY3VzdG9tIHNlbGVjdG9yIHdpdGggdGhpcyBmaWx0ZXIgYXBwbGllZC5cbiAgICBjb25zdCBjYXJ0U2VsZWN0b3IkID0gY3VzdG9tQ2FydFNlbGVjdG9yJFxuICAgICAgPyBjdXN0b21DYXJ0U2VsZWN0b3IkXG4gICAgICA6IHRoaXMuY2FydFNlbGVjdG9yJDtcblxuICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICBmaWx0ZXIoKGNhcnRTdGF0ZSkgPT4gIWNhcnRTdGF0ZS5sb2FkaW5nKSxcbiAgICAgIC8vIEF2b2lkIGxvYWQvY3JlYXRlIGNhbGwgd2hlbiB0aGVyZSBhcmUgbmV3IGNhcnQgY3JlYXRpbmcgYXQgdGhlIG1vbWVudFxuICAgICAgZmlsdGVyKChjYXJ0U3RhdGUpID0+ICF0aGlzLmlzQ2FydENyZWF0aW5nKGNhcnRTdGF0ZSkpLFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoY2FydFN0YXRlKSA9PiB7XG4gICAgICAgIC8vIFRyeSB0byBsb2FkIHRoZSBjYXJ0LCBiZWNhdXNlIGl0IG1pZ2h0IGhhdmUgYmVlbiBjcmVhdGVkIG9uIGFub3RoZXIgZGV2aWNlIGJldHdlZW4gb3VyIGxvZ2luIGFuZCBhZGQgZW50cnkgY2FsbFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkgJiZcbiAgICAgICAgICB0aGlzLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoKGNhcnRTdGF0ZSkgPT4gIWNhcnRTdGF0ZS5sb2FkaW5nKSxcbiAgICAgIC8vIGNyZWF0ZSBjYXJ0IGNhbiBoYXBwZW4gdG8gYW5vbnltb3VzIHVzZXIgaWYgaXQgaXMgbm90IGVtcHR5IG9yIHRvIGFueSBvdGhlciB1c2VyIGlmIGl0IGlzIGxvYWRlZCBhbmQgZW1wdHlcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKGNhcnRTdGF0ZSkgPT5cbiAgICAgICAgICB0aGlzLnVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTIHx8XG4gICAgICAgICAgY2FydFN0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICBjYXJ0U3RhdGUuZXJyb3JcbiAgICAgICksXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKChjYXJ0U3RhdGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoKGNhcnRTdGF0ZSkgPT4gIWNhcnRTdGF0ZS5sb2FkaW5nKSxcbiAgICAgIGZpbHRlcigoY2FydFN0YXRlKSA9PiBjYXJ0U3RhdGUuc3VjY2VzcyB8fCBjYXJ0U3RhdGUuZXJyb3IpLFxuICAgICAgLy8gd2FpdCBmb3IgYWN0aXZlIGNhcnQgaWQgdG8gcG9pbnQgdG8gY29kZS9ndWlkIHRvIGF2b2lkIHNvbWUgd29yayBvbiB0ZW1wIGNhcnQgZW50aXR5XG4gICAgICBmaWx0ZXIoKGNhcnRTdGF0ZSkgPT4gIXRoaXMuaXNDYXJ0Q3JlYXRpbmcoY2FydFN0YXRlKSksXG4gICAgICBmaWx0ZXIoKGNhcnRTdGF0ZSkgPT4gIXRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpKSxcbiAgICAgIHRha2UoMSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBlbnRyeSB0byBhY3RpdmUgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqL1xuICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yZXF1aXJlTG9hZGVkQ2FydCgpLnN1YnNjcmliZSgoY2FydFN0YXRlKSA9PiB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYWRkRW50cnkoXG4gICAgICAgIHRoaXMudXNlcklkLFxuICAgICAgICBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0U3RhdGUudmFsdWUsIHRoaXMudXNlcklkKSxcbiAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgIHF1YW50aXR5XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gZW50cnlcbiAgICovXG4gIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KFxuICAgICAgdGhpcy51c2VySWQsXG4gICAgICB0aGlzLmNhcnRJZCxcbiAgICAgIGVudHJ5LmVudHJ5TnVtYmVyXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgIHRoaXMudXNlcklkLFxuICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICBlbnRyeU51bWJlcixcbiAgICAgIHF1YW50aXR5XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqL1xuICBnZXRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChjYXJ0SWQpID0+XG4gICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRFbnRyeShjYXJ0SWQsIHByb2R1Y3RDb2RlKVxuICAgICAgKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBlbWFpbCB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBlbWFpbFxuICAgKi9cbiAgYWRkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hc3NpZ25FbWFpbCh0aGlzLmNhcnRJZCwgdGhpcy51c2VySWQsIGVtYWlsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXNzaWduZWQgdXNlciB0byBjYXJ0XG4gICAqL1xuICBnZXRBc3NpZ25lZFVzZXIoKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlKCkucGlwZShtYXAoKGNhcnQpID0+IGNhcnQudXNlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBmb3IgZ3Vlc3QgY2FydFxuICAgKi9cbiAgaXNHdWVzdENhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY2FydFVzZXIgJiZcbiAgICAgICh0aGlzLmNhcnRVc2VyLm5hbWUgPT09IE9DQ19VU0VSX0lEX0dVRVNUIHx8XG4gICAgICAgIHRoaXMuaXNFbWFpbCh0aGlzLmNhcnRVc2VyLnVpZC5zcGxpdCgnfCcpLnNsaWNlKDEpLmpvaW4oJ3wnKSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbXVsdGlwbGUgZW50cmllcyB0byBhIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGNhcnRFbnRyaWVzIDogbGlzdCBvZiBlbnRyaWVzIHRvIGFkZCAoT3JkZXJFbnRyeVtdKVxuICAgKi9cbiAgYWRkRW50cmllcyhjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdKTogdm9pZCB7XG4gICAgY2FydEVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIHRoaXMuYWRkRW50cnkoZW50cnkucHJvZHVjdC5jb2RlLCBlbnRyeS5xdWFudGl0eSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1haWwoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLm1hdGNoKEVNQUlMX1BBVFRFUk4pID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUT0RPOiBSZW1vdmUgb25jZSBiYWNrZW5kIGlzIHVwZGF0ZWRcbiAgLyoqXG4gICAqIFRlbXBvcmFyeSBtZXRob2QgdG8gbWVyZ2UgZ3Vlc3QgY2FydCB3aXRoIHVzZXIgY2FydCBiZWNhdXNlIG9mIGJhY2tlbmQgbGltaXRhdGlvblxuICAgKiBUaGlzIGlzIGZvciBhbiBlZGdlIGNhc2VcbiAgICovXG4gIHByaXZhdGUgZ3Vlc3RDYXJ0TWVyZ2UoY2FydElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXTtcbiAgICB0aGlzLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKGVudHJpZXMpID0+IHtcbiAgICAgICAgY2FydEVudHJpZXMgPSBlbnRyaWVzO1xuICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZGVsZXRlQ2FydChjYXJ0SWQsIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyk7XG4gICAgICAgIHRoaXMuYWRkRW50cmllc0d1ZXN0TWVyZ2UoY2FydEVudHJpZXMpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1wdHkoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhY2FydCB8fCAodHlwZW9mIGNhcnQgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGNhcnQpLmxlbmd0aCA9PT0gMClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB1c2VySWQgJiYgLy8gKmp1c3QqIGxvZ2dlZCBpblxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgLy8gbm90IGFwcCBpbml0aWFsaXphdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==