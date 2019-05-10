/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageType } from '../../model/cms.model';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product-search.service";
var SearchPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(SearchPageMetaResolver, _super);
    function SearchPageMetaResolver(routingService, productSearchService) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'SearchResultsListPageTemplate';
        return _this;
    }
    /**
     * @return {?}
     */
    SearchPageMetaResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var total$ = this.productSearchService.getSearchResults().pipe(filter(function (data) { return !!(data && data.pagination); }), map(function (results) { return results.pagination.totalResults; }));
        /** @type {?} */
        var query$ = this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['query']; }), filter(Boolean));
        return combineLatest([total$, query$]).pipe(switchMap(function (_a) {
            var _b = tslib_1.__read(_a, 2), total = _b[0], query = _b[1];
            return _this.resolveTitle(total, query);
        }), map(function (title) { return ({ title: title }); }));
    };
    /**
     * @param {?} total
     * @param {?} query
     * @return {?}
     */
    SearchPageMetaResolver.prototype.resolveTitle = /**
     * @param {?} total
     * @param {?} query
     * @return {?}
     */
    function (total, query) {
        return of(total + " results for \"" + query + "\"");
    };
    SearchPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SearchPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductSearchService }
    ]; };
    /** @nocollapse */ SearchPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function SearchPageMetaResolver_Factory() { return new SearchPageMetaResolver(i0.inject(i1.RoutingService), i0.inject(i2.ProductSearchService)); }, token: SearchPageMetaResolver, providedIn: "root" });
    return SearchPageMetaResolver;
}(PageMetaResolver));
export { SearchPageMetaResolver };
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3NlcnZpY2VzL3NlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFakQ7SUFHNEMsa0RBQWdCO0lBRTFELGdDQUNZLGNBQThCLEVBQzlCLG9CQUEwQztRQUZ0RCxZQUlFLGlCQUFPLFNBR1I7UUFOVyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUdwRCxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDdEMsS0FBSSxDQUFDLFlBQVksR0FBRywrQkFBK0IsQ0FBQzs7SUFDdEQsQ0FBQzs7OztJQUVELHdDQUFPOzs7SUFBUDtRQUFBLGlCQXFCQzs7WUFwQk8sTUFBTSxHQUVSLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FDbkQsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxFQUMzQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBL0IsQ0FBK0IsQ0FBQyxDQUNoRDs7WUFFSyxNQUFNLEdBRVIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUFDLEVBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDaEI7UUFFRCxPQUFPLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDekMsU0FBUyxDQUFDLFVBQUMsRUFBZ0M7Z0JBQWhDLDBCQUFnQyxFQUEvQixhQUFLLEVBQUUsYUFBSztZQUN0QixPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUEvQixDQUErQixDQUNoQyxFQUNELEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQzFCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCw2Q0FBWTs7Ozs7SUFBWixVQUFhLEtBQWEsRUFBRSxLQUFhO1FBQ3ZDLE9BQU8sRUFBRSxDQUFJLEtBQUssdUJBQWlCLEtBQUssT0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEsY0FBYztnQkFDZCxvQkFBb0I7OztpQ0FKN0I7Q0FpREMsQUF4Q0QsQ0FHNEMsZ0JBQWdCLEdBcUMzRDtTQXJDWSxzQkFBc0I7Ozs7OztJQUcvQixnREFBd0M7Ozs7O0lBQ3hDLHNEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlTWV0YVJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgICB0aGlzLnBhZ2VUZW1wbGF0ZSA9ICdTZWFyY2hSZXN1bHRzTGlzdFBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICBjb25zdCB0b3RhbCQ6IE9ic2VydmFibGU8XG4gICAgICBudW1iZXJcbiAgICA+ID0gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRTZWFyY2hSZXN1bHRzKCkucGlwZShcbiAgICAgIGZpbHRlcihkYXRhID0+ICEhKGRhdGEgJiYgZGF0YS5wYWdpbmF0aW9uKSksXG4gICAgICBtYXAocmVzdWx0cyA9PiByZXN1bHRzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzKVxuICAgICk7XG5cbiAgICBjb25zdCBxdWVyeSQ6IE9ic2VydmFibGU8XG4gICAgICBzdHJpbmdcbiAgICA+ID0gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICBtYXAoc3RhdGUgPT4gc3RhdGUuc3RhdGUucGFyYW1zWydxdWVyeSddKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKVxuICAgICk7XG5cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbdG90YWwkLCBxdWVyeSRdKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChbdG90YWwsIHF1ZXJ5XTogW251bWJlciwgc3RyaW5nXSkgPT5cbiAgICAgICAgdGhpcy5yZXNvbHZlVGl0bGUodG90YWwsIHF1ZXJ5KVxuICAgICAgKSxcbiAgICAgIG1hcCh0aXRsZSA9PiAoeyB0aXRsZSB9KSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKHRvdGFsOiBudW1iZXIsIHF1ZXJ5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBvZihgJHt0b3RhbH0gcmVzdWx0cyBmb3IgXCIke3F1ZXJ5fVwiYCk7XG4gIH1cbn1cbiJdfQ==