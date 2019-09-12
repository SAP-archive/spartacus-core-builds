/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { PRODUCT_REFERENCES_NORMALIZER } from '../../../product/connectors/references/converters';
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
     * @protected
     */
    OccProductReferencesAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccProductReferencesAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccProductReferencesAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L29jYy1wcm9kdWN0LXJlZmVyZW5jZXMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFHbEc7SUFFRSxxQ0FDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7O0lBRUosMENBQUk7Ozs7OztJQUFKLFVBQ0UsV0FBbUIsRUFDbkIsYUFBc0IsRUFDdEIsUUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7OztJQUVTLGlEQUFXOzs7Ozs7O0lBQXJCLFVBQ0UsSUFBWSxFQUNaLFNBQWtCLEVBQ2xCLFFBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQzdCLG1CQUFtQixFQUNuQjtZQUNFLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLEVBQ0QsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQ3ZDLENBQUM7SUFDSixDQUFDOztnQkE5QkYsVUFBVTs7OztnQkFURixVQUFVO2dCQUlWLG1CQUFtQjtnQkFDbkIsZ0JBQWdCOztJQW1DekIsa0NBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSwyQkFBMkI7Ozs7OztJQUVwQywyQ0FBMEI7Ozs7O0lBQzFCLG1EQUEyQzs7Ozs7SUFDM0MsZ0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUFJPRFVDVF9SRUZFUkVOQ0VTX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcmVmZXJlbmNlcy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciBpbXBsZW1lbnRzIFByb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZChcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU/OiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0UmVmZXJlbmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0RW5kcG9pbnQocHJvZHVjdENvZGUsIHJlZmVyZW5jZVR5cGUsIHBhZ2VTaXplKSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFBST0RVQ1RfUkVGRVJFTkNFU19OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RW5kcG9pbnQoXG4gICAgY29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZT86IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlclxuICApOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoXG4gICAgICAncHJvZHVjdFJlZmVyZW5jZXMnLFxuICAgICAge1xuICAgICAgICBwcm9kdWN0Q29kZTogY29kZSxcbiAgICAgIH0sXG4gICAgICB7IHJlZmVyZW5jZVR5cGU6IHJlZmVyZW5jZSwgcGFnZVNpemUgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==