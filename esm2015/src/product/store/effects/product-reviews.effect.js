/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductReviewsConnector } from '../../connectors/reviews/product-reviews.connector';
import { ProductActions } from '../actions/index';
export class ProductReviewsEffects {
    /**
     * @param {?} actions$
     * @param {?} productReviewsConnector
     */
    constructor(actions$, productReviewsConnector) {
        this.actions$ = actions$;
        this.productReviewsConnector = productReviewsConnector;
        this.loadProductReviews$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT_REVIEWS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} productCode
         * @return {?}
         */
        productCode => {
            return this.productReviewsConnector.get(productCode).pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                return new ProductActions.LoadProductReviewsSuccess({
                    productCode,
                    list: data,
                });
            })), catchError((/**
             * @param {?} _error
             * @return {?}
             */
            _error => of(new ProductActions.LoadProductReviewsFail((/** @type {?} */ ({
                message: productCode,
            })))))));
        })));
        this.postProductReview = this.actions$.pipe(ofType(ProductActions.POST_PRODUCT_REVIEW), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.productReviewsConnector
                .add(payload.productCode, payload.review)
                .pipe(map((/**
             * @param {?} reviewResponse
             * @return {?}
             */
            reviewResponse => {
                return new ProductActions.PostProductReviewSuccess(reviewResponse);
            })), catchError((/**
             * @param {?} _error
             * @return {?}
             */
            _error => of(new ProductActions.PostProductReviewFail(payload.productCode)))));
        })));
    }
}
ProductReviewsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductReviewsEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductReviewsConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ProductReviewsEffects.prototype, "loadProductReviews$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ProductReviewsEffects.prototype, "postProductReview", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZXZpZXdzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdsRCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQWdEaEMsWUFDVSxRQUFpQixFQUNqQix1QkFBZ0Q7UUFEaEQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBaEQxRCx3QkFBbUIsR0FHZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUMzQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUF5QyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ2xFLFFBQVE7Ozs7UUFBQyxXQUFXLENBQUMsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN2RCxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxJQUFJLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDbEQsV0FBVztvQkFDWCxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDbEIsRUFBRSxDQUNBLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDLG1CQUFBO2dCQUN4QyxPQUFPLEVBQUUsV0FBVzthQUNyQixFQUFjLENBQUMsQ0FDakIsRUFDRixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0Ysc0JBQWlCLEdBR2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsRUFDMUMsR0FBRzs7OztRQUFDLENBQUMsTUFBd0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUNqRSxRQUFROzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsdUJBQXVCO2lCQUNoQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO2lCQUN4QyxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNuQixPQUFPLElBQUksY0FBYyxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JFLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRSxDQUNsQixFQUFFLENBQUMsSUFBSSxjQUFjLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQ2xFLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUFwREwsVUFBVTs7OztZQVBGLE9BQU87WUFJUCx1QkFBdUI7O0FBTTlCO0lBREMsTUFBTSxFQUFFO3NDQUNZLFVBQVU7a0VBdUI3QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNVLFVBQVU7Z0VBa0IzQjs7O0lBN0NGLG9EQXdCRTs7SUFFRixrREFtQkU7Ozs7O0lBR0EseUNBQXlCOzs7OztJQUN6Qix3REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFcnJvck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3c0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29ubmVjdG9yJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3c0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFByb2R1Y3RSZXZpZXdzJDogT2JzZXJ2YWJsZTxcbiAgICB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c1N1Y2Nlc3NcbiAgICB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX1JFVklFV1MpLFxuICAgIG1hcCgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwcm9kdWN0Q29kZSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0UmV2aWV3c0Nvbm5lY3Rvci5nZXQocHJvZHVjdENvZGUpLnBpcGUoXG4gICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c1N1Y2Nlc3Moe1xuICAgICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgICBsaXN0OiBkYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihfZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NGYWlsKHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogcHJvZHVjdENvZGUsXG4gICAgICAgICAgICB9IGFzIEVycm9yTW9kZWwpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHBvc3RQcm9kdWN0UmV2aWV3OiBPYnNlcnZhYmxlPFxuICAgIHwgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdTdWNjZXNzXG4gICAgfCBQcm9kdWN0QWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuUE9TVF9QUk9EVUNUX1JFVklFVyksXG4gICAgbWFwKChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLlBvc3RQcm9kdWN0UmV2aWV3KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0UmV2aWV3c0Nvbm5lY3RvclxuICAgICAgICAuYWRkKHBheWxvYWQucHJvZHVjdENvZGUsIHBheWxvYWQucmV2aWV3KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAocmV2aWV3UmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld1N1Y2Nlc3MocmV2aWV3UmVzcG9uc2UpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoX2Vycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdGYWlsKHBheWxvYWQucHJvZHVjdENvZGUpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0UmV2aWV3c0Nvbm5lY3RvcjogUHJvZHVjdFJldmlld3NDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19