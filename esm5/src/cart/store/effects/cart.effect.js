/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap, } from 'rxjs/operators';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { CartDataService } from '../../facade/cart-data.service';
import { CartActions } from '../actions/index';
import { CheckoutActions } from '../../../checkout/store/actions/index';
var CartEffects = /** @class */ (function () {
    function CartEffects(actions$, cartConnector, cartData) {
        var _this = this;
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.cartData = cartData;
        this.loadCart$ = this.actions$.pipe(ofType(CartActions.LOAD_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            /** @type {?} */
            var loadCartParams = {
                userId: (payload && payload.userId) || _this.cartData.userId,
                cartId: (payload && payload.cartId) || _this.cartData.cartId,
            };
            if (_this.isMissingData(loadCartParams)) {
                return of(new CartActions.LoadCartFail({}));
            }
            return _this.cartConnector
                .load(loadCartParams.userId, loadCartParams.cartId)
                .pipe(map((/**
             * @param {?} cart
             * @return {?}
             */
            function (cart) {
                return new CartActions.LoadCartSuccess(cart);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                /** @type {?} */
                var couponExpiredErrors = error.error.errors.filter((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return err.reason === 'invalid'; }));
                if (couponExpiredErrors.length > 0) {
                    return of(new CartActions.ClearExpiredCoupons({}));
                }
                if (error && error.error && error.error.errors) {
                    /** @type {?} */
                    var cartNotFoundErrors = error.error.errors.filter((/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) { return err.reason === 'notFound' || 'UnknownResourceError'; }));
                    if (cartNotFoundErrors.length > 0) {
                        return of(new CartActions.ClearCart());
                    }
                }
                return of(new CartActions.LoadCartFail(makeErrorSerializable(error)));
            })));
        })));
        this.createCart$ = this.actions$.pipe(ofType(CartActions.CREATE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.cartConnector
                .create(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap((/**
             * @param {?} cart
             * @return {?}
             */
            function (cart) {
                if (payload.oldCartId) {
                    return [
                        new CartActions.CreateCartSuccess(cart),
                        new CartActions.MergeCartSuccess({
                            userId: payload.userId,
                            cartId: cart.code,
                        }),
                    ];
                }
                return [new CartActions.CreateCartSuccess(cart)];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CartActions.CreateCartFail(makeErrorSerializable(error)));
            })));
        })));
        this.mergeCart$ = this.actions$.pipe(ofType(CartActions.MERGE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.cartConnector.load(payload.userId, 'current').pipe(map((/**
             * @param {?} currentCart
             * @return {?}
             */
            function (currentCart) {
                return new CartActions.CreateCart({
                    userId: payload.userId,
                    oldCartId: payload.cartId,
                    toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                });
            })));
        })));
        this.refresh$ = this.actions$.pipe(ofType(CartActions.MERGE_CART_SUCCESS, CartActions.CART_ADD_ENTRY_SUCCESS, CartActions.CART_UPDATE_ENTRY_SUCCESS, CartActions.CART_REMOVE_ENTRY_SUCCESS, CartActions.ADD_EMAIL_TO_CART_SUCCESS, CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS, CartActions.CART_REMOVE_ENTRY_SUCCESS, CartActions.CART_ADD_VOUCHER_SUCCESS, CartActions.CART_REMOVE_VOUCHER_SUCCESS, CartActions.CART_REMOVE_VOUCHER_FAIL, CartActions.CLEAR_EXPIRED_COUPONS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), map((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return payload &&
                new CartActions.LoadCart({
                    userId: payload.userId,
                    cartId: payload.cartId,
                });
        })));
        this.resetCartDetailsOnSiteContextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), map((/**
         * @return {?}
         */
        function () { return new CartActions.ResetCartDetails(); })));
        this.addEmail$ = this.actions$.pipe(ofType(CartActions.ADD_EMAIL_TO_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.cartConnector
                .addEmail(payload.userId, payload.cartId, payload.email)
                .pipe(map((/**
             * @return {?}
             */
            function () {
                return new CartActions.AddEmailToCartSuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                });
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CartActions.AddEmailToCartFail(makeErrorSerializable(error)));
            })));
        })));
        this.deleteCart$ = this.actions$.pipe(ofType(CartActions.DELETE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), exhaustMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.cartConnector.delete(payload.userId, payload.cartId).pipe(map((/**
             * @return {?}
             */
            function () {
                return new CartActions.ClearCart();
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CartActions.DeleteCartFail(makeErrorSerializable(error)));
            })));
        })));
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    CartEffects.prototype.isMissingData = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return payload.userId === undefined || payload.cartId === undefined;
    };
    CartEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartConnector },
        { type: CartDataService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEffects.prototype, "loadCart$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEffects.prototype, "createCart$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEffects.prototype, "mergeCart$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEffects.prototype, "refresh$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEffects.prototype, "resetCartDetailsOnSiteContextChange$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEffects.prototype, "addEmail$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CartEffects.prototype, "deleteCart$", void 0);
    return CartEffects;
}());
export { CartEffects };
if (false) {
    /** @type {?} */
    CartEffects.prototype.loadCart$;
    /** @type {?} */
    CartEffects.prototype.createCart$;
    /** @type {?} */
    CartEffects.prototype.mergeCart$;
    /** @type {?} */
    CartEffects.prototype.refresh$;
    /** @type {?} */
    CartEffects.prototype.resetCartDetailsOnSiteContextChange$;
    /** @type {?} */
    CartEffects.prototype.addEmail$;
    /** @type {?} */
    CartEffects.prototype.deleteCart$;
    /**
     * @type {?}
     * @private
     */
    CartEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CartEffects.prototype.cartConnector;
    /**
     * @type {?}
     * @private
     */
    CartEffects.prototype.cartData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFeEU7SUFpTUUscUJBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsUUFBeUI7UUFIbkMsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBak1uQyxjQUFTLEdBS0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQzdCLEdBQUc7Ozs7UUFDRCxVQUFDLE1BR0EsSUFB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SyxTQUFTLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDdEUsQ0FBQzs7Z0JBek1GLFVBQVU7Ozs7Z0JBakJGLE9BQU87Z0JBWVAsYUFBYTtnQkFDYixlQUFlOztJQU90QjtRQURDLE1BQU0sRUFBRTswQ0FDRSxVQUFVO2tEQWtEbkI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDSSxVQUFVO29EQTRCckI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDRyxVQUFVO21EQWNwQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNDLFVBQVU7aURBcUNsQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUM2QixVQUFVOzZFQVE5QztJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNFLFVBQVU7a0RBb0JuQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNJLFVBQVU7b0RBYXJCO0lBV0osa0JBQUM7Q0FBQSxBQTFNRCxJQTBNQztTQXpNWSxXQUFXOzs7SUFDdEIsZ0NBbURFOztJQUVGLGtDQTZCRTs7SUFFRixpQ0FlRTs7SUFFRiwrQkFzQ0U7O0lBRUYsMkRBU0U7O0lBRUYsZ0NBcUJFOztJQUVGLGtDQWNFOzs7OztJQUdBLCtCQUF5Qjs7Ozs7SUFDekIsb0NBQW9DOzs7OztJQUNwQywrQkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGV4aGF1c3RNYXAsXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENhcnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2NhcnQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DbGVhckV4cGlyZWRDb3Vwb25zXG4gICAgfCBDYXJ0QWN0aW9ucy5DbGVhckNhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuTE9BRF9DQVJUKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgICAgcGF5bG9hZD86IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH07XG4gICAgICB9KSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICBjb25zdCBsb2FkQ2FydFBhcmFtcyA9IHtcbiAgICAgICAgdXNlcklkOiAocGF5bG9hZCAmJiBwYXlsb2FkLnVzZXJJZCkgfHwgdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgIGNhcnRJZDogKHBheWxvYWQgJiYgcGF5bG9hZC5jYXJ0SWQpIHx8IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuaXNNaXNzaW5nRGF0YShsb2FkQ2FydFBhcmFtcykpIHtcbiAgICAgICAgcmV0dXJuIG9mKG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoe30pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmxvYWQobG9hZENhcnRQYXJhbXMudXNlcklkLCBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3MoY2FydCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb3Vwb25FeHBpcmVkRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgZXJyID0+IGVyci5yZWFzb24gPT09ICdpbnZhbGlkJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChjb3Vwb25FeHBpcmVkRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBDYXJ0QWN0aW9ucy5DbGVhckV4cGlyZWRDb3Vwb25zKHt9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2FydE5vdEZvdW5kRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICBlcnIgPT4gZXJyLnJlYXNvbiA9PT0gJ25vdEZvdW5kJyB8fCAnVW5rbm93blJlc291cmNlRXJyb3InXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChjYXJ0Tm90Rm91bmRFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihuZXcgQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0KCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjcmVhdGVDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DUkVBVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmNyZWF0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5vbGRDYXJ0SWQsIHBheWxvYWQudG9NZXJnZUNhcnRHdWlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKGNhcnQ6IENhcnQpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLm9sZENhcnRJZCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2VzcyhjYXJ0KSxcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW25ldyBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2VzcyhjYXJ0KV07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBtZXJnZUNhcnQkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5NRVJHRV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmxvYWQocGF5bG9hZC51c2VySWQsICdjdXJyZW50JykucGlwZShcbiAgICAgICAgbWFwKGN1cnJlbnRDYXJ0ID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgIG9sZENhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IGN1cnJlbnRDYXJ0ID8gY3VycmVudENhcnQuZ3VpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuTG9hZENhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIENhcnRBY3Rpb25zLk1FUkdFX0NBUlRfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1VQREFURV9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJUX1NVQ0NFU1MsXG4gICAgICBDaGVja291dEFjdGlvbnMuQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfQUREX1ZPVUNIRVJfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX1ZPVUNIRVJfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX1ZPVUNIRVJfRkFJTCxcbiAgICAgIENhcnRBY3Rpb25zLkNMRUFSX0VYUElSRURfQ09VUE9OU1xuICAgICksXG4gICAgbWFwKFxuICAgICAgKFxuICAgICAgICBhY3Rpb246XG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3NcbiAgICAgICAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXJTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlclN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyRmFpbFxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2xlYXJFeHBpcmVkQ291cG9uc1xuICAgICAgKSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWFwKFxuICAgICAgcGF5bG9hZCA9PlxuICAgICAgICBwYXlsb2FkICYmXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICB9KVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVzZXRDYXJ0RGV0YWlsc09uU2l0ZUNvbnRleHRDaGFuZ2UkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRVxuICAgICksXG4gICAgbWFwKCgpID0+IG5ldyBDYXJ0QWN0aW9ucy5SZXNldENhcnREZXRhaWxzKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFkZEVtYWlsJDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAuYWRkRW1haWwocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVtYWlsKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZUNhcnQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkRFTEVURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuRGVsZXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGV4aGF1c3RNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0Q29ubmVjdG9yLmRlbGV0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5DbGVhckNhcnQoKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgQ2FydEFjdGlvbnMuRGVsZXRlQ2FydEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGlzTWlzc2luZ0RhdGEocGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiBwYXlsb2FkLnVzZXJJZCA9PT0gdW5kZWZpbmVkIHx8IHBheWxvYWQuY2FydElkID09PSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==