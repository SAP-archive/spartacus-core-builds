/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { InterceptorUtil, USE_CLIENT_TOKEN, USE_CUSTOMER_SUPPORT_AGENT_TOKEN, } from '../../occ/utils/interceptor-util';
import { AuthService } from '../facade/auth.service';
import { ClientErrorHandlingService } from '../services/client-error/client-error-handling.service';
import { CustomerSupportAgentErrorHandlingService } from '../services/csagent-error/csagent-error-handling.service';
import { UserErrorHandlingService } from '../services/user-error/user-error-handling.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/user-error/user-error-handling.service";
import * as i2 from "../services/client-error/client-error-handling.service";
import * as i3 from "../facade/auth.service";
import * as i4 from "../services/csagent-error/csagent-error-handling.service";
/** @type {?} */
var OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
var AuthErrorInterceptor = /** @class */ (function () {
    function AuthErrorInterceptor(userErrorHandlingService, clientErrorHandlingService, authService, csagentErrorHandlingService) {
        this.userErrorHandlingService = userErrorHandlingService;
        this.clientErrorHandlingService = clientErrorHandlingService;
        this.authService = authService;
        this.csagentErrorHandlingService = csagentErrorHandlingService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    AuthErrorInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        /** @type {?} */
        var isClientTokenRequest = this.isClientTokenRequest(request);
        if (isClientTokenRequest) {
            request = InterceptorUtil.removeHeader(USE_CLIENT_TOKEN, request);
        }
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
                switch (errResponse.status) {
                    case 401: // Unauthorized
                        if (isClientTokenRequest) {
                            if (_this.isExpiredToken(errResponse)) {
                                return _this.clientErrorHandlingService.handleExpiredClientToken(request, next);
                            }
                            // user token request
                        }
                        else if (isCustomerSupportAgentRequest) {
                            _this.csagentErrorHandlingService.terminateCustomerSupportAgentExpiredSession();
                            return of();
                        }
                        else {
                            if (_this.isExpiredToken(errResponse)) {
                                return _this.userErrorHandlingService.handleExpiredUserToken(request, next);
                            }
                            else if (
                            // Refresh expired token
                            // Check that the OAUTH endpoint was called and the error is for refresh token is expired
                            errResponse.url.includes(OAUTH_ENDPOINT) &&
                                errResponse.error.error === 'invalid_token') {
                                _this.userErrorHandlingService.handleExpiredRefreshToken();
                                return of();
                            }
                        }
                        break;
                    case 400: // Bad Request
                        if (errResponse.url.includes(OAUTH_ENDPOINT) &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'refresh_token') {
                                // refresh token fail, force user logout
                                _this.authService.logout();
                            }
                        }
                        break;
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
    AuthErrorInterceptor.prototype.isClientTokenRequest = /**
     * @private
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
    };
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    AuthErrorInterceptor.prototype.isCustomerSupportAgentRequest = /**
     * @private
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
    };
    /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    AuthErrorInterceptor.prototype.isExpiredToken = /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        if (resp.error &&
            resp.error.errors &&
            resp.error.errors instanceof Array &&
            resp.error.errors[0]) {
            return resp.error.errors[0].type === 'InvalidTokenError';
        }
        return false;
    };
    AuthErrorInterceptor.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    AuthErrorInterceptor.ctorParameters = function () { return [
        { type: UserErrorHandlingService },
        { type: ClientErrorHandlingService },
        { type: AuthService },
        { type: CustomerSupportAgentErrorHandlingService }
    ]; };
    /** @nocollapse */ AuthErrorInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthErrorInterceptor_Factory() { return new AuthErrorInterceptor(i0.ɵɵinject(i1.UserErrorHandlingService), i0.ɵɵinject(i2.ClientErrorHandlingService), i0.ɵɵinject(i3.AuthService), i0.ɵɵinject(i4.CustomerSupportAgentErrorHandlingService)); }, token: AuthErrorInterceptor, providedIn: "root" });
    return AuthErrorInterceptor;
}());
export { AuthErrorInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthErrorInterceptor.prototype.userErrorHandlingService;
    /**
     * @type {?}
     * @private
     */
    AuthErrorInterceptor.prototype.clientErrorHandlingService;
    /**
     * @type {?}
     * @private
     */
    AuthErrorInterceptor.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    AuthErrorInterceptor.prototype.csagentErrorHandlingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL2F1dGgtZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsR0FLbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixnQ0FBZ0MsR0FDakMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDcEcsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7SUFFeEYsY0FBYyxHQUFHLGtDQUFrQztBQUV6RDtJQXNCRSw4QkFDVSx3QkFBa0QsRUFDbEQsMEJBQXNELEVBQ3RELFdBQXdCLEVBQ3hCLDJCQUFzRTtRQUh0RSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUEyQztJQUM3RSxDQUFDOzs7Ozs7SUFFSix3Q0FBUzs7Ozs7SUFBVCxVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQW1FQzs7WUEvRE8s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QUNFLElBQUksQ0FBQyxLQUFLO1lBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxZQUFZLEtBQUs7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ3BCO1lBQ0EsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUM7U0FDMUQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQTVIRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUp6Qix3QkFBd0I7Z0JBRnhCLDBCQUEwQjtnQkFEMUIsV0FBVztnQkFFWCx3Q0FBd0M7OzsrQkFqQmpEO0NBbUpDLEFBN0hELElBNkhDO1NBNUhZLG9CQUFvQjs7Ozs7O0lBc0I3Qix3REFBMEQ7Ozs7O0lBQzFELDBEQUE4RDs7Ozs7SUFDOUQsMkNBQWdDOzs7OztJQUNoQywyREFBOEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DTElFTlRfVE9LRU4sXG4gIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbGllbnQtZXJyb3IvY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTdXBwb3J0QWdlbnRFcnJvckhhbmRsaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NzYWdlbnQtZXJyb3IvY3NhZ2VudC1lcnJvci1oYW5kbGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJFcnJvckhhbmRsaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXItZXJyb3IvdXNlci1lcnJvci1oYW5kbGluZy5zZXJ2aWNlJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEF1dGhFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlOiBVc2VyRXJyb3JIYW5kbGluZ1NlcnZpY2UsXG4gICAgY2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2U6IENsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGNzYWdlbnRFcnJvckhhbmRsaW5nU2VydmljZTogQ3VzdG9tZXJTdXBwb3J0QWdlbnRFcnJvckhhbmRsaW5nU2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogSW5zdGVhZCwgdXNlIGNvbnN0cnVjdG9yKFxuICAgKiB1c2VyRXJyb3JIYW5kbGluZ1NlcnZpY2U6IFVzZXJFcnJvckhhbmRsaW5nU2VydmljZSxcbiAgICogY2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2U6IENsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgKiBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAqIGNzYWdlbnRFcnJvckhhbmRsaW5nU2VydmljZTogQ3VzdG9tZXJTdXBwb3J0QWdlbnRFcnJvckhhbmRsaW5nU2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgdXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlOiBVc2VyRXJyb3JIYW5kbGluZ1NlcnZpY2UsXG4gICAgY2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2U6IENsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJFcnJvckhhbmRsaW5nU2VydmljZTogVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2U6IENsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgY3NhZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlPzogQ3VzdG9tZXJTdXBwb3J0QWdlbnRFcnJvckhhbmRsaW5nU2VydmljZVxuICApIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IGlzQ2xpZW50VG9rZW5SZXF1ZXN0ID0gdGhpcy5pc0NsaWVudFRva2VuUmVxdWVzdChyZXF1ZXN0KTtcbiAgICBpZiAoaXNDbGllbnRUb2tlblJlcXVlc3QpIHtcbiAgICAgIHJlcXVlc3QgPSBJbnRlcmNlcHRvclV0aWwucmVtb3ZlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHJlcXVlc3QpO1xuICAgIH1cbiAgICBjb25zdCBpc0N1c3RvbWVyU3VwcG9ydEFnZW50UmVxdWVzdCA9IHRoaXMuaXNDdXN0b21lclN1cHBvcnRBZ2VudFJlcXVlc3QoXG4gICAgICByZXF1ZXN0XG4gICAgKTtcbiAgICBpZiAoaXNDdXN0b21lclN1cHBvcnRBZ2VudFJlcXVlc3QpIHtcbiAgICAgIHJlcXVlc3QgPSBJbnRlcmNlcHRvclV0aWwucmVtb3ZlSGVhZGVyKFxuICAgICAgICBVU0VfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTixcbiAgICAgICAgcmVxdWVzdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVyclJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVyclJlc3BvbnNlIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICBzd2l0Y2ggKGVyclJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSA0MDE6IC8vIFVuYXV0aG9yaXplZFxuICAgICAgICAgICAgICBpZiAoaXNDbGllbnRUb2tlblJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0V4cGlyZWRUb2tlbihlcnJSZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlLmhhbmRsZUV4cGlyZWRDbGllbnRUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdXNlciB0b2tlbiByZXF1ZXN0XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDdXN0b21lclN1cHBvcnRBZ2VudFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNzYWdlbnRFcnJvckhhbmRsaW5nU2VydmljZS50ZXJtaW5hdGVDdXN0b21lclN1cHBvcnRBZ2VudEV4cGlyZWRTZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHBpcmVkVG9rZW4oZXJyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyRXJyb3JIYW5kbGluZ1NlcnZpY2UuaGFuZGxlRXhwaXJlZFVzZXJUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgLy8gUmVmcmVzaCBleHBpcmVkIHRva2VuXG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBPQVVUSCBlbmRwb2ludCB3YXMgY2FsbGVkIGFuZCB0aGUgZXJyb3IgaXMgZm9yIHJlZnJlc2ggdG9rZW4gaXMgZXhwaXJlZFxuICAgICAgICAgICAgICAgICAgZXJyUmVzcG9uc2UudXJsLmluY2x1ZGVzKE9BVVRIX0VORFBPSU5UKSAmJlxuICAgICAgICAgICAgICAgICAgZXJyUmVzcG9uc2UuZXJyb3IuZXJyb3IgPT09ICdpbnZhbGlkX3Rva2VuJ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRXJyb3JIYW5kbGluZ1NlcnZpY2UuaGFuZGxlRXhwaXJlZFJlZnJlc2hUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDA6IC8vIEJhZCBSZXF1ZXN0XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS51cmwuaW5jbHVkZXMoT0FVVEhfRU5EUE9JTlQpICYmXG4gICAgICAgICAgICAgICAgZXJyUmVzcG9uc2UuZXJyb3IuZXJyb3IgPT09ICdpbnZhbGlkX2dyYW50J1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5ib2R5LmdldCgnZ3JhbnRfdHlwZScpID09PSAncmVmcmVzaF90b2tlbicpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHJlZnJlc2ggdG9rZW4gZmFpbCwgZm9yY2UgdXNlciBsb2dvdXRcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJSZXNwb25zZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzQ2xpZW50VG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1JlcXVlc3RNYXBwaW5nID0gSW50ZXJjZXB0b3JVdGlsLmdldEludGVyY2VwdG9yUGFyYW0oXG4gICAgICBVU0VfQ0xJRU5UX1RPS0VOLFxuICAgICAgcmVxdWVzdC5oZWFkZXJzXG4gICAgKTtcbiAgICByZXR1cm4gQm9vbGVhbihpc1JlcXVlc3RNYXBwaW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDdXN0b21lclN1cHBvcnRBZ2VudFJlcXVlc3QocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzUmVxdWVzdE1hcHBpbmcgPSBJbnRlcmNlcHRvclV0aWwuZ2V0SW50ZXJjZXB0b3JQYXJhbShcbiAgICAgIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxuICAgICAgcmVxdWVzdC5oZWFkZXJzXG4gICAgKTtcbiAgICByZXR1cm4gQm9vbGVhbihpc1JlcXVlc3RNYXBwaW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFeHBpcmVkVG9rZW4ocmVzcDogSHR0cEVycm9yUmVzcG9uc2UpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICByZXNwLmVycm9yICYmXG4gICAgICByZXNwLmVycm9yLmVycm9ycyAmJlxuICAgICAgcmVzcC5lcnJvci5lcnJvcnMgaW5zdGFuY2VvZiBBcnJheSAmJlxuICAgICAgcmVzcC5lcnJvci5lcnJvcnNbMF1cbiAgICApIHtcbiAgICAgIHJldHVybiByZXNwLmVycm9yLmVycm9yc1swXS50eXBlID09PSAnSW52YWxpZFRva2VuRXJyb3InO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==