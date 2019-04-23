import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as productsSearchActions from '../actions/product-search.action';
import { ProductSearchConnector } from '../../connectors/search/product-search.connector';
export declare class ProductsSearchEffects {
    private actions$;
    private productSearchConnector;
    searchProducts$: Observable<productsSearchActions.SearchProductsSuccess | productsSearchActions.SearchProductsFail>;
    getProductSuggestions$: Observable<productsSearchActions.GetProductSuggestionsSuccess | productsSearchActions.GetProductSuggestionsFail>;
    constructor(actions$: Actions, productSearchConnector: ProductSearchConnector);
}
