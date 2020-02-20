import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ProductReviewsAdapter } from './product-reviews.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product-reviews.adapter";
let ProductReviewsConnector = class ProductReviewsConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    get(productCode, maxCount) {
        return this.adapter.load(productCode, maxCount);
    }
    add(productCode, review) {
        return this.adapter.post(productCode, review);
    }
};
ProductReviewsConnector.ctorParameters = () => [
    { type: ProductReviewsAdapter }
];
ProductReviewsConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductReviewsConnector_Factory() { return new ProductReviewsConnector(i0.ɵɵinject(i1.ProductReviewsAdapter)); }, token: ProductReviewsConnector, providedIn: "root" });
ProductReviewsConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductReviewsConnector);
export { ProductReviewsConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2Nvbm5lY3RvcnMvcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFNbEUsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFDbEMsWUFBc0IsT0FBOEI7UUFBOUIsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7SUFBRyxDQUFDO0lBRXhELEdBQUcsQ0FBQyxXQUFtQixFQUFFLFFBQWlCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxHQUFHLENBQUMsV0FBbUIsRUFBRSxNQUFXO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRixDQUFBOztZQVRnQyxxQkFBcUI7OztBQUR6Qyx1QkFBdUI7SUFIbkMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHVCQUF1QixDQVVuQztTQVZZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQWRhcHRlciB9IGZyb20gJy4vcHJvZHVjdC1yZXZpZXdzLmFkYXB0ZXInO1xuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3c0Nvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBQcm9kdWN0UmV2aWV3c0FkYXB0ZXIpIHt9XG5cbiAgZ2V0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIG1heENvdW50PzogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZXZpZXdbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZChwcm9kdWN0Q29kZSwgbWF4Q291bnQpO1xuICB9XG5cbiAgYWRkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHJldmlldzogYW55KTogT2JzZXJ2YWJsZTxSZXZpZXc+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnBvc3QocHJvZHVjdENvZGUsIHJldmlldyk7XG4gIH1cbn1cbiJdfQ==