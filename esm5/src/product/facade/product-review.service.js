/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as fromStore from '../store/index';
var ProductReviewService = /** @class */ (function () {
    function ProductReviewService(store) {
        this.store = store;
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    ProductReviewService.prototype.getByProductCode = /**
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        var _this = this;
        /** @type {?} */
        var selector = fromStore.getSelectedProductReviewsFactory(productCode);
        return this.store.pipe(select(selector), tap((/**
         * @param {?} reviews
         * @return {?}
         */
        function (reviews) {
            if (reviews === undefined && productCode !== undefined) {
                _this.store.dispatch(new fromStore.LoadProductReviews(productCode));
            }
        })));
    };
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    ProductReviewService.prototype.add = /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    function (productCode, review) {
        this.store.dispatch(new fromStore.PostProductReview({
            productCode: productCode,
            review: review,
        }));
    };
    ProductReviewService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReviewService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ProductReviewService;
}());
export { ProductReviewService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductReviewService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXJldmlldy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBRTVDO0lBRUUsOEJBQXNCLEtBQXdDO1FBQXhDLFVBQUssR0FBTCxLQUFLLENBQW1DO0lBQUcsQ0FBQzs7Ozs7SUFFbEUsK0NBQWdCOzs7O0lBQWhCLFVBQWlCLFdBQW1CO1FBQXBDLGlCQVVDOztZQVRPLFFBQVEsR0FBRyxTQUFTLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFDaEIsR0FBRzs7OztRQUFDLFVBQUEsT0FBTztZQUNULElBQUksT0FBTyxLQUFLLFNBQVMsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO2dCQUN0RCxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELGtDQUFHOzs7OztJQUFILFVBQUksV0FBbUIsRUFBRSxNQUFjO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztZQUM5QixXQUFXLEVBQUUsV0FBVztZQUN4QixNQUFNLFFBQUE7U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXZCRixVQUFVOzs7O2dCQU5NLEtBQUs7O0lBOEJ0QiwyQkFBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLG9CQUFvQjs7Ozs7O0lBQ25CLHFDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSZXZpZXcgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8ZnJvbVN0b3JlLlN0YXRlV2l0aFByb2R1Y3Q+KSB7fVxuXG4gIGdldEJ5UHJvZHVjdENvZGUocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmV2aWV3W10+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGZyb21TdG9yZS5nZXRTZWxlY3RlZFByb2R1Y3RSZXZpZXdzRmFjdG9yeShwcm9kdWN0Q29kZSk7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChzZWxlY3RvciksXG4gICAgICB0YXAocmV2aWV3cyA9PiB7XG4gICAgICAgIGlmIChyZXZpZXdzID09PSB1bmRlZmluZWQgJiYgcHJvZHVjdENvZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUHJvZHVjdFJldmlld3MocHJvZHVjdENvZGUpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgYWRkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHJldmlldzogUmV2aWV3KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuUG9zdFByb2R1Y3RSZXZpZXcoe1xuICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdENvZGUsXG4gICAgICAgIHJldmlldyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19