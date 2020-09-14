import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Review } from '../../model/product.model';
import { StateWithProduct } from '../store/product-state';
export declare class ProductReviewService {
    protected store: Store<StateWithProduct>;
    constructor(store: Store<StateWithProduct>);
    getByProductCode(productCode: string): Observable<Review[]>;
    add(productCode: string, review: Review): void;
}
