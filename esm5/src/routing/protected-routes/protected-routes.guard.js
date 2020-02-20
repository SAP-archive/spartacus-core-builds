import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ProtectedRoutesService } from './protected-routes.service';
import * as i0 from "@angular/core";
import * as i1 from "./protected-routes.service";
import * as i2 from "../../auth/guards/auth.guard";
var ProtectedRoutesGuard = /** @class */ (function () {
    function ProtectedRoutesGuard(service, authGuard) {
        this.service = service;
        this.authGuard = authGuard;
    }
    /**
     * When the anticipated url is protected, it switches to the AuthGuard. Otherwise emits true.
     */
    ProtectedRoutesGuard.prototype.canActivate = function (route) {
        var urlSegments = route.url.map(function (seg) { return seg.path; });
        // For the root path `/` ActivatedRoute contains an empty array of segments:
        urlSegments = urlSegments.length ? urlSegments : [''];
        if (this.service.isUrlProtected(urlSegments)) {
            return this.authGuard.canActivate();
        }
        return of(true);
    };
    ProtectedRoutesGuard.ctorParameters = function () { return [
        { type: ProtectedRoutesService },
        { type: AuthGuard }
    ]; };
    ProtectedRoutesGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProtectedRoutesGuard_Factory() { return new ProtectedRoutesGuard(i0.ɵɵinject(i1.ProtectedRoutesService), i0.ɵɵinject(i2.AuthGuard)); }, token: ProtectedRoutesGuard, providedIn: "root" });
    ProtectedRoutesGuard = __decorate([
        Injectable({ providedIn: 'root' })
    ], ProtectedRoutesGuard);
    return ProtectedRoutesGuard;
}());
export { ProtectedRoutesGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3Byb3RlY3RlZC1yb3V0ZXMvcHJvdGVjdGVkLXJvdXRlcy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUdwRTtJQUNFLDhCQUNZLE9BQStCLEVBQy9CLFNBQW9CO1FBRHBCLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDN0IsQ0FBQztJQUVKOztPQUVHO0lBQ0gsMENBQVcsR0FBWCxVQUFZLEtBQTZCO1FBQ3ZDLElBQUksV0FBVyxHQUFhLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBUixDQUFRLENBQUMsQ0FBQztRQUUzRCw0RUFBNEU7UUFDNUUsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0RCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNyQztRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7O2dCQWpCb0Isc0JBQXNCO2dCQUNwQixTQUFTOzs7SUFIckIsb0JBQW9CO1FBRGhDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixvQkFBb0IsQ0FvQmhDOytCQTNCRDtDQTJCQyxBQXBCRCxJQW9CQztTQXBCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vYXV0aC9ndWFyZHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9wcm90ZWN0ZWQtcm91dGVzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFByb3RlY3RlZFJvdXRlc0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogUHJvdGVjdGVkUm91dGVzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aEd1YXJkOiBBdXRoR3VhcmRcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBhbnRpY2lwYXRlZCB1cmwgaXMgcHJvdGVjdGVkLCBpdCBzd2l0Y2hlcyB0byB0aGUgQXV0aEd1YXJkLiBPdGhlcndpc2UgZW1pdHMgdHJ1ZS5cbiAgICovXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgbGV0IHVybFNlZ21lbnRzOiBzdHJpbmdbXSA9IHJvdXRlLnVybC5tYXAoc2VnID0+IHNlZy5wYXRoKTtcblxuICAgIC8vIEZvciB0aGUgcm9vdCBwYXRoIGAvYCBBY3RpdmF0ZWRSb3V0ZSBjb250YWlucyBhbiBlbXB0eSBhcnJheSBvZiBzZWdtZW50czpcbiAgICB1cmxTZWdtZW50cyA9IHVybFNlZ21lbnRzLmxlbmd0aCA/IHVybFNlZ21lbnRzIDogWycnXTtcblxuICAgIGlmICh0aGlzLnNlcnZpY2UuaXNVcmxQcm90ZWN0ZWQodXJsU2VnbWVudHMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoR3VhcmQuY2FuQWN0aXZhdGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHRydWUpO1xuICB9XG59XG4iXX0=