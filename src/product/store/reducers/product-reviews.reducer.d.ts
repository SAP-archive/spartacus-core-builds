import { ProductReviewsState } from '../product-state';
import * as fromProductReviews from './../actions/product-reviews.action';
import { Review } from '../../../model/product.model';
export declare const initialState: ProductReviewsState;
export declare function reducer(state: ProductReviewsState, action: fromProductReviews.ProductReviewsAction): ProductReviewsState;
export declare const getReviewList: (state: ProductReviewsState) => Review[];
export declare const getReviewProductCode: (state: ProductReviewsState) => string;
