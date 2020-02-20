import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerSupportAgentErrorHandlingService } from '../../asm/services/csagent-error-handling.service';
import * as ɵngcc0 from '@angular/core';
export declare class CustomerSupportAgentAuthErrorInterceptor implements HttpInterceptor {
    private csagentErrorHandlingService;
    constructor(csagentErrorHandlingService: CustomerSupportAgentErrorHandlingService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private isCustomerSupportAgentRequest;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerSupportAgentAuthErrorInterceptor>;
}

//# sourceMappingURL=csagent-auth-error.interceptor.d.ts.map