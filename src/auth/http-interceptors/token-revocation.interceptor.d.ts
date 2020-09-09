import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class TokenRevocationInterceptor implements HttpInterceptor {
    constructor();
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected isTokenRevocationRequest(request: HttpRequest<any>): boolean;
}
