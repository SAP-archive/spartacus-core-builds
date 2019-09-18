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
const FULL_PARAMS = 'fields=FULL';
/** @type {?} */
const CHECKOUT_PARAMS = 'deliveryAddress(FULL),deliveryMode,paymentInfo(FULL)';
/** @type {?} */
const ORDERS_ENDPOINT = '/orders';
/** @type {?} */
const CARTS_ENDPOINT = '/carts/';
export class OccCheckoutAdapter {
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
     * @param {?} subEndpoint
     * @return {?}
     */
    getEndpoint(userId, subEndpoint) {
        /** @type {?} */
        const orderEndpoint = 'users/' + userId + subEndpoint;
        return this.occEndpoints.getEndpoint(orderEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    placeOrder(userId, cartId) {
        /** @type {?} */
        const url = this.getEndpoint(userId, ORDERS_ENDPOINT);
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'cartId=' + cartId + '&' + FULL_PARAMS,
        });
        /** @type {?} */
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        return this.http
            .post(url, {}, { headers, params })
            .pipe(this.converter.pipeable(ORDER_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    loadCheckoutDetails(userId, cartId) {
        /** @type {?} */
        const url = this.getEndpoint(userId, CARTS_ENDPOINT) + cartId;
        /** @type {?} */
        const params = new HttpParams({
            fromString: `fields=${CHECKOUT_PARAMS}`,
        });
        return this.http.get(url, { params });
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    clearCheckoutDeliveryAddress(userId, cartId) {
        /** @type {?} */
        const url = `${this.getEndpoint(userId, CARTS_ENDPOINT)}${cartId}/addresses/delivery`;
        return this.http.delete(url);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    clearCheckoutDeliveryMode(userId, cartId) {
        /** @type {?} */
        const url = `${this.getEndpoint(userId, CARTS_ENDPOINT)}${cartId}/deliverymode`;
        return this.http.delete(url);
    }
}
OccCheckoutAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCheckoutAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L29jYy1jaGVja291dC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFDTCxlQUFlLEVBQ2YsZ0JBQWdCLEdBQ2pCLE1BQU0sOEJBQThCLENBQUM7QUFDdEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztNQUc1RCxXQUFXLEdBQUcsYUFBYTs7TUFDM0IsZUFBZSxHQUFHLHNEQUFzRDs7TUFDeEUsZUFBZSxHQUFHLFNBQVM7O01BQzNCLGNBQWMsR0FBRyxTQUFTO0FBR2hDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQUM3QixZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7Ozs7SUFFTSxXQUFXLENBQUMsTUFBYyxFQUFFLFdBQW1COztjQUNqRCxhQUFhLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxXQUFXO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRU0sVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFjOztjQUN4QyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDOztjQUMvQyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUFFLFNBQVMsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLFdBQVc7U0FDbkQsQ0FBQzs7WUFFRSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDNUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDO1FBQ0YsSUFBSSxNQUFNLEtBQUsscUJBQXFCLEVBQUU7WUFDcEMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBWSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQ2pCLE1BQWMsRUFDZCxNQUFjOztjQUVSLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsR0FBRyxNQUFNOztjQUN2RCxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUFFLFVBQVUsZUFBZSxFQUFFO1NBQ3hDLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVELDRCQUE0QixDQUMxQixNQUFjLEVBQ2QsTUFBYzs7Y0FFUixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUM3QixNQUFNLEVBQ04sY0FBYyxDQUNmLEdBQUcsTUFBTSxxQkFBcUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTSxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxNQUFjLEVBQUUsTUFBYzs7Y0FDaEQsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FDN0IsTUFBTSxFQUNOLGNBQWMsQ0FDZixHQUFHLE1BQU0sZUFBZTtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OztZQTNERixVQUFVOzs7O1lBdEJGLFVBQVU7WUFTVixtQkFBbUI7WUFGbkIsZ0JBQWdCOzs7Ozs7O0lBa0JyQixrQ0FBMEI7Ozs7O0lBQzFCLDBDQUEyQzs7Ozs7SUFDM0MsdUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2NoZWNrb3V0L2NoZWNrb3V0LmFkYXB0ZXInO1xuaW1wb3J0IHsgT1JERVJfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY29udmVydGVycyc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9tb2RlbHMvY2hlY2tvdXQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DTElFTlRfVE9LRU4sXG59IGZyb20gJy4uLy4uL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5cbi8vIFRvIGJlIGNoYW5nZWQgdG8gYSBtb3JlIG9wdGltaXNlZCBwYXJhbXMgYWZ0ZXIgdGlja2V0OiBDM1BPLTEwNzZcbmNvbnN0IEZVTExfUEFSQU1TID0gJ2ZpZWxkcz1GVUxMJztcbmNvbnN0IENIRUNLT1VUX1BBUkFNUyA9ICdkZWxpdmVyeUFkZHJlc3MoRlVMTCksZGVsaXZlcnlNb2RlLHBheW1lbnRJbmZvKEZVTEwpJztcbmNvbnN0IE9SREVSU19FTkRQT0lOVCA9ICcvb3JkZXJzJztcbmNvbnN0IENBUlRTX0VORFBPSU5UID0gJy9jYXJ0cy8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2hlY2tvdXRBZGFwdGVyIGltcGxlbWVudHMgQ2hlY2tvdXRBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgZ2V0RW5kcG9pbnQodXNlcklkOiBzdHJpbmcsIHN1YkVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9yZGVyRW5kcG9pbnQgPSAndXNlcnMvJyArIHVzZXJJZCArIHN1YkVuZHBvaW50O1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChvcmRlckVuZHBvaW50KTtcbiAgfVxuXG4gIHB1YmxpYyBwbGFjZU9yZGVyKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldEVuZHBvaW50KHVzZXJJZCwgT1JERVJTX0VORFBPSU5UKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiAnY2FydElkPScgKyBjYXJ0SWQgKyAnJicgKyBGVUxMX1BBUkFNUyxcbiAgICB9KTtcblxuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICBpZiAodXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PE9jYy5PcmRlcj4odXJsLCB7fSwgeyBoZWFkZXJzLCBwYXJhbXMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGxvYWRDaGVja291dERldGFpbHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDaGVja291dERldGFpbHM+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldEVuZHBvaW50KHVzZXJJZCwgQ0FSVFNfRU5EUE9JTlQpICsgY2FydElkO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9JHtDSEVDS09VVF9QQVJBTVN9YCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDaGVja291dERldGFpbHM+KHVybCwgeyBwYXJhbXMgfSk7XG4gIH1cblxuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5nZXRFbmRwb2ludChcbiAgICAgIHVzZXJJZCxcbiAgICAgIENBUlRTX0VORFBPSU5UXG4gICAgKX0ke2NhcnRJZH0vYWRkcmVzc2VzL2RlbGl2ZXJ5YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KHVybCk7XG4gIH1cblxuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5nZXRFbmRwb2ludChcbiAgICAgIHVzZXJJZCxcbiAgICAgIENBUlRTX0VORFBPSU5UXG4gICAgKX0ke2NhcnRJZH0vZGVsaXZlcnltb2RlYDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KHVybCk7XG4gIH1cbn1cbiJdfQ==