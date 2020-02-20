import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AsmActions } from '../store/actions/index';
import { AsmSelectors } from '../store/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var AsmService = /** @class */ (function () {
    function AsmService(store) {
        this.store = store;
    }
    /**
     * Search for customers
     * @param options
     */
    AsmService.prototype.customerSearch = function (options) {
        this.store.dispatch(new AsmActions.CustomerSearch(options));
    };
    /**
     * Reset the customer search result data to the initial state.
     */
    AsmService.prototype.customerSearchReset = function () {
        this.store.dispatch(new AsmActions.CustomerSearchReset());
    };
    /**
     * Returns the customer search result data.
     */
    AsmService.prototype.getCustomerSearchResults = function () {
        return this.store.pipe(select(AsmSelectors.getCustomerSearchResults));
    };
    /**
     * Returns the customer search result loading status.
     */
    AsmService.prototype.getCustomerSearchResultsLoading = function () {
        return this.store.pipe(select(AsmSelectors.getCustomerSearchResultsLoading));
    };
    /**
     * Updates the state of the ASM UI
     */
    AsmService.prototype.updateAsmUiState = function (asmUi) {
        this.store.dispatch(new AsmActions.AsmUiUpdate(asmUi));
    };
    /**
     * Get the state of the ASM UI
     */
    AsmService.prototype.getAsmUiState = function () {
        return this.store.pipe(select(AsmSelectors.getAsmUi));
    };
    AsmService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    AsmService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmService_Factory() { return new AsmService(i0.ɵɵinject(i1.Store)); }, token: AsmService, providedIn: "root" });
    AsmService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AsmService);
    return AsmService;
}());
export { AsmService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL2ZhY2FkZS9hc20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU81QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLOUM7SUFDRSxvQkFBc0IsS0FBMEI7UUFBMUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7SUFBRyxDQUFDO0lBRXBEOzs7T0FHRztJQUNILG1DQUFjLEdBQWQsVUFBZSxPQUE4QjtRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCx3Q0FBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNkNBQXdCLEdBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxvREFBK0IsR0FBL0I7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsWUFBWSxDQUFDLCtCQUErQixDQUFDLENBQ3JELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBWTtRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQ0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Z0JBN0M0QixLQUFLOzs7SUFEdkIsVUFBVTtRQUh0QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csVUFBVSxDQStDdEI7cUJBOUREO0NBOERDLEFBL0NELElBK0NDO1NBL0NZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQXNtVWksXG4gIEN1c3RvbWVyU2VhcmNoT3B0aW9ucyxcbiAgQ3VzdG9tZXJTZWFyY2hQYWdlLFxufSBmcm9tICcuLi9tb2RlbHMvYXNtLm1vZGVscyc7XG5pbXBvcnQgeyBBc21BY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBc20gfSBmcm9tICcuLi9zdG9yZS9hc20tc3RhdGUnO1xuaW1wb3J0IHsgQXNtU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQXNtPikge31cblxuICAvKipcbiAgICogU2VhcmNoIGZvciBjdXN0b21lcnNcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIGN1c3RvbWVyU2VhcmNoKG9wdGlvbnM6IEN1c3RvbWVyU2VhcmNoT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFzbUFjdGlvbnMuQ3VzdG9tZXJTZWFyY2gob3B0aW9ucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBjdXN0b21lciBzZWFyY2ggcmVzdWx0IGRhdGEgdG8gdGhlIGluaXRpYWwgc3RhdGUuXG4gICAqL1xuICBjdXN0b21lclNlYXJjaFJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFzbUFjdGlvbnMuQ3VzdG9tZXJTZWFyY2hSZXNldCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzZWFyY2ggcmVzdWx0IGRhdGEuXG4gICAqL1xuICBnZXRDdXN0b21lclNlYXJjaFJlc3VsdHMoKTogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChBc21TZWxlY3RvcnMuZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VzdG9tZXIgc2VhcmNoIHJlc3VsdCBsb2FkaW5nIHN0YXR1cy5cbiAgICovXG4gIGdldEN1c3RvbWVyU2VhcmNoUmVzdWx0c0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBc21TZWxlY3RvcnMuZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzTG9hZGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHN0YXRlIG9mIHRoZSBBU00gVUlcbiAgICovXG4gIHVwZGF0ZUFzbVVpU3RhdGUoYXNtVWk6IEFzbVVpKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXNtQWN0aW9ucy5Bc21VaVVwZGF0ZShhc21VaSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RhdGUgb2YgdGhlIEFTTSBVSVxuICAgKi9cbiAgZ2V0QXNtVWlTdGF0ZSgpOiBPYnNlcnZhYmxlPEFzbVVpPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQXNtU2VsZWN0b3JzLmdldEFzbVVpKSk7XG4gIH1cbn1cbiJdfQ==