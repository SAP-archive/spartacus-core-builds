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
UserNotificationPreferenceAdapter = /** @class */ (function () {
    function UserNotificationPreferenceAdapter() {
    }
    return UserNotificationPreferenceAdapter;
}());
/**
 * @abstract
 */
export { UserNotificationPreferenceAdapter };
if (false) {
    /**
     * Abstract method used to load notification preferences for an user.
     *
     * @abstract
     * @param {?} userId The `userId` for given user
     * @return {?}
     */
    UserNotificationPreferenceAdapter.prototype.loadAll = function (userId) { };
    /**
     * Abstract method used to update notification preferences for an user.
     *
     * @abstract
     * @param {?} userId The `userId` for given user
     * @param {?} preferences The notification preferences to be updated.
     * @return {?}
     */
    UserNotificationPreferenceAdapter.prototype.update = function (userId, preferences) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS91c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7O0lBQUE7SUFrQkEsQ0FBQztJQUFELHdDQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQzs7Ozs7Ozs7Ozs7OztJQVpDLDRFQUF1RTs7Ozs7Ozs7O0lBUXZFLHdGQUdrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblByZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMgZm9yIGFuIHVzZXIuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWQgVGhlIGB1c2VySWRgIGZvciBnaXZlbiB1c2VyXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb25QcmVmZXJlbmNlW10+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byB1cGRhdGUgbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzIGZvciBhbiB1c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIFRoZSBgdXNlcklkYCBmb3IgZ2l2ZW4gdXNlclxuICAgKiBAcGFyYW0gcHJlZmVyZW5jZXMgVGhlIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcyB0byBiZSB1cGRhdGVkLlxuICAgKi9cbiAgYWJzdHJhY3QgdXBkYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHByZWZlcmVuY2VzOiBOb3RpZmljYXRpb25QcmVmZXJlbmNlW11cbiAgKTogT2JzZXJ2YWJsZTx7fT47XG59XG4iXX0=