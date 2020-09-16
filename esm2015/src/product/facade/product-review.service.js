import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class ProductReviewService {
    constructor(store) {
        this.store = store;
    }
    getByProductCode(productCode) {
        return this.store.pipe(select(ProductSelectors.getSelectedProductReviewsFactory(productCode)), tap((reviews) => {
            if (reviews === undefined && productCode !== undefined) {
                this.store.dispatch(new ProductActions.LoadProductReviews(productCode));
            }
        }));
    }
    add(productCode, review) {
        this.store.dispatch(new ProductActions.PostProductReview({
            productCode: productCode,
            review,
        }));
    }
}
ProductReviewService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductReviewService_Factory() { return new ProductReviewService(i0.ɵɵinject(i1.Store)); }, token: ProductReviewService, providedIn: "root" });
ProductReviewService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProductReviewService.ctorParameters = () => [
    { type: Store }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3QtcmV2aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLNUQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFzQixLQUE4QjtRQUE5QixVQUFLLEdBQUwsS0FBSyxDQUF5QjtJQUFHLENBQUM7SUFFeEQsZ0JBQWdCLENBQUMsV0FBbUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQ3RFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2QsSUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FDbkQsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxHQUFHLENBQUMsV0FBbUIsRUFBRSxNQUFjO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztZQUNuQyxXQUFXLEVBQUUsV0FBVztZQUN4QixNQUFNO1NBQ1AsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O1lBMUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVmdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3N0b3JlL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4pIHt9XG5cbiAgZ2V0QnlQcm9kdWN0Q29kZShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXZpZXdbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RSZXZpZXdzRmFjdG9yeShwcm9kdWN0Q29kZSkpLFxuICAgICAgdGFwKChyZXZpZXdzKSA9PiB7XG4gICAgICAgIGlmIChyZXZpZXdzID09PSB1bmRlZmluZWQgJiYgcHJvZHVjdENvZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZXZpZXdzKHByb2R1Y3RDb2RlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFkZChwcm9kdWN0Q29kZTogc3RyaW5nLCByZXZpZXc6IFJldmlldyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXcoe1xuICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdENvZGUsXG4gICAgICAgIHJldmlldyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19