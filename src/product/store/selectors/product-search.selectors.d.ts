import { MemoizedSelector } from '@ngrx/store';
import { UIProductSearchPage } from '../../model/product-search-page';
import { ProductsSearchState, StateWithProduct } from '../product-state';
import { Suggestion } from '../../../occ/occ-models/occ.models';
export declare const getProductsSearchState: MemoizedSelector<StateWithProduct, ProductsSearchState>;
export declare const getSearchResults: MemoizedSelector<StateWithProduct, UIProductSearchPage>;
export declare const getAuxSearchResults: MemoizedSelector<StateWithProduct, UIProductSearchPage>;
export declare const getProductSuggestions: MemoizedSelector<StateWithProduct, Suggestion[]>;
