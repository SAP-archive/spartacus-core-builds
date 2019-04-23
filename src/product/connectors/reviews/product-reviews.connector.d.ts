import { Observable } from 'rxjs';
import { Review } from '../../../occ/occ-models/occ.models';
import { ProductReviewsAdapter } from './product-reviews.adapter';
export declare class ProductReviewsConnector {
    protected adapter: ProductReviewsAdapter;
    constructor(adapter: ProductReviewsAdapter);
    get(productCode: string, maxCount?: number): Observable<Review[]>;
    add(productCode: string, review: any): Observable<Review>;
}
