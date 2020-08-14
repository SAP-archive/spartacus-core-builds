import { __assign, __decorate, __rest } from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { Converter, ConverterService, } from '../../../../util/converter.service';
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
    OccProductSearchPageNormalizer.prototype.convert = function (source, target) {
        var _this = this;
        if (target === void 0) { target = {}; }
        target = __assign(__assign({}, target), source);
        this.normalizeFacets(target);
        if (source.products) {
            target.products = source.products.map(function (product) {
                return _this.converterService.convert(product, PRODUCT_NORMALIZER);
            });
        }
        return target;
    };
    OccProductSearchPageNormalizer.prototype.normalizeFacets = function (target) {
        this.normalizeFacetValues(target);
        this.normalizeUselessFacets(target);
    };
    /**
     * The (current) backend returns facets with values that do not contribute
     * to the facet navigation much, as the number in the result list will not get
     * behavior, see https://jira.hybris.com/browse/CS-427.
     *
     * As long as this is not in place, we manually filter the facet from the list;
     * any facet that does not have a count < the total results will be dropped from
     * the facets.
     */
    OccProductSearchPageNormalizer.prototype.normalizeUselessFacets = function (target) {
        target.facets = target.facets.filter(function (facet) {
            return (!target.pagination ||
                !target.pagination.totalResults ||
                ((!facet.hasOwnProperty('visible') || facet.visible) &&
                    facet.values &&
                    facet.values.find(function (value) {
                        return (value.selected || value.count < target.pagination.totalResults);
                    })));
        });
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
    OccProductSearchPageNormalizer.prototype.normalizeFacetValues = function (target) {
        var _this = this;
        if (target.facets) {
            target.facets = target.facets.map(function (facetSource) {
                var topValues = facetSource.topValues, facetTarget = __rest(facetSource, ["topValues"]);
                facetTarget.topValueCount =
                    (topValues === null || topValues === void 0 ? void 0 : topValues.length) > 0 ? topValues.length : _this.DEFAULT_TOP_VALUES;
                return facetTarget;
            });
        }
    };
    OccProductSearchPageNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    OccProductSearchPageNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccProductSearchPageNormalizer_Factory() { return new OccProductSearchPageNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccProductSearchPageNormalizer, providedIn: "root" });
    OccProductSearchPageNormalizer = __decorate([
        Injectable({ providedIn: 'root' })
    ], OccProductSearchPageNormalizer);
    return OccProductSearchPageNormalizer;
}());
export { OccProductSearchPageNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXNlYXJjaC1wYWdlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBSTVDO0lBRUUsd0NBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRXREOzs7V0FHRztRQUNPLHVCQUFrQixHQUFHLENBQUMsQ0FBQztJQU53QixDQUFDO0lBUTFELGdEQUFPLEdBQVAsVUFDRSxNQUE2QixFQUM3QixNQUE4QjtRQUZoQyxpQkFnQkM7UUFkQyx1QkFBQSxFQUFBLFdBQThCO1FBRTlCLE1BQU0seUJBQ0QsTUFBTSxHQUNMLE1BQWMsQ0FDbkIsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFPO2dCQUM1QyxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDO1lBQTFELENBQTBELENBQzNELENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx3REFBZSxHQUF2QixVQUF3QixNQUF5QjtRQUMvQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNLLCtEQUFzQixHQUE5QixVQUErQixNQUF5QjtRQUN0RCxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSztZQUN6QyxPQUFPLENBQ0wsQ0FBQyxNQUFNLENBQUMsVUFBVTtnQkFDbEIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVk7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDbEQsS0FBSyxDQUFDLE1BQU07b0JBQ1osS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO3dCQUN0QixPQUFPLENBQ0wsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUMvRCxDQUFDO29CQUNKLENBQUMsQ0FBQyxDQUFDLENBQ04sQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ssNkRBQW9CLEdBQTVCLFVBQTZCLE1BQXlCO1FBQXRELGlCQVNDO1FBUkMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxXQUFrQjtnQkFDM0MsSUFBQSxpQ0FBUyxFQUFFLGdEQUFjLENBQWlCO2dCQUNsRCxXQUFXLENBQUMsYUFBYTtvQkFDdkIsQ0FBQSxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsTUFBTSxJQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUNyRSxPQUFPLFdBQVcsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBMUVxQyxnQkFBZ0I7OztJQUYzQyw4QkFBOEI7UUFEMUMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLDhCQUE4QixDQTZFMUM7eUNBMUZEO0NBMEZDLEFBN0VELElBNkVDO1NBN0VZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZhY2V0LFxuICBQcm9kdWN0U2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NQcm9kdWN0U2VhcmNoUGFnZU5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3RTZWFyY2hQYWdlLCBQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWluaW1hbCBudW1iZXIgb2YgdG9wIHZhbHVlcyBpbiBjYXNlXG4gICAqIG5vbiBoYXZlIGJlZW4gc2V0dXAgYnkgdGhlIGJ1c2luZXNzLlxuICAgKi9cbiAgcHJvdGVjdGVkIERFRkFVTFRfVE9QX1ZBTFVFUyA9IDY7XG5cbiAgY29udmVydChcbiAgICBzb3VyY2U6IE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSxcbiAgICB0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlID0ge31cbiAgKTogUHJvZHVjdFNlYXJjaFBhZ2Uge1xuICAgIHRhcmdldCA9IHtcbiAgICAgIC4uLnRhcmdldCxcbiAgICAgIC4uLihzb3VyY2UgYXMgYW55KSxcbiAgICB9O1xuXG4gICAgdGhpcy5ub3JtYWxpemVGYWNldHModGFyZ2V0KTtcbiAgICBpZiAoc291cmNlLnByb2R1Y3RzKSB7XG4gICAgICB0YXJnZXQucHJvZHVjdHMgPSBzb3VyY2UucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PlxuICAgICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UuY29udmVydChwcm9kdWN0LCBQUk9EVUNUX05PUk1BTElaRVIpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVGYWNldHModGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSk6IHZvaWQge1xuICAgIHRoaXMubm9ybWFsaXplRmFjZXRWYWx1ZXModGFyZ2V0KTtcbiAgICB0aGlzLm5vcm1hbGl6ZVVzZWxlc3NGYWNldHModGFyZ2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgKGN1cnJlbnQpIGJhY2tlbmQgcmV0dXJucyBmYWNldHMgd2l0aCB2YWx1ZXMgdGhhdCBkbyBub3QgY29udHJpYnV0ZVxuICAgKiB0byB0aGUgZmFjZXQgbmF2aWdhdGlvbiBtdWNoLCBhcyB0aGUgbnVtYmVyIGluIHRoZSByZXN1bHQgbGlzdCB3aWxsIG5vdCBnZXRcbiAgICogYmVoYXZpb3IsIHNlZSBodHRwczovL2ppcmEuaHlicmlzLmNvbS9icm93c2UvQ1MtNDI3LlxuICAgKlxuICAgKiBBcyBsb25nIGFzIHRoaXMgaXMgbm90IGluIHBsYWNlLCB3ZSBtYW51YWxseSBmaWx0ZXIgdGhlIGZhY2V0IGZyb20gdGhlIGxpc3Q7XG4gICAqIGFueSBmYWNldCB0aGF0IGRvZXMgbm90IGhhdmUgYSBjb3VudCA8IHRoZSB0b3RhbCByZXN1bHRzIHdpbGwgYmUgZHJvcHBlZCBmcm9tXG4gICAqIHRoZSBmYWNldHMuXG4gICAqL1xuICBwcml2YXRlIG5vcm1hbGl6ZVVzZWxlc3NGYWNldHModGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSk6IHZvaWQge1xuICAgIHRhcmdldC5mYWNldHMgPSB0YXJnZXQuZmFjZXRzLmZpbHRlcigoZmFjZXQpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICF0YXJnZXQucGFnaW5hdGlvbiB8fFxuICAgICAgICAhdGFyZ2V0LnBhZ2luYXRpb24udG90YWxSZXN1bHRzIHx8XG4gICAgICAgICgoIWZhY2V0Lmhhc093blByb3BlcnR5KCd2aXNpYmxlJykgfHwgZmFjZXQudmlzaWJsZSkgJiZcbiAgICAgICAgICBmYWNldC52YWx1ZXMgJiZcbiAgICAgICAgICBmYWNldC52YWx1ZXMuZmluZCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIHZhbHVlLnNlbGVjdGVkIHx8IHZhbHVlLmNvdW50IDwgdGFyZ2V0LnBhZ2luYXRpb24udG90YWxSZXN1bHRzXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qXG4gICAqIEluIGNhc2UgdGhlcmUgYXJlIHNvLWNhbGxlZCBgdG9wVmFsdWVzYCBnaXZlbiBmb3IgdGhlIGZhY2V0IHZhbHVlcyxcbiAgICogdmFsdWVzIGFyZSBvYnNvbGV0ZS5cbiAgICpcbiAgICogYHRvcFZhbHVlc2AgaXMgYSBmZWF0dXJlIGluIEFkYXB0aXZlIFNlYXJjaCB3aGljaCBjYW4gbGltaXQgYSBsYXJnZVxuICAgKiBhbW91bnQgb2YgZmFjZXQgdmFsdWVzIHRvIGEgc21hbGwgc2V0ICg1IGJ5IGRlZmF1bHQpLiBBcyBsb25nIGFzIHRoZSBiYWNrZW5kXG4gICAqIHByb3ZpZGVzIGFsbCBmYWNldCB2YWx1ZXMgQU5EIHRvcFZhbHVlcywgd2Ugbm9ybWFsaXplIHRoZSBkYXRhIHRvIG5vdCBib3RoZXJcbiAgICogdGhlIFVJIHdpdGggdGhpcyBzcGVjaWZpYyBmZWF0dXJlLlxuICAgKi9cbiAgcHJpdmF0ZSBub3JtYWxpemVGYWNldFZhbHVlcyh0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlKTogdm9pZCB7XG4gICAgaWYgKHRhcmdldC5mYWNldHMpIHtcbiAgICAgIHRhcmdldC5mYWNldHMgPSB0YXJnZXQuZmFjZXRzLm1hcCgoZmFjZXRTb3VyY2U6IEZhY2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9wVmFsdWVzLCAuLi5mYWNldFRhcmdldCB9ID0gZmFjZXRTb3VyY2U7XG4gICAgICAgIGZhY2V0VGFyZ2V0LnRvcFZhbHVlQ291bnQgPVxuICAgICAgICAgIHRvcFZhbHVlcz8ubGVuZ3RoID4gMCA/IHRvcFZhbHVlcy5sZW5ndGggOiB0aGlzLkRFRkFVTFRfVE9QX1ZBTFVFUztcbiAgICAgICAgcmV0dXJuIGZhY2V0VGFyZ2V0O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=