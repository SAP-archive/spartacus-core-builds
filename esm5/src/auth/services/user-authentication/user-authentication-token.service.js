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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc2VydmljZXMvdXNlci1hdXRoZW50aWNhdGlvbi91c2VyLWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUNMLGVBQWUsRUFDZix1QkFBdUIsR0FDeEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJdEQ7SUFhRSx3Q0FDWSxJQUFnQixFQUNoQixNQUFrQixFQUNsQixtQkFBeUM7UUFGekMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBc0I7SUFDbEQsQ0FBQztJQUVKLGtEQUFTLEdBQVQsVUFBVSxNQUFjLEVBQUUsUUFBZ0I7UUFDeEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM1QixHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQzthQUN0RCxHQUFH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SHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBUT0tFTl9SRVZPQ0FUSU9OX0hFQURFUixcbn0gZnJvbSAnLi4vLi4vLi4vb2NjL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgaHR0cDogSHR0cENsaWVudCxcbiAgICBjb25maWc6IEF1dGhDb25maWcsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjFcbiAgICogVXNlIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIGNvbmZpZzogQXV0aENvbmZpZywgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZSkgaW5zdGVhZFxuICAgKi9cbiAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgY29uZmlnOiBBdXRoQ29uZmlnKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQXV0aENvbmZpZyxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZT86IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRUb2tlbih1c2VySWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFJhd0VuZHBvaW50KCdsb2dpbicpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ2NsaWVudF9pZCcsIHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmNsaWVudF9pZClcbiAgICAgIC5zZXQoJ2NsaWVudF9zZWNyZXQnLCB0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5jbGllbnRfc2VjcmV0KVxuICAgICAgLnNldCgnZ3JhbnRfdHlwZScsICdwYXNzd29yZCcpXG4gICAgICAuc2V0KCd1c2VybmFtZScsIHVzZXJJZClcbiAgICAgIC5zZXQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8VXNlclRva2VuPih1cmwsIHBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgcmVmcmVzaFRva2VuKHJlZnJlc2hUb2tlbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0UmF3RW5kcG9pbnQoJ2xvZ2luJyk7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldChcbiAgICAgICAgJ2NsaWVudF9pZCcsXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5jbGllbnRfaWQpXG4gICAgICApXG4gICAgICAuc2V0KFxuICAgICAgICAnY2xpZW50X3NlY3JldCcsXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5jbGllbnRfc2VjcmV0KVxuICAgICAgKVxuICAgICAgLnNldCgncmVmcmVzaF90b2tlbicsIGVuY29kZVVSSShyZWZyZXNoVG9rZW4pKVxuICAgICAgLnNldCgnZ3JhbnRfdHlwZScsICdyZWZyZXNoX3Rva2VuJyk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxVc2VyVG9rZW4+KHVybCwgcGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICByZXZva2UodXNlclRva2VuOiBVc2VyVG9rZW4pOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFJhd0VuZHBvaW50KCdyZXZva2UnKTtcbiAgICBjb25zdCBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihcbiAgICAgIFRPS0VOX1JFVk9DQVRJT05fSEVBREVSLFxuICAgICAgdHJ1ZSxcbiAgICAgIG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGAke3VzZXJUb2tlbi50b2tlbl90eXBlfSAke3VzZXJUb2tlbi5hY2Nlc3NfdG9rZW59YCxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCd0b2tlbicsIHVzZXJUb2tlbi5hY2Nlc3NfdG9rZW4pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PHt9Pih1cmwsIHBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG59XG4iXX0=