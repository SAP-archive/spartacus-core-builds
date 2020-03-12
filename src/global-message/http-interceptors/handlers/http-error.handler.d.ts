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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5oYW5kbGVyLmQudHMiLCJzb3VyY2VzIjpbImh0dHAtZXJyb3IuaGFuZGxlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogVGhlIGh0dHAgcmVzcG9uc2Ugc3RhdHVzIG51bWJlciB3aGljaCBpcyBoYW5kbGVkIGJ5IHRoaXMgaGFuZGxlci5cbiAgICAgKiBJbXBsZW1lbnRhdGlvbnMgY2FuIHNldCB0aGUgcmVzcG9uc2Ugc3RhdHVzIG51bWJlciwgaS5lLiA0MDQsIHNvIHRoYXRcbiAgICAgKiB0aGUgaGFuZGxlciBjYW4gYmUgZm91bmQgYnkgdGhlIGVycm9yIGludGVyY2VwdG9yLlxuICAgICAqL1xuICAgIGFic3RyYWN0IHJlc3BvbnNlU3RhdHVzOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgZXJyb3IgcmVzcG9uc2UgZm9yIHRoZSByZXNwb3NlIHN0YXR1cyB0aGF0IGlzIHJlZ2lzdGVyIGZvciB0aGUgaGFuZGxlclxuICAgICAqIEBwYXJhbSB7IEh0dHBSZXF1ZXN0PGFueT4gfSByZXF1ZXN0IDogaHR0cCByZXF1ZXN0XG4gICAgICogQHBhcmFtIHsgSHR0cEVycm9yUmVzcG9uc2UgfSBlcnJvclJlc3BvbnNlIDogSHR0cCBlcnJvciByZXNwb25zZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGhhbmRsZUVycm9yKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIGVycm9yUmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKTogdm9pZDtcbn1cbiJdfQ==