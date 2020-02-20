import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CartVoucherAdapter } from './cart-voucher.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./cart-voucher.adapter";
var CartVoucherConnector = /** @class */ (function () {
    function CartVoucherConnector(adapter) {
        this.adapter = adapter;
    }
    CartVoucherConnector.prototype.add = function (userId, cartId, voucherId) {
        return this.adapter.add(userId, cartId, voucherId);
    };
    CartVoucherConnector.prototype.remove = function (userId, cartId, voucherId) {
        return this.adapter.remove(userId, cartId, voucherId);
    };
    CartVoucherConnector.ctorParameters = function () { return [
        { type: CartVoucherAdapter }
    ]; };
    CartVoucherConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartVoucherConnector_Factory() { return new CartVoucherConnector(i0.ɵɵinject(i1.CartVoucherAdapter)); }, token: CartVoucherConnector, providedIn: "root" });
    CartVoucherConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartVoucherConnector);
    return CartVoucherConnector;
}());
export { CartVoucherConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2Nvbm5lY3RvcnMvdm91Y2hlci9jYXJ0LXZvdWNoZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLNUQ7SUFDRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBRTlDLGtDQUFHLEdBQVYsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFNBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0scUNBQU0sR0FBYixVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7O2dCQWhCOEIsa0JBQWtCOzs7SUFEdEMsb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxvQkFBb0IsQ0FrQmhDOytCQXpCRDtDQXlCQyxBQWxCRCxJQWtCQztTQWxCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0Vm91Y2hlckFkYXB0ZXIgfSBmcm9tICcuL2NhcnQtdm91Y2hlci5hZGFwdGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRWb3VjaGVyQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IENhcnRWb3VjaGVyQWRhcHRlcikge31cblxuICBwdWJsaWMgYWRkKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHZvdWNoZXJJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmFkZCh1c2VySWQsIGNhcnRJZCwgdm91Y2hlcklkKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgdm91Y2hlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIucmVtb3ZlKHVzZXJJZCwgY2FydElkLCB2b3VjaGVySWQpO1xuICB9XG59XG4iXX0=