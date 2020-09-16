import { Injectable } from '@angular/core';
import { PaymentTypeAdapter } from './payment-type.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./payment-type.adapter";
export class PaymentTypeConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    getPaymentTypes() {
        return this.adapter.loadPaymentTypes();
    }
    setPaymentType(userId, cartId, typeCode, poNumber) {
        return this.adapter.setPaymentType(userId, cartId, typeCode, poNumber);
    }
}
PaymentTypeConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaymentTypeConnector_Factory() { return new PaymentTypeConnector(i0.ɵɵinject(i1.PaymentTypeAdapter)); }, token: PaymentTypeConnector, providedIn: "root" });
PaymentTypeConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PaymentTypeConnector.ctorParameters = () => [
    { type: PaymentTypeAdapter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC10eXBlL3BheW1lbnQtdHlwZS5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBTTVELE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBRXJELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsY0FBYyxDQUNaLE1BQWMsRUFDZCxNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsUUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7O1lBakJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTFEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGF5bWVudFR5cGVBZGFwdGVyIH0gZnJvbSAnLi9wYXltZW50LXR5cGUuYWRhcHRlcic7XG5pbXBvcnQgeyBQYXltZW50VHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudFR5cGVDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogUGF5bWVudFR5cGVBZGFwdGVyKSB7fVxuXG4gIGdldFBheW1lbnRUeXBlcygpOiBPYnNlcnZhYmxlPFBheW1lbnRUeXBlW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRQYXltZW50VHlwZXMoKTtcbiAgfVxuXG4gIHNldFBheW1lbnRUeXBlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHR5cGVDb2RlOiBzdHJpbmcsXG4gICAgcG9OdW1iZXI/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnNldFBheW1lbnRUeXBlKHVzZXJJZCwgY2FydElkLCB0eXBlQ29kZSwgcG9OdW1iZXIpO1xuICB9XG59XG4iXX0=