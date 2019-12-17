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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxlQUFl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LGdDQXdJRTs7SUFFRixrQ0FnRUU7O0lBRUYsaUNBbUJFOztJQUVGLCtCQWtDRTs7SUFFRiwrQ0FhRTs7SUFFRiwyREFjRTs7SUFFRixnQ0ErQ0U7O0lBRUYsa0NBa0JFOzs7OztJQXFCQSwrQkFBeUI7Ozs7O0lBQ3pCLG9DQUFvQzs7Ozs7SUFDcEMsK0JBQWlDOzs7OztJQUNqQyw0QkFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBjb25jYXRNYXAsXG4gIGV4aGF1c3RNYXAsXG4gIGZpbHRlcixcbiAgZ3JvdXBCeSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfQ0FSVF9JRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi8uLi91dGlsL3dpdGhkcmF3LW9uJztcbmltcG9ydCB7IENhcnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2NhcnQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7XG4gIGdldEFjdGl2ZUNhcnRJZCxcbiAgZ2V0Q2FydEhhc1BlbmRpbmdQcm9jZXNzZXNTZWxlY3RvckZhY3RvcnksXG59IGZyb20gJy4uL3NlbGVjdG9ycy9tdWx0aS1jYXJ0LnNlbGVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZENhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydEZhaWxcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DbGVhckV4cGlyZWRDb3Vwb25zXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0XG4gICAgfCBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5MT0FEX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBncm91cEJ5KHBheWxvYWQgPT4gcGF5bG9hZC5jYXJ0SWQpLFxuICAgIG1lcmdlTWFwKGdyb3VwJCA9PlxuICAgICAgZ3JvdXAkLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgICAgICByZXR1cm4gb2YocGF5bG9hZCkucGlwZShcbiAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgICAgICAvLyBUT0RPOiBkZXByZWNhdGVkIC0+IHJlbW92ZSBjaGVjayBmb3Igc3RvcmUgaW4gMi4wIHdoZW4gc3RvcmUgd2lsbCBiZSByZXF1aXJlZFxuICAgICAgICAgICAgICAhdGhpcy5zdG9yZVxuICAgICAgICAgICAgICAgID8gb2YoZmFsc2UpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdChcbiAgICAgICAgICAgICAgICAgICAgICBnZXRDYXJ0SGFzUGVuZGluZ1Byb2Nlc3Nlc1NlbGVjdG9yRmFjdG9yeShwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKFtfLCBoYXNQZW5kaW5nUHJvY2Vzc2VzXSkgPT4gIWhhc1BlbmRpbmdQcm9jZXNzZXMpLFxuICAgICAgICBtYXAoKFtwYXlsb2FkXSkgPT4gcGF5bG9hZCksXG4gICAgICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgICAgICBjb25zdCBsb2FkQ2FydFBhcmFtcyA9IHtcbiAgICAgICAgICAgIHVzZXJJZDogKHBheWxvYWQgJiYgcGF5bG9hZC51c2VySWQpIHx8IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiAocGF5bG9hZCAmJiBwYXlsb2FkLmNhcnRJZCkgfHwgdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh0aGlzLmlzTWlzc2luZ0RhdGEobG9hZENhcnRQYXJhbXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKHt9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAgICAgLmxvYWQobG9hZENhcnRQYXJhbXMudXNlcklkLCBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHdpdGggdGhlIGBjYXJ0YCBzdG9yZSBmZWF0dXJlXG4gICAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGRlcHJlY2F0ZWQgLT4gcmVtb3ZlIGNoZWNrIGZvciBzdG9yZSBpbiAyLjAgd2hlbiBzdG9yZSB3aWxsIGJlIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgIXRoaXMuc3RvcmVcbiAgICAgICAgICAgICAgICAgID8gb2YocGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgICAgICAgICAgICA6IHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZ2V0QWN0aXZlQ2FydElkKSlcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbWVyZ2VNYXAoKFtjYXJ0LCBhY3RpdmVDYXJ0SWRdOiBbQ2FydCwgc3RyaW5nXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGNhcnQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGBjYXJ0YCBzdG9yZSBicmFuY2ggc2hvdWxkIG9ubHkgYmUgdXBkYXRlZCBmb3IgYWN0aXZlIGNhcnRcbiAgICAgICAgICAgICAgICAgIC8vIGF2b2lkIGRpc3BhdGNoaW5nIExvYWRDYXJ0U3VjY2VzcyBhY3Rpb24gb24gZGlmZmVyZW50IGNhcnQgbG9hZHNcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhcnRQYXJhbXMuY2FydElkID09PSBhY3RpdmVDYXJ0SWQgfHxcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhcnRQYXJhbXMuY2FydElkID09PSBPQ0NfQ0FSVF9JRF9DVVJSRU5UXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzKGNhcnQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgY2FydCxcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGxvYWRDYXJ0UGFyYW1zLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYURhdGE6IHBheWxvYWQuZXh0cmFEYXRhLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGlmIChsb2FkQ2FydFBhcmFtcy5jYXJ0SWQgPT09IE9DQ19DQVJUX0lEX0NVUlJFTlQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZpbmcgY2FydCBmcm9tIGVudGl0eSBvYmplY3QgdW5kZXIgYGN1cnJlbnRgIGtleSBhcyBpdCBpcyBubyBsb25nZXIgbmVlZGVkLlxuICAgICAgICAgICAgICAgICAgICAvLyBDdXJyZW50IGNhcnQgaXMgbG9hZGVkIHVuZGVyIGl0J3MgY29kZSBlbnRpdHkuXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydChPQ0NfQ0FSVF9JRF9DVVJSRU5UKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zID0gW1xuICAgICAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbCh7fSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgICAgICAgY2FydElkOiBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3Vwb25FeHBpcmVkRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIGVyciA9PiBlcnIucmVhc29uID09PSAnaW52YWxpZCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChjb3Vwb25FeHBpcmVkRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGNvdXBvbnMgYWN0aW9ucyBqdXN0IHdhbnRlZCB0byByZWxvYWQgY2FydCBhZ2FpblxuICAgICAgICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBkbyBpdCBpbiByZWZyZXNoIG9yIGtlZXAgdGhhdCBhY3Rpb25cbiAgICAgICAgICAgICAgICAgIC8vIGhvd2V2ZXIgcmVtb3ZpbmcgdGhpcyBhY3Rpb24gd2lsbCBiZSBhIGJyZWFraW5nIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoYXQgYWN0aW9uIGluIDIuMCByZWxlYXNlXG4gICAgICAgICAgICAgICAgICAvLyBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHsgLi4ucGF5bG9hZCB9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNsZWFyRXhwaXJlZENvdXBvbnMoe30pLFxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2FydE5vdEZvdW5kRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgZXJyID0+IGVyci5yZWFzb24gPT09ICdub3RGb3VuZCcgfHwgJ1Vua25vd25SZXNvdXJjZUVycm9yJ1xuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjYXJ0Tm90Rm91bmRFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciBjYXJ0IGlzIHJlc3BvbnNpYmxlIGZvciByZW1vdmluZyBjYXJ0IGluIGBjYXJ0YCBzdG9yZSBmZWF0dXJlLlxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY2FydCBkb2VzIHRoZSBzYW1lIHRoaW5nLCBidXQgaW4gYG11bHRpLWNhcnRgIHN0b3JlIGZlYXR1cmUuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNsZWFyQ2FydCgpLFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0KGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCksXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZnJvbShbXG4gICAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbChcbiAgICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgICAgIGNhcnRJZDogbG9hZENhcnRQYXJhbXMuY2FydElkLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY3JlYXRlQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuTWVyZ2VNdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuU2V0RnJlc2hDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DUkVBVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQub2xkQ2FydElkLCBwYXlsb2FkLnRvTWVyZ2VDYXJ0R3VpZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKChjYXJ0OiBDYXJ0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25hbEFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLm9sZENhcnRJZCkge1xuICAgICAgICAgICAgICBjb25kaXRpb25hbEFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbmFsQWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgICAgICAgb2xkQ2FydElkOiBwYXlsb2FkLm9sZENhcnRJZCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYGNhcnRgIHN0b3JlIGJyYW5jaCBzaG91bGQgb25seSBiZSB1cGRhdGVkIGZvciBhY3RpdmUgY2FydFxuICAgICAgICAgICAgLy8gYXZvaWQgZGlzcGF0Y2hpbmcgQ3JlYXRlQ2FydFN1Y2Nlc3MgYWN0aW9uIG9uIGRpZmZlcmVudCBjYXJ0IGxvYWRzXG4gICAgICAgICAgICBpZiAocGF5bG9hZC5leHRyYURhdGEgJiYgcGF5bG9hZC5leHRyYURhdGEuYWN0aXZlKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbmFsQWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3MoY2FydClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5TZXRGcmVzaENhcnQoY2FydCksXG4gICAgICAgICAgICAgIC4uLmNvbmRpdGlvbmFsQWN0aW9ucyxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIG1lcmdlQ2FydCQ6IE9ic2VydmFibGU8RGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZChwYXlsb2FkLnVzZXJJZCwgT0NDX0NBUlRfSURfQ1VSUkVOVCkucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoY3VycmVudENhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBvbGRDYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IGN1cnJlbnRDYXJ0ID8gY3VycmVudENhcnQuZ3VpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaCQ6IE9ic2VydmFibGU8XG4gICAgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0IHwgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1VQREFURV9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfRU5UUllfU1VDQ0VTUyxcbiAgICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BRERfRU1BSUxfVE9fQ0FSVF9TVUNDRVNTLFxuICAgICAgQ2hlY2tvdXRBY3Rpb25zLkNMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREVfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfQUREX1ZPVUNIRVJfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX1ZPVUNIRVJfU1VDQ0VTU1xuICAgICksXG4gICAgbWFwKFxuICAgICAgKFxuICAgICAgICBhY3Rpb246XG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzXG4gICAgICAgICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyU3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXJTdWNjZXNzXG4gICAgICApID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBjb25jYXRNYXAocGF5bG9hZCA9PlxuICAgICAgZnJvbShbXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50KHBheWxvYWQuY2FydElkKSxcbiAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICB9KSxcbiAgICAgIF0pXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoV2l0aG91dFByb2Nlc3NlcyQ6IE9ic2VydmFibGU8XG4gICAgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NRVJHRV9DQVJUX1NVQ0NFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2VzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1hcChcbiAgICAgIHBheWxvYWQgPT5cbiAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICB9KVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVzZXRDYXJ0RGV0YWlsc09uU2l0ZUNvbnRleHRDaGFuZ2UkOiBPYnNlcnZhYmxlPFxuICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5SZXNldENhcnREZXRhaWxzIHwgQ2FydEFjdGlvbnMuUmVzZXRNdWx0aUNhcnREZXRhaWxzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0VcbiAgICApLFxuICAgIG1lcmdlTWFwKCgpID0+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuUmVzZXRDYXJ0RGV0YWlscygpLFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuUmVzZXRNdWx0aUNhcnREZXRhaWxzKCksXG4gICAgICBdO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFkZEVtYWlsJDogT2JzZXJ2YWJsZTxcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3NcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BRERfRU1BSUxfVE9fQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAuYWRkRW1haWwocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVtYWlsKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50KHBheWxvYWQuY2FydElkKSxcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZUNhcnQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5ERUxFVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZXhoYXVzdE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRDb25uZWN0b3IuZGVsZXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCkucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DbGVhckNhcnQoKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuRGVsZXRlQ2FydEZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PlxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgKiBVc2UgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+KSBpbnN0ZWFkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2VcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBwcml2YXRlIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yZT86IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD5cbiAgKSB7fVxuXG4gIHByaXZhdGUgaXNNaXNzaW5nRGF0YShwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHBheWxvYWQudXNlcklkID09PSB1bmRlZmluZWQgfHwgcGF5bG9hZC5jYXJ0SWQgPT09IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19