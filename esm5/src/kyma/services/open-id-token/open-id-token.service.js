import { __decorate } from "tslib";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KymaConfig } from '../../config/kyma-config';
var OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
var OpenIdAuthenticationTokenService = /** @class */ (function () {
    function OpenIdAuthenticationTokenService(config, http) {
        this.config = config;
        this.http = http;
    }
    OpenIdAuthenticationTokenService.prototype.loadOpenIdAuthenticationToken = function (username, password) {
        var url = this.getOAuthEndpoint();
        var params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.kyma_client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.kyma_client_secret))
            .set('grant_type', 'password') // authorization_code, client_credentials, password
            .set('username', username)
            .set('password', password)
            .set('scope', 'openid');
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    OpenIdAuthenticationTokenService.prototype.getOAuthEndpoint = function () {
        return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT;
    };
    OpenIdAuthenticationTokenService.ctorParameters = function () { return [
        { type: KymaConfig },
        { type: HttpClient }
    ]; };
    OpenIdAuthenticationTokenService = __decorate([
        Injectable()
    ], OpenIdAuthenticationTokenService);
    return OpenIdAuthenticationTokenService;
}());
export { OpenIdAuthenticationTokenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2t5bWEvc2VydmljZXMvb3Blbi1pZC10b2tlbi9vcGVuLWlkLXRva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3RELElBQU0sY0FBYyxHQUFHLGtDQUFrQyxDQUFDO0FBRzFEO0lBQ0UsMENBQW9CLE1BQWtCLEVBQVUsSUFBZ0I7UUFBNUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRXBFLHdFQUE2QixHQUE3QixVQUNFLFFBQWdCLEVBQ2hCLFFBQWdCO1FBRWhCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3BDLElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO2FBQzVCLEdBQUcsQ0FDRixXQUFXLEVBQ1gsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQzlEO2FBQ0EsR0FBRyxDQUNGLGVBQWUsRUFDZixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUNsRTthQUNBLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUMsbURBQW1EO2FBQ2pGLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO2FBQ3pCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO2FBQ3pCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUIsSUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFjLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO2FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTywyREFBZ0IsR0FBeEI7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUM7SUFDbEUsQ0FBQzs7Z0JBL0IyQixVQUFVO2dCQUFnQixVQUFVOztJQURyRCxnQ0FBZ0M7UUFENUMsVUFBVSxFQUFFO09BQ0EsZ0NBQWdDLENBaUM1QztJQUFELHVDQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FqQ1ksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgS3ltYUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9reW1hLWNvbmZpZyc7XG5pbXBvcnQgeyBPcGVuSWRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy9reW1hLXRva2VuLXR5cGVzLm1vZGVsJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3BlbklkQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogS3ltYUNvbmZpZywgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGxvYWRPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuKFxuICAgIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9wZW5JZFRva2VuPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRPQXV0aEVuZHBvaW50KCk7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldChcbiAgICAgICAgJ2NsaWVudF9pZCcsXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5reW1hX2NsaWVudF9pZClcbiAgICAgIClcbiAgICAgIC5zZXQoXG4gICAgICAgICdjbGllbnRfc2VjcmV0JyxcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmt5bWFfY2xpZW50X3NlY3JldClcbiAgICAgIClcbiAgICAgIC5zZXQoJ2dyYW50X3R5cGUnLCAncGFzc3dvcmQnKSAvLyBhdXRob3JpemF0aW9uX2NvZGUsIGNsaWVudF9jcmVkZW50aWFscywgcGFzc3dvcmRcbiAgICAgIC5zZXQoJ3VzZXJuYW1lJywgdXNlcm5hbWUpXG4gICAgICAuc2V0KCdwYXNzd29yZCcsIHBhc3N3b3JkKVxuICAgICAgLnNldCgnc2NvcGUnLCAnb3BlbmlkJyk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxPcGVuSWRUb2tlbj4odXJsLCBwYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPQXV0aEVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnKSArIE9BVVRIX0VORFBPSU5UO1xuICB9XG59XG4iXX0=