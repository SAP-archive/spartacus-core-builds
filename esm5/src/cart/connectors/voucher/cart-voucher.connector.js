/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartVoucherAdapter } from './cart-voucher.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./cart-voucher.adapter";
var CartVoucherConnector = /** @class */ (function () {
    function CartVoucherConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    CartVoucherConnector.prototype.add = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    function (userId, cartId, voucherId) {
        return this.adapter.add(userId, cartId, voucherId);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    CartVoucherConnector.prototype.remove = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    function (userId, cartId, voucherId) {
        return this.adapter.remove(userId, cartId, voucherId);
    };
    CartVoucherConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartVoucherConnector.ctorParameters = function () { return [
        { type: CartVoucherAdapter }
    ]; };
    /** @nocollapse */ CartVoucherConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CartVoucherConnector_Factory() { return new CartVoucherConnector(i0.ɵɵinject(i1.CartVoucherAdapter)); }, token: CartVoucherConnector, providedIn: "root" });
    return CartVoucherConnector;
}());
export { CartVoucherConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CartVoucherConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2Nvbm5lY3RvcnMvdm91Y2hlci9jYXJ0LXZvdWNoZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFNUQ7SUFJRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDOzs7Ozs7O0lBRTlDLGtDQUFHOzs7Ozs7SUFBVixVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7SUFFTSxxQ0FBTTs7Ozs7O0lBQWIsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFNBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkFwQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxrQkFBa0I7OzsrQkFGM0I7Q0F5QkMsQUFyQkQsSUFxQkM7U0FsQlksb0JBQW9COzs7Ozs7SUFDbkIsdUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydFZvdWNoZXJBZGFwdGVyIH0gZnJvbSAnLi9jYXJ0LXZvdWNoZXIuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Vm91Y2hlckNvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBDYXJ0Vm91Y2hlckFkYXB0ZXIpIHt9XG5cbiAgcHVibGljIGFkZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICB2b3VjaGVySWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5hZGQodXNlcklkLCBjYXJ0SWQsIHZvdWNoZXJJZCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHZvdWNoZXJJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnJlbW92ZSh1c2VySWQsIGNhcnRJZCwgdm91Y2hlcklkKTtcbiAgfVxufVxuIl19