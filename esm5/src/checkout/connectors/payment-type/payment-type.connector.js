import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PaymentTypeAdapter } from './payment-type.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./payment-type.adapter";
var PaymentTypeConnector = /** @class */ (function () {
    function PaymentTypeConnector(adapter) {
        this.adapter = adapter;
    }
    PaymentTypeConnector.prototype.getPaymentTypes = function () {
        return this.adapter.loadPaymentTypes();
    };
    PaymentTypeConnector.prototype.setPaymentType = function (userId, cartId, typeCode, poNumber) {
        return this.adapter.setPaymentType(userId, cartId, typeCode, poNumber);
    };
    PaymentTypeConnector.ctorParameters = function () { return [
        { type: PaymentTypeAdapter }
    ]; };
    PaymentTypeConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaymentTypeConnector_Factory() { return new PaymentTypeConnector(i0.ɵɵinject(i1.PaymentTypeAdapter)); }, token: PaymentTypeConnector, providedIn: "root" });
    PaymentTypeConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PaymentTypeConnector);
    return PaymentTypeConnector;
}());
export { PaymentTypeConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9jb25uZWN0b3JzL3BheW1lbnQtdHlwZS9wYXltZW50LXR5cGUuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFNNUQ7SUFDRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBRXJELDhDQUFlLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsNkNBQWMsR0FBZCxVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsUUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RSxDQUFDOztnQkFiOEIsa0JBQWtCOzs7SUFEdEMsb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxvQkFBb0IsQ0FlaEM7K0JBdkJEO0NBdUJDLEFBZkQsSUFlQztTQWZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBheW1lbnRUeXBlQWRhcHRlciB9IGZyb20gJy4vcGF5bWVudC10eXBlLmFkYXB0ZXInO1xuaW1wb3J0IHsgUGF5bWVudFR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRUeXBlQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFBheW1lbnRUeXBlQWRhcHRlcikge31cblxuICBnZXRQYXltZW50VHlwZXMoKTogT2JzZXJ2YWJsZTxQYXltZW50VHlwZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkUGF5bWVudFR5cGVzKCk7XG4gIH1cblxuICBzZXRQYXltZW50VHlwZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICB0eXBlQ29kZTogc3RyaW5nLFxuICAgIHBvTnVtYmVyPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zZXRQYXltZW50VHlwZSh1c2VySWQsIGNhcnRJZCwgdHlwZUNvZGUsIHBvTnVtYmVyKTtcbiAgfVxufVxuIl19