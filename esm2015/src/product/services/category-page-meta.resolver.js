/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { CmsService } from '../../cms/facade/cms.service';
import { PageType } from '../../occ/occ-models/occ.models';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { ProductSearchService } from '../facade/product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product-search.service";
import * as i3 from "../../cms/facade/cms.service";
export class CategoryPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} routingService
     * @param {?} productSearchService
     * @param {?} cms
     */
    constructor(routingService, productSearchService, cms) {
        super();
        this.routingService = routingService;
        this.productSearchService = productSearchService;
        this.cms = cms;
        this.pageType = PageType.CATEGORY_PAGE;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(page => {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            if (this.hasProductListComponent(page)) {
                return this.productSearchService.getSearchResults().pipe(filter(data => data.breadcrumbs && data.breadcrumbs.length > 0), switchMap(data => {
                    return this.resolveTitle(data).pipe(map(title => ({ title })));
                }));
            }
            else {
                return of({
                    title: page.title || page.name,
                });
            }
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    resolveTitle(data) {
        return of(`${data.pagination.totalResults} results for ${data.breadcrumbs[0].facetValueName}`);
    }
    /**
     * @protected
     * @param {?} page
     * @return {?}
     */
    hasProductListComponent(page) {
        // ProductListComponent
        return !!Object.keys(page.slots).find(key => !!page.slots[key].components.find(comp => comp.typeCode === 'CMSProductListComponent'));
    }
}
CategoryPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CategoryPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductSearchService },
    { type: CmsService }
];
/** @nocollapse */ CategoryPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function CategoryPageMetaResolver_Factory() { return new CategoryPageMetaResolver(i0.inject(i1.RoutingService), i0.inject(i2.ProductSearchService), i0.inject(i3.CmsService)); }, token: CategoryPageMetaResolver, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CategoryPageMetaResolver.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    CategoryPageMetaResolver.prototype.productSearchService;
    /**
     * @type {?}
     * @protected
     */
    CategoryPageMetaResolver.prototype.cms;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBT3hFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxnQkFBZ0I7Ozs7OztJQUU1RCxZQUNZLGNBQThCLEVBQzlCLG9CQUEwQyxFQUMxQyxHQUFlO1FBRXpCLEtBQUssRUFBRSxDQUFDO1FBSkUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUd6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2YsNkRBQTZEO1lBQzdELHNEQUFzRDtZQUN0RCxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQy9ELFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakUsQ0FBQyxDQUFDLENBQ0gsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJO2lCQUMvQixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUF5QjtRQUNwQyxPQUFPLEVBQUUsQ0FDUCxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxnQkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUN0QixFQUFFLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVTLHVCQUF1QixDQUFDLElBQVU7UUFDMUMsdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDbkMsR0FBRyxDQUFDLEVBQUUsQ0FDSixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUsseUJBQXlCLENBQ3BELENBQ0osQ0FBQztJQUNKLENBQUM7OztZQXBERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFaUSxjQUFjO1lBTWQsb0JBQW9CO1lBTHBCLFVBQVU7Ozs7Ozs7O0lBZWYsa0RBQXdDOzs7OztJQUN4Qyx3REFBb0Q7Ozs7O0lBQ3BELHVDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZU1ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5cbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBVSVByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gtcGFnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcChwYWdlID0+IHtcbiAgICAgICAgLy8gb25seSB0aGUgZXhpc3RlbmNlIG9mIGEgcGxwIGNvbXBvbmVudCB0ZWxscyB1cyBpZiBwcm9kdWN0c1xuICAgICAgICAvLyBhcmUgcmVuZGVyZWQgb3IgaWYgdGhpcyBpcyBhbiBvcmRpbmFyeSBjb250ZW50IHBhZ2VcbiAgICAgICAgaWYgKHRoaXMuaGFzUHJvZHVjdExpc3RDb21wb25lbnQocGFnZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRTZWFyY2hSZXN1bHRzKCkucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEuYnJlYWRjcnVtYnMgJiYgZGF0YS5icmVhZGNydW1icy5sZW5ndGggPiAwKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZVRpdGxlKGRhdGEpLnBpcGUobWFwKHRpdGxlID0+ICh7IHRpdGxlIH0pKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICAgIHRpdGxlOiBwYWdlLnRpdGxlIHx8IHBhZ2UubmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKGRhdGE6IFVJUHJvZHVjdFNlYXJjaFBhZ2UpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBvZihcbiAgICAgIGAke2RhdGEucGFnaW5hdGlvbi50b3RhbFJlc3VsdHN9IHJlc3VsdHMgZm9yICR7XG4gICAgICAgIGRhdGEuYnJlYWRjcnVtYnNbMF0uZmFjZXRWYWx1ZU5hbWVcbiAgICAgIH1gXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNQcm9kdWN0TGlzdENvbXBvbmVudChwYWdlOiBQYWdlKTogYm9vbGVhbiB7XG4gICAgLy8gUHJvZHVjdExpc3RDb21wb25lbnRcbiAgICByZXR1cm4gISFPYmplY3Qua2V5cyhwYWdlLnNsb3RzKS5maW5kKFxuICAgICAga2V5ID0+XG4gICAgICAgICEhcGFnZS5zbG90c1trZXldLmNvbXBvbmVudHMuZmluZChcbiAgICAgICAgICBjb21wID0+IGNvbXAudHlwZUNvZGUgPT09ICdDTVNQcm9kdWN0TGlzdENvbXBvbmVudCdcbiAgICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==