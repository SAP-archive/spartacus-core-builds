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
        if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
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
        if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItb3JkZXIuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci1vcmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFaEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0U7SUFFRSw2QkFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQixFQUMzQixvQkFBMkM7UUFIM0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtJQUNwRCxDQUFDO0lBRUo7Ozs7T0FJRzs7Ozs7Ozs7O0lBQ08sOENBQWdCOzs7Ozs7OztJQUExQixVQUEyQixNQUFjOztZQUNqQyxhQUFhLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxTQUFTO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRU0sa0NBQUk7Ozs7O0lBQVgsVUFBWSxNQUFjLEVBQUUsU0FBaUI7UUFDM0MsdUNBQXVD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LENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksSUFBSSxFQUFFO1lBQ1IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBdUIsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Z0JBN0dGLFVBQVU7Ozs7Z0JBWkYsVUFBVTtnQkFVVixtQkFBbUI7Z0JBRm5CLGdCQUFnQjtnQkFKaEIsb0JBQW9COztJQXNIN0IsMEJBQUM7Q0FBQSxBQTlHRCxJQThHQztTQTdHWSxtQkFBbUI7Ozs7OztJQUU1QixtQ0FBMEI7Ozs7O0lBQzFCLDJDQUEyQzs7Ozs7SUFDM0Msd0NBQXFDOzs7OztJQUNyQyxtREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT1JERVJfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY29udmVydGVycyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT1JERVJfSElTVE9SWV9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL29yZGVyL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgVXNlck9yZGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlck9yZGVyQWRhcHRlciBpbXBsZW1lbnRzIFVzZXJPcmRlckFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWdTZXJ2aWNlPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRPcmRlckVuZHBvaW50KHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBvcmRlckVuZHBvaW50ID0gJ3VzZXJzLycgKyB1c2VySWQgKyAnL29yZGVycyc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KG9yZGVyRW5kcG9pbnQpO1xuICB9XG5cbiAgcHVibGljIGxvYWQodXNlcklkOiBzdHJpbmcsIG9yZGVyQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIC8vIFRPRE86IERlcHJlY2F0ZWQsIHJlbW92ZSBJc3N1ZSAjNDEyNVxuICAgIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0VuYWJsZWQoJ2NvbmZpZ3VyYWJsZU9jY0VuZHBvaW50cycpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWdhY3lMb2FkKHVzZXJJZCwgb3JkZXJDb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ29yZGVyRGV0YWlsJywge1xuICAgICAgdXNlcklkLFxuICAgICAgb3JkZXJJZDogb3JkZXJDb2RlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JkZXI+KHVybClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkSGlzdG9yeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIC8vIFRPRE86IERlcHJlY2F0ZWQsIHJlbW92ZSBJc3N1ZSAjNDEyNVxuICAgIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0VuYWJsZWQoJ2NvbmZpZ3VyYWJsZU9jY0VuZHBvaW50cycpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWdhY3lMb2FkSGlzdG9yeSh1c2VySWQsIHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgc29ydCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgaWYgKHBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXNbJ3BhZ2VTaXplJ10gPSBwYWdlU2l6ZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBhZ2UpIHtcbiAgICAgIHBhcmFtc1snY3VycmVudFBhZ2UnXSA9IGN1cnJlbnRQYWdlLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmIChzb3J0KSB7XG4gICAgICBwYXJhbXNbJ3NvcnQnXSA9IHNvcnQudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ29yZGVySGlzdG9yeScsIHsgdXNlcklkIH0sIHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmRlckhpc3RvcnlMaXN0Pih1cmwpXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9ISVNUT1JZX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICovXG4gIHByaXZhdGUgbGVnYWN5TG9hZCh1c2VySWQ6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRPcmRlckVuZHBvaW50KHVzZXJJZCkgKyAnLycgKyBvcmRlckNvZGU7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiAnZmllbGRzPUZVTEwnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JkZXI+KHVybCwge1xuICAgICAgICBwYXJhbXMsXG4gICAgICB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoT1JERVJfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJpdmF0ZSBsZWdhY3lMb2FkSGlzdG9yeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0T3JkZXJFbmRwb2ludCh1c2VySWQpO1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIGlmIChwYWdlU2l6ZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncGFnZVNpemUnLCBwYWdlU2l6ZS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQYWdlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdjdXJyZW50UGFnZScsIGN1cnJlbnRQYWdlLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBpZiAoc29ydCkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnc29ydCcsIHNvcnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLk9yZGVySGlzdG9yeUxpc3Q+KHVybCwgeyBwYXJhbXM6IHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoT1JERVJfSElTVE9SWV9OT1JNQUxJWkVSKSk7XG4gIH1cbn1cbiJdfQ==