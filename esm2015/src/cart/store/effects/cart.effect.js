/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, exhaustMap, } from 'rxjs/operators';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { CartDataService } from '../../facade/cart-data.service';
import { CartActions } from '../actions/index';
import { CheckoutActions } from '../../../checkout/store/actions/index';
import { OCC_CART_ID_CURRENT } from '../../../occ/utils/occ-constants';
export class CartEffects {
    /**
     * @param {?} actions$
     * @param {?} cartConnector
     * @param {?} cartData
     */
    constructor(actions$, cartConnector, cartData) {
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.cartData = cartData;
        this.loadCart$ = this.actions$.pipe(ofType(CartActions.LOAD_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
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
                    new CartActions.LoadCartFail({}),
                    new CartActions.LoadMultiCartFail({ cartId: loadCartParams.cartId }),
                ]);
            }
            return this.cartConnector
                .load(loadCartParams.userId, loadCartParams.cartId)
                .pipe(mergeMap((/**
             * @param {?} cart
             * @return {?}
             */
            (cart) => {
                /** @type {?} */
                let actions = [];
                if (payload.extraData && payload.extraData.addEntries) {
                    actions.push(new CartActions.CartSuccessAddEntryProcess());
                }
                if (cart) {
                    actions.push(new CartActions.LoadCartSuccess(cart));
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
                        new CartActions.LoadCartFail({}),
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
                    return of(new CartActions.ClearExpiredCoupons({}));
                }
                if (error && error.error && error.error.errors) {
                    /** @type {?} */
                    const cartNotFoundErrors = error.error.errors.filter((/**
                     * @param {?} err
                     * @return {?}
                     */
                    err => err.reason === 'notFound' || 'UnknownResourceError'));
                    if (cartNotFoundErrors.length > 0) {
                        return from([
                            new CartActions.ClearCart(),
                            new CartActions.RemoveCart(loadCartParams.cartId),
                        ]);
                    }
                }
                return from([
                    new CartActions.LoadCartFail(makeErrorSerializable(error)),
                    new CartActions.LoadMultiCartFail({
                        cartId: loadCartParams.cartId,
                        error: makeErrorSerializable(error),
                    }),
                ]);
            })));
        })));
        this.createCart$ = this.actions$.pipe(ofType(CartActions.CREATE_CART), map((/**
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
                if (payload.oldCartId) {
                    return [
                        new CartActions.CreateCartSuccess(cart),
                        new CartActions.CreateMultiCartSuccess({
                            cart,
                            userId: payload.userId,
                            extraData: payload.extraData,
                        }),
                        new CartActions.SetFreshCart(cart),
                        new CartActions.MergeCartSuccess({
                            userId: payload.userId,
                            cartId: cart.code,
                        }),
                        new CartActions.MergeMultiCartSuccess({
                            userId: payload.userId,
                            cartId: cart.code,
                            oldCartId: payload.oldCartId,
                        }),
                    ];
                }
                return [
                    new CartActions.CreateCartSuccess(cart),
                    new CartActions.CreateMultiCartSuccess({
                        cart,
                        userId: payload.userId,
                        extraData: payload.extraData,
                    }),
                    new CartActions.SetFreshCart(cart),
                ];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => from([
                new CartActions.CreateCartFail(makeErrorSerializable(error)),
                new CartActions.CreateMultiCartFail({
                    cartId: payload.cartId,
                    error: makeErrorSerializable(error),
                }),
            ]))));
        })));
        this.mergeCart$ = this.actions$.pipe(ofType(CartActions.MERGE_CART), map((/**
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
                    new CartActions.CreateCart({
                        userId: payload.userId,
                        oldCartId: payload.cartId,
                        toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                        extraData: payload.extraData,
                    }),
                ];
            })));
        })));
        this.refresh$ = this.actions$.pipe(ofType(CartActions.MERGE_CART_SUCCESS, CartActions.CART_ADD_ENTRY_SUCCESS, CartActions.CART_UPDATE_ENTRY_SUCCESS, CartActions.CART_REMOVE_ENTRY_SUCCESS, CartActions.ADD_EMAIL_TO_CART_SUCCESS, CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS, CartActions.CART_REMOVE_ENTRY_SUCCESS, CartActions.CART_ADD_VOUCHER_SUCCESS, CartActions.CART_REMOVE_VOUCHER_SUCCESS, CartActions.CART_REMOVE_VOUCHER_FAIL, CartActions.CLEAR_EXPIRED_COUPONS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), map((/**
         * @param {?} payload
         * @return {?}
         */
        payload => payload &&
            new CartActions.LoadCart({
                userId: payload.userId,
                cartId: payload.cartId,
            }))));
        this.resetCartDetailsOnSiteContextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), mergeMap((/**
         * @return {?}
         */
        () => {
            return [
                new CartActions.ResetCartDetails(),
                new CartActions.ResetMultiCartDetails(),
            ];
        })));
        this.addEmail$ = this.actions$.pipe(ofType(CartActions.ADD_EMAIL_TO_CART), map((/**
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
                new CartActions.AddEmailToCartSuccess({
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
            new CartActions.AddEmailToCartFail(makeErrorSerializable(error)),
            new CartActions.AddEmailToMultiCartFail({
                error: makeErrorSerializable(error),
                userId: payload.userId,
                cartId: payload.cartId,
            }),
        ])))))));
        this.deleteCart$ = this.actions$.pipe(ofType(CartActions.DELETE_CART), map((/**
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
            return new CartActions.ClearCart();
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new CartActions.DeleteCartFail(makeErrorSerializable(error)))))))));
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
    { type: CartDataService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR3ZFLE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUF1UnRCLFlBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsUUFBeUI7UUFGekIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQXhSbkMsY0FBUyxHQVFMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNw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Y0FBYyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDakUsQ0FDRixFQUNGLENBQ0YsQ0FBQztJQU1DLENBQUM7Ozs7OztJQUVJLGFBQWEsQ0FBQyxPQUEyQztRQUMvRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ3RFLENBQUM7OztZQWhTRixVQUFVOzs7O1lBbEJGLE9BQU87WUFZUCxhQUFhO1lBQ2IsZUFBZTs7QUFRdEI7SUFEQyxNQUFNLEVBQUU7c0NBQ0UsVUFBVTs4Q0FvRm5CO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0ksVUFBVTtnREF5RHJCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0csVUFBVTsrQ0FpQnBCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0MsVUFBVTs2Q0FxQ2xCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQzZCLFVBQVU7eUVBYTlDO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0UsVUFBVTs4Q0FvQ25CO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0ksVUFBVTtnREFhckI7OztJQXBSRixnQ0FxRkU7O0lBRUYsa0NBMERFOztJQUVGLGlDQWtCRTs7SUFFRiwrQkFzQ0U7O0lBRUYsMkRBY0U7O0lBRUYsZ0NBcUNFOztJQUVGLGtDQWNFOzs7OztJQUdBLCtCQUF5Qjs7Ozs7SUFDekIsb0NBQW9DOzs7OztJQUNwQywrQkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgZXhoYXVzdE1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENhcnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2NhcnQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IE9DQ19DQVJUX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DbGVhckV4cGlyZWRDb3Vwb25zXG4gICAgfCBDYXJ0QWN0aW9ucy5DbGVhckNhcnRcbiAgICB8IENhcnRBY3Rpb25zLlJlbW92ZUNhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuTE9BRF9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuTG9hZENhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIGNvbnN0IGxvYWRDYXJ0UGFyYW1zID0ge1xuICAgICAgICB1c2VySWQ6IChwYXlsb2FkICYmIHBheWxvYWQudXNlcklkKSB8fCB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiAocGF5bG9hZCAmJiBwYXlsb2FkLmNhcnRJZCkgfHwgdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5pc01pc3NpbmdEYXRhKGxvYWRDYXJ0UGFyYW1zKSkge1xuICAgICAgICByZXR1cm4gZnJvbShbXG4gICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbCh7fSksXG4gICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRGYWlsKHsgY2FydElkOiBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQgfSksXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAubG9hZChsb2FkQ2FydFBhcmFtcy51c2VySWQsIGxvYWRDYXJ0UGFyYW1zLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKGNhcnQ6IENhcnQpID0+IHtcbiAgICAgICAgICAgIGxldCBhY3Rpb25zID0gW107XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5leHRyYURhdGEgJiYgcGF5bG9hZC5leHRyYURhdGEuYWRkRW50cmllcykge1xuICAgICAgICAgICAgICBhY3Rpb25zLnB1c2gobmV3IENhcnRBY3Rpb25zLkNhcnRTdWNjZXNzQWRkRW50cnlQcm9jZXNzKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhcnQpIHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3MoY2FydCkpO1xuICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIGNhcnQsXG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IGxvYWRDYXJ0UGFyYW1zLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGV4dHJhRGF0YTogcGF5bG9hZC5leHRyYURhdGEsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKGxvYWRDYXJ0UGFyYW1zLmNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92aW5nIGNhcnQgZnJvbSBlbnRpdHkgb2JqZWN0IHVuZGVyIGBjdXJyZW50YCBrZXkgYXMgaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgICAgICAgICAgICAgICAvLyBDdXJyZW50IGNhcnQgaXMgbG9hZGVkIHVuZGVyIGl0J3MgY29kZSBlbnRpdHkuXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKG5ldyBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0KE9DQ19DQVJUX0lEX0NVUlJFTlQpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWN0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKHt9KSxcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgICAgY2FydElkOiBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdXBvbkV4cGlyZWRFcnJvcnMgPSBlcnJvci5lcnJvci5lcnJvcnMuZmlsdGVyKFxuICAgICAgICAgICAgICBlcnIgPT4gZXJyLnJlYXNvbiA9PT0gJ2ludmFsaWQnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGNvdXBvbkV4cGlyZWRFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gb2YobmV3IENhcnRBY3Rpb25zLkNsZWFyRXhwaXJlZENvdXBvbnMoe30pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLmVycm9ycykge1xuICAgICAgICAgICAgICBjb25zdCBjYXJ0Tm90Rm91bmRFcnJvcnMgPSBlcnJvci5lcnJvci5lcnJvcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIGVyciA9PiBlcnIucmVhc29uID09PSAnbm90Rm91bmQnIHx8ICdVbmtub3duUmVzb3VyY2VFcnJvcidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKGNhcnROb3RGb3VuZEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNsZWFyQ2FydCgpLFxuICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlbW92ZUNhcnQobG9hZENhcnRQYXJhbXMuY2FydElkKSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgIGNhcnRJZDogbG9hZENhcnRQYXJhbXMuY2FydElkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY3JlYXRlQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgfCBDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuU2V0RnJlc2hDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNSRUFURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAuY3JlYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLm9sZENhcnRJZCwgcGF5bG9hZC50b01lcmdlQ2FydEd1aWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBheWxvYWQub2xkQ2FydElkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzKGNhcnQpLFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIGNhcnQsXG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuU2V0RnJlc2hDYXJ0KGNhcnQpLFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTWVyZ2VNdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICAgICAgICAgIG9sZENhcnRJZDogcGF5bG9hZC5vbGRDYXJ0SWQsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3MoY2FydCksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5TZXRGcmVzaENhcnQoY2FydCksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIG1lcmdlQ2FydCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQ3JlYXRlQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLk1FUkdFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZChwYXlsb2FkLnVzZXJJZCwgT0NDX0NBUlRfSURfQ1VSUkVOVCkucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoY3VycmVudENhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIG9sZENhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIHRvTWVyZ2VDYXJ0R3VpZDogY3VycmVudENhcnQgPyBjdXJyZW50Q2FydC5ndWlkIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBleHRyYURhdGE6IHBheWxvYWQuZXh0cmFEYXRhLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuTG9hZENhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIENhcnRBY3Rpb25zLk1FUkdFX0NBUlRfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1VQREFURV9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJUX1NVQ0NFU1MsXG4gICAgICBDaGVja291dEFjdGlvbnMuQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfQUREX1ZPVUNIRVJfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX1ZPVUNIRVJfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX1ZPVUNIRVJfRkFJTCxcbiAgICAgIENhcnRBY3Rpb25zLkNMRUFSX0VYUElSRURfQ09VUE9OU1xuICAgICksXG4gICAgbWFwKFxuICAgICAgKFxuICAgICAgICBhY3Rpb246XG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnlTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3NcbiAgICAgICAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXJTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlclN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyRmFpbFxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2xlYXJFeHBpcmVkQ291cG9uc1xuICAgICAgKSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWFwKFxuICAgICAgcGF5bG9hZCA9PlxuICAgICAgICBwYXlsb2FkICYmXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICB9KVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVzZXRDYXJ0RGV0YWlsc09uU2l0ZUNvbnRleHRDaGFuZ2UkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHMgfCBDYXJ0QWN0aW9ucy5SZXNldE11bHRpQ2FydERldGFpbHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRVxuICAgICksXG4gICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHMoKSxcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlc2V0TXVsdGlDYXJ0RGV0YWlscygpLFxuICAgICAgXTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRTdWNjZXNzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmFkZEVtYWlsKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lbWFpbClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZUNhcnQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkRFTEVURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuRGVsZXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGV4aGF1c3RNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0Q29ubmVjdG9yLmRlbGV0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5DbGVhckNhcnQoKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgQ2FydEFjdGlvbnMuRGVsZXRlQ2FydEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGlzTWlzc2luZ0RhdGEocGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiBwYXlsb2FkLnVzZXJJZCA9PT0gdW5kZWZpbmVkIHx8IHBheWxvYWQuY2FydElkID09PSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==