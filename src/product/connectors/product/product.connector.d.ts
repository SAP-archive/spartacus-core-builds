import { Observable } from 'rxjs';
import { Product } from '../../../model/product.model';
import { ProductAdapter } from './product.adapter';
export declare class ProductConnector {
    private adapter;
    constructor(adapter: ProductAdapter);
    get(productCode: string): Observable<Product>;
}
