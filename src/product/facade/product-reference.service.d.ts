import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductReference } from '../../model/product.model';
import { StateWithProduct } from '../store/product-state';
import * as ɵngcc0 from '@angular/core';
export declare class ProductReferenceService {
    protected store: Store<StateWithProduct>;
    constructor(store: Store<StateWithProduct>);
    get(productCode: string, referenceType?: string, pageSize?: number): Observable<ProductReference[]>;
    cleanReferences(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReferenceService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductReferenceService>;
}

//# sourceMappingURL=product-reference.service.d.ts.map