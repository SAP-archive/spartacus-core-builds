/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthConfig } from '../../config/auth-config';
/** @type {?} */
var OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
var ClientAuthenticationTokenService = /** @class */ (function () {
    function ClientAuthenticationTokenService(config, http) {
        this.config = config;
        this.http = http;
    }
    /**
     * @return {?}
     */
    ClientAuthenticationTokenService.prototype.loadClientAuthenticationToken = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = this.getOAuthEndpoint();
        /** @type {?} */
        var params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('grant_type', 'client_credentials');
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @protected
     * @return {?}
     */
    ClientAuthenticationTokenService.prototype.getOAuthEndpoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT;
    };
    ClientAuthenticationTokenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientAuthenticationTokenService.ctorParameters = function () { return [
        { type: AuthConfig },
        { type: HttpClient }
    ]; };
    return ClientAuthenticationTokenService;
}());
export { ClientAuthenticationTokenService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ClientAuthenticationTokenService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    ClientAuthenticationTokenService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zZXJ2aWNlcy9jbGllbnQtYXV0aGVudGljYXRpb24vY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0UsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQUloRCxjQUFjLEdBQUcsa0NBQWtDO0FBRXpEO0lBRUUsMENBQXNCLE1BQWtCLEVBQVksSUFBZ0I7UUFBOUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFZLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDOzs7O0lBRXhFLHdFQUE2Qjs7O0lBQTdCOztZQUNRLEdBQUcsR0FBVyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O1lBQ3JDLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM1QixHQUFHLENBQ0YsV0FBVyxFQUNYLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUN6RDthQUNBLEdBQUcsQ0FDRixlQUFlLEVBQ2Ysa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQzdEO2FBQ0EsR0FBRyxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQzs7WUFFcEMsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQWMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFUywyREFBZ0I7Ozs7SUFBMUI7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUM7SUFDbEUsQ0FBQzs7Z0JBM0JGLFVBQVU7Ozs7Z0JBTkYsVUFBVTtnQkFKVixVQUFVOztJQXNDbkIsdUNBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQTNCWSxnQ0FBZ0M7Ozs7OztJQUMvQixrREFBNEI7Ozs7O0lBQUUsZ0RBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2F1dGgtY29uZmlnJztcblxuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5jb25zdCBPQVVUSF9FTkRQT0lOVCA9ICcvYXV0aG9yaXphdGlvbnNlcnZlci9vYXV0aC90b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbGllbnRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IEF1dGhDb25maWcsIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGxvYWRDbGllbnRBdXRoZW50aWNhdGlvblRva2VuKCk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+IHtcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0T0F1dGhFbmRwb2ludCgpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoXG4gICAgICAgICdjbGllbnRfaWQnLFxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb25maWcuYXV0aGVudGljYXRpb24uY2xpZW50X2lkKVxuICAgICAgKVxuICAgICAgLnNldChcbiAgICAgICAgJ2NsaWVudF9zZWNyZXQnLFxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb25maWcuYXV0aGVudGljYXRpb24uY2xpZW50X3NlY3JldClcbiAgICAgIClcbiAgICAgIC5zZXQoJ2dyYW50X3R5cGUnLCAnY2xpZW50X2NyZWRlbnRpYWxzJyk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxDbGllbnRUb2tlbj4odXJsLCBwYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T0F1dGhFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJykgKyBPQVVUSF9FTkRQT0lOVDtcbiAgfVxufVxuIl19