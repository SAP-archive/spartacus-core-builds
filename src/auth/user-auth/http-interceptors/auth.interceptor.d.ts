import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfigService } from '../services/auth-config.service';
import { AuthHeaderService } from '../services/auth-header.service';
/**
 * Responsible for catching auth errors and providing `Authorization` header for API calls.
 * Uses AuthHeaderService for request manipulation and error handling. Interceptor only hooks into request send/received events.
 */
export declare class AuthInterceptor implements HttpInterceptor {
    protected authHeaderService: AuthHeaderService;
    protected authConfigService: AuthConfigService;
    constructor(authHeaderService: AuthHeaderService, authConfigService: AuthConfigService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected isExpiredToken(resp: HttpErrorResponse): boolean;
}
