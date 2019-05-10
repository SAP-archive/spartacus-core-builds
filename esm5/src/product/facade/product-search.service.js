/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
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
    ProductSearchService.prototype.getSearchResults = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getSearchResults));
    };
    /**
     * @return {?}
     */
    ProductSearchService.prototype.clearSearchResults = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.CleanProductSearchState());
    };
    /**
     * @return {?}
     */
    ProductSearchService.prototype.getAuxSearchResults = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getAuxSearchResults), filter(function (results) { return Object.keys(results).length > 0; }));
    };
    /**
     * @return {?}
     */
    ProductSearchService.prototype.getSearchSuggestions = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getProductSuggestions));
    };
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    ProductSearchService.prototype.searchAuxiliary = /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    function (query, searchConfig) {
        this.store.dispatch(new fromStore.SearchProducts({
            queryText: query,
            searchConfig: searchConfig,
        }, true));
    };
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    ProductSearchService.prototype.getSuggestions = /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    function (query, searchConfig) {
        this.store.dispatch(new fromStore.GetProductSuggestions({
            term: query,
            searchConfig: searchConfig,
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
     * @private
     */
    ProductSearchService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ProductSearchService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sS0FBSyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFNNUM7SUFFRSw4QkFDVSxLQUF3QyxFQUN4QyxNQUFjO1FBRGQsVUFBSyxHQUFMLEtBQUssQ0FBbUM7UUFDeEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDOzs7Ozs7SUFFSixxQ0FBTTs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxZQUEyQjs7WUFDekMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxXQUFXLHVCQUFPLFlBQVksSUFBRSxLQUFLLE9BQUEsR0FBRTtZQUN2QyxnQkFBZ0IsRUFBRSxLQUFLO1NBQ3hCLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxZQUFZO1NBQzNCLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELCtDQUFnQjs7O0lBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBRUQsaURBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELGtEQUFtQjs7O0lBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUNyQyxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FDbkQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxtREFBb0I7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRUQsOENBQWU7Ozs7O0lBQWYsVUFBZ0IsS0FBYSxFQUFFLFlBQTJCO1FBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQzFCO1lBQ0UsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLFlBQVk7U0FDM0IsRUFDRCxJQUFJLENBQ0wsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsNkNBQWM7Ozs7O0lBQWQsVUFBZSxLQUFhLEVBQUUsWUFBMkI7UUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLElBQUksRUFBRSxLQUFLO1lBQ1gsWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkE1REYsVUFBVTs7OztnQkFaTSxLQUFLO2dCQUZiLE1BQU07O0lBMkVmLDJCQUFDO0NBQUEsQUE3REQsSUE2REM7U0E1RFksb0JBQW9COzs7Ozs7SUFFN0IscUNBQWdEOzs7OztJQUNoRCxzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7XG4gIFN1Z2dlc3Rpb24sXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxufSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VhcmNoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21TdG9yZS5TdGF0ZVdpdGhQcm9kdWN0PixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBzZWFyY2gocXVlcnk6IHN0cmluZywgc2VhcmNoQ29uZmlnPzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgdXJsVHJlZSA9IHRoaXMucm91dGVyLmNyZWF0ZVVybFRyZWUoW10sIHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7IC4uLnNlYXJjaENvbmZpZywgcXVlcnkgfSxcbiAgICAgIHByZXNlcnZlRnJhZ21lbnQ6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmxUcmVlKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5TZWFyY2hQcm9kdWN0cyh7XG4gICAgICAgIHF1ZXJ5VGV4dDogcXVlcnksXG4gICAgICAgIHNlYXJjaENvbmZpZzogc2VhcmNoQ29uZmlnLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0U2VhcmNoUmVzdWx0cygpOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFNlYXJjaFJlc3VsdHMpKTtcbiAgfVxuXG4gIGNsZWFyU2VhcmNoUmVzdWx0cygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuQ2xlYW5Qcm9kdWN0U2VhcmNoU3RhdGUoKSk7XG4gIH1cblxuICBnZXRBdXhTZWFyY2hSZXN1bHRzKCk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TdG9yZS5nZXRBdXhTZWFyY2hSZXN1bHRzKSxcbiAgICAgIGZpbHRlcihyZXN1bHRzID0+IE9iamVjdC5rZXlzKHJlc3VsdHMpLmxlbmd0aCA+IDApXG4gICAgKTtcbiAgfVxuXG4gIGdldFNlYXJjaFN1Z2dlc3Rpb25zKCk6IE9ic2VydmFibGU8U3VnZ2VzdGlvbltdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFByb2R1Y3RTdWdnZXN0aW9ucykpO1xuICB9XG5cbiAgc2VhcmNoQXV4aWxpYXJ5KHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaENvbmZpZz86IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLlNlYXJjaFByb2R1Y3RzKFxuICAgICAgICB7XG4gICAgICAgICAgcXVlcnlUZXh0OiBxdWVyeSxcbiAgICAgICAgICBzZWFyY2hDb25maWc6IHNlYXJjaENvbmZpZyxcbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRTdWdnZXN0aW9ucyhxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5HZXRQcm9kdWN0U3VnZ2VzdGlvbnMoe1xuICAgICAgICB0ZXJtOiBxdWVyeSxcbiAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==