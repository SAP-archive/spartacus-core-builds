/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select } from '@ngrx/store';
import * as fromStore from '../store/index';
import { ProductSearchService } from './product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@angular/router";
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
/** @nocollapse */ SearchboxService.ngInjectableDef = i0.defineInjectable({ factory: function SearchboxService_Factory() { return new SearchboxService(i0.inject(i1.Store), i0.inject(i2.Router)); }, token: SearchboxService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYm94LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9mYWNhZGUvc2VhcmNoYm94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlyQyxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBS2hFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxvQkFBb0I7Ozs7Ozs7SUFJeEQsTUFBTSxDQUFDLEtBQWEsRUFBRSxZQUEyQjtRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUMxQjtZQUNFLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxZQUFZO1NBQzNCLEVBQ0QsSUFBSSxDQUNMLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUtELFlBQVk7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsd0JBQXdCLENBQUM7WUFDckMscUJBQXFCLEVBQUUsSUFBSTtTQUM1QixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsWUFBMkI7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLElBQUksRUFBRSxLQUFLO1lBQ1gsWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUE3Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UsIFN1Z2dlc3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoYm94U2VydmljZSBleHRlbmRzIFByb2R1Y3RTZWFyY2hTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIGRpc3BhdGNoIHRoZSBzZWFyY2ggZm9yIHRoZSBzZWFyY2ggYm94XG4gICAqL1xuICBzZWFyY2gocXVlcnk6IHN0cmluZywgc2VhcmNoQ29uZmlnPzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuU2VhcmNoUHJvZHVjdHMoXG4gICAgICAgIHtcbiAgICAgICAgICBxdWVyeVRleHQ6IHF1ZXJ5LFxuICAgICAgICAgIHNlYXJjaENvbmZpZzogc2VhcmNoQ29uZmlnLFxuICAgICAgICB9LFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFJlc3VsdHMoKTogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRBdXhTZWFyY2hSZXN1bHRzKSk7XG4gIH1cblxuICAvKipcbiAgICogY2xlYXJzIHRoZSBwcm9kdWN0cyBhbmQgc3VnZ2VzdGlvbnNcbiAgICovXG4gIGNsZWFyUmVzdWx0cygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5DbGVhclByb2R1Y3RTZWFyY2hSZXN1bHQoe1xuICAgICAgICBjbGVhclNlYXJjaGJveFJlc3VsdHM6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRTdWdnZXN0aW9uUmVzdWx0cygpOiBPYnNlcnZhYmxlPFN1Z2dlc3Rpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRQcm9kdWN0U3VnZ2VzdGlvbnMpKTtcbiAgfVxuXG4gIHNlYXJjaFN1Z2dlc3Rpb25zKHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaENvbmZpZz86IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkdldFByb2R1Y3RTdWdnZXN0aW9ucyh7XG4gICAgICAgIHRlcm06IHF1ZXJ5LFxuICAgICAgICBzZWFyY2hDb25maWc6IHNlYXJjaENvbmZpZyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19