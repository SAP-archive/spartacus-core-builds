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
UserAdapter = /** @class */ (function () {
    function UserAdapter() {
    }
    return UserAdapter;
}());
/**
 * @abstract
 */
export { UserAdapter };
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
     * @param {?} guid
     * @param {?} password
     * @return {?}
     */
    UserAdapter.prototype.registerGuest = function (guid, password) { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy91c2VyL3VzZXIuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7Ozs7SUFBQTtJQTRCQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDOzs7Ozs7Ozs7OztJQTNCQyxtREFBZ0Q7Ozs7Ozs7SUFFaEQsNkRBQThEOzs7Ozs7SUFFOUQscURBQXNEOzs7Ozs7O0lBRXRELG9FQUF5RTs7Ozs7O0lBRXpFLG1GQUE4RTs7Ozs7OztJQUU5RSx3RUFBMkU7Ozs7Ozs7O0lBRTNFLHNGQUlrQjs7Ozs7Ozs7SUFFbEIsdUZBSWtCOzs7Ozs7SUFFbEIscURBQWdEOzs7OztJQUVoRCxtREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUaXRsZSwgVXNlciwgVXNlclNpZ25VcCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVXNlckFkYXB0ZXIge1xuICBhYnN0cmFjdCBsb2FkKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPjtcblxuICBhYnN0cmFjdCB1cGRhdGUodXNlcm5hbWU6IHN0cmluZywgdXNlcjogVXNlcik6IE9ic2VydmFibGU8e30+O1xuXG4gIGFic3RyYWN0IHJlZ2lzdGVyKHVzZXI6IFVzZXJTaWduVXApOiBPYnNlcnZhYmxlPFVzZXI+O1xuXG4gIGFic3RyYWN0IHJlZ2lzdGVyR3Vlc3QoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPjtcblxuICBhYnN0cmFjdCByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcblxuICBhYnN0cmFjdCByZXNldFBhc3N3b3JkKHRva2VuOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcblxuICBhYnN0cmFjdCB1cGRhdGVFbWFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjdXJyZW50UGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdVc2VySWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PjtcblxuICBhYnN0cmFjdCB1cGRhdGVQYXNzd29yZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvbGRQYXNzd29yZDogc3RyaW5nLFxuICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgcmVtb3ZlKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgbG9hZFRpdGxlcygpOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xufVxuIl19