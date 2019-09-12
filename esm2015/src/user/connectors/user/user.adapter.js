/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class UserAdapter {
}
if (false) {
    /**
     * @abstract
     * @param {?} userId
     * @return {?}
     */
    UserAdapter.prototype.load = function (userId) { };
    /**
     * @abstract
     * @param {?} username
     * @param {?} user
     * @return {?}
     */
    UserAdapter.prototype.update = function (username, user) { };
    /**
     * @abstract
     * @param {?} user
     * @return {?}
     */
    UserAdapter.prototype.register = function (user) { };
    /**
     * @abstract
     * @param {?} userEmailAddress
     * @return {?}
     */
    UserAdapter.prototype.requestForgotPasswordEmail = function (userEmailAddress) { };
    /**
     * @abstract
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    UserAdapter.prototype.resetPassword = function (token, newPassword) { };
    /**
     * @abstract
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    UserAdapter.prototype.updateEmail = function (userId, currentPassword, newUserId) { };
    /**
     * @abstract
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    UserAdapter.prototype.updatePassword = function (userId, oldPassword, newPassword) { };
    /**
     * @abstract
     * @param {?} userId
     * @return {?}
     */
    UserAdapter.prototype.remove = function (userId) { };
    /**
     * @abstract
     * @return {?}
     */
    UserAdapter.prototype.loadTitles = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy91c2VyL3VzZXIuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsTUFBTSxPQUFnQixXQUFXO0NBMEJoQzs7Ozs7OztJQXpCQyxtREFBZ0Q7Ozs7Ozs7SUFFaEQsNkRBQThEOzs7Ozs7SUFFOUQscURBQXNEOzs7Ozs7SUFFdEQsbUZBQThFOzs7Ozs7O0lBRTlFLHdFQUEyRTs7Ozs7Ozs7SUFFM0Usc0ZBSWtCOzs7Ozs7OztJQUVsQix1RkFJa0I7Ozs7OztJQUVsQixxREFBZ0Q7Ozs7O0lBRWhELG1EQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyLCBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVc2VyQWRhcHRlciB7XG4gIGFic3RyYWN0IGxvYWQodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+O1xuXG4gIGFic3RyYWN0IHVwZGF0ZSh1c2VybmFtZTogc3RyaW5nLCB1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgcmVnaXN0ZXIodXNlcjogVXNlclNpZ25VcCk6IE9ic2VydmFibGU8VXNlcj47XG5cbiAgYWJzdHJhY3QgcmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwodXNlckVtYWlsQWRkcmVzczogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgcmVzZXRQYXNzd29yZCh0b2tlbjogc3RyaW5nLCBuZXdQYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgdXBkYXRlRW1haWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY3VycmVudFBhc3N3b3JkOiBzdHJpbmcsXG4gICAgbmV3VXNlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgdXBkYXRlUGFzc3dvcmQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkUGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+O1xuXG4gIGFic3RyYWN0IHJlbW92ZSh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuXG4gIGFic3RyYWN0IGxvYWRUaXRsZXMoKTogT2JzZXJ2YWJsZTxUaXRsZVtdPjtcbn1cbiJdfQ==