/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDER_NORMALIZER } from '../../../checkout/connectors/checkout/converters';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { ORDER_HISTORY_NORMALIZER, CONSIGNMENT_TRACKING_NORMALIZER, } from '../../../user/connectors/order/converters';
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
    /**
     * @param {?} orderCode
     * @param {?} consignmentCode
     * @return {?}
     */
    getConsignmentTracking(orderCode, consignmentCode) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('consignmentTracking', {
            orderCode,
            consignmentCode,
        });
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(CONSIGNMENT_TRACKING_NORMALIZER));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItb3JkZXIuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci1vcmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHaEcsT0FBTyxFQUNMLHdCQUF3QixFQUN4QiwrQkFBK0IsR0FDaEMsTUFBTSwyQ0FBMkMsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUczRSxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBQzlCLFlBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkIsRUFDM0Isb0JBQTJDO1FBSDNDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7SUFDcEQsQ0FBQzs7Ozs7Ozs7O0lBT00sZ0JBQWdCLENBQUMsTUFBYzs7Y0FDakMsYUFBYSxHQUFHLFFBQVEsR0FBRyxNQUFNLEdBQUcsU0FBUztRQUNuRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVNLElBQUksQ0FBQyxNQUFjLEVBQUUsU0FBaUI7UUFDM0MsdUNBQXVD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QUFDLENBQUM7U0FDbkM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUF1QixHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFTSxzQkFBc0IsQ0FDM0IsU0FBaUIsRUFDakIsZUFBdUI7O2NBRWpCLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTtZQUMxRCxTQUFTO1lBQ1QsZUFBZTtTQUNoQixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBc0IsR0FBRyxDQUFDO2FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7O1lBMUhGLFVBQVU7Ozs7WUFoQkYsVUFBVTtZQWNWLG1CQUFtQjtZQUZuQixnQkFBZ0I7WUFSaEIsb0JBQW9COzs7Ozs7O0lBZXpCLG1DQUEwQjs7Ozs7SUFDMUIsMkNBQTJDOzs7OztJQUMzQyx3Q0FBcUM7Ozs7O0lBQ3JDLG1EQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPUkRFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgT1JERVJfSElTVE9SWV9OT1JNQUxJWkVSLFxuICBDT05TSUdOTUVOVF9UUkFDS0lOR19OT1JNQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NVc2VyT3JkZXJBZGFwdGVyIGltcGxlbWVudHMgVXNlck9yZGVyQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZ1NlcnZpY2U/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldE9yZGVyRW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9yZGVyRW5kcG9pbnQgPSAndXNlcnMvJyArIHVzZXJJZCArICcvb3JkZXJzJztcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQob3JkZXJFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgbG9hZCh1c2VySWQ6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgLy8gVE9ETzogRGVwcmVjYXRlZCwgcmVtb3ZlIElzc3VlICM0MTI1XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMScpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWdhY3lMb2FkKHVzZXJJZCwgb3JkZXJDb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ29yZGVyRGV0YWlsJywge1xuICAgICAgdXNlcklkLFxuICAgICAgb3JkZXJJZDogb3JkZXJDb2RlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JkZXI+KHVybClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkSGlzdG9yeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIC8vIFRPRE86IERlcHJlY2F0ZWQsIHJlbW92ZSBJc3N1ZSAjNDEyNVxuICAgIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcxLjEnKSkge1xuICAgICAgcmV0dXJuIHRoaXMubGVnYWN5TG9hZEhpc3RvcnkodXNlcklkLCBwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHNvcnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGlmIChwYWdlU2l6ZSkge1xuICAgICAgcGFyYW1zWydwYWdlU2l6ZSddID0gcGFnZVNpemUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQYWdlKSB7XG4gICAgICBwYXJhbXNbJ2N1cnJlbnRQYWdlJ10gPSBjdXJyZW50UGFnZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoc29ydCkge1xuICAgICAgcGFyYW1zWydzb3J0J10gPSBzb3J0LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdvcmRlckhpc3RvcnknLCB7IHVzZXJJZCB9LCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JkZXJIaXN0b3J5TGlzdD4odXJsKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoT1JERVJfSElTVE9SWV9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAqL1xuICBwcml2YXRlIGxlZ2FjeUxvYWQodXNlcklkOiBzdHJpbmcsIG9yZGVyQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0T3JkZXJFbmRwb2ludCh1c2VySWQpICsgJy8nICsgb3JkZXJDb2RlO1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogJ2ZpZWxkcz1GVUxMJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLk9yZGVyPih1cmwsIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICovXG4gIHByaXZhdGUgbGVnYWN5TG9hZEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldE9yZGVyRW5kcG9pbnQodXNlcklkKTtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBpZiAocGFnZVNpemUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgcGFnZVNpemUudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnY3VycmVudFBhZ2UnLCBjdXJyZW50UGFnZS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgaWYgKHNvcnQpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3NvcnQnLCBzb3J0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmRlckhpc3RvcnlMaXN0Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX0hJU1RPUllfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcHVibGljIGdldENvbnNpZ25tZW50VHJhY2tpbmcoXG4gICAgb3JkZXJDb2RlOiBzdHJpbmcsXG4gICAgY29uc2lnbm1lbnRDb2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdjb25zaWdubWVudFRyYWNraW5nJywge1xuICAgICAgb3JkZXJDb2RlLFxuICAgICAgY29uc2lnbm1lbnRDb2RlLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8Q29uc2lnbm1lbnRUcmFja2luZz4odXJsKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ09OU0lHTk1FTlRfVFJBQ0tJTkdfTk9STUFMSVpFUikpO1xuICB9XG59XG4iXX0=