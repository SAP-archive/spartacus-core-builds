import { Injectable } from '@angular/core';
import { CartConfig } from '../config/cart-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/cart-config";
export class CartConfigService {
    constructor(config) {
        this.config = config;
    }
    isSelectiveCartEnabled() {
        var _a, _b, _c;
        return Boolean((_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.cart) === null || _b === void 0 ? void 0 : _b.selectiveCart) === null || _c === void 0 ? void 0 : _c.enabled);
    }
}
CartConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartConfigService_Factory() { return new CartConfigService(i0.ɵɵinject(i1.CartConfig)); }, token: CartConfigService, providedIn: "root" });
CartConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CartConfigService.ctorParameters = () => [
    { type: CartConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NhcnQvc2VydmljZXMvY2FydC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBS25ELE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBc0IsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUFHLENBQUM7SUFFNUMsc0JBQXNCOztRQUNwQixPQUFPLE9BQU8sbUJBQUMsSUFBSSxDQUFDLE1BQU0sMENBQUUsSUFBSSwwQ0FBRSxhQUFhLDBDQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7WUFSRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NhcnQtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRDb25maWdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogQ2FydENvbmZpZykge31cblxuICBpc1NlbGVjdGl2ZUNhcnRFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuY29uZmlnPy5jYXJ0Py5zZWxlY3RpdmVDYXJ0Py5lbmFibGVkKTtcbiAgfVxufVxuIl19