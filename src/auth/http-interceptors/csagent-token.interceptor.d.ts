import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../facade/auth.service';
export declare class CustomerSupportAgentTokenInterceptor implements HttpInterceptor {
    private authService;
    constructor(authService: AuthService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private getCustomerSupportAgentToken;
}
