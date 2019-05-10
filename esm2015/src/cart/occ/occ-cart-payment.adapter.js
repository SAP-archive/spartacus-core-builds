/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { CustomEncoder } from './custom.encoder';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { CART_PAYMENT_DETAILS_NORMALIZER, CART_PAYMENT_DETAILS_SERIALIZER, } from '../connectors/payment/converters';
export class OccCartPaymentAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        if (typeof DOMParser !== 'undefined') {
            this.domparser = new DOMParser();
        }
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    getCartEndpoint(userId) {
        /** @type {?} */
        const cartEndpoint = 'users/' + userId + '/carts/';
        return this.occEndpoints.getEndpoint(cartEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetails
     * @return {?}
     */
    create(userId, cartId, paymentDetails) {
        paymentDetails = this.converter.convert(paymentDetails, CART_PAYMENT_DETAILS_SERIALIZER);
        return this.getProviderSubInfo(userId, cartId).pipe(map(data => {
            /** @type {?} */
            const labelsMap = this.convertToMap(data.mappingLabels.entry);
            return {
                url: data.postUrl,
                parameters: this.getParamsForPaymentProvider(paymentDetails, data.parameters.entry, labelsMap),
                mappingLabels: labelsMap,
            };
        }), mergeMap(sub => {
            // create a subscription directly with payment provider
            return this.createSubWithProvider(sub.url, sub.parameters).pipe(map(response => this.extractPaymentDetailsFromHtml(response)), mergeMap(fromPaymentProvider => {
                if (!fromPaymentProvider['hasError']) {
                    // consume response from payment provider and creates payment details
                    return this.createDetailsWithParameters(userId, cartId, this.getPaymentSopResponseParams(paymentDetails, fromPaymentProvider, sub.mappingLabels)).pipe(this.converter.pipeable(CART_PAYMENT_DETAILS_NORMALIZER));
                }
                else {
                    return throwError(fromPaymentProvider);
                }
            }));
        }));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    set(userId, cartId, paymentDetailsId) {
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/paymentdetails', {}, {
            params: { paymentDetailsId: paymentDetailsId },
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getProviderSubInfo(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) +
            cartId +
            '/payment/sop/request?responseUrl=sampleUrl')
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @private
     * @param {?} postUrl
     * @param {?} parameters
     * @return {?}
     */
    createSubWithProvider(postUrl, parameters) {
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'text/html',
        });
        /** @type {?} */
        let httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach(key => {
            httpParams = httpParams.append(key, parameters[key]);
        });
        return this.http.post(postUrl, httpParams, {
            headers,
            responseType: 'text',
        });
    }
    /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @param {?} parameters
     * @return {?}
     */
    createDetailsWithParameters(userId, cartId, parameters) {
        /** @type {?} */
        let httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach(key => {
            httpParams = httpParams.append(key, parameters[key]);
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/payment/sop/response', httpParams, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @private
     * @param {?} paymentDetails
     * @param {?} fromPaymentProvider
     * @param {?} mappingLabels
     * @return {?}
     */
    getPaymentSopResponseParams(paymentDetails, fromPaymentProvider, mappingLabels) {
        /** @type {?} */
        const sopResponseParams = {};
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
    }
    /**
     * @private
     * @param {?} paymentDetails
     * @param {?} parameters
     * @param {?} mappingLabels
     * @return {?}
     */
    getParamsForPaymentProvider(paymentDetails, parameters, mappingLabels) {
        /** @type {?} */
        const params = this.convertToMap(parameters);
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
    }
    /**
     * @private
     * @param {?} html
     * @return {?}
     */
    extractPaymentDetailsFromHtml(html) {
        /** @type {?} */
        const domdoc = this.domparser.parseFromString(html, 'text/xml');
        /** @type {?} */
        const responseForm = domdoc.getElementsByTagName('form')[0];
        /** @type {?} */
        const inputs = responseForm.getElementsByTagName('input');
        /** @type {?} */
        const values = {};
        for (let i = 0; inputs[i]; i++) {
            /** @type {?} */
            const input = inputs[i];
            if (input.getAttribute('name') !== '{}' &&
                input.getAttribute('value') !== '') {
                values[input.getAttribute('name')] = input.getAttribute('value');
            }
        }
        // rejected for some reason
        if (values['decision'] !== 'ACCEPT') {
            /** @type {?} */
            const reason = { hasError: true };
            Object.keys(values).forEach(name => {
                if (name === 'reasonCode' || name.startsWith('InvalidField')) {
                    reason[name] = values[name];
                }
            });
            return reason;
        }
        return values;
    }
    /**
     * @private
     * @param {?} paramList
     * @return {?}
     */
    convertToMap(paramList) {
        return paramList.reduce(function (result, item) {
            /** @type {?} */
            const key = item.key;
            result[key] = item.value;
            return result;
        }, {});
    }
}
OccCartPaymentAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCartPaymentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccCartPaymentAdapter.prototype.domparser;
    /**
     * @type {?}
     * @protected
     */
    OccCartPaymentAdapter.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccCartPaymentAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCartPaymentAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtcGF5bWVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvb2NjL29jYy1jYXJ0LXBheW1lbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsK0JBQStCLEVBQy9CLCtCQUErQixHQUNoQyxNQUFNLGtDQUFrQyxDQUFDO0FBSTFDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUNoQyxZQUNZLElBQWdCLEVBQ2xCLFlBQWlDLEVBQy9CLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRXJDLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7OztJQUlTLGVBQWUsQ0FBQyxNQUFjOztjQUNoQyxZQUFZLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxTQUFTO1FBQ2xELE9BQU8sSUFBSSxD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VUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUM1RCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxTQUEyQjtRQUM5QyxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBUyxNQUFNLEVBQUUsSUFBSTs7a0JBQ3JDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztZQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDOzs7WUF6UUYsVUFBVTs7OztZQVhGLFVBQVU7WUFFVixtQkFBbUI7WUFFbkIsZ0JBQWdCOzs7Ozs7O0lBbUJ2QiwwQ0FBNkI7Ozs7O0lBVDNCLHFDQUEwQjs7Ozs7SUFDMUIsNkNBQXlDOzs7OztJQUN6QywwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21FbmNvZGVyIH0gZnJvbSAnLi9jdXN0b20uZW5jb2Rlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0UGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL3BheW1lbnQvY2FydC1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ0FSVF9QQVlNRU5UX0RFVEFJTFNfTk9STUFMSVpFUixcbiAgQ0FSVF9QQVlNRU5UX0RFVEFJTFNfU0VSSUFMSVpFUixcbn0gZnJvbSAnLi4vY29ubmVjdG9ycy9wYXltZW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0NhcnRQYXltZW50QWRhcHRlciBpbXBsZW1lbnRzIENhcnRQYXltZW50QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBET01QYXJzZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRvbXBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRvbXBhcnNlcjogRE9NUGFyc2VyO1xuXG4gIHByb3RlY3RlZCBnZXRDYXJ0RW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNhcnRFbmRwb2ludCA9ICd1c2Vycy8nICsgdXNlcklkICsgJy9jYXJ0cy8nO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChjYXJ0RW5kcG9pbnQpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHNcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIHBheW1lbnREZXRhaWxzID0gdGhpcy5jb252ZXJ0ZXIuY29udmVydChcbiAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgQ0FSVF9QQVlNRU5UX0RFVEFJTFNfU0VSSUFMSVpFUlxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvdmlkZXJTdWJJbmZvKHVzZXJJZCwgY2FydElkKS5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbHNNYXAgPSB0aGlzLmNvbnZlcnRUb01hcChkYXRhLm1hcHBpbmdMYWJlbHMuZW50cnkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVybDogZGF0YS5wb3N0VXJsLFxuICAgICAgICAgIHBhcmFtZXRlcnM6IHRoaXMuZ2V0UGFyYW1zRm9yUGF5bWVudFByb3ZpZGVyKFxuICAgICAgICAgICAgcGF5bWVudERldGFpbHMsXG4gICAgICAgICAgICBkYXRhLnBhcmFtZXRlcnMuZW50cnksXG4gICAgICAgICAgICBsYWJlbHNNYXBcbiAgICAgICAgICApLFxuICAgICAgICAgIG1hcHBpbmdMYWJlbHM6IGxhYmVsc01hcCxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgbWVyZ2VNYXAoc3ViID0+IHtcbiAgICAgICAgLy8gY3JlYXRlIGEgc3Vic2NyaXB0aW9uIGRpcmVjdGx5IHdpdGggcGF5bWVudCBwcm92aWRlclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTdWJXaXRoUHJvdmlkZXIoc3ViLnVybCwgc3ViLnBhcmFtZXRlcnMpLnBpcGUoXG4gICAgICAgICAgbWFwKHJlc3BvbnNlID0+IHRoaXMuZXh0cmFjdFBheW1lbnREZXRhaWxzRnJvbUh0bWwocmVzcG9uc2UpKSxcbiAgICAgICAgICBtZXJnZU1hcChmcm9tUGF5bWVudFByb3ZpZGVyID0+IHtcbiAgICAgICAgICAgIGlmICghZnJvbVBheW1lbnRQcm92aWRlclsnaGFzRXJyb3InXSkge1xuICAgICAgICAgICAgICAvLyBjb25zdW1lIHJlc3BvbnNlIGZyb20gcGF5bWVudCBwcm92aWRlciBhbmQgY3JlYXRlcyBwYXltZW50IGRldGFpbHNcblxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVEZXRhaWxzV2l0aFBhcmFtZXRlcnMoXG4gICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBheW1lbnRTb3BSZXNwb25zZVBhcmFtcyhcbiAgICAgICAgICAgICAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgZnJvbVBheW1lbnRQcm92aWRlcixcbiAgICAgICAgICAgICAgICAgIHN1Yi5tYXBwaW5nTGFiZWxzXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ0FSVF9QQVlNRU5UX0RFVEFJTFNfTk9STUFMSVpFUikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZnJvbVBheW1lbnRQcm92aWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcGF5bWVudERldGFpbHNJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnB1dChcbiAgICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvcGF5bWVudGRldGFpbHMnLFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogeyBwYXltZW50RGV0YWlsc0lkOiBwYXltZW50RGV0YWlsc0lkIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFByb3ZpZGVyU3ViSW5mbyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoXG4gICAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgK1xuICAgICAgICAgIGNhcnRJZCArXG4gICAgICAgICAgJy9wYXltZW50L3NvcC9yZXF1ZXN0P3Jlc3BvbnNlVXJsPXNhbXBsZVVybCdcbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTdWJXaXRoUHJvdmlkZXIoXG4gICAgcG9zdFVybDogc3RyaW5nLFxuICAgIHBhcmFtZXRlcnM6IGFueVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgQWNjZXB0OiAndGV4dC9odG1sJyxcbiAgICB9KTtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZW5jb2RlcjogbmV3IEN1c3RvbUVuY29kZXIoKSB9KTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5hcHBlbmQoa2V5LCBwYXJhbWV0ZXJzW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHBvc3RVcmwsIGh0dHBQYXJhbXMsIHtcbiAgICAgIGhlYWRlcnMsXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVEZXRhaWxzV2l0aFBhcmFtZXRlcnMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55XG4gICk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+IHtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZW5jb2RlcjogbmV3IEN1c3RvbUVuY29kZXIoKSB9KTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5hcHBlbmQoa2V5LCBwYXJhbWV0ZXJzW2tleV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxQYXltZW50RGV0YWlscz4oXG4gICAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL3BheW1lbnQvc29wL3Jlc3BvbnNlJyxcbiAgICAgICAgaHR0cFBhcmFtcyxcbiAgICAgICAgeyBoZWFkZXJzIH1cbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBheW1lbnRTb3BSZXNwb25zZVBhcmFtcyhcbiAgICBwYXltZW50RGV0YWlsczogYW55LFxuICAgIGZyb21QYXltZW50UHJvdmlkZXI6IGFueSxcbiAgICBtYXBwaW5nTGFiZWxzOiBhbnlcbiAgKSB7XG4gICAgY29uc3Qgc29wUmVzcG9uc2VQYXJhbXMgPSB7fTtcblxuICAgIHNvcFJlc3BvbnNlUGFyYW1zWydkZWNpc2lvbiddID1cbiAgICAgIGZyb21QYXltZW50UHJvdmlkZXJbbWFwcGluZ0xhYmVsc1snaHlicmlzX3NvcF9kZWNpc2lvbiddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snYW1vdW50J10gPVxuICAgICAgZnJvbVBheW1lbnRQcm92aWRlclttYXBwaW5nTGFiZWxzWydoeWJyaXNfc29wX2Ftb3VudCddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snY3VycmVuY3knXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19zb3BfY3VycmVuY3knXV07XG5cbiAgICBzb3BSZXNwb25zZVBhcmFtc1snYmlsbFRvX2NvdW50cnknXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fY291bnRyeSddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snYmlsbFRvX2ZpcnN0TmFtZSddID1cbiAgICAgIGZyb21QYXltZW50UHJvdmlkZXJbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19maXJzdG5hbWUnXV07XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2JpbGxUb19sYXN0TmFtZSddID1cbiAgICAgIGZyb21QYXltZW50UHJvdmlkZXJbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19sYXN0bmFtZSddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snYmlsbFRvX3N0cmVldDEnXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fc3RyZWV0MSddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snYmlsbFRvX2NpdHknXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fY2l0eSddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snYmlsbFRvX3Bvc3RhbENvZGUnXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fcG9zdGFsY29kZSddXTtcblxuICAgIHNvcFJlc3BvbnNlUGFyYW1zWydjYXJkX2NhcmRUeXBlJ10gPSBwYXltZW50RGV0YWlscy5jYXJkVHlwZS5jb2RlO1xuICAgIHNvcFJlc3BvbnNlUGFyYW1zWydjYXJkX2FjY291bnROdW1iZXInXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19zb3BfY2FyZF9udW1iZXInXV07XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2NhcmRfZXhwaXJhdGlvbk1vbnRoJ10gPSBwYXltZW50RGV0YWlscy5leHBpcnlNb250aDtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snY2FyZF9leHBpcmF0aW9uWWVhciddID0gcGF5bWVudERldGFpbHMuZXhwaXJ5WWVhcjtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snY2FyZF9uYW1lT25DYXJkJ10gPSBwYXltZW50RGV0YWlscy5hY2NvdW50SG9sZGVyTmFtZTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snZGVmYXVsdFBheW1lbnQnXSA9IHBheW1lbnREZXRhaWxzLmRlZmF1bHRQYXltZW50O1xuICAgIHNvcFJlc3BvbnNlUGFyYW1zWydzYXZlUGF5bWVudEluZm8nXSA9IHRydWU7XG5cbiAgICBzb3BSZXNwb25zZVBhcmFtc1sncmVhc29uQ29kZSddID1cbiAgICAgIGZyb21QYXltZW50UHJvdmlkZXJbbWFwcGluZ0xhYmVsc1snaHlicmlzX3NvcF9yZWFzb25fY29kZSddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1sncGF5U3Vic2NyaXB0aW9uQ3JlYXRlUmVwbHlfc3Vic2NyaXB0aW9uSUQnXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19zb3Bfc3Vic2NyaXB0aW9uSUQnXV07XG5cbiAgICBpZiAobWFwcGluZ0xhYmVsc1snaHlicmlzX3NvcF91c2VzX3B1YmxpY19zaWduYXR1cmUnXSA9PT0gJ3RydWUnKSB7XG4gICAgICBzb3BSZXNwb25zZVBhcmFtc1tcbiAgICAgICAgJ3BheVN1YnNjcmlwdGlvbkNyZWF0ZVJlcGx5X3N1YnNjcmlwdGlvbklEUHVibGljU2lnbmF0dXJlJ1xuICAgICAgXSA9IGZyb21QYXltZW50UHJvdmlkZXJbbWFwcGluZ0xhYmVsc1snaHlicmlzX3NvcF9wdWJsaWNfc2lnbmF0dXJlJ11dO1xuICAgIH1cblxuICAgIHJldHVybiBzb3BSZXNwb25zZVBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFyYW1zRm9yUGF5bWVudFByb3ZpZGVyKFxuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyxcbiAgICBwYXJhbWV0ZXJzOiB7IGtleTsgdmFsdWUgfVtdLFxuICAgIG1hcHBpbmdMYWJlbHM6IGFueVxuICApIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmNvbnZlcnRUb01hcChwYXJhbWV0ZXJzKTtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2FjY291bnRfaG9sZGVyX25hbWUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYWNjb3VudEhvbGRlck5hbWU7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX3R5cGUnXV0gPSBwYXltZW50RGV0YWlscy5jYXJkVHlwZS5jb2RlO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF9udW1iZXInXV0gPSBwYXltZW50RGV0YWlscy5jYXJkTnVtYmVyO1xuICAgIGlmIChtYXBwaW5nTGFiZWxzWydoeWJyaXNfY29tYmluZWRfZXhwaXJ5X2RhdGUnXSA9PT0gJ3RydWUnKSB7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfZXhwaXJ5X2RhdGUnXV0gPVxuICAgICAgICBwYXltZW50RGV0YWlscy5leHBpcnlNb250aCArXG4gICAgICAgIG1hcHBpbmdMYWJlbHNbJ2h5YnJpc19zZXBhcmF0b3JfZXhwaXJ5X2RhdGUnXSArXG4gICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeVllYXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF9leHBpcmF0aW9uX21vbnRoJ11dID1cbiAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5TW9udGg7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfZXhwaXJhdGlvbl95ZWFyJ11dID1cbiAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5WWVhcjtcbiAgICB9XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX2N2biddXSA9IHBheW1lbnREZXRhaWxzLmN2bjtcblxuICAgIC8vIGJpbGxpbmcgYWRkcmVzc1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2NvdW50cnknXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MuY291bnRyeS5pc29jb2RlO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2ZpcnN0bmFtZSddXSA9XG4gICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy5maXJzdE5hbWU7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fbGFzdG5hbWUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MubGFzdE5hbWU7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fc3RyZWV0MSddXSA9XG4gICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy5saW5lMSArXG4gICAgICAnICcgK1xuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MubGluZTI7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fY2l0eSddXSA9XG4gICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy50b3duO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX3Bvc3RhbGNvZGUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MucG9zdGFsQ29kZTtcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0UGF5bWVudERldGFpbHNGcm9tSHRtbChodG1sOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGRvbWRvYyA9IHRoaXMuZG9tcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC94bWwnKTtcbiAgICBjb25zdCByZXNwb25zZUZvcm0gPSBkb21kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcbiAgICBjb25zdCBpbnB1dHMgPSByZXNwb25zZUZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaW5wdXRzW2ldOyBpKyspIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gaW5wdXRzW2ldO1xuICAgICAgaWYgKFxuICAgICAgICBpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSAhPT0gJ3t9JyAmJlxuICAgICAgICBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgIT09ICcnXG4gICAgICApIHtcbiAgICAgICAgdmFsdWVzW2lucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpXSA9IGlucHV0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZWplY3RlZCBmb3Igc29tZSByZWFzb25cbiAgICBpZiAodmFsdWVzWydkZWNpc2lvbiddICE9PSAnQUNDRVBUJykge1xuICAgICAgY29uc3QgcmVhc29uID0geyBoYXNFcnJvcjogdHJ1ZSB9O1xuICAgICAgT2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3JlYXNvbkNvZGUnIHx8IG5hbWUuc3RhcnRzV2l0aCgnSW52YWxpZEZpZWxkJykpIHtcbiAgICAgICAgICByZWFzb25bbmFtZV0gPSB2YWx1ZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlYXNvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9NYXAocGFyYW1MaXN0OiB7IGtleTsgdmFsdWUgfVtdKSB7XG4gICAgcmV0dXJuIHBhcmFtTGlzdC5yZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBpdGVtKSB7XG4gICAgICBjb25zdCBrZXkgPSBpdGVtLmtleTtcbiAgICAgIHJlc3VsdFtrZXldID0gaXRlbS52YWx1ZTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuICB9XG59XG4iXX0=