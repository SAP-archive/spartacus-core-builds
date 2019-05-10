import { ProductsSearchState } from '../product-state';
import * as fromProductsSearch from '../actions/product-search.action';
import { Suggestion, ProductSearchPage } from '../../../model/product-search.model';
export declare const initialState: ProductsSearchState;
export declare function reducer(state: ProductsSearchState, action: fromProductsSearch.ProductSearchAction): ProductsSearchState;
export declare const getSearchResults: (state: ProductsSearchState) => ProductSearchPage;
export declare const getAuxSearchResults: (state: ProductsSearchState) => ProductSearchPage;
export declare const getProductSuggestions: (state: ProductsSearchState) => Suggestion[];
