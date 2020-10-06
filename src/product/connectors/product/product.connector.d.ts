import { Observable } from 'rxjs';
import { Product } from '../../../model/product.model';
import { ProductAdapter } from './product.adapter';
import { ScopedProductData } from './scoped-product-data';
import * as ɵngcc0 from '@angular/core';
export declare class ProductConnector {
    protected adapter: ProductAdapter;
    constructor(adapter: ProductAdapter);
    get(productCode: string, scope?: string): Observable<Product>;
    getMany(products: ScopedProductData[]): ScopedProductData[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductConnector, never>;
}

//# sourceMappingURL=product.connector.d.ts.map