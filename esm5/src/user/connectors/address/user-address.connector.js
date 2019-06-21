/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserAddressAdapter } from './user-address.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-address.adapter";
var UserAddressConnector = /** @class */ (function () {
    function UserAddressConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    UserAddressConnector.prototype.getAll = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.loadAll(userId);
    };
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    UserAddressConnector.prototype.add = /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    function (userId, address) {
        return this.adapter.add(userId, address);
    };
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    UserAddressConnector.prototype.update = /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    function (userId, addressId, address) {
        return this.adapter.update(userId, addressId, address);
    };
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    UserAddressConnector.prototype.verify = /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    function (userId, address) {
        return this.adapter.verify(userId, address);
    };
    /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    UserAddressConnector.prototype.delete = /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    function (userId, addressId) {
        return this.adapter.delete(userId, addressId);
    };
    UserAddressConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserAddressConnector.ctorParameters = function () { return [
        { type: UserAddressAdapter }
    ]; };
    /** @nocollapse */ UserAddressConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserAddressConnector_Factory() { return new UserAddressConnector(i0.ɵɵinject(i1.UserAddressAdapter)); }, token: UserAddressConnector, providedIn: "root" });
    return UserAddressConnector;
}());
export { UserAddressConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserAddressConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2Nvbm5lY3RvcnMvYWRkcmVzcy91c2VyLWFkZHJlc3MuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFJNUQ7SUFJRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDOzs7OztJQUVyRCxxQ0FBTTs7OztJQUFOLFVBQU8sTUFBYztRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVELGtDQUFHOzs7OztJQUFILFVBQUksTUFBYyxFQUFFLE9BQWdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7Ozs7SUFFRCxxQ0FBTTs7Ozs7O0lBQU4sVUFBTyxNQUFjLEVBQUUsU0FBaUIsRUFBRSxPQUFnQjtRQUN4RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRUQscUNBQU07Ozs7O0lBQU4sVUFBTyxNQUFjLEVBQUUsT0FBZ0I7UUFDckMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBRUQscUNBQU07Ozs7O0lBQU4sVUFBTyxNQUFjLEVBQUUsU0FBaUI7UUFDdEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBeEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsa0JBQWtCOzs7K0JBRDNCO0NBOEJDLEFBekJELElBeUJDO1NBdEJZLG9CQUFvQjs7Ozs7O0lBQ25CLHVDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQWRhcHRlciB9IGZyb20gJy4vdXNlci1hZGRyZXNzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1ZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJBZGRyZXNzQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJBZGRyZXNzQWRhcHRlcikge31cblxuICBnZXRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEFsbCh1c2VySWQpO1xuICB9XG5cbiAgYWRkKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuYWRkKHVzZXJJZCwgYWRkcmVzcyk7XG4gIH1cblxuICB1cGRhdGUodXNlcklkOiBzdHJpbmcsIGFkZHJlc3NJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIudXBkYXRlKHVzZXJJZCwgYWRkcmVzc0lkLCBhZGRyZXNzKTtcbiAgfVxuXG4gIHZlcmlmeSh1c2VySWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8QWRkcmVzc1ZhbGlkYXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnZlcmlmeSh1c2VySWQsIGFkZHJlc3MpO1xuICB9XG5cbiAgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmRlbGV0ZSh1c2VySWQsIGFkZHJlc3NJZCk7XG4gIH1cbn1cbiJdfQ==