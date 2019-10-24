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
CartVoucherAdapter = /** @class */ (function () {
    function CartVoucherAdapter() {
    }
    return CartVoucherAdapter;
}());
/**
 * @abstract
 */
export { CartVoucherAdapter };
if (false) {
    /**
     * Abstract method used to apply voucher to cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    CartVoucherAdapter.prototype.add = function (userId, cartId, voucherId) { };
    /**
     * Abstract method used to remove voucher from cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    CartVoucherAdapter.prototype.remove = function (userId, cartId, voucherId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jb25uZWN0b3JzL3ZvdWNoZXIvY2FydC12b3VjaGVyLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7O0lBQUE7SUEwQkEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQzs7Ozs7Ozs7Ozs7Ozs7O0lBbEJDLDRFQUlrQjs7Ozs7Ozs7OztJQVNsQiwrRUFJa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYXJ0Vm91Y2hlckFkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gYXBwbHkgdm91Y2hlciB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gdm91Y2hlcklkXG4gICAqL1xuICBhYnN0cmFjdCBhZGQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgdm91Y2hlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIHJlbW92ZSB2b3VjaGVyIGZyb20gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHZvdWNoZXJJZFxuICAgKi9cbiAgYWJzdHJhY3QgcmVtb3ZlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHZvdWNoZXJJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+O1xufVxuIl19