import { ProductSearchAdapter } from './product-search.adapter';
import { SearchConfig } from '../../model/search-config';
import { Observable } from 'rxjs';
import { Suggestion, ProductSearchPage } from '../../../model/product-search.model';
import * as ɵngcc0 from '@angular/core';
export declare class ProductSearchConnector {
    protected adapter: ProductSearchAdapter;
    constructor(adapter: ProductSearchAdapter);
    search(query: string, searchConfig?: SearchConfig): Observable<ProductSearchPage>;
    getSuggestions(term: string, pageSize?: number): Observable<Suggestion[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductSearchConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guY29ubmVjdG9yLmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3Qtc2VhcmNoLmNvbm5lY3Rvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0U2VhcmNoQWRhcHRlciB9IGZyb20gJy4vcHJvZHVjdC1zZWFyY2guYWRhcHRlcic7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1Z2dlc3Rpb24sIFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdFNlYXJjaENvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IFByb2R1Y3RTZWFyY2hBZGFwdGVyO1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IFByb2R1Y3RTZWFyY2hBZGFwdGVyKTtcbiAgICBzZWFyY2gocXVlcnk6IHN0cmluZywgc2VhcmNoQ29uZmlnPzogU2VhcmNoQ29uZmlnKTogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT47XG4gICAgZ2V0U3VnZ2VzdGlvbnModGVybTogc3RyaW5nLCBwYWdlU2l6ZT86IG51bWJlcik6IE9ic2VydmFibGU8U3VnZ2VzdGlvbltdPjtcbn1cbiJdfQ==