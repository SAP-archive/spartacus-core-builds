import { Observable } from 'rxjs';
import { ProductReference } from '../../../model/product.model';
import { ProductReferencesAdapter } from './product-references.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class ProductReferencesConnector {
    protected adapter: ProductReferencesAdapter;
    constructor(adapter: ProductReferencesAdapter);
    get(productCode: string, referenceType?: string, pageSize?: number): Observable<ProductReference[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReferencesConnector>;
}

//# sourceMappingURL=product-references.connector.d.ts.map