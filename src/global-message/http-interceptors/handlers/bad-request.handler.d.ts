import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
export declare class BadRequestHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(request: HttpRequest<any>, response: HttpErrorResponse): void;
}
