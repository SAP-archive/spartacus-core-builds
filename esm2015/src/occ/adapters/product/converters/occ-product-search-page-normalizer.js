/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConverterService, } from '../../../../util/converter.service';
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
export class OccProductSearchPageNormalizer {
    /**
     * @param {?} converterService
     */
    constructor(converterService) {
        this.converterService = converterService;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target = {}) {
        target = Object.assign({}, target, ((/** @type {?} */ (source))));
        if (source.products) {
            target.products = source.products.map((/**
             * @param {?} product
             * @return {?}
             */
            product => this.converterService.convert(product, PRODUCT_NORMALIZER)));
        }
        return target;
    }
}
OccProductSearchPageNormalizer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
OccProductSearchPageNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
/** @nocollapse */ OccProductSearchPageNormalizer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccProductSearchPageNormalizer_Factory() { return new OccProductSearchPageNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccProductSearchPageNormalizer, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductSearchPageNormalizer.prototype.converterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXNlYXJjaC1wYWdlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFFTCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7QUFJdkYsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUV6QyxZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUUxRCxPQUFPLENBQ0wsTUFBNkIsRUFDN0IsU0FBNEIsRUFBRTtRQUU5QixNQUFNLHFCQUNELE1BQU0sRUFDTixDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQ25CLENBQUM7UUFDRixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7WUFBQyxPQUFPLENBQUMsRUFBRSxDQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxFQUMzRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUFuQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQU5oQyxnQkFBZ0I7Ozs7Ozs7O0lBU0osMERBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7XG4gIENvbnZlcnRlcixcbiAgQ29udmVydGVyU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RTZWFyY2hQYWdlTm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdFNlYXJjaFBhZ2UsIFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLlByb2R1Y3RTZWFyY2hQYWdlLFxuICAgIHRhcmdldDogUHJvZHVjdFNlYXJjaFBhZ2UgPSB7fVxuICApOiBQcm9kdWN0U2VhcmNoUGFnZSB7XG4gICAgdGFyZ2V0ID0ge1xuICAgICAgLi4udGFyZ2V0LFxuICAgICAgLi4uKHNvdXJjZSBhcyBhbnkpLFxuICAgIH07XG4gICAgaWYgKHNvdXJjZS5wcm9kdWN0cykge1xuICAgICAgdGFyZ2V0LnByb2R1Y3RzID0gc291cmNlLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+XG4gICAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5jb252ZXJ0KHByb2R1Y3QsIFBST0RVQ1RfTk9STUFMSVpFUilcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbn1cbiJdfQ==