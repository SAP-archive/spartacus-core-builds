/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as productReviewsActions from './../actions/product-reviews.action';
import { ProductReviewsLoaderService } from '../../occ/product-reviews.service';
export class ProductReviewsEffects {
    /**
     * @param {?} actions$
     * @param {?} occProductReviewsService
     */
    constructor(actions$, occProductReviewsService) {
        this.actions$ = actions$;
        this.occProductReviewsService = occProductReviewsService;
        this.loadProductReviews$ = this.actions$.pipe(ofType(productReviewsActions.LOAD_PRODUCT_REVIEWS), map((action) => action.payload), mergeMap(productCode => {
            return this.occProductReviewsService.load(productCode).pipe(map(data => {
                return new productReviewsActions.LoadProductReviewsSuccess({
                    productCode,
                    list: data.reviews,
                });
            }), catchError(_error => of(new productReviewsActions.LoadProductReviewsFail((/** @type {?} */ ({
                message: productCode,
            }))))));
        }));
        this.postProductReview = this.actions$.pipe(ofType(productReviewsActions.POST_PRODUCT_REVIEW), map((action) => action.payload), mergeMap(payload => {
            return this.occProductReviewsService
                .post(payload.productCode, payload.review)
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
    { type: ProductReviewsLoaderService }
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
    ProductReviewsEffects.prototype.occProductReviewsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZXZpZXdzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sS0FBSyxxQkFBcUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdoRixNQUFNLE9BQU8scUJBQXFCOzs7OztJQXNEaEMsWUFDVSxRQUFpQixFQUNqQix3QkFBcUQ7UUFEckQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTZCO1FBdEQvRCx3QkFBbUIsR0FHZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLEVBQ2xELEdBQUcsQ0FBQyxDQUFDLE1BQWdELEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDekUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3pELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDVCxPQUFPLElBQUkscUJBQXFCLENBQUMseUJBQXlCLENBQUM7b0JBQ3pELFdBQVc7b0JBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUNuQixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDbEIsRUFBRSxDQUNBLElBQUkscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsbUJBQUE7Z0JBQy9DLE9BQU8sRUFBRSxXQUFXO2FBQ3JCLEVBQWMsQ0FBQyxDQUNqQixDQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixzQkFBaUIsR0FHYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEVBQ2pELEdBQUcsQ0FBQyxDQUFDLE1BQStDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDeEUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QjtpQkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDekMsSUFBSSxDQUNILEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxJQUFJLHFCQUFxQixDQUFDLHdCQUF3QixDQUN2RCxjQUFjLENBQ2YsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUNsQixFQUFFLENBQ0EsSUFBSSxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FDN0MsT0FBTyxDQUFDLFdBQVcsQ0FDcEIsQ0FDRixDQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUExREwsVUFBVTs7OztZQVRGLE9BQU87WUFPUCwyQkFBMkI7O0FBS2xDO0lBREMsTUFBTSxFQUFFO3NDQUNZLFVBQVU7a0VBdUI3QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNVLFVBQVU7Z0VBd0IzQjs7O0lBbkRGLG9EQXdCRTs7SUFFRixrREF5QkU7Ozs7O0lBR0EseUNBQXlCOzs7OztJQUN6Qix5REFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIG1lcmdlTWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBwcm9kdWN0UmV2aWV3c0FjdGlvbnMgZnJvbSAnLi8uLi9hY3Rpb25zL3Byb2R1Y3QtcmV2aWV3cy5hY3Rpb24nO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3Byb2R1Y3QtcmV2aWV3cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZXZpZXdzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkUHJvZHVjdFJldmlld3MkOiBPYnNlcnZhYmxlPFxuICAgIHwgcHJvZHVjdFJldmlld3NBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c1N1Y2Nlc3NcbiAgICB8IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5MT0FEX1BST0RVQ1RfUkVWSUVXUyksXG4gICAgbWFwKChhY3Rpb246IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwcm9kdWN0Q29kZSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NQcm9kdWN0UmV2aWV3c1NlcnZpY2UubG9hZChwcm9kdWN0Q29kZSkucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgcHJvZHVjdFJldmlld3NBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c1N1Y2Nlc3Moe1xuICAgICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgICBsaXN0OiBkYXRhLnJldmlld3MsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKF9lcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NGYWlsKHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogcHJvZHVjdENvZGUsXG4gICAgICAgICAgICB9IGFzIEVycm9yTW9kZWwpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHBvc3RQcm9kdWN0UmV2aWV3OiBPYnNlcnZhYmxlPFxuICAgIHwgcHJvZHVjdFJldmlld3NBY3Rpb25zLlBvc3RQcm9kdWN0UmV2aWV3U3VjY2Vzc1xuICAgIHwgcHJvZHVjdFJldmlld3NBY3Rpb25zLlBvc3RQcm9kdWN0UmV2aWV3RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShwcm9kdWN0UmV2aWV3c0FjdGlvbnMuUE9TVF9QUk9EVUNUX1JFVklFVyksXG4gICAgbWFwKChhY3Rpb246IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlldykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjUHJvZHVjdFJldmlld3NTZXJ2aWNlXG4gICAgICAgIC5wb3N0KHBheWxvYWQucHJvZHVjdENvZGUsIHBheWxvYWQucmV2aWV3KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAocmV2aWV3UmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm9kdWN0UmV2aWV3c0FjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdTdWNjZXNzKFxuICAgICAgICAgICAgICByZXZpZXdSZXNwb25zZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKF9lcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBwcm9kdWN0UmV2aWV3c0FjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdGYWlsKFxuICAgICAgICAgICAgICAgIHBheWxvYWQucHJvZHVjdENvZGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvY2NQcm9kdWN0UmV2aWV3c1NlcnZpY2U6IFByb2R1Y3RSZXZpZXdzTG9hZGVyU2VydmljZVxuICApIHt9XG59XG4iXX0=