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
var OccProductSearchPageNormalizer = /** @class */ (function () {
    function OccProductSearchPageNormalizer(converterService) {
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
    OccProductSearchPageNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        var _this = this;
        if (target === void 0) { target = {}; }
        target = tslib_1.__assign({}, target, ((/** @type {?} */ (source))));
        this.normalizeFacets(target);
        if (source.products) {
            target.products = source.products.map((/**
             * @param {?} product
             * @return {?}
             */
            function (product) {
                return _this.converterService.convert(product, PRODUCT_NORMALIZER);
            }));
        }
        return target;
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    OccProductSearchPageNormalizer.prototype.normalizeFacets = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        this.normalizeFacetValues(target);
        this.normalizeUselessFacets(target);
    };
    /**
     * The (current) backend returns facets with values that do not contribute
     * to the facet navigation much, as the number in the result list will not get
     * behaviour, see https://jira.hybris.com/browse/CS-427.
     *
     * As long as this is not in place, we manually filter the facet from the list;
     * any facet that does not have a count < the total results will be dropped from
     * the facets.
     */
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
    OccProductSearchPageNormalizer.prototype.normalizeUselessFacets = /**
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
    function (target) {
        target.facets = target.facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) {
            return (!target.pagination ||
                !target.pagination.totalResults ||
                ((!facet.hasOwnProperty('visible') || facet.visible) &&
                    facet.values &&
                    facet.values.find((/**
                     * @param {?} value
                     * @return {?}
                     */
                    function (value) {
                        return (value.selected || value.count < target.pagination.totalResults);
                    }))));
        }));
    };
    /*
     * In case there are so-called `topValues` given for the facet values,
     * values are obsolete.
     *
     * `topValues` is a feature in Adaptive Search which can limit a large
     * amount of facet values to a small set (5 by default). As long as the backend
     * provides all facet values AND topValues, we normalize the data to not bother
     * the UI with this specific feature.
     */
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
    OccProductSearchPageNormalizer.prototype.normalizeFacetValues = /*
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
    function (target) {
        var _this = this;
        if (target.facets) {
            target.facets = target.facets.map((/**
             * @param {?} facetSource
             * @return {?}
             */
            function (facetSource) {
                var topValues = facetSource.topValues, facetTarget = tslib_1.__rest(facetSource, ["topValues"]);
                facetTarget.topValueCount = topValues
                    ? topValues.length
                    : _this.DEFAULT_TOP_VALUES;
                return facetTarget;
            }));
        }
    };
    OccProductSearchPageNormalizer.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OccProductSearchPageNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    /** @nocollapse */ OccProductSearchPageNormalizer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccProductSearchPageNormalizer_Factory() { return new OccProductSearchPageNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccProductSearchPageNormalizer, providedIn: "root" });
    return OccProductSearchPageNormalizer;
}());
export { OccProductSearchPageNormalizer };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXNlYXJjaC1wYWdlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZGLE9BQU8sRUFFTCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBRzVDO0lBR0Usd0NBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCOzs7OztRQU01Qyx1QkFBa0IsR0FBRyxDQUFDLENBQUM7SUFOd0IsQ0FBQzs7Ozs7O0lBUTFELGdEQUFPOzs7OztJQUFQLFVBQ0UsTUFBNkIsRUFDN0IsTUFBOEI7UUFGaEMsaUJBZ0JDO1FBZEMsdUJBQUEsRUFBQSxXQUE4QjtRQUU5QixNQUFNLHdCQUNELE1BQU0sRUFDTixDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQ25CLENBQUM7UUFFRixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNuQixNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsT0FBTztnQkFDM0MsT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQztZQUExRCxDQUEwRCxFQUMzRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTyx3REFBZTs7Ozs7SUFBdkIsVUFBd0IsTUFBeUI7UUFDL0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Q7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7Ozs7SUFDSywrREFBc0I7Ozs7Ozs7Ozs7OztJQUE5QixVQUErQixNQUF5QjtRQUN0RCxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsS0FBSztZQUN4QyxPQUFPLENBQ0wsQ0FBQyxNQUFNLENBQUMsVUFBVTtnQkFDbEIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVk7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDbEQsS0FBSyxDQUFDLE1BQU07b0JBQ1osS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O29CQUFDLFVBQUEsS0FBSzt3QkFDckIsT0FBTyxDQUNMLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FDL0QsQ0FBQztvQkFDSixDQUFDLEVBQUMsQ0FBQyxDQUNOLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRzs7Ozs7Ozs7Ozs7Ozs7O0lBQ0ssNkRBQW9COzs7Ozs7Ozs7Ozs7OztJQUE1QixVQUE2QixNQUF5QjtRQUF0RCxpQkFVQztRQVRDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsV0FBa0I7Z0JBQzNDLElBQUEsaUNBQVMsRUFBRSx3REFBYztnQkFDakMsV0FBVyxDQUFDLGFBQWEsR0FBRyxTQUFTO29CQUNuQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU07b0JBQ2xCLENBQUMsQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQzVCLE9BQU8sV0FBVyxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkE3RUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFKaEMsZ0JBQWdCOzs7eUNBUmxCO0NBMEZDLEFBOUVELElBOEVDO1NBN0VZLDhCQUE4Qjs7Ozs7Ozs7SUFRekMsNERBQWlDOzs7OztJQU5yQiwwREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGYWNldCxcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFNlYXJjaFBhZ2VOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSwgUHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG1pbmltYWwgbnVtYmVyIG9mIHRvcCB2YWx1ZXMgaW4gY2FzZVxuICAgKiBub24gaGF2ZSBiZWVuIHNldHVwIGJ5IHRoZSBidXNpbmVzcy5cbiAgICovXG4gIHByb3RlY3RlZCBERUZBVUxUX1RPUF9WQUxVRVMgPSA2O1xuXG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgdGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSA9IHt9XG4gICk6IFByb2R1Y3RTZWFyY2hQYWdlIHtcbiAgICB0YXJnZXQgPSB7XG4gICAgICAuLi50YXJnZXQsXG4gICAgICAuLi4oc291cmNlIGFzIGFueSksXG4gICAgfTtcblxuICAgIHRoaXMubm9ybWFsaXplRmFjZXRzKHRhcmdldCk7XG4gICAgaWYgKHNvdXJjZS5wcm9kdWN0cykge1xuICAgICAgdGFyZ2V0LnByb2R1Y3RzID0gc291cmNlLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+XG4gICAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5jb252ZXJ0KHByb2R1Y3QsIFBST0RVQ1RfTk9STUFMSVpFUilcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZUZhY2V0cyh0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlKTogdm9pZCB7XG4gICAgdGhpcy5ub3JtYWxpemVGYWNldFZhbHVlcyh0YXJnZXQpO1xuICAgIHRoaXMubm9ybWFsaXplVXNlbGVzc0ZhY2V0cyh0YXJnZXQpO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgKGN1cnJlbnQpIGJhY2tlbmQgcmV0dXJucyBmYWNldHMgd2l0aCB2YWx1ZXMgdGhhdCBkbyBub3QgY29udHJpYnV0ZVxuICAgKiB0byB0aGUgZmFjZXQgbmF2aWdhdGlvbiBtdWNoLCBhcyB0aGUgbnVtYmVyIGluIHRoZSByZXN1bHQgbGlzdCB3aWxsIG5vdCBnZXRcbiAgICogYmVoYXZpb3VyLCBzZWUgaHR0cHM6Ly9qaXJhLmh5YnJpcy5jb20vYnJvd3NlL0NTLTQyNy5cbiAgICpcbiAgICogQXMgbG9uZyBhcyB0aGlzIGlzIG5vdCBpbiBwbGFjZSwgd2UgbWFudWFsbHkgZmlsdGVyIHRoZSBmYWNldCBmcm9tIHRoZSBsaXN0O1xuICAgKiBhbnkgZmFjZXQgdGhhdCBkb2VzIG5vdCBoYXZlIGEgY291bnQgPCB0aGUgdG90YWwgcmVzdWx0cyB3aWxsIGJlIGRyb3BwZWQgZnJvbVxuICAgKiB0aGUgZmFjZXRzLlxuICAgKi9cbiAgcHJpdmF0ZSBub3JtYWxpemVVc2VsZXNzRmFjZXRzKHRhcmdldDogUHJvZHVjdFNlYXJjaFBhZ2UpOiB2b2lkIHtcbiAgICB0YXJnZXQuZmFjZXRzID0gdGFyZ2V0LmZhY2V0cy5maWx0ZXIoZmFjZXQgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgIXRhcmdldC5wYWdpbmF0aW9uIHx8XG4gICAgICAgICF0YXJnZXQucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMgfHxcbiAgICAgICAgKCghZmFjZXQuaGFzT3duUHJvcGVydHkoJ3Zpc2libGUnKSB8fCBmYWNldC52aXNpYmxlKSAmJlxuICAgICAgICAgIGZhY2V0LnZhbHVlcyAmJlxuICAgICAgICAgIGZhY2V0LnZhbHVlcy5maW5kKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIHZhbHVlLnNlbGVjdGVkIHx8IHZhbHVlLmNvdW50IDwgdGFyZ2V0LnBhZ2luYXRpb24udG90YWxSZXN1bHRzXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qXG4gICAqIEluIGNhc2UgdGhlcmUgYXJlIHNvLWNhbGxlZCBgdG9wVmFsdWVzYCBnaXZlbiBmb3IgdGhlIGZhY2V0IHZhbHVlcyxcbiAgICogdmFsdWVzIGFyZSBvYnNvbGV0ZS5cbiAgICpcbiAgICogYHRvcFZhbHVlc2AgaXMgYSBmZWF0dXJlIGluIEFkYXB0aXZlIFNlYXJjaCB3aGljaCBjYW4gbGltaXQgYSBsYXJnZVxuICAgKiBhbW91bnQgb2YgZmFjZXQgdmFsdWVzIHRvIGEgc21hbGwgc2V0ICg1IGJ5IGRlZmF1bHQpLiBBcyBsb25nIGFzIHRoZSBiYWNrZW5kXG4gICAqIHByb3ZpZGVzIGFsbCBmYWNldCB2YWx1ZXMgQU5EIHRvcFZhbHVlcywgd2Ugbm9ybWFsaXplIHRoZSBkYXRhIHRvIG5vdCBib3RoZXJcbiAgICogdGhlIFVJIHdpdGggdGhpcyBzcGVjaWZpYyBmZWF0dXJlLlxuICAgKi9cbiAgcHJpdmF0ZSBub3JtYWxpemVGYWNldFZhbHVlcyh0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlKTogdm9pZCB7XG4gICAgaWYgKHRhcmdldC5mYWNldHMpIHtcbiAgICAgIHRhcmdldC5mYWNldHMgPSB0YXJnZXQuZmFjZXRzLm1hcCgoZmFjZXRTb3VyY2U6IEZhY2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9wVmFsdWVzLCAuLi5mYWNldFRhcmdldCB9ID0gZmFjZXRTb3VyY2U7XG4gICAgICAgIGZhY2V0VGFyZ2V0LnRvcFZhbHVlQ291bnQgPSB0b3BWYWx1ZXNcbiAgICAgICAgICA/IHRvcFZhbHVlcy5sZW5ndGhcbiAgICAgICAgICA6IHRoaXMuREVGQVVMVF9UT1BfVkFMVUVTO1xuICAgICAgICByZXR1cm4gZmFjZXRUYXJnZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==