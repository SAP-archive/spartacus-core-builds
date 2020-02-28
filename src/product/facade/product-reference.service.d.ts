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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Uuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJlZmVyZW5jZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+O1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0Pik7XG4gICAgZ2V0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHJlZmVyZW5jZVR5cGU/OiBzdHJpbmcsIHBhZ2VTaXplPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxQcm9kdWN0UmVmZXJlbmNlW10+O1xuICAgIGNsZWFuUmVmZXJlbmNlcygpOiB2b2lkO1xufVxuIl19