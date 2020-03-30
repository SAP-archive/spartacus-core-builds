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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYXNtLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFzbVVpLCBDdXN0b21lclNlYXJjaE9wdGlvbnMsIEN1c3RvbWVyU2VhcmNoUGFnZSB9IGZyb20gJy4uL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IFN0YXRlV2l0aEFzbSB9IGZyb20gJy4uL3N0b3JlL2FzbS1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBc21TZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEFzbT47XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEFzbT4pO1xuICAgIC8qKlxuICAgICAqIFNlYXJjaCBmb3IgY3VzdG9tZXJzXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjdXN0b21lclNlYXJjaChvcHRpb25zOiBDdXN0b21lclNlYXJjaE9wdGlvbnMpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBjdXN0b21lciBzZWFyY2ggcmVzdWx0IGRhdGEgdG8gdGhlIGluaXRpYWwgc3RhdGUuXG4gICAgICovXG4gICAgY3VzdG9tZXJTZWFyY2hSZXNldCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1c3RvbWVyIHNlYXJjaCByZXN1bHQgZGF0YS5cbiAgICAgKi9cbiAgICBnZXRDdXN0b21lclNlYXJjaFJlc3VsdHMoKTogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1c3RvbWVyIHNlYXJjaCByZXN1bHQgbG9hZGluZyBzdGF0dXMuXG4gICAgICovXG4gICAgZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHN0YXRlIG9mIHRoZSBBU00gVUlcbiAgICAgKi9cbiAgICB1cGRhdGVBc21VaVN0YXRlKGFzbVVpOiBBc21VaSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzdGF0ZSBvZiB0aGUgQVNNIFVJXG4gICAgICovXG4gICAgZ2V0QXNtVWlTdGF0ZSgpOiBPYnNlcnZhYmxlPEFzbVVpPjtcbn1cbiJdfQ==