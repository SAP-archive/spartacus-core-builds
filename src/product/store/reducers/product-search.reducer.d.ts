import { ProductSearchPage, Suggestion } from '../../../model/product-search.model';
import * as fromProductsSearch from '../actions/product-search.action';
import { ProductsSearchState } from '../product-state';
export declare const initialState: ProductsSearchState;
export declare function reducer(state: ProductsSearchState, action: fromProductsSearch.ProductSearchAction): ProductsSearchState;
export declare const getSearchResults: (state: ProductsSearchState) => ProductSearchPage;
export declare const getAuxSearchResults: (state: ProductsSearchState) => ProductSearchPage;
export declare const getProductSuggestions: (state: ProductsSearchState) => Suggestion[];
