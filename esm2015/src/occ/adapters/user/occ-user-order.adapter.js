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
        if (!this.featureConfigService.isLevel('1.1')) {
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
        if (!this.featureConfigService.isLevel('1.1')) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItb3JkZXIuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci1vcmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFaEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHM0UsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQUM5QixZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCLEVBQzNCLG9CQUEyQztRQUgzQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO0lBQ3BELENBQUM7Ozs7Ozs7OztJQU9NLGdCQUFnQixDQUFDLE1BQWM7O2NBQ2pDLGFBQWEsR0FBRyxRQUFRLEdBQUcsTUFBTSxHQUFHLFNBQVM7UUFDbkQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFFTSxJQUFJLENBQUMsTUFBYyxFQUFFLFNBQWlCO1FBQzNDLHVDQUF1QztRQUN2QyxJQUFJLENB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O1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBdUIsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7O1lBN0dGLFVBQVU7Ozs7WUFaRixVQUFVO1lBVVYsbUJBQW1CO1lBRm5CLGdCQUFnQjtZQUpoQixvQkFBb0I7Ozs7Ozs7SUFXekIsbUNBQTBCOzs7OztJQUMxQiwyQ0FBMkM7Ozs7O0lBQzNDLHdDQUFxQzs7Ozs7SUFDckMsbURBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9SREVSX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2NoZWNrb3V0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9SREVSX0hJU1RPUllfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9vcmRlci9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvdXNlci1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1VzZXJPcmRlckFkYXB0ZXIgaW1wbGVtZW50cyBVc2VyT3JkZXJBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0T3JkZXJFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgb3JkZXJFbmRwb2ludCA9ICd1c2Vycy8nICsgdXNlcklkICsgJy9vcmRlcnMnO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChvcmRlckVuZHBvaW50KTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICAvLyBUT0RPOiBEZXByZWNhdGVkLCByZW1vdmUgSXNzdWUgIzQxMjVcbiAgICBpZiAoIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS4xJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlZ2FjeUxvYWQodXNlcklkLCBvcmRlckNvZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnb3JkZXJEZXRhaWwnLCB7XG4gICAgICB1c2VySWQsXG4gICAgICBvcmRlcklkOiBvcmRlckNvZGUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmRlcj4odXJsKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoT1JERVJfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcHVibGljIGxvYWRIaXN0b3J5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PiB7XG4gICAgLy8gVE9ETzogRGVwcmVjYXRlZCwgcmVtb3ZlIElzc3VlICM0MTI1XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMScpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWdhY3lMb2FkSGlzdG9yeSh1c2VySWQsIHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgc29ydCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgaWYgKHBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXNbJ3BhZ2VTaXplJ10gPSBwYWdlU2l6ZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBhZ2UpIHtcbiAgICAgIHBhcmFtc1snY3VycmVudFBhZ2UnXSA9IGN1cnJlbnRQYWdlLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmIChzb3J0KSB7XG4gICAgICBwYXJhbXNbJ3NvcnQnXSA9IHNvcnQudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ29yZGVySGlzdG9yeScsIHsgdXNlcklkIH0sIHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmRlckhpc3RvcnlMaXN0Pih1cmwpXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9ISVNUT1JZX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICovXG4gIHByaXZhdGUgbGVnYWN5TG9hZCh1c2VySWQ6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRPcmRlckVuZHBvaW50KHVzZXJJZCkgKyAnLycgKyBvcmRlckNvZGU7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiAnZmllbGRzPUZVTEwnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JkZXI+KHVybCwge1xuICAgICAgICBwYXJhbXMsXG4gICAgICB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoT1JERVJfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJpdmF0ZSBsZWdhY3lMb2FkSGlzdG9yeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0T3JkZXJFbmRwb2ludCh1c2VySWQpO1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIGlmIChwYWdlU2l6ZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncGFnZVNpemUnLCBwYWdlU2l6ZS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQYWdlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdjdXJyZW50UGFnZScsIGN1cnJlbnRQYWdlLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBpZiAoc29ydCkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnc29ydCcsIHNvcnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLk9yZGVySGlzdG9yeUxpc3Q+KHVybCwgeyBwYXJhbXM6IHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoT1JERVJfSElTVE9SWV9OT1JNQUxJWkVSKSk7XG4gIH1cbn1cbiJdfQ==