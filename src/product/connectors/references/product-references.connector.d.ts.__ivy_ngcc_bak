import { Observable } from 'rxjs';
import { ProductReference } from '../../../model/product.model';
import { ProductReferencesAdapter } from './product-references.adapter';
export declare class ProductReferencesConnector {
    protected adapter: ProductReferencesAdapter;
    constructor(adapter: ProductReferencesAdapter);
    get(productCode: string, referenceType?: string, pageSize?: number): Observable<ProductReference[]>;
}
