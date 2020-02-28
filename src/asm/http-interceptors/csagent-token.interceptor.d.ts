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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5pbnRlcmNlcHRvci5kLnRzIiwic291cmNlcyI6WyJjc2FnZW50LXRva2VuLmludGVyY2VwdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7O0FBS0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFzbUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2FzbS1hdXRoLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgICBwcml2YXRlIGFzbUF1dGhTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGFzbUF1dGhTZXJ2aWNlOiBBc21BdXRoU2VydmljZSk7XG4gICAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XG4gICAgcHJpdmF0ZSBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuO1xufVxuIl19