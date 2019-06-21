/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select } from '@ngrx/store';
import * as fromStore from '../store/index';
import { ProductSearchService } from './product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class SearchboxService extends ProductSearchService {
    /**
     * dispatch the search for the search box
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    search(query, searchConfig) {
        this.store.dispatch(new fromStore.SearchProducts({
            queryText: query,
            searchConfig: searchConfig,
        }, true));
    }
    /**
     * @return {?}
     */
    getResults() {
        return this.store.pipe(select(fromStore.getAuxSearchResults));
    }
    /**
     * clears the products and suggestions
     * @return {?}
     */
    clearResults() {
        this.store.dispatch(new fromStore.ClearProductSearchResult({
            clearSearchboxResults: true,
        }));
    }
    /**
     * @return {?}
     */
    getSuggestionResults() {
        return this.store.pipe(select(fromStore.getProductSuggestions));
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    searchSuggestions(query, searchConfig) {
        this.store.dispatch(new fromStore.GetProductSuggestions({
            term: query,
            searchConfig: searchConfig,
        }));
    }
}
SearchboxService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ SearchboxService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchboxService_Factory() { return new SearchboxService(i0.ɵɵinject(i1.Store)); }, token: SearchboxService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYm94LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9mYWNhZGUvc2VhcmNoYm94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlyQyxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLaEUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLG9CQUFvQjs7Ozs7OztJQUl4RCxNQUFNLENBQUMsS0FBYSxFQUFFLFlBQTJCO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQzFCO1lBQ0UsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLFlBQVk7U0FDM0IsRUFDRCxJQUFJLENBQ0wsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBS0QsWUFBWTtRQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxxQkFBcUIsRUFBRSxJQUFJO1NBQzVCLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLEtBQWEsRUFBRSxZQUEyQjtRQUMxRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMscUJBQXFCLENBQUM7WUFDbEMsSUFBSSxFQUFFLEtBQUs7WUFDWCxZQUFZLEVBQUUsWUFBWTtTQUMzQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQTdDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoUGFnZSwgU3VnZ2VzdGlvbiB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hib3hTZXJ2aWNlIGV4dGVuZHMgUHJvZHVjdFNlYXJjaFNlcnZpY2Uge1xuICAvKipcbiAgICogZGlzcGF0Y2ggdGhlIHNlYXJjaCBmb3IgdGhlIHNlYXJjaCBib3hcbiAgICovXG4gIHNlYXJjaChxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5TZWFyY2hQcm9kdWN0cyhcbiAgICAgICAge1xuICAgICAgICAgIHF1ZXJ5VGV4dDogcXVlcnksXG4gICAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICAgIH0sXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0UmVzdWx0cygpOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldEF1eFNlYXJjaFJlc3VsdHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGVhcnMgdGhlIHByb2R1Y3RzIGFuZCBzdWdnZXN0aW9uc1xuICAgKi9cbiAgY2xlYXJSZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkNsZWFyUHJvZHVjdFNlYXJjaFJlc3VsdCh7XG4gICAgICAgIGNsZWFyU2VhcmNoYm94UmVzdWx0czogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFN1Z2dlc3Rpb25SZXN1bHRzKCk6IE9ic2VydmFibGU8U3VnZ2VzdGlvbltdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFByb2R1Y3RTdWdnZXN0aW9ucykpO1xuICB9XG5cbiAgc2VhcmNoU3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZywgc2VhcmNoQ29uZmlnPzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zKHtcbiAgICAgICAgdGVybTogcXVlcnksXG4gICAgICAgIHNlYXJjaENvbmZpZzogc2VhcmNoQ29uZmlnLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=