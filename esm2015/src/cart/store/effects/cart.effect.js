/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { CartDataService } from '../../facade/cart-data.service';
import { CartActions } from '../actions/index';
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
                if (error && error.error && error.error.errors) {
                    /** @type {?} */
                    const cartNotFoundErrors = error.error.errors.filter((/**
                     * @param {?} err
                     * @return {?}
                     */
                    err => err.reason === 'notFound'));
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
        this.refresh$ = this.actions$.pipe(ofType(CartActions.MERGE_CART_SUCCESS, CartActions.CART_ADD_ENTRY_SUCCESS, CartActions.CART_UPDATE_ENTRY_SUCCESS, CartActions.CART_REMOVE_ENTRY_SUCCESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), map((/**
         * @param {?} payload
         * @return {?}
         */
        payload => new CartActions.LoadCart({
            userId: payload.userId,
            cartId: payload.cartId,
        }))));
        this.resetCartDetailsOnSiteContextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), map((/**
         * @return {?}
         */
        () => new CartActions.ResetCartDetails())));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFtSXRCLFlBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsUUFBeUI7UUFGekIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQXBJbkMsY0FBUyxHQUlMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUM3QixHQUFHOzs7O1FBQ0QsQ0FBQyxNQUdBLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQ3JCLEVBQ0QsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFOztrQkFDWCxjQUFjLEdBQUc7Z0JBQ3JCLE1BQU0sRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUMzRCxNQUFNLEVBQUUsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTthQUM1RDtZQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDdEMsT0FBTyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0M7WUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhO2lCQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDO2lCQUNsRCxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTs7MEJBQ3hDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7b0JBQ2xELEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQ2pDO29CQUNELElBQUksa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDakMsT0FBTyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztxQkFDeEM7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFLENBQ1AsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzNELENBQUM7WUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLGdCQUFXLEdBSVAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQy9CLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQThCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDdkQsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWE7aUJBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztpQkFDbEUsSUFBSSxDQUNILFNBQVM7Ozs7WUFBQyxDQUFDLElBQVUsRUFBRSxFQUFFO2dCQUN2QixJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7b0JBQ3JCLE9BQU87d0JBQ0wsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO3dCQUN2QyxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQzs0QkFDL0IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNOzRCQUN0QixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7eUJBQ2xCLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDtnQkFDRCxPQUFPLENBQUMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ2pFLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixlQUFVLEdBQXVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNqRSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUM5QixHQUFHOzs7O1FBQUMsQ0FBQyxNQUE2QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ3RELFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUM1RCxHQUFHOzs7O1lBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDO29CQUNoQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07b0JBQ3RCLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTTtvQkFDekIsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUztpQkFDNUQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixhQUFRLEdBQXFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3RCxNQUFNLENBQ0osV0FBVyxDQUFDLGtCQUFrQixFQUM5QixXQUFXLENBQUMsc0JBQXNCLEVBQ2xDLFdBQVcsQ0FBQyx5QkFBeUIsRUFDckMsV0FBVyxDQUFDLHlCQUF5QixDQUN0QyxFQUNELEdBQUc7Ozs7UUFDRCxDQUNFLE1BSXNDLEVBQ3RDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUNwQixFQUNELEdBQUc7Ozs7UUFDRCxPQUFPLENBQUMsRUFBRSxDQUNSLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUN2QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3ZCLENBQUMsRUFDTCxDQUNGLENBQUM7UUFHRix5Q0FBb0MsR0FFaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FDSixrQkFBa0IsQ0FBQyxlQUFlLEVBQ2xDLGtCQUFrQixDQUFDLGVBQWUsQ0FDbkMsRUFDRCxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLENBQzlDLENBQUM7SUFNQyxDQUFDOzs7Ozs7SUFFSSxhQUFhLENBQUMsT0FBMkM7UUFDL0QsT0FBTyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQztJQUN0RSxDQUFDOzs7WUE1SUYsVUFBVTs7OztZQVZGLE9BQU87WUFNUCxhQUFhO1lBQ2IsZUFBZTs7QUFNdEI7SUFEQyxNQUFNLEVBQUU7c0NBQ0UsVUFBVTs4Q0EwQ25CO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0ksVUFBVTtnREE0QnJCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0csVUFBVTsrQ0FjcEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDQyxVQUFVOzZDQXVCbEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDNkIsVUFBVTt5RUFROUM7OztJQWhJRixnQ0EyQ0U7O0lBRUYsa0NBNkJFOztJQUVGLGlDQWVFOztJQUVGLCtCQXdCRTs7SUFFRiwyREFTRTs7Ozs7SUFHQSwrQkFBeUI7Ozs7O0lBQ3pCLG9DQUFvQzs7Ozs7SUFDcEMsK0JBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DbGVhckNhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuTE9BRF9DQVJUKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgICAgcGF5bG9hZD86IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH07XG4gICAgICB9KSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICBjb25zdCBsb2FkQ2FydFBhcmFtcyA9IHtcbiAgICAgICAgdXNlcklkOiAocGF5bG9hZCAmJiBwYXlsb2FkLnVzZXJJZCkgfHwgdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgIGNhcnRJZDogKHBheWxvYWQgJiYgcGF5bG9hZC5jYXJ0SWQpIHx8IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuaXNNaXNzaW5nRGF0YShsb2FkQ2FydFBhcmFtcykpIHtcbiAgICAgICAgcmV0dXJuIG9mKG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoe30pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmxvYWQobG9hZENhcnRQYXJhbXMudXNlcklkLCBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3MoY2FydCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZXJyb3IgJiYgZXJyb3IuZXJyb3IuZXJyb3JzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhcnROb3RGb3VuZEVycm9ycyA9IGVycm9yLmVycm9yLmVycm9ycy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgZXJyID0+IGVyci5yZWFzb24gPT09ICdub3RGb3VuZCdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKGNhcnROb3RGb3VuZEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBDYXJ0QWN0aW9ucy5DbGVhckNhcnQoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvZihcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNSRUFURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAuY3JlYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLm9sZENhcnRJZCwgcGF5bG9hZC50b01lcmdlQ2FydEd1aWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBheWxvYWQub2xkQ2FydElkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzKGNhcnQpLFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzKGNhcnQpXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIG1lcmdlQ2FydCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQ3JlYXRlQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLk1FUkdFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZChwYXlsb2FkLnVzZXJJZCwgJ2N1cnJlbnQnKS5waXBlKFxuICAgICAgICBtYXAoY3VycmVudENhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCh7XG4gICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgb2xkQ2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgIHRvTWVyZ2VDYXJ0R3VpZDogY3VycmVudENhcnQgPyBjdXJyZW50Q2FydC5ndWlkIDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoJDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5Mb2FkQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfVVBEQVRFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTXG4gICAgKSxcbiAgICBtYXAoXG4gICAgICAoXG4gICAgICAgIGFjdGlvbjpcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVN1Y2Nlc3NcbiAgICAgICkgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1hcChcbiAgICAgIHBheWxvYWQgPT5cbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgIH0pXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldENhcnREZXRhaWxzT25TaXRlQ29udGV4dENoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuUmVzZXRDYXJ0RGV0YWlsc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFXG4gICAgKSxcbiAgICBtYXAoKCkgPT4gbmV3IENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHMoKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBwcml2YXRlIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgaXNNaXNzaW5nRGF0YShwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHBheWxvYWQudXNlcklkID09PSB1bmRlZmluZWQgfHwgcGF5bG9hZC5jYXJ0SWQgPT09IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19