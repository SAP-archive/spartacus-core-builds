/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ProtectedRoutesService } from './protected-routes.service';
import * as i0 from "@angular/core";
import * as i1 from "./protected-routes.service";
import * as i2 from "../../auth/guards/auth.guard";
export class ProtectedRoutesGuard {
    /**
     * @param {?} service
     * @param {?} authGuard
     */
    constructor(service, authGuard) {
        this.service = service;
        this.authGuard = authGuard;
    }
    /**
     * When the anticipated url is protected, it switches to the AuthGuard. Otherwise emits true.
     * @param {?} route
     * @return {?}
     */
    canActivate(route) {
        /** @type {?} */
        let urlSegments = route.url.map((/**
         * @param {?} seg
         * @return {?}
         */
        seg => seg.path));
        // For the root path `/` ActivatedRoute contains an empty array of segments:
        urlSegments = urlSegments.length ? urlSegments : [''];
        if (this.service.isUrlProtected(urlSegments)) {
            return this.authGuard.canActivate();
        }
        return of(true);
    }
}
ProtectedRoutesGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ProtectedRoutesGuard.ctorParameters = () => [
    { type: ProtectedRoutesService },
    { type: AuthGuard }
];
/** @nocollapse */ ProtectedRoutesGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProtectedRoutesGuard_Factory() { return new ProtectedRoutesGuard(i0.ɵɵinject(i1.ProtectedRoutesService), i0.ɵɵinject(i2.AuthGuard)); }, token: ProtectedRoutesGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProtectedRoutesGuard.prototype.service;
    /**
     * @type {?}
     * @protected
     */
    ProtectedRoutesGuard.prototype.authGuard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3Byb3RlY3RlZC1yb3V0ZXMvcHJvdGVjdGVkLXJvdXRlcy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUdwRSxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUMvQixZQUNZLE9BQStCLEVBQy9CLFNBQW9CO1FBRHBCLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDN0IsQ0FBQzs7Ozs7O0lBS0osV0FBVyxDQUFDLEtBQTZCOztZQUNuQyxXQUFXLEdBQWEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDO1FBRTFELDRFQUE0RTtRQUM1RSxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXRELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDNUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7O1lBcEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFGekIsc0JBQXNCO1lBRHRCLFNBQVM7Ozs7Ozs7O0lBTWQsdUNBQXlDOzs7OztJQUN6Qyx5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vYXV0aC9ndWFyZHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9wcm90ZWN0ZWQtcm91dGVzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFByb3RlY3RlZFJvdXRlc0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogUHJvdGVjdGVkUm91dGVzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aEd1YXJkOiBBdXRoR3VhcmRcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBhbnRpY2lwYXRlZCB1cmwgaXMgcHJvdGVjdGVkLCBpdCBzd2l0Y2hlcyB0byB0aGUgQXV0aEd1YXJkLiBPdGhlcndpc2UgZW1pdHMgdHJ1ZS5cbiAgICovXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgbGV0IHVybFNlZ21lbnRzOiBzdHJpbmdbXSA9IHJvdXRlLnVybC5tYXAoc2VnID0+IHNlZy5wYXRoKTtcblxuICAgIC8vIEZvciB0aGUgcm9vdCBwYXRoIGAvYCBBY3RpdmF0ZWRSb3V0ZSBjb250YWlucyBhbiBlbXB0eSBhcnJheSBvZiBzZWdtZW50czpcbiAgICB1cmxTZWdtZW50cyA9IHVybFNlZ21lbnRzLmxlbmd0aCA/IHVybFNlZ21lbnRzIDogWycnXTtcblxuICAgIGlmICh0aGlzLnNlcnZpY2UuaXNVcmxQcm90ZWN0ZWQodXJsU2VnbWVudHMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoR3VhcmQuY2FuQWN0aXZhdGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHRydWUpO1xuICB9XG59XG4iXX0=