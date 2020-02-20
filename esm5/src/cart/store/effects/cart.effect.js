import { __assign, __decorate, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { from, of } from 'rxjs';
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
        this.loadCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.LOAD_CART), map(function (action) { return action.payload; }), groupBy(function (payload) { return payload.cartId; }), mergeMap(function (group$) {
            return group$.pipe(switchMap(function (payload) {
                return of(payload).pipe(withLatestFrom(
                // TODO: deprecated -> remove check for store in 2.0 when store will be required
                !_this.store
                    ? of(false)
                    : _this.store.pipe(select(getCartHasPendingProcessesSelectorFactory(payload.cartId)))));
            }), filter(function (_a) {
                var _b = __read(_a, 2), _ = _b[0], hasPendingProcesses = _b[1];
                return !hasPendingProcesses;
            }), map(function (_a) {
                var _b = __read(_a, 1), payload = _b[0];
                return payload;
            }), switchMap(function (payload) {
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
                    : _this.store.pipe(select(getActiveCartId))), mergeMap(function (_a) {
                    var _b = __read(_a, 2), cart = _b[0], activeCartId = _b[1];
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
                }), catchError(function (error) {
                    var couponExpiredErrors = error.error.errors.filter(function (err) { return err.reason === 'invalid'; });
                    if (couponExpiredErrors.length > 0) {
                        // clear coupons actions just wanted to reload cart again
                        // no need to do it in refresh or keep that action
                        // however removing this action will be a breaking change
                        // remove that action in 2.0 release
                        // @deprecated since 1.4
                        return from([
                            new CartActions.LoadCart(__assign({}, payload)),
                            new CartActions.ClearExpiredCoupons({}),
                        ]);
                    }
                    if (error && error.error && error.error.errors) {
                        var cartNotFoundErrors = error.error.errors.filter(function (err) { return err.reason === 'notFound' || 'UnknownResourceError'; });
                        if (cartNotFoundErrors.length > 0 &&
                            payload.extraData &&
                            payload.extraData.active) {
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
                }));
            }));
        }), withdrawOn(this.contextChange$));
        this.createCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.CREATE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector
                .create(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap(function (cart) {
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
                return __spread([
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
            }), catchError(function (error) {
                return from([
                    new DeprecatedCartActions.CreateCartFail(makeErrorSerializable(error)),
                    new CartActions.CreateMultiCartFail({
                        tempCartId: payload.tempCartId,
                        error: makeErrorSerializable(error),
                    }),
                ]);
            }));
        }), withdrawOn(this.contextChange$));
        this.mergeCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.MERGE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector.load(payload.userId, OCC_CART_ID_CURRENT).pipe(mergeMap(function (currentCart) {
                return [
                    new DeprecatedCartActions.CreateCart({
                        userId: payload.userId,
                        oldCartId: payload.cartId,
                        toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                        extraData: payload.extraData,
                        tempCartId: payload.tempCartId,
                    }),
                ];
            }));
        }), withdrawOn(this.contextChange$));
        this.refresh$ = this.actions$.pipe(ofType(CartActions.CART_ADD_ENTRY_SUCCESS, CartActions.CART_UPDATE_ENTRY_SUCCESS, CartActions.CART_REMOVE_ENTRY_SUCCESS, DeprecatedCartActions.ADD_EMAIL_TO_CART_SUCCESS, CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS, CartActions.CART_ADD_VOUCHER_SUCCESS, CartActions.CART_REMOVE_VOUCHER_SUCCESS), map(function (action) { return action.payload; }), concatMap(function (payload) {
            return from([
                new CartActions.CartProcessesDecrement(payload.cartId),
                new DeprecatedCartActions.LoadCart({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ]);
        }));
        this.refreshWithoutProcesses$ = this.actions$.pipe(ofType(DeprecatedCartActions.MERGE_CART_SUCCESS), map(function (action) { return action.payload; }), map(function (payload) {
            return new DeprecatedCartActions.LoadCart({
                userId: payload.userId,
                cartId: payload.cartId,
            });
        }));
        this.resetCartDetailsOnSiteContextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), mergeMap(function () {
            return [
                new DeprecatedCartActions.ResetCartDetails(),
                new CartActions.ResetMultiCartDetails(),
            ];
        }));
        this.addEmail$ = this.actions$.pipe(ofType(DeprecatedCartActions.ADD_EMAIL_TO_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector
                .addEmail(payload.userId, payload.cartId, payload.email)
                .pipe(mergeMap(function () {
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
            }), catchError(function (error) {
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
            }));
        }), withdrawOn(this.contextChange$));
        this.deleteCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.DELETE_CART), map(function (action) { return action.payload; }), exhaustMap(function (payload) {
            return _this.cartConnector.delete(payload.userId, payload.cartId).pipe(map(function () {
                return new DeprecatedCartActions.ClearCart();
            }), catchError(function (error) {
                return of(new DeprecatedCartActions.DeleteCartFail(makeErrorSerializable(error)));
            }));
        }));
    }
    CartEffects.prototype.isMissingData = function (payload) {
        return payload.userId === undefined || payload.cartId === undefined;
    };
    CartEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartConnector },
        { type: CartDataService },
        { type: Store }
    ]; };
    __decorate([
        Effect()
    ], CartEffects.prototype, "loadCart$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "createCart$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "mergeCart$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "refresh$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "refreshWithoutProcesses$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "resetCartDetailsOnSiteContextChange$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "addEmail$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "deleteCart$", void 0);
    CartEffects = __decorate([
        Injectable()
    ], CartEffects);
    return CartEffects;
}());
export { CartEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxHQUFHLEVBQ0gsUUFBUSxFQUNSLFNBQVMsRUFDVCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxLQUFLLHFCQUFxQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLHlDQUF5QyxHQUMxQyxNQUFNLGtDQUFrQyxDQUFDO0FBRTFDOzs7Ozs7R0FNRztBQUVIO0lBMllFLHFCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLFFBQXlCLEVBQ3pCLEtBQWlDO1FBSjNDLGlCQUtJO1FBSk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUE0QjtRQTlZbkMsbUJBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDekMsTUFBTSxDQUNKLGtCQUFrQixDQUFDLGVBQWUsRUFDbEMsa0JBQWtCLENBQUMsZUFBZSxDQUNuQyxDQUNGLENBQUM7UUFHRixjQUFTLEdBUUwsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsRUFDdkMsR0FBRyxDQUFDLFVBQUMsTUFBc0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQy9ELE9BQU8sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLEVBQWQsQ0FBYyxDQUFDLEVBQ2xDLFFBQVEsQ0FBQyxVQUFBLE1BQU07WUFDYixPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQ1QsU0FBUyxDQUFDLFVBQUEsT0FBTztnQkFDZixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3JCLGNBQWM7Z0JBQ1osZ0ZBQWdGO2dCQUNoRixDQUFDLEtBQUksQ0FBQyxLQUFLO29CQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29CQUNYLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixNQUFNLENBQ0oseUNBQXlDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUMxRCxDQUNGLENBQ04sQ0FDRixDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLFVBQUMsRUFBd0I7b0JBQXhCLGtCQUF3QixFQUF2QixTQUFDLEVBQUUsMkJBQW1CO2dCQUFNLE9BQUEsQ0FBQyxtQkFBbUI7WUFBcEIsQ0FBb0IsQ0FBQyxFQUMxRCxHQUFHLENBQUMsVUFBQyxFQUFTO29CQUFULGtCQUFTLEVBQVIsZUFBTztnQkFBTSxPQUFBLE9BQU87WUFBUCxDQUFPLENBQUMsRUFDM0IsU0FBUyxDQUFDLFVBQUEsT0FBTztnQkFDZixJQUFNLGNBQWMsR0FBRztvQkFDckIsTUFBTSxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07b0JBQzNELE1BQU0sRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2lCQUM1RCxDQUFDO2dCQUVGLElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDdEMsT0FBTyxJQUFJLENBQUM7d0JBQ1YsSUFBSSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3dCQUMxQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzs0QkFDaEMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNO3lCQUM5QixDQUFDO3FCQUNILENBQUMsQ0FBQztpQkFDSjtnQkFDRCxPQUFPLEtBQUksQ0FBQyxhQUFhO3FCQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDO3FCQUNsRCxJQUFJO2dCQUNILDZDQUE2QztnQkFDN0MsY0FBYztnQkFDWixnRkFBZ0Y7Z0JBQ2hGLENBQUMsS0FBSSxDQUFDLEtBQUs7b0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUNwQixDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQzdDLEVBQ0QsUUFBUSxDQUFDLFVBQUMsRUFBb0M7d0JBQXBDLGtCQUFvQyxFQUFuQyxZQUFJLEVBQUUsb0JBQVk7b0JBQzNCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxJQUFJLEVBQUU7d0JBQ1IsNkRBQTZEO3dCQUM3RCxtRUFBbUU7d0JBQ25FLElBQ0UsY0FBYyxDQUFDLE1BQU0sS0FBSyxZQUFZOzRCQUN0QyxjQUFjLENBQUMsTUFBTSxLQUFLLG1CQUFtQixFQUM3Qzs0QkFDQSxPQUFPLENBQUMsSUFBSSxDQUNWLElBQUkscUJBQXFCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUNoRCxDQUFDO3lCQUNIO3dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQ1YsSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUM7NEJBQ25DLElBQUksTUFBQTs0QkFDSixNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU07NEJBQzdCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUzt5QkFDN0IsQ0FBQyxDQUNILENBQUM7d0JBQ0YsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLG1CQUFtQixFQUFFOzRCQUNqRCxrRkFBa0Y7NEJBQ2xGLGlEQUFpRDs0QkFDakQsT0FBTyxDQUFDLElBQUksQ0FDVixJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FDaEQsQ0FBQzt5QkFDSDtxQkFDRjt5QkFBTTt3QkFDTCxPQUFPLEdBQUc7NEJBQ1IsSUFBSSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDOzRCQUMxQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztnQ0FDaEMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNOzZCQUM5QixDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsT0FBTyxPQUFPLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7b0JBQ2QsSUFBTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ25ELFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQXhCLENBQXdCLENBQ2hDLENBQUM7b0JBQ0YsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNsQyx5REFBeUQ7d0JBQ3pELGtEQUFrRDt3QkFDbEQseURBQXlEO3dCQUN6RCxvQ0FBb0M7d0JBQ3BDLHdCQUF3Qjt3QkFDeEIsT0FBTyxJQUFJLENBQUM7NEJBQ1YsSUFBSSxXQUFXLENBQUMsUUFBUSxjQUFNLE9BQU8sRUFBRzs0QkFDeEMsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDO3lCQUN4QyxDQUFDLENBQUM7cUJBQ0o7b0JBRUQsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDOUMsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2xELFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sS0FBSyxVQUFVLElBQUksc0JBQXNCLEVBQW5ELENBQW1ELENBQzNELENBQUM7d0JBQ0YsSUFDRSxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQzs0QkFDN0IsT0FBTyxDQUFDLFNBQVM7NEJBQ2pCLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUN4Qjs0QkFDQSx1RUFBdUU7NEJBQ3ZFLHNFQUFzRTs0QkFDdEUsT0FBTyxJQUFJLENBQUM7Z0NBQ1YsSUFBSSxxQkFBcUIsQ0FBQyxTQUFTLEVBQUU7Z0NBQ3JDLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDOzZCQUNsRCxDQUFDLENBQUM7eUJBQ0o7cUJBQ0Y7b0JBQ0QsT0FBTyxJQUFJLENBQUM7d0JBQ1YsSUFBSSxxQkFBcUIsQ0FBQyxZQUFZLENBQ3BDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3Qjt3QkFDRCxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzs0QkFDaEMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNOzRCQUM3QixLQUFLLEVBQUUscUJBQXFCLENBQUMsS0FBSyxDQUFDO3lCQUNwQyxDQUFDO3FCQUNILENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FDSCxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQ0g7UUEzSEQsQ0EySEMsQ0FDRixFQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQ2hDLENBQUM7UUFHRixnQkFBVyxHQVFQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQ3pDLEdBQUcsQ0FBQyxVQUFDLE1BQXdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUNqRSxRQUFRLENBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBTyxLQUFJLENBQUMsYUFBYTtpQkFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDO2lCQUNsRSxJQUFJLENBQ0gsU0FBUyxDQUFDLFVBQUMsSUFBVTtnQkFDbkIsSUFBTSxrQkFBa0IsR0FBRyxFQUFFLENBQUM7Z0JBQzlCLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtvQkFDckIsa0JBQWtCLENBQUMsSUFBSSxDQUNyQixJQUFJLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDO3dCQUN6QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07d0JBQ3RCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDbEIsQ0FBQyxDQUNILENBQUM7b0JBQ0Ysa0JBQWtCLENBQUMsSUFBSSxDQUNyQixJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDcEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2pCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztxQkFDN0IsQ0FBQyxDQUNILENBQUM7aUJBQ0g7Z0JBQ0QsNkRBQTZEO2dCQUM3RCxxRUFBcUU7Z0JBQ3JFLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFDakQsa0JBQWtCLENBQUMsSUFBSSxDQUNyQixJQUFJLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUNsRCxDQUFDO2lCQUNIO2dCQUNEO29CQUNFLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDO3dCQUNyQyxJQUFJLE1BQUE7d0JBQ0osTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN0QixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7cUJBQzdCLENBQUM7b0JBQ0YsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDO3dCQUMxQixJQUFJLE1BQUE7d0JBQ0osVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO3FCQUMvQixDQUFDO21CQUNDLGtCQUFrQixFQUNyQjtZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxJQUFJLENBQUM7b0JBQ0gsSUFBSSxxQkFBcUIsQ0FBQyxjQUFjLENBQ3RDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QjtvQkFDRCxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO3dCQUM5QixLQUFLLEVBQUUscUJBQXFCLENBQUMsS0FBSyxDQUFDO3FCQUNwQyxDQUFDO2lCQUNILENBQUM7WUFSRixDQVFFLENBQ0gsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FDaEMsQ0FBQztRQUdGLGVBQVUsR0FBaUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNFLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsRUFDeEMsR0FBRyxDQUFDLFVBQUMsTUFBdUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ2hFLFFBQVEsQ0FBQyxVQUFBLE9BQU87WUFDZCxPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQ3RFLFFBQVEsQ0FBQyxVQUFBLFdBQVc7Z0JBQ2xCLE9BQU87b0JBQ0wsSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLENBQUM7d0JBQ25DLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTt3QkFDdEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNO3dCQUN6QixlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO3dCQUMzRCxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7d0JBQzVCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTtxQkFDL0IsQ0FBQztpQkFDSCxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQ2hDLENBQUM7UUFHRixhQUFRLEdBRUosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FDSixXQUFXLENBQUMsc0JBQXNCLEVBQ2xDLFdBQVcsQ0FBQyx5QkFBeUIsRUFDckMsV0FBVyxDQUFDLHlCQUF5QixFQUNyQyxxQkFBcUIsQ0FBQyx5QkFBeUIsRUFDL0MsZUFBZSxDQUFDLG9DQUFvQyxFQUNwRCxXQUFXLENBQUMsd0JBQXdCLEVBQ3BDLFdBQVcsQ0FBQywyQkFBMkIsQ0FDeEMsRUFDRCxHQUFHLENBQ0QsVUFDRSxNQU93QyxJQUNyQyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUNwQixFQUNELFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDZixPQUFBLElBQUksQ0FBQztnQkFDSCxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUN0RCxJQUFJLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztvQkFDakMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO29CQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07aUJBQ3ZCLENBQUM7YUFDSCxDQUFDO1FBTkYsQ0FNRSxDQUNILENBQ0YsQ0FBQztRQUdGLDZCQUF3QixHQUVwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLEVBQ2hELEdBQUcsQ0FBQyxVQUFDLE1BQThDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN2RSxHQUFHLENBQ0QsVUFBQSxPQUFPO1lBQ0wsT0FBQSxJQUFJLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztnQkFDakMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07YUFDdkIsQ0FBQztRQUhGLENBR0UsQ0FDTCxDQUNGLENBQUM7UUFHRix5Q0FBb0MsR0FFaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FDSixrQkFBa0IsQ0FBQyxlQUFlLEVBQ2xDLGtCQUFrQixDQUFDLGVBQWUsQ0FDbkMsRUFDRCxRQUFRLENBQUM7WUFDUCxPQUFPO2dCQUNMLElBQUkscUJBQXFCLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzVDLElBQUksV0FBVyxDQUFDLHFCQUFxQixFQUFFO2FBQ3hDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0YsY0FBUyxHQU9MLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsRUFDL0MsR0FBRyxDQUFDLFVBQUMsTUFBNEMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3JFLFFBQVEsQ0FBQyxVQUFBLE9BQU87WUFDZCxPQUFBLEtBQUksQ0FBQyxhQUFhO2lCQUNmLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQztpQkFDdkQsSUFBSSxDQUNILFFBQVEsQ0FBQztnQkFDUCxPQUFPO29CQUNMLElBQUkscUJBQXFCLENBQUMscUJBQXFCLENBQUM7d0JBQzlDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTt3QkFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3FCQUN2QixDQUFDO29CQUNGLElBQUksV0FBVyxDQUFDLDBCQUEwQixDQUFDO3dCQUN6QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07d0JBQ3RCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtxQkFDdkIsQ0FBQztpQkFDSCxDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLElBQUksQ0FBQztvQkFDSCxJQUFJLHFCQUFxQixDQUFDLGtCQUFrQixDQUMxQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0I7b0JBQ0QsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUM7d0JBQ3RDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7d0JBQ25DLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTt3QkFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO3FCQUN2QixDQUFDO29CQUNGLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3RELElBQUkscUJBQXFCLENBQUMsUUFBUSxDQUFDO3dCQUNqQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07d0JBQ3RCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtxQkFDdkIsQ0FBQztpQkFDSCxDQUFDO1lBZEYsQ0FjRSxDQUNILENBQ0Y7UUFoQ0gsQ0FnQ0csQ0FDSixFQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQ2hDLENBQUM7UUFHRixnQkFBVyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxFQUN6QyxHQUFHLENBQUMsVUFBQyxNQUF3QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDakUsVUFBVSxDQUFDLFVBQUEsT0FBTztZQUNoQixPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDNUQsR0FBRyxDQUFDO2dCQUNGLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUkscUJBQXFCLENBQUMsY0FBYyxDQUN0QyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsQ0FDRixDQUNGO1FBWEQsQ0FXQyxDQUNGLENBQ0YsQ0FBQztJQXlCQyxDQUFDO0lBRUksbUNBQWEsR0FBckIsVUFBc0IsT0FBMkM7UUFDL0QsT0FBTyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQztJQUN0RSxDQUFDOztnQkFSbUIsT0FBTztnQkFDRixhQUFhO2dCQUNsQixlQUFlO2dCQUNqQixLQUFLOztJQXRZdkI7UUFEQyxNQUFNLEVBQUU7a0RBNElQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7b0RBbUVQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7bURBb0JQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7aURBa0NQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7aUVBYVA7SUFHRjtRQURDLE1BQU0sRUFBRTs2RUFjUDtJQUdGO1FBREMsTUFBTSxFQUFFO2tEQStDUDtJQUdGO1FBREMsTUFBTSxFQUFFO29EQWtCUDtJQXZYUyxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVcsQ0FxWnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJaRCxJQXFaQztTQXJaWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT0NDX0NBUlRfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENhcnREYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBEZXByZWNhdGVkQ2FydEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQge1xuICBnZXRBY3RpdmVDYXJ0SWQsXG4gIGdldENhcnRIYXNQZW5kaW5nUHJvY2Vzc2VzU2VsZWN0b3JGYWN0b3J5LFxufSBmcm9tICcuLi9zZWxlY3RvcnMvbXVsdGktY2FydC5zZWxlY3Rvcic7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjVcbiAqXG4gKiBzcGFydGFjdXMgbmdyeCBlZmZlY3RzIHdpbGwgbm8gbG9uZ2VyIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJXG4gKlxuICogVE9ETyhpc3N1ZTojNDUwNylcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZENhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydEZhaWxcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DbGVhckV4cGlyZWRDb3Vwb25zXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0XG4gICAgfCBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5MT0FEX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBncm91cEJ5KHBheWxvYWQgPT4gcGF5bG9hZC5jYXJ0SWQpLFxuICAgIG1lcmdlTWFwKGdyb3VwJCA9PlxuICAgICAgZ3JvdXAkLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgICAgICByZXR1cm4gb2YocGF5bG9hZCkucGlwZShcbiAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgICAgICAvLyBUT0RPOiBkZXByZWNhdGVkIC0+IHJlbW92ZSBjaGVjayBmb3Igc3RvcmUgaW4gMi4wIHdoZW4gc3RvcmUgd2lsbCBiZSByZXF1aXJlZFxuICAgICAgICAgICAgICAhdGhpcy5zdG9yZVxuICAgICAgICAgICAgICAgID8gb2YoZmFsc2UpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdChcbiAgICAgICAgICAgICAgICAgICAgICBnZXRDYXJ0SGFzUGVuZGluZ1Byb2Nlc3Nlc1NlbGVjdG9yRmFjdG9yeShwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKFtfLCBoYXNQZW5kaW5nUHJvY2Vzc2VzXSkgPT4gIWhhc1BlbmRpbmdQcm9jZXNzZXMpLFxuICAgICAgICBtYXAoKFtwYXlsb2FkXSkgPT4gcGF5bG9hZCksXG4gICAgICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgICAgICBjb25zdCBsb2FkQ2FydFBhcmFtcyA9IHtcbiAgICAgICAgICAgIHVzZXJJZDogKHBheWxvYWQgJiYgcGF5bG9hZC51c2VySWQpIHx8IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiAocGF5bG9hZCAmJiBwYXlsb2FkLmNhcnRJZCkgfHwgdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh0aGlzLmlzTWlzc2luZ0RhdGEobG9hZENhcnRQYXJhbXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKHt9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAgICAgLmxvYWQobG9hZENhcnRQYXJhbXMudXNlcklkLCBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHdpdGggdGhlIGBjYXJ0YCBzdG9yZSBmZWF0dXJlXG4gICAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGRlcHJlY2F0ZWQgLT4gcmVtb3ZlIGNoZWNrIGZvciBzdG9yZSBpbiAyLjAgd2hlbiBzdG9yZSB3aWxsIGJlIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgIXRoaXMuc3RvcmVcbiAgICAgICAgICAgICAgICAgID8gb2YocGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgICAgICAgICAgICA6IHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZ2V0QWN0aXZlQ2FydElkKSlcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbWVyZ2VNYXAoKFtjYXJ0LCBhY3RpdmVDYXJ0SWRdOiBbQ2FydCwgc3RyaW5nXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGNhcnQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGBjYXJ0YCBzdG9yZSBicmFuY2ggc2hvdWxkIG9ubHkgYmUgdXBkYXRlZCBmb3IgYWN0aXZlIGNhcnRcbiAgICAgICAgICAgICAgICAgIC8vIGF2b2lkIGRpc3BhdGNoaW5nIExvYWRDYXJ0U3VjY2VzcyBhY3Rpb24gb24gZGlmZmVyZW50IGNhcnQgbG9hZHNcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhcnRQYXJhbXMuY2FydElkID09PSBhY3RpdmVDYXJ0SWQgfHxcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhcnRQYXJhbXMuY2FydElkID09PSBPQ0NfQ0FSVF9JRF9DVVJSRU5UXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzKGNhcnQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgY2FydCxcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGxvYWRDYXJ0UGFyYW1zLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYURhdGE6IHBheWxvYWQuZXh0cmFEYXRhLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGlmIChsb2FkQ2FydFBhcmFtcy5jYXJ0SWQgPT09IE9DQ19DQVJUX0lEX0NVUlJFTlQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZpbmcgY2FydCBmcm9tIGVudGl0eSBvYmplY3QgdW5kZXIgYGN1cnJlbnRgIGtleSBhcyBpdCBpcyBubyBsb25nZXIgbmVlZGVkLlxuICAgICAgICAgICAgICAgICAgICAvLyBDdXJyZW50IGNhcnQgaXMgbG9hZGVkIHVuZGVyIGl0J3MgY29kZSBlbnRpdHkuXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydChPQ0NfQ0FSVF9JRF9DVVJSRU5UKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zID0gW1xuICAgICAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbCh7fSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgICAgICAgY2FydElkOiBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3Vwb25FeHBpcmVkRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIGVyciA9PiBlcnIucmVhc29uID09PSAnaW52YWxpZCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChjb3Vwb25FeHBpcmVkRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGNvdXBvbnMgYWN0aW9ucyBqdXN0IHdhbnRlZCB0byByZWxvYWQgY2FydCBhZ2FpblxuICAgICAgICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBkbyBpdCBpbiByZWZyZXNoIG9yIGtlZXAgdGhhdCBhY3Rpb25cbiAgICAgICAgICAgICAgICAgIC8vIGhvd2V2ZXIgcmVtb3ZpbmcgdGhpcyBhY3Rpb24gd2lsbCBiZSBhIGJyZWFraW5nIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoYXQgYWN0aW9uIGluIDIuMCByZWxlYXNlXG4gICAgICAgICAgICAgICAgICAvLyBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHsgLi4ucGF5bG9hZCB9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNsZWFyRXhwaXJlZENvdXBvbnMoe30pLFxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2FydE5vdEZvdW5kRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgZXJyID0+IGVyci5yZWFzb24gPT09ICdub3RGb3VuZCcgfHwgJ1Vua25vd25SZXNvdXJjZUVycm9yJ1xuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgY2FydE5vdEZvdW5kRXJyb3JzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC5leHRyYURhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC5leHRyYURhdGEuYWN0aXZlXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgY2FydCBpcyByZXNwb25zaWJsZSBmb3IgcmVtb3ZpbmcgY2FydCBpbiBgY2FydGAgc3RvcmUgZmVhdHVyZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNhcnQgZG9lcyB0aGUgc2FtZSB0aGluZywgYnV0IGluIGBtdWx0aS1jYXJ0YCBzdG9yZSBmZWF0dXJlLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnJvbShbXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DbGVhckNhcnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydChsb2FkQ2FydFBhcmFtcy5jYXJ0SWQpLFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoXG4gICAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLk1lcmdlTXVsdGlDYXJ0U3VjY2Vzc1xuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLlNldFRlbXBDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DUkVBVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQub2xkQ2FydElkLCBwYXlsb2FkLnRvTWVyZ2VDYXJ0R3VpZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKChjYXJ0OiBDYXJ0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25hbEFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLm9sZENhcnRJZCkge1xuICAgICAgICAgICAgICBjb25kaXRpb25hbEFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbmFsQWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgICAgICAgb2xkQ2FydElkOiBwYXlsb2FkLm9sZENhcnRJZCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYGNhcnRgIHN0b3JlIGJyYW5jaCBzaG91bGQgb25seSBiZSB1cGRhdGVkIGZvciBhY3RpdmUgY2FydFxuICAgICAgICAgICAgLy8gYXZvaWQgZGlzcGF0Y2hpbmcgQ3JlYXRlQ2FydFN1Y2Nlc3MgYWN0aW9uIG9uIGRpZmZlcmVudCBjYXJ0IGxvYWRzXG4gICAgICAgICAgICBpZiAocGF5bG9hZC5leHRyYURhdGEgJiYgcGF5bG9hZC5leHRyYURhdGEuYWN0aXZlKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbmFsQWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3MoY2FydClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5TZXRUZW1wQ2FydCh7XG4gICAgICAgICAgICAgICAgY2FydCxcbiAgICAgICAgICAgICAgICB0ZW1wQ2FydElkOiBwYXlsb2FkLnRlbXBDYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAuLi5jb25kaXRpb25hbEFjdGlvbnMsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgIHRlbXBDYXJ0SWQ6IHBheWxvYWQudGVtcENhcnRJZCxcbiAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIG1lcmdlQ2FydCQ6IE9ic2VydmFibGU8RGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZChwYXlsb2FkLnVzZXJJZCwgT0NDX0NBUlRfSURfQ1VSUkVOVCkucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoY3VycmVudENhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBvbGRDYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IGN1cnJlbnRDYXJ0ID8gY3VycmVudENhcnQuZ3VpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgdGVtcENhcnRJZDogcGF5bG9hZC50ZW1wQ2FydElkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoJDogT2JzZXJ2YWJsZTxcbiAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQgfCBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfVVBEQVRFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTLFxuICAgICAgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJUX1NVQ0NFU1MsXG4gICAgICBDaGVja291dEFjdGlvbnMuQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfVk9VQ0hFUl9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfVk9VQ0hFUl9TVUNDRVNTXG4gICAgKSxcbiAgICBtYXAoXG4gICAgICAoXG4gICAgICAgIGFjdGlvbjpcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3NcbiAgICAgICAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXJTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlclN1Y2Nlc3NcbiAgICAgICkgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIGNvbmNhdE1hcChwYXlsb2FkID0+XG4gICAgICBmcm9tKFtcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnQocGF5bG9hZC5jYXJ0SWQpLFxuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2hXaXRob3V0UHJvY2Vzc2VzJDogT2JzZXJ2YWJsZTxcbiAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1FUkdFX0NBUlRfU1VDQ0VTUyksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWFwKFxuICAgICAgcGF5bG9hZCA9PlxuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgIH0pXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldENhcnREZXRhaWxzT25TaXRlQ29udGV4dENoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgRGVwcmVjYXRlZENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHMgfCBDYXJ0QWN0aW9ucy5SZXNldE11bHRpQ2FydERldGFpbHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRVxuICAgICksXG4gICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5SZXNldENhcnREZXRhaWxzKCksXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5SZXNldE11bHRpQ2FydERldGFpbHMoKSxcbiAgICAgIF07XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWRkRW1haWwkOiBPYnNlcnZhYmxlPFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzc1xuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgIC5hZGRFbWFpbChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW1haWwpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0RmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnQocGF5bG9hZC5jYXJ0SWQpLFxuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZGVsZXRlQ2FydCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRFTEVURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRlbGV0ZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBleGhhdXN0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydENvbm5lY3Rvci5kZWxldGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKS5waXBlKFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNsZWFyQ2FydCgpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0RmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+XG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAqIFVzZSBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvciwgY2FydERhdGE6IENhcnREYXRhU2VydmljZSwgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4pIGluc3RlYWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgY2FydERhdGE6IENhcnREYXRhU2VydmljZVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgY2FydERhdGE6IENhcnREYXRhU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JlPzogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PlxuICApIHt9XG5cbiAgcHJpdmF0ZSBpc01pc3NpbmdEYXRhKHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gcGF5bG9hZC51c2VySWQgPT09IHVuZGVmaW5lZCB8fCBwYXlsb2FkLmNhcnRJZCA9PT0gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=