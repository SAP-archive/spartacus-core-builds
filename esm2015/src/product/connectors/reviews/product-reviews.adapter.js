/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class ProductReviewsAdapter {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9jb25uZWN0b3JzL3Jldmlld3MvcHJvZHVjdC1yZXZpZXdzLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE1BQU0sT0FBZ0IscUJBQXFCO0NBa0IxQzs7Ozs7Ozs7Ozs7O0lBVEMsNEVBQTRFOzs7Ozs7Ozs7SUFRNUUsMEVBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm9kdWN0UmV2aWV3c0FkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCByZXZpZXdzIGZvciBhIGdpdmVuIHByb2R1Y3QuXG4gICAqIFJldmlld3MgY2FuIGJlIGxvYWRlZCBmcm9tIGFsdGVybmF0aXZlIHNvdXJjZXMsIGFzIGxvbmcgYXMgdGhlIHN0cnVjdHVyZVxuICAgKiBjb252ZXJ0cyB0byB0aGUgYFJldmlld1tdYC5cbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlIFRoZSBgcHJvZHVjdENvZGVgIGZvciBnaXZlbiBwcm9kdWN0XG4gICAqIEBwYXJhbSBtYXhDb3VudCBNYXhpbXVtIG51bWJlciBvZiByZXZpZXcgdG8gbG9hZFxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZChwcm9kdWN0Q29kZTogc3RyaW5nLCBtYXhDb3VudD86IG51bWJlcik6IE9ic2VydmFibGU8UmV2aWV3W10+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBwb3N0IHJldmlldyBmb3IgYSBnaXZlbiBwcm9kdWN0LlxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGUgVGhlIGBwcm9kdWN0Q29kZWAgZm9yIGdpdmVuIHByb2R1Y3RcbiAgICogQHBhcmFtIHJldmlldyBSZXZpZXcgdG8gcG9zdFxuICAgKi9cbiAgYWJzdHJhY3QgcG9zdChwcm9kdWN0Q29kZTogc3RyaW5nLCByZXZpZXc6IGFueSk6IE9ic2VydmFibGU8UmV2aWV3Pjtcbn1cbiJdfQ==