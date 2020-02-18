/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
export class OccProductSearchPageNormalizer {
    /**
     * @param {?} converterService
     */
    constructor(converterService) {
        this.converterService = converterService;
        /**
         * Specifies the minimal number of top values in case
         * non have been setup by the business.
         */
        this.DEFAULT_TOP_VALUES = 6;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target = {}) {
        target = Object.assign({}, target, ((/** @type {?} */ (source))));
        this.normalizeFacetValues(source, target);
        if (source.products) {
            target.products = source.products.map((/**
             * @param {?} product
             * @return {?}
             */
            product => this.converterService.convert(product, PRODUCT_NORMALIZER)));
        }
        return target;
    }
    /**
     *
     * In case there are so-called `topValues` given for the facet values,
     * we replace the facet values by the topValues, simply because the
     * values are obsolete.
     *
     * `topValues` is a feature in Adaptive Search which can limit a large
     * amount of facet values to a small set (5 by default). As long as the backend
     * provides all facet values AND topValues, we normalize the data to not bother
     * the UI with this specific feature.
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    normalizeFacetValues(source, target) {
        if (target.facets) {
            target.facets = source.facets.map((/**
             * @param {?} facetSource
             * @return {?}
             */
            (facetSource) => {
                const { topValues } = facetSource, facetTarget = tslib_1.__rest(facetSource, ["topValues"]);
                facetTarget.topValueCount = topValues
                    ? topValues.length
                    : this.DEFAULT_TOP_VALUES;
                return facetTarget;
            }));
        }
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
     * Specifies the minimal number of top values in case
     * non have been setup by the business.
     * @type {?}
     * @protected
     */
    OccProductSearchPageNormalizer.prototype.DEFAULT_TOP_VALUES;
    /**
     * @type {?}
     * @private
     */
    OccProductSearchPageNormalizer.prototype.converterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXNlYXJjaC1wYWdlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZGLE9BQU8sRUFFTCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBSTVDLE1BQU0sT0FBTyw4QkFBOEI7Ozs7SUFFekMsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7Ozs7O1FBTTVDLHVCQUFrQixHQUFHLENBQUMsQ0FBQztJQU53QixDQUFDOzs7Ozs7SUFRMUQsT0FBTyxDQUNMLE1BQTZCLEVBQzdCLFNBQTRCLEVBQUU7UUFFOUIsTUFBTSxxQkFDRCxNQUFNLEVBQ04sQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUNuQixDQUFDO1FBQ0YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7WUFBQyxPQUFPLENBQUMsRUFBRSxDQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxFQUMzRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lBYU8sb0JBQW9CLENBQzFCLE1BQTZCLEVBQzdCLE1BQXlCO1FBRXpCLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRzs7OztZQUFDLENBQUMsV0FBa0IsRUFBRSxFQUFFO3NCQUNqRCxFQUFFLFNBQVMsS0FBcUIsV0FBVyxFQUE5Qix3REFBYztnQkFDakMsV0FBVyxDQUFDLGFBQWEsR0FBRyxTQUFTO29CQUNuQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU07b0JBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQzVCLE9BQU8sV0FBVyxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUFwREYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUpoQyxnQkFBZ0I7Ozs7Ozs7Ozs7SUFhaEIsNERBQWlDOzs7OztJQU5yQiwwREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGYWNldCxcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFNlYXJjaFBhZ2VOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSwgUHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG1pbmltYWwgbnVtYmVyIG9mIHRvcCB2YWx1ZXMgaW4gY2FzZVxuICAgKiBub24gaGF2ZSBiZWVuIHNldHVwIGJ5IHRoZSBidXNpbmVzcy5cbiAgICovXG4gIHByb3RlY3RlZCBERUZBVUxUX1RPUF9WQUxVRVMgPSA2O1xuXG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgdGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSA9IHt9XG4gICk6IFByb2R1Y3RTZWFyY2hQYWdlIHtcbiAgICB0YXJnZXQgPSB7XG4gICAgICAuLi50YXJnZXQsXG4gICAgICAuLi4oc291cmNlIGFzIGFueSksXG4gICAgfTtcbiAgICB0aGlzLm5vcm1hbGl6ZUZhY2V0VmFsdWVzKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICBpZiAoc291cmNlLnByb2R1Y3RzKSB7XG4gICAgICB0YXJnZXQucHJvZHVjdHMgPSBzb3VyY2UucHJvZHVjdHMubWFwKHByb2R1Y3QgPT5cbiAgICAgICAgdGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLmNvbnZlcnQocHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBJbiBjYXNlIHRoZXJlIGFyZSBzby1jYWxsZWQgYHRvcFZhbHVlc2AgZ2l2ZW4gZm9yIHRoZSBmYWNldCB2YWx1ZXMsXG4gICAqIHdlIHJlcGxhY2UgdGhlIGZhY2V0IHZhbHVlcyBieSB0aGUgdG9wVmFsdWVzLCBzaW1wbHkgYmVjYXVzZSB0aGVcbiAgICogdmFsdWVzIGFyZSBvYnNvbGV0ZS5cbiAgICpcbiAgICogYHRvcFZhbHVlc2AgaXMgYSBmZWF0dXJlIGluIEFkYXB0aXZlIFNlYXJjaCB3aGljaCBjYW4gbGltaXQgYSBsYXJnZVxuICAgKiBhbW91bnQgb2YgZmFjZXQgdmFsdWVzIHRvIGEgc21hbGwgc2V0ICg1IGJ5IGRlZmF1bHQpLiBBcyBsb25nIGFzIHRoZSBiYWNrZW5kXG4gICAqIHByb3ZpZGVzIGFsbCBmYWNldCB2YWx1ZXMgQU5EIHRvcFZhbHVlcywgd2Ugbm9ybWFsaXplIHRoZSBkYXRhIHRvIG5vdCBib3RoZXJcbiAgICogdGhlIFVJIHdpdGggdGhpcyBzcGVjaWZpYyBmZWF0dXJlLlxuICAgKi9cbiAgcHJpdmF0ZSBub3JtYWxpemVGYWNldFZhbHVlcyhcbiAgICBzb3VyY2U6IE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSxcbiAgICB0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlXG4gICk6IHZvaWQge1xuICAgIGlmICh0YXJnZXQuZmFjZXRzKSB7XG4gICAgICB0YXJnZXQuZmFjZXRzID0gc291cmNlLmZhY2V0cy5tYXAoKGZhY2V0U291cmNlOiBGYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRvcFZhbHVlcywgLi4uZmFjZXRUYXJnZXQgfSA9IGZhY2V0U291cmNlO1xuICAgICAgICBmYWNldFRhcmdldC50b3BWYWx1ZUNvdW50ID0gdG9wVmFsdWVzXG4gICAgICAgICAgPyB0b3BWYWx1ZXMubGVuZ3RoXG4gICAgICAgICAgOiB0aGlzLkRFRkFVTFRfVE9QX1ZBTFVFUztcbiAgICAgICAgcmV0dXJuIGZhY2V0VGFyZ2V0O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=