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
export class UnauthorizedErrorHandler extends HttpErrorHandler {
    constructor(globalMessageService) {
        super(globalMessageService);
        this.globalMessageService = globalMessageService;
        this.responseStatus = HttpResponseStatus.UNAUTHORIZED;
    }
    handleError(_request, response) {
        var _a, _b;
        if (isDevMode()) {
            console.warn(`There's a problem with the "Oauth client" configuration. You must configure a matching Oauth client in the backend and Spartacus.`);
        }
        if (((_a = response.error) === null || _a === void 0 ? void 0 : _a.error) === 'invalid_client') {
            this.globalMessageService.add(((_b = response.error) === null || _b === void 0 ? void 0 : _b.error_description) || {
                key: 'httpHandlers.unauthorized.invalid_client',
            }, GlobalMessageType.MSG_TYPE_ERROR);
        }
        else {
            this.globalMessageService.add({ key: 'httpHandlers.unauthorized.common' }, GlobalMessageType.MSG_TYPE_ERROR);
        }
    }
    getPriority() {
        return -10 /* LOW */;
    }
}
UnauthorizedErrorHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function UnauthorizedErrorHandler_Factory() { return new UnauthorizedErrorHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: UnauthorizedErrorHandler, providedIn: "root" });
UnauthorizedErrorHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
UnauthorizedErrorHandler.ctorParameters = () => [
    { type: GlobalMessageService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRob3JpemVkLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUczRDs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCO0lBRzVELFlBQXNCLG9CQUEwQztRQUM5RCxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQURSLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFGaEUsbUJBQWMsR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLENBQUM7SUFJakQsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUEwQixFQUFFLFFBQTJCOztRQUNqRSxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FDVixtSUFBbUksQ0FDcEksQ0FBQztTQUNIO1FBRUQsSUFBSSxPQUFBLFFBQVEsQ0FBQyxLQUFLLDBDQUFFLEtBQUssTUFBSyxnQkFBZ0IsRUFBRTtZQUM5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixPQUFBLFFBQVEsQ0FBQyxLQUFLLDBDQUFFLGlCQUFpQixLQUFJO2dCQUNuQyxHQUFHLEVBQUUsMENBQTBDO2FBQ2hELEVBQ0QsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLGtDQUFrQyxFQUFFLEVBQzNDLGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxxQkFBb0I7SUFDdEIsQ0FBQzs7OztZQWxDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVpRLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuLy4uL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5pbXBvcnQgeyBQcmlvcml0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvYXBwbGljYWJsZSc7XG5cbi8qKlxuICogSGFuZGxlcyBPYXV0aCBjbGllbnQgZXJyb3JzIHdoZW4gYSA0MDEgaXMgcmV0dXJuZWQuIFRoaXMgaXMgdGhlIGNhc2UgZm9yIGZhaWxpbmdcbiAqIGF1dGhlbnRpY2F0b24gcmVxdWVzdHMgdG8gT0NDLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVW5hdXRob3JpemVkRXJyb3JIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLlVOQVVUSE9SSVpFRDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgc3VwZXIoZ2xvYmFsTWVzc2FnZVNlcnZpY2UpO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IoX3JlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVGhlcmUncyBhIHByb2JsZW0gd2l0aCB0aGUgXCJPYXV0aCBjbGllbnRcIiBjb25maWd1cmF0aW9uLiBZb3UgbXVzdCBjb25maWd1cmUgYSBtYXRjaGluZyBPYXV0aCBjbGllbnQgaW4gdGhlIGJhY2tlbmQgYW5kIFNwYXJ0YWN1cy5gXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5lcnJvcj8uZXJyb3IgPT09ICdpbnZhbGlkX2NsaWVudCcpIHtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICByZXNwb25zZS5lcnJvcj8uZXJyb3JfZGVzY3JpcHRpb24gfHwge1xuICAgICAgICAgIGtleTogJ2h0dHBIYW5kbGVycy51bmF1dGhvcml6ZWQuaW52YWxpZF9jbGllbnQnLFxuICAgICAgICB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAnaHR0cEhhbmRsZXJzLnVuYXV0aG9yaXplZC5jb21tb24nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiBQcmlvcml0eS5MT1c7XG4gIH1cbn1cbiJdfQ==