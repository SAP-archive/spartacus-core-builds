/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { ORDER_NORMALIZER } from '../../../checkout/connectors/checkout/converters';
// To be changed to a more optimised params after ticket: C3PO-1076
/** @type {?} */
var FULL_PARAMS = 'fields=FULL';
/** @type {?} */
var CHECKOUT_PARAMS = 'deliveryAddress(FULL),deliveryMode,paymentInfo(FULL)';
/** @type {?} */
var ORDERS_ENDPOINT = '/orders';
/** @type {?} */
var CARTS_ENDPOINT = '/carts/';
var OccCheckoutAdapter = /** @class */ (function () {
    function OccCheckoutAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @param {?} subEndpoint
     * @return {?}
     */
    OccCheckoutAdapter.prototype.getEndpoint = /**
     * @protected
     * @param {?} userId
     * @param {?} subEndpoint
     * @return {?}
     */
    function (userId, subEndpoint) {
        /** @type {?} */
        var orderEndpoint = 'users/' + userId + subEndpoint;
        return this.occEndpoints.getEndpoint(orderEndpoint);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCheckoutAdapter.prototype.placeOrder = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        /** @type {?} */
        var url = this.getEndpoint(userId, ORDERS_ENDPOINT);
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'cartId=' + cartId + '&' + FULL_PARAMS,
        });
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.post(url, {}, { headers: headers, params: params }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error.json()); })), this.converter.pipeable(ORDER_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCheckoutAdapter.prototype.loadCheckoutDetails = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        /** @type {?} */
        var url = this.getEndpoint(userId, CARTS_ENDPOINT) + cartId;
        /** @type {?} */
        var params = new HttpParams({
            fromString: "fields=" + CHECKOUT_PARAMS,
        });
        return this.http
            .get(url, { params: params })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    OccCheckoutAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCheckoutAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCheckoutAdapter;
}());
export { OccCheckoutAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccCheckoutAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccCheckoutAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCheckoutAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L29jYy1jaGVja291dC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7SUFJOUUsV0FBVyxHQUFHLGFBQWE7O0lBQzNCLGVBQWUsR0FBRyxzREFBc0Q7O0lBQ3hFLGVBQWUsR0FBRyxTQUFTOztJQUMzQixjQUFjLEdBQUcsU0FBUztBQUVoQztJQUVFLDRCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7Ozs7SUFFTSx3Q0FBVzs7Ozs7O0lBQXJCLFVBQXNCLE1BQWMsRUFBRSxXQUFtQjs7WUFDakQsYUFBYSxHQUFHLFFBQVEsR0FBRyxNQUFNLEdBQUcsV0FBVztRQUNyRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVNLHVDQUFVOzs7OztJQUFqQixVQUFrQixNQUFjLEVBQUUsTUFBYzs7WUFDeEMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQzs7WUFDL0MsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDO1lBQzVCLFVBQVUsRUFBRSxTQUFTLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxXQUFXO1NBQ25ELENBQUM7O1lBRUksT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVksR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2pFLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsRUFBQyxFQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMxQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsZ0RBQW1COzs7OztJQUFuQixVQUNFLE1BQWMsRUFDZCxNQUFjOztZQUVSLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsR0FBRyxNQUFNOztZQUN2RCxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUFFLFlBQVUsZUFBaUI7U0FDeEMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWtCLEdBQUcsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7YUFDckMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBeENGLFVBQVU7Ozs7Z0JBaEJGLFVBQVU7Z0JBRVYsbUJBQW1CO2dCQUduQixnQkFBZ0I7O0lBb0R6Qix5QkFBQztDQUFBLEFBekNELElBeUNDO1NBeENZLGtCQUFrQjs7Ozs7O0lBRTNCLGtDQUEwQjs7Ozs7SUFDMUIsMENBQTJDOzs7OztJQUMzQyx1Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrb3V0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuYWRhcHRlcic7XG5pbXBvcnQgeyBPUkRFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L21vZGVscy9jaGVja291dC5tb2RlbCc7XG5cbi8vIFRvIGJlIGNoYW5nZWQgdG8gYSBtb3JlIG9wdGltaXNlZCBwYXJhbXMgYWZ0ZXIgdGlja2V0OiBDM1BPLTEwNzZcbmNvbnN0IEZVTExfUEFSQU1TID0gJ2ZpZWxkcz1GVUxMJztcbmNvbnN0IENIRUNLT1VUX1BBUkFNUyA9ICdkZWxpdmVyeUFkZHJlc3MoRlVMTCksZGVsaXZlcnlNb2RlLHBheW1lbnRJbmZvKEZVTEwpJztcbmNvbnN0IE9SREVSU19FTkRQT0lOVCA9ICcvb3JkZXJzJztcbmNvbnN0IENBUlRTX0VORFBPSU5UID0gJy9jYXJ0cy8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2hlY2tvdXRBZGFwdGVyIGltcGxlbWVudHMgQ2hlY2tvdXRBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgZ2V0RW5kcG9pbnQodXNlcklkOiBzdHJpbmcsIHN1YkVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9yZGVyRW5kcG9pbnQgPSAndXNlcnMvJyArIHVzZXJJZCArIHN1YkVuZHBvaW50O1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChvcmRlckVuZHBvaW50KTtcbiAgfVxuXG4gIHB1YmxpYyBwbGFjZU9yZGVyKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldEVuZHBvaW50KHVzZXJJZCwgT1JERVJTX0VORFBPSU5UKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiAnY2FydElkPScgKyBjYXJ0SWQgKyAnJicgKyBGVUxMX1BBUkFNUyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PE9jYy5PcmRlcj4odXJsLCB7fSwgeyBoZWFkZXJzLCBwYXJhbXMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBsb2FkQ2hlY2tvdXREZXRhaWxzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2hlY2tvdXREZXRhaWxzPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRFbmRwb2ludCh1c2VySWQsIENBUlRTX0VORFBPSU5UKSArIGNhcnRJZDtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiBgZmllbGRzPSR7Q0hFQ0tPVVRfUEFSQU1TfWAsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxDaGVja291dERldGFpbHM+KHVybCwgeyBwYXJhbXMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cbn1cbiJdfQ==