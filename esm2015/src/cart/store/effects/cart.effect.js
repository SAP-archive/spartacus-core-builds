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
                    new CartActions.SetTempCart({
                        cart,
                        tempCartId: payload.tempCartId,
                    }),
                    ...conditionalActions,
                ];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => from([
                new DeprecatedCartActions.CreateCartFail(makeErrorSerializable(error)),
                new CartActions.CreateMultiCartFail({
                    tempCartId: payload.tempCartId,
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
                        tempCartId: payload.tempCartId,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxlQUFl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Ozs7O0lBQ3pCLG9DQUFvQzs7Ozs7SUFDcEMsK0JBQWlDOzs7OztJQUNqQyw0QkFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBjb25jYXRNYXAsXG4gIGV4aGF1c3RNYXAsXG4gIGZpbHRlcixcbiAgZ3JvdXBCeSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfQ0FSVF9JRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi8uLi91dGlsL3dpdGhkcmF3LW9uJztcbmltcG9ydCB7IENhcnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2NhcnQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7XG4gIGdldEFjdGl2ZUNhcnRJZCxcbiAgZ2V0Q2FydEhhc1BlbmRpbmdQcm9jZXNzZXNTZWxlY3RvckZhY3RvcnksXG59IGZyb20gJy4uL3NlbGVjdG9ycy9tdWx0aS1jYXJ0LnNlbGVjdG9yJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNVxuICpcbiAqIHNwYXJ0YWN1cyBuZ3J4IGVmZmVjdHMgd2lsbCBubyBsb25nZXIgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUElcbiAqXG4gKiBUT0RPKGlzc3VlOiM0NTA3KVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydEVmZmVjdHMge1xuICBwcml2YXRlIGNvbnRleHRDaGFuZ2UkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0RmFpbFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNsZWFyRXhwaXJlZENvdXBvbnNcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DbGVhckNhcnRcbiAgICB8IENhcnRBY3Rpb25zLlJlbW92ZUNhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxPQURfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGdyb3VwQnkocGF5bG9hZCA9PiBwYXlsb2FkLmNhcnRJZCksXG4gICAgbWVyZ2VNYXAoZ3JvdXAkID0+XG4gICAgICBncm91cCQucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgICAgIHJldHVybiBvZihwYXlsb2FkKS5waXBlKFxuICAgICAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgICAgIC8vIFRPRE86IGRlcHJlY2F0ZWQgLT4gcmVtb3ZlIGNoZWNrIGZvciBzdG9yZSBpbiAyLjAgd2hlbiBzdG9yZSB3aWxsIGJlIHJlcXVpcmVkXG4gICAgICAgICAgICAgICF0aGlzLnN0b3JlXG4gICAgICAgICAgICAgICAgPyBvZihmYWxzZSlcbiAgICAgICAgICAgICAgICA6IHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0KFxuICAgICAgICAgICAgICAgICAgICAgIGdldENhcnRIYXNQZW5kaW5nUHJvY2Vzc2VzU2VsZWN0b3JGYWN0b3J5KHBheWxvYWQuY2FydElkKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW18sIGhhc1BlbmRpbmdQcm9jZXNzZXNdKSA9PiAhaGFzUGVuZGluZ1Byb2Nlc3NlcyksXG4gICAgICAgIG1hcCgoW3BheWxvYWRdKSA9PiBwYXlsb2FkKSxcbiAgICAgICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvYWRDYXJ0UGFyYW1zID0ge1xuICAgICAgICAgICAgdXNlcklkOiAocGF5bG9hZCAmJiBwYXlsb2FkLnVzZXJJZCkgfHwgdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQ6IChwYXlsb2FkICYmIHBheWxvYWQuY2FydElkKSB8fCB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHRoaXMuaXNNaXNzaW5nRGF0YShsb2FkQ2FydFBhcmFtcykpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoe30pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgIGNhcnRJZDogbG9hZENhcnRQYXJhbXMuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgICAgICAubG9hZChsb2FkQ2FydFBhcmFtcy51c2VySWQsIGxvYWRDYXJ0UGFyYW1zLmNhcnRJZClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgd2l0aCB0aGUgYGNhcnRgIHN0b3JlIGZlYXR1cmVcbiAgICAgICAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZGVwcmVjYXRlZCAtPiByZW1vdmUgY2hlY2sgZm9yIHN0b3JlIGluIDIuMCB3aGVuIHN0b3JlIHdpbGwgYmUgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAhdGhpcy5zdG9yZVxuICAgICAgICAgICAgICAgICAgPyBvZihwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5zdG9yZS5waXBlKHNlbGVjdChnZXRBY3RpdmVDYXJ0SWQpKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBtZXJnZU1hcCgoW2NhcnQsIGFjdGl2ZUNhcnRJZF06IFtDYXJ0LCBzdHJpbmddKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoY2FydCkge1xuICAgICAgICAgICAgICAgICAgLy8gYGNhcnRgIHN0b3JlIGJyYW5jaCBzaG91bGQgb25seSBiZSB1cGRhdGVkIGZvciBhY3RpdmUgY2FydFxuICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgZGlzcGF0Y2hpbmcgTG9hZENhcnRTdWNjZXNzIGFjdGlvbiBvbiBkaWZmZXJlbnQgY2FydCBsb2Fkc1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQgPT09IGFjdGl2ZUNhcnRJZCB8fFxuICAgICAgICAgICAgICAgICAgICBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQgPT09IE9DQ19DQVJUX0lEX0NVUlJFTlRcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3MoY2FydClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogbG9hZENhcnRQYXJhbXMudXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgIGV4dHJhRGF0YTogcGF5bG9hZC5leHRyYURhdGEsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgaWYgKGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmluZyBjYXJ0IGZyb20gZW50aXR5IG9iamVjdCB1bmRlciBgY3VycmVudGAga2V5IGFzIGl0IGlzIG5vIGxvbmdlciBuZWVkZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQgY2FydCBpcyBsb2FkZWQgdW5kZXIgaXQncyBjb2RlIGVudGl0eS5cbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0KE9DQ19DQVJUX0lEX0NVUlJFTlQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKHt9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdXBvbkV4cGlyZWRFcnJvcnMgPSBlcnJvci5lcnJvci5lcnJvcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgZXJyID0+IGVyci5yZWFzb24gPT09ICdpbnZhbGlkJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGNvdXBvbkV4cGlyZWRFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgLy8gY2xlYXIgY291cG9ucyBhY3Rpb25zIGp1c3Qgd2FudGVkIHRvIHJlbG9hZCBjYXJ0IGFnYWluXG4gICAgICAgICAgICAgICAgICAvLyBubyBuZWVkIHRvIGRvIGl0IGluIHJlZnJlc2ggb3Iga2VlcCB0aGF0IGFjdGlvblxuICAgICAgICAgICAgICAgICAgLy8gaG93ZXZlciByZW1vdmluZyB0aGlzIGFjdGlvbiB3aWxsIGJlIGEgYnJlYWtpbmcgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhhdCBhY3Rpb24gaW4gMi4wIHJlbGVhc2VcbiAgICAgICAgICAgICAgICAgIC8vIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoeyAuLi5wYXlsb2FkIH0pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2xlYXJFeHBpcmVkQ291cG9ucyh7fSksXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZXJyb3IgJiYgZXJyb3IuZXJyb3IuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjYXJ0Tm90Rm91bmRFcnJvcnMgPSBlcnJvci5lcnJvci5lcnJvcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICBlcnIgPT4gZXJyLnJlYXNvbiA9PT0gJ25vdEZvdW5kJyB8fCAnVW5rbm93blJlc291cmNlRXJyb3InXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgaWYgKGNhcnROb3RGb3VuZEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFyIGNhcnQgaXMgcmVzcG9uc2libGUgZm9yIHJlbW92aW5nIGNhcnQgaW4gYGNhcnRgIHN0b3JlIGZlYXR1cmUuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjYXJ0IGRvZXMgdGhlIHNhbWUgdGhpbmcsIGJ1dCBpbiBgbXVsdGktY2FydGAgc3RvcmUgZmVhdHVyZS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0KCksXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlbW92ZUNhcnQobG9hZENhcnRQYXJhbXMuY2FydElkKSxcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKFxuICAgICAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICAgICAgY2FydElkOiBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjcmVhdGVDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0U3VjY2Vzc1xuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5TZXRUZW1wQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ1JFQVRFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAuY3JlYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLm9sZENhcnRJZCwgcGF5bG9hZC50b01lcmdlQ2FydEd1aWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uYWxBY3Rpb25zID0gW107XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5vbGRDYXJ0SWQpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9uYWxBY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjb25kaXRpb25hbEFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTWVyZ2VNdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICAgICAgICAgIG9sZENhcnRJZDogcGF5bG9hZC5vbGRDYXJ0SWQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGBjYXJ0YCBzdG9yZSBicmFuY2ggc2hvdWxkIG9ubHkgYmUgdXBkYXRlZCBmb3IgYWN0aXZlIGNhcnRcbiAgICAgICAgICAgIC8vIGF2b2lkIGRpc3BhdGNoaW5nIENyZWF0ZUNhcnRTdWNjZXNzIGFjdGlvbiBvbiBkaWZmZXJlbnQgY2FydCBsb2Fkc1xuICAgICAgICAgICAgaWYgKHBheWxvYWQuZXh0cmFEYXRhICYmIHBheWxvYWQuZXh0cmFEYXRhLmFjdGl2ZSkge1xuICAgICAgICAgICAgICBjb25kaXRpb25hbEFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzKGNhcnQpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgY2FydCxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGV4dHJhRGF0YTogcGF5bG9hZC5leHRyYURhdGEsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuU2V0VGVtcENhcnQoe1xuICAgICAgICAgICAgICAgIGNhcnQsXG4gICAgICAgICAgICAgICAgdGVtcENhcnRJZDogcGF5bG9hZC50ZW1wQ2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgLi4uY29uZGl0aW9uYWxBY3Rpb25zLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0RmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICB0ZW1wQ2FydElkOiBwYXlsb2FkLnRlbXBDYXJ0SWQsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBtZXJnZUNhcnQkOiBPYnNlcnZhYmxlPERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1FUkdFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmxvYWQocGF5bG9hZC51c2VySWQsIE9DQ19DQVJUX0lEX0NVUlJFTlQpLnBpcGUoXG4gICAgICAgIG1lcmdlTWFwKGN1cnJlbnRDYXJ0ID0+IHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KHtcbiAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgb2xkQ2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgdG9NZXJnZUNhcnRHdWlkOiBjdXJyZW50Q2FydCA/IGN1cnJlbnRDYXJ0Lmd1aWQgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGV4dHJhRGF0YTogcGF5bG9hZC5leHRyYURhdGEsXG4gICAgICAgICAgICAgIHRlbXBDYXJ0SWQ6IHBheWxvYWQudGVtcENhcnRJZCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaCQ6IE9ic2VydmFibGU8XG4gICAgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0IHwgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1VQREFURV9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfRU5UUllfU1VDQ0VTUyxcbiAgICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BRERfRU1BSUxfVE9fQ0FSVF9TVUNDRVNTLFxuICAgICAgQ2hlY2tvdXRBY3Rpb25zLkNMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREVfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfQUREX1ZPVUNIRVJfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX1ZPVUNIRVJfU1VDQ0VTU1xuICAgICksXG4gICAgbWFwKFxuICAgICAgKFxuICAgICAgICBhY3Rpb246XG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzXG4gICAgICAgICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyU3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXJTdWNjZXNzXG4gICAgICApID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBjb25jYXRNYXAocGF5bG9hZCA9PlxuICAgICAgZnJvbShbXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50KHBheWxvYWQuY2FydElkKSxcbiAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICB9KSxcbiAgICAgIF0pXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoV2l0aG91dFByb2Nlc3NlcyQ6IE9ic2VydmFibGU8XG4gICAgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NRVJHRV9DQVJUX1NVQ0NFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2VzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1hcChcbiAgICAgIHBheWxvYWQgPT5cbiAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICB9KVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVzZXRDYXJ0RGV0YWlsc09uU2l0ZUNvbnRleHRDaGFuZ2UkOiBPYnNlcnZhYmxlPFxuICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5SZXNldENhcnREZXRhaWxzIHwgQ2FydEFjdGlvbnMuUmVzZXRNdWx0aUNhcnREZXRhaWxzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0VcbiAgICApLFxuICAgIG1lcmdlTWFwKCgpID0+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuUmVzZXRDYXJ0RGV0YWlscygpLFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuUmVzZXRNdWx0aUNhcnREZXRhaWxzKCksXG4gICAgICBdO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFkZEVtYWlsJDogT2JzZXJ2YWJsZTxcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3NcbiAgICB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudFxuICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BRERfRU1BSUxfVE9fQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAuYWRkRW1haWwocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVtYWlsKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50KHBheWxvYWQuY2FydElkKSxcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZUNhcnQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5ERUxFVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZXhoYXVzdE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRDb25uZWN0b3IuZGVsZXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCkucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DbGVhckNhcnQoKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuRGVsZXRlQ2FydEZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PlxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgKiBVc2UgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+KSBpbnN0ZWFkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2VcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBwcml2YXRlIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yZT86IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD5cbiAgKSB7fVxuXG4gIHByaXZhdGUgaXNNaXNzaW5nRGF0YShwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHBheWxvYWQudXNlcklkID09PSB1bmRlZmluZWQgfHwgcGF5bG9hZC5jYXJ0SWQgPT09IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19