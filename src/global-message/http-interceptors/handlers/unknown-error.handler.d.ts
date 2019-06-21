import { GlobalMessageService } from '../../facade/global-message.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
export declare class UnknownErrorHandler extends HttpErrorHandler {
    private config;
    protected globalMessageService: GlobalMessageService;
    constructor(config: ServerConfig, globalMessageService: GlobalMessageService);
    responseStatus: HttpResponseStatus;
    handleError(): void;
}
