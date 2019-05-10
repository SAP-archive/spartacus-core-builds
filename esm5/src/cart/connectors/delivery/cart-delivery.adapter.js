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
CartDeliveryAdapter = /** @class */ (function () {
    function CartDeliveryAdapter() {
    }
    return CartDeliveryAdapter;
}());
/**
 * @abstract
 */
export { CartDeliveryAdapter };
if (false) {
    /**
     * Abstract method used to create address in cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    CartDeliveryAdapter.prototype.createAddress = function (userId, cartId, address) { };
    /**
     * Abstract method used to set adress for delivery
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    CartDeliveryAdapter.prototype.setAddress = function (userId, cartId, addressId) { };
    /**
     * Abstract method used to set delivery mode on cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    CartDeliveryAdapter.prototype.setMode = function (userId, cartId, deliveryModeId) { };
    /**
     * Abstract method used to get current delivery mode from cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CartDeliveryAdapter.prototype.getMode = function (userId, cartId) { };
    /**
     * Abstract method used to get supported delivery modes for cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CartDeliveryAdapter.prototype.getSupportedModes = function (userId, cartId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZWxpdmVyeS5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvY29ubmVjdG9ycy9kZWxpdmVyeS9jYXJ0LWRlbGl2ZXJ5LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBQUE7SUEwREEsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQzs7Ozs7Ozs7Ozs7Ozs7O0lBbERDLHFGQUl1Qjs7Ozs7Ozs7OztJQVN2QixvRkFJbUI7Ozs7Ozs7Ozs7SUFTbkIsc0ZBSW1COzs7Ozs7Ozs7SUFRbkIsc0VBQTJFOzs7Ozs7Ozs7SUFRM0UsZ0ZBRzhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FydERlbGl2ZXJ5QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBjcmVhdGUgYWRkcmVzcyBpbiBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gYWRkcmVzc1xuICAgKi9cbiAgYWJzdHJhY3QgY3JlYXRlQWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzOiBBZGRyZXNzXG4gICk6IE9ic2VydmFibGU8QWRkcmVzcz47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIHNldCBhZHJlc3MgZm9yIGRlbGl2ZXJ5XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gYWRkcmVzc0lkXG4gICAqL1xuICBhYnN0cmFjdCBzZXRBZGRyZXNzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGFkZHJlc3NJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gc2V0IGRlbGl2ZXJ5IG1vZGUgb24gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGRlbGl2ZXJ5TW9kZUlkXG4gICAqL1xuICBhYnN0cmFjdCBzZXRNb2RlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGRlbGl2ZXJ5TW9kZUlkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBnZXQgY3VycmVudCBkZWxpdmVyeSBtb2RlIGZyb20gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGFic3RyYWN0IGdldE1vZGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBnZXQgc3VwcG9ydGVkIGRlbGl2ZXJ5IG1vZGVzIGZvciBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0U3VwcG9ydGVkTW9kZXMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT47XG59XG4iXX0=