import { ProductsSearchState } from '../product-state';
import * as fromProductsSearch from '../actions/product-search.action';
import { Suggestion } from '../../../occ/occ-models';
import { UIProductSearchPage } from '../../model/product-search-page';
export declare const initialState: ProductsSearchState;
export declare function reducer(state: ProductsSearchState, action: fromProductsSearch.ProductSearchAction): ProductsSearchState;
export declare const getSearchResults: (state: ProductsSearchState) => UIProductSearchPage;
export declare const getAuxSearchResults: (state: ProductsSearchState) => UIProductSearchPage;
export declare const getProductSuggestions: (state: ProductsSearchState) => Suggestion[];
