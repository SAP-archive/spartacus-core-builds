import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KymaConfig } from '../../config/kyma-config';
import * as i0 from "@angular/core";
import * as i1 from "../../config/kyma-config";
import * as i2 from "@angular/common/http";
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
export class OpenIdAuthenticationTokenService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    loadOpenIdAuthenticationToken(username, password) {
        const url = this.getOAuthEndpoint();
        const params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.kyma_client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.kyma_client_secret))
            .set('grant_type', 'password') // authorization_code, client_credentials, password
            .set('username', username)
            .set('password', password)
            .set('scope', 'openid');
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    getOAuthEndpoint() {
        return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT;
    }
}
OpenIdAuthenticationTokenService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OpenIdAuthenticationTokenService_Factory() { return new OpenIdAuthenticationTokenService(i0.ɵɵinject(i1.KymaConfig), i0.ɵɵinject(i2.HttpClient)); }, token: OpenIdAuthenticationTokenService, providedIn: "root" });
OpenIdAuthenticationTokenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OpenIdAuthenticationTokenService.ctorParameters = () => [
    { type: KymaConfig },
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMva3ltYS9zZXJ2aWNlcy9vcGVuLWlkLXRva2VuL29wZW4taWQtdG9rZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUd0RCxNQUFNLGNBQWMsR0FBRyxrQ0FBa0MsQ0FBQztBQUsxRCxNQUFNLE9BQU8sZ0NBQWdDO0lBQzNDLFlBQW9CLE1BQWtCLEVBQVUsSUFBZ0I7UUFBNUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRXBFLDZCQUE2QixDQUMzQixRQUFnQixFQUNoQixRQUFnQjtRQUVoQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM1QixHQUFHLENBQ0YsV0FBVyxFQUNYLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUM5RDthQUNBLEdBQUcsQ0FDRixlQUFlLEVBQ2Ysa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FDbEU7YUFDQSxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDLG1EQUFtRDthQUNqRixHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQzthQUN6QixHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQzthQUN6QixHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBYyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQztJQUNsRSxDQUFDOzs7O1lBbkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsVUFBVTtZQUpWLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBLeW1hQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2t5bWEtY29uZmlnJztcbmltcG9ydCB7IE9wZW5JZFRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2t5bWEtdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5jb25zdCBPQVVUSF9FTkRQT0lOVCA9ICcvYXV0aG9yaXphdGlvbnNlcnZlci9vYXV0aC90b2tlbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBLeW1hQ29uZmlnLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgbG9hZE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW4oXG4gICAgdXNlcm5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3BlbklkVG9rZW4+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldE9BdXRoRW5kcG9pbnQoKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KFxuICAgICAgICAnY2xpZW50X2lkJyxcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmt5bWFfY2xpZW50X2lkKVxuICAgICAgKVxuICAgICAgLnNldChcbiAgICAgICAgJ2NsaWVudF9zZWNyZXQnLFxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb25maWcuYXV0aGVudGljYXRpb24ua3ltYV9jbGllbnRfc2VjcmV0KVxuICAgICAgKVxuICAgICAgLnNldCgnZ3JhbnRfdHlwZScsICdwYXNzd29yZCcpIC8vIGF1dGhvcml6YXRpb25fY29kZSwgY2xpZW50X2NyZWRlbnRpYWxzLCBwYXNzd29yZFxuICAgICAgLnNldCgndXNlcm5hbWUnLCB1c2VybmFtZSlcbiAgICAgIC5zZXQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQpXG4gICAgICAuc2V0KCdzY29wZScsICdvcGVuaWQnKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PE9wZW5JZFRva2VuPih1cmwsIHBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcikgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T0F1dGhFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJykgKyBPQVVUSF9FTkRQT0lOVDtcbiAgfVxufVxuIl19