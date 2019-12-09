/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserNotificationPreferenceAdapter } from './user-notification-preference.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-notification-preference.adapter";
var UserNotificationPreferenceConnector = /** @class */ (function () {
    function UserNotificationPreferenceConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    UserNotificationPreferenceConnector.prototype.loadAll = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.loadAll(userId);
    };
    /**
     * @param {?} userId
     * @param {?} preferences
     * @return {?}
     */
    UserNotificationPreferenceConnector.prototype.update = /**
     * @param {?} userId
     * @param {?} preferences
     * @return {?}
     */
    function (userId, preferences) {
        return this.adapter.update(userId, preferences);
    };
    UserNotificationPreferenceConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserNotificationPreferenceConnector.ctorParameters = function () { return [
        { type: UserNotificationPreferenceAdapter }
    ]; };
    /** @nocollapse */ UserNotificationPreferenceConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserNotificationPreferenceConnector_Factory() { return new UserNotificationPreferenceConnector(i0.ɵɵinject(i1.UserNotificationPreferenceAdapter)); }, token: UserNotificationPreferenceConnector, providedIn: "root" });
    return UserNotificationPreferenceConnector;
}());
export { UserNotificationPreferenceConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserNotificationPreferenceConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlL3VzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7QUFHM0Y7SUFJRSw2Q0FBc0IsT0FBMEM7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBbUM7SUFBRyxDQUFDOzs7OztJQUVwRSxxREFBTzs7OztJQUFQLFVBQVEsTUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVELG9EQUFNOzs7OztJQUFOLFVBQU8sTUFBYyxFQUFFLFdBQXFDO1FBQzFELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsaUNBQWlDOzs7OENBRjFDO0NBa0JDLEFBYkQsSUFhQztTQVZZLG1DQUFtQzs7Ozs7O0lBQ2xDLHNEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlciB9IGZyb20gJy4vdXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5hZGFwdGVyJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblByZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUNvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIpIHt9XG5cbiAgbG9hZEFsbCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQWxsKHVzZXJJZCk7XG4gIH1cblxuICB1cGRhdGUodXNlcklkOiBzdHJpbmcsIHByZWZlcmVuY2VzOiBOb3RpZmljYXRpb25QcmVmZXJlbmNlW10pIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnVwZGF0ZSh1c2VySWQsIHByZWZlcmVuY2VzKTtcbiAgfVxufVxuIl19