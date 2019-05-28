/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConverterService } from '../../../util/converter.service';
import { PAYMENT_DETAILS_NORMALIZER } from '../../../checkout/connectors/payment/converters';
import { COUNTRY_NORMALIZER, REGION_NORMALIZER, } from '../../../user/connectors/payment/converters';
/** @type {?} */
var USER_ENDPOINT = 'users/';
/** @type {?} */
var PAYMENT_DETAILS_ENDPOINT = '/paymentdetails';
/** @type {?} */
var COUNTRIES_ENDPOINT = 'countries';
/** @type {?} */
var REGIONS_ENDPOINT = 'regions';
/** @type {?} */
var COUNTRIES_TYPE_BILLING = 'BILLING';
/** @type {?} */
var COUNTRIES_TYPE_SHIPPING = 'SHIPPING';
var OccUserPaymentAdapter = /** @class */ (function () {
    function OccUserPaymentAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.getPaymentDetailsEndpoint = /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var endpoint = "" + USER_ENDPOINT + userId + PAYMENT_DETAILS_ENDPOINT;
        return this.occEndpoints.getEndpoint(endpoint);
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.loadAll = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getPaymentDetailsEndpoint(userId) + '?saved=true';
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.get(url, { headers: headers }).pipe(catchError(function (error) { return throwError(error); }), map(function (methodList) { return methodList.payments; }), this.converter.pipeableMany(PAYMENT_DETAILS_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.delete = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        /** @type {?} */
        var url = this.getPaymentDetailsEndpoint(userId) + ("/" + paymentMethodID);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.setDefault = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        /** @type {?} */
        var url = this.getPaymentDetailsEndpoint(userId) + ("/" + paymentMethodID);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, 
        // TODO: Remove billingAddress property
        { billingAddress: { titleCode: 'mr' }, defaultPayment: true }, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.loadBillingCountries = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(COUNTRIES_ENDPOINT), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_BILLING),
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (countryList) { return countryList.countries; }), this.converter.pipeableMany(COUNTRY_NORMALIZER));
    };
    /**
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.loadDeliveryCountries = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(COUNTRIES_ENDPOINT), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_SHIPPING),
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (countryList) { return countryList.countries; }), this.converter.pipeableMany(COUNTRY_NORMALIZER));
    };
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    OccUserPaymentAdapter.prototype.loadRegions = /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        /** @type {?} */
        var regionsEndpoint = COUNTRIES_ENDPOINT + "/" + countryIsoCode + "/" + REGIONS_ENDPOINT;
        return this.http
            .get(this.occEndpoints.getEndpoint(regionsEndpoint))
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (regionList) { return regionList.regions; }), this.converter.pipeableMany(REGION_NORMALIZER));
    };
    OccUserPaymentAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccUserPaymentAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccUserPaymentAdapter;
}());
export { OccUserPaymentAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccUserPaymentAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccUserPaymentAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccUserPaymentAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItcGF5bWVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy11c2VyLXBheW1lbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFFN0YsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixpQkFBaUIsR0FDbEIsTUFBTSw2Q0FBNkMsQ0FBQzs7SUFFL0MsYUFBYSxHQUFHLFFBQVE7O0lBQ3hCLHdCQUF3QixHQUFHLGlCQUFpQjs7SUFDNUMsa0JBQWtCLEdBQUcsV0FBVzs7SUFDaEMsZ0JBQWdCLEdBQUcsU0FBUzs7SUFDNUIsc0JBQXNCLEdBQUcsU0FBUzs7SUFDbEMsdUJBQXVCLEdBQUcsVUFBVTtBQUUxQztJQUVFLCtCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7OztJQUVJLHlEQUF5Qjs7Ozs7SUFBakMsVUFBa0MsTUFBYzs7WUFDeEMsUUFB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U0F0RlkscUJBQXFCOzs7Ozs7SUFFOUIscUNBQTBCOzs7OztJQUMxQiw2Q0FBMkM7Ozs7O0lBQzNDLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9wYXltZW50L3VzZXItcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBBWU1FTlRfREVUQUlMU19OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9wYXltZW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ291bnRyeSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQge1xuICBDT1VOVFJZX05PUk1BTElaRVIsXG4gIFJFR0lPTl9OT1JNQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvcGF5bWVudC9jb252ZXJ0ZXJzJztcblxuY29uc3QgVVNFUl9FTkRQT0lOVCA9ICd1c2Vycy8nO1xuY29uc3QgUEFZTUVOVF9ERVRBSUxTX0VORFBPSU5UID0gJy9wYXltZW50ZGV0YWlscyc7XG5jb25zdCBDT1VOVFJJRVNfRU5EUE9JTlQgPSAnY291bnRyaWVzJztcbmNvbnN0IFJFR0lPTlNfRU5EUE9JTlQgPSAncmVnaW9ucyc7XG5jb25zdCBDT1VOVFJJRVNfVFlQRV9CSUxMSU5HID0gJ0JJTExJTkcnO1xuY29uc3QgQ09VTlRSSUVTX1RZUEVfU0hJUFBJTkcgPSAnU0hJUFBJTkcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlclBheW1lbnRBZGFwdGVyIGltcGxlbWVudHMgVXNlclBheW1lbnRBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGdldFBheW1lbnREZXRhaWxzRW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVNFUl9FTkRQT0lOVH0ke3VzZXJJZH0ke1BBWU1FTlRfREVUQUlMU19FTkRQT0lOVH1gO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChlbmRwb2ludCk7XG4gIH1cblxuICBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRQYXltZW50RGV0YWlsc0VuZHBvaW50KHVzZXJJZCkgKyAnP3NhdmVkPXRydWUnO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5QYXltZW50RGV0YWlsc0xpc3Q+KHVybCwgeyBoZWFkZXJzIH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSksXG4gICAgICBtYXAobWV0aG9kTGlzdCA9PiBtZXRob2RMaXN0LnBheW1lbnRzKSxcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShQQVlNRU5UX0RFVEFJTFNfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBwYXltZW50TWV0aG9kSUQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFBheW1lbnREZXRhaWxzRW5kcG9pbnQodXNlcklkKSArIGAvJHtwYXltZW50TWV0aG9kSUR9YDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZGVsZXRlKHVybCwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgc2V0RGVmYXVsdCh1c2VySWQ6IHN0cmluZywgcGF5bWVudE1ldGhvZElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRQYXltZW50RGV0YWlsc0VuZHBvaW50KHVzZXJJZCkgKyBgLyR7cGF5bWVudE1ldGhvZElEfWA7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoKFxuICAgICAgICB1cmwsXG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSBiaWxsaW5nQWRkcmVzcyBwcm9wZXJ0eVxuICAgICAgICB7IGJpbGxpbmdBZGRyZXNzOiB7IHRpdGxlQ29kZTogJ21yJyB9LCBkZWZhdWx0UGF5bWVudDogdHJ1ZSB9LFxuICAgICAgICB7IGhlYWRlcnMgfVxuICAgICAgKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIGxvYWRCaWxsaW5nQ291bnRyaWVzKCk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ291bnRyeUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KENPVU5UUklFU19FTkRQT0lOVCksIHtcbiAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcygpLnNldCgndHlwZScsIENPVU5UUklFU19UWVBFX0JJTExJTkcpLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICBtYXAoY291bnRyeUxpc3QgPT4gY291bnRyeUxpc3QuY291bnRyaWVzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENPVU5UUllfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkRGVsaXZlcnlDb3VudHJpZXMoKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5Db3VudHJ5TGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoQ09VTlRSSUVTX0VORFBPSU5UKSwge1xuICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCd0eXBlJywgQ09VTlRSSUVTX1RZUEVfU0hJUFBJTkcpLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICBtYXAoY291bnRyeUxpc3QgPT4gY291bnRyeUxpc3QuY291bnRyaWVzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENPVU5UUllfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWdpb25bXT4ge1xuICAgIGNvbnN0IHJlZ2lvbnNFbmRwb2ludCA9IGAke0NPVU5UUklFU19FTkRQT0lOVH0vJHtjb3VudHJ5SXNvQ29kZX0vJHtSRUdJT05TX0VORFBPSU5UfWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuUmVnaW9uTGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQocmVnaW9uc0VuZHBvaW50KSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICBtYXAocmVnaW9uTGlzdCA9PiByZWdpb25MaXN0LnJlZ2lvbnMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoUkVHSU9OX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG59XG4iXX0=