import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
var InternalServerErrorHandler = /** @class */ (function (_super) {
    __extends(InternalServerErrorHandler, _super);
    function InternalServerErrorHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responseStatus = HttpResponseStatus.INTERNAL_SERVER_ERROR;
        return _this;
    }
    InternalServerErrorHandler.prototype.handleError = function () {
        this.globalMessageService.add({ key: 'httpHandlers.internalServerError' }, GlobalMessageType.MSG_TYPE_ERROR);
    };
    InternalServerErrorHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function InternalServerErrorHandler_Factory() { return new InternalServerErrorHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: InternalServerErrorHandler, providedIn: "root" });
    InternalServerErrorHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], InternalServerErrorHandler);
    return InternalServerErrorHandler;
}(HttpErrorHandler));
export { InternalServerErrorHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtc2VydmVyLWVycm9yLmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaGFuZGxlcnMvaW50ZXJuYWwtc2VydmVyLWVycm9yLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUt4RDtJQUFnRCw4Q0FBZ0I7SUFBaEU7UUFBQSxxRUFTQztRQVJDLG9CQUFjLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQUM7O0tBUTNEO0lBTkMsZ0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLGtDQUFrQyxFQUFFLEVBQzNDLGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztJQUNKLENBQUM7O0lBUlUsMEJBQTBCO1FBSHRDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVywwQkFBMEIsQ0FTdEM7cUNBakJEO0NBaUJDLEFBVEQsQ0FBZ0QsZ0JBQWdCLEdBUy9EO1NBVFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxTZXJ2ZXJFcnJvckhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgcmVzcG9uc2VTdGF0dXMgPSBIdHRwUmVzcG9uc2VTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SO1xuXG4gIGhhbmRsZUVycm9yKCkge1xuICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgeyBrZXk6ICdodHRwSGFuZGxlcnMuaW50ZXJuYWxTZXJ2ZXJFcnJvcicgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgKTtcbiAgfVxufVxuIl19