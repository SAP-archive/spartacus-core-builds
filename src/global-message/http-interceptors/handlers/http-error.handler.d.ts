import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { GlobalMessageService } from '../../facade/global-message.service';
import * as ɵngcc0 from '@angular/core';
export declare abstract class HttpErrorHandler {
    protected globalMessageService: GlobalMessageService;
    constructor(globalMessageService: GlobalMessageService);
    /**
     * The http response status number which is handled by this handler.
     * Implementations can set the response status number, i.e. 404, so that
     * the handler can be found by the error interceptor.
     */
    abstract responseStatus: number;
    /**
     * Handles the error response for the respose status that is register for the handler
     * @param { HttpRequest<any> } request : http request
     * @param { HttpErrorResponse } errorResponse : Http error response
     */
    abstract handleError(request: HttpRequest<any>, errorResponse: HttpErrorResponse): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HttpErrorHandler>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5oYW5kbGVyLmQudHMiLCJzb3VyY2VzIjpbImh0dHAtZXJyb3IuaGFuZGxlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWVBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2dsb2JhbC1tZXNzYWdlLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgSHR0cEVycm9ySGFuZGxlciB7XG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFRoZSBodHRwIHJlc3BvbnNlIHN0YXR1cyBudW1iZXIgd2hpY2ggaXMgaGFuZGxlZCBieSB0aGlzIGhhbmRsZXIuXG4gICAgICogSW1wbGVtZW50YXRpb25zIGNhbiBzZXQgdGhlIHJlc3BvbnNlIHN0YXR1cyBudW1iZXIsIGkuZS4gNDA0LCBzbyB0aGF0XG4gICAgICogdGhlIGhhbmRsZXIgY2FuIGJlIGZvdW5kIGJ5IHRoZSBlcnJvciBpbnRlcmNlcHRvci5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCByZXNwb25zZVN0YXR1czogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGVycm9yIHJlc3BvbnNlIGZvciB0aGUgcmVzcG9zZSBzdGF0dXMgdGhhdCBpcyByZWdpc3RlciBmb3IgdGhlIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0geyBIdHRwUmVxdWVzdDxhbnk+IH0gcmVxdWVzdCA6IGh0dHAgcmVxdWVzdFxuICAgICAqIEBwYXJhbSB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZXJyb3JSZXNwb25zZSA6IEh0dHAgZXJyb3IgcmVzcG9uc2VcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBoYW5kbGVFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBlcnJvclJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQ7XG59XG4iXX0=