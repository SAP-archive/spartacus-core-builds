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
     * behaviour, see https://jira.hybris.com/browse/CS-427.
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
                facetTarget.topValueCount = topValues
                    ? topValues.length
                    : _this.DEFAULT_TOP_VALUES;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXNlYXJjaC1wYWdlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBSTVDO0lBRUUsd0NBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRXREOzs7V0FHRztRQUNPLHVCQUFrQixHQUFHLENBQUMsQ0FBQztJQU53QixDQUFDO0lBUTFELGdEQUFPLEdBQVAsVUFDRSxNQUE2QixFQUM3QixNQUE4QjtRQUZoQyxpQkFnQkM7UUFkQyx1QkFBQSxFQUFBLFdBQThCO1FBRTlCLE1BQU0seUJBQ0QsTUFBTSxHQUNMLE1BQWMsQ0FDbkIsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFPO2dCQUM1QyxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDO1lBQTFELENBQTBELENBQzNELENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx3REFBZSxHQUF2QixVQUF3QixNQUF5QjtRQUMvQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNLLCtEQUFzQixHQUE5QixVQUErQixNQUF5QjtRQUN0RCxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSztZQUN6QyxPQUFPLENBQ0wsQ0FBQyxNQUFNLENBQUMsVUFBVTtnQkFDbEIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVk7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDbEQsS0FBSyxDQUFDLE1BQU07b0JBQ1osS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO3dCQUN0QixPQUFPLENBQ0wsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUMvRCxDQUFDO29CQUNKLENBQUMsQ0FBQyxDQUFDLENBQ04sQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ssNkRBQW9CLEdBQTVCLFVBQTZCLE1BQXlCO1FBQXRELGlCQVVDO1FBVEMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxXQUFrQjtnQkFDM0MsSUFBQSxpQ0FBUyxFQUFFLGdEQUFjLENBQWlCO2dCQUNsRCxXQUFXLENBQUMsYUFBYSxHQUFHLFNBQVM7b0JBQ25DLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTTtvQkFDbEIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDNUIsT0FBTyxXQUFXLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQTNFcUMsZ0JBQWdCOzs7SUFGM0MsOEJBQThCO1FBRDFDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0Qiw4QkFBOEIsQ0E4RTFDO3lDQTNGRDtDQTJGQyxBQTlFRCxJQThFQztTQTlFWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGYWNldCxcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFNlYXJjaFBhZ2VOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSwgUHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG1pbmltYWwgbnVtYmVyIG9mIHRvcCB2YWx1ZXMgaW4gY2FzZVxuICAgKiBub24gaGF2ZSBiZWVuIHNldHVwIGJ5IHRoZSBidXNpbmVzcy5cbiAgICovXG4gIHByb3RlY3RlZCBERUZBVUxUX1RPUF9WQUxVRVMgPSA2O1xuXG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgdGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSA9IHt9XG4gICk6IFByb2R1Y3RTZWFyY2hQYWdlIHtcbiAgICB0YXJnZXQgPSB7XG4gICAgICAuLi50YXJnZXQsXG4gICAgICAuLi4oc291cmNlIGFzIGFueSksXG4gICAgfTtcblxuICAgIHRoaXMubm9ybWFsaXplRmFjZXRzKHRhcmdldCk7XG4gICAgaWYgKHNvdXJjZS5wcm9kdWN0cykge1xuICAgICAgdGFyZ2V0LnByb2R1Y3RzID0gc291cmNlLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT5cbiAgICAgICAgdGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLmNvbnZlcnQocHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplRmFjZXRzKHRhcmdldDogUHJvZHVjdFNlYXJjaFBhZ2UpOiB2b2lkIHtcbiAgICB0aGlzLm5vcm1hbGl6ZUZhY2V0VmFsdWVzKHRhcmdldCk7XG4gICAgdGhpcy5ub3JtYWxpemVVc2VsZXNzRmFjZXRzKHRhcmdldCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIChjdXJyZW50KSBiYWNrZW5kIHJldHVybnMgZmFjZXRzIHdpdGggdmFsdWVzIHRoYXQgZG8gbm90IGNvbnRyaWJ1dGVcbiAgICogdG8gdGhlIGZhY2V0IG5hdmlnYXRpb24gbXVjaCwgYXMgdGhlIG51bWJlciBpbiB0aGUgcmVzdWx0IGxpc3Qgd2lsbCBub3QgZ2V0XG4gICAqIGJlaGF2aW91ciwgc2VlIGh0dHBzOi8vamlyYS5oeWJyaXMuY29tL2Jyb3dzZS9DUy00MjcuXG4gICAqXG4gICAqIEFzIGxvbmcgYXMgdGhpcyBpcyBub3QgaW4gcGxhY2UsIHdlIG1hbnVhbGx5IGZpbHRlciB0aGUgZmFjZXQgZnJvbSB0aGUgbGlzdDtcbiAgICogYW55IGZhY2V0IHRoYXQgZG9lcyBub3QgaGF2ZSBhIGNvdW50IDwgdGhlIHRvdGFsIHJlc3VsdHMgd2lsbCBiZSBkcm9wcGVkIGZyb21cbiAgICogdGhlIGZhY2V0cy5cbiAgICovXG4gIHByaXZhdGUgbm9ybWFsaXplVXNlbGVzc0ZhY2V0cyh0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlKTogdm9pZCB7XG4gICAgdGFyZ2V0LmZhY2V0cyA9IHRhcmdldC5mYWNldHMuZmlsdGVyKChmYWNldCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgIXRhcmdldC5wYWdpbmF0aW9uIHx8XG4gICAgICAgICF0YXJnZXQucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMgfHxcbiAgICAgICAgKCghZmFjZXQuaGFzT3duUHJvcGVydHkoJ3Zpc2libGUnKSB8fCBmYWNldC52aXNpYmxlKSAmJlxuICAgICAgICAgIGZhY2V0LnZhbHVlcyAmJlxuICAgICAgICAgIGZhY2V0LnZhbHVlcy5maW5kKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgdmFsdWUuc2VsZWN0ZWQgfHwgdmFsdWUuY291bnQgPCB0YXJnZXQucGFnaW5hdGlvbi50b3RhbFJlc3VsdHNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLypcbiAgICogSW4gY2FzZSB0aGVyZSBhcmUgc28tY2FsbGVkIGB0b3BWYWx1ZXNgIGdpdmVuIGZvciB0aGUgZmFjZXQgdmFsdWVzLFxuICAgKiB2YWx1ZXMgYXJlIG9ic29sZXRlLlxuICAgKlxuICAgKiBgdG9wVmFsdWVzYCBpcyBhIGZlYXR1cmUgaW4gQWRhcHRpdmUgU2VhcmNoIHdoaWNoIGNhbiBsaW1pdCBhIGxhcmdlXG4gICAqIGFtb3VudCBvZiBmYWNldCB2YWx1ZXMgdG8gYSBzbWFsbCBzZXQgKDUgYnkgZGVmYXVsdCkuIEFzIGxvbmcgYXMgdGhlIGJhY2tlbmRcbiAgICogcHJvdmlkZXMgYWxsIGZhY2V0IHZhbHVlcyBBTkQgdG9wVmFsdWVzLCB3ZSBub3JtYWxpemUgdGhlIGRhdGEgdG8gbm90IGJvdGhlclxuICAgKiB0aGUgVUkgd2l0aCB0aGlzIHNwZWNpZmljIGZlYXR1cmUuXG4gICAqL1xuICBwcml2YXRlIG5vcm1hbGl6ZUZhY2V0VmFsdWVzKHRhcmdldDogUHJvZHVjdFNlYXJjaFBhZ2UpOiB2b2lkIHtcbiAgICBpZiAodGFyZ2V0LmZhY2V0cykge1xuICAgICAgdGFyZ2V0LmZhY2V0cyA9IHRhcmdldC5mYWNldHMubWFwKChmYWNldFNvdXJjZTogRmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b3BWYWx1ZXMsIC4uLmZhY2V0VGFyZ2V0IH0gPSBmYWNldFNvdXJjZTtcbiAgICAgICAgZmFjZXRUYXJnZXQudG9wVmFsdWVDb3VudCA9IHRvcFZhbHVlc1xuICAgICAgICAgID8gdG9wVmFsdWVzLmxlbmd0aFxuICAgICAgICAgIDogdGhpcy5ERUZBVUxUX1RPUF9WQUxVRVM7XG4gICAgICAgIHJldHVybiBmYWNldFRhcmdldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19