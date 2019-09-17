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
import { CartActions } from '../store/actions/index';
import { CartSelectors } from '../store/selectors/index';
import { CartDataService } from './cart-data.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
var CartService = /** @class */ (function () {
    function CartService(store, cartData, authService) {
        var _this = this;
        this.store = store;
        this.cartData = cartData;
        this.authService = authService;
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
        return this._activeCart$;
    };
    /**
     * @return {?}
     */
    CartService.prototype.getEntries = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(CartSelectors.getCartEntries));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getCartMergeComplete = /**
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
            this.store.dispatch(new CartActions.LoadCart({
                userId: this.cartData.userId,
                cartId: 'current',
            }));
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
                cartId: this.cartData.cartId ? this.cartData.cartId : 'current',
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
        return this.store.pipe(select(CartSelectors.getCartEntrySelectorFactory(productCode)));
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
     * Cart is incomplete if it contains only `guid` and `code` properties, which come from local storage.
     * To get cart content, we need to load cart from backend.
     */
    /**
     * Cart is incomplete if it contains only `guid` and `code` properties, which come from local storage.
     * To get cart content, we need to load cart from backend.
     * @private
     * @param {?} cart
     * @return {?}
     */
    CartService.prototype.isIncomplete = /**
     * Cart is incomplete if it contains only `guid` and `code` properties, which come from local storage.
     * To get cart content, we need to load cart from backend.
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return cart && Object.keys(cart).length <= 2;
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
    CartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService },
        { type: AuthService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL2NhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixHQUFHLEVBQ0gsV0FBVyxFQUNYLElBQUksRUFDSixHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEU7SUFPRSxxQkFDWSxLQUEyQixFQUMzQixRQUF5QixFQUN6QixXQUF3QjtRQUhwQyxpQkFzQ0M7UUFyQ1csVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFDM0IsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFSbkIsbUNBQThCLEdBQzdDLGdDQUFnQyxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1FBUTNELElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7WUFDL0Ms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LE9BQU8sQ0FDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUN2QixJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sSUFBSSxtQkFBbUI7WUFDckQsSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsOEJBQThCLENBQUMseUJBQXlCO1NBQ3RGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxnQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsTUFBYztRQUMvQixPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQztJQUN2QyxDQUFDOztnQkExTEYsVUFBVTs7OztnQkFuQk0sS0FBSztnQkFnQmIsZUFBZTtnQkFOZixXQUFXOztJQW9NcEIsa0JBQUM7Q0FBQSxBQTNMRCxJQTJMQztTQTFMWSxXQUFXOzs7Ozs7SUFDdEIscURBQ21DOzs7OztJQUNuQyxxQ0FBNkQ7Ozs7O0lBQzdELG1DQUF1Qzs7Ozs7SUFHckMsNEJBQXFDOzs7OztJQUNyQywrQkFBbUM7Ozs7O0lBQ25DLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzaGFyZVJlcGxheSxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IENhcnREYXRhU2VydmljZSB9IGZyb20gJy4vY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IFBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSA9XG4gICAgJ1BSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSc7XG4gIHByaXZhdGUgcHJldmlvdXNVc2VySWQgPSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRTtcbiAgcHJpdmF0ZSBfYWN0aXZlQ2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDYXJ0PixcbiAgICBwcm90ZWN0ZWQgY2FydERhdGE6IENhcnREYXRhU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuX2FjdGl2ZUNhcnQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnN0b3JlLnNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRDb250ZW50KSxcbiAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydExvYWRpbmcpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKSxcbiAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydExvYWRlZCksXG4gICAgXSkucGlwZShcbiAgICAgIC8vIGNvbWJpbmVMYXRlc3QgZW1pdHMgbXVsdGlwbGUgdGltZXMgb24gZWFjaCBwcm9wZXJ0eSB1cGRhdGUgaW5zdGVhZCBvZiBvbmUgZW1pdFxuICAgICAgLy8gYWRkaXRpb25hbGx5IGRpc3BhdGNoaW5nIGFjdGlvbnMgdGhhdCBjaGFuZ2VzIHNlbGVjdG9ycyB1c2VkIGhlcmUgbmVlZHMgdG8gaGFwcGVuIGluIG9yZGVyXG4gICAgICAvLyBmb3IgdGhpcyBhc3luY1NjaGVkdWxlciBpcyB1c2VkIGhlcmVcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgIGZpbHRlcigoWywgbG9hZGluZ10pID0+ICFsb2FkaW5nKSxcbiAgICAgIHRhcCgoW2NhcnQsICwgdXNlclRva2VuLCBsb2FkZWRdKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzSnVzdExvZ2dlZEluKHVzZXJUb2tlbi51c2VySWQpKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JNZXJnZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICh0aGlzLmlzQ3JlYXRlZChjYXJ0KSAmJiB0aGlzLmlzSW5jb21wbGV0ZShjYXJ0KSkgfHxcbiAgICAgICAgICAodGhpcy5pc0xvZ2dlZEluKHVzZXJUb2tlbi51c2VySWQpICYmXG4gICAgICAgICAgICAhdGhpcy5pc0NyZWF0ZWQoY2FydCkgJiZcbiAgICAgICAgICAgICFsb2FkZWQpIC8vIHRyeSB0byBsb2FkIGN1cnJlbnQgY2FydCBmb3IgbG9nZ2VkIGluIHVzZXIgKGxvYWRlZCBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHVzZXIgZG9lc24ndCBoYXZlIGNhcnQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCA9IHVzZXJUb2tlbi51c2VySWQ7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKFtjYXJ0XSkgPT5cbiAgICAgICAgICAhdGhpcy5pc0NyZWF0ZWQoY2FydCkgfHxcbiAgICAgICAgICAodGhpcy5pc0NyZWF0ZWQoY2FydCkgJiYgIXRoaXMuaXNJbmNvbXBsZXRlKGNhcnQpKVxuICAgICAgKSxcbiAgICAgIG1hcCgoW2NhcnRdKSA9PiBjYXJ0KSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVDYXJ0JDtcbiAgfVxuXG4gIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRyaWVzKSk7XG4gIH1cblxuICBnZXRDYXJ0TWVyZ2VDb21wbGV0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRNZXJnZUNvbXBsZXRlKSk7XG4gIH1cblxuICBnZXRMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0TG9hZGVkKSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRPck1lcmdlKCk6IHZvaWQge1xuICAgIC8vIGZvciBsb2dpbiB1c2VyLCB3aGVuZXZlciB0aGVyZSdzIGFuIGV4aXN0aW5nIGNhcnQsIHdlIHdpbGwgbG9hZCB0aGUgdXNlclxuICAgIC8vIGN1cnJlbnQgY2FydCBhbmQgbWVyZ2UgaXQgaW50byB0aGUgZXhpc3RpbmcgY2FydFxuICAgIGlmICghdGhpcy5pc0NyZWF0ZWQodGhpcy5jYXJ0RGF0YS5jYXJ0KSkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogJ2N1cnJlbnQnLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLk1lcmdlQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydC5ndWlkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FydERhdGEudXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkID8gdGhpcy5jYXJ0RGF0YS5jYXJ0SWQgOiAnY3VycmVudCcsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmVcbiAgICAgIC5waXBlKFxuICAgICAgICBzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRBY3RpdmVDYXJ0U3RhdGUpLFxuICAgICAgICB0YXAoY2FydFN0YXRlID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNDcmVhdGVkKGNhcnRTdGF0ZS52YWx1ZS5jb250ZW50KSAmJiAhY2FydFN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KHsgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoY2FydFN0YXRlID0+IHRoaXMuaXNDcmVhdGVkKGNhcnRTdGF0ZS52YWx1ZS5jb250ZW50KSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSh7XG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kdWN0Q29kZSxcbiAgICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgZW50cnk6IGVudHJ5LmVudHJ5TnVtYmVyLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChxdWFudGl0eSA+IDApIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnkoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBlbnRyeTogZW50cnlOdW1iZXIsXG4gICAgICAgICAgcXR5OiBxdWFudGl0eSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnkoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBlbnRyeTogZW50cnlOdW1iZXIsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydEVudHJ5U2VsZWN0b3JGYWN0b3J5KHByb2R1Y3RDb2RlKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NyZWF0ZWQoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjYXJ0ICYmIHR5cGVvZiBjYXJ0Lmd1aWQgIT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIENhcnQgaXMgaW5jb21wbGV0ZSBpZiBpdCBjb250YWlucyBvbmx5IGBndWlkYCBhbmQgYGNvZGVgIHByb3BlcnRpZXMsIHdoaWNoIGNvbWUgZnJvbSBsb2NhbCBzdG9yYWdlLlxuICAgKiBUbyBnZXQgY2FydCBjb250ZW50LCB3ZSBuZWVkIHRvIGxvYWQgY2FydCBmcm9tIGJhY2tlbmQuXG4gICAqL1xuICBwcml2YXRlIGlzSW5jb21wbGV0ZShjYXJ0OiBDYXJ0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNhcnQgJiYgT2JqZWN0LmtleXMoY2FydCkubGVuZ3RoIDw9IDI7XG4gIH1cblxuICBwcml2YXRlIGlzSnVzdExvZ2dlZEluKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuaXNMb2dnZWRJbih1c2VySWQpICYmXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB1c2VySWQgJiYgLy8gKmp1c3QqIGxvZ2dlZCBpblxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgLy8gbm90IGFwcCBpbml0aWFsaXphdGlvblxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzTG9nZ2VkSW4odXNlcklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHVzZXJJZCAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cbn1cbiJdfQ==