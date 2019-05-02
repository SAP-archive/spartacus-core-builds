/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageType } from '../../occ/occ-models/occ.models';
import { RoutingService } from '../../routing/facade/routing.service';
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
                return this.productSearchService.getSearchResults().pipe(filter(data => data.breadcrumbs && data.breadcrumbs.length > 0), switchMap(data => combineLatest([
                    this.resolveTitle(data),
                    this.resolveBreadcrumbs(data),
                ])), map(([title, breadcrumbs]) => ({ title, breadcrumbs })));
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
     * @param {?} data
     * @return {?}
     */
    resolveBreadcrumbs(data) {
        /** @type {?} */
        const breadcrumbs = [];
        breadcrumbs.push({ label: 'Home', link: '/' });
        for (const br of data.breadcrumbs) {
            breadcrumbs.push({
                label: br.facetValueName,
                link: '/c/' + br.facetValueCode,
            });
        }
        return of(breadcrumbs);
    }
    /**
     * @private
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7OztBQU14RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCOzs7Ozs7SUFFNUQsWUFDWSxjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsR0FBZTtRQUV6QixLQUFLLEVBQUUsQ0FBQztRQUpFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFHekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNmLDZEQUE2RDtZQUM3RCxzREFBc0Q7WUFDdEQsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUMvRCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDZixhQUFhLENBQUM7b0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7aUJBQzlCLENBQUMsQ0FDSCxFQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FDeEQsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJO2lCQUMvQixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUF5QjtRQUNwQyxPQUFPLEVBQUUsQ0FDUCxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxnQkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUN0QixFQUFFLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsSUFBeUI7O2NBQ3BDLFdBQVcsR0FBRyxFQUFFO1FBQ3RCLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLEtBQUssTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNqQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNmLEtBQUssRUFBRSxFQUFFLENBQUMsY0FBYztnQkFDeEIsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYzthQUNoQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVPLHVCQUF1QixDQUFDLElBQVU7UUFDeEMsdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDbkMsR0FBRyxDQUFDLEVBQUUsQ0FDSixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUsseUJBQXlCLENBQ3BELENBQ0osQ0FBQztJQUNKLENBQUM7OztZQXBFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxjQUFjO1lBQ2Qsb0JBQW9CO1lBTnBCLFVBQVU7Ozs7Ozs7O0lBZWYsa0RBQXdDOzs7OztJQUN4Qyx3REFBb0Q7Ozs7O0lBQ3BELHVDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZU1ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVUlQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLXBhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRTtcbiAgfVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBzd2l0Y2hNYXAocGFnZSA9PiB7XG4gICAgICAgIC8vIG9ubHkgdGhlIGV4aXN0ZW5jZSBvZiBhIHBscCBjb21wb25lbnQgdGVsbHMgdXMgaWYgcHJvZHVjdHNcbiAgICAgICAgLy8gYXJlIHJlbmRlcmVkIG9yIGlmIHRoaXMgaXMgYW4gb3JkaW5hcnkgY29udGVudCBwYWdlXG4gICAgICAgIGlmICh0aGlzLmhhc1Byb2R1Y3RMaXN0Q29tcG9uZW50KHBhZ2UpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0U2VhcmNoUmVzdWx0cygpLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoZGF0YSA9PiBkYXRhLmJyZWFkY3J1bWJzICYmIGRhdGEuYnJlYWRjcnVtYnMubGVuZ3RoID4gMCksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PlxuICAgICAgICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVUaXRsZShkYXRhKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVCcmVhZGNydW1icyhkYXRhKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAoKFt0aXRsZSwgYnJlYWRjcnVtYnNdKSA9PiAoeyB0aXRsZSwgYnJlYWRjcnVtYnMgfSkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2Yoe1xuICAgICAgICAgICAgdGl0bGU6IHBhZ2UudGl0bGUgfHwgcGFnZS5uYW1lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoZGF0YTogVUlQcm9kdWN0U2VhcmNoUGFnZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG9mKFxuICAgICAgYCR7ZGF0YS5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0c30gcmVzdWx0cyBmb3IgJHtcbiAgICAgICAgZGF0YS5icmVhZGNydW1ic1swXS5mYWNldFZhbHVlTmFtZVxuICAgICAgfWBcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKGRhdGE6IFVJUHJvZHVjdFNlYXJjaFBhZ2UpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcbiAgICBicmVhZGNydW1icy5wdXNoKHsgbGFiZWw6ICdIb21lJywgbGluazogJy8nIH0pO1xuICAgIGZvciAoY29uc3QgYnIgb2YgZGF0YS5icmVhZGNydW1icykge1xuICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgIGxhYmVsOiBici5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgbGluazogJy9jLycgKyBici5mYWNldFZhbHVlQ29kZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb2YoYnJlYWRjcnVtYnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNQcm9kdWN0TGlzdENvbXBvbmVudChwYWdlOiBQYWdlKTogYm9vbGVhbiB7XG4gICAgLy8gUHJvZHVjdExpc3RDb21wb25lbnRcbiAgICByZXR1cm4gISFPYmplY3Qua2V5cyhwYWdlLnNsb3RzKS5maW5kKFxuICAgICAga2V5ID0+XG4gICAgICAgICEhcGFnZS5zbG90c1trZXldLmNvbXBvbmVudHMuZmluZChcbiAgICAgICAgICBjb21wID0+IGNvbXAudHlwZUNvZGUgPT09ICdDTVNQcm9kdWN0TGlzdENvbXBvbmVudCdcbiAgICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==