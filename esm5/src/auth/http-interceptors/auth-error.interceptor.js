/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../occ/utils/interceptor-util';
import { AuthService } from '../facade/auth.service';
import { ClientErrorHandlingService } from '../services/client-error/client-error-handling.service';
import { UserErrorHandlingService } from '../services/user-error/user-error-handling.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/user-error/user-error-handling.service";
import * as i2 from "../services/client-error/client-error-handling.service";
import * as i3 from "../facade/auth.service";
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
        { type: AuthService }
    ]; };
    /** @nocollapse */ AuthErrorInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthErrorInterceptor_Factory() { return new AuthErrorInterceptor(i0.ɵɵinject(i1.UserErrorHandlingService), i0.ɵɵinject(i2.ClientErrorHandlingService), i0.ɵɵinject(i3.AuthService)); }, token: AuthErrorInterceptor, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL2F1dGgtZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsR0FLbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixHQUNqQixNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7O0lBRXhGLGNBQWMsR0FBRyxrQ0FBa0M7QUFFekQ7SUFFRSw4QkFDVSx3QkFBa0QsRUFDbEQsMEJBQXNELEVBQ3RELFdBQXdCO1FBRnhCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUMvQixDQUFDOzs7Ozs7SUFFSix3Q0FBUzs7Ozs7SUFBVCxVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQXVEQzs7WUFuRE8sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztRQUMvRCxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLE9BQU8sR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsVUFBVTs7OztRQUFDLFVBQUMsV0FBZ0I7WUFDMUIsSUFBSSxXQUFXLFlBQVksaUJBQWlCLEVBQUU7Z0JBQzVDLFFBQVEsV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDMUIsS0FBSyxHQUFHLEVBQUUsZUFBZTt3QkFDdkIsSUFBSSxvQkFBb0IsRUFBRTs0QkFDeEIsSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dDQUNwQyxPQUFPLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FDN0QsT0FBTyxFQUNQLElBQUksQ0FDTCxDQUFDOzZCQUNIOzRCQUNELHFCQUFxQjt5QkFDdEI7NkJBQU07NEJBQ0wsSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dDQUNwQyxPQUFPLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FDekQsT0FBTyxFQUNQLElBQUksQ0FDTCxDQUFDOzZCQUNIO2lDQUFNOzRCQUNMLHdCQUF3Qjs0QkFDeEIseUZBQXlGOzRCQUN6RixXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7Z0NBQ3hDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGVBQWUsRUFDM0M7Z0NBQ0EsS0FBSSxDQUFDLHdCQUF3QixDQUFDLHlCQUF5QixFQUFFLENBQUM7Z0NBQzFELE9BQU8sRUFBRSxFQUFFLENBQUM7NkJBQ2I7eUJBQ0Y7d0JBQ0QsTUFBTTtvQkFDUixLQUFLLEdBQUcsRUFBRSxjQUFjO3dCQUN0QixJQUNFLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQzs0QkFDeEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssZUFBZSxFQUMzQzs0QkFDQSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLGVBQWUsRUFBRTtnQ0FDdEQsd0NBQXdDO2dDQUN4QyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzZCQUMzQjt5QkFDRjt3QkFDRCxNQUFNO2lCQUNUO2FBQ0Y7WUFDRCxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sbURBQW9COzs7OztJQUE1QixVQUE2QixPQUF5Qjs7WUFDOUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLG1CQUFtQixDQUMxRCxnQkFBZ0IsRUFDaEIsT0FBTyxDQUFDLE9BQU8sQ0FDaEI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUVPLDZDQUFjOzs7OztJQUF0QixVQUF1QixJQUF1QjtRQUM1QyxJQUNFLElBQUksQ0FBQyxLQUFLO1lBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxZQUFZLEtBQUs7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ3BCO1lBQ0EsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUM7U0FDMUQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQW5GRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUp6Qix3QkFBd0I7Z0JBRHhCLDBCQUEwQjtnQkFEMUIsV0FBVzs7OytCQWRwQjtDQXdHQyxBQXBGRCxJQW9GQztTQW5GWSxvQkFBb0I7Ozs7OztJQUU3Qix3REFBMEQ7Ozs7O0lBQzFELDBEQUE4RDs7Ozs7SUFDOUQsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBVU0VfQ0xJRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbGllbnQtZXJyb3IvY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlci1lcnJvci91c2VyLWVycm9yLWhhbmRsaW5nLnNlcnZpY2UnO1xuXG5jb25zdCBPQVVUSF9FTkRQT0lOVCA9ICcvYXV0aG9yaXphdGlvbnNlcnZlci9vYXV0aC90b2tlbic7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXV0aEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJFcnJvckhhbmRsaW5nU2VydmljZTogVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2U6IENsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3QgaXNDbGllbnRUb2tlblJlcXVlc3QgPSB0aGlzLmlzQ2xpZW50VG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xuICAgIGlmIChpc0NsaWVudFRva2VuUmVxdWVzdCkge1xuICAgICAgcmVxdWVzdCA9IEludGVyY2VwdG9yVXRpbC5yZW1vdmVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgcmVxdWVzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJSZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJSZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgc3dpdGNoIChlcnJSZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAxOiAvLyBVbmF1dGhvcml6ZWRcbiAgICAgICAgICAgICAgaWYgKGlzQ2xpZW50VG9rZW5SZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHBpcmVkVG9rZW4oZXJyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRFcnJvckhhbmRsaW5nU2VydmljZS5oYW5kbGVFeHBpcmVkQ2xpZW50VG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHVzZXIgdG9rZW4gcmVxdWVzdFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwaXJlZFRva2VuKGVyclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLmhhbmRsZUV4cGlyZWRVc2VyVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggZXhwaXJlZCB0b2tlblxuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgT0FVVEggZW5kcG9pbnQgd2FzIGNhbGxlZCBhbmQgdGhlIGVycm9yIGlzIGZvciByZWZyZXNoIHRva2VuIGlzIGV4cGlyZWRcbiAgICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLnVybC5pbmNsdWRlcyhPQVVUSF9FTkRQT0lOVCkgJiZcbiAgICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF90b2tlbidcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLmhhbmRsZUV4cGlyZWRSZWZyZXNoVG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvZigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDAwOiAvLyBCYWQgUmVxdWVzdFxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZXJyUmVzcG9uc2UudXJsLmluY2x1ZGVzKE9BVVRIX0VORFBPSU5UKSAmJlxuICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF9ncmFudCdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuYm9keS5nZXQoJ2dyYW50X3R5cGUnKSA9PT0gJ3JlZnJlc2hfdG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgICAvLyByZWZyZXNoIHRva2VuIGZhaWwsIGZvcmNlIHVzZXIgbG9nb3V0XG4gICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyUmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NsaWVudFRva2VuUmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNSZXF1ZXN0TWFwcGluZyA9IEludGVyY2VwdG9yVXRpbC5nZXRJbnRlcmNlcHRvclBhcmFtKFxuICAgICAgVVNFX0NMSUVOVF9UT0tFTixcbiAgICAgIHJlcXVlc3QuaGVhZGVyc1xuICAgICk7XG4gICAgcmV0dXJuIEJvb2xlYW4oaXNSZXF1ZXN0TWFwcGluZyk7XG4gIH1cblxuICBwcml2YXRlIGlzRXhwaXJlZFRva2VuKHJlc3A6IEh0dHBFcnJvclJlc3BvbnNlKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgcmVzcC5lcnJvciAmJlxuICAgICAgcmVzcC5lcnJvci5lcnJvcnMgJiZcbiAgICAgIHJlc3AuZXJyb3IuZXJyb3JzIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICAgIHJlc3AuZXJyb3IuZXJyb3JzWzBdXG4gICAgKSB7XG4gICAgICByZXR1cm4gcmVzcC5lcnJvci5lcnJvcnNbMF0udHlwZSA9PT0gJ0ludmFsaWRUb2tlbkVycm9yJztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=