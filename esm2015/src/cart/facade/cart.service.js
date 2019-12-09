/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { debounceTime, filter, map, shareReplay, take, tap, } from 'rxjs/operators';
import { ActiveCartService } from './active-cart.service';
import { AuthService } from '../../auth/index';
import { OCC_USER_ID_ANONYMOUS, OCC_CART_ID_CURRENT, } from '../../occ/utils/occ-constants';
import { CartActions } from '../store/actions/index';
import { CartSelectors } from '../store/selectors/index';
import { CartDataService } from './cart-data.service';
/**
 * @deprecated since version 1.4
 * Use ActiveCartService instead (API is almost the same)
 * From 1.4 version CartService uses ActiveCartService if it is available
 * Fixes and improvements will be only implemented in ActiveCartService
 */
export class CartService {
    /**
     * @param {?} store
     * @param {?} cartData
     * @param {?} authService
     * @param {?=} activeCartService
     */
    constructor(store, cartData, authService, activeCartService) {
        this.store = store;
        this.cartData = cartData;
        this.authService = authService;
        this.activeCartService = activeCartService;
        this.PREVIOUS_USER_ID_INITIAL_VALUE = 'PREVIOUS_USER_ID_INITIAL_VALUE';
        this.previousUserId = this.PREVIOUS_USER_ID_INITIAL_VALUE;
        this._activeCart$ = combineLatest([
            this.store.select(CartSelectors.getCartContent),
            this.store.select(CartSelectors.getCartLoading),
            this.authService.getUserToken(),
            this.store.select(CartSelectors.getCartLoaded),
        ]).pipe(
        // combineLatest emits multiple times on each property update instead of one emit
        // additionally dispatching actions that changes selectors used here needs to happen in order
        // for this asyncScheduler is used here
        debounceTime(0), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, loading]) => !loading)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([cart, , userToken, loaded]) => {
            if (this.isJustLoggedIn(userToken.userId)) {
                this.loadOrMerge();
            }
            else if ((this.isCreated(cart) && this.isIncomplete(cart)) ||
                (this.isLoggedIn(userToken.userId) &&
                    !this.isCreated(cart) &&
                    !loaded) // try to load current cart for logged in user (loaded flag to prevent infinite loop when user doesn't have cart)
            ) {
                this.load();
            }
            this.previousUserId = userToken.userId;
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([cart]) => !this.isCreated(cart) ||
            (this.isCreated(cart) && !this.isIncomplete(cart)))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([cart]) => cart)), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    getActive() {
        if (this.activeCartService) {
            return this.activeCartService.getActive();
        }
        return this._activeCart$;
    }
    /**
     * @return {?}
     */
    getEntries() {
        if (this.activeCartService) {
            return this.activeCartService.getEntries();
        }
        return this.store.pipe(select(CartSelectors.getCartEntries));
    }
    // TODO: to remove in 2.0
    // doesn't seem useful for end developers
    // there shouldn't be a need for such low level information
    /**
     * @return {?}
     */
    getCartMergeComplete() {
        return this.store.pipe(select(CartSelectors.getCartMergeComplete));
    }
    /**
     * @return {?}
     */
    getLoaded() {
        if (this.activeCartService) {
            return this.activeCartService.getLoaded();
        }
        return this.store.pipe(select(CartSelectors.getCartLoaded));
    }
    /**
     * @return {?}
     */
    getAddEntryLoaded() {
        if (this.activeCartService) {
            return this.activeCartService.getAddEntryLoaded();
        }
        return this.getLoaded();
    }
    /**
     * @private
     * @return {?}
     */
    loadOrMerge() {
        // for login user, whenever there's an existing cart, we will load the user
        // current cart and merge it into the existing cart
        if (!this.isCreated(this.cartData.cart)) {
            this.store.dispatch(new CartActions.LoadCart({
                userId: this.cartData.userId,
                cartId: OCC_CART_ID_CURRENT,
            }));
        }
        else if (this.isGuestCart()) {
            this.guestCartMerge();
        }
        else {
            this.store.dispatch(new CartActions.MergeCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.guid,
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    load() {
        if (this.cartData.userId !== OCC_USER_ID_ANONYMOUS) {
            this.store.dispatch(new CartActions.LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId
                    ? this.cartData.cartId
                    : OCC_CART_ID_CURRENT,
            }));
        }
        else {
            this.store.dispatch(new CartActions.LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
            }));
        }
    }
    /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    addEntry(productCode, quantity) {
        if (this.activeCartService) {
            return this.activeCartService.addEntry(productCode, quantity);
        }
        this.store
            .pipe(select(CartSelectors.getActiveCartState), tap((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            if (!this.isCreated(cartState.value.content) && !cartState.loading) {
                this.store.dispatch(new CartActions.CreateCart({ userId: this.cartData.userId }));
            }
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => this.isCreated(cartState.value.content))), take(1))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.store.dispatch(new CartActions.CartAddEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                productCode: productCode,
                quantity: quantity,
            }));
        }));
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    removeEntry(entry) {
        if (this.activeCartService) {
            return this.activeCartService.removeEntry(entry);
        }
        this.store.dispatch(new CartActions.CartRemoveEntry({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
            entry: entry.entryNumber,
        }));
    }
    /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    updateEntry(entryNumber, quantity) {
        if (this.activeCartService) {
            return this.activeCartService.updateEntry(parseInt(entryNumber, 10), quantity);
        }
        if (quantity > 0) {
            this.store.dispatch(new CartActions.CartUpdateEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber,
                qty: quantity,
            }));
        }
        else {
            this.store.dispatch(new CartActions.CartRemoveEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber,
            }));
        }
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    getEntry(productCode) {
        if (this.activeCartService) {
            return this.activeCartService.getEntry(productCode);
        }
        return this.store.pipe(select(CartSelectors.getCartEntrySelectorFactory(productCode)));
    }
    /**
     * @param {?} email
     * @return {?}
     */
    addEmail(email) {
        if (this.activeCartService) {
            return this.activeCartService.addEmail(email);
        }
        this.store.dispatch(new CartActions.AddEmailToCart({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
            email: email,
        }));
    }
    /**
     * @return {?}
     */
    getAssignedUser() {
        if (this.activeCartService) {
            return this.activeCartService.getAssignedUser();
        }
        return this.store.pipe(select(CartSelectors.getCartUser));
    }
    /**
     * @return {?}
     */
    isGuestCart() {
        if (this.activeCartService) {
            return this.activeCartService.isGuestCart();
        }
        return this.cartData.isGuestCart;
    }
    /**
     * Add multiple entries to a cart
     * Requires a created cart
     * @param {?} cartEntries : list of entries to add (OrderEntry[])
     * @return {?}
     */
    addEntries(cartEntries) {
        if (this.activeCartService) {
            return this.activeCartService.addEntries(cartEntries);
        }
        /** @type {?} */
        let newEntries = 0;
        this.getEntries()
            .pipe(tap((/**
         * @return {?}
         */
        () => {
            // Keep adding entries until the user cart contains the same number of entries
            // as the guest cart did
            if (newEntries < cartEntries.length) {
                this.store.dispatch(new CartActions.CartAddEntry({
                    userId: this.cartData.userId,
                    cartId: this.cartData.cartId,
                    productCode: cartEntries[newEntries].product.code,
                    quantity: cartEntries[newEntries].quantity,
                }));
                newEntries++;
            }
        })), filter((/**
         * @return {?}
         */
        () => newEntries === cartEntries.length)), take(1))
            .subscribe();
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    isCreated(cart) {
        return cart && typeof cart.guid !== 'undefined';
    }
    /**
     * Cart is incomplete if it contains only `guid`, `code` and `user` properties, which come from local storage.
     * To get cart content, we need to load cart from backend.
     * @private
     * @param {?} cart
     * @return {?}
     */
    isIncomplete(cart) {
        return cart && Object.keys(cart).length <= 3;
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    isJustLoggedIn(userId) {
        return (this.isLoggedIn(userId) &&
            this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    isLoggedIn(userId) {
        return typeof userId !== 'undefined';
    }
    // TODO: Remove once backend is updated
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     * @private
     * @return {?}
     */
    guestCartMerge() {
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
        this.store.dispatch(new CartActions.DeleteCart({
            userId: OCC_USER_ID_ANONYMOUS,
            cartId: this.cartData.cart.guid,
        }));
        this.store
            .pipe(select(CartSelectors.getActiveCartState), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => !cartState.loading)), tap((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            // If the cart is not created it needs to be created
            // This step should happen before adding entries to avoid conflicts in the requests
            if (!this.isCreated(cartState.value.content)) {
                this.store.dispatch(new CartActions.CreateCart({ userId: this.cartData.userId }));
            }
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => this.isCreated(cartState.value.content))), take(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.addEntries(cartEntries);
        }));
    }
    /**
     * @param {?} voucherId
     * @return {?}
     */
    addVoucher(voucherId) {
        this.store.dispatch(new CartActions.CartAddVoucher({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
            voucherId: voucherId,
        }));
    }
}
CartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService },
    { type: AuthService },
    { type: ActiveCartService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartService.prototype.PREVIOUS_USER_ID_INITIAL_VALUE;
    /**
     * @type {?}
     * @private
     */
    CartService.prototype.previousUserId;
    /**
     * @type {?}
     * @private
     */
    CartService.prototype._activeCart$;
    /**
     * @type {?}
     * @protected
     */
    CartService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    CartService.prototype.cartData;
    /**
     * @type {?}
     * @protected
     */
    CartService.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    CartService.prototype.activeCartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL2NhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUNOLEdBQUcsRUFDSCxXQUFXLEVBQ1gsSUFBSSxFQUNKLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUkvQyxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG1CQUFtQixHQUNwQixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBU3RELE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBTXRCLFlBQ1ksS0FBMkIsRUFDM0IsUUFBeUIsRUFDekIsV0FBd0IsRUFDeEIsaUJBQXFDO1FBSHJDLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7UUFUaEMsbUNBQThCLEdBQzdDLGdDQUFnQyxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsSUFB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Q0gsQ0FBQztJQUNKLENBQUM7OztZQWhWRixVQUFVOzs7O1lBOUJNLEtBQUs7WUFzQmIsZUFBZTtZQVhmLFdBQVc7WUFEWCxpQkFBaUI7Ozs7Ozs7SUFzQnhCLHFEQUNtQzs7Ozs7SUFDbkMscUNBQTZEOzs7OztJQUM3RCxtQ0FBdUM7Ozs7O0lBR3JDLDRCQUFxQzs7Ozs7SUFDckMsK0JBQW1DOzs7OztJQUNuQyxrQ0FBa0M7Ozs7O0lBQ2xDLHdDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzaGFyZVJlcGxheSxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4vYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7XG4gIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbiAgT0NDX0NBUlRfSURfQ1VSUkVOVCxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aENhcnQgfSBmcm9tICcuLi9zdG9yZS9jYXJ0LXN0YXRlJztcbmltcG9ydCB7IENhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWRhdGEuc2VydmljZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAqIFVzZSBBY3RpdmVDYXJ0U2VydmljZSBpbnN0ZWFkIChBUEkgaXMgYWxtb3N0IHRoZSBzYW1lKVxuICogRnJvbSAxLjQgdmVyc2lvbiBDYXJ0U2VydmljZSB1c2VzIEFjdGl2ZUNhcnRTZXJ2aWNlIGlmIGl0IGlzIGF2YWlsYWJsZVxuICogRml4ZXMgYW5kIGltcHJvdmVtZW50cyB3aWxsIGJlIG9ubHkgaW1wbGVtZW50ZWQgaW4gQWN0aXZlQ2FydFNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgPVxuICAgICdQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUnO1xuICBwcml2YXRlIHByZXZpb3VzVXNlcklkID0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUU7XG4gIHByaXZhdGUgX2FjdGl2ZUNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2FydD4sXG4gICAgcHJvdGVjdGVkIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U/OiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHtcbiAgICB0aGlzLl9hY3RpdmVDYXJ0JCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0Q29udGVudCksXG4gICAgICB0aGlzLnN0b3JlLnNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRMb2FkaW5nKSxcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCksXG4gICAgICB0aGlzLnN0b3JlLnNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRMb2FkZWQpLFxuICAgIF0pLnBpcGUoXG4gICAgICAvLyBjb21iaW5lTGF0ZXN0IGVtaXRzIG11bHRpcGxlIHRpbWVzIG9uIGVhY2ggcHJvcGVydHkgdXBkYXRlIGluc3RlYWQgb2Ygb25lIGVtaXRcbiAgICAgIC8vIGFkZGl0aW9uYWxseSBkaXNwYXRjaGluZyBhY3Rpb25zIHRoYXQgY2hhbmdlcyBzZWxlY3RvcnMgdXNlZCBoZXJlIG5lZWRzIHRvIGhhcHBlbiBpbiBvcmRlclxuICAgICAgLy8gZm9yIHRoaXMgYXN5bmNTY2hlZHVsZXIgaXMgdXNlZCBoZXJlXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICBmaWx0ZXIoKFssIGxvYWRpbmddKSA9PiAhbG9hZGluZyksXG4gICAgICB0YXAoKFtjYXJ0LCAsIHVzZXJUb2tlbiwgbG9hZGVkXSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0p1c3RMb2dnZWRJbih1c2VyVG9rZW4udXNlcklkKSkge1xuICAgICAgICAgIHRoaXMubG9hZE9yTWVyZ2UoKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAodGhpcy5pc0NyZWF0ZWQoY2FydCkgJiYgdGhpcy5pc0luY29tcGxldGUoY2FydCkpIHx8XG4gICAgICAgICAgKHRoaXMuaXNMb2dnZWRJbih1c2VyVG9rZW4udXNlcklkKSAmJlxuICAgICAgICAgICAgIXRoaXMuaXNDcmVhdGVkKGNhcnQpICYmXG4gICAgICAgICAgICAhbG9hZGVkKSAvLyB0cnkgdG8gbG9hZCBjdXJyZW50IGNhcnQgZm9yIGxvZ2dlZCBpbiB1c2VyIChsb2FkZWQgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB1c2VyIGRvZXNuJ3QgaGF2ZSBjYXJ0KVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgPSB1c2VyVG9rZW4udXNlcklkO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChbY2FydF0pID0+XG4gICAgICAgICAgIXRoaXMuaXNDcmVhdGVkKGNhcnQpIHx8XG4gICAgICAgICAgKHRoaXMuaXNDcmVhdGVkKGNhcnQpICYmICF0aGlzLmlzSW5jb21wbGV0ZShjYXJ0KSlcbiAgICAgICksXG4gICAgICBtYXAoKFtjYXJ0XSkgPT4gY2FydCksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hY3RpdmVDYXJ0JDtcbiAgfVxuXG4gIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0RW50cmllcygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRyaWVzKSk7XG4gIH1cblxuICAvLyBUT0RPOiB0byByZW1vdmUgaW4gMi4wXG4gIC8vIGRvZXNuJ3Qgc2VlbSB1c2VmdWwgZm9yIGVuZCBkZXZlbG9wZXJzXG4gIC8vIHRoZXJlIHNob3VsZG4ndCBiZSBhIG5lZWQgZm9yIHN1Y2ggbG93IGxldmVsIGluZm9ybWF0aW9uXG4gIGdldENhcnRNZXJnZUNvbXBsZXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydE1lcmdlQ29tcGxldGUpKTtcbiAgfVxuXG4gIGdldExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0TG9hZGVkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydExvYWRlZCkpO1xuICB9XG5cbiAgZ2V0QWRkRW50cnlMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFkZEVudHJ5TG9hZGVkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldExvYWRlZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkT3JNZXJnZSgpOiB2b2lkIHtcbiAgICAvLyBmb3IgbG9naW4gdXNlciwgd2hlbmV2ZXIgdGhlcmUncyBhbiBleGlzdGluZyBjYXJ0LCB3ZSB3aWxsIGxvYWQgdGhlIHVzZXJcbiAgICAvLyBjdXJyZW50IGNhcnQgYW5kIG1lcmdlIGl0IGludG8gdGhlIGV4aXN0aW5nIGNhcnRcbiAgICBpZiAoIXRoaXMuaXNDcmVhdGVkKHRoaXMuY2FydERhdGEuY2FydCkpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0d1ZXN0Q2FydCgpKSB7XG4gICAgICB0aGlzLmd1ZXN0Q2FydE1lcmdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZUNhcnQoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnQuZ3VpZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhcnREYXRhLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZFxuICAgICAgICAgICAgPyB0aGlzLmNhcnREYXRhLmNhcnRJZFxuICAgICAgICAgICAgOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuYWRkRW50cnkocHJvZHVjdENvZGUsIHF1YW50aXR5KTtcbiAgICB9XG4gICAgdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldEFjdGl2ZUNhcnRTdGF0ZSksXG4gICAgICAgIHRhcChjYXJ0U3RhdGUgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5pc0NyZWF0ZWQoY2FydFN0YXRlLnZhbHVlLmNvbnRlbnQpICYmICFjYXJ0U3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoeyB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gdGhpcy5pc0NyZWF0ZWQoY2FydFN0YXRlLnZhbHVlLmNvbnRlbnQpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShfID0+IHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5KHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgICAgcHJvZHVjdENvZGU6IHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGVudHJ5KTtcbiAgICB9XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnkoe1xuICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICBlbnRyeTogZW50cnkuZW50cnlOdW1iZXIsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVFbnRyeShlbnRyeU51bWJlcjogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KFxuICAgICAgICBwYXJzZUludChlbnRyeU51bWJlciwgMTApLFxuICAgICAgICBxdWFudGl0eVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHF1YW50aXR5ID4gMCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeSh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIGVudHJ5OiBlbnRyeU51bWJlcixcbiAgICAgICAgICBxdHk6IHF1YW50aXR5LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeSh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIGVudHJ5OiBlbnRyeU51bWJlcixcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeT4ge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRFbnRyeShwcm9kdWN0Q29kZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0RW50cnlTZWxlY3RvckZhY3RvcnkocHJvZHVjdENvZGUpKVxuICAgICk7XG4gIH1cblxuICBhZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmFkZEVtYWlsKGVtYWlsKTtcbiAgICB9XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldEFzc2lnbmVkVXNlcigpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QXNzaWduZWRVc2VyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydFVzZXIpKTtcbiAgfVxuXG4gIGlzR3Vlc3RDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jYXJ0RGF0YS5pc0d1ZXN0Q2FydDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbXVsdGlwbGUgZW50cmllcyB0byBhIGNhcnRcbiAgICogUmVxdWlyZXMgYSBjcmVhdGVkIGNhcnRcbiAgICogQHBhcmFtIGNhcnRFbnRyaWVzIDogbGlzdCBvZiBlbnRyaWVzIHRvIGFkZCAoT3JkZXJFbnRyeVtdKVxuICAgKi9cbiAgYWRkRW50cmllcyhjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmFkZEVudHJpZXMoY2FydEVudHJpZXMpO1xuICAgIH1cbiAgICBsZXQgbmV3RW50cmllcyA9IDA7XG4gICAgdGhpcy5nZXRFbnRyaWVzKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgIC8vIEtlZXAgYWRkaW5nIGVudHJpZXMgdW50aWwgdGhlIHVzZXIgY2FydCBjb250YWlucyB0aGUgc2FtZSBudW1iZXIgb2YgZW50cmllc1xuICAgICAgICAgIC8vIGFzIHRoZSBndWVzdCBjYXJ0IGRpZFxuICAgICAgICAgIGlmIChuZXdFbnRyaWVzIDwgY2FydEVudHJpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgcHJvZHVjdENvZGU6IGNhcnRFbnRyaWVzW25ld0VudHJpZXNdLnByb2R1Y3QuY29kZSxcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogY2FydEVudHJpZXNbbmV3RW50cmllc10ucXVhbnRpdHksXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbmV3RW50cmllcysrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoKSA9PiBuZXdFbnRyaWVzID09PSBjYXJ0RW50cmllcy5sZW5ndGgpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGlzQ3JlYXRlZChjYXJ0OiBDYXJ0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNhcnQgJiYgdHlwZW9mIGNhcnQuZ3VpZCAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICAvKipcbiAgICogQ2FydCBpcyBpbmNvbXBsZXRlIGlmIGl0IGNvbnRhaW5zIG9ubHkgYGd1aWRgLCBgY29kZWAgYW5kIGB1c2VyYCBwcm9wZXJ0aWVzLCB3aGljaCBjb21lIGZyb20gbG9jYWwgc3RvcmFnZS5cbiAgICogVG8gZ2V0IGNhcnQgY29udGVudCwgd2UgbmVlZCB0byBsb2FkIGNhcnQgZnJvbSBiYWNrZW5kLlxuICAgKi9cbiAgcHJpdmF0ZSBpc0luY29tcGxldGUoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjYXJ0ICYmIE9iamVjdC5rZXlzKGNhcnQpLmxlbmd0aCA8PSAzO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzTG9nZ2VkSW4odXNlcklkKSAmJlxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdXNlcklkICYmIC8vICpqdXN0KiBsb2dnZWQgaW5cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFIC8vIG5vdCBhcHAgaW5pdGlhbGl6YXRpb25cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0xvZ2dlZEluKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB1c2VySWQgIT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLy8gVE9ETzogUmVtb3ZlIG9uY2UgYmFja2VuZCBpcyB1cGRhdGVkXG4gIC8qKlxuICAgKiBUZW1wb3JhcnkgbWV0aG9kIHRvIG1lcmdlIGd1ZXN0IGNhcnQgd2l0aCB1c2VyIGNhcnQgYmVjYXVzZSBvZiBiYWNrZW5kIGxpbWl0YXRpb25cbiAgICogVGhpcyBpcyBmb3IgYW4gZWRnZSBjYXNlXG4gICAqL1xuICBwcml2YXRlIGd1ZXN0Q2FydE1lcmdlKCk6IHZvaWQge1xuICAgIGxldCBjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdO1xuICAgIHRoaXMuZ2V0RW50cmllcygpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShlbnRyaWVzID0+IHtcbiAgICAgICAgY2FydEVudHJpZXMgPSBlbnRyaWVzO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkRlbGV0ZUNhcnQoe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnQuZ3VpZCxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc3RvcmVcbiAgICAgIC5waXBlKFxuICAgICAgICBzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRBY3RpdmVDYXJ0U3RhdGUpLFxuICAgICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAgIHRhcChjYXJ0U3RhdGUgPT4ge1xuICAgICAgICAgIC8vIElmIHRoZSBjYXJ0IGlzIG5vdCBjcmVhdGVkIGl0IG5lZWRzIHRvIGJlIGNyZWF0ZWRcbiAgICAgICAgICAvLyBUaGlzIHN0ZXAgc2hvdWxkIGhhcHBlbiBiZWZvcmUgYWRkaW5nIGVudHJpZXMgdG8gYXZvaWQgY29uZmxpY3RzIGluIHRoZSByZXF1ZXN0c1xuICAgICAgICAgIGlmICghdGhpcy5pc0NyZWF0ZWQoY2FydFN0YXRlLnZhbHVlLmNvbnRlbnQpKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCh7IHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiB0aGlzLmlzQ3JlYXRlZChjYXJ0U3RhdGUudmFsdWUuY29udGVudCkpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGRFbnRyaWVzKGNhcnRFbnRyaWVzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYWRkVm91Y2hlcih2b3VjaGVySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXIoe1xuICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICB2b3VjaGVySWQ6IHZvdWNoZXJJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19