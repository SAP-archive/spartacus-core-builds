import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Review } from '../../model/product.model';
import { StateWithProduct } from '../store/product-state';
import * as ɵngcc0 from '@angular/core';
export declare class ProductReviewService {
    protected store: Store<StateWithProduct>;
    constructor(store: Store<StateWithProduct>);
    getByProductCode(productCode: string): Observable<Review[]>;
    add(productCode: string, review: Review): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReviewService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductReviewService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXcuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJldmlldy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3N0b3JlL3Byb2R1Y3Qtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdFJldmlld1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD47XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+KTtcbiAgICBnZXRCeVByb2R1Y3RDb2RlKHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJldmlld1tdPjtcbiAgICBhZGQocHJvZHVjdENvZGU6IHN0cmluZywgcmV2aWV3OiBSZXZpZXcpOiB2b2lkO1xufVxuIl19