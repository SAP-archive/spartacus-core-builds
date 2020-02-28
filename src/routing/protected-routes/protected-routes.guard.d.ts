import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ProtectedRoutesService } from './protected-routes.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProtectedRoutesGuard implements CanActivate {
    protected service: ProtectedRoutesService;
    protected authGuard: AuthGuard;
    constructor(service: ProtectedRoutesService, authGuard: AuthGuard);
    /**
     * When the anticipated url is protected, it switches to the AuthGuard. Otherwise emits true.
     */
    canActivate(route: ActivatedRouteSnapshot): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProtectedRoutesGuard>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5ndWFyZC5kLnRzIiwic291cmNlcyI6WyJwcm90ZWN0ZWQtcm91dGVzLmd1YXJkLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7OztBQVFBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4uLy4uL2F1dGgvZ3VhcmRzL2F1dGguZ3VhcmQnO1xuaW1wb3J0IHsgUHJvdGVjdGVkUm91dGVzU2VydmljZSB9IGZyb20gJy4vcHJvdGVjdGVkLXJvdXRlcy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb3RlY3RlZFJvdXRlc0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhdXRoR3VhcmQ6IEF1dGhHdWFyZDtcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlLCBhdXRoR3VhcmQ6IEF1dGhHdWFyZCk7XG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgYW50aWNpcGF0ZWQgdXJsIGlzIHByb3RlY3RlZCwgaXQgc3dpdGNoZXMgdG8gdGhlIEF1dGhHdWFyZC4gT3RoZXJ3aXNlIGVtaXRzIHRydWUuXG4gICAgICovXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xufVxuIl19