/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { PRODUCT_REFERENCES_NORMALIZER } from '../connectors/references/converters';
var OccProductReferencesAdapter = /** @class */ (function () {
    function OccProductReferencesAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    OccProductReferencesAdapter.prototype.load = /**
     * @param {?} productCode
     * @param {?=} referenceType
     * @param {?=} pageSize
     * @return {?}
     */
    function (productCode, referenceType, pageSize) {
        return this.http
            .get(this.getEndpoint(productCode, referenceType, pageSize))
            .pipe(this.converter.pipeable(PRODUCT_REFERENCES_NORMALIZER));
    };
    /**
     * @protected
     * @param {?} code
     * @param {?=} reference
     * @param {?=} pageSize
     * @return {?}
     */
    OccProductReferencesAdapter.prototype.getEndpoint = /**
     * @protected
     * @param {?} code
     * @param {?=} reference
     * @param {?=} pageSize
     * @return {?}
     */
    function (code, reference, pageSize) {
        return this.occEndpoints.getUrl('productReferences', {
            productCode: code,
        }, { referenceType: reference, pageSize: pageSize });
    };
    OccProductReferencesAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductReferencesAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccProductReferencesAdapter;
}());
export { OccProductReferencesAdapter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductReferencesAdapter.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccProductReferencesAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccProductReferencesAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL29jYy1wcm9kdWN0LXJlZmVyZW5jZXMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHcEY7SUFFRSxxQ0FDVSxJQUFnQixFQUNoQixZQUFpQyxFQUMvQixTQUEyQjtRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7O0lBRUosMENBQUk7Ozs7OztJQUFKLFVBQ0UsV0FBbUIsRUFDbkIsYUFBc0IsRUFDdEIsUUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7OztJQUVTLGlEQUFXOzs7Ozs7O0lBQXJCLFVBQ0UsSUFBWSxFQUNaLFNBQWtCLEVBQ2xCLFFBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQzdCLG1CQUFtQixFQUNuQjtZQUNFLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLEVBQ0QsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQ3ZDLENBQUM7SUFDSixDQUFDOztnQkE5QkYsVUFBVTs7OztnQkFURixVQUFVO2dCQUlWLG1CQUFtQjtnQkFDbkIsZ0JBQWdCOztJQW1DekIsa0NBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSwyQkFBMkI7Ozs7OztJQUVwQywyQ0FBd0I7Ozs7O0lBQ3hCLG1EQUF5Qzs7Ozs7SUFDekMsZ0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBST0RVQ1RfUkVGRVJFTkNFU19OT1JNQUxJWkVSIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9yZWZlcmVuY2VzL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciBpbXBsZW1lbnRzIFByb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlVHlwZT86IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlclxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RSZWZlcmVuY2VbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRFbmRwb2ludChwcm9kdWN0Q29kZSwgcmVmZXJlbmNlVHlwZSwgcGFnZVNpemUpKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUFJPRFVDVF9SRUZFUkVOQ0VTX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFbmRwb2ludChcbiAgICBjb2RlOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlPzogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybChcbiAgICAgICdwcm9kdWN0UmVmZXJlbmNlcycsXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3RDb2RlOiBjb2RlLFxuICAgICAgfSxcbiAgICAgIHsgcmVmZXJlbmNlVHlwZTogcmVmZXJlbmNlLCBwYWdlU2l6ZSB9XG4gICAgKTtcbiAgfVxufVxuIl19