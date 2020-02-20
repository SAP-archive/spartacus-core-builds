import { GlobalMessageService } from '../../facade/global-message.service';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as ɵngcc0 from '@angular/core';
export declare class UnknownErrorHandler extends HttpErrorHandler {
    protected globalMessageService: GlobalMessageService;
    constructor(globalMessageService: GlobalMessageService);
    responseStatus: HttpResponseStatus;
    handleError(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UnknownErrorHandler>;
}

//# sourceMappingURL=unknown-error.handler.d.ts.map