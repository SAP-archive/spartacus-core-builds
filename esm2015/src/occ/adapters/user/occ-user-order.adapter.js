/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDER_NORMALIZER } from '../../../checkout/connectors/checkout/converters';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { ORDER_HISTORY_NORMALIZER } from '../../../user/connectors/order/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export class OccUserOrderAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     * @param {?=} featureConfigService
     */
    constructor(http, occEndpoints, converter, featureConfigService) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.featureConfigService = featureConfigService;
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
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
        // TODO: Deprecated, remove Issue #4125
        if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
            return this.legacyLoad(userId, orderCode);
        }
        /** @type {?} */
        const url = this.occEndpoints.getUrl('orderDetail', {
            userId,
            orderId: orderCode,
        });
        return this.http
            .get(url)
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
        // TODO: Deprecated, remove Issue #4125
        if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
            return this.legacyLoadHistory(userId, pageSize, currentPage, sort);
        }
        /** @type {?} */
        const params = {};
        if (pageSize) {
            params['pageSize'] = pageSize.toString();
        }
        if (currentPage) {
            params['currentPage'] = currentPage.toString();
        }
        if (sort) {
            params['sort'] = sort.toString();
        }
        /** @type {?} */
        const url = this.occEndpoints.getUrl('orderHistory', { userId }, params);
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     * @private
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    legacyLoad(userId, orderCode) {
        /** @type {?} */
        const url = this.getOrderEndpoint(userId) + '/' + orderCode;
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'fields=FULL',
        });
        return this.http
            .get(url, {
            params,
        })
            .pipe(this.converter.pipeable(ORDER_NORMALIZER));
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     * @private
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    legacyLoadHistory(userId, pageSize, currentPage, sort) {
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
    { type: ConverterService },
    { type: FeatureConfigService }
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
    /**
     * @type {?}
     * @protected
     */
    OccUserOrderAdapter.prototype.featureConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItb3JkZXIuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci1vcmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFaEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHM0UsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQUM5QixZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCLEVBQzNCLG9CQUEyQztRQUgzQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO0lBQ3BELENBQUM7Ozs7Ozs7OztJQU9NLGdCQUFnQixDQUFDLE1BQWM7O2NBQ2pDLGFBQWEsR0FBRyxRQUFRLEdBQUcsTUFBTSxHQUFHLFNBQVM7UUFDbkQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFFTSxJQUFJLENBQUMsTUFBYyxFQUFFLFNBQWlCO1FBQzNDLHVDQUF1QztRQUN2QyxJQUFJLENB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QUNuQztRQUVELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQXVCLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7OztZQTdHRixVQUFVOzs7O1lBWkYsVUFBVTtZQVVWLG1CQUFtQjtZQUZuQixnQkFBZ0I7WUFKaEIsb0JBQW9COzs7Ozs7O0lBV3pCLG1DQUEwQjs7Ozs7SUFDMUIsMkNBQTJDOzs7OztJQUMzQyx3Q0FBcUM7Ozs7O0lBQ3JDLG1EQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPUkRFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXIsIE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPUkRFUl9ISVNUT1JZX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NVc2VyT3JkZXJBZGFwdGVyIGltcGxlbWVudHMgVXNlck9yZGVyQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZ1NlcnZpY2U/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldE9yZGVyRW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9yZGVyRW5kcG9pbnQgPSAndXNlcnMvJyArIHVzZXJJZCArICcvb3JkZXJzJztcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQob3JkZXJFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgbG9hZCh1c2VySWQ6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgLy8gVE9ETzogRGVwcmVjYXRlZCwgcmVtb3ZlIElzc3VlICM0MTI1XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzRW5hYmxlZCgnY29uZmlndXJhYmxlT2NjRW5kcG9pbnRzJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlZ2FjeUxvYWQodXNlcklkLCBvcmRlckNvZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnb3JkZXJEZXRhaWwnLCB7XG4gICAgICB1c2VySWQsXG4gICAgICBvcmRlcklkOiBvcmRlckNvZGUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmRlcj4odXJsKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoT1JERVJfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcHVibGljIGxvYWRIaXN0b3J5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PiB7XG4gICAgLy8gVE9ETzogRGVwcmVjYXRlZCwgcmVtb3ZlIElzc3VlICM0MTI1XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzRW5hYmxlZCgnY29uZmlndXJhYmxlT2NjRW5kcG9pbnRzJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlZ2FjeUxvYWRIaXN0b3J5KHVzZXJJZCwgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBzb3J0KTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICBpZiAocGFnZVNpemUpIHtcbiAgICAgIHBhcmFtc1sncGFnZVNpemUnXSA9IHBhZ2VTaXplLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zWydjdXJyZW50UGFnZSddID0gY3VycmVudFBhZ2UudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHNvcnQpIHtcbiAgICAgIHBhcmFtc1snc29ydCddID0gc29ydC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnb3JkZXJIaXN0b3J5JywgeyB1c2VySWQgfSwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLk9yZGVySGlzdG9yeUxpc3Q+KHVybClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX0hJU1RPUllfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJpdmF0ZSBsZWdhY3lMb2FkKHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldE9yZGVyRW5kcG9pbnQodXNlcklkKSArICcvJyArIG9yZGVyQ29kZTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6ICdmaWVsZHM9RlVMTCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmRlcj4odXJsLCB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAqL1xuICBwcml2YXRlIGxlZ2FjeUxvYWRIaXN0b3J5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRPcmRlckVuZHBvaW50KHVzZXJJZCk7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgaWYgKHBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdwYWdlU2l6ZScsIHBhZ2VTaXplLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBhZ2UpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2N1cnJlbnRQYWdlJywgY3VycmVudFBhZ2UudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGlmIChzb3J0KSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdzb3J0Jywgc29ydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JkZXJIaXN0b3J5TGlzdD4odXJsLCB7IHBhcmFtczogcGFyYW1zIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9ISVNUT1JZX05PUk1BTElaRVIpKTtcbiAgfVxufVxuIl19