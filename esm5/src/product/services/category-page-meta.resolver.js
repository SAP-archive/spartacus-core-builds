import { __decorate, __extends, __read, __values } from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product-search.service";
import * as i3 from "../../cms/facade/cms.service";
import * as i4 from "../../i18n/translation.service";
/**
 * Resolves the page data for the Product Listing Page
 * based on the `PageType.CATEGORY_PAGE`.
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
var CategoryPageMetaResolver = /** @class */ (function (_super) {
    __extends(CategoryPageMetaResolver, _super);
    function CategoryPageMetaResolver(routingService, productSearchService, cms, translation) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.cms = cms;
        _this.translation = translation;
        // reusable observable for search page data
        _this.searchPage$ = _this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(function (page) {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            return _this.hasProductListComponent(page)
                ? _this.productSearchService.getResults().pipe(filter(Boolean))
                : of(page);
        }));
        _this.pageType = PageType.CATEGORY_PAGE;
        return _this;
    }
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    CategoryPageMetaResolver.prototype.resolve = function () {
        var _this = this;
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(function (page) {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            if (_this.hasProductListComponent(page)) {
                return _this.productSearchService.getResults().pipe(filter(function (data) { return data.breadcrumbs && data.breadcrumbs.length > 0; }), switchMap(function (data) {
                    return combineLatest([
                        _this.resolveTitle(data),
                        _this.resolveBreadcrumbLabel().pipe(switchMap(function (label) { return _this.resolveBreadcrumbs(data, label); })),
                    ]);
                }), map(function (_a) {
                    var _b = __read(_a, 2), title = _b[0], breadcrumbs = _b[1];
                    return ({ title: title, breadcrumbs: breadcrumbs });
                }));
            }
            else {
                return of({
                    title: page.title || page.name,
                });
            }
        }));
    };
    CategoryPageMetaResolver.prototype.resolveTitle = function (searchPage) {
        var _this = this;
        var searchPage$ = searchPage ? of(searchPage) : this.searchPage$;
        return searchPage$.pipe(filter(function (page) { return !!page.pagination; }), switchMap(function (p) {
            return _this.translation.translate('pageMetaResolver.category.title', {
                count: p.pagination.totalResults,
                query: p.breadcrumbs[0].facetValueName,
            });
        }));
    };
    /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     */
    CategoryPageMetaResolver.prototype.resolveBreadcrumbLabel = function () {
        return this.translation.translate('common.home');
    };
    CategoryPageMetaResolver.prototype.resolveBreadcrumbs = function (searchPage, breadcrumbLabel) {
        var _this = this;
        var sources = searchPage && breadcrumbLabel
            ? [of(searchPage), of(breadcrumbLabel)]
            : [this.searchPage$.pipe(), this.translation.translate('common.home')];
        return combineLatest(sources).pipe(map(function (_a) {
            var _b = __read(_a, 2), p = _b[0], label = _b[1];
            return p.breadcrumbs
                ? _this.resolveBreadcrumbData(p, label)
                : null;
        }));
    };
    CategoryPageMetaResolver.prototype.resolveBreadcrumbData = function (page, label) {
        var e_1, _a;
        var breadcrumbs = [];
        breadcrumbs.push({ label: label, link: '/' });
        try {
            for (var _b = __values(page.breadcrumbs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var br = _c.value;
                if (br.facetCode === 'category' || br.facetCode === 'allCategories') {
                    breadcrumbs.push({
                        label: br.facetValueName,
                        link: "/c/" + br.facetValueCode,
                    });
                }
                if (br.facetCode === 'brand') {
                    breadcrumbs.push({
                        label: br.facetValueName,
                        link: "/Brands/" + br.facetValueName + "/c/" + br.facetValueCode,
                    });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return breadcrumbs;
    };
    CategoryPageMetaResolver.prototype.hasProductListComponent = function (page) {
        return !!Object.keys(page.slots).find(function (key) {
            return !!page.slots[key].components.find(function (comp) {
                return comp.typeCode === 'CMSProductListComponent' ||
                    comp.typeCode === 'ProductGridComponent';
            });
        });
    };
    CategoryPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductSearchService },
        { type: CmsService },
        { type: TranslationService }
    ]; };
    CategoryPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductSearchService), i0.ɵɵinject(i3.CmsService), i0.ɵɵinject(i4.TranslationService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
    CategoryPageMetaResolver = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CategoryPageMetaResolver);
    return CategoryPageMetaResolver;
}(PageMetaResolver));
export { CategoryPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7QUFFeEU7Ozs7O0dBS0c7QUFJSDtJQUE4Qyw0Q0FBZ0I7SUFnQjVELGtDQUNZLGNBQThCLEVBQzlCLG9CQUEwQyxFQUMxQyxHQUFlLEVBQ2YsV0FBK0I7UUFKM0MsWUFNRSxpQkFBTyxTQUVSO1FBUFcsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQWxCM0MsMkNBQTJDO1FBQ25DLGlCQUFXLEdBRWYsS0FBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ2hD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RSxDQUFDLGNBQWdCO3FCQUNoQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsSUFBSSxFQUFFLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtvQkFDNUIsV0FBVyxDQUFDLElBQUksQ0FBQzt3QkFDZixLQUFLLEVBQUUsRUFBRSxDQUFDLGNBQWM7d0JBQ3hCLElBQUksRUFBRSxhQUFXLEVBQUUsQ0FBQyxjQUFjLFdBQU0sRUFBRSxDQUFDLGNBQWdCO3FCQUM1RCxDQUFDLENBQUM7aUJBQ0o7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVPLDBEQUF1QixHQUEvQixVQUFnQyxJQUFVO1FBQ3hDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDbkMsVUFBQSxHQUFHO1lBQ0QsT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUMvQixVQUFBLElBQUk7Z0JBQ0YsT0FBQSxJQUFJLENBQUMsUUFBUSxLQUFLLHlCQUF5QjtvQkFDM0MsSUFBSSxDQUFDLFFBQVEsS0FBSyxzQkFBc0I7WUFEeEMsQ0FDd0MsQ0FDM0M7UUFKRCxDQUlDLENBQ0osQ0FBQztJQUNKLENBQUM7O2dCQWxJMkIsY0FBYztnQkFDUixvQkFBb0I7Z0JBQ3JDLFVBQVU7Z0JBQ0Ysa0JBQWtCOzs7SUFwQmhDLHdCQUF3QjtRQUhwQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csd0JBQXdCLENBb0pwQzttQ0E3S0Q7Q0E2S0MsQUFwSkQsQ0FBOEMsZ0JBQWdCLEdBb0o3RDtTQXBKWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgdGhlIFByb2R1Y3QgTGlzdGluZyBQYWdlXG4gKiBiYXNlZCBvbiB0aGUgYFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0VgLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBhbmQgYnJlYWRjcnVtYnMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gIC8vIHJldXNhYmxlIG9ic2VydmFibGUgZm9yIHNlYXJjaCBwYWdlIGRhdGFcbiAgcHJpdmF0ZSBzZWFyY2hQYWdlJDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0U2VhcmNoUGFnZSB8IFBhZ2VcbiAgPiA9IHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PlxuICAgICAgLy8gb25seSB0aGUgZXhpc3RlbmNlIG9mIGEgcGxwIGNvbXBvbmVudCB0ZWxscyB1cyBpZiBwcm9kdWN0c1xuICAgICAgLy8gYXJlIHJlbmRlcmVkIG9yIGlmIHRoaXMgaXMgYW4gb3JkaW5hcnkgY29udGVudCBwYWdlXG4gICAgICB0aGlzLmhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2UpXG4gICAgICAgID8gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShmaWx0ZXIoQm9vbGVhbikpXG4gICAgICAgIDogb2YocGFnZSlcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKlxuICAgKiBUaGUgcmVzb2x2ZSBtZXRob2QgaXMgbm8gbG9uZ2VyIHByZWZlcnJlZCBhbmQgd2lsbCBiZSByZW1vdmVkIHdpdGggcmVsZWFzZSAyLjAuXG4gICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAqIGluc3RlYWQsIHNvIHRoYXQgdGhlIGNvZGUgaXMgZWFzaWVyIGV4dGVuc2libGUuXG4gICAqL1xuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHwgYW55IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PiB7XG4gICAgICAgIC8vIG9ubHkgdGhlIGV4aXN0ZW5jZSBvZiBhIHBscCBjb21wb25lbnQgdGVsbHMgdXMgaWYgcHJvZHVjdHNcbiAgICAgICAgLy8gYXJlIHJlbmRlcmVkIG9yIGlmIHRoaXMgaXMgYW4gb3JkaW5hcnkgY29udGVudCBwYWdlXG4gICAgICAgIGlmICh0aGlzLmhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2UpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoZGF0YSA9PiBkYXRhLmJyZWFkY3J1bWJzICYmIGRhdGEuYnJlYWRjcnVtYnMubGVuZ3RoID4gMCksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PlxuICAgICAgICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVUaXRsZShkYXRhKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVCcmVhZGNydW1iTGFiZWwoKS5waXBlKFxuICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKGxhYmVsID0+IHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJzKGRhdGEsIGxhYmVsKSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1hcCgoW3RpdGxlLCBicmVhZGNydW1ic10pID0+ICh7IHRpdGxlLCBicmVhZGNydW1icyB9KSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZih7XG4gICAgICAgICAgICB0aXRsZTogcGFnZS50aXRsZSB8fCBwYWdlLm5hbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlVGl0bGUoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZVRpdGxlKHNlYXJjaFBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICByZXNvbHZlVGl0bGUoc2VhcmNoUGFnZT86IFByb2R1Y3RTZWFyY2hQYWdlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBzZWFyY2hQYWdlJCA9IHNlYXJjaFBhZ2UgPyBvZihzZWFyY2hQYWdlKSA6IHRoaXMuc2VhcmNoUGFnZSQ7XG5cbiAgICByZXR1cm4gc2VhcmNoUGFnZSQucGlwZShcbiAgICAgIGZpbHRlcigocGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UpID0+ICEhcGFnZS5wYWdpbmF0aW9uKSxcbiAgICAgIHN3aXRjaE1hcChwID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLmNhdGVnb3J5LnRpdGxlJywge1xuICAgICAgICAgIGNvdW50OiAoPFByb2R1Y3RTZWFyY2hQYWdlPnApLnBhZ2luYXRpb24udG90YWxSZXN1bHRzLFxuICAgICAgICAgIHF1ZXJ5OiAoPFByb2R1Y3RTZWFyY2hQYWdlPnApLmJyZWFkY3J1bWJzWzBdLmZhY2V0VmFsdWVOYW1lLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyBtZXRob2Qgd2lsbCByZW1vdmVkIHdpdGggd2l0aCAyLjBcbiAgICovXG4gIHJlc29sdmVCcmVhZGNydW1iTGFiZWwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyk7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlQnJlYWRjcnVtYnMoXG4gICAgc2VhcmNoUGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgYnJlYWRjcnVtYkxhYmVsOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIHJlc29sdmVCcmVhZGNydW1icyhcbiAgICBzZWFyY2hQYWdlPzogUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgYnJlYWRjcnVtYkxhYmVsPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBzb3VyY2VzID1cbiAgICAgIHNlYXJjaFBhZ2UgJiYgYnJlYWRjcnVtYkxhYmVsXG4gICAgICAgID8gW29mKHNlYXJjaFBhZ2UpLCBvZihicmVhZGNydW1iTGFiZWwpXVxuICAgICAgICA6IFt0aGlzLnNlYXJjaFBhZ2UkLnBpcGUoKSwgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyldO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoc291cmNlcykucGlwZShcbiAgICAgIG1hcCgoW3AsIGxhYmVsXTogW1Byb2R1Y3RTZWFyY2hQYWdlLCBzdHJpbmddKSA9PlxuICAgICAgICBwLmJyZWFkY3J1bWJzXG4gICAgICAgICAgPyB0aGlzLnJlc29sdmVCcmVhZGNydW1iRGF0YSg8UHJvZHVjdFNlYXJjaFBhZ2U+cCwgbGFiZWwpXG4gICAgICAgICAgOiBudWxsXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUJyZWFkY3J1bWJEYXRhKHBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlLCBsYWJlbDogc3RyaW5nKTogYW55W10ge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gW107XG4gICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH0pO1xuXG4gICAgZm9yIChjb25zdCBiciBvZiBwYWdlLmJyZWFkY3J1bWJzKSB7XG4gICAgICBpZiAoYnIuZmFjZXRDb2RlID09PSAnY2F0ZWdvcnknIHx8IGJyLmZhY2V0Q29kZSA9PT0gJ2FsbENhdGVnb3JpZXMnKSB7XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBici5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICBsaW5rOiBgL2MvJHtici5mYWNldFZhbHVlQ29kZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChici5mYWNldENvZGUgPT09ICdicmFuZCcpIHtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGJyLmZhY2V0VmFsdWVOYW1lLFxuICAgICAgICAgIGxpbms6IGAvQnJhbmRzLyR7YnIuZmFjZXRWYWx1ZU5hbWV9L2MvJHtici5mYWNldFZhbHVlQ29kZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNQcm9kdWN0TGlzdENvbXBvbmVudChwYWdlOiBQYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXMocGFnZS5zbG90cykuZmluZChcbiAgICAgIGtleSA9PlxuICAgICAgICAhIXBhZ2Uuc2xvdHNba2V5XS5jb21wb25lbnRzLmZpbmQoXG4gICAgICAgICAgY29tcCA9PlxuICAgICAgICAgICAgY29tcC50eXBlQ29kZSA9PT0gJ0NNU1Byb2R1Y3RMaXN0Q29tcG9uZW50JyB8fFxuICAgICAgICAgICAgY29tcC50eXBlQ29kZSA9PT0gJ1Byb2R1Y3RHcmlkQ29tcG9uZW50J1xuICAgICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19