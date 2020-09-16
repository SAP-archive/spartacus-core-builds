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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L2NvbnZlcnRlcnMvb2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBRUwsZ0JBQWdCLEdBQ2pCLE1BQU0sb0NBQW9DLENBQUM7OztBQUk1QyxNQUFNLE9BQU8sOEJBQThCO0lBRXpDLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRXREOzs7V0FHRztRQUNPLHVCQUFrQixHQUFHLENBQUMsQ0FBQztJQU53QixDQUFDO0lBUTFELE9BQU8sQ0FDTCxNQUE2QixFQUM3QixTQUE0QixFQUFFO1FBRTlCLE1BQU0sbUNBQ0QsTUFBTSxHQUNMLE1BQWMsQ0FDbkIsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUMzRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sZUFBZSxDQUFDLE1BQXlCO1FBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ssc0JBQXNCLENBQUMsTUFBeUI7UUFDdEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzdDLE9BQU8sQ0FDTCxDQUFDLE1BQU0sQ0FBQyxVQUFVO2dCQUNsQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWTtnQkFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNsRCxLQUFLLENBQUMsTUFBTTtvQkFDWixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO3dCQUMxQixPQUFPLENBQ0wsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUMvRCxDQUFDO29CQUNKLENBQUMsQ0FBQyxDQUFDLENBQ04sQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ssb0JBQW9CLENBQUMsTUFBeUI7UUFDcEQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFrQixFQUFFLEVBQUU7Z0JBQ3ZELE1BQU0sRUFBRSxTQUFTLEtBQXFCLFdBQVcsRUFBM0IsV0FBVyxVQUFLLFdBQVcsRUFBM0MsYUFBNkIsQ0FBYyxDQUFDO2dCQUNsRCxXQUFXLENBQUMsYUFBYTtvQkFDdkIsQ0FBQSxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsTUFBTSxJQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUNyRSxPQUFPLFdBQVcsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztZQTdFRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUFKaEMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRmFjZXQsXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxufSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7XG4gIENvbnZlcnRlcixcbiAgQ29udmVydGVyU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RTZWFyY2hQYWdlTm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdFNlYXJjaFBhZ2UsIFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZSkge31cblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtaW5pbWFsIG51bWJlciBvZiB0b3AgdmFsdWVzIGluIGNhc2VcbiAgICogbm9uIGhhdmUgYmVlbiBzZXR1cCBieSB0aGUgYnVzaW5lc3MuXG4gICAqL1xuICBwcm90ZWN0ZWQgREVGQVVMVF9UT1BfVkFMVUVTID0gNjtcblxuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLlByb2R1Y3RTZWFyY2hQYWdlLFxuICAgIHRhcmdldDogUHJvZHVjdFNlYXJjaFBhZ2UgPSB7fVxuICApOiBQcm9kdWN0U2VhcmNoUGFnZSB7XG4gICAgdGFyZ2V0ID0ge1xuICAgICAgLi4udGFyZ2V0LFxuICAgICAgLi4uKHNvdXJjZSBhcyBhbnkpLFxuICAgIH07XG5cbiAgICB0aGlzLm5vcm1hbGl6ZUZhY2V0cyh0YXJnZXQpO1xuICAgIGlmIChzb3VyY2UucHJvZHVjdHMpIHtcbiAgICAgIHRhcmdldC5wcm9kdWN0cyA9IHNvdXJjZS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+XG4gICAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5jb252ZXJ0KHByb2R1Y3QsIFBST0RVQ1RfTk9STUFMSVpFUilcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZUZhY2V0cyh0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlKTogdm9pZCB7XG4gICAgdGhpcy5ub3JtYWxpemVGYWNldFZhbHVlcyh0YXJnZXQpO1xuICAgIHRoaXMubm9ybWFsaXplVXNlbGVzc0ZhY2V0cyh0YXJnZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSAoY3VycmVudCkgYmFja2VuZCByZXR1cm5zIGZhY2V0cyB3aXRoIHZhbHVlcyB0aGF0IGRvIG5vdCBjb250cmlidXRlXG4gICAqIHRvIHRoZSBmYWNldCBuYXZpZ2F0aW9uIG11Y2gsIGFzIHRoZSBudW1iZXIgaW4gdGhlIHJlc3VsdCBsaXN0IHdpbGwgbm90IGdldFxuICAgKiBiZWhhdmlvciwgc2VlIGh0dHBzOi8vamlyYS5oeWJyaXMuY29tL2Jyb3dzZS9DUy00MjcuXG4gICAqXG4gICAqIEFzIGxvbmcgYXMgdGhpcyBpcyBub3QgaW4gcGxhY2UsIHdlIG1hbnVhbGx5IGZpbHRlciB0aGUgZmFjZXQgZnJvbSB0aGUgbGlzdDtcbiAgICogYW55IGZhY2V0IHRoYXQgZG9lcyBub3QgaGF2ZSBhIGNvdW50IDwgdGhlIHRvdGFsIHJlc3VsdHMgd2lsbCBiZSBkcm9wcGVkIGZyb21cbiAgICogdGhlIGZhY2V0cy5cbiAgICovXG4gIHByaXZhdGUgbm9ybWFsaXplVXNlbGVzc0ZhY2V0cyh0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlKTogdm9pZCB7XG4gICAgdGFyZ2V0LmZhY2V0cyA9IHRhcmdldC5mYWNldHMuZmlsdGVyKChmYWNldCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgIXRhcmdldC5wYWdpbmF0aW9uIHx8XG4gICAgICAgICF0YXJnZXQucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMgfHxcbiAgICAgICAgKCghZmFjZXQuaGFzT3duUHJvcGVydHkoJ3Zpc2libGUnKSB8fCBmYWNldC52aXNpYmxlKSAmJlxuICAgICAgICAgIGZhY2V0LnZhbHVlcyAmJlxuICAgICAgICAgIGZhY2V0LnZhbHVlcy5maW5kKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgdmFsdWUuc2VsZWN0ZWQgfHwgdmFsdWUuY291bnQgPCB0YXJnZXQucGFnaW5hdGlvbi50b3RhbFJlc3VsdHNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLypcbiAgICogSW4gY2FzZSB0aGVyZSBhcmUgc28tY2FsbGVkIGB0b3BWYWx1ZXNgIGdpdmVuIGZvciB0aGUgZmFjZXQgdmFsdWVzLFxuICAgKiB2YWx1ZXMgYXJlIG9ic29sZXRlLlxuICAgKlxuICAgKiBgdG9wVmFsdWVzYCBpcyBhIGZlYXR1cmUgaW4gQWRhcHRpdmUgU2VhcmNoIHdoaWNoIGNhbiBsaW1pdCBhIGxhcmdlXG4gICAqIGFtb3VudCBvZiBmYWNldCB2YWx1ZXMgdG8gYSBzbWFsbCBzZXQgKDUgYnkgZGVmYXVsdCkuIEFzIGxvbmcgYXMgdGhlIGJhY2tlbmRcbiAgICogcHJvdmlkZXMgYWxsIGZhY2V0IHZhbHVlcyBBTkQgdG9wVmFsdWVzLCB3ZSBub3JtYWxpemUgdGhlIGRhdGEgdG8gbm90IGJvdGhlclxuICAgKiB0aGUgVUkgd2l0aCB0aGlzIHNwZWNpZmljIGZlYXR1cmUuXG4gICAqL1xuICBwcml2YXRlIG5vcm1hbGl6ZUZhY2V0VmFsdWVzKHRhcmdldDogUHJvZHVjdFNlYXJjaFBhZ2UpOiB2b2lkIHtcbiAgICBpZiAodGFyZ2V0LmZhY2V0cykge1xuICAgICAgdGFyZ2V0LmZhY2V0cyA9IHRhcmdldC5mYWNldHMubWFwKChmYWNldFNvdXJjZTogRmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b3BWYWx1ZXMsIC4uLmZhY2V0VGFyZ2V0IH0gPSBmYWNldFNvdXJjZTtcbiAgICAgICAgZmFjZXRUYXJnZXQudG9wVmFsdWVDb3VudCA9XG4gICAgICAgICAgdG9wVmFsdWVzPy5sZW5ndGggPiAwID8gdG9wVmFsdWVzLmxlbmd0aCA6IHRoaXMuREVGQVVMVF9UT1BfVkFMVUVTO1xuICAgICAgICByZXR1cm4gZmFjZXRUYXJnZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==