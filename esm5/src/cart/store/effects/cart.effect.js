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
                    var _a, _b;
                    if ((_b = (_a = error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.errors) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxHQUFHLEVBQ0gsUUFBUSxFQUNSLFNBQVMsRUFDVCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YseUNBQXlDLEdBQzFDLE1BQU0sa0NBQWtDLENBQUM7QUFHMUM7SUE4VkUscUJBQ1UsUUFB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V3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQW5XRCxJQW1XQztTQW5XWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT0NDX0NBUlRfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7XG4gIGdldEFjdGl2ZUNhcnRJZCxcbiAgZ2V0Q2FydEhhc1BlbmRpbmdQcm9jZXNzZXNTZWxlY3RvckZhY3RvcnksXG59IGZyb20gJy4uL3NlbGVjdG9ycy9tdWx0aS1jYXJ0LnNlbGVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZENhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydEZhaWxcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DbGVhckV4cGlyZWRDb3Vwb25zXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0XG4gICAgfCBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5MT0FEX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBncm91cEJ5KHBheWxvYWQgPT4gcGF5bG9hZC5jYXJ0SWQpLFxuICAgIG1lcmdlTWFwKGdyb3VwJCA9PlxuICAgICAgZ3JvdXAkLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgICAgICByZXR1cm4gb2YocGF5bG9hZCkucGlwZShcbiAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgICAgICAgc2VsZWN0KFxuICAgICAgICAgICAgICAgICAgZ2V0Q2FydEhhc1BlbmRpbmdQcm9jZXNzZXNTZWxlY3RvckZhY3RvcnkocGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW18sIGhhc1BlbmRpbmdQcm9jZXNzZXNdKSA9PiAhaGFzUGVuZGluZ1Byb2Nlc3NlcyksXG4gICAgICAgIG1hcCgoW3BheWxvYWRdKSA9PiBwYXlsb2FkKSxcbiAgICAgICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpLnBpcGUoXG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgd2l0aCB0aGUgYGNhcnRgIHN0b3JlIGZlYXR1cmVcbiAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZ2V0QWN0aXZlQ2FydElkKSkpLFxuICAgICAgICAgICAgbWVyZ2VNYXAoKFtjYXJ0LCBhY3RpdmVDYXJ0SWRdOiBbQ2FydCwgc3RyaW5nXSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICBpZiAoY2FydCkge1xuICAgICAgICAgICAgICAgIC8vIGBjYXJ0YCBzdG9yZSBicmFuY2ggc2hvdWxkIG9ubHkgYmUgdXBkYXRlZCBmb3IgYWN0aXZlIGNhcnRcbiAgICAgICAgICAgICAgICAvLyBhdm9pZCBkaXNwYXRjaGluZyBMb2FkQ2FydFN1Y2Nlc3MgYWN0aW9uIG9uIGRpZmZlcmVudCBjYXJ0IGxvYWRzXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgcGF5bG9hZC5jYXJ0SWQgPT09IGFjdGl2ZUNhcnRJZCB8fFxuICAgICAgICAgICAgICAgICAgcGF5bG9hZC5jYXJ0SWQgPT09IE9DQ19DQVJUX0lEX0NVUlJFTlRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0U3VjY2VzcyhjYXJ0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgIGNhcnQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhRGF0YTogcGF5bG9hZC5leHRyYURhdGEsXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuY2FydElkID09PSBPQ0NfQ0FSVF9JRF9DVVJSRU5UKSB7XG4gICAgICAgICAgICAgICAgICAvLyBSZW1vdmluZyBjYXJ0IGZyb20gZW50aXR5IG9iamVjdCB1bmRlciBgY3VycmVudGAga2V5IGFzIGl0IGlzIG5vIGxvbmdlciBuZWVkZWQuXG4gICAgICAgICAgICAgICAgICAvLyBDdXJyZW50IGNhcnQgaXMgbG9hZGVkIHVuZGVyIGl0J3MgY29kZSBlbnRpdHkuXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2gobmV3IENhcnRBY3Rpb25zLlJlbW92ZUNhcnQoT0NDX0NBUlRfSURfQ1VSUkVOVCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zID0gW1xuICAgICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoe30pLFxuICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyb3I/LmVycm9yPy5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3Vwb25FeHBpcmVkRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIGVyciA9PiBlcnIucmVhc29uID09PSAnaW52YWxpZCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChjb3Vwb25FeHBpcmVkRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGNvdXBvbnMgYWN0aW9ucyBqdXN0IHdhbnRlZCB0byByZWxvYWQgY2FydCBhZ2FpblxuICAgICAgICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBkbyBpdCBpbiByZWZyZXNoIG9yIGtlZXAgdGhhdCBhY3Rpb25cbiAgICAgICAgICAgICAgICAgIC8vIGhvd2V2ZXIgcmVtb3ZpbmcgdGhpcyBhY3Rpb24gd2lsbCBiZSBhIGJyZWFraW5nIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoYXQgYWN0aW9uIGluIDIuMCByZWxlYXNlXG4gICAgICAgICAgICAgICAgICAvLyBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHsgLi4ucGF5bG9hZCB9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNsZWFyRXhwaXJlZENvdXBvbnMoe30pLFxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FydE5vdEZvdW5kRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIGVyciA9PiBlcnIucmVhc29uID09PSAnbm90Rm91bmQnIHx8ICdVbmtub3duUmVzb3VyY2VFcnJvcidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGNhcnROb3RGb3VuZEVycm9ycy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICBwYXlsb2FkLmV4dHJhRGF0YSAmJlxuICAgICAgICAgICAgICAgICAgcGF5bG9hZC5leHRyYURhdGEuYWN0aXZlXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAvLyBDbGVhciBjYXJ0IGlzIHJlc3BvbnNpYmxlIGZvciByZW1vdmluZyBjYXJ0IGluIGBjYXJ0YCBzdG9yZSBmZWF0dXJlLlxuICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNhcnQgZG9lcyB0aGUgc2FtZSB0aGluZywgYnV0IGluIGBtdWx0aS1jYXJ0YCBzdG9yZSBmZWF0dXJlLlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNsZWFyQ2FydCgpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydChwYXlsb2FkLmNhcnRJZCksXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKFxuICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLk1lcmdlTXVsdGlDYXJ0U3VjY2Vzc1xuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLlNldFRlbXBDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DUkVBVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQub2xkQ2FydElkLCBwYXlsb2FkLnRvTWVyZ2VDYXJ0R3VpZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKChjYXJ0OiBDYXJ0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25hbEFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLm9sZENhcnRJZCkge1xuICAgICAgICAgICAgICBjb25kaXRpb25hbEFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbmFsQWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgICAgICAgb2xkQ2FydElkOiBwYXlsb2FkLm9sZENhcnRJZCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYGNhcnRgIHN0b3JlIGJyYW5jaCBzaG91bGQgb25seSBiZSB1cGRhdGVkIGZvciBhY3RpdmUgY2FydFxuICAgICAgICAgICAgLy8gYXZvaWQgZGlzcGF0Y2hpbmcgQ3JlYXRlQ2FydFN1Y2Nlc3MgYWN0aW9uIG9uIGRpZmZlcmVudCBjYXJ0IGxvYWRzXG4gICAgICAgICAgICBpZiAocGF5bG9hZC5leHRyYURhdGEgJiYgcGF5bG9hZC5leHRyYURhdGEuYWN0aXZlKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbmFsQWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3MoY2FydClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5TZXRUZW1wQ2FydCh7XG4gICAgICAgICAgICAgICAgY2FydCxcbiAgICAgICAgICAgICAgICB0ZW1wQ2FydElkOiBwYXlsb2FkLnRlbXBDYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAuLi5jb25kaXRpb25hbEFjdGlvbnMsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgIHRlbXBDYXJ0SWQ6IHBheWxvYWQudGVtcENhcnRJZCxcbiAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIG1lcmdlQ2FydCQ6IE9ic2VydmFibGU8RGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZChwYXlsb2FkLnVzZXJJZCwgT0NDX0NBUlRfSURfQ1VSUkVOVCkucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoY3VycmVudENhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBvbGRDYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IGN1cnJlbnRDYXJ0ID8gY3VycmVudENhcnQuZ3VpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgdGVtcENhcnRJZDogcGF5bG9hZC50ZW1wQ2FydElkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoJDogT2JzZXJ2YWJsZTxcbiAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQgfCBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfVVBEQVRFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTLFxuICAgICAgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJUX1NVQ0NFU1MsXG4gICAgICBDaGVja291dEFjdGlvbnMuQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfVk9VQ0hFUl9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfVk9VQ0hFUl9TVUNDRVNTXG4gICAgKSxcbiAgICBtYXAoXG4gICAgICAoXG4gICAgICAgIGFjdGlvbjpcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3NcbiAgICAgICAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXJTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlclN1Y2Nlc3NcbiAgICAgICkgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIGNvbmNhdE1hcChwYXlsb2FkID0+XG4gICAgICBmcm9tKFtcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnQocGF5bG9hZC5jYXJ0SWQpLFxuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2hXaXRob3V0UHJvY2Vzc2VzJDogT2JzZXJ2YWJsZTxcbiAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1FUkdFX0NBUlRfU1VDQ0VTUyksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWFwKFxuICAgICAgcGF5bG9hZCA9PlxuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgIH0pXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldENhcnREZXRhaWxzT25TaXRlQ29udGV4dENoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgRGVwcmVjYXRlZENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHMgfCBDYXJ0QWN0aW9ucy5SZXNldE11bHRpQ2FydERldGFpbHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRVxuICAgICksXG4gICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5SZXNldENhcnREZXRhaWxzKCksXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5SZXNldE11bHRpQ2FydERldGFpbHMoKSxcbiAgICAgIF07XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWRkRW1haWwkOiBPYnNlcnZhYmxlPFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzc1xuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgIC5hZGRFbWFpbChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW1haWwpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0RmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnQocGF5bG9hZC5jYXJ0SWQpLFxuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZGVsZXRlQ2FydCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRFTEVURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRlbGV0ZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBleGhhdXN0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydENvbm5lY3Rvci5kZWxldGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKS5waXBlKFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNsZWFyQ2FydCgpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0RmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+XG4gICkge31cbn1cbiJdfQ==