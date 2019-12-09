/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../product/connectors/product/converters';
import { OccRequestsOptimizerService } from '../../services/occ-requests-optimizer.service';
var OccProductAdapter = /** @class */ (function () {
    function OccProductAdapter(http, occEndpoints, converter, requestsOptimizer) {
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
    OccProductAdapter.prototype.load = /**
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    function (productCode, scope) {
        return this.http
            .get(this.getEndpoint(productCode, scope))
            .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
    };
    /**
     * @param {?} products
     * @return {?}
     */
    OccProductAdapter.prototype.loadMany = /**
     * @param {?} products
     * @return {?}
     */
    function (products) {
        var _this = this;
        /** @type {?} */
        var scopedDataWithUrls = products.map((/**
         * @param {?} model
         * @return {?}
         */
        function (model) { return ({
            scopedData: model,
            url: _this.getEndpoint(model.code, model.scope),
        }); }));
        return this.requestsOptimizer
            .scopedDataLoad(scopedDataWithUrls)
            .map((/**
         * @param {?} scopedProduct
         * @return {?}
         */
        function (scopedProduct) {
            return ((/** @type {?} */ (tslib_1.__assign({}, scopedProduct, { data$: scopedProduct.data$.pipe(_this.converter.pipeable(PRODUCT_NORMALIZER)) }))));
        }));
    };
    /**
     * @protected
     * @param {?} code
     * @param {?=} scope
     * @return {?}
     */
    OccProductAdapter.prototype.getEndpoint = /**
     * @protected
     * @param {?} code
     * @param {?=} scope
     * @return {?}
     */
    function (code, scope) {
        return this.occEndpoints.getUrl('product', {
            productCode: code,
        }, undefined, scope);
    };
    OccProductAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService },
        { type: OccRequestsOptimizerService }
    ]; };
    return OccProductAdapter;
}());
export { OccProductAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9vY2MtcHJvZHVjdC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFLcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFNUY7SUFFRSwyQkFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQixFQUMzQixpQkFBOEM7UUFIOUMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE2QjtJQUN2RCxDQUFDOzs7Ozs7SUFFSixnQ0FBSTs7Ozs7SUFBSixVQUFLLFdBQW1CLEVBQUUsS0FBYztRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCxvQ0FBUTs7OztJQUFSLFVBQVMsUUFBNkI7UUFBdEMsaUJBaUJDOztZQWhCTyxrQkFBa0IsR0FBd0IsUUFBUSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUM7WUFDckUsVUFBVSxFQUFFLEtBQUs7WUFDakIsR0FBRyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQy9DLENBQUMsRUFIb0UsQ0FHcEUsRUFBQztRQUVILE9BQU8sSUFBSSxDQUFDLGlCQUFpQjthQUMxQixjQUFjLENBQWMsa0JBQWtCLENBQUM7YUFDL0MsR0FBRzs7OztRQUNGLFVBQUEsYUFBYTtZQUNYLE9BQUEsQ0FBQyx3Q0FDSSxhQUFhLElBQ2hCLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDN0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FDNUMsS0FDbUIsQ0FBQztRQUx2QixDQUt1QixFQUMxQixDQUFDO0lBQ04sQ0FBQzs7Ozs7OztJQUVTLHVDQUFXOzs7Ozs7SUFBckIsVUFBc0IsSUFBWSxFQUFFLEtBQWM7UUFDaEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FDN0IsU0FBUyxFQUNUO1lBQ0UsV0FBVyxFQUFFLElBQUk7U0FDbEIsRUFDRCxTQUFTLEVBQ1QsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOztnQkEzQ0YsVUFBVTs7OztnQkFWRixVQUFVO2dCQUNWLG1CQUFtQjtnQkFDbkIsZ0JBQWdCO2dCQU1oQiwyQkFBMkI7O0lBOENwQyx3QkFBQztDQUFBLEFBNUNELElBNENDO1NBM0NZLGlCQUFpQjs7Ozs7O0lBRTFCLGlDQUEwQjs7Ozs7SUFDMUIseUNBQTJDOzs7OztJQUMzQyxzQ0FBcUM7Ozs7O0lBQ3JDLDhDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5hZGFwdGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgU2NvcGVkUHJvZHVjdERhdGEgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9zY29wZWQtcHJvZHVjdC1kYXRhJztcbmltcG9ydCB7IFNjb3BlZERhdGFXaXRoVXJsIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWZpZWxkcy5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMnO1xuaW1wb3J0IHsgT2NjUmVxdWVzdHNPcHRpbWl6ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLXJlcXVlc3RzLW9wdGltaXplci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RBZGFwdGVyIGltcGxlbWVudHMgUHJvZHVjdEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlcXVlc3RzT3B0aW1pemVyOiBPY2NSZXF1ZXN0c09wdGltaXplclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGU/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0RW5kcG9pbnQocHJvZHVjdENvZGUsIHNjb3BlKSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFBST0RVQ1RfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgbG9hZE1hbnkocHJvZHVjdHM6IFNjb3BlZFByb2R1Y3REYXRhW10pOiBTY29wZWRQcm9kdWN0RGF0YVtdIHtcbiAgICBjb25zdCBzY29wZWREYXRhV2l0aFVybHM6IFNjb3BlZERhdGFXaXRoVXJsW10gPSBwcm9kdWN0cy5tYXAobW9kZWwgPT4gKHtcbiAgICAgIHNjb3BlZERhdGE6IG1vZGVsLFxuICAgICAgdXJsOiB0aGlzLmdldEVuZHBvaW50KG1vZGVsLmNvZGUsIG1vZGVsLnNjb3BlKSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0c09wdGltaXplclxuICAgICAgLnNjb3BlZERhdGFMb2FkPE9jYy5Qcm9kdWN0PihzY29wZWREYXRhV2l0aFVybHMpXG4gICAgICAubWFwKFxuICAgICAgICBzY29wZWRQcm9kdWN0ID0+XG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIC4uLnNjb3BlZFByb2R1Y3QsXG4gICAgICAgICAgICBkYXRhJDogc2NvcGVkUHJvZHVjdC5kYXRhJC5waXBlKFxuICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShQUk9EVUNUX05PUk1BTElaRVIpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0gYXMgU2NvcGVkUHJvZHVjdERhdGEpXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVuZHBvaW50KGNvZGU6IHN0cmluZywgc2NvcGU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoXG4gICAgICAncHJvZHVjdCcsXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3RDb2RlOiBjb2RlLFxuICAgICAgfSxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHNjb3BlXG4gICAgKTtcbiAgfVxufVxuIl19