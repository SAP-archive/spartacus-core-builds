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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Uuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJlZmVyZW5jZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3N0b3JlL3Byb2R1Y3Qtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD47XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+KTtcbiAgICBnZXQocHJvZHVjdENvZGU6IHN0cmluZywgcmVmZXJlbmNlVHlwZT86IHN0cmluZywgcGFnZVNpemU/OiBudW1iZXIpOiBPYnNlcnZhYmxlPFByb2R1Y3RSZWZlcmVuY2VbXT47XG4gICAgY2xlYW5SZWZlcmVuY2VzKCk6IHZvaWQ7XG59XG4iXX0=