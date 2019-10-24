/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartVoucherAdapter } from './cart-voucher.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./cart-voucher.adapter";
export class CartVoucherConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    add(userId, cartId, voucherId) {
        return this.adapter.add(userId, cartId, voucherId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} voucherId
     * @return {?}
     */
    remove(userId, cartId, voucherId) {
        return this.adapter.remove(userId, cartId, voucherId);
    }
}
CartVoucherConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CartVoucherConnector.ctorParameters = () => [
    { type: CartVoucherAdapter }
];
/** @nocollapse */ CartVoucherConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CartVoucherConnector_Factory() { return new CartVoucherConnector(i0.ɵɵinject(i1.CartVoucherAdapter)); }, token: CartVoucherConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CartVoucherConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2Nvbm5lY3RvcnMvdm91Y2hlci9jYXJ0LXZvdWNoZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLNUQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUMvQixZQUFzQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtJQUFHLENBQUM7Ozs7Ozs7SUFFOUMsR0FBRyxDQUNSLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7SUFFTSxNQUFNLENBQ1gsTUFBYyxFQUNkLE1BQWMsRUFDZCxTQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGtCQUFrQjs7Ozs7Ozs7SUFNYix1Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0Vm91Y2hlckFkYXB0ZXIgfSBmcm9tICcuL2NhcnQtdm91Y2hlci5hZGFwdGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRWb3VjaGVyQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IENhcnRWb3VjaGVyQWRhcHRlcikge31cblxuICBwdWJsaWMgYWRkKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHZvdWNoZXJJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmFkZCh1c2VySWQsIGNhcnRJZCwgdm91Y2hlcklkKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgdm91Y2hlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIucmVtb3ZlKHVzZXJJZCwgY2FydElkLCB2b3VjaGVySWQpO1xuICB9XG59XG4iXX0=