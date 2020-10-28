import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfigService } from '../services/auth-config.service';
import { AuthStorageService } from '../services/auth-storage.service';
/**
 * This interceptor is dedicated for Hybris OAuth server which requires `Authorization` header for revoke token calls.
 */
import * as ɵngcc0 from '@angular/core';
export declare class TokenRevocationInterceptor implements HttpInterceptor {
    protected authStorageService: AuthStorageService;
    protected authConfigService: AuthConfigService;
    constructor(authStorageService: AuthStorageService, authConfigService: AuthConfigService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected isTokenRevocationRequest(request: HttpRequest<any>): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TokenRevocationInterceptor, never>;
}

//# sourceMappingURL=token-revocation.interceptor.d.ts.map