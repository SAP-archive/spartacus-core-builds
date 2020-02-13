/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ORDER_NORMALIZER } from '../../../checkout/connectors/checkout/converters';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { CONSIGNMENT_TRACKING_NORMALIZER, ORDER_HISTORY_NORMALIZER, ORDER_RETURNS_NORMALIZER, ORDER_RETURN_REQUEST_INPUT_SERIALIZER, ORDER_RETURN_REQUEST_NORMALIZER, } from '../../../user/connectors/order/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../utils/interceptor-util';
import { OCC_USER_ID_ANONYMOUS, OCC_USER_ID_CURRENT, } from '../../utils/occ-constants';
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
        /** @type {?} */
        let headers = new HttpHeaders();
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        return this.http
            .get(url, { headers })
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
     * @param {?=} userId
     * @return {?}
     */
    getConsignmentTracking(orderCode, consignmentCode, userId = OCC_USER_ID_CURRENT) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('consignmentTracking', {
            userId,
            orderCode,
            consignmentCode,
        });
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(CONSIGNMENT_TRACKING_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @param {?} cancelRequestInput
     * @return {?}
     */
    cancel(userId, orderCode, cancelRequestInput) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('cancelOrder', {
            userId,
            orderId: orderCode,
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .post(url, cancelRequestInput, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
    }
    /**
     * @param {?} userId
     * @param {?} returnRequestInput
     * @return {?}
     */
    createReturnRequest(userId, returnRequestInput) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('returnOrder', {
            userId,
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        returnRequestInput = this.converter.convert(returnRequestInput, ORDER_RETURN_REQUEST_INPUT_SERIALIZER);
        return this.http.post(url, returnRequestInput, { headers }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))), this.converter.pipeable(ORDER_RETURN_REQUEST_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    loadReturnRequestList(userId, pageSize, currentPage, sort) {
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
        const url = this.occEndpoints.getUrl('orderReturns', { userId }, params);
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(ORDER_RETURNS_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} returnRequestCode
     * @return {?}
     */
    loadReturnRequestDetail(userId, returnRequestCode) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('orderReturnDetail', {
            userId,
            returnRequestCode,
        });
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(ORDER_RETURN_REQUEST_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} returnRequestCode
     * @param {?} returnRequestModification
     * @return {?}
     */
    cancelReturnRequest(userId, returnRequestCode, returnRequestModification) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('cancelReturn', {
            userId,
            returnRequestCode,
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, returnRequestModification, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItb3JkZXIuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci1vcmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBV2hHLE9BQU8sRUFDTCwrQkFBK0IsRUFDL0Isd0JBQXdCLEVBQ3hCLHdCQUF3QixFQUN4QixxQ0FBcUMsRUFDckMsK0JBQStCLEdBQ2hDLE1BQU0sMkNBQTJDLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsR0FDakIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG1CQUFtQixHQUNwQixNQUFNLDJCQUEyQixDQUFDO0FBR25DLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFDOUIsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQixFQUMzQixvQkFBMkM7UUFIM0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FB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TixpQkFBaUI7U0FDbEIsQ0FBQzs7Y0FDSSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEtBQUssQ0FBQyxHQUFHLEVBQUUseUJBQXlCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNsRCxJQUFJLENBQUMsVUFBVTs7OztRQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQWpPRixVQUFVOzs7O1lBcENGLFVBQVU7WUEwQlYsbUJBQW1CO1lBRm5CLGdCQUFnQjtZQW5CaEIsb0JBQW9COzs7Ozs7O0lBa0N6QixtQ0FBMEI7Ozs7O0lBQzFCLDJDQUEyQzs7Ozs7SUFDM0Msd0NBQXFDOzs7OztJQUNyQyxtREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPUkRFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7XG4gIENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgT3JkZXIsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG4gIFJldHVyblJlcXVlc3QsXG4gIFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdExpc3QsXG4gIFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24sXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7XG4gIENPTlNJR05NRU5UX1RSQUNLSU5HX05PUk1BTElaRVIsXG4gIE9SREVSX0hJU1RPUllfTk9STUFMSVpFUixcbiAgT1JERVJfUkVUVVJOU19OT1JNQUxJWkVSLFxuICBPUkRFUl9SRVRVUk5fUkVRVUVTVF9JTlBVVF9TRVJJQUxJWkVSLFxuICBPUkRFUl9SRVRVUk5fUkVRVUVTVF9OT1JNQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DTElFTlRfVE9LRU4sXG59IGZyb20gJy4uLy4uL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuaW1wb3J0IHtcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxufSBmcm9tICcuLi8uLi91dGlscy9vY2MtY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1VzZXJPcmRlckFkYXB0ZXIgaW1wbGVtZW50cyBVc2VyT3JkZXJBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0T3JkZXJFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgb3JkZXJFbmRwb2ludCA9ICd1c2Vycy8nICsgdXNlcklkICsgJy9vcmRlcnMnO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChvcmRlckVuZHBvaW50KTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICAvLyBUT0RPOiBEZXByZWNhdGVkLCByZW1vdmUgSXNzdWUgIzQxMjVcbiAgICBpZiAoIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS4xJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlZ2FjeUxvYWQodXNlcklkLCBvcmRlckNvZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnb3JkZXJEZXRhaWwnLCB7XG4gICAgICB1c2VySWQsXG4gICAgICBvcmRlcklkOiBvcmRlckNvZGUsXG4gICAgfSk7XG5cbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIGlmICh1c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgaGVhZGVycyA9IEludGVyY2VwdG9yVXRpbC5jcmVhdGVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgdHJ1ZSwgaGVhZGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JkZXI+KHVybCwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBwdWJsaWMgbG9hZEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+IHtcbiAgICAvLyBUT0RPOiBEZXByZWNhdGVkLCByZW1vdmUgSXNzdWUgIzQxMjVcbiAgICBpZiAoIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS4xJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlZ2FjeUxvYWRIaXN0b3J5KHVzZXJJZCwgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBzb3J0KTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICBpZiAocGFnZVNpemUpIHtcbiAgICAgIHBhcmFtc1sncGFnZVNpemUnXSA9IHBhZ2VTaXplLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zWydjdXJyZW50UGFnZSddID0gY3VycmVudFBhZ2UudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHNvcnQpIHtcbiAgICAgIHBhcmFtc1snc29ydCddID0gc29ydC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnb3JkZXJIaXN0b3J5JywgeyB1c2VySWQgfSwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLk9yZGVySGlzdG9yeUxpc3Q+KHVybClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX0hJU1RPUllfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJpdmF0ZSBsZWdhY3lMb2FkKHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldE9yZGVyRW5kcG9pbnQodXNlcklkKSArICcvJyArIG9yZGVyQ29kZTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6ICdmaWVsZHM9RlVMTCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmRlcj4odXJsLCB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAqL1xuICBwcml2YXRlIGxlZ2FjeUxvYWRIaXN0b3J5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRPcmRlckVuZHBvaW50KHVzZXJJZCk7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgaWYgKHBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdwYWdlU2l6ZScsIHBhZ2VTaXplLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBhZ2UpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2N1cnJlbnRQYWdlJywgY3VycmVudFBhZ2UudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGlmIChzb3J0KSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdzb3J0Jywgc29ydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JkZXJIaXN0b3J5TGlzdD4odXJsLCB7IHBhcmFtczogcGFyYW1zIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9ISVNUT1JZX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25zaWdubWVudFRyYWNraW5nKFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nLFxuICAgIHVzZXJJZDogc3RyaW5nID0gT0NDX1VTRVJfSURfQ1VSUkVOVFxuICApOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2NvbnNpZ25tZW50VHJhY2tpbmcnLCB7XG4gICAgICB1c2VySWQsXG4gICAgICBvcmRlckNvZGUsXG4gICAgICBjb25zaWdubWVudENvZGUsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxDb25zaWdubWVudFRyYWNraW5nPih1cmwpXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDT05TSUdOTUVOVF9UUkFDS0lOR19OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNhbmNlbFJlcXVlc3RJbnB1dDogQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2NhbmNlbE9yZGVyJywge1xuICAgICAgdXNlcklkLFxuICAgICAgb3JkZXJJZDogb3JkZXJDb2RlLFxuICAgIH0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHVybCwgY2FuY2VsUmVxdWVzdElucHV0LCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlUmV0dXJuUmVxdWVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0SW5wdXQ6IFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdFxuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3JldHVybk9yZGVyJywge1xuICAgICAgdXNlcklkLFxuICAgIH0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVyblJlcXVlc3RJbnB1dCA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQoXG4gICAgICByZXR1cm5SZXF1ZXN0SW5wdXQsXG4gICAgICBPUkRFUl9SRVRVUk5fUkVRVUVTVF9JTlBVVF9TRVJJQUxJWkVSXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHJldHVyblJlcXVlc3RJbnB1dCwgeyBoZWFkZXJzIH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9SRVRVUk5fUkVRVUVTVF9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgbG9hZFJldHVyblJlcXVlc3RMaXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0TGlzdD4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGlmIChwYWdlU2l6ZSkge1xuICAgICAgcGFyYW1zWydwYWdlU2l6ZSddID0gcGFnZVNpemUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQYWdlKSB7XG4gICAgICBwYXJhbXNbJ2N1cnJlbnRQYWdlJ10gPSBjdXJyZW50UGFnZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoc29ydCkge1xuICAgICAgcGFyYW1zWydzb3J0J10gPSBzb3J0LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdvcmRlclJldHVybnMnLCB7IHVzZXJJZCB9LCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxSZXR1cm5SZXF1ZXN0TGlzdD4odXJsKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoT1JERVJfUkVUVVJOU19OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBwdWJsaWMgbG9hZFJldHVyblJlcXVlc3REZXRhaWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ29yZGVyUmV0dXJuRGV0YWlsJywge1xuICAgICAgdXNlcklkLFxuICAgICAgcmV0dXJuUmVxdWVzdENvZGUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PFJldHVyblJlcXVlc3Q+KHVybClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX1JFVFVSTl9SRVFVRVNUX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHB1YmxpYyBjYW5jZWxSZXR1cm5SZXF1ZXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbjogUmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvblxuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdjYW5jZWxSZXR1cm4nLCB7XG4gICAgICB1c2VySWQsXG4gICAgICByZXR1cm5SZXF1ZXN0Q29kZSxcbiAgICB9KTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2godXJsLCByZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cbn1cbiJdfQ==