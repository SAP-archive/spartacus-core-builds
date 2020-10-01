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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthGuard, never>;
}

//# sourceMappingURL=auth.guard.d.ts.map