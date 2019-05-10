/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
ProductReviewsAdapter = /** @class */ (function () {
    function ProductReviewsAdapter() {
    }
    return ProductReviewsAdapter;
}());
/**
 * @abstract
 */
export { ProductReviewsAdapter };
if (false) {
    /**
     * Abstract method used to load reviews for a given product.
     * Reviews can be loaded from alternative sources, as long as the structure
     * converts to the `Review[]`.
     *
     * @abstract
     * @param {?} productCode The `productCode` for given product
     * @param {?=} maxCount Maximum number of review to load
     * @return {?}
     */
    ProductReviewsAdapter.prototype.load = function (productCode, maxCount) { };
    /**
     * Abstract method used to post review for a given product.
     *
     * @abstract
     * @param {?} productCode The `productCode` for given product
     * @param {?} review Review to post
     * @return {?}
     */
    ProductReviewsAdapter.prototype.post = function (productCode, review) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9jb25uZWN0b3JzL3Jldmlld3MvcHJvZHVjdC1yZXZpZXdzLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7O0lBQUE7SUFrQkEsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQzs7Ozs7Ozs7Ozs7Ozs7OztJQVRDLDRFQUE0RTs7Ozs7Ozs7O0lBUTVFLDBFQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJvZHVjdFJldmlld3NBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgcmV2aWV3cyBmb3IgYSBnaXZlbiBwcm9kdWN0LlxuICAgKiBSZXZpZXdzIGNhbiBiZSBsb2FkZWQgZnJvbSBhbHRlcm5hdGl2ZSBzb3VyY2VzLCBhcyBsb25nIGFzIHRoZSBzdHJ1Y3R1cmVcbiAgICogY29udmVydHMgdG8gdGhlIGBSZXZpZXdbXWAuXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZSBUaGUgYHByb2R1Y3RDb2RlYCBmb3IgZ2l2ZW4gcHJvZHVjdFxuICAgKiBAcGFyYW0gbWF4Q291bnQgTWF4aW11bSBudW1iZXIgb2YgcmV2aWV3IHRvIGxvYWRcbiAgICovXG4gIGFic3RyYWN0IGxvYWQocHJvZHVjdENvZGU6IHN0cmluZywgbWF4Q291bnQ/OiBudW1iZXIpOiBPYnNlcnZhYmxlPFJldmlld1tdPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gcG9zdCByZXZpZXcgZm9yIGEgZ2l2ZW4gcHJvZHVjdC5cbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlIFRoZSBgcHJvZHVjdENvZGVgIGZvciBnaXZlbiBwcm9kdWN0XG4gICAqIEBwYXJhbSByZXZpZXcgUmV2aWV3IHRvIHBvc3RcbiAgICovXG4gIGFic3RyYWN0IHBvc3QocHJvZHVjdENvZGU6IHN0cmluZywgcmV2aWV3OiBhbnkpOiBPYnNlcnZhYmxlPFJldmlldz47XG59XG4iXX0=