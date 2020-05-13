import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
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
    ProductReviewService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductReviewService_Factory() { return new ProductReviewService(i0.ɵɵinject(i1.Store)); }, token: ProductReviewService, providedIn: "root" });
    ProductReviewService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ProductReviewService);
    return ProductReviewService;
}());
export { ProductReviewService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXJldmlldy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUs1RDtJQUNFLDhCQUFzQixLQUE4QjtRQUE5QixVQUFLLEdBQUwsS0FBSyxDQUF5QjtJQUFHLENBQUM7SUFFeEQsK0NBQWdCLEdBQWhCLFVBQWlCLFdBQW1CO1FBQXBDLGlCQVdDO1FBVkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQ3RFLEdBQUcsQ0FBQyxVQUFDLE9BQU87WUFDVixJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtnQkFDdEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksY0FBYyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUNuRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELGtDQUFHLEdBQUgsVUFBSSxXQUFtQixFQUFFLE1BQWM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksY0FBYyxDQUFDLGlCQUFpQixDQUFDO1lBQ25DLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLE1BQU0sUUFBQTtTQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBdEI0QixLQUFLOzs7SUFEdkIsb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxvQkFBb0IsQ0F3QmhDOytCQXBDRDtDQW9DQyxBQXhCRCxJQXdCQztTQXhCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3N0b3JlL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4pIHt9XG5cbiAgZ2V0QnlQcm9kdWN0Q29kZShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXZpZXdbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RSZXZpZXdzRmFjdG9yeShwcm9kdWN0Q29kZSkpLFxuICAgICAgdGFwKChyZXZpZXdzKSA9PiB7XG4gICAgICAgIGlmIChyZXZpZXdzID09PSB1bmRlZmluZWQgJiYgcHJvZHVjdENvZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZXZpZXdzKHByb2R1Y3RDb2RlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFkZChwcm9kdWN0Q29kZTogc3RyaW5nLCByZXZpZXc6IFJldmlldyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXcoe1xuICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdENvZGUsXG4gICAgICAgIHJldmlldyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19