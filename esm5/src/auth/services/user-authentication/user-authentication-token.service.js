/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccEndpointsService } from '../../../occ/services/occ-endpoints.service';
import { InterceptorUtil, TOKEN_REVOCATION_HEADER, } from '../../../occ/utils/interceptor-util';
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
    /**
     * @param {?} userToken
     * @return {?}
     */
    UserAuthenticationTokenService.prototype.revoke = /**
     * @param {?} userToken
     * @return {?}
     */
    function (userToken) {
        /** @type {?} */
        var url = this.occEndpointsService.getRawEndpoint('revoke');
        /** @type {?} */
        var headers = InterceptorUtil.createHeader(TOKEN_REVOCATION_HEADER, true, new HttpHeaders({
            Authorization: userToken.token_type + " " + userToken.access_token,
            'Content-Type': 'application/x-www-form-urlencoded',
        }));
        /** @type {?} */
        var params = new HttpParams().set('token', userToken.access_token);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc2VydmljZXMvdXNlci1hdXRoZW50aWNhdGlvbi91c2VyLWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUNMLGVBQWUsRUFDZix1QkFBdUIsR0FDeEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHdEQ7SUFjRSx3Q0FDWSxJQUFnQixFQUNoQixNQUFrQixFQUNsQixtQkFBeUM7UUFGekMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBc0I7SUFDbEQsQ0FBQzs7Ozs7O0lBRUosa0RBQVM7Ozs7O0lBQVQsVUFBVSxNQUFjLEVBQUUsUUFBZ0I7O1lBQ2xDLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7WUFDdEQsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO2FBQzVCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO2FBQ3RELEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO2FBQzlELEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO2FBQzdCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDO2FBQ3ZCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDOztZQUN0QixPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBWSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixFQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELHFEQUFZOzs7O0lBQVosVUFBYSxZQUFvQjs7WUFDekIsR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDOztZQUN0RCxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7YUFDNUIsR0FBRyxDQUNGLFdBQVcsRUFDWCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDekQ7YUFDQSxHQUFHLENBQ0YsZUFBZSxFQUNmLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUM3RDthQUNBLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzdDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDOztZQUMvQixPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBWSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixFQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELCtDQUFNOzs7O0lBQU4sVUFBTyxTQUFvQjs7WUFDbkIsR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDOztZQUN2RCxPQUFPLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FDMUMsdUJBQXVCLEVBQ3ZCLElBQUksRUFDSixJQUFJLFdBQVcsQ0FBQztZQUNkLGFBQWEsRUFBSyxTQUFTLENBQUMsVUFBVSxTQUFJLFNBQVMsQ0FBQyxZQUFjO1lBQ2xFLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQyxDQUNIOztZQUNLLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUNwRSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFLLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO2FBQ2xDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLEVBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQXpFRixVQUFVOzs7O2dCQVpGLFVBQVU7Z0JBU1YsVUFBVTtnQkFMVixtQkFBbUI7O0lBa0Y1QixxQ0FBQztDQUFBLEFBMUVELElBMEVDO1NBekVZLDhCQUE4Qjs7Ozs7O0lBY3ZDLDhDQUEwQjs7Ozs7SUFDMUIsZ0RBQTRCOzs7OztJQUM1Qiw2REFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFRPS0VOX1JFVk9DQVRJT05fSEVBREVSLFxufSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBodHRwOiBIdHRwQ2xpZW50LFxuICAgIGNvbmZpZzogQXV0aENvbmZpZyxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMVxuICAgKiBVc2UgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgY29uZmlnOiBBdXRoQ29uZmlnLCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlKSBpbnN0ZWFkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBjb25maWc6IEF1dGhDb25maWcpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBBdXRoQ29uZmlnLFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlPzogT2NjRW5kcG9pbnRzU2VydmljZVxuICApIHt9XG5cbiAgbG9hZFRva2VuKHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0UmF3RW5kcG9pbnQoJ2xvZ2luJyk7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldCgnY2xpZW50X2lkJywgdGhpcy5jb25maWcuYXV0aGVudGljYXRpb24uY2xpZW50X2lkKVxuICAgICAgLnNldCgnY2xpZW50X3NlY3JldCcsIHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmNsaWVudF9zZWNyZXQpXG4gICAgICAuc2V0KCdncmFudF90eXBlJywgJ3Bhc3N3b3JkJylcbiAgICAgIC5zZXQoJ3VzZXJuYW1lJywgdXNlcklkKVxuICAgICAgLnNldCgncGFzc3dvcmQnLCBwYXNzd29yZCk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxVc2VyVG9rZW4+KHVybCwgcGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICByZWZyZXNoVG9rZW4ocmVmcmVzaFRva2VuOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRSYXdFbmRwb2ludCgnbG9naW4nKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KFxuICAgICAgICAnY2xpZW50X2lkJyxcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmNsaWVudF9pZClcbiAgICAgIClcbiAgICAgIC5zZXQoXG4gICAgICAgICdjbGllbnRfc2VjcmV0JyxcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmNsaWVudF9zZWNyZXQpXG4gICAgICApXG4gICAgICAuc2V0KCdyZWZyZXNoX3Rva2VuJywgZW5jb2RlVVJJKHJlZnJlc2hUb2tlbikpXG4gICAgICAuc2V0KCdncmFudF90eXBlJywgJ3JlZnJlc2hfdG9rZW4nKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PFVzZXJUb2tlbj4odXJsLCBwYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHJldm9rZSh1c2VyVG9rZW46IFVzZXJUb2tlbik6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0UmF3RW5kcG9pbnQoJ3Jldm9rZScpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFxuICAgICAgVE9LRU5fUkVWT0NBVElPTl9IRUFERVIsXG4gICAgICB0cnVlLFxuICAgICAgbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dXNlclRva2VuLnRva2VuX3R5cGV9ICR7dXNlclRva2VuLmFjY2Vzc190b2tlbn1gLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICB9KVxuICAgICk7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3Rva2VuJywgdXNlclRva2VuLmFjY2Vzc190b2tlbik7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8e30+KHVybCwgcGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cbn1cbiJdfQ==