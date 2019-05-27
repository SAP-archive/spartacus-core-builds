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
UserAccountAdapter = /** @class */ (function () {
    function UserAccountAdapter() {
    }
    return UserAccountAdapter;
}());
/**
 * @abstract
 */
export { UserAccountAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY2NvdW50LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL2FjY291bnQvdXNlci1hY2NvdW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BOzs7O0lBQUE7SUFnQ0EsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQzs7Ozs7Ozs7Ozs7SUEvQkMsNERBQXNEOzs7Ozs7SUFFdEQsMEZBQThFOzs7Ozs7O0lBRTlFLCtFQUEyRTs7Ozs7Ozs7SUFFM0UsNkZBSWtCOzs7Ozs7OztJQUVsQiw4RkFJa0I7Ozs7OztJQUVsQiw0REFBZ0Q7Ozs7O0lBRWhELDBEQUEyQzs7Ozs7O0lBRTNDLGtFQUF1RTs7Ozs7Ozs7SUFFdkUsNEdBSStCOzs7Ozs7O0lBRS9CLGtGQUE4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyLCBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBDb25zZW50VGVtcGxhdGUsXG4gIENvbnNlbnRUZW1wbGF0ZUxpc3QsXG59IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2FkZGl0aW9uYWwtb2NjLm1vZGVscyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVc2VyQWNjb3VudEFkYXB0ZXIge1xuICBhYnN0cmFjdCByZWdpc3Rlcih1c2VyOiBVc2VyU2lnblVwKTogT2JzZXJ2YWJsZTxVc2VyPjtcblxuICBhYnN0cmFjdCByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcblxuICBhYnN0cmFjdCByZXNldFBhc3N3b3JkKHRva2VuOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcblxuICBhYnN0cmFjdCB1cGRhdGVFbWFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjdXJyZW50UGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdVc2VySWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PjtcblxuICBhYnN0cmFjdCB1cGRhdGVQYXNzd29yZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvbGRQYXNzd29yZDogc3RyaW5nLFxuICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgcmVtb3ZlKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgbG9hZFRpdGxlcygpOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuXG4gIGFic3RyYWN0IGxvYWRDb25zZW50cyh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlTGlzdD47XG5cbiAgYWJzdHJhY3QgZ2l2ZUNvbnNlbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY29uc2VudFRlbXBsYXRlSWQ6IHN0cmluZyxcbiAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGU+O1xuXG4gIGFic3RyYWN0IHdpdGhkcmF3Q29uc2VudCh1c2VySWQ6IHN0cmluZywgY29uc2VudENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xufVxuIl19