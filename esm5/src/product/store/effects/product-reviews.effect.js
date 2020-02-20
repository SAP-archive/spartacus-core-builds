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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZXZpZXdzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDN0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0sK0JBQStCLENBQUM7QUFHdkM7SUEyREUsK0JBQ1UsUUFBaUIsRUFDakIsdUJBQWdELEVBQ2hELG9CQUEwQztRQUhwRCxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBNURwRCx3QkFBbUIsR0FHZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUMzQyxHQUFHLENBQUMsVUFBQyxNQUF5QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDbEUsUUFBUSxDQUFDLFVBQUEsV0FBVztZQUNsQixPQUFPLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN2RCxHQUFHLENBQUMsVUFBQSxJQUFJO2dCQUNOLE9BQU8sSUFBSSxjQUFjLENBQUMseUJBQXlCLENBQUM7b0JBQ2xELFdBQVcsYUFBQTtvQkFDWCxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxNQUFNO2dCQUNmLE9BQUEsRUFBRSxDQUNBLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDO29CQUN4QyxPQUFPLEVBQUUsV0FBVztpQkFDUCxDQUFDLENBQ2pCO1lBSkQsQ0FJQyxDQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixzQkFBaUIsR0FHYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUMxQyxHQUFHLENBQUMsVUFBQyxNQUF3QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDakUsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQU8sS0FBSSxDQUFDLHVCQUF1QjtpQkFDaEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDeEMsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLGNBQWM7Z0JBQ2hCLE9BQU8sSUFBSSxjQUFjLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDckUsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsTUFBTTtnQkFDZixPQUFBLEVBQUUsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFBakUsQ0FBaUUsQ0FDbEUsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUdGLGlEQUE0QyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMvRCxNQUFNLENBQUMsY0FBYyxDQUFDLDJCQUEyQixDQUFDLEVBQ2xELEdBQUcsQ0FBQztZQUNGLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLGlDQUFpQyxFQUFFLEVBQzFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQU1DLENBQUM7O2dCQUhnQixPQUFPO2dCQUNRLHVCQUF1QjtnQkFDMUIsb0JBQW9COztJQTVEcEQ7UUFEQyxNQUFNLEVBQUU7c0VBd0JQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7b0VBbUJQO0lBR0Y7UUFEQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7K0ZBUzFCO0lBekRTLHFCQUFxQjtRQURqQyxVQUFVLEVBQUU7T0FDQSxxQkFBcUIsQ0FnRWpDO0lBQUQsNEJBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQWhFWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVycm9yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5jb25uZWN0b3InO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJldmlld3NFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRQcm9kdWN0UmV2aWV3cyQ6IE9ic2VydmFibGU8XG4gICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NTdWNjZXNzXG4gICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVF9SRVZJRVdTKSxcbiAgICBtYXAoKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZXZpZXdzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocHJvZHVjdENvZGUgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFJldmlld3NDb25uZWN0b3IuZ2V0KHByb2R1Y3RDb2RlKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NTdWNjZXNzKHtcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgbGlzdDogZGF0YSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoX2Vycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZXZpZXdzRmFpbCh7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgfSBhcyBFcnJvck1vZGVsKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBwb3N0UHJvZHVjdFJldmlldzogT2JzZXJ2YWJsZTxcbiAgICB8IFByb2R1Y3RBY3Rpb25zLlBvc3RQcm9kdWN0UmV2aWV3U3VjY2Vzc1xuICAgIHwgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFByb2R1Y3RBY3Rpb25zLlBPU1RfUFJPRFVDVF9SRVZJRVcpLFxuICAgIG1hcCgoYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlldykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFJldmlld3NDb25uZWN0b3JcbiAgICAgICAgLmFkZChwYXlsb2FkLnByb2R1Y3RDb2RlLCBwYXlsb2FkLnJldmlldylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHJldmlld1Jlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdTdWNjZXNzKHJldmlld1Jlc3BvbnNlKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKF9lcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IFByb2R1Y3RBY3Rpb25zLlBvc3RQcm9kdWN0UmV2aWV3RmFpbChwYXlsb2FkLnByb2R1Y3RDb2RlKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25Qb3N0UHJvZHVjdFJldmlld1N1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5QT1NUX1BST0RVQ1RfUkVWSUVXX1NVQ0NFU1MpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICdwcm9kdWN0UmV2aWV3LnRoYW5rWW91Rm9yUmV2aWV3JyB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcHJvZHVjdFJldmlld3NDb25uZWN0b3I6IFByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==