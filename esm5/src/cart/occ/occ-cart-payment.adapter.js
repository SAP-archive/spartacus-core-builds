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
import { PAYMENT_DETAILS_NORMALIZER, PAYMENT_DETAILS_SERIALIZER, } from '../connectors/payment/converters';
var OccCartPaymentAdapter = /** @class */ (function () {
    function OccCartPaymentAdapter(http, occEndpoints, converter) {
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
    OccCartPaymentAdapter.prototype.getCartEndpoint = /**
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
    OccCartPaymentAdapter.prototype.create = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetails
     * @return {?}
     */
    function (userId, cartId, paymentDetails) {
        var _this = this;
        paymentDetails = this.converter.convert(paymentDetails, PAYMENT_DETAILS_SERIALIZER);
        return this.getProviderSubInfo(userId, cartId).pipe(map(function (data) {
            /** @type {?} */
            var labelsMap = _this.convertToMap(data.mappingLabels.entry);
            return {
                url: data.postUrl,
                parameters: _this.getParamsForPaymentProvider(paymentDetails, data.parameters.entry, labelsMap),
                mappingLabels: labelsMap,
            };
        }), mergeMap(function (sub) {
            // create a subscription directly with payment provider
            return _this.createSubWithProvider(sub.url, sub.parameters).pipe(map(function (response) { return _this.extractPaymentDetailsFromHtml(response); }), mergeMap(function (fromPaymentProvider) {
                fromPaymentProvider['savePaymentInfo'] = true;
                return _this.createDetailsWithParameters(userId, cartId, fromPaymentProvider).pipe(_this.converter.pipeable(PAYMENT_DETAILS_NORMALIZER));
            }));
        }));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    OccCartPaymentAdapter.prototype.set = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    function (userId, cartId, paymentDetailsId) {
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/paymentdetails', {}, {
            params: { paymentDetailsId: paymentDetailsId },
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCartPaymentAdapter.prototype.getProviderSubInfo = /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) +
            cartId +
            '/payment/sop/request?responseUrl=sampleUrl')
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @private
     * @param {?} postUrl
     * @param {?} parameters
     * @return {?}
     */
    OccCartPaymentAdapter.prototype.createSubWithProvider = /**
     * @private
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
        Object.keys(parameters).forEach(function (key) {
            httpParams = httpParams.append(key, parameters[key]);
        });
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
    OccCartPaymentAdapter.prototype.createDetailsWithParameters = /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @param {?} parameters
     * @return {?}
     */
    function (userId, cartId, parameters) {
        /** @type {?} */
        var httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach(function (key) {
            httpParams = httpParams.append(key, parameters[key]);
        });
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/payment/sop/response', httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @private
     * @param {?} paymentDetails
     * @param {?} parameters
     * @param {?} mappingLabels
     * @return {?}
     */
    OccCartPaymentAdapter.prototype.getParamsForPaymentProvider = /**
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
    OccCartPaymentAdapter.prototype.extractPaymentDetailsFromHtml = /**
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
    OccCartPaymentAdapter.prototype.convertToMap = /**
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
    OccCartPaymentAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartPaymentAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCartPaymentAdapter;
}());
export { OccCartPaymentAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtcGF5bWVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvb2NjL29jYy1jYXJ0LXBheW1lbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLDBCQUEwQixHQUMzQixNQUFNLGtDQUFrQyxDQUFDO0FBRzFDO0lBRUUsK0JBQ1ksSUFBZ0IsRUFDbEIsWUFBaUMsRUFDL0IsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDL0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFFckMsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Ozs7O0lBSVMsK0NBQWU7Ozs7O0lBQXpCLFVBQTBCLE1BQWM7O1lBQ2hDLFlBQVksR0FBRyxRQUFRLEdBQUcsTUFBTSxHQUFHLFNBQVM7UUFDbEQsT0FBTyxJQUFJLENBQUMsWUFBWSxD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WSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xFO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTyw0Q0FBWTs7Ozs7SUFBcEIsVUFBcUIsU0FBMkI7UUFDOUMsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVMsTUFBTSxFQUFFLElBQUk7O2dCQUNyQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUc7WUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7Z0JBbk1GLFVBQVU7Ozs7Z0JBWEYsVUFBVTtnQkFFVixtQkFBbUI7Z0JBRW5CLGdCQUFnQjs7SUEyTXpCLDRCQUFDO0NBQUEsQUFwTUQsSUFvTUM7U0FuTVkscUJBQXFCOzs7Ozs7SUFXaEMsMENBQTZCOzs7OztJQVQzQixxQ0FBMEI7Ozs7O0lBQzFCLDZDQUF5Qzs7Ozs7SUFDekMsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VzdG9tRW5jb2RlciB9IGZyb20gJy4vY3VzdG9tLmVuY29kZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydFBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9wYXltZW50L2NhcnQtcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFBBWU1FTlRfREVUQUlMU19OT1JNQUxJWkVSLFxuICBQQVlNRU5UX0RFVEFJTFNfU0VSSUFMSVpFUixcbn0gZnJvbSAnLi4vY29ubmVjdG9ycy9wYXltZW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0NhcnRQYXltZW50QWRhcHRlciBpbXBsZW1lbnRzIENhcnRQYXltZW50QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBET01QYXJzZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRvbXBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRvbXBhcnNlcjogRE9NUGFyc2VyO1xuXG4gIHByb3RlY3RlZCBnZXRDYXJ0RW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNhcnRFbmRwb2ludCA9ICd1c2Vycy8nICsgdXNlcklkICsgJy9jYXJ0cy8nO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChjYXJ0RW5kcG9pbnQpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHNcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIHBheW1lbnREZXRhaWxzID0gdGhpcy5jb252ZXJ0ZXIuY29udmVydChcbiAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgUEFZTUVOVF9ERVRBSUxTX1NFUklBTElaRVJcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmdldFByb3ZpZGVyU3ViSW5mbyh1c2VySWQsIGNhcnRJZCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWxzTWFwID0gdGhpcy5jb252ZXJ0VG9NYXAoZGF0YS5tYXBwaW5nTGFiZWxzLmVudHJ5KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmw6IGRhdGEucG9zdFVybCxcbiAgICAgICAgICBwYXJhbWV0ZXJzOiB0aGlzLmdldFBhcmFtc0ZvclBheW1lbnRQcm92aWRlcihcbiAgICAgICAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgICAgICAgZGF0YS5wYXJhbWV0ZXJzLmVudHJ5LFxuICAgICAgICAgICAgbGFiZWxzTWFwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtYXBwaW5nTGFiZWxzOiBsYWJlbHNNYXAsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIG1lcmdlTWFwKHN1YiA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIHN1YnNjcmlwdGlvbiBkaXJlY3RseSB3aXRoIHBheW1lbnQgcHJvdmlkZXJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU3ViV2l0aFByb3ZpZGVyKHN1Yi51cmwsIHN1Yi5wYXJhbWV0ZXJzKS5waXBlKFxuICAgICAgICAgIG1hcChyZXNwb25zZSA9PiB0aGlzLmV4dHJhY3RQYXltZW50RGV0YWlsc0Zyb21IdG1sKHJlc3BvbnNlKSksXG4gICAgICAgICAgbWVyZ2VNYXAoZnJvbVBheW1lbnRQcm92aWRlciA9PiB7XG4gICAgICAgICAgICBmcm9tUGF5bWVudFByb3ZpZGVyWydzYXZlUGF5bWVudEluZm8nXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVEZXRhaWxzV2l0aFBhcmFtZXRlcnMoXG4gICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkLFxuICAgICAgICAgICAgICBmcm9tUGF5bWVudFByb3ZpZGVyXG4gICAgICAgICAgICApLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUEFZTUVOVF9ERVRBSUxTX05PUk1BTElaRVIpKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHNldChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsc0lkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KFxuICAgICAgICB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICsgY2FydElkICsgJy9wYXltZW50ZGV0YWlscycsXG4gICAgICAgIHt9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiB7IHBheW1lbnREZXRhaWxzSWQ6IHBheW1lbnREZXRhaWxzSWQgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UHJvdmlkZXJTdWJJbmZvKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChcbiAgICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArXG4gICAgICAgICAgY2FydElkICtcbiAgICAgICAgICAnL3BheW1lbnQvc29wL3JlcXVlc3Q/cmVzcG9uc2VVcmw9c2FtcGxlVXJsJ1xuICAgICAgKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVN1YldpdGhQcm92aWRlcihcbiAgICBwb3N0VXJsOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICBBY2NlcHQ6ICd0ZXh0L2h0bWwnLFxuICAgIH0pO1xuICAgIGxldCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBlbmNvZGVyOiBuZXcgQ3VzdG9tRW5jb2RlcigpIH0pO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLmFwcGVuZChrZXksIHBhcmFtZXRlcnNba2V5XSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QocG9zdFVybCwgaHR0cFBhcmFtcywge1xuICAgICAgaGVhZGVycyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZURldGFpbHNXaXRoUGFyYW1ldGVycyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXJhbWV0ZXJzOiBhbnlcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIGxldCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBlbmNvZGVyOiBuZXcgQ3VzdG9tRW5jb2RlcigpIH0pO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLmFwcGVuZChrZXksIHBhcmFtZXRlcnNba2V5XSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PFBheW1lbnREZXRhaWxzPihcbiAgICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvcGF5bWVudC9zb3AvcmVzcG9uc2UnLFxuICAgICAgICBodHRwUGFyYW1zLFxuICAgICAgICB7IGhlYWRlcnMgfVxuICAgICAgKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFyYW1zRm9yUGF5bWVudFByb3ZpZGVyKFxuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyxcbiAgICBwYXJhbWV0ZXJzOiB7IGtleTsgdmFsdWUgfVtdLFxuICAgIG1hcHBpbmdMYWJlbHM6IGFueVxuICApIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmNvbnZlcnRUb01hcChwYXJhbWV0ZXJzKTtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2FjY291bnRfaG9sZGVyX25hbWUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYWNjb3VudEhvbGRlck5hbWU7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX3R5cGUnXV0gPSBwYXltZW50RGV0YWlscy5jYXJkVHlwZS5jb2RlO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF9udW1iZXInXV0gPSBwYXltZW50RGV0YWlscy5jYXJkTnVtYmVyO1xuICAgIGlmIChtYXBwaW5nTGFiZWxzWydoeWJyaXNfY29tYmluZWRfZXhwaXJ5X2RhdGUnXSA9PT0gJ3RydWUnKSB7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfZXhwaXJ5X2RhdGUnXV0gPVxuICAgICAgICBwYXltZW50RGV0YWlscy5leHBpcnlNb250aCArXG4gICAgICAgIG1hcHBpbmdMYWJlbHNbJ2h5YnJpc19zZXBhcmF0b3JfZXhwaXJ5X2RhdGUnXSArXG4gICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeVllYXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF9leHBpcmF0aW9uX21vbnRoJ11dID1cbiAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5TW9udGg7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfZXhwaXJhdGlvbl95ZWFyJ11dID1cbiAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5WWVhcjtcbiAgICB9XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX2N2biddXSA9IHBheW1lbnREZXRhaWxzLmN2bjtcblxuICAgIC8vIGJpbGxpbmcgYWRkcmVzc1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2NvdW50cnknXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MuY291bnRyeS5pc29jb2RlO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2ZpcnN0bmFtZSddXSA9XG4gICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy5maXJzdE5hbWU7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fbGFzdG5hbWUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MubGFzdE5hbWU7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fc3RyZWV0MSddXSA9XG4gICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy5saW5lMSArXG4gICAgICAnICcgK1xuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MubGluZTI7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fY2l0eSddXSA9XG4gICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy50b3duO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX3Bvc3RhbGNvZGUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MucG9zdGFsQ29kZTtcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0UGF5bWVudERldGFpbHNGcm9tSHRtbChodG1sOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGRvbWRvYyA9IHRoaXMuZG9tcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC94bWwnKTtcbiAgICBjb25zdCByZXNwb25zZUZvcm0gPSBkb21kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcbiAgICBjb25zdCBpbnB1dHMgPSByZXNwb25zZUZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaW5wdXRzW2ldOyBpKyspIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gaW5wdXRzW2ldO1xuICAgICAgaWYgKFxuICAgICAgICBpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSAhPT0gJ3t9JyAmJlxuICAgICAgICBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgIT09ICcnXG4gICAgICApIHtcbiAgICAgICAgdmFsdWVzW2lucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpXSA9IGlucHV0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9NYXAocGFyYW1MaXN0OiB7IGtleTsgdmFsdWUgfVtdKSB7XG4gICAgcmV0dXJuIHBhcmFtTGlzdC5yZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBpdGVtKSB7XG4gICAgICBjb25zdCBrZXkgPSBpdGVtLmtleTtcbiAgICAgIHJlc3VsdFtrZXldID0gaXRlbS52YWx1ZTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuICB9XG59XG4iXX0=