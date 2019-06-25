/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as fromStore from '../store/index';
import { ProductSelectors } from '../store/selectors/index';
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
        return this.store.pipe(select(ProductSelectors.getSelectedProductReviewsFactory(productCode)), tap((/**
         * @param {?} reviews
         * @return {?}
         */
        reviews => {
            if (reviews === undefined && productCode !== undefined) {
                this.store.dispatch(new fromStore.LoadProductReviews(productCode));
            }
        })));
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
     * @protected
     */
    ProductReviewService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXJldmlldy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRzVELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFDL0IsWUFBc0IsS0FBd0M7UUFBeEMsVUFBSyxHQUFMLEtBQUssQ0FBbUM7SUFBRyxDQUFDOzs7OztJQUVsRSxnQkFBZ0IsQ0FBQyxXQUFtQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDdEUsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1osSUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDcEU7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLFdBQW1CLEVBQUUsTUFBYztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsaUJBQWlCLENBQUM7WUFDOUIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsTUFBTTtTQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBdEJGLFVBQVU7Ozs7WUFQTSxLQUFLOzs7Ozs7O0lBU1IscUNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJldmlld1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPGZyb21TdG9yZS5TdGF0ZVdpdGhQcm9kdWN0Pikge31cblxuICBnZXRCeVByb2R1Y3RDb2RlKHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJldmlld1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFJldmlld3NGYWN0b3J5KHByb2R1Y3RDb2RlKSksXG4gICAgICB0YXAocmV2aWV3cyA9PiB7XG4gICAgICAgIGlmIChyZXZpZXdzID09PSB1bmRlZmluZWQgJiYgcHJvZHVjdENvZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUHJvZHVjdFJldmlld3MocHJvZHVjdENvZGUpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgYWRkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHJldmlldzogUmV2aWV3KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuUG9zdFByb2R1Y3RSZXZpZXcoe1xuICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdENvZGUsXG4gICAgICAgIHJldmlldyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19