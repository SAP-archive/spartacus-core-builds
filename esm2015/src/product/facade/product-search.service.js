/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../store/index';
export class ProductSearchService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    search(query, searchConfig) {
        this.store.dispatch(new fromStore.SearchProducts({
            queryText: query,
            searchConfig: searchConfig,
        }));
    }
    /**
     * @return {?}
     */
    getResults() {
        return this.store.pipe(select(fromStore.getSearchResults));
    }
    /**
     * @return {?}
     */
    clearResults() {
        this.store.dispatch(new fromStore.ClearProductSearchResult({
            clearPageResults: true,
        }));
    }
}
ProductSearchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductSearchService.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductSearchService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSTVDLE9BQU8sS0FBSyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUMvQixZQUFzQixLQUF3QztRQUF4QyxVQUFLLEdBQUwsS0FBSyxDQUFtQztJQUFHLENBQUM7Ozs7OztJQUVsRSxNQUFNLENBQUMsS0FBYSxFQUFFLFlBQTJCO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsd0JBQXdCLENBQUM7WUFDckMsZ0JBQWdCLEVBQUUsSUFBSTtTQUN2QixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQXZCRixVQUFVOzs7O1lBTk0sS0FBSzs7Ozs7OztJQVFSLHFDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZWFyY2hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxmcm9tU3RvcmUuU3RhdGVXaXRoUHJvZHVjdD4pIHt9XG5cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaENvbmZpZz86IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLlNlYXJjaFByb2R1Y3RzKHtcbiAgICAgICAgcXVlcnlUZXh0OiBxdWVyeSxcbiAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRSZXN1bHRzKCk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0U2VhcmNoUmVzdWx0cykpO1xuICB9XG5cbiAgY2xlYXJSZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkNsZWFyUHJvZHVjdFNlYXJjaFJlc3VsdCh7XG4gICAgICAgIGNsZWFyUGFnZVJlc3VsdHM6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==