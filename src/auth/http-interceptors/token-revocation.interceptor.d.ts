import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class TokenRevocationInterceptor implements HttpInterceptor {
    constructor();
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected isTokenRevocationRequest(request: HttpRequest<any>): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TokenRevocationInterceptor, never>;
}

//# sourceMappingURL=token-revocation.interceptor.d.ts.map