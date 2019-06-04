/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KymaConfig } from '../../config/kyma-config';
/** @type {?} */
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
export class OpenIdAuthenticationTokenService {
    /**
     * @param {?} config
     * @param {?} http
     */
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    loadOpenIdAuthenticationToken(username, password) {
        /** @type {?} */
        const url = this.getOAuthEndpoint();
        /** @type {?} */
        const params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.kyma_client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.kyma_client_secret))
            .set('grant_type', 'password') // authorization_code, client_credentials, password
            .set('username', username)
            .set('password', password)
            .set('scope', 'openid');
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, params, { headers })
            .pipe(catchError(error => throwError(error)));
    }
    /**
     * @private
     * @return {?}
     */
    getOAuthEndpoint() {
        return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT;
    }
}
OpenIdAuthenticationTokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OpenIdAuthenticationTokenService.ctorParameters = () => [
    { type: KymaConfig },
    { type: HttpClient }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    OpenIdAuthenticationTokenService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    OpenIdAuthenticationTokenService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2t5bWEvc2VydmljZXMvb3Blbi1pZC10b2tlbi9vcGVuLWlkLXRva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztNQUdoRCxjQUFjLEdBQUcsa0NBQWtDO0FBR3pELE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7O0lBQzNDLFlBQW9CLE1BQWtCLEVBQVUsSUFBZ0I7UUFBNUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDOzs7Ozs7SUFFcEUsNkJBQTZCLENBQzNCLFFBQWdCLEVBQ2hCLFFBQWdCOztjQUVWLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O2NBQzdCLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM1QixHQUFHLENBQ0YsV0FBVyxFQUNYLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUM5RDthQUNBLEdBQUcsQ0FDRixlQUFlLEVBQ2Ysa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FDbEU7YUFDQSxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDLG1EQUFtRDthQUNqRixHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQzthQUN6QixHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQzthQUN6QixHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQzs7Y0FDbkIsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQWMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQztJQUNsRSxDQUFDOzs7WUFqQ0YsVUFBVTs7OztZQUxGLFVBQVU7WUFKVixVQUFVOzs7Ozs7O0lBV0wsa0RBQTBCOzs7OztJQUFFLGdEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEt5bWFDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcva3ltYS1jb25maWcnO1xuaW1wb3J0IHsgT3BlbklkVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMva3ltYS10b2tlbi10eXBlcy5tb2RlbCc7XG5cbmNvbnN0IE9BVVRIX0VORFBPSU5UID0gJy9hdXRob3JpemF0aW9uc2VydmVyL29hdXRoL3Rva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IEt5bWFDb25maWcsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBsb2FkT3BlbklkQXV0aGVudGljYXRpb25Ub2tlbihcbiAgICB1c2VybmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPcGVuSWRUb2tlbj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0T0F1dGhFbmRwb2ludCgpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoXG4gICAgICAgICdjbGllbnRfaWQnLFxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb25maWcuYXV0aGVudGljYXRpb24ua3ltYV9jbGllbnRfaWQpXG4gICAgICApXG4gICAgICAuc2V0KFxuICAgICAgICAnY2xpZW50X3NlY3JldCcsXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5reW1hX2NsaWVudF9zZWNyZXQpXG4gICAgICApXG4gICAgICAuc2V0KCdncmFudF90eXBlJywgJ3Bhc3N3b3JkJykgLy8gYXV0aG9yaXphdGlvbl9jb2RlLCBjbGllbnRfY3JlZGVudGlhbHMsIHBhc3N3b3JkXG4gICAgICAuc2V0KCd1c2VybmFtZScsIHVzZXJuYW1lKVxuICAgICAgLnNldCgncGFzc3dvcmQnLCBwYXNzd29yZClcbiAgICAgIC5zZXQoJ3Njb3BlJywgJ29wZW5pZCcpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8T3BlbklkVG9rZW4+KHVybCwgcGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T0F1dGhFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJykgKyBPQVVUSF9FTkRQT0lOVDtcbiAgfVxufVxuIl19