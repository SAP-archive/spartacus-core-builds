/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { CustomEncoder } from '../cart/custom.encoder';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { CARD_TYPE_NORMALIZER, PAYMENT_DETAILS_NORMALIZER, PAYMENT_DETAILS_SERIALIZER, } from '../../../checkout/connectors/payment/converters';
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
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/paymentdetails', {}, {
            params: { paymentDetailsId: paymentDetailsId },
        })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error.json()))));
    }
    /**
     * @return {?}
     */
    loadCardTypes() {
        return this.http
            .get(this.occEndpoints.getEndpoint(ENDPOINT_CARD_TYPES))
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error.json()))), map((/**
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
        return this.http
            .get(this.getCartEndpoint(userId) +
            cartId +
            '/payment/sop/request?responseUrl=sampleUrl')
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error.json()))));
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
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/payment/sop/response', httpParams, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LXBheW1lbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2hlY2tvdXQvb2NjLWNoZWNrb3V0LXBheW1lbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixFQUMxQiwwQkFBMEIsR0FDM0IsTUFBTSxpREFBaUQsQ0FBQzs7TUFJbkQsbUJBQW1CLEdBQUcsV0FBVztBQUd2QyxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUFDcEMsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUVyQyxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7Ozs7SUFJUyxlQUFlLENBQUMsTUFBYzs7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QUM7O2NBRW5ELE1BQU0sR0FBRyxFQUFFO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQ3hCLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQ0UsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJO2dCQUNuQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFDbEM7Z0JBQ0EsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xFO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsU0FBMkI7UUFDOUMsT0FBTyxTQUFTLENBQUMsTUFBTTs7Ozs7UUFBQyxVQUFTLE1BQU0sRUFBRSxJQUFJOztrQkFDckMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHO1lBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7OztZQTdNRixVQUFVOzs7O1lBZkYsVUFBVTtZQUVWLG1CQUFtQjtZQUVuQixnQkFBZ0I7Ozs7Ozs7SUF1QnZCLDhDQUE2Qjs7Ozs7SUFUM0IseUNBQTBCOzs7OztJQUMxQixpREFBMkM7Ozs7O0lBQzNDLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbUVuY29kZXIgfSBmcm9tICcuLi9jYXJ0L2N1c3RvbS5lbmNvZGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQYXltZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC9jaGVja291dC1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ0FSRF9UWVBFX05PUk1BTElaRVIsXG4gIFBBWU1FTlRfREVUQUlMU19OT1JNQUxJWkVSLFxuICBQQVlNRU5UX0RFVEFJTFNfU0VSSUFMSVpFUixcbn0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9wYXltZW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ2FyZFR5cGUsIFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzJztcblxuY29uc3QgRU5EUE9JTlRfQ0FSRF9UWVBFUyA9ICdjYXJkdHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2hlY2tvdXRQYXltZW50QWRhcHRlciBpbXBsZW1lbnRzIENoZWNrb3V0UGF5bWVudEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBET01QYXJzZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRvbXBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRvbXBhcnNlcjogRE9NUGFyc2VyO1xuXG4gIHByb3RlY3RlZCBnZXRDYXJ0RW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNhcnRFbmRwb2ludCA9ICd1c2Vycy8nICsgdXNlcklkICsgJy9jYXJ0cy8nO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChjYXJ0RW5kcG9pbnQpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHNcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIHBheW1lbnREZXRhaWxzID0gdGhpcy5jb252ZXJ0ZXIuY29udmVydChcbiAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgUEFZTUVOVF9ERVRBSUxTX1NFUklBTElaRVJcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmdldFByb3ZpZGVyU3ViSW5mbyh1c2VySWQsIGNhcnRJZCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWxzTWFwID0gdGhpcy5jb252ZXJ0VG9NYXAoZGF0YS5tYXBwaW5nTGFiZWxzLmVudHJ5KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmw6IGRhdGEucG9zdFVybCxcbiAgICAgICAgICBwYXJhbWV0ZXJzOiB0aGlzLmdldFBhcmFtc0ZvclBheW1lbnRQcm92aWRlcihcbiAgICAgICAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgICAgICAgZGF0YS5wYXJhbWV0ZXJzLmVudHJ5LFxuICAgICAgICAgICAgbGFiZWxzTWFwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtYXBwaW5nTGFiZWxzOiBsYWJlbHNNYXAsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIG1lcmdlTWFwKHN1YiA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIHN1YnNjcmlwdGlvbiBkaXJlY3RseSB3aXRoIHBheW1lbnQgcHJvdmlkZXJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU3ViV2l0aFByb3ZpZGVyKHN1Yi51cmwsIHN1Yi5wYXJhbWV0ZXJzKS5waXBlKFxuICAgICAgICAgIG1hcChyZXNwb25zZSA9PiB0aGlzLmV4dHJhY3RQYXltZW50RGV0YWlsc0Zyb21IdG1sKHJlc3BvbnNlKSksXG4gICAgICAgICAgbWVyZ2VNYXAoZnJvbVBheW1lbnRQcm92aWRlciA9PiB7XG4gICAgICAgICAgICBmcm9tUGF5bWVudFByb3ZpZGVyWydzYXZlUGF5bWVudEluZm8nXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVEZXRhaWxzV2l0aFBhcmFtZXRlcnMoXG4gICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkLFxuICAgICAgICAgICAgICBmcm9tUGF5bWVudFByb3ZpZGVyXG4gICAgICAgICAgICApLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUEFZTUVOVF9ERVRBSUxTX05PUk1BTElaRVIpKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHNldChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsc0lkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KFxuICAgICAgICB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICsgY2FydElkICsgJy9wYXltZW50ZGV0YWlscycsXG4gICAgICAgIHt9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiB7IHBheW1lbnREZXRhaWxzSWQ6IHBheW1lbnREZXRhaWxzSWQgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBsb2FkQ2FyZFR5cGVzKCk6IE9ic2VydmFibGU8Q2FyZFR5cGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkNhcmRUeXBlTGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoRU5EUE9JTlRfQ0FSRF9UWVBFUykpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSxcbiAgICAgICAgbWFwKGNhcmRUeXBlTGlzdCA9PiBjYXJkVHlwZUxpc3QuY2FyZFR5cGVzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENBUkRfVFlQRV9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQcm92aWRlclN1YkluZm8oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KFxuICAgICAgICB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICtcbiAgICAgICAgICBjYXJ0SWQgK1xuICAgICAgICAgICcvcGF5bWVudC9zb3AvcmVxdWVzdD9yZXNwb25zZVVybD1zYW1wbGVVcmwnXG4gICAgICApXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVTdWJXaXRoUHJvdmlkZXIoXG4gICAgcG9zdFVybDogc3RyaW5nLFxuICAgIHBhcmFtZXRlcnM6IGFueVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgQWNjZXB0OiAndGV4dC9odG1sJyxcbiAgICB9KTtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZW5jb2RlcjogbmV3IEN1c3RvbUVuY29kZXIoKSB9KTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5hcHBlbmQoa2V5LCBwYXJhbWV0ZXJzW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHBvc3RVcmwsIGh0dHBQYXJhbXMsIHtcbiAgICAgIGhlYWRlcnMsXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVEZXRhaWxzV2l0aFBhcmFtZXRlcnMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55XG4gICk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+IHtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZW5jb2RlcjogbmV3IEN1c3RvbUVuY29kZXIoKSB9KTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5hcHBlbmQoa2V5LCBwYXJhbWV0ZXJzW2tleV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxQYXltZW50RGV0YWlscz4oXG4gICAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL3BheW1lbnQvc29wL3Jlc3BvbnNlJyxcbiAgICAgICAgaHR0cFBhcmFtcyxcbiAgICAgICAgeyBoZWFkZXJzIH1cbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFtc0ZvclBheW1lbnRQcm92aWRlcihcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMsXG4gICAgcGFyYW1ldGVyczogeyBrZXk7IHZhbHVlIH1bXSxcbiAgICBtYXBwaW5nTGFiZWxzOiBhbnlcbiAgKSB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb252ZXJ0VG9NYXAocGFyYW1ldGVycyk7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19hY2NvdW50X2hvbGRlcl9uYW1lJ11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmFjY291bnRIb2xkZXJOYW1lO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF90eXBlJ11dID0gcGF5bWVudERldGFpbHMuY2FyZFR5cGUuY29kZTtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfbnVtYmVyJ11dID0gcGF5bWVudERldGFpbHMuY2FyZE51bWJlcjtcbiAgICBpZiAobWFwcGluZ0xhYmVsc1snaHlicmlzX2NvbWJpbmVkX2V4cGlyeV9kYXRlJ10gPT09ICd0cnVlJykge1xuICAgICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX2V4cGlyeV9kYXRlJ11dID1cbiAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5TW9udGggK1xuICAgICAgICBtYXBwaW5nTGFiZWxzWydoeWJyaXNfc2VwYXJhdG9yX2V4cGlyeV9kYXRlJ10gK1xuICAgICAgICBwYXltZW50RGV0YWlscy5leHBpcnlZZWFyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfZXhwaXJhdGlvbl9tb250aCddXSA9XG4gICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeU1vbnRoO1xuICAgICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX2V4cGlyYXRpb25feWVhciddXSA9XG4gICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeVllYXI7XG4gICAgfVxuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF9jdm4nXV0gPSBwYXltZW50RGV0YWlscy5jdm47XG5cbiAgICAvLyBiaWxsaW5nIGFkZHJlc3NcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19jb3VudHJ5J11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLmNvdW50cnkuaXNvY29kZTtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19maXJzdG5hbWUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MuZmlyc3ROYW1lO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2xhc3RuYW1lJ11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLmxhc3ROYW1lO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX3N0cmVldDEnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MubGluZTEgK1xuICAgICAgJyAnICtcbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLmxpbmUyO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2NpdHknXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MudG93bjtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19wb3N0YWxjb2RlJ11dID1cbiAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzLnBvc3RhbENvZGU7XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFBheW1lbnREZXRhaWxzRnJvbUh0bWwoaHRtbDogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBkb21kb2MgPSB0aGlzLmRvbXBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQveG1sJyk7XG4gICAgY29uc3QgcmVzcG9uc2VGb3JtID0gZG9tZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF07XG4gICAgY29uc3QgaW5wdXRzID0gcmVzcG9uc2VGb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xuXG4gICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGlucHV0c1tpXTsgaSsrKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGlucHV0c1tpXTtcbiAgICAgIGlmIChcbiAgICAgICAgaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJykgIT09ICd7fScgJiZcbiAgICAgICAgaW5wdXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpICE9PSAnJ1xuICAgICAgKSB7XG4gICAgICAgIHZhbHVlc1tpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0gPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRvTWFwKHBhcmFtTGlzdDogeyBrZXk7IHZhbHVlIH1bXSkge1xuICAgIHJldHVybiBwYXJhbUxpc3QucmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwgaXRlbSkge1xuICAgICAgY29uc3Qga2V5ID0gaXRlbS5rZXk7XG4gICAgICByZXN1bHRba2V5XSA9IGl0ZW0udmFsdWU7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcbiAgfVxufVxuIl19