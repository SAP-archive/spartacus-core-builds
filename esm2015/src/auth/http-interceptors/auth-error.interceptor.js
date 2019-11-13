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
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
export class AuthErrorInterceptor {
    /**
     * @param {?} userErrorHandlingService
     * @param {?} clientErrorHandlingService
     * @param {?} authService
     * @param {?=} csagentErrorHandlingService
     */
    constructor(userErrorHandlingService, clientErrorHandlingService, authService, csagentErrorHandlingService) {
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
    intercept(request, next) {
        /** @type {?} */
        const isClientTokenRequest = this.isClientTokenRequest(request);
        if (isClientTokenRequest) {
            request = InterceptorUtil.removeHeader(USE_CLIENT_TOKEN, request);
        }
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
                switch (errResponse.status) {
                    case 401: // Unauthorized
                        if (isClientTokenRequest) {
                            if (this.isExpiredToken(errResponse)) {
                                return this.clientErrorHandlingService.handleExpiredClientToken(request, next);
                            }
                            // user token request
                        }
                        else if (isCustomerSupportAgentRequest) {
                            this.csagentErrorHandlingService.terminateCustomerSupportAgentExpiredSession();
                            return of();
                        }
                        else {
                            if (this.isExpiredToken(errResponse)) {
                                return this.userErrorHandlingService.handleExpiredUserToken(request, next);
                            }
                            else if (
                            // Refresh expired token
                            // Check that the OAUTH endpoint was called and the error is for refresh token is expired
                            errResponse.url.includes(OAUTH_ENDPOINT) &&
                                errResponse.error.error === 'invalid_token') {
                                this.userErrorHandlingService.handleExpiredRefreshToken();
                                return of();
                            }
                        }
                        break;
                    case 400: // Bad Request
                        if (errResponse.url.includes(OAUTH_ENDPOINT) &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'refresh_token') {
                                // refresh token fail, force user logout
                                this.authService.logout();
                            }
                        }
                        break;
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
    isClientTokenRequest(request) {
        /** @type {?} */
        const isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
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
    /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    isExpiredToken(resp) {
        if (resp.error &&
            resp.error.errors &&
            resp.error.errors instanceof Array &&
            resp.error.errors[0]) {
            return resp.error.errors[0].type === 'InvalidTokenError';
        }
        return false;
    }
}
AuthErrorInterceptor.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AuthErrorInterceptor.ctorParameters = () => [
    { type: UserErrorHandlingService },
    { type: ClientErrorHandlingService },
    { type: AuthService },
    { type: CustomerSupportAgentErrorHandlingService }
];
/** @nocollapse */ AuthErrorInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthErrorInterceptor_Factory() { return new AuthErrorInterceptor(i0.ɵɵinject(i1.UserErrorHandlingService), i0.ɵɵinject(i2.ClientErrorHandlingService), i0.ɵɵinject(i3.AuthService), i0.ɵɵinject(i4.CustomerSupportAgentErrorHandlingService)); }, token: AuthErrorInterceptor, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL2F1dGgtZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsR0FLbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixnQ0FBZ0MsR0FDakMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDcEcsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7TUFFeEYsY0FBYyxHQUFHLGtDQUFrQztBQUd6RCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7O0lBcUIvQixZQUNVLHdCQUFrRCxFQUNsRCwwQkFBc0QsRUFDdEQsV0FBd0IsRUFDeEIsMkJBQXNFO1FBSHRFLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTJDO0lBQzdFLENBQUM7Ozs7OztJQUVKLFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjs7Y0FFWCxv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QUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFlBQVksS0FBSztZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDcEI7WUFDQSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQztTQUMxRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBNUhGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFKekIsd0JBQXdCO1lBRnhCLDBCQUEwQjtZQUQxQixXQUFXO1lBRVgsd0NBQXdDOzs7Ozs7OztJQTRCN0Msd0RBQTBEOzs7OztJQUMxRCwwREFBOEQ7Ozs7O0lBQzlELDJDQUFnQzs7Ozs7SUFDaEMsMkRBQThFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBVU0VfQ0xJRU5UX1RPS0VOLFxuICBVU0VfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTixcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2xpZW50LWVycm9yL2NsaWVudC1lcnJvci1oYW5kbGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEN1c3RvbWVyU3VwcG9ydEFnZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jc2FnZW50LWVycm9yL2NzYWdlbnQtZXJyb3ItaGFuZGxpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyRXJyb3JIYW5kbGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLWVycm9yL3VzZXItZXJyb3ItaGFuZGxpbmcuc2VydmljZSc7XG5cbmNvbnN0IE9BVVRIX0VORFBPSU5UID0gJy9hdXRob3JpemF0aW9uc2VydmVyL29hdXRoL3Rva2VuJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBdXRoRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHVzZXJFcnJvckhhbmRsaW5nU2VydmljZTogVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIGNsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlOiBDbGllbnRFcnJvckhhbmRsaW5nU2VydmljZSxcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBjc2FnZW50RXJyb3JIYW5kbGluZ1NlcnZpY2U6IEN1c3RvbWVyU3VwcG9ydEFnZW50RXJyb3JIYW5kbGluZ1NlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIEluc3RlYWQsIHVzZSBjb25zdHJ1Y3RvcihcbiAgICogdXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlOiBVc2VyRXJyb3JIYW5kbGluZ1NlcnZpY2UsXG4gICAqIGNsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlOiBDbGllbnRFcnJvckhhbmRsaW5nU2VydmljZSxcbiAgICogYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgKiBjc2FnZW50RXJyb3JIYW5kbGluZ1NlcnZpY2U6IEN1c3RvbWVyU3VwcG9ydEFnZW50RXJyb3JIYW5kbGluZ1NlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVzZXJFcnJvckhhbmRsaW5nU2VydmljZTogVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIGNsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlOiBDbGllbnRFcnJvckhhbmRsaW5nU2VydmljZSxcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyRXJyb3JIYW5kbGluZ1NlcnZpY2U6IFVzZXJFcnJvckhhbmRsaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGNsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlOiBDbGllbnRFcnJvckhhbmRsaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGNzYWdlbnRFcnJvckhhbmRsaW5nU2VydmljZT86IEN1c3RvbWVyU3VwcG9ydEFnZW50RXJyb3JIYW5kbGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBpc0NsaWVudFRva2VuUmVxdWVzdCA9IHRoaXMuaXNDbGllbnRUb2tlblJlcXVlc3QocmVxdWVzdCk7XG4gICAgaWYgKGlzQ2xpZW50VG9rZW5SZXF1ZXN0KSB7XG4gICAgICByZXF1ZXN0ID0gSW50ZXJjZXB0b3JVdGlsLnJlbW92ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCByZXF1ZXN0KTtcbiAgICB9XG4gICAgY29uc3QgaXNDdXN0b21lclN1cHBvcnRBZ2VudFJlcXVlc3QgPSB0aGlzLmlzQ3VzdG9tZXJTdXBwb3J0QWdlbnRSZXF1ZXN0KFxuICAgICAgcmVxdWVzdFxuICAgICk7XG4gICAgaWYgKGlzQ3VzdG9tZXJTdXBwb3J0QWdlbnRSZXF1ZXN0KSB7XG4gICAgICByZXF1ZXN0ID0gSW50ZXJjZXB0b3JVdGlsLnJlbW92ZUhlYWRlcihcbiAgICAgICAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG4gICAgICAgIHJlcXVlc3RcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJSZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJSZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgc3dpdGNoIChlcnJSZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAxOiAvLyBVbmF1dGhvcml6ZWRcbiAgICAgICAgICAgICAgaWYgKGlzQ2xpZW50VG9rZW5SZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHBpcmVkVG9rZW4oZXJyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRFcnJvckhhbmRsaW5nU2VydmljZS5oYW5kbGVFeHBpcmVkQ2xpZW50VG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHVzZXIgdG9rZW4gcmVxdWVzdFxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3VzdG9tZXJTdXBwb3J0QWdlbnRSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jc2FnZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UudGVybWluYXRlQ3VzdG9tZXJTdXBwb3J0QWdlbnRFeHBpcmVkU2Vzc2lvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZigpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwaXJlZFRva2VuKGVyclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLmhhbmRsZUV4cGlyZWRVc2VyVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggZXhwaXJlZCB0b2tlblxuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgT0FVVEggZW5kcG9pbnQgd2FzIGNhbGxlZCBhbmQgdGhlIGVycm9yIGlzIGZvciByZWZyZXNoIHRva2VuIGlzIGV4cGlyZWRcbiAgICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLnVybC5pbmNsdWRlcyhPQVVUSF9FTkRQT0lOVCkgJiZcbiAgICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF90b2tlbidcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLmhhbmRsZUV4cGlyZWRSZWZyZXNoVG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvZigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDAwOiAvLyBCYWQgUmVxdWVzdFxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZXJyUmVzcG9uc2UudXJsLmluY2x1ZGVzKE9BVVRIX0VORFBPSU5UKSAmJlxuICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF9ncmFudCdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuYm9keS5nZXQoJ2dyYW50X3R5cGUnKSA9PT0gJ3JlZnJlc2hfdG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgICAvLyByZWZyZXNoIHRva2VuIGZhaWwsIGZvcmNlIHVzZXIgbG9nb3V0XG4gICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyUmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NsaWVudFRva2VuUmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNSZXF1ZXN0TWFwcGluZyA9IEludGVyY2VwdG9yVXRpbC5nZXRJbnRlcmNlcHRvclBhcmFtKFxuICAgICAgVVNFX0NMSUVOVF9UT0tFTixcbiAgICAgIHJlcXVlc3QuaGVhZGVyc1xuICAgICk7XG4gICAgcmV0dXJuIEJvb2xlYW4oaXNSZXF1ZXN0TWFwcGluZyk7XG4gIH1cblxuICBwcml2YXRlIGlzQ3VzdG9tZXJTdXBwb3J0QWdlbnRSZXF1ZXN0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1JlcXVlc3RNYXBwaW5nID0gSW50ZXJjZXB0b3JVdGlsLmdldEludGVyY2VwdG9yUGFyYW0oXG4gICAgICBVU0VfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTixcbiAgICAgIHJlcXVlc3QuaGVhZGVyc1xuICAgICk7XG4gICAgcmV0dXJuIEJvb2xlYW4oaXNSZXF1ZXN0TWFwcGluZyk7XG4gIH1cblxuICBwcml2YXRlIGlzRXhwaXJlZFRva2VuKHJlc3A6IEh0dHBFcnJvclJlc3BvbnNlKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgcmVzcC5lcnJvciAmJlxuICAgICAgcmVzcC5lcnJvci5lcnJvcnMgJiZcbiAgICAgIHJlc3AuZXJyb3IuZXJyb3JzIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICAgIHJlc3AuZXJyb3IuZXJyb3JzWzBdXG4gICAgKSB7XG4gICAgICByZXR1cm4gcmVzcC5lcnJvci5lcnJvcnNbMF0udHlwZSA9PT0gJ0ludmFsaWRUb2tlbkVycm9yJztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=