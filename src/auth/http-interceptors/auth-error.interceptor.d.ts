import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../facade/auth.service';
import { ClientErrorHandlingService } from '../services/client-error/client-error-handling.service';
import { CustomerSupportAgentErrorHandlingService } from '../services/csagent-error/csagent-error-handling.service';
import { UserErrorHandlingService } from '../services/user-error/user-error-handling.service';
export declare class AuthErrorInterceptor implements HttpInterceptor {
    private userErrorHandlingService;
    private clientErrorHandlingService;
    private authService;
    private csagentErrorHandlingService?;
    constructor(userErrorHandlingService: UserErrorHandlingService, clientErrorHandlingService: ClientErrorHandlingService, authService: AuthService, csagentErrorHandlingService: CustomerSupportAgentErrorHandlingService);
    /**
     * @deprecated since version 1.3
     * Instead, use constructor(
     * userErrorHandlingService: UserErrorHandlingService,
     * clientErrorHandlingService: ClientErrorHandlingService,
     * authService: AuthService,
     * csagentErrorHandlingService: CustomerSupportAgentErrorHandlingService
     */
    constructor(userErrorHandlingService: UserErrorHandlingService, clientErrorHandlingService: ClientErrorHandlingService, authService: AuthService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private isClientTokenRequest;
    private isCustomerSupportAgentRequest;
    private isExpiredToken;
}
