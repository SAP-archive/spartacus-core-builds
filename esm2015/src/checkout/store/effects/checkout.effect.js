/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { CartActions } from '../../../cart/store/actions/index';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { UserActions } from '../../../user/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CheckoutConnector } from '../../connectors/checkout/checkout.connector';
import { CheckoutDeliveryConnector } from '../../connectors/delivery/checkout-delivery.connector';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
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
        this.addDeliveryAddress$ = this.actions$.pipe(ofType(CheckoutActions.ADD_DELIVERY_ADDRESS), map((/**
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
                new UserActions.LoadUserAddresses(payload.userId),
                new CheckoutActions.SetDeliveryAddress({
                    userId: payload.userId,
                    cartId: payload.cartId,
                    address: address,
                }),
            ];
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new CheckoutActions.AddDeliveryAddressFail(makeErrorSerializable(error)))))))));
        this.setDeliveryAddress$ = this.actions$.pipe(ofType(CheckoutActions.SET_DELIVERY_ADDRESS), map((/**
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
                new CheckoutActions.SetDeliveryAddressSuccess(payload.address),
                new CheckoutActions.ResetLoadSupportedDeliveryModesProcess(),
                new CheckoutActions.LoadSupportedDeliveryModes({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CheckoutActions.SetDeliveryAddressFail(makeErrorSerializable(error))))));
        })));
        this.loadSupportedDeliveryModes$ = this.actions$.pipe(ofType(CheckoutActions.LOAD_SUPPORTED_DELIVERY_MODES), map((/**
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
                return new CheckoutActions.LoadSupportedDeliveryModesSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CheckoutActions.LoadSupportedDeliveryModesFail(makeErrorSerializable(error))))));
        })));
        this.clearCheckoutMiscsDataOnLanguageChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE), map((/**
         * @return {?}
         */
        () => new CheckoutActions.CheckoutClearMiscsData())));
        this.clearDeliveryModesOnCurrencyChange$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE), map((/**
         * @return {?}
         */
        () => new CheckoutActions.ClearSupportedDeliveryModes())));
        this.clearCheckoutDataOnLogout$ = this.actions$.pipe(ofType(AuthActions.LOGOUT), map((/**
         * @return {?}
         */
        () => new CheckoutActions.ClearCheckoutData())));
        this.setDeliveryMode$ = this.actions$.pipe(ofType(CheckoutActions.SET_DELIVERY_MODE), map((/**
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
                    new CheckoutActions.SetDeliveryModeSuccess(payload.selectedModeId),
                    new CartActions.LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                ];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CheckoutActions.SetDeliveryModeFail(makeErrorSerializable(error))))));
        })));
        this.createPaymentDetails$ = this.actions$.pipe(ofType(CheckoutActions.CREATE_PAYMENT_DETAILS), map((/**
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
                new UserActions.LoadUserPaymentMethods(payload.userId),
                new CheckoutActions.CreatePaymentDetailsSuccess(details),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CheckoutActions.CreatePaymentDetailsFail(makeErrorSerializable(error))))));
        })));
        this.setPaymentDetails$ = this.actions$.pipe(ofType(CheckoutActions.SET_PAYMENT_DETAILS), map((/**
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
            () => new CheckoutActions.SetPaymentDetailsSuccess(payload.paymentDetails))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CheckoutActions.SetPaymentDetailsFail(makeErrorSerializable(error))))));
        })));
        this.placeOrder$ = this.actions$.pipe(ofType(CheckoutActions.PLACE_ORDER), map((/**
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
            data => [new CheckoutActions.PlaceOrderSuccess(data)])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CheckoutActions.PlaceOrderFail(makeErrorSerializable(error))))));
        })));
        this.loadCheckoutDetails$ = this.actions$.pipe(ofType(CheckoutActions.LOAD_CHECKOUT_DETAILS), map((/**
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
            (data) => new CheckoutActions.LoadCheckoutDetailsSuccess(data))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CheckoutActions.LoadCheckoutDetailsFail(makeErrorSerializable(error))))));
        })));
        this.reloadDetailsOnMergeCart$ = this.actions$.pipe(ofType(CartActions.MERGE_CART_SUCCESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), map((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return new CheckoutActions.LoadCheckoutDetails({
                userId: payload.userId,
                cartId: payload.cartId ? payload.cartId : 'current',
            });
        })));
        this.clearCheckoutDeliveryAddress$ = this.actions$.pipe(ofType(CheckoutActions.CLEAR_CHECKOUT_DELIVERY_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutConnector
                .clearCheckoutDeliveryAddress(payload.userId, payload.cartId)
                .pipe(map((/**
             * @return {?}
             */
            () => new CheckoutActions.ClearCheckoutDeliveryAddressSuccess())), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CheckoutActions.ClearCheckoutDeliveryAddressFail(makeErrorSerializable(error))))));
        })));
        this.clearCheckoutDeliveryMode$ = this.actions$.pipe(ofType(CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutConnector
                .clearCheckoutDeliveryMode(payload.userId, payload.cartId)
                .pipe(map((/**
             * @return {?}
             */
            () => new CheckoutActions.ClearCheckoutDeliveryModeSuccess())), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new CheckoutActions.ClearCheckoutDeliveryModeFail(makeErrorSerializable(error))))));
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
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "clearCheckoutDeliveryAddress$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "clearCheckoutDeliveryMode$", void 0);
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
    /** @type {?} */
    CheckoutEffects.prototype.clearCheckoutDeliveryAddress$;
    /** @type {?} */
    CheckoutEffects.prototype.clearCheckoutDeliveryMode$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvY2hlY2tvdXQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUduRCxNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQTBUMUIsWUFDVSxRQUFpQixFQUNqQix5QkFBb0QsRUFDcEQsd0JBQWtELEVBQ2xELGlCQUFvQztRQUhwQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FB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QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDYSxVQUFVOzZEQXVCOUI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDa0IsVUFBVTtrRUFXbkM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDc0IsVUFBVTtzRUFzQnZDO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ21CLFVBQVU7bUVBb0JwQzs7O0lBdlRGLDhDQWdDRTs7SUFFRiw4Q0E4QkU7O0lBRUYsc0RBdUJFOztJQUVGLGtFQU1FOztJQUVGLDhEQU1FOztJQUVGLHFEQU1FOztJQUVGLDJDQWdDRTs7SUFFRixnREEwQkU7O0lBRUYsNkNBMEJFOztJQUVGLHNDQWtCRTs7SUFFRiwrQ0F3QkU7O0lBRUYsb0RBWUU7O0lBRUYsd0RBdUJFOztJQUVGLHFEQXFCRTs7Ozs7SUFHQSxtQ0FBeUI7Ozs7O0lBQ3pCLG9EQUE0RDs7Ozs7SUFDNUQsbURBQTBEOzs7OztJQUMxRCw0Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L21vZGVscy9jaGVja291dC5tb2RlbCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi91c2VyL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENoZWNrb3V0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jaGVja291dC9jaGVja291dC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvZGVsaXZlcnkvY2hlY2tvdXQtZGVsaXZlcnkuY29ubmVjdG9yJztcbmltcG9ydCB7IENoZWNrb3V0UGF5bWVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcGF5bWVudC9jaGVja291dC1wYXltZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBhZGREZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIHwgVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXNcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5BRERfREVMSVZFUllfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IENoZWNrb3V0QWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3JcbiAgICAgICAgLmNyZWF0ZUFkZHJlc3MocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKGFkZHJlc3MgPT4ge1xuICAgICAgICAgICAgYWRkcmVzc1sndGl0bGVDb2RlJ10gPSBwYXlsb2FkLmFkZHJlc3MudGl0bGVDb2RlO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzKHBheWxvYWQudXNlcklkKSxcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldERlbGl2ZXJ5QWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5TRVRfREVMSVZFUllfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvclxuICAgICAgICAuc2V0QWRkcmVzcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuYWRkcmVzcy5pZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4gW1xuICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzKHBheWxvYWQuYWRkcmVzcyksXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzKCksXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKHtcbiAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLkxPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yXG4gICAgICAgIC5nZXRTdXBwb3J0ZWRNb2RlcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyQ2hlY2tvdXRNaXNjc0RhdGFPbkxhbmd1YWdlQ2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBDaGVja291dEFjdGlvbnMuQ2hlY2tvdXRDbGVhck1pc2NzRGF0YVxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFKSxcbiAgICBtYXAoKCkgPT4gbmV3IENoZWNrb3V0QWN0aW9ucy5DaGVja291dENsZWFyTWlzY3NEYXRhKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyRGVsaXZlcnlNb2Rlc09uQ3VycmVuY3lDaGFuZ2UkOiBPYnNlcnZhYmxlPFxuICAgIENoZWNrb3V0QWN0aW9ucy5DbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRSksXG4gICAgbWFwKCgpID0+IG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyQ2hlY2tvdXREYXRhT25Mb2dvdXQkOiBPYnNlcnZhYmxlPFxuICAgIENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGF0YVxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBdXRoQWN0aW9ucy5MT0dPVVQpLFxuICAgIG1hcCgoKSA9PiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREYXRhKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldERlbGl2ZXJ5TW9kZSQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5TW9kZUZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5TRVRfREVMSVZFUllfTU9ERSksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvclxuICAgICAgICAuc2V0TW9kZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuc2VsZWN0ZWRNb2RlSWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlU3VjY2VzcyhcbiAgICAgICAgICAgICAgICBwYXlsb2FkLnNlbGVjdGVkTW9kZUlkXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY3JlYXRlUGF5bWVudERldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIHwgVXNlckFjdGlvbnMuTG9hZFVzZXJQYXltZW50TWV0aG9kc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2Vzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuQ1JFQVRFX1BBWU1FTlRfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgLy8gZ2V0IGluZm9ybWF0aW9uIGZvciBjcmVhdGluZyBhIHN1YnNjcmlwdGlvbiBkaXJlY3RseSB3aXRoIHBheW1lbnQgcHJvdmlkZXJcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0UGF5bWVudENvbm5lY3RvclxuICAgICAgICAuY3JlYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5wYXltZW50RGV0YWlscylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoZGV0YWlscyA9PiBbXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJQYXltZW50TWV0aG9kcyhwYXlsb2FkLnVzZXJJZCksXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2VzcyhkZXRhaWxzKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlsc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldFBheW1lbnREZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLlNFVF9QQVlNRU5UX0RFVEFJTFMpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0UGF5bWVudENvbm5lY3RvclxuICAgICAgICAuc2V0KHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5wYXltZW50RGV0YWlscy5pZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5wYXltZW50RGV0YWlsc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHBsYWNlT3JkZXIkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXJTdWNjZXNzXG4gICAgfCBHbG9iYWxNZXNzYWdlQWN0aW9ucy5BZGRNZXNzYWdlXG4gICAgfCBDaGVja291dEFjdGlvbnMuUGxhY2VPcmRlckZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLlBMQUNFX09SREVSKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvbm5lY3RvclxuICAgICAgICAucGxhY2VPcmRlcihwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChkYXRhID0+IFtuZXcgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXJTdWNjZXNzKGRhdGEpXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IENoZWNrb3V0QWN0aW9ucy5QbGFjZU9yZGVyRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZENoZWNrb3V0RGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuTE9BRF9DSEVDS09VVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Q29ubmVjdG9yXG4gICAgICAgIC5sb2FkQ2hlY2tvdXREZXRhaWxzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKGRhdGE6IENoZWNrb3V0RGV0YWlscykgPT5cbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzU3VjY2VzcyhkYXRhKVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlsc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbG9hZERldGFpbHNPbk1lcmdlQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2VzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHMoe1xuICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkID8gcGF5bG9hZC5jYXJ0SWQgOiAnY3VycmVudCcsXG4gICAgICB9KTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzRmFpbFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Q29ubmVjdG9yXG4gICAgICAgIC5jbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MoKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVGYWlsXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLkNMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREUpLFxuICAgIG1hcCgoYWN0aW9uOiBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Q29ubmVjdG9yXG4gICAgICAgIC5jbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVN1Y2Nlc3MoKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZUZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3I6IENoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBjaGVja291dFBheW1lbnRDb25uZWN0b3I6IENoZWNrb3V0UGF5bWVudENvbm5lY3RvcixcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29ubmVjdG9yOiBDaGVja291dENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=