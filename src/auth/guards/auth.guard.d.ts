import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { AuthService } from '../facade/auth.service';
import { AuthRedirectService } from './auth-redirect.service';
import * as ɵngcc0 from '@angular/core';
export declare class AuthGuard implements CanActivate {
    protected routingService: RoutingService;
    protected authService: AuthService;
    protected authRedirectService: AuthRedirectService;
    protected router: Router;
    constructor(routingService: RoutingService, authService: AuthService, authRedirectService: AuthRedirectService, router: Router);
    canActivate(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthGuard>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5kLnRzIiwic291cmNlcyI6WyJhdXRoLmd1YXJkLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7OztBQU9BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhSZWRpcmVjdFNlcnZpY2UgfSBmcm9tICcuL2F1dGgtcmVkaXJlY3Quc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSwgcm91dGVyOiBSb3V0ZXIpO1xuICAgIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG59XG4iXX0=