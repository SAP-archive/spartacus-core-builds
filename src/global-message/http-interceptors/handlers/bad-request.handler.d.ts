import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as ɵngcc0 from '@angular/core';
export declare class BadRequestHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(request: HttpRequest<any>, response: HttpErrorResponse): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BadRequestHandler>;
}

//# sourceMappingURL=bad-request.handler.d.ts.map