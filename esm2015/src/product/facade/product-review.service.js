/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ProductActions } from '../store/actions/index';
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
                this.store.dispatch(new ProductActions.LoadProductReviews(productCode));
            }
        })));
    }
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    add(productCode, review) {
        this.store.dispatch(new ProductActions.PostProductReview({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXJldmlldy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHNUQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUMvQixZQUFzQixLQUE4QjtRQUE5QixVQUFLLEdBQUwsS0FBSyxDQUF5QjtJQUFHLENBQUM7Ozs7O0lBRXhELGdCQUFnQixDQUFDLFdBQW1CO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUN0RSxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDWixJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksY0FBYyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUNuRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLFdBQW1CLEVBQUUsTUFBYztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxjQUFjLENBQUMsaUJBQWlCLENBQUM7WUFDbkMsV0FBVyxFQUFFLFdBQVc7WUFDeEIsTUFBTTtTQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBeEJGLFVBQVU7Ozs7WUFSTSxLQUFLOzs7Ozs7O0lBVVIscUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3RTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJldmlld1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+KSB7fVxuXG4gIGdldEJ5UHJvZHVjdENvZGUocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmV2aWV3W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0UmV2aWV3c0ZhY3RvcnkocHJvZHVjdENvZGUpKSxcbiAgICAgIHRhcChyZXZpZXdzID0+IHtcbiAgICAgICAgaWYgKHJldmlld3MgPT09IHVuZGVmaW5lZCAmJiBwcm9kdWN0Q29kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3MocHJvZHVjdENvZGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgYWRkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHJldmlldzogUmV2aWV3KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlldyh7XG4gICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kdWN0Q29kZSxcbiAgICAgICAgcmV2aWV3LFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=