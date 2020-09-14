import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductReference } from '../../model/product.model';
import { StateWithProduct } from '../store/product-state';
export declare class ProductReferenceService {
    protected store: Store<StateWithProduct>;
    constructor(store: Store<StateWithProduct>);
    get(productCode: string, referenceType?: string, pageSize?: number): Observable<ProductReference[]>;
    cleanReferences(): void;
}
