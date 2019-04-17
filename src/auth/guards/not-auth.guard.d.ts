import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { AuthService } from '../facade/auth.service';
export declare class NotAuthGuard implements CanActivate {
    private routingService;
    private authService;
    static GUARD_NAME: string;
    constructor(routingService: RoutingService, authService: AuthService);
    canActivate(): Observable<boolean>;
}
