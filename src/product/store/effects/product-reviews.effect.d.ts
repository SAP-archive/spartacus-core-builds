import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductReviewsConnector } from '../../connectors/reviews/product-reviews.connector';
import { ProductActions } from '../actions/index';
export declare class ProductReviewsEffects {
    private actions$;
    private productReviewsConnector;
    loadProductReviews$: Observable<ProductActions.LoadProductReviewsSuccess | ProductActions.LoadProductReviewsFail>;
    postProductReview: Observable<ProductActions.PostProductReviewSuccess | ProductActions.PostProductReviewFail>;
    constructor(actions$: Actions, productReviewsConnector: ProductReviewsConnector);
}
