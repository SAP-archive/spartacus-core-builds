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
const ENDPOINT_CARD_TYPES = 'cardtypes';
export class OccCheckoutPaymentAdapter {
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
        paymentDetails = this.converter.convert(paymentDetails, PAYMENT_DETAILS_SERIALIZER);
        return this.getProviderSubInfo(userId, cartId).pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            const labelsMap = this.convertToMap(data.mappingLabels.entry);
            return {
                url: data.postUrl,
                parameters: this.getParamsForPaymentProvider(paymentDetails, data.parameters.entry, labelsMap),
                mappingLabels: labelsMap,
            };
        })), mergeMap((/**
         * @param {?} sub
         * @return {?}
         */
        sub => {
            // create a subscription directly with payment provider
            return this.createSubWithProvider(sub.url, sub.parameters).pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            response => this.extractPaymentDetailsFromHtml(response))), mergeMap((/**
             * @param {?} fromPaymentProvider
             * @return {?}
             */
            fromPaymentProvider => {
                fromPaymentProvider['defaultPayment'] =
                    paymentDetails.defaultPayment;
                fromPaymentProvider['savePaymentInfo'] = true;
                return this.createDetailsWithParameters(userId, cartId, fromPaymentProvider).pipe(this.converter.pipeable(PAYMENT_DETAILS_NORMALIZER));
            })));
        })));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    set(userId, cartId, paymentDetailsId) {
        return this.http.put(this.getCartEndpoint(userId) + cartId + '/paymentdetails', {}, {
            params: { paymentDetailsId: paymentDetailsId },
        });
    }
    /**
     * @return {?}
     */
    loadCardTypes() {
        return this.http
            .get(this.occEndpoints.getEndpoint(ENDPOINT_CARD_TYPES))
            .pipe(map((/**
         * @param {?} cardTypeList
         * @return {?}
         */
        cardTypeList => cardTypeList.cardTypes)), this.converter.pipeableMany(CARD_TYPE_NORMALIZER));
    }
    /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getProviderSubInfo(userId, cartId) {
        return this.http.get(this.getCartEndpoint(userId) +
            cartId +
            '/payment/sop/request?responseUrl=sampleUrl');
    }
    /**
     * @protected
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
        Object.keys(parameters).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            httpParams = httpParams.append(key, parameters[key]);
        }));
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
        Object.keys(parameters).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            httpParams = httpParams.append(key, parameters[key]);
        }));
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.post(this.getCartEndpoint(userId) + cartId + '/payment/sop/response', httpParams, { headers });
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
        if (paymentDetails.billingAddress.region) {
            params[mappingLabels['hybris_billTo_region']] =
                paymentDetails.billingAddress.region.isocodeShort;
        }
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
        return values;
    }
    /**
     * @private
     * @param {?} paramList
     * @return {?}
     */
    convertToMap(paramList) {
        return paramList.reduce((/**
         * @param {?} result
         * @param {?} item
         * @return {?}
         */
        function (result, item) {
            /** @type {?} */
            const key = item.key;
            result[key] = item.value;
            return result;
        }), {});
    }
}
OccCheckoutPaymentAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCheckoutPaymentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LXBheW1lbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2hlY2tvdXQvb2NjLWNoZWNrb3V0LXBheW1lbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLDBCQUEwQixHQUMzQixNQUFNLGlEQUFpRCxDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7TUFFakQsbUJBQW1CLEdBQUcsV0FBVztBQUd2QyxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUFDcEMsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUVyQyxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7Ozs7SUFJUyxlQUFlLENBQUMsTUFBYzs7Y0FDaEMsWUFBWSxHQUFHLFFBQVEsR0FBRyxNQUFNLEdBQUcsU0FBUztRQUNsRCxPQUFP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TyxDQUFDLEtBQUssRUFBRSxFQUNsQztnQkFDQSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEU7U0FDRjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxTQUEyQjtRQUM5QyxPQUFPLFNBQVMsQ0FBQyxNQUFNOzs7OztRQUFDLFVBQVMsTUFBTSxFQUFFLElBQUk7O2tCQUNyQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUc7WUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7O1lBNU1GLFVBQVU7Ozs7WUFsQkYsVUFBVTtZQWFWLG1CQUFtQjtZQUZuQixnQkFBZ0I7Ozs7Ozs7SUFtQnZCLDhDQUE2Qjs7Ozs7SUFUM0IseUNBQTBCOzs7OztJQUMxQixpREFBMkM7Ozs7O0lBQzNDLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0UGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL3BheW1lbnQvY2hlY2tvdXQtcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7XG4gIENBUkRfVFlQRV9OT1JNQUxJWkVSLFxuICBQQVlNRU5UX0RFVEFJTFNfTk9STUFMSVpFUixcbiAgUEFZTUVOVF9ERVRBSUxTX1NFUklBTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENhcmRUeXBlLCBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEN1c3RvbUVuY29kZXIgfSBmcm9tICcuLi9jYXJ0L2N1c3RvbS5lbmNvZGVyJztcblxuY29uc3QgRU5EUE9JTlRfQ0FSRF9UWVBFUyA9ICdjYXJkdHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2hlY2tvdXRQYXltZW50QWRhcHRlciBpbXBsZW1lbnRzIENoZWNrb3V0UGF5bWVudEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBET01QYXJzZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRvbXBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRvbXBhcnNlcjogRE9NUGFyc2VyO1xuXG4gIHByb3RlY3RlZCBnZXRDYXJ0RW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNhcnRFbmRwb2ludCA9ICd1c2Vycy8nICsgdXNlcklkICsgJy9jYXJ0cy8nO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChjYXJ0RW5kcG9pbnQpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHNcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIHBheW1lbnREZXRhaWxzID0gdGhpcy5jb252ZXJ0ZXIuY29udmVydChcbiAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgUEFZTUVOVF9ERVRBSUxTX1NFUklBTElaRVJcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmdldFByb3ZpZGVyU3ViSW5mbyh1c2VySWQsIGNhcnRJZCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWxzTWFwID0gdGhpcy5jb252ZXJ0VG9NYXAoZGF0YS5tYXBwaW5nTGFiZWxzLmVudHJ5KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmw6IGRhdGEucG9zdFVybCxcbiAgICAgICAgICBwYXJhbWV0ZXJzOiB0aGlzLmdldFBhcmFtc0ZvclBheW1lbnRQcm92aWRlcihcbiAgICAgICAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgICAgICAgZGF0YS5wYXJhbWV0ZXJzLmVudHJ5LFxuICAgICAgICAgICAgbGFiZWxzTWFwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtYXBwaW5nTGFiZWxzOiBsYWJlbHNNYXAsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIG1lcmdlTWFwKHN1YiA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIHN1YnNjcmlwdGlvbiBkaXJlY3RseSB3aXRoIHBheW1lbnQgcHJvdmlkZXJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU3ViV2l0aFByb3ZpZGVyKHN1Yi51cmwsIHN1Yi5wYXJhbWV0ZXJzKS5waXBlKFxuICAgICAgICAgIG1hcChyZXNwb25zZSA9PiB0aGlzLmV4dHJhY3RQYXltZW50RGV0YWlsc0Zyb21IdG1sKHJlc3BvbnNlKSksXG4gICAgICAgICAgbWVyZ2VNYXAoZnJvbVBheW1lbnRQcm92aWRlciA9PiB7XG4gICAgICAgICAgICBmcm9tUGF5bWVudFByb3ZpZGVyWydkZWZhdWx0UGF5bWVudCddID1cbiAgICAgICAgICAgICAgcGF5bWVudERldGFpbHMuZGVmYXVsdFBheW1lbnQ7XG4gICAgICAgICAgICBmcm9tUGF5bWVudFByb3ZpZGVyWydzYXZlUGF5bWVudEluZm8nXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVEZXRhaWxzV2l0aFBhcmFtZXRlcnMoXG4gICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkLFxuICAgICAgICAgICAgICBmcm9tUGF5bWVudFByb3ZpZGVyXG4gICAgICAgICAgICApLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUEFZTUVOVF9ERVRBSUxTX05PUk1BTElaRVIpKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHNldChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsc0lkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL3BheW1lbnRkZXRhaWxzJyxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBwYXJhbXM6IHsgcGF5bWVudERldGFpbHNJZDogcGF5bWVudERldGFpbHNJZCB9LFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBsb2FkQ2FyZFR5cGVzKCk6IE9ic2VydmFibGU8Q2FyZFR5cGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkNhcmRUeXBlTGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoRU5EUE9JTlRfQ0FSRF9UWVBFUykpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGNhcmRUeXBlTGlzdCA9PiBjYXJkVHlwZUxpc3QuY2FyZFR5cGVzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENBUkRfVFlQRV9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQcm92aWRlclN1YkluZm8oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgK1xuICAgICAgICBjYXJ0SWQgK1xuICAgICAgICAnL3BheW1lbnQvc29wL3JlcXVlc3Q/cmVzcG9uc2VVcmw9c2FtcGxlVXJsJ1xuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlU3ViV2l0aFByb3ZpZGVyKFxuICAgIHBvc3RVcmw6IHN0cmluZyxcbiAgICBwYXJhbWV0ZXJzOiBhbnlcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIEFjY2VwdDogJ3RleHQvaHRtbCcsXG4gICAgfSk7XG4gICAgbGV0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGVuY29kZXI6IG5ldyBDdXN0b21FbmNvZGVyKCkgfSk7XG4gICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuYXBwZW5kKGtleSwgcGFyYW1ldGVyc1trZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChwb3N0VXJsLCBodHRwUGFyYW1zLCB7XG4gICAgICBoZWFkZXJzLFxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlRGV0YWlsc1dpdGhQYXJhbWV0ZXJzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHBhcmFtZXRlcnM6IGFueVxuICApOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgbGV0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGVuY29kZXI6IG5ldyBDdXN0b21FbmNvZGVyKCkgfSk7XG4gICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuYXBwZW5kKGtleSwgcGFyYW1ldGVyc1trZXldKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFBheW1lbnREZXRhaWxzPihcbiAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL3BheW1lbnQvc29wL3Jlc3BvbnNlJyxcbiAgICAgIGh0dHBQYXJhbXMsXG4gICAgICB7IGhlYWRlcnMgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFtc0ZvclBheW1lbnRQcm92aWRlcihcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMsXG4gICAgcGFyYW1ldGVyczogeyBrZXk7IHZhbHVlIH1bXSxcbiAgICBtYXBwaW5nTGFiZWxzOiBhbnlcbiAgKSB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb252ZXJ0VG9NYXAocGFyYW1ldGVycyk7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19hY2NvdW50X2hvbGRlcl9uYW1lJ11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmFjY291bnRIb2xkZXJOYW1lO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF90eXBlJ11dID0gcGF5bWVudERldGFpbHMuY2FyZFR5cGUuY29kZTtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfbnVtYmVyJ11dID0gcGF5bWVudERldGFpbHMuY2FyZE51bWJlcjtcbiAgICBpZiAobWFwcGluZ0xhYmVsc1snaHlicmlzX2NvbWJpbmVkX2V4cGlyeV9kYXRlJ10gPT09ICd0cnVlJykge1xuICAgICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX2V4cGlyeV9kYXRlJ11dID1cbiAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5TW9udGggK1xuICAgICAgICBtYXBwaW5nTGFiZWxzWydoeWJyaXNfc2VwYXJhdG9yX2V4cGlyeV9kYXRlJ10gK1xuICAgICAgICBwYXltZW50RGV0YWlscy5leHBpcnlZZWFyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfZXhwaXJhdGlvbl9tb250aCddXSA9XG4gICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeU1vbnRoO1xuICAgICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX2V4cGlyYXRpb25feWVhciddXSA9XG4gICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeVllYXI7XG4gICAgfVxuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF9jdm4nXV0gPSBwYXltZW50RGV0YWlscy5jdm47XG5cbiAgICAvLyBiaWxsaW5nIGFkZHJlc3NcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19jb3VudHJ5J11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLmNvdW50cnkuaXNvY29kZTtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19maXJzdG5hbWUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MuZmlyc3ROYW1lO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2xhc3RuYW1lJ11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLmxhc3ROYW1lO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX3N0cmVldDEnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MubGluZTEgK1xuICAgICAgJyAnICtcbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLmxpbmUyO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2NpdHknXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MudG93bjtcbiAgICBpZiAocGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MucmVnaW9uKSB7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19yZWdpb24nXV0gPVxuICAgICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy5yZWdpb24uaXNvY29kZVNob3J0O1xuICAgIH1cbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19wb3N0YWxjb2RlJ11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLnBvc3RhbENvZGU7XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFBheW1lbnREZXRhaWxzRnJvbUh0bWwoaHRtbDogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBkb21kb2MgPSB0aGlzLmRvbXBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQveG1sJyk7XG4gICAgY29uc3QgcmVzcG9uc2VGb3JtID0gZG9tZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF07XG4gICAgY29uc3QgaW5wdXRzID0gcmVzcG9uc2VGb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xuXG4gICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGlucHV0c1tpXTsgaSsrKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGlucHV0c1tpXTtcbiAgICAgIGlmIChcbiAgICAgICAgaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJykgIT09ICd7fScgJiZcbiAgICAgICAgaW5wdXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpICE9PSAnJ1xuICAgICAgKSB7XG4gICAgICAgIHZhbHVlc1tpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0gPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRvTWFwKHBhcmFtTGlzdDogeyBrZXk7IHZhbHVlIH1bXSkge1xuICAgIHJldHVybiBwYXJhbUxpc3QucmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwgaXRlbSkge1xuICAgICAgY29uc3Qga2V5ID0gaXRlbS5rZXk7XG4gICAgICByZXN1bHRba2V5XSA9IGl0ZW0udmFsdWU7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcbiAgfVxufVxuIl19