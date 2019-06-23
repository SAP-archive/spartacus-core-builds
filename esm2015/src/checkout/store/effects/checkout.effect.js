/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as fromAuthActions from '../../../auth/store/actions/index';
import * as fromSiteContextActions from '../../../site-context/store/actions/index';
import * as fromUserActions from '../../../user/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CheckoutConnector } from '../../connectors/checkout/checkout.connector';
import { CheckoutDeliveryConnector } from '../../connectors/delivery/checkout-delivery.connector';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import * as fromActions from '../actions/index';
import * as fromCartActions from './../../../cart/store/actions/index';
export class CheckoutEffects {
    /**
     * @param {?} actions$
     * @param {?} checkoutDeliveryConnector
     * @param {?} checkoutPaymentConnector
     * @param {?} checkoutConnector
     */
    constructor(actions$, checkoutDeliveryConnector, checkoutPaymentConnector, checkoutConnector) {
        this.actions$ = actions$;
        this.checkoutDeliveryConnector = checkoutDeliveryConnector;
        this.checkoutPaymentConnector = checkoutPaymentConnector;
        this.checkoutConnector = checkoutConnector;
        this.addDeliveryAddress$ = this.actions$.pipe(ofType(fromActions.ADD_DELIVERY_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.checkoutDeliveryConnector
            .createAddress(payload.userId, payload.cartId, payload.address)
            .pipe(mergeMap((/**
         * @param {?} address
         * @return {?}
         */
        address => {
            address['titleCode'] = payload.address.titleCode;
            return [
                new fromUserActions.LoadUserAddresses(payload.userId),
                new fromActions.SetDeliveryAddress({
                    userId: payload.userId,
                    cartId: payload.cartId,
                    address: address,
                }),
            ];
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new fromActions.AddDeliveryAddressFail(makeErrorSerializable(error)))))))));
        this.setDeliveryAddress$ = this.actions$.pipe(ofType(fromActions.SET_DELIVERY_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutDeliveryConnector
                .setAddress(payload.userId, payload.cartId, payload.address.id)
                .pipe(mergeMap((/**
             * @return {?}
             */
            () => [
                new fromActions.SetDeliveryAddressSuccess(payload.address),
                new fromActions.LoadSupportedDeliveryModes({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.SetDeliveryAddressFail(makeErrorSerializable(error))))));
        })));
        this.loadSupportedDeliveryModes$ = this.actions$.pipe(ofType(fromActions.LOAD_SUPPORTED_DELIVERY_MODES), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutDeliveryConnector
                .getSupportedModes(payload.userId, payload.cartId)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                return new fromActions.LoadSupportedDeliveryModesSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.LoadSupportedDeliveryModesFail(makeErrorSerializable(error))))));
        })));
        this.clearCheckoutMiscsDataOnLanguageChange$ = this.actions$.pipe(ofType(fromSiteContextActions.LANGUAGE_CHANGE), map((/**
         * @return {?}
         */
        () => new fromActions.CheckoutClearMiscsData())));
        this.clearDeliveryModesOnCurrencyChange$ = this.actions$.pipe(ofType(fromSiteContextActions.CURRENCY_CHANGE), map((/**
         * @return {?}
         */
        () => new fromActions.ClearSupportedDeliveryModes())));
        this.clearCheckoutDataOnLogout$ = this.actions$.pipe(ofType(fromAuthActions.LOGOUT), map((/**
         * @return {?}
         */
        () => new fromActions.ClearCheckoutData())));
        this.setDeliveryMode$ = this.actions$.pipe(ofType(fromActions.SET_DELIVERY_MODE), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutDeliveryConnector
                .setMode(payload.userId, payload.cartId, payload.selectedModeId)
                .pipe(mergeMap((/**
             * @return {?}
             */
            () => {
                return [
                    new fromActions.SetDeliveryModeSuccess(payload.selectedModeId),
                    new fromCartActions.LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                        details: true,
                    }),
                ];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.SetDeliveryModeFail(makeErrorSerializable(error))))));
        })));
        this.createPaymentDetails$ = this.actions$.pipe(ofType(fromActions.CREATE_PAYMENT_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            // get information for creating a subscription directly with payment provider
            return this.checkoutPaymentConnector
                .create(payload.userId, payload.cartId, payload.paymentDetails)
                .pipe(mergeMap((/**
             * @param {?} details
             * @return {?}
             */
            details => [
                new fromUserActions.LoadUserPaymentMethods(payload.userId),
                new fromActions.CreatePaymentDetailsSuccess(details),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.CreatePaymentDetailsFail(makeErrorSerializable(error))))));
        })));
        this.setPaymentDetails$ = this.actions$.pipe(ofType(fromActions.SET_PAYMENT_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutPaymentConnector
                .set(payload.userId, payload.cartId, payload.paymentDetails.id)
                .pipe(map((/**
             * @return {?}
             */
            () => new fromActions.SetPaymentDetailsSuccess(payload.paymentDetails))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.SetPaymentDetailsFail(makeErrorSerializable(error))))));
        })));
        this.placeOrder$ = this.actions$.pipe(ofType(fromActions.PLACE_ORDER), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutConnector
                .placeOrder(payload.userId, payload.cartId)
                .pipe(switchMap((/**
             * @param {?} data
             * @return {?}
             */
            data => [new fromActions.PlaceOrderSuccess(data)])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.PlaceOrderFail(makeErrorSerializable(error))))));
        })));
        this.loadCheckoutDetails$ = this.actions$.pipe(ofType(fromActions.LOAD_CHECKOUT_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutConnector
                .loadCheckoutDetails(payload.userId, payload.cartId)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            (data) => new fromActions.LoadCheckoutDetailsSuccess(data))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.LoadCheckoutDetailsFail(makeErrorSerializable(error))))));
        })));
        this.reloadDetailsOnMergeCart$ = this.actions$.pipe(ofType(fromCartActions.MERGE_CART_SUCCESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), map((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return new fromActions.LoadCheckoutDetails({
                userId: payload.userId,
                cartId: payload.cartId ? payload.cartId : 'current',
            });
        })));
    }
}
CheckoutEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CheckoutEffects.ctorParameters = () => [
    { type: Actions },
    { type: CheckoutDeliveryConnector },
    { type: CheckoutPaymentConnector },
    { type: CheckoutConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "addDeliveryAddress$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "setDeliveryAddress$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "loadSupportedDeliveryModes$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "clearCheckoutMiscsDataOnLanguageChange$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "clearDeliveryModesOnCurrencyChange$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "clearCheckoutDataOnLogout$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "setDeliveryMode$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "createPaymentDetails$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "setPaymentDetails$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "placeOrder$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "loadCheckoutDetails$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "reloadDetailsOnMergeCart$", void 0);
if (false) {
    /** @type {?} */
    CheckoutEffects.prototype.addDeliveryAddress$;
    /** @type {?} */
    CheckoutEffects.prototype.setDeliveryAddress$;
    /** @type {?} */
    CheckoutEffects.prototype.loadSupportedDeliveryModes$;
    /** @type {?} */
    CheckoutEffects.prototype.clearCheckoutMiscsDataOnLanguageChange$;
    /** @type {?} */
    CheckoutEffects.prototype.clearDeliveryModesOnCurrencyChange$;
    /** @type {?} */
    CheckoutEffects.prototype.clearCheckoutDataOnLogout$;
    /** @type {?} */
    CheckoutEffects.prototype.setDeliveryMode$;
    /** @type {?} */
    CheckoutEffects.prototype.createPaymentDetails$;
    /** @type {?} */
    CheckoutEffects.prototype.setPaymentDetails$;
    /** @type {?} */
    CheckoutEffects.prototype.placeOrder$;
    /** @type {?} */
    CheckoutEffects.prototype.loadCheckoutDetails$;
    /** @type {?} */
    CheckoutEffects.prototype.reloadDetailsOnMergeCart$;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.checkoutDeliveryConnector;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.checkoutPaymentConnector;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.checkoutConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvY2hlY2tvdXQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sS0FBSyxlQUFlLE1BQU0sbUNBQW1DLENBQUM7QUFHckUsT0FBTyxLQUFLLHNCQUFzQixNQUFNLDJDQUEyQyxDQUFDO0FBQ3BGLE9BQU8sS0FBSyxlQUFlLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDakYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxLQUFLLFdBQVcsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEtBQUssZUFBZSxNQUFNLHFDQUFxQyxDQUFDO0FBR3ZFLE1BQU0sT0FBTyxlQUFlOzs7Ozs7O0lBK1AxQixZQUNVLFFBQWlCLEVBQ2pCLHlCQUFvRCxFQUNwRCx3QkFBa0QsRUFDbEQsaUJBQW9DO1FBSHBDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsOEJBQXlCLEdBQXpCLHlCQUF5QixD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OztJQUVGLDhEQU1FOztJQUVGLHFEQU1FOztJQUVGLDJDQTZCRTs7SUFFRixnREEwQkU7O0lBRUYsNkNBdUJFOztJQUVGLHNDQWdCRTs7SUFFRiwrQ0F1QkU7O0lBRUYsb0RBWUU7Ozs7O0lBR0EsbUNBQXlCOzs7OztJQUN6QixvREFBNEQ7Ozs7O0lBQzVELG1EQUEwRDs7Ozs7SUFDMUQsNENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBmcm9tQXV0aEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L21vZGVscy9jaGVja291dC5tb2RlbCc7XG5pbXBvcnQgeyBBZGRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbVNpdGVDb250ZXh0QWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vdXNlci9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDaGVja291dENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuY29ubmVjdG9yJztcbmltcG9ydCB7IENoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NoZWNrb3V0LWRlbGl2ZXJ5LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDaGVja291dFBheW1lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BheW1lbnQvY2hlY2tvdXQtcGF5bWVudC5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgKiBhcyBmcm9tQ2FydEFjdGlvbnMgZnJvbSAnLi8uLi8uLi8uLi9jYXJ0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGFkZERlbGl2ZXJ5QWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXNcbiAgICB8IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc1xuICAgIHwgZnJvbUFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5BRERfREVMSVZFUllfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkFkZERlbGl2ZXJ5QWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvclxuICAgICAgICAuY3JlYXRlQWRkcmVzcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuYWRkcmVzcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICBhZGRyZXNzWyd0aXRsZUNvZGUnXSA9IHBheWxvYWQuYWRkcmVzcy50aXRsZUNvZGU7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgZnJvbVVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzKHBheWxvYWQudXNlcklkKSxcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXREZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbUFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICAgIHwgZnJvbUFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgICB8IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuU0VUX0RFTElWRVJZX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3JcbiAgICAgICAgLnNldEFkZHJlc3MocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmFkZHJlc3MuaWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKCgpID0+IFtcbiAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzKHBheWxvYWQuYWRkcmVzcyksXG4gICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tQWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3NcbiAgICB8IGZyb21BY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvclxuICAgICAgICAuZ2V0U3VwcG9ydGVkTW9kZXMocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY2xlYXJDaGVja291dE1pc2NzRGF0YU9uTGFuZ3VhZ2VDaGFuZ2UkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLkNoZWNrb3V0Q2xlYXJNaXNjc0RhdGFcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UpLFxuICAgIG1hcCgoKSA9PiBuZXcgZnJvbUFjdGlvbnMuQ2hlY2tvdXRDbGVhck1pc2NzRGF0YSgpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckRlbGl2ZXJ5TW9kZXNPbkN1cnJlbmN5Q2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5DbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0UpLFxuICAgIG1hcCgoKSA9PiBuZXcgZnJvbUFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyQ2hlY2tvdXREYXRhT25Mb2dvdXQkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLkNsZWFyQ2hlY2tvdXREYXRhXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BdXRoQWN0aW9ucy5MT0dPVVQpLFxuICAgIG1hcCgoKSA9PiBuZXcgZnJvbUFjdGlvbnMuQ2xlYXJDaGVja291dERhdGEoKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0RGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxcbiAgICB8IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgICB8IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5TW9kZUZhaWxcbiAgICB8IGZyb21DYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5TRVRfREVMSVZFUllfTU9ERSksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvclxuICAgICAgICAuc2V0TW9kZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuc2VsZWN0ZWRNb2RlSWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeU1vZGVTdWNjZXNzKHBheWxvYWQuc2VsZWN0ZWRNb2RlSWQpLFxuICAgICAgICAgICAgICBuZXcgZnJvbUNhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgZGV0YWlsczogdHJ1ZSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjcmVhdGVQYXltZW50RGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tVXNlckFjdGlvbnMuTG9hZFVzZXJQYXltZW50TWV0aG9kc1xuICAgIHwgZnJvbUFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzXG4gICAgfCBmcm9tQWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlsc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuQ1JFQVRFX1BBWU1FTlRfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgLy8gZ2V0IGluZm9ybWF0aW9uIGZvciBjcmVhdGluZyBhIHN1YnNjcmlwdGlvbiBkaXJlY3RseSB3aXRoIHBheW1lbnQgcHJvdmlkZXJcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0UGF5bWVudENvbm5lY3RvclxuICAgICAgICAuY3JlYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5wYXltZW50RGV0YWlscylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoZGV0YWlscyA9PiBbXG4gICAgICAgICAgICBuZXcgZnJvbVVzZXJBY3Rpb25zLkxvYWRVc2VyUGF5bWVudE1ldGhvZHMocGF5bG9hZC51c2VySWQpLFxuICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2VzcyhkZXRhaWxzKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0UGF5bWVudERldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlNldFBheW1lbnREZXRhaWxzU3VjY2VzcyB8IGZyb21BY3Rpb25zLlNldFBheW1lbnREZXRhaWxzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5TRVRfUEFZTUVOVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dFBheW1lbnRDb25uZWN0b3JcbiAgICAgICAgLnNldChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQucGF5bWVudERldGFpbHMuaWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MocGF5bG9hZC5wYXltZW50RGV0YWlscylcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBwbGFjZU9yZGVyJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5QbGFjZU9yZGVyU3VjY2VzcyB8IEFkZE1lc3NhZ2UgfCBmcm9tQWN0aW9ucy5QbGFjZU9yZGVyRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5QTEFDRV9PUkRFUiksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRDb25uZWN0b3JcbiAgICAgICAgLnBsYWNlT3JkZXIocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PiBbbmV3IGZyb21BY3Rpb25zLlBsYWNlT3JkZXJTdWNjZXNzKGRhdGEpXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21BY3Rpb25zLlBsYWNlT3JkZXJGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkQ2hlY2tvdXREZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzU3VjY2VzcyB8IGZyb21BY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkxPQURfQ0hFQ0tPVVRfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkxvYWRDaGVja291dERldGFpbHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Q29ubmVjdG9yXG4gICAgICAgIC5sb2FkQ2hlY2tvdXREZXRhaWxzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKGRhdGE6IENoZWNrb3V0RGV0YWlscykgPT5cbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNTdWNjZXNzKGRhdGEpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWxvYWREZXRhaWxzT25NZXJnZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUNhcnRBY3Rpb25zLk1FUkdFX0NBUlRfU1VDQ0VTUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21DYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzKHtcbiAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCA/IHBheWxvYWQuY2FydElkIDogJ2N1cnJlbnQnLFxuICAgICAgfSk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvcjogQ2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvcixcbiAgICBwcml2YXRlIGNoZWNrb3V0UGF5bWVudENvbm5lY3RvcjogQ2hlY2tvdXRQYXltZW50Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb25uZWN0b3I6IENoZWNrb3V0Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==