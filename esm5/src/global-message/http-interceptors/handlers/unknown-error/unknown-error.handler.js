import { __decorate, __extends } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../../facade/global-message.service";
/**
 * Unknown Error Handler works as an fallback, to handle errors that were
 * not handled by any other error handlers
 */
var UnknownErrorHandler = /** @class */ (function (_super) {
    __extends(UnknownErrorHandler, _super);
    function UnknownErrorHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responseStatus = HttpResponseStatus.UNKNOWN;
        return _this;
    }
    /**
     * hasMatch always returns true, to mach all errors
     */
    UnknownErrorHandler.prototype.hasMatch = function (_errorResponse) {
        return true;
    };
    UnknownErrorHandler.prototype.handleError = function () {
        if (isDevMode()) {
            console.warn("Unknown http response error: " + this.responseStatus);
        }
    };
    /**
     * Fallback priority assures that the handler is used as a last resort
     */
    UnknownErrorHandler.prototype.getPriority = function () {
        return -50 /* FALLBACK */;
    };
    UnknownErrorHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function UnknownErrorHandler_Factory() { return new UnknownErrorHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: UnknownErrorHandler, providedIn: "root" });
    UnknownErrorHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UnknownErrorHandler);
    return UnknownErrorHandler;
}(HttpErrorHandler));
export { UnknownErrorHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2h0dHAtaW50ZXJjZXB0b3JzL2hhbmRsZXJzL3Vua25vd24tZXJyb3IvdW5rbm93bi1lcnJvci5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBR3pEOzs7R0FHRztBQUlIO0lBQXlDLHVDQUFnQjtJQUF6RDtRQUFBLHFFQXNCQztRQXJCQyxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzs7S0FxQjdDO0lBbkJDOztPQUVHO0lBQ0gsc0NBQVEsR0FBUixVQUFTLGNBQWM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNFLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFnQyxJQUFJLENBQUMsY0FBZ0IsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gseUNBQVcsR0FBWDtRQUNFLDBCQUF5QjtJQUMzQixDQUFDOztJQXJCVSxtQkFBbUI7UUFIL0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG1CQUFtQixDQXNCL0I7OEJBbENEO0NBa0NDLEFBdEJELENBQXlDLGdCQUFnQixHQXNCeEQ7U0F0QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuLi9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2FwcGxpY2FibGUnO1xuXG4vKipcbiAqIFVua25vd24gRXJyb3IgSGFuZGxlciB3b3JrcyBhcyBhbiBmYWxsYmFjaywgdG8gaGFuZGxlIGVycm9ycyB0aGF0IHdlcmVcbiAqIG5vdCBoYW5kbGVkIGJ5IGFueSBvdGhlciBlcnJvciBoYW5kbGVyc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVW5rbm93bkVycm9ySGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5VTktOT1dOO1xuXG4gIC8qKlxuICAgKiBoYXNNYXRjaCBhbHdheXMgcmV0dXJucyB0cnVlLCB0byBtYWNoIGFsbCBlcnJvcnNcbiAgICovXG4gIGhhc01hdGNoKF9lcnJvclJlc3BvbnNlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBoYW5kbGVFcnJvcigpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBodHRwIHJlc3BvbnNlIGVycm9yOiAke3RoaXMucmVzcG9uc2VTdGF0dXN9YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZhbGxiYWNrIHByaW9yaXR5IGFzc3VyZXMgdGhhdCB0aGUgaGFuZGxlciBpcyB1c2VkIGFzIGEgbGFzdCByZXNvcnRcbiAgICovXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiBQcmlvcml0eS5GQUxMQkFDSztcbiAgfVxufVxuIl19