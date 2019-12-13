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
import { CartConnector } from '../../connectors/cart/cart.connector';
import { CartDataService } from '../../facade/cart-data.service';
import * as DeprecatedCartActions from '../actions/cart.action';
import { CartActions } from '../actions/index';
import { getActiveCartId, getCartHasPendingProcessesSelectorFactory, } from '../selectors/multi-cart.selector';
var CartEffects = /** @class */ (function () {
    function CartEffects(actions$, cartConnector, cartData, store) {
        var _this = this;
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.cartData = cartData;
        this.store = store;
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
        })));
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
                    new CartActions.SetFreshCart(cart)
                ], conditionalActions);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return from([
                    new DeprecatedCartActions.CreateCartFail(makeErrorSerializable(error)),
                    new CartActions.CreateMultiCartFail({
                        cartId: payload.cartId,
                        error: makeErrorSerializable(error),
                    }),
                ]);
            })));
        })));
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
                    }),
                ];
            })));
        })));
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
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUNMLGVBQWUsRUFDZix5Q0FBeUMsR0FDMUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUUxQztJQXlYRSxxQkFDVSxRQUFpQixFQUNqQixhQUE0QixFQUM1QixRQUF5QixFQUN6QixLQUFpQztRQUozQyxpQkFLSTtRQUpNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBNEI7UUExWDNDLGNBQVMsR0FRTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxFQUN2QyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFzQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDL0QsT0FBTzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sRUFBZCxDQUFjLEVBQUMsRUFDbEMsUUFBUTs7OztRQUFDLFVBQUEsTUFBTTtZQUNiLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FDVCxTQUFTOzs7O1lBQUMsVUFBQSxPQUFPO2dCQUNmLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDckIsY0FBYztnQkFDWixnRkFBZ0Y7Z0JBQ2hGLENBQUMsS0FBSSxDQUFDLEtBQUs7b0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLE1BQU0sQ0FDSix5Q0FBeUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQzFELENBQ0YsQ0FDTixDQUNGLENBQUM7WUFDSixDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1lBQUMsVUFBQyxFQUF3QjtvQkFBeEIsMEJBQXdCLEVBQXZCLFNBQUMsRUFBRSwyQkFBbUI7Z0JBQU0sT0FBQSxDQUFDLG1CQUFtQjtZQUFwQixDQUFvQixFQUFDLEVBQzFELEdBQUc7Ozs7WUFBQyxVQUFDLEVBQVM7b0JBQVQsMEJBQVMsRUFBUixlQUFPO2dCQUFNLE9BQUEsT0FBTztZQUFQLENBQU8sRUFBQyxFQUMzQixTQUFTOzs7O1lBQUMsVUFBQSxPQUFPOztvQkFDVCxjQUFjLEdBQUc7b0JBQ3JCLE1BQU0sRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUMzRCxNQUFNLEVBQUUsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtpQkFDNUQ7Z0JBRUQsSUFBSSxLQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUN0QyxPQUFPLElBQUksQ0FBQzt3QkFDVixJQUFJLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7d0JBQzFDLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDOzRCQUNoQyxNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU07eUJBQzlCLENBQUM7cUJBQ0gsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELE9BQU8sS0FBSSxDQUFDLGFBQWE7cUJBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUM7cUJBQ2xELElBQUk7Z0JBQ0gsNkNBQTZDO2dCQUM3QyxjQUFjO2dCQUNaLGdGQUFnRjtnQkFDaEYsQ0FBQyxLQUFJLENBQUMsS0FBSztvQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3BCLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FDN0MsRUFDRCxRQUFROzs7O2dCQUFDLFVBQUMsRUFBb0M7d0JBQXBDLDBCQUFvQyxFQUFuQyxZQUFJLEVBQUUsb0JBQVk7O3dCQUN2QixPQUFPLEdBQUcsRUFBRTtvQkFDaEIsSUFBSSxJQUFJLEVBQUU7d0JBQ1IsNkRBQTZEO3dCQUM3RCxtRUFBbUU7d0JBQ25FLElBQ0UsY0FBYyxDQUFDLE1BQU0sS0FBSyxZQUFZOzRCQUN0QyxjQUFjLENBQUMsTUFBTSxLQUFLLG1CQUFtQixFQUM3Qzs0QkFDQSxPQUFPLENBQUMsSUFBSSxDQUNWLElBQUkscUJBQXFCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUNoRCxDQUFDO3lCQUNIO3dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQ1YsSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUM7NEJBQ25DLElBQUksTUFBQTs0QkFDSixNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU07NEJBQzdCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUzt5QkFDN0IsQ0FBQyxDQUNILENBQUM7d0JBQ0YsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLG1CQUFtQixFQUFFOzRCQUNqRCxrRkFBa0Y7NEJBQ2xGLGlEQUFpRDs0QkFDakQsT0FBTyxDQUFDLElBQUksQ0FDVixJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FDaEQsQ0FBQzt5QkFDSDtxQkFDRjt5QkFBTTt3QkFDTCxPQUFPLEdBQUc7NEJBQ1IsSUFBSSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDOzRCQUMxQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztnQ0FDaEMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNOzZCQUM5QixDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsT0FBTyxPQUFPLENBQUM7Z0JBQ2pCLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7Z0JBQUMsVUFBQSxLQUFLOzt3QkFDUixtQkFBbUIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O29CQUNuRCxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUF4QixDQUF3QixFQUNoQztvQkFDRCxJQUFJLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLHlEQUF5RDt3QkFDekQsa0RBQWtEO3dCQUNsRCx5REFBeUQ7d0JBQ3pELG9DQUFvQzt3QkFDcEMsd0JBQXdCO3dCQUN4QixPQUFPLElBQUksQ0FBQzs0QkFDVixJQUFJLFdBQVcsQ0FBQyxRQUFRLHNCQUFNLE9BQU8sRUFBRzs0QkFDeEMsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDO3lCQUN4QyxDQUFDLENBQUM7cUJBQ0o7b0JBRUQsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTs7NEJBQ3hDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7d0JBQ2xELFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sS0FBSyxVQUFVLElBQUksc0JBQXNCLEVBQW5ELENBQW1ELEVBQzNEO3dCQUNELElBQUksa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDakMsdUVBQXVFOzRCQUN2RSxzRUFBc0U7NEJBQ3RFLE9BQU8sSUFBSSxDQUFDO2dDQUNWLElBQUkscUJBQXFCLENBQUMsU0FBUyxFQUFFO2dDQUNyQyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQzs2QkFDbEQsQ0FBQyxDQUFDO3lCQUNKO3FCQUNGO29CQUNELE9BQU8sSUFBSSxDQUFDO3dCQUNWLElBQUkscUJBQXFCLENBQUMsWUFBWSxDQUNwQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0I7d0JBQ0QsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUM7NEJBQ2hDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTTs0QkFDN0IsS0FBSyxFQUFFLHFCQUFxQixDQUFDLEtBQUssQ0FBQzt5QkFDcEMsQ0FBQztxQkFDSCxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFDLENBQ0gsQ0FBQztZQUNOLENBQUMsRUFBQyxDQUNIO1FBdkhELENBdUhDLEVBQ0YsQ0FDRixDQUFDO1FBR0YsZ0JBQVcsR0FRUCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxFQUN6QyxHQUFHOzs7O1FBQUMsVUFBQyxNQUF3QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDakUsUUFBUTs7OztRQUFDLFVBQUEsT0FBTztZQUNkLE9BQU8sS0FBSSxDQUFDLGFBQWE7aUJBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztpQkFDbEUsSUFBSSxDQUNILFNBQVM7Ozs7WUFBQyxVQUFDLElBQVU7O29CQUNiLGtCQUFrQixHQUFHLEVBQUU7Z0JBQzdCLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtvQkFDckIsa0JBQWtCLENBQUMsSUFBSSxDQUNyQixJQUFJLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDO3dCQUN6QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07d0JBQ3RCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDbEIsQ0FBQyxDQUNILENBQUM7b0JBQ0Ysa0JBQWtCLENBQUMsSUFBSSxDQUNyQixJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDcEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2pCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztxQkFDN0IsQ0FBQyxDQUNILENBQUM7aUJBQ0g7Z0JBQ0QsNkRBQTZEO2dCQUM3RCxxRUFBcUU7Z0JBQ3JFLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFDakQsa0JBQWtCLENBQUMsSUFBSSxDQUNyQixJQUFJLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUNsRCxDQUFDO2lCQUNIO2dCQUNEO29CQUNFLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDO3dCQUNyQyxJQUFJLE1BQUE7d0JBQ0osTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7cUJBQzdCLENBQUM7b0JBQ0YsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzttQkFDL0Isa0JBQWtCLEVBQ3JCO1lBQ0osQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLElBQUksQ0FBQztvQkFDSCxJQUFJLHFCQUFxQixDQUFDLGNBQWMsQ0FDdEMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCO29CQUNELElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUFDO3dCQUNsQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07d0JBQ3RCLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7cUJBQ3BDLENBQUM7aUJBQ0gsQ0FBQztZQVJGLENBUUUsRUFDSCxDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0YsZUFBVSxHQUFpRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0UsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxFQUN4QyxHQUFHOzs7O1FBQUMsVUFBQyxNQUF1QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDaEUsUUFBUTs7OztRQUFDLFVBQUEsT0FBTztZQUNkLE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FDdEUsUUFBUTs7OztZQUFDLFVBQUEsV0FBVztnQkFDbEIsT0FBTztvQkFDTCxJQUFJLHFCQUFxQixDQUFDLFVBQVUsQ0FBQzt3QkFDbkMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU07d0JBQ3pCLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVM7d0JBQzNELFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztxQkFDN0IsQ0FBQztpQkFDSCxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixhQUFRLEdBRUosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FDSixXQUFXLENBQUMsc0JBQXNCLEVBQ2xDLFdBQVcsQ0FBQyx5QkFBeUIsRUFDckMsV0FBVyxDQUFDLHlCQUF5QixFQUNyQyxxQkFBcUIsQ0FBQyx5QkFBeUIsRUFDL0MsZUFBZSxDQUFDLG9DQUFvQyxFQUNwRCxXQUFXLENBQUMsd0JBQXdCLEVBQ3BDLFdBQVcsQ0FBQywyQkFBMkIsQ0FDeEMsRUFDRCxHQUFHOzs7O1FBQ0QsVUFDRSxNQU93QyxJQUNyQyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUNwQixFQUNELFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZixPQUFBLElBQUksQ0FBQztnQkFDSCxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUN0RCxJQUFJLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztvQkFDakMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO29CQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07aUJBQ3ZCLENBQUM7YUFDSCxDQUFDO1FBTkYsQ0FNRSxFQUNILENBQ0YsQ0FBQztRQUdGLDZCQUF3QixHQUVwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLEVBQ2hELEdBQUc7Ozs7UUFBQyxVQUFDLE1BQThDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUN2RSxHQUFHOzs7O1FBQ0QsVUFBQSxPQUFPO1lBQ0wsT0FBQSxJQUFJLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztnQkFDakMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07YUFDdkIsQ0FBQztRQUhGLENBR0UsRUFDTCxDQUNGLENBQUM7UUFHRix5Q0FBb0MsR0FFaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FDSixrQkFBa0IsQ0FBQyxlQUFlLEVBQ2xDLGtCQUFrQixDQUFDLGVBQWUsQ0FDbkMsRUFDRCxRQUFROzs7UUFBQztZQUNQLE9BQU87Z0JBQ0wsSUFBSSxxQkFBcUIsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDNUMsSUFBSSxXQUFXLENBQUMscUJBQXFCLEVBQUU7YUFDeEMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixjQUFTLEdBT0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUMvQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUE0QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDckUsUUFBUTs7OztRQUFDLFVBQUEsT0FBTztZQUNkLE9BQUEsS0FBSSxDQUFDLGFBQWE7aUJBQ2YsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUN2RCxJQUFJLENBQ0gsUUFBUTs7O1lBQUM7Z0JBQ1AsT0FBTztvQkFDTCxJQUFJLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDO3dCQUM5QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07d0JBQ3RCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtxQkFDdkIsQ0FBQztvQkFDRixJQUFJLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQzt3QkFDekMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07cUJBQ3ZCLENBQUM7aUJBQ0gsQ0FBQztZQUNKLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxJQUFJLENBQUM7b0JBQ0gsSUFBSSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FDMUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCO29CQUNELElBQUksV0FBVyxDQUFDLHVCQUF1QixDQUFDO3dCQUN0QyxLQUFLLEVBQUUscUJBQXFCLENBQUMsS0FBSyxDQUFDO3dCQUNuQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07d0JBQ3RCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtxQkFDdkIsQ0FBQztvQkFDRixJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN0RCxJQUFJLHFCQUFxQixDQUFDLFFBQVEsQ0FBQzt3QkFDakMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07cUJBQ3ZCLENBQUM7aUJBQ0gsQ0FBQztZQWRGLENBY0UsRUFDSCxDQUNGO1FBaENILENBZ0NHLEVBQ0osQ0FDRixDQUFDO1FBR0YsZ0JBQVcsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9DLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsRUFDekMsR0FBRzs7OztRQUFDLFVBQUMsTUFBd0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ2pFLFVBQVU7Ozs7UUFBQyxVQUFBLE9BQU87WUFDaEIsT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzVELEdBQUc7OztZQUFDO2dCQUNGLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMvQyxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUkscUJBQXFCLENBQUMsY0FBYyxDQUN0QyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsRUFDRixDQUNGO1FBWEQsQ0FXQyxFQUNGLENBQ0YsQ0FBQztJQXlCQyxDQUFDOzs7Ozs7SUFFSSxtQ0FBYTs7Ozs7SUFBckIsVUFBc0IsT0FBMkM7UUFDL0QsT0FBTyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQztJQUN0RSxDQUFDOztnQkFsWUYsVUFBVTs7OztnQkE3QkYsT0FBTztnQkFtQlAsYUFBYTtnQkFDYixlQUFlO2dCQW5CUCxLQUFLOztJQStCcEI7UUFEQyxNQUFNLEVBQUU7MENBQ0UsVUFBVTtrREFzSW5CO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ksVUFBVTtvREE4RHJCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0csVUFBVTttREFpQnBCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0MsVUFBVTtpREFpQ2xCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ2lCLFVBQVU7aUVBWWxDO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQzZCLFVBQVU7NkVBYTlDO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0UsVUFBVTtrREE2Q25CO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ksVUFBVTtvREFpQnJCO0lBOEJKLGtCQUFDO0NBQUEsQUFuWUQsSUFtWUM7U0FsWVksV0FBVzs7O0lBQ3RCLGdDQXVJRTs7SUFFRixrQ0ErREU7O0lBRUYsaUNBa0JFOztJQUVGLCtCQWtDRTs7SUFFRiwrQ0FhRTs7SUFFRiwyREFjRTs7SUFFRixnQ0E4Q0U7O0lBRUYsa0NBa0JFOzs7OztJQXFCQSwrQkFBeUI7Ozs7O0lBQ3pCLG9DQUFvQzs7Ozs7SUFDcEMsK0JBQWlDOzs7OztJQUNqQyw0QkFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBjb25jYXRNYXAsXG4gIGV4aGF1c3RNYXAsXG4gIGZpbHRlcixcbiAgZ3JvdXBCeSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfQ0FSVF9JRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENhcnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2NhcnQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7XG4gIGdldEFjdGl2ZUNhcnRJZCxcbiAgZ2V0Q2FydEhhc1BlbmRpbmdQcm9jZXNzZXNTZWxlY3RvckZhY3RvcnksXG59IGZyb20gJy4uL3NlbGVjdG9ycy9tdWx0aS1jYXJ0LnNlbGVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ2xlYXJFeHBpcmVkQ291cG9uc1xuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNsZWFyQ2FydFxuICAgIHwgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTE9BRF9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZ3JvdXBCeShwYXlsb2FkID0+IHBheWxvYWQuY2FydElkKSxcbiAgICBtZXJnZU1hcChncm91cCQgPT5cbiAgICAgIGdyb3VwJC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKHBheWxvYWQpLnBpcGUoXG4gICAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICAgICAgLy8gVE9ETzogZGVwcmVjYXRlZCAtPiByZW1vdmUgY2hlY2sgZm9yIHN0b3JlIGluIDIuMCB3aGVuIHN0b3JlIHdpbGwgYmUgcmVxdWlyZWRcbiAgICAgICAgICAgICAgIXRoaXMuc3RvcmVcbiAgICAgICAgICAgICAgICA/IG9mKGZhbHNlKVxuICAgICAgICAgICAgICAgIDogdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q2FydEhhc1BlbmRpbmdQcm9jZXNzZXNTZWxlY3RvckZhY3RvcnkocGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbXywgaGFzUGVuZGluZ1Byb2Nlc3Nlc10pID0+ICFoYXNQZW5kaW5nUHJvY2Vzc2VzKSxcbiAgICAgICAgbWFwKChbcGF5bG9hZF0pID0+IHBheWxvYWQpLFxuICAgICAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICAgICAgY29uc3QgbG9hZENhcnRQYXJhbXMgPSB7XG4gICAgICAgICAgICB1c2VySWQ6IChwYXlsb2FkICYmIHBheWxvYWQudXNlcklkKSB8fCB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZDogKHBheWxvYWQgJiYgcGF5bG9hZC5jYXJ0SWQpIHx8IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAodGhpcy5pc01pc3NpbmdEYXRhKGxvYWRDYXJ0UGFyYW1zKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbCh7fSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgY2FydElkOiBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgICAgIC5sb2FkKGxvYWRDYXJ0UGFyYW1zLnVzZXJJZCwgbG9hZENhcnRQYXJhbXMuY2FydElkKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSB3aXRoIHRoZSBgY2FydGAgc3RvcmUgZmVhdHVyZVxuICAgICAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBkZXByZWNhdGVkIC0+IHJlbW92ZSBjaGVjayBmb3Igc3RvcmUgaW4gMi4wIHdoZW4gc3RvcmUgd2lsbCBiZSByZXF1aXJlZFxuICAgICAgICAgICAgICAgICF0aGlzLnN0b3JlXG4gICAgICAgICAgICAgICAgICA/IG9mKHBheWxvYWQuY2FydElkKVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGdldEFjdGl2ZUNhcnRJZCkpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG1lcmdlTWFwKChbY2FydCwgYWN0aXZlQ2FydElkXTogW0NhcnQsIHN0cmluZ10pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChjYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAvLyBgY2FydGAgc3RvcmUgYnJhbmNoIHNob3VsZCBvbmx5IGJlIHVwZGF0ZWQgZm9yIGFjdGl2ZSBjYXJ0XG4gICAgICAgICAgICAgICAgICAvLyBhdm9pZCBkaXNwYXRjaGluZyBMb2FkQ2FydFN1Y2Nlc3MgYWN0aW9uIG9uIGRpZmZlcmVudCBjYXJ0IGxvYWRzXG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCA9PT0gYWN0aXZlQ2FydElkIHx8XG4gICAgICAgICAgICAgICAgICAgIGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0U3VjY2VzcyhjYXJ0KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgIGNhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBsb2FkQ2FydFBhcmFtcy51c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBpZiAobG9hZENhcnRQYXJhbXMuY2FydElkID09PSBPQ0NfQ0FSVF9JRF9DVVJSRU5UKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92aW5nIGNhcnQgZnJvbSBlbnRpdHkgb2JqZWN0IHVuZGVyIGBjdXJyZW50YCBrZXkgYXMgaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ3VycmVudCBjYXJ0IGlzIGxvYWRlZCB1bmRlciBpdCdzIGNvZGUgZW50aXR5LlxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlbW92ZUNhcnQoT0NDX0NBUlRfSURfQ1VSUkVOVClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYWN0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoe30pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgICAgICAgIGNhcnRJZDogbG9hZENhcnRQYXJhbXMuY2FydElkLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY291cG9uRXhwaXJlZEVycm9ycyA9IGVycm9yLmVycm9yLmVycm9ycy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICBlcnIgPT4gZXJyLnJlYXNvbiA9PT0gJ2ludmFsaWQnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoY291cG9uRXhwaXJlZEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjbGVhciBjb3Vwb25zIGFjdGlvbnMganVzdCB3YW50ZWQgdG8gcmVsb2FkIGNhcnQgYWdhaW5cbiAgICAgICAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gZG8gaXQgaW4gcmVmcmVzaCBvciBrZWVwIHRoYXQgYWN0aW9uXG4gICAgICAgICAgICAgICAgICAvLyBob3dldmVyIHJlbW92aW5nIHRoaXMgYWN0aW9uIHdpbGwgYmUgYSBicmVha2luZyBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGF0IGFjdGlvbiBpbiAyLjAgcmVsZWFzZVxuICAgICAgICAgICAgICAgICAgLy8gQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZnJvbShbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7IC4uLnBheWxvYWQgfSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DbGVhckV4cGlyZWRDb3Vwb25zKHt9KSxcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnROb3RGb3VuZEVycm9ycyA9IGVycm9yLmVycm9yLmVycm9ycy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIGVyciA9PiBlcnIucmVhc29uID09PSAnbm90Rm91bmQnIHx8ICdVbmtub3duUmVzb3VyY2VFcnJvcidcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBpZiAoY2FydE5vdEZvdW5kRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgY2FydCBpcyByZXNwb25zaWJsZSBmb3IgcmVtb3ZpbmcgY2FydCBpbiBgY2FydGAgc3RvcmUgZmVhdHVyZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNhcnQgZG9lcyB0aGUgc2FtZSB0aGluZywgYnV0IGluIGBtdWx0aS1jYXJ0YCBzdG9yZSBmZWF0dXJlLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnJvbShbXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DbGVhckNhcnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydChsb2FkQ2FydFBhcmFtcy5jYXJ0SWQpLFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoXG4gICAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjcmVhdGVDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0U3VjY2Vzc1xuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5TZXRGcmVzaENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNSRUFURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmNyZWF0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5vbGRDYXJ0SWQsIHBheWxvYWQudG9NZXJnZUNhcnRHdWlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKGNhcnQ6IENhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbmFsQWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgaWYgKHBheWxvYWQub2xkQ2FydElkKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbmFsQWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgY29uZGl0aW9uYWxBY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLk1lcmdlTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgICAgICBvbGRDYXJ0SWQ6IHBheWxvYWQub2xkQ2FydElkLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBgY2FydGAgc3RvcmUgYnJhbmNoIHNob3VsZCBvbmx5IGJlIHVwZGF0ZWQgZm9yIGFjdGl2ZSBjYXJ0XG4gICAgICAgICAgICAvLyBhdm9pZCBkaXNwYXRjaGluZyBDcmVhdGVDYXJ0U3VjY2VzcyBhY3Rpb24gb24gZGlmZmVyZW50IGNhcnQgbG9hZHNcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmV4dHJhRGF0YSAmJiBwYXlsb2FkLmV4dHJhRGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9uYWxBY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2VzcyhjYXJ0KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIGNhcnQsXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBleHRyYURhdGE6IHBheWxvYWQuZXh0cmFEYXRhLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlNldEZyZXNoQ2FydChjYXJ0KSxcbiAgICAgICAgICAgICAgLi4uY29uZGl0aW9uYWxBY3Rpb25zLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0RmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIG1lcmdlQ2FydCQ6IE9ic2VydmFibGU8RGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZChwYXlsb2FkLnVzZXJJZCwgT0NDX0NBUlRfSURfQ1VSUkVOVCkucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoY3VycmVudENhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBvbGRDYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IGN1cnJlbnRDYXJ0ID8gY3VycmVudENhcnQuZ3VpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2gkOiBPYnNlcnZhYmxlPFxuICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlRfU1VDQ0VTUyxcbiAgICAgIENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX0FERF9WT1VDSEVSX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9WT1VDSEVSX1NVQ0NFU1NcbiAgICApLFxuICAgIG1hcChcbiAgICAgIChcbiAgICAgICAgYWN0aW9uOlxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzc1xuICAgICAgICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkVm91Y2hlclN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyU3VjY2Vzc1xuICAgICAgKSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT5cbiAgICAgIGZyb20oW1xuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudChwYXlsb2FkLmNhcnRJZCksXG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgfSksXG4gICAgICBdKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaFdpdGhvdXRQcm9jZXNzZXMkOiBPYnNlcnZhYmxlPFxuICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtYXAoXG4gICAgICBwYXlsb2FkID0+XG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlc2V0Q2FydERldGFpbHNPblNpdGVDb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuUmVzZXRDYXJ0RGV0YWlscyB8IENhcnRBY3Rpb25zLlJlc2V0TXVsdGlDYXJ0RGV0YWlsc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFXG4gICAgKSxcbiAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHMoKSxcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlc2V0TXVsdGlDYXJ0RGV0YWlscygpLFxuICAgICAgXTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmFkZEVtYWlsKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lbWFpbClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudChwYXlsb2FkLmNhcnRJZCksXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZGVsZXRlQ2FydCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRFTEVURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRlbGV0ZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBleGhhdXN0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydENvbm5lY3Rvci5kZWxldGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKS5waXBlKFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNsZWFyQ2FydCgpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0RmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+XG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAqIFVzZSBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvciwgY2FydERhdGE6IENhcnREYXRhU2VydmljZSwgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4pIGluc3RlYWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgY2FydERhdGE6IENhcnREYXRhU2VydmljZVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgY2FydERhdGE6IENhcnREYXRhU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JlPzogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PlxuICApIHt9XG5cbiAgcHJpdmF0ZSBpc01pc3NpbmdEYXRhKHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gcGF5bG9hZC51c2VySWQgPT09IHVuZGVmaW5lZCB8fCBwYXlsb2FkLmNhcnRJZCA9PT0gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=