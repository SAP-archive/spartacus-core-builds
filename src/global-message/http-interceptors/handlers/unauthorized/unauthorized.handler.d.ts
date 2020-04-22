import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { GlobalMessageService } from '../../../facade/global-message.service';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from './../http-error.handler';
import { Priority } from '../../../../util/applicable';
/**
 * Handles Oauth client errors when a 401 is returned. This is the case for failing
 * authenticaton requests to OCC.
 */
import * as ɵngcc0 from '@angular/core';
export declare class UnauthorizedErrorHandler extends HttpErrorHandler {
    protected globalMessageService: GlobalMessageService;
    responseStatus: HttpResponseStatus;
    constructor(globalMessageService: GlobalMessageService);
    handleError(_request: HttpRequest<any>, response: HttpErrorResponse): void;
    getPriority(): Priority;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UnauthorizedErrorHandler, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRob3JpemVkLmhhbmRsZXIuZC50cyIsInNvdXJjZXMiOlsidW5hdXRob3JpemVkLmhhbmRsZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZhY2FkZS9nbG9iYWwtbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vLi4vaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IFByaW9yaXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9hcHBsaWNhYmxlJztcbi8qKlxuICogSGFuZGxlcyBPYXV0aCBjbGllbnQgZXJyb3JzIHdoZW4gYSA0MDEgaXMgcmV0dXJuZWQuIFRoaXMgaXMgdGhlIGNhc2UgZm9yIGZhaWxpbmdcbiAqIGF1dGhlbnRpY2F0b24gcmVxdWVzdHMgdG8gT0NDLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVbmF1dGhvcml6ZWRFcnJvckhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHJlc3BvbnNlU3RhdHVzOiBIdHRwUmVzcG9uc2VTdGF0dXM7XG4gICAgY29uc3RydWN0b3IoZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlKTtcbiAgICBoYW5kbGVFcnJvcihfcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKTogdm9pZDtcbiAgICBnZXRQcmlvcml0eSgpOiBQcmlvcml0eTtcbn1cbiJdfQ==