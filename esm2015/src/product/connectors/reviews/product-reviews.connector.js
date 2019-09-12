/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductReviewsAdapter } from './product-reviews.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product-reviews.adapter";
export class ProductReviewsConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    get(productCode, maxCount) {
        return this.adapter.load(productCode, maxCount);
    }
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    add(productCode, review) {
        return this.adapter.post(productCode, review);
    }
}
ProductReviewsConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductReviewsConnector.ctorParameters = () => [
    { type: ProductReviewsAdapter }
];
/** @nocollapse */ ProductReviewsConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductReviewsConnector_Factory() { return new ProductReviewsConnector(i0.ɵɵinject(i1.ProductReviewsAdapter)); }, token: ProductReviewsConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductReviewsConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2Nvbm5lY3RvcnMvcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFNbEUsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUNsQyxZQUFzQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtJQUFHLENBQUM7Ozs7OztJQUV4RCxHQUFHLENBQUMsV0FBbUIsRUFBRSxRQUFpQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsV0FBbUIsRUFBRSxNQUFXO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLHFCQUFxQjs7Ozs7Ozs7SUFPaEIsMENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NBZGFwdGVyIH0gZnJvbSAnLi9wcm9kdWN0LXJldmlld3MuYWRhcHRlcic7XG5pbXBvcnQgeyBSZXZpZXcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZXZpZXdzQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFByb2R1Y3RSZXZpZXdzQWRhcHRlcikge31cblxuICBnZXQocHJvZHVjdENvZGU6IHN0cmluZywgbWF4Q291bnQ/OiBudW1iZXIpOiBPYnNlcnZhYmxlPFJldmlld1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkKHByb2R1Y3RDb2RlLCBtYXhDb3VudCk7XG4gIH1cblxuICBhZGQocHJvZHVjdENvZGU6IHN0cmluZywgcmV2aWV3OiBhbnkpOiBPYnNlcnZhYmxlPFJldmlldz4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIucG9zdChwcm9kdWN0Q29kZSwgcmV2aWV3KTtcbiAgfVxufVxuIl19