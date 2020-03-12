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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5ndWFyZC5kLnRzIiwic291cmNlcyI6WyJwcm90ZWN0ZWQtcm91dGVzLmd1YXJkLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7OztBQVFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vYXV0aC9ndWFyZHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9wcm90ZWN0ZWQtcm91dGVzLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvdGVjdGVkUm91dGVzR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IFByb3RlY3RlZFJvdXRlc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGF1dGhHdWFyZDogQXV0aEd1YXJkO1xuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2U6IFByb3RlY3RlZFJvdXRlc1NlcnZpY2UsIGF1dGhHdWFyZDogQXV0aEd1YXJkKTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBhbnRpY2lwYXRlZCB1cmwgaXMgcHJvdGVjdGVkLCBpdCBzd2l0Y2hlcyB0byB0aGUgQXV0aEd1YXJkLiBPdGhlcndpc2UgZW1pdHMgdHJ1ZS5cbiAgICAgKi9cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG59XG4iXX0=