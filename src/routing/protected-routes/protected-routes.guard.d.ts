import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ProtectedRoutesService } from './protected-routes.service';
export declare class ProtectedRoutesGuard implements CanActivate {
    protected service: ProtectedRoutesService;
    protected authGuard: AuthGuard;
    constructor(service: ProtectedRoutesService, authGuard: AuthGuard);
    /**
     * When the anticipated url is protected, it switches to the AuthGuard. Otherwise emits true.
     */
    canActivate(route: ActivatedRouteSnapshot): Observable<boolean>;
}
