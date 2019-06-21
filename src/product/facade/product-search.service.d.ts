import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductSearchPage } from '../../model/product-search.model';
import { SearchConfig } from '../model/search-config';
import * as fromStore from '../store/index';
export declare class ProductSearchService {
    protected store: Store<fromStore.StateWithProduct>;
    constructor(store: Store<fromStore.StateWithProduct>);
    search(query: string, searchConfig?: SearchConfig): void;
    getResults(): Observable<ProductSearchPage>;
    clearResults(): void;
}
