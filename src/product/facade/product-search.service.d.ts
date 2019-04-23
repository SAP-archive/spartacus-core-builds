import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchConfig } from '../model/search-config';
import * as fromStore from '../store/index';
import { Suggestion } from '../../occ/occ-models';
import { UIProductSearchPage } from '../model/product-search-page';
export declare class ProductSearchService {
    private store;
    private router;
    constructor(store: Store<fromStore.StateWithProduct>, router: Router);
    search(query: string, searchConfig?: SearchConfig): void;
    getSearchResults(): Observable<UIProductSearchPage>;
    clearSearchResults(): void;
    getAuxSearchResults(): Observable<UIProductSearchPage>;
    getSearchSuggestions(): Observable<Suggestion[]>;
    searchAuxiliary(query: string, searchConfig?: SearchConfig): void;
    getSuggestions(query: string, searchConfig?: SearchConfig): void;
}
