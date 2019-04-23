import { Review, Suggestion } from '../../occ/occ-models/occ.models';
import { EntityLoaderState } from '../../state/utils/entity-loader/entity-loader-state';
import { UIProductSearchPage } from '../model/product-search-page';
import { UIProduct } from '../model/product';
export declare const PRODUCT_FEATURE = "product";
export declare const PRODUCT_DETAIL_ENTITY = "[Product] Detail Entity";
export interface StateWithProduct {
    [PRODUCT_FEATURE]: ProductsState;
}
export interface ProductsState {
    details: EntityLoaderState<UIProduct>;
    search: ProductsSearchState;
    reviews: ProductReviewsState;
}
export interface ProductsSearchState {
    results: UIProductSearchPage;
    suggestions: Suggestion[];
    auxResults: UIProductSearchPage;
}
export interface ProductReviewsState {
    productCode: string;
    list: Review[];
}
