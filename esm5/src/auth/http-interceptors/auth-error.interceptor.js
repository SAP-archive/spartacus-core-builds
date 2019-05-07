/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpErrorResponse, } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../facade/auth.service';
import { ClientErrorHandlingService } from '../services/client-error/client-error-handling.service';
import { UserErrorHandlingService } from '../services/user-error/user-error-handling.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../occ/utils/interceptor-util';
/** @type {?} */
var OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
var AuthErrorInterceptor = /** @class */ (function () {
    function AuthErrorInterceptor(userErrorHandlingService, clientErrorHandlingService, authService) {
        this.userErrorHandlingService = userErrorHandlingService;
        this.clientErrorHandlingService = clientErrorHandlingService;
        this.authService = authService;
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
        return next.handle(request).pipe(catchError(function (errResponse) {
            if (errResponse instanceof HttpErrorResponse) {
                switch (errResponse.status) {
                    case 401: // Unauthorized
                        if (isClientTokenRequest) {
                            if (_this.isExpiredToken(errResponse)) {
                                return _this.clientErrorHandlingService.handleExpiredClientToken(request, next);
                            }
                            // user token request
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
        }));
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
        { type: AuthService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL2F1dGgtZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUlMLGlCQUFpQixHQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDcEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDOUYsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsR0FDakIsTUFBTSxrQ0FBa0MsQ0FBQzs7SUFFcEMsY0FBYyxHQUFHLGtDQUFrQztBQUV6RDtJQUVFLDhCQUNVLHdCQUFrRCxFQUNsRCwwQkFBc0QsRUFDdEQsV0FBd0I7UUFGeEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQy9CLENBQUM7Ozs7OztJQUVKLHdDQUFTOzs7OztJQUFULFVBQ0UsT0FBeUIsRUFDekIsSUFBaUI7UUFGbkIsaUJBdURDOztZQW5ETyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDO1FBQy9ELElBQUksb0JBQW9CLEVBQUU7WUFDeEIsT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbkU7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVLENBQUMsVUFBQyxXQUFnQjtZQUMxQixJQUFJLFdBQVcsWUFBWSxpQkFBaUIsRUFBRTtnQkFDNUMsUUFBUSxXQUFXLENBQUMsTUFBTSxFQUFFO29CQUMxQixLQUFLLEdBQUcsRUFBRSxlQUFlO3dCQUN2QixJQUFJLG9CQUFvQixFQUFFOzRCQUN4QixJQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0NBQ3BDLE9BQU8sS0FBSSxDQUFDLDBCQUEwQixDQUFDLHdCQUF3QixDQUM3RCxPQUFPLEVBQ1AsSUFBSSxDQUNMLENBQUM7NkJBQ0g7NEJBQ0QscUJBQXFCO3lCQUN0Qjs2QkFBTTs0QkFDTCxJQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0NBQ3BDLE9BQU8sS0FBSSxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixDQUN6RCxPQUFPLEVBQ1AsSUFBSSxDQUNMLENBQUM7NkJBQ0g7aUNBQU07NEJBQ0wsd0JBQXdCOzRCQUN4Qix5RkFBeUY7NEJBQ3pGLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztnQ0FDeEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssZUFBZSxFQUMzQztnQ0FDQSxLQUFJLENBQUMsd0JBQXdCLENBQUMseUJBQXlCLEVBQUUsQ0FBQztnQ0FDMUQsT0FBTyxFQUFFLEVBQUUsQ0FBQzs2QkFDYjt5QkFDRjt3QkFDRCxNQUFNO29CQUNSLEtBQUssR0FBRyxFQUFFLGNBQWM7d0JBQ3RCLElBQ0UsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDOzRCQUN4QyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxlQUFlLEVBQzNDOzRCQUNBLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssZUFBZSxFQUFFO2dDQUN0RCx3Q0FBd0M7Z0NBQ3hDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7NkJBQzNCO3lCQUNGO3dCQUNELE1BQU07aUJBQ1Q7YUFDRjtZQUNELE9BQU8sVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxtREFBb0I7Ozs7O0lBQTVCLFVBQTZCLE9BQXlCOztZQUM5QyxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsbUJBQW1CLENBQzFELGdCQUFnQixFQUNoQixPQUFPLENBQUMsT0FBTyxDQUNoQjtRQUNELE9BQU8sT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRU8sNkNBQWM7Ozs7O0lBQXRCLFVBQXVCLElBQXVCO1FBQzVDLElBQ0UsSUFBSSxDQUFDLEtBQUs7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFlBQVksS0FBSztZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDcEI7WUFDQSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQztTQUMxRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBbkZGLFVBQVU7Ozs7Z0JBUkYsd0JBQXdCO2dCQUR4QiwwQkFBMEI7Z0JBRDFCLFdBQVc7O0lBOEZwQiwyQkFBQztDQUFBLEFBcEZELElBb0ZDO1NBbkZZLG9CQUFvQjs7Ozs7O0lBRTdCLHdEQUEwRDs7Ozs7SUFDMUQsMERBQThEOzs7OztJQUM5RCwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDbGllbnRFcnJvckhhbmRsaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NsaWVudC1lcnJvci9jbGllbnQtZXJyb3ItaGFuZGxpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyRXJyb3JIYW5kbGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLWVycm9yL3VzZXItZXJyb3ItaGFuZGxpbmcuc2VydmljZSc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DTElFTlRfVE9LRU4sXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9pbnRlcmNlcHRvci11dGlsJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJFcnJvckhhbmRsaW5nU2VydmljZTogVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2U6IENsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3QgaXNDbGllbnRUb2tlblJlcXVlc3QgPSB0aGlzLmlzQ2xpZW50VG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xuICAgIGlmIChpc0NsaWVudFRva2VuUmVxdWVzdCkge1xuICAgICAgcmVxdWVzdCA9IEludGVyY2VwdG9yVXRpbC5yZW1vdmVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgcmVxdWVzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJSZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJSZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgc3dpdGNoIChlcnJSZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAxOiAvLyBVbmF1dGhvcml6ZWRcbiAgICAgICAgICAgICAgaWYgKGlzQ2xpZW50VG9rZW5SZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHBpcmVkVG9rZW4oZXJyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRFcnJvckhhbmRsaW5nU2VydmljZS5oYW5kbGVFeHBpcmVkQ2xpZW50VG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHVzZXIgdG9rZW4gcmVxdWVzdFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwaXJlZFRva2VuKGVyclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLmhhbmRsZUV4cGlyZWRVc2VyVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggZXhwaXJlZCB0b2tlblxuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgT0FVVEggZW5kcG9pbnQgd2FzIGNhbGxlZCBhbmQgdGhlIGVycm9yIGlzIGZvciByZWZyZXNoIHRva2VuIGlzIGV4cGlyZWRcbiAgICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLnVybC5pbmNsdWRlcyhPQVVUSF9FTkRQT0lOVCkgJiZcbiAgICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF90b2tlbidcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLmhhbmRsZUV4cGlyZWRSZWZyZXNoVG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvZigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDAwOiAvLyBCYWQgUmVxdWVzdFxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZXJyUmVzcG9uc2UudXJsLmluY2x1ZGVzKE9BVVRIX0VORFBPSU5UKSAmJlxuICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF9ncmFudCdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuYm9keS5nZXQoJ2dyYW50X3R5cGUnKSA9PT0gJ3JlZnJlc2hfdG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgICAvLyByZWZyZXNoIHRva2VuIGZhaWwsIGZvcmNlIHVzZXIgbG9nb3V0XG4gICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyUmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NsaWVudFRva2VuUmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNSZXF1ZXN0TWFwcGluZyA9IEludGVyY2VwdG9yVXRpbC5nZXRJbnRlcmNlcHRvclBhcmFtKFxuICAgICAgVVNFX0NMSUVOVF9UT0tFTixcbiAgICAgIHJlcXVlc3QuaGVhZGVyc1xuICAgICk7XG4gICAgcmV0dXJuIEJvb2xlYW4oaXNSZXF1ZXN0TWFwcGluZyk7XG4gIH1cblxuICBwcml2YXRlIGlzRXhwaXJlZFRva2VuKHJlc3A6IEh0dHBFcnJvclJlc3BvbnNlKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgcmVzcC5lcnJvciAmJlxuICAgICAgcmVzcC5lcnJvci5lcnJvcnMgJiZcbiAgICAgIHJlc3AuZXJyb3IuZXJyb3JzIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICAgIHJlc3AuZXJyb3IuZXJyb3JzWzBdXG4gICAgKSB7XG4gICAgICByZXR1cm4gcmVzcC5lcnJvci5lcnJvcnNbMF0udHlwZSA9PT0gJ0ludmFsaWRUb2tlbkVycm9yJztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=