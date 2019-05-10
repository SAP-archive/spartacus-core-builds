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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZWxpdmVyeS5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvY29ubmVjdG9ycy9kZWxpdmVyeS9jYXJ0LWRlbGl2ZXJ5LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBZ0IsbUJBQW1CO0NBMER4Qzs7Ozs7Ozs7Ozs7SUFsREMscUZBSXVCOzs7Ozs7Ozs7O0lBU3ZCLG9GQUltQjs7Ozs7Ozs7OztJQVNuQixzRkFJbUI7Ozs7Ozs7OztJQVFuQixzRUFBMkU7Ozs7Ozs7OztJQVEzRSxnRkFHOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYXJ0RGVsaXZlcnlBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSBhZGRyZXNzIGluIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBhZGRyZXNzXG4gICAqL1xuICBhYnN0cmFjdCBjcmVhdGVBZGRyZXNzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGFkZHJlc3M6IEFkZHJlc3NcbiAgKTogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gc2V0IGFkcmVzcyBmb3IgZGVsaXZlcnlcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBhZGRyZXNzSWRcbiAgICovXG4gIGFic3RyYWN0IHNldEFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgYWRkcmVzc0lkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBzZXQgZGVsaXZlcnkgbW9kZSBvbiBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gZGVsaXZlcnlNb2RlSWRcbiAgICovXG4gIGFic3RyYWN0IHNldE1vZGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZGVsaXZlcnlNb2RlSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGdldCBjdXJyZW50IGRlbGl2ZXJ5IG1vZGUgZnJvbSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0TW9kZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGdldCBzdXBwb3J0ZWQgZGVsaXZlcnkgbW9kZXMgZm9yIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBhYnN0cmFjdCBnZXRTdXBwb3J0ZWRNb2RlcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZVtdPjtcbn1cbiJdfQ==