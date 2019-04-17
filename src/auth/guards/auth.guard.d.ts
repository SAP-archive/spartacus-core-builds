import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { AuthService } from '../facade/auth.service';
export declare class AuthGuard implements CanActivate {
    private routingService;
    private authService;
    static GUARD_NAME: string;
    constructor(routingService: RoutingService, authService: AuthService);
    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
