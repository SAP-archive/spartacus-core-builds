/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDER_NORMALIZER } from '../../../checkout/connectors/checkout/converters';
import { ORDER_HISTORY_NORMALIZER } from '../../../user/connectors/order/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
// To be changed to a more optimised params after ticket: C3PO-1076
/** @type {?} */
const FULL_PARAMS = 'fields=FULL';
export class OccUserOrderAdapter {
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
     * @return {?}
     */
    getOrderEndpoint(userId) {
        /** @type {?} */
        const orderEndpoint = 'users/' + userId + '/orders';
        return this.occEndpoints.getEndpoint(orderEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    load(userId, orderCode) {
        /** @type {?} */
        const url = this.getOrderEndpoint(userId);
        /** @type {?} */
        const orderUrl = url + '/' + orderCode;
        /** @type {?} */
        const params = new HttpParams({
            fromString: FULL_PARAMS,
        });
        return this.http
            .get(orderUrl, {
            params: params,
        })
            .pipe(this.converter.pipeable(ORDER_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    loadHistory(userId, pageSize, currentPage, sort) {
        /** @type {?} */
        const url = this.getOrderEndpoint(userId);
        /** @type {?} */
        let params = new HttpParams();
        if (pageSize) {
            params = params.set('pageSize', pageSize.toString());
        }
        if (currentPage) {
            params = params.set('currentPage', currentPage.toString());
        }
        if (sort) {
            params = params.set('sort', sort);
        }
        return this.http
            .get(url, { params: params })
            .pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
    }
}
OccUserOrderAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserOrderAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccUserOrderAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccUserOrderAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccUserOrderAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItb3JkZXIuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci1vcmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztNQUdyRSxXQUFXLEdBQUcsYUFBYTtBQUdqQyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFDOUIsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxNQUFjOztjQUNqQyxhQUFhLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxTQUFTO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRU0sSUFBSSxDQUFDLE1BQWMsRUFBRSxTQUFpQjs7Y0FDckMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7O2NBRW5DLFFBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFNBQVM7O2NBRWhDLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUM1QixVQUFVLEVBQUUsV0FBVztTQUN4QixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBWSxRQUFRLEVBQUU7WUFDeEIsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO2FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7OztJQUVNLFdBQVcsQ0FDaEIsTUFBYyxFQUNkLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLElBQWE7O2NBRVAsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7O1lBQ3JDLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUM3QixJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksV0FBVyxFQUFFO1lBQ2YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUF1QixHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7WUFsREYsVUFBVTs7OztZQWRGLFVBQVU7WUFTVixtQkFBbUI7WUFGbkIsZ0JBQWdCOzs7Ozs7O0lBVXJCLG1DQUEwQjs7Ozs7SUFDMUIsMkNBQTJDOzs7OztJQUMzQyx3Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT1JERVJfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY29udmVydGVycyc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9SREVSX0hJU1RPUllfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9vcmRlci9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvdXNlci1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuLy8gVG8gYmUgY2hhbmdlZCB0byBhIG1vcmUgb3B0aW1pc2VkIHBhcmFtcyBhZnRlciB0aWNrZXQ6IEMzUE8tMTA3NlxuY29uc3QgRlVMTF9QQVJBTVMgPSAnZmllbGRzPUZVTEwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlck9yZGVyQWRhcHRlciBpbXBsZW1lbnRzIFVzZXJPcmRlckFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBnZXRPcmRlckVuZHBvaW50KHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBvcmRlckVuZHBvaW50ID0gJ3VzZXJzLycgKyB1c2VySWQgKyAnL29yZGVycyc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KG9yZGVyRW5kcG9pbnQpO1xuICB9XG5cbiAgcHVibGljIGxvYWQodXNlcklkOiBzdHJpbmcsIG9yZGVyQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0T3JkZXJFbmRwb2ludCh1c2VySWQpO1xuXG4gICAgY29uc3Qgb3JkZXJVcmwgPSB1cmwgKyAnLycgKyBvcmRlckNvZGU7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiBGVUxMX1BBUkFNUyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLk9yZGVyPihvcmRlclVybCwge1xuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBwdWJsaWMgbG9hZEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldE9yZGVyRW5kcG9pbnQodXNlcklkKTtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBpZiAocGFnZVNpemUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgcGFnZVNpemUudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnY3VycmVudFBhZ2UnLCBjdXJyZW50UGFnZS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgaWYgKHNvcnQpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3NvcnQnLCBzb3J0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmRlckhpc3RvcnlMaXN0Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX0hJU1RPUllfTk9STUFMSVpFUikpO1xuICB9XG59XG4iXX0=