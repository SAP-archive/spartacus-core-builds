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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYm94LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsic2VhcmNoYm94LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQVlBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlLCBTdWdnZXN0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2VhcmNoYm94U2VydmljZSBleHRlbmRzIFByb2R1Y3RTZWFyY2hTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBkaXNwYXRjaCB0aGUgc2VhcmNoIGZvciB0aGUgc2VhcmNoIGJveFxuICAgICAqL1xuICAgIHNlYXJjaChxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWcpOiB2b2lkO1xuICAgIGdldFJlc3VsdHMoKTogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT47XG4gICAgLyoqXG4gICAgICogY2xlYXJzIHRoZSBwcm9kdWN0cyBhbmQgc3VnZ2VzdGlvbnNcbiAgICAgKi9cbiAgICBjbGVhclJlc3VsdHMoKTogdm9pZDtcbiAgICBnZXRTdWdnZXN0aW9uUmVzdWx0cygpOiBPYnNlcnZhYmxlPFN1Z2dlc3Rpb25bXT47XG4gICAgc2VhcmNoU3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZywgc2VhcmNoQ29uZmlnPzogU2VhcmNoQ29uZmlnKTogdm9pZDtcbn1cbiJdfQ==