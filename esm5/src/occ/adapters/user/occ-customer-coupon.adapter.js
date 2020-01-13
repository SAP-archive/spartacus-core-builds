/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER } from '../../../user/connectors/customer-coupon/converters';
import { ConverterService } from '../../../util/converter.service';
var OccCustomerCouponAdapter = /** @class */ (function () {
    function OccCustomerCouponAdapter(http, occEndpoints, converter) {
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
    OccCustomerCouponAdapter.prototype.getCustomerCoupons = /**
     * @param {?} userId
     * @param {?} pageSize
     * @param {?} currentPage
     * @param {?} sort
     * @return {?}
     */
    function (userId, pageSize, currentPage, sort) {
        /** @type {?} */
        var url = this.occEndpoints.getUrl('customerCoupons', { userId: userId });
        /** @type {?} */
        var params = new HttpParams().set('sort', sort ? sort : 'startDate:asc');
        if (pageSize) {
            params = params.set('pageSize', pageSize.toString());
        }
        if (currentPage) {
            params = params.set('currentPage', currentPage.toString());
        }
        /** @type {?} */
        var headers = this.newHttpHeader();
        return this.http
            .get(url, { headers: headers, params: params })
            .pipe(this.converter.pipeable(CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    OccCustomerCouponAdapter.prototype.turnOffNotification = /**
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    function (userId, couponCode) {
        /** @type {?} */
        var url = this.occEndpoints.getUrl('couponNotification', {
            userId: userId,
            couponCode: couponCode,
        });
        /** @type {?} */
        var headers = this.newHttpHeader();
        return this.http.delete(url, { headers: headers });
    };
    /**
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    OccCustomerCouponAdapter.prototype.turnOnNotification = /**
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    function (userId, couponCode) {
        /** @type {?} */
        var url = this.occEndpoints.getUrl('couponNotification', {
            userId: userId,
            couponCode: couponCode,
        });
        /** @type {?} */
        var headers = this.newHttpHeader();
        return this.http.post(url, { headers: headers });
    };
    /**
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    OccCustomerCouponAdapter.prototype.claimCustomerCoupon = /**
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    function (userId, couponCode) {
        /** @type {?} */
        var url = this.occEndpoints.getUrl('claimCoupon', {
            userId: userId,
            couponCode: couponCode,
        });
        /** @type {?} */
        var headers = this.newHttpHeader();
        return this.http.post(url, { headers: headers });
    };
    /**
     * @private
     * @return {?}
     */
    OccCustomerCouponAdapter.prototype.newHttpHeader = /**
     * @private
     * @return {?}
     */
    function () {
        return new HttpHeaders({
            'Content-Type': 'application/json',
        });
    };
    OccCustomerCouponAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCustomerCouponAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCustomerCouponAdapter;
}());
export { OccCustomerCouponAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWN1c3RvbWVyLWNvdXBvbi5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy1jdXN0b21lci1jb3Vwb24uYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU8zRSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUduRTtJQUVFLGtDQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7Ozs7O0lBRUoscURBQWtCOzs7Ozs7O0lBQWxCLFVBQ0UsTUFBYyxFQUNkLFFBQWdCLEVBQ2hCLFdBQW1CLEVBQ25CLElBQVk7O1lBRU4sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQzs7WUFFL0QsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBRXhFLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxXQUFXLEVBQUU7WUFDZixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDNUQ7O1lBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBaUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQzthQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUVELHNEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsTUFBYyxFQUFFLFVBQWtCOztZQUM5QyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7WUFDekQsTUFBTSxRQUFBO1lBQ04sVUFBVSxZQUFBO1NBQ1gsQ0FBQzs7WUFDSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCxxREFBa0I7Ozs7O0lBQWxCLFVBQ0UsTUFBYyxFQUNkLFVBQWtCOztZQUVaLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtZQUN6RCxNQUFNLFFBQUE7WUFDTixVQUFVLFlBQUE7U0FDWCxDQUFDOztZQUNJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUVELHNEQUFtQjs7Ozs7SUFBbkIsVUFDRSxNQUFjLEVBQ2QsVUFBa0I7O1lBRVosR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUNsRCxNQUFNLFFBQUE7WUFDTixVQUFVLFlBQUE7U0FDWCxDQUFDOztZQUNJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRU8sZ0RBQWE7Ozs7SUFBckI7UUFDRSxPQUFPLElBQUksV0FBVyxDQUFDO1lBQ3JCLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBeEVGLFVBQVU7Ozs7Z0JBWkYsVUFBVTtnQkFDVixtQkFBbUI7Z0JBUW5CLGdCQUFnQjs7SUE0RXpCLCtCQUFDO0NBQUEsQUF6RUQsSUF5RUM7U0F4RVksd0JBQXdCOzs7Ozs7SUFFakMsd0NBQTBCOzs7OztJQUMxQixnREFBMkM7Ozs7O0lBQzNDLDZDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBDdXN0b21lckNvdXBvbkFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvY3VzdG9tZXItY291cG9uL2N1c3RvbWVyLWNvdXBvbi5hZGFwdGVyJztcbmltcG9ydCB7XG4gIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0LFxuICBDdXN0b21lckNvdXBvbk5vdGlmaWNhdGlvbixcbiAgQ3VzdG9tZXJDb3Vwb24yQ3VzdG9tZXIsXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL2N1c3RvbWVyLWNvdXBvbi5tb2RlbCc7XG5pbXBvcnQgeyBDVVNUT01FUl9DT1VQT05fU0VBUkNIX1JFU1VMVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2N1c3RvbWVyLWNvdXBvbi9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDdXN0b21lckNvdXBvbkFkYXB0ZXIgaW1wbGVtZW50cyBDdXN0b21lckNvdXBvbkFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldEN1c3RvbWVyQ291cG9ucyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgc29ydDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2N1c3RvbWVyQ291cG9ucycsIHsgdXNlcklkIH0pO1xuXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdzb3J0Jywgc29ydCA/IHNvcnQgOiAnc3RhcnREYXRlOmFzYycpO1xuXG4gICAgaWYgKHBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdwYWdlU2l6ZScsIHBhZ2VTaXplLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBhZ2UpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2N1cnJlbnRQYWdlJywgY3VycmVudFBhZ2UudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMubmV3SHR0cEhlYWRlcigpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQ+KHVybCwgeyBoZWFkZXJzLCBwYXJhbXMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENVU1RPTUVSX0NPVVBPTl9TRUFSQ0hfUkVTVUxUX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHR1cm5PZmZOb3RpZmljYXRpb24odXNlcklkOiBzdHJpbmcsIGNvdXBvbkNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2NvdXBvbk5vdGlmaWNhdGlvbicsIHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIGNvdXBvbkNvZGUsXG4gICAgfSk7XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMubmV3SHR0cEhlYWRlcigpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCB7IGhlYWRlcnMgfSk7XG4gIH1cblxuICB0dXJuT25Ob3RpZmljYXRpb24oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY291cG9uQ29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25Ob3RpZmljYXRpb24+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2NvdXBvbk5vdGlmaWNhdGlvbicsIHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIGNvdXBvbkNvZGUsXG4gICAgfSk7XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMubmV3SHR0cEhlYWRlcigpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgeyBoZWFkZXJzIH0pO1xuICB9XG5cbiAgY2xhaW1DdXN0b21lckNvdXBvbihcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjb3Vwb25Db2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvbjJDdXN0b21lcj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnY2xhaW1Db3Vwb24nLCB7XG4gICAgICB1c2VySWQsXG4gICAgICBjb3Vwb25Db2RlLFxuICAgIH0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLm5ld0h0dHBIZWFkZXIoKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbmV3SHR0cEhlYWRlcigpIHtcbiAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==