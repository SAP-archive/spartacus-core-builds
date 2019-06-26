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
import * as fromUserActions from '../../../user/store/actions/index';
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
                return [
                    new fromUserActions.LoadUserAddresses(payload.userId),
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
            function (details) { return [
                new fromUserActions.LoadUserPaymentMethods(payload.userId),
                new CheckoutActions.CreatePaymentDetailsSuccess(details),
            ]; })), catchError((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvY2hlY2tvdXQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxLQUFLLGVBQWUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNqRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbkQ7SUF5UUUseUJBQ1UsUUFBaUIsRUFDakIseUJBQW9ELEVBQ3BELHdCQUFrRCxFQUNsRCxpQkFBb0M7UUFKOUMsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDhCQUF5QixHQUF6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QWlCckI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDYSxVQUFVO2lFQXVCOUI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDa0IsVUFBVTtzRUFXbkM7SUFRSixzQkFBQztDQUFBLEFBL1FELElBK1FDO1NBOVFZLGVBQWU7OztJQUMxQiw4Q0FnQ0U7O0lBRUYsOENBNEJFOztJQUVGLHNEQXVCRTs7SUFFRixrRUFNRTs7SUFFRiw4REFNRTs7SUFFRixxREFNRTs7SUFFRiwyQ0FnQ0U7O0lBRUYsZ0RBMEJFOztJQUVGLDZDQTBCRTs7SUFFRixzQ0FrQkU7O0lBRUYsK0NBd0JFOztJQUVGLG9EQVlFOzs7OztJQUdBLG1DQUF5Qjs7Ozs7SUFDekIsb0RBQTREOzs7OztJQUM1RCxtREFBMEQ7Ozs7O0lBQzFELDRDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvbW9kZWxzL2NoZWNrb3V0Lm1vZGVsJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2Uvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vdXNlci9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDaGVja291dENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuY29ubmVjdG9yJztcbmltcG9ydCB7IENoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NoZWNrb3V0LWRlbGl2ZXJ5LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDaGVja291dFBheW1lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BheW1lbnQvY2hlY2tvdXQtcGF5bWVudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVja291dEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgYWRkRGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICB8IGZyb21Vc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3Nlc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLkFERF9ERUxJVkVSWV9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogQ2hlY2tvdXRBY3Rpb25zLkFkZERlbGl2ZXJ5QWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvclxuICAgICAgICAuY3JlYXRlQWRkcmVzcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuYWRkcmVzcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICBhZGRyZXNzWyd0aXRsZUNvZGUnXSA9IHBheWxvYWQuYWRkcmVzcy50aXRsZUNvZGU7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgZnJvbVVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzKHBheWxvYWQudXNlcklkKSxcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldERlbGl2ZXJ5QWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuU0VUX0RFTElWRVJZX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3JcbiAgICAgICAgLnNldEFkZHJlc3MocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmFkZHJlc3MuaWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKCgpID0+IFtcbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2VzcyhwYXlsb2FkLmFkZHJlc3MpLFxuICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlcyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5MT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvclxuICAgICAgICAuZ2V0U3VwcG9ydGVkTW9kZXMocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0TWlzY3NEYXRhT25MYW5ndWFnZUNoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgQ2hlY2tvdXRBY3Rpb25zLkNoZWNrb3V0Q2xlYXJNaXNjc0RhdGFcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSksXG4gICAgbWFwKCgpID0+IG5ldyBDaGVja291dEFjdGlvbnMuQ2hlY2tvdXRDbGVhck1pc2NzRGF0YSgpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckRlbGl2ZXJ5TW9kZXNPbkN1cnJlbmN5Q2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBDaGVja291dEFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0UpLFxuICAgIG1hcCgoKSA9PiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0RGF0YU9uTG9nb3V0JDogT2JzZXJ2YWJsZTxcbiAgICBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERhdGFcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQXV0aEFjdGlvbnMuTE9HT1VUKSxcbiAgICBtYXAoKCkgPT4gbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGF0YSgpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXREZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGVGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuU0VUX0RFTElWRVJZX01PREUpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3JcbiAgICAgICAgLnNldE1vZGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLnNlbGVjdGVkTW9kZUlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5zZWxlY3RlZE1vZGVJZFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5TW9kZUZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZVBheW1lbnREZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICB8IGZyb21Vc2VyQWN0aW9ucy5Mb2FkVXNlclBheW1lbnRNZXRob2RzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5DUkVBVEVfUEFZTUVOVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICAvLyBnZXQgaW5mb3JtYXRpb24gZm9yIGNyZWF0aW5nIGEgc3Vic2NyaXB0aW9uIGRpcmVjdGx5IHdpdGggcGF5bWVudCBwcm92aWRlclxuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLnBheW1lbnREZXRhaWxzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcChkZXRhaWxzID0+IFtcbiAgICAgICAgICAgIG5ldyBmcm9tVXNlckFjdGlvbnMuTG9hZFVzZXJQYXltZW50TWV0aG9kcyhwYXlsb2FkLnVzZXJJZCksXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2VzcyhkZXRhaWxzKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlsc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldFBheW1lbnREZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLlNFVF9QQVlNRU5UX0RFVEFJTFMpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0UGF5bWVudENvbm5lY3RvclxuICAgICAgICAuc2V0KHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5wYXltZW50RGV0YWlscy5pZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5wYXltZW50RGV0YWlsc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHBsYWNlT3JkZXIkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXJTdWNjZXNzXG4gICAgfCBHbG9iYWxNZXNzYWdlQWN0aW9ucy5BZGRNZXNzYWdlXG4gICAgfCBDaGVja291dEFjdGlvbnMuUGxhY2VPcmRlckZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLlBMQUNFX09SREVSKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvbm5lY3RvclxuICAgICAgICAucGxhY2VPcmRlcihwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChkYXRhID0+IFtuZXcgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXJTdWNjZXNzKGRhdGEpXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IENoZWNrb3V0QWN0aW9ucy5QbGFjZU9yZGVyRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZENoZWNrb3V0RGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuTE9BRF9DSEVDS09VVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Q29ubmVjdG9yXG4gICAgICAgIC5sb2FkQ2hlY2tvdXREZXRhaWxzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKGRhdGE6IENoZWNrb3V0RGV0YWlscykgPT5cbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzU3VjY2VzcyhkYXRhKVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlsc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbG9hZERldGFpbHNPbk1lcmdlQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2VzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHMoe1xuICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkID8gcGF5bG9hZC5jYXJ0SWQgOiAnY3VycmVudCcsXG4gICAgICB9KTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yOiBDaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yOiBDaGVja291dFBheW1lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbm5lY3RvcjogQ2hlY2tvdXRDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19