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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HttpErrorInterceptor>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5kLnRzIiwic291cmNlcyI6WyJodHRwLWVycm9yLmludGVyY2VwdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7QUFVQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIdHRwRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gICAgcHJvdGVjdGVkIGhhbmRsZXJzOiBIdHRwRXJyb3JIYW5kbGVyW107XG4gICAgY29uc3RydWN0b3IoaGFuZGxlcnM6IEh0dHBFcnJvckhhbmRsZXJbXSk7XG4gICAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XG4gICAgcHJvdGVjdGVkIGhhbmRsZUVycm9yUmVzcG9uc2UocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiByZXR1cm4gdGhlIGVycm9yIGhhbmRsZXIgdGhhdCBtYXRjaGVzIHRoZSBgSHR0cFJlc3BvbnNlU3RhdHVzYCBjb2RlLlxuICAgICAqIElmIG5vIGhhbmRsZXIgaXMgYXZhaWxhYmxlLCB0aGUgVU5LTk9XTiBoYW5kbGVyIGlzIHJldHVybmVkLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRSZXNwb25zZUhhbmRsZXIocmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKTogSHR0cEVycm9ySGFuZGxlcjtcbn1cbiJdfQ==