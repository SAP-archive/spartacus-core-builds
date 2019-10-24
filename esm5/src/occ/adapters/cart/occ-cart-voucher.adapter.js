/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CART_VOUCHER_NORMALIZER } from '../../../cart/connectors/voucher/converters';
import { OCC_USER_ID_ANONYMOUS } from '../../../occ/utils/occ-constants';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../utils/interceptor-util';
var OccCartVoucherAdapter = /** @class */ (function () {
    function OccCartVoucherAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCartVoucherAdapter.prototype.getCartVoucherEndpoint = /**
     * @protected
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.occEndpoints.getUrl('cartVoucher', { userId: userId, cartId: cartId });
    };
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    OccCartVoucherAdapter.prototype.getHeaders = /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        return headers;
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    OccCartVoucherAdapter.prototype.add = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    function (userId, cartId, voucherId) {
        /** @type {?} */
        var url = this.getCartVoucherEndpoint(userId, cartId);
        /** @type {?} */
        var toAdd = JSON.stringify({});
        /** @type {?} */
        var params = new HttpParams().set('voucherId', voucherId);
        /** @type {?} */
        var headers = this.getHeaders(userId);
        return this.http.post(url, toAdd, { headers: headers, params: params }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error.json()); })), this.converter.pipeable(CART_VOUCHER_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    OccCartVoucherAdapter.prototype.remove = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    function (userId, cartId, voucherId) {
        /** @type {?} */
        var url = this.getCartVoucherEndpoint(userId, cartId) +
            '/' +
            encodeURIComponent(voucherId);
        /** @type {?} */
        var headers = this.getHeaders(userId);
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    OccCartVoucherAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartVoucherAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCartVoucherAdapter;
}());
export { OccCartVoucherAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccCartVoucherAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccCartVoucherAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCartVoucherAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtdm91Y2hlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9jYXJ0L29jYy1jYXJ0LXZvdWNoZXIuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixHQUNqQixNQUFNLDhCQUE4QixDQUFDO0FBRXRDO0lBRUUsK0JBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7Ozs7OztJQUVNLHNEQUFzQjs7Ozs7O0lBQWhDLFVBQWlDLE1BQWMsRUFBRSxNQUFNO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7OztJQUVTLDBDQUFVOzs7OztJQUFwQixVQUFxQixNQUFjOztZQUM3QixPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDNUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDO1FBRUYsSUFBSSxNQUFNLEtBQUsscUJBQXFCLEVBQUU7WUFDcEMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7OztJQUVELG1DQUFHOzs7Ozs7SUFBSCxVQUFJLE1BQWMsRUFBRSxNQUFjLEVBQUUsU0FBaUI7O1lBQzdDLEdBQUcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzs7WUFFakQsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDOztZQUUxQixNQUFNLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQzs7WUFFakUsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3pELFVBQVU7Ozs7UUFBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsRUFBQyxFQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUNqRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVELHNDQUFNOzs7Ozs7SUFBTixVQUFPLE1BQWMsRUFBRSxNQUFjLEVBQUUsU0FBaUI7O1lBQ2hELEdBQUcsR0FDUCxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUMzQyxHQUFHO1lBQ0gsa0JBQWtCLENBQUMsU0FBUyxDQUFDOztZQUV6QixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO2FBQ3hCLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLEVBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQWxERixVQUFVOzs7O2dCQWRGLFVBQVU7Z0JBUVYsbUJBQW1CO2dCQURuQixnQkFBZ0I7O0lBMER6Qiw0QkFBQztDQUFBLEFBbkRELElBbURDO1NBbERZLHFCQUFxQjs7Ozs7O0lBRTlCLHFDQUEwQjs7Ozs7SUFDMUIsNkNBQTJDOzs7OztJQUMzQywwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0Vm91Y2hlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvdm91Y2hlci9jYXJ0LXZvdWNoZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBDQVJUX1ZPVUNIRVJfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy92b3VjaGVyL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DTElFTlRfVE9LRU4sXG59IGZyb20gJy4uLy4uL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2FydFZvdWNoZXJBZGFwdGVyIGltcGxlbWVudHMgQ2FydFZvdWNoZXJBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgZ2V0Q2FydFZvdWNoZXJFbmRwb2ludCh1c2VySWQ6IHN0cmluZywgY2FydElkKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdjYXJ0Vm91Y2hlcicsIHsgdXNlcklkLCBjYXJ0SWQgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0SGVhZGVycyh1c2VySWQ6IHN0cmluZyk6IEh0dHBIZWFkZXJzIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgaWYgKHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGFkZCh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIHZvdWNoZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0Q2FydFZvdWNoZXJFbmRwb2ludCh1c2VySWQsIGNhcnRJZCk7XG5cbiAgICBjb25zdCB0b0FkZCA9IEpTT04uc3RyaW5naWZ5KHt9KTtcblxuICAgIGNvbnN0IHBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCd2b3VjaGVySWQnLCB2b3VjaGVySWQpO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVycyh1c2VySWQpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgdG9BZGQsIHsgaGVhZGVycywgcGFyYW1zIH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ0FSVF9WT1VDSEVSX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIHZvdWNoZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICB0aGlzLmdldENhcnRWb3VjaGVyRW5kcG9pbnQodXNlcklkLCBjYXJ0SWQpICtcbiAgICAgICcvJyArXG4gICAgICBlbmNvZGVVUklDb21wb25lbnQodm91Y2hlcklkKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcnModXNlcklkKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5kZWxldGUodXJsLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cbn1cbiJdfQ==