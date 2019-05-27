/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class UserAccountAdapter {
}
if (false) {
    /**
     * @abstract
     * @param {?} user
     * @return {?}
     */
    UserAccountAdapter.prototype.register = function (user) { };
    /**
     * @abstract
     * @param {?} userEmailAddress
     * @return {?}
     */
    UserAccountAdapter.prototype.requestForgotPasswordEmail = function (userEmailAddress) { };
    /**
     * @abstract
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    UserAccountAdapter.prototype.resetPassword = function (token, newPassword) { };
    /**
     * @abstract
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    UserAccountAdapter.prototype.updateEmail = function (userId, currentPassword, newUserId) { };
    /**
     * @abstract
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    UserAccountAdapter.prototype.updatePassword = function (userId, oldPassword, newPassword) { };
    /**
     * @abstract
     * @param {?} userId
     * @return {?}
     */
    UserAccountAdapter.prototype.remove = function (userId) { };
    /**
     * @abstract
     * @return {?}
     */
    UserAccountAdapter.prototype.loadTitles = function () { };
    /**
     * @abstract
     * @param {?} userId
     * @return {?}
     */
    UserAccountAdapter.prototype.loadConsents = function (userId) { };
    /**
     * @abstract
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    UserAccountAdapter.prototype.giveConsent = function (userId, consentTemplateId, consentTemplateVersion) { };
    /**
     * @abstract
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    UserAccountAdapter.prototype.withdrawConsent = function (userId, consentCode) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY2NvdW50LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL2FjY291bnQvdXNlci1hY2NvdW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BLE1BQU0sT0FBZ0Isa0JBQWtCO0NBZ0N2Qzs7Ozs7OztJQS9CQyw0REFBc0Q7Ozs7OztJQUV0RCwwRkFBOEU7Ozs7Ozs7SUFFOUUsK0VBQTJFOzs7Ozs7OztJQUUzRSw2RkFJa0I7Ozs7Ozs7O0lBRWxCLDhGQUlrQjs7Ozs7O0lBRWxCLDREQUFnRDs7Ozs7SUFFaEQsMERBQTJDOzs7Ozs7SUFFM0Msa0VBQXVFOzs7Ozs7OztJQUV2RSw0R0FJK0I7Ozs7Ozs7SUFFL0Isa0ZBQThFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIsIFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7XG4gIENvbnNlbnRUZW1wbGF0ZSxcbiAgQ29uc2VudFRlbXBsYXRlTGlzdCxcbn0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvYWRkaXRpb25hbC1vY2MubW9kZWxzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVzZXJBY2NvdW50QWRhcHRlciB7XG4gIGFic3RyYWN0IHJlZ2lzdGVyKHVzZXI6IFVzZXJTaWduVXApOiBPYnNlcnZhYmxlPFVzZXI+O1xuXG4gIGFic3RyYWN0IHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuXG4gIGFic3RyYWN0IHJlc2V0UGFzc3dvcmQodG9rZW46IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuXG4gIGFic3RyYWN0IHVwZGF0ZUVtYWlsKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGN1cnJlbnRQYXNzd29yZDogc3RyaW5nLFxuICAgIG5ld1VzZXJJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+O1xuXG4gIGFic3RyYWN0IHVwZGF0ZVBhc3N3b3JkKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9sZFBhc3N3b3JkOiBzdHJpbmcsXG4gICAgbmV3UGFzc3dvcmQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PjtcblxuICBhYnN0cmFjdCByZW1vdmUodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcblxuICBhYnN0cmFjdCBsb2FkVGl0bGVzKCk6IE9ic2VydmFibGU8VGl0bGVbXT47XG5cbiAgYWJzdHJhY3QgbG9hZENvbnNlbnRzKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVMaXN0PjtcblxuICBhYnN0cmFjdCBnaXZlQ29uc2VudChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjb25zZW50VGVtcGxhdGVJZDogc3RyaW5nLFxuICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IG51bWJlclxuICApOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZT47XG5cbiAgYWJzdHJhY3Qgd2l0aGRyYXdDb25zZW50KHVzZXJJZDogc3RyaW5nLCBjb25zZW50Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG59XG4iXX0=