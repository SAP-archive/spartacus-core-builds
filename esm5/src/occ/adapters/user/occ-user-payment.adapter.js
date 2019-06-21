/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConverterService } from '../../../util/converter.service';
import { PAYMENT_DETAILS_NORMALIZER } from '../../../checkout/connectors/payment/converters';
/** @type {?} */
var USER_ENDPOINT = 'users/';
/** @type {?} */
var PAYMENT_DETAILS_ENDPOINT = '/paymentdetails';
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
        return this.http.get(url, { headers: headers }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })), map((/**
         * @param {?} methodList
         * @return {?}
         */
        function (methodList) { return methodList.payments; })), this.converter.pipeableMany(PAYMENT_DETAILS_NORMALIZER));
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
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
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
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItcGF5bWVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy11c2VyLXBheW1lbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7SUFFdkYsYUFBYSxHQUFHLFFBQVE7O0lBQ3hCLHdCQUF3QixHQUFHLGlCQUFpQjtBQUVsRDtJQUVFLCtCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7OztJQUVJLHlEQUF5Qjs7Ozs7SUFBakMsVUFBa0MsTUFBYzs7WUFDeEMsUUFBUSxHQUFHLEtBQUcsYUFBYSxHQUFHLE1BQU0sR0FBRyx3QkFBMEI7UUFDdkUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELHVDQUFPOzs7O0lBQVAsVUFBUSxNQUFjOztZQUNkLEdBQUcsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLEdBQUcsYUFBYTs7WUFDNUQsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXlCLEdBQUcsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2pFLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxFQUM3QyxHQUFHOzs7O1FBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxVQUFVLENBQUMsUUFBUSxFQUFuQixDQUFtQixFQUFDLEVBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxzQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQWMsRUFBRSxlQUF1Qjs7WUFDdEMsR0FBRyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsSUFBRyxNQUFJLGVBQWlCLENBQUE7O1lBQ3BFLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsa0JBQWtCO1NBQ25DLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDeEIsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRUQsMENBQVU7Ozs7O0lBQVYsVUFBVyxNQUFjLEVBQUUsZUFBdUI7O1lBQzFDLEdBQUcsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLElBQUcsTUFBSSxlQUFpQixDQUFBOztZQUNwRSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEtBQUssQ0FDSixHQUFHO1FBQ0gsdUNBQXVDO1FBQ3ZDLEVBQUUsY0FBYyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsRUFDN0QsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUNaO2FBQ0EsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBbkRGLFVBQVU7Ozs7Z0JBWkYsVUFBVTtnQkFDVixtQkFBbUI7Z0JBS25CLGdCQUFnQjs7SUEwRHpCLDRCQUFDO0NBQUEsQUFwREQsSUFvREM7U0FuRFkscUJBQXFCOzs7Ozs7SUFFOUIscUNBQTBCOzs7OztJQUMxQiw2Q0FBMkM7Ozs7O0lBQzNDLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9wYXltZW50L3VzZXItcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBBWU1FTlRfREVUQUlMU19OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9wYXltZW50L2NvbnZlcnRlcnMnO1xuXG5jb25zdCBVU0VSX0VORFBPSU5UID0gJ3VzZXJzLyc7XG5jb25zdCBQQVlNRU5UX0RFVEFJTFNfRU5EUE9JTlQgPSAnL3BheW1lbnRkZXRhaWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1VzZXJQYXltZW50QWRhcHRlciBpbXBsZW1lbnRzIFVzZXJQYXltZW50QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRQYXltZW50RGV0YWlsc0VuZHBvaW50KHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VTRVJfRU5EUE9JTlR9JHt1c2VySWR9JHtQQVlNRU5UX0RFVEFJTFNfRU5EUE9JTlR9YDtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoZW5kcG9pbnQpO1xuICB9XG5cbiAgbG9hZEFsbCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0UGF5bWVudERldGFpbHNFbmRwb2ludCh1c2VySWQpICsgJz9zYXZlZD10cnVlJztcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPY2MuUGF5bWVudERldGFpbHNMaXN0Pih1cmwsIHsgaGVhZGVycyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpLFxuICAgICAgbWFwKG1ldGhvZExpc3QgPT4gbWV0aG9kTGlzdC5wYXltZW50cyksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoUEFZTUVOVF9ERVRBSUxTX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZSh1c2VySWQ6IHN0cmluZywgcGF5bWVudE1ldGhvZElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRQYXltZW50RGV0YWlsc0VuZHBvaW50KHVzZXJJZCkgKyBgLyR7cGF5bWVudE1ldGhvZElEfWA7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHNldERlZmF1bHQodXNlcklkOiBzdHJpbmcsIHBheW1lbnRNZXRob2RJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0UGF5bWVudERldGFpbHNFbmRwb2ludCh1c2VySWQpICsgYC8ke3BheW1lbnRNZXRob2RJRH1gO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaChcbiAgICAgICAgdXJsLFxuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgYmlsbGluZ0FkZHJlc3MgcHJvcGVydHlcbiAgICAgICAgeyBiaWxsaW5nQWRkcmVzczogeyB0aXRsZUNvZGU6ICdtcicgfSwgZGVmYXVsdFBheW1lbnQ6IHRydWUgfSxcbiAgICAgICAgeyBoZWFkZXJzIH1cbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cbn1cbiJdfQ==