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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductSearchConnector, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guY29ubmVjdG9yLmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3Qtc2VhcmNoLmNvbm5lY3Rvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RTZWFyY2hBZGFwdGVyIH0gZnJvbSAnLi9wcm9kdWN0LXNlYXJjaC5hZGFwdGVyJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3VnZ2VzdGlvbiwgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0U2VhcmNoQ29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogUHJvZHVjdFNlYXJjaEFkYXB0ZXI7XG4gICAgY29uc3RydWN0b3IoYWRhcHRlcjogUHJvZHVjdFNlYXJjaEFkYXB0ZXIpO1xuICAgIHNlYXJjaChxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWcpOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPjtcbiAgICBnZXRTdWdnZXN0aW9ucyh0ZXJtOiBzdHJpbmcsIHBhZ2VTaXplPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxTdWdnZXN0aW9uW10+O1xufVxuIl19