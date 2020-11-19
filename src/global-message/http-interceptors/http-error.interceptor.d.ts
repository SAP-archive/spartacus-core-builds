import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorHandler } from './handlers/http-error.handler';
import * as ɵngcc0 from '@angular/core';
export declare class HttpErrorInterceptor implements HttpInterceptor {
    protected handlers: HttpErrorHandler[];
    constructor(handlers: HttpErrorHandler[]);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected handleErrorResponse(request: HttpRequest<any>, response: HttpErrorResponse): void;
    /**
     * return the error handler that matches the `HttpResponseStatus` code.
     * If no handler is available, the UNKNOWN handler is returned.
     */
    protected getResponseHandler(response: HttpErrorResponse): HttpErrorHandler;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HttpErrorInterceptor, never>;
}

//# sourceMappingURL=http-error.interceptor.d.ts.map