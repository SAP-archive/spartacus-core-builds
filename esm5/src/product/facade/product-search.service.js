/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../store/index';
var ProductSearchService = /** @class */ (function () {
    function ProductSearchService(store, router) {
        this.store = store;
        this.router = router;
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    ProductSearchService.prototype.search = /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    function (query, searchConfig) {
        /** @type {?} */
        var urlTree = this.router.createUrlTree([], {
            queryParams: tslib_1.__assign({}, searchConfig, { query: query }),
            preserveFragment: false,
        });
        this.router.navigateByUrl(urlTree);
        this.store.dispatch(new fromStore.SearchProducts({
            queryText: query,
            searchConfig: searchConfig,
        }));
    };
    /**
     * @return {?}
     */
    ProductSearchService.prototype.getResults = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getSearchResults));
    };
    /**
     * @return {?}
     */
    ProductSearchService.prototype.clearResults = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.ClearProductSearchResult({
            clearPageResults: true,
        }));
    };
    ProductSearchService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductSearchService.ctorParameters = function () { return [
        { type: Store },
        { type: Router }
    ]; };
    return ProductSearchService;
}());
export { ProductSearchService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductSearchService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    ProductSearchService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJNUMsT0FBTyxLQUFLLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QztJQUVFLDhCQUNZLEtBQXdDLEVBQ3hDLE1BQWM7UUFEZCxVQUFLLEdBQUwsS0FBSyxDQUFtQztRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3ZCLENBQUM7Ozs7OztJQUVKLHFDQUFNOzs7OztJQUFOLFVBQU8sS0FBYSxFQUFFLFlBQTJCOztZQUN6QyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFO1lBQzVDLFdBQVcsdUJBQU8sWUFBWSxJQUFFLEtBQUssT0FBQSxHQUFFO1lBQ3ZDLGdCQUFnQixFQUFFLEtBQUs7U0FDeEIsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBRUQsMkNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFoQ0YsVUFBVTs7OztnQkFOTSxLQUFLO2dCQURiLE1BQU07O0lBd0NmLDJCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FoQ1ksb0JBQW9COzs7Ozs7SUFFN0IscUNBQWtEOzs7OztJQUNsRCxzQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlYXJjaFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPGZyb21TdG9yZS5TdGF0ZVdpdGhQcm9kdWN0PixcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIHNlYXJjaChxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWcpOiB2b2lkIHtcbiAgICBjb25zdCB1cmxUcmVlID0gdGhpcy5yb3V0ZXIuY3JlYXRlVXJsVHJlZShbXSwge1xuICAgICAgcXVlcnlQYXJhbXM6IHsgLi4uc2VhcmNoQ29uZmlnLCBxdWVyeSB9LFxuICAgICAgcHJlc2VydmVGcmFnbWVudDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybFRyZWUpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLlNlYXJjaFByb2R1Y3RzKHtcbiAgICAgICAgcXVlcnlUZXh0OiBxdWVyeSxcbiAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRSZXN1bHRzKCk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0U2VhcmNoUmVzdWx0cykpO1xuICB9XG5cbiAgY2xlYXJSZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkNsZWFyUHJvZHVjdFNlYXJjaFJlc3VsdCh7XG4gICAgICAgIGNsZWFyUGFnZVJlc3VsdHM6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==