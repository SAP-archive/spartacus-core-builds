import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ProductReviewsAdapter } from './product-reviews.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product-reviews.adapter";
var ProductReviewsConnector = /** @class */ (function () {
    function ProductReviewsConnector(adapter) {
        this.adapter = adapter;
    }
    ProductReviewsConnector.prototype.get = function (productCode, maxCount) {
        return this.adapter.load(productCode, maxCount);
    };
    ProductReviewsConnector.prototype.add = function (productCode, review) {
        return this.adapter.post(productCode, review);
    };
    ProductReviewsConnector.ctorParameters = function () { return [
        { type: ProductReviewsAdapter }
    ]; };
    ProductReviewsConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductReviewsConnector_Factory() { return new ProductReviewsConnector(i0.ɵɵinject(i1.ProductReviewsAdapter)); }, token: ProductReviewsConnector, providedIn: "root" });
    ProductReviewsConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ProductReviewsConnector);
    return ProductReviewsConnector;
}());
export { ProductReviewsConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2Nvbm5lY3RvcnMvcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFNbEU7SUFDRSxpQ0FBc0IsT0FBOEI7UUFBOUIsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7SUFBRyxDQUFDO0lBRXhELHFDQUFHLEdBQUgsVUFBSSxXQUFtQixFQUFFLFFBQWlCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxxQ0FBRyxHQUFILFVBQUksV0FBbUIsRUFBRSxNQUFXO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQVI4QixxQkFBcUI7OztJQUR6Qyx1QkFBdUI7UUFIbkMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHVCQUF1QixDQVVuQztrQ0FsQkQ7Q0FrQkMsQUFWRCxJQVVDO1NBVlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NBZGFwdGVyIH0gZnJvbSAnLi9wcm9kdWN0LXJldmlld3MuYWRhcHRlcic7XG5pbXBvcnQgeyBSZXZpZXcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFByb2R1Y3RSZXZpZXdzQWRhcHRlcikge31cblxuICBnZXQocHJvZHVjdENvZGU6IHN0cmluZywgbWF4Q291bnQ/OiBudW1iZXIpOiBPYnNlcnZhYmxlPFJldmlld1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkKHByb2R1Y3RDb2RlLCBtYXhDb3VudCk7XG4gIH1cblxuICBhZGQocHJvZHVjdENvZGU6IHN0cmluZywgcmV2aWV3OiBhbnkpOiBPYnNlcnZhYmxlPFJldmlldz4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIucG9zdChwcm9kdWN0Q29kZSwgcmV2aWV3KTtcbiAgfVxufVxuIl19