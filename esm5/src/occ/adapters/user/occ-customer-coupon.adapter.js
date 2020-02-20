import { __decorate } from "tslib";
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
    OccCustomerCouponAdapter.prototype.getCustomerCoupons = function (userId, pageSize, currentPage, sort) {
        var url = this.occEndpoints.getUrl('customerCoupons', { userId: userId });
        var params = new HttpParams().set('sort', sort ? sort : 'startDate:asc');
        if (pageSize) {
            params = params.set('pageSize', pageSize.toString());
        }
        if (currentPage) {
            params = params.set('currentPage', currentPage.toString());
        }
        var headers = this.newHttpHeader();
        return this.http
            .get(url, { headers: headers, params: params })
            .pipe(this.converter.pipeable(CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER));
    };
    OccCustomerCouponAdapter.prototype.turnOffNotification = function (userId, couponCode) {
        var url = this.occEndpoints.getUrl('couponNotification', {
            userId: userId,
            couponCode: couponCode,
        });
        var headers = this.newHttpHeader();
        return this.http.delete(url, { headers: headers });
    };
    OccCustomerCouponAdapter.prototype.turnOnNotification = function (userId, couponCode) {
        var url = this.occEndpoints.getUrl('couponNotification', {
            userId: userId,
            couponCode: couponCode,
        });
        var headers = this.newHttpHeader();
        return this.http.post(url, { headers: headers });
    };
    OccCustomerCouponAdapter.prototype.claimCustomerCoupon = function (userId, couponCode) {
        var url = this.occEndpoints.getUrl('claimCoupon', {
            userId: userId,
            couponCode: couponCode,
        });
        var headers = this.newHttpHeader();
        return this.http.post(url, { headers: headers });
    };
    OccCustomerCouponAdapter.prototype.newHttpHeader = function () {
        return new HttpHeaders({
            'Content-Type': 'application/json',
        });
    };
    OccCustomerCouponAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    OccCustomerCouponAdapter = __decorate([
        Injectable()
    ], OccCustomerCouponAdapter);
    return OccCustomerCouponAdapter;
}());
export { OccCustomerCouponAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWN1c3RvbWVyLWNvdXBvbi5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy1jdXN0b21lci1jb3Vwb24uYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU8zRSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUluRTtJQUNFLGtDQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7SUFFSixxREFBa0IsR0FBbEIsVUFDRSxNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsSUFBWTtRQUVaLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFekUsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLFdBQVcsRUFBRTtZQUNmLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFpQyxHQUFHLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO2FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELHNEQUFtQixHQUFuQixVQUFvQixNQUFjLEVBQUUsVUFBa0I7UUFDcEQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7WUFDekQsTUFBTSxRQUFBO1lBQ04sVUFBVSxZQUFBO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxxREFBa0IsR0FBbEIsVUFDRSxNQUFjLEVBQ2QsVUFBa0I7UUFFbEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7WUFDekQsTUFBTSxRQUFBO1lBQ04sVUFBVSxZQUFBO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxzREFBbUIsR0FBbkIsVUFDRSxNQUFjLEVBQ2QsVUFBa0I7UUFFbEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQ2xELE1BQU0sUUFBQTtZQUNOLFVBQVUsWUFBQTtTQUNYLENBQUMsQ0FBQztRQUNILElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sZ0RBQWEsR0FBckI7UUFDRSxPQUFPLElBQUksV0FBVyxDQUFDO1lBQ3JCLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBckVpQixVQUFVO2dCQUNGLG1CQUFtQjtnQkFDdEIsZ0JBQWdCOztJQUo1Qix3QkFBd0I7UUFEcEMsVUFBVSxFQUFFO09BQ0Esd0JBQXdCLENBd0VwQztJQUFELCtCQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0F4RVksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEN1c3RvbWVyQ291cG9uQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jdXN0b21lci1jb3Vwb24vY3VzdG9tZXItY291cG9uLmFkYXB0ZXInO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQsXG4gIEN1c3RvbWVyQ291cG9uTm90aWZpY2F0aW9uLFxuICBDdXN0b21lckNvdXBvbjJDdXN0b21lcixcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY3VzdG9tZXItY291cG9uLm1vZGVsJztcbmltcG9ydCB7IENVU1RPTUVSX0NPVVBPTl9TRUFSQ0hfUkVTVUxUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvY3VzdG9tZXItY291cG9uL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0N1c3RvbWVyQ291cG9uQWRhcHRlciBpbXBsZW1lbnRzIEN1c3RvbWVyQ291cG9uQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgZ2V0Q3VzdG9tZXJDb3Vwb25zKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICBzb3J0OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnY3VzdG9tZXJDb3Vwb25zJywgeyB1c2VySWQgfSk7XG5cbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3NvcnQnLCBzb3J0ID8gc29ydCA6ICdzdGFydERhdGU6YXNjJyk7XG5cbiAgICBpZiAocGFnZVNpemUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgcGFnZVNpemUudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnY3VycmVudFBhZ2UnLCBjdXJyZW50UGFnZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5uZXdIdHRwSGVhZGVyKCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5DdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdD4odXJsLCB7IGhlYWRlcnMsIHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ1VTVE9NRVJfQ09VUE9OX1NFQVJDSF9SRVNVTFRfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgdHVybk9mZk5vdGlmaWNhdGlvbih1c2VySWQ6IHN0cmluZywgY291cG9uQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnY291cG9uTm90aWZpY2F0aW9uJywge1xuICAgICAgdXNlcklkLFxuICAgICAgY291cG9uQ29kZSxcbiAgICB9KTtcbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5uZXdIdHRwSGVhZGVyKCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIHR1cm5Pbk5vdGlmaWNhdGlvbihcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjb3Vwb25Db2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvbk5vdGlmaWNhdGlvbj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnY291cG9uTm90aWZpY2F0aW9uJywge1xuICAgICAgdXNlcklkLFxuICAgICAgY291cG9uQ29kZSxcbiAgICB9KTtcbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5uZXdIdHRwSGVhZGVyKCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCB7IGhlYWRlcnMgfSk7XG4gIH1cblxuICBjbGFpbUN1c3RvbWVyQ291cG9uKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNvdXBvbkNvZGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPEN1c3RvbWVyQ291cG9uMkN1c3RvbWVyPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdjbGFpbUNvdXBvbicsIHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIGNvdXBvbkNvZGUsXG4gICAgfSk7XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMubmV3SHR0cEhlYWRlcigpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgeyBoZWFkZXJzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXdIdHRwSGVhZGVyKCkge1xuICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbiAgfVxufVxuIl19