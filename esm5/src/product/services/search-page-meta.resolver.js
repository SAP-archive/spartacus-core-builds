/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var SearchPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(SearchPageMetaResolver, _super);
    function SearchPageMetaResolver(routingService, productSearchService, translation) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.translation = translation;
        _this.total$ = _this.productSearchService.getResults().pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return !!(data && data.pagination); })), map((/**
         * @param {?} results
         * @return {?}
         */
        function (results) { return results.pagination.totalResults; })));
        _this.query$ = _this.routingService
            .getRouterState()
            .pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.state.params['query']; })));
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'SearchResultsListPageTemplate';
        return _this;
    }
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     * @return {?}
     */
    SearchPageMetaResolver.prototype.resolve = /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     * @return {?}
     */
    function () {
        return this.resolveTitle();
    };
    /**
     * @param {?=} total
     * @param {?=} query
     * @return {?}
     */
    SearchPageMetaResolver.prototype.resolveTitle = /**
     * @param {?=} total
     * @param {?=} query
     * @return {?}
     */
    function (total, query) {
        var _this = this;
        /** @type {?} */
        var sources = total && query ? [of(total), of(query)] : [this.total$, this.query$];
        return combineLatest(sources).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), t = _b[0], q = _b[1];
            return _this.translation.translate('pageMetaResolver.search.title', {
                count: t,
                query: q,
            });
        })));
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
    /** @nocollapse */ SearchPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchPageMetaResolver_Factory() { return new SearchPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductSearchService), i0.ɵɵinject(i3.TranslationService)); }, token: SearchPageMetaResolver, providedIn: "root" });
    return SearchPageMetaResolver;
}(PageMetaResolver));
export { SearchPageMetaResolver };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3NlcnZpY2VzL3NlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7OztBQVF4RTtJQUc0QyxrREFBZ0I7SUFXMUQsZ0NBQ1ksY0FBOEIsRUFDOUIsb0JBQTBDLEVBQzFDLFdBQStCO1FBSDNDLFlBS0UsaUJBQU8sU0FHUjtRQVBXLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QiwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQVozQyxZQUFNLEdBQXVCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQ3RFLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQTNCLENBQTJCLEVBQUMsRUFDM0MsR0FBRzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQS9CLENBQStCLEVBQUMsQ0FDaEQsQ0FBQztRQUVGLFlBQU0sR0FBdUIsS0FBSSxDQUFDLGNBQWM7YUFDN0MsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDLENBQUM7UUFRakQsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3RDLEtBQUksQ0FBQyxZQUFZLEdBQUcsK0JBQStCLENBQUM7O0lBQ3RELENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILHdDQUFPOzs7Ozs7OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBU0QsNkNBQVk7Ozs7O0lBQVosVUFDRSxLQUFjLEVBQ2QsS0FBYztRQUZoQixpQkFjQzs7WUFWTyxPQUFPLEdBQ1gsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RFLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDaEMsU0FBUzs7OztRQUFDLFVBQUMsRUFBd0I7Z0JBQXhCLDBCQUF3QixFQUF2QixTQUFDLEVBQUUsU0FBQztZQUNkLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsK0JBQStCLEVBQUU7Z0JBQzFELEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztRQUhGLENBR0UsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDOztnQkF4REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFYUSxjQUFjO2dCQUNkLG9CQUFvQjtnQkFIcEIsa0JBQWtCOzs7aUNBTDNCO0NBeUVDLEFBekRELENBRzRDLGdCQUFnQixHQXNEM0Q7U0F0RFksc0JBQXNCOzs7SUFFakMsd0NBR0U7O0lBRUYsd0NBRW1EOzs7OztJQUdqRCxnREFBd0M7Ozs7O0lBQ3hDLHNEQUFvRDs7Ozs7SUFDcEQsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zJztcbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIHRoZSBTZWFyY2ggUmVzdWx0IFBhZ2UgYmFzZWQgb24gdGhlXG4gKiBgUGFnZVR5cGUuQ0FURUdPUllfUEFHRWAgYW5kIHRoZSBgU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGVgIHRlbXBsYXRlLlxuICpcbiAqIE9ubHkgdGhlIHBhZ2UgdGl0bGUgaXMgcmVzb2x2ZWQgaW4gdGhlIGltcGxlbWVuYXRpb24uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VNZXRhUmVzb2x2ZXIge1xuICB0b3RhbCQ6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpLnBpcGUoXG4gICAgZmlsdGVyKGRhdGEgPT4gISEoZGF0YSAmJiBkYXRhLnBhZ2luYXRpb24pKSxcbiAgICBtYXAocmVzdWx0cyA9PiByZXN1bHRzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzKVxuICApO1xuXG4gIHF1ZXJ5JDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnN0YXRlLnBhcmFtc1sncXVlcnknXSkpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gICAgdGhpcy5wYWdlVGVtcGxhdGUgPSAnU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqXG4gICAqIFRoZSByZXNvbHZlIG1ldGhvZCBpcyBubyBsb25nZXIgcHJlZmVycmVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgd2l0aCByZWxlYXNlIDIuMC5cbiAgICogVGhlIGNhbGxlciBgUGFnZU1ldGFTZXJ2aWNlYCBzZXJ2aWNlIGlzIGltcHJvdmVkIHRvIGV4cGVjdCBhbGwgaW5kaXZpZHVhbCByZXNvbHZlcnNcbiAgICogaW5zdGVhZCwgc28gdGhhdCB0aGUgY29kZSBpcyBlYXNpZXIgZXh0ZW5zaWJsZS5cbiAgICovXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4gfCBhbnkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVUaXRsZSgpO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZVRpdGxlKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVUaXRsZSh0b3RhbDogbnVtYmVyLCBxdWVyeTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICByZXNvbHZlVGl0bGUoXG4gICAgdG90YWw/OiBudW1iZXIsXG4gICAgcXVlcnk/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7IHRpdGxlOiBzdHJpbmcgfSB8IGFueT4ge1xuICAgIGNvbnN0IHNvdXJjZXMgPVxuICAgICAgdG90YWwgJiYgcXVlcnkgPyBbb2YodG90YWwpLCBvZihxdWVyeSldIDogW3RoaXMudG90YWwkLCB0aGlzLnF1ZXJ5JF07XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoc291cmNlcykucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoW3QsIHFdOiBbbnVtYmVyLCBzdHJpbmddKSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5zZWFyY2gudGl0bGUnLCB7XG4gICAgICAgICAgY291bnQ6IHQsXG4gICAgICAgICAgcXVlcnk6IHEsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19