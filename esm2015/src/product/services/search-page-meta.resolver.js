/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageMetaResolver } from '../../cms';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing';
import { ProductSearchService } from '../facade';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product-search.service";
import * as i3 from "../../i18n/translation.service";
export class SearchPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} routingService
     * @param {?} productSearchService
     * @param {?} translation
     */
    constructor(routingService, productSearchService, translation) {
        super();
        this.routingService = routingService;
        this.productSearchService = productSearchService;
        this.translation = translation;
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'SearchResultsListPageTemplate';
    }
    /**
     * @return {?}
     */
    resolve() {
        /** @type {?} */
        const total$ = this.productSearchService.getResults().pipe(filter(data => !!(data && data.pagination)), map(results => results.pagination.totalResults));
        /** @type {?} */
        const query$ = this.routingService.getRouterState().pipe(map(state => state.state.params['query']), filter(Boolean));
        return combineLatest([total$, query$]).pipe(switchMap(([total, query]) => this.resolveTitle(total, query)), map(title => ({ title })));
    }
    /**
     * @param {?} total
     * @param {?} query
     * @return {?}
     */
    resolveTitle(total, query) {
        return this.translation.translate('pageMetaResolver.search.title', {
            count: total,
            query: query,
        });
    }
}
SearchPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SearchPageMetaResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductSearchService },
    { type: TranslationService }
];
/** @nocollapse */ SearchPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function SearchPageMetaResolver_Factory() { return new SearchPageMetaResolver(i0.inject(i1.RoutingService), i0.inject(i2.ProductSearchService), i0.inject(i3.TranslationService)); }, token: SearchPageMetaResolver, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SearchPageMetaResolver.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    SearchPageMetaResolver.prototype.productSearchService;
    /**
     * @type {?}
     * @protected
     */
    SearchPageMetaResolver.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3NlcnZpY2VzL3NlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sV0FBVyxDQUFDOzs7OztBQUtqRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCOzs7Ozs7SUFFMUQsWUFDWSxjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsV0FBK0I7UUFFekMsS0FBSyxFQUFFLENBQUM7UUFKRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFHekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsK0JBQStCLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELE9BQU87O2NBQ0MsTUFBTSxHQUVSLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFDM0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FDaEQ7O2NBRUssTUFBTSxHQUVSLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUMzQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCO1FBRUQsT0FBTyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ3pDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBbUIsRUFBRSxFQUFFLENBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUNoQyxFQUNELEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQzFCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBYSxFQUFFLEtBQWE7UUFDdkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQywrQkFBK0IsRUFBRTtZQUNqRSxLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBM0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLGNBQWM7WUFDZCxvQkFBb0I7WUFIcEIsa0JBQWtCOzs7Ozs7OztJQVd2QixnREFBd0M7Ozs7O0lBQ3hDLHNEQUFvRDs7Ozs7SUFDcEQsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMnO1xuaW1wb3J0IHsgUGFnZU1ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZU1ldGFSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gICAgdGhpcy5wYWdlVGVtcGxhdGUgPSAnU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgY29uc3QgdG90YWwkOiBPYnNlcnZhYmxlPFxuICAgICAgbnVtYmVyXG4gICAgPiA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpLnBpcGUoXG4gICAgICBmaWx0ZXIoZGF0YSA9PiAhIShkYXRhICYmIGRhdGEucGFnaW5hdGlvbikpLFxuICAgICAgbWFwKHJlc3VsdHMgPT4gcmVzdWx0cy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cylcbiAgICApO1xuXG4gICAgY29uc3QgcXVlcnkkOiBPYnNlcnZhYmxlPFxuICAgICAgc3RyaW5nXG4gICAgPiA9IHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgbWFwKHN0YXRlID0+IHN0YXRlLnN0YXRlLnBhcmFtc1sncXVlcnknXSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICApO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3RvdGFsJCwgcXVlcnkkXSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoW3RvdGFsLCBxdWVyeV06IFtudW1iZXIsIHN0cmluZ10pID0+XG4gICAgICAgIHRoaXMucmVzb2x2ZVRpdGxlKHRvdGFsLCBxdWVyeSlcbiAgICAgICksXG4gICAgICBtYXAodGl0bGUgPT4gKHsgdGl0bGUgfSkpXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSh0b3RhbDogbnVtYmVyLCBxdWVyeTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIuc2VhcmNoLnRpdGxlJywge1xuICAgICAgY291bnQ6IHRvdGFsLFxuICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgIH0pO1xuICB9XG59XG4iXX0=