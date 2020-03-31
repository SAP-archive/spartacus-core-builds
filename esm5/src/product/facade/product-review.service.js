import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
var ProductReviewService = /** @class */ (function () {
    function ProductReviewService(store) {
        this.store = store;
    }
    ProductReviewService.prototype.getByProductCode = function (productCode) {
        var _this = this;
        return this.store.pipe(select(ProductSelectors.getSelectedProductReviewsFactory(productCode)), tap(function (reviews) {
            if (reviews === undefined && productCode !== undefined) {
                _this.store.dispatch(new ProductActions.LoadProductReviews(productCode));
            }
        }));
    };
    ProductReviewService.prototype.add = function (productCode, review) {
        this.store.dispatch(new ProductActions.PostProductReview({
            productCode: productCode,
            review: review,
        }));
    };
    ProductReviewService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    ProductReviewService = __decorate([
        Injectable()
    ], ProductReviewService);
    return ProductReviewService;
}());
export { ProductReviewService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXJldmlldy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHNUQ7SUFDRSw4QkFBc0IsS0FBOEI7UUFBOUIsVUFBSyxHQUFMLEtBQUssQ0FBeUI7SUFBRyxDQUFDO0lBRXhELCtDQUFnQixHQUFoQixVQUFpQixXQUFtQjtRQUFwQyxpQkFXQztRQVZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUN0RSxHQUFHLENBQUMsVUFBQyxPQUFPO1lBQ1YsSUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FDbkQsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxrQ0FBRyxHQUFILFVBQUksV0FBbUIsRUFBRSxNQUFjO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztZQUNuQyxXQUFXLEVBQUUsV0FBVztZQUN4QixNQUFNLFFBQUE7U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXRCNEIsS0FBSzs7SUFEdkIsb0JBQW9CO1FBRGhDLFVBQVUsRUFBRTtPQUNBLG9CQUFvQixDQXdCaEM7SUFBRCwyQkFBQztDQUFBLEFBeEJELElBd0JDO1NBeEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSZXZpZXcgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZXZpZXdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0Pikge31cblxuICBnZXRCeVByb2R1Y3RDb2RlKHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJldmlld1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFJldmlld3NGYWN0b3J5KHByb2R1Y3RDb2RlKSksXG4gICAgICB0YXAoKHJldmlld3MpID0+IHtcbiAgICAgICAgaWYgKHJldmlld3MgPT09IHVuZGVmaW5lZCAmJiBwcm9kdWN0Q29kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3MocHJvZHVjdENvZGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgYWRkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHJldmlldzogUmV2aWV3KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlldyh7XG4gICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kdWN0Q29kZSxcbiAgICAgICAgcmV2aWV3LFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=