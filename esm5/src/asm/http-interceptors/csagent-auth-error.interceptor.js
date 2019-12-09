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
var CustomerSupportAgentAuthErrorInterceptor = /** @class */ (function () {
    function CustomerSupportAgentAuthErrorInterceptor(csagentErrorHandlingService) {
        this.csagentErrorHandlingService = csagentErrorHandlingService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    CustomerSupportAgentAuthErrorInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        /** @type {?} */
        var isCustomerSupportAgentRequest = this.isCustomerSupportAgentRequest(request);
        if (isCustomerSupportAgentRequest) {
            request = InterceptorUtil.removeHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request);
        }
        return next.handle(request).pipe(catchError((/**
         * @param {?} errResponse
         * @return {?}
         */
        function (errResponse) {
            if (errResponse instanceof HttpErrorResponse) {
                // Unauthorized
                if (isCustomerSupportAgentRequest && errResponse.status === 401) {
                    _this.csagentErrorHandlingService.terminateCustomerSupportAgentExpiredSession();
                    return of((/** @type {?} */ (undefined)));
                }
            }
            return throwError(errResponse);
        })));
    };
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    CustomerSupportAgentAuthErrorInterceptor.prototype.isCustomerSupportAgentRequest = /**
     * @private
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
    };
    CustomerSupportAgentAuthErrorInterceptor.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    CustomerSupportAgentAuthErrorInterceptor.ctorParameters = function () { return [
        { type: CustomerSupportAgentErrorHandlingService }
    ]; };
    /** @nocollapse */ CustomerSupportAgentAuthErrorInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CustomerSupportAgentAuthErrorInterceptor_Factory() { return new CustomerSupportAgentAuthErrorInterceptor(i0.ɵɵinject(i1.CustomerSupportAgentErrorHandlingService)); }, token: CustomerSupportAgentAuthErrorInterceptor, providedIn: "root" });
    return CustomerSupportAgentAuthErrorInterceptor;
}());
export { CustomerSupportAgentAuthErrorInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerSupportAgentAuthErrorInterceptor.prototype.csagentErrorHandlingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1hdXRoLWVycm9yLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9odHRwLWludGVyY2VwdG9ycy9jc2FnZW50LWF1dGgtZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsR0FLbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdDQUFnQyxHQUNqQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7QUFFN0c7SUFHRSxrREFDVSwyQkFBcUU7UUFBckUsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUEwQztJQUM1RSxDQUFDOzs7Ozs7SUFFSiw0REFBUzs7Ozs7SUFBVCxVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQTBCQzs7WUF0Qk8sNkJBQTZCLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUN0RSxPQUFPLENBQ1I7UUFDRCxJQUFJLDZCQUE2QixFQUFFO1lBQ2pDLE9BQU8sR0FBRyxlQUFlLENBQUMsWUFBWSxDQUNwQyxnQ0FBZ0MsRUFDaEMsT0FBTyxDQUNSLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLFVBQVU7Ozs7UUFBQyxVQUFDLFdBQWdCO1lBQzFCLElBQUksV0FBVyxZQUFZLGlCQUFpQixFQUFFO2dCQUM1QyxlQUFlO2dCQUNmLElBQUksNkJBQTZCLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7b0JBQy9ELEtBQUksQ0FBQywyQkFBMkIsQ0FBQywyQ0FBMkMsRUFBRSxDQUFDO29CQUMvRSxPQUFPLEVBQUUsQ0FBQyxtQkFBQSxTQUFTLEVBQU8sQ0FBQyxDQUFDO2lCQUM3QjthQUNGO1lBQ0QsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLGdGQUE2Qjs7Ozs7SUFBckMsVUFBc0MsT0FBeUI7O1lBQ3ZELGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxtQkFBbUIsQ0FDMUQsZ0NBQWdDLEVBQ2hDLE9BQU8sQ0FBQyxPQUFPLENBQ2hCO1FBQ0QsT0FBTyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkF6Q0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFGekIsd0NBQXdDOzs7bURBZGpEO0NBMERDLEFBMUNELElBMENDO1NBekNZLHdDQUF3Qzs7Ozs7O0lBR2pELCtFQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9pbnRlcmNlcHRvci11dGlsJztcbmltcG9ydCB7IEN1c3RvbWVyU3VwcG9ydEFnZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hc20vc2VydmljZXMvY3NhZ2VudC1lcnJvci1oYW5kbGluZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclN1cHBvcnRBZ2VudEF1dGhFcnJvckludGVyY2VwdG9yXG4gIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjc2FnZW50RXJyb3JIYW5kbGluZ1NlcnZpY2U6IEN1c3RvbWVyU3VwcG9ydEFnZW50RXJyb3JIYW5kbGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBpc0N1c3RvbWVyU3VwcG9ydEFnZW50UmVxdWVzdCA9IHRoaXMuaXNDdXN0b21lclN1cHBvcnRBZ2VudFJlcXVlc3QoXG4gICAgICByZXF1ZXN0XG4gICAgKTtcbiAgICBpZiAoaXNDdXN0b21lclN1cHBvcnRBZ2VudFJlcXVlc3QpIHtcbiAgICAgIHJlcXVlc3QgPSBJbnRlcmNlcHRvclV0aWwucmVtb3ZlSGVhZGVyKFxuICAgICAgICBVU0VfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTixcbiAgICAgICAgcmVxdWVzdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVyclJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVyclJlc3BvbnNlIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAvLyBVbmF1dGhvcml6ZWRcbiAgICAgICAgICBpZiAoaXNDdXN0b21lclN1cHBvcnRBZ2VudFJlcXVlc3QgJiYgZXJyUmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgIHRoaXMuY3NhZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlLnRlcm1pbmF0ZUN1c3RvbWVyU3VwcG9ydEFnZW50RXhwaXJlZFNlc3Npb24oKTtcbiAgICAgICAgICAgIHJldHVybiBvZih1bmRlZmluZWQgYXMgYW55KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyUmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0N1c3RvbWVyU3VwcG9ydEFnZW50UmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNSZXF1ZXN0TWFwcGluZyA9IEludGVyY2VwdG9yVXRpbC5nZXRJbnRlcmNlcHRvclBhcmFtKFxuICAgICAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG4gICAgICByZXF1ZXN0LmhlYWRlcnNcbiAgICApO1xuICAgIHJldHVybiBCb29sZWFuKGlzUmVxdWVzdE1hcHBpbmcpO1xuICB9XG59XG4iXX0=