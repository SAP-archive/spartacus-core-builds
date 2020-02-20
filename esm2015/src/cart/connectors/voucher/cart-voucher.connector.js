import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CartVoucherAdapter } from './cart-voucher.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./cart-voucher.adapter";
let CartVoucherConnector = class CartVoucherConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    add(userId, cartId, voucherId) {
        return this.adapter.add(userId, cartId, voucherId);
    }
    remove(userId, cartId, voucherId) {
        return this.adapter.remove(userId, cartId, voucherId);
    }
};
CartVoucherConnector.ctorParameters = () => [
    { type: CartVoucherAdapter }
];
CartVoucherConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartVoucherConnector_Factory() { return new CartVoucherConnector(i0.ɵɵinject(i1.CartVoucherAdapter)); }, token: CartVoucherConnector, providedIn: "root" });
CartVoucherConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartVoucherConnector);
export { CartVoucherConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2Nvbm5lY3RvcnMvdm91Y2hlci9jYXJ0LXZvdWNoZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLNUQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsWUFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBRTlDLEdBQUcsQ0FDUixNQUFjLEVBQ2QsTUFBYyxFQUNkLFNBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sTUFBTSxDQUNYLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRixDQUFBOztZQWpCZ0Msa0JBQWtCOzs7QUFEdEMsb0JBQW9CO0lBSGhDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxvQkFBb0IsQ0FrQmhDO1NBbEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRWb3VjaGVyQWRhcHRlciB9IGZyb20gJy4vY2FydC12b3VjaGVyLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFZvdWNoZXJDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogQ2FydFZvdWNoZXJBZGFwdGVyKSB7fVxuXG4gIHB1YmxpYyBhZGQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgdm91Y2hlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuYWRkKHVzZXJJZCwgY2FydElkLCB2b3VjaGVySWQpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICB2b3VjaGVySWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5yZW1vdmUodXNlcklkLCBjYXJ0SWQsIHZvdWNoZXJJZCk7XG4gIH1cbn1cbiJdfQ==