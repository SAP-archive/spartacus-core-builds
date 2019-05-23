/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageType } from '../../model/cms.model';
import { TranslationService } from '../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product-search.service";
import * as i3 from "../../i18n/translation.service";
var SearchPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(SearchPageMetaResolver, _super);
    function SearchPageMetaResolver(routingService, productSearchService, translation) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.translation = translation;
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
        return this.translation.translate('pageMetaResolver.search.title', {
            count: total,
            query: query,
        });
    };
    SearchPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SearchPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductSearchService },
        { type: TranslationService }
    ]; };
    /** @nocollapse */ SearchPageMetaResolver.ngInjectableDef = i0.defineInjectable({ factory: function SearchPageMetaResolver_Factory() { return new SearchPageMetaResolver(i0.inject(i1.RoutingService), i0.inject(i2.ProductSearchService), i0.inject(i3.TranslationService)); }, token: SearchPageMetaResolver, providedIn: "root" });
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
    /**
     * @type {?}
     * @protected
     */
    SearchPageMetaResolver.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3NlcnZpY2VzL3NlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7O0FBRWhEO0lBRzRDLGtEQUFnQjtJQUUxRCxnQ0FDWSxjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsV0FBK0I7UUFIM0MsWUFLRSxpQkFBTyxTQUdSO1FBUFcsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsaUJBQVcsR0FBWCxXQUFXLENBQW9CO1FBR3pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QyxLQUFJLENBQUMsWUFBWSxHQUFHLCtCQUErQixDQUFDOztJQUN0RCxDQUFDOzs7O0lBRUQsd0NBQU87OztJQUFQO1FBQUEsaUJBcUJDOztZQXBCTyxNQUFNLEdBRVIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUNuRCxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUEzQixDQUEyQixDQUFDLEVBQzNDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUEvQixDQUErQixDQUFDLENBQ2hEOztZQUVLLE1BQU0sR0FFUixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDM0MsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsRUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNoQjtRQUVELE9BQU8sYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN6QyxTQUFTLENBQUMsVUFBQyxFQUFnQztnQkFBaEMsMEJBQWdDLEVBQS9CLGFBQUssRUFBRSxhQUFLO1lBQ3RCLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQS9CLENBQStCLENBQ2hDLEVBQ0QsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FDMUIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELDZDQUFZOzs7OztJQUFaLFVBQWEsS0FBYSxFQUFFLEtBQWE7UUFDdkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQywrQkFBK0IsRUFBRTtZQUNqRSxLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBM0NGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVFEsY0FBYztnQkFDZCxvQkFBb0I7Z0JBSXBCLGtCQUFrQjs7O2lDQVIzQjtDQXNEQyxBQTVDRCxDQUc0QyxnQkFBZ0IsR0F5QzNEO1NBekNZLHNCQUFzQjs7Ozs7O0lBRy9CLGdEQUF3Qzs7Ozs7SUFDeEMsc0RBQW9EOzs7OztJQUNwRCw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VNZXRhUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICAgIHRoaXMucGFnZVRlbXBsYXRlID0gJ1NlYXJjaFJlc3VsdHNMaXN0UGFnZVRlbXBsYXRlJztcbiAgfVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIGNvbnN0IHRvdGFsJDogT2JzZXJ2YWJsZTxcbiAgICAgIG51bWJlclxuICAgID4gPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFNlYXJjaFJlc3VsdHMoKS5waXBlKFxuICAgICAgZmlsdGVyKGRhdGEgPT4gISEoZGF0YSAmJiBkYXRhLnBhZ2luYXRpb24pKSxcbiAgICAgIG1hcChyZXN1bHRzID0+IHJlc3VsdHMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMpXG4gICAgKTtcblxuICAgIGNvbnN0IHF1ZXJ5JDogT2JzZXJ2YWJsZTxcbiAgICAgIHN0cmluZ1xuICAgID4gPSB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3F1ZXJ5J10pLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcblxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFt0b3RhbCQsIHF1ZXJ5JF0pLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFt0b3RhbCwgcXVlcnldOiBbbnVtYmVyLCBzdHJpbmddKSA9PlxuICAgICAgICB0aGlzLnJlc29sdmVUaXRsZSh0b3RhbCwgcXVlcnkpXG4gICAgICApLFxuICAgICAgbWFwKHRpdGxlID0+ICh7IHRpdGxlIH0pKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUodG90YWw6IG51bWJlciwgcXVlcnk6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnNlYXJjaC50aXRsZScsIHtcbiAgICAgIGNvdW50OiB0b3RhbCxcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICB9KTtcbiAgfVxufVxuIl19