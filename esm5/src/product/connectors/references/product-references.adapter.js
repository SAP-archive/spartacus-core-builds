/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
ProductReferencesAdapter = /** @class */ (function () {
    function ProductReferencesAdapter() {
    }
    return ProductReferencesAdapter;
}());
/**
 * @abstract
 */
export { ProductReferencesAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9jb25uZWN0b3JzL3JlZmVyZW5jZXMvcHJvZHVjdC1yZWZlcmVuY2VzLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7O0lBQUE7SUFlQSxDQUFDO0lBQUQsK0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFMQyw4RkFJa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlc0FkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBwcm9kdWN0IHJlZmVyZW5jZXMgZm9yIGEgZ2l2ZW4gcHJvZHVjdC5cbiAgICogUmVmZXJlbmNlcyBjYW4gYmUgbG9hZGVkIGZyb20gYWx0ZXJuYXRpdmUgc291cmNlcywgYXMgbG9uZyBhcyB0aGUgc3RydWN0dXJlXG4gICAqIGNvbnZlcnRzIHRvIHRoZSBgUHJvZHVjdFJlZmVyZW5jZVtdYC5cbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlIFRoZSBgcHJvZHVjdENvZGVgIGZvciBnaXZlbiBwcm9kdWN0XG4gICAqIEBwYXJhbSByZWZlcmVuY2VUeXBlIFJlZmVyZW5jZSB0eXBlIGFjY29yZGluZyB0byBlbnVtIFByb2R1Y3RSZWZlcmVuY2VUeXBlRW51bVxuICAgKiBAcGFyYW0gcGFnZVNpemUgTWF4aW11bSBudW1iZXIgb2YgcHJvZHVjdCByZWZyZW5jZSB0byBsb2FkXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlVHlwZT86IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlclxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RSZWZlcmVuY2VbXT47XG59XG4iXX0=