import { SearchConfig } from '../../model/search-config';
import { SuggestionList } from '../../../occ/occ-models/occ.models';
import { UIProductSearchPage } from '../../model/product-search-page';
import { Observable } from 'rxjs';
export declare abstract class ProductSearchAdapter {
    abstract search(query: string, searchConfig?: SearchConfig): Observable<UIProductSearchPage>;
    abstract loadSuggestions(term: string, pageSize?: number): Observable<SuggestionList>;
}
