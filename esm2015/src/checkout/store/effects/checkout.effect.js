/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { CartActions } from '../../../cart/store/actions/index';
import { OCC_USER_ID_ANONYMOUS, OCC_CART_ID_CURRENT, } from '../../../occ/utils/occ-constants';
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
                new CheckoutActions.ClearCheckoutDeliveryMode({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
                new CheckoutActions.ClearSupportedDeliveryModes(),
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
        this.clearCheckoutDataOnLogin$ = this.actions$.pipe(ofType(AuthActions.LOGIN), map((/**
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
            details => {
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
            data => [
                new CartActions.RemoveCart(payload.cartId),
                new CheckoutActions.PlaceOrderSuccess(data),
            ])), catchError((/**
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
                cartId: payload.cartId ? payload.cartId : OCC_CART_ID_CURRENT,
            });
        })));
        this.clearCheckoutDeliveryAddress$ = this.actions$.pipe(ofType(CheckoutActions.CLEAR_CHECKOUT_DELIVERY_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), filter((/**
         * @param {?} payload
         * @return {?}
         */
        payload => Boolean(payload.cartId))), switchMap((/**
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
        (action) => action.payload)), filter((/**
         * @param {?} payload
         * @return {?}
         */
        payload => Boolean(payload.cartId))), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.checkoutConnector
                .clearCheckoutDeliveryMode(payload.userId, payload.cartId)
                .pipe(map((/**
             * @return {?}
             */
            () => new CheckoutActions.ClearCheckoutDeliveryModeSuccess({
                userId: payload.userId,
                cartId: payload.cartId,
            }))), catchError((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvY2hlY2tvdXQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBR2hFLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsbUJBQW1CLEdBQ3BCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUduRCxNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQTBXMUIsWUFDVSxRQUFp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O0lBREMsTUFBTSxFQUFFO3NDQUNvQixVQUFVO29FQXNCckM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDZ0MsVUFBVTtnRkFLakQ7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDNEIsVUFBVTs0RUFLN0M7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDbUIsVUFBVTttRUFLcEM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDa0IsVUFBVTtrRUFLbkM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDUyxVQUFVO3lEQStCMUI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDYyxVQUFVOzhEQStCL0I7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDVyxVQUFVOzJEQXlCNUI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDSSxVQUFVO29EQXFCckI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDYSxVQUFVOzZEQXVCOUI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDa0IsVUFBVTtrRUFXbkM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDc0IsVUFBVTtzRUF1QnZDO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ21CLFVBQVU7bUVBMkJwQzs7O0lBdldGLDhDQStDRTs7SUFFRiw4Q0FxQ0U7O0lBRUYsc0RBdUJFOztJQUVGLGtFQU1FOztJQUVGLDhEQU1FOztJQUVGLHFEQU1FOztJQUVGLG9EQU1FOztJQUVGLDJDQWdDRTs7SUFFRixnREFnQ0U7O0lBRUYsNkNBMEJFOztJQUVGLHNDQXNCRTs7SUFFRiwrQ0F3QkU7O0lBRUYsb0RBWUU7O0lBRUYsd0RBd0JFOztJQUVGLHFEQTRCRTs7Ozs7SUFHQSxtQ0FBeUI7Ozs7O0lBQ3pCLG9EQUE0RDs7Ozs7SUFDNUQsbURBQTBEOzs7OztJQUMxRCw0Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbHRlciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvbW9kZWxzL2NoZWNrb3V0Lm1vZGVsJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2Uvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQge1xuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIE9DQ19DQVJUX0lEX0NVUlJFTlQsXG59IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDaGVja291dENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuY29ubmVjdG9yJztcbmltcG9ydCB7IENoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NoZWNrb3V0LWRlbGl2ZXJ5LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDaGVja291dFBheW1lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BheW1lbnQvY2hlY2tvdXQtcGF5bWVudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVja291dEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgYWRkRGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICB8IFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzXG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuQUREX0RFTElWRVJZX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBDaGVja291dEFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGVBZGRyZXNzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5hZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIGFkZHJlc3NbJ3RpdGxlQ29kZSddID0gcGF5bG9hZC5hZGRyZXNzLnRpdGxlQ29kZTtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmFkZHJlc3MucmVnaW9uICYmIHBheWxvYWQuYWRkcmVzcy5yZWdpb24uaXNvY29kZVNob3J0KSB7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYWRkcmVzcy5yZWdpb24sIHtcbiAgICAgICAgICAgICAgICBpc29jb2RlU2hvcnQ6IHBheWxvYWQuYWRkcmVzcy5yZWdpb24uaXNvY29kZVNob3J0LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXMocGF5bG9hZC51c2VySWQpLFxuICAgICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzKHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0RGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5TRVRfREVMSVZFUllfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvclxuICAgICAgICAuc2V0QWRkcmVzcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuYWRkcmVzcy5pZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4gW1xuICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzKHBheWxvYWQuYWRkcmVzcyksXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUoe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpLFxuICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5SZXNldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzUHJvY2VzcygpLFxuICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlcyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5MT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvclxuICAgICAgICAuZ2V0U3VwcG9ydGVkTW9kZXMocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0TWlzY3NEYXRhT25MYW5ndWFnZUNoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgQ2hlY2tvdXRBY3Rpb25zLkNoZWNrb3V0Q2xlYXJNaXNjc0RhdGFcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSksXG4gICAgbWFwKCgpID0+IG5ldyBDaGVja291dEFjdGlvbnMuQ2hlY2tvdXRDbGVhck1pc2NzRGF0YSgpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckRlbGl2ZXJ5TW9kZXNPbkN1cnJlbmN5Q2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBDaGVja291dEFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0UpLFxuICAgIG1hcCgoKSA9PiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0RGF0YU9uTG9nb3V0JDogT2JzZXJ2YWJsZTxcbiAgICBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERhdGFcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQXV0aEFjdGlvbnMuTE9HT1VUKSxcbiAgICBtYXAoKCkgPT4gbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGF0YSgpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0RGF0YU9uTG9naW4kOiBPYnNlcnZhYmxlPFxuICAgIENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGF0YVxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBdXRoQWN0aW9ucy5MT0dJTiksXG4gICAgbWFwKCgpID0+IG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERhdGEoKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0RGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlRmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLlNFVF9ERUxJVkVSWV9NT0RFKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yXG4gICAgICAgIC5zZXRNb2RlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5zZWxlY3RlZE1vZGVJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGVTdWNjZXNzKFxuICAgICAgICAgICAgICAgIHBheWxvYWQuc2VsZWN0ZWRNb2RlSWRcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGVGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjcmVhdGVQYXltZW50RGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBVc2VyQWN0aW9ucy5Mb2FkVXNlclBheW1lbnRNZXRob2RzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5DUkVBVEVfUEFZTUVOVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICAvLyBnZXQgaW5mb3JtYXRpb24gZm9yIGNyZWF0aW5nIGEgc3Vic2NyaXB0aW9uIGRpcmVjdGx5IHdpdGggcGF5bWVudCBwcm92aWRlclxuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLnBheW1lbnREZXRhaWxzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcChkZXRhaWxzID0+IHtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbbmV3IENoZWNrb3V0QWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3MoZGV0YWlscyldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJQYXltZW50TWV0aG9kcyhwYXlsb2FkLnVzZXJJZCksXG4gICAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3MoZGV0YWlscyksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXRQYXltZW50RGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5TRVRfUEFZTUVOVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dFBheW1lbnRDb25uZWN0b3JcbiAgICAgICAgLnNldChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQucGF5bWVudERldGFpbHMuaWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNTdWNjZXNzKFxuICAgICAgICAgICAgICAgIHBheWxvYWQucGF5bWVudERldGFpbHNcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBwbGFjZU9yZGVyJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5QbGFjZU9yZGVyU3VjY2Vzc1xuICAgIHwgR2xvYmFsTWVzc2FnZUFjdGlvbnMuQWRkTWVzc2FnZVxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXJGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5QTEFDRV9PUkRFUiksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRDb25uZWN0b3JcbiAgICAgICAgLnBsYWNlT3JkZXIocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PiBbXG4gICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydChwYXlsb2FkLmNhcnRJZCksXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXJTdWNjZXNzKGRhdGEpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBDaGVja291dEFjdGlvbnMuUGxhY2VPcmRlckZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRDaGVja291dERldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlsc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLkxPQURfQ0hFQ0tPVVRfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvbm5lY3RvclxuICAgICAgICAubG9hZENoZWNrb3V0RGV0YWlscyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgIChkYXRhOiBDaGVja291dERldGFpbHMpID0+XG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3MoZGF0YSlcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWxvYWREZXRhaWxzT25NZXJnZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLk1FUkdFX0NBUlRfU1VDQ0VTUyksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzKHtcbiAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCA/IHBheWxvYWQuY2FydElkIDogT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgICAgIH0pO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NGYWlsXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLkNMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1MpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgZmlsdGVyKHBheWxvYWQgPT4gQm9vbGVhbihwYXlsb2FkLmNhcnRJZCkpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Q29ubmVjdG9yXG4gICAgICAgIC5jbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MoKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVGYWlsXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLkNMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREUpLFxuICAgIG1hcCgoYWN0aW9uOiBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGZpbHRlcihwYXlsb2FkID0+IEJvb2xlYW4ocGF5bG9hZC5jYXJ0SWQpKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvbm5lY3RvclxuICAgICAgICAuY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yOiBDaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yOiBDaGVja291dFBheW1lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbm5lY3RvcjogQ2hlY2tvdXRDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19