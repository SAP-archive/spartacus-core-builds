import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { AuthService } from '../facade/auth.service';
import { AuthRedirectService } from './auth-redirect.service';
export declare class NotAuthGuard implements CanActivate {
    protected routingService: RoutingService;
    protected authService: AuthService;
    private authRedirectService;
    constructor(routingService: RoutingService, authService: AuthService, authRedirectService: AuthRedirectService);
    canActivate(): Observable<boolean>;
}
