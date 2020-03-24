import { __decorate, __extends, __read } from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageMetaResolver } from '../../cms';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product-search.service";
import * as i3 from "../../i18n/translation.service";
/**
 * Resolves the page data for the Search Result Page based on the
 * `PageType.CATEGORY_PAGE` and the `SearchResultsListPageTemplate` template.
 *
 * Only the page title is resolved in the standard implemenation.
 */
var SearchPageMetaResolver = /** @class */ (function (_super) {
    __extends(SearchPageMetaResolver, _super);
    function SearchPageMetaResolver(routingService, productSearchService, translation) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.translation = translation;
        _this.total$ = _this.productSearchService.getResults().pipe(filter(function (data) { var _a; return !!((_a = data) === null || _a === void 0 ? void 0 : _a.pagination); }), map(function (results) { return results.pagination.totalResults; }));
        _this.query$ = _this.routingService
            .getRouterState()
            .pipe(map(function (state) { return state.state.params['query']; }));
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'SearchResultsListPageTemplate';
        return _this;
    }
    SearchPageMetaResolver.prototype.resolveTitle = function () {
        var _this = this;
        var sources = [this.total$, this.query$];
        return combineLatest(sources).pipe(switchMap(function (_a) {
            var _b = __read(_a, 2), t = _b[0], q = _b[1];
            return _this.translation.translate('pageMetaResolver.search.title', {
                count: t,
                query: q,
            });
        }));
    };
    SearchPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductSearchService },
        { type: TranslationService }
    ]; };
    SearchPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function SearchPageMetaResolver_Factory() { return new SearchPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductSearchService), i0.ɵɵinject(i3.TranslationService)); }, token: SearchPageMetaResolver, providedIn: "root" });
    SearchPageMetaResolver = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SearchPageMetaResolver);
    return SearchPageMetaResolver;
}(PageMetaResolver));
export { SearchPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3NlcnZpY2VzL3NlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7QUFFeEU7Ozs7O0dBS0c7QUFJSDtJQUE0QywwQ0FBZ0I7SUFlMUQsZ0NBQ1ksY0FBOEIsRUFDOUIsb0JBQTBDLEVBQzFDLFdBQStCO1FBSDNDLFlBS0UsaUJBQU8sU0FHUjtRQVBXLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QiwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQWhCakMsWUFBTSxHQUVaLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQzdDLE1BQU0sQ0FBQyxVQUFBLElBQUksWUFBSSxPQUFBLENBQUMsUUFBQyxJQUFJLDBDQUFFLFVBQVUsQ0FBQSxDQUFBLEVBQUEsQ0FBQyxFQUNsQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBL0IsQ0FBK0IsQ0FBQyxDQUNoRCxDQUFDO1FBRVEsWUFBTSxHQUVaLEtBQUksQ0FBQyxjQUFjO2FBQ3BCLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQyxDQUFDO1FBUWpELEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QyxLQUFJLENBQUMsWUFBWSxHQUFHLCtCQUErQixDQUFDOztJQUN0RCxDQUFDO0lBRUQsNkNBQVksR0FBWjtRQUFBLGlCQVVDO1FBVEMsSUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2hDLFNBQVMsQ0FBQyxVQUFDLEVBQXdCO2dCQUF4QixrQkFBd0IsRUFBdkIsU0FBQyxFQUFFLFNBQUM7WUFDZCxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLCtCQUErQixFQUFFO2dCQUMxRCxLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7UUFIRixDQUdFLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbkIyQixjQUFjO2dCQUNSLG9CQUFvQjtnQkFDN0Isa0JBQWtCOzs7SUFsQmhDLHNCQUFzQjtRQUhsQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csc0JBQXNCLENBb0NsQztpQ0F0REQ7Q0FzREMsQUFwQ0QsQ0FBNEMsZ0JBQWdCLEdBb0MzRDtTQXBDWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgdGhlIFNlYXJjaCBSZXN1bHQgUGFnZSBiYXNlZCBvbiB0aGVcbiAqIGBQYWdlVHlwZS5DQVRFR09SWV9QQUdFYCBhbmQgdGhlIGBTZWFyY2hSZXN1bHRzTGlzdFBhZ2VUZW1wbGF0ZWAgdGVtcGxhdGUuXG4gKlxuICogT25seSB0aGUgcGFnZSB0aXRsZSBpcyByZXNvbHZlZCBpbiB0aGUgc3RhbmRhcmQgaW1wbGVtZW5hdGlvbi5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZU1ldGFSZXNvbHZlciB7XG4gIHByb3RlY3RlZCB0b3RhbCQ6IE9ic2VydmFibGU8XG4gICAgbnVtYmVyXG4gID4gPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKS5waXBlKFxuICAgIGZpbHRlcihkYXRhID0+ICEhZGF0YT8ucGFnaW5hdGlvbiksXG4gICAgbWFwKHJlc3VsdHMgPT4gcmVzdWx0cy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cylcbiAgKTtcblxuICBwcm90ZWN0ZWQgcXVlcnkkOiBPYnNlcnZhYmxlPFxuICAgIHN0cmluZ1xuICA+ID0gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnN0YXRlLnBhcmFtc1sncXVlcnknXSkpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gICAgdGhpcy5wYWdlVGVtcGxhdGUgPSAnU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3Qgc291cmNlcyA9IFt0aGlzLnRvdGFsJCwgdGhpcy5xdWVyeSRdO1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHNvdXJjZXMpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFt0LCBxXTogW251bWJlciwgc3RyaW5nXSkgPT5cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIuc2VhcmNoLnRpdGxlJywge1xuICAgICAgICAgIGNvdW50OiB0LFxuICAgICAgICAgIHF1ZXJ5OiBxLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==