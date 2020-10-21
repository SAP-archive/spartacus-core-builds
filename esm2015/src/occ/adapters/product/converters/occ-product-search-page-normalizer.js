import { __rest } from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
export class OccProductSearchPageNormalizer {
    constructor(converterService) {
        this.converterService = converterService;
        /**
         * Specifies the minimal number of top values in case
         * non have been setup by the business.
         */
        this.DEFAULT_TOP_VALUES = 6;
    }
    convert(source, target = {}) {
        target = Object.assign(Object.assign({}, target), source);
        this.normalizeFacets(target);
        if (source.products) {
            target.products = source.products.map((product) => this.converterService.convert(product, PRODUCT_NORMALIZER));
        }
        return target;
    }
    normalizeFacets(target) {
        this.normalizeFacetValues(target);
        this.normalizeUselessFacets(target);
    }
    /**
     * The (current) backend returns facets with values that do not contribute
     * to the facet navigation much, as the number in the result list will not get
     * behavior, see https://jira.hybris.com/browse/CS-427.
     *
     * As long as this is not in place, we manually filter the facet from the list;
     * any facet that does not have a count < the total results will be dropped from
     * the facets.
     */
    normalizeUselessFacets(target) {
        if (target.facets) {
            target.facets = target.facets.filter((facet) => {
                return (!target.pagination ||
                    !target.pagination.totalResults ||
                    ((!facet.hasOwnProperty('visible') || facet.visible) &&
                        facet.values &&
                        facet.values.find((value) => {
                            return (value.selected || value.count < target.pagination.totalResults);
                        })));
            });
        }
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
    normalizeFacetValues(target) {
        if (target.facets) {
            target.facets = target.facets.map((facetSource) => {
                const { topValues } = facetSource, facetTarget = __rest(facetSource, ["topValues"]);
                facetTarget.topValueCount =
                    (topValues === null || topValues === void 0 ? void 0 : topValues.length) > 0 ? topValues.length : this.DEFAULT_TOP_VALUES;
                return facetTarget;
            });
        }
    }
}
OccProductSearchPageNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccProductSearchPageNormalizer_Factory() { return new OccProductSearchPageNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccProductSearchPageNormalizer, providedIn: "root" });
OccProductSearchPageNormalizer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OccProductSearchPageNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L2NvbnZlcnRlcnMvb2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBRUwsZ0JBQWdCLEdBQ2pCLE1BQU0sb0NBQW9DLENBQUM7OztBQUk1QyxNQUFNLE9BQU8sOEJBQThCO0lBRXpDLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRXREOzs7V0FHRztRQUNPLHVCQUFrQixHQUFHLENBQUMsQ0FBQztJQU53QixDQUFDO0lBUTFELE9BQU8sQ0FDTCxNQUE2QixFQUM3QixTQUE0QixFQUFFO1FBRTlCLE1BQU0sbUNBQ0QsTUFBTSxHQUNMLE1BQWMsQ0FDbkIsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUMzRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sZUFBZSxDQUFDLE1BQXlCO1FBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ssc0JBQXNCLENBQUMsTUFBeUI7UUFDdEQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDN0MsT0FBTyxDQUNMLENBQUMsTUFBTSxDQUFDLFVBQVU7b0JBQ2xCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZO29CQUMvQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUM7d0JBQ2xELEtBQUssQ0FBQyxNQUFNO3dCQUNaLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7NEJBQzFCLE9BQU8sQ0FDTCxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQy9ELENBQUM7d0JBQ0osQ0FBQyxDQUFDLENBQUMsQ0FDTixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNLLG9CQUFvQixDQUFDLE1BQXlCO1FBQ3BELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBa0IsRUFBRSxFQUFFO2dCQUN2RCxNQUFNLEVBQUUsU0FBUyxLQUFxQixXQUFXLEVBQTNCLFdBQVcsVUFBSyxXQUFXLEVBQTNDLGFBQTZCLENBQWMsQ0FBQztnQkFDbEQsV0FBVyxDQUFDLGFBQWE7b0JBQ3ZCLENBQUEsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE1BQU0sSUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDckUsT0FBTyxXQUFXLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7WUEvRUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBSmhDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZhY2V0LFxuICBQcm9kdWN0U2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NQcm9kdWN0U2VhcmNoUGFnZU5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3RTZWFyY2hQYWdlLCBQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWluaW1hbCBudW1iZXIgb2YgdG9wIHZhbHVlcyBpbiBjYXNlXG4gICAqIG5vbiBoYXZlIGJlZW4gc2V0dXAgYnkgdGhlIGJ1c2luZXNzLlxuICAgKi9cbiAgcHJvdGVjdGVkIERFRkFVTFRfVE9QX1ZBTFVFUyA9IDY7XG5cbiAgY29udmVydChcbiAgICBzb3VyY2U6IE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSxcbiAgICB0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlID0ge31cbiAgKTogUHJvZHVjdFNlYXJjaFBhZ2Uge1xuICAgIHRhcmdldCA9IHtcbiAgICAgIC4uLnRhcmdldCxcbiAgICAgIC4uLihzb3VyY2UgYXMgYW55KSxcbiAgICB9O1xuXG4gICAgdGhpcy5ub3JtYWxpemVGYWNldHModGFyZ2V0KTtcbiAgICBpZiAoc291cmNlLnByb2R1Y3RzKSB7XG4gICAgICB0YXJnZXQucHJvZHVjdHMgPSBzb3VyY2UucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PlxuICAgICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UuY29udmVydChwcm9kdWN0LCBQUk9EVUNUX05PUk1BTElaRVIpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVGYWNldHModGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSk6IHZvaWQge1xuICAgIHRoaXMubm9ybWFsaXplRmFjZXRWYWx1ZXModGFyZ2V0KTtcbiAgICB0aGlzLm5vcm1hbGl6ZVVzZWxlc3NGYWNldHModGFyZ2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgKGN1cnJlbnQpIGJhY2tlbmQgcmV0dXJucyBmYWNldHMgd2l0aCB2YWx1ZXMgdGhhdCBkbyBub3QgY29udHJpYnV0ZVxuICAgKiB0byB0aGUgZmFjZXQgbmF2aWdhdGlvbiBtdWNoLCBhcyB0aGUgbnVtYmVyIGluIHRoZSByZXN1bHQgbGlzdCB3aWxsIG5vdCBnZXRcbiAgICogYmVoYXZpb3IsIHNlZSBodHRwczovL2ppcmEuaHlicmlzLmNvbS9icm93c2UvQ1MtNDI3LlxuICAgKlxuICAgKiBBcyBsb25nIGFzIHRoaXMgaXMgbm90IGluIHBsYWNlLCB3ZSBtYW51YWxseSBmaWx0ZXIgdGhlIGZhY2V0IGZyb20gdGhlIGxpc3Q7XG4gICAqIGFueSBmYWNldCB0aGF0IGRvZXMgbm90IGhhdmUgYSBjb3VudCA8IHRoZSB0b3RhbCByZXN1bHRzIHdpbGwgYmUgZHJvcHBlZCBmcm9tXG4gICAqIHRoZSBmYWNldHMuXG4gICAqL1xuICBwcml2YXRlIG5vcm1hbGl6ZVVzZWxlc3NGYWNldHModGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSk6IHZvaWQge1xuICAgIGlmICh0YXJnZXQuZmFjZXRzKSB7XG4gICAgICB0YXJnZXQuZmFjZXRzID0gdGFyZ2V0LmZhY2V0cy5maWx0ZXIoKGZhY2V0KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgIXRhcmdldC5wYWdpbmF0aW9uIHx8XG4gICAgICAgICAgIXRhcmdldC5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cyB8fFxuICAgICAgICAgICgoIWZhY2V0Lmhhc093blByb3BlcnR5KCd2aXNpYmxlJykgfHwgZmFjZXQudmlzaWJsZSkgJiZcbiAgICAgICAgICAgIGZhY2V0LnZhbHVlcyAmJlxuICAgICAgICAgICAgZmFjZXQudmFsdWVzLmZpbmQoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgdmFsdWUuc2VsZWN0ZWQgfHwgdmFsdWUuY291bnQgPCB0YXJnZXQucGFnaW5hdGlvbi50b3RhbFJlc3VsdHNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogSW4gY2FzZSB0aGVyZSBhcmUgc28tY2FsbGVkIGB0b3BWYWx1ZXNgIGdpdmVuIGZvciB0aGUgZmFjZXQgdmFsdWVzLFxuICAgKiB2YWx1ZXMgYXJlIG9ic29sZXRlLlxuICAgKlxuICAgKiBgdG9wVmFsdWVzYCBpcyBhIGZlYXR1cmUgaW4gQWRhcHRpdmUgU2VhcmNoIHdoaWNoIGNhbiBsaW1pdCBhIGxhcmdlXG4gICAqIGFtb3VudCBvZiBmYWNldCB2YWx1ZXMgdG8gYSBzbWFsbCBzZXQgKDUgYnkgZGVmYXVsdCkuIEFzIGxvbmcgYXMgdGhlIGJhY2tlbmRcbiAgICogcHJvdmlkZXMgYWxsIGZhY2V0IHZhbHVlcyBBTkQgdG9wVmFsdWVzLCB3ZSBub3JtYWxpemUgdGhlIGRhdGEgdG8gbm90IGJvdGhlclxuICAgKiB0aGUgVUkgd2l0aCB0aGlzIHNwZWNpZmljIGZlYXR1cmUuXG4gICAqL1xuICBwcml2YXRlIG5vcm1hbGl6ZUZhY2V0VmFsdWVzKHRhcmdldDogUHJvZHVjdFNlYXJjaFBhZ2UpOiB2b2lkIHtcbiAgICBpZiAodGFyZ2V0LmZhY2V0cykge1xuICAgICAgdGFyZ2V0LmZhY2V0cyA9IHRhcmdldC5mYWNldHMubWFwKChmYWNldFNvdXJjZTogRmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b3BWYWx1ZXMsIC4uLmZhY2V0VGFyZ2V0IH0gPSBmYWNldFNvdXJjZTtcbiAgICAgICAgZmFjZXRUYXJnZXQudG9wVmFsdWVDb3VudCA9XG4gICAgICAgICAgdG9wVmFsdWVzPy5sZW5ndGggPiAwID8gdG9wVmFsdWVzLmxlbmd0aCA6IHRoaXMuREVGQVVMVF9UT1BfVkFMVUVTO1xuICAgICAgICByZXR1cm4gZmFjZXRUYXJnZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==