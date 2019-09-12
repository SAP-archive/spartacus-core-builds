/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class ProductReferencesAdapter {
}
if (false) {
    /**
     * Abstract method used to load product references for a given product.
     * References can be loaded from alternative sources, as long as the structure
     * converts to the `ProductReference[]`.
     *
     * @abstract
     * @param {?} productCode The `productCode` for given product
     * @param {?=} referenceType Reference type according to enum ProductReferenceTypeEnum
     * @param {?=} pageSize Maximum number of product refrence to load
     * @return {?}
     */
    ProductReferencesAdapter.prototype.load = function (productCode, referenceType, pageSize) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9jb25uZWN0b3JzL3JlZmVyZW5jZXMvcHJvZHVjdC1yZWZlcmVuY2VzLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE1BQU0sT0FBZ0Isd0JBQXdCO0NBZTdDOzs7Ozs7Ozs7Ozs7O0lBTEMsOEZBSWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgcHJvZHVjdCByZWZlcmVuY2VzIGZvciBhIGdpdmVuIHByb2R1Y3QuXG4gICAqIFJlZmVyZW5jZXMgY2FuIGJlIGxvYWRlZCBmcm9tIGFsdGVybmF0aXZlIHNvdXJjZXMsIGFzIGxvbmcgYXMgdGhlIHN0cnVjdHVyZVxuICAgKiBjb252ZXJ0cyB0byB0aGUgYFByb2R1Y3RSZWZlcmVuY2VbXWAuXG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZSBUaGUgYHByb2R1Y3RDb2RlYCBmb3IgZ2l2ZW4gcHJvZHVjdFxuICAgKiBAcGFyYW0gcmVmZXJlbmNlVHlwZSBSZWZlcmVuY2UgdHlwZSBhY2NvcmRpbmcgdG8gZW51bSBQcm9kdWN0UmVmZXJlbmNlVHlwZUVudW1cbiAgICogQHBhcmFtIHBhZ2VTaXplIE1heGltdW0gbnVtYmVyIG9mIHByb2R1Y3QgcmVmcmVuY2UgdG8gbG9hZFxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZChcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU/OiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0UmVmZXJlbmNlW10+O1xufVxuIl19