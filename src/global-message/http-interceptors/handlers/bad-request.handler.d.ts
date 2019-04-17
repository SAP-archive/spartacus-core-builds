import { HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { HttpErrorHandler } from './http-error.handler';
import { HttpResponseStatus } from '../../models/response-status.model';
export declare class BadRequestHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected getErrorMessage(resp: HttpErrorResponse): string;
}
