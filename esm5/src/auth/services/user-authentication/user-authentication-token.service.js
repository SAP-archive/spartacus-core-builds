/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthConfig } from '../../config/auth-config';
/** @type {?} */
var OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
var UserAuthenticationTokenService = /** @class */ (function () {
    function UserAuthenticationTokenService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    UserAuthenticationTokenService.prototype.loadToken = /**
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    function (userId, password) {
        /** @type {?} */
        var url = this.getOAuthEndpoint();
        /** @type {?} */
        var params = new HttpParams()
            .set('client_id', this.config.authentication.client_id)
            .set('client_secret', this.config.authentication.client_secret)
            .set('grant_type', 'password') // authorization_code, client_credentials, password
            .set('username', userId)
            .set('password', password);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    /**
     * @param {?} refreshToken
     * @return {?}
     */
    UserAuthenticationTokenService.prototype.refreshToken = /**
     * @param {?} refreshToken
     * @return {?}
     */
    function (refreshToken) {
        /** @type {?} */
        var url = this.getOAuthEndpoint();
        /** @type {?} */
        var params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('refresh_token', encodeURI(refreshToken))
            .set('grant_type', 'refresh_token');
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    /**
     * @protected
     * @return {?}
     */
    UserAuthenticationTokenService.prototype.getOAuthEndpoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT;
    };
    UserAuthenticationTokenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserAuthenticationTokenService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: AuthConfig }
    ]; };
    return UserAuthenticationTokenService;
}());
export { UserAuthenticationTokenService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserAuthenticationTokenService.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    UserAuthenticationTokenService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc2VydmljZXMvdXNlci1hdXRoZW50aWNhdGlvbi91c2VyLWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQUloRCxjQUFjLEdBQUcsa0NBQWtDO0FBRXpEO0lBRUUsd0NBQXNCLElBQWdCLEVBQVksTUFBa0I7UUFBOUMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFZLFdBQU0sR0FBTixNQUFNLENBQVk7SUFBRyxDQUFDOzs7Ozs7SUFFeEUsa0RBQVM7Ozs7O0lBQVQsVUFBVSxNQUFjLEVBQUUsUUFBZ0I7O1lBQ2xDLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O1lBQzdCLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM1QixHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQzthQUN0RCxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQzthQUM5RCxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDLG1EQUFtRDthQUNqRixHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQzthQUN2QixHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQzs7WUFDdEIsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQVksR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxxREFBWTs7OztJQUFaLFVBQWEsWUFBb0I7O1lBQ3pCLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O1lBQzdCLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM1QixHQUFHLENBQ0YsV0FBVyxFQUNYLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUN6RDthQUNBLEdBQUcsQ0FDRixlQUFlLEVBQ2Ysa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQzdEO2FBQ0EsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDN0MsR0FBRyxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7O1lBQy9CLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsbUNBQW1DO1NBQ3BELENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFZLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLEVBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRVMseURBQWdCOzs7O0lBQTFCO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDO0lBQ2xFLENBQUM7O2dCQTdDRixVQUFVOzs7O2dCQVRGLFVBQVU7Z0JBR1YsVUFBVTs7SUFvRG5CLHFDQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0E3Q1ksOEJBQThCOzs7Ozs7SUFDN0IsOENBQTBCOzs7OztJQUFFLGdEQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYXV0aC1jb25maWcnO1xuXG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5jb25zdCBPQVVUSF9FTkRQT0lOVCA9ICcvYXV0aG9yaXphdGlvbnNlcnZlci9vYXV0aC90b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCwgcHJvdGVjdGVkIGNvbmZpZzogQXV0aENvbmZpZykge31cblxuICBsb2FkVG9rZW4odXNlcklkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0T0F1dGhFbmRwb2ludCgpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ2NsaWVudF9pZCcsIHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmNsaWVudF9pZClcbiAgICAgIC5zZXQoJ2NsaWVudF9zZWNyZXQnLCB0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5jbGllbnRfc2VjcmV0KVxuICAgICAgLnNldCgnZ3JhbnRfdHlwZScsICdwYXNzd29yZCcpIC8vIGF1dGhvcml6YXRpb25fY29kZSwgY2xpZW50X2NyZWRlbnRpYWxzLCBwYXNzd29yZFxuICAgICAgLnNldCgndXNlcm5hbWUnLCB1c2VySWQpXG4gICAgICAuc2V0KCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PFVzZXJUb2tlbj4odXJsLCBwYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW46IHN0cmluZyk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRPQXV0aEVuZHBvaW50KCk7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldChcbiAgICAgICAgJ2NsaWVudF9pZCcsXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5jbGllbnRfaWQpXG4gICAgICApXG4gICAgICAuc2V0KFxuICAgICAgICAnY2xpZW50X3NlY3JldCcsXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5jbGllbnRfc2VjcmV0KVxuICAgICAgKVxuICAgICAgLnNldCgncmVmcmVzaF90b2tlbicsIGVuY29kZVVSSShyZWZyZXNoVG9rZW4pKVxuICAgICAgLnNldCgnZ3JhbnRfdHlwZScsICdyZWZyZXNoX3Rva2VuJyk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxVc2VyVG9rZW4+KHVybCwgcGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T0F1dGhFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gKHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHwgJycpICsgT0FVVEhfRU5EUE9JTlQ7XG4gIH1cbn1cbiJdfQ==