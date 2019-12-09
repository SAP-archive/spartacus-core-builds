/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
ProductAdapter = /** @class */ (function () {
    function ProductAdapter() {
    }
    return ProductAdapter;
}());
/**
 * @abstract
 */
export { ProductAdapter };
if (false) {
    /**
     * Abstract method used to load product's details data.
     * Product's data can be loaded from alternative sources, as long as the structure
     * converts to the `Product`.
     *
     * @abstract
     * @param {?} productCode The `productCode` for given product
     * @param {?=} scope The product scope to load
     * @return {?}
     */
    ProductAdapter.prototype.load = function (productCode, scope) { };
    /**
     * Abstract method used to load data for multiple product and scopes
     * Adapter is able to optimize necessary backend calls and load
     * products in the most efficient way possible.
     *
     * @abstract
     * @param {?} products
     * @return {?}
     */
    ProductAdapter.prototype.loadMany = function (products) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L3Byb2R1Y3QuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7Ozs7SUFBQTtJQW1CQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDOzs7Ozs7Ozs7Ozs7Ozs7O0lBVkMsa0VBQXdFOzs7Ozs7Ozs7O0lBU3hFLDREQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFNjb3BlZFByb2R1Y3REYXRhIH0gZnJvbSAnLi9zY29wZWQtcHJvZHVjdC1kYXRhJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByb2R1Y3RBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgcHJvZHVjdCdzIGRldGFpbHMgZGF0YS5cbiAgICogUHJvZHVjdCdzIGRhdGEgY2FuIGJlIGxvYWRlZCBmcm9tIGFsdGVybmF0aXZlIHNvdXJjZXMsIGFzIGxvbmcgYXMgdGhlIHN0cnVjdHVyZVxuICAgKiBjb252ZXJ0cyB0byB0aGUgYFByb2R1Y3RgLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGUgVGhlIGBwcm9kdWN0Q29kZWAgZm9yIGdpdmVuIHByb2R1Y3RcbiAgICogQHBhcmFtIHNjb3BlIFRoZSBwcm9kdWN0IHNjb3BlIHRvIGxvYWRcbiAgICovXG4gIGFic3RyYWN0IGxvYWQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGU/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIGRhdGEgZm9yIG11bHRpcGxlIHByb2R1Y3QgYW5kIHNjb3Blc1xuICAgKiBBZGFwdGVyIGlzIGFibGUgdG8gb3B0aW1pemUgbmVjZXNzYXJ5IGJhY2tlbmQgY2FsbHMgYW5kIGxvYWRcbiAgICogcHJvZHVjdHMgaW4gdGhlIG1vc3QgZWZmaWNpZW50IHdheSBwb3NzaWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RzXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkTWFueT8ocHJvZHVjdHM6IFNjb3BlZFByb2R1Y3REYXRhW10pOiBTY29wZWRQcm9kdWN0RGF0YVtdO1xufVxuIl19