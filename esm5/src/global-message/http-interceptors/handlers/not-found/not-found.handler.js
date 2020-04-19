import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../../facade/global-message.service";
var NotFoundHandler = /** @class */ (function (_super) {
    __extends(NotFoundHandler, _super);
    function NotFoundHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responseStatus = HttpResponseStatus.NOT_FOUND;
        return _this;
    }
    // empty error handler to avoid we fallabck to the unknown error handler
    NotFoundHandler.prototype.handleError = function () { };
    NotFoundHandler.prototype.getPriority = function () {
        return -10 /* LOW */;
    };
    NotFoundHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function NotFoundHandler_Factory() { return new NotFoundHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: NotFoundHandler, providedIn: "root" });
    NotFoundHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], NotFoundHandler);
    return NotFoundHandler;
}(HttpErrorHandler));
export { NotFoundHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaGFuZGxlcnMvbm90LWZvdW5kL25vdC1mb3VuZC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFNekQ7SUFBcUMsbUNBQWdCO0lBQXJEO1FBQUEscUVBU0M7UUFSQyxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQzs7S0FRL0M7SUFOQyx3RUFBd0U7SUFDeEUscUNBQVcsR0FBWCxjQUFxQixDQUFDO0lBRXRCLHFDQUFXLEdBQVg7UUFDRSxxQkFBb0I7SUFDdEIsQ0FBQzs7SUFSVSxlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBUzNCOzBCQWpCRDtDQWlCQyxBQVRELENBQXFDLGdCQUFnQixHQVNwRDtTQVRZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuLi9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2hhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm90Rm91bmRIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLk5PVF9GT1VORDtcblxuICAvLyBlbXB0eSBlcnJvciBoYW5kbGVyIHRvIGF2b2lkIHdlIGZhbGxhYmNrIHRvIHRoZSB1bmtub3duIGVycm9yIGhhbmRsZXJcbiAgaGFuZGxlRXJyb3IoKTogdm9pZCB7fVxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiBQcmlvcml0eS5MT1c7XG4gIH1cbn1cbiJdfQ==