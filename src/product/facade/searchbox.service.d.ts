import { Observable } from 'rxjs';
import { ProductSearchPage, Suggestion } from '../../model/index';
import { SearchConfig } from '../model/index';
import { ProductSearchService } from './product-search.service';
import * as ɵngcc0 from '@angular/core';
export declare class SearchboxService extends ProductSearchService {
    /**
     * dispatch the search for the search box
     */
    search(query: string, searchConfig?: SearchConfig): void;
    getResults(): Observable<ProductSearchPage>;
    /**
     * clears the products and suggestions
     */
    clearResults(): void;
    getSuggestionResults(): Observable<Suggestion[]>;
    searchSuggestions(query: string, searchConfig?: SearchConfig): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchboxService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYm94LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsic2VhcmNoYm94LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQVlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UsIFN1Z2dlc3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTZWFyY2hib3hTZXJ2aWNlIGV4dGVuZHMgUHJvZHVjdFNlYXJjaFNlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIGRpc3BhdGNoIHRoZSBzZWFyY2ggZm9yIHRoZSBzZWFyY2ggYm94XG4gICAgICovXG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaENvbmZpZz86IFNlYXJjaENvbmZpZyk6IHZvaWQ7XG4gICAgZ2V0UmVzdWx0cygpOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPjtcbiAgICAvKipcbiAgICAgKiBjbGVhcnMgdGhlIHByb2R1Y3RzIGFuZCBzdWdnZXN0aW9uc1xuICAgICAqL1xuICAgIGNsZWFyUmVzdWx0cygpOiB2b2lkO1xuICAgIGdldFN1Z2dlc3Rpb25SZXN1bHRzKCk6IE9ic2VydmFibGU8U3VnZ2VzdGlvbltdPjtcbiAgICBzZWFyY2hTdWdnZXN0aW9ucyhxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWcpOiB2b2lkO1xufVxuIl19