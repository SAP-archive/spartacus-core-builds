import { MemoizedSelector } from '@ngrx/store';
import { ProductReviewsState, StateWithProduct } from '../product-state';
import { Review } from '../../../model/product.model';
export declare const getProductReviewsState: MemoizedSelector<StateWithProduct, ProductReviewsState>;
export declare const getSelectedProductReviewsFactory: (productCode: any) => MemoizedSelector<StateWithProduct, Review[]>;
