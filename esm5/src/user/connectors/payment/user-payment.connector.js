/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserPaymentAdapter } from './user-payment.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-payment.adapter";
var UserPaymentConnector = /** @class */ (function () {
    function UserPaymentConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    UserPaymentConnector.prototype.getAll = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.loadAll(userId);
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    UserPaymentConnector.prototype.delete = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        return this.adapter.delete(userId, paymentMethodID);
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    UserPaymentConnector.prototype.setDefault = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        return this.adapter.setDefault(userId, paymentMethodID);
    };
    UserPaymentConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserPaymentConnector.ctorParameters = function () { return [
        { type: UserPaymentAdapter }
    ]; };
    /** @nocollapse */ UserPaymentConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserPaymentConnector_Factory() { return new UserPaymentConnector(i0.ɵɵinject(i1.UserPaymentAdapter)); }, token: UserPaymentConnector, providedIn: "root" });
    return UserPaymentConnector;
}());
export { UserPaymentConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserPaymentConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2Nvbm5lY3RvcnMvcGF5bWVudC91c2VyLXBheW1lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFJNUQ7SUFJRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDOzs7OztJQUVyRCxxQ0FBTTs7OztJQUFOLFVBQU8sTUFBYztRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVELHFDQUFNOzs7OztJQUFOLFVBQU8sTUFBYyxFQUFFLGVBQXVCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVELHlDQUFVOzs7OztJQUFWLFVBQVcsTUFBYyxFQUFFLGVBQXVCO1FBQ2hELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzFELENBQUM7O2dCQWhCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLGtCQUFrQjs7OytCQUQzQjtDQXNCQyxBQWpCRCxJQWlCQztTQWRZLG9CQUFvQjs7Ozs7O0lBQ25CLHVDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4vdXNlci1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJQYXltZW50Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJQYXltZW50QWRhcHRlcikge31cblxuICBnZXRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRBbGwodXNlcklkKTtcbiAgfVxuXG4gIGRlbGV0ZSh1c2VySWQ6IHN0cmluZywgcGF5bWVudE1ldGhvZElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5kZWxldGUodXNlcklkLCBwYXltZW50TWV0aG9kSUQpO1xuICB9XG5cbiAgc2V0RGVmYXVsdCh1c2VySWQ6IHN0cmluZywgcGF5bWVudE1ldGhvZElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zZXREZWZhdWx0KHVzZXJJZCwgcGF5bWVudE1ldGhvZElEKTtcbiAgfVxufVxuIl19