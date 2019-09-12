/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { PRODUCT_REFERENCES_NORMALIZER } from '../../../product/connectors/references/converters';
export class OccProductReferencesAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
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
    load(productCode, referenceType, pageSize) {
        return this.http
            .get(this.getEndpoint(productCode, referenceType, pageSize))
            .pipe(this.converter.pipeable(PRODUCT_REFERENCES_NORMALIZER));
    }
    /**
     * @protected
     * @param {?} code
     * @param {?=} reference
     * @param {?=} pageSize
     * @return {?}
     */
    getEndpoint(code, reference, pageSize) {
        return this.occEndpoints.getUrl('productReferences', {
            productCode: code,
        }, { referenceType: reference, pageSize });
    }
}
OccProductReferencesAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductReferencesAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L29jYy1wcm9kdWN0LXJlZmVyZW5jZXMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFJbEcsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBQ3RDLFlBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7Ozs7OztJQUVKLElBQUksQ0FDRixXQUFtQixFQUNuQixhQUFzQixFQUN0QixRQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7Ozs7O0lBRVMsV0FBVyxDQUNuQixJQUFZLEVBQ1osU0FBa0IsRUFDbEIsUUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FDN0IsbUJBQW1CLEVBQ25CO1lBQ0UsV0FBVyxFQUFFLElBQUk7U0FDbEIsRUFDRCxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQ3ZDLENBQUM7SUFDSixDQUFDOzs7WUE5QkYsVUFBVTs7OztZQVRGLFVBQVU7WUFJVixtQkFBbUI7WUFDbkIsZ0JBQWdCOzs7Ozs7O0lBT3JCLDJDQUEwQjs7Ozs7SUFDMUIsbURBQTJDOzs7OztJQUMzQyxnREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQUk9EVUNUX1JFRkVSRU5DRVNfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9yZWZlcmVuY2VzL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3JlZmVyZW5jZXMvcHJvZHVjdC1yZWZlcmVuY2VzLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyIGltcGxlbWVudHMgUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlVHlwZT86IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlclxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RSZWZlcmVuY2VbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRFbmRwb2ludChwcm9kdWN0Q29kZSwgcmVmZXJlbmNlVHlwZSwgcGFnZVNpemUpKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUFJPRFVDVF9SRUZFUkVOQ0VTX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFbmRwb2ludChcbiAgICBjb2RlOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlPzogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybChcbiAgICAgICdwcm9kdWN0UmVmZXJlbmNlcycsXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3RDb2RlOiBjb2RlLFxuICAgICAgfSxcbiAgICAgIHsgcmVmZXJlbmNlVHlwZTogcmVmZXJlbmNlLCBwYWdlU2l6ZSB9XG4gICAgKTtcbiAgfVxufVxuIl19