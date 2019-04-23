import { ProductSearchAdapter } from './product-search.adapter';
import { SuggestionList } from '../../../occ/occ-models/occ.models';
import { SearchConfig } from '../../model/search-config';
import { Observable } from 'rxjs';
import { UIProductSearchPage } from '../../model/product-search-page';
export declare class ProductSearchConnector {
    protected adapter: ProductSearchAdapter;
    constructor(adapter: ProductSearchAdapter);
    search(query: string, searchConfig?: SearchConfig): Observable<UIProductSearchPage>;
    getSuggestions(term: string, pageSize?: number): Observable<SuggestionList>;
}
