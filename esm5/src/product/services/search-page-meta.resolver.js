/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { PageType } from '../../occ/occ-models/occ.models';
import { ProductSearchService } from '../facade/product-search.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
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
        return combineLatest(this.productSearchService.getSearchResults().pipe(filter(function (data) { return !!(data && data.pagination); }), map(function (results) { return results.pagination.totalResults; })), this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['query']; }), filter(Boolean))).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 2), t = _b[0], q = _b[1];
            return {
                title: _this.resolveTitle(t, q),
            };
        }));
    };
    /**
     * @param {?} total
     * @param {?} part
     * @return {?}
     */
    SearchPageMetaResolver.prototype.resolveTitle = /**
     * @param {?} total
     * @param {?} part
     * @return {?}
     */
    function (total, part) {
        return total + " results for \"" + part + "\"";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3NlcnZpY2VzL3NlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7O0FBR3JFO0lBRzRDLGtEQUFnQjtJQUUxRCxnQ0FDWSxjQUE4QixFQUM5QixvQkFBMEM7UUFGdEQsWUFJRSxpQkFBTyxTQUdSO1FBTlcsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFHcEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3RDLEtBQUksQ0FBQyxZQUFZLEdBQUcsK0JBQStCLENBQUM7O0lBQ3RELENBQUM7Ozs7SUFFRCx3Q0FBTzs7O0lBQVA7UUFBQSxpQkFpQkM7UUFoQkMsT0FBTyxhQUFhLENBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxFQUMzQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBL0IsQ0FBK0IsQ0FBQyxDQUNoRCxFQUNELElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUN2QyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxFQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCLENBQ0YsQ0FBQyxJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUMsRUFBd0I7Z0JBQXhCLDBCQUF3QixFQUF2QixTQUFDLEVBQUUsU0FBQztZQUNSLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMvQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELDZDQUFZOzs7OztJQUFaLFVBQWEsS0FBYSxFQUFFLElBQVk7UUFDdEMsT0FBVSxLQUFLLHVCQUFpQixJQUFJLE9BQUcsQ0FBQztJQUMxQyxDQUFDOztnQkFuQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSUSxjQUFjO2dCQUVkLG9CQUFvQjs7O2lDQUw3QjtDQTZDQyxBQXBDRCxDQUc0QyxnQkFBZ0IsR0FpQzNEO1NBakNZLHNCQUFzQjs7Ozs7O0lBRy9CLGdEQUF3Qzs7Ozs7SUFDeEMsc0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlTWV0YVJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgICB0aGlzLnBhZ2VUZW1wbGF0ZSA9ICdTZWFyY2hSZXN1bHRzTGlzdFBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0U2VhcmNoUmVzdWx0cygpLnBpcGUoXG4gICAgICAgIGZpbHRlcihkYXRhID0+ICEhKGRhdGEgJiYgZGF0YS5wYWdpbmF0aW9uKSksXG4gICAgICAgIG1hcChyZXN1bHRzID0+IHJlc3VsdHMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMpXG4gICAgICApLFxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3F1ZXJ5J10pLFxuICAgICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICAgIClcbiAgICApLnBpcGUoXG4gICAgICBtYXAoKFt0LCBxXTogW251bWJlciwgc3RyaW5nXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLnJlc29sdmVUaXRsZSh0LCBxKSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSh0b3RhbDogbnVtYmVyLCBwYXJ0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYCR7dG90YWx9IHJlc3VsdHMgZm9yIFwiJHtwYXJ0fVwiYDtcbiAgfVxufVxuIl19