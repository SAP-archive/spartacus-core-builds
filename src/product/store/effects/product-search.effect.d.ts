import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as productsSearchActions from '../actions/product-search.action';
import { ProductImageNormalizer } from '../../occ/converters/product-image-normalizer';
import { ProductSearchLoaderService } from '../../occ/product-search.service';
export declare class ProductsSearchEffects {
    private actions$;
    private occProductSearchService;
    private productImageConverter;
    searchProducts$: Observable<productsSearchActions.SearchProductsSuccess | productsSearchActions.SearchProductsFail>;
    getProductSuggestions$: Observable<productsSearchActions.GetProductSuggestionsSuccess | productsSearchActions.GetProductSuggestionsFail>;
    constructor(actions$: Actions, occProductSearchService: ProductSearchLoaderService, productImageConverter: ProductImageNormalizer);
}
