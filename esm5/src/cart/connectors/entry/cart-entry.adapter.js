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
CartEntryAdapter = /** @class */ (function () {
    function CartEntryAdapter() {
    }
    return CartEntryAdapter;
}());
/**
 * @abstract
 */
export { CartEntryAdapter };
if (false) {
    /**
     * Abstract method used to add entry to cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?=} quantity
     * @return {?}
     */
    CartEntryAdapter.prototype.add = function (userId, cartId, productCode, quantity) { };
    /**
     * Abstract method used to update entry in cart
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} qty
     * @param {?=} pickupStore
     * @return {?}
     */
    CartEntryAdapter.prototype.update = function (userId, cartId, entryNumber, qty, pickupStore) { };
    /**
     * Abstract method used to remove entry from cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    CartEntryAdapter.prototype.remove = function (userId, cartId, entryNumber) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvY29ubmVjdG9ycy9lbnRyeS9jYXJ0LWVudHJ5LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7O0lBQUE7SUE0Q0EsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQzs7Ozs7Ozs7Ozs7Ozs7OztJQW5DQyxzRkFLZ0M7Ozs7Ozs7Ozs7O0lBVWhDLGlHQU1nQzs7Ozs7Ozs7OztJQVNoQywrRUFJbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0TW9kaWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYXJ0RW50cnlBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGFkZCBlbnRyeSB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqL1xuICBhYnN0cmFjdCBhZGQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBxdWFudGl0eT86IG51bWJlclxuICApOiBPYnNlcnZhYmxlPENhcnRNb2RpZmljYXRpb24+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byB1cGRhdGUgZW50cnkgaW4gY2FydFxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAqIEBwYXJhbSBxdHlcbiAgICogQHBhcmFtIHBpY2t1cFN0b3JlXG4gICAqL1xuICBhYnN0cmFjdCB1cGRhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW50cnlOdW1iZXI6IHN0cmluZyxcbiAgICBxdHk6IG51bWJlcixcbiAgICBwaWNrdXBTdG9yZT86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnRNb2RpZmljYXRpb24+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byByZW1vdmUgZW50cnkgZnJvbSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gZW50cnlOdW1iZXJcbiAgICovXG4gIGFic3RyYWN0IHJlbW92ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBlbnRyeU51bWJlcjogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55Pjtcbn1cbiJdfQ==