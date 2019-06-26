/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { CARD_TYPE_NORMALIZER, PAYMENT_DETAILS_NORMALIZER, PAYMENT_DETAILS_SERIALIZER, } from '../../../checkout/connectors/payment/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { CustomEncoder } from '../cart/custom.encoder';
/** @type {?} */
var ENDPOINT_CARD_TYPES = 'cardtypes';
var OccCheckoutPaymentAdapter = /** @class */ (function () {
    function OccCheckoutPaymentAdapter(http, occEndpoints, converter) {
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
    OccCheckoutPaymentAdapter.prototype.getCartEndpoint = /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var cartEndpoint = 'users/' + userId + '/carts/';
        return this.occEndpoints.getEndpoint(cartEndpoint);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetails
     * @return {?}
     */
    OccCheckoutPaymentAdapter.prototype.create = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetails
     * @return {?}
     */
    function (userId, cartId, paymentDetails) {
        var _this = this;
        paymentDetails = this.converter.convert(paymentDetails, PAYMENT_DETAILS_SERIALIZER);
        return this.getProviderSubInfo(userId, cartId).pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var labelsMap = _this.convertToMap(data.mappingLabels.entry);
            return {
                url: data.postUrl,
                parameters: _this.getParamsForPaymentProvider(paymentDetails, data.parameters.entry, labelsMap),
                mappingLabels: labelsMap,
            };
        })), mergeMap((/**
         * @param {?} sub
         * @return {?}
         */
        function (sub) {
            // create a subscription directly with payment provider
            return _this.createSubWithProvider(sub.url, sub.parameters).pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return _this.extractPaymentDetailsFromHtml(response); })), mergeMap((/**
             * @param {?} fromPaymentProvider
             * @return {?}
             */
            function (fromPaymentProvider) {
                fromPaymentProvider['defaultPayment'] =
                    paymentDetails.defaultPayment;
                fromPaymentProvider['savePaymentInfo'] = true;
                return _this.createDetailsWithParameters(userId, cartId, fromPaymentProvider).pipe(_this.converter.pipeable(PAYMENT_DETAILS_NORMALIZER));
            })));
        })));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    OccCheckoutPaymentAdapter.prototype.set = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    function (userId, cartId, paymentDetailsId) {
        return this.http.put(this.getCartEndpoint(userId) + cartId + '/paymentdetails', {}, {
            params: { paymentDetailsId: paymentDetailsId },
        });
    };
    /**
     * @return {?}
     */
    OccCheckoutPaymentAdapter.prototype.loadCardTypes = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(ENDPOINT_CARD_TYPES))
            .pipe(map((/**
         * @param {?} cardTypeList
         * @return {?}
         */
        function (cardTypeList) { return cardTypeList.cardTypes; })), this.converter.pipeableMany(CARD_TYPE_NORMALIZER));
    };
    /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCheckoutPaymentAdapter.prototype.getProviderSubInfo = /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.http.get(this.getCartEndpoint(userId) +
            cartId +
            '/payment/sop/request?responseUrl=sampleUrl');
    };
    /**
     * @protected
     * @param {?} postUrl
     * @param {?} parameters
     * @return {?}
     */
    OccCheckoutPaymentAdapter.prototype.createSubWithProvider = /**
     * @protected
     * @param {?} postUrl
     * @param {?} parameters
     * @return {?}
     */
    function (postUrl, parameters) {
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'text/html',
        });
        /** @type {?} */
        var httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            httpParams = httpParams.append(key, parameters[key]);
        }));
        return this.http.post(postUrl, httpParams, {
            headers: headers,
            responseType: 'text',
        });
    };
    /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @param {?} parameters
     * @return {?}
     */
    OccCheckoutPaymentAdapter.prototype.createDetailsWithParameters = /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @param {?} parameters
     * @return {?}
     */
    function (userId, cartId, parameters) {
        /** @type {?} */
        var httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            httpParams = httpParams.append(key, parameters[key]);
        }));
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.post(this.getCartEndpoint(userId) + cartId + '/payment/sop/response', httpParams, { headers: headers });
    };
    /**
     * @private
     * @param {?} paymentDetails
     * @param {?} parameters
     * @param {?} mappingLabels
     * @return {?}
     */
    OccCheckoutPaymentAdapter.prototype.getParamsForPaymentProvider = /**
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
        if (paymentDetails.billingAddress.region) {
            params[mappingLabels['hybris_billTo_region']] =
                paymentDetails.billingAddress.region.isocodeShort;
        }
        params[mappingLabels['hybris_billTo_postalcode']] =
            paymentDetails.billingAddress.postalCode;
        return params;
    };
    /**
     * @private
     * @param {?} html
     * @return {?}
     */
    OccCheckoutPaymentAdapter.prototype.extractPaymentDetailsFromHtml = /**
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
        return values;
    };
    /**
     * @private
     * @param {?} paramList
     * @return {?}
     */
    OccCheckoutPaymentAdapter.prototype.convertToMap = /**
     * @private
     * @param {?} paramList
     * @return {?}
     */
    function (paramList) {
        return paramList.reduce((/**
         * @param {?} result
         * @param {?} item
         * @return {?}
         */
        function (result, item) {
            /** @type {?} */
            var key = item.key;
            result[key] = item.value;
            return result;
        }), {});
    };
    OccCheckoutPaymentAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCheckoutPaymentAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCheckoutPaymentAdapter;
}());
export { OccCheckoutPaymentAdapter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccCheckoutPaymentAdapter.prototype.domparser;
    /**
     * @type {?}
     * @protected
     */
    OccCheckoutPaymentAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccCheckoutPaymentAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCheckoutPaymentAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LXBheW1lbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2hlY2tvdXQvb2NjLWNoZWNrb3V0LXBheW1lbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLDBCQUEwQixHQUMzQixNQUFNLGlEQUFpRCxDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFFakQsbUJBQW1CLEdBQUcsV0FBVztBQUV2QztJQUVFLG1DQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRXJDLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7OztJQUlTLG1EQUFlOzs7OztJQUF6QixVQUEwQixNQUFjOztZQUNoQyxZQUFZLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxTQUFTO1FBQ2xELE9BQU8sSUFBSSxDQUFD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QUFDLENBQUMsQ0FBQztZQUN2QixJQUNFLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSTtnQkFDbkMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQ2xDO2dCQUNBLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNsRTtTQUNGO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sZ0RBQVk7Ozs7O0lBQXBCLFVBQXFCLFNBQTJCO1FBQzlDLE9BQU8sU0FBUyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBUyxNQUFNLEVBQUUsSUFBSTs7Z0JBQ3JDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztZQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDOztnQkE1TUYsVUFBVTs7OztnQkFsQkYsVUFBVTtnQkFhVixtQkFBbUI7Z0JBRm5CLGdCQUFnQjs7SUFvTnpCLGdDQUFDO0NBQUEsQUE3TUQsSUE2TUM7U0E1TVkseUJBQXlCOzs7Ozs7SUFXcEMsOENBQTZCOzs7OztJQVQzQix5Q0FBMEI7Ozs7O0lBQzFCLGlEQUEyQzs7Ozs7SUFDM0MsOENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQYXltZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC9jaGVja291dC1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHtcbiAgQ0FSRF9UWVBFX05PUk1BTElaRVIsXG4gIFBBWU1FTlRfREVUQUlMU19OT1JNQUxJWkVSLFxuICBQQVlNRU5UX0RFVEFJTFNfU0VSSUFMSVpFUixcbn0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9wYXltZW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ2FyZFR5cGUsIFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tRW5jb2RlciB9IGZyb20gJy4uL2NhcnQvY3VzdG9tLmVuY29kZXInO1xuXG5jb25zdCBFTkRQT0lOVF9DQVJEX1RZUEVTID0gJ2NhcmR0eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDaGVja291dFBheW1lbnRBZGFwdGVyIGltcGxlbWVudHMgQ2hlY2tvdXRQYXltZW50QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHtcbiAgICBpZiAodHlwZW9mIERPTVBhcnNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZG9tcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZG9tcGFyc2VyOiBET01QYXJzZXI7XG5cbiAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FydEVuZHBvaW50ID0gJ3VzZXJzLycgKyB1c2VySWQgKyAnL2NhcnRzLyc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGNhcnRFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlsc1xuICApOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgcGF5bWVudERldGFpbHMgPSB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KFxuICAgICAgcGF5bWVudERldGFpbHMsXG4gICAgICBQQVlNRU5UX0RFVEFJTFNfU0VSSUFMSVpFUlxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvdmlkZXJTdWJJbmZvKHVzZXJJZCwgY2FydElkKS5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbHNNYXAgPSB0aGlzLmNvbnZlcnRUb01hcChkYXRhLm1hcHBpbmdMYWJlbHMuZW50cnkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVybDogZGF0YS5wb3N0VXJsLFxuICAgICAgICAgIHBhcmFtZXRlcnM6IHRoaXMuZ2V0UGFyYW1zRm9yUGF5bWVudFByb3ZpZGVyKFxuICAgICAgICAgICAgcGF5bWVudERldGFpbHMsXG4gICAgICAgICAgICBkYXRhLnBhcmFtZXRlcnMuZW50cnksXG4gICAgICAgICAgICBsYWJlbHNNYXBcbiAgICAgICAgICApLFxuICAgICAgICAgIG1hcHBpbmdMYWJlbHM6IGxhYmVsc01hcCxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgbWVyZ2VNYXAoc3ViID0+IHtcbiAgICAgICAgLy8gY3JlYXRlIGEgc3Vic2NyaXB0aW9uIGRpcmVjdGx5IHdpdGggcGF5bWVudCBwcm92aWRlclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTdWJXaXRoUHJvdmlkZXIoc3ViLnVybCwgc3ViLnBhcmFtZXRlcnMpLnBpcGUoXG4gICAgICAgICAgbWFwKHJlc3BvbnNlID0+IHRoaXMuZXh0cmFjdFBheW1lbnREZXRhaWxzRnJvbUh0bWwocmVzcG9uc2UpKSxcbiAgICAgICAgICBtZXJnZU1hcChmcm9tUGF5bWVudFByb3ZpZGVyID0+IHtcbiAgICAgICAgICAgIGZyb21QYXltZW50UHJvdmlkZXJbJ2RlZmF1bHRQYXltZW50J10gPVxuICAgICAgICAgICAgICBwYXltZW50RGV0YWlscy5kZWZhdWx0UGF5bWVudDtcbiAgICAgICAgICAgIGZyb21QYXltZW50UHJvdmlkZXJbJ3NhdmVQYXltZW50SW5mbyddID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZURldGFpbHNXaXRoUGFyYW1ldGVycyhcbiAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgICAgIGZyb21QYXltZW50UHJvdmlkZXJcbiAgICAgICAgICAgICkucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShQQVlNRU5UX0RFVEFJTFNfTk9STUFMSVpFUikpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgc2V0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHBheW1lbnREZXRhaWxzSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxuICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvcGF5bWVudGRldGFpbHMnLFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIHBhcmFtczogeyBwYXltZW50RGV0YWlsc0lkOiBwYXltZW50RGV0YWlsc0lkIH0sXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGxvYWRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ2FyZFR5cGVMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChFTkRQT0lOVF9DQVJEX1RZUEVTKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoY2FyZFR5cGVMaXN0ID0+IGNhcmRUeXBlTGlzdC5jYXJkVHlwZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ0FSRF9UWVBFX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFByb3ZpZGVyU3ViSW5mbyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArXG4gICAgICAgIGNhcnRJZCArXG4gICAgICAgICcvcGF5bWVudC9zb3AvcmVxdWVzdD9yZXNwb25zZVVybD1zYW1wbGVVcmwnXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVTdWJXaXRoUHJvdmlkZXIoXG4gICAgcG9zdFVybDogc3RyaW5nLFxuICAgIHBhcmFtZXRlcnM6IGFueVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgQWNjZXB0OiAndGV4dC9odG1sJyxcbiAgICB9KTtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZW5jb2RlcjogbmV3IEN1c3RvbUVuY29kZXIoKSB9KTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5hcHBlbmQoa2V5LCBwYXJhbWV0ZXJzW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHBvc3RVcmwsIGh0dHBQYXJhbXMsIHtcbiAgICAgIGhlYWRlcnMsXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVEZXRhaWxzV2l0aFBhcmFtZXRlcnMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55XG4gICk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+IHtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZW5jb2RlcjogbmV3IEN1c3RvbUVuY29kZXIoKSB9KTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5hcHBlbmQoa2V5LCBwYXJhbWV0ZXJzW2tleV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UGF5bWVudERldGFpbHM+KFxuICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvcGF5bWVudC9zb3AvcmVzcG9uc2UnLFxuICAgICAgaHR0cFBhcmFtcyxcbiAgICAgIHsgaGVhZGVycyB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFyYW1zRm9yUGF5bWVudFByb3ZpZGVyKFxuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyxcbiAgICBwYXJhbWV0ZXJzOiB7IGtleTsgdmFsdWUgfVtdLFxuICAgIG1hcHBpbmdMYWJlbHM6IGFueVxuICApIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmNvbnZlcnRUb01hcChwYXJhbWV0ZXJzKTtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2FjY291bnRfaG9sZGVyX25hbWUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYWNjb3VudEhvbGRlck5hbWU7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX3R5cGUnXV0gPSBwYXltZW50RGV0YWlscy5jYXJkVHlwZS5jb2RlO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF9udW1iZXInXV0gPSBwYXltZW50RGV0YWlscy5jYXJkTnVtYmVyO1xuICAgIGlmIChtYXBwaW5nTGFiZWxzWydoeWJyaXNfY29tYmluZWRfZXhwaXJ5X2RhdGUnXSA9PT0gJ3RydWUnKSB7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfZXhwaXJ5X2RhdGUnXV0gPVxuICAgICAgICBwYXltZW50RGV0YWlscy5leHBpcnlNb250aCArXG4gICAgICAgIG1hcHBpbmdMYWJlbHNbJ2h5YnJpc19zZXBhcmF0b3JfZXhwaXJ5X2RhdGUnXSArXG4gICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeVllYXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF9leHBpcmF0aW9uX21vbnRoJ11dID1cbiAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5TW9udGg7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfZXhwaXJhdGlvbl95ZWFyJ11dID1cbiAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5WWVhcjtcbiAgICB9XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX2N2biddXSA9IHBheW1lbnREZXRhaWxzLmN2bjtcblxuICAgIC8vIGJpbGxpbmcgYWRkcmVzc1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2NvdW50cnknXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MuY291bnRyeS5pc29jb2RlO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2ZpcnN0bmFtZSddXSA9XG4gICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy5maXJzdE5hbWU7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fbGFzdG5hbWUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MubGFzdE5hbWU7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fc3RyZWV0MSddXSA9XG4gICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy5saW5lMSArXG4gICAgICAnICcgK1xuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MubGluZTI7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fY2l0eSddXSA9XG4gICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy50b3duO1xuICAgIGlmIChwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy5yZWdpb24pIHtcbiAgICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX3JlZ2lvbiddXSA9XG4gICAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLnJlZ2lvbi5pc29jb2RlU2hvcnQ7XG4gICAgfVxuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX3Bvc3RhbGNvZGUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MucG9zdGFsQ29kZTtcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0UGF5bWVudERldGFpbHNGcm9tSHRtbChodG1sOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGRvbWRvYyA9IHRoaXMuZG9tcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC94bWwnKTtcbiAgICBjb25zdCByZXNwb25zZUZvcm0gPSBkb21kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcbiAgICBjb25zdCBpbnB1dHMgPSByZXNwb25zZUZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaW5wdXRzW2ldOyBpKyspIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gaW5wdXRzW2ldO1xuICAgICAgaWYgKFxuICAgICAgICBpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSAhPT0gJ3t9JyAmJlxuICAgICAgICBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgIT09ICcnXG4gICAgICApIHtcbiAgICAgICAgdmFsdWVzW2lucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpXSA9IGlucHV0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9NYXAocGFyYW1MaXN0OiB7IGtleTsgdmFsdWUgfVtdKSB7XG4gICAgcmV0dXJuIHBhcmFtTGlzdC5yZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBpdGVtKSB7XG4gICAgICBjb25zdCBrZXkgPSBpdGVtLmtleTtcbiAgICAgIHJlc3VsdFtrZXldID0gaXRlbS52YWx1ZTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuICB9XG59XG4iXX0=