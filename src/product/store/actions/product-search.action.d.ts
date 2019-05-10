import { Action } from '@ngrx/store';
import { SearchConfig } from '../../model/search-config';
import { Suggestion, ProductSearchPage } from '../../../model/product-search.model';
import { ErrorModel } from '../../../model/misc.model';
export declare const SEARCH_PRODUCTS = "[Product] Search Products";
export declare const SEARCH_PRODUCTS_FAIL = "[Product] Search Products Fail";
export declare const SEARCH_PRODUCTS_SUCCESS = "[Product] Search Products Success";
export declare const GET_PRODUCT_SUGGESTIONS = "[Product] Get Product Suggestions";
export declare const GET_PRODUCT_SUGGESTIONS_SUCCESS = "[Product] Get Product Suggestions Success";
export declare const GET_PRODUCT_SUGGESTIONS_FAIL = "[Product] Get Product Suggestions Fail";
export declare const CLEAN_PRODUCT_SEARCH = "[Product] Clean Product Search State";
export declare class SearchProducts implements Action {
    payload: {
        queryText: string;
        searchConfig: SearchConfig;
    };
    auxiliary?: boolean;
    readonly type = "[Product] Search Products";
    constructor(payload: {
        queryText: string;
        searchConfig: SearchConfig;
    }, auxiliary?: boolean);
}
export declare class SearchProductsFail implements Action {
    payload: ErrorModel;
    auxiliary?: boolean;
    readonly type = "[Product] Search Products Fail";
    constructor(payload: ErrorModel, auxiliary?: boolean);
}
export declare class SearchProductsSuccess implements Action {
    payload: ProductSearchPage;
    auxiliary?: boolean;
    readonly type = "[Product] Search Products Success";
    constructor(payload: ProductSearchPage, auxiliary?: boolean);
}
export declare class GetProductSuggestions implements Action {
    payload: {
        term: string;
        searchConfig: SearchConfig;
    };
    readonly type = "[Product] Get Product Suggestions";
    constructor(payload: {
        term: string;
        searchConfig: SearchConfig;
    });
}
export declare class GetProductSuggestionsSuccess implements Action {
    payload: Suggestion[];
    readonly type = "[Product] Get Product Suggestions Success";
    constructor(payload: Suggestion[]);
}
export declare class GetProductSuggestionsFail implements Action {
    payload: ErrorModel;
    readonly type = "[Product] Get Product Suggestions Fail";
    constructor(payload: ErrorModel);
}
export declare class CleanProductSearchState implements Action {
    readonly type = "[Product] Clean Product Search State";
    constructor();
}
export declare type ProductSearchAction = SearchProducts | SearchProductsFail | SearchProductsSuccess | GetProductSuggestions | GetProductSuggestionsSuccess | GetProductSuggestionsFail | CleanProductSearchState;
