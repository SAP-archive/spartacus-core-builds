/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserDetailsAdapter } from './user-details.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-details.adapter";
var UserDetailsConnector = /** @class */ (function () {
    function UserDetailsConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    UserDetailsConnector.prototype.get = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.load(userId);
    };
    /**
     * @param {?} username
     * @param {?} user
     * @return {?}
     */
    UserDetailsConnector.prototype.update = /**
     * @param {?} username
     * @param {?} user
     * @return {?}
     */
    function (username, user) {
        return this.adapter.update(username, user);
    };
    UserDetailsConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserDetailsConnector.ctorParameters = function () { return [
        { type: UserDetailsAdapter }
    ]; };
    /** @nocollapse */ UserDetailsConnector.ngInjectableDef = i0.defineInjectable({ factory: function UserDetailsConnector_Factory() { return new UserDetailsConnector(i0.inject(i1.UserDetailsAdapter)); }, token: UserDetailsConnector, providedIn: "root" });
    return UserDetailsConnector;
}());
export { UserDetailsConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserDetailsConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2Nvbm5lY3RvcnMvZGV0YWlscy91c2VyLWRldGFpbHMuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFJNUQ7SUFJRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDOzs7OztJQUVyRCxrQ0FBRzs7OztJQUFILFVBQUksTUFBYztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUVELHFDQUFNOzs7OztJQUFOLFVBQU8sUUFBZ0IsRUFBRSxJQUFVO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsa0JBQWtCOzs7K0JBRDNCO0NBa0JDLEFBYkQsSUFhQztTQVZZLG9CQUFvQjs7Ozs7O0lBQ25CLHVDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJEZXRhaWxzQWRhcHRlciB9IGZyb20gJy4vdXNlci1kZXRhaWxzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckRldGFpbHNDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogVXNlckRldGFpbHNBZGFwdGVyKSB7fVxuXG4gIGdldCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZCh1c2VySWQpO1xuICB9XG5cbiAgdXBkYXRlKHVzZXJuYW1lOiBzdHJpbmcsIHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci51cGRhdGUodXNlcm5hbWUsIHVzZXIpO1xuICB9XG59XG4iXX0=