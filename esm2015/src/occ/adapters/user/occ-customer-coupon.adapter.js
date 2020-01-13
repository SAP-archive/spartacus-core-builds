/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER } from '../../../user/connectors/customer-coupon/converters';
import { ConverterService } from '../../../util/converter.service';
export class OccCustomerCouponAdapter {
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
     * @param {?} userId
     * @param {?} pageSize
     * @param {?} currentPage
     * @param {?} sort
     * @return {?}
     */
    getCustomerCoupons(userId, pageSize, currentPage, sort) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('customerCoupons', { userId });
        /** @type {?} */
        let params = new HttpParams().set('sort', sort ? sort : 'startDate:asc');
        if (pageSize) {
            params = params.set('pageSize', pageSize.toString());
        }
        if (currentPage) {
            params = params.set('currentPage', currentPage.toString());
        }
        /** @type {?} */
        const headers = this.newHttpHeader();
        return this.http
            .get(url, { headers, params })
            .pipe(this.converter.pipeable(CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    turnOffNotification(userId, couponCode) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('couponNotification', {
            userId,
            couponCode,
        });
        /** @type {?} */
        const headers = this.newHttpHeader();
        return this.http.delete(url, { headers });
    }
    /**
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    turnOnNotification(userId, couponCode) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('couponNotification', {
            userId,
            couponCode,
        });
        /** @type {?} */
        const headers = this.newHttpHeader();
        return this.http.post(url, { headers });
    }
    /**
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    claimCustomerCoupon(userId, couponCode) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('claimCoupon', {
            userId,
            couponCode,
        });
        /** @type {?} */
        const headers = this.newHttpHeader();
        return this.http.post(url, { headers });
    }
    /**
     * @private
     * @return {?}
     */
    newHttpHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
        });
    }
}
OccCustomerCouponAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCustomerCouponAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccCustomerCouponAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccCustomerCouponAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCustomerCouponAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWN1c3RvbWVyLWNvdXBvbi5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy1jdXN0b21lci1jb3Vwb24uYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU8zRSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUluRSxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7SUFDbkMsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7OztJQUVKLGtCQUFrQixDQUNoQixNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsSUFBWTs7Y0FFTixHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQzs7WUFFL0QsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBRXhFLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxXQUFXLEVBQUU7WUFDZixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDNUQ7O2NBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBaUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsTUFBYyxFQUFFLFVBQWtCOztjQUM5QyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7WUFDekQsTUFBTTtZQUNOLFVBQVU7U0FDWCxDQUFDOztjQUNJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FDaEIsTUFBYyxFQUNkLFVBQWtCOztjQUVaLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtZQUN6RCxNQUFNO1lBQ04sVUFBVTtTQUNYLENBQUM7O2NBQ0ksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUNqQixNQUFjLEVBQ2QsVUFBa0I7O2NBRVosR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUNsRCxNQUFNO1lBQ04sVUFBVTtTQUNYLENBQUM7O2NBQ0ksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRU8sYUFBYTtRQUNuQixPQUFPLElBQUksV0FBVyxDQUFDO1lBQ3JCLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBeEVGLFVBQVU7Ozs7WUFaRixVQUFVO1lBQ1YsbUJBQW1CO1lBUW5CLGdCQUFnQjs7Ozs7OztJQU1yQix3Q0FBMEI7Ozs7O0lBQzFCLGdEQUEyQzs7Ozs7SUFDM0MsNkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEN1c3RvbWVyQ291cG9uQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jdXN0b21lci1jb3Vwb24vY3VzdG9tZXItY291cG9uLmFkYXB0ZXInO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQsXG4gIEN1c3RvbWVyQ291cG9uTm90aWZpY2F0aW9uLFxuICBDdXN0b21lckNvdXBvbjJDdXN0b21lcixcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY3VzdG9tZXItY291cG9uLm1vZGVsJztcbmltcG9ydCB7IENVU1RPTUVSX0NPVVBPTl9TRUFSQ0hfUkVTVUxUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvY3VzdG9tZXItY291cG9uL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0N1c3RvbWVyQ291cG9uQWRhcHRlciBpbXBsZW1lbnRzIEN1c3RvbWVyQ291cG9uQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgZ2V0Q3VzdG9tZXJDb3Vwb25zKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICBzb3J0OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnY3VzdG9tZXJDb3Vwb25zJywgeyB1c2VySWQgfSk7XG5cbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3NvcnQnLCBzb3J0ID8gc29ydCA6ICdzdGFydERhdGU6YXNjJyk7XG5cbiAgICBpZiAocGFnZVNpemUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgcGFnZVNpemUudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnY3VycmVudFBhZ2UnLCBjdXJyZW50UGFnZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5uZXdIdHRwSGVhZGVyKCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5DdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdD4odXJsLCB7IGhlYWRlcnMsIHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ1VTVE9NRVJfQ09VUE9OX1NFQVJDSF9SRVNVTFRfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgdHVybk9mZk5vdGlmaWNhdGlvbih1c2VySWQ6IHN0cmluZywgY291cG9uQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnY291cG9uTm90aWZpY2F0aW9uJywge1xuICAgICAgdXNlcklkLFxuICAgICAgY291cG9uQ29kZSxcbiAgICB9KTtcbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5uZXdIdHRwSGVhZGVyKCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIHR1cm5Pbk5vdGlmaWNhdGlvbihcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjb3Vwb25Db2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvbk5vdGlmaWNhdGlvbj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnY291cG9uTm90aWZpY2F0aW9uJywge1xuICAgICAgdXNlcklkLFxuICAgICAgY291cG9uQ29kZSxcbiAgICB9KTtcbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5uZXdIdHRwSGVhZGVyKCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCB7IGhlYWRlcnMgfSk7XG4gIH1cblxuICBjbGFpbUN1c3RvbWVyQ291cG9uKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNvdXBvbkNvZGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPEN1c3RvbWVyQ291cG9uMkN1c3RvbWVyPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdjbGFpbUNvdXBvbicsIHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIGNvdXBvbkNvZGUsXG4gICAgfSk7XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMubmV3SHR0cEhlYWRlcigpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgeyBoZWFkZXJzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXdIdHRwSGVhZGVyKCkge1xuICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbiAgfVxufVxuIl19