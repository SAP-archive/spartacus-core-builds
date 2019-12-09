/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { debounceTime, filter, map, shareReplay, take, tap, } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { OCC_CART_ID_CURRENT, OCC_USER_ID_ANONYMOUS, } from '../../occ/utils/occ-constants';
import * as DeprecatedCartActions from '../store/actions/cart.action';
import { CartActions } from '../store/actions/index';
import { CartSelectors } from '../store/selectors/index';
import { ActiveCartService } from './active-cart.service';
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
            this.store.dispatch(new DeprecatedCartActions.LoadCart({
                userId: this.cartData.userId,
                cartId: OCC_CART_ID_CURRENT,
            }));
        }
        else if (this.isGuestCart()) {
            this.guestCartMerge();
        }
        else {
            this.store.dispatch(new DeprecatedCartActions.MergeCart({
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
            this.store.dispatch(new DeprecatedCartActions.LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId
                    ? this.cartData.cartId
                    : OCC_CART_ID_CURRENT,
            }));
        }
        else {
            this.store.dispatch(new DeprecatedCartActions.LoadCart({
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
                _this.store.dispatch(new DeprecatedCartActions.CreateCart({
                    userId: _this.cartData.userId,
                }));
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
        this.store.dispatch(new DeprecatedCartActions.AddEmailToCart({
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
        this.store.dispatch(new DeprecatedCartActions.DeleteCart({
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
                _this.store.dispatch(new DeprecatedCartActions.CreateCart({
                    userId: _this.cartData.userId,
                }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL2NhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixHQUFHLEVBQ0gsV0FBVyxFQUNYLElBQUksRUFDSixHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJL0MsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsR0FDdEIsTUFBTSwrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLEtBQUsscUJBQXFCLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7QUFRdEQ7SUFPRSxxQkFDWSxLQUEyQixFQUMzQixRQUF5QixFQUN6QixXQUF3QixFQUN4QixpQkFBcUM7UUFKakQsaUJBdUNDO1FBdENXLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7UUFUaEMsbUNBQThCLEdBQzdD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QUNULEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELGdDQUFVOzs7O0lBQVYsVUFBVyxTQUFpQjtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUM1QixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQTdVRixVQUFVOzs7O2dCQS9CTSxLQUFLO2dCQXVCYixlQUFlO2dCQWJmLFdBQVc7Z0JBWVgsaUJBQWlCOztJQXVWMUIsa0JBQUM7Q0FBQSxBQTlVRCxJQThVQztTQTdVWSxXQUFXOzs7Ozs7SUFDdEIscURBQ21DOzs7OztJQUNuQyxxQ0FBNkQ7Ozs7O0lBQzdELG1DQUF1Qzs7Ozs7SUFHckMsNEJBQXFDOzs7OztJQUNyQywrQkFBbUM7Ozs7O0lBQ25DLGtDQUFrQzs7Ozs7SUFDbEMsd0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBEZXByZWNhdGVkQ2FydEFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2FydCB9IGZyb20gJy4uL3N0b3JlL2NhcnQtc3RhdGUnO1xuaW1wb3J0IHsgQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4vYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuL2NhcnQtZGF0YS5zZXJ2aWNlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICogVXNlIEFjdGl2ZUNhcnRTZXJ2aWNlIGluc3RlYWQgKEFQSSBpcyBhbG1vc3QgdGhlIHNhbWUpXG4gKiBGcm9tIDEuNCB2ZXJzaW9uIENhcnRTZXJ2aWNlIHVzZXMgQWN0aXZlQ2FydFNlcnZpY2UgaWYgaXQgaXMgYXZhaWxhYmxlXG4gKiBGaXhlcyBhbmQgaW1wcm92ZW1lbnRzIHdpbGwgYmUgb25seSBpbXBsZW1lbnRlZCBpbiBBY3RpdmVDYXJ0U2VydmljZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IFBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSA9XG4gICAgJ1BSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSc7XG4gIHByaXZhdGUgcHJldmlvdXNVc2VySWQgPSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRTtcbiAgcHJpdmF0ZSBfYWN0aXZlQ2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDYXJ0PixcbiAgICBwcm90ZWN0ZWQgY2FydERhdGE6IENhcnREYXRhU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZT86IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuX2FjdGl2ZUNhcnQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnN0b3JlLnNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRDb250ZW50KSxcbiAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydExvYWRpbmcpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKSxcbiAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydExvYWRlZCksXG4gICAgXSkucGlwZShcbiAgICAgIC8vIGNvbWJpbmVMYXRlc3QgZW1pdHMgbXVsdGlwbGUgdGltZXMgb24gZWFjaCBwcm9wZXJ0eSB1cGRhdGUgaW5zdGVhZCBvZiBvbmUgZW1pdFxuICAgICAgLy8gYWRkaXRpb25hbGx5IGRpc3BhdGNoaW5nIGFjdGlvbnMgdGhhdCBjaGFuZ2VzIHNlbGVjdG9ycyB1c2VkIGhlcmUgbmVlZHMgdG8gaGFwcGVuIGluIG9yZGVyXG4gICAgICAvLyBmb3IgdGhpcyBhc3luY1NjaGVkdWxlciBpcyB1c2VkIGhlcmVcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgIGZpbHRlcigoWywgbG9hZGluZ10pID0+ICFsb2FkaW5nKSxcbiAgICAgIHRhcCgoW2NhcnQsICwgdXNlclRva2VuLCBsb2FkZWRdKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzSnVzdExvZ2dlZEluKHVzZXJUb2tlbi51c2VySWQpKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JNZXJnZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICh0aGlzLmlzQ3JlYXRlZChjYXJ0KSAmJiB0aGlzLmlzSW5jb21wbGV0ZShjYXJ0KSkgfHxcbiAgICAgICAgICAodGhpcy5pc0xvZ2dlZEluKHVzZXJUb2tlbi51c2VySWQpICYmXG4gICAgICAgICAgICAhdGhpcy5pc0NyZWF0ZWQoY2FydCkgJiZcbiAgICAgICAgICAgICFsb2FkZWQpIC8vIHRyeSB0byBsb2FkIGN1cnJlbnQgY2FydCBmb3IgbG9nZ2VkIGluIHVzZXIgKGxvYWRlZCBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHVzZXIgZG9lc24ndCBoYXZlIGNhcnQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCA9IHVzZXJUb2tlbi51c2VySWQ7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKFtjYXJ0XSkgPT5cbiAgICAgICAgICAhdGhpcy5pc0NyZWF0ZWQoY2FydCkgfHxcbiAgICAgICAgICAodGhpcy5pc0NyZWF0ZWQoY2FydCkgJiYgIXRoaXMuaXNJbmNvbXBsZXRlKGNhcnQpKVxuICAgICAgKSxcbiAgICAgIG1hcCgoW2NhcnRdKSA9PiBjYXJ0KSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNhcnQkO1xuICB9XG5cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRFbnRyaWVzKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydEVudHJpZXMpKTtcbiAgfVxuXG4gIC8vIFRPRE86IHRvIHJlbW92ZSBpbiAyLjBcbiAgLy8gZG9lc24ndCBzZWVtIHVzZWZ1bCBmb3IgZW5kIGRldmVsb3BlcnNcbiAgLy8gdGhlcmUgc2hvdWxkbid0IGJlIGEgbmVlZCBmb3Igc3VjaCBsb3cgbGV2ZWwgaW5mb3JtYXRpb25cbiAgZ2V0Q2FydE1lcmdlQ29tcGxldGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0TWVyZ2VDb21wbGV0ZSkpO1xuICB9XG5cbiAgZ2V0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRMb2FkZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0TG9hZGVkKSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRPck1lcmdlKCk6IHZvaWQge1xuICAgIC8vIGZvciBsb2dpbiB1c2VyLCB3aGVuZXZlciB0aGVyZSdzIGFuIGV4aXN0aW5nIGNhcnQsIHdlIHdpbGwgbG9hZCB0aGUgdXNlclxuICAgIC8vIGN1cnJlbnQgY2FydCBhbmQgbWVyZ2UgaXQgaW50byB0aGUgZXhpc3RpbmcgY2FydFxuICAgIGlmICghdGhpcy5pc0NyZWF0ZWQodGhpcy5jYXJ0RGF0YS5jYXJ0KSkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0d1ZXN0Q2FydCgpKSB7XG4gICAgICB0aGlzLmd1ZXN0Q2FydE1lcmdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0Lmd1aWQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYXJ0RGF0YS51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkXG4gICAgICAgICAgICA/IHRoaXMuY2FydERhdGEuY2FydElkXG4gICAgICAgICAgICA6IE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuYWRkRW50cnkocHJvZHVjdENvZGUsIHF1YW50aXR5KTtcbiAgICB9XG4gICAgdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldEFjdGl2ZUNhcnRTdGF0ZSksXG4gICAgICAgIHRhcChjYXJ0U3RhdGUgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5pc0NyZWF0ZWQoY2FydFN0YXRlLnZhbHVlLmNvbnRlbnQpICYmICFjYXJ0U3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoY2FydFN0YXRlID0+IHRoaXMuaXNDcmVhdGVkKGNhcnRTdGF0ZS52YWx1ZS5jb250ZW50KSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSh7XG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kdWN0Q29kZSxcbiAgICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShlbnRyeSk7XG4gICAgfVxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgZW50cnk6IGVudHJ5LmVudHJ5TnVtYmVyLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgICAgcGFyc2VJbnQoZW50cnlOdW1iZXIsIDEwKSxcbiAgICAgICAgcXVhbnRpdHlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChxdWFudGl0eSA+IDApIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnkoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBlbnRyeTogZW50cnlOdW1iZXIsXG4gICAgICAgICAgcXR5OiBxdWFudGl0eSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnkoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBlbnRyeTogZW50cnlOdW1iZXIsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+IHtcbiAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0RW50cnkocHJvZHVjdENvZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydEVudHJ5U2VsZWN0b3JGYWN0b3J5KHByb2R1Y3RDb2RlKSlcbiAgICApO1xuICB9XG5cbiAgYWRkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5hZGRFbWFpbChlbWFpbCk7XG4gICAgfVxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QXNzaWduZWRVc2VyKCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBc3NpZ25lZFVzZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0VXNlcikpO1xuICB9XG5cbiAgaXNHdWVzdENhcnQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNhcnREYXRhLmlzR3Vlc3RDYXJ0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBtdWx0aXBsZSBlbnRyaWVzIHRvIGEgY2FydFxuICAgKiBSZXF1aXJlcyBhIGNyZWF0ZWQgY2FydFxuICAgKiBAcGFyYW0gY2FydEVudHJpZXMgOiBsaXN0IG9mIGVudHJpZXMgdG8gYWRkIChPcmRlckVudHJ5W10pXG4gICAqL1xuICBhZGRFbnRyaWVzKGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuYWRkRW50cmllcyhjYXJ0RW50cmllcyk7XG4gICAgfVxuICAgIGxldCBuZXdFbnRyaWVzID0gMDtcbiAgICB0aGlzLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgLy8gS2VlcCBhZGRpbmcgZW50cmllcyB1bnRpbCB0aGUgdXNlciBjYXJ0IGNvbnRhaW5zIHRoZSBzYW1lIG51bWJlciBvZiBlbnRyaWVzXG4gICAgICAgICAgLy8gYXMgdGhlIGd1ZXN0IGNhcnQgZGlkXG4gICAgICAgICAgaWYgKG5ld0VudHJpZXMgPCBjYXJ0RW50cmllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogY2FydEVudHJpZXNbbmV3RW50cmllc10ucHJvZHVjdC5jb2RlLFxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiBjYXJ0RW50cmllc1tuZXdFbnRyaWVzXS5xdWFudGl0eSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBuZXdFbnRyaWVzKys7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKCgpID0+IG5ld0VudHJpZXMgPT09IGNhcnRFbnRyaWVzLmxlbmd0aCksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDcmVhdGVkKGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2FydCAmJiB0eXBlb2YgY2FydC5ndWlkICE9PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXJ0IGlzIGluY29tcGxldGUgaWYgaXQgY29udGFpbnMgb25seSBgZ3VpZGAsIGBjb2RlYCBhbmQgYHVzZXJgIHByb3BlcnRpZXMsIHdoaWNoIGNvbWUgZnJvbSBsb2NhbCBzdG9yYWdlLlxuICAgKiBUbyBnZXQgY2FydCBjb250ZW50LCB3ZSBuZWVkIHRvIGxvYWQgY2FydCBmcm9tIGJhY2tlbmQuXG4gICAqL1xuICBwcml2YXRlIGlzSW5jb21wbGV0ZShjYXJ0OiBDYXJ0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNhcnQgJiYgT2JqZWN0LmtleXMoY2FydCkubGVuZ3RoIDw9IDM7XG4gIH1cblxuICBwcml2YXRlIGlzSnVzdExvZ2dlZEluKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuaXNMb2dnZWRJbih1c2VySWQpICYmXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB1c2VySWQgJiYgLy8gKmp1c3QqIGxvZ2dlZCBpblxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgLy8gbm90IGFwcCBpbml0aWFsaXphdGlvblxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzTG9nZ2VkSW4odXNlcklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHVzZXJJZCAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICAvLyBUT0RPOiBSZW1vdmUgb25jZSBiYWNrZW5kIGlzIHVwZGF0ZWRcbiAgLyoqXG4gICAqIFRlbXBvcmFyeSBtZXRob2QgdG8gbWVyZ2UgZ3Vlc3QgY2FydCB3aXRoIHVzZXIgY2FydCBiZWNhdXNlIG9mIGJhY2tlbmQgbGltaXRhdGlvblxuICAgKiBUaGlzIGlzIGZvciBhbiBlZGdlIGNhc2VcbiAgICovXG4gIHByaXZhdGUgZ3Vlc3RDYXJ0TWVyZ2UoKTogdm9pZCB7XG4gICAgbGV0IGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W107XG4gICAgdGhpcy5nZXRFbnRyaWVzKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKGVudHJpZXMgPT4ge1xuICAgICAgICBjYXJ0RW50cmllcyA9IGVudHJpZXM7XG4gICAgICB9KTtcblxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRlbGV0ZUNhcnQoe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnQuZ3VpZCxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc3RvcmVcbiAgICAgIC5waXBlKFxuICAgICAgICBzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRBY3RpdmVDYXJ0U3RhdGUpLFxuICAgICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAgIHRhcChjYXJ0U3RhdGUgPT4ge1xuICAgICAgICAgIC8vIElmIHRoZSBjYXJ0IGlzIG5vdCBjcmVhdGVkIGl0IG5lZWRzIHRvIGJlIGNyZWF0ZWRcbiAgICAgICAgICAvLyBUaGlzIHN0ZXAgc2hvdWxkIGhhcHBlbiBiZWZvcmUgYWRkaW5nIGVudHJpZXMgdG8gYXZvaWQgY29uZmxpY3RzIGluIHRoZSByZXF1ZXN0c1xuICAgICAgICAgIGlmICghdGhpcy5pc0NyZWF0ZWQoY2FydFN0YXRlLnZhbHVlLmNvbnRlbnQpKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gdGhpcy5pc0NyZWF0ZWQoY2FydFN0YXRlLnZhbHVlLmNvbnRlbnQpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRW50cmllcyhjYXJ0RW50cmllcyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGFkZFZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyKHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgdm91Y2hlcklkOiB2b3VjaGVySWQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==