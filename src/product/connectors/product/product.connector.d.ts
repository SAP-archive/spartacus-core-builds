import { Observable } from 'rxjs';
import { ProductAdapter } from './product.adapter';
import { UIProduct } from '../../model/product';
export declare class ProductConnector {
    private adapter;
    constructor(adapter: ProductAdapter);
    get(productCode: string): Observable<UIProduct>;
}
