/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../product/connectors/product/converters';
import { OccRequestsOptimizerService } from '../../services/occ-requests-optimizer.service';
export class OccProductAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     * @param {?} requestsOptimizer
     */
    constructor(http, occEndpoints, converter, requestsOptimizer) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.requestsOptimizer = requestsOptimizer;
    }
    /**
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    load(productCode, scope) {
        return this.http
            .get(this.getEndpoint(productCode, scope))
            .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
    }
    /**
     * @param {?} products
     * @return {?}
     */
    loadMany(products) {
        /** @type {?} */
        const scopedDataWithUrls = products.map((/**
         * @param {?} model
         * @return {?}
         */
        model => ({
            scopedData: model,
            url: this.getEndpoint(model.code, model.scope),
        })));
        return this.requestsOptimizer
            .scopedDataLoad(scopedDataWithUrls)
            .map((/**
         * @param {?} scopedProduct
         * @return {?}
         */
        scopedProduct => ((/** @type {?} */ (Object.assign({}, scopedProduct, { data$: scopedProduct.data$.pipe(this.converter.pipeable(PRODUCT_NORMALIZER)) }))))));
    }
    /**
     * @protected
     * @param {?} code
     * @param {?=} scope
     * @return {?}
     */
    getEndpoint(code, scope) {
        return this.occEndpoints.getUrl('product', {
            productCode: code,
        }, undefined, scope);
    }
}
OccProductAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService },
    { type: OccRequestsOptimizerService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccProductAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccProductAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccProductAdapter.prototype.converter;
    /**
     * @type {?}
     * @protected
     */
    OccProductAdapter.prototype.requestsOptimizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9vY2MtcHJvZHVjdC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUtwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUc1RixNQUFNLE9BQU8saUJBQWlCOzs7Ozs7O0lBQzVCLFlBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkIsRUFDM0IsaUJBQThDO1FBSDlDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNkI7SUFDdkQsQ0FBQzs7Ozs7O0lBRUosSUFBSSxDQUFDLFdBQW1CLEVBQUUsS0FBYztRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsUUFBNkI7O2NBQzlCLGtCQUFrQixHQUF3QixRQUFRLENBQUMsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRSxVQUFVLEVBQUUsS0FBSztZQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDL0MsQ0FBQyxFQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsaUJBQWlCO2FBQzFCLGNBQWMsQ0FBYyxrQkFBa0IsQ0FBQzthQUMvQyxHQUFHOzs7O1FBQ0YsYUFBYSxDQUFDLEVBQUUsQ0FDZCxDQUFDLHFDQUNJLGFBQWEsSUFDaEIsS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUM1QyxLQUNtQixDQUFDLEVBQzFCLENBQUM7SUFDTixDQUFDOzs7Ozs7O0lBRVMsV0FBVyxDQUFDLElBQVksRUFBRSxLQUFjO1FBQ2hELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQzdCLFNBQVMsRUFDVDtZQUNFLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLEVBQ0QsU0FBUyxFQUNULEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQzs7O1lBM0NGLFVBQVU7Ozs7WUFWRixVQUFVO1lBQ1YsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQU1oQiwyQkFBMkI7Ozs7Ozs7SUFLaEMsaUNBQTBCOzs7OztJQUMxQix5Q0FBMkM7Ozs7O0lBQzNDLHNDQUFxQzs7Ozs7SUFDckMsOENBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9wcm9kdWN0LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBTY29wZWRQcm9kdWN0RGF0YSB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L3Njb3BlZC1wcm9kdWN0LWRhdGEnO1xuaW1wb3J0IHsgU2NvcGVkRGF0YVdpdGhVcmwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZmllbGRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscyc7XG5pbXBvcnQgeyBPY2NSZXF1ZXN0c09wdGltaXplclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtcmVxdWVzdHMtb3B0aW1pemVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdEFkYXB0ZXIgaW1wbGVtZW50cyBQcm9kdWN0QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVxdWVzdHNPcHRpbWl6ZXI6IE9jY1JlcXVlc3RzT3B0aW1pemVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZT86IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRFbmRwb2ludChwcm9kdWN0Q29kZSwgc2NvcGUpKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUFJPRFVDVF9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBsb2FkTWFueShwcm9kdWN0czogU2NvcGVkUHJvZHVjdERhdGFbXSk6IFNjb3BlZFByb2R1Y3REYXRhW10ge1xuICAgIGNvbnN0IHNjb3BlZERhdGFXaXRoVXJsczogU2NvcGVkRGF0YVdpdGhVcmxbXSA9IHByb2R1Y3RzLm1hcChtb2RlbCA9PiAoe1xuICAgICAgc2NvcGVkRGF0YTogbW9kZWwsXG4gICAgICB1cmw6IHRoaXMuZ2V0RW5kcG9pbnQobW9kZWwuY29kZSwgbW9kZWwuc2NvcGUpLFxuICAgIH0pKTtcblxuICAgIHJldHVybiB0aGlzLnJlcXVlc3RzT3B0aW1pemVyXG4gICAgICAuc2NvcGVkRGF0YUxvYWQ8T2NjLlByb2R1Y3Q+KHNjb3BlZERhdGFXaXRoVXJscylcbiAgICAgIC5tYXAoXG4gICAgICAgIHNjb3BlZFByb2R1Y3QgPT5cbiAgICAgICAgICAoe1xuICAgICAgICAgICAgLi4uc2NvcGVkUHJvZHVjdCxcbiAgICAgICAgICAgIGRhdGEkOiBzY29wZWRQcm9kdWN0LmRhdGEkLnBpcGUoXG4gICAgICAgICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFBST0RVQ1RfTk9STUFMSVpFUilcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSBhcyBTY29wZWRQcm9kdWN0RGF0YSlcbiAgICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RW5kcG9pbnQoY29kZTogc3RyaW5nLCBzY29wZT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybChcbiAgICAgICdwcm9kdWN0JyxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdENvZGU6IGNvZGUsXG4gICAgICB9LFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgc2NvcGVcbiAgICApO1xuICB9XG59XG4iXX0=