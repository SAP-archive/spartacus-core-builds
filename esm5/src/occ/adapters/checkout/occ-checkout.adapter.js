/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDER_NORMALIZER } from '../../../checkout/connectors/checkout/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
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
        return this.http
            .post(url, {}, { headers: headers, params: params })
            .pipe(this.converter.pipeable(ORDER_NORMALIZER));
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
        return this.http.get(url, { params: params });
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCheckoutAdapter.prototype.clearCheckoutDeliveryAddress = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        /** @type {?} */
        var url = "" + this.getEndpoint(userId, CARTS_ENDPOINT) + cartId + "/addresses/delivery";
        return this.http.delete(url);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCheckoutAdapter.prototype.clearCheckoutDeliveryMode = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        /** @type {?} */
        var url = "" + this.getEndpoint(userId, CARTS_ENDPOINT) + cartId + "/deliverymode";
        return this.http.delete(url);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L29jYy1jaGVja291dC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7SUFHckUsV0FBVyxHQUFHLGFBQWE7O0lBQzNCLGVBQWUsR0FBRyxzREFBc0Q7O0lBQ3hFLGVBQWUsR0FBRyxTQUFTOztJQUMzQixjQUFjLEdBQUcsU0FBUztBQUVoQztJQUVFLDRCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7Ozs7SUFFTSx3Q0FBVzs7Ozs7O0lBQXJCLFVBQXNCLE1BQWMsRUFBRSxXQUFtQjs7WUFDakQsYUFBYSxHQUFHLFFBQVEsR0FBRyxNQUFNLEdBQUcsV0FBVztRQUNyRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVNLHVDQUFVOzs7OztJQUFqQixVQUFrQixNQUFjLEVBQUUsTUFBYzs7WUFDeEMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQzs7WUFDL0MsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDO1lBQzVCLFVBQVUsRUFBRSxTQUFTLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxXQUFXO1NBQ25ELENBQUM7O1lBRUksT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQVksR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7YUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFRCxnREFBbUI7Ozs7O0lBQW5CLFVBQ0UsTUFBYyxFQUNkLE1BQWM7O1lBRVIsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxHQUFHLE1BQU07O1lBQ3ZELE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUM1QixVQUFVLEVBQUUsWUFBVSxlQUFpQjtTQUN4QyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0IsR0FBRyxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVELHlEQUE0Qjs7Ozs7SUFBNUIsVUFDRSxNQUFjLEVBQ2QsTUFBYzs7WUFFUixHQUFHLEdBQUcsS0FBRyxJQUFJLENBQUMsV0FBVyxDQUM3QixNQUFNLEVBQ04sY0FBYyxDQUNmLEdBQUcsTUFBTSx3QkFBcUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTSxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFRCxzREFBeUI7Ozs7O0lBQXpCLFVBQTBCLE1BQWMsRUFBRSxNQUFjOztZQUNoRCxHQUFHLEdBQUcsS0FBRyxJQUFJLENBQUMsV0FBVyxDQUM3QixNQUFNLEVBQ04sY0FBYyxDQUNmLEdBQUcsTUFBTSxrQkFBZTtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQXhERixVQUFVOzs7O2dCQWpCRixVQUFVO2dCQVNWLG1CQUFtQjtnQkFGbkIsZ0JBQWdCOztJQW1FekIseUJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXhEWSxrQkFBa0I7Ozs7OztJQUUzQixrQ0FBMEI7Ozs7O0lBQzFCLDBDQUEyQzs7Ozs7SUFDM0MsdUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2NoZWNrb3V0L2NoZWNrb3V0LmFkYXB0ZXInO1xuaW1wb3J0IHsgT1JERVJfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY29udmVydGVycyc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9tb2RlbHMvY2hlY2tvdXQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbi8vIFRvIGJlIGNoYW5nZWQgdG8gYSBtb3JlIG9wdGltaXNlZCBwYXJhbXMgYWZ0ZXIgdGlja2V0OiBDM1BPLTEwNzZcbmNvbnN0IEZVTExfUEFSQU1TID0gJ2ZpZWxkcz1GVUxMJztcbmNvbnN0IENIRUNLT1VUX1BBUkFNUyA9ICdkZWxpdmVyeUFkZHJlc3MoRlVMTCksZGVsaXZlcnlNb2RlLHBheW1lbnRJbmZvKEZVTEwpJztcbmNvbnN0IE9SREVSU19FTkRQT0lOVCA9ICcvb3JkZXJzJztcbmNvbnN0IENBUlRTX0VORFBPSU5UID0gJy9jYXJ0cy8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2hlY2tvdXRBZGFwdGVyIGltcGxlbWVudHMgQ2hlY2tvdXRBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgZ2V0RW5kcG9pbnQodXNlcklkOiBzdHJpbmcsIHN1YkVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9yZGVyRW5kcG9pbnQgPSAndXNlcnMvJyArIHVzZXJJZCArIHN1YkVuZHBvaW50O1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChvcmRlckVuZHBvaW50KTtcbiAgfVxuXG4gIHB1YmxpYyBwbGFjZU9yZGVyKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldEVuZHBvaW50KHVzZXJJZCwgT1JERVJTX0VORFBPSU5UKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiAnY2FydElkPScgKyBjYXJ0SWQgKyAnJicgKyBGVUxMX1BBUkFNUyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8T2NjLk9yZGVyPih1cmwsIHt9LCB7IGhlYWRlcnMsIHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoT1JERVJfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgbG9hZENoZWNrb3V0RGV0YWlscyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENoZWNrb3V0RGV0YWlscz4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0RW5kcG9pbnQodXNlcklkLCBDQVJUU19FTkRQT0lOVCkgKyBjYXJ0SWQ7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogYGZpZWxkcz0ke0NIRUNLT1VUX1BBUkFNU31gLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENoZWNrb3V0RGV0YWlscz4odXJsLCB7IHBhcmFtcyB9KTtcbiAgfVxuXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmdldEVuZHBvaW50KFxuICAgICAgdXNlcklkLFxuICAgICAgQ0FSVFNfRU5EUE9JTlRcbiAgICApfSR7Y2FydElkfS9hZGRyZXNzZXMvZGVsaXZlcnlgO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4odXJsKTtcbiAgfVxuXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmdldEVuZHBvaW50KFxuICAgICAgdXNlcklkLFxuICAgICAgQ0FSVFNfRU5EUE9JTlRcbiAgICApfSR7Y2FydElkfS9kZWxpdmVyeW1vZGVgO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4odXJsKTtcbiAgfVxufVxuIl19