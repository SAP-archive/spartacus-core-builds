import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductReviewsConnector } from '../../connectors/reviews/product-reviews.connector';
import { ProductActions } from '../actions/index';
import { GlobalMessageService } from '../../../global-message/index';
export declare class ProductReviewsEffects {
    private actions$;
    private productReviewsConnector;
    private globalMessageService;
    loadProductReviews$: Observable<ProductActions.LoadProductReviewsSuccess | ProductActions.LoadProductReviewsFail>;
    postProductReview: Observable<ProductActions.PostProductReviewSuccess | ProductActions.PostProductReviewFail>;
    showGlobalMessageOnPostProductReviewSuccess$: Observable<never>;
    constructor(actions$: Actions, productReviewsConnector: ProductReviewsConnector, globalMessageService: GlobalMessageService);
}
