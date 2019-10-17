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
export class ProductReviewsEffects {
    /**
     * @param {?} actions$
     * @param {?} productReviewsConnector
     * @param {?} globalMessageService
     */
    constructor(actions$, productReviewsConnector, globalMessageService) {
        this.actions$ = actions$;
        this.productReviewsConnector = productReviewsConnector;
        this.globalMessageService = globalMessageService;
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
        this.showGlobalMessageOnPostProductReviewSuccess$ = this.actions$.pipe(ofType(ProductActions.POST_PRODUCT_REVIEW_SUCCESS), tap((/**
         * @return {?}
         */
        () => {
            this.globalMessageService.add({ key: 'productReview.thankYouForReview' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        })));
    }
}
ProductReviewsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductReviewsEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductReviewsConnector },
    { type: GlobalMessageService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZXZpZXdzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUd2QyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUEyRGhDLFlBQ1UsUUFBaUIsRUFDakIsdUJBQWdELEVBQ2hELG9CQUEwQztRQUYxQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQTVEcEQsd0JBQW1CLEdBR2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsRUFDM0MsR0FBRzs7OztRQUFDLENBQUMsTUFBeUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUNsRSxRQUFROzs7O1FBQUMsV0FBVyxDQUFDLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDdkQsR0FBRzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNULE9BQU8sSUFBSSxjQUFjLENBQUMseUJBQXlCLENBQUM7b0JBQ2xELFdBQVc7b0JBQ1gsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLE1BQU0sQ0FBQyxFQUFFLENBQ2xCLEVBQUUsQ0FDQSxJQUFJLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBQTtnQkFDeEMsT0FBTyxFQUFFLFdBQVc7YUFDckIsRUFBYyxDQUFDLENBQ2pCLEVBQ0YsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLHNCQUFpQixHQUdiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEVBQzFDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQXdDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDakUsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QjtpQkFDaEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDeEMsSUFBSSxDQUNILEdBQUc7Ozs7WUFBQyxjQUFjLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxJQUFJLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRSxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDbEIsRUFBRSxDQUFDLElBQUksY0FBYyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUNsRSxDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0YsaURBQTRDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9ELE1BQU0sQ0FBQyxjQUFjLENBQUMsMkJBQTJCLENBQUMsRUFDbEQsR0FBRzs7O1FBQUMsR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsaUNBQWlDLEVBQUUsRUFDMUMsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7O1lBaEVMLFVBQVU7Ozs7WUFYRixPQUFPO1lBSVAsdUJBQXVCO1lBRzlCLG9CQUFvQjs7QUFPcEI7SUFEQyxNQUFNLEVBQUU7c0NBQ1ksVUFBVTtrRUF1QjdCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ1UsVUFBVTtnRUFrQjNCO0FBR0Y7SUFEQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7OzJGQVMxQjs7O0lBeERGLG9EQXdCRTs7SUFFRixrREFtQkU7O0lBRUYsNkVBU0U7Ozs7O0lBR0EseUNBQXlCOzs7OztJQUN6Qix3REFBd0Q7Ozs7O0lBQ3hELHFEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3Jldmlld3MvcHJvZHVjdC1yZXZpZXdzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3c0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFByb2R1Y3RSZXZpZXdzJDogT2JzZXJ2YWJsZTxcbiAgICB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c1N1Y2Nlc3NcbiAgICB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX1JFVklFV1MpLFxuICAgIG1hcCgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwcm9kdWN0Q29kZSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0UmV2aWV3c0Nvbm5lY3Rvci5nZXQocHJvZHVjdENvZGUpLnBpcGUoXG4gICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c1N1Y2Nlc3Moe1xuICAgICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgICBsaXN0OiBkYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihfZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NGYWlsKHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogcHJvZHVjdENvZGUsXG4gICAgICAgICAgICB9IGFzIEVycm9yTW9kZWwpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHBvc3RQcm9kdWN0UmV2aWV3OiBPYnNlcnZhYmxlPFxuICAgIHwgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdTdWNjZXNzXG4gICAgfCBQcm9kdWN0QWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuUE9TVF9QUk9EVUNUX1JFVklFVyksXG4gICAgbWFwKChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLlBvc3RQcm9kdWN0UmV2aWV3KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0UmV2aWV3c0Nvbm5lY3RvclxuICAgICAgICAuYWRkKHBheWxvYWQucHJvZHVjdENvZGUsIHBheWxvYWQucmV2aWV3KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAocmV2aWV3UmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld1N1Y2Nlc3MocmV2aWV3UmVzcG9uc2UpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoX2Vycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdGYWlsKHBheWxvYWQucHJvZHVjdENvZGUpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgc2hvd0dsb2JhbE1lc3NhZ2VPblBvc3RQcm9kdWN0UmV2aWV3U3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLlBPU1RfUFJPRFVDVF9SRVZJRVdfU1VDQ0VTUyksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ3Byb2R1Y3RSZXZpZXcudGhhbmtZb3VGb3JSZXZpZXcnIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0UmV2aWV3c0Nvbm5lY3RvcjogUHJvZHVjdFJldmlld3NDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxufVxuIl19