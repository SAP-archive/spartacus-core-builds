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
export class OccCartVoucherAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
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
    getCartVoucherEndpoint(userId, cartId) {
        return this.occEndpoints.getUrl('cartVoucher', { userId, cartId });
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    getHeaders(userId) {
        /** @type {?} */
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        return headers;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    add(userId, cartId, voucherId) {
        /** @type {?} */
        const url = this.getCartVoucherEndpoint(userId, cartId);
        /** @type {?} */
        const toAdd = JSON.stringify({});
        /** @type {?} */
        const params = new HttpParams().set('voucherId', voucherId);
        /** @type {?} */
        const headers = this.getHeaders(userId);
        return this.http.post(url, toAdd, { headers, params }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error.json()))), this.converter.pipeable(CART_VOUCHER_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    remove(userId, cartId, voucherId) {
        /** @type {?} */
        const url = this.getCartVoucherEndpoint(userId, cartId) +
            '/' +
            encodeURIComponent(voucherId);
        /** @type {?} */
        const headers = this.getHeaders(userId);
        return this.http
            .delete(url, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
    }
}
OccCartVoucherAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCartVoucherAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtdm91Y2hlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9jYXJ0L29jYy1jYXJ0LXZvdWNoZXIuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixHQUNqQixNQUFNLDhCQUE4QixDQUFDO0FBR3RDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUNoQyxZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7Ozs7SUFFTSxzQkFBc0IsQ0FBQyxNQUFjLEVBQUUsTUFBTTtRQUNyRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7OztJQUVTLFVBQVUsQ0FBQyxNQUFjOztZQUM3QixPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDNUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDO1FBRUYsSUFBSSxNQUFNLEtBQUsscUJBQXFCLEVBQUU7WUFDcEMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7OztJQUVELEdBQUcsQ0FBQyxNQUFjLEVBQUUsTUFBYyxFQUFFLFNBQWlCOztjQUM3QyxHQUFHLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7O2NBRWpELEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzs7Y0FFMUIsTUFBTSxHQUFlLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUM7O2NBRWpFLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3pELFVBQVU7Ozs7UUFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLEVBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQ2pELENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQWMsRUFBRSxNQUFjLEVBQUUsU0FBaUI7O2NBQ2hELEdBQUcsR0FDUCxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUMzQyxHQUFHO1lBQ0gsa0JBQWtCLENBQUMsU0FBUyxDQUFDOztjQUV6QixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN4QixJQUFJLENBQUMsVUFBVTs7OztRQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQWxERixVQUFVOzs7O1lBZEYsVUFBVTtZQVFWLG1CQUFtQjtZQURuQixnQkFBZ0I7Ozs7Ozs7SUFVckIscUNBQTBCOzs7OztJQUMxQiw2Q0FBMkM7Ozs7O0lBQzNDLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcnRWb3VjaGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy92b3VjaGVyL2NhcnQtdm91Y2hlci5hZGFwdGVyJztcbmltcG9ydCB7IENBUlRfVk9VQ0hFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL3ZvdWNoZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NMSUVOVF9UT0tFTixcbn0gZnJvbSAnLi4vLi4vdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDYXJ0Vm91Y2hlckFkYXB0ZXIgaW1wbGVtZW50cyBDYXJ0Vm91Y2hlckFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBnZXRDYXJ0Vm91Y2hlckVuZHBvaW50KHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2NhcnRWb3VjaGVyJywgeyB1c2VySWQsIGNhcnRJZCB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRIZWFkZXJzKHVzZXJJZDogc3RyaW5nKTogSHR0cEhlYWRlcnMge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICBpZiAodXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgYWRkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgdm91Y2hlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRDYXJ0Vm91Y2hlckVuZHBvaW50KHVzZXJJZCwgY2FydElkKTtcblxuICAgIGNvbnN0IHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoe30pO1xuXG4gICAgY29uc3QgcGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3ZvdWNoZXJJZCcsIHZvdWNoZXJJZCk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXJzKHVzZXJJZCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCB0b0FkZCwgeyBoZWFkZXJzLCBwYXJhbXMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDQVJUX1ZPVUNIRVJfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgdm91Y2hlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID1cbiAgICAgIHRoaXMuZ2V0Q2FydFZvdWNoZXJFbmRwb2ludCh1c2VySWQsIGNhcnRJZCkgK1xuICAgICAgJy8nICtcbiAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh2b3VjaGVySWQpO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVycyh1c2VySWQpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxufVxuIl19