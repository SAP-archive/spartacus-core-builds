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
export class CartEffects {
    /**
     * @param {?} actions$
     * @param {?} cartConnector
     * @param {?} cartData
     * @param {?=} store
     */
    constructor(actions$, cartConnector, cartData, store) {
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.cartData = cartData;
        this.store = store;
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE, SiteContextActions.LANGUAGE_CHANGE));
        this.loadCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.LOAD_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), groupBy((/**
         * @param {?} payload
         * @return {?}
         */
        payload => payload.cartId)), mergeMap((/**
         * @param {?} group$
         * @return {?}
         */
        group$ => group$.pipe(switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return of(payload).pipe(withLatestFrom(
            // TODO: deprecated -> remove check for store in 2.0 when store will be required
            !this.store
                ? of(false)
                : this.store.pipe(select(getCartHasPendingProcessesSelectorFactory(payload.cartId)))));
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([_, hasPendingProcesses]) => !hasPendingProcesses)), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([payload]) => payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            /** @type {?} */
            const loadCartParams = {
                userId: (payload && payload.userId) || this.cartData.userId,
                cartId: (payload && payload.cartId) || this.cartData.cartId,
            };
            if (this.isMissingData(loadCartParams)) {
                return from([
                    new DeprecatedCartActions.LoadCartFail({}),
                    new CartActions.LoadMultiCartFail({
                        cartId: loadCartParams.cartId,
                    }),
                ]);
            }
            return this.cartConnector
                .load(loadCartParams.userId, loadCartParams.cartId)
                .pipe(
            // TODO: remove with the `cart` store feature
            withLatestFrom(
            // TODO: deprecated -> remove check for store in 2.0 when store will be required
            !this.store
                ? of(payload.cartId)
                : this.store.pipe(select(getActiveCartId))), mergeMap((/**
             * @param {?} __0
             * @return {?}
             */
            ([cart, activeCartId]) => {
                /** @type {?} */
                let actions = [];
                if (cart) {
                    // `cart` store branch should only be updated for active cart
                    // avoid dispatching LoadCartSuccess action on different cart loads
                    if (loadCartParams.cartId === activeCartId ||
                        loadCartParams.cartId === OCC_CART_ID_CURRENT) {
                        actions.push(new DeprecatedCartActions.LoadCartSuccess(cart));
                    }
                    actions.push(new CartActions.LoadMultiCartSuccess({
                        cart,
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
            error => {
                /** @type {?} */
                const couponExpiredErrors = error.error.errors.filter((/**
                 * @param {?} err
                 * @return {?}
                 */
                err => err.reason === 'invalid'));
                if (couponExpiredErrors.length > 0) {
                    // clear coupons actions just wanted to reload cart again
                    // no need to do it in refresh or keep that action
                    // however removing this action will be a breaking change
                    // remove that action in 2.0 release
                    // @deprecated since 1.4
                    return from([
                        new CartActions.LoadCart(Object.assign({}, payload)),
                        new CartActions.ClearExpiredCoupons({}),
                    ]);
                }
                if (error && error.error && error.error.errors) {
                    /** @type {?} */
                    const cartNotFoundErrors = error.error.errors.filter((/**
                     * @param {?} err
                     * @return {?}
                     */
                    err => err.reason === 'notFound' || 'UnknownResourceError'));
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
        }))))), withdrawOn(this.contextChange$));
        this.createCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.CREATE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.cartConnector
                .create(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap((/**
             * @param {?} cart
             * @return {?}
             */
            (cart) => {
                /** @type {?} */
                const conditionalActions = [];
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
                return [
                    new CartActions.CreateMultiCartSuccess({
                        cart,
                        userId: payload.userId,
                        extraData: payload.extraData,
                    }),
                    new CartActions.SetFreshCart(cart),
                    ...conditionalActions,
                ];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => from([
                new DeprecatedCartActions.CreateCartFail(makeErrorSerializable(error)),
                new CartActions.CreateMultiCartFail({
                    cartId: payload.cartId,
                    error: makeErrorSerializable(error),
                }),
            ]))));
        })), withdrawOn(this.contextChange$));
        this.mergeCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.MERGE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.cartConnector.load(payload.userId, OCC_CART_ID_CURRENT).pipe(mergeMap((/**
             * @param {?} currentCart
             * @return {?}
             */
            currentCart => {
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
        (action) => action.payload)), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => from([
            new CartActions.CartProcessesDecrement(payload.cartId),
            new DeprecatedCartActions.LoadCart({
                userId: payload.userId,
                cartId: payload.cartId,
            }),
        ]))));
        this.refreshWithoutProcesses$ = this.actions$.pipe(ofType(DeprecatedCartActions.MERGE_CART_SUCCESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), map((/**
         * @param {?} payload
         * @return {?}
         */
        payload => new DeprecatedCartActions.LoadCart({
            userId: payload.userId,
            cartId: payload.cartId,
        }))));
        this.resetCartDetailsOnSiteContextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), mergeMap((/**
         * @return {?}
         */
        () => {
            return [
                new DeprecatedCartActions.ResetCartDetails(),
                new CartActions.ResetMultiCartDetails(),
            ];
        })));
        this.addEmail$ = this.actions$.pipe(ofType(DeprecatedCartActions.ADD_EMAIL_TO_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.cartConnector
            .addEmail(payload.userId, payload.cartId, payload.email)
            .pipe(mergeMap((/**
         * @return {?}
         */
        () => {
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
        error => from([
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
        ])))))), withdrawOn(this.contextChange$));
        this.deleteCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.DELETE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), exhaustMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.cartConnector.delete(payload.userId, payload.cartId).pipe(map((/**
         * @return {?}
         */
        () => {
            return new DeprecatedCartActions.ClearCart();
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DeprecatedCartActions.DeleteCartFail(makeErrorSerializable(error)))))))));
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    isMissingData(payload) {
        return payload.userId === undefined || payload.cartId === undefined;
    }
}
CartEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartConnector },
    { type: CartDataService },
    { type: Store }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxlQUFl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ZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT0NDX0NBUlRfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENhcnREYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBEZXByZWNhdGVkQ2FydEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQge1xuICBnZXRBY3RpdmVDYXJ0SWQsXG4gIGdldENhcnRIYXNQZW5kaW5nUHJvY2Vzc2VzU2VsZWN0b3JGYWN0b3J5LFxufSBmcm9tICcuLi9zZWxlY3RvcnMvbXVsdGktY2FydC5zZWxlY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RWZmZWN0cyB7XG4gIHByaXZhdGUgY29udGV4dENoYW5nZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRSxcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0VcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ2xlYXJFeHBpcmVkQ291cG9uc1xuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNsZWFyQ2FydFxuICAgIHwgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTE9BRF9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZ3JvdXBCeShwYXlsb2FkID0+IHBheWxvYWQuY2FydElkKSxcbiAgICBtZXJnZU1hcChncm91cCQgPT5cbiAgICAgIGdyb3VwJC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKHBheWxvYWQpLnBpcGUoXG4gICAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICAgICAgLy8gVE9ETzogZGVwcmVjYXRlZCAtPiByZW1vdmUgY2hlY2sgZm9yIHN0b3JlIGluIDIuMCB3aGVuIHN0b3JlIHdpbGwgYmUgcmVxdWlyZWRcbiAgICAgICAgICAgICAgIXRoaXMuc3RvcmVcbiAgICAgICAgICAgICAgICA/IG9mKGZhbHNlKVxuICAgICAgICAgICAgICAgIDogdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q2FydEhhc1BlbmRpbmdQcm9jZXNzZXNTZWxlY3RvckZhY3RvcnkocGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbXywgaGFzUGVuZGluZ1Byb2Nlc3Nlc10pID0+ICFoYXNQZW5kaW5nUHJvY2Vzc2VzKSxcbiAgICAgICAgbWFwKChbcGF5bG9hZF0pID0+IHBheWxvYWQpLFxuICAgICAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICAgICAgY29uc3QgbG9hZENhcnRQYXJhbXMgPSB7XG4gICAgICAgICAgICB1c2VySWQ6IChwYXlsb2FkICYmIHBheWxvYWQudXNlcklkKSB8fCB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZDogKHBheWxvYWQgJiYgcGF5bG9hZC5jYXJ0SWQpIHx8IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAodGhpcy5pc01pc3NpbmdEYXRhKGxvYWRDYXJ0UGFyYW1zKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbCh7fSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgICAgY2FydElkOiBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgICAgIC5sb2FkKGxvYWRDYXJ0UGFyYW1zLnVzZXJJZCwgbG9hZENhcnRQYXJhbXMuY2FydElkKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSB3aXRoIHRoZSBgY2FydGAgc3RvcmUgZmVhdHVyZVxuICAgICAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBkZXByZWNhdGVkIC0+IHJlbW92ZSBjaGVjayBmb3Igc3RvcmUgaW4gMi4wIHdoZW4gc3RvcmUgd2lsbCBiZSByZXF1aXJlZFxuICAgICAgICAgICAgICAgICF0aGlzLnN0b3JlXG4gICAgICAgICAgICAgICAgICA/IG9mKHBheWxvYWQuY2FydElkKVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGdldEFjdGl2ZUNhcnRJZCkpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG1lcmdlTWFwKChbY2FydCwgYWN0aXZlQ2FydElkXTogW0NhcnQsIHN0cmluZ10pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChjYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAvLyBgY2FydGAgc3RvcmUgYnJhbmNoIHNob3VsZCBvbmx5IGJlIHVwZGF0ZWQgZm9yIGFjdGl2ZSBjYXJ0XG4gICAgICAgICAgICAgICAgICAvLyBhdm9pZCBkaXNwYXRjaGluZyBMb2FkQ2FydFN1Y2Nlc3MgYWN0aW9uIG9uIGRpZmZlcmVudCBjYXJ0IGxvYWRzXG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCA9PT0gYWN0aXZlQ2FydElkIHx8XG4gICAgICAgICAgICAgICAgICAgIGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0U3VjY2VzcyhjYXJ0KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgIGNhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBsb2FkQ2FydFBhcmFtcy51c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBpZiAobG9hZENhcnRQYXJhbXMuY2FydElkID09PSBPQ0NfQ0FSVF9JRF9DVVJSRU5UKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92aW5nIGNhcnQgZnJvbSBlbnRpdHkgb2JqZWN0IHVuZGVyIGBjdXJyZW50YCBrZXkgYXMgaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ3VycmVudCBjYXJ0IGlzIGxvYWRlZCB1bmRlciBpdCdzIGNvZGUgZW50aXR5LlxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlbW92ZUNhcnQoT0NDX0NBUlRfSURfQ1VSUkVOVClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYWN0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoe30pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgICAgICAgIGNhcnRJZDogbG9hZENhcnRQYXJhbXMuY2FydElkLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY291cG9uRXhwaXJlZEVycm9ycyA9IGVycm9yLmVycm9yLmVycm9ycy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICBlcnIgPT4gZXJyLnJlYXNvbiA9PT0gJ2ludmFsaWQnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoY291cG9uRXhwaXJlZEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjbGVhciBjb3Vwb25zIGFjdGlvbnMganVzdCB3YW50ZWQgdG8gcmVsb2FkIGNhcnQgYWdhaW5cbiAgICAgICAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gZG8gaXQgaW4gcmVmcmVzaCBvciBrZWVwIHRoYXQgYWN0aW9uXG4gICAgICAgICAgICAgICAgICAvLyBob3dldmVyIHJlbW92aW5nIHRoaXMgYWN0aW9uIHdpbGwgYmUgYSBicmVha2luZyBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGF0IGFjdGlvbiBpbiAyLjAgcmVsZWFzZVxuICAgICAgICAgICAgICAgICAgLy8gQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZnJvbShbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7IC4uLnBheWxvYWQgfSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DbGVhckV4cGlyZWRDb3Vwb25zKHt9KSxcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnROb3RGb3VuZEVycm9ycyA9IGVycm9yLmVycm9yLmVycm9ycy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIGVyciA9PiBlcnIucmVhc29uID09PSAnbm90Rm91bmQnIHx8ICdVbmtub3duUmVzb3VyY2VFcnJvcidcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBpZiAoY2FydE5vdEZvdW5kRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgY2FydCBpcyByZXNwb25zaWJsZSBmb3IgcmVtb3ZpbmcgY2FydCBpbiBgY2FydGAgc3RvcmUgZmVhdHVyZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNhcnQgZG9lcyB0aGUgc2FtZSB0aGluZywgYnV0IGluIGBtdWx0aS1jYXJ0YCBzdG9yZSBmZWF0dXJlLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnJvbShbXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DbGVhckNhcnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydChsb2FkQ2FydFBhcmFtcy5jYXJ0SWQpLFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoXG4gICAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLk1lcmdlTXVsdGlDYXJ0U3VjY2Vzc1xuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLlNldEZyZXNoQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ1JFQVRFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAuY3JlYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLm9sZENhcnRJZCwgcGF5bG9hZC50b01lcmdlQ2FydEd1aWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uYWxBY3Rpb25zID0gW107XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5vbGRDYXJ0SWQpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9uYWxBY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjb25kaXRpb25hbEFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTWVyZ2VNdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICAgICAgICAgIG9sZENhcnRJZDogcGF5bG9hZC5vbGRDYXJ0SWQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGBjYXJ0YCBzdG9yZSBicmFuY2ggc2hvdWxkIG9ubHkgYmUgdXBkYXRlZCBmb3IgYWN0aXZlIGNhcnRcbiAgICAgICAgICAgIC8vIGF2b2lkIGRpc3BhdGNoaW5nIENyZWF0ZUNhcnRTdWNjZXNzIGFjdGlvbiBvbiBkaWZmZXJlbnQgY2FydCBsb2Fkc1xuICAgICAgICAgICAgaWYgKHBheWxvYWQuZXh0cmFEYXRhICYmIHBheWxvYWQuZXh0cmFEYXRhLmFjdGl2ZSkge1xuICAgICAgICAgICAgICBjb25kaXRpb25hbEFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzKGNhcnQpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgY2FydCxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGV4dHJhRGF0YTogcGF5bG9hZC5leHRyYURhdGEsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuU2V0RnJlc2hDYXJ0KGNhcnQpLFxuICAgICAgICAgICAgICAuLi5jb25kaXRpb25hbEFjdGlvbnMsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBtZXJnZUNhcnQkOiBPYnNlcnZhYmxlPERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1FUkdFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmxvYWQocGF5bG9hZC51c2VySWQsIE9DQ19DQVJUX0lEX0NVUlJFTlQpLnBpcGUoXG4gICAgICAgIG1lcmdlTWFwKGN1cnJlbnRDYXJ0ID0+IHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KHtcbiAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgb2xkQ2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgdG9NZXJnZUNhcnRHdWlkOiBjdXJyZW50Q2FydCA/IGN1cnJlbnRDYXJ0Lmd1aWQgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGV4dHJhRGF0YTogcGF5bG9hZC5leHRyYURhdGEsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2gkOiBPYnNlcnZhYmxlPFxuICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlRfU1VDQ0VTUyxcbiAgICAgIENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX0FERF9WT1VDSEVSX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9WT1VDSEVSX1NVQ0NFU1NcbiAgICApLFxuICAgIG1hcChcbiAgICAgIChcbiAgICAgICAgYWN0aW9uOlxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzc1xuICAgICAgICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkVm91Y2hlclN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyU3VjY2Vzc1xuICAgICAgKSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT5cbiAgICAgIGZyb20oW1xuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudChwYXlsb2FkLmNhcnRJZCksXG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgfSksXG4gICAgICBdKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaFdpdGhvdXRQcm9jZXNzZXMkOiBPYnNlcnZhYmxlPFxuICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtYXAoXG4gICAgICBwYXlsb2FkID0+XG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlc2V0Q2FydERldGFpbHNPblNpdGVDb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBEZXByZWNhdGVkQ2FydEFjdGlvbnMuUmVzZXRDYXJ0RGV0YWlscyB8IENhcnRBY3Rpb25zLlJlc2V0TXVsdGlDYXJ0RGV0YWlsc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFXG4gICAgKSxcbiAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHMoKSxcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlc2V0TXVsdGlDYXJ0RGV0YWlscygpLFxuICAgICAgXTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmFkZEVtYWlsKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lbWFpbClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudChwYXlsb2FkLmNhcnRJZCksXG4gICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBkZWxldGVDYXJ0JDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuREVMRVRFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuRGVsZXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGV4aGF1c3RNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0Q29ubmVjdG9yLmRlbGV0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0KCk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRlbGV0ZUNhcnRGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgY2FydERhdGE6IENhcnREYXRhU2VydmljZSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD5cbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAgICogVXNlIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PikgaW5zdGVhZFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmU/OiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+XG4gICkge31cblxuICBwcml2YXRlIGlzTWlzc2luZ0RhdGEocGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiBwYXlsb2FkLnVzZXJJZCA9PT0gdW5kZWZpbmVkIHx8IHBheWxvYWQuY2FydElkID09PSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==