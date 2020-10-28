import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AuthGuard } from '../../auth/user-auth/guards/auth.guard';
import { ProtectedRoutesService } from './protected-routes.service';
import * as i0 from "@angular/core";
import * as i1 from "./protected-routes.service";
import * as i2 from "../../auth/user-auth/guards/auth.guard";
export class ProtectedRoutesGuard {
    constructor(service, authGuard) {
        this.service = service;
        this.authGuard = authGuard;
    }
    /**
     * When the anticipated url is protected, it switches to the AuthGuard. Otherwise emits true.
     */
    canActivate(route) {
        let urlSegments = route.url.map((seg) => seg.path);
        // For the root path `/` ActivatedRoute contains an empty array of segments:
        urlSegments = urlSegments.length ? urlSegments : [''];
        if (this.service.isUrlProtected(urlSegments)) {
            return this.authGuard.canActivate();
        }
        return of(true);
    }
}
ProtectedRoutesGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProtectedRoutesGuard_Factory() { return new ProtectedRoutesGuard(i0.ɵɵinject(i1.ProtectedRoutesService), i0.ɵɵinject(i2.AuthGuard)); }, token: ProtectedRoutesGuard, providedIn: "root" });
ProtectedRoutesGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ProtectedRoutesGuard.ctorParameters = () => [
    { type: ProtectedRoutesService },
    { type: AuthGuard }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3JvdXRpbmcvcHJvdGVjdGVkLXJvdXRlcy9wcm90ZWN0ZWQtcm91dGVzLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFHcEUsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUNZLE9BQStCLEVBQy9CLFNBQW9CO1FBRHBCLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDN0IsQ0FBQztJQUVKOztPQUVHO0lBQ0gsV0FBVyxDQUFDLEtBQTZCO1FBQ3ZDLElBQUksV0FBVyxHQUFhLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0QsNEVBQTRFO1FBQzVFLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdEQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM1QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDckM7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7O1lBcEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQUZ6QixzQkFBc0I7WUFEdEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9ndWFyZHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9wcm90ZWN0ZWQtcm91dGVzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFByb3RlY3RlZFJvdXRlc0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogUHJvdGVjdGVkUm91dGVzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aEd1YXJkOiBBdXRoR3VhcmRcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBhbnRpY2lwYXRlZCB1cmwgaXMgcHJvdGVjdGVkLCBpdCBzd2l0Y2hlcyB0byB0aGUgQXV0aEd1YXJkLiBPdGhlcndpc2UgZW1pdHMgdHJ1ZS5cbiAgICovXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGxldCB1cmxTZWdtZW50czogc3RyaW5nW10gPSByb3V0ZS51cmwubWFwKChzZWcpID0+IHNlZy5wYXRoKTtcblxuICAgIC8vIEZvciB0aGUgcm9vdCBwYXRoIGAvYCBBY3RpdmF0ZWRSb3V0ZSBjb250YWlucyBhbiBlbXB0eSBhcnJheSBvZiBzZWdtZW50czpcbiAgICB1cmxTZWdtZW50cyA9IHVybFNlZ21lbnRzLmxlbmd0aCA/IHVybFNlZ21lbnRzIDogWycnXTtcblxuICAgIGlmICh0aGlzLnNlcnZpY2UuaXNVcmxQcm90ZWN0ZWQodXJsU2VnbWVudHMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoR3VhcmQuY2FuQWN0aXZhdGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHRydWUpO1xuICB9XG59XG4iXX0=