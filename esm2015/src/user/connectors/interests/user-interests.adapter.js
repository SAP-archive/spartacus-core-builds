/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class UserInterestsAdapter {
}
if (false) {
    /**
     * Abstract method used to load product interests for an user.
     *
     * @abstract
     * @param {?} userId The `userId` for given user
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort Sorting method
     * @param {?=} productCode The product code
     * @param {?=} notificationType The notification type
     * @return {?}
     */
    UserInterestsAdapter.prototype.getInterests = function (userId, pageSize, currentPage, sort, productCode, notificationType) { };
    /**
     * Abstract method used to remove product interest for an user.
     *
     * @abstract
     * @param {?} userId The `userId` for given user
     * @param {?} item
     * @return {?}
     */
    UserInterestsAdapter.prototype.removeInterest = function (userId, item) { };
    /**
     * Abstract method to add a product interest for an user.
     *
     * @abstract
     * @param {?} userId The `userId` for given user
     * @param {?} productCode The product code
     * @param {?} notificationType The notification type
     * @return {?}
     */
    UserInterestsAdapter.prototype.addInterest = function (userId, productCode, notificationType) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnRlcmVzdHMuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2Nvbm5lY3RvcnMvaW50ZXJlc3RzL3VzZXItaW50ZXJlc3RzLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BLE1BQU0sT0FBZ0Isb0JBQW9CO0NBMkN6Qzs7Ozs7Ozs7Ozs7Ozs7SUFoQ0MsZ0lBTzJDOzs7Ozs7Ozs7SUFRM0MsNEVBR3FCOzs7Ozs7Ozs7O0lBU3JCLGtHQUltQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCxcbiAgUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbixcbiAgTm90aWZpY2F0aW9uVHlwZSxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1pbnRlcmVzdC5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVc2VySW50ZXJlc3RzQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIHByb2R1Y3QgaW50ZXJlc3RzIGZvciBhbiB1c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIFRoZSBgdXNlcklkYCBmb3IgZ2l2ZW4gdXNlclxuICAgKiBAcGFyYW0gcGFnZVNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlXG4gICAqIEBwYXJhbSBzb3J0IFNvcnRpbmcgbWV0aG9kXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZSBUaGUgcHJvZHVjdCBjb2RlXG4gICAqIEBwYXJhbSAgbm90aWZpY2F0aW9uVHlwZSBUaGUgbm90aWZpY2F0aW9uIHR5cGVcbiAgICovXG4gIGFic3RyYWN0IGdldEludGVyZXN0cyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nLFxuICAgIHByb2R1Y3RDb2RlPzogc3RyaW5nLFxuICAgIG5vdGlmaWNhdGlvblR5cGU/OiBOb3RpZmljYXRpb25UeXBlXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gcmVtb3ZlIHByb2R1Y3QgaW50ZXJlc3QgZm9yIGFuIHVzZXIuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWQgVGhlIGB1c2VySWRgIGZvciBnaXZlbiB1c2VyXG4gICAqIEBwYXJhbSBQcm9kdWN0SW50ZXJlc3RSZWxhdGlvbiBUaGUgcHJvZHVjdCBpbnRlcmVzdCB0byBiZSByZW1vdmVkLlxuICAgKi9cbiAgYWJzdHJhY3QgcmVtb3ZlSW50ZXJlc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgaXRlbTogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvblxuICApOiBPYnNlcnZhYmxlPGFueVtdPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHRvIGFkZCBhIHByb2R1Y3QgaW50ZXJlc3QgZm9yIGFuIHVzZXIuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWQgVGhlIGB1c2VySWRgIGZvciBnaXZlbiB1c2VyXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZSBUaGUgcHJvZHVjdCBjb2RlXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25UeXBlIFRoZSBub3RpZmljYXRpb24gdHlwZVxuICAgKi9cbiAgYWJzdHJhY3QgYWRkSW50ZXJlc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBub3RpZmljYXRpb25UeXBlOiBOb3RpZmljYXRpb25UeXBlXG4gICk6IE9ic2VydmFibGU8YW55Pjtcbn1cbiJdfQ==