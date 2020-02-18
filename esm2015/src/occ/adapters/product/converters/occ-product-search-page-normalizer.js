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
        this.normalizeFacets(target);
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
     * @private
     * @param {?} target
     * @return {?}
     */
    normalizeFacets(target) {
        this.normalizeFacetValues(target);
        this.normalizeUselessFacets(target);
    }
    /**
     * The (current) backend returns facets with values that do not contribute
     * to the facet navigation much, as the number in the result list will not get
     * behaviour, see https://jira.hybris.com/browse/CS-427.
     *
     * As long as this is not in place, we manually filter the facet from the list;
     * any facet that does not have a count < the total results will be dropped from
     * the facets.
     * @private
     * @param {?} target
     * @return {?}
     */
    normalizeUselessFacets(target) {
        target.facets = target.facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        facet => {
            return (!target.pagination ||
                !target.pagination.totalResults ||
                ((!facet.hasOwnProperty('visible') || facet.visible) &&
                    facet.values &&
                    facet.values.find((/**
                     * @param {?} value
                     * @return {?}
                     */
                    value => {
                        return (value.selected || value.count < target.pagination.totalResults);
                    }))));
        }));
    }
    /*
       * In case there are so-called `topValues` given for the facet values,
       * values are obsolete.
       *
       * `topValues` is a feature in Adaptive Search which can limit a large
       * amount of facet values to a small set (5 by default). As long as the backend
       * provides all facet values AND topValues, we normalize the data to not bother
       * the UI with this specific feature.
       */
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    normalizeFacetValues(target) {
        if (target.facets) {
            target.facets = target.facets.map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXNlYXJjaC1wYWdlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZGLE9BQU8sRUFFTCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBSTVDLE1BQU0sT0FBTyw4QkFBOEI7Ozs7SUFFekMsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7Ozs7O1FBTTVDLHVCQUFrQixHQUFHLENBQUMsQ0FBQztJQU53QixDQUFDOzs7Ozs7SUFRMUQsT0FBTyxDQUNMLE1BQTZCLEVBQzdCLFNBQTRCLEVBQUU7UUFFOUIsTUFBTSxxQkFDRCxNQUFNLEVBQ04sQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUNuQixDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7WUFBQyxPQUFPLENBQUMsRUFBRSxDQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxFQUMzRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsTUFBeUI7UUFDL0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7Ozs7Ozs7O0lBVU8sc0JBQXNCLENBQUMsTUFBeUI7UUFDdEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUMzQyxPQUFPLENBQ0wsQ0FBQyxNQUFNLENBQUMsVUFBVTtnQkFDbEIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVk7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDbEQsS0FBSyxDQUFDLE1BQU07b0JBQ1osS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O29CQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN4QixPQUFPLENBQ0wsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUMvRCxDQUFDO29CQUNKLENBQUMsRUFBQyxDQUFDLENBQ04sQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lBV08sb0JBQW9CLENBQUMsTUFBeUI7UUFDcEQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxXQUFrQixFQUFFLEVBQUU7c0JBQ2pELEVBQUUsU0FBUyxLQUFxQixXQUFXLEVBQTlCLHdEQUFjO2dCQUNqQyxXQUFXLENBQUMsYUFBYSxHQUFHLFNBQVM7b0JBQ25DLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTTtvQkFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDNUIsT0FBTyxXQUFXLENBQUM7WUFDckIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQTdFRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSmhDLGdCQUFnQjs7Ozs7Ozs7OztJQWFoQiw0REFBaUM7Ozs7O0lBTnJCLDBEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZhY2V0LFxuICBQcm9kdWN0U2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NQcm9kdWN0U2VhcmNoUGFnZU5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3RTZWFyY2hQYWdlLCBQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWluaW1hbCBudW1iZXIgb2YgdG9wIHZhbHVlcyBpbiBjYXNlXG4gICAqIG5vbiBoYXZlIGJlZW4gc2V0dXAgYnkgdGhlIGJ1c2luZXNzLlxuICAgKi9cbiAgcHJvdGVjdGVkIERFRkFVTFRfVE9QX1ZBTFVFUyA9IDY7XG5cbiAgY29udmVydChcbiAgICBzb3VyY2U6IE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSxcbiAgICB0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlID0ge31cbiAgKTogUHJvZHVjdFNlYXJjaFBhZ2Uge1xuICAgIHRhcmdldCA9IHtcbiAgICAgIC4uLnRhcmdldCxcbiAgICAgIC4uLihzb3VyY2UgYXMgYW55KSxcbiAgICB9O1xuXG4gICAgdGhpcy5ub3JtYWxpemVGYWNldHModGFyZ2V0KTtcbiAgICBpZiAoc291cmNlLnByb2R1Y3RzKSB7XG4gICAgICB0YXJnZXQucHJvZHVjdHMgPSBzb3VyY2UucHJvZHVjdHMubWFwKHByb2R1Y3QgPT5cbiAgICAgICAgdGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLmNvbnZlcnQocHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplRmFjZXRzKHRhcmdldDogUHJvZHVjdFNlYXJjaFBhZ2UpOiB2b2lkIHtcbiAgICB0aGlzLm5vcm1hbGl6ZUZhY2V0VmFsdWVzKHRhcmdldCk7XG4gICAgdGhpcy5ub3JtYWxpemVVc2VsZXNzRmFjZXRzKHRhcmdldCk7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSAoY3VycmVudCkgYmFja2VuZCByZXR1cm5zIGZhY2V0cyB3aXRoIHZhbHVlcyB0aGF0IGRvIG5vdCBjb250cmlidXRlXG4gICAqIHRvIHRoZSBmYWNldCBuYXZpZ2F0aW9uIG11Y2gsIGFzIHRoZSBudW1iZXIgaW4gdGhlIHJlc3VsdCBsaXN0IHdpbGwgbm90IGdldFxuICAgKiBiZWhhdmlvdXIsIHNlZSBodHRwczovL2ppcmEuaHlicmlzLmNvbS9icm93c2UvQ1MtNDI3LlxuICAgKlxuICAgKiBBcyBsb25nIGFzIHRoaXMgaXMgbm90IGluIHBsYWNlLCB3ZSBtYW51YWxseSBmaWx0ZXIgdGhlIGZhY2V0IGZyb20gdGhlIGxpc3Q7XG4gICAqIGFueSBmYWNldCB0aGF0IGRvZXMgbm90IGhhdmUgYSBjb3VudCA8IHRoZSB0b3RhbCByZXN1bHRzIHdpbGwgYmUgZHJvcHBlZCBmcm9tXG4gICAqIHRoZSBmYWNldHMuXG4gICAqL1xuICBwcml2YXRlIG5vcm1hbGl6ZVVzZWxlc3NGYWNldHModGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSk6IHZvaWQge1xuICAgIHRhcmdldC5mYWNldHMgPSB0YXJnZXQuZmFjZXRzLmZpbHRlcihmYWNldCA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAhdGFyZ2V0LnBhZ2luYXRpb24gfHxcbiAgICAgICAgIXRhcmdldC5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cyB8fFxuICAgICAgICAoKCFmYWNldC5oYXNPd25Qcm9wZXJ0eSgndmlzaWJsZScpIHx8IGZhY2V0LnZpc2libGUpICYmXG4gICAgICAgICAgZmFjZXQudmFsdWVzICYmXG4gICAgICAgICAgZmFjZXQudmFsdWVzLmZpbmQodmFsdWUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgdmFsdWUuc2VsZWN0ZWQgfHwgdmFsdWUuY291bnQgPCB0YXJnZXQucGFnaW5hdGlvbi50b3RhbFJlc3VsdHNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLypcbiAgICogSW4gY2FzZSB0aGVyZSBhcmUgc28tY2FsbGVkIGB0b3BWYWx1ZXNgIGdpdmVuIGZvciB0aGUgZmFjZXQgdmFsdWVzLFxuICAgKiB2YWx1ZXMgYXJlIG9ic29sZXRlLlxuICAgKlxuICAgKiBgdG9wVmFsdWVzYCBpcyBhIGZlYXR1cmUgaW4gQWRhcHRpdmUgU2VhcmNoIHdoaWNoIGNhbiBsaW1pdCBhIGxhcmdlXG4gICAqIGFtb3VudCBvZiBmYWNldCB2YWx1ZXMgdG8gYSBzbWFsbCBzZXQgKDUgYnkgZGVmYXVsdCkuIEFzIGxvbmcgYXMgdGhlIGJhY2tlbmRcbiAgICogcHJvdmlkZXMgYWxsIGZhY2V0IHZhbHVlcyBBTkQgdG9wVmFsdWVzLCB3ZSBub3JtYWxpemUgdGhlIGRhdGEgdG8gbm90IGJvdGhlclxuICAgKiB0aGUgVUkgd2l0aCB0aGlzIHNwZWNpZmljIGZlYXR1cmUuXG4gICAqL1xuICBwcml2YXRlIG5vcm1hbGl6ZUZhY2V0VmFsdWVzKHRhcmdldDogUHJvZHVjdFNlYXJjaFBhZ2UpOiB2b2lkIHtcbiAgICBpZiAodGFyZ2V0LmZhY2V0cykge1xuICAgICAgdGFyZ2V0LmZhY2V0cyA9IHRhcmdldC5mYWNldHMubWFwKChmYWNldFNvdXJjZTogRmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b3BWYWx1ZXMsIC4uLmZhY2V0VGFyZ2V0IH0gPSBmYWNldFNvdXJjZTtcbiAgICAgICAgZmFjZXRUYXJnZXQudG9wVmFsdWVDb3VudCA9IHRvcFZhbHVlc1xuICAgICAgICAgID8gdG9wVmFsdWVzLmxlbmd0aFxuICAgICAgICAgIDogdGhpcy5ERUZBVUxUX1RPUF9WQUxVRVM7XG4gICAgICAgIHJldHVybiBmYWNldFRhcmdldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19