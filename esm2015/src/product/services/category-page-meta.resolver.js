import { Injectable, Optional } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { BasePageMetaResolver } from '../../cms/page/base-page-meta.resolver';
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
export class CategoryPageMetaResolver extends PageMetaResolver {
    constructor(productSearchService, cms, translation, basePageMetaResolver) {
        super();
        this.productSearchService = productSearchService;
        this.cms = cms;
        this.translation = translation;
        this.basePageMetaResolver = basePageMetaResolver;
        // reusable observable for search page data
        this.searchPage$ = this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((page) => 
        // only the existence of a plp component tells us if products
        // are rendered or if this is an ordinary content page
        this.hasProductListComponent(page)
            ? this.productSearchService.getResults().pipe(filter(Boolean))
            : of(page)));
        this.pageType = PageType.CATEGORY_PAGE;
    }
    resolveTitle() {
        return this.searchPage$.pipe(filter((page) => !!page.pagination), switchMap((p) => {
            var _a;
            return this.translation.translate('pageMetaResolver.category.title', {
                count: p.pagination.totalResults,
                query: ((_a = p.breadcrumbs) === null || _a === void 0 ? void 0 : _a.length) ? p.breadcrumbs[0].facetValueName
                    : undefined,
            });
        }));
    }
    resolveBreadcrumbs() {
        return combineLatest([
            this.searchPage$.pipe(),
            this.translation.translate('common.home'),
        ]).pipe(map(([p, label]) => p.breadcrumbs
            ? this.resolveBreadcrumbData(p, label)
            : null));
    }
    resolveBreadcrumbData(page, label) {
        const breadcrumbs = [];
        breadcrumbs.push({ label: label, link: '/' });
        for (const br of page.breadcrumbs) {
            if (br.facetCode === 'category' || br.facetCode === 'allCategories') {
                breadcrumbs.push({
                    label: br.facetValueName,
                    link: `/c/${br.facetValueCode}`,
                });
            }
            if (br.facetCode === 'brand') {
                breadcrumbs.push({
                    label: br.facetValueName,
                    link: `/Brands/${br.facetValueName}/c/${br.facetValueCode}`,
                });
            }
        }
        return breadcrumbs;
    }
    hasProductListComponent(page) {
        return !!Object.keys(page.slots).find((key) => {
            var _a;
            return !!((_a = page.slots[key].components) === null || _a === void 0 ? void 0 : _a.find((comp) => comp.typeCode === 'CMSProductListComponent' ||
                comp.typeCode === 'ProductGridComponent'));
        });
    }
    /**
     * @override
     * This is added in 3.1 and will be ignored if the `BasePageMetaResolver` is not
     * available.
     */
    // TODO(#10467) drop the 3.1 note.
    resolveRobots() {
        var _a, _b;
        return (_b = (_a = this.basePageMetaResolver) === null || _a === void 0 ? void 0 : _a.resolveRobots()) !== null && _b !== void 0 ? _b : of([]);
    }
}
CategoryPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(i0.ɵɵinject(i1.ProductSearchService), i0.ɵɵinject(i2.CmsService), i0.ɵɵinject(i3.TranslationService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
CategoryPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CategoryPageMetaResolver.ctorParameters = () => [
    { type: ProductSearchService },
    { type: CmsService },
    { type: TranslationService },
    { type: BasePageMetaResolver, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvcHJvZHVjdC9zZXJ2aWNlcy9jYXRlZ29yeS1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTTFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBTXJFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7QUFFeEU7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyx3QkFDWCxTQUFRLGdCQUFnQjtJQWdDeEIsWUFDWSxvQkFBMEMsRUFDMUMsR0FBZSxFQUNmLFdBQStCLEVBQ25CLG9CQUEyQztRQUVqRSxLQUFLLEVBQUUsQ0FBQztRQUxFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUNuQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBbENuRSwyQ0FBMkM7UUFDakMsZ0JBQVcsR0FFakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixTQUFTLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRTtRQUN2Qiw2REFBNkQ7UUFDN0Qsc0RBQXNEO1FBQ3RELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7WUFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2IsQ0FDRixDQUFDO1FBeUJBLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUN6QyxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzFCLE1BQU0sQ0FBQyxDQUFDLElBQXVCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQ3RELFNBQVMsQ0FBQyxDQUFDLENBQW9CLEVBQUUsRUFBRTs7WUFDakMsT0FBQSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxpQ0FBaUMsRUFBRTtnQkFDNUQsS0FBSyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWTtnQkFDaEMsS0FBSyxFQUFFLE9BQUEsQ0FBQyxDQUFDLFdBQVcsMENBQUUsTUFBTSxFQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjO29CQUNqQyxDQUFDLENBQUMsU0FBUzthQUNkLENBQUMsQ0FBQTtTQUFBLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDMUMsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQThCLEVBQUUsRUFBRSxDQUM5QyxDQUFDLENBQUMsV0FBVztZQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQW9CLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDekQsQ0FBQyxDQUFDLElBQUksQ0FDVCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRVMscUJBQXFCLENBQzdCLElBQXVCLEVBQ3ZCLEtBQWE7UUFFYixNQUFNLFdBQVcsR0FBcUIsRUFBRSxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRTlDLEtBQUssTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNqQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEtBQUssVUFBVSxJQUFJLEVBQUUsQ0FBQyxTQUFTLEtBQUssZUFBZSxFQUFFO2dCQUNuRSxXQUFXLENBQUMsSUFBSSxDQUFDO29CQUNmLEtBQUssRUFBRSxFQUFFLENBQUMsY0FBYztvQkFDeEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLGNBQWMsRUFBRTtpQkFDaEMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLEVBQUUsQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO2dCQUM1QixXQUFXLENBQUMsSUFBSSxDQUFDO29CQUNmLEtBQUssRUFBRSxFQUFFLENBQUMsY0FBYztvQkFDeEIsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLGNBQWMsTUFBTSxFQUFFLENBQUMsY0FBYyxFQUFFO2lCQUM1RCxDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVTLHVCQUF1QixDQUFDLElBQVU7UUFDMUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNuQyxDQUFDLEdBQUcsRUFBRSxFQUFFOztZQUNOLE9BQUEsQ0FBQyxRQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSwwQ0FBRSxJQUFJLENBQ2hDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDUCxJQUFJLENBQUMsUUFBUSxLQUFLLHlCQUF5QjtnQkFDM0MsSUFBSSxDQUFDLFFBQVEsS0FBSyxzQkFBc0IsRUFDM0MsQ0FBQTtTQUFBLENBQ0osQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsa0NBQWtDO0lBQ2xDLGFBQWE7O1FBQ1gsbUJBQU8sSUFBSSxDQUFDLG9CQUFvQiwwQ0FBRSxhQUFhLHFDQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O1lBcEhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVFEsb0JBQW9CO1lBaEJwQixVQUFVO1lBYVYsa0JBQWtCO1lBUGxCLG9CQUFvQix1QkF5RHhCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQge1xuICBCcmVhZGNydW1iTWV0YSxcbiAgUGFnZSxcbiAgUGFnZVJvYm90c01ldGEsXG59IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IEJhc2VQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvYmFzZS1wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlUm9ib3RzUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBkYXRhIGZvciB0aGUgUHJvZHVjdCBMaXN0aW5nIFBhZ2UuXG4gKlxuICogVGhlIHBhZ2UgdGl0bGUsIGFuZCBicmVhZGNydW1icyBhcmUgcmVzb2x2ZWQgaW4gdGhpcyBpbXBsZW1lbnRhdGlvbiBvbmx5LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlQYWdlTWV0YVJlc29sdmVyXG4gIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLCBQYWdlUm9ib3RzUmVzb2x2ZXIge1xuICAvLyByZXVzYWJsZSBvYnNlcnZhYmxlIGZvciBzZWFyY2ggcGFnZSBkYXRhXG4gIHByb3RlY3RlZCBzZWFyY2hQYWdlJDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0U2VhcmNoUGFnZSB8IFBhZ2VcbiAgPiA9IHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PlxuICAgICAgLy8gb25seSB0aGUgZXhpc3RlbmNlIG9mIGEgcGxwIGNvbXBvbmVudCB0ZWxscyB1cyBpZiBwcm9kdWN0c1xuICAgICAgLy8gYXJlIHJlbmRlcmVkIG9yIGlmIHRoaXMgaXMgYW4gb3JkaW5hcnkgY29udGVudCBwYWdlXG4gICAgICB0aGlzLmhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2UpXG4gICAgICAgID8gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShmaWx0ZXIoQm9vbGVhbikpXG4gICAgICAgIDogb2YocGFnZSlcbiAgICApXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDMuMSwgd2UnbGwgdXNlIHRoZSBCYXNlUGFnZU1ldGFSZXNvbHZlciBpbiBmdXR1cmUgdmVyc2lvbnNcbiAgICovXG4gIC8vIFRPRE8oIzEwNDY3KTogUmVtb3ZlIGRlcHJlY2F0ZWQgY29uc3RydWN0b3JzXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGJhc2VQYWdlTWV0YVJlc29sdmVyPzogQmFzZVBhZ2VNZXRhUmVzb2x2ZXJcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBiYXNlUGFnZU1ldGFSZXNvbHZlcj86IEJhc2VQYWdlTWV0YVJlc29sdmVyXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hQYWdlJC5waXBlKFxuICAgICAgZmlsdGVyKChwYWdlOiBQcm9kdWN0U2VhcmNoUGFnZSkgPT4gISFwYWdlLnBhZ2luYXRpb24pLFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0U2VhcmNoUGFnZSkgPT5cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIuY2F0ZWdvcnkudGl0bGUnLCB7XG4gICAgICAgICAgY291bnQ6IHAucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMsXG4gICAgICAgICAgcXVlcnk6IHAuYnJlYWRjcnVtYnM/Lmxlbmd0aFxuICAgICAgICAgICAgPyBwLmJyZWFkY3J1bWJzWzBdLmZhY2V0VmFsdWVOYW1lXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKCk6IE9ic2VydmFibGU8QnJlYWRjcnVtYk1ldGFbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuc2VhcmNoUGFnZSQucGlwZSgpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3AsIGxhYmVsXTogW1Byb2R1Y3RTZWFyY2hQYWdlLCBzdHJpbmddKSA9PlxuICAgICAgICBwLmJyZWFkY3J1bWJzXG4gICAgICAgICAgPyB0aGlzLnJlc29sdmVCcmVhZGNydW1iRGF0YSg8UHJvZHVjdFNlYXJjaFBhZ2U+cCwgbGFiZWwpXG4gICAgICAgICAgOiBudWxsXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXNvbHZlQnJlYWRjcnVtYkRhdGEoXG4gICAgcGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgbGFiZWw6IHN0cmluZ1xuICApOiBCcmVhZGNydW1iTWV0YVtdIHtcbiAgICBjb25zdCBicmVhZGNydW1iczogQnJlYWRjcnVtYk1ldGFbXSA9IFtdO1xuICAgIGJyZWFkY3J1bWJzLnB1c2goeyBsYWJlbDogbGFiZWwsIGxpbms6ICcvJyB9KTtcblxuICAgIGZvciAoY29uc3QgYnIgb2YgcGFnZS5icmVhZGNydW1icykge1xuICAgICAgaWYgKGJyLmZhY2V0Q29kZSA9PT0gJ2NhdGVnb3J5JyB8fCBici5mYWNldENvZGUgPT09ICdhbGxDYXRlZ29yaWVzJykge1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogYnIuZmFjZXRWYWx1ZU5hbWUsXG4gICAgICAgICAgbGluazogYC9jLyR7YnIuZmFjZXRWYWx1ZUNvZGV9YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYnIuZmFjZXRDb2RlID09PSAnYnJhbmQnKSB7XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBici5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICBsaW5rOiBgL0JyYW5kcy8ke2JyLmZhY2V0VmFsdWVOYW1lfS9jLyR7YnIuZmFjZXRWYWx1ZUNvZGV9YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBicmVhZGNydW1icztcbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNQcm9kdWN0TGlzdENvbXBvbmVudChwYWdlOiBQYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXMocGFnZS5zbG90cykuZmluZChcbiAgICAgIChrZXkpID0+XG4gICAgICAgICEhcGFnZS5zbG90c1trZXldLmNvbXBvbmVudHM/LmZpbmQoXG4gICAgICAgICAgKGNvbXApID0+XG4gICAgICAgICAgICBjb21wLnR5cGVDb2RlID09PSAnQ01TUHJvZHVjdExpc3RDb21wb25lbnQnIHx8XG4gICAgICAgICAgICBjb21wLnR5cGVDb2RlID09PSAnUHJvZHVjdEdyaWRDb21wb25lbnQnXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKiBUaGlzIGlzIGFkZGVkIGluIDMuMSBhbmQgd2lsbCBiZSBpZ25vcmVkIGlmIHRoZSBgQmFzZVBhZ2VNZXRhUmVzb2x2ZXJgIGlzIG5vdFxuICAgKiBhdmFpbGFibGUuXG4gICAqL1xuICAvLyBUT0RPKCMxMDQ2NykgZHJvcCB0aGUgMy4xIG5vdGUuXG4gIHJlc29sdmVSb2JvdHMoKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYmFzZVBhZ2VNZXRhUmVzb2x2ZXI/LnJlc29sdmVSb2JvdHMoKSA/PyBvZihbXSk7XG4gIH1cbn1cbiJdfQ==