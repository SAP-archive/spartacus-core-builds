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
};
OccProductSearchPageNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccProductSearchPageNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccProductSearchPageNormalizer_Factory() { return new OccProductSearchPageNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccProductSearchPageNormalizer, providedIn: "root" });
OccProductSearchPageNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccProductSearchPageNormalizer);
export { OccProductSearchPageNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXNlYXJjaC1wYWdlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBSTVDLElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0lBRXpDLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRXREOzs7V0FHRztRQUNPLHVCQUFrQixHQUFHLENBQUMsQ0FBQztJQU53QixDQUFDO0lBUTFELE9BQU8sQ0FDTCxNQUE2QixFQUM3QixTQUE0QixFQUFFO1FBRTlCLE1BQU0sbUNBQ0QsTUFBTSxHQUNMLE1BQWMsQ0FDbkIsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUMzRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sZUFBZSxDQUFDLE1BQXlCO1FBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ssc0JBQXNCLENBQUMsTUFBeUI7UUFDdEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzdDLE9BQU8sQ0FDTCxDQUFDLE1BQU0sQ0FBQyxVQUFVO2dCQUNsQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWTtnQkFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNsRCxLQUFLLENBQUMsTUFBTTtvQkFDWixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO3dCQUMxQixPQUFPLENBQ0wsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUMvRCxDQUFDO29CQUNKLENBQUMsQ0FBQyxDQUFDLENBQ04sQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ssb0JBQW9CLENBQUMsTUFBeUI7UUFDcEQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFrQixFQUFFLEVBQUU7Z0JBQ3ZELE1BQU0sRUFBRSxTQUFTLEtBQXFCLFdBQVcsRUFBOUIsZ0RBQThCLENBQUM7Z0JBQ2xELFdBQVcsQ0FBQyxhQUFhO29CQUN2QixDQUFBLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxNQUFNLElBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3JFLE9BQU8sV0FBVyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUEzRXVDLGdCQUFnQjs7O0FBRjNDLDhCQUE4QjtJQUQxQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsOEJBQThCLENBNkUxQztTQTdFWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGYWNldCxcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFNlYXJjaFBhZ2VOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSwgUHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG1pbmltYWwgbnVtYmVyIG9mIHRvcCB2YWx1ZXMgaW4gY2FzZVxuICAgKiBub24gaGF2ZSBiZWVuIHNldHVwIGJ5IHRoZSBidXNpbmVzcy5cbiAgICovXG4gIHByb3RlY3RlZCBERUZBVUxUX1RPUF9WQUxVRVMgPSA2O1xuXG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgdGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSA9IHt9XG4gICk6IFByb2R1Y3RTZWFyY2hQYWdlIHtcbiAgICB0YXJnZXQgPSB7XG4gICAgICAuLi50YXJnZXQsXG4gICAgICAuLi4oc291cmNlIGFzIGFueSksXG4gICAgfTtcblxuICAgIHRoaXMubm9ybWFsaXplRmFjZXRzKHRhcmdldCk7XG4gICAgaWYgKHNvdXJjZS5wcm9kdWN0cykge1xuICAgICAgdGFyZ2V0LnByb2R1Y3RzID0gc291cmNlLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT5cbiAgICAgICAgdGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLmNvbnZlcnQocHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplRmFjZXRzKHRhcmdldDogUHJvZHVjdFNlYXJjaFBhZ2UpOiB2b2lkIHtcbiAgICB0aGlzLm5vcm1hbGl6ZUZhY2V0VmFsdWVzKHRhcmdldCk7XG4gICAgdGhpcy5ub3JtYWxpemVVc2VsZXNzRmFjZXRzKHRhcmdldCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIChjdXJyZW50KSBiYWNrZW5kIHJldHVybnMgZmFjZXRzIHdpdGggdmFsdWVzIHRoYXQgZG8gbm90IGNvbnRyaWJ1dGVcbiAgICogdG8gdGhlIGZhY2V0IG5hdmlnYXRpb24gbXVjaCwgYXMgdGhlIG51bWJlciBpbiB0aGUgcmVzdWx0IGxpc3Qgd2lsbCBub3QgZ2V0XG4gICAqIGJlaGF2aW9yLCBzZWUgaHR0cHM6Ly9qaXJhLmh5YnJpcy5jb20vYnJvd3NlL0NTLTQyNy5cbiAgICpcbiAgICogQXMgbG9uZyBhcyB0aGlzIGlzIG5vdCBpbiBwbGFjZSwgd2UgbWFudWFsbHkgZmlsdGVyIHRoZSBmYWNldCBmcm9tIHRoZSBsaXN0O1xuICAgKiBhbnkgZmFjZXQgdGhhdCBkb2VzIG5vdCBoYXZlIGEgY291bnQgPCB0aGUgdG90YWwgcmVzdWx0cyB3aWxsIGJlIGRyb3BwZWQgZnJvbVxuICAgKiB0aGUgZmFjZXRzLlxuICAgKi9cbiAgcHJpdmF0ZSBub3JtYWxpemVVc2VsZXNzRmFjZXRzKHRhcmdldDogUHJvZHVjdFNlYXJjaFBhZ2UpOiB2b2lkIHtcbiAgICB0YXJnZXQuZmFjZXRzID0gdGFyZ2V0LmZhY2V0cy5maWx0ZXIoKGZhY2V0KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAhdGFyZ2V0LnBhZ2luYXRpb24gfHxcbiAgICAgICAgIXRhcmdldC5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cyB8fFxuICAgICAgICAoKCFmYWNldC5oYXNPd25Qcm9wZXJ0eSgndmlzaWJsZScpIHx8IGZhY2V0LnZpc2libGUpICYmXG4gICAgICAgICAgZmFjZXQudmFsdWVzICYmXG4gICAgICAgICAgZmFjZXQudmFsdWVzLmZpbmQoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICB2YWx1ZS5zZWxlY3RlZCB8fCB2YWx1ZS5jb3VudCA8IHRhcmdldC5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0c1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKlxuICAgKiBJbiBjYXNlIHRoZXJlIGFyZSBzby1jYWxsZWQgYHRvcFZhbHVlc2AgZ2l2ZW4gZm9yIHRoZSBmYWNldCB2YWx1ZXMsXG4gICAqIHZhbHVlcyBhcmUgb2Jzb2xldGUuXG4gICAqXG4gICAqIGB0b3BWYWx1ZXNgIGlzIGEgZmVhdHVyZSBpbiBBZGFwdGl2ZSBTZWFyY2ggd2hpY2ggY2FuIGxpbWl0IGEgbGFyZ2VcbiAgICogYW1vdW50IG9mIGZhY2V0IHZhbHVlcyB0byBhIHNtYWxsIHNldCAoNSBieSBkZWZhdWx0KS4gQXMgbG9uZyBhcyB0aGUgYmFja2VuZFxuICAgKiBwcm92aWRlcyBhbGwgZmFjZXQgdmFsdWVzIEFORCB0b3BWYWx1ZXMsIHdlIG5vcm1hbGl6ZSB0aGUgZGF0YSB0byBub3QgYm90aGVyXG4gICAqIHRoZSBVSSB3aXRoIHRoaXMgc3BlY2lmaWMgZmVhdHVyZS5cbiAgICovXG4gIHByaXZhdGUgbm9ybWFsaXplRmFjZXRWYWx1ZXModGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSk6IHZvaWQge1xuICAgIGlmICh0YXJnZXQuZmFjZXRzKSB7XG4gICAgICB0YXJnZXQuZmFjZXRzID0gdGFyZ2V0LmZhY2V0cy5tYXAoKGZhY2V0U291cmNlOiBGYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRvcFZhbHVlcywgLi4uZmFjZXRUYXJnZXQgfSA9IGZhY2V0U291cmNlO1xuICAgICAgICBmYWNldFRhcmdldC50b3BWYWx1ZUNvdW50ID1cbiAgICAgICAgICB0b3BWYWx1ZXM/Lmxlbmd0aCA+IDAgPyB0b3BWYWx1ZXMubGVuZ3RoIDogdGhpcy5ERUZBVUxUX1RPUF9WQUxVRVM7XG4gICAgICAgIHJldHVybiBmYWNldFRhcmdldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19