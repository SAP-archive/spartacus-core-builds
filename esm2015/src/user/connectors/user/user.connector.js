/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserAdapter } from './user.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user.adapter";
export class UserConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    get(userId) {
        return this.adapter.load(userId);
    }
    /**
     * @param {?} username
     * @param {?} user
     * @return {?}
     */
    update(username, user) {
        return this.adapter.update(username, user);
    }
    /**
     * @param {?} user
     * @return {?}
     */
    register(user) {
        return this.adapter.register(user);
    }
    /**
     * @param {?} guid
     * @param {?} password
     * @return {?}
     */
    registerGuest(guid, password) {
        return this.adapter.registerGuest(guid, password);
    }
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    requestForgotPasswordEmail(userEmailAddress) {
        return this.adapter.requestForgotPasswordEmail(userEmailAddress);
    }
    /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    resetPassword(token, newPassword) {
        return this.adapter.resetPassword(token, newPassword);
    }
    /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    updateEmail(userId, currentPassword, newUserId) {
        return this.adapter.updateEmail(userId, currentPassword, newUserId);
    }
    /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    updatePassword(userId, oldPassword, newPassword) {
        return this.adapter.updatePassword(userId, oldPassword, newPassword);
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    remove(userId) {
        return this.adapter.remove(userId);
    }
    /**
     * @return {?}
     */
    getTitles() {
        return this.adapter.loadTitles();
    }
}
UserConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserConnector.ctorParameters = () => [
    { type: UserAdapter }
];
/** @nocollapse */ UserConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserConnector_Factory() { return new UserConnector(i0.ɵɵinject(i1.UserAdapter)); }, token: UserConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLN0MsTUFBTSxPQUFPLGFBQWE7Ozs7SUFDeEIsWUFBc0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7Ozs7O0lBRTlDLEdBQUcsQ0FBQyxNQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWdCLEVBQUUsSUFBVTtRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxJQUFnQjtRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxJQUFZLEVBQUUsUUFBZ0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCwwQkFBMEIsQ0FBQyxnQkFBd0I7UUFDakQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWEsRUFBRSxXQUFtQjtRQUM5QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7O0lBRUQsV0FBVyxDQUNULE1BQWMsRUFDZCxlQUF1QixFQUN2QixTQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7OztJQUVELGNBQWMsQ0FDWixNQUFjLEVBQ2QsV0FBbUIsRUFDbkIsV0FBbUI7UUFFbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUFwREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsV0FBVzs7Ozs7Ozs7SUFNTixnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUaXRsZSwgVXNlciwgVXNlclNpZ25VcCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgVXNlckFkYXB0ZXIgfSBmcm9tICcuL3VzZXIuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJBZGFwdGVyKSB7fVxuXG4gIGdldCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZCh1c2VySWQpO1xuICB9XG5cbiAgdXBkYXRlKHVzZXJuYW1lOiBzdHJpbmcsIHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci51cGRhdGUodXNlcm5hbWUsIHVzZXIpO1xuICB9XG5cbiAgcmVnaXN0ZXIodXNlcjogVXNlclNpZ25VcCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIucmVnaXN0ZXIodXNlcik7XG4gIH1cblxuICByZWdpc3Rlckd1ZXN0KGd1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJHdWVzdChndWlkLCBwYXNzd29yZCk7XG4gIH1cblxuICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5yZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzKTtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQodG9rZW46IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnJlc2V0UGFzc3dvcmQodG9rZW4sIG5ld1Bhc3N3b3JkKTtcbiAgfVxuXG4gIHVwZGF0ZUVtYWlsKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGN1cnJlbnRQYXNzd29yZDogc3RyaW5nLFxuICAgIG5ld1VzZXJJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnVwZGF0ZUVtYWlsKHVzZXJJZCwgY3VycmVudFBhc3N3b3JkLCBuZXdVc2VySWQpO1xuICB9XG5cbiAgdXBkYXRlUGFzc3dvcmQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkUGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnVwZGF0ZVBhc3N3b3JkKHVzZXJJZCwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKTtcbiAgfVxuXG4gIHJlbW92ZSh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnJlbW92ZSh1c2VySWQpO1xuICB9XG5cbiAgZ2V0VGl0bGVzKCk6IE9ic2VydmFibGU8VGl0bGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZFRpdGxlcygpO1xuICB9XG59XG4iXX0=