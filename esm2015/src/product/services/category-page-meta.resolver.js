import { __decorate } from "tslib";
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
let CategoryPageMetaResolver = class CategoryPageMetaResolver extends PageMetaResolver {
    constructor(productSearchService, cms, translation) {
        super();
        this.productSearchService = productSearchService;
        this.cms = cms;
        this.translation = translation;
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
        return !!Object.keys(page.slots).find((key) => !!page.slots[key].components.find((comp) => comp.typeCode === 'CMSProductListComponent' ||
            comp.typeCode === 'ProductGridComponent'));
    }
};
CategoryPageMetaResolver.ctorParameters = () => [
    { type: ProductSearchService },
    { type: CmsService },
    { type: TranslationService }
];
CategoryPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(i0.ɵɵinject(i1.ProductSearchService), i0.ɵɵinject(i2.CmsService), i0.ɵɵinject(i3.TranslationService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
CategoryPageMetaResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CategoryPageMetaResolver);
export { CategoryPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBRXhFOzs7O0dBSUc7QUFJSCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF5QixTQUFRLGdCQUFnQjtJQWdCNUQsWUFDWSxvQkFBMEMsRUFDMUMsR0FBZSxFQUNmLFdBQStCO1FBRXpDLEtBQUssRUFBRSxDQUFDO1FBSkUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBakIzQywyQ0FBMkM7UUFDakMsZ0JBQVcsR0FFakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixTQUFTLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRTtR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RUFBRSxFQUFFLENBQ1AsSUFBSSxDQUFDLFFBQVEsS0FBSyx5QkFBeUI7WUFDM0MsSUFBSSxDQUFDLFFBQVEsS0FBSyxzQkFBc0IsQ0FDM0MsQ0FDSixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBckVtQyxvQkFBb0I7WUFDckMsVUFBVTtZQUNGLGtCQUFrQjs7O0FBbkJoQyx3QkFBd0I7SUFIcEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHdCQUF3QixDQXNGcEM7U0F0Rlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTWV0YSwgUGFnZSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHtcbiAgUGFnZUJyZWFkY3J1bWJSZXNvbHZlcixcbiAgUGFnZVRpdGxlUmVzb2x2ZXIsXG59IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIHRoZSBQcm9kdWN0IExpc3RpbmcgUGFnZS5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSwgYW5kIGJyZWFkY3J1bWJzIGFyZSByZXNvbHZlZCBpbiB0aGlzIGltcGxlbWVudGF0aW9uIG9ubHkuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIge1xuICAvLyByZXVzYWJsZSBvYnNlcnZhYmxlIGZvciBzZWFyY2ggcGFnZSBkYXRhXG4gIHByb3RlY3RlZCBzZWFyY2hQYWdlJDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0U2VhcmNoUGFnZSB8IFBhZ2VcbiAgPiA9IHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PlxuICAgICAgLy8gb25seSB0aGUgZXhpc3RlbmNlIG9mIGEgcGxwIGNvbXBvbmVudCB0ZWxscyB1cyBpZiBwcm9kdWN0c1xuICAgICAgLy8gYXJlIHJlbmRlcmVkIG9yIGlmIHRoaXMgaXMgYW4gb3JkaW5hcnkgY29udGVudCBwYWdlXG4gICAgICB0aGlzLmhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2UpXG4gICAgICAgID8gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShmaWx0ZXIoQm9vbGVhbikpXG4gICAgICAgIDogb2YocGFnZSlcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hQYWdlJC5waXBlKFxuICAgICAgZmlsdGVyKChwYWdlOiBQcm9kdWN0U2VhcmNoUGFnZSkgPT4gISFwYWdlLnBhZ2luYXRpb24pLFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0U2VhcmNoUGFnZSkgPT5cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIuY2F0ZWdvcnkudGl0bGUnLCB7XG4gICAgICAgICAgY291bnQ6IHAucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMsXG4gICAgICAgICAgcXVlcnk6IHAuYnJlYWRjcnVtYnM/Lmxlbmd0aFxuICAgICAgICAgICAgPyBwLmJyZWFkY3J1bWJzWzBdLmZhY2V0VmFsdWVOYW1lXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKCk6IE9ic2VydmFibGU8QnJlYWRjcnVtYk1ldGFbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuc2VhcmNoUGFnZSQucGlwZSgpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3AsIGxhYmVsXTogW1Byb2R1Y3RTZWFyY2hQYWdlLCBzdHJpbmddKSA9PlxuICAgICAgICBwLmJyZWFkY3J1bWJzXG4gICAgICAgICAgPyB0aGlzLnJlc29sdmVCcmVhZGNydW1iRGF0YSg8UHJvZHVjdFNlYXJjaFBhZ2U+cCwgbGFiZWwpXG4gICAgICAgICAgOiBudWxsXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXNvbHZlQnJlYWRjcnVtYkRhdGEoXG4gICAgcGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgbGFiZWw6IHN0cmluZ1xuICApOiBCcmVhZGNydW1iTWV0YVtdIHtcbiAgICBjb25zdCBicmVhZGNydW1iczogQnJlYWRjcnVtYk1ldGFbXSA9IFtdO1xuICAgIGJyZWFkY3J1bWJzLnB1c2goeyBsYWJlbDogbGFiZWwsIGxpbms6ICcvJyB9KTtcblxuICAgIGZvciAoY29uc3QgYnIgb2YgcGFnZS5icmVhZGNydW1icykge1xuICAgICAgaWYgKGJyLmZhY2V0Q29kZSA9PT0gJ2NhdGVnb3J5JyB8fCBici5mYWNldENvZGUgPT09ICdhbGxDYXRlZ29yaWVzJykge1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogYnIuZmFjZXRWYWx1ZU5hbWUsXG4gICAgICAgICAgbGluazogYC9jLyR7YnIuZmFjZXRWYWx1ZUNvZGV9YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYnIuZmFjZXRDb2RlID09PSAnYnJhbmQnKSB7XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBici5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICBsaW5rOiBgL0JyYW5kcy8ke2JyLmZhY2V0VmFsdWVOYW1lfS9jLyR7YnIuZmFjZXRWYWx1ZUNvZGV9YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBicmVhZGNydW1icztcbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNQcm9kdWN0TGlzdENvbXBvbmVudChwYWdlOiBQYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXMocGFnZS5zbG90cykuZmluZChcbiAgICAgIChrZXkpID0+XG4gICAgICAgICEhcGFnZS5zbG90c1trZXldLmNvbXBvbmVudHMuZmluZChcbiAgICAgICAgICAoY29tcCkgPT5cbiAgICAgICAgICAgIGNvbXAudHlwZUNvZGUgPT09ICdDTVNQcm9kdWN0TGlzdENvbXBvbmVudCcgfHxcbiAgICAgICAgICAgIGNvbXAudHlwZUNvZGUgPT09ICdQcm9kdWN0R3JpZENvbXBvbmVudCdcbiAgICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==