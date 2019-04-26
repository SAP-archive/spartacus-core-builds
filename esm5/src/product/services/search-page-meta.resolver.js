/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3NlcnZpY2VzL3NlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFHckU7SUFHNEMsa0RBQWdCO0lBRTFELGdDQUNZLGNBQThCLEVBQzlCLG9CQUEwQztRQUZ0RCxZQUlFLGlCQUFPLFNBR1I7UUFOVyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUdwRCxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDdEMsS0FBSSxDQUFDLFlBQVksR0FBRywrQkFBK0IsQ0FBQzs7SUFDdEQsQ0FBQzs7OztJQUVELHdDQUFPOzs7SUFBUDtRQUFBLGlCQXFCQzs7WUFwQk8sTUFBTSxHQUVSLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FDbkQsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxFQUMzQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBL0IsQ0FBK0IsQ0FBQyxDQUNoRDs7WUFFSyxNQUFNLEdBRVIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUFDLEVBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDaEI7UUFFRCxPQUFPLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDekMsU0FBUyxDQUFDLFVBQUMsRUFBZ0M7Z0JBQWhDLDBCQUFnQyxFQUEvQixhQUFLLEVBQUUsYUFBSztZQUN0QixPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUEvQixDQUErQixDQUNoQyxFQUNELEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQzFCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCw2Q0FBWTs7Ozs7SUFBWixVQUFhLEtBQWEsRUFBRSxLQUFhO1FBQ3ZDLE9BQU8sRUFBRSxDQUFJLEtBQUssdUJBQWlCLEtBQUssT0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEsY0FBYztnQkFFZCxvQkFBb0I7OztpQ0FMN0I7Q0FpREMsQUF4Q0QsQ0FHNEMsZ0JBQWdCLEdBcUMzRDtTQXJDWSxzQkFBc0I7Ozs7OztJQUcvQixnREFBd0M7Ozs7O0lBQ3hDLHNEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZU1ldGFSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gICAgdGhpcy5wYWdlVGVtcGxhdGUgPSAnU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgY29uc3QgdG90YWwkOiBPYnNlcnZhYmxlPFxuICAgICAgbnVtYmVyXG4gICAgPiA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0U2VhcmNoUmVzdWx0cygpLnBpcGUoXG4gICAgICBmaWx0ZXIoZGF0YSA9PiAhIShkYXRhICYmIGRhdGEucGFnaW5hdGlvbikpLFxuICAgICAgbWFwKHJlc3VsdHMgPT4gcmVzdWx0cy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cylcbiAgICApO1xuXG4gICAgY29uc3QgcXVlcnkkOiBPYnNlcnZhYmxlPFxuICAgICAgc3RyaW5nXG4gICAgPiA9IHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgbWFwKHN0YXRlID0+IHN0YXRlLnN0YXRlLnBhcmFtc1sncXVlcnknXSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICApO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3RvdGFsJCwgcXVlcnkkXSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoW3RvdGFsLCBxdWVyeV06IFtudW1iZXIsIHN0cmluZ10pID0+XG4gICAgICAgIHRoaXMucmVzb2x2ZVRpdGxlKHRvdGFsLCBxdWVyeSlcbiAgICAgICksXG4gICAgICBtYXAodGl0bGUgPT4gKHsgdGl0bGUgfSkpXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSh0b3RhbDogbnVtYmVyLCBxdWVyeTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gb2YoYCR7dG90YWx9IHJlc3VsdHMgZm9yIFwiJHtxdWVyeX1cImApO1xuICB9XG59XG4iXX0=