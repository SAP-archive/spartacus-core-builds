import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsmAuthService } from '../facade/asm-auth.service';
export declare class CustomerSupportAgentTokenInterceptor implements HttpInterceptor {
    private asmAuthService;
    constructor(asmAuthService: AsmAuthService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private getCustomerSupportAgentToken;
}
