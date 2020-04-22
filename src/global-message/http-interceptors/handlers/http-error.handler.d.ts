import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { GlobalMessageService } from '../../facade/global-message.service';
import { Applicable, Priority } from '../../../util/applicable';
import * as ɵngcc0 from '@angular/core';
export declare abstract class HttpErrorHandler implements Applicable {
    protected globalMessageService: GlobalMessageService;
    constructor(globalMessageService: GlobalMessageService);
    /**
     * The http response status number which is handled by this handler.
     * Implementations can set the response status number, i.e. 404, so that
     * the handler can be found by the error interceptor.
     */
    responseStatus?: number;
    /**
     * Handles the error response for the respose status that is register for the handler
     * @param { HttpRequest<any> } request : http request
     * @param { HttpErrorResponse } errorResponse : Http error response
     */
    abstract handleError(request: HttpRequest<any>, errorResponse: HttpErrorResponse): void;
    /**
     * Error handlers are matched by the error `responseStatus` (i.e. 404). On top of the matching status
     * a priority can be added to distinguish multiple handles for the same response status.
     */
    hasMatch(errorResponse: HttpErrorResponse): boolean;
    abstract getPriority?(): Priority;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HttpErrorHandler, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5oYW5kbGVyLmQudHMiLCJzb3VyY2VzIjpbImh0dHAtZXJyb3IuaGFuZGxlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9nbG9iYWwtbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcGxpY2FibGUsIFByaW9yaXR5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9hcHBsaWNhYmxlJztcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEh0dHBFcnJvckhhbmRsZXIgaW1wbGVtZW50cyBBcHBsaWNhYmxlIHtcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogVGhlIGh0dHAgcmVzcG9uc2Ugc3RhdHVzIG51bWJlciB3aGljaCBpcyBoYW5kbGVkIGJ5IHRoaXMgaGFuZGxlci5cbiAgICAgKiBJbXBsZW1lbnRhdGlvbnMgY2FuIHNldCB0aGUgcmVzcG9uc2Ugc3RhdHVzIG51bWJlciwgaS5lLiA0MDQsIHNvIHRoYXRcbiAgICAgKiB0aGUgaGFuZGxlciBjYW4gYmUgZm91bmQgYnkgdGhlIGVycm9yIGludGVyY2VwdG9yLlxuICAgICAqL1xuICAgIHJlc3BvbnNlU3RhdHVzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGVycm9yIHJlc3BvbnNlIGZvciB0aGUgcmVzcG9zZSBzdGF0dXMgdGhhdCBpcyByZWdpc3RlciBmb3IgdGhlIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0geyBIdHRwUmVxdWVzdDxhbnk+IH0gcmVxdWVzdCA6IGh0dHAgcmVxdWVzdFxuICAgICAqIEBwYXJhbSB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZXJyb3JSZXNwb25zZSA6IEh0dHAgZXJyb3IgcmVzcG9uc2VcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBoYW5kbGVFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBlcnJvclJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRXJyb3IgaGFuZGxlcnMgYXJlIG1hdGNoZWQgYnkgdGhlIGVycm9yIGByZXNwb25zZVN0YXR1c2AgKGkuZS4gNDA0KS4gT24gdG9wIG9mIHRoZSBtYXRjaGluZyBzdGF0dXNcbiAgICAgKiBhIHByaW9yaXR5IGNhbiBiZSBhZGRlZCB0byBkaXN0aW5ndWlzaCBtdWx0aXBsZSBoYW5kbGVzIGZvciB0aGUgc2FtZSByZXNwb25zZSBzdGF0dXMuXG4gICAgICovXG4gICAgaGFzTWF0Y2goZXJyb3JSZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiBib29sZWFuO1xuICAgIGFic3RyYWN0IGdldFByaW9yaXR5PygpOiBQcmlvcml0eTtcbn1cbiJdfQ==