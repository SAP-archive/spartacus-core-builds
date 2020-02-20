import { __decorate, __rest } from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { Converter, ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
let OccProductSearchPageNormalizer = class OccProductSearchPageNormalizer {
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
            target.products = source.products.map(product => this.converterService.convert(product, PRODUCT_NORMALIZER));
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
     * behaviour, see https://jira.hybris.com/browse/CS-427.
     *
     * As long as this is not in place, we manually filter the facet from the list;
     * any facet that does not have a count < the total results will be dropped from
     * the facets.
     */
    normalizeUselessFacets(target) {
        target.facets = target.facets.filter(facet => {
            return (!target.pagination ||
                !target.pagination.totalResults ||
                ((!facet.hasOwnProperty('visible') || facet.visible) &&
                    facet.values &&
                    facet.values.find(value => {
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
                facetTarget.topValueCount = topValues
                    ? topValues.length
                    : this.DEFAULT_TOP_VALUES;
                return facetTarget;
            });
        }
    }
};
OccProductSearchPageNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccProductSearchPageNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccProductSearchPageNormalizer_Factory() { return new OccProductSearchPageNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccProductSearchPageNormalizer, providedIn: "root" });
OccProductSearchPageNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccProductSearchPageNormalizer);
export { OccProductSearchPageNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXNlYXJjaC1wYWdlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBSTVDLElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0lBRXpDLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRXREOzs7V0FHRztRQUNPLHVCQUFrQixHQUFHLENBQUMsQ0FBQztJQU53QixDQUFDO0lBUTFELE9BQU8sQ0FDTCxNQUE2QixFQUM3QixTQUE0QixFQUFFO1FBRTlCLE1BQU0sbUNBQ0QsTUFBTSxHQUNMLE1BQWMsQ0FDbkIsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FDM0QsQ0FBQztTQUNIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLGVBQWUsQ0FBQyxNQUF5QjtRQUMvQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRDs7Ozs7Ozs7T0FRRztJQUNLLHNCQUFzQixDQUFDLE1BQXlCO1FBQ3RELE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0MsT0FBTyxDQUNMLENBQUMsTUFBTSxDQUFDLFVBQVU7Z0JBQ2xCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZO2dCQUMvQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ2xELEtBQUssQ0FBQyxNQUFNO29CQUNaLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN4QixPQUFPLENBQ0wsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUMvRCxDQUFDO29CQUNKLENBQUMsQ0FBQyxDQUFDLENBQ04sQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ssb0JBQW9CLENBQUMsTUFBeUI7UUFDcEQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFrQixFQUFFLEVBQUU7Z0JBQ3ZELE1BQU0sRUFBRSxTQUFTLEtBQXFCLFdBQVcsRUFBOUIsZ0RBQThCLENBQUM7Z0JBQ2xELFdBQVcsQ0FBQyxhQUFhLEdBQUcsU0FBUztvQkFDbkMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNO29CQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUM1QixPQUFPLFdBQVcsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBM0V1QyxnQkFBZ0I7OztBQUYzQyw4QkFBOEI7SUFEMUMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLDhCQUE4QixDQTZFMUM7U0E3RVksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRmFjZXQsXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxufSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7XG4gIENvbnZlcnRlcixcbiAgQ29udmVydGVyU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RTZWFyY2hQYWdlTm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdFNlYXJjaFBhZ2UsIFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZSkge31cblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtaW5pbWFsIG51bWJlciBvZiB0b3AgdmFsdWVzIGluIGNhc2VcbiAgICogbm9uIGhhdmUgYmVlbiBzZXR1cCBieSB0aGUgYnVzaW5lc3MuXG4gICAqL1xuICBwcm90ZWN0ZWQgREVGQVVMVF9UT1BfVkFMVUVTID0gNjtcblxuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLlByb2R1Y3RTZWFyY2hQYWdlLFxuICAgIHRhcmdldDogUHJvZHVjdFNlYXJjaFBhZ2UgPSB7fVxuICApOiBQcm9kdWN0U2VhcmNoUGFnZSB7XG4gICAgdGFyZ2V0ID0ge1xuICAgICAgLi4udGFyZ2V0LFxuICAgICAgLi4uKHNvdXJjZSBhcyBhbnkpLFxuICAgIH07XG5cbiAgICB0aGlzLm5vcm1hbGl6ZUZhY2V0cyh0YXJnZXQpO1xuICAgIGlmIChzb3VyY2UucHJvZHVjdHMpIHtcbiAgICAgIHRhcmdldC5wcm9kdWN0cyA9IHNvdXJjZS5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PlxuICAgICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UuY29udmVydChwcm9kdWN0LCBQUk9EVUNUX05PUk1BTElaRVIpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVGYWNldHModGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSk6IHZvaWQge1xuICAgIHRoaXMubm9ybWFsaXplRmFjZXRWYWx1ZXModGFyZ2V0KTtcbiAgICB0aGlzLm5vcm1hbGl6ZVVzZWxlc3NGYWNldHModGFyZ2V0KTtcbiAgfVxuICAvKipcbiAgICogVGhlIChjdXJyZW50KSBiYWNrZW5kIHJldHVybnMgZmFjZXRzIHdpdGggdmFsdWVzIHRoYXQgZG8gbm90IGNvbnRyaWJ1dGVcbiAgICogdG8gdGhlIGZhY2V0IG5hdmlnYXRpb24gbXVjaCwgYXMgdGhlIG51bWJlciBpbiB0aGUgcmVzdWx0IGxpc3Qgd2lsbCBub3QgZ2V0XG4gICAqIGJlaGF2aW91ciwgc2VlIGh0dHBzOi8vamlyYS5oeWJyaXMuY29tL2Jyb3dzZS9DUy00MjcuXG4gICAqXG4gICAqIEFzIGxvbmcgYXMgdGhpcyBpcyBub3QgaW4gcGxhY2UsIHdlIG1hbnVhbGx5IGZpbHRlciB0aGUgZmFjZXQgZnJvbSB0aGUgbGlzdDtcbiAgICogYW55IGZhY2V0IHRoYXQgZG9lcyBub3QgaGF2ZSBhIGNvdW50IDwgdGhlIHRvdGFsIHJlc3VsdHMgd2lsbCBiZSBkcm9wcGVkIGZyb21cbiAgICogdGhlIGZhY2V0cy5cbiAgICovXG4gIHByaXZhdGUgbm9ybWFsaXplVXNlbGVzc0ZhY2V0cyh0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlKTogdm9pZCB7XG4gICAgdGFyZ2V0LmZhY2V0cyA9IHRhcmdldC5mYWNldHMuZmlsdGVyKGZhY2V0ID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICF0YXJnZXQucGFnaW5hdGlvbiB8fFxuICAgICAgICAhdGFyZ2V0LnBhZ2luYXRpb24udG90YWxSZXN1bHRzIHx8XG4gICAgICAgICgoIWZhY2V0Lmhhc093blByb3BlcnR5KCd2aXNpYmxlJykgfHwgZmFjZXQudmlzaWJsZSkgJiZcbiAgICAgICAgICBmYWNldC52YWx1ZXMgJiZcbiAgICAgICAgICBmYWNldC52YWx1ZXMuZmluZCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICB2YWx1ZS5zZWxlY3RlZCB8fCB2YWx1ZS5jb3VudCA8IHRhcmdldC5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0c1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKlxuICAgKiBJbiBjYXNlIHRoZXJlIGFyZSBzby1jYWxsZWQgYHRvcFZhbHVlc2AgZ2l2ZW4gZm9yIHRoZSBmYWNldCB2YWx1ZXMsXG4gICAqIHZhbHVlcyBhcmUgb2Jzb2xldGUuXG4gICAqXG4gICAqIGB0b3BWYWx1ZXNgIGlzIGEgZmVhdHVyZSBpbiBBZGFwdGl2ZSBTZWFyY2ggd2hpY2ggY2FuIGxpbWl0IGEgbGFyZ2VcbiAgICogYW1vdW50IG9mIGZhY2V0IHZhbHVlcyB0byBhIHNtYWxsIHNldCAoNSBieSBkZWZhdWx0KS4gQXMgbG9uZyBhcyB0aGUgYmFja2VuZFxuICAgKiBwcm92aWRlcyBhbGwgZmFjZXQgdmFsdWVzIEFORCB0b3BWYWx1ZXMsIHdlIG5vcm1hbGl6ZSB0aGUgZGF0YSB0byBub3QgYm90aGVyXG4gICAqIHRoZSBVSSB3aXRoIHRoaXMgc3BlY2lmaWMgZmVhdHVyZS5cbiAgICovXG4gIHByaXZhdGUgbm9ybWFsaXplRmFjZXRWYWx1ZXModGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSk6IHZvaWQge1xuICAgIGlmICh0YXJnZXQuZmFjZXRzKSB7XG4gICAgICB0YXJnZXQuZmFjZXRzID0gdGFyZ2V0LmZhY2V0cy5tYXAoKGZhY2V0U291cmNlOiBGYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRvcFZhbHVlcywgLi4uZmFjZXRUYXJnZXQgfSA9IGZhY2V0U291cmNlO1xuICAgICAgICBmYWNldFRhcmdldC50b3BWYWx1ZUNvdW50ID0gdG9wVmFsdWVzXG4gICAgICAgICAgPyB0b3BWYWx1ZXMubGVuZ3RoXG4gICAgICAgICAgOiB0aGlzLkRFRkFVTFRfVE9QX1ZBTFVFUztcbiAgICAgICAgcmV0dXJuIGZhY2V0VGFyZ2V0O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=