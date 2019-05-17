/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserAccountAdapter } from './user-account.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-account.adapter";
var UserAccountConnector = /** @class */ (function () {
    function UserAccountConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} user
     * @return {?}
     */
    UserAccountConnector.prototype.register = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        return this.adapter.register(user);
    };
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    UserAccountConnector.prototype.requestForgotPasswordEmail = /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    function (userEmailAddress) {
        return this.adapter.requestForgotPasswordEmail(userEmailAddress);
    };
    /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    UserAccountConnector.prototype.resetPassword = /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    function (token, newPassword) {
        return this.adapter.resetPassword(token, newPassword);
    };
    /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    UserAccountConnector.prototype.updateEmail = /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    function (userId, currentPassword, newUserId) {
        return this.adapter.updateEmail(userId, currentPassword, newUserId);
    };
    /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    UserAccountConnector.prototype.updatePassword = /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    function (userId, oldPassword, newPassword) {
        return this.adapter.updatePassword(userId, oldPassword, newPassword);
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    UserAccountConnector.prototype.remove = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.remove(userId);
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    UserAccountConnector.prototype.loadConsents = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.loadConsents(userId);
    };
    /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    UserAccountConnector.prototype.giveConsent = /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    function (userId, consentTemplateId, consentTemplateVersion) {
        return this.adapter.giveConsent(userId, consentTemplateId, consentTemplateVersion);
    };
    /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    UserAccountConnector.prototype.withdrawConsent = /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    function (userId, consentCode) {
        return this.adapter.withdrawConsent(userId, consentCode);
    };
    UserAccountConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserAccountConnector.ctorParameters = function () { return [
        { type: UserAccountAdapter }
    ]; };
    /** @nocollapse */ UserAccountConnector.ngInjectableDef = i0.defineInjectable({ factory: function UserAccountConnector_Factory() { return new UserAccountConnector(i0.inject(i1.UserAccountAdapter)); }, token: UserAccountConnector, providedIn: "root" });
    return UserAccountConnector;
}());
export { UserAccountConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserAccountConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY2NvdW50LmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2Nvbm5lY3RvcnMvYWNjb3VudC91c2VyLWFjY291bnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFNUQ7SUFJRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDOzs7OztJQUVyRCx1Q0FBUTs7OztJQUFSLFVBQVMsSUFBMEI7UUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELHlEQUEwQjs7OztJQUExQixVQUEyQixnQkFBd0I7UUFDakQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsNENBQWE7Ozs7O0lBQWIsVUFBYyxLQUFhLEVBQUUsV0FBbUI7UUFDOUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7OztJQUVELDBDQUFXOzs7Ozs7SUFBWCxVQUNFLE1BQWMsRUFDZCxlQUF1QixFQUN2QixTQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7OztJQUVELDZDQUFjOzs7Ozs7SUFBZCxVQUNFLE1BQWMsRUFDZCxXQUFtQixFQUNuQixXQUFtQjtRQUVuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7SUFFRCxxQ0FBTTs7OztJQUFOLFVBQU8sTUFBYztRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsMkNBQVk7Ozs7SUFBWixVQUFhLE1BQWM7UUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7O0lBRUQsMENBQVc7Ozs7OztJQUFYLFVBQ0UsTUFBYyxFQUNkLGlCQUF5QixFQUN6QixzQkFBOEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FDN0IsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixzQkFBc0IsQ0FDdkIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELDhDQUFlOzs7OztJQUFmLFVBQWdCLE1BQWMsRUFBRSxXQUFtQjtRQUNqRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkF4REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxrQkFBa0I7OzsrQkFSM0I7Q0FtRUMsQUF6REQsSUF5REM7U0F0RFksb0JBQW9COzs7Ozs7SUFDbkIsdUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ29uc2VudFRlbXBsYXRlLFxuICBDb25zZW50VGVtcGxhdGVMaXN0LFxufSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9hZGRpdGlvbmFsLW9jYy5tb2RlbHMnO1xuaW1wb3J0IHsgVXNlclJlZ2lzdGVyRm9ybURhdGEgfSBmcm9tICcuLi8uLi8uLi91c2VyL21vZGVsL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgVXNlckFjY291bnRBZGFwdGVyIH0gZnJvbSAnLi91c2VyLWFjY291bnQuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQWNjb3VudENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBVc2VyQWNjb3VudEFkYXB0ZXIpIHt9XG5cbiAgcmVnaXN0ZXIodXNlcjogVXNlclJlZ2lzdGVyRm9ybURhdGEpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnJlZ2lzdGVyKHVzZXIpO1xuICB9XG5cbiAgcmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwodXNlckVtYWlsQWRkcmVzczogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIucmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwodXNlckVtYWlsQWRkcmVzcyk7XG4gIH1cblxuICByZXNldFBhc3N3b3JkKHRva2VuOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5yZXNldFBhc3N3b3JkKHRva2VuLCBuZXdQYXNzd29yZCk7XG4gIH1cblxuICB1cGRhdGVFbWFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjdXJyZW50UGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdVc2VySWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci51cGRhdGVFbWFpbCh1c2VySWQsIGN1cnJlbnRQYXNzd29yZCwgbmV3VXNlcklkKTtcbiAgfVxuXG4gIHVwZGF0ZVBhc3N3b3JkKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9sZFBhc3N3b3JkOiBzdHJpbmcsXG4gICAgbmV3UGFzc3dvcmQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci51cGRhdGVQYXNzd29yZCh1c2VySWQsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCk7XG4gIH1cblxuICByZW1vdmUodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5yZW1vdmUodXNlcklkKTtcbiAgfVxuXG4gIGxvYWRDb25zZW50cyh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZENvbnNlbnRzKHVzZXJJZCk7XG4gIH1cblxuICBnaXZlQ29uc2VudChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjb25zZW50VGVtcGxhdGVJZDogc3RyaW5nLFxuICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IG51bWJlclxuICApOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZ2l2ZUNvbnNlbnQoXG4gICAgICB1c2VySWQsXG4gICAgICBjb25zZW50VGVtcGxhdGVJZCxcbiAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb25cbiAgICApO1xuICB9XG5cbiAgd2l0aGRyYXdDb25zZW50KHVzZXJJZDogc3RyaW5nLCBjb25zZW50Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIud2l0aGRyYXdDb25zZW50KHVzZXJJZCwgY29uc2VudENvZGUpO1xuICB9XG59XG4iXX0=