import { HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthConfigService } from '../services/auth-config.service';
import { AuthHttpHeaderService } from '../services/auth-http-header.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/auth-http-header.service";
import * as i2 from "../services/auth-config.service";
/**
 * Responsible for catching auth errors and providing `Authorization` header for API calls.
 * Uses AuthHttpHeaderService for request manipulation and error handling. Interceptor only hooks into request send/received events.
 */
export class AuthInterceptor {
    constructor(authHttpHeaderService, authConfigService) {
        this.authHttpHeaderService = authHttpHeaderService;
        this.authConfigService = authConfigService;
    }
    intercept(request, next) {
        const shouldCatchError = this.authHttpHeaderService.shouldCatchError(request);
        request = this.authHttpHeaderService.alterRequest(request);
        return next.handle(request).pipe(catchError((errResponse) => {
            if (errResponse instanceof HttpErrorResponse) {
                switch (errResponse.status) {
                    case 401: // Unauthorized
                        if (this.isExpiredToken(errResponse) && shouldCatchError) {
                            return this.authHttpHeaderService.handleExpiredAccessToken(request, next);
                        }
                        else if (
                        // Refresh expired token
                        // Check that the OAUTH endpoint was called and the error is for refresh token is expired
                        errResponse.url.includes(this.authConfigService.getTokenEndpoint()) &&
                            errResponse.error.error === 'invalid_token') {
                            this.authHttpHeaderService.handleExpiredRefreshToken();
                            return of();
                        }
                        break;
                    case 400: // Bad Request
                        if (errResponse.url.includes(this.authConfigService.getTokenEndpoint()) &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'refresh_token') {
                                this.authHttpHeaderService.handleExpiredRefreshToken();
                            }
                        }
                        break;
                }
            }
            return throwError(errResponse);
        }));
    }
    isExpiredToken(resp) {
        var _a, _b, _c;
        return ((_c = (_b = (_a = resp.error) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.type) === 'InvalidTokenError';
    }
}
AuthInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthInterceptor_Factory() { return new AuthInterceptor(i0.ɵɵinject(i1.AuthHttpHeaderService), i0.ɵɵinject(i2.AuthConfigService)); }, token: AuthInterceptor, providedIn: "root" });
AuthInterceptor.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
AuthInterceptor.ctorParameters = () => [
    { type: AuthHttpHeaderService },
    { type: AuthConfigService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2F1dGgvdXNlci1hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixHQUtsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRTdFOzs7R0FHRztBQUVILE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQ1kscUJBQTRDLEVBQzVDLGlCQUFvQztRQURwQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKLFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FDbEUsT0FBTyxDQUNSLENBQUM7UUFFRixPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVLENBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUU7WUFDOUIsSUFBSSxXQUFXLFlBQVksaUJBQWlCLEVBQUU7Z0JBQzVDLFFBQVEsV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDMUIsS0FBSyxHQUFHLEVBQUUsZUFBZTt3QkFDdkIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLGdCQUFnQixFQUFFOzRCQUN4RCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FDeEQsT0FBTyxFQUNQLElBQUksQ0FDTCxDQUFDO3lCQUNIOzZCQUFNO3dCQUNMLHdCQUF3Qjt3QkFDeEIseUZBQXlGO3dCQUN6RixXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQzFDOzRCQUNELFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGVBQWUsRUFDM0M7NEJBQ0EsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixFQUFFLENBQUM7NEJBQ3ZELE9BQU8sRUFBRSxFQUFrQixDQUFDO3lCQUM3Qjt3QkFFRCxNQUFNO29CQUNSLEtBQUssR0FBRyxFQUFFLGNBQWM7d0JBQ3RCLElBQ0UsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQ3RCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUMxQzs0QkFDRCxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxlQUFlLEVBQzNDOzRCQUNBLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssZUFBZSxFQUFFO2dDQUN0RCxJQUFJLENBQUMscUJBQXFCLENBQUMseUJBQXlCLEVBQUUsQ0FBQzs2QkFDeEQ7eUJBQ0Y7d0JBQ0QsTUFBTTtpQkFDVDthQUNGO1lBQ0QsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFUyxjQUFjLENBQUMsSUFBdUI7O1FBQzlDLE9BQU8sbUJBQUEsSUFBSSxDQUFDLEtBQUssMENBQUUsTUFBTSwwQ0FBRyxDQUFDLDJDQUFHLElBQUksTUFBSyxtQkFBbUIsQ0FBQztJQUMvRCxDQUFDOzs7O1lBN0RGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQU56QixxQkFBcUI7WUFEckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhIdHRwSGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGgtaHR0cC1oZWFkZXIuc2VydmljZSc7XG5cbi8qKlxuICogUmVzcG9uc2libGUgZm9yIGNhdGNoaW5nIGF1dGggZXJyb3JzIGFuZCBwcm92aWRpbmcgYEF1dGhvcml6YXRpb25gIGhlYWRlciBmb3IgQVBJIGNhbGxzLlxuICogVXNlcyBBdXRoSHR0cEhlYWRlclNlcnZpY2UgZm9yIHJlcXVlc3QgbWFuaXB1bGF0aW9uIGFuZCBlcnJvciBoYW5kbGluZy4gSW50ZXJjZXB0b3Igb25seSBob29rcyBpbnRvIHJlcXVlc3Qgc2VuZC9yZWNlaXZlZCBldmVudHMuXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhIdHRwSGVhZGVyU2VydmljZTogQXV0aEh0dHBIZWFkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoQ29uZmlnU2VydmljZTogQXV0aENvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBzaG91bGRDYXRjaEVycm9yID0gdGhpcy5hdXRoSHR0cEhlYWRlclNlcnZpY2Uuc2hvdWxkQ2F0Y2hFcnJvcihcbiAgICAgIHJlcXVlc3RcbiAgICApO1xuXG4gICAgcmVxdWVzdCA9IHRoaXMuYXV0aEh0dHBIZWFkZXJTZXJ2aWNlLmFsdGVyUmVxdWVzdChyZXF1ZXN0KTtcblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyUmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyUmVzcG9uc2UgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgIHN3aXRjaCAoZXJyUmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIDQwMTogLy8gVW5hdXRob3JpemVkXG4gICAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwaXJlZFRva2VuKGVyclJlc3BvbnNlKSAmJiBzaG91bGRDYXRjaEVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHBIZWFkZXJTZXJ2aWNlLmhhbmRsZUV4cGlyZWRBY2Nlc3NUb2tlbihcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICBuZXh0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAvLyBSZWZyZXNoIGV4cGlyZWQgdG9rZW5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBPQVVUSCBlbmRwb2ludCB3YXMgY2FsbGVkIGFuZCB0aGUgZXJyb3IgaXMgZm9yIHJlZnJlc2ggdG9rZW4gaXMgZXhwaXJlZFxuICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLnVybC5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aENvbmZpZ1NlcnZpY2UuZ2V0VG9rZW5FbmRwb2ludCgpXG4gICAgICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF90b2tlbidcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoSHR0cEhlYWRlclNlcnZpY2UuaGFuZGxlRXhwaXJlZFJlZnJlc2hUb2tlbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZjxIdHRwRXZlbnQ8YW55Pj4oKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDA6IC8vIEJhZCBSZXF1ZXN0XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS51cmwuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICB0aGlzLmF1dGhDb25maWdTZXJ2aWNlLmdldFRva2VuRW5kcG9pbnQoKVxuICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS5lcnJvci5lcnJvciA9PT0gJ2ludmFsaWRfZ3JhbnQnXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmJvZHkuZ2V0KCdncmFudF90eXBlJykgPT09ICdyZWZyZXNoX3Rva2VuJykge1xuICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoSHR0cEhlYWRlclNlcnZpY2UuaGFuZGxlRXhwaXJlZFJlZnJlc2hUb2tlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyUmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzRXhwaXJlZFRva2VuKHJlc3A6IEh0dHBFcnJvclJlc3BvbnNlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3AuZXJyb3I/LmVycm9ycz8uWzBdPy50eXBlID09PSAnSW52YWxpZFRva2VuRXJyb3InO1xuICB9XG59XG4iXX0=