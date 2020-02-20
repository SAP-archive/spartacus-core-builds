import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsmAuthService } from '../facade/asm-auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class CustomerSupportAgentTokenInterceptor implements HttpInterceptor {
    private asmAuthService;
    constructor(asmAuthService: AsmAuthService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private getCustomerSupportAgentToken;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerSupportAgentTokenInterceptor>;
}

//# sourceMappingURL=csagent-token.interceptor.d.ts.map