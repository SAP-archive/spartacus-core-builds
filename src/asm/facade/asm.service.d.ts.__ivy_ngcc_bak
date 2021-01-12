import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsmUi, CustomerSearchOptions, CustomerSearchPage } from '../models/asm.models';
import { StateWithAsm } from '../store/asm-state';
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
}
