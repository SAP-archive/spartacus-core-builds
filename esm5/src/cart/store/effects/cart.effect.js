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
import { getCartHasPendingProcessesSelectorFactory } from '../selectors/multi-cart.selector';
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
                    .pipe(mergeMap((/**
                 * @param {?} cart
                 * @return {?}
                 */
                function (cart) {
                    /** @type {?} */
                    var actions = [];
                    if (cart) {
                        actions.push(new DeprecatedCartActions.LoadCartSuccess(cart));
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
                var mergeActions = [];
                if (payload.oldCartId) {
                    mergeActions.push(new DeprecatedCartActions.MergeCartSuccess({
                        userId: payload.userId,
                        cartId: cart.code,
                    }));
                    mergeActions.push(new CartActions.MergeMultiCartSuccess({
                        userId: payload.userId,
                        cartId: cart.code,
                        oldCartId: payload.oldCartId,
                    }));
                }
                return tslib_1.__spread([
                    new DeprecatedCartActions.CreateCartSuccess(cart),
                    new CartActions.CreateMultiCartSuccess({
                        cart: cart,
                        userId: payload.userId,
                        extraData: payload.extraData,
                    }),
                    new CartActions.SetFreshCart(cart)
                ], mergeActions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFN0Y7SUFtV0UscUJBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsUUFBeUIsRUFDekIsS0FBaUM7UUFKM0MsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQTRCO1FBcFczQyxjQUFTLEdBUUwsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsRUFDdkMsR0FBRzs7OztRQUFDLFVBQUMsTUFBc0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQy9ELE9BQU87Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLEVBQWQsQ0FBYyxFQUFDLEVBQ2xDLFFBQVE7Ozs7UUFBQyxVQUFBLE1BQU07WUFDYixPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQ1QsU0FBUzs7OztZQUFDLFVBQUEsT0FBTztnQkFDZixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3JCLGNBQWM7Z0JBQ1osZ0ZBQWdGO2dCQUNoRixDQUFDLEtBQUksQ0FBQyxLQUFLO29CQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29CQUNYLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixNQUFNLENBQ0oseUNBQXlDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUMxRCxDQUNGLENBQ04sQ0FDRixDQUFDO1lBQ0osQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztZQUFDLFVBQUMsRUFBd0I7b0JBQXhCLDBCQUF3QixFQUF2QixTQUFDLEVBQUUsMkJBQW1CO2dCQUFNLE9BQUEsQ0FBQyxtQkFBbUI7WUFBcEIsQ0FBb0IsRUFBQyxFQUMxRCxHQUFHOzs7O1lBQUMsVUFBQyxFQUFTO29CQUFULDBCQUFTLEVBQVIsZUFBTztnQkFBTSxPQUFBLE9BQU87WUFBUCxDQUFPLEVBQUMsRUFDM0IsU0FBUzs7OztZQUFDLFVBQUEsT0FBTzs7b0JBQ1QsY0FBYyxHQUFHO29CQUNyQixNQUFNLEVBQUUsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtvQkFDM0QsTUFBTSxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07aUJBQzVEO2dCQUVELElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDdEMsT0FBTyxJQUFJLENBQUM7d0JBQ1YsSUFBSSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3dCQUMxQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzs0QkFDaEMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNO3lCQUM5QixDQUFDO3FCQUNILENBQUMsQ0FBQztpQkFDSjtnQkFDRCxPQUFPLEtBQUksQ0FBQyxhQUFhO3FCQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDO3FCQUNsRCxJQUFJLENBQ0gsUUFBUTs7OztnQkFBQyxVQUFDLElBQVU7O3dCQUNkLE9BQU8sR0FBRyxFQUFFO29CQUNoQixJQUFJLElBQUksRUFBRTt3QkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQXFCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzlELE9BQU8sQ0FBQyxJQUFJLENBQ1YsSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUM7NEJBQ25DLElBQUksTUFBQTs0QkFDSixNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU07NEJBQzdCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUzt5QkFDN0IsQ0FBQyxDQUNILENBQUM7d0JBQ0YsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLG1CQUFtQixFQUFFOzRCQUNqRCxrRkFBa0Y7NEJBQ2xGLGlEQUFpRDs0QkFDakQsT0FBTyxDQUFDLElBQUksQ0FDVixJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FDaEQsQ0FBQzt5QkFDSDtxQkFDRjt5QkFBTTt3QkFDTCxPQUFPLEdBQUc7NEJBQ1IsSUFBSSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDOzRCQUMxQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztnQ0FDaEMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNOzZCQUM5QixDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsT0FBTyxPQUFPLENBQUM7Z0JBQ2pCLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7Z0JBQUMsVUFBQSxLQUFLOzt3QkFDUixtQkFBbUIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O29CQUNuRCxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUF4QixDQUF3QixFQUNoQztvQkFDRCxJQUFJLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLHlEQUF5RDt3QkFDekQsa0RBQWtEO3dCQUNsRCx5REFBeUQ7d0JBQ3pELG9DQUFvQzt3QkFDcEMsd0JBQXdCO3dCQUN4QixPQUFPLElBQUksQ0FBQzs0QkFDVixJQUFJLFdBQVcsQ0FBQyxRQUFRLHNCQUFNLE9BQU8sRUFBRzs0QkFDeEMsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDO3lCQUN4QyxDQUFDLENBQUM7cUJBQ0o7b0JBRUQsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTs7NEJBQ3hDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7d0JBQ2xELFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sS0FBSyxVQUFVLElBQUksc0JBQXNCLEVBQW5ELENBQW1ELEVBQzNEO3dCQUNELElBQUksa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDakMsdUVBQXVFOzRCQUN2RSxzRUFBc0U7NEJBQ3RFLE9BQU8sSUFBSSxDQUFDO2dDQUNWLElBQUkscUJBQXFCLENBQUMsU0FBUyxFQUFFO2dDQUNyQyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQzs2QkFDbEQsQ0FBQyxDQUFDO3lCQUNKO3FCQUNGO29CQUNELE9BQU8sSUFBSSxDQUFDO3dCQUNWLElBQUkscUJBQXFCLENBQUMsWUFBWSxDQUNwQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0I7d0JBQ0QsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUM7NEJBQ2hDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTTs0QkFDN0IsS0FBSyxFQUFFLHFCQUFxQixDQUFDLEtBQUssQ0FBQzt5QkFDcEMsQ0FBQztxQkFDSCxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFDLENBQ0gsQ0FBQztZQUNOLENBQUMsRUFBQyxDQUNIO1FBdkdELENBdUdDLEVBQ0YsQ0FDRixDQUFDO1FBR0YsZ0JBQVcsR0FRUCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxFQUN6QyxHQUFHOzs7O1FBQUMsVUFBQyxNQUF3QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDakUsUUFBUTs7OztRQUFDLFVBQUEsT0FBTztZQUNkLE9BQU8sS0FBSSxDQUFDLGFBQWE7aUJBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztpQkFDbEUsSUFBSSxDQUNILFNBQVM7Ozs7WUFBQyxVQUFDLElBQVU7O29CQUNiLFlBQVksR0FBRyxFQUFFO2dCQUN2QixJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7b0JBQ3JCLFlBQVksQ0FBQyxJQUFJLENBQ2YsSUFBSSxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDekMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7cUJBQ2xCLENBQUMsQ0FDSCxDQUFDO29CQUNGLFlBQVksQ0FBQyxJQUFJLENBQ2YsSUFBSSxXQUFXLENBQUMscUJBQXFCLENBQUM7d0JBQ3BDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTt3QkFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNqQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7cUJBQzdCLENBQUMsQ0FDSCxDQUFDO2lCQUNIO2dCQUNEO29CQUNFLElBQUkscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO29CQUNqRCxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDckMsSUFBSSxNQUFBO3dCQUNKLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTt3QkFDdEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO3FCQUM3QixDQUFDO29CQUNGLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7bUJBQy9CLFlBQVksRUFDZjtZQUNKLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxJQUFJLENBQUM7b0JBQ0gsSUFBSSxxQkFBcUIsQ0FBQyxjQUFjLENBQ3RDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QjtvQkFDRCxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixLQUFLLEVBQUUscUJBQXFCLENBQUMsS0FBSyxDQUFDO3FCQUNwQyxDQUFDO2lCQUNILENBQUM7WUFSRixDQVFFLEVBQ0gsQ0FDRixDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLGVBQVUsR0FBaUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNFLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsRUFDeEMsR0FBRzs7OztRQUFDLFVBQUMsTUFBdUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ2hFLFFBQVE7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZCxPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQ3RFLFFBQVE7Ozs7WUFBQyxVQUFBLFdBQVc7Z0JBQ2xCLE9BQU87b0JBQ0wsSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLENBQUM7d0JBQ25DLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTt3QkFDdEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN6QixlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO3dCQUMzRCxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7cUJBQzdCLENBQUM7aUJBQ0gsQ0FBQztZQUNKLENBQUMsRUFBQyxDQUNILENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0YsYUFBUSxHQUVKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osV0FBVyxDQUFDLHNCQUFzQixFQUNsQyxXQUFXLENBQUMseUJBQXlCLEVBQ3JDLFdBQVcsQ0FBQyx5QkFBeUIsRUFDckMscUJBQXFCLENBQUMseUJBQXlCLEVBQy9DLGVBQWUsQ0FBQyxvQ0FBb0MsRUFDcEQsV0FBVyxDQUFDLHdCQUF3QixFQUNwQyxXQUFXLENBQUMsMkJBQTJCLENBQ3hDLEVBQ0QsR0FBRzs7OztRQUNELFVBQ0UsTUFPd0MsSUFDckMsT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFDcEIsRUFDRCxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBQSxJQUFJLENBQUM7Z0JBQ0gsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDdEQsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7b0JBQ2pDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtvQkFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2lCQUN2QixDQUFDO2FBQ0gsQ0FBQztRQU5GLENBTUUsRUFDSCxDQUNGLENBQUM7UUFHRiw2QkFBd0IsR0FFcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxFQUNoRCxHQUFHOzs7O1FBQUMsVUFBQyxNQUE4QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDdkUsR0FBRzs7OztRQUNELFVBQUEsT0FBTztZQUNMLE9BQUEsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7Z0JBQ2pDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtnQkFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2FBQ3ZCLENBQUM7UUFIRixDQUdFLEVBQ0wsQ0FDRixDQUFDO1FBR0YseUNBQW9DLEdBRWhDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osa0JBQWtCLENBQUMsZUFBZSxFQUNsQyxrQkFBa0IsQ0FBQyxlQUFlLENBQ25DLEVBQ0QsUUFBUTs7O1FBQUM7WUFDUCxPQUFPO2dCQUNMLElBQUkscUJBQXFCLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzVDLElBQUksV0FBVyxDQUFDLHFCQUFxQixFQUFFO2FBQ3hDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0YsY0FBUyxHQU9MLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsRUFDL0MsR0FBRzs7OztRQUFDLFVBQUMsTUFBNEMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ3JFLFFBQVE7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZCxPQUFBLEtBQUksQ0FBQyxhQUFhO2lCQUNmLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQztpQkFDdkQsSUFBSSxDQUNILFFBQVE7OztZQUFDO2dCQUNQLE9BQU87b0JBQ0wsSUFBSSxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDOUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07cUJBQ3ZCLENBQUM7b0JBQ0YsSUFBSSxXQUFXLENBQUMsMEJBQTBCLENBQUM7d0JBQ3pDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTt3QkFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3FCQUN2QixDQUFDO2lCQUNILENBQUM7WUFDSixDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsSUFBSSxDQUFDO29CQUNILElBQUkscUJBQXFCLENBQUMsa0JBQWtCLENBQzFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QjtvQkFDRCxJQUFJLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDdEMsS0FBSyxFQUFFLHFCQUFxQixDQUFDLEtBQUssQ0FBQzt3QkFDbkMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07cUJBQ3ZCLENBQUM7b0JBQ0YsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDdEQsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7d0JBQ2pDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTt3QkFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3FCQUN2QixDQUFDO2lCQUNILENBQUM7WUFkRixDQWNFLEVBQ0gsQ0FDRjtRQWhDSCxDQWdDRyxFQUNKLENBQ0YsQ0FBQztRQUdGLGdCQUFXLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMvQyxNQUFNLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQ3pDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQXdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNqRSxVQUFVOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2hCLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUM1RCxHQUFHOzs7WUFBQztnQkFDRixPQUFPLElBQUkscUJBQXFCLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDL0MsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLHFCQUFxQixDQUFDLGNBQWMsQ0FDdEMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0Y7WUFKRCxDQUlDLEVBQ0YsQ0FDRjtRQVhELENBV0MsRUFDRixDQUNGLENBQUM7SUF5QkMsQ0FBQzs7Ozs7O0lBRUksbUNBQWE7Ozs7O0lBQXJCLFVBQXNCLE9BQTJDO1FBQy9ELE9BQU8sT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDdEUsQ0FBQzs7Z0JBNVdGLFVBQVU7Ozs7Z0JBMUJGLE9BQU87Z0JBbUJQLGFBQWE7Z0JBQ2IsZUFBZTtnQkFuQlAsS0FBSzs7SUE0QnBCO1FBREMsTUFBTSxFQUFFOzBDQUNFLFVBQVU7a0RBc0huQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNJLFVBQVU7b0RBd0RyQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNHLFVBQVU7bURBaUJwQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNDLFVBQVU7aURBaUNsQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNpQixVQUFVO2lFQVlsQztJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUM2QixVQUFVOzZFQWE5QztJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNFLFVBQVU7a0RBNkNuQjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNJLFVBQVU7b0RBaUJyQjtJQThCSixrQkFBQztDQUFBLEFBN1dELElBNldDO1NBNVdZLFdBQVc7OztJQUN0QixnQ0F1SEU7O0lBRUYsa0NBeURFOztJQUVGLGlDQWtCRTs7SUFFRiwrQkFrQ0U7O0lBRUYsK0NBYUU7O0lBRUYsMkRBY0U7O0lBRUYsZ0NBOENFOztJQUVGLGtDQWtCRTs7Ozs7SUFxQkEsK0JBQXlCOzs7OztJQUN6QixvQ0FBb0M7Ozs7O0lBQ3BDLCtCQUFpQzs7Ozs7SUFDakMsNEJBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT0NDX0NBUlRfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENhcnREYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBEZXByZWNhdGVkQ2FydEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRDYXJ0SGFzUGVuZGluZ1Byb2Nlc3Nlc1NlbGVjdG9yRmFjdG9yeSB9IGZyb20gJy4uL3NlbGVjdG9ycy9tdWx0aS1jYXJ0LnNlbGVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ2xlYXJFeHBpcmVkQ291cG9uc1xuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNsZWFyQ2FydFxuICAgIHwgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTE9BRF9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZ3JvdXBCeShwYXlsb2FkID0+IHBheWxvYWQuY2FydElkKSxcbiAgICBtZXJnZU1hcChncm91cCQgPT5cbiAgICAgIGdyb3VwJC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKHBheWxvYWQpLnBpcGUoXG4gICAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICAgICAgLy8gVE9ETzogZGVwcmVjYXRlZCAtPiByZW1vdmUgY2hlY2sgZm9yIHN0b3JlIGluIDIuMCB3aGVuIHN0b3JlIHdpbGwgYmUgcmVxdWlyZWRcbiAgICAgICAgICAgICAgIXRoaXMuc3RvcmVcbiAgICAgICAgICAgICAgICA/IG9mKGZhbHNlKVxuICAgICAgICAgICAgICAgIDogdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q2FydEhhc1BlbmRpbmdQcm9jZXNzZXNTZWxlY3RvckZhY3RvcnkocGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbXywgaGFzUGVuZGluZ1Byb2Nlc3Nlc10pID0+ICFoYXNQZW5kaW5nUHJvY2Vzc2VzKSxcbiAgICAgICAgbWFwKChbcGF5bG9hZF0pID0+IHBheWxvYWQpLFxuICAgICAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICAgICAgY29uc3QgbG9hZENhcnRQYXJhbXMgPSB7XG4gICAgICAgICAgICB1c2VySWQ6IChwYXlsb2FkICYmIHBheWxvYWQudXNlcklkKSB8fCB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZDogKHBheWxvYWQgJiYgcGF5bG9hZC5jYXJ0SWQpIHx8IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAodGhpcy5pc01pc3NpbmdEYXRhKGxvYWRDYXJ0UGFyYW1zKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbCh7fSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgY2FydElkOiBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgICAgIC5sb2FkKGxvYWRDYXJ0UGFyYW1zLnVzZXJJZCwgbG9hZENhcnRQYXJhbXMuY2FydElkKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1lcmdlTWFwKChjYXJ0OiBDYXJ0KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoY2FydCkge1xuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzKGNhcnQpKTtcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogbG9hZENhcnRQYXJhbXMudXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgIGV4dHJhRGF0YTogcGF5bG9hZC5leHRyYURhdGEsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgaWYgKGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmluZyBjYXJ0IGZyb20gZW50aXR5IG9iamVjdCB1bmRlciBgY3VycmVudGAga2V5IGFzIGl0IGlzIG5vIGxvbmdlciBuZWVkZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQgY2FydCBpcyBsb2FkZWQgdW5kZXIgaXQncyBjb2RlIGVudGl0eS5cbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0KE9DQ19DQVJUX0lEX0NVUlJFTlQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKHt9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdXBvbkV4cGlyZWRFcnJvcnMgPSBlcnJvci5lcnJvci5lcnJvcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgZXJyID0+IGVyci5yZWFzb24gPT09ICdpbnZhbGlkJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGNvdXBvbkV4cGlyZWRFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgLy8gY2xlYXIgY291cG9ucyBhY3Rpb25zIGp1c3Qgd2FudGVkIHRvIHJlbG9hZCBjYXJ0IGFnYWluXG4gICAgICAgICAgICAgICAgICAvLyBubyBuZWVkIHRvIGRvIGl0IGluIHJlZnJlc2ggb3Iga2VlcCB0aGF0IGFjdGlvblxuICAgICAgICAgICAgICAgICAgLy8gaG93ZXZlciByZW1vdmluZyB0aGlzIGFjdGlvbiB3aWxsIGJlIGEgYnJlYWtpbmcgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhhdCBhY3Rpb24gaW4gMi4wIHJlbGVhc2VcbiAgICAgICAgICAgICAgICAgIC8vIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoeyAuLi5wYXlsb2FkIH0pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2xlYXJFeHBpcmVkQ291cG9ucyh7fSksXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZXJyb3IgJiYgZXJyb3IuZXJyb3IuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjYXJ0Tm90Rm91bmRFcnJvcnMgPSBlcnJvci5lcnJvci5lcnJvcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICBlcnIgPT4gZXJyLnJlYXNvbiA9PT0gJ25vdEZvdW5kJyB8fCAnVW5rbm93blJlc291cmNlRXJyb3InXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgaWYgKGNhcnROb3RGb3VuZEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFyIGNhcnQgaXMgcmVzcG9uc2libGUgZm9yIHJlbW92aW5nIGNhcnQgaW4gYGNhcnRgIHN0b3JlIGZlYXR1cmUuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjYXJ0IGRvZXMgdGhlIHNhbWUgdGhpbmcsIGJ1dCBpbiBgbXVsdGktY2FydGAgc3RvcmUgZmVhdHVyZS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0KCksXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlbW92ZUNhcnQobG9hZENhcnRQYXJhbXMuY2FydElkKSxcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKFxuICAgICAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICAgICAgY2FydElkOiBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY3JlYXRlQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuTWVyZ2VNdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuU2V0RnJlc2hDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DUkVBVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQub2xkQ2FydElkLCBwYXlsb2FkLnRvTWVyZ2VDYXJ0R3VpZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKChjYXJ0OiBDYXJ0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZUFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLm9sZENhcnRJZCkge1xuICAgICAgICAgICAgICBtZXJnZUFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIG1lcmdlQWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgICAgICAgb2xkQ2FydElkOiBwYXlsb2FkLm9sZENhcnRJZCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2VzcyhjYXJ0KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIGNhcnQsXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBleHRyYURhdGE6IHBheWxvYWQuZXh0cmFEYXRhLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlNldEZyZXNoQ2FydChjYXJ0KSxcbiAgICAgICAgICAgICAgLi4ubWVyZ2VBY3Rpb25zLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0RmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIG1lcmdlQ2FydCQ6IE9ic2VydmFibGU8RGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZChwYXlsb2FkLnVzZXJJZCwgT0NDX0NBUlRfSURfQ1VSUkVOVCkucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoY3VycmVudENhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBvbGRDYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IGN1cnJlbnRDYXJ0ID8gY3VycmVudENhcnQuZ3VpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2gkOiBPYnNlcnZhYmxlPFxuICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlRfU1VDQ0VTUyxcbiAgICAgIENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX0FERF9WT1VDSEVSX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9WT1VDSEVSX1NVQ0NFU1NcbiAgICApLFxuICAgIG1hcChcbiAgICAgIChcbiAgICAgICAgYWN0aW9uOlxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzc1xuICAgICAgICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkVm91Y2hlclN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyU3VjY2Vzc1xuICAgICAgKSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT5cbiAgICAgIGZyb20oW1xuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudChwYXlsb2FkLmNhcnRJZCksXG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgfSksXG4gICAgICBdKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaFdpdGhvdXRQcm9jZXNzZXMkOiBPYnNlcnZhYmxlPFxuICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtYXAoXG4gICAgICBwYXlsb2FkID0+XG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlc2V0Q2FydERldGFpbHNPblNpdGVDb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuUmVzZXRDYXJ0RGV0YWlscyB8IENhcnRBY3Rpb25zLlJlc2V0TXVsdGlDYXJ0RGV0YWlsc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFXG4gICAgKSxcbiAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHMoKSxcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlc2V0TXVsdGlDYXJ0RGV0YWlscygpLFxuICAgICAgXTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmFkZEVtYWlsKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lbWFpbClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudChwYXlsb2FkLmNhcnRJZCksXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZGVsZXRlQ2FydCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRFTEVURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRlbGV0ZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBleGhhdXN0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydENvbm5lY3Rvci5kZWxldGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKS5waXBlKFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNsZWFyQ2FydCgpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0RmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+XG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAqIFVzZSBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvciwgY2FydERhdGE6IENhcnREYXRhU2VydmljZSwgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4pIGluc3RlYWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgY2FydERhdGE6IENhcnREYXRhU2VydmljZVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgY2FydERhdGE6IENhcnREYXRhU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JlPzogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PlxuICApIHt9XG5cbiAgcHJpdmF0ZSBpc01pc3NpbmdEYXRhKHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gcGF5bG9hZC51c2VySWQgPT09IHVuZGVmaW5lZCB8fCBwYXlsb2FkLmNhcnRJZCA9PT0gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=