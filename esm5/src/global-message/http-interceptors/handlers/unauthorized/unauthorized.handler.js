import { __decorate, __extends } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { GlobalMessageService } from '../../../facade/global-message.service';
import { GlobalMessageType } from '../../../models/global-message.model';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from './../http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../../facade/global-message.service";
/**
 * Handles Oauth client errors when a 401 is returned. This is the case for failing
 * authenticaton requests to OCC.
 */
var UnauthorizedErrorHandler = /** @class */ (function (_super) {
    __extends(UnauthorizedErrorHandler, _super);
    function UnauthorizedErrorHandler(globalMessageService) {
        var _this = _super.call(this, globalMessageService) || this;
        _this.globalMessageService = globalMessageService;
        _this.responseStatus = HttpResponseStatus.UNAUTHORIZED;
        return _this;
    }
    UnauthorizedErrorHandler.prototype.handleError = function (_request, response) {
        var _a, _b;
        if (isDevMode()) {
            console.warn("There's a problem with the \"Oauth client\" configuration. You must configure a matching Oauth client in the backend and Spartacus.");
        }
        if (((_a = response.error) === null || _a === void 0 ? void 0 : _a.error) === 'invalid_client') {
            this.globalMessageService.add(((_b = response.error) === null || _b === void 0 ? void 0 : _b.error_description) || {
                key: 'httpHandlers.unauthorized.invalid_client',
            }, GlobalMessageType.MSG_TYPE_ERROR);
        }
        else {
            this.globalMessageService.add({ key: 'httpHandlers.unauthorized.common' }, GlobalMessageType.MSG_TYPE_ERROR);
        }
    };
    UnauthorizedErrorHandler.ctorParameters = function () { return [
        { type: GlobalMessageService }
    ]; };
    UnauthorizedErrorHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function UnauthorizedErrorHandler_Factory() { return new UnauthorizedErrorHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: UnauthorizedErrorHandler, providedIn: "root" });
    UnauthorizedErrorHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UnauthorizedErrorHandler);
    return UnauthorizedErrorHandler;
}(HttpErrorHandler));
export { UnauthorizedErrorHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRob3JpemVkLmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaGFuZGxlcnMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRTNEOzs7R0FHRztBQUlIO0lBQThDLDRDQUFnQjtJQUc1RCxrQ0FBc0Isb0JBQTBDO1FBQWhFLFlBQ0Usa0JBQU0sb0JBQW9CLENBQUMsU0FDNUI7UUFGcUIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUZoRSxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLFlBQVksQ0FBQzs7SUFJakQsQ0FBQztJQUVELDhDQUFXLEdBQVgsVUFBWSxRQUEwQixFQUFFLFFBQTJCOztRQUNqRSxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FDVixxSUFBbUksQ0FDcEksQ0FBQztTQUNIO1FBRUQsSUFBSSxPQUFBLFFBQVEsQ0FBQyxLQUFLLDBDQUFFLEtBQUssTUFBSyxnQkFBZ0IsRUFBRTtZQUM5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixPQUFBLFFBQVEsQ0FBQyxLQUFLLDBDQUFFLGlCQUFpQixLQUFJO2dCQUNuQyxHQUFHLEVBQUUsMENBQTBDO2FBQ2hELEVBQ0QsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLGtDQUFrQyxFQUFFLEVBQzNDLGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Z0JBeEIyQyxvQkFBb0I7OztJQUhyRCx3QkFBd0I7UUFIcEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHdCQUF3QixDQTRCcEM7bUNBMUNEO0NBMENDLEFBNUJELENBQThDLGdCQUFnQixHQTRCN0Q7U0E1Qlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZhY2FkZS9nbG9iYWwtbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vLi4vaHR0cC1lcnJvci5oYW5kbGVyJztcblxuLyoqXG4gKiBIYW5kbGVzIE9hdXRoIGNsaWVudCBlcnJvcnMgd2hlbiBhIDQwMSBpcyByZXR1cm5lZC4gVGhpcyBpcyB0aGUgY2FzZSBmb3IgZmFpbGluZ1xuICogYXV0aGVudGljYXRvbiByZXF1ZXN0cyB0byBPQ0MuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVbmF1dGhvcml6ZWRFcnJvckhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgcmVzcG9uc2VTdGF0dXMgPSBIdHRwUmVzcG9uc2VTdGF0dXMuVU5BVVRIT1JJWkVEO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UpIHtcbiAgICBzdXBlcihnbG9iYWxNZXNzYWdlU2VydmljZSk7XG4gIH1cblxuICBoYW5kbGVFcnJvcihfcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKTogdm9pZCB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBUaGVyZSdzIGEgcHJvYmxlbSB3aXRoIHRoZSBcIk9hdXRoIGNsaWVudFwiIGNvbmZpZ3VyYXRpb24uIFlvdSBtdXN0IGNvbmZpZ3VyZSBhIG1hdGNoaW5nIE9hdXRoIGNsaWVudCBpbiB0aGUgYmFja2VuZCBhbmQgU3BhcnRhY3VzLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLmVycm9yPy5lcnJvciA9PT0gJ2ludmFsaWRfY2xpZW50Jykge1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHJlc3BvbnNlLmVycm9yPy5lcnJvcl9kZXNjcmlwdGlvbiB8fCB7XG4gICAgICAgICAga2V5OiAnaHR0cEhhbmRsZXJzLnVuYXV0aG9yaXplZC5pbnZhbGlkX2NsaWVudCcsXG4gICAgICAgIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICdodHRwSGFuZGxlcnMudW5hdXRob3JpemVkLmNvbW1vbicgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=