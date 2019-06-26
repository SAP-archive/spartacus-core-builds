import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductSearchPage } from '../../model/product-search.model';
import { SearchConfig } from '../model/search-config';
import { StateWithProduct } from '../store/product-state';
export declare class ProductSearchService {
    protected store: Store<StateWithProduct>;
    constructor(store: Store<StateWithProduct>);
    search(query: string, searchConfig?: SearchConfig): void;
    getResults(): Observable<ProductSearchPage>;
    clearResults(): void;
}
