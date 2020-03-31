import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
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
        this.loadProductReviews$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT_REVIEWS), map(function (action) { return action.payload; }), mergeMap(function (productCode) {
            return _this.productReviewsConnector.get(productCode).pipe(map(function (data) {
                return new ProductActions.LoadProductReviewsSuccess({
                    productCode: productCode,
                    list: data,
                });
            }), catchError(function (_error) {
                return of(new ProductActions.LoadProductReviewsFail({
                    message: productCode,
                }));
            }));
        }));
        this.postProductReview = this.actions$.pipe(ofType(ProductActions.POST_PRODUCT_REVIEW), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.productReviewsConnector
                .add(payload.productCode, payload.review)
                .pipe(map(function (reviewResponse) {
                return new ProductActions.PostProductReviewSuccess(reviewResponse);
            }), catchError(function (_error) {
                return of(new ProductActions.PostProductReviewFail(payload.productCode));
            }));
        }));
        this.showGlobalMessageOnPostProductReviewSuccess$ = this.actions$.pipe(ofType(ProductActions.POST_PRODUCT_REVIEW_SUCCESS), tap(function () {
            _this.globalMessageService.add({ key: 'productReview.thankYouForReview' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }));
    }
    ProductReviewsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductReviewsConnector },
        { type: GlobalMessageService }
    ]; };
    __decorate([
        Effect()
    ], ProductReviewsEffects.prototype, "loadProductReviews$", void 0);
    __decorate([
        Effect()
    ], ProductReviewsEffects.prototype, "postProductReview", void 0);
    __decorate([
        Effect({ dispatch: false })
    ], ProductReviewsEffects.prototype, "showGlobalMessageOnPostProductReviewSuccess$", void 0);
    ProductReviewsEffects = __decorate([
        Injectable()
    ], ProductReviewsEffects);
    return ProductReviewsEffects;
}());
export { ProductReviewsEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZXZpZXdzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDN0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0sK0JBQStCLENBQUM7QUFHdkM7SUEyREUsK0JBQ1UsUUFBaUIsRUFDakIsdUJBQWdELEVBQ2hELG9CQUEwQztRQUhwRCxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBNURwRCx3QkFBbUIsR0FHZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUMzQyxHQUFHLENBQUMsVUFBQyxNQUF5QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDbEUsUUFBUSxDQUFDLFVBQUMsV0FBVztZQUNuQixPQUFPLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN2RCxHQUFHLENBQUMsVUFBQyxJQUFJO2dCQUNQLE9BQU8sSUFBSSxjQUFjLENBQUMseUJBQXlCLENBQUM7b0JBQ2xELFdBQVcsYUFBQTtvQkFDWCxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQyxNQUFNO2dCQUNoQixPQUFBLEVBQUUsQ0FDQSxJQUFJLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLFdBQVc7aUJBQ1AsQ0FBQyxDQUNqQjtZQUpELENBSUMsQ0FDRixDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0Ysc0JBQWlCLEdBR2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsRUFDMUMsR0FBRyxDQUFDLFVBQUMsTUFBd0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ2pFLFFBQVEsQ0FBQyxVQUFDLE9BQU87WUFDZixPQUFPLEtBQUksQ0FBQyx1QkFBdUI7aUJBQ2hDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQ3hDLElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxjQUFjO2dCQUNqQixPQUFPLElBQUksY0FBYyxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JFLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFDLE1BQU07Z0JBQ2hCLE9BQUEsRUFBRSxDQUFDLElBQUksY0FBYyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUFqRSxDQUFpRSxDQUNsRSxDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0YsaURBQTRDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9ELE1BQU0sQ0FBQyxjQUFjLENBQUMsMkJBQTJCLENBQUMsRUFDbEQsR0FBRyxDQUFDO1lBQ0YsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsaUNBQWlDLEVBQUUsRUFDMUMsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7Z0JBSGdCLE9BQU87Z0JBQ1EsdUJBQXVCO2dCQUMxQixvQkFBb0I7O0lBNURwRDtRQURDLE1BQU0sRUFBRTtzRUF3QlA7SUFHRjtRQURDLE1BQU0sRUFBRTtvRUFtQlA7SUFHRjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzsrRkFTMUI7SUF6RFMscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQixDQWdFakM7SUFBRCw0QkFBQztDQUFBLEFBaEVELElBZ0VDO1NBaEVZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3Jldmlld3MvcHJvZHVjdC1yZXZpZXdzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3c0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFByb2R1Y3RSZXZpZXdzJDogT2JzZXJ2YWJsZTxcbiAgICB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c1N1Y2Nlc3NcbiAgICB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUX1JFVklFV1MpLFxuICAgIG1hcCgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocHJvZHVjdENvZGUpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yLmdldChwcm9kdWN0Q29kZSkucGlwZShcbiAgICAgICAgbWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NTdWNjZXNzKHtcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgbGlzdDogZGF0YSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKF9lcnJvcikgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NGYWlsKHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogcHJvZHVjdENvZGUsXG4gICAgICAgICAgICB9IGFzIEVycm9yTW9kZWwpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHBvc3RQcm9kdWN0UmV2aWV3OiBPYnNlcnZhYmxlPFxuICAgIHwgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdTdWNjZXNzXG4gICAgfCBQcm9kdWN0QWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuUE9TVF9QUk9EVUNUX1JFVklFVyksXG4gICAgbWFwKChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLlBvc3RQcm9kdWN0UmV2aWV3KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yXG4gICAgICAgIC5hZGQocGF5bG9hZC5wcm9kdWN0Q29kZSwgcGF5bG9hZC5yZXZpZXcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmV2aWV3UmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdTdWNjZXNzKHJldmlld1Jlc3BvbnNlKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChfZXJyb3IpID0+XG4gICAgICAgICAgICBvZihuZXcgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdGYWlsKHBheWxvYWQucHJvZHVjdENvZGUpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgc2hvd0dsb2JhbE1lc3NhZ2VPblBvc3RQcm9kdWN0UmV2aWV3U3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLlBPU1RfUFJPRFVDVF9SRVZJRVdfU1VDQ0VTUyksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ3Byb2R1Y3RSZXZpZXcudGhhbmtZb3VGb3JSZXZpZXcnIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0UmV2aWV3c0Nvbm5lY3RvcjogUHJvZHVjdFJldmlld3NDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxufVxuIl19