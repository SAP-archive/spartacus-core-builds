import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorHandler } from './handlers/http-error.handler';
export declare class HttpErrorInterceptor implements HttpInterceptor {
    private handlers;
    constructor(handlers: HttpErrorHandler[]);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected handleErrorResponse(request: HttpRequest<any>, response: HttpErrorResponse): void;
    /**
     * return the error handler that matches the `HttpResponseStatus` code.
     * If no handler is available, the UNKNOWN handler is returned.
     */
    protected getResponseHandler(response: HttpErrorResponse): HttpErrorHandler;
}
