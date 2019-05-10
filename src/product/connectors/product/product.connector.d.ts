import { Observable } from 'rxjs';
import { ProductAdapter } from './product.adapter';
import { Product } from '../../../model/product.model';
export declare class ProductConnector {
    private adapter;
    constructor(adapter: ProductAdapter);
    get(productCode: string): Observable<Product>;
}
