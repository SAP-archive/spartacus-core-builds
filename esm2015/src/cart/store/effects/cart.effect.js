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
        this.refresh$ = this.actions$.pipe(ofType(CartActions.MERGE_CART_SUCCESS, CartActions.CART_ADD_ENTRY_SUCCESS, CartActions.CART_UPDATE_ENTRY_SUCCESS, CartActions.CART_REMOVE_ENTRY_SUCCESS, CartActions.ADD_EMAIL_TO_CART_SUCCESS), map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBNEt0QixZQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLFFBQXlCO1FBRnpCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUE3S25DLGNBQVMsR0FJTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFDN0IsR0FBRzs7OztRQUNELENBQUMsTUFHQSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUNyQixF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b0M7Ozs7O0lBQ3BDLCtCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgZXhoYXVzdE1hcCxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DbGVhckNhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuTE9BRF9DQVJUKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgICAgcGF5bG9hZD86IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH07XG4gICAgICB9KSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICBjb25zdCBsb2FkQ2FydFBhcmFtcyA9IHtcbiAgICAgICAgdXNlcklkOiAocGF5bG9hZCAmJiBwYXlsb2FkLnVzZXJJZCkgfHwgdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgIGNhcnRJZDogKHBheWxvYWQgJiYgcGF5bG9hZC5jYXJ0SWQpIHx8IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuaXNNaXNzaW5nRGF0YShsb2FkQ2FydFBhcmFtcykpIHtcbiAgICAgICAgcmV0dXJuIG9mKG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoe30pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmxvYWQobG9hZENhcnRQYXJhbXMudXNlcklkLCBsb2FkQ2FydFBhcmFtcy5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3MoY2FydCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZXJyb3IgJiYgZXJyb3IuZXJyb3IuZXJyb3JzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhcnROb3RGb3VuZEVycm9ycyA9IGVycm9yLmVycm9yLmVycm9ycy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgZXJyID0+IGVyci5yZWFzb24gPT09ICdub3RGb3VuZCcgfHwgJ1Vua25vd25SZXNvdXJjZUVycm9yJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoY2FydE5vdEZvdW5kRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YobmV3IENhcnRBY3Rpb25zLkNsZWFyQ2FydCgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY3JlYXRlQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgfCBDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ1JFQVRFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQub2xkQ2FydElkLCBwYXlsb2FkLnRvTWVyZ2VDYXJ0R3VpZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKChjYXJ0OiBDYXJ0KSA9PiB7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5vbGRDYXJ0SWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3MoY2FydCksXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3MoY2FydCldO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbWVyZ2VDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLk1lcmdlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkKHBheWxvYWQudXNlcklkLCAnY3VycmVudCcpLnBpcGUoXG4gICAgICAgIG1hcChjdXJyZW50Q2FydCA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KHtcbiAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICBvbGRDYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgdG9NZXJnZUNhcnRHdWlkOiBjdXJyZW50Q2FydCA/IGN1cnJlbnRDYXJ0Lmd1aWQgOiB1bmRlZmluZWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2gkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkxvYWRDYXJ0PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBDYXJ0QWN0aW9ucy5NRVJHRV9DQVJUX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5BRERfRU1BSUxfVE9fQ0FSVF9TVUNDRVNTXG4gICAgKSxcbiAgICBtYXAoXG4gICAgICAoXG4gICAgICAgIGFjdGlvbjpcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0U3VjY2Vzc1xuICAgICAgKSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWFwKFxuICAgICAgcGF5bG9hZCA9PlxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlc2V0Q2FydERldGFpbHNPblNpdGVDb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5SZXNldENhcnREZXRhaWxzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0VcbiAgICApLFxuICAgIG1hcCgoKSA9PiBuZXcgQ2FydEFjdGlvbnMuUmVzZXRDYXJ0RGV0YWlscygpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzIHwgQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmFkZEVtYWlsKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lbWFpbClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBkZWxldGVDYXJ0JDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5ERUxFVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkRlbGV0ZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBleGhhdXN0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2FydENvbm5lY3Rvci5kZWxldGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKS5waXBlKFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0KCk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IENhcnRBY3Rpb25zLkRlbGV0ZUNhcnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgY2FydERhdGE6IENhcnREYXRhU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBpc01pc3NpbmdEYXRhKHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gcGF5bG9hZC51c2VySWQgPT09IHVuZGVmaW5lZCB8fCBwYXlsb2FkLmNhcnRJZCA9PT0gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=