/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class CartDeliveryAdapter {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZWxpdmVyeS5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvY29ubmVjdG9ycy9kZWxpdmVyeS9jYXJ0LWRlbGl2ZXJ5LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE1BQU0sT0FBZ0IsbUJBQW1CO0NBMER4Qzs7Ozs7Ozs7Ozs7SUFsREMscUZBSXVCOzs7Ozs7Ozs7O0lBU3ZCLG9GQUltQjs7Ozs7Ozs7OztJQVNuQixzRkFJbUI7Ozs7Ozs7OztJQVFuQixzRUFBMkU7Ozs7Ozs7OztJQVEzRSxnRkFHOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBZGRyZXNzLCBEZWxpdmVyeU1vZGUgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhcnREZWxpdmVyeUFkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gY3JlYXRlIGFkZHJlc3MgaW4gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGFkZHJlc3NcbiAgICovXG4gIGFic3RyYWN0IGNyZWF0ZUFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgYWRkcmVzczogQWRkcmVzc1xuICApOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBzZXQgYWRyZXNzIGZvciBkZWxpdmVyeVxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGFkZHJlc3NJZFxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0QWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIHNldCBkZWxpdmVyeSBtb2RlIG9uIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBkZWxpdmVyeU1vZGVJZFxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0TW9kZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBkZWxpdmVyeU1vZGVJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gZ2V0IGN1cnJlbnQgZGVsaXZlcnkgbW9kZSBmcm9tIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBhYnN0cmFjdCBnZXRNb2RlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gZ2V0IHN1cHBvcnRlZCBkZWxpdmVyeSBtb2RlcyBmb3IgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGFic3RyYWN0IGdldFN1cHBvcnRlZE1vZGVzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlW10+O1xufVxuIl19