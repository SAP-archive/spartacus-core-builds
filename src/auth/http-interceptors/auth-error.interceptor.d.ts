import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../facade/auth.service';
import { ClientErrorHandlingService } from '../services/client-error/client-error-handling.service';
import { UserErrorHandlingService } from '../services/user-error/user-error-handling.service';
import * as ɵngcc0 from '@angular/core';
export declare class AuthErrorInterceptor implements HttpInterceptor {
    private userErrorHandlingService;
    private clientErrorHandlingService;
    private authService;
    constructor(userErrorHandlingService: UserErrorHandlingService, clientErrorHandlingService: ClientErrorHandlingService, authService: AuthService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private isClientTokenRequest;
    private isExpiredToken;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthErrorInterceptor>;
}

//# sourceMappingURL=auth-error.interceptor.d.ts.map