import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { UserCostCenterAdapter } from './user-cost-center.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-cost-center.adapter";
let UserCostCenterConnector = class UserCostCenterConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    getActiveList(userId) {
        return this.adapter.loadActiveList(userId);
    }
};
UserCostCenterConnector.ctorParameters = () => [
    { type: UserCostCenterAdapter }
];
UserCostCenterConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserCostCenterConnector_Factory() { return new UserCostCenterConnector(i0.ɵɵinject(i1.UserCostCenterAdapter)); }, token: UserCostCenterConnector, providedIn: "root" });
UserCostCenterConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserCostCenterConnector);
export { UserCostCenterConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL2Nvc3QtY2VudGVyL3VzZXItY29zdC1jZW50ZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFNbkUsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFDbEMsWUFBc0IsT0FBOEI7UUFBOUIsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7SUFBRyxDQUFDO0lBRXhELGFBQWEsQ0FBQyxNQUFjO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGLENBQUE7O1lBTGdDLHFCQUFxQjs7O0FBRHpDLHVCQUF1QjtJQUhuQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csdUJBQXVCLENBTW5DO1NBTlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29zdENlbnRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZy11bml0Lm1vZGVsJztcbmltcG9ydCB7IFVzZXJDb3N0Q2VudGVyQWRhcHRlciB9IGZyb20gJy4vdXNlci1jb3N0LWNlbnRlci5hZGFwdGVyJztcbmltcG9ydCB7IEVudGl0aWVzTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJDb3N0Q2VudGVyQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJDb3N0Q2VudGVyQWRhcHRlcikge31cblxuICBnZXRBY3RpdmVMaXN0KHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxFbnRpdGllc01vZGVsPENvc3RDZW50ZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQWN0aXZlTGlzdCh1c2VySWQpO1xuICB9XG59XG4iXX0=