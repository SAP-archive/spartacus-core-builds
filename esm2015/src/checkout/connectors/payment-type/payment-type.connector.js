import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PaymentTypeAdapter } from './payment-type.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./payment-type.adapter";
let PaymentTypeConnector = class PaymentTypeConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    getPaymentTypes() {
        return this.adapter.loadPaymentTypes();
    }
    setPaymentType(userId, cartId, typeCode, poNumber) {
        return this.adapter.setPaymentType(userId, cartId, typeCode, poNumber);
    }
};
PaymentTypeConnector.ctorParameters = () => [
    { type: PaymentTypeAdapter }
];
PaymentTypeConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaymentTypeConnector_Factory() { return new PaymentTypeConnector(i0.ɵɵinject(i1.PaymentTypeAdapter)); }, token: PaymentTypeConnector, providedIn: "root" });
PaymentTypeConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PaymentTypeConnector);
export { PaymentTypeConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9jb25uZWN0b3JzL3BheW1lbnQtdHlwZS9wYXltZW50LXR5cGUuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFNNUQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsWUFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBRXJELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsY0FBYyxDQUNaLE1BQWMsRUFDZCxNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsUUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RSxDQUFDO0NBQ0YsQ0FBQTs7WUFkZ0Msa0JBQWtCOzs7QUFEdEMsb0JBQW9CO0lBSGhDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxvQkFBb0IsQ0FlaEM7U0FmWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXltZW50VHlwZUFkYXB0ZXIgfSBmcm9tICcuL3BheW1lbnQtdHlwZS5hZGFwdGVyJztcbmltcG9ydCB7IFBheW1lbnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50VHlwZUNvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBQYXltZW50VHlwZUFkYXB0ZXIpIHt9XG5cbiAgZ2V0UGF5bWVudFR5cGVzKCk6IE9ic2VydmFibGU8UGF5bWVudFR5cGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZFBheW1lbnRUeXBlcygpO1xuICB9XG5cbiAgc2V0UGF5bWVudFR5cGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgdHlwZUNvZGU6IHN0cmluZyxcbiAgICBwb051bWJlcj86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuc2V0UGF5bWVudFR5cGUodXNlcklkLCBjYXJ0SWQsIHR5cGVDb2RlLCBwb051bWJlcik7XG4gIH1cbn1cbiJdfQ==