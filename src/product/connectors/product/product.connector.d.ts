import { Observable } from 'rxjs';
import { ProductAdapter } from './product.adapter';
import { Product } from '../../../occ/occ-models/occ.models';
export declare class ProductConnector {
    private adapter;
    constructor(adapter: ProductAdapter);
    get(productCode: string): Observable<Product>;
}
