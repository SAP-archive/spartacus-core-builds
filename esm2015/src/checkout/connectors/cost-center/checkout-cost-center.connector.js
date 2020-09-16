import { Injectable } from '@angular/core';
import { CheckoutCostCenterAdapter } from './checkout-cost-center.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./checkout-cost-center.adapter";
export class CheckoutCostCenterConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    setCostCenter(userId, cartId, costCenterId) {
        return this.adapter.setCostCenter(userId, cartId, costCenterId);
    }
}
CheckoutCostCenterConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutCostCenterConnector_Factory() { return new CheckoutCostCenterConnector(i0.ɵɵinject(i1.CheckoutCostCenterAdapter)); }, token: CheckoutCostCenterConnector, providedIn: "root" });
CheckoutCostCenterConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutCostCenterConnector.ctorParameters = () => [
    { type: CheckoutCostCenterAdapter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29zdC1jZW50ZXIuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvY2hlY2tvdXQvY29ubmVjdG9ycy9jb3N0LWNlbnRlci9jaGVja291dC1jb3N0LWNlbnRlci5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBTTNFLE1BQU0sT0FBTywyQkFBMkI7SUFDdEMsWUFBc0IsT0FBa0M7UUFBbEMsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7SUFBRyxDQUFDO0lBRTVELGFBQWEsQ0FDWCxNQUFjLEVBQ2QsTUFBYyxFQUNkLFlBQW9CO1FBRXBCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7O1lBWkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFMUSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dENvc3RDZW50ZXJBZGFwdGVyIH0gZnJvbSAnLi9jaGVja291dC1jb3N0LWNlbnRlci5hZGFwdGVyJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29zdENlbnRlckNvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBDaGVja291dENvc3RDZW50ZXJBZGFwdGVyKSB7fVxuXG4gIHNldENvc3RDZW50ZXIoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgY29zdENlbnRlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zZXRDb3N0Q2VudGVyKHVzZXJJZCwgY2FydElkLCBjb3N0Q2VudGVySWQpO1xuICB9XG59XG4iXX0=