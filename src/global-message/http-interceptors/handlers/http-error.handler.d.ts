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

//# sourceMappingURL=http-error.handler.d.ts.map