import { __decorate, __extends, __read, __values } from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { ProductSearchService } from '../facade/product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/product-search.service";
import * as i2 from "../../cms/facade/cms.service";
import * as i3 from "../../i18n/translation.service";
/**
 * Resolves the page data for the Product Listing Page.
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
var CategoryPageMetaResolver = /** @class */ (function (_super) {
    __extends(CategoryPageMetaResolver, _super);
    function CategoryPageMetaResolver(productSearchService, cms, translation) {
        var _this = _super.call(this) || this;
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
    CategoryPageMetaResolver.prototype.resolveTitle = function () {
        var _this = this;
        return this.searchPage$.pipe(filter(function (page) { return !!page.pagination; }), switchMap(function (p) {
            var _a;
            return _this.translation.translate('pageMetaResolver.category.title', {
                count: p.pagination.totalResults,
                query: ((_a = p.breadcrumbs) === null || _a === void 0 ? void 0 : _a.length) ? p.breadcrumbs[0].facetValueName
                    : undefined,
            });
        }));
    };
    CategoryPageMetaResolver.prototype.resolveBreadcrumbs = function () {
        var _this = this;
        return combineLatest([
            this.searchPage$.pipe(),
            this.translation.translate('common.home'),
        ]).pipe(map(function (_a) {
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
        { type: ProductSearchService },
        { type: CmsService },
        { type: TranslationService }
    ]; };
    CategoryPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(i0.ɵɵinject(i1.ProductSearchService), i0.ɵɵinject(i2.CmsService), i0.ɵɵinject(i3.TranslationService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
    CategoryPageMetaResolver = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CategoryPageMetaResolver);
    return CategoryPageMetaResolver;
}(PageMetaResolver));
export { CategoryPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBRXhFOzs7O0dBSUc7QUFJSDtJQUE4Qyw0Q0FBZ0I7SUFnQjVELGtDQUNZLG9CQUEwQyxFQUMxQyxHQUFlLEVBQ2YsV0FBK0I7UUFIM0MsWUFLRSxpQkFBTyxTQUVSO1FBTlcsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxTQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsaUJBQVcsR0FBWCxXQUFXLENBQW9CO1FBakIzQywyQ0FBMkM7UUFDakMsaUJBQVcsR0FFakIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixTQUFTLENBQUMsVUFBQyxJQUFVO1lBQ25CLDZEQUE2RDtZQUM3RCxzREFBc0Q7WUFDdEQsT0FBQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDO2dCQUNoQyxDQUFDLENBQUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBRlosQ0FFWSxDQUNiLENBQ0YsQ0FBQztRQVFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQzs7SUFDekMsQ0FBQztJQUVELCtDQUFZLEdBQVo7UUFBQSxpQkFZQztRQVhDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzFCLE1BQU0sQ0FBQyxVQUFDLElBQXVCLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBakIsQ0FBaUIsQ0FBQyxFQUN0RCxTQUFTLENBQUMsVUFBQyxDQUFvQjs7WUFDN0IsT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxpQ0FBaUMsRUFBRTtnQkFDNUQsS0FBSyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWTtnQkFDaEMsS0FBSyxFQUFFLE9BQUEsQ0FBQyxDQUFDLFdBQVcsMENBQUUsTUFBTSxFQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjO29CQUNqQyxDQUFDLENBQUMsU0FBUzthQUNkLENBQUMsQ0FBQTtTQUFBLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELHFEQUFrQixHQUFsQjtRQUFBLGlCQVdDO1FBVkMsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1NBQzFDLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLFVBQUMsRUFBdUM7Z0JBQXZDLGtCQUF1QyxFQUF0QyxTQUFDLEVBQUUsYUFBSztZQUNaLE9BQUEsQ0FBQyxDQUFDLFdBQVc7Z0JBQ1gsQ0FBQyxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBb0IsQ0FBQyxFQUFFLEtBQUssQ0FBQztnQkFDekQsQ0FBQyxDQUFDLElBQUk7UUFGUixDQUVRLENBQ1QsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVTLHdEQUFxQixHQUEvQixVQUNFLElBQXVCLEVBQ3ZCLEtBQWE7O1FBRWIsSUFBTSxXQUFXLEdBQXFCLEVBQUUsQ0FBQztRQUN6QyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFOUMsS0FBaUIsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBOUIsSUFBTSxFQUFFLFdBQUE7Z0JBQ1gsSUFBSSxFQUFFLENBQUMsU0FBUyxLQUFLLFVBQVUsSUFBSSxFQUFFLENBQUMsU0FBUyxLQUFLLGVBQWUsRUFBRTtvQkFDbkUsV0FBVyxDQUFDLElBQUksQ0FBQzt3QkFDZixLQUFLLEVBQUUsRUFBRSxDQUFDLGNBQWM7d0JBQ3hCLElBQUksRUFBRSxRQUFNLEVBQUUsQ0FBQyxjQUFnQjtxQkFDaEMsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELElBQUksRUFBRSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7b0JBQzVCLFdBQVcsQ0FBQyxJQUFJLENBQUM7d0JBQ2YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxjQUFjO3dCQUN4QixJQUFJLEVBQUUsYUFBVyxFQUFFLENBQUMsY0FBYyxXQUFNLEVBQUUsQ0FBQyxjQUFnQjtxQkFDNUQsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFUywwREFBdUIsR0FBakMsVUFBa0MsSUFBVTtRQUMxQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQ25DLFVBQUMsR0FBRztZQUNGLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDL0IsVUFBQyxJQUFJO2dCQUNILE9BQUEsSUFBSSxDQUFDLFFBQVEsS0FBSyx5QkFBeUI7b0JBQzNDLElBQUksQ0FBQyxRQUFRLEtBQUssc0JBQXNCO1lBRHhDLENBQ3dDLENBQzNDO1FBSkQsQ0FJQyxDQUNKLENBQUM7SUFDSixDQUFDOztnQkFwRWlDLG9CQUFvQjtnQkFDckMsVUFBVTtnQkFDRixrQkFBa0I7OztJQW5CaEMsd0JBQXdCO1FBSHBDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx3QkFBd0IsQ0FzRnBDO21DQTdHRDtDQTZHQyxBQXRGRCxDQUE4QyxnQkFBZ0IsR0FzRjdEO1NBdEZZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYk1ldGEsIFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7XG4gIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBkYXRhIGZvciB0aGUgUHJvZHVjdCBMaXN0aW5nIFBhZ2UuXG4gKlxuICogVGhlIHBhZ2UgdGl0bGUsIGFuZCBicmVhZGNydW1icyBhcmUgcmVzb2x2ZWQgaW4gdGhpcyBpbXBsZW1lbnRhdGlvbiBvbmx5LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlQnJlYWRjcnVtYlJlc29sdmVyIHtcbiAgLy8gcmV1c2FibGUgb2JzZXJ2YWJsZSBmb3Igc2VhcmNoIHBhZ2UgZGF0YVxuICBwcm90ZWN0ZWQgc2VhcmNoUGFnZSQ6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdFNlYXJjaFBhZ2UgfCBQYWdlXG4gID4gPSB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoXG4gICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgIHN3aXRjaE1hcCgocGFnZTogUGFnZSkgPT5cbiAgICAgIC8vIG9ubHkgdGhlIGV4aXN0ZW5jZSBvZiBhIHBscCBjb21wb25lbnQgdGVsbHMgdXMgaWYgcHJvZHVjdHNcbiAgICAgIC8vIGFyZSByZW5kZXJlZCBvciBpZiB0aGlzIGlzIGFuIG9yZGluYXJ5IGNvbnRlbnQgcGFnZVxuICAgICAgdGhpcy5oYXNQcm9kdWN0TGlzdENvbXBvbmVudChwYWdlKVxuICAgICAgICA/IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpLnBpcGUoZmlsdGVyKEJvb2xlYW4pKVxuICAgICAgICA6IG9mKHBhZ2UpXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoUGFnZSQucGlwZShcbiAgICAgIGZpbHRlcigocGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UpID0+ICEhcGFnZS5wYWdpbmF0aW9uKSxcbiAgICAgIHN3aXRjaE1hcCgocDogUHJvZHVjdFNlYXJjaFBhZ2UpID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLmNhdGVnb3J5LnRpdGxlJywge1xuICAgICAgICAgIGNvdW50OiBwLnBhZ2luYXRpb24udG90YWxSZXN1bHRzLFxuICAgICAgICAgIHF1ZXJ5OiBwLmJyZWFkY3J1bWJzPy5sZW5ndGhcbiAgICAgICAgICAgID8gcC5icmVhZGNydW1ic1swXS5mYWNldFZhbHVlTmFtZVxuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPEJyZWFkY3J1bWJNZXRhW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnNlYXJjaFBhZ2UkLnBpcGUoKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjb21tb24uaG9tZScpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtwLCBsYWJlbF06IFtQcm9kdWN0U2VhcmNoUGFnZSwgc3RyaW5nXSkgPT5cbiAgICAgICAgcC5icmVhZGNydW1ic1xuICAgICAgICAgID8gdGhpcy5yZXNvbHZlQnJlYWRjcnVtYkRhdGEoPFByb2R1Y3RTZWFyY2hQYWdlPnAsIGxhYmVsKVxuICAgICAgICAgIDogbnVsbFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVzb2x2ZUJyZWFkY3J1bWJEYXRhKFxuICAgIHBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlLFxuICAgIGxhYmVsOiBzdHJpbmdcbiAgKTogQnJlYWRjcnVtYk1ldGFbXSB7XG4gICAgY29uc3QgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJNZXRhW10gPSBbXTtcbiAgICBicmVhZGNydW1icy5wdXNoKHsgbGFiZWw6IGxhYmVsLCBsaW5rOiAnLycgfSk7XG5cbiAgICBmb3IgKGNvbnN0IGJyIG9mIHBhZ2UuYnJlYWRjcnVtYnMpIHtcbiAgICAgIGlmIChici5mYWNldENvZGUgPT09ICdjYXRlZ29yeScgfHwgYnIuZmFjZXRDb2RlID09PSAnYWxsQ2F0ZWdvcmllcycpIHtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGJyLmZhY2V0VmFsdWVOYW1lLFxuICAgICAgICAgIGxpbms6IGAvYy8ke2JyLmZhY2V0VmFsdWVDb2RlfWAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGJyLmZhY2V0Q29kZSA9PT0gJ2JyYW5kJykge1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogYnIuZmFjZXRWYWx1ZU5hbWUsXG4gICAgICAgICAgbGluazogYC9CcmFuZHMvJHtici5mYWNldFZhbHVlTmFtZX0vYy8ke2JyLmZhY2V0VmFsdWVDb2RlfWAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYnJlYWRjcnVtYnM7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFzUHJvZHVjdExpc3RDb21wb25lbnQocGFnZTogUGFnZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIU9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpLmZpbmQoXG4gICAgICAoa2V5KSA9PlxuICAgICAgICAhIXBhZ2Uuc2xvdHNba2V5XS5jb21wb25lbnRzLmZpbmQoXG4gICAgICAgICAgKGNvbXApID0+XG4gICAgICAgICAgICBjb21wLnR5cGVDb2RlID09PSAnQ01TUHJvZHVjdExpc3RDb21wb25lbnQnIHx8XG4gICAgICAgICAgICBjb21wLnR5cGVDb2RlID09PSAnUHJvZHVjdEdyaWRDb21wb25lbnQnXG4gICAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=