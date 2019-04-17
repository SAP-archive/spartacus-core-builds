import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as productReviewsActions from './../actions/product-reviews.action';
import { ProductReviewsLoaderService } from '../../occ/product-reviews.service';
export declare class ProductReviewsEffects {
    private actions$;
    private occProductReviewsService;
    loadProductReviews$: Observable<productReviewsActions.LoadProductReviewsSuccess | productReviewsActions.LoadProductReviewsFail>;
    postProductReview: Observable<productReviewsActions.PostProductReviewSuccess | productReviewsActions.PostProductReviewFail>;
    constructor(actions$: Actions, occProductReviewsService: ProductReviewsLoaderService);
}
