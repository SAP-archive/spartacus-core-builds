import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CartConfig } from '../config/cart-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/cart-config";
var CartConfigService = /** @class */ (function () {
    function CartConfigService(config) {
        this.config = config;
    }
    CartConfigService.prototype.isSelectiveCartEnabled = function () {
        var _a, _b, _c;
        return Boolean((_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.cart) === null || _b === void 0 ? void 0 : _b.selectiveCart) === null || _c === void 0 ? void 0 : _c.enabled);
    };
    CartConfigService.ctorParameters = function () { return [
        { type: CartConfig }
    ]; };
    CartConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartConfigService_Factory() { return new CartConfigService(i0.ɵɵinject(i1.CartConfig)); }, token: CartConfigService, providedIn: "root" });
    CartConfigService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartConfigService);
    return CartConfigService;
}());
export { CartConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3NlcnZpY2VzL2NhcnQtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFLbkQ7SUFDRSwyQkFBc0IsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUFHLENBQUM7SUFFNUMsa0RBQXNCLEdBQXRCOztRQUNFLE9BQU8sT0FBTyxtQkFBQyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxJQUFJLDBDQUFFLGFBQWEsMENBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBSjZCLFVBQVU7OztJQUQ3QixpQkFBaUI7UUFIN0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGlCQUFpQixDQU03Qjs0QkFaRDtDQVlDLEFBTkQsSUFNQztTQU5ZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY2FydC1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydENvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBDYXJ0Q29uZmlnKSB7fVxuXG4gIGlzU2VsZWN0aXZlQ2FydEVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5jb25maWc/LmNhcnQ/LnNlbGVjdGl2ZUNhcnQ/LmVuYWJsZWQpO1xuICB9XG59XG4iXX0=