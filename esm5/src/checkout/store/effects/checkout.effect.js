/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { CartActions } from '../../../cart/store/actions/index';
import { OCC_USER_ID_ANONYMOUS } from '../../../occ/utils/occ-constants';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { UserActions } from '../../../user/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CheckoutConnector } from '../../connectors/checkout/checkout.connector';
import { CheckoutDeliveryConnector } from '../../connectors/delivery/checkout-delivery.connector';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
var CheckoutEffects = /** @class */ (function () {
    function CheckoutEffects(actions$, checkoutDeliveryConnector, checkoutPaymentConnector, checkoutConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.checkoutDeliveryConnector = checkoutDeliveryConnector;
        this.checkoutPaymentConnector = checkoutPaymentConnector;
        this.checkoutConnector = checkoutConnector;
        this.addDeliveryAddress$ = this.actions$.pipe(ofType(CheckoutActions.ADD_DELIVERY_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.checkoutDeliveryConnector
                .createAddress(payload.userId, payload.cartId, payload.address)
                .pipe(mergeMap((/**
             * @param {?} address
             * @return {?}
             */
            function (address) {
                address['titleCode'] = payload.address.titleCode;
                if (payload.address.region && payload.address.region.isocodeShort) {
                    Object.assign(address.region, {
                        isocodeShort: payload.address.region.isocodeShort,
                    });
                }
                if (payload.userId === OCC_USER_ID_ANONYMOUS) {
                    return [
                        new CheckoutActions.SetDeliveryAddress({
                            userId: payload.userId,
                            cartId: payload.cartId,
                            address: address,
                        }),
                    ];
                }
                else {
                    return [
                        new UserActions.LoadUserAddresses(payload.userId),
                        new CheckoutActions.SetDeliveryAddress({
                            userId: payload.userId,
                            cartId: payload.cartId,
                            address: address,
                        }),
                    ];
                }
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CheckoutActions.AddDeliveryAddressFail(makeErrorSerializable(error)));
            })));
        })));
        this.setDeliveryAddress$ = this.actions$.pipe(ofType(CheckoutActions.SET_DELIVERY_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.checkoutDeliveryConnector
                .setAddress(payload.userId, payload.cartId, payload.address.id)
                .pipe(mergeMap((/**
             * @return {?}
             */
            function () { return [
                new CheckoutActions.SetDeliveryAddressSuccess(payload.address),
                new CheckoutActions.ResetLoadSupportedDeliveryModesProcess(),
                new CheckoutActions.LoadSupportedDeliveryModes({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CheckoutActions.SetDeliveryAddressFail(makeErrorSerializable(error)));
            })));
        })));
        this.loadSupportedDeliveryModes$ = this.actions$.pipe(ofType(CheckoutActions.LOAD_SUPPORTED_DELIVERY_MODES), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.checkoutDeliveryConnector
                .getSupportedModes(payload.userId, payload.cartId)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return new CheckoutActions.LoadSupportedDeliveryModesSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CheckoutActions.LoadSupportedDeliveryModesFail(makeErrorSerializable(error)));
            })));
        })));
        this.clearCheckoutMiscsDataOnLanguageChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE), map((/**
         * @return {?}
         */
        function () { return new CheckoutActions.CheckoutClearMiscsData(); })));
        this.clearDeliveryModesOnCurrencyChange$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE), map((/**
         * @return {?}
         */
        function () { return new CheckoutActions.ClearSupportedDeliveryModes(); })));
        this.clearCheckoutDataOnLogout$ = this.actions$.pipe(ofType(AuthActions.LOGOUT), map((/**
         * @return {?}
         */
        function () { return new CheckoutActions.ClearCheckoutData(); })));
        this.clearCheckoutDataOnLogin$ = this.actions$.pipe(ofType(AuthActions.LOGIN), map((/**
         * @return {?}
         */
        function () { return new CheckoutActions.ClearCheckoutData(); })));
        this.setDeliveryMode$ = this.actions$.pipe(ofType(CheckoutActions.SET_DELIVERY_MODE), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.checkoutDeliveryConnector
                .setMode(payload.userId, payload.cartId, payload.selectedModeId)
                .pipe(mergeMap((/**
             * @return {?}
             */
            function () {
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
            function (error) {
                return of(new CheckoutActions.SetDeliveryModeFail(makeErrorSerializable(error)));
            })));
        })));
        this.createPaymentDetails$ = this.actions$.pipe(ofType(CheckoutActions.CREATE_PAYMENT_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            // get information for creating a subscription directly with payment provider
            return _this.checkoutPaymentConnector
                .create(payload.userId, payload.cartId, payload.paymentDetails)
                .pipe(mergeMap((/**
             * @param {?} details
             * @return {?}
             */
            function (details) {
                if (payload.userId === OCC_USER_ID_ANONYMOUS) {
                    return [new CheckoutActions.CreatePaymentDetailsSuccess(details)];
                }
                else {
                    return [
                        new UserActions.LoadUserPaymentMethods(payload.userId),
                        new CheckoutActions.CreatePaymentDetailsSuccess(details),
                    ];
                }
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CheckoutActions.CreatePaymentDetailsFail(makeErrorSerializable(error)));
            })));
        })));
        this.setPaymentDetails$ = this.actions$.pipe(ofType(CheckoutActions.SET_PAYMENT_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.checkoutPaymentConnector
                .set(payload.userId, payload.cartId, payload.paymentDetails.id)
                .pipe(map((/**
             * @return {?}
             */
            function () {
                return new CheckoutActions.SetPaymentDetailsSuccess(payload.paymentDetails);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CheckoutActions.SetPaymentDetailsFail(makeErrorSerializable(error)));
            })));
        })));
        this.placeOrder$ = this.actions$.pipe(ofType(CheckoutActions.PLACE_ORDER), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.checkoutConnector
                .placeOrder(payload.userId, payload.cartId)
                .pipe(switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return [new CheckoutActions.PlaceOrderSuccess(data)]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CheckoutActions.PlaceOrderFail(makeErrorSerializable(error)));
            })));
        })));
        this.loadCheckoutDetails$ = this.actions$.pipe(ofType(CheckoutActions.LOAD_CHECKOUT_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.checkoutConnector
                .loadCheckoutDetails(payload.userId, payload.cartId)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return new CheckoutActions.LoadCheckoutDetailsSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CheckoutActions.LoadCheckoutDetailsFail(makeErrorSerializable(error)));
            })));
        })));
        this.reloadDetailsOnMergeCart$ = this.actions$.pipe(ofType(CartActions.MERGE_CART_SUCCESS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), map((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return new CheckoutActions.LoadCheckoutDetails({
                userId: payload.userId,
                cartId: payload.cartId ? payload.cartId : 'current',
            });
        })));
        this.clearCheckoutDeliveryAddress$ = this.actions$.pipe(ofType(CheckoutActions.CLEAR_CHECKOUT_DELIVERY_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.checkoutConnector
                .clearCheckoutDeliveryAddress(payload.userId, payload.cartId)
                .pipe(map((/**
             * @return {?}
             */
            function () { return new CheckoutActions.ClearCheckoutDeliveryAddressSuccess(); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CheckoutActions.ClearCheckoutDeliveryAddressFail(makeErrorSerializable(error)));
            })));
        })));
        this.clearCheckoutDeliveryMode$ = this.actions$.pipe(ofType(CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.checkoutConnector
                .clearCheckoutDeliveryMode(payload.userId, payload.cartId)
                .pipe(map((/**
             * @return {?}
             */
            function () { return new CheckoutActions.ClearCheckoutDeliveryModeSuccess(); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CheckoutActions.ClearCheckoutDeliveryModeFail(makeErrorSerializable(error)));
            })));
        })));
    }
    CheckoutEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CheckoutEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CheckoutDeliveryConnector },
        { type: CheckoutPaymentConnector },
        { type: CheckoutConnector }
    ]; };
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
    ], CheckoutEffects.prototype, "clearCheckoutDataOnLogin$", void 0);
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
    return CheckoutEffects;
}());
export { CheckoutEffects };
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
    CheckoutEffects.prototype.clearCheckoutDataOnLogin$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvY2hlY2tvdXQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRDtJQXdWRSx5QkFDVSxRQUFpQixFQUNqQix5QkFBb0QsRUFDcEQsd0JBQWtELEVBQ2xELGlCQUFvQztRQUo5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RTswQ0FDVyxVQUFVOytEQXlCNUI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDSSxVQUFVO3dEQWlCckI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDYSxVQUFVO2lFQXVCOUI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDa0IsVUFBVTtzRUFXbkM7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDc0IsVUFBVTswRUFzQnZDO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ21CLFVBQVU7dUVBb0JwQztJQVFKLHNCQUFDO0NBQUEsQUE5VkQsSUE4VkM7U0E3VlksZUFBZTs7O0lBQzFCLDhDQStDRTs7SUFFRiw4Q0E4QkU7O0lBRUYsc0RBdUJFOztJQUVGLGtFQU1FOztJQUVGLDhEQU1FOztJQUVGLHFEQU1FOztJQUVGLG9EQU1FOztJQUVGLDJDQWdDRTs7SUFFRixnREFnQ0U7O0lBRUYsNkNBMEJFOztJQUVGLHNDQWtCRTs7SUFFRiwrQ0F3QkU7O0lBRUYsb0RBWUU7O0lBRUYsd0RBdUJFOztJQUVGLHFEQXFCRTs7Ozs7SUFHQSxtQ0FBeUI7Ozs7O0lBQ3pCLG9EQUE0RDs7Ozs7SUFDNUQsbURBQTBEOzs7OztJQUMxRCw0Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L21vZGVscy9jaGVja291dC5tb2RlbCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi91c2VyL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENoZWNrb3V0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jaGVja291dC9jaGVja291dC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvZGVsaXZlcnkvY2hlY2tvdXQtZGVsaXZlcnkuY29ubmVjdG9yJztcbmltcG9ydCB7IENoZWNrb3V0UGF5bWVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcGF5bWVudC9jaGVja291dC1wYXltZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBhZGREZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIHwgVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXNcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5BRERfREVMSVZFUllfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IENoZWNrb3V0QWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3JcbiAgICAgICAgLmNyZWF0ZUFkZHJlc3MocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKGFkZHJlc3MgPT4ge1xuICAgICAgICAgICAgYWRkcmVzc1sndGl0bGVDb2RlJ10gPSBwYXlsb2FkLmFkZHJlc3MudGl0bGVDb2RlO1xuICAgICAgICAgICAgaWYgKHBheWxvYWQuYWRkcmVzcy5yZWdpb24gJiYgcGF5bG9hZC5hZGRyZXNzLnJlZ2lvbi5pc29jb2RlU2hvcnQpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihhZGRyZXNzLnJlZ2lvbiwge1xuICAgICAgICAgICAgICAgIGlzb2NvZGVTaG9ydDogcGF5bG9hZC5hZGRyZXNzLnJlZ2lvbi5pc29jb2RlU2hvcnQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBheWxvYWQudXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3NlcyhwYXlsb2FkLnVzZXJJZCksXG4gICAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXREZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5SZXNldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzUHJvY2Vzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuU0VUX0RFTElWRVJZX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3JcbiAgICAgICAgLnNldEFkZHJlc3MocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmFkZHJlc3MuaWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKCgpID0+IFtcbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2VzcyhwYXlsb2FkLmFkZHJlc3MpLFxuICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5SZXNldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzUHJvY2VzcygpLFxuICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlcyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5MT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvclxuICAgICAgICAuZ2V0U3VwcG9ydGVkTW9kZXMocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0TWlzY3NEYXRhT25MYW5ndWFnZUNoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgQ2hlY2tvdXRBY3Rpb25zLkNoZWNrb3V0Q2xlYXJNaXNjc0RhdGFcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSksXG4gICAgbWFwKCgpID0+IG5ldyBDaGVja291dEFjdGlvbnMuQ2hlY2tvdXRDbGVhck1pc2NzRGF0YSgpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckRlbGl2ZXJ5TW9kZXNPbkN1cnJlbmN5Q2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBDaGVja291dEFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0UpLFxuICAgIG1hcCgoKSA9PiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0RGF0YU9uTG9nb3V0JDogT2JzZXJ2YWJsZTxcbiAgICBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERhdGFcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQXV0aEFjdGlvbnMuTE9HT1VUKSxcbiAgICBtYXAoKCkgPT4gbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGF0YSgpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0RGF0YU9uTG9naW4kOiBPYnNlcnZhYmxlPFxuICAgIENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGF0YVxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBdXRoQWN0aW9ucy5MT0dJTiksXG4gICAgbWFwKCgpID0+IG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERhdGEoKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0RGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlRmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLlNFVF9ERUxJVkVSWV9NT0RFKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yXG4gICAgICAgIC5zZXRNb2RlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5zZWxlY3RlZE1vZGVJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGVTdWNjZXNzKFxuICAgICAgICAgICAgICAgIHBheWxvYWQuc2VsZWN0ZWRNb2RlSWRcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGVGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjcmVhdGVQYXltZW50RGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBVc2VyQWN0aW9ucy5Mb2FkVXNlclBheW1lbnRNZXRob2RzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5DUkVBVEVfUEFZTUVOVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICAvLyBnZXQgaW5mb3JtYXRpb24gZm9yIGNyZWF0aW5nIGEgc3Vic2NyaXB0aW9uIGRpcmVjdGx5IHdpdGggcGF5bWVudCBwcm92aWRlclxuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLnBheW1lbnREZXRhaWxzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcChkZXRhaWxzID0+IHtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbbmV3IENoZWNrb3V0QWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3MoZGV0YWlscyldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJQYXltZW50TWV0aG9kcyhwYXlsb2FkLnVzZXJJZCksXG4gICAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3MoZGV0YWlscyksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXRQYXltZW50RGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5TRVRfUEFZTUVOVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dFBheW1lbnRDb25uZWN0b3JcbiAgICAgICAgLnNldChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQucGF5bWVudERldGFpbHMuaWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNTdWNjZXNzKFxuICAgICAgICAgICAgICAgIHBheWxvYWQucGF5bWVudERldGFpbHNcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBwbGFjZU9yZGVyJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5QbGFjZU9yZGVyU3VjY2Vzc1xuICAgIHwgR2xvYmFsTWVzc2FnZUFjdGlvbnMuQWRkTWVzc2FnZVxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXJGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5QTEFDRV9PUkRFUiksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRDb25uZWN0b3JcbiAgICAgICAgLnBsYWNlT3JkZXIocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PiBbbmV3IENoZWNrb3V0QWN0aW9ucy5QbGFjZU9yZGVyU3VjY2VzcyhkYXRhKV0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBDaGVja291dEFjdGlvbnMuUGxhY2VPcmRlckZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRDaGVja291dERldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlsc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLkxPQURfQ0hFQ0tPVVRfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvbm5lY3RvclxuICAgICAgICAubG9hZENoZWNrb3V0RGV0YWlscyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgIChkYXRhOiBDaGVja291dERldGFpbHMpID0+XG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3MoZGF0YSlcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWxvYWREZXRhaWxzT25NZXJnZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLk1FUkdFX0NBUlRfU1VDQ0VTUyksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzKHtcbiAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCA/IHBheWxvYWQuY2FydElkIDogJ2N1cnJlbnQnLFxuICAgICAgfSk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTUyksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvbm5lY3RvclxuICAgICAgICAuY2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzKCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlRmFpbFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFKSxcbiAgICBtYXAoKGFjdGlvbjogQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvbm5lY3RvclxuICAgICAgICAuY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzKCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yOiBDaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yOiBDaGVja291dFBheW1lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbm5lY3RvcjogQ2hlY2tvdXRDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19