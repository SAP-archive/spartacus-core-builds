import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import { Priority } from '../../../../util/applicable';
/**
 * Unknown Error Handler works as an fallback, to handle errors that were
 * not handled by any other error handlers
 */
import * as ɵngcc0 from '@angular/core';
export declare class UnknownErrorHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    /**
     * hasMatch always returns true, to mach all errors
     */
    hasMatch(_errorResponse: any): boolean;
    handleError(): void;
    /**
     * Fallback priority assures that the handler is used as a last resort
     */
    getPriority(): Priority;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UnknownErrorHandler, never>;
}

//# sourceMappingURL=unknown-error.handler.d.ts.map