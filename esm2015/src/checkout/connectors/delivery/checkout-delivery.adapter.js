/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class CheckoutDeliveryAdapter {
}
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
    CheckoutDeliveryAdapter.prototype.createAddress = function (userId, cartId, address) { };
    /**
     * Abstract method used to set adress for delivery
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    CheckoutDeliveryAdapter.prototype.setAddress = function (userId, cartId, addressId) { };
    /**
     * Abstract method used to set delivery mode on cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    CheckoutDeliveryAdapter.prototype.setMode = function (userId, cartId, deliveryModeId) { };
    /**
     * Abstract method used to get current delivery mode from cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CheckoutDeliveryAdapter.prototype.getMode = function (userId, cartId) { };
    /**
     * Abstract method used to get supported delivery modes for cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CheckoutDeliveryAdapter.prototype.getSupportedModes = function (userId, cartId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NoZWNrb3V0LWRlbGl2ZXJ5LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBZ0IsdUJBQXVCO0NBMEQ1Qzs7Ozs7Ozs7Ozs7SUFsREMseUZBSXVCOzs7Ozs7Ozs7O0lBU3ZCLHdGQUltQjs7Ozs7Ozs7OztJQVNuQiwwRkFJbUI7Ozs7Ozs7OztJQVFuQiwwRUFBMkU7Ozs7Ozs7OztJQVEzRSxvRkFHOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGVja291dERlbGl2ZXJ5QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBjcmVhdGUgYWRkcmVzcyBpbiBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gYWRkcmVzc1xuICAgKi9cbiAgYWJzdHJhY3QgY3JlYXRlQWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzOiBBZGRyZXNzXG4gICk6IE9ic2VydmFibGU8QWRkcmVzcz47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIHNldCBhZHJlc3MgZm9yIGRlbGl2ZXJ5XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gYWRkcmVzc0lkXG4gICAqL1xuICBhYnN0cmFjdCBzZXRBZGRyZXNzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGFkZHJlc3NJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gc2V0IGRlbGl2ZXJ5IG1vZGUgb24gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGRlbGl2ZXJ5TW9kZUlkXG4gICAqL1xuICBhYnN0cmFjdCBzZXRNb2RlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGRlbGl2ZXJ5TW9kZUlkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBnZXQgY3VycmVudCBkZWxpdmVyeSBtb2RlIGZyb20gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGFic3RyYWN0IGdldE1vZGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBnZXQgc3VwcG9ydGVkIGRlbGl2ZXJ5IG1vZGVzIGZvciBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0U3VwcG9ydGVkTW9kZXMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT47XG59XG4iXX0=