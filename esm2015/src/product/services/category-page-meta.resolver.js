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
        return !!Object.keys(page.slots).find(key => !!page.slots[key].components.find(comp => comp.typeCode === 'CMSProductListComponent' ||
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBRXhFOzs7O0dBSUc7QUFJSCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF5QixTQUFRLGdCQUFnQjtJQWdCNUQsWUFDWSxvQkFBMEMsRUFDMUMsR0FBZSxFQUNmLFdBQStCO1FBRXpDLEtBQUssRUFBRSxDQUFDO1FBSkUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBakIzQywyQ0FBMkM7UUFDakMsZ0JBQVcsR0FFakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixTQUFTLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRTtR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Q0FDTCxJQUFJLENBQUMsUUFBUSxLQUFLLHlCQUF5QjtZQUMzQyxJQUFJLENBQUMsUUFBUSxLQUFLLHNCQUFzQixDQUMzQyxDQUNKLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFyRW1DLG9CQUFvQjtZQUNyQyxVQUFVO1lBQ0Ysa0JBQWtCOzs7QUFuQmhDLHdCQUF3QjtJQUhwQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csd0JBQXdCLENBc0ZwQztTQXRGWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJNZXRhLCBQYWdlIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgdGhlIFByb2R1Y3QgTGlzdGluZyBQYWdlLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBhbmQgYnJlYWRjcnVtYnMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gIC8vIHJldXNhYmxlIG9ic2VydmFibGUgZm9yIHNlYXJjaCBwYWdlIGRhdGFcbiAgcHJvdGVjdGVkIHNlYXJjaFBhZ2UkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RTZWFyY2hQYWdlIHwgUGFnZVxuICA+ID0gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICBzd2l0Y2hNYXAoKHBhZ2U6IFBhZ2UpID0+XG4gICAgICAvLyBvbmx5IHRoZSBleGlzdGVuY2Ugb2YgYSBwbHAgY29tcG9uZW50IHRlbGxzIHVzIGlmIHByb2R1Y3RzXG4gICAgICAvLyBhcmUgcmVuZGVyZWQgb3IgaWYgdGhpcyBpcyBhbiBvcmRpbmFyeSBjb250ZW50IHBhZ2VcbiAgICAgIHRoaXMuaGFzUHJvZHVjdExpc3RDb21wb25lbnQocGFnZSlcbiAgICAgICAgPyB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKS5waXBlKGZpbHRlcihCb29sZWFuKSlcbiAgICAgICAgOiBvZihwYWdlKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaFBhZ2UkLnBpcGUoXG4gICAgICBmaWx0ZXIoKHBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlKSA9PiAhIXBhZ2UucGFnaW5hdGlvbiksXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3RTZWFyY2hQYWdlKSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5jYXRlZ29yeS50aXRsZScsIHtcbiAgICAgICAgICBjb3VudDogcC5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cyxcbiAgICAgICAgICBxdWVyeTogcC5icmVhZGNydW1icz8ubGVuZ3RoXG4gICAgICAgICAgICA/IHAuYnJlYWRjcnVtYnNbMF0uZmFjZXRWYWx1ZU5hbWVcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxCcmVhZGNydW1iTWV0YVtdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5zZWFyY2hQYWdlJC5waXBlKCksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbcCwgbGFiZWxdOiBbUHJvZHVjdFNlYXJjaFBhZ2UsIHN0cmluZ10pID0+XG4gICAgICAgIHAuYnJlYWRjcnVtYnNcbiAgICAgICAgICA/IHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJEYXRhKDxQcm9kdWN0U2VhcmNoUGFnZT5wLCBsYWJlbClcbiAgICAgICAgICA6IG51bGxcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlc29sdmVCcmVhZGNydW1iRGF0YShcbiAgICBwYWdlOiBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgICBsYWJlbDogc3RyaW5nXG4gICk6IEJyZWFkY3J1bWJNZXRhW10ge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iTWV0YVtdID0gW107XG4gICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH0pO1xuXG4gICAgZm9yIChjb25zdCBiciBvZiBwYWdlLmJyZWFkY3J1bWJzKSB7XG4gICAgICBpZiAoYnIuZmFjZXRDb2RlID09PSAnY2F0ZWdvcnknIHx8IGJyLmZhY2V0Q29kZSA9PT0gJ2FsbENhdGVnb3JpZXMnKSB7XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBici5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICBsaW5rOiBgL2MvJHtici5mYWNldFZhbHVlQ29kZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChici5mYWNldENvZGUgPT09ICdicmFuZCcpIHtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGJyLmZhY2V0VmFsdWVOYW1lLFxuICAgICAgICAgIGxpbms6IGAvQnJhbmRzLyR7YnIuZmFjZXRWYWx1ZU5hbWV9L2MvJHtici5mYWNldFZhbHVlQ29kZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2U6IFBhZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFPYmplY3Qua2V5cyhwYWdlLnNsb3RzKS5maW5kKFxuICAgICAga2V5ID0+XG4gICAgICAgICEhcGFnZS5zbG90c1trZXldLmNvbXBvbmVudHMuZmluZChcbiAgICAgICAgICBjb21wID0+XG4gICAgICAgICAgICBjb21wLnR5cGVDb2RlID09PSAnQ01TUHJvZHVjdExpc3RDb21wb25lbnQnIHx8XG4gICAgICAgICAgICBjb21wLnR5cGVDb2RlID09PSAnUHJvZHVjdEdyaWRDb21wb25lbnQnXG4gICAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=