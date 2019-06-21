import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductReviewsConnector } from '../../connectors/reviews/product-reviews.connector';
import * as productReviewsActions from './../actions/product-reviews.action';
export declare class ProductReviewsEffects {
    private actions$;
    private productReviewsConnector;
    loadProductReviews$: Observable<productReviewsActions.LoadProductReviewsSuccess | productReviewsActions.LoadProductReviewsFail>;
    postProductReview: Observable<productReviewsActions.PostProductReviewSuccess | productReviewsActions.PostProductReviewFail>;
    constructor(actions$: Actions, productReviewsConnector: ProductReviewsConnector);
}
