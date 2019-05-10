import { MemoizedSelector } from '@ngrx/store';
import { ProductsSearchState, StateWithProduct } from '../product-state';
import { Suggestion, ProductSearchPage } from '../../../model/product-search.model';
export declare const getProductsSearchState: MemoizedSelector<StateWithProduct, ProductsSearchState>;
export declare const getSearchResults: MemoizedSelector<StateWithProduct, ProductSearchPage>;
export declare const getAuxSearchResults: MemoizedSelector<StateWithProduct, ProductSearchPage>;
export declare const getProductSuggestions: MemoizedSelector<StateWithProduct, Suggestion[]>;
