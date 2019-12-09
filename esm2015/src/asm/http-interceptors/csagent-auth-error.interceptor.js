/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { InterceptorUtil, USE_CUSTOMER_SUPPORT_AGENT_TOKEN, } from '../../occ/utils/interceptor-util';
import { CustomerSupportAgentErrorHandlingService } from '../../asm/services/csagent-error-handling.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/csagent-error-handling.service";
export class CustomerSupportAgentAuthErrorInterceptor {
    /**
     * @param {?} csagentErrorHandlingService
     */
    constructor(csagentErrorHandlingService) {
        this.csagentErrorHandlingService = csagentErrorHandlingService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        /** @type {?} */
        const isCustomerSupportAgentRequest = this.isCustomerSupportAgentRequest(request);
        if (isCustomerSupportAgentRequest) {
            request = InterceptorUtil.removeHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request);
        }
        return next.handle(request).pipe(catchError((/**
         * @param {?} errResponse
         * @return {?}
         */
        (errResponse) => {
            if (errResponse instanceof HttpErrorResponse) {
                // Unauthorized
                if (isCustomerSupportAgentRequest && errResponse.status === 401) {
                    this.csagentErrorHandlingService.terminateCustomerSupportAgentExpiredSession();
                    return of((/** @type {?} */ (undefined)));
                }
            }
            return throwError(errResponse);
        })));
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    isCustomerSupportAgentRequest(request) {
        /** @type {?} */
        const isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
    }
}
CustomerSupportAgentAuthErrorInterceptor.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
CustomerSupportAgentAuthErrorInterceptor.ctorParameters = () => [
    { type: CustomerSupportAgentErrorHandlingService }
];
/** @nocollapse */ CustomerSupportAgentAuthErrorInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CustomerSupportAgentAuthErrorInterceptor_Factory() { return new CustomerSupportAgentAuthErrorInterceptor(i0.ɵɵinject(i1.CustomerSupportAgentErrorHandlingService)); }, token: CustomerSupportAgentAuthErrorInterceptor, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerSupportAgentAuthErrorInterceptor.prototype.csagentErrorHandlingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1hdXRoLWVycm9yLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9odHRwLWludGVyY2VwdG9ycy9jc2FnZW50LWF1dGgtZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsR0FLbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdDQUFnQyxHQUNqQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7QUFHN0csTUFBTSxPQUFPLHdDQUF3Qzs7OztJQUVuRCxZQUNVLDJCQUFxRTtRQUFyRSxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTBDO0lBQzVFLENBQUM7Ozs7OztJQUVKLFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjs7Y0FFWCw2QkFBNkIsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQ3RFLE9BQU8sQ0FDUjtRQUNELElBQUksNkJBQTZCLEVBQUU7WUFDakMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQ3BDLGdDQUFnQyxFQUNoQyxPQUFPLENBQ1IsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsVUFBVTs7OztRQUFDLENBQUMsV0FBZ0IsRUFBRSxFQUFFO1lBQzlCLElBQUksV0FBVyxZQUFZLGlCQUFpQixFQUFFO2dCQUM1QyxlQUFlO2dCQUNmLElBQUksNkJBQTZCLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7b0JBQy9ELElBQUksQ0FBQywyQkFBMkIsQ0FBQywyQ0FBMkMsRUFBRSxDQUFDO29CQUMvRSxPQUFPLEVBQUUsQ0FBQyxtQkFBQSxTQUFTLEVBQU8sQ0FBQyxDQUFDO2lCQUM3QjthQUNGO1lBQ0QsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLDZCQUE2QixDQUFDLE9BQXlCOztjQUN2RCxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsbUJBQW1CLENBQzFELGdDQUFnQyxFQUNoQyxPQUFPLENBQUMsT0FBTyxDQUNoQjtRQUNELE9BQU8sT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBekNGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFGekIsd0NBQXdDOzs7Ozs7OztJQU03QywrRUFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBDdXN0b21lclN1cHBvcnRBZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXNtL3NlcnZpY2VzL2NzYWdlbnQtZXJyb3ItaGFuZGxpbmcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTdXBwb3J0QWdlbnRBdXRoRXJyb3JJbnRlcmNlcHRvclxuICBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY3NhZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlOiBDdXN0b21lclN1cHBvcnRBZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3QgaXNDdXN0b21lclN1cHBvcnRBZ2VudFJlcXVlc3QgPSB0aGlzLmlzQ3VzdG9tZXJTdXBwb3J0QWdlbnRSZXF1ZXN0KFxuICAgICAgcmVxdWVzdFxuICAgICk7XG4gICAgaWYgKGlzQ3VzdG9tZXJTdXBwb3J0QWdlbnRSZXF1ZXN0KSB7XG4gICAgICByZXF1ZXN0ID0gSW50ZXJjZXB0b3JVdGlsLnJlbW92ZUhlYWRlcihcbiAgICAgICAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG4gICAgICAgIHJlcXVlc3RcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJSZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJSZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gVW5hdXRob3JpemVkXG4gICAgICAgICAgaWYgKGlzQ3VzdG9tZXJTdXBwb3J0QWdlbnRSZXF1ZXN0ICYmIGVyclJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICB0aGlzLmNzYWdlbnRFcnJvckhhbmRsaW5nU2VydmljZS50ZXJtaW5hdGVDdXN0b21lclN1cHBvcnRBZ2VudEV4cGlyZWRTZXNzaW9uKCk7XG4gICAgICAgICAgICByZXR1cm4gb2YodW5kZWZpbmVkIGFzIGFueSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVyclJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDdXN0b21lclN1cHBvcnRBZ2VudFJlcXVlc3QocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzUmVxdWVzdE1hcHBpbmcgPSBJbnRlcmNlcHRvclV0aWwuZ2V0SW50ZXJjZXB0b3JQYXJhbShcbiAgICAgIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxuICAgICAgcmVxdWVzdC5oZWFkZXJzXG4gICAgKTtcbiAgICByZXR1cm4gQm9vbGVhbihpc1JlcXVlc3RNYXBwaW5nKTtcbiAgfVxufVxuIl19