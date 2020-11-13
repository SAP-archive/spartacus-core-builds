import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { ErrorModel } from '../../../../model/misc.model';
import { Priority } from '../../../../util/applicable';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import * as ɵngcc0 from '@angular/core';
export declare class BadRequestHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected handleBadPassword(request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected handleBadLoginResponse(_request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected handleValidationError(_request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected handleBadCartRequest(_request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected handleVoucherOperationError(_request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected getErrors(response: HttpErrorResponse): ErrorModel[];
    getPriority(): Priority;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BadRequestHandler, never>;
}

//# sourceMappingURL=bad-request.handler.d.ts.map