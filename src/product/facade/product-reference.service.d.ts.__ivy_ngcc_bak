import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductReference } from '../../model/product.model';
import { StateWithProduct } from '../store/product-state';
export declare class ProductReferenceService {
    protected store: Store<StateWithProduct>;
    constructor(store: Store<StateWithProduct>);
    loadProductReferences(productCode: string, referenceType?: string, pageSize?: number): void;
    getProductReferences(productCode: string, referenceType: string): Observable<ProductReference[]>;
    cleanReferences(): void;
}
