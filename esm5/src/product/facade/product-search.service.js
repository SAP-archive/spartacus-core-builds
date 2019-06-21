/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../store/index';
var ProductSearchService = /** @class */ (function () {
    function ProductSearchService(store) {
        this.store = store;
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
        { type: Store }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSTVDLE9BQU8sS0FBSyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUM7SUFFRSw4QkFBc0IsS0FBd0M7UUFBeEMsVUFBSyxHQUFMLEtBQUssQ0FBbUM7SUFBRyxDQUFDOzs7Ozs7SUFFbEUscUNBQU07Ozs7O0lBQU4sVUFBTyxLQUFhLEVBQUUsWUFBMkI7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsWUFBWTtTQUMzQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7SUFFRCwyQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsd0JBQXdCLENBQUM7WUFDckMsZ0JBQWdCLEVBQUUsSUFBSTtTQUN2QixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXZCRixVQUFVOzs7O2dCQU5NLEtBQUs7O0lBOEJ0QiwyQkFBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLG9CQUFvQjs7Ozs7O0lBQ25CLHFDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZWFyY2hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxmcm9tU3RvcmUuU3RhdGVXaXRoUHJvZHVjdD4pIHt9XG5cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaENvbmZpZz86IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLlNlYXJjaFByb2R1Y3RzKHtcbiAgICAgICAgcXVlcnlUZXh0OiBxdWVyeSxcbiAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRSZXN1bHRzKCk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0U2VhcmNoUmVzdWx0cykpO1xuICB9XG5cbiAgY2xlYXJSZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkNsZWFyUHJvZHVjdFNlYXJjaFJlc3VsdCh7XG4gICAgICAgIGNsZWFyUGFnZVJlc3VsdHM6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==