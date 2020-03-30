import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { AuthService } from '../facade/auth.service';
import { AuthRedirectService } from './auth-redirect.service';
import * as ɵngcc0 from '@angular/core';
export declare class NotAuthGuard implements CanActivate {
    protected routingService: RoutingService;
    protected authService: AuthService;
    private authRedirectService;
    constructor(routingService: RoutingService, authService: AuthService, authRedirectService: AuthRedirectService);
    canActivate(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NotAuthGuard, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWF1dGguZ3VhcmQuZC50cyIsInNvdXJjZXMiOlsibm90LWF1dGguZ3VhcmQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoUmVkaXJlY3RTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXJlZGlyZWN0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTm90QXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBwcml2YXRlIGF1dGhSZWRpcmVjdFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Iocm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UpO1xuICAgIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG59XG4iXX0=