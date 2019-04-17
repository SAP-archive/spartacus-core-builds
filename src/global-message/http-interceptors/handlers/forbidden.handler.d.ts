import { HttpErrorHandler } from './http-error.handler';
import { HttpResponseStatus } from '../../models/response-status.model';
export declare class ForbiddenHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(): void;
}
