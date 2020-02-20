import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { select } from '@ngrx/store';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import { ProductSearchService } from './product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var SearchboxService = /** @class */ (function (_super) {
    __extends(SearchboxService, _super);
    function SearchboxService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * dispatch the search for the search box
     */
    SearchboxService.prototype.search = function (query, searchConfig) {
        this.store.dispatch(new ProductActions.SearchProducts({
            queryText: query,
            searchConfig: searchConfig,
        }, true));
    };
    SearchboxService.prototype.getResults = function () {
        return this.store.pipe(select(ProductSelectors.getAuxSearchResults));
    };
    /**
     * clears the products and suggestions
     */
    SearchboxService.prototype.clearResults = function () {
        this.store.dispatch(new ProductActions.ClearProductSearchResult({
            clearSearchboxResults: true,
        }));
    };
    SearchboxService.prototype.getSuggestionResults = function () {
        return this.store.pipe(select(ProductSelectors.getProductSuggestions));
    };
    SearchboxService.prototype.searchSuggestions = function (query, searchConfig) {
        this.store.dispatch(new ProductActions.GetProductSuggestions({
            term: query,
            searchConfig: searchConfig,
        }));
    };
    SearchboxService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SearchboxService_Factory() { return new SearchboxService(i0.ɵɵinject(i1.Store)); }, token: SearchboxService, providedIn: "root" });
    SearchboxService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SearchboxService);
    return SearchboxService;
}(ProductSearchService));
export { SearchboxService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYm94LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9mYWNhZGUvc2VhcmNoYm94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUtoRTtJQUFzQyxvQ0FBb0I7SUFBMUQ7O0tBMkNDO0lBMUNDOztPQUVHO0lBQ0gsaUNBQU0sR0FBTixVQUFPLEtBQWEsRUFBRSxZQUEyQjtRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUMvQjtZQUNFLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxZQUFZO1NBQzNCLEVBQ0QsSUFBSSxDQUNMLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7T0FFRztJQUNILHVDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxjQUFjLENBQUMsd0JBQXdCLENBQUM7WUFDMUMscUJBQXFCLEVBQUUsSUFBSTtTQUM1QixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCwrQ0FBb0IsR0FBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELDRDQUFpQixHQUFqQixVQUFrQixLQUFhLEVBQUUsWUFBMkI7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksY0FBYyxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZDLElBQUksRUFBRSxLQUFLO1lBQ1gsWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztJQTFDVSxnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQTJDNUI7MkJBdkREO0NBdURDLEFBM0NELENBQXNDLG9CQUFvQixHQTJDekQ7U0EzQ1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UsIFN1Z2dlc3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hib3hTZXJ2aWNlIGV4dGVuZHMgUHJvZHVjdFNlYXJjaFNlcnZpY2Uge1xuICAvKipcbiAgICogZGlzcGF0Y2ggdGhlIHNlYXJjaCBmb3IgdGhlIHNlYXJjaCBib3hcbiAgICovXG4gIHNlYXJjaChxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLlNlYXJjaFByb2R1Y3RzKFxuICAgICAgICB7XG4gICAgICAgICAgcXVlcnlUZXh0OiBxdWVyeSxcbiAgICAgICAgICBzZWFyY2hDb25maWc6IHNlYXJjaENvbmZpZyxcbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRSZXN1bHRzKCk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChQcm9kdWN0U2VsZWN0b3JzLmdldEF1eFNlYXJjaFJlc3VsdHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGVhcnMgdGhlIHByb2R1Y3RzIGFuZCBzdWdnZXN0aW9uc1xuICAgKi9cbiAgY2xlYXJSZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuQ2xlYXJQcm9kdWN0U2VhcmNoUmVzdWx0KHtcbiAgICAgICAgY2xlYXJTZWFyY2hib3hSZXN1bHRzOiB0cnVlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0U3VnZ2VzdGlvblJlc3VsdHMoKTogT2JzZXJ2YWJsZTxTdWdnZXN0aW9uW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChQcm9kdWN0U2VsZWN0b3JzLmdldFByb2R1Y3RTdWdnZXN0aW9ucykpO1xuICB9XG5cbiAgc2VhcmNoU3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZywgc2VhcmNoQ29uZmlnPzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnMoe1xuICAgICAgICB0ZXJtOiBxdWVyeSxcbiAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==