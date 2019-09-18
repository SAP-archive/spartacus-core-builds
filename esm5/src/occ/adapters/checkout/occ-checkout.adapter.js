/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDER_NORMALIZER } from '../../../checkout/connectors/checkout/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../utils/interceptor-util';
import { OCC_USER_ID_ANONYMOUS } from '../../utils/occ-constants';
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
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L29jYy1jaGVja291dC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFDTCxlQUFlLEVBQ2YsZ0JBQWdCLEdBQ2pCLE1BQU0sOEJBQThCLENBQUM7QUFDdEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztJQUc1RCxXQUFXLEdBQUcsYUFBYTs7SUFDM0IsZUFBZSxHQUFHLHNEQUFzRDs7SUFDeEUsZUFBZSxHQUFHLFNBQVM7O0lBQzNCLGNBQWMsR0FBRyxTQUFTO0FBRWhDO0lBRUUsNEJBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7Ozs7OztJQUVNLHdDQUFXOzs7Ozs7SUFBckIsVUFBc0IsTUFBYyxFQUFFLFdBQW1COztZQUNqRCxhQUFhLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxXQUFXO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRU0sdUNBQVU7Ozs7O0lBQWpCLFVBQWtCLE1BQWMsRUFBRSxNQUFjOztZQUN4QyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDOztZQUMvQyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUFFLFNBQVMsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLFdBQVc7U0FDbkQsQ0FBQzs7WUFFRSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDNUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDO1FBQ0YsSUFBSSxNQUFNLEtBQUsscUJBQXFCLEVBQUU7WUFDcEMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBWSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQzthQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELGdEQUFtQjs7Ozs7SUFBbkIsVUFDRSxNQUFjLEVBQ2QsTUFBYzs7WUFFUixHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLEdBQUcsTUFBTTs7WUFDdkQsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDO1lBQzVCLFVBQVUsRUFBRSxZQUFVLGVBQWlCO1NBQ3hDLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixHQUFHLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRUQseURBQTRCOzs7OztJQUE1QixVQUNFLE1BQWMsRUFDZCxNQUFjOztZQUVSLEdBQUcsR0FBRyxLQUFHLElBQUksQ0FBQyxXQUFXLENBQzdCLE1BQU0sRUFDTixjQUFjLENBQ2YsR0FBRyxNQUFNLHdCQUFxQjtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVELHNEQUF5Qjs7Ozs7SUFBekIsVUFBMEIsTUFBYyxFQUFFLE1BQWM7O1lBQ2hELEdBQUcsR0FBRyxLQUFHLElBQUksQ0FBQyxXQUFXLENBQzdCLE1BQU0sRUFDTixjQUFjLENBQ2YsR0FBRyxNQUFNLGtCQUFlO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBM0RGLFVBQVU7Ozs7Z0JBdEJGLFVBQVU7Z0JBU1YsbUJBQW1CO2dCQUZuQixnQkFBZ0I7O0lBMkV6Qix5QkFBQztDQUFBLEFBNURELElBNERDO1NBM0RZLGtCQUFrQjs7Ozs7O0lBRTNCLGtDQUEwQjs7Ozs7SUFDMUIsMENBQTJDOzs7OztJQUMzQyx1Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoZWNrb3V0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuYWRhcHRlcic7XG5pbXBvcnQgeyBPUkRFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L21vZGVscy9jaGVja291dC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NMSUVOVF9UT0tFTixcbn0gZnJvbSAnLi4vLi4vdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi91dGlscy9vY2MtY29uc3RhbnRzJztcblxuLy8gVG8gYmUgY2hhbmdlZCB0byBhIG1vcmUgb3B0aW1pc2VkIHBhcmFtcyBhZnRlciB0aWNrZXQ6IEMzUE8tMTA3NlxuY29uc3QgRlVMTF9QQVJBTVMgPSAnZmllbGRzPUZVTEwnO1xuY29uc3QgQ0hFQ0tPVVRfUEFSQU1TID0gJ2RlbGl2ZXJ5QWRkcmVzcyhGVUxMKSxkZWxpdmVyeU1vZGUscGF5bWVudEluZm8oRlVMTCknO1xuY29uc3QgT1JERVJTX0VORFBPSU5UID0gJy9vcmRlcnMnO1xuY29uc3QgQ0FSVFNfRU5EUE9JTlQgPSAnL2NhcnRzLyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDaGVja291dEFkYXB0ZXIgaW1wbGVtZW50cyBDaGVja291dEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBnZXRFbmRwb2ludCh1c2VySWQ6IHN0cmluZywgc3ViRW5kcG9pbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgb3JkZXJFbmRwb2ludCA9ICd1c2Vycy8nICsgdXNlcklkICsgc3ViRW5kcG9pbnQ7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KG9yZGVyRW5kcG9pbnQpO1xuICB9XG5cbiAgcHVibGljIHBsYWNlT3JkZXIodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0RW5kcG9pbnQodXNlcklkLCBPUkRFUlNfRU5EUE9JTlQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6ICdjYXJ0SWQ9JyArIGNhcnRJZCArICcmJyArIEZVTExfUEFSQU1TLFxuICAgIH0pO1xuXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIGlmICh1c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgaGVhZGVycyA9IEludGVyY2VwdG9yVXRpbC5jcmVhdGVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgdHJ1ZSwgaGVhZGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8T2NjLk9yZGVyPih1cmwsIHt9LCB7IGhlYWRlcnMsIHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoT1JERVJfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgbG9hZENoZWNrb3V0RGV0YWlscyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENoZWNrb3V0RGV0YWlscz4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0RW5kcG9pbnQodXNlcklkLCBDQVJUU19FTkRQT0lOVCkgKyBjYXJ0SWQ7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogYGZpZWxkcz0ke0NIRUNLT1VUX1BBUkFNU31gLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENoZWNrb3V0RGV0YWlscz4odXJsLCB7IHBhcmFtcyB9KTtcbiAgfVxuXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmdldEVuZHBvaW50KFxuICAgICAgdXNlcklkLFxuICAgICAgQ0FSVFNfRU5EUE9JTlRcbiAgICApfSR7Y2FydElkfS9hZGRyZXNzZXMvZGVsaXZlcnlgO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4odXJsKTtcbiAgfVxuXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmdldEVuZHBvaW50KFxuICAgICAgdXNlcklkLFxuICAgICAgQ0FSVFNfRU5EUE9JTlRcbiAgICApfSR7Y2FydElkfS9kZWxpdmVyeW1vZGVgO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4odXJsKTtcbiAgfVxufVxuIl19