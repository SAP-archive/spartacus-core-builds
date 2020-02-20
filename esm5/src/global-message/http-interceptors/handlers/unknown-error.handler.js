import { __decorate, __extends } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { GlobalMessageService } from '../../facade/global-message.service';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
var UnknownErrorHandler = /** @class */ (function (_super) {
    __extends(UnknownErrorHandler, _super);
    function UnknownErrorHandler(globalMessageService) {
        var _this = _super.call(this, globalMessageService) || this;
        _this.globalMessageService = globalMessageService;
        _this.responseStatus = HttpResponseStatus.UNKNOWN;
        return _this;
    }
    UnknownErrorHandler.prototype.handleError = function () {
        if (isDevMode()) {
            console.warn("Unknown http response error: " + this.responseStatus);
        }
    };
    UnknownErrorHandler.ctorParameters = function () { return [
        { type: GlobalMessageService }
    ]; };
    UnknownErrorHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function UnknownErrorHandler_Factory() { return new UnknownErrorHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: UnknownErrorHandler, providedIn: "root" });
    UnknownErrorHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UnknownErrorHandler);
    return UnknownErrorHandler;
}(HttpErrorHandler));
export { UnknownErrorHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2h0dHAtaW50ZXJjZXB0b3JzL2hhbmRsZXJzL3Vua25vd24tZXJyb3IuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUt4RDtJQUF5Qyx1Q0FBZ0I7SUFDdkQsNkJBQXNCLG9CQUEwQztRQUFoRSxZQUNFLGtCQUFNLG9CQUFvQixDQUFDLFNBQzVCO1FBRnFCLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFHaEUsb0JBQWMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7O0lBRDVDLENBQUM7SUFHRCx5Q0FBVyxHQUFYO1FBQ0UsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWdDLElBQUksQ0FBQyxjQUFnQixDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOztnQkFUMkMsb0JBQW9COzs7SUFEckQsbUJBQW1CO1FBSC9CLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxtQkFBbUIsQ0FXL0I7OEJBbkJEO0NBbUJDLEFBWEQsQ0FBeUMsZ0JBQWdCLEdBV3hEO1NBWFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9nbG9iYWwtbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaHR0cC1lcnJvci5oYW5kbGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVua25vd25FcnJvckhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSkge1xuICAgIHN1cGVyKGdsb2JhbE1lc3NhZ2VTZXJ2aWNlKTtcbiAgfVxuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5VTktOT1dOO1xuXG4gIGhhbmRsZUVycm9yKCkge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGh0dHAgcmVzcG9uc2UgZXJyb3I6ICR7dGhpcy5yZXNwb25zZVN0YXR1c31gKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==