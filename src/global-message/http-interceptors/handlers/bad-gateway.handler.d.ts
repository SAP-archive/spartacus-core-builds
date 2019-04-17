import { HttpErrorHandler } from './http-error.handler';
import { HttpResponseStatus } from '../../models/response-status.model';
export declare class BadGatewayHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(): void;
}
