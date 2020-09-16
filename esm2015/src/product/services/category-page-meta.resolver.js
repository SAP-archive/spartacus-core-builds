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
export class CategoryPageMetaResolver extends PageMetaResolver {
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
    { type: TranslationService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvcHJvZHVjdC9zZXJ2aWNlcy9jYXRlZ29yeS1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7OztBQUV4RTs7OztHQUlHO0FBSUgsTUFBTSxPQUFPLHdCQUNYLFNBQVEsZ0JBQWdCO0lBZ0J4QixZQUNZLG9CQUEwQyxFQUMxQyxHQUFlLEVBQ2YsV0FBK0I7UUFFekMsS0FBSyxFQUFFLENBQUM7UUFKRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFqQjNDLDJDQUEyQztRQUNqQyxnQkFBVyxHQUVqQixJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLFNBQVMsQ0FBQyxDQUFDLElBQVUsRUFBRSxFQUFFO1FBQ3ZC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LEVBQUUsQ0FDUCxJQUFJLENBQUMsUUFBUSxLQUFLLHlCQUF5QjtZQUMzQyxJQUFJLENBQUMsUUFBUSxLQUFLLHNCQUFzQixDQUMzQyxDQUNKLENBQUM7SUFDSixDQUFDOzs7O1lBekZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVFEsb0JBQW9CO1lBVnBCLFVBQVU7WUFPVixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJNZXRhLCBQYWdlIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgdGhlIFByb2R1Y3QgTGlzdGluZyBQYWdlLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBhbmQgYnJlYWRjcnVtYnMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlclxuICBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gIC8vIHJldXNhYmxlIG9ic2VydmFibGUgZm9yIHNlYXJjaCBwYWdlIGRhdGFcbiAgcHJvdGVjdGVkIHNlYXJjaFBhZ2UkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RTZWFyY2hQYWdlIHwgUGFnZVxuICA+ID0gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICBzd2l0Y2hNYXAoKHBhZ2U6IFBhZ2UpID0+XG4gICAgICAvLyBvbmx5IHRoZSBleGlzdGVuY2Ugb2YgYSBwbHAgY29tcG9uZW50IHRlbGxzIHVzIGlmIHByb2R1Y3RzXG4gICAgICAvLyBhcmUgcmVuZGVyZWQgb3IgaWYgdGhpcyBpcyBhbiBvcmRpbmFyeSBjb250ZW50IHBhZ2VcbiAgICAgIHRoaXMuaGFzUHJvZHVjdExpc3RDb21wb25lbnQocGFnZSlcbiAgICAgICAgPyB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKS5waXBlKGZpbHRlcihCb29sZWFuKSlcbiAgICAgICAgOiBvZihwYWdlKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaFBhZ2UkLnBpcGUoXG4gICAgICBmaWx0ZXIoKHBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlKSA9PiAhIXBhZ2UucGFnaW5hdGlvbiksXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3RTZWFyY2hQYWdlKSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5jYXRlZ29yeS50aXRsZScsIHtcbiAgICAgICAgICBjb3VudDogcC5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cyxcbiAgICAgICAgICBxdWVyeTogcC5icmVhZGNydW1icz8ubGVuZ3RoXG4gICAgICAgICAgICA/IHAuYnJlYWRjcnVtYnNbMF0uZmFjZXRWYWx1ZU5hbWVcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxCcmVhZGNydW1iTWV0YVtdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5zZWFyY2hQYWdlJC5waXBlKCksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbcCwgbGFiZWxdOiBbUHJvZHVjdFNlYXJjaFBhZ2UsIHN0cmluZ10pID0+XG4gICAgICAgIHAuYnJlYWRjcnVtYnNcbiAgICAgICAgICA/IHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJEYXRhKDxQcm9kdWN0U2VhcmNoUGFnZT5wLCBsYWJlbClcbiAgICAgICAgICA6IG51bGxcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlc29sdmVCcmVhZGNydW1iRGF0YShcbiAgICBwYWdlOiBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgICBsYWJlbDogc3RyaW5nXG4gICk6IEJyZWFkY3J1bWJNZXRhW10ge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iTWV0YVtdID0gW107XG4gICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH0pO1xuXG4gICAgZm9yIChjb25zdCBiciBvZiBwYWdlLmJyZWFkY3J1bWJzKSB7XG4gICAgICBpZiAoYnIuZmFjZXRDb2RlID09PSAnY2F0ZWdvcnknIHx8IGJyLmZhY2V0Q29kZSA9PT0gJ2FsbENhdGVnb3JpZXMnKSB7XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBici5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICBsaW5rOiBgL2MvJHtici5mYWNldFZhbHVlQ29kZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChici5mYWNldENvZGUgPT09ICdicmFuZCcpIHtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGJyLmZhY2V0VmFsdWVOYW1lLFxuICAgICAgICAgIGxpbms6IGAvQnJhbmRzLyR7YnIuZmFjZXRWYWx1ZU5hbWV9L2MvJHtici5mYWNldFZhbHVlQ29kZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2U6IFBhZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFPYmplY3Qua2V5cyhwYWdlLnNsb3RzKS5maW5kKFxuICAgICAgKGtleSkgPT5cbiAgICAgICAgISFwYWdlLnNsb3RzW2tleV0uY29tcG9uZW50cy5maW5kKFxuICAgICAgICAgIChjb21wKSA9PlxuICAgICAgICAgICAgY29tcC50eXBlQ29kZSA9PT0gJ0NNU1Byb2R1Y3RMaXN0Q29tcG9uZW50JyB8fFxuICAgICAgICAgICAgY29tcC50eXBlQ29kZSA9PT0gJ1Byb2R1Y3RHcmlkQ29tcG9uZW50J1xuICAgICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19