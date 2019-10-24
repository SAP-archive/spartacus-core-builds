/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap, } from 'rxjs/operators';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { CartDataService } from '../../facade/cart-data.service';
import { CartActions } from '../actions/index';
import { CheckoutActions } from '../../../checkout/store/actions/index';
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
                return of(new CartActions.LoadCartFail({}));
            }
            return this.cartConnector
                .load(loadCartParams.userId, loadCartParams.cartId)
                .pipe(map((/**
             * @param {?} cart
             * @return {?}
             */
            (cart) => {
                return new CartActions.LoadCartSuccess(cart);
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
                        return of(new CartActions.ClearCart());
                    }
                }
                return of(new CartActions.LoadCartFail(makeErrorSerializable(error)));
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
                        new CartActions.MergeCartSuccess({
                            userId: payload.userId,
                            cartId: cart.code,
                        }),
                    ];
                }
                return [new CartActions.CreateCartSuccess(cart)];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CartActions.CreateCartFail(makeErrorSerializable(error))))));
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
            return this.cartConnector.load(payload.userId, 'current').pipe(map((/**
             * @param {?} currentCart
             * @return {?}
             */
            currentCart => {
                return new CartActions.CreateCart({
                    userId: payload.userId,
                    oldCartId: payload.cartId,
                    toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                });
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
        this.resetCartDetailsOnSiteContextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), map((/**
         * @return {?}
         */
        () => new CartActions.ResetCartDetails())));
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
            .pipe(map((/**
         * @return {?}
         */
        () => {
            return new CartActions.AddEmailToCartSuccess({
                userId: payload.userId,
                cartId: payload.cartId,
            });
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new CartActions.AddEmailToCartFail(makeErrorSerializable(error)))))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHeEUsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQWdNdEIsWUFDVSxRQUFpQixFQUNqQixhQUE0QixFQUM1QixRQUF5QjtRQUZ6QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBak1uQyxjQUFTLEdBS0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQzdCLEdBQUc7Ozs7UUFDRCxDQUFD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OztZQWpCRixPQUFPO1lBWVAsYUFBYTtZQUNiLGVBQWU7O0FBT3RCO0lBREMsTUFBTSxFQUFFO3NDQUNFLFVBQVU7OENBa0RuQjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNJLFVBQVU7Z0RBNEJyQjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNHLFVBQVU7K0NBY3BCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0MsVUFBVTs2Q0FxQ2xCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQzZCLFVBQVU7eUVBUTlDO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0UsVUFBVTs4Q0FvQm5CO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0ksVUFBVTtnREFhckI7OztJQTdMRixnQ0FtREU7O0lBRUYsa0NBNkJFOztJQUVGLGlDQWVFOztJQUVGLCtCQXNDRTs7SUFFRiwyREFTRTs7SUFFRixnQ0FxQkU7O0lBRUYsa0NBY0U7Ozs7O0lBR0EsK0JBQXlCOzs7OztJQUN6QixvQ0FBb0M7Ozs7O0lBQ3BDLCtCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgZXhoYXVzdE1hcCxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZENhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNsZWFyRXhwaXJlZENvdXBvbnNcbiAgICB8IENhcnRBY3Rpb25zLkNsZWFyQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5MT0FEX0NBUlQpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IHtcbiAgICAgICAgdHlwZTogc3RyaW5nO1xuICAgICAgICBwYXlsb2FkPzogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfTtcbiAgICAgIH0pID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIGNvbnN0IGxvYWRDYXJ0UGFyYW1zID0ge1xuICAgICAgICB1c2VySWQ6IChwYXlsb2FkICYmIHBheWxvYWQudXNlcklkKSB8fCB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiAocGF5bG9hZCAmJiBwYXlsb2FkLmNhcnRJZCkgfHwgdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5pc01pc3NpbmdEYXRhKGxvYWRDYXJ0UGFyYW1zKSkge1xuICAgICAgICByZXR1cm4gb2YobmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbCh7fSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAubG9hZChsb2FkQ2FydFBhcmFtcy51c2VySWQsIGxvYWRDYXJ0UGFyYW1zLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChjYXJ0OiBDYXJ0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0U3VjY2VzcyhjYXJ0KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdXBvbkV4cGlyZWRFcnJvcnMgPSBlcnJvci5lcnJvci5lcnJvcnMuZmlsdGVyKFxuICAgICAgICAgICAgICBlcnIgPT4gZXJyLnJlYXNvbiA9PT0gJ2ludmFsaWQnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGNvdXBvbkV4cGlyZWRFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gb2YobmV3IENhcnRBY3Rpb25zLkNsZWFyRXhwaXJlZENvdXBvbnMoe30pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLmVycm9ycykge1xuICAgICAgICAgICAgICBjb25zdCBjYXJ0Tm90Rm91bmRFcnJvcnMgPSBlcnJvci5lcnJvci5lcnJvcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIGVyciA9PiBlcnIucmVhc29uID09PSAnbm90Rm91bmQnIHx8ICdVbmtub3duUmVzb3VyY2VFcnJvcidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKGNhcnROb3RGb3VuZEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBDYXJ0QWN0aW9ucy5DbGVhckNhcnQoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvZihcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNSRUFURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAuY3JlYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLm9sZENhcnRJZCwgcGF5bG9hZC50b01lcmdlQ2FydEd1aWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBheWxvYWQub2xkQ2FydElkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzKGNhcnQpLFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzKGNhcnQpXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIG1lcmdlQ2FydCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQ3JlYXRlQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLk1FUkdFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZChwYXlsb2FkLnVzZXJJZCwgJ2N1cnJlbnQnKS5waXBlKFxuICAgICAgICBtYXAoY3VycmVudENhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCh7XG4gICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgb2xkQ2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgIHRvTWVyZ2VDYXJ0R3VpZDogY3VycmVudENhcnQgPyBjdXJyZW50Q2FydC5ndWlkIDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoJDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5Mb2FkQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfVVBEQVRFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlRfU1VDQ0VTUyxcbiAgICAgIENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfVk9VQ0hFUl9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfVk9VQ0hFUl9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfVk9VQ0hFUl9GQUlMLFxuICAgICAgQ2FydEFjdGlvbnMuQ0xFQVJfRVhQSVJFRF9DT1VQT05TXG4gICAgKSxcbiAgICBtYXAoXG4gICAgICAoXG4gICAgICAgIGFjdGlvbjpcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzc1xuICAgICAgICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkVm91Y2hlclN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyU3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXJGYWlsXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DbGVhckV4cGlyZWRDb3Vwb25zXG4gICAgICApID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBtYXAoXG4gICAgICBwYXlsb2FkID0+XG4gICAgICAgIHBheWxvYWQgJiZcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgIH0pXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldENhcnREZXRhaWxzT25TaXRlQ29udGV4dENoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuUmVzZXRDYXJ0RGV0YWlsc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFXG4gICAgKSxcbiAgICBtYXAoKCkgPT4gbmV3IENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHMoKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWRkRW1haWwkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5BRERfRU1BSUxfVE9fQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgIC5hZGRFbWFpbChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW1haWwpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZGVsZXRlQ2FydCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuREVMRVRFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZXhoYXVzdE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRDb25uZWN0b3IuZGVsZXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCkucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkNsZWFyQ2FydCgpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBwcml2YXRlIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgaXNNaXNzaW5nRGF0YShwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHBheWxvYWQudXNlcklkID09PSB1bmRlZmluZWQgfHwgcGF5bG9hZC5jYXJ0SWQgPT09IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19