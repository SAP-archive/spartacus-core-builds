/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ProductReviewsConnector } from '../../connectors/reviews/product-reviews.connector';
import { ProductActions } from '../actions/index';
import { GlobalMessageService, GlobalMessageType, } from '../../../global-message/index';
var ProductReviewsEffects = /** @class */ (function () {
    function ProductReviewsEffects(actions$, productReviewsConnector, globalMessageService) {
        var _this = this;
        this.actions$ = actions$;
        this.productReviewsConnector = productReviewsConnector;
        this.globalMessageService = globalMessageService;
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
        this.showGlobalMessageOnPostProductReviewSuccess$ = this.actions$.pipe(ofType(ProductActions.POST_PRODUCT_REVIEW_SUCCESS), tap((/**
         * @return {?}
         */
        function () {
            _this.globalMessageService.add({ key: 'productReview.thankYouForReview' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        })));
    }
    ProductReviewsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReviewsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductReviewsConnector },
        { type: GlobalMessageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductReviewsEffects.prototype, "loadProductReviews$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductReviewsEffects.prototype, "postProductReview", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], ProductReviewsEffects.prototype, "showGlobalMessageOnPostProductReviewSuccess$", void 0);
    return ProductReviewsEffects;
}());
export { ProductReviewsEffects };
if (false) {
    /** @type {?} */
    ProductReviewsEffects.prototype.loadProductReviews$;
    /** @type {?} */
    ProductReviewsEffects.prototype.postProductReview;
    /** @type {?} */
    ProductReviewsEffects.prototype.showGlobalMessageOnPostProductReviewSuccess$;
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
    /**
     * @type {?}
     * @private
     */
    ProductReviewsEffects.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZXZpZXdzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QztJQTRERSwrQkFDVSxRQUFpQixFQUNqQix1QkFBZ0QsRUFDaEQsb0JBQTBDO1FBSHBELGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUE1RHBELHdCQUFtQixHQUdmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLEVBQzNDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQXlDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNsRSxRQUFROzs7O1FBQUMsVUFBQSxXQUFXO1lBQ2xCLE9BQU8sS0FBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3ZELEdBQUc7Ozs7WUFBQyxVQUFBLElBQUk7Z0JBQ04sT0FBTyxJQUFJLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDbEQsV0FBVyxhQUFBO29CQUNYLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLE1BQU07Z0JBQ2YsT0FBQSxFQUFFLENBQ0EsSUFBSSxjQUFjLENBQUMsc0JBQXNCLENBQUMsbUJBQUE7b0JBQ3hDLE9BQU8sRUFBRSxXQUFXO2lCQUNyQixFQUFjLENBQUMsQ0FDakI7WUFKRCxDQUlDLEVBQ0YsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLHNCQUFpQixHQUdiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEVBQzFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQXdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNqRSxRQUFROzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBTyxLQUFJLENBQUMsdUJBQXVCO2lCQUNoQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO2lCQUN4QyxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLFVBQUEsY0FBYztnQkFDaEIsT0FBTyxJQUFJLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRSxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxNQUFNO2dCQUNmLE9BQUEsRUFBRSxDQUFDLElBQUksY0FBYyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUFqRSxDQUFpRSxFQUNsRSxDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0YsaURBQTRDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9ELE1BQU0sQ0FBQyxjQUFjLENBQUMsMkJBQTJCLENBQUMsRUFDbEQsR0FBRzs7O1FBQUM7WUFDRixLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSxpQ0FBaUMsRUFBRSxFQUMxQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFNQyxDQUFDOztnQkFoRUwsVUFBVTs7OztnQkFYRixPQUFPO2dCQUlQLHVCQUF1QjtnQkFHOUIsb0JBQW9COztJQU9wQjtRQURDLE1BQU0sRUFBRTswQ0FDWSxVQUFVO3NFQXVCN0I7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDVSxVQUFVO29FQWtCM0I7SUFHRjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7K0ZBUzFCO0lBT0osNEJBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQWhFWSxxQkFBcUI7OztJQUNoQyxvREF3QkU7O0lBRUYsa0RBbUJFOztJQUVGLDZFQVNFOzs7OztJQUdBLHlDQUF5Qjs7Ozs7SUFDekIsd0RBQXdEOzs7OztJQUN4RCxxREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVycm9yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5jb25uZWN0b3InO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJldmlld3NFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRQcm9kdWN0UmV2aWV3cyQ6IE9ic2VydmFibGU8XG4gICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NTdWNjZXNzXG4gICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVF9SRVZJRVdTKSxcbiAgICBtYXAoKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZXZpZXdzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocHJvZHVjdENvZGUgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFJldmlld3NDb25uZWN0b3IuZ2V0KHByb2R1Y3RDb2RlKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NTdWNjZXNzKHtcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgbGlzdDogZGF0YSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoX2Vycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZXZpZXdzRmFpbCh7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgfSBhcyBFcnJvck1vZGVsKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBwb3N0UHJvZHVjdFJldmlldzogT2JzZXJ2YWJsZTxcbiAgICB8IFByb2R1Y3RBY3Rpb25zLlBvc3RQcm9kdWN0UmV2aWV3U3VjY2Vzc1xuICAgIHwgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLlBPU1RfUFJPRFVDVF9SRVZJRVcpLFxuICAgIG1hcCgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlldykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFJldmlld3NDb25uZWN0b3JcbiAgICAgICAgLmFkZChwYXlsb2FkLnByb2R1Y3RDb2RlLCBwYXlsb2FkLnJldmlldylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHJldmlld1Jlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdTdWNjZXNzKHJldmlld1Jlc3BvbnNlKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKF9lcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IFByb2R1Y3RBY3Rpb25zLlBvc3RQcm9kdWN0UmV2aWV3RmFpbChwYXlsb2FkLnByb2R1Y3RDb2RlKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25Qb3N0UHJvZHVjdFJldmlld1N1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5QT1NUX1BST0RVQ1RfUkVWSUVXX1NVQ0NFU1MpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICdwcm9kdWN0UmV2aWV3LnRoYW5rWW91Rm9yUmV2aWV3JyB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcHJvZHVjdFJldmlld3NDb25uZWN0b3I6IFByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==