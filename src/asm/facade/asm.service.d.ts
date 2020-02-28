import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsmUi, CustomerSearchOptions, CustomerSearchPage } from '../models/asm.models';
import { StateWithAsm } from '../store/asm-state';
import * as ɵngcc0 from '@angular/core';
export declare class AsmService {
    protected store: Store<StateWithAsm>;
    constructor(store: Store<StateWithAsm>);
    /**
     * Search for customers
     * @param options
     */
    customerSearch(options: CustomerSearchOptions): void;
    /**
     * Reset the customer search result data to the initial state.
     */
    customerSearchReset(): void;
    /**
     * Returns the customer search result data.
     */
    getCustomerSearchResults(): Observable<CustomerSearchPage>;
    /**
     * Returns the customer search result loading status.
     */
    getCustomerSearchResultsLoading(): Observable<boolean>;
    /**
     * Updates the state of the ASM UI
     */
    updateAsmUiState(asmUi: AsmUi): void;
    /**
     * Get the state of the ASM UI
     */
    getAsmUiState(): Observable<AsmUi>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYXNtLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBc21VaSwgQ3VzdG9tZXJTZWFyY2hPcHRpb25zLCBDdXN0b21lclNlYXJjaFBhZ2UgfSBmcm9tICcuLi9tb2RlbHMvYXNtLm1vZGVscyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBc20gfSBmcm9tICcuLi9zdG9yZS9hc20tc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXNtU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBc20+O1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBc20+KTtcbiAgICAvKipcbiAgICAgKiBTZWFyY2ggZm9yIGN1c3RvbWVyc1xuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgY3VzdG9tZXJTZWFyY2gob3B0aW9uczogQ3VzdG9tZXJTZWFyY2hPcHRpb25zKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgY3VzdG9tZXIgc2VhcmNoIHJlc3VsdCBkYXRhIHRvIHRoZSBpbml0aWFsIHN0YXRlLlxuICAgICAqL1xuICAgIGN1c3RvbWVyU2VhcmNoUmVzZXQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzZWFyY2ggcmVzdWx0IGRhdGEuXG4gICAgICovXG4gICAgZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzKCk6IE9ic2VydmFibGU8Q3VzdG9tZXJTZWFyY2hQYWdlPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzZWFyY2ggcmVzdWx0IGxvYWRpbmcgc3RhdHVzLlxuICAgICAqL1xuICAgIGdldEN1c3RvbWVyU2VhcmNoUmVzdWx0c0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBzdGF0ZSBvZiB0aGUgQVNNIFVJXG4gICAgICovXG4gICAgdXBkYXRlQXNtVWlTdGF0ZShhc21VaTogQXNtVWkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc3RhdGUgb2YgdGhlIEFTTSBVSVxuICAgICAqL1xuICAgIGdldEFzbVVpU3RhdGUoKTogT2JzZXJ2YWJsZTxBc21VaT47XG59XG4iXX0=