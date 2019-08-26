/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccEndpointsService } from '../../../occ/services/occ-endpoints.service';
import { AuthConfig } from '../../config/auth-config';
var UserAuthenticationTokenService = /** @class */ (function () {
    function UserAuthenticationTokenService(http, config, occEndpointsService) {
        this.http = http;
        this.config = config;
        this.occEndpointsService = occEndpointsService;
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
        var url = this.occEndpointsService.getRawEndpoint('login');
        /** @type {?} */
        var params = new HttpParams()
            .set('client_id', this.config.authentication.client_id)
            .set('client_secret', this.config.authentication.client_secret)
            .set('grant_type', 'password')
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
        var url = this.occEndpointsService.getRawEndpoint('login');
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
    UserAuthenticationTokenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserAuthenticationTokenService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: AuthConfig },
        { type: OccEndpointsService }
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
    /**
     * @type {?}
     * @protected
     */
    UserAuthenticationTokenService.prototype.occEndpointsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc2VydmljZXMvdXNlci1hdXRoZW50aWNhdGlvbi91c2VyLWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3REO0lBY0Usd0NBQ1ksSUFBZ0IsRUFDaEIsTUFBa0IsRUFDbEIsbUJBQXlDO1FBRnpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXNCO0lBQ2xELENBQUM7Ozs7OztJQUVKLGtEQUFTOzs7OztJQUFULFVBQVUsTUFBYyxFQUFFLFFBQWdCOztZQUNsQyxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7O1lBQ3RELE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM1QixHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQzthQUN0RCxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQzthQUM5RCxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQzthQUM3QixHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQzthQUN2QixHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQzs7WUFDdEIsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQVksR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxxREFBWTs7OztJQUFaLFVBQWEsWUFBb0I7O1lBQ3pCLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7WUFDdEQsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO2FBQzVCLEdBQUcsQ0FDRixXQUFXLEVBQ1gsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQ3pEO2FBQ0EsR0FBRyxDQUNGLGVBQWUsRUFDZixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FDN0Q7YUFDQSxHQUFHLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM3QyxHQUFHLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQzs7WUFDL0IsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQVksR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBekRGLFVBQVU7Ozs7Z0JBUkYsVUFBVTtnQkFLVixVQUFVO2dCQURWLG1CQUFtQjs7SUE4RDVCLHFDQUFDO0NBQUEsQUExREQsSUEwREM7U0F6RFksOEJBQThCOzs7Ozs7SUFjdkMsOENBQTBCOzs7OztJQUMxQixnREFBNEI7Ozs7O0lBQzVCLDZEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgY29uZmlnOiBBdXRoQ29uZmlnLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4xXG4gICAqIFVzZSBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBjb25maWc6IEF1dGhDb25maWcsIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UpIGluc3RlYWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIGNvbmZpZzogQXV0aENvbmZpZyk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBjb25maWc6IEF1dGhDb25maWcsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50c1NlcnZpY2U/OiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge31cblxuICBsb2FkVG9rZW4odXNlcklkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRSYXdFbmRwb2ludCgnbG9naW4nKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdjbGllbnRfaWQnLCB0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5jbGllbnRfaWQpXG4gICAgICAuc2V0KCdjbGllbnRfc2VjcmV0JywgdGhpcy5jb25maWcuYXV0aGVudGljYXRpb24uY2xpZW50X3NlY3JldClcbiAgICAgIC5zZXQoJ2dyYW50X3R5cGUnLCAncGFzc3dvcmQnKVxuICAgICAgLnNldCgndXNlcm5hbWUnLCB1c2VySWQpXG4gICAgICAuc2V0KCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PFVzZXJUb2tlbj4odXJsLCBwYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW46IHN0cmluZyk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFJhd0VuZHBvaW50KCdsb2dpbicpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoXG4gICAgICAgICdjbGllbnRfaWQnLFxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb25maWcuYXV0aGVudGljYXRpb24uY2xpZW50X2lkKVxuICAgICAgKVxuICAgICAgLnNldChcbiAgICAgICAgJ2NsaWVudF9zZWNyZXQnLFxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb25maWcuYXV0aGVudGljYXRpb24uY2xpZW50X3NlY3JldClcbiAgICAgIClcbiAgICAgIC5zZXQoJ3JlZnJlc2hfdG9rZW4nLCBlbmNvZGVVUkkocmVmcmVzaFRva2VuKSlcbiAgICAgIC5zZXQoJ2dyYW50X3R5cGUnLCAncmVmcmVzaF90b2tlbicpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8VXNlclRva2VuPih1cmwsIHBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG59XG4iXX0=