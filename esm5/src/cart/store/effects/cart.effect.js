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
import { getCartIdByUserId } from '../../utils/utils';
import * as DeprecatedCartActions from '../actions/cart.action';
import { CartActions } from '../actions/index';
import { getActiveCartId, getCartHasPendingProcessesSelectorFactory, } from '../selectors/multi-cart.selector';
var CartEffects = /** @class */ (function () {
    function CartEffects(actions$, cartConnector, store) {
        var _this = this;
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.store = store;
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE, SiteContextActions.LANGUAGE_CHANGE));
        this.loadCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.LOAD_CART), map(function (action) { return action.payload; }), groupBy(function (payload) { return payload.cartId; }), mergeMap(function (group$) {
            return group$.pipe(switchMap(function (payload) {
                return of(payload).pipe(withLatestFrom(_this.store.pipe(select(getCartHasPendingProcessesSelectorFactory(payload.cartId)))));
            }), filter(function (_a) {
                var _b = __read(_a, 2), _ = _b[0], hasPendingProcesses = _b[1];
                return !hasPendingProcesses;
            }), map(function (_a) {
                var _b = __read(_a, 1), payload = _b[0];
                return payload;
            }), switchMap(function (payload) {
                return _this.cartConnector.load(payload.userId, payload.cartId).pipe(
                // TODO: remove with the `cart` store feature
                withLatestFrom(_this.store.pipe(select(getActiveCartId))), mergeMap(function (_a) {
                    var _b = __read(_a, 2), cart = _b[0], activeCartId = _b[1];
                    var actions = [];
                    if (cart) {
                        // `cart` store branch should only be updated for active cart
                        // avoid dispatching LoadCartSuccess action on different cart loads
                        if (payload.cartId === activeCartId ||
                            payload.cartId === OCC_CART_ID_CURRENT) {
                            actions.push(new DeprecatedCartActions.LoadCartSuccess(cart));
                        }
                        actions.push(new CartActions.LoadMultiCartSuccess({
                            cart: cart,
                            userId: payload.userId,
                            extraData: payload.extraData,
                        }));
                        if (payload.cartId === OCC_CART_ID_CURRENT) {
                            // Removing cart from entity object under `current` key as it is no longer needed.
                            // Current cart is loaded under it's code entity.
                            actions.push(new CartActions.RemoveCart(OCC_CART_ID_CURRENT));
                        }
                    }
                    else {
                        actions = [
                            new DeprecatedCartActions.LoadCartFail({}),
                            new CartActions.LoadMultiCartFail({
                                cartId: payload.cartId,
                            }),
                        ];
                    }
                    return actions;
                }), catchError(function (error) {
                    var _a;
                    if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.errors) {
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
                        var cartNotFoundErrors = error.error.errors.filter(function (err) { return err.reason === 'notFound' || 'UnknownResourceError'; });
                        if (cartNotFoundErrors.length > 0 &&
                            payload.extraData &&
                            payload.extraData.active) {
                            // Clear cart is responsible for removing cart in `cart` store feature.
                            // Remove cart does the same thing, but in `multi-cart` store feature.
                            return from([
                                new DeprecatedCartActions.ClearCart(),
                                new CartActions.RemoveCart(payload.cartId),
                            ]);
                        }
                    }
                    return from([
                        new DeprecatedCartActions.LoadCartFail(makeErrorSerializable(error)),
                        new CartActions.LoadMultiCartFail({
                            cartId: payload.cartId,
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
                return __spread([
                    new CartActions.CreateCartSuccess({
                        cart: cart,
                        userId: payload.userId,
                        extraData: payload.extraData,
                        cartId: getCartIdByUserId(cart, payload.userId),
                        tempCartId: payload.tempCartId,
                        oldCartId: payload.oldCartId,
                        toMergeCartGuid: payload.toMergeCartGuid,
                    }),
                    new CartActions.SetTempCart({
                        cart: cart,
                        tempCartId: payload.tempCartId,
                    })
                ], conditionalActions);
            }), catchError(function (error) {
                return of(new CartActions.CreateCartFail({
                    tempCartId: payload.tempCartId,
                    error: makeErrorSerializable(error),
                    userId: payload.userId,
                    oldCartId: payload.oldCartId,
                    toMergeCartGuid: payload.toMergeCartGuid,
                    extraData: payload.extraData,
                }));
            }));
        }), withdrawOn(this.contextChange$));
        this.mergeCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.MERGE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector.load(payload.userId, OCC_CART_ID_CURRENT).pipe(mergeMap(function (currentCart) {
                return [
                    new CartActions.CreateCart({
                        userId: payload.userId,
                        oldCartId: payload.cartId,
                        toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                        extraData: payload.extraData,
                        tempCartId: payload.tempCartId,
                    }),
                ];
            }));
        }), withdrawOn(this.contextChange$));
        this.refresh$ = this.actions$.pipe(ofType(DeprecatedCartActions.ADD_EMAIL_TO_CART_SUCCESS, CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS, CartActions.CART_ADD_VOUCHER_SUCCESS), map(function (action) { return action.payload; }), concatMap(function (payload) {
            return from([
                new CartActions.CartProcessesDecrement(payload.cartId),
                new DeprecatedCartActions.LoadCart({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ]);
        }));
        this.refreshWithoutProcesses$ = this.actions$.pipe(ofType(DeprecatedCartActions.MERGE_CART_SUCCESS, CartActions.CART_ADD_ENTRY_SUCCESS, CartActions.CART_REMOVE_ENTRY_SUCCESS, CartActions.CART_UPDATE_ENTRY_SUCCESS, CartActions.CART_REMOVE_VOUCHER_SUCCESS), map(function (action) { return action.payload; }), map(function (payload) {
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
    CartEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartConnector },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxHQUFHLEVBQ0gsUUFBUSxFQUNSLFNBQVMsRUFDVCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEtBQUsscUJBQXFCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YseUNBQXlD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RUFjUDtJQUdGO1FBREMsTUFBTSxFQUFFO2tEQStDUDtJQUdGO1FBREMsTUFBTSxFQUFFO29EQWtCUDtJQS9WUyxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVcsQ0FzV3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXRXRCxJQXNXQztTQXRXWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT0NDX0NBUlRfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCB7IGdldENhcnRJZEJ5VXNlcklkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0ICogYXMgRGVwcmVjYXRlZENhcnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY2FydC5hY3Rpb24nO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHtcbiAgZ2V0QWN0aXZlQ2FydElkLFxuICBnZXRDYXJ0SGFzUGVuZGluZ1Byb2Nlc3Nlc1NlbGVjdG9yRmFjdG9yeSxcbn0gZnJvbSAnLi4vc2VsZWN0b3JzL211bHRpLWNhcnQuc2VsZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydEVmZmVjdHMge1xuICBwcml2YXRlIGNvbnRleHRDaGFuZ2UkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0RmFpbFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNsZWFyRXhwaXJlZENvdXBvbnNcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DbGVhckNhcnRcbiAgICB8IENhcnRBY3Rpb25zLlJlbW92ZUNhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxPQURfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGdyb3VwQnkoKHBheWxvYWQpID0+IHBheWxvYWQuY2FydElkKSxcbiAgICBtZXJnZU1hcCgoZ3JvdXAkKSA9PlxuICAgICAgZ3JvdXAkLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvZihwYXlsb2FkKS5waXBlKFxuICAgICAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICAgICAgICBnZXRDYXJ0SGFzUGVuZGluZ1Byb2Nlc3Nlc1NlbGVjdG9yRmFjdG9yeShwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbXywgaGFzUGVuZGluZ1Byb2Nlc3Nlc10pID0+ICFoYXNQZW5kaW5nUHJvY2Vzc2VzKSxcbiAgICAgICAgbWFwKChbcGF5bG9hZF0pID0+IHBheWxvYWQpLFxuICAgICAgICBzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmxvYWQocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKS5waXBlKFxuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHdpdGggdGhlIGBjYXJ0YCBzdG9yZSBmZWF0dXJlXG4gICAgICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGdldEFjdGl2ZUNhcnRJZCkpKSxcbiAgICAgICAgICAgIG1lcmdlTWFwKChbY2FydCwgYWN0aXZlQ2FydElkXTogW0NhcnQsIHN0cmluZ10pID0+IHtcbiAgICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgaWYgKGNhcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBgY2FydGAgc3RvcmUgYnJhbmNoIHNob3VsZCBvbmx5IGJlIHVwZGF0ZWQgZm9yIGFjdGl2ZSBjYXJ0XG4gICAgICAgICAgICAgICAgLy8gYXZvaWQgZGlzcGF0Y2hpbmcgTG9hZENhcnRTdWNjZXNzIGFjdGlvbiBvbiBkaWZmZXJlbnQgY2FydCBsb2Fkc1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIHBheWxvYWQuY2FydElkID09PSBhY3RpdmVDYXJ0SWQgfHxcbiAgICAgICAgICAgICAgICAgIHBheWxvYWQuY2FydElkID09PSBPQ0NfQ0FSVF9JRF9DVVJSRU5UXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2gobmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3MoY2FydCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgICBleHRyYURhdGE6IHBheWxvYWQuZXh0cmFEYXRhLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZpbmcgY2FydCBmcm9tIGVudGl0eSBvYmplY3QgdW5kZXIgYGN1cnJlbnRgIGtleSBhcyBpdCBpcyBubyBsb25nZXIgbmVlZGVkLlxuICAgICAgICAgICAgICAgICAgLy8gQ3VycmVudCBjYXJ0IGlzIGxvYWRlZCB1bmRlciBpdCdzIGNvZGUgZW50aXR5LlxuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKG5ldyBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0KE9DQ19DQVJUX0lEX0NVUlJFTlQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKHt9KSxcbiAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyb3I/LmVycm9yPy5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3Vwb25FeHBpcmVkRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIChlcnIpID0+IGVyci5yZWFzb24gPT09ICdpbnZhbGlkJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGNvdXBvbkV4cGlyZWRFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgLy8gY2xlYXIgY291cG9ucyBhY3Rpb25zIGp1c3Qgd2FudGVkIHRvIHJlbG9hZCBjYXJ0IGFnYWluXG4gICAgICAgICAgICAgICAgICAvLyBubyBuZWVkIHRvIGRvIGl0IGluIHJlZnJlc2ggb3Iga2VlcCB0aGF0IGFjdGlvblxuICAgICAgICAgICAgICAgICAgLy8gaG93ZXZlciByZW1vdmluZyB0aGlzIGFjdGlvbiB3aWxsIGJlIGEgYnJlYWtpbmcgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhhdCBhY3Rpb24gaW4gMi4wIHJlbGVhc2VcbiAgICAgICAgICAgICAgICAgIC8vIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoeyAuLi5wYXlsb2FkIH0pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2xlYXJFeHBpcmVkQ291cG9ucyh7fSksXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjYXJ0Tm90Rm91bmRFcnJvcnMgPSBlcnJvci5lcnJvci5lcnJvcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgKGVycikgPT4gZXJyLnJlYXNvbiA9PT0gJ25vdEZvdW5kJyB8fCAnVW5rbm93blJlc291cmNlRXJyb3InXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBjYXJ0Tm90Rm91bmRFcnJvcnMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgcGF5bG9hZC5leHRyYURhdGEgJiZcbiAgICAgICAgICAgICAgICAgIHBheWxvYWQuZXh0cmFEYXRhLmFjdGl2ZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgY2FydCBpcyByZXNwb25zaWJsZSBmb3IgcmVtb3ZpbmcgY2FydCBpbiBgY2FydGAgc3RvcmUgZmVhdHVyZS5cbiAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjYXJ0IGRvZXMgdGhlIHNhbWUgdGhpbmcsIGJ1dCBpbiBgbXVsdGktY2FydGAgc3RvcmUgZmVhdHVyZS5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DbGVhckNhcnQoKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlbW92ZUNhcnQocGF5bG9hZC5jYXJ0SWQpLFxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbChcbiAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjcmVhdGVDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuU2V0VGVtcENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNSRUFURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQub2xkQ2FydElkLCBwYXlsb2FkLnRvTWVyZ2VDYXJ0R3VpZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKChjYXJ0OiBDYXJ0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25hbEFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLm9sZENhcnRJZCkge1xuICAgICAgICAgICAgICBjb25kaXRpb25hbEFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbmFsQWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgICAgICAgb2xkQ2FydElkOiBwYXlsb2FkLm9sZENhcnRJZCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IGdldENhcnRJZEJ5VXNlcklkKGNhcnQsIHBheWxvYWQudXNlcklkKSxcbiAgICAgICAgICAgICAgICB0ZW1wQ2FydElkOiBwYXlsb2FkLnRlbXBDYXJ0SWQsXG4gICAgICAgICAgICAgICAgb2xkQ2FydElkOiBwYXlsb2FkLm9sZENhcnRJZCxcbiAgICAgICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IHBheWxvYWQudG9NZXJnZUNhcnRHdWlkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlNldFRlbXBDYXJ0KHtcbiAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgIHRlbXBDYXJ0SWQ6IHBheWxvYWQudGVtcENhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIC4uLmNvbmRpdGlvbmFsQWN0aW9ucyxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICB0ZW1wQ2FydElkOiBwYXlsb2FkLnRlbXBDYXJ0SWQsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBvbGRDYXJ0SWQ6IHBheWxvYWQub2xkQ2FydElkLFxuICAgICAgICAgICAgICAgIHRvTWVyZ2VDYXJ0R3VpZDogcGF5bG9hZC50b01lcmdlQ2FydEd1aWQsXG4gICAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBtZXJnZUNhcnQkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkKHBheWxvYWQudXNlcklkLCBPQ0NfQ0FSVF9JRF9DVVJSRU5UKS5waXBlKFxuICAgICAgICBtZXJnZU1hcCgoY3VycmVudENhcnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBvbGRDYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IGN1cnJlbnRDYXJ0ID8gY3VycmVudENhcnQuZ3VpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgdGVtcENhcnRJZDogcGF5bG9hZC50ZW1wQ2FydElkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoJDogT2JzZXJ2YWJsZTxcbiAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQgfCBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJUX1NVQ0NFU1MsXG4gICAgICBDaGVja291dEFjdGlvbnMuQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfVk9VQ0hFUl9TVUNDRVNTXG4gICAgKSxcbiAgICBtYXAoXG4gICAgICAoXG4gICAgICAgIGFjdGlvbjpcbiAgICAgICAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3NcbiAgICAgICAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXJTdWNjZXNzXG4gICAgICApID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBjb25jYXRNYXAoKHBheWxvYWQpID0+XG4gICAgICBmcm9tKFtcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnQocGF5bG9hZC5jYXJ0SWQpLFxuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2hXaXRob3V0UHJvY2Vzc2VzJDogT2JzZXJ2YWJsZTxcbiAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1VQREFURV9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfVk9VQ0hFUl9TVUNDRVNTXG4gICAgKSxcbiAgICBtYXAoXG4gICAgICAoXG4gICAgICAgIGFjdGlvbjpcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlclN1Y2Nlc3NcbiAgICAgICkgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1hcChcbiAgICAgIChwYXlsb2FkKSA9PlxuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgIH0pXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldENhcnREZXRhaWxzT25TaXRlQ29udGV4dENoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgRGVwcmVjYXRlZENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHMgfCBDYXJ0QWN0aW9ucy5SZXNldE11bHRpQ2FydERldGFpbHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRVxuICAgICksXG4gICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5SZXNldENhcnREZXRhaWxzKCksXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5SZXNldE11bHRpQ2FydERldGFpbHMoKSxcbiAgICAgIF07XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWRkRW1haWwkOiBPYnNlcnZhYmxlPFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzc1xuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHBheWxvYWQpID0+XG4gICAgICB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmFkZEVtYWlsKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lbWFpbClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50KHBheWxvYWQuY2FydElkKSxcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZUNhcnQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5ERUxFVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZXhoYXVzdE1hcCgocGF5bG9hZCkgPT5cbiAgICAgIHRoaXMuY2FydENvbm5lY3Rvci5kZWxldGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKS5waXBlKFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNsZWFyQ2FydCgpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRlbGV0ZUNhcnRGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD5cbiAgKSB7fVxufVxuIl19