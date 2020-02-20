import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductSearchConnector } from '../../connectors/search/product-search.connector';
import { ProductActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ProductsSearchEffects {
    private actions$;
    private productSearchConnector;
    searchProducts$: Observable<ProductActions.SearchProductsSuccess | ProductActions.SearchProductsFail>;
    getProductSuggestions$: Observable<ProductActions.GetProductSuggestionsSuccess | ProductActions.GetProductSuggestionsFail>;
    constructor(actions$: Actions, productSearchConnector: ProductSearchConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductsSearchEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductsSearchEffects>;
}

//# sourceMappingURL=product-search.effect.d.ts.map