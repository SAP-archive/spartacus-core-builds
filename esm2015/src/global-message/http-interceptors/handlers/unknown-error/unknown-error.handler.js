import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../../facade/global-message.service";
/**
 * Unknown Error Handler works as an fallback, to handle errors that were
 * not handled by any other error handlers
 */
let UnknownErrorHandler = class UnknownErrorHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.UNKNOWN;
    }
    /**
     * hasMatch always returns true, to mach all errors
     */
    hasMatch(_errorResponse) {
        return true;
    }
    handleError() {
        if (isDevMode()) {
            console.warn(`Unknown http response error: ${this.responseStatus}`);
        }
    }
    /**
     * Fallback priority assures that the handler is used as a last resort
     */
    getPriority() {
        return -50 /* FALLBACK */;
    }
};
UnknownErrorHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function UnknownErrorHandler_Factory() { return new UnknownErrorHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: UnknownErrorHandler, providedIn: "root" });
UnknownErrorHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UnknownErrorHandler);
export { UnknownErrorHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2h0dHAtaW50ZXJjZXB0b3JzL2hhbmRsZXJzL3Vua25vd24tZXJyb3IvdW5rbm93bi1lcnJvci5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBR3pEOzs7R0FHRztBQUlILElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW9CLFNBQVEsZ0JBQWdCO0lBQXpEOztRQUNFLG1CQUFjLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDO0tBcUI3QztJQW5CQzs7T0FFRztJQUNILFFBQVEsQ0FBQyxjQUFjO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsMEJBQXlCO0lBQzNCLENBQUM7Q0FDRixDQUFBOztBQXRCWSxtQkFBbUI7SUFIL0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG1CQUFtQixDQXNCL0I7U0F0QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuLi9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2FwcGxpY2FibGUnO1xuXG4vKipcbiAqIFVua25vd24gRXJyb3IgSGFuZGxlciB3b3JrcyBhcyBhbiBmYWxsYmFjaywgdG8gaGFuZGxlIGVycm9ycyB0aGF0IHdlcmVcbiAqIG5vdCBoYW5kbGVkIGJ5IGFueSBvdGhlciBlcnJvciBoYW5kbGVyc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVW5rbm93bkVycm9ySGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5VTktOT1dOO1xuXG4gIC8qKlxuICAgKiBoYXNNYXRjaCBhbHdheXMgcmV0dXJucyB0cnVlLCB0byBtYWNoIGFsbCBlcnJvcnNcbiAgICovXG4gIGhhc01hdGNoKF9lcnJvclJlc3BvbnNlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBoYW5kbGVFcnJvcigpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBodHRwIHJlc3BvbnNlIGVycm9yOiAke3RoaXMucmVzcG9uc2VTdGF0dXN9YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZhbGxiYWNrIHByaW9yaXR5IGFzc3VyZXMgdGhhdCB0aGUgaGFuZGxlciBpcyB1c2VkIGFzIGEgbGFzdCByZXNvcnRcbiAgICovXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiBQcmlvcml0eS5GQUxMQkFDSztcbiAgfVxufVxuIl19