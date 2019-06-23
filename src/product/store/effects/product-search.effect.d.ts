import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductSearchConnector } from '../../connectors/search/product-search.connector';
import * as productsSearchActions from '../actions/product-search.action';
export declare class ProductsSearchEffects {
    private actions$;
    private productSearchConnector;
    searchProducts$: Observable<productsSearchActions.SearchProductsSuccess | productsSearchActions.SearchProductsFail>;
    getProductSuggestions$: Observable<productsSearchActions.GetProductSuggestionsSuccess | productsSearchActions.GetProductSuggestionsFail>;
    constructor(actions$: Actions, productSearchConnector: ProductSearchConnector);
}
