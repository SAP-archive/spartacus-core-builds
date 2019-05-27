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
CheckoutAdapter = /** @class */ (function () {
    function CheckoutAdapter() {
    }
    return CheckoutAdapter;
}());
/**
 * @abstract
 */
export { CheckoutAdapter };
if (false) {
    /**
     * Abstract method used to place an order.
     *
     * @abstract
     * @param {?} userId The `userId` for given user
     * @param {?} cartId The `cartId` for cart used for placing order
     * @return {?}
     */
    CheckoutAdapter.prototype.placeOrder = function (userId, cartId) { };
    /**
     * Abstract method used to load checkout details
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CheckoutAdapter.prototype.loadCheckoutDetails = function (userId, cartId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9jb25uZWN0b3JzL2NoZWNrb3V0L2NoZWNrb3V0LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBQUE7SUFtQkEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQzs7Ozs7Ozs7Ozs7Ozs7SUFaQyxxRUFBdUU7Ozs7Ozs7OztJQVF2RSw4RUFHK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVscy9jaGVja291dC5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGVja291dEFkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gcGxhY2UgYW4gb3JkZXIuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWQgVGhlIGB1c2VySWRgIGZvciBnaXZlbiB1c2VyXG4gICAqIEBwYXJhbSBjYXJ0SWQgVGhlIGBjYXJ0SWRgIGZvciBjYXJ0IHVzZWQgZm9yIHBsYWNpbmcgb3JkZXJcbiAgICovXG4gIGFic3RyYWN0IHBsYWNlT3JkZXIodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgY2hlY2tvdXQgZGV0YWlsc1xuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGFic3RyYWN0IGxvYWRDaGVja291dERldGFpbHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDaGVja291dERldGFpbHM+O1xufVxuIl19