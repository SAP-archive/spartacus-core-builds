/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, timer } from 'rxjs';
import { debounce, distinctUntilChanged, filter, map, shareReplay, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { OCC_CART_ID_CURRENT, OCC_USER_ID_ANONYMOUS, OCC_USER_ID_GUEST, } from '../../occ/utils/occ-constants';
import { EMAIL_PATTERN } from '../../util/regex-pattern';
import * as DeprecatedCartActions from '../store/actions/cart.action';
import { MultiCartSelectors } from '../store/selectors/index';
import { getCartIdByUserId, isTempCartId } from '../utils/utils';
import { MultiCartService } from './multi-cart.service';
export class ActiveCartService {
    /**
     * @param {?} store
     * @param {?} authService
     * @param {?} multiCartService
     */
    constructor(store, authService, multiCartService) {
        this.store = store;
        this.authService = authService;
        this.multiCartService = multiCartService;
        this.PREVIOUS_USER_ID_INITIAL_VALUE = 'PREVIOUS_USER_ID_INITIAL_VALUE';
        this.previousUserId = this.PREVIOUS_USER_ID_INITIAL_VALUE;
        this.userId = OCC_USER_ID_ANONYMOUS;
        this.activeCartId$ = this.store.pipe(select(MultiCartSelectors.getActiveCartId), map((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => {
            if (!cartId) {
                return OCC_CART_ID_CURRENT;
            }
            return cartId;
        })));
        this.cartSelector$ = this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.multiCartService.getCartEntity(cartId))));
        this.authService.getOccUserId().subscribe((/**
         * @param {?} userId
         * @return {?}
         */
        userId => {
            this.userId = userId;
            if (this.userId !== OCC_USER_ID_ANONYMOUS) {
                if (this.isJustLoggedIn(userId)) {
                    this.loadOrMerge(this.cartId);
                }
            }
            this.previousUserId = userId;
        }));
        this.activeCartId$.subscribe((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => {
            this.cartId = cartId;
        }));
        this.initActiveCart();
    }
    /**
     * @private
     * @return {?}
     */
    initActiveCart() {
        this.activeCart$ = this.cartSelector$.pipe(withLatestFrom(this.activeCartId$), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([cartEntity, activeCartId]) => {
            return {
                cart: cartEntity.value,
                cartId: activeCartId,
                isStable: !cartEntity.loading && cartEntity.processesCount === 0,
                loaded: (cartEntity.error || cartEntity.success) && !cartEntity.loading,
            };
        })), 
        // we want to emit empty carts even if those are not stable
        // on merge cart action we want to switch to empty cart so no one would use old cartId which can be already obsolete
        // so on merge action the resulting stream looks like this: old_cart -> {} -> new_cart
        filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ isStable, cart }) => isStable || this.isEmpty(cart))), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ cart, cartId, loaded, isStable }) => {
            if (isStable &&
                this.isEmpty(cart) &&
                !loaded &&
                !isTempCartId(cartId)) {
                this.load(cartId);
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ cart }) => (cart ? cart : {}))), tap((/**
         * @param {?} cart
         * @return {?}
         */
        cart => {
            if (cart) {
                this.cartUser = cart.user;
            }
        })), distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Returns active cart
     * @return {?}
     */
    getActive() {
        return this.activeCart$;
    }
    /**
     * Returns active cart id
     * @return {?}
     */
    getActiveCartId() {
        return this.activeCart$.pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => getCartIdByUserId(cart, this.userId))), distinctUntilChanged());
    }
    /**
     * Returns cart entries
     * @return {?}
     */
    getEntries() {
        return this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.multiCartService.getEntries(cartId))), distinctUntilChanged());
    }
    /**
     * Returns true when cart is stable (not loading and not pending processes on cart)
     * @return {?}
     */
    getLoaded() {
        // Debounce is used here, to avoid flickering when we switch between different cart entities.
        // For example during `addEntry` method. We might try to load current cart, so `current cart will be then active id.
        // After load fails we might create new cart so we switch to `temp-${uuid}` cart entity used when creating cart.
        // At the end we finally switch to cart `code` for cart id. Between those switches cart `getLoaded` function should not flicker.
        return this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.multiCartService.isStable(cartId))), debounce((/**
         * @param {?} state
         * @return {?}
         */
        state => (state ? timer(0) : EMPTY))), distinctUntilChanged());
    }
    /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
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
        else {
            this.store.dispatch(new DeprecatedCartActions.MergeCart({
                userId: this.userId,
                cartId: cartId,
                extraData: {
                    active: true,
                },
            }));
        }
    }
    /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
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
    /**
     * @private
     * @param {?} cartEntries
     * @return {?}
     */
    addEntriesGuestMerge(cartEntries) {
        /** @type {?} */
        const entriesToAdd = cartEntries.map((/**
         * @param {?} entry
         * @return {?}
         */
        entry => ({
            productCode: entry.product.code,
            quantity: entry.quantity,
        })));
        this.requireLoadedCartForGuestMerge().subscribe((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            this.multiCartService.addEntries(this.userId, getCartIdByUserId(cartState.value, this.userId), entriesToAdd);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    requireLoadedCartForGuestMerge() {
        return this.requireLoadedCart(this.cartSelector$.pipe(filter((/**
         * @return {?}
         */
        () => !this.isGuestCart()))));
    }
    /**
     * @private
     * @param {?} cartState
     * @return {?}
     */
    isCartCreating(cartState) {
        // cart creating is always represented with loading flags
        // when all loading flags are false it means that we restored wrong cart id
        // could happen on context change or reload right in the middle on cart create call
        return (isTempCartId(this.cartId) &&
            (cartState.loading || cartState.success || cartState.error));
    }
    /**
     * @private
     * @param {?=} customCartSelector$
     * @return {?}
     */
    requireLoadedCart(customCartSelector$) {
        // For guest cart merge we want to filter guest cart in the whole stream
        // We have to wait with load/create/addEntry after guest cart will be deleted.
        // That's why you can provide custom selector with this filter applied.
        /** @type {?} */
        const cartSelector$ = customCartSelector$
            ? customCartSelector$
            : this.cartSelector$;
        return cartSelector$.pipe(filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => !cartState.loading)), 
        // Avoid load/create call when there are new cart creating at the moment
        filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => !this.isCartCreating(cartState))), take(1), switchMap((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            // Try to load the cart, because it might have been created on another device between our login and add entry call
            if (this.isEmpty(cartState.value) &&
                this.userId !== OCC_USER_ID_ANONYMOUS) {
                this.load(undefined);
            }
            return cartSelector$;
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => !cartState.loading)), 
        // create cart can happen to anonymous user if it is not empty or to any other user if it is loaded and empty
        filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => this.userId === OCC_USER_ID_ANONYMOUS ||
            (cartState.success || cartState.error))), take(1), switchMap((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            if (this.isEmpty(cartState.value)) {
                this.multiCartService.createCart({
                    userId: this.userId,
                    extraData: {
                        active: true,
                    },
                });
            }
            return cartSelector$;
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => !cartState.loading)), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => cartState.success || cartState.error)), 
        // wait for active cart id to point to code/guid to avoid some work on temp cart entity
        filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => !this.isCartCreating(cartState))), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => !this.isEmpty(cartState.value))), take(1));
    }
    /**
     * Add entry to active cart
     *
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    addEntry(productCode, quantity) {
        this.requireLoadedCart().subscribe((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            this.multiCartService.addEntry(this.userId, getCartIdByUserId(cartState.value, this.userId), productCode, quantity);
        }));
    }
    /**
     * Remove entry
     *
     * @param {?} entry
     * @return {?}
     */
    removeEntry(entry) {
        this.multiCartService.removeEntry(this.userId, this.cartId, entry.entryNumber);
    }
    /**
     * Update entry
     *
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    updateEntry(entryNumber, quantity) {
        this.multiCartService.updateEntry(this.userId, this.cartId, entryNumber, quantity);
    }
    /**
     * Returns cart entry
     *
     * @param {?} productCode
     * @return {?}
     */
    getEntry(productCode) {
        return this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.multiCartService.getEntry(cartId, productCode))), distinctUntilChanged());
    }
    /**
     * Assign email to cart
     *
     * @param {?} email
     * @return {?}
     */
    addEmail(email) {
        this.multiCartService.assignEmail(this.cartId, this.userId, email);
    }
    /**
     * Get assigned user to cart
     * @return {?}
     */
    getAssignedUser() {
        return this.getActive().pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => cart.user)));
    }
    /**
     * Returns true for guest cart
     * @return {?}
     */
    isGuestCart() {
        return (this.cartUser &&
            (this.cartUser.name === OCC_USER_ID_GUEST ||
                this.isEmail(this.cartUser.uid
                    .split('|')
                    .slice(1)
                    .join('|'))));
    }
    /**
     * Add multiple entries to a cart
     *
     * @param {?} cartEntries : list of entries to add (OrderEntry[])
     * @return {?}
     */
    addEntries(cartEntries) {
        cartEntries.forEach((/**
         * @param {?} entry
         * @return {?}
         */
        entry => {
            this.addEntry(entry.product.code, entry.quantity);
        }));
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
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
     * @private
     * @param {?} cartId
     * @return {?}
     */
    guestCartMerge(cartId) {
        /** @type {?} */
        let cartEntries;
        this.getEntries()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} entries
         * @return {?}
         */
        entries => {
            cartEntries = entries;
        }));
        this.multiCartService.deleteCart(cartId, OCC_USER_ID_ANONYMOUS);
        this.addEntriesGuestMerge(cartEntries);
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    isEmpty(cart) {
        return (!cart || (typeof cart === 'object' && Object.keys(cart).length === 0));
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    isJustLoggedIn(userId) {
        return (this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    }
}
ActiveCartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ActiveCartService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: MultiCartService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.PREVIOUS_USER_ID_INITIAL_VALUE;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.previousUserId;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.activeCart$;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.userId;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.cartId;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.cartUser;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.activeCartId$;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.cartSelector$;
    /**
     * @type {?}
     * @protected
     */
    ActiveCartService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    ActiveCartService.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    ActiveCartService.prototype.multiCartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFDTCxRQUFRLEVBQ1Isb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUkvQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxLQUFLLHFCQUFxQixNQUFNLDhCQUE4QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd4RCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUF1QjVCLFlBQ1ksS0FBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBRmxDLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FB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SUFFTyxjQUFjLENBQUMsTUFBYztRQUNuQyxPQUFPLENBQ0wsSUFBSSxDQUFDLGNBQWMsS0FBSyxNQUFNLElBQUksbUJBQW1CO1lBQ3JELElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLDhCQUE4QixDQUFDLHlCQUF5QjtTQUN0RixDQUFDO0lBQ0osQ0FBQzs7O1lBM1lGLFVBQVU7Ozs7WUE5Qk0sS0FBSztZQWFiLFdBQVc7WUFlWCxnQkFBZ0I7Ozs7Ozs7SUFJdkIsMkRBQ21DOzs7OztJQUNuQywyQ0FBNkQ7Ozs7O0lBQzdELHdDQUFzQzs7Ozs7SUFFdEMsbUNBQXVDOzs7OztJQUN2QyxtQ0FBZTs7Ozs7SUFDZixxQ0FBdUI7Ozs7O0lBRXZCLDBDQVFFOzs7OztJQUNGLDBDQUVFOzs7OztJQUdBLGtDQUEwQzs7Ozs7SUFDMUMsd0NBQWtDOzs7OztJQUNsQyw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzaGFyZVJlcGxheSxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7XG4gIE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbiAgT0NDX1VTRVJfSURfR1VFU1QsXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFByb2Nlc3Nlc0xvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IEVNQUlMX1BBVFRFUk4gfSBmcm9tICcuLi8uLi91dGlsL3JlZ2V4LXBhdHRlcm4nO1xuaW1wb3J0ICogYXMgRGVwcmVjYXRlZENhcnRBY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvY2FydC5hY3Rpb24nO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQsIGlzVGVtcENhcnRJZCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL211bHRpLWNhcnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3RpdmVDYXJ0U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFID1cbiAgICAnUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFJztcbiAgcHJpdmF0ZSBwcmV2aW91c1VzZXJJZCA9IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFO1xuICBwcml2YXRlIGFjdGl2ZUNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuXG4gIHByaXZhdGUgdXNlcklkID0gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuICBwcml2YXRlIGNhcnRJZDtcbiAgcHJpdmF0ZSBjYXJ0VXNlcjogVXNlcjtcblxuICBwcml2YXRlIGFjdGl2ZUNhcnRJZCQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRBY3RpdmVDYXJ0SWQpLFxuICAgIG1hcChjYXJ0SWQgPT4ge1xuICAgICAgaWYgKCFjYXJ0SWQpIHtcbiAgICAgICAgcmV0dXJuIE9DQ19DQVJUX0lEX0NVUlJFTlQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FydElkO1xuICAgIH0pXG4gICk7XG4gIHByaXZhdGUgY2FydFNlbGVjdG9yJCA9IHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldENhcnRFbnRpdHkoY2FydElkKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbXVsdGlDYXJ0U2VydmljZTogTXVsdGlDYXJ0U2VydmljZVxuICApIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLnN1YnNjcmliZSh1c2VySWQgPT4ge1xuICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICBpZiAodGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgICBpZiAodGhpcy5pc0p1c3RMb2dnZWRJbih1c2VySWQpKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JNZXJnZSh0aGlzLmNhcnRJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgPSB1c2VySWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFjdGl2ZUNhcnRJZCQuc3Vic2NyaWJlKGNhcnRJZCA9PiB7XG4gICAgICB0aGlzLmNhcnRJZCA9IGNhcnRJZDtcbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdEFjdGl2ZUNhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEFjdGl2ZUNhcnQoKSB7XG4gICAgdGhpcy5hY3RpdmVDYXJ0JCA9IHRoaXMuY2FydFNlbGVjdG9yJC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hY3RpdmVDYXJ0SWQkKSxcbiAgICAgIG1hcCgoW2NhcnRFbnRpdHksIGFjdGl2ZUNhcnRJZF06IFtQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Piwgc3RyaW5nXSk6IHtcbiAgICAgICAgY2FydDogQ2FydDtcbiAgICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICAgIGlzU3RhYmxlOiBib29sZWFuO1xuICAgICAgICBsb2FkZWQ6IGJvb2xlYW47XG4gICAgICB9ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXJ0OiBjYXJ0RW50aXR5LnZhbHVlLFxuICAgICAgICAgIGNhcnRJZDogYWN0aXZlQ2FydElkLFxuICAgICAgICAgIGlzU3RhYmxlOiAhY2FydEVudGl0eS5sb2FkaW5nICYmIGNhcnRFbnRpdHkucHJvY2Vzc2VzQ291bnQgPT09IDAsXG4gICAgICAgICAgbG9hZGVkOlxuICAgICAgICAgICAgKGNhcnRFbnRpdHkuZXJyb3IgfHwgY2FydEVudGl0eS5zdWNjZXNzKSAmJiAhY2FydEVudGl0eS5sb2FkaW5nLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICAvLyB3ZSB3YW50IHRvIGVtaXQgZW1wdHkgY2FydHMgZXZlbiBpZiB0aG9zZSBhcmUgbm90IHN0YWJsZVxuICAgICAgLy8gb24gbWVyZ2UgY2FydCBhY3Rpb24gd2Ugd2FudCB0byBzd2l0Y2ggdG8gZW1wdHkgY2FydCBzbyBubyBvbmUgd291bGQgdXNlIG9sZCBjYXJ0SWQgd2hpY2ggY2FuIGJlIGFscmVhZHkgb2Jzb2xldGVcbiAgICAgIC8vIHNvIG9uIG1lcmdlIGFjdGlvbiB0aGUgcmVzdWx0aW5nIHN0cmVhbSBsb29rcyBsaWtlIHRoaXM6IG9sZF9jYXJ0IC0+IHt9IC0+IG5ld19jYXJ0XG4gICAgICBmaWx0ZXIoKHsgaXNTdGFibGUsIGNhcnQgfSkgPT4gaXNTdGFibGUgfHwgdGhpcy5pc0VtcHR5KGNhcnQpKSxcbiAgICAgIHRhcCgoeyBjYXJ0LCBjYXJ0SWQsIGxvYWRlZCwgaXNTdGFibGUgfSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNTdGFibGUgJiZcbiAgICAgICAgICB0aGlzLmlzRW1wdHkoY2FydCkgJiZcbiAgICAgICAgICAhbG9hZGVkICYmXG4gICAgICAgICAgIWlzVGVtcENhcnRJZChjYXJ0SWQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZChjYXJ0SWQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoeyBjYXJ0IH0pID0+IChjYXJ0ID8gY2FydCA6IHt9KSksXG4gICAgICB0YXAoY2FydCA9PiB7XG4gICAgICAgIGlmIChjYXJ0KSB7XG4gICAgICAgICAgdGhpcy5jYXJ0VXNlciA9IGNhcnQudXNlcjtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhY3RpdmUgY2FydFxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnQkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWN0aXZlIGNhcnQgaWRcbiAgICovXG4gIGdldEFjdGl2ZUNhcnRJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnQkLnBpcGUoXG4gICAgICBtYXAoY2FydCA9PiBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0LCB0aGlzLnVzZXJJZCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjYXJ0IGVudHJpZXNcbiAgICovXG4gIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRFbnRyaWVzKGNhcnRJZCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIHdoZW4gY2FydCBpcyBzdGFibGUgKG5vdCBsb2FkaW5nIGFuZCBub3QgcGVuZGluZyBwcm9jZXNzZXMgb24gY2FydClcbiAgICovXG4gIGdldExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAvLyBEZWJvdW5jZSBpcyB1c2VkIGhlcmUsIHRvIGF2b2lkIGZsaWNrZXJpbmcgd2hlbiB3ZSBzd2l0Y2ggYmV0d2VlbiBkaWZmZXJlbnQgY2FydCBlbnRpdGllcy5cbiAgICAvLyBGb3IgZXhhbXBsZSBkdXJpbmcgYGFkZEVudHJ5YCBtZXRob2QuIFdlIG1pZ2h0IHRyeSB0byBsb2FkIGN1cnJlbnQgY2FydCwgc28gYGN1cnJlbnQgY2FydCB3aWxsIGJlIHRoZW4gYWN0aXZlIGlkLlxuICAgIC8vIEFmdGVyIGxvYWQgZmFpbHMgd2UgbWlnaHQgY3JlYXRlIG5ldyBjYXJ0IHNvIHdlIHN3aXRjaCB0byBgdGVtcC0ke3V1aWR9YCBjYXJ0IGVudGl0eSB1c2VkIHdoZW4gY3JlYXRpbmcgY2FydC5cbiAgICAvLyBBdCB0aGUgZW5kIHdlIGZpbmFsbHkgc3dpdGNoIHRvIGNhcnQgYGNvZGVgIGZvciBjYXJ0IGlkLiBCZXR3ZWVuIHRob3NlIHN3aXRjaGVzIGNhcnQgYGdldExvYWRlZGAgZnVuY3Rpb24gc2hvdWxkIG5vdCBmbGlja2VyLlxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmlzU3RhYmxlKGNhcnRJZCkpLFxuICAgICAgZGVib3VuY2Uoc3RhdGUgPT4gKHN0YXRlID8gdGltZXIoMCkgOiBFTVBUWSkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRPck1lcmdlKGNhcnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gZm9yIGxvZ2luIHVzZXIsIHdoZW5ldmVyIHRoZXJlJ3MgYW4gZXhpc3RpbmcgY2FydCwgd2Ugd2lsbCBsb2FkIHRoZSB1c2VyXG4gICAgLy8gY3VycmVudCBjYXJ0IGFuZCBtZXJnZSBpdCBpbnRvIHRoZSBleGlzdGluZyBjYXJ0XG4gICAgaWYgKCFjYXJ0SWQgfHwgY2FydElkID09PSBPQ0NfQ0FSVF9JRF9DVVJSRU5UKSB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UubG9hZENhcnQoe1xuICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0d1ZXN0Q2FydCgpKSB7XG4gICAgICB0aGlzLmd1ZXN0Q2FydE1lcmdlKGNhcnRJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogY2FydElkLFxuICAgICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZChjYXJ0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UubG9hZENhcnQoe1xuICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IGNhcnRJZCA/IGNhcnRJZCA6IE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY2FydElkICYmIGNhcnRJZCAhPT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBjYXJ0SWQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRW50cmllc0d1ZXN0TWVyZ2UoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSkge1xuICAgIGNvbnN0IGVudHJpZXNUb0FkZCA9IGNhcnRFbnRyaWVzLm1hcChlbnRyeSA9PiAoe1xuICAgICAgcHJvZHVjdENvZGU6IGVudHJ5LnByb2R1Y3QuY29kZSxcbiAgICAgIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSxcbiAgICB9KSk7XG4gICAgdGhpcy5yZXF1aXJlTG9hZGVkQ2FydEZvckd1ZXN0TWVyZ2UoKS5zdWJzY3JpYmUoY2FydFN0YXRlID0+IHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hZGRFbnRyaWVzKFxuICAgICAgICB0aGlzLnVzZXJJZCxcbiAgICAgICAgZ2V0Q2FydElkQnlVc2VySWQoY2FydFN0YXRlLnZhbHVlLCB0aGlzLnVzZXJJZCksXG4gICAgICAgIGVudHJpZXNUb0FkZFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVxdWlyZUxvYWRlZENhcnRGb3JHdWVzdE1lcmdlKCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVMb2FkZWRDYXJ0KFxuICAgICAgdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoZmlsdGVyKCgpID0+ICF0aGlzLmlzR3Vlc3RDYXJ0KCkpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzQ2FydENyZWF0aW5nKGNhcnRTdGF0ZSkge1xuICAgIC8vIGNhcnQgY3JlYXRpbmcgaXMgYWx3YXlzIHJlcHJlc2VudGVkIHdpdGggbG9hZGluZyBmbGFnc1xuICAgIC8vIHdoZW4gYWxsIGxvYWRpbmcgZmxhZ3MgYXJlIGZhbHNlIGl0IG1lYW5zIHRoYXQgd2UgcmVzdG9yZWQgd3JvbmcgY2FydCBpZFxuICAgIC8vIGNvdWxkIGhhcHBlbiBvbiBjb250ZXh0IGNoYW5nZSBvciByZWxvYWQgcmlnaHQgaW4gdGhlIG1pZGRsZSBvbiBjYXJ0IGNyZWF0ZSBjYWxsXG4gICAgcmV0dXJuIChcbiAgICAgIGlzVGVtcENhcnRJZCh0aGlzLmNhcnRJZCkgJiZcbiAgICAgIChjYXJ0U3RhdGUubG9hZGluZyB8fCBjYXJ0U3RhdGUuc3VjY2VzcyB8fCBjYXJ0U3RhdGUuZXJyb3IpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVxdWlyZUxvYWRlZENhcnQoXG4gICAgY3VzdG9tQ2FydFNlbGVjdG9yJD86IE9ic2VydmFibGU8UHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4+XG4gICk6IE9ic2VydmFibGU8UHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4+IHtcbiAgICAvLyBGb3IgZ3Vlc3QgY2FydCBtZXJnZSB3ZSB3YW50IHRvIGZpbHRlciBndWVzdCBjYXJ0IGluIHRoZSB3aG9sZSBzdHJlYW1cbiAgICAvLyBXZSBoYXZlIHRvIHdhaXQgd2l0aCBsb2FkL2NyZWF0ZS9hZGRFbnRyeSBhZnRlciBndWVzdCBjYXJ0IHdpbGwgYmUgZGVsZXRlZC5cbiAgICAvLyBUaGF0J3Mgd2h5IHlvdSBjYW4gcHJvdmlkZSBjdXN0b20gc2VsZWN0b3Igd2l0aCB0aGlzIGZpbHRlciBhcHBsaWVkLlxuICAgIGNvbnN0IGNhcnRTZWxlY3RvciQgPSBjdXN0b21DYXJ0U2VsZWN0b3IkXG4gICAgICA/IGN1c3RvbUNhcnRTZWxlY3RvciRcbiAgICAgIDogdGhpcy5jYXJ0U2VsZWN0b3IkO1xuXG4gICAgcmV0dXJuIGNhcnRTZWxlY3RvciQucGlwZShcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIWNhcnRTdGF0ZS5sb2FkaW5nKSxcbiAgICAgIC8vIEF2b2lkIGxvYWQvY3JlYXRlIGNhbGwgd2hlbiB0aGVyZSBhcmUgbmV3IGNhcnQgY3JlYXRpbmcgYXQgdGhlIG1vbWVudFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhdGhpcy5pc0NhcnRDcmVhdGluZyhjYXJ0U3RhdGUpKSxcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoY2FydFN0YXRlID0+IHtcbiAgICAgICAgLy8gVHJ5IHRvIGxvYWQgdGhlIGNhcnQsIGJlY2F1c2UgaXQgbWlnaHQgaGF2ZSBiZWVuIGNyZWF0ZWQgb24gYW5vdGhlciBkZXZpY2UgYmV0d2VlbiBvdXIgbG9naW4gYW5kIGFkZCBlbnRyeSBjYWxsXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSAmJlxuICAgICAgICAgIHRoaXMudXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVNcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcnRTZWxlY3RvciQ7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIWNhcnRTdGF0ZS5sb2FkaW5nKSxcbiAgICAgIC8vIGNyZWF0ZSBjYXJ0IGNhbiBoYXBwZW4gdG8gYW5vbnltb3VzIHVzZXIgaWYgaXQgaXMgbm90IGVtcHR5IG9yIHRvIGFueSBvdGhlciB1c2VyIGlmIGl0IGlzIGxvYWRlZCBhbmQgZW1wdHlcbiAgICAgIGZpbHRlcihcbiAgICAgICAgY2FydFN0YXRlID0+XG4gICAgICAgICAgdGhpcy51c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB8fFxuICAgICAgICAgIChjYXJ0U3RhdGUuc3VjY2VzcyB8fCBjYXJ0U3RhdGUuZXJyb3IpXG4gICAgICApLFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcChjYXJ0U3RhdGUgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuY3JlYXRlQ2FydCh7XG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcnRTZWxlY3RvciQ7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIWNhcnRTdGF0ZS5sb2FkaW5nKSxcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gY2FydFN0YXRlLnN1Y2Nlc3MgfHwgY2FydFN0YXRlLmVycm9yKSxcbiAgICAgIC8vIHdhaXQgZm9yIGFjdGl2ZSBjYXJ0IGlkIHRvIHBvaW50IHRvIGNvZGUvZ3VpZCB0byBhdm9pZCBzb21lIHdvcmsgb24gdGVtcCBjYXJ0IGVudGl0eVxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhdGhpcy5pc0NhcnRDcmVhdGluZyhjYXJ0U3RhdGUpKSxcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIXRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpKSxcbiAgICAgIHRha2UoMSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBlbnRyeSB0byBhY3RpdmUgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqL1xuICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yZXF1aXJlTG9hZGVkQ2FydCgpLnN1YnNjcmliZShjYXJ0U3RhdGUgPT4ge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJ5KFxuICAgICAgICB0aGlzLnVzZXJJZCxcbiAgICAgICAgZ2V0Q2FydElkQnlVc2VySWQoY2FydFN0YXRlLnZhbHVlLCB0aGlzLnVzZXJJZCksXG4gICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICBxdWFudGl0eVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIGVudHJ5XG4gICAqL1xuICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShcbiAgICAgIHRoaXMudXNlcklkLFxuICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICBlbnRyeS5lbnRyeU51bWJlclxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIHVwZGF0ZUVudHJ5KGVudHJ5TnVtYmVyOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UudXBkYXRlRW50cnkoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY2FydElkLFxuICAgICAgZW50cnlOdW1iZXIsXG4gICAgICBxdWFudGl0eVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjYXJ0IGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKi9cbiAgZ2V0RW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldEVudHJ5KGNhcnRJZCwgcHJvZHVjdENvZGUpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBlbWFpbCB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBlbWFpbFxuICAgKi9cbiAgYWRkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hc3NpZ25FbWFpbCh0aGlzLmNhcnRJZCwgdGhpcy51c2VySWQsIGVtYWlsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXNzaWduZWQgdXNlciB0byBjYXJ0XG4gICAqL1xuICBnZXRBc3NpZ25lZFVzZXIoKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlKCkucGlwZShtYXAoY2FydCA9PiBjYXJ0LnVzZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgZm9yIGd1ZXN0IGNhcnRcbiAgICovXG4gIGlzR3Vlc3RDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNhcnRVc2VyICYmXG4gICAgICAodGhpcy5jYXJ0VXNlci5uYW1lID09PSBPQ0NfVVNFUl9JRF9HVUVTVCB8fFxuICAgICAgICB0aGlzLmlzRW1haWwoXG4gICAgICAgICAgdGhpcy5jYXJ0VXNlci51aWRcbiAgICAgICAgICAgIC5zcGxpdCgnfCcpXG4gICAgICAgICAgICAuc2xpY2UoMSlcbiAgICAgICAgICAgIC5qb2luKCd8JylcbiAgICAgICAgKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBtdWx0aXBsZSBlbnRyaWVzIHRvIGEgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gY2FydEVudHJpZXMgOiBsaXN0IG9mIGVudHJpZXMgdG8gYWRkIChPcmRlckVudHJ5W10pXG4gICAqL1xuICBhZGRFbnRyaWVzKGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W10pOiB2b2lkIHtcbiAgICBjYXJ0RW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIHRoaXMuYWRkRW50cnkoZW50cnkucHJvZHVjdC5jb2RlLCBlbnRyeS5xdWFudGl0eSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1haWwoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLm1hdGNoKEVNQUlMX1BBVFRFUk4pID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUT0RPOiBSZW1vdmUgb25jZSBiYWNrZW5kIGlzIHVwZGF0ZWRcbiAgLyoqXG4gICAqIFRlbXBvcmFyeSBtZXRob2QgdG8gbWVyZ2UgZ3Vlc3QgY2FydCB3aXRoIHVzZXIgY2FydCBiZWNhdXNlIG9mIGJhY2tlbmQgbGltaXRhdGlvblxuICAgKiBUaGlzIGlzIGZvciBhbiBlZGdlIGNhc2VcbiAgICovXG4gIHByaXZhdGUgZ3Vlc3RDYXJ0TWVyZ2UoY2FydElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXTtcbiAgICB0aGlzLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoZW50cmllcyA9PiB7XG4gICAgICAgIGNhcnRFbnRyaWVzID0gZW50cmllcztcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmRlbGV0ZUNhcnQoY2FydElkLCBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpO1xuXG4gICAgdGhpcy5hZGRFbnRyaWVzR3Vlc3RNZXJnZShjYXJ0RW50cmllcyk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1wdHkoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhY2FydCB8fCAodHlwZW9mIGNhcnQgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGNhcnQpLmxlbmd0aCA9PT0gMClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB1c2VySWQgJiYgLy8gKmp1c3QqIGxvZ2dlZCBpblxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgLy8gbm90IGFwcCBpbml0aWFsaXphdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==