/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { catchError, concatMap, exhaustMap, filter, groupBy, map, mergeMap, switchMap, withLatestFrom, } from 'rxjs/operators';
import { CheckoutActions } from '../../../checkout/store/actions/index';
import { OCC_CART_ID_CURRENT } from '../../../occ/utils/occ-constants';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { withdrawOn } from '../../../util/withdraw-on';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { CartDataService } from '../../facade/cart-data.service';
import * as DeprecatedCartActions from '../actions/cart.action';
import { CartActions } from '../actions/index';
import { getActiveCartId, getCartHasPendingProcessesSelectorFactory, } from '../selectors/multi-cart.selector';
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx effects will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
var CartEffects = /** @class */ (function () {
    function CartEffects(actions$, cartConnector, cartData, store) {
        var _this = this;
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.cartData = cartData;
        this.store = store;
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE, SiteContextActions.LANGUAGE_CHANGE));
        this.loadCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.LOAD_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), groupBy((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) { return payload.cartId; })), mergeMap((/**
         * @param {?} group$
         * @return {?}
         */
        function (group$) {
            return group$.pipe(switchMap((/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) {
                return of(payload).pipe(withLatestFrom(
                // TODO: deprecated -> remove check for store in 2.0 when store will be required
                !_this.store
                    ? of(false)
                    : _this.store.pipe(select(getCartHasPendingProcessesSelectorFactory(payload.cartId)))));
            })), filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), _ = _b[0], hasPendingProcesses = _b[1];
                return !hasPendingProcesses;
            })), map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 1), payload = _b[0];
                return payload;
            })), switchMap((/**
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
                    return from([
                        new DeprecatedCartActions.LoadCartFail({}),
                        new CartActions.LoadMultiCartFail({
                            cartId: loadCartParams.cartId,
                        }),
                    ]);
                }
                return _this.cartConnector
                    .load(loadCartParams.userId, loadCartParams.cartId)
                    .pipe(
                // TODO: remove with the `cart` store feature
                withLatestFrom(
                // TODO: deprecated -> remove check for store in 2.0 when store will be required
                !_this.store
                    ? of(payload.cartId)
                    : _this.store.pipe(select(getActiveCartId))), mergeMap((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = tslib_1.__read(_a, 2), cart = _b[0], activeCartId = _b[1];
                    /** @type {?} */
                    var actions = [];
                    if (cart) {
                        // `cart` store branch should only be updated for active cart
                        // avoid dispatching LoadCartSuccess action on different cart loads
                        if (loadCartParams.cartId === activeCartId ||
                            loadCartParams.cartId === OCC_CART_ID_CURRENT) {
                            actions.push(new DeprecatedCartActions.LoadCartSuccess(cart));
                        }
                        actions.push(new CartActions.LoadMultiCartSuccess({
                            cart: cart,
                            userId: loadCartParams.userId,
                            extraData: payload.extraData,
                        }));
                        if (loadCartParams.cartId === OCC_CART_ID_CURRENT) {
                            // Removing cart from entity object under `current` key as it is no longer needed.
                            // Current cart is loaded under it's code entity.
                            actions.push(new CartActions.RemoveCart(OCC_CART_ID_CURRENT));
                        }
                    }
                    else {
                        actions = [
                            new DeprecatedCartActions.LoadCartFail({}),
                            new CartActions.LoadMultiCartFail({
                                cartId: loadCartParams.cartId,
                            }),
                        ];
                    }
                    return actions;
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
                        // clear coupons actions just wanted to reload cart again
                        // no need to do it in refresh or keep that action
                        // however removing this action will be a breaking change
                        // remove that action in 2.0 release
                        // @deprecated since 1.4
                        return from([
                            new CartActions.LoadCart(tslib_1.__assign({}, payload)),
                            new CartActions.ClearExpiredCoupons({}),
                        ]);
                    }
                    if (error && error.error && error.error.errors) {
                        /** @type {?} */
                        var cartNotFoundErrors = error.error.errors.filter((/**
                         * @param {?} err
                         * @return {?}
                         */
                        function (err) { return err.reason === 'notFound' || 'UnknownResourceError'; }));
                        if (cartNotFoundErrors.length > 0) {
                            // Clear cart is responsible for removing cart in `cart` store feature.
                            // Remove cart does the same thing, but in `multi-cart` store feature.
                            return from([
                                new DeprecatedCartActions.ClearCart(),
                                new CartActions.RemoveCart(loadCartParams.cartId),
                            ]);
                        }
                    }
                    return from([
                        new DeprecatedCartActions.LoadCartFail(makeErrorSerializable(error)),
                        new CartActions.LoadMultiCartFail({
                            cartId: loadCartParams.cartId,
                            error: makeErrorSerializable(error),
                        }),
                    ]);
                })));
            })));
        })), withdrawOn(this.contextChange$));
        this.createCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.CREATE_CART), map((/**
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
                /** @type {?} */
                var conditionalActions = [];
                if (payload.oldCartId) {
                    conditionalActions.push(new DeprecatedCartActions.MergeCartSuccess({
                        userId: payload.userId,
                        cartId: cart.code,
                    }));
                    conditionalActions.push(new CartActions.MergeMultiCartSuccess({
                        userId: payload.userId,
                        cartId: cart.code,
                        oldCartId: payload.oldCartId,
                    }));
                }
                // `cart` store branch should only be updated for active cart
                // avoid dispatching CreateCartSuccess action on different cart loads
                if (payload.extraData && payload.extraData.active) {
                    conditionalActions.push(new DeprecatedCartActions.CreateCartSuccess(cart));
                }
                return tslib_1.__spread([
                    new CartActions.CreateMultiCartSuccess({
                        cart: cart,
                        userId: payload.userId,
                        extraData: payload.extraData,
                    }),
                    new CartActions.SetTempCart({
                        cart: cart,
                        tempCartId: payload.tempCartId,
                    })
                ], conditionalActions);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return from([
                    new DeprecatedCartActions.CreateCartFail(makeErrorSerializable(error)),
                    new CartActions.CreateMultiCartFail({
                        tempCartId: payload.tempCartId,
                        error: makeErrorSerializable(error),
                    }),
                ]);
            })));
        })), withdrawOn(this.contextChange$));
        this.mergeCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.MERGE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.cartConnector.load(payload.userId, OCC_CART_ID_CURRENT).pipe(mergeMap((/**
             * @param {?} currentCart
             * @return {?}
             */
            function (currentCart) {
                return [
                    new DeprecatedCartActions.CreateCart({
                        userId: payload.userId,
                        oldCartId: payload.cartId,
                        toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                        extraData: payload.extraData,
                        tempCartId: payload.tempCartId,
                    }),
                ];
            })));
        })), withdrawOn(this.contextChange$));
        this.refresh$ = this.actions$.pipe(ofType(CartActions.CART_ADD_ENTRY_SUCCESS, CartActions.CART_UPDATE_ENTRY_SUCCESS, CartActions.CART_REMOVE_ENTRY_SUCCESS, DeprecatedCartActions.ADD_EMAIL_TO_CART_SUCCESS, CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS, CartActions.CART_ADD_VOUCHER_SUCCESS, CartActions.CART_REMOVE_VOUCHER_SUCCESS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return from([
                new CartActions.CartProcessesDecrement(payload.cartId),
                new DeprecatedCartActions.LoadCart({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ]);
        })));
        this.refreshWithoutProcesses$ = this.actions$.pipe(ofType(DeprecatedCartActions.MERGE_CART_SUCCESS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), map((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return new DeprecatedCartActions.LoadCart({
                userId: payload.userId,
                cartId: payload.cartId,
            });
        })));
        this.resetCartDetailsOnSiteContextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), mergeMap((/**
         * @return {?}
         */
        function () {
            return [
                new DeprecatedCartActions.ResetCartDetails(),
                new CartActions.ResetMultiCartDetails(),
            ];
        })));
        this.addEmail$ = this.actions$.pipe(ofType(DeprecatedCartActions.ADD_EMAIL_TO_CART), map((/**
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
                .pipe(mergeMap((/**
             * @return {?}
             */
            function () {
                return [
                    new DeprecatedCartActions.AddEmailToCartSuccess({
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                    new CartActions.AddEmailToMultiCartSuccess({
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                ];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return from([
                    new DeprecatedCartActions.AddEmailToCartFail(makeErrorSerializable(error)),
                    new CartActions.AddEmailToMultiCartFail({
                        error: makeErrorSerializable(error),
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                    new CartActions.CartProcessesDecrement(payload.cartId),
                    new DeprecatedCartActions.LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                ]);
            })));
        })), withdrawOn(this.contextChange$));
        this.deleteCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.DELETE_CART), map((/**
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
                return new DeprecatedCartActions.ClearCart();
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DeprecatedCartActions.DeleteCartFail(makeErrorSerializable(error)));
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
        { type: CartDataService },
        { type: Store }
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
    ], CartEffects.prototype, "refreshWithoutProcesses$", void 0);
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
    /**
     * @type {?}
     * @private
     */
    CartEffects.prototype.contextChange$;
    /** @type {?} */
    CartEffects.prototype.loadCart$;
    /** @type {?} */
    CartEffects.prototype.createCart$;
    /** @type {?} */
    CartEffects.prototype.mergeCart$;
    /** @type {?} */
    CartEffects.prototype.refresh$;
    /** @type {?} */
    CartEffects.prototype.refreshWithoutProcesses$;
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
    /**
     * @type {?}
     * @private
     */
    CartEffects.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxlQUFl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TSxFQUFFOzBDQUNJLFVBQVU7b0RBaUJyQjtJQThCSixrQkFBQztDQUFBLEFBbFpELElBa1pDO1NBalpZLFdBQVc7Ozs7OztJQUN0QixxQ0FLRTs7SUFFRixnQ0F3SUU7O0lBRUYsa0NBbUVFOztJQUVGLGlDQW9CRTs7SUFFRiwrQkFrQ0U7O0lBRUYsK0NBYUU7O0lBRUYsMkRBY0U7O0lBRUYsZ0NBK0NFOztJQUVGLGtDQWtCRTs7Ozs7SUFxQkEsK0JBQXlCOzs7OztJQUN6QixvQ0FBb0M7Ozs7O0lBQ3BDLCtCQUFpQzs7Ozs7SUFDakMsNEJBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT0NDX0NBUlRfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENhcnREYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBEZXByZWNhdGVkQ2FydEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQge1xuICBnZXRBY3RpdmVDYXJ0SWQsXG4gIGdldENhcnRIYXNQZW5kaW5nUHJvY2Vzc2VzU2VsZWN0b3JGYWN0b3J5LFxufSBmcm9tICcuLi9zZWxlY3RvcnMvbXVsdGktY2FydC5zZWxlY3Rvcic7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjVcbiAqXG4gKiBzcGFydGFjdXMgbmdyeCBlZmZlY3RzIHdpbGwgbm8gbG9uZ2VyIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJXG4gKlxuICogVE9ETyhpc3N1ZTojNDUwNylcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZENhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydEZhaWxcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DbGVhckV4cGlyZWRDb3Vwb25zXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0XG4gICAgfCBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5MT0FEX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBncm91cEJ5KHBheWxvYWQgPT4gcGF5bG9hZC5jYXJ0SWQpLFxuICAgIG1lcmdlTWFwKGdyb3VwJCA9PlxuICAgICAgZ3JvdXAkLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgICAgICByZXR1cm4gb2YocGF5bG9hZCkucGlwZShcbiAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgICAgICAvLyBUT0RPOiBkZXByZWNhdGVkIC0+IHJlbW92ZSBjaGVjayBmb3Igc3RvcmUgaW4gMi4wIHdoZW4gc3RvcmUgd2lsbCBiZSByZXF1aXJlZFxuICAgICAgICAgICAgICAhdGhpcy5zdG9yZVxuICAgICAgICAgICAgICAgID8gb2YoZmFsc2UpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdChcbiAgICAgICAgICAgICAgICAgICAgICBnZXRDYXJ0SGFzUGVuZGluZ1Byb2Nlc3Nlc1NlbGVjdG9yRmFjdG9yeShwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKFtfLCBoYXNQZW5kaW5nUHJvY2Vzc2VzXSkgPT4gIWhhc1BlbmRpbmdQcm9jZXNzZXMpLFxuICAgICAgICBtYXAoKFtwYXlsb2FkXSkgPT4gcGF5bG9hZCksXG4gICAgICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgICAgICBjb25zdCBsb2FkQ2FydFBhcmFtcyA9IHtcbiAgICAgICAgICAgIHVzZXJJZDogKHBheWxvYWQgJiYgcGF5bG9hZC51c2VySWQpIHx8IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiAocGF5bG9hZCAmJiBwYXlsb2FkLmNhcnRJZCkgfHwgdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh0aGlzLmlzTWlzc2luZ0RhdGEobG9hZENhcnRQYXJhbXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKHt9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAgICAgLmxvYWQobG9hZENhcnRQYXJhbXMudXNlcklkLCBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHdpdGggdGhlIGBjYXJ0YCBzdG9yZSBmZWF0dXJlXG4gICAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGRlcHJlY2F0ZWQgLT4gcmVtb3ZlIGNoZWNrIGZvciBzdG9yZSBpbiAyLjAgd2hlbiBzdG9yZSB3aWxsIGJlIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgIXRoaXMuc3RvcmVcbiAgICAgICAgICAgICAgICAgID8gb2YocGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgICAgICAgICAgICA6IHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZ2V0QWN0aXZlQ2FydElkKSlcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbWVyZ2VNYXAoKFtjYXJ0LCBhY3RpdmVDYXJ0SWRdOiBbQ2FydCwgc3RyaW5nXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGNhcnQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGBjYXJ0YCBzdG9yZSBicmFuY2ggc2hvdWxkIG9ubHkgYmUgdXBkYXRlZCBmb3IgYWN0aXZlIGNhcnRcbiAgICAgICAgICAgICAgICAgIC8vIGF2b2lkIGRpc3BhdGNoaW5nIExvYWRDYXJ0U3VjY2VzcyBhY3Rpb24gb24gZGlmZmVyZW50IGNhcnQgbG9hZHNcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhcnRQYXJhbXMuY2FydElkID09PSBhY3RpdmVDYXJ0SWQgfHxcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhcnRQYXJhbXMuY2FydElkID09PSBPQ0NfQ0FSVF9JRF9DVVJSRU5UXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzKGNhcnQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgY2FydCxcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGxvYWRDYXJ0UGFyYW1zLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYURhdGE6IHBheWxvYWQuZXh0cmFEYXRhLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGlmIChsb2FkQ2FydFBhcmFtcy5jYXJ0SWQgPT09IE9DQ19DQVJUX0lEX0NVUlJFTlQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZpbmcgY2FydCBmcm9tIGVudGl0eSBvYmplY3QgdW5kZXIgYGN1cnJlbnRgIGtleSBhcyBpdCBpcyBubyBsb25nZXIgbmVlZGVkLlxuICAgICAgICAgICAgICAgICAgICAvLyBDdXJyZW50IGNhcnQgaXMgbG9hZGVkIHVuZGVyIGl0J3MgY29kZSBlbnRpdHkuXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydChPQ0NfQ0FSVF9JRF9DVVJSRU5UKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zID0gW1xuICAgICAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbCh7fSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgICAgICAgY2FydElkOiBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3Vwb25FeHBpcmVkRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIGVyciA9PiBlcnIucmVhc29uID09PSAnaW52YWxpZCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChjb3Vwb25FeHBpcmVkRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGNvdXBvbnMgYWN0aW9ucyBqdXN0IHdhbnRlZCB0byByZWxvYWQgY2FydCBhZ2FpblxuICAgICAgICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBkbyBpdCBpbiByZWZyZXNoIG9yIGtlZXAgdGhhdCBhY3Rpb25cbiAgICAgICAgICAgICAgICAgIC8vIGhvd2V2ZXIgcmVtb3ZpbmcgdGhpcyBhY3Rpb24gd2lsbCBiZSBhIGJyZWFraW5nIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoYXQgYWN0aW9uIGluIDIuMCByZWxlYXNlXG4gICAgICAgICAgICAgICAgICAvLyBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHsgLi4ucGF5bG9hZCB9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNsZWFyRXhwaXJlZENvdXBvbnMoe30pLFxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2FydE5vdEZvdW5kRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgZXJyID0+IGVyci5yZWFzb24gPT09ICdub3RGb3VuZCcgfHwgJ1Vua25vd25SZXNvdXJjZUVycm9yJ1xuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjYXJ0Tm90Rm91bmRFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciBjYXJ0IGlzIHJlc3BvbnNpYmxlIGZvciByZW1vdmluZyBjYXJ0IGluIGBjYXJ0YCBzdG9yZSBmZWF0dXJlLlxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY2FydCBkb2VzIHRoZSBzYW1lIHRoaW5nLCBidXQgaW4gYG11bHRpLWNhcnRgIHN0b3JlIGZlYXR1cmUuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNsZWFyQ2FydCgpLFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0KGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCksXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZnJvbShbXG4gICAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbChcbiAgICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgICAgIGNhcnRJZDogbG9hZENhcnRQYXJhbXMuY2FydElkLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY3JlYXRlQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuTWVyZ2VNdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuU2V0VGVtcENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNSRUFURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmNyZWF0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5vbGRDYXJ0SWQsIHBheWxvYWQudG9NZXJnZUNhcnRHdWlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKGNhcnQ6IENhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbmFsQWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgaWYgKHBheWxvYWQub2xkQ2FydElkKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbmFsQWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgY29uZGl0aW9uYWxBY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLk1lcmdlTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgICAgICBvbGRDYXJ0SWQ6IHBheWxvYWQub2xkQ2FydElkLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBgY2FydGAgc3RvcmUgYnJhbmNoIHNob3VsZCBvbmx5IGJlIHVwZGF0ZWQgZm9yIGFjdGl2ZSBjYXJ0XG4gICAgICAgICAgICAvLyBhdm9pZCBkaXNwYXRjaGluZyBDcmVhdGVDYXJ0U3VjY2VzcyBhY3Rpb24gb24gZGlmZmVyZW50IGNhcnQgbG9hZHNcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmV4dHJhRGF0YSAmJiBwYXlsb2FkLmV4dHJhRGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9uYWxBY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2VzcyhjYXJ0KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIGNhcnQsXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBleHRyYURhdGE6IHBheWxvYWQuZXh0cmFEYXRhLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlNldFRlbXBDYXJ0KHtcbiAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgIHRlbXBDYXJ0SWQ6IHBheWxvYWQudGVtcENhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIC4uLmNvbmRpdGlvbmFsQWN0aW9ucyxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgdGVtcENhcnRJZDogcGF5bG9hZC50ZW1wQ2FydElkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbWVyZ2VDYXJ0JDogT2JzZXJ2YWJsZTxEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NRVJHRV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkKHBheWxvYWQudXNlcklkLCBPQ0NfQ0FSVF9JRF9DVVJSRU5UKS5waXBlKFxuICAgICAgICBtZXJnZU1hcChjdXJyZW50Q2FydCA9PiB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIG9sZENhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIHRvTWVyZ2VDYXJ0R3VpZDogY3VycmVudENhcnQgPyBjdXJyZW50Q2FydC5ndWlkIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBleHRyYURhdGE6IHBheWxvYWQuZXh0cmFEYXRhLFxuICAgICAgICAgICAgICB0ZW1wQ2FydElkOiBwYXlsb2FkLnRlbXBDYXJ0SWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2gkOiBPYnNlcnZhYmxlPFxuICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlRfU1VDQ0VTUyxcbiAgICAgIENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX0FERF9WT1VDSEVSX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9WT1VDSEVSX1NVQ0NFU1NcbiAgICApLFxuICAgIG1hcChcbiAgICAgIChcbiAgICAgICAgYWN0aW9uOlxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzc1xuICAgICAgICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkVm91Y2hlclN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyU3VjY2Vzc1xuICAgICAgKSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT5cbiAgICAgIGZyb20oW1xuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudChwYXlsb2FkLmNhcnRJZCksXG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgfSksXG4gICAgICBdKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaFdpdGhvdXRQcm9jZXNzZXMkOiBPYnNlcnZhYmxlPFxuICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtYXAoXG4gICAgICBwYXlsb2FkID0+XG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlc2V0Q2FydERldGFpbHNPblNpdGVDb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuUmVzZXRDYXJ0RGV0YWlscyB8IENhcnRBY3Rpb25zLlJlc2V0TXVsdGlDYXJ0RGV0YWlsc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFXG4gICAgKSxcbiAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHMoKSxcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlc2V0TXVsdGlDYXJ0RGV0YWlscygpLFxuICAgICAgXTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmFkZEVtYWlsKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lbWFpbClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudChwYXlsb2FkLmNhcnRJZCksXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBkZWxldGVDYXJ0JDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuREVMRVRFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuRGVsZXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGV4aGF1c3RNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0Q29ubmVjdG9yLmRlbGV0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0KCk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRlbGV0ZUNhcnRGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgY2FydERhdGE6IENhcnREYXRhU2VydmljZSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD5cbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAgICogVXNlIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PikgaW5zdGVhZFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmU/OiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+XG4gICkge31cblxuICBwcml2YXRlIGlzTWlzc2luZ0RhdGEocGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiBwYXlsb2FkLnVzZXJJZCA9PT0gdW5kZWZpbmVkIHx8IHBheWxvYWQuY2FydElkID09PSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==