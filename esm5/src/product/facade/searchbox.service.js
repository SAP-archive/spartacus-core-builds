/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select } from '@ngrx/store';
import * as fromStore from '../store/index';
import { ProductSelectors } from '../store/selectors/index';
import { ProductSearchService } from './product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var SearchboxService = /** @class */ (function (_super) {
    tslib_1.__extends(SearchboxService, _super);
    function SearchboxService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * dispatch the search for the search box
     */
    /**
     * dispatch the search for the search box
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    SearchboxService.prototype.search = /**
     * dispatch the search for the search box
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
     * @return {?}
     */
    SearchboxService.prototype.getResults = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(ProductSelectors.getAuxSearchResults));
    };
    /**
     * clears the products and suggestions
     */
    /**
     * clears the products and suggestions
     * @return {?}
     */
    SearchboxService.prototype.clearResults = /**
     * clears the products and suggestions
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.ClearProductSearchResult({
            clearSearchboxResults: true,
        }));
    };
    /**
     * @return {?}
     */
    SearchboxService.prototype.getSuggestionResults = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(ProductSelectors.getProductSuggestions));
    };
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    SearchboxService.prototype.searchSuggestions = /**
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
    SearchboxService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ SearchboxService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchboxService_Factory() { return new SearchboxService(i0.ɵɵinject(i1.Store)); }, token: SearchboxService, providedIn: "root" });
    return SearchboxService;
}(ProductSearchService));
export { SearchboxService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYm94LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9mYWNhZGUvc2VhcmNoYm94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJckMsT0FBTyxLQUFLLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRWhFO0lBR3NDLDRDQUFvQjtJQUgxRDs7S0E4Q0M7SUExQ0M7O09BRUc7Ozs7Ozs7SUFDSCxpQ0FBTTs7Ozs7O0lBQU4sVUFBTyxLQUFhLEVBQUUsWUFBMkI7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FDMUI7WUFDRSxTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsWUFBWTtTQUMzQixFQUNELElBQUksQ0FDTCxDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQscUNBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx1Q0FBWTs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLHFCQUFxQixFQUFFLElBQUk7U0FDNUIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsK0NBQW9COzs7SUFBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBRUQsNENBQWlCOzs7OztJQUFqQixVQUFrQixLQUFhLEVBQUUsWUFBMkI7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLElBQUksRUFBRSxLQUFLO1lBQ1gsWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkE3Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzJCQVhEO0NBdURDLEFBOUNELENBR3NDLG9CQUFvQixHQTJDekQ7U0EzQ1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UsIFN1Z2dlc3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hib3hTZXJ2aWNlIGV4dGVuZHMgUHJvZHVjdFNlYXJjaFNlcnZpY2Uge1xuICAvKipcbiAgICogZGlzcGF0Y2ggdGhlIHNlYXJjaCBmb3IgdGhlIHNlYXJjaCBib3hcbiAgICovXG4gIHNlYXJjaChxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5TZWFyY2hQcm9kdWN0cyhcbiAgICAgICAge1xuICAgICAgICAgIHF1ZXJ5VGV4dDogcXVlcnksXG4gICAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICAgIH0sXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0UmVzdWx0cygpOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoUHJvZHVjdFNlbGVjdG9ycy5nZXRBdXhTZWFyY2hSZXN1bHRzKSk7XG4gIH1cblxuICAvKipcbiAgICogY2xlYXJzIHRoZSBwcm9kdWN0cyBhbmQgc3VnZ2VzdGlvbnNcbiAgICovXG4gIGNsZWFyUmVzdWx0cygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5DbGVhclByb2R1Y3RTZWFyY2hSZXN1bHQoe1xuICAgICAgICBjbGVhclNlYXJjaGJveFJlc3VsdHM6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRTdWdnZXN0aW9uUmVzdWx0cygpOiBPYnNlcnZhYmxlPFN1Z2dlc3Rpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFByb2R1Y3RTZWxlY3RvcnMuZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zKSk7XG4gIH1cblxuICBzZWFyY2hTdWdnZXN0aW9ucyhxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5HZXRQcm9kdWN0U3VnZ2VzdGlvbnMoe1xuICAgICAgICB0ZXJtOiBxdWVyeSxcbiAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==