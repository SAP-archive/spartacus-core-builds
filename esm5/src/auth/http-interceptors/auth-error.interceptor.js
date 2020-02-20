import { __decorate } from "tslib";
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
var OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
var AuthErrorInterceptor = /** @class */ (function () {
    function AuthErrorInterceptor(userErrorHandlingService, clientErrorHandlingService, authService) {
        this.userErrorHandlingService = userErrorHandlingService;
        this.clientErrorHandlingService = clientErrorHandlingService;
        this.authService = authService;
    }
    AuthErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
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
    AuthErrorInterceptor.prototype.isClientTokenRequest = function (request) {
        var isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
    };
    AuthErrorInterceptor.prototype.isExpiredToken = function (resp) {
        if (resp.error &&
            resp.error.errors &&
            resp.error.errors instanceof Array &&
            resp.error.errors[0]) {
            return resp.error.errors[0].type === 'InvalidTokenError';
        }
        return false;
    };
    AuthErrorInterceptor.ctorParameters = function () { return [
        { type: UserErrorHandlingService },
        { type: ClientErrorHandlingService },
        { type: AuthService }
    ]; };
    AuthErrorInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthErrorInterceptor_Factory() { return new AuthErrorInterceptor(i0.ɵɵinject(i1.UserErrorHandlingService), i0.ɵɵinject(i2.ClientErrorHandlingService), i0.ɵɵinject(i3.AuthService)); }, token: AuthErrorInterceptor, providedIn: "root" });
    AuthErrorInterceptor = __decorate([
        Injectable({ providedIn: 'root' })
    ], AuthErrorInterceptor);
    return AuthErrorInterceptor;
}());
export { AuthErrorInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL2F1dGgtZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxpQkFBaUIsR0FLbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixHQUNqQixNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7QUFFOUYsSUFBTSxjQUFjLEdBQUcsa0NBQWtDLENBQUM7QUFHMUQ7SUFDRSw4QkFDVSx3QkFBa0QsRUFDbEQsMEJBQXNELEVBQ3RELFdBQXdCO1FBRnhCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUMvQixDQUFDO0lBRUosd0NBQVMsR0FBVCxVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQXVEQztRQW5EQyxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLE9BQU8sR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsVUFBVSxDQUFDLFVBQUMsV0FBZ0I7WUFDMUIsSUFBSSxXQUFXLFlBQVksaUJBQWlCLEVBQUU7Z0JBQzVDLFFBQVEsV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDMUIsS0FBSyxHQUFHLEVBQUUsZUFBZTt3QkFDdkIsSUFBSSxvQkFBb0IsRUFBRTs0QkFDeEIsSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dDQUNwQyxPQUFPLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FDN0QsT0FBTyxFQUNQLElBQUksQ0FDTCxDQUFDOzZCQUNIOzRCQUNELHFCQUFxQjt5QkFDdEI7NkJBQU07NEJBQ0wsSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dDQUNwQyxPQUFPLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FDekQsT0FBTyxFQUNQLElBQUksQ0FDTCxDQUFDOzZCQUNIO2lDQUFNOzRCQUNMLHdCQUF3Qjs0QkFDeEIseUZBQXlGOzRCQUN6RixXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7Z0NBQ3hDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGVBQWUsRUFDM0M7Z0NBQ0EsS0FBSSxDQUFDLHdCQUF3QixDQUFDLHlCQUF5QixFQUFFLENBQUM7Z0NBQzFELE9BQU8sRUFBRSxFQUFFLENBQUM7NkJBQ2I7eUJBQ0Y7d0JBQ0QsTUFBTTtvQkFDUixLQUFLLEdBQUcsRUFBRSxjQUFjO3dCQUN0QixJQUNFLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQzs0QkFDeEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssZUFBZSxFQUMzQzs0QkFDQSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLGVBQWUsRUFBRTtnQ0FDdEQsd0NBQXdDO2dDQUN4QyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzZCQUMzQjt5QkFDRjt3QkFDRCxNQUFNO2lCQUNUO2FBQ0Y7WUFDRCxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLG1EQUFvQixHQUE1QixVQUE2QixPQUF5QjtRQUNwRCxJQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxtQkFBbUIsQ0FDMUQsZ0JBQWdCLEVBQ2hCLE9BQU8sQ0FBQyxPQUFPLENBQ2hCLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTyw2Q0FBYyxHQUF0QixVQUF1QixJQUF1QjtRQUM1QyxJQUNFLElBQUksQ0FBQyxLQUFLO1lBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxZQUFZLEtBQUs7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ3BCO1lBQ0EsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUM7U0FDMUQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQWhGbUMsd0JBQXdCO2dCQUN0QiwwQkFBMEI7Z0JBQ3pDLFdBQVc7OztJQUp2QixvQkFBb0I7UUFEaEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLG9CQUFvQixDQW1GaEM7K0JBeEdEO0NBd0dDLEFBbkZELElBbUZDO1NBbkZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NMSUVOVF9UT0tFTixcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2xpZW50LWVycm9yL2NsaWVudC1lcnJvci1oYW5kbGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJFcnJvckhhbmRsaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXItZXJyb3IvdXNlci1lcnJvci1oYW5kbGluZy5zZXJ2aWNlJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEF1dGhFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyRXJyb3JIYW5kbGluZ1NlcnZpY2U6IFVzZXJFcnJvckhhbmRsaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGNsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlOiBDbGllbnRFcnJvckhhbmRsaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IGlzQ2xpZW50VG9rZW5SZXF1ZXN0ID0gdGhpcy5pc0NsaWVudFRva2VuUmVxdWVzdChyZXF1ZXN0KTtcbiAgICBpZiAoaXNDbGllbnRUb2tlblJlcXVlc3QpIHtcbiAgICAgIHJlcXVlc3QgPSBJbnRlcmNlcHRvclV0aWwucmVtb3ZlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHJlcXVlc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyUmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyUmVzcG9uc2UgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgIHN3aXRjaCAoZXJyUmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIDQwMTogLy8gVW5hdXRob3JpemVkXG4gICAgICAgICAgICAgIGlmIChpc0NsaWVudFRva2VuUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwaXJlZFRva2VuKGVyclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UuaGFuZGxlRXhwaXJlZENsaWVudFRva2VuKFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICBuZXh0XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB1c2VyIHRva2VuIHJlcXVlc3RcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0V4cGlyZWRUb2tlbihlcnJSZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJFcnJvckhhbmRsaW5nU2VydmljZS5oYW5kbGVFeHBpcmVkVXNlclRva2VuKFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICBuZXh0XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAvLyBSZWZyZXNoIGV4cGlyZWQgdG9rZW5cbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIE9BVVRIIGVuZHBvaW50IHdhcyBjYWxsZWQgYW5kIHRoZSBlcnJvciBpcyBmb3IgcmVmcmVzaCB0b2tlbiBpcyBleHBpcmVkXG4gICAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS51cmwuaW5jbHVkZXMoT0FVVEhfRU5EUE9JTlQpICYmXG4gICAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS5lcnJvci5lcnJvciA9PT0gJ2ludmFsaWRfdG9rZW4nXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnVzZXJFcnJvckhhbmRsaW5nU2VydmljZS5oYW5kbGVFeHBpcmVkUmVmcmVzaFRva2VuKCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gb2YoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwMDogLy8gQmFkIFJlcXVlc3RcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLnVybC5pbmNsdWRlcyhPQVVUSF9FTkRQT0lOVCkgJiZcbiAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS5lcnJvci5lcnJvciA9PT0gJ2ludmFsaWRfZ3JhbnQnXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmJvZHkuZ2V0KCdncmFudF90eXBlJykgPT09ICdyZWZyZXNoX3Rva2VuJykge1xuICAgICAgICAgICAgICAgICAgLy8gcmVmcmVzaCB0b2tlbiBmYWlsLCBmb3JjZSB1c2VyIGxvZ291dFxuICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVyclJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDbGllbnRUb2tlblJlcXVlc3QocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzUmVxdWVzdE1hcHBpbmcgPSBJbnRlcmNlcHRvclV0aWwuZ2V0SW50ZXJjZXB0b3JQYXJhbShcbiAgICAgIFVTRV9DTElFTlRfVE9LRU4sXG4gICAgICByZXF1ZXN0LmhlYWRlcnNcbiAgICApO1xuICAgIHJldHVybiBCb29sZWFuKGlzUmVxdWVzdE1hcHBpbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0V4cGlyZWRUb2tlbihyZXNwOiBIdHRwRXJyb3JSZXNwb25zZSk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIHJlc3AuZXJyb3IgJiZcbiAgICAgIHJlc3AuZXJyb3IuZXJyb3JzICYmXG4gICAgICByZXNwLmVycm9yLmVycm9ycyBpbnN0YW5jZW9mIEFycmF5ICYmXG4gICAgICByZXNwLmVycm9yLmVycm9yc1swXVxuICAgICkge1xuICAgICAgcmV0dXJuIHJlc3AuZXJyb3IuZXJyb3JzWzBdLnR5cGUgPT09ICdJbnZhbGlkVG9rZW5FcnJvcic7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19