import { GlobalMessageService } from '../../facade/global-message.service';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
export declare class UnknownErrorHandler extends HttpErrorHandler {
    protected globalMessageService: GlobalMessageService;
    constructor(globalMessageService: GlobalMessageService);
    responseStatus: HttpResponseStatus;
    handleError(): void;
}
