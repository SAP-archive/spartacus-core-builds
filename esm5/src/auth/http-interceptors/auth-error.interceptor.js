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
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthErrorInterceptor.ctorParameters = function () { return [
        { type: UserErrorHandlingService },
        { type: ClientErrorHandlingService },
        { type: AuthService },
        { type: CustomerSupportAgentErrorHandlingService }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL2F1dGgtZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsR0FLbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixnQ0FBZ0MsR0FDakMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDcEcsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7O0lBRXhGLGNBQWMsR0FBRyxrQ0FBa0M7QUFFekQ7SUFzQkUsOEJBQ1Usd0JBQWtELEVBQ2xELDBCQUFzRCxFQUN0RCxXQUF3QixFQUN4QiwyQkFBc0U7UUFIdEUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBMkM7SUFDN0UsQ0FBQzs7Ozs7O0lBRUosd0NBQVM7Ozs7O0lBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjtRQUZuQixpQkFtRUM7O1lBL0RPLG9CQUFv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QUFJLENBQUMsS0FBSztZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sWUFBWSxLQUFLO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUNwQjtZQUNBLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLG1CQUFtQixDQUFDO1NBQzFEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkE1SEYsVUFBVTs7OztnQkFKRix3QkFBd0I7Z0JBRnhCLDBCQUEwQjtnQkFEMUIsV0FBVztnQkFFWCx3Q0FBd0M7O0lBa0lqRCwyQkFBQztDQUFBLEFBN0hELElBNkhDO1NBNUhZLG9CQUFvQjs7Ozs7O0lBc0I3Qix3REFBMEQ7Ozs7O0lBQzFELDBEQUE4RDs7Ozs7SUFDOUQsMkNBQWdDOzs7OztJQUNoQywyREFBOEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DTElFTlRfVE9LRU4sXG4gIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbGllbnQtZXJyb3IvY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTdXBwb3J0QWdlbnRFcnJvckhhbmRsaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NzYWdlbnQtZXJyb3IvY3NhZ2VudC1lcnJvci1oYW5kbGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJFcnJvckhhbmRsaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXItZXJyb3IvdXNlci1lcnJvci1oYW5kbGluZy5zZXJ2aWNlJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICB1c2VyRXJyb3JIYW5kbGluZ1NlcnZpY2U6IFVzZXJFcnJvckhhbmRsaW5nU2VydmljZSxcbiAgICBjbGllbnRFcnJvckhhbmRsaW5nU2VydmljZTogQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UsXG4gICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gICAgY3NhZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlOiBDdXN0b21lclN1cHBvcnRBZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBJbnN0ZWFkLCB1c2UgY29uc3RydWN0b3IoXG4gICAqIHVzZXJFcnJvckhhbmRsaW5nU2VydmljZTogVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgKiBjbGllbnRFcnJvckhhbmRsaW5nU2VydmljZTogQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UsXG4gICAqIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICogY3NhZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlOiBDdXN0b21lclN1cHBvcnRBZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICB1c2VyRXJyb3JIYW5kbGluZ1NlcnZpY2U6IFVzZXJFcnJvckhhbmRsaW5nU2VydmljZSxcbiAgICBjbGllbnRFcnJvckhhbmRsaW5nU2VydmljZTogQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UsXG4gICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlOiBVc2VyRXJyb3JIYW5kbGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbGllbnRFcnJvckhhbmRsaW5nU2VydmljZTogQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjc2FnZW50RXJyb3JIYW5kbGluZ1NlcnZpY2U/OiBDdXN0b21lclN1cHBvcnRBZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3QgaXNDbGllbnRUb2tlblJlcXVlc3QgPSB0aGlzLmlzQ2xpZW50VG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xuICAgIGlmIChpc0NsaWVudFRva2VuUmVxdWVzdCkge1xuICAgICAgcmVxdWVzdCA9IEludGVyY2VwdG9yVXRpbC5yZW1vdmVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgcmVxdWVzdCk7XG4gICAgfVxuICAgIGNvbnN0IGlzQ3VzdG9tZXJTdXBwb3J0QWdlbnRSZXF1ZXN0ID0gdGhpcy5pc0N1c3RvbWVyU3VwcG9ydEFnZW50UmVxdWVzdChcbiAgICAgIHJlcXVlc3RcbiAgICApO1xuICAgIGlmIChpc0N1c3RvbWVyU3VwcG9ydEFnZW50UmVxdWVzdCkge1xuICAgICAgcmVxdWVzdCA9IEludGVyY2VwdG9yVXRpbC5yZW1vdmVIZWFkZXIoXG4gICAgICAgIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxuICAgICAgICByZXF1ZXN0XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyUmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyUmVzcG9uc2UgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgIHN3aXRjaCAoZXJyUmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIDQwMTogLy8gVW5hdXRob3JpemVkXG4gICAgICAgICAgICAgIGlmIChpc0NsaWVudFRva2VuUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwaXJlZFRva2VuKGVyclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UuaGFuZGxlRXhwaXJlZENsaWVudFRva2VuKFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICBuZXh0XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB1c2VyIHRva2VuIHJlcXVlc3RcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0N1c3RvbWVyU3VwcG9ydEFnZW50UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3NhZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlLnRlcm1pbmF0ZUN1c3RvbWVyU3VwcG9ydEFnZW50RXhwaXJlZFNlc3Npb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0V4cGlyZWRUb2tlbihlcnJSZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJFcnJvckhhbmRsaW5nU2VydmljZS5oYW5kbGVFeHBpcmVkVXNlclRva2VuKFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICBuZXh0XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAvLyBSZWZyZXNoIGV4cGlyZWQgdG9rZW5cbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIE9BVVRIIGVuZHBvaW50IHdhcyBjYWxsZWQgYW5kIHRoZSBlcnJvciBpcyBmb3IgcmVmcmVzaCB0b2tlbiBpcyBleHBpcmVkXG4gICAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS51cmwuaW5jbHVkZXMoT0FVVEhfRU5EUE9JTlQpICYmXG4gICAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS5lcnJvci5lcnJvciA9PT0gJ2ludmFsaWRfdG9rZW4nXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnVzZXJFcnJvckhhbmRsaW5nU2VydmljZS5oYW5kbGVFeHBpcmVkUmVmcmVzaFRva2VuKCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gb2YoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwMDogLy8gQmFkIFJlcXVlc3RcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLnVybC5pbmNsdWRlcyhPQVVUSF9FTkRQT0lOVCkgJiZcbiAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS5lcnJvci5lcnJvciA9PT0gJ2ludmFsaWRfZ3JhbnQnXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmJvZHkuZ2V0KCdncmFudF90eXBlJykgPT09ICdyZWZyZXNoX3Rva2VuJykge1xuICAgICAgICAgICAgICAgICAgLy8gcmVmcmVzaCB0b2tlbiBmYWlsLCBmb3JjZSB1c2VyIGxvZ291dFxuICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVyclJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDbGllbnRUb2tlblJlcXVlc3QocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzUmVxdWVzdE1hcHBpbmcgPSBJbnRlcmNlcHRvclV0aWwuZ2V0SW50ZXJjZXB0b3JQYXJhbShcbiAgICAgIFVTRV9DTElFTlRfVE9LRU4sXG4gICAgICByZXF1ZXN0LmhlYWRlcnNcbiAgICApO1xuICAgIHJldHVybiBCb29sZWFuKGlzUmVxdWVzdE1hcHBpbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0N1c3RvbWVyU3VwcG9ydEFnZW50UmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNSZXF1ZXN0TWFwcGluZyA9IEludGVyY2VwdG9yVXRpbC5nZXRJbnRlcmNlcHRvclBhcmFtKFxuICAgICAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG4gICAgICByZXF1ZXN0LmhlYWRlcnNcbiAgICApO1xuICAgIHJldHVybiBCb29sZWFuKGlzUmVxdWVzdE1hcHBpbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0V4cGlyZWRUb2tlbihyZXNwOiBIdHRwRXJyb3JSZXNwb25zZSk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIHJlc3AuZXJyb3IgJiZcbiAgICAgIHJlc3AuZXJyb3IuZXJyb3JzICYmXG4gICAgICByZXNwLmVycm9yLmVycm9ycyBpbnN0YW5jZW9mIEFycmF5ICYmXG4gICAgICByZXNwLmVycm9yLmVycm9yc1swXVxuICAgICkge1xuICAgICAgcmV0dXJuIHJlc3AuZXJyb3IuZXJyb3JzWzBdLnR5cGUgPT09ICdJbnZhbGlkVG9rZW5FcnJvcic7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19