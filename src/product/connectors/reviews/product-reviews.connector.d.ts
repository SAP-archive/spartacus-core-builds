import { Observable } from 'rxjs';
import { ProductReviewsAdapter } from './product-reviews.adapter';
import { Review } from '../../../model/product.model';
import * as ɵngcc0 from '@angular/core';
export declare class ProductReviewsConnector {
    protected adapter: ProductReviewsAdapter;
    constructor(adapter: ProductReviewsAdapter);
    get(productCode: string, maxCount?: number): Observable<Review[]>;
    add(productCode: string, review: any): Observable<Review>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReviewsConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJldmlld3MuY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7O0FBS0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NBZGFwdGVyIH0gZnJvbSAnLi9wcm9kdWN0LXJldmlld3MuYWRhcHRlcic7XG5pbXBvcnQgeyBSZXZpZXcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogUHJvZHVjdFJldmlld3NBZGFwdGVyO1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IFByb2R1Y3RSZXZpZXdzQWRhcHRlcik7XG4gICAgZ2V0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIG1heENvdW50PzogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZXZpZXdbXT47XG4gICAgYWRkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHJldmlldzogYW55KTogT2JzZXJ2YWJsZTxSZXZpZXc+O1xufVxuIl19