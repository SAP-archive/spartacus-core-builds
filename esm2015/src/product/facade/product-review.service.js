/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as fromStore from '../store/index';
export class ProductReviewService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    getByProductCode(productCode) {
        /** @type {?} */
        const selector = fromStore.getSelectedProductReviewsFactory(productCode);
        return this.store.pipe(select(selector), tap(reviews => {
            if (reviews === undefined && productCode !== undefined) {
                this.store.dispatch(new fromStore.LoadProductReviews(productCode));
            }
        }));
    }
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    add(productCode, review) {
        this.store.dispatch(new fromStore.PostProductReview({
            productCode: productCode,
            review,
        }));
    }
}
ProductReviewService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductReviewService.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductReviewService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXJldmlldy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBSTVDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFDL0IsWUFBb0IsS0FBd0M7UUFBeEMsVUFBSyxHQUFMLEtBQUssQ0FBbUM7SUFBRyxDQUFDOzs7OztJQUVoRSxnQkFBZ0IsQ0FBQyxXQUFtQjs7Y0FDNUIsUUFBUSxHQUFHLFNBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLENBQUM7UUFDeEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUNoQixHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDWixJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUNwRTtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsV0FBbUIsRUFBRSxNQUFjO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztZQUM5QixXQUFXLEVBQUUsV0FBVztZQUN4QixNQUFNO1NBQ1AsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUF2QkYsVUFBVTs7OztZQVJGLEtBQUs7Ozs7Ozs7SUFVQSxxQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJldmlld1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tU3RvcmUuU3RhdGVXaXRoUHJvZHVjdD4pIHt9XG5cbiAgZ2V0QnlQcm9kdWN0Q29kZShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXZpZXdbXT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZnJvbVN0b3JlLmdldFNlbGVjdGVkUHJvZHVjdFJldmlld3NGYWN0b3J5KHByb2R1Y3RDb2RlKTtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KHNlbGVjdG9yKSxcbiAgICAgIHRhcChyZXZpZXdzID0+IHtcbiAgICAgICAgaWYgKHJldmlld3MgPT09IHVuZGVmaW5lZCAmJiBwcm9kdWN0Q29kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRQcm9kdWN0UmV2aWV3cyhwcm9kdWN0Q29kZSkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBhZGQocHJvZHVjdENvZGU6IHN0cmluZywgcmV2aWV3OiBSZXZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5Qb3N0UHJvZHVjdFJldmlldyh7XG4gICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kdWN0Q29kZSxcbiAgICAgICAgcmV2aWV3LFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=