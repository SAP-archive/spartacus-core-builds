/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var CartService = /** @class */ (function () {
    function CartService(store, cartData, authService, activeCartService) {
        var _this = this;
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
        function (_a) {
            var _b = tslib_1.__read(_a, 2), loading = _b[1];
            return !loading;
        })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 4), cart = _b[0], userToken = _b[2], loaded = _b[3];
            if (_this.isJustLoggedIn(userToken.userId)) {
                _this.loadOrMerge();
            }
            else if ((_this.isCreated(cart) && _this.isIncomplete(cart)) ||
                (_this.isLoggedIn(userToken.userId) &&
                    !_this.isCreated(cart) &&
                    !loaded) // try to load current cart for logged in user (loaded flag to prevent infinite loop when user doesn't have cart)
            ) {
                _this.load();
            }
            _this.previousUserId = userToken.userId;
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 1), cart = _b[0];
            return !_this.isCreated(cart) ||
                (_this.isCreated(cart) && !_this.isIncomplete(cart));
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 1), cart = _b[0];
            return cart;
        })), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    CartService.prototype.getActive = /**
     * @return {?}
     */
    function () {
        if (this.activeCartService) {
            return this.activeCartService.getActive();
        }
        return this._activeCart$;
    };
    /**
     * @return {?}
     */
    CartService.prototype.getEntries = /**
     * @return {?}
     */
    function () {
        if (this.activeCartService) {
            return this.activeCartService.getEntries();
        }
        return this.store.pipe(select(CartSelectors.getCartEntries));
    };
    // TODO: to remove in 2.0
    // doesn't seem useful for end developers
    // there shouldn't be a need for such low level information
    // TODO: to remove in 2.0
    // doesn't seem useful for end developers
    // there shouldn't be a need for such low level information
    /**
     * @return {?}
     */
    CartService.prototype.getCartMergeComplete = 
    // TODO: to remove in 2.0
    // doesn't seem useful for end developers
    // there shouldn't be a need for such low level information
    /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(CartSelectors.getCartMergeComplete));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getLoaded = /**
     * @return {?}
     */
    function () {
        if (this.activeCartService) {
            return this.activeCartService.getLoaded();
        }
        return this.store.pipe(select(CartSelectors.getCartLoaded));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getAddEntryLoaded = /**
     * @return {?}
     */
    function () {
        if (this.activeCartService) {
            return this.activeCartService.getAddEntryLoaded();
        }
        return this.getLoaded();
    };
    /**
     * @private
     * @return {?}
     */
    CartService.prototype.loadOrMerge = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @return {?}
     */
    CartService.prototype.load = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    CartService.prototype.addEntry = /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    function (productCode, quantity) {
        var _this = this;
        if (this.activeCartService) {
            return this.activeCartService.addEntry(productCode, quantity);
        }
        this.store
            .pipe(select(CartSelectors.getActiveCartState), tap((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) {
            if (!_this.isCreated(cartState.value.content) && !cartState.loading) {
                _this.store.dispatch(new CartActions.CreateCart({ userId: _this.cartData.userId }));
            }
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) { return _this.isCreated(cartState.value.content); })), take(1))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.store.dispatch(new CartActions.CartAddEntry({
                userId: _this.cartData.userId,
                cartId: _this.cartData.cartId,
                productCode: productCode,
                quantity: quantity,
            }));
        }));
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    CartService.prototype.removeEntry = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        if (this.activeCartService) {
            return this.activeCartService.removeEntry(entry);
        }
        this.store.dispatch(new CartActions.CartRemoveEntry({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
            entry: entry.entryNumber,
        }));
    };
    /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    CartService.prototype.updateEntry = /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    function (entryNumber, quantity) {
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
    };
    /**
     * @param {?} productCode
     * @return {?}
     */
    CartService.prototype.getEntry = /**
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        if (this.activeCartService) {
            return this.activeCartService.getEntry(productCode);
        }
        return this.store.pipe(select(CartSelectors.getCartEntrySelectorFactory(productCode)));
    };
    /**
     * @param {?} email
     * @return {?}
     */
    CartService.prototype.addEmail = /**
     * @param {?} email
     * @return {?}
     */
    function (email) {
        if (this.activeCartService) {
            return this.activeCartService.addEmail(email);
        }
        this.store.dispatch(new CartActions.AddEmailToCart({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
            email: email,
        }));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getAssignedUser = /**
     * @return {?}
     */
    function () {
        if (this.activeCartService) {
            return this.activeCartService.getAssignedUser();
        }
        return this.store.pipe(select(CartSelectors.getCartUser));
    };
    /**
     * @return {?}
     */
    CartService.prototype.isGuestCart = /**
     * @return {?}
     */
    function () {
        if (this.activeCartService) {
            return this.activeCartService.isGuestCart();
        }
        return this.cartData.isGuestCart;
    };
    /**
     * Add multiple entries to a cart
     * Requires a created cart
     * @param cartEntries : list of entries to add (OrderEntry[])
     */
    /**
     * Add multiple entries to a cart
     * Requires a created cart
     * @param {?} cartEntries : list of entries to add (OrderEntry[])
     * @return {?}
     */
    CartService.prototype.addEntries = /**
     * Add multiple entries to a cart
     * Requires a created cart
     * @param {?} cartEntries : list of entries to add (OrderEntry[])
     * @return {?}
     */
    function (cartEntries) {
        var _this = this;
        if (this.activeCartService) {
            return this.activeCartService.addEntries(cartEntries);
        }
        /** @type {?} */
        var newEntries = 0;
        this.getEntries()
            .pipe(tap((/**
         * @return {?}
         */
        function () {
            // Keep adding entries until the user cart contains the same number of entries
            // as the guest cart did
            if (newEntries < cartEntries.length) {
                _this.store.dispatch(new CartActions.CartAddEntry({
                    userId: _this.cartData.userId,
                    cartId: _this.cartData.cartId,
                    productCode: cartEntries[newEntries].product.code,
                    quantity: cartEntries[newEntries].quantity,
                }));
                newEntries++;
            }
        })), filter((/**
         * @return {?}
         */
        function () { return newEntries === cartEntries.length; })), take(1))
            .subscribe();
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    CartService.prototype.isCreated = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return cart && typeof cart.guid !== 'undefined';
    };
    /**
     * Cart is incomplete if it contains only `guid`, `code` and `user` properties, which come from local storage.
     * To get cart content, we need to load cart from backend.
     */
    /**
     * Cart is incomplete if it contains only `guid`, `code` and `user` properties, which come from local storage.
     * To get cart content, we need to load cart from backend.
     * @private
     * @param {?} cart
     * @return {?}
     */
    CartService.prototype.isIncomplete = /**
     * Cart is incomplete if it contains only `guid`, `code` and `user` properties, which come from local storage.
     * To get cart content, we need to load cart from backend.
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return cart && Object.keys(cart).length <= 3;
    };
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    CartService.prototype.isJustLoggedIn = /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return (this.isLoggedIn(userId) &&
            this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    };
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    CartService.prototype.isLoggedIn = /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return typeof userId !== 'undefined';
    };
    // TODO: Remove once backend is updated
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     */
    // TODO: Remove once backend is updated
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     * @private
     * @return {?}
     */
    CartService.prototype.guestCartMerge = 
    // TODO: Remove once backend is updated
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var cartEntries;
        this.getEntries()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} entries
         * @return {?}
         */
        function (entries) {
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
        function (cartState) { return !cartState.loading; })), tap((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) {
            // If the cart is not created it needs to be created
            // This step should happen before adding entries to avoid conflicts in the requests
            if (!_this.isCreated(cartState.value.content)) {
                _this.store.dispatch(new CartActions.CreateCart({ userId: _this.cartData.userId }));
            }
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) { return _this.isCreated(cartState.value.content); })), take(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.addEntries(cartEntries);
        }));
    };
    /**
     * @param {?} voucherId
     * @return {?}
     */
    CartService.prototype.addVoucher = /**
     * @param {?} voucherId
     * @return {?}
     */
    function (voucherId) {
        this.store.dispatch(new CartActions.CartAddVoucher({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
            voucherId: voucherId,
        }));
    };
    CartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService },
        { type: AuthService },
        { type: ActiveCartService }
    ]; };
    return CartService;
}());
export { CartService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL2NhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixHQUFHLEVBQ0gsV0FBVyxFQUNYLElBQUksRUFDSixHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJL0MsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSwrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQVF0RDtJQU9FLHFCQUNZLEtBQTJCLEVBQzNCLFFBQXlCLEVBQ3pCLFdBQXdCLEVBQ3hCLGlCQUFxQztRQUpqRCxpQkF1Q0M7UUF0Q1csVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFDM0IsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQVRoQyxtQ0FBOEIsR0FDN0MsZ0NBQWdDLENBQUM7UUFDM0IsbUJBQWMsR0FBRyxJQUFJLENBQUMs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QUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUF2QyxDQUF1QyxFQUFDLEVBQzVELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVM7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRUQsZ0NBQVU7Ozs7SUFBVixVQUFXLFNBQWlCO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQzVCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBaFZGLFVBQVU7Ozs7Z0JBOUJNLEtBQUs7Z0JBc0JiLGVBQWU7Z0JBWGYsV0FBVztnQkFEWCxpQkFBaUI7O0lBcVcxQixrQkFBQztDQUFBLEFBalZELElBaVZDO1NBaFZZLFdBQVc7Ozs7OztJQUN0QixxREFDbUM7Ozs7O0lBQ25DLHFDQUE2RDs7Ozs7SUFDN0QsbUNBQXVDOzs7OztJQUdyQyw0QkFBcUM7Ozs7O0lBQ3JDLCtCQUFtQzs7Ozs7SUFDbkMsa0NBQWtDOzs7OztJQUNsQyx3Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2hhcmVSZXBsYXksXG4gIHRha2UsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQge1xuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIE9DQ19DQVJUX0lEX0NVUlJFTlQsXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IENhcnREYXRhU2VydmljZSB9IGZyb20gJy4vY2FydC1kYXRhLnNlcnZpY2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gKiBVc2UgQWN0aXZlQ2FydFNlcnZpY2UgaW5zdGVhZCAoQVBJIGlzIGFsbW9zdCB0aGUgc2FtZSlcbiAqIEZyb20gMS40IHZlcnNpb24gQ2FydFNlcnZpY2UgdXNlcyBBY3RpdmVDYXJ0U2VydmljZSBpZiBpdCBpcyBhdmFpbGFibGVcbiAqIEZpeGVzIGFuZCBpbXByb3ZlbWVudHMgd2lsbCBiZSBvbmx5IGltcGxlbWVudGVkIGluIEFjdGl2ZUNhcnRTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFID1cbiAgICAnUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFJztcbiAgcHJpdmF0ZSBwcmV2aW91c1VzZXJJZCA9IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFO1xuICBwcml2YXRlIF9hY3RpdmVDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aENhcnQ+LFxuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlPzogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5fYWN0aXZlQ2FydCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydENvbnRlbnQpLFxuICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0TG9hZGluZyksXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJUb2tlbigpLFxuICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0TG9hZGVkKSxcbiAgICBdKS5waXBlKFxuICAgICAgLy8gY29tYmluZUxhdGVzdCBlbWl0cyBtdWx0aXBsZSB0aW1lcyBvbiBlYWNoIHByb3BlcnR5IHVwZGF0ZSBpbnN0ZWFkIG9mIG9uZSBlbWl0XG4gICAgICAvLyBhZGRpdGlvbmFsbHkgZGlzcGF0Y2hpbmcgYWN0aW9ucyB0aGF0IGNoYW5nZXMgc2VsZWN0b3JzIHVzZWQgaGVyZSBuZWVkcyB0byBoYXBwZW4gaW4gb3JkZXJcbiAgICAgIC8vIGZvciB0aGlzIGFzeW5jU2NoZWR1bGVyIGlzIHVzZWQgaGVyZVxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgZmlsdGVyKChbLCBsb2FkaW5nXSkgPT4gIWxvYWRpbmcpLFxuICAgICAgdGFwKChbY2FydCwgLCB1c2VyVG9rZW4sIGxvYWRlZF0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNKdXN0TG9nZ2VkSW4odXNlclRva2VuLnVzZXJJZCkpIHtcbiAgICAgICAgICB0aGlzLmxvYWRPck1lcmdlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgKHRoaXMuaXNDcmVhdGVkKGNhcnQpICYmIHRoaXMuaXNJbmNvbXBsZXRlKGNhcnQpKSB8fFxuICAgICAgICAgICh0aGlzLmlzTG9nZ2VkSW4odXNlclRva2VuLnVzZXJJZCkgJiZcbiAgICAgICAgICAgICF0aGlzLmlzQ3JlYXRlZChjYXJ0KSAmJlxuICAgICAgICAgICAgIWxvYWRlZCkgLy8gdHJ5IHRvIGxvYWQgY3VycmVudCBjYXJ0IGZvciBsb2dnZWQgaW4gdXNlciAobG9hZGVkIGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4gdXNlciBkb2Vzbid0IGhhdmUgY2FydClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZpb3VzVXNlcklkID0gdXNlclRva2VuLnVzZXJJZDtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAoW2NhcnRdKSA9PlxuICAgICAgICAgICF0aGlzLmlzQ3JlYXRlZChjYXJ0KSB8fFxuICAgICAgICAgICh0aGlzLmlzQ3JlYXRlZChjYXJ0KSAmJiAhdGhpcy5pc0luY29tcGxldGUoY2FydCkpXG4gICAgICApLFxuICAgICAgbWFwKChbY2FydF0pID0+IGNhcnQpLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ2FydCQ7XG4gIH1cblxuICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEVudHJpZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0RW50cmllcykpO1xuICB9XG5cbiAgLy8gVE9ETzogdG8gcmVtb3ZlIGluIDIuMFxuICAvLyBkb2Vzbid0IHNlZW0gdXNlZnVsIGZvciBlbmQgZGV2ZWxvcGVyc1xuICAvLyB0aGVyZSBzaG91bGRuJ3QgYmUgYSBuZWVkIGZvciBzdWNoIGxvdyBsZXZlbCBpbmZvcm1hdGlvblxuICBnZXRDYXJ0TWVyZ2VDb21wbGV0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRNZXJnZUNvbXBsZXRlKSk7XG4gIH1cblxuICBnZXRMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldExvYWRlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRMb2FkZWQpKTtcbiAgfVxuXG4gIGdldEFkZEVudHJ5TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBZGRFbnRyeUxvYWRlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRMb2FkZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE9yTWVyZ2UoKTogdm9pZCB7XG4gICAgLy8gZm9yIGxvZ2luIHVzZXIsIHdoZW5ldmVyIHRoZXJlJ3MgYW4gZXhpc3RpbmcgY2FydCwgd2Ugd2lsbCBsb2FkIHRoZSB1c2VyXG4gICAgLy8gY3VycmVudCBjYXJ0IGFuZCBtZXJnZSBpdCBpbnRvIHRoZSBleGlzdGluZyBjYXJ0XG4gICAgaWYgKCF0aGlzLmlzQ3JlYXRlZCh0aGlzLmNhcnREYXRhLmNhcnQpKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNHdWVzdENhcnQoKSkge1xuICAgICAgdGhpcy5ndWVzdENhcnRNZXJnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0Lmd1aWQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYXJ0RGF0YS51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWRcbiAgICAgICAgICAgID8gdGhpcy5jYXJ0RGF0YS5jYXJ0SWRcbiAgICAgICAgICAgIDogT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmFkZEVudHJ5KHByb2R1Y3RDb2RlLCBxdWFudGl0eSk7XG4gICAgfVxuICAgIHRoaXMuc3RvcmVcbiAgICAgIC5waXBlKFxuICAgICAgICBzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRBY3RpdmVDYXJ0U3RhdGUpLFxuICAgICAgICB0YXAoY2FydFN0YXRlID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNDcmVhdGVkKGNhcnRTdGF0ZS52YWx1ZS5jb250ZW50KSAmJiAhY2FydFN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KHsgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoY2FydFN0YXRlID0+IHRoaXMuaXNDcmVhdGVkKGNhcnRTdGF0ZS52YWx1ZS5jb250ZW50KSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSh7XG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kdWN0Q29kZSxcbiAgICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShlbnRyeSk7XG4gICAgfVxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgZW50cnk6IGVudHJ5LmVudHJ5TnVtYmVyLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgICAgcGFyc2VJbnQoZW50cnlOdW1iZXIsIDEwKSxcbiAgICAgICAgcXVhbnRpdHlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChxdWFudGl0eSA+IDApIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnkoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBlbnRyeTogZW50cnlOdW1iZXIsXG4gICAgICAgICAgcXR5OiBxdWFudGl0eSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnkoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBlbnRyeTogZW50cnlOdW1iZXIsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+IHtcbiAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0RW50cnkocHJvZHVjdENvZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydEVudHJ5U2VsZWN0b3JGYWN0b3J5KHByb2R1Y3RDb2RlKSlcbiAgICApO1xuICB9XG5cbiAgYWRkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5hZGRFbWFpbChlbWFpbCk7XG4gICAgfVxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnQoe1xuICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRBc3NpZ25lZFVzZXIoKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFzc2lnbmVkVXNlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRVc2VyKSk7XG4gIH1cblxuICBpc0d1ZXN0Q2FydCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2FydERhdGEuaXNHdWVzdENhcnQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG11bHRpcGxlIGVudHJpZXMgdG8gYSBjYXJ0XG4gICAqIFJlcXVpcmVzIGEgY3JlYXRlZCBjYXJ0XG4gICAqIEBwYXJhbSBjYXJ0RW50cmllcyA6IGxpc3Qgb2YgZW50cmllcyB0byBhZGQgKE9yZGVyRW50cnlbXSlcbiAgICovXG4gIGFkZEVudHJpZXMoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5hZGRFbnRyaWVzKGNhcnRFbnRyaWVzKTtcbiAgICB9XG4gICAgbGV0IG5ld0VudHJpZXMgPSAwO1xuICAgIHRoaXMuZ2V0RW50cmllcygpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAvLyBLZWVwIGFkZGluZyBlbnRyaWVzIHVudGlsIHRoZSB1c2VyIGNhcnQgY29udGFpbnMgdGhlIHNhbWUgbnVtYmVyIG9mIGVudHJpZXNcbiAgICAgICAgICAvLyBhcyB0aGUgZ3Vlc3QgY2FydCBkaWRcbiAgICAgICAgICBpZiAobmV3RW50cmllcyA8IGNhcnRFbnRyaWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiBjYXJ0RW50cmllc1tuZXdFbnRyaWVzXS5wcm9kdWN0LmNvZGUsXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IGNhcnRFbnRyaWVzW25ld0VudHJpZXNdLnF1YW50aXR5LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG5ld0VudHJpZXMrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gbmV3RW50cmllcyA9PT0gY2FydEVudHJpZXMubGVuZ3RoKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NyZWF0ZWQoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjYXJ0ICYmIHR5cGVvZiBjYXJ0Lmd1aWQgIT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIENhcnQgaXMgaW5jb21wbGV0ZSBpZiBpdCBjb250YWlucyBvbmx5IGBndWlkYCwgYGNvZGVgIGFuZCBgdXNlcmAgcHJvcGVydGllcywgd2hpY2ggY29tZSBmcm9tIGxvY2FsIHN0b3JhZ2UuXG4gICAqIFRvIGdldCBjYXJ0IGNvbnRlbnQsIHdlIG5lZWQgdG8gbG9hZCBjYXJ0IGZyb20gYmFja2VuZC5cbiAgICovXG4gIHByaXZhdGUgaXNJbmNvbXBsZXRlKGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2FydCAmJiBPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGggPD0gMztcbiAgfVxuXG4gIHByaXZhdGUgaXNKdXN0TG9nZ2VkSW4odXNlcklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5pc0xvZ2dlZEluKHVzZXJJZCkgJiZcbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHVzZXJJZCAmJiAvLyAqanVzdCogbG9nZ2VkIGluXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSAvLyBub3QgYXBwIGluaXRpYWxpemF0aW9uXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdXNlcklkICE9PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIC8vIFRPRE86IFJlbW92ZSBvbmNlIGJhY2tlbmQgaXMgdXBkYXRlZFxuICAvKipcbiAgICogVGVtcG9yYXJ5IG1ldGhvZCB0byBtZXJnZSBndWVzdCBjYXJ0IHdpdGggdXNlciBjYXJ0IGJlY2F1c2Ugb2YgYmFja2VuZCBsaW1pdGF0aW9uXG4gICAqIFRoaXMgaXMgZm9yIGFuIGVkZ2UgY2FzZVxuICAgKi9cbiAgcHJpdmF0ZSBndWVzdENhcnRNZXJnZSgpOiB2b2lkIHtcbiAgICBsZXQgY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXTtcbiAgICB0aGlzLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoZW50cmllcyA9PiB7XG4gICAgICAgIGNhcnRFbnRyaWVzID0gZW50cmllcztcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0KHtcbiAgICAgICAgdXNlcklkOiBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0Lmd1aWQsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnN0b3JlXG4gICAgICAucGlwZShcbiAgICAgICAgc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0QWN0aXZlQ2FydFN0YXRlKSxcbiAgICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhY2FydFN0YXRlLmxvYWRpbmcpLFxuICAgICAgICB0YXAoY2FydFN0YXRlID0+IHtcbiAgICAgICAgICAvLyBJZiB0aGUgY2FydCBpcyBub3QgY3JlYXRlZCBpdCBuZWVkcyB0byBiZSBjcmVhdGVkXG4gICAgICAgICAgLy8gVGhpcyBzdGVwIHNob3VsZCBoYXBwZW4gYmVmb3JlIGFkZGluZyBlbnRyaWVzIHRvIGF2b2lkIGNvbmZsaWN0cyBpbiB0aGUgcmVxdWVzdHNcbiAgICAgICAgICBpZiAoIXRoaXMuaXNDcmVhdGVkKGNhcnRTdGF0ZS52YWx1ZS5jb250ZW50KSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoeyB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gdGhpcy5pc0NyZWF0ZWQoY2FydFN0YXRlLnZhbHVlLmNvbnRlbnQpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRW50cmllcyhjYXJ0RW50cmllcyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGFkZFZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyKHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgdm91Y2hlcklkOiB2b3VjaGVySWQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==