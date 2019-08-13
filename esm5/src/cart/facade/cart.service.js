/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { asyncScheduler, combineLatest } from 'rxjs';
import { debounceTime, filter, map, shareReplay, take, tap, } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { CartActions } from '../store/actions/index';
import { CartSelectors } from '../store/selectors/index';
import { ANONYMOUS_USERID, CartDataService } from './cart-data.service';
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
        debounceTime(1, asyncScheduler), filter((/**
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
        if (this.cartData.userId !== ANONYMOUS_USERID) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL2NhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ04sR0FBRyxFQUNILFdBQVcsRUFDWCxJQUFJLEVBQ0osR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhFO0lBT0UscUJBQ1ksS0FBMkIsRUFDM0IsUUFBeUIsRUFDekIsV0FBd0I7UUFIcEMsaUJBc0NDO1FBckNXLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUm5CLG1DQUE4QixHQUM3QyxnQ0FBZ0MsQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztRQVEzRCxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFB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QUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUN2QixJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sSUFBSSxtQkFBbUI7WUFDckQsSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsOEJBQThCLENBQUMseUJBQXlCO1NBQ3RGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxnQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsTUFBYztRQUMvQixPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQztJQUN2QyxDQUFDOztnQkExTEYsVUFBVTs7OztnQkFsQk0sS0FBSztnQkFnQkssZUFBZTtnQkFOakMsV0FBVzs7SUFtTXBCLGtCQUFDO0NBQUEsQUEzTEQsSUEyTEM7U0ExTFksV0FBVzs7Ozs7O0lBQ3RCLHFEQUNtQzs7Ozs7SUFDbkMscUNBQTZEOzs7OztJQUM3RCxtQ0FBdUM7Ozs7O0lBR3JDLDRCQUFxQzs7Ozs7SUFDckMsK0JBQW1DOzs7OztJQUNuQyxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgYXN5bmNTY2hlZHVsZXIsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aENhcnQgfSBmcm9tICcuLi9zdG9yZS9jYXJ0LXN0YXRlJztcbmltcG9ydCB7IENhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgQU5PTllNT1VTX1VTRVJJRCwgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWRhdGEuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFID1cbiAgICAnUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFJztcbiAgcHJpdmF0ZSBwcmV2aW91c1VzZXJJZCA9IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFO1xuICBwcml2YXRlIF9hY3RpdmVDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aENhcnQ+LFxuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5fYWN0aXZlQ2FydCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydENvbnRlbnQpLFxuICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0TG9hZGluZyksXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJUb2tlbigpLFxuICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0TG9hZGVkKSxcbiAgICBdKS5waXBlKFxuICAgICAgLy8gY29tYmluZUxhdGVzdCBlbWl0cyBtdWx0aXBsZSB0aW1lcyBvbiBlYWNoIHByb3BlcnR5IHVwZGF0ZSBpbnN0ZWFkIG9mIG9uZSBlbWl0XG4gICAgICAvLyBhZGRpdGlvbmFsbHkgZGlzcGF0Y2hpbmcgYWN0aW9ucyB0aGF0IGNoYW5nZXMgc2VsZWN0b3JzIHVzZWQgaGVyZSBuZWVkcyB0byBoYXBwZW4gaW4gb3JkZXJcbiAgICAgIC8vIGZvciB0aGlzIGFzeW5jU2NoZWR1bGVyIGlzIHVzZWQgaGVyZVxuICAgICAgZGVib3VuY2VUaW1lKDEsIGFzeW5jU2NoZWR1bGVyKSxcbiAgICAgIGZpbHRlcigoWywgbG9hZGluZ10pID0+ICFsb2FkaW5nKSxcbiAgICAgIHRhcCgoW2NhcnQsICwgdXNlclRva2VuLCBsb2FkZWRdKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzSnVzdExvZ2dlZEluKHVzZXJUb2tlbi51c2VySWQpKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JNZXJnZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICh0aGlzLmlzQ3JlYXRlZChjYXJ0KSAmJiB0aGlzLmlzSW5jb21wbGV0ZShjYXJ0KSkgfHxcbiAgICAgICAgICAodGhpcy5pc0xvZ2dlZEluKHVzZXJUb2tlbi51c2VySWQpICYmXG4gICAgICAgICAgICAhdGhpcy5pc0NyZWF0ZWQoY2FydCkgJiZcbiAgICAgICAgICAgICFsb2FkZWQpIC8vIHRyeSB0byBsb2FkIGN1cnJlbnQgY2FydCBmb3IgbG9nZ2VkIGluIHVzZXIgKGxvYWRlZCBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHVzZXIgZG9lc24ndCBoYXZlIGNhcnQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCA9IHVzZXJUb2tlbi51c2VySWQ7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKFtjYXJ0XSkgPT5cbiAgICAgICAgICAhdGhpcy5pc0NyZWF0ZWQoY2FydCkgfHxcbiAgICAgICAgICAodGhpcy5pc0NyZWF0ZWQoY2FydCkgJiYgIXRoaXMuaXNJbmNvbXBsZXRlKGNhcnQpKVxuICAgICAgKSxcbiAgICAgIG1hcCgoW2NhcnRdKSA9PiBjYXJ0KSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVDYXJ0JDtcbiAgfVxuXG4gIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRyaWVzKSk7XG4gIH1cblxuICBnZXRDYXJ0TWVyZ2VDb21wbGV0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRNZXJnZUNvbXBsZXRlKSk7XG4gIH1cblxuICBnZXRMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0TG9hZGVkKSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRPck1lcmdlKCk6IHZvaWQge1xuICAgIC8vIGZvciBsb2dpbiB1c2VyLCB3aGVuZXZlciB0aGVyZSdzIGFuIGV4aXN0aW5nIGNhcnQsIHdlIHdpbGwgbG9hZCB0aGUgdXNlclxuICAgIC8vIGN1cnJlbnQgY2FydCBhbmQgbWVyZ2UgaXQgaW50byB0aGUgZXhpc3RpbmcgY2FydFxuICAgIGlmICghdGhpcy5pc0NyZWF0ZWQodGhpcy5jYXJ0RGF0YS5jYXJ0KSkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogJ2N1cnJlbnQnLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLk1lcmdlQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydC5ndWlkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FydERhdGEudXNlcklkICE9PSBBTk9OWU1PVVNfVVNFUklEKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCA/IHRoaXMuY2FydERhdGEuY2FydElkIDogJ2N1cnJlbnQnLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlXG4gICAgICAucGlwZShcbiAgICAgICAgc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0QWN0aXZlQ2FydFN0YXRlKSxcbiAgICAgICAgdGFwKGNhcnRTdGF0ZSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzQ3JlYXRlZChjYXJ0U3RhdGUudmFsdWUuY29udGVudCkgJiYgIWNhcnRTdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCh7IHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiB0aGlzLmlzQ3JlYXRlZChjYXJ0U3RhdGUudmFsdWUuY29udGVudCkpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkoe1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdENvZGUsXG4gICAgICAgICAgICBxdWFudGl0eTogcXVhbnRpdHksXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeSh7XG4gICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgIGVudHJ5OiBlbnRyeS5lbnRyeU51bWJlcixcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUVudHJ5KGVudHJ5TnVtYmVyOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAocXVhbnRpdHkgPiAwKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgZW50cnk6IGVudHJ5TnVtYmVyLFxuICAgICAgICAgIHF0eTogcXVhbnRpdHksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgZW50cnk6IGVudHJ5TnVtYmVyLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBnZXRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRyeVNlbGVjdG9yRmFjdG9yeShwcm9kdWN0Q29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDcmVhdGVkKGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2FydCAmJiB0eXBlb2YgY2FydC5ndWlkICE9PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXJ0IGlzIGluY29tcGxldGUgaWYgaXQgY29udGFpbnMgb25seSBgZ3VpZGAgYW5kIGBjb2RlYCBwcm9wZXJ0aWVzLCB3aGljaCBjb21lIGZyb20gbG9jYWwgc3RvcmFnZS5cbiAgICogVG8gZ2V0IGNhcnQgY29udGVudCwgd2UgbmVlZCB0byBsb2FkIGNhcnQgZnJvbSBiYWNrZW5kLlxuICAgKi9cbiAgcHJpdmF0ZSBpc0luY29tcGxldGUoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjYXJ0ICYmIE9iamVjdC5rZXlzKGNhcnQpLmxlbmd0aCA8PSAyO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzTG9nZ2VkSW4odXNlcklkKSAmJlxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdXNlcklkICYmIC8vICpqdXN0KiBsb2dnZWQgaW5cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFIC8vIG5vdCBhcHAgaW5pdGlhbGl6YXRpb25cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0xvZ2dlZEluKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB1c2VySWQgIT09ICd1bmRlZmluZWQnO1xuICB9XG59XG4iXX0=