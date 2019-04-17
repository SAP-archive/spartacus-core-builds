import { MemoizedSelector } from '@ngrx/store';
import { ProductsSearchState, StateWithProduct } from '../product-state';
import { ProductSearchPage, Suggestion } from '../../../occ/occ-models/occ.models';
export declare const getProductsSearchState: MemoizedSelector<StateWithProduct, ProductsSearchState>;
export declare const getSearchResults: MemoizedSelector<StateWithProduct, ProductSearchPage>;
export declare const getAuxSearchResults: MemoizedSelector<StateWithProduct, ProductSearchPage>;
export declare const getProductSuggestions: MemoizedSelector<StateWithProduct, Suggestion[]>;
