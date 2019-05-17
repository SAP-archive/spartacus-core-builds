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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY2NvdW50LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL2FjY291bnQvdXNlci1hY2NvdW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFBLE1BQU0sT0FBZ0Isa0JBQWtCO0NBOEJ2Qzs7Ozs7OztJQTdCQyw0REFBZ0U7Ozs7OztJQUVoRSwwRkFBOEU7Ozs7Ozs7SUFFOUUsK0VBQTJFOzs7Ozs7OztJQUUzRSw2RkFJa0I7Ozs7Ozs7O0lBRWxCLDhGQUlrQjs7Ozs7O0lBRWxCLDREQUFnRDs7Ozs7O0lBRWhELGtFQUF1RTs7Ozs7Ozs7SUFFdkUsNEdBSStCOzs7Ozs7O0lBRS9CLGtGQUE4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7XG4gIENvbnNlbnRUZW1wbGF0ZSxcbiAgQ29uc2VudFRlbXBsYXRlTGlzdCxcbn0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvYWRkaXRpb25hbC1vY2MubW9kZWxzJztcbmltcG9ydCB7IFVzZXJSZWdpc3RlckZvcm1EYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9tb2RlbC91c2VyLm1vZGVsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVzZXJBY2NvdW50QWRhcHRlciB7XG4gIGFic3RyYWN0IHJlZ2lzdGVyKHVzZXI6IFVzZXJSZWdpc3RlckZvcm1EYXRhKTogT2JzZXJ2YWJsZTxVc2VyPjtcblxuICBhYnN0cmFjdCByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcblxuICBhYnN0cmFjdCByZXNldFBhc3N3b3JkKHRva2VuOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcblxuICBhYnN0cmFjdCB1cGRhdGVFbWFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjdXJyZW50UGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdVc2VySWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PjtcblxuICBhYnN0cmFjdCB1cGRhdGVQYXNzd29yZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvbGRQYXNzd29yZDogc3RyaW5nLFxuICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgcmVtb3ZlKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgbG9hZENvbnNlbnRzKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVMaXN0PjtcblxuICBhYnN0cmFjdCBnaXZlQ29uc2VudChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjb25zZW50VGVtcGxhdGVJZDogc3RyaW5nLFxuICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IG51bWJlclxuICApOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZT47XG5cbiAgYWJzdHJhY3Qgd2l0aGRyYXdDb25zZW50KHVzZXJJZDogc3RyaW5nLCBjb25zZW50Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG59XG4iXX0=