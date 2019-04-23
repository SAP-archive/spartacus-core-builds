/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductReviewsAdapter } from './product-reviews.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product-reviews.adapter";
var ProductReviewsConnector = /** @class */ (function () {
    function ProductReviewsConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    ProductReviewsConnector.prototype.get = /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    function (productCode, maxCount) {
        return this.adapter.load(productCode, maxCount);
    };
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    ProductReviewsConnector.prototype.add = /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    function (productCode, review) {
        return this.adapter.post(productCode, review);
    };
    ProductReviewsConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductReviewsConnector.ctorParameters = function () { return [
        { type: ProductReviewsAdapter }
    ]; };
    /** @nocollapse */ ProductReviewsConnector.ngInjectableDef = i0.defineInjectable({ factory: function ProductReviewsConnector_Factory() { return new ProductReviewsConnector(i0.inject(i1.ProductReviewsAdapter)); }, token: ProductReviewsConnector, providedIn: "root" });
    return ProductReviewsConnector;
}());
export { ProductReviewsConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductReviewsConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2Nvbm5lY3RvcnMvcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFFbEU7SUFJRSxpQ0FBc0IsT0FBOEI7UUFBOUIsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7SUFBRyxDQUFDOzs7Ozs7SUFFeEQscUNBQUc7Ozs7O0lBQUgsVUFBSSxXQUFtQixFQUFFLFFBQWlCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVELHFDQUFHOzs7OztJQUFILFVBQUksV0FBbUIsRUFBRSxNQUFXO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEscUJBQXFCOzs7a0NBSDlCO0NBa0JDLEFBYkQsSUFhQztTQVZZLHVCQUF1Qjs7Ozs7O0lBQ3RCLDBDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NBZGFwdGVyIH0gZnJvbSAnLi9wcm9kdWN0LXJldmlld3MuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3c0Nvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBQcm9kdWN0UmV2aWV3c0FkYXB0ZXIpIHt9XG5cbiAgZ2V0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIG1heENvdW50PzogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZXZpZXdbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZChwcm9kdWN0Q29kZSwgbWF4Q291bnQpO1xuICB9XG5cbiAgYWRkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHJldmlldzogYW55KTogT2JzZXJ2YWJsZTxSZXZpZXc+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnBvc3QocHJvZHVjdENvZGUsIHJldmlldyk7XG4gIH1cbn1cbiJdfQ==