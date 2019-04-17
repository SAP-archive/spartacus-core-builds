/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as fromStore from '../store/index';
export class ProductSearchService {
    /**
     * @param {?} store
     * @param {?} router
     */
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    search(query, searchConfig) {
        /** @type {?} */
        const urlTree = this.router.createUrlTree([], {
            queryParams: Object.assign({}, searchConfig, { query }),
            preserveFragment: false,
        });
        this.router.navigateByUrl(urlTree);
        this.store.dispatch(new fromStore.SearchProducts({
            queryText: query,
            searchConfig: searchConfig,
        }));
    }
    /**
     * @return {?}
     */
    getSearchResults() {
        return this.store.pipe(select(fromStore.getSearchResults));
    }
    /**
     * @return {?}
     */
    clearSearchResults() {
        this.store.dispatch(new fromStore.CleanProductSearchState());
    }
    /**
     * @return {?}
     */
    getAuxSearchResults() {
        return this.store.pipe(select(fromStore.getAuxSearchResults), filter(results => Object.keys(results).length > 0));
    }
    /**
     * @return {?}
     */
    getSearchSuggestions() {
        return this.store.pipe(select(fromStore.getProductSuggestions));
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    searchAuxiliary(query, searchConfig) {
        this.store.dispatch(new fromStore.SearchProducts({
            queryText: query,
            searchConfig: searchConfig,
        }, true));
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    getSuggestions(query, searchConfig) {
        this.store.dispatch(new fromStore.GetProductSuggestions({
            term: query,
            searchConfig: searchConfig,
        }));
    }
}
ProductSearchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductSearchService.ctorParameters = () => [
    { type: Store },
    { type: Router }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxLQUFLLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUk1QyxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUMvQixZQUNVLEtBQXdDLEVBQ3hDLE1BQWM7UUFEZCxVQUFLLEdBQUwsS0FBSyxDQUFtQztRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7Ozs7OztJQUVKLE1BQU0sQ0FBQyxLQUFhLEVBQUUsWUFBMkI7O2NBQ3pDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsV0FBVyxvQkFBTyxZQUFZLElBQUUsS0FBSyxHQUFFO1lBQ3ZDLGdCQUFnQixFQUFFLEtBQUs7U0FDeEIsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsRUFDckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQ25ELENBQUM7SUFDSixDQUFDOzs7O0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQWEsRUFBRSxZQUEyQjtRQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUMxQjtZQUNFLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxZQUFZO1NBQzNCLEVBQ0QsSUFBSSxDQUNMLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxLQUFhLEVBQUUsWUFBMkI7UUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLElBQUksRUFBRSxLQUFLO1lBQ1gsWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUE1REYsVUFBVTs7OztZQVRNLEtBQUs7WUFGYixNQUFNOzs7Ozs7O0lBY1gscUNBQWdEOzs7OztJQUNoRCxzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlLCBTdWdnZXN0aW9uIH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlYXJjaFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tU3RvcmUuU3RhdGVXaXRoUHJvZHVjdD4sXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaENvbmZpZz86IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuICAgIGNvbnN0IHVybFRyZWUgPSB0aGlzLnJvdXRlci5jcmVhdGVVcmxUcmVlKFtdLCB7XG4gICAgICBxdWVyeVBhcmFtczogeyAuLi5zZWFyY2hDb25maWcsIHF1ZXJ5IH0sXG4gICAgICBwcmVzZXJ2ZUZyYWdtZW50OiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsVHJlZSk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuU2VhcmNoUHJvZHVjdHMoe1xuICAgICAgICBxdWVyeVRleHQ6IHF1ZXJ5LFxuICAgICAgICBzZWFyY2hDb25maWc6IHNlYXJjaENvbmZpZyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFNlYXJjaFJlc3VsdHMoKTogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRTZWFyY2hSZXN1bHRzKSk7XG4gIH1cblxuICBjbGVhclNlYXJjaFJlc3VsdHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkNsZWFuUHJvZHVjdFNlYXJjaFN0YXRlKCkpO1xuICB9XG5cbiAgZ2V0QXV4U2VhcmNoUmVzdWx0cygpOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuZ2V0QXV4U2VhcmNoUmVzdWx0cyksXG4gICAgICBmaWx0ZXIocmVzdWx0cyA9PiBPYmplY3Qua2V5cyhyZXN1bHRzKS5sZW5ndGggPiAwKVxuICAgICk7XG4gIH1cblxuICBnZXRTZWFyY2hTdWdnZXN0aW9ucygpOiBPYnNlcnZhYmxlPFN1Z2dlc3Rpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRQcm9kdWN0U3VnZ2VzdGlvbnMpKTtcbiAgfVxuXG4gIHNlYXJjaEF1eGlsaWFyeShxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5TZWFyY2hQcm9kdWN0cyhcbiAgICAgICAge1xuICAgICAgICAgIHF1ZXJ5VGV4dDogcXVlcnksXG4gICAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICAgIH0sXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0U3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZywgc2VhcmNoQ29uZmlnPzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zKHtcbiAgICAgICAgdGVybTogcXVlcnksXG4gICAgICAgIHNlYXJjaENvbmZpZzogc2VhcmNoQ29uZmlnLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=