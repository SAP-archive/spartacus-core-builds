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
        params[mappingLabels['hybris_billTo_region']] =
            paymentDetails.billingAddress.region.isocodeShort;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LXBheW1lbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2hlY2tvdXQvb2NjLWNoZWNrb3V0LXBheW1lbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLDBCQUEwQixHQUMzQixNQUFNLGlEQUFpRCxDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFFakQsbUJBQW1CLEdBQUcsV0FBVztBQUV2QztJQUVFLG1DQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRXJDLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7OztJQUlTLG1EQUFlOzs7OztJQUF6QixVQUEwQixNQUFjOztZQUNoQyxZQUFZLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxTQUFTO1FBQ2xELE9BQU8sSUFBSSxDQUFD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QU0sQ0FBQyxLQUFLLElBQUk7Z0JBQ25DLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUNsQztnQkFDQSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEU7U0FDRjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLGdEQUFZOzs7OztJQUFwQixVQUFxQixTQUEyQjtRQUM5QyxPQUFPLFNBQVMsQ0FBQyxNQUFNOzs7OztRQUFDLFVBQVMsTUFBTSxFQUFFLElBQUk7O2dCQUNyQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUc7WUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7Z0JBMU1GLFVBQVU7Ozs7Z0JBbEJGLFVBQVU7Z0JBYVYsbUJBQW1CO2dCQUZuQixnQkFBZ0I7O0lBa056QixnQ0FBQztDQUFBLEFBM01ELElBMk1DO1NBMU1ZLHlCQUF5Qjs7Ozs7O0lBV3BDLDhDQUE2Qjs7Ozs7SUFUM0IseUNBQTBCOzs7OztJQUMxQixpREFBMkM7Ozs7O0lBQzNDLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0UGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL3BheW1lbnQvY2hlY2tvdXQtcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7XG4gIENBUkRfVFlQRV9OT1JNQUxJWkVSLFxuICBQQVlNRU5UX0RFVEFJTFNfTk9STUFMSVpFUixcbiAgUEFZTUVOVF9ERVRBSUxTX1NFUklBTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENhcmRUeXBlLCBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEN1c3RvbUVuY29kZXIgfSBmcm9tICcuLi9jYXJ0L2N1c3RvbS5lbmNvZGVyJztcblxuY29uc3QgRU5EUE9JTlRfQ0FSRF9UWVBFUyA9ICdjYXJkdHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2hlY2tvdXRQYXltZW50QWRhcHRlciBpbXBsZW1lbnRzIENoZWNrb3V0UGF5bWVudEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBET01QYXJzZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRvbXBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRvbXBhcnNlcjogRE9NUGFyc2VyO1xuXG4gIHByb3RlY3RlZCBnZXRDYXJ0RW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNhcnRFbmRwb2ludCA9ICd1c2Vycy8nICsgdXNlcklkICsgJy9jYXJ0cy8nO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChjYXJ0RW5kcG9pbnQpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHNcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIHBheW1lbnREZXRhaWxzID0gdGhpcy5jb252ZXJ0ZXIuY29udmVydChcbiAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgUEFZTUVOVF9ERVRBSUxTX1NFUklBTElaRVJcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmdldFByb3ZpZGVyU3ViSW5mbyh1c2VySWQsIGNhcnRJZCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWxzTWFwID0gdGhpcy5jb252ZXJ0VG9NYXAoZGF0YS5tYXBwaW5nTGFiZWxzLmVudHJ5KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmw6IGRhdGEucG9zdFVybCxcbiAgICAgICAgICBwYXJhbWV0ZXJzOiB0aGlzLmdldFBhcmFtc0ZvclBheW1lbnRQcm92aWRlcihcbiAgICAgICAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgICAgICAgZGF0YS5wYXJhbWV0ZXJzLmVudHJ5LFxuICAgICAgICAgICAgbGFiZWxzTWFwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtYXBwaW5nTGFiZWxzOiBsYWJlbHNNYXAsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIG1lcmdlTWFwKHN1YiA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIHN1YnNjcmlwdGlvbiBkaXJlY3RseSB3aXRoIHBheW1lbnQgcHJvdmlkZXJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU3ViV2l0aFByb3ZpZGVyKHN1Yi51cmwsIHN1Yi5wYXJhbWV0ZXJzKS5waXBlKFxuICAgICAgICAgIG1hcChyZXNwb25zZSA9PiB0aGlzLmV4dHJhY3RQYXltZW50RGV0YWlsc0Zyb21IdG1sKHJlc3BvbnNlKSksXG4gICAgICAgICAgbWVyZ2VNYXAoZnJvbVBheW1lbnRQcm92aWRlciA9PiB7XG4gICAgICAgICAgICBmcm9tUGF5bWVudFByb3ZpZGVyWydkZWZhdWx0UGF5bWVudCddID1cbiAgICAgICAgICAgICAgcGF5bWVudERldGFpbHMuZGVmYXVsdFBheW1lbnQ7XG4gICAgICAgICAgICBmcm9tUGF5bWVudFByb3ZpZGVyWydzYXZlUGF5bWVudEluZm8nXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVEZXRhaWxzV2l0aFBhcmFtZXRlcnMoXG4gICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkLFxuICAgICAgICAgICAgICBmcm9tUGF5bWVudFByb3ZpZGVyXG4gICAgICAgICAgICApLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUEFZTUVOVF9ERVRBSUxTX05PUk1BTElaRVIpKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHNldChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsc0lkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL3BheW1lbnRkZXRhaWxzJyxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBwYXJhbXM6IHsgcGF5bWVudERldGFpbHNJZDogcGF5bWVudERldGFpbHNJZCB9LFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBsb2FkQ2FyZFR5cGVzKCk6IE9ic2VydmFibGU8Q2FyZFR5cGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkNhcmRUeXBlTGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoRU5EUE9JTlRfQ0FSRF9UWVBFUykpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGNhcmRUeXBlTGlzdCA9PiBjYXJkVHlwZUxpc3QuY2FyZFR5cGVzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENBUkRfVFlQRV9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQcm92aWRlclN1YkluZm8oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgK1xuICAgICAgICBjYXJ0SWQgK1xuICAgICAgICAnL3BheW1lbnQvc29wL3JlcXVlc3Q/cmVzcG9uc2VVcmw9c2FtcGxlVXJsJ1xuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlU3ViV2l0aFByb3ZpZGVyKFxuICAgIHBvc3RVcmw6IHN0cmluZyxcbiAgICBwYXJhbWV0ZXJzOiBhbnlcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIEFjY2VwdDogJ3RleHQvaHRtbCcsXG4gICAgfSk7XG4gICAgbGV0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGVuY29kZXI6IG5ldyBDdXN0b21FbmNvZGVyKCkgfSk7XG4gICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuYXBwZW5kKGtleSwgcGFyYW1ldGVyc1trZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChwb3N0VXJsLCBodHRwUGFyYW1zLCB7XG4gICAgICBoZWFkZXJzLFxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlRGV0YWlsc1dpdGhQYXJhbWV0ZXJzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHBhcmFtZXRlcnM6IGFueVxuICApOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgbGV0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGVuY29kZXI6IG5ldyBDdXN0b21FbmNvZGVyKCkgfSk7XG4gICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuYXBwZW5kKGtleSwgcGFyYW1ldGVyc1trZXldKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFBheW1lbnREZXRhaWxzPihcbiAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL3BheW1lbnQvc29wL3Jlc3BvbnNlJyxcbiAgICAgIGh0dHBQYXJhbXMsXG4gICAgICB7IGhlYWRlcnMgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFtc0ZvclBheW1lbnRQcm92aWRlcihcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMsXG4gICAgcGFyYW1ldGVyczogeyBrZXk7IHZhbHVlIH1bXSxcbiAgICBtYXBwaW5nTGFiZWxzOiBhbnlcbiAgKSB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb252ZXJ0VG9NYXAocGFyYW1ldGVycyk7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19hY2NvdW50X2hvbGRlcl9uYW1lJ11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmFjY291bnRIb2xkZXJOYW1lO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF90eXBlJ11dID0gcGF5bWVudERldGFpbHMuY2FyZFR5cGUuY29kZTtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfbnVtYmVyJ11dID0gcGF5bWVudERldGFpbHMuY2FyZE51bWJlcjtcbiAgICBpZiAobWFwcGluZ0xhYmVsc1snaHlicmlzX2NvbWJpbmVkX2V4cGlyeV9kYXRlJ10gPT09ICd0cnVlJykge1xuICAgICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX2V4cGlyeV9kYXRlJ11dID1cbiAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5TW9udGggK1xuICAgICAgICBtYXBwaW5nTGFiZWxzWydoeWJyaXNfc2VwYXJhdG9yX2V4cGlyeV9kYXRlJ10gK1xuICAgICAgICBwYXltZW50RGV0YWlscy5leHBpcnlZZWFyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfZXhwaXJhdGlvbl9tb250aCddXSA9XG4gICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeU1vbnRoO1xuICAgICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX2V4cGlyYXRpb25feWVhciddXSA9XG4gICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeVllYXI7XG4gICAgfVxuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF9jdm4nXV0gPSBwYXltZW50RGV0YWlscy5jdm47XG5cbiAgICAvLyBiaWxsaW5nIGFkZHJlc3NcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19jb3VudHJ5J11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLmNvdW50cnkuaXNvY29kZTtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19maXJzdG5hbWUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MuZmlyc3ROYW1lO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2xhc3RuYW1lJ11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLmxhc3ROYW1lO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX3N0cmVldDEnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MubGluZTEgK1xuICAgICAgJyAnICtcbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLmxpbmUyO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2NpdHknXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MudG93bjtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19yZWdpb24nXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MucmVnaW9uLmlzb2NvZGVTaG9ydDtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19wb3N0YWxjb2RlJ11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLnBvc3RhbENvZGU7XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFBheW1lbnREZXRhaWxzRnJvbUh0bWwoaHRtbDogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBkb21kb2MgPSB0aGlzLmRvbXBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQveG1sJyk7XG4gICAgY29uc3QgcmVzcG9uc2VGb3JtID0gZG9tZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF07XG4gICAgY29uc3QgaW5wdXRzID0gcmVzcG9uc2VGb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xuXG4gICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGlucHV0c1tpXTsgaSsrKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGlucHV0c1tpXTtcbiAgICAgIGlmIChcbiAgICAgICAgaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJykgIT09ICd7fScgJiZcbiAgICAgICAgaW5wdXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpICE9PSAnJ1xuICAgICAgKSB7XG4gICAgICAgIHZhbHVlc1tpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0gPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRvTWFwKHBhcmFtTGlzdDogeyBrZXk7IHZhbHVlIH1bXSkge1xuICAgIHJldHVybiBwYXJhbUxpc3QucmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwgaXRlbSkge1xuICAgICAgY29uc3Qga2V5ID0gaXRlbS5rZXk7XG4gICAgICByZXN1bHRba2V5XSA9IGl0ZW0udmFsdWU7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcbiAgfVxufVxuIl19