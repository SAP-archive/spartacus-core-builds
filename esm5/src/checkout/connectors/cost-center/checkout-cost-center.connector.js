import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CheckoutCostCenterAdapter } from './checkout-cost-center.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./checkout-cost-center.adapter";
var CheckoutCostCenterConnector = /** @class */ (function () {
    function CheckoutCostCenterConnector(adapter) {
        this.adapter = adapter;
    }
    CheckoutCostCenterConnector.prototype.setCostCenter = function (userId, cartId, costCenterId) {
        return this.adapter.setCostCenter(userId, cartId, costCenterId);
    };
    CheckoutCostCenterConnector.ctorParameters = function () { return [
        { type: CheckoutCostCenterAdapter }
    ]; };
    CheckoutCostCenterConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutCostCenterConnector_Factory() { return new CheckoutCostCenterConnector(i0.ɵɵinject(i1.CheckoutCostCenterAdapter)); }, token: CheckoutCostCenterConnector, providedIn: "root" });
    CheckoutCostCenterConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutCostCenterConnector);
    return CheckoutCostCenterConnector;
}());
export { CheckoutCostCenterConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29zdC1jZW50ZXIuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY29zdC1jZW50ZXIvY2hlY2tvdXQtY29zdC1jZW50ZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFNM0U7SUFDRSxxQ0FBc0IsT0FBa0M7UUFBbEMsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7SUFBRyxDQUFDO0lBRTVELG1EQUFhLEdBQWIsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFlBQW9CO1FBRXBCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDOztnQkFSOEIseUJBQXlCOzs7SUFEN0MsMkJBQTJCO1FBSHZDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVywyQkFBMkIsQ0FVdkM7c0NBbEJEO0NBa0JDLEFBVkQsSUFVQztTQVZZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0Q29zdENlbnRlckFkYXB0ZXIgfSBmcm9tICcuL2NoZWNrb3V0LWNvc3QtY2VudGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRDb3N0Q2VudGVyQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IENoZWNrb3V0Q29zdENlbnRlckFkYXB0ZXIpIHt9XG5cbiAgc2V0Q29zdENlbnRlcihcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBjb3N0Q2VudGVySWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnNldENvc3RDZW50ZXIodXNlcklkLCBjYXJ0SWQsIGNvc3RDZW50ZXJJZCk7XG4gIH1cbn1cbiJdfQ==