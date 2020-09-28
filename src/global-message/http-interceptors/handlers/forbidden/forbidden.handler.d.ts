import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import { Priority } from '../../../../util/applicable';
export declare class ForbiddenHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(): void;
    getPriority(): Priority;
}
