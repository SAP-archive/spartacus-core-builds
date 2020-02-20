import { __decorate } from "tslib";
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
let CategoryPageMetaResolver = class CategoryPageMetaResolver extends PageMetaResolver {
    constructor(routingService, productSearchService, cms, translation) {
        super();
        this.routingService = routingService;
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
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    resolve() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((page) => {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            if (this.hasProductListComponent(page)) {
                return this.productSearchService.getResults().pipe(filter(data => data.breadcrumbs && data.breadcrumbs.length > 0), switchMap(data => combineLatest([
                    this.resolveTitle(data),
                    this.resolveBreadcrumbLabel().pipe(switchMap(label => this.resolveBreadcrumbs(data, label))),
                ])), map(([title, breadcrumbs]) => ({ title, breadcrumbs })));
            }
            else {
                return of({
                    title: page.title || page.name,
                });
            }
        }));
    }
    resolveTitle(searchPage) {
        const searchPage$ = searchPage ? of(searchPage) : this.searchPage$;
        return searchPage$.pipe(filter((page) => !!page.pagination), switchMap(p => this.translation.translate('pageMetaResolver.category.title', {
            count: p.pagination.totalResults,
            query: p.breadcrumbs[0].facetValueName,
        })));
    }
    /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     */
    resolveBreadcrumbLabel() {
        return this.translation.translate('common.home');
    }
    resolveBreadcrumbs(searchPage, breadcrumbLabel) {
        const sources = searchPage && breadcrumbLabel
            ? [of(searchPage), of(breadcrumbLabel)]
            : [this.searchPage$.pipe(), this.translation.translate('common.home')];
        return combineLatest(sources).pipe(map(([p, label]) => p.breadcrumbs
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
    { type: RoutingService },
    { type: ProductSearchService },
    { type: CmsService },
    { type: TranslationService }
];
CategoryPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductSearchService), i0.ɵɵinject(i3.CmsService), i0.ɵɵinject(i4.TranslationService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
CategoryPageMetaResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CategoryPageMetaResolver);
export { CategoryPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7QUFFeEU7Ozs7O0dBS0c7QUFJSCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF5QixTQUFRLGdCQUFnQjtJQWdCNUQsWUFDWSxjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsR0FBZSxFQUNmLFdBQStCO1FBRXpDLEtBQUssRUFBRSxDQUFDO1FBTEUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQWxCM0MsMkNBQTJDO1FBQ25DLGdCQUFXLEdBRWYsSUFBSSxDQUFDLEdBQUcsQ0FB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QUFDLGNBQWMsRUFBRTtpQkFDNUQsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxJQUFVO1FBQ3hDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDbkMsR0FBRyxDQUFDLEVBQUUsQ0FDSixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUMvQixJQUFJLENBQUMsRUFBRSxDQUNMLElBQUksQ0FBQyxRQUFRLEtBQUsseUJBQXlCO1lBQzNDLElBQUksQ0FBQyxRQUFRLEtBQUssc0JBQXNCLENBQzNDLENBQ0osQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQW5JNkIsY0FBYztZQUNSLG9CQUFvQjtZQUNyQyxVQUFVO1lBQ0Ysa0JBQWtCOzs7QUFwQmhDLHdCQUF3QjtJQUhwQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csd0JBQXdCLENBb0pwQztTQXBKWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgdGhlIFByb2R1Y3QgTGlzdGluZyBQYWdlXG4gKiBiYXNlZCBvbiB0aGUgYFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0VgLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBhbmQgYnJlYWRjcnVtYnMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gIC8vIHJldXNhYmxlIG9ic2VydmFibGUgZm9yIHNlYXJjaCBwYWdlIGRhdGFcbiAgcHJpdmF0ZSBzZWFyY2hQYWdlJDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0U2VhcmNoUGFnZSB8IFBhZ2VcbiAgPiA9IHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PlxuICAgICAgLy8gb25seSB0aGUgZXhpc3RlbmNlIG9mIGEgcGxwIGNvbXBvbmVudCB0ZWxscyB1cyBpZiBwcm9kdWN0c1xuICAgICAgLy8gYXJlIHJlbmRlcmVkIG9yIGlmIHRoaXMgaXMgYW4gb3JkaW5hcnkgY29udGVudCBwYWdlXG4gICAgICB0aGlzLmhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2UpXG4gICAgICAgID8gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShmaWx0ZXIoQm9vbGVhbikpXG4gICAgICAgIDogb2YocGFnZSlcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKlxuICAgKiBUaGUgcmVzb2x2ZSBtZXRob2QgaXMgbm8gbG9uZ2VyIHByZWZlcnJlZCBhbmQgd2lsbCBiZSByZW1vdmVkIHdpdGggcmVsZWFzZSAyLjAuXG4gICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAqIGluc3RlYWQsIHNvIHRoYXQgdGhlIGNvZGUgaXMgZWFzaWVyIGV4dGVuc2libGUuXG4gICAqL1xuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHwgYW55IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PiB7XG4gICAgICAgIC8vIG9ubHkgdGhlIGV4aXN0ZW5jZSBvZiBhIHBscCBjb21wb25lbnQgdGVsbHMgdXMgaWYgcHJvZHVjdHNcbiAgICAgICAgLy8gYXJlIHJlbmRlcmVkIG9yIGlmIHRoaXMgaXMgYW4gb3JkaW5hcnkgY29udGVudCBwYWdlXG4gICAgICAgIGlmICh0aGlzLmhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2UpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoZGF0YSA9PiBkYXRhLmJyZWFkY3J1bWJzICYmIGRhdGEuYnJlYWRjcnVtYnMubGVuZ3RoID4gMCksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PlxuICAgICAgICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVUaXRsZShkYXRhKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVCcmVhZGNydW1iTGFiZWwoKS5waXBlKFxuICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKGxhYmVsID0+IHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJzKGRhdGEsIGxhYmVsKSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1hcCgoW3RpdGxlLCBicmVhZGNydW1ic10pID0+ICh7IHRpdGxlLCBicmVhZGNydW1icyB9KSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZih7XG4gICAgICAgICAgICB0aXRsZTogcGFnZS50aXRsZSB8fCBwYWdlLm5hbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlVGl0bGUoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZVRpdGxlKHNlYXJjaFBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICByZXNvbHZlVGl0bGUoc2VhcmNoUGFnZT86IFByb2R1Y3RTZWFyY2hQYWdlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBzZWFyY2hQYWdlJCA9IHNlYXJjaFBhZ2UgPyBvZihzZWFyY2hQYWdlKSA6IHRoaXMuc2VhcmNoUGFnZSQ7XG5cbiAgICByZXR1cm4gc2VhcmNoUGFnZSQucGlwZShcbiAgICAgIGZpbHRlcigocGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UpID0+ICEhcGFnZS5wYWdpbmF0aW9uKSxcbiAgICAgIHN3aXRjaE1hcChwID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLmNhdGVnb3J5LnRpdGxlJywge1xuICAgICAgICAgIGNvdW50OiAoPFByb2R1Y3RTZWFyY2hQYWdlPnApLnBhZ2luYXRpb24udG90YWxSZXN1bHRzLFxuICAgICAgICAgIHF1ZXJ5OiAoPFByb2R1Y3RTZWFyY2hQYWdlPnApLmJyZWFkY3J1bWJzWzBdLmZhY2V0VmFsdWVOYW1lLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyBtZXRob2Qgd2lsbCByZW1vdmVkIHdpdGggd2l0aCAyLjBcbiAgICovXG4gIHJlc29sdmVCcmVhZGNydW1iTGFiZWwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyk7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlQnJlYWRjcnVtYnMoXG4gICAgc2VhcmNoUGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgYnJlYWRjcnVtYkxhYmVsOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIHJlc29sdmVCcmVhZGNydW1icyhcbiAgICBzZWFyY2hQYWdlPzogUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgYnJlYWRjcnVtYkxhYmVsPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBzb3VyY2VzID1cbiAgICAgIHNlYXJjaFBhZ2UgJiYgYnJlYWRjcnVtYkxhYmVsXG4gICAgICAgID8gW29mKHNlYXJjaFBhZ2UpLCBvZihicmVhZGNydW1iTGFiZWwpXVxuICAgICAgICA6IFt0aGlzLnNlYXJjaFBhZ2UkLnBpcGUoKSwgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyldO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoc291cmNlcykucGlwZShcbiAgICAgIG1hcCgoW3AsIGxhYmVsXTogW1Byb2R1Y3RTZWFyY2hQYWdlLCBzdHJpbmddKSA9PlxuICAgICAgICBwLmJyZWFkY3J1bWJzXG4gICAgICAgICAgPyB0aGlzLnJlc29sdmVCcmVhZGNydW1iRGF0YSg8UHJvZHVjdFNlYXJjaFBhZ2U+cCwgbGFiZWwpXG4gICAgICAgICAgOiBudWxsXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUJyZWFkY3J1bWJEYXRhKHBhZ2U6IFByb2R1Y3RTZWFyY2hQYWdlLCBsYWJlbDogc3RyaW5nKTogYW55W10ge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gW107XG4gICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH0pO1xuXG4gICAgZm9yIChjb25zdCBiciBvZiBwYWdlLmJyZWFkY3J1bWJzKSB7XG4gICAgICBpZiAoYnIuZmFjZXRDb2RlID09PSAnY2F0ZWdvcnknIHx8IGJyLmZhY2V0Q29kZSA9PT0gJ2FsbENhdGVnb3JpZXMnKSB7XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBici5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICBsaW5rOiBgL2MvJHtici5mYWNldFZhbHVlQ29kZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChici5mYWNldENvZGUgPT09ICdicmFuZCcpIHtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGJyLmZhY2V0VmFsdWVOYW1lLFxuICAgICAgICAgIGxpbms6IGAvQnJhbmRzLyR7YnIuZmFjZXRWYWx1ZU5hbWV9L2MvJHtici5mYWNldFZhbHVlQ29kZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNQcm9kdWN0TGlzdENvbXBvbmVudChwYWdlOiBQYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXMocGFnZS5zbG90cykuZmluZChcbiAgICAgIGtleSA9PlxuICAgICAgICAhIXBhZ2Uuc2xvdHNba2V5XS5jb21wb25lbnRzLmZpbmQoXG4gICAgICAgICAgY29tcCA9PlxuICAgICAgICAgICAgY29tcC50eXBlQ29kZSA9PT0gJ0NNU1Byb2R1Y3RMaXN0Q29tcG9uZW50JyB8fFxuICAgICAgICAgICAgY29tcC50eXBlQ29kZSA9PT0gJ1Byb2R1Y3RHcmlkQ29tcG9uZW50J1xuICAgICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19