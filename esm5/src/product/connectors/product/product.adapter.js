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
     * @return {?}
     */
    ProductAdapter.prototype.load = function (productCode) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L3Byb2R1Y3QuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7Ozs7SUFBQTtJQVNBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFURCxJQVNDOzs7Ozs7Ozs7Ozs7Ozs7SUFEQywyREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm9kdWN0QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIHByb2R1Y3QncyBkZXRhaWxzIGRhdGEuXG4gICAqIFByb2R1Y3QncyBkYXRhIGNhbiBiZSBsb2FkZWQgZnJvbSBhbHRlcm5hdGl2ZSBzb3VyY2VzLCBhcyBsb25nIGFzIHRoZSBzdHJ1Y3R1cmVcbiAgICogY29udmVydHMgdG8gdGhlIGBQcm9kdWN0YC5cbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlIFRoZSBgcHJvZHVjdENvZGVgIGZvciBnaXZlbiBwcm9kdWN0XG4gICAqL1xuICBhYnN0cmFjdCBsb2FkKHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xufVxuIl19