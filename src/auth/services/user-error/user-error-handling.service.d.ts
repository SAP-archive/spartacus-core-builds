import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoutingService } from '../../../routing/facade/routing.service';
import { AuthService } from '../../facade/auth.service';
import { UserToken } from '../../models/token-types.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserErrorHandlingService {
    protected authService: AuthService;
    protected routingService: RoutingService;
    constructor(authService: AuthService, routingService: RoutingService);
    handleExpiredUserToken(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<UserToken>>;
    handleExpiredRefreshToken(): void;
    protected handleExpiredToken(): Observable<UserToken>;
    protected createNewRequestWithNewToken(request: HttpRequest<any>, token: UserToken): HttpRequest<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserErrorHandlingService, never>;
}

//# sourceMappingURL=user-error-handling.service.d.ts.map