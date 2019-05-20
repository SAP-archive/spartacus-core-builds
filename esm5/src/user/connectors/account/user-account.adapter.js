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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY2NvdW50LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL2FjY291bnQvdXNlci1hY2NvdW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFBOzs7O0lBQUE7SUFnQ0EsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQzs7Ozs7Ozs7Ozs7SUEvQkMsNERBQWdFOzs7Ozs7SUFFaEUsMEZBQThFOzs7Ozs7O0lBRTlFLCtFQUEyRTs7Ozs7Ozs7SUFFM0UsNkZBSWtCOzs7Ozs7OztJQUVsQiw4RkFJa0I7Ozs7OztJQUVsQiw0REFBZ0Q7Ozs7O0lBRWhELDBEQUEyQzs7Ozs7O0lBRTNDLGtFQUF1RTs7Ozs7Ozs7SUFFdkUsNEdBSStCOzs7Ozs7O0lBRS9CLGtGQUE4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBDb25zZW50VGVtcGxhdGUsXG4gIENvbnNlbnRUZW1wbGF0ZUxpc3QsXG59IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2FkZGl0aW9uYWwtb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBVc2VyUmVnaXN0ZXJGb3JtRGF0YSB9IGZyb20gJy4uLy4uLy4uL3VzZXIvbW9kZWwvdXNlci5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVc2VyQWNjb3VudEFkYXB0ZXIge1xuICBhYnN0cmFjdCByZWdpc3Rlcih1c2VyOiBVc2VyUmVnaXN0ZXJGb3JtRGF0YSk6IE9ic2VydmFibGU8VXNlcj47XG5cbiAgYWJzdHJhY3QgcmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwodXNlckVtYWlsQWRkcmVzczogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgcmVzZXRQYXNzd29yZCh0b2tlbjogc3RyaW5nLCBuZXdQYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgdXBkYXRlRW1haWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY3VycmVudFBhc3N3b3JkOiBzdHJpbmcsXG4gICAgbmV3VXNlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgdXBkYXRlUGFzc3dvcmQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkUGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+O1xuXG4gIGFic3RyYWN0IHJlbW92ZSh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuXG4gIGFic3RyYWN0IGxvYWRUaXRsZXMoKTogT2JzZXJ2YWJsZTxUaXRsZVtdPjtcblxuICBhYnN0cmFjdCBsb2FkQ29uc2VudHModXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZUxpc3Q+O1xuXG4gIGFic3RyYWN0IGdpdmVDb25zZW50KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNvbnNlbnRUZW1wbGF0ZUlkOiBzdHJpbmcsXG4gICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlPjtcblxuICBhYnN0cmFjdCB3aXRoZHJhd0NvbnNlbnQodXNlcklkOiBzdHJpbmcsIGNvbnNlbnRDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9Pjtcbn1cbiJdfQ==