/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductReviewsConnector } from '../../connectors/reviews/product-reviews.connector';
import * as productReviewsActions from './../actions/product-reviews.action';
export class ProductReviewsEffects {
    /**
     * @param {?} actions$
     * @param {?} productReviewsConnector
     */
    constructor(actions$, productReviewsConnector) {
        this.actions$ = actions$;
        this.productReviewsConnector = productReviewsConnector;
        this.loadProductReviews$ = this.actions$.pipe(ofType(productReviewsActions.LOAD_PRODUCT_REVIEWS), map((action) => action.payload), mergeMap(productCode => {
            return this.productReviewsConnector.get(productCode).pipe(map(data => {
                return new productReviewsActions.LoadProductReviewsSuccess({
                    productCode,
                    list: data,
                });
            }), catchError(_error => of(new productReviewsActions.LoadProductReviewsFail((/** @type {?} */ ({
                message: productCode,
            }))))));
        }));
        this.postProductReview = this.actions$.pipe(ofType(productReviewsActions.POST_PRODUCT_REVIEW), map((action) => action.payload), mergeMap(payload => {
            return this.productReviewsConnector
                .add(payload.productCode, payload.review)
                .pipe(map(reviewResponse => {
                return new productReviewsActions.PostProductReviewSuccess(reviewResponse);
            }), catchError(_error => of(new productReviewsActions.PostProductReviewFail(payload.productCode))));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZXZpZXdzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUk3RSxNQUFNLE9BQU8scUJBQXFCOzs7OztJQXNEaEMsWUFDVSxRQUFpQixFQUNqQix1QkFBZ0Q7UUFEaEQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBdEQxRCx3QkFBbUIsR0FHZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLEVBQ2xELEdBQUcsQ0FBQyxDQUFDLE1BQWdELEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDekUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDVCxPQUFPLElBQUkscUJBQXFCLENBQUMseUJBQXlCLENBQUM7b0JBQ3pELFdBQVc7b0JBQ1gsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQ2xCLEVBQUUsQ0FDQSxJQUFJLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLG1CQUFBO2dCQUMvQyxPQUFPLEVBQUUsV0FBVzthQUNyQixFQUFjLENBQUMsQ0FDakIsQ0FDRixDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0Ysc0JBQWlCLEdBR2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxFQUNqRCxHQUFHLENBQUMsQ0FBQyxNQUErQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ3hFLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyx1QkFBdUI7aUJBQ2hDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQ3hDLElBQUksQ0FDSCxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FDdkQsY0FBYyxDQUNmLENBQUM7WUFDSixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDbEIsRUFBRSxDQUNBLElBQUkscUJBQXFCLENBQUMscUJBQXFCLENBQzdDLE9BQU8sQ0FBQyxXQUFXLENBQ3BCLENBQ0YsQ0FDRixDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBMURMLFVBQVU7Ozs7WUFQRixPQUFPO1lBR1AsdUJBQXVCOztBQU85QjtJQURDLE1BQU0sRUFBRTtzQ0FDWSxVQUFVO2tFQXVCN0I7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDVSxVQUFVO2dFQXdCM0I7OztJQW5ERixvREF3QkU7O0lBRUYsa0RBeUJFOzs7OztJQUdBLHlDQUF5Qjs7Ozs7SUFDekIsd0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3Jldmlld3MvcHJvZHVjdC1yZXZpZXdzLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBwcm9kdWN0UmV2aWV3c0FjdGlvbnMgZnJvbSAnLi8uLi9hY3Rpb25zL3Byb2R1Y3QtcmV2aWV3cy5hY3Rpb24nO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJldmlld3NFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRQcm9kdWN0UmV2aWV3cyQ6IE9ic2VydmFibGU8XG4gICAgfCBwcm9kdWN0UmV2aWV3c0FjdGlvbnMuTG9hZFByb2R1Y3RSZXZpZXdzU3VjY2Vzc1xuICAgIHwgcHJvZHVjdFJldmlld3NBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUocHJvZHVjdFJldmlld3NBY3Rpb25zLkxPQURfUFJPRFVDVF9SRVZJRVdTKSxcbiAgICBtYXAoKGFjdGlvbjogcHJvZHVjdFJldmlld3NBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3cykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHByb2R1Y3RDb2RlID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yLmdldChwcm9kdWN0Q29kZSkucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgcHJvZHVjdFJldmlld3NBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c1N1Y2Nlc3Moe1xuICAgICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgICBsaXN0OiBkYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihfZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBwcm9kdWN0UmV2aWV3c0FjdGlvbnMuTG9hZFByb2R1Y3RSZXZpZXdzRmFpbCh7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgfSBhcyBFcnJvck1vZGVsKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBwb3N0UHJvZHVjdFJldmlldzogT2JzZXJ2YWJsZTxcbiAgICB8IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld1N1Y2Nlc3NcbiAgICB8IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUocHJvZHVjdFJldmlld3NBY3Rpb25zLlBPU1RfUFJPRFVDVF9SRVZJRVcpLFxuICAgIG1hcCgoYWN0aW9uOiBwcm9kdWN0UmV2aWV3c0FjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXcpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yXG4gICAgICAgIC5hZGQocGF5bG9hZC5wcm9kdWN0Q29kZSwgcGF5bG9hZC5yZXZpZXcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChyZXZpZXdSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld1N1Y2Nlc3MoXG4gICAgICAgICAgICAgIHJldmlld1Jlc3BvbnNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoX2Vycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld0ZhaWwoXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5wcm9kdWN0Q29kZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yOiBQcm9kdWN0UmV2aWV3c0Nvbm5lY3RvclxuICApIHt9XG59XG4iXX0=