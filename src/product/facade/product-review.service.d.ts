import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store/index';
import { Review } from '../../model/product.model';
export declare class ProductReviewService {
    private store;
    constructor(store: Store<fromStore.StateWithProduct>);
    getByProductCode(productCode: string): Observable<Review[]>;
    add(productCode: string, review: Review): void;
}
