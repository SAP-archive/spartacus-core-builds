/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductReviewsConnector } from '../../connectors/reviews/product-reviews.connector';
import { ProductActions } from '../actions/index';
var ProductReviewsEffects = /** @class */ (function () {
    function ProductReviewsEffects(actions$, productReviewsConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.productReviewsConnector = productReviewsConnector;
        this.loadProductReviews$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT_REVIEWS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} productCode
         * @return {?}
         */
        function (productCode) {
            return _this.productReviewsConnector.get(productCode).pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return new ProductActions.LoadProductReviewsSuccess({
                    productCode: productCode,
                    list: data,
                });
            })), catchError((/**
             * @param {?} _error
             * @return {?}
             */
            function (_error) {
                return of(new ProductActions.LoadProductReviewsFail((/** @type {?} */ ({
                    message: productCode,
                }))));
            })));
        })));
        this.postProductReview = this.actions$.pipe(ofType(ProductActions.POST_PRODUCT_REVIEW), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.productReviewsConnector
                .add(payload.productCode, payload.review)
                .pipe(map((/**
             * @param {?} reviewResponse
             * @return {?}
             */
            function (reviewResponse) {
                return new ProductActions.PostProductReviewSuccess(reviewResponse);
            })), catchError((/**
             * @param {?} _error
             * @return {?}
             */
            function (_error) {
                return of(new ProductActions.PostProductReviewFail(payload.productCode));
            })));
        })));
    }
    ProductReviewsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReviewsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductReviewsConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductReviewsEffects.prototype, "loadProductReviews$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductReviewsEffects.prototype, "postProductReview", void 0);
    return ProductReviewsEffects;
}());
export { ProductReviewsEffects };
if (false) {
    /** @type {?} */
    ProductReviewsEffects.prototype.loadProductReviews$;
    /** @type {?} */
    ProductReviewsEffects.prototype.postProductReview;
    /**
     * @type {?}
     * @private
     */
    ProductReviewsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProductReviewsEffects.prototype.productReviewsConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZXZpZXdzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRDtJQWlERSwrQkFDVSxRQUFpQixFQUNqQix1QkFBZ0Q7UUFGMUQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFoRDFELHdCQUFtQixHQUdmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLEVBQzNDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQXlDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNsRSxRQUFROzs7O1FBQUMsVUFBQSxXQUFXO1lBQ2xCLE9BQU8sS0FBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3ZELEdBQUc7Ozs7WUFBQyxVQUFBLElBQUk7Z0JBQ04sT0FBTyxJQUFJLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDbEQsV0FBVyxhQUFBO29CQUNYLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLE1BQU07Z0JBQ2YsT0FBQSxFQUFFLENBQ0EsSUFBSSxjQUFjLENBQUMsc0JBQXNCLENBQUMsbUJBQUE7b0JBQ3hDLE9BQU8sRUFBRSxXQUFXO2lCQUNyQixFQUFjLENBQUMsQ0FDakI7WUFKRCxDQUlDLEVBQ0YsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLHNCQUFpQixHQUdiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEVBQzFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQXdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNqRSxRQUFROzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBTyxLQUFJLENBQUMsdUJBQXVCO2lCQUNoQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO2lCQUN4QyxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLFVBQUEsY0FBYztnQkFDaEIsT0FBTyxJQUFJLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRSxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxNQUFNO2dCQUNmLE9BQUEsRUFBRSxDQUFDLElBQUksY0FBYyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUFqRSxDQUFpRSxFQUNsRSxDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBcERMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFJUCx1QkFBdUI7O0lBTTlCO1FBREMsTUFBTSxFQUFFOzBDQUNZLFVBQVU7c0VBdUI3QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNVLFVBQVU7b0VBa0IzQjtJQU1KLDRCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FwRFkscUJBQXFCOzs7SUFDaEMsb0RBd0JFOztJQUVGLGtEQW1CRTs7Ozs7SUFHQSx5Q0FBeUI7Ozs7O0lBQ3pCLHdEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVycm9yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5jb25uZWN0b3InO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZXZpZXdzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkUHJvZHVjdFJldmlld3MkOiBPYnNlcnZhYmxlPFxuICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZXZpZXdzU3VjY2Vzc1xuICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZXZpZXdzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfUkVWSUVXUyksXG4gICAgbWFwKChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3cykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHByb2R1Y3RDb2RlID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yLmdldChwcm9kdWN0Q29kZSkucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZXZpZXdzU3VjY2Vzcyh7XG4gICAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICAgIGxpc3Q6IGRhdGEsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKF9lcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c0ZhaWwoe1xuICAgICAgICAgICAgICBtZXNzYWdlOiBwcm9kdWN0Q29kZSxcbiAgICAgICAgICAgIH0gYXMgRXJyb3JNb2RlbClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcG9zdFByb2R1Y3RSZXZpZXc6IE9ic2VydmFibGU8XG4gICAgfCBQcm9kdWN0QWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld1N1Y2Nlc3NcbiAgICB8IFByb2R1Y3RBY3Rpb25zLlBvc3RQcm9kdWN0UmV2aWV3RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5QT1NUX1BST0RVQ1RfUkVWSUVXKSxcbiAgICBtYXAoKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXcpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yXG4gICAgICAgIC5hZGQocGF5bG9hZC5wcm9kdWN0Q29kZSwgcGF5bG9hZC5yZXZpZXcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChyZXZpZXdSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RBY3Rpb25zLlBvc3RQcm9kdWN0UmV2aWV3U3VjY2VzcyhyZXZpZXdSZXNwb25zZSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihfZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBQcm9kdWN0QWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld0ZhaWwocGF5bG9hZC5wcm9kdWN0Q29kZSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yOiBQcm9kdWN0UmV2aWV3c0Nvbm5lY3RvclxuICApIHt9XG59XG4iXX0=