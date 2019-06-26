import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductSearchConnector } from '../../connectors/search/product-search.connector';
import { ProductActions } from '../actions/index';
export declare class ProductsSearchEffects {
    private actions$;
    private productSearchConnector;
    searchProducts$: Observable<ProductActions.SearchProductsSuccess | ProductActions.SearchProductsFail>;
    getProductSuggestions$: Observable<ProductActions.GetProductSuggestionsSuccess | ProductActions.GetProductSuggestionsFail>;
    constructor(actions$: Actions, productSearchConnector: ProductSearchConnector);
}
