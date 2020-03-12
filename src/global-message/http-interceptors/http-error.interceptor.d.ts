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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5kLnRzIiwic291cmNlcyI6WyJodHRwLWVycm9yLmludGVyY2VwdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvaHR0cC1lcnJvci5oYW5kbGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEh0dHBFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgICBwcm90ZWN0ZWQgaGFuZGxlcnM6IEh0dHBFcnJvckhhbmRsZXJbXTtcbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyczogSHR0cEVycm9ySGFuZGxlcltdKTtcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcbiAgICBwcm90ZWN0ZWQgaGFuZGxlRXJyb3JSZXNwb25zZShyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgZXJyb3IgaGFuZGxlciB0aGF0IG1hdGNoZXMgdGhlIGBIdHRwUmVzcG9uc2VTdGF0dXNgIGNvZGUuXG4gICAgICogSWYgbm8gaGFuZGxlciBpcyBhdmFpbGFibGUsIHRoZSBVTktOT1dOIGhhbmRsZXIgaXMgcmV0dXJuZWQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFJlc3BvbnNlSGFuZGxlcihyZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiBIdHRwRXJyb3JIYW5kbGVyO1xufVxuIl19