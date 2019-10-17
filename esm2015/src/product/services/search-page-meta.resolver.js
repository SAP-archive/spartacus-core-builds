/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageMetaResolver } from '../../cms';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product-search.service";
import * as i3 from "../../i18n/translation.service";
/**
 * Resolves the page data for the Search Result Page based on the
 * `PageType.CATEGORY_PAGE` and the `SearchResultsListPageTemplate` template.
 *
 * Only the page title is resolved in the implemenation.
 */
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
        this.total$ = this.productSearchService.getResults().pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        data => !!(data && data.pagination))), map((/**
         * @param {?} results
         * @return {?}
         */
        results => results.pagination.totalResults)));
        this.query$ = this.routingService
            .getRouterState()
            .pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        state => state.state.params['query'])));
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'SearchResultsListPageTemplate';
    }
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     * @return {?}
     */
    resolve() {
        return this.resolveTitle();
    }
    /**
     * @param {?=} total
     * @param {?=} query
     * @return {?}
     */
    resolveTitle(total, query) {
        /** @type {?} */
        const sources = total && query ? [of(total), of(query)] : [this.total$, this.query$];
        return combineLatest(sources).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([t, q]) => this.translation.translate('pageMetaResolver.search.title', {
            count: t,
            query: q,
        }))));
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
/** @nocollapse */ SearchPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchPageMetaResolver_Factory() { return new SearchPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductSearchService), i0.ɵɵinject(i3.TranslationService)); }, token: SearchPageMetaResolver, providedIn: "root" });
if (false) {
    /** @type {?} */
    SearchPageMetaResolver.prototype.total$;
    /** @type {?} */
    SearchPageMetaResolver.prototype.query$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3NlcnZpY2VzL3NlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTdDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7O0FBV3hFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxnQkFBZ0I7Ozs7OztJQVcxRCxZQUNZLGNBQThCLEVBQzlCLG9CQUEwQyxFQUMxQyxXQUErQjtRQUV6QyxLQUFLLEVBQUUsQ0FBQztRQUpFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQVozQyxXQUFNLEdBQXVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQ3RFLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsRUFDM0MsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUMsQ0FDaEQsQ0FBQztRQUVGLFdBQU0sR0FBdUIsSUFBSSxDQUFDLGNBQWM7YUFDN0MsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUM7UUFRakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsK0JBQStCLENBQUM7SUFDdEQsQ0FBQzs7Ozs7Ozs7O0lBU0QsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQVNELFlBQVksQ0FDVixLQUFjLEVBQ2QsS0FBYzs7Y0FFUixPQUFPLEdBQ1gsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RFLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDaEMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFtQixFQUFFLEVBQUUsQ0FDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsK0JBQStCLEVBQUU7WUFDMUQsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsQ0FBQztTQUNULENBQUMsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDOzs7WUF4REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBWFEsY0FBYztZQUNkLG9CQUFvQjtZQUhwQixrQkFBa0I7Ozs7O0lBZ0J6Qix3Q0FHRTs7SUFFRix3Q0FFbUQ7Ozs7O0lBR2pELGdEQUF3Qzs7Ozs7SUFDeEMsc0RBQW9EOzs7OztJQUNwRCw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMnO1xuaW1wb3J0IHsgUGFnZU1ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgdGhlIFNlYXJjaCBSZXN1bHQgUGFnZSBiYXNlZCBvbiB0aGVcbiAqIGBQYWdlVHlwZS5DQVRFR09SWV9QQUdFYCBhbmQgdGhlIGBTZWFyY2hSZXN1bHRzTGlzdFBhZ2VUZW1wbGF0ZWAgdGVtcGxhdGUuXG4gKlxuICogT25seSB0aGUgcGFnZSB0aXRsZSBpcyByZXNvbHZlZCBpbiB0aGUgaW1wbGVtZW5hdGlvbi5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZU1ldGFSZXNvbHZlciB7XG4gIHRvdGFsJDogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICBmaWx0ZXIoZGF0YSA9PiAhIShkYXRhICYmIGRhdGEucGFnaW5hdGlvbikpLFxuICAgIG1hcChyZXN1bHRzID0+IHJlc3VsdHMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMpXG4gICk7XG5cbiAgcXVlcnkkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuc3RhdGUucGFyYW1zWydxdWVyeSddKSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgICB0aGlzLnBhZ2VUZW1wbGF0ZSA9ICdTZWFyY2hSZXN1bHRzTGlzdFBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICpcbiAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgKiBUaGUgY2FsbGVyIGBQYWdlTWV0YVNlcnZpY2VgIHNlcnZpY2UgaXMgaW1wcm92ZWQgdG8gZXhwZWN0IGFsbCBpbmRpdmlkdWFsIHJlc29sdmVyc1xuICAgKiBpbnN0ZWFkLCBzbyB0aGF0IHRoZSBjb2RlIGlzIGVhc2llciBleHRlbnNpYmxlLlxuICAgKi9cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB8IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZVRpdGxlKCk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlVGl0bGUoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZVRpdGxlKHRvdGFsOiBudW1iZXIsIHF1ZXJ5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVUaXRsZShcbiAgICB0b3RhbD86IG51bWJlcixcbiAgICBxdWVyeT86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHsgdGl0bGU6IHN0cmluZyB9IHwgYW55PiB7XG4gICAgY29uc3Qgc291cmNlcyA9XG4gICAgICB0b3RhbCAmJiBxdWVyeSA/IFtvZih0b3RhbCksIG9mKHF1ZXJ5KV0gOiBbdGhpcy50b3RhbCQsIHRoaXMucXVlcnkkXTtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChzb3VyY2VzKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChbdCwgcV06IFtudW1iZXIsIHN0cmluZ10pID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnNlYXJjaC50aXRsZScsIHtcbiAgICAgICAgICBjb3VudDogdCxcbiAgICAgICAgICBxdWVyeTogcSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=