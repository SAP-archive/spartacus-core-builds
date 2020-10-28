import { HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthConfigService } from '../services/auth-config.service';
import { AuthHeaderService } from '../services/auth-header.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/auth-header.service";
import * as i2 from "../services/auth-config.service";
/**
 * Responsible for catching auth errors and providing `Authorization` header for API calls.
 * Uses AuthHeaderService for request manipulation and error handling. Interceptor only hooks into request send/received events.
 */
export class AuthInterceptor {
    constructor(authHeaderService, authConfigService) {
        this.authHeaderService = authHeaderService;
        this.authConfigService = authConfigService;
    }
    intercept(request, next) {
        const shouldCatchError = this.authHeaderService.shouldCatchError(request);
        request = this.authHeaderService.alterRequest(request);
        return next.handle(request).pipe(catchError((errResponse) => {
            if (errResponse instanceof HttpErrorResponse) {
                switch (errResponse.status) {
                    case 401: // Unauthorized
                        if (this.isExpiredToken(errResponse) && shouldCatchError) {
                            return this.authHeaderService.handleExpiredAccessToken(request, next);
                        }
                        else if (
                        // Refresh expired token
                        // Check that the OAUTH endpoint was called and the error is for refresh token is expired
                        errResponse.url.includes(this.authConfigService.getTokenEndpoint()) &&
                            errResponse.error.error === 'invalid_token') {
                            this.authHeaderService.handleExpiredRefreshToken();
                            return of();
                        }
                        break;
                    case 400: // Bad Request
                        if (errResponse.url.includes(this.authConfigService.getTokenEndpoint()) &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'refresh_token') {
                                this.authHeaderService.handleExpiredRefreshToken();
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
AuthInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthInterceptor_Factory() { return new AuthInterceptor(i0.ɵɵinject(i1.AuthHeaderService), i0.ɵɵinject(i2.AuthConfigService)); }, token: AuthInterceptor, providedIn: "root" });
AuthInterceptor.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
AuthInterceptor.ctorParameters = () => [
    { type: AuthHeaderService },
    { type: AuthConfigService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2F1dGgvdXNlci1hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL2F1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixHQUtsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRXBFOzs7R0FHRztBQUVILE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQ1ksaUJBQW9DLEVBQ3BDLGlCQUFvQztRQURwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKLFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxRSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVLENBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUU7WUFDOUIsSUFBSSxXQUFXLFlBQVksaUJBQWlCLEVBQUU7Z0JBQzVDLFFBQVEsV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDMUIsS0FBSyxHQUFHLEVBQUUsZUFBZTt3QkFDdkIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLGdCQUFnQixFQUFFOzRCQUN4RCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FDcEQsT0FBTyxFQUNQLElBQUksQ0FDTCxDQUFDO3lCQUNIOzZCQUFNO3dCQUNMLHdCQUF3Qjt3QkFDeEIseUZBQXlGO3dCQUN6RixXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQzFDOzRCQUNELFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGVBQWUsRUFDM0M7NEJBQ0EsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLENBQUM7NEJBQ25ELE9BQU8sRUFBRSxFQUFrQixDQUFDO3lCQUM3Qjt3QkFFRCxNQUFNO29CQUNSLEtBQUssR0FBRyxFQUFFLGNBQWM7d0JBQ3RCLElBQ0UsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQ3RCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUMxQzs0QkFDRCxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxlQUFlLEVBQzNDOzRCQUNBLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssZUFBZSxFQUFFO2dDQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsQ0FBQzs2QkFDcEQ7eUJBQ0Y7d0JBQ0QsTUFBTTtpQkFDVDthQUNGO1lBQ0QsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFUyxjQUFjLENBQUMsSUFBdUI7O1FBQzlDLE9BQU8sbUJBQUEsSUFBSSxDQUFDLEtBQUssMENBQUUsTUFBTSwwQ0FBRyxDQUFDLDJDQUFHLElBQUksTUFBSyxtQkFBbUIsQ0FBQztJQUMvRCxDQUFDOzs7O1lBM0RGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQU56QixpQkFBaUI7WUFEakIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC1oZWFkZXIuc2VydmljZSc7XG5cbi8qKlxuICogUmVzcG9uc2libGUgZm9yIGNhdGNoaW5nIGF1dGggZXJyb3JzIGFuZCBwcm92aWRpbmcgYEF1dGhvcml6YXRpb25gIGhlYWRlciBmb3IgQVBJIGNhbGxzLlxuICogVXNlcyBBdXRoSGVhZGVyU2VydmljZSBmb3IgcmVxdWVzdCBtYW5pcHVsYXRpb24gYW5kIGVycm9yIGhhbmRsaW5nLiBJbnRlcmNlcHRvciBvbmx5IGhvb2tzIGludG8gcmVxdWVzdCBzZW5kL3JlY2VpdmVkIGV2ZW50cy5cbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBdXRoSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aEhlYWRlclNlcnZpY2U6IEF1dGhIZWFkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoQ29uZmlnU2VydmljZTogQXV0aENvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBzaG91bGRDYXRjaEVycm9yID0gdGhpcy5hdXRoSGVhZGVyU2VydmljZS5zaG91bGRDYXRjaEVycm9yKHJlcXVlc3QpO1xuXG4gICAgcmVxdWVzdCA9IHRoaXMuYXV0aEhlYWRlclNlcnZpY2UuYWx0ZXJSZXF1ZXN0KHJlcXVlc3QpO1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJSZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJSZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgc3dpdGNoIChlcnJSZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAxOiAvLyBVbmF1dGhvcml6ZWRcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHBpcmVkVG9rZW4oZXJyUmVzcG9uc2UpICYmIHNob3VsZENhdGNoRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoSGVhZGVyU2VydmljZS5oYW5kbGVFeHBpcmVkQWNjZXNzVG9rZW4oXG4gICAgICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgbmV4dFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgLy8gUmVmcmVzaCBleHBpcmVkIHRva2VuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgT0FVVEggZW5kcG9pbnQgd2FzIGNhbGxlZCBhbmQgdGhlIGVycm9yIGlzIGZvciByZWZyZXNoIHRva2VuIGlzIGV4cGlyZWRcbiAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS51cmwuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICB0aGlzLmF1dGhDb25maWdTZXJ2aWNlLmdldFRva2VuRW5kcG9pbnQoKVxuICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS5lcnJvci5lcnJvciA9PT0gJ2ludmFsaWRfdG9rZW4nXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aEhlYWRlclNlcnZpY2UuaGFuZGxlRXhwaXJlZFJlZnJlc2hUb2tlbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZjxIdHRwRXZlbnQ8YW55Pj4oKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDA6IC8vIEJhZCBSZXF1ZXN0XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS51cmwuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICB0aGlzLmF1dGhDb25maWdTZXJ2aWNlLmdldFRva2VuRW5kcG9pbnQoKVxuICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS5lcnJvci5lcnJvciA9PT0gJ2ludmFsaWRfZ3JhbnQnXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmJvZHkuZ2V0KCdncmFudF90eXBlJykgPT09ICdyZWZyZXNoX3Rva2VuJykge1xuICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoSGVhZGVyU2VydmljZS5oYW5kbGVFeHBpcmVkUmVmcmVzaFRva2VuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJSZXNwb25zZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNFeHBpcmVkVG9rZW4ocmVzcDogSHR0cEVycm9yUmVzcG9uc2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzcC5lcnJvcj8uZXJyb3JzPy5bMF0/LnR5cGUgPT09ICdJbnZhbGlkVG9rZW5FcnJvcic7XG4gIH1cbn1cbiJdfQ==