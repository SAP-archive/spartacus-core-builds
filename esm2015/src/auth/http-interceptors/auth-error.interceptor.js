/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
export class AuthErrorInterceptor {
    /**
     * @param {?} userErrorHandlingService
     * @param {?} clientErrorHandlingService
     * @param {?} authService
     */
    constructor(userErrorHandlingService, clientErrorHandlingService, authService) {
        this.userErrorHandlingService = userErrorHandlingService;
        this.clientErrorHandlingService = clientErrorHandlingService;
        this.authService = authService;
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
    { type: Injectable }
];
/** @nocollapse */
AuthErrorInterceptor.ctorParameters = () => [
    { type: UserErrorHandlingService },
    { type: ClientErrorHandlingService },
    { type: AuthService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL2F1dGgtZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUlMLGlCQUFpQixHQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDcEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDOUYsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsR0FDakIsTUFBTSxrQ0FBa0MsQ0FBQzs7TUFFcEMsY0FBYyxHQUFHLGtDQUFrQztBQUd6RCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFDL0IsWUFDVSx3QkFBa0QsRUFDbEQsMEJBQXNELEVBQ3RELFdBQXdCO1FBRnhCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUMvQixDQUFDOzs7Ozs7SUFFSixTQUFTLENBQ1AsT0FBeUIsRUFDekIsSUFBaUI7O2NBRVgsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztRQUMvRCxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLE9BQU8sR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsVUFBVTs7OztRQUFDLENBQUMsV0FBZ0IsRUFBRSxFQUFFO1lBQzlCLElBQUksV0FBVyxZQUFZLGlCQUFpQixFQUFFO2dCQUM1QyxRQUFRLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0JBQzFCLEtBQUssR0FBRyxFQUFFLGVBQWU7d0JBQ3ZCLElBQUksb0JBQW9CLEVBQUU7NEJBQ3hCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQ0FDcEMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCLENBQzdELE9BQU8sRUFDUCxJQUFJLENBQ0wsQ0FBQzs2QkFDSDs0QkFDRCxxQkFBcUI7eUJBQ3RCOzZCQUFNOzRCQUNMLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQ0FDcEMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQ3pELE9BQU8sRUFDUCxJQUFJLENBQ0wsQ0FBQzs2QkFDSDtpQ0FBTTs0QkFDTCx3QkFBd0I7NEJBQ3hCLHlGQUF5Rjs0QkFDekYsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO2dDQUN4QyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxlQUFlLEVBQzNDO2dDQUNBLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2dDQUMxRCxPQUFPLEVBQUUsRUFBRSxDQUFDOzZCQUNiO3lCQUNGO3dCQUNELE1BQU07b0JBQ1IsS0FBSyxHQUFHLEVBQUUsY0FBYzt3QkFDdEIsSUFDRSxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7NEJBQ3hDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGVBQWUsRUFDM0M7NEJBQ0EsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxlQUFlLEVBQUU7Z0NBQ3RELHdDQUF3QztnQ0FDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs2QkFDM0I7eUJBQ0Y7d0JBQ0QsTUFBTTtpQkFDVDthQUNGO1lBQ0QsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUFDLE9BQXlCOztjQUM5QyxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsbUJBQW1CLENBQzFELGdCQUFnQixFQUNoQixPQUFPLENBQUMsT0FBTyxDQUNoQjtRQUNELE9BQU8sT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLElBQXVCO1FBQzVDLElBQ0UsSUFBSSxDQUFDLEtBQUs7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFlBQVksS0FBSztZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDcEI7WUFDQSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQztTQUMxRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBbkZGLFVBQVU7Ozs7WUFSRix3QkFBd0I7WUFEeEIsMEJBQTBCO1lBRDFCLFdBQVc7Ozs7Ozs7SUFhaEIsd0RBQTBEOzs7OztJQUMxRCwwREFBOEQ7Ozs7O0lBQzlELDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2xpZW50LWVycm9yL2NsaWVudC1lcnJvci1oYW5kbGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJFcnJvckhhbmRsaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXItZXJyb3IvdXNlci1lcnJvci1oYW5kbGluZy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NMSUVOVF9UT0tFTixcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuXG5jb25zdCBPQVVUSF9FTkRQT0lOVCA9ICcvYXV0aG9yaXphdGlvbnNlcnZlci9vYXV0aC90b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlOiBVc2VyRXJyb3JIYW5kbGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbGllbnRFcnJvckhhbmRsaW5nU2VydmljZTogQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBpc0NsaWVudFRva2VuUmVxdWVzdCA9IHRoaXMuaXNDbGllbnRUb2tlblJlcXVlc3QocmVxdWVzdCk7XG4gICAgaWYgKGlzQ2xpZW50VG9rZW5SZXF1ZXN0KSB7XG4gICAgICByZXF1ZXN0ID0gSW50ZXJjZXB0b3JVdGlsLnJlbW92ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCByZXF1ZXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVyclJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVyclJlc3BvbnNlIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICBzd2l0Y2ggKGVyclJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSA0MDE6IC8vIFVuYXV0aG9yaXplZFxuICAgICAgICAgICAgICBpZiAoaXNDbGllbnRUb2tlblJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0V4cGlyZWRUb2tlbihlcnJSZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlLmhhbmRsZUV4cGlyZWRDbGllbnRUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdXNlciB0b2tlbiByZXF1ZXN0XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHBpcmVkVG9rZW4oZXJyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyRXJyb3JIYW5kbGluZ1NlcnZpY2UuaGFuZGxlRXhwaXJlZFVzZXJUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgLy8gUmVmcmVzaCBleHBpcmVkIHRva2VuXG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBPQVVUSCBlbmRwb2ludCB3YXMgY2FsbGVkIGFuZCB0aGUgZXJyb3IgaXMgZm9yIHJlZnJlc2ggdG9rZW4gaXMgZXhwaXJlZFxuICAgICAgICAgICAgICAgICAgZXJyUmVzcG9uc2UudXJsLmluY2x1ZGVzKE9BVVRIX0VORFBPSU5UKSAmJlxuICAgICAgICAgICAgICAgICAgZXJyUmVzcG9uc2UuZXJyb3IuZXJyb3IgPT09ICdpbnZhbGlkX3Rva2VuJ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRXJyb3JIYW5kbGluZ1NlcnZpY2UuaGFuZGxlRXhwaXJlZFJlZnJlc2hUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDA6IC8vIEJhZCBSZXF1ZXN0XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS51cmwuaW5jbHVkZXMoT0FVVEhfRU5EUE9JTlQpICYmXG4gICAgICAgICAgICAgICAgZXJyUmVzcG9uc2UuZXJyb3IuZXJyb3IgPT09ICdpbnZhbGlkX2dyYW50J1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5ib2R5LmdldCgnZ3JhbnRfdHlwZScpID09PSAncmVmcmVzaF90b2tlbicpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHJlZnJlc2ggdG9rZW4gZmFpbCwgZm9yY2UgdXNlciBsb2dvdXRcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJSZXNwb25zZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzQ2xpZW50VG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1JlcXVlc3RNYXBwaW5nID0gSW50ZXJjZXB0b3JVdGlsLmdldEludGVyY2VwdG9yUGFyYW0oXG4gICAgICBVU0VfQ0xJRU5UX1RPS0VOLFxuICAgICAgcmVxdWVzdC5oZWFkZXJzXG4gICAgKTtcbiAgICByZXR1cm4gQm9vbGVhbihpc1JlcXVlc3RNYXBwaW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFeHBpcmVkVG9rZW4ocmVzcDogSHR0cEVycm9yUmVzcG9uc2UpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICByZXNwLmVycm9yICYmXG4gICAgICByZXNwLmVycm9yLmVycm9ycyAmJlxuICAgICAgcmVzcC5lcnJvci5lcnJvcnMgaW5zdGFuY2VvZiBBcnJheSAmJlxuICAgICAgcmVzcC5lcnJvci5lcnJvcnNbMF1cbiAgICApIHtcbiAgICAgIHJldHVybiByZXNwLmVycm9yLmVycm9yc1swXS50eXBlID09PSAnSW52YWxpZFRva2VuRXJyb3InO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==