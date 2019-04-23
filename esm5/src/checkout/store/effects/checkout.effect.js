/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, mergeMap, switchMap } from 'rxjs/operators';
import * as fromActions from '../actions/index';
import { OccCartService } from '../../../cart/index';
import { GlobalMessageType, AddMessage } from '../../../global-message/index';
import { ProductImageNormalizer } from '../../../product/index';
import { OccOrderService } from '../../../user/index';
import * as fromUserActions from '../../../user/store/actions/index';
var CheckoutEffects = /** @class */ (function () {
    function CheckoutEffects(actions$, occCartService, occOrderService, productImageConverter) {
        var _this = this;
        this.actions$ = actions$;
        this.occCartService = occCartService;
        this.occOrderService = occOrderService;
        this.productImageConverter = productImageConverter;
        this.addDeliveryAddress$ = this.actions$.pipe(ofType(fromActions.ADD_DELIVERY_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService
                .createAddressOnCart(payload.userId, payload.cartId, payload.address)
                .pipe(mergeMap(function (address) {
                address['titleCode'] = payload.address.titleCode;
                return [
                    new fromUserActions.LoadUserAddresses(payload.userId),
                    new fromActions.SetDeliveryAddress({
                        userId: payload.userId,
                        cartId: payload.cartId,
                        address: address,
                    }),
                ];
            }), catchError(function (error) { return of(new fromActions.AddDeliveryAddressFail(error)); }));
        }));
        this.setDeliveryAddress$ = this.actions$.pipe(ofType(fromActions.SET_DELIVERY_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService
                .setDeliveryAddress(payload.userId, payload.cartId, payload.address.id)
                .pipe(map(function () { return new fromActions.SetDeliveryAddressSuccess(payload.address); }), catchError(function (error) { return of(new fromActions.SetDeliveryAddressFail(error)); }));
        }));
        this.loadSupportedDeliveryModes$ = this.actions$.pipe(ofType(fromActions.LOAD_SUPPORTED_DELIVERY_MODES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService
                .getSupportedDeliveryModes(payload.userId, payload.cartId)
                .pipe(map(function (data) {
                return new fromActions.LoadSupportedDeliveryModesSuccess(data);
            }), catchError(function (error) {
                return of(new fromActions.LoadSupportedDeliveryModesFail(error));
            }));
        }));
        this.setDeliveryMode$ = this.actions$.pipe(ofType(fromActions.SET_DELIVERY_MODE), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService
                .setDeliveryMode(payload.userId, payload.cartId, payload.selectedModeId)
                .pipe(map(function () { return new fromActions.SetDeliveryModeSuccess(payload.selectedModeId); }), catchError(function (error) { return of(new fromActions.SetDeliveryModeFail(error)); }));
        }));
        this.createPaymentDetails$ = this.actions$.pipe(ofType(fromActions.CREATE_PAYMENT_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            // get information for creating a subscription directly with payment provider
            return _this.occCartService
                .getPaymentProviderSubInfo(payload.userId, payload.cartId)
                .pipe(map(function (data) {
                /** @type {?} */
                var labelsMap = _this.convertToMap(data.mappingLabels.entry);
                return {
                    url: data.postUrl,
                    parameters: _this.getParamsForPaymentProvider(payload.paymentDetails, data.parameters.entry, labelsMap),
                    mappingLabels: labelsMap,
                };
            }), mergeMap(function (sub) {
                // create a subscription directly with payment provider
                return _this.occCartService
                    .createSubWithPaymentProvider(sub.url, sub.parameters)
                    .pipe(map(function (response) { return _this.extractPaymentDetailsFromHtml(response); }), mergeMap(function (fromPaymentProvider) {
                    if (!fromPaymentProvider['hasError']) {
                        // consume response from payment provider and creates payment details
                        return _this.occCartService
                            .createPaymentDetails(payload.userId, payload.cartId, _this.getPaymentSopResponseParams(payload.paymentDetails, fromPaymentProvider, sub.mappingLabels))
                            .pipe(mergeMap(function (details) {
                            return [
                                new fromUserActions.LoadUserPaymentMethods(payload.userId),
                                new fromActions.CreatePaymentDetailsSuccess(details),
                            ];
                        }), catchError(function (error) {
                            return of(new fromActions.CreatePaymentDetailsFail(error));
                        }));
                    }
                    else {
                        return of(new fromActions.CreatePaymentDetailsFail(fromPaymentProvider));
                    }
                }));
            }));
        }));
        this.setPaymentDetails$ = this.actions$.pipe(ofType(fromActions.SET_PAYMENT_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService
                .setPaymentDetails(payload.userId, payload.cartId, payload.paymentDetails.id)
                .pipe(map(function () {
                return new fromActions.SetPaymentDetailsSuccess(payload.paymentDetails);
            }), catchError(function (error) { return of(new fromActions.SetPaymentDetailsFail(error)); }));
        }));
        this.placeOrder$ = this.actions$.pipe(ofType(fromActions.PLACE_ORDER), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occOrderService
                .placeOrder(payload.userId, payload.cartId)
                .pipe(map(function (data) {
                var e_1, _a;
                try {
                    for (var _b = tslib_1.__values((/** @type {?} */ (data.entries))), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var entry = _c.value;
                        _this.productImageConverter.convertProduct(entry.product);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return data;
            }), switchMap(function (data) { return [
                new fromActions.PlaceOrderSuccess(data),
                new AddMessage({
                    text: 'Order placed successfully',
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]; }), catchError(function (error) { return of(new fromActions.PlaceOrderFail(error)); }));
        }));
        if (typeof DOMParser !== 'undefined') {
            this.domparser = new DOMParser();
        }
    }
    /**
     * @private
     * @param {?} paymentDetails
     * @param {?} fromPaymentProvider
     * @param {?} mappingLabels
     * @return {?}
     */
    CheckoutEffects.prototype.getPaymentSopResponseParams = /**
     * @private
     * @param {?} paymentDetails
     * @param {?} fromPaymentProvider
     * @param {?} mappingLabels
     * @return {?}
     */
    function (paymentDetails, fromPaymentProvider, mappingLabels) {
        /** @type {?} */
        var sopResponseParams = {};
        sopResponseParams['decision'] =
            fromPaymentProvider[mappingLabels['hybris_sop_decision']];
        sopResponseParams['amount'] =
            fromPaymentProvider[mappingLabels['hybris_sop_amount']];
        sopResponseParams['currency'] =
            fromPaymentProvider[mappingLabels['hybris_sop_currency']];
        sopResponseParams['billTo_country'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_country']];
        sopResponseParams['billTo_firstName'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_firstname']];
        sopResponseParams['billTo_lastName'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_lastname']];
        sopResponseParams['billTo_street1'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_street1']];
        sopResponseParams['billTo_city'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_city']];
        sopResponseParams['billTo_postalCode'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_postalcode']];
        sopResponseParams['card_cardType'] = paymentDetails.cardType.code;
        sopResponseParams['card_accountNumber'] =
            fromPaymentProvider[mappingLabels['hybris_sop_card_number']];
        sopResponseParams['card_expirationMonth'] = paymentDetails.expiryMonth;
        sopResponseParams['card_expirationYear'] = paymentDetails.expiryYear;
        sopResponseParams['card_nameOnCard'] = paymentDetails.accountHolderName;
        sopResponseParams['defaultPayment'] = paymentDetails.defaultPayment;
        sopResponseParams['savePaymentInfo'] = true;
        sopResponseParams['reasonCode'] =
            fromPaymentProvider[mappingLabels['hybris_sop_reason_code']];
        sopResponseParams['paySubscriptionCreateReply_subscriptionID'] =
            fromPaymentProvider[mappingLabels['hybris_sop_subscriptionID']];
        if (mappingLabels['hybris_sop_uses_public_signature'] === 'true') {
            sopResponseParams['paySubscriptionCreateReply_subscriptionIDPublicSignature'] = fromPaymentProvider[mappingLabels['hybris_sop_public_signature']];
        }
        return sopResponseParams;
    };
    /**
     * @private
     * @param {?} paymentDetails
     * @param {?} parameters
     * @param {?} mappingLabels
     * @return {?}
     */
    CheckoutEffects.prototype.getParamsForPaymentProvider = /**
     * @private
     * @param {?} paymentDetails
     * @param {?} parameters
     * @param {?} mappingLabels
     * @return {?}
     */
    function (paymentDetails, parameters, mappingLabels) {
        /** @type {?} */
        var params = this.convertToMap(parameters);
        params[mappingLabels['hybris_account_holder_name']] =
            paymentDetails.accountHolderName;
        params[mappingLabels['hybris_card_type']] = paymentDetails.cardType.code;
        params[mappingLabels['hybris_card_number']] = paymentDetails.cardNumber;
        if (mappingLabels['hybris_combined_expiry_date'] === 'true') {
            params[mappingLabels['hybris_card_expiry_date']] =
                paymentDetails.expiryMonth +
                    mappingLabels['hybris_separator_expiry_date'] +
                    paymentDetails.expiryYear;
        }
        else {
            params[mappingLabels['hybris_card_expiration_month']] =
                paymentDetails.expiryMonth;
            params[mappingLabels['hybris_card_expiration_year']] =
                paymentDetails.expiryYear;
        }
        params[mappingLabels['hybris_card_cvn']] = paymentDetails.cvn;
        // billing address
        params[mappingLabels['hybris_billTo_country']] =
            paymentDetails.billingAddress.country.isocode;
        params[mappingLabels['hybris_billTo_firstname']] =
            paymentDetails.billingAddress.firstName;
        params[mappingLabels['hybris_billTo_lastname']] =
            paymentDetails.billingAddress.lastName;
        params[mappingLabels['hybris_billTo_street1']] =
            paymentDetails.billingAddress.line1 +
                ' ' +
                paymentDetails.billingAddress.line2;
        params[mappingLabels['hybris_billTo_city']] =
            paymentDetails.billingAddress.town;
        params[mappingLabels['hybris_billTo_postalcode']] =
            paymentDetails.billingAddress.postalCode;
        return params;
    };
    /**
     * @private
     * @param {?} html
     * @return {?}
     */
    CheckoutEffects.prototype.extractPaymentDetailsFromHtml = /**
     * @private
     * @param {?} html
     * @return {?}
     */
    function (html) {
        /** @type {?} */
        var domdoc = this.domparser.parseFromString(html, 'text/xml');
        /** @type {?} */
        var responseForm = domdoc.getElementsByTagName('form')[0];
        /** @type {?} */
        var inputs = responseForm.getElementsByTagName('input');
        /** @type {?} */
        var values = {};
        for (var i = 0; inputs[i]; i++) {
            /** @type {?} */
            var input = inputs[i];
            if (input.getAttribute('name') !== '{}' &&
                input.getAttribute('value') !== '') {
                values[input.getAttribute('name')] = input.getAttribute('value');
            }
        }
        // rejected for some reason
        if (values['decision'] !== 'ACCEPT') {
            /** @type {?} */
            var reason_1 = { hasError: true };
            Object.keys(values).forEach(function (name) {
                if (name === 'reasonCode' || name.startsWith('InvalidField')) {
                    reason_1[name] = values[name];
                }
            });
            return reason_1;
        }
        return values;
    };
    /**
     * @private
     * @param {?} paramList
     * @return {?}
     */
    CheckoutEffects.prototype.convertToMap = /**
     * @private
     * @param {?} paramList
     * @return {?}
     */
    function (paramList) {
        return paramList.reduce(function (result, item) {
            /** @type {?} */
            var key = item.key;
            result[key] = item.value;
            return result;
        }, {});
    };
    CheckoutEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CheckoutEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccCartService },
        { type: OccOrderService },
        { type: ProductImageNormalizer }
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
    CheckoutEffects.prototype.setDeliveryMode$;
    /** @type {?} */
    CheckoutEffects.prototype.createPaymentDetails$;
    /** @type {?} */
    CheckoutEffects.prototype.setPaymentDetails$;
    /** @type {?} */
    CheckoutEffects.prototype.placeOrder$;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.domparser;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.occCartService;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.occOrderService;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.productImageConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvY2hlY2tvdXQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sS0FBSyxXQUFXLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxLQUFLLGVBQWUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRTtJQW9ORSx5QkFDVSxRQUFpQixFQUNqQixjQUE4QixFQUM5QixlQUFnQyxFQUNoQyxxQkFBNkM7UUFKdkQsaUJBU0M7UUFSUyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF3QjtRQXJOdkQsd0JBQW1CLEdBSWYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxX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Z0JBQ3JDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztZQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDOztnQkE5VkYsVUFBVTs7OztnQkFiRixPQUFPO2dCQU1QLGNBQWM7Z0JBR2QsZUFBZTtnQkFEZixzQkFBc0I7O0lBUTdCO1FBREMsTUFBTSxFQUFFOzBDQUNZLFVBQVU7Z0VBeUI3QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNZLFVBQVU7Z0VBYTdCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ29CLFVBQVU7d0VBa0JyQztJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNTLFVBQVU7NkRBZTFCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ2MsVUFBVTtrRUF1RS9CO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ1csVUFBVTsrREFvQjVCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ksVUFBVTt3REF5QnJCO0lBK0lKLHNCQUFDO0NBQUEsQUEvVkQsSUErVkM7U0E5VlksZUFBZTs7O0lBQzFCLDhDQTBCRTs7SUFFRiw4Q0FjRTs7SUFFRixzREFtQkU7O0lBRUYsMkNBZ0JFOztJQUVGLGdEQXdFRTs7SUFFRiw2Q0FxQkU7O0lBRUYsc0NBMEJFOzs7OztJQUVGLG9DQUE2Qjs7Ozs7SUFHM0IsbUNBQXlCOzs7OztJQUN6Qix5Q0FBc0M7Ozs7O0lBQ3RDLDBDQUF3Qzs7Ozs7SUFDeEMsZ0RBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IE9jY0NhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9pbmRleCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSwgQWRkTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2luZGV4JztcbmltcG9ydCB7IE9jY09yZGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VzZXIvaW5kZXgnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSwgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vdXNlci9zdG9yZS9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBhZGREZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbVVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzXG4gICAgfCBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NcbiAgICB8IGZyb21BY3Rpb25zLkFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuQUREX0RFTElWRVJZX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLm9jY0NhcnRTZXJ2aWNlXG4gICAgICAgIC5jcmVhdGVBZGRyZXNzT25DYXJ0KHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5hZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIGFkZHJlc3NbJ3RpdGxlQ29kZSddID0gcGF5bG9hZC5hZGRyZXNzLnRpdGxlQ29kZTtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBmcm9tVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXMocGF5bG9hZC51c2VySWQpLFxuICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzKHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLkFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWwoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0RGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzIHwgZnJvbUFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5TRVRfREVMSVZFUllfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjQ2FydFNlcnZpY2VcbiAgICAgICAgLnNldERlbGl2ZXJ5QWRkcmVzcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuYWRkcmVzcy5pZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IG5ldyBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzKHBheWxvYWQuYWRkcmVzcykpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc0ZhaWwoZXJyb3IpKSlcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tQWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3NcbiAgICB8IGZyb21BY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjQ2FydFNlcnZpY2VcbiAgICAgICAgLmdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0RGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeU1vZGVTdWNjZXNzIHwgZnJvbUFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5TRVRfREVMSVZFUllfTU9ERSksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjQ2FydFNlcnZpY2VcbiAgICAgICAgLnNldERlbGl2ZXJ5TW9kZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuc2VsZWN0ZWRNb2RlSWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICgpID0+IG5ldyBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeU1vZGVTdWNjZXNzKHBheWxvYWQuc2VsZWN0ZWRNb2RlSWQpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeU1vZGVGYWlsKGVycm9yKSkpXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY3JlYXRlUGF5bWVudERldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbVVzZXJBY3Rpb25zLkxvYWRVc2VyUGF5bWVudE1ldGhvZHNcbiAgICB8IGZyb21BY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2Vzc1xuICAgIHwgZnJvbUFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkNSRUFURV9QQVlNRU5UX0RFVEFJTFMpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIC8vIGdldCBpbmZvcm1hdGlvbiBmb3IgY3JlYXRpbmcgYSBzdWJzY3JpcHRpb24gZGlyZWN0bHkgd2l0aCBwYXltZW50IHByb3ZpZGVyXG4gICAgICByZXR1cm4gdGhpcy5vY2NDYXJ0U2VydmljZVxuICAgICAgICAuZ2V0UGF5bWVudFByb3ZpZGVyU3ViSW5mbyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsc01hcCA9IHRoaXMuY29udmVydFRvTWFwKGRhdGEubWFwcGluZ0xhYmVscy5lbnRyeSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB1cmw6IGRhdGEucG9zdFVybCxcbiAgICAgICAgICAgICAgcGFyYW1ldGVyczogdGhpcy5nZXRQYXJhbXNGb3JQYXltZW50UHJvdmlkZXIoXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5wYXltZW50RGV0YWlscyxcbiAgICAgICAgICAgICAgICBkYXRhLnBhcmFtZXRlcnMuZW50cnksXG4gICAgICAgICAgICAgICAgbGFiZWxzTWFwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG1hcHBpbmdMYWJlbHM6IGxhYmVsc01hcCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWVyZ2VNYXAoc3ViID0+IHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHN1YnNjcmlwdGlvbiBkaXJlY3RseSB3aXRoIHBheW1lbnQgcHJvdmlkZXJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9jY0NhcnRTZXJ2aWNlXG4gICAgICAgICAgICAgIC5jcmVhdGVTdWJXaXRoUGF5bWVudFByb3ZpZGVyKHN1Yi51cmwsIHN1Yi5wYXJhbWV0ZXJzKVxuICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gdGhpcy5leHRyYWN0UGF5bWVudERldGFpbHNGcm9tSHRtbChyZXNwb25zZSkpLFxuICAgICAgICAgICAgICAgIG1lcmdlTWFwKGZyb21QYXltZW50UHJvdmlkZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCFmcm9tUGF5bWVudFByb3ZpZGVyWydoYXNFcnJvciddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN1bWUgcmVzcG9uc2UgZnJvbSBwYXltZW50IHByb3ZpZGVyIGFuZCBjcmVhdGVzIHBheW1lbnQgZGV0YWlsc1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9jY0NhcnRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVBheW1lbnREZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGF5bWVudFNvcFJlc3BvbnNlUGFyYW1zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLnBheW1lbnREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tUGF5bWVudFByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWIubWFwcGluZ0xhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlTWFwKGRldGFpbHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBmcm9tVXNlckFjdGlvbnMuTG9hZFVzZXJQYXltZW50TWV0aG9kcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQudXNlcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2YobmV3IGZyb21BY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzRmFpbChlcnJvcikpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsKFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVBheW1lbnRQcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0UGF5bWVudERldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlNldFBheW1lbnREZXRhaWxzU3VjY2VzcyB8IGZyb21BY3Rpb25zLlNldFBheW1lbnREZXRhaWxzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5TRVRfUEFZTUVOVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NDYXJ0U2VydmljZVxuICAgICAgICAuc2V0UGF5bWVudERldGFpbHMoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgcGF5bG9hZC5wYXltZW50RGV0YWlscy5pZFxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MocGF5bG9hZC5wYXltZW50RGV0YWlscylcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlNldFBheW1lbnREZXRhaWxzRmFpbChlcnJvcikpKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHBsYWNlT3JkZXIkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlBsYWNlT3JkZXJTdWNjZXNzIHwgQWRkTWVzc2FnZSB8IGZyb21BY3Rpb25zLlBsYWNlT3JkZXJGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlBMQUNFX09SREVSKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NPcmRlclNlcnZpY2VcbiAgICAgICAgLnBsYWNlT3JkZXIocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGRhdGEuZW50cmllcyBhcyBPcmRlckVudHJ5W10pIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2VDb252ZXJ0ZXIuY29udmVydFByb2R1Y3QoZW50cnkucHJvZHVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PiBbXG4gICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuUGxhY2VPcmRlclN1Y2Nlc3MoZGF0YSksXG4gICAgICAgICAgICBuZXcgQWRkTWVzc2FnZSh7XG4gICAgICAgICAgICAgIHRleHQ6ICdPcmRlciBwbGFjZWQgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuUGxhY2VPcmRlckZhaWwoZXJyb3IpKSlcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIHByaXZhdGUgZG9tcGFyc2VyOiBET01QYXJzZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY0NhcnRTZXJ2aWNlOiBPY2NDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIG9jY09yZGVyU2VydmljZTogT2NjT3JkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZHVjdEltYWdlQ29udmVydGVyOiBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyXG4gICkge1xuICAgIGlmICh0eXBlb2YgRE9NUGFyc2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5kb21wYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXltZW50U29wUmVzcG9uc2VQYXJhbXMoXG4gICAgcGF5bWVudERldGFpbHM6IGFueSxcbiAgICBmcm9tUGF5bWVudFByb3ZpZGVyOiBhbnksXG4gICAgbWFwcGluZ0xhYmVsczogYW55XG4gICkge1xuICAgIGNvbnN0IHNvcFJlc3BvbnNlUGFyYW1zID0ge307XG5cbiAgICBzb3BSZXNwb25zZVBhcmFtc1snZGVjaXNpb24nXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19zb3BfZGVjaXNpb24nXV07XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2Ftb3VudCddID1cbiAgICAgIGZyb21QYXltZW50UHJvdmlkZXJbbWFwcGluZ0xhYmVsc1snaHlicmlzX3NvcF9hbW91bnQnXV07XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2N1cnJlbmN5J10gPVxuICAgICAgZnJvbVBheW1lbnRQcm92aWRlclttYXBwaW5nTGFiZWxzWydoeWJyaXNfc29wX2N1cnJlbmN5J11dO1xuXG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2JpbGxUb19jb3VudHJ5J10gPVxuICAgICAgZnJvbVBheW1lbnRQcm92aWRlclttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2NvdW50cnknXV07XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2JpbGxUb19maXJzdE5hbWUnXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fZmlyc3RuYW1lJ11dO1xuICAgIHNvcFJlc3BvbnNlUGFyYW1zWydiaWxsVG9fbGFzdE5hbWUnXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fbGFzdG5hbWUnXV07XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2JpbGxUb19zdHJlZXQxJ10gPVxuICAgICAgZnJvbVBheW1lbnRQcm92aWRlclttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX3N0cmVldDEnXV07XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2JpbGxUb19jaXR5J10gPVxuICAgICAgZnJvbVBheW1lbnRQcm92aWRlclttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2NpdHknXV07XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2JpbGxUb19wb3N0YWxDb2RlJ10gPVxuICAgICAgZnJvbVBheW1lbnRQcm92aWRlclttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX3Bvc3RhbGNvZGUnXV07XG5cbiAgICBzb3BSZXNwb25zZVBhcmFtc1snY2FyZF9jYXJkVHlwZSddID0gcGF5bWVudERldGFpbHMuY2FyZFR5cGUuY29kZTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snY2FyZF9hY2NvdW50TnVtYmVyJ10gPVxuICAgICAgZnJvbVBheW1lbnRQcm92aWRlclttYXBwaW5nTGFiZWxzWydoeWJyaXNfc29wX2NhcmRfbnVtYmVyJ11dO1xuICAgIHNvcFJlc3BvbnNlUGFyYW1zWydjYXJkX2V4cGlyYXRpb25Nb250aCddID0gcGF5bWVudERldGFpbHMuZXhwaXJ5TW9udGg7XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2NhcmRfZXhwaXJhdGlvblllYXInXSA9IHBheW1lbnREZXRhaWxzLmV4cGlyeVllYXI7XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2NhcmRfbmFtZU9uQ2FyZCddID0gcGF5bWVudERldGFpbHMuYWNjb3VudEhvbGRlck5hbWU7XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2RlZmF1bHRQYXltZW50J10gPSBwYXltZW50RGV0YWlscy5kZWZhdWx0UGF5bWVudDtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snc2F2ZVBheW1lbnRJbmZvJ10gPSB0cnVlO1xuXG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ3JlYXNvbkNvZGUnXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19zb3BfcmVhc29uX2NvZGUnXV07XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ3BheVN1YnNjcmlwdGlvbkNyZWF0ZVJlcGx5X3N1YnNjcmlwdGlvbklEJ10gPVxuICAgICAgZnJvbVBheW1lbnRQcm92aWRlclttYXBwaW5nTGFiZWxzWydoeWJyaXNfc29wX3N1YnNjcmlwdGlvbklEJ11dO1xuXG4gICAgaWYgKG1hcHBpbmdMYWJlbHNbJ2h5YnJpc19zb3BfdXNlc19wdWJsaWNfc2lnbmF0dXJlJ10gPT09ICd0cnVlJykge1xuICAgICAgc29wUmVzcG9uc2VQYXJhbXNbXG4gICAgICAgICdwYXlTdWJzY3JpcHRpb25DcmVhdGVSZXBseV9zdWJzY3JpcHRpb25JRFB1YmxpY1NpZ25hdHVyZSdcbiAgICAgIF0gPSBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19zb3BfcHVibGljX3NpZ25hdHVyZSddXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc29wUmVzcG9uc2VQYXJhbXM7XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFtc0ZvclBheW1lbnRQcm92aWRlcihcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMsXG4gICAgcGFyYW1ldGVyczogeyBrZXk7IHZhbHVlIH1bXSxcbiAgICBtYXBwaW5nTGFiZWxzOiBhbnlcbiAgKSB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb252ZXJ0VG9NYXAocGFyYW1ldGVycyk7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19hY2NvdW50X2hvbGRlcl9uYW1lJ11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmFjY291bnRIb2xkZXJOYW1lO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF90eXBlJ11dID0gcGF5bWVudERldGFpbHMuY2FyZFR5cGUuY29kZTtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfbnVtYmVyJ11dID0gcGF5bWVudERldGFpbHMuY2FyZE51bWJlcjtcbiAgICBpZiAobWFwcGluZ0xhYmVsc1snaHlicmlzX2NvbWJpbmVkX2V4cGlyeV9kYXRlJ10gPT09ICd0cnVlJykge1xuICAgICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX2V4cGlyeV9kYXRlJ11dID1cbiAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5TW9udGggK1xuICAgICAgICBtYXBwaW5nTGFiZWxzWydoeWJyaXNfc2VwYXJhdG9yX2V4cGlyeV9kYXRlJ10gK1xuICAgICAgICBwYXltZW50RGV0YWlscy5leHBpcnlZZWFyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfZXhwaXJhdGlvbl9tb250aCddXSA9XG4gICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeU1vbnRoO1xuICAgICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX2V4cGlyYXRpb25feWVhciddXSA9XG4gICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeVllYXI7XG4gICAgfVxuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF9jdm4nXV0gPSBwYXltZW50RGV0YWlscy5jdm47XG5cbiAgICAvLyBiaWxsaW5nIGFkZHJlc3NcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19jb3VudHJ5J11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLmNvdW50cnkuaXNvY29kZTtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19maXJzdG5hbWUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MuZmlyc3ROYW1lO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2xhc3RuYW1lJ11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLmxhc3ROYW1lO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX3N0cmVldDEnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MubGluZTEgK1xuICAgICAgJyAnICtcbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLmxpbmUyO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2NpdHknXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MudG93bjtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19wb3N0YWxjb2RlJ11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLnBvc3RhbENvZGU7XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFBheW1lbnREZXRhaWxzRnJvbUh0bWwoaHRtbDogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBkb21kb2MgPSB0aGlzLmRvbXBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQveG1sJyk7XG4gICAgY29uc3QgcmVzcG9uc2VGb3JtID0gZG9tZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF07XG4gICAgY29uc3QgaW5wdXRzID0gcmVzcG9uc2VGb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xuXG4gICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGlucHV0c1tpXTsgaSsrKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGlucHV0c1tpXTtcbiAgICAgIGlmIChcbiAgICAgICAgaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJykgIT09ICd7fScgJiZcbiAgICAgICAgaW5wdXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpICE9PSAnJ1xuICAgICAgKSB7XG4gICAgICAgIHZhbHVlc1tpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0gPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVqZWN0ZWQgZm9yIHNvbWUgcmVhc29uXG4gICAgaWYgKHZhbHVlc1snZGVjaXNpb24nXSAhPT0gJ0FDQ0VQVCcpIHtcbiAgICAgIGNvbnN0IHJlYXNvbiA9IHsgaGFzRXJyb3I6IHRydWUgfTtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdyZWFzb25Db2RlJyB8fCBuYW1lLnN0YXJ0c1dpdGgoJ0ludmFsaWRGaWVsZCcpKSB7XG4gICAgICAgICAgcmVhc29uW25hbWVdID0gdmFsdWVzW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZWFzb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRvTWFwKHBhcmFtTGlzdDogeyBrZXk7IHZhbHVlIH1bXSkge1xuICAgIHJldHVybiBwYXJhbUxpc3QucmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwgaXRlbSkge1xuICAgICAgY29uc3Qga2V5ID0gaXRlbS5rZXk7XG4gICAgICByZXN1bHRba2V5XSA9IGl0ZW0udmFsdWU7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcbiAgfVxufVxuIl19