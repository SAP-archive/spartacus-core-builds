import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfigService } from '../services/auth-config.service';
import { AuthHttpHeaderService } from '../services/auth-http-header.service';
/**
 * Responsible for catching auth errors and providing `Authorization` header for API calls.
 * Uses AuthHttpHeaderService for request manipulation and error handling. Interceptor only hooks into request send/received events.
 */
import * as ɵngcc0 from '@angular/core';
export declare class AuthInterceptor implements HttpInterceptor {
    protected authHttpHeaderService: AuthHttpHeaderService;
    protected authConfigService: AuthConfigService;
    constructor(authHttpHeaderService: AuthHttpHeaderService, authConfigService: AuthConfigService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected isExpiredToken(resp: HttpErrorResponse): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthInterceptor, never>;
}

//# sourceMappingURL=auth.interceptor.d.ts.map