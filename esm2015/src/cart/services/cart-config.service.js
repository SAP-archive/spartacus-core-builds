import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CartConfig } from '../config/cart-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/cart-config";
let CartConfigService = class CartConfigService {
    constructor(config) {
        this.config = config;
    }
    isSelectiveCartEnabled() {
        var _a, _b, _c;
        return Boolean((_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.cart) === null || _b === void 0 ? void 0 : _b.selectiveCart) === null || _c === void 0 ? void 0 : _c.enabled);
    }
};
CartConfigService.ctorParameters = () => [
    { type: CartConfig }
];
CartConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartConfigService_Factory() { return new CartConfigService(i0.ɵɵinject(i1.CartConfig)); }, token: CartConfigService, providedIn: "root" });
CartConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartConfigService);
export { CartConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3NlcnZpY2VzL2NhcnQtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFLbkQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFDNUIsWUFBc0IsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUFHLENBQUM7SUFFNUMsc0JBQXNCOztRQUNwQixPQUFPLE9BQU8sbUJBQUMsSUFBSSxDQUFDLE1BQU0sMENBQUUsSUFBSSwwQ0FBRSxhQUFhLDBDQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDRixDQUFBOztZQUwrQixVQUFVOzs7QUFEN0IsaUJBQWlCO0lBSDdCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxpQkFBaUIsQ0FNN0I7U0FOWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NhcnQtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRDb25maWdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogQ2FydENvbmZpZykge31cblxuICBpc1NlbGVjdGl2ZUNhcnRFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuY29uZmlnPy5jYXJ0Py5zZWxlY3RpdmVDYXJ0Py5lbmFibGVkKTtcbiAgfVxufVxuIl19