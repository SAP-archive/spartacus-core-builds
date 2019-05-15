import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductReference } from '../../model/product.model';
import * as fromStore from '../store/index';
export declare class ProductReferenceService {
    private store;
    constructor(store: Store<fromStore.StateWithProduct>);
    get(productCode: string, referenceType?: string, pageSize?: number): Observable<ProductReference[]>;
}
