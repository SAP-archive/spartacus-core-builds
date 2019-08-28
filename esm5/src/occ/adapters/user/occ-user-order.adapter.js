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
var OccUserOrderAdapter = /** @class */ (function () {
    function OccUserOrderAdapter(http, occEndpoints, converter, featureConfigService) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.featureConfigService = featureConfigService;
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     * @protected
     * @param {?} userId
     * @return {?}
     */
    OccUserOrderAdapter.prototype.getOrderEndpoint = /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     * @protected
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var orderEndpoint = 'users/' + userId + '/orders';
        return this.occEndpoints.getEndpoint(orderEndpoint);
    };
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    OccUserOrderAdapter.prototype.load = /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    function (userId, orderCode) {
        // TODO: Deprecated, remove Issue #4125
        if (!this.featureConfigService.isLevel('1.1')) {
            return this.legacyLoad(userId, orderCode);
        }
        /** @type {?} */
        var url = this.occEndpoints.getUrl('orderDetail', {
            userId: userId,
            orderId: orderCode,
        });
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(ORDER_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    OccUserOrderAdapter.prototype.loadHistory = /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    function (userId, pageSize, currentPage, sort) {
        // TODO: Deprecated, remove Issue #4125
        if (!this.featureConfigService.isLevel('1.1')) {
            return this.legacyLoadHistory(userId, pageSize, currentPage, sort);
        }
        /** @type {?} */
        var params = {};
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
        var url = this.occEndpoints.getUrl('orderHistory', { userId: userId }, params);
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
    };
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     * @private
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    OccUserOrderAdapter.prototype.legacyLoad = /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     * @private
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    function (userId, orderCode) {
        /** @type {?} */
        var url = this.getOrderEndpoint(userId) + '/' + orderCode;
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'fields=FULL',
        });
        return this.http
            .get(url, {
            params: params,
        })
            .pipe(this.converter.pipeable(ORDER_NORMALIZER));
    };
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
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
    OccUserOrderAdapter.prototype.legacyLoadHistory = /**
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
    function (userId, pageSize, currentPage, sort) {
        /** @type {?} */
        var url = this.getOrderEndpoint(userId);
        /** @type {?} */
        var params = new HttpParams();
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
    };
    OccUserOrderAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccUserOrderAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService },
        { type: FeatureConfigService }
    ]; };
    return OccUserOrderAdapter;
}());
export { OccUserOrderAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItb3JkZXIuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci1vcmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFaEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0U7SUFFRSw2QkFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQixFQUMzQixvQkFBMkM7UUFIM0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtJQUNwRCxDQUFDO0lBRUo7Ozs7T0FJRzs7Ozs7Ozs7O0lBQ08sOENBQWdCOzs7Ozs7OztJQUExQixVQUEyQixNQUFjOztZQUNqQyxhQUFhLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxTQUFTO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRU0sa0NBQUk7Ozs7O0lBQVgsVUFBWSxNQUFjLEVBQUUsU0FBaUI7UUFDM0MsdUNBQXVD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QyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUF1QixHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOztnQkE3R0YsVUFBVTs7OztnQkFaRixVQUFVO2dCQVVWLG1CQUFtQjtnQkFGbkIsZ0JBQWdCO2dCQUpoQixvQkFBb0I7O0lBc0g3QiwwQkFBQztDQUFBLEFBOUdELElBOEdDO1NBN0dZLG1CQUFtQjs7Ozs7O0lBRTVCLG1DQUEwQjs7Ozs7SUFDMUIsMkNBQTJDOzs7OztJQUMzQyx3Q0FBcUM7Ozs7O0lBQ3JDLG1EQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPUkRFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXIsIE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPUkRFUl9ISVNUT1JZX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NVc2VyT3JkZXJBZGFwdGVyIGltcGxlbWVudHMgVXNlck9yZGVyQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZ1NlcnZpY2U/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldE9yZGVyRW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9yZGVyRW5kcG9pbnQgPSAndXNlcnMvJyArIHVzZXJJZCArICcvb3JkZXJzJztcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQob3JkZXJFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgbG9hZCh1c2VySWQ6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgLy8gVE9ETzogRGVwcmVjYXRlZCwgcmVtb3ZlIElzc3VlICM0MTI1XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMScpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWdhY3lMb2FkKHVzZXJJZCwgb3JkZXJDb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ29yZGVyRGV0YWlsJywge1xuICAgICAgdXNlcklkLFxuICAgICAgb3JkZXJJZDogb3JkZXJDb2RlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JkZXI+KHVybClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkSGlzdG9yeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIC8vIFRPRE86IERlcHJlY2F0ZWQsIHJlbW92ZSBJc3N1ZSAjNDEyNVxuICAgIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcxLjEnKSkge1xuICAgICAgcmV0dXJuIHRoaXMubGVnYWN5TG9hZEhpc3RvcnkodXNlcklkLCBwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHNvcnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGlmIChwYWdlU2l6ZSkge1xuICAgICAgcGFyYW1zWydwYWdlU2l6ZSddID0gcGFnZVNpemUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQYWdlKSB7XG4gICAgICBwYXJhbXNbJ2N1cnJlbnRQYWdlJ10gPSBjdXJyZW50UGFnZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoc29ydCkge1xuICAgICAgcGFyYW1zWydzb3J0J10gPSBzb3J0LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdvcmRlckhpc3RvcnknLCB7IHVzZXJJZCB9LCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JkZXJIaXN0b3J5TGlzdD4odXJsKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoT1JERVJfSElTVE9SWV9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAqL1xuICBwcml2YXRlIGxlZ2FjeUxvYWQodXNlcklkOiBzdHJpbmcsIG9yZGVyQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0T3JkZXJFbmRwb2ludCh1c2VySWQpICsgJy8nICsgb3JkZXJDb2RlO1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogJ2ZpZWxkcz1GVUxMJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLk9yZGVyPih1cmwsIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICovXG4gIHByaXZhdGUgbGVnYWN5TG9hZEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldE9yZGVyRW5kcG9pbnQodXNlcklkKTtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBpZiAocGFnZVNpemUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgcGFnZVNpemUudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnY3VycmVudFBhZ2UnLCBjdXJyZW50UGFnZS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgaWYgKHNvcnQpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3NvcnQnLCBzb3J0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmRlckhpc3RvcnlMaXN0Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX0hJU1RPUllfTk9STUFMSVpFUikpO1xuICB9XG59XG4iXX0=