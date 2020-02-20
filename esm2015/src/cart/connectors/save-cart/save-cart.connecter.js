import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SaveCartAdapter } from './save-cart.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./save-cart.adapter";
let SaveCartConnector = class SaveCartConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    saveCart(userId, cartId, saveCartName, saveCartDescription) {
        return this.adapter.saveCart(userId, cartId, saveCartName, saveCartDescription);
    }
};
SaveCartConnector.ctorParameters = () => [
    { type: SaveCartAdapter }
];
SaveCartConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function SaveCartConnector_Factory() { return new SaveCartConnector(i0.ɵɵinject(i1.SaveCartAdapter)); }, token: SaveCartConnector, providedIn: "root" });
SaveCartConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SaveCartConnector);
export { SaveCartConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1jYXJ0LmNvbm5lY3Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2Nvbm5lY3RvcnMvc2F2ZS1jYXJ0L3NhdmUtY2FydC5jb25uZWN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFLdEQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFDNUIsWUFBc0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7SUFBRyxDQUFDO0lBRTNDLFFBQVEsQ0FDYixNQUFjLEVBQ2QsTUFBYyxFQUNkLFlBQXFCLEVBQ3JCLG1CQUE0QjtRQUU1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUMxQixNQUFNLEVBQ04sTUFBTSxFQUNOLFlBQVksRUFDWixtQkFBbUIsQ0FDcEIsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQWZnQyxlQUFlOzs7QUFEbkMsaUJBQWlCO0lBSDdCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxpQkFBaUIsQ0FnQjdCO1NBaEJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNhdmVDYXJ0UmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBTYXZlQ2FydEFkYXB0ZXIgfSBmcm9tICcuL3NhdmUtY2FydC5hZGFwdGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNhdmVDYXJ0Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFNhdmVDYXJ0QWRhcHRlcikge31cblxuICBwdWJsaWMgc2F2ZUNhcnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgc2F2ZUNhcnROYW1lPzogc3RyaW5nLFxuICAgIHNhdmVDYXJ0RGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxTYXZlQ2FydFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuc2F2ZUNhcnQoXG4gICAgICB1c2VySWQsXG4gICAgICBjYXJ0SWQsXG4gICAgICBzYXZlQ2FydE5hbWUsXG4gICAgICBzYXZlQ2FydERlc2NyaXB0aW9uXG4gICAgKTtcbiAgfVxufVxuIl19