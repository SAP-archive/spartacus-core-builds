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

//# sourceMappingURL=unauthorized.handler.d.ts.map