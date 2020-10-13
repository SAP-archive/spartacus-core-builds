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

//# sourceMappingURL=product-search.connector.d.ts.map