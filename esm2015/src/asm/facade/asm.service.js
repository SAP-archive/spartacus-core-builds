import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AsmActions } from '../store/actions/index';
import { AsmSelectors } from '../store/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
let AsmService = class AsmService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Search for customers
     * @param options
     */
    customerSearch(options) {
        this.store.dispatch(new AsmActions.CustomerSearch(options));
    }
    /**
     * Reset the customer search result data to the initial state.
     */
    customerSearchReset() {
        this.store.dispatch(new AsmActions.CustomerSearchReset());
    }
    /**
     * Returns the customer search result data.
     */
    getCustomerSearchResults() {
        return this.store.pipe(select(AsmSelectors.getCustomerSearchResults));
    }
    /**
     * Returns the customer search result loading status.
     */
    getCustomerSearchResultsLoading() {
        return this.store.pipe(select(AsmSelectors.getCustomerSearchResultsLoading));
    }
    /**
     * Updates the state of the ASM UI
     */
    updateAsmUiState(asmUi) {
        this.store.dispatch(new AsmActions.AsmUiUpdate(asmUi));
    }
    /**
     * Get the state of the ASM UI
     */
    getAsmUiState() {
        return this.store.pipe(select(AsmSelectors.getAsmUi));
    }
};
AsmService.ctorParameters = () => [
    { type: Store }
];
AsmService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmService_Factory() { return new AsmService(i0.ɵɵinject(i1.Store)); }, token: AsmService, providedIn: "root" });
AsmService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AsmService);
export { AsmService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL2ZhY2FkZS9hc20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU81QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLOUMsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQUNyQixZQUFzQixLQUEwQjtRQUExQixVQUFLLEdBQUwsS0FBSyxDQUFxQjtJQUFHLENBQUM7SUFFcEQ7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLE9BQThCO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7T0FFRztJQUNILG1CQUFtQjtRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQStCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsK0JBQStCLENBQUMsQ0FDckQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILGdCQUFnQixDQUFDLEtBQVk7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRixDQUFBOztZQTlDOEIsS0FBSzs7O0FBRHZCLFVBQVU7SUFIdEIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLFVBQVUsQ0ErQ3RCO1NBL0NZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQXNtVWksXG4gIEN1c3RvbWVyU2VhcmNoT3B0aW9ucyxcbiAgQ3VzdG9tZXJTZWFyY2hQYWdlLFxufSBmcm9tICcuLi9tb2RlbHMvYXNtLm1vZGVscyc7XG5pbXBvcnQgeyBBc21BY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBc20gfSBmcm9tICcuLi9zdG9yZS9hc20tc3RhdGUnO1xuaW1wb3J0IHsgQXNtU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQXNtPikge31cblxuICAvKipcbiAgICogU2VhcmNoIGZvciBjdXN0b21lcnNcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIGN1c3RvbWVyU2VhcmNoKG9wdGlvbnM6IEN1c3RvbWVyU2VhcmNoT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFzbUFjdGlvbnMuQ3VzdG9tZXJTZWFyY2gob3B0aW9ucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBjdXN0b21lciBzZWFyY2ggcmVzdWx0IGRhdGEgdG8gdGhlIGluaXRpYWwgc3RhdGUuXG4gICAqL1xuICBjdXN0b21lclNlYXJjaFJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFzbUFjdGlvbnMuQ3VzdG9tZXJTZWFyY2hSZXNldCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzZWFyY2ggcmVzdWx0IGRhdGEuXG4gICAqL1xuICBnZXRDdXN0b21lclNlYXJjaFJlc3VsdHMoKTogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChBc21TZWxlY3RvcnMuZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VzdG9tZXIgc2VhcmNoIHJlc3VsdCBsb2FkaW5nIHN0YXR1cy5cbiAgICovXG4gIGdldEN1c3RvbWVyU2VhcmNoUmVzdWx0c0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBc21TZWxlY3RvcnMuZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzTG9hZGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHN0YXRlIG9mIHRoZSBBU00gVUlcbiAgICovXG4gIHVwZGF0ZUFzbVVpU3RhdGUoYXNtVWk6IEFzbVVpKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXNtQWN0aW9ucy5Bc21VaVVwZGF0ZShhc21VaSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RhdGUgb2YgdGhlIEFTTSBVSVxuICAgKi9cbiAgZ2V0QXNtVWlTdGF0ZSgpOiBPYnNlcnZhYmxlPEFzbVVpPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQXNtU2VsZWN0b3JzLmdldEFzbVVpKSk7XG4gIH1cbn1cbiJdfQ==