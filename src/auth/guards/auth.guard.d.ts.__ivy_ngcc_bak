import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { AuthService } from '../facade/auth.service';
import { AuthRedirectService } from './auth-redirect.service';
export declare class AuthGuard implements CanActivate {
    protected routingService: RoutingService;
    protected authService: AuthService;
    protected authRedirectService: AuthRedirectService;
    protected router: Router;
    constructor(routingService: RoutingService, authService: AuthService, authRedirectService: AuthRedirectService, router: Router);
    canActivate(): Observable<boolean>;
}
