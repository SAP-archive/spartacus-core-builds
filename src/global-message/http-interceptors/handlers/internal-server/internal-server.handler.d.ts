import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import { Priority } from '../../../../util/applicable';
import * as ɵngcc0 from '@angular/core';
export declare class InternalServerErrorHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(): void;
    getPriority(): Priority;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InternalServerErrorHandler, never>;
}

//# sourceMappingURL=internal-server.handler.d.ts.map