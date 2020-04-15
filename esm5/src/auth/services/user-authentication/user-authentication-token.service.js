import { __decorate } from "tslib";
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
    UserAuthenticationTokenService.prototype.loadToken = function (userId, password) {
        var url = this.occEndpointsService.getRawEndpoint('login');
        var params = new HttpParams()
            .set('client_id', this.config.authentication.client_id)
            .set('client_secret', this.config.authentication.client_secret)
            .set('grant_type', 'password')
            .set('username', userId)
            .set('password', password);
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserAuthenticationTokenService.prototype.refreshToken = function (refreshToken) {
        var url = this.occEndpointsService.getRawEndpoint('login');
        var params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('refresh_token', encodeURI(refreshToken))
            .set('grant_type', 'refresh_token');
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserAuthenticationTokenService.prototype.revoke = function (userToken) {
        var url = this.occEndpointsService.getRawEndpoint('revoke');
        var headers = InterceptorUtil.createHeader(TOKEN_REVOCATION_HEADER, true, new HttpHeaders({
            Authorization: userToken.token_type + " " + userToken.access_token,
            'Content-Type': 'application/x-www-form-urlencoded',
        }));
        var params = new HttpParams().set('token', userToken.access_token);
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserAuthenticationTokenService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: AuthConfig },
        { type: OccEndpointsService }
    ]; };
    UserAuthenticationTokenService = __decorate([
        Injectable()
    ], UserAuthenticationTokenService);
    return UserAuthenticationTokenService;
}());
export { UserAuthenticationTokenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc2VydmljZXMvdXNlci1hdXRoZW50aWNhdGlvbi91c2VyLWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUNMLGVBQWUsRUFDZix1QkFBdUIsR0FDeEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJdEQ7SUFDRSx3Q0FDWSxJQUFnQixFQUNoQixNQUFrQixFQUNsQixtQkFBd0M7UUFGeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQztJQUVKLGtEQUFTLEdBQVQsVUFBVSxNQUFjLEVBQUUsUUFBZ0I7UUFDeEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM1QixHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQzthQUN0RCxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQzthQUM5RCxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQzthQUM3QixHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQzthQUN2QixHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLElBQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBWSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQscURBQVksR0FBWixVQUFhLFlBQW9CO1FBQy9CLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7YUFDNUIsR0FBRyxDQUNGLFdBQVcsRUFDWCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDekQ7YUFDQSxHQUFHLENBQ0YsZUFBZSxFQUNmLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUM3RDthQUNBLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzdDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDdEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFZLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCwrQ0FBTSxHQUFOLFVBQU8sU0FBb0I7UUFDekIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RCxJQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsWUFBWSxDQUMxQyx1QkFBdUIsRUFDdkIsSUFBSSxFQUNKLElBQUksV0FBVyxDQUFDO1lBQ2QsYUFBYSxFQUFLLFNBQVMsQ0FBQyxVQUFVLFNBQUksU0FBUyxDQUFDLFlBQWM7WUFDbEUsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDLENBQ0gsQ0FBQztRQUNGLElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckUsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBSyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOztnQkExRGlCLFVBQVU7Z0JBQ1IsVUFBVTtnQkFDRyxtQkFBbUI7O0lBSnpDLDhCQUE4QjtRQUQxQyxVQUFVLEVBQUU7T0FDQSw4QkFBOEIsQ0E2RDFDO0lBQUQscUNBQUM7Q0FBQSxBQTdERCxJQTZEQztTQTdEWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFRPS0VOX1JFVk9DQVRJT05fSEVBREVSLFxufSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBBdXRoQ29uZmlnLFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge31cblxuICBsb2FkVG9rZW4odXNlcklkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRSYXdFbmRwb2ludCgnbG9naW4nKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdjbGllbnRfaWQnLCB0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5jbGllbnRfaWQpXG4gICAgICAuc2V0KCdjbGllbnRfc2VjcmV0JywgdGhpcy5jb25maWcuYXV0aGVudGljYXRpb24uY2xpZW50X3NlY3JldClcbiAgICAgIC5zZXQoJ2dyYW50X3R5cGUnLCAncGFzc3dvcmQnKVxuICAgICAgLnNldCgndXNlcm5hbWUnLCB1c2VySWQpXG4gICAgICAuc2V0KCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PFVzZXJUb2tlbj4odXJsLCBwYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW46IHN0cmluZyk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFJhd0VuZHBvaW50KCdsb2dpbicpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoXG4gICAgICAgICdjbGllbnRfaWQnLFxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb25maWcuYXV0aGVudGljYXRpb24uY2xpZW50X2lkKVxuICAgICAgKVxuICAgICAgLnNldChcbiAgICAgICAgJ2NsaWVudF9zZWNyZXQnLFxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb25maWcuYXV0aGVudGljYXRpb24uY2xpZW50X3NlY3JldClcbiAgICAgIClcbiAgICAgIC5zZXQoJ3JlZnJlc2hfdG9rZW4nLCBlbmNvZGVVUkkocmVmcmVzaFRva2VuKSlcbiAgICAgIC5zZXQoJ2dyYW50X3R5cGUnLCAncmVmcmVzaF90b2tlbicpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8VXNlclRva2VuPih1cmwsIHBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgcmV2b2tlKHVzZXJUb2tlbjogVXNlclRva2VuKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRSYXdFbmRwb2ludCgncmV2b2tlJyk7XG4gICAgY29uc3QgaGVhZGVycyA9IEludGVyY2VwdG9yVXRpbC5jcmVhdGVIZWFkZXIoXG4gICAgICBUT0tFTl9SRVZPQ0FUSU9OX0hFQURFUixcbiAgICAgIHRydWUsXG4gICAgICBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt1c2VyVG9rZW4udG9rZW5fdHlwZX0gJHt1c2VyVG9rZW4uYWNjZXNzX3Rva2VufWAsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgndG9rZW4nLCB1c2VyVG9rZW4uYWNjZXNzX3Rva2VuKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDx7fT4odXJsLCBwYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxufVxuIl19