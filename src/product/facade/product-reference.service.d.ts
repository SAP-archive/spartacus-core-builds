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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReferenceService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Uuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJlZmVyZW5jZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7OztBQUtBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PjtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4pO1xuICAgIGdldChwcm9kdWN0Q29kZTogc3RyaW5nLCByZWZlcmVuY2VUeXBlPzogc3RyaW5nLCBwYWdlU2l6ZT86IG51bWJlcik6IE9ic2VydmFibGU8UHJvZHVjdFJlZmVyZW5jZVtdPjtcbiAgICBjbGVhblJlZmVyZW5jZXMoKTogdm9pZDtcbn1cbiJdfQ==