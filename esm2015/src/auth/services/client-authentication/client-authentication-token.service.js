/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig } from '../../config/auth-config';
/** @type {?} */
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
export class ClientAuthenticationTokenService {
    /**
     * @param {?} config
     * @param {?} http
     */
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    /**
     * @return {?}
     */
    loadClientAuthenticationToken() {
        /** @type {?} */
        const url = this.getOAuthEndpoint();
        /** @type {?} */
        const params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('grant_type', 'client_credentials');
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.post(url, params, { headers });
    }
    /**
     * @protected
     * @return {?}
     */
    getOAuthEndpoint() {
        return (this.config.backend.occ.baseUrl || '') + OAUTH_ENDPOINT;
    }
}
ClientAuthenticationTokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientAuthenticationTokenService.ctorParameters = () => [
    { type: AuthConfig },
    { type: HttpClient }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zZXJ2aWNlcy9jbGllbnQtYXV0aGVudGljYXRpb24vY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztNQUdoRCxjQUFjLEdBQUcsa0NBQWtDO0FBR3pELE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7O0lBQzNDLFlBQXNCLE1BQWtCLEVBQVksSUFBZ0I7UUFBOUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFZLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDOzs7O0lBRXhFLDZCQUE2Qjs7Y0FDckIsR0FBRyxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7Y0FDckMsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO2FBQzVCLEdBQUcsQ0FDRixXQUFXLEVBQ1gsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQ3pEO2FBQ0EsR0FBRyxDQUNGLGVBQWUsRUFDZixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FDN0Q7YUFDQSxHQUFHLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDOztjQUVwQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBYyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVTLGdCQUFnQjtRQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUM7SUFDbEUsQ0FBQzs7O1lBekJGLFVBQVU7Ozs7WUFMRixVQUFVO1lBSFYsVUFBVTs7Ozs7OztJQVVMLGtEQUE0Qjs7Ozs7SUFBRSxnREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5jb25zdCBPQVVUSF9FTkRQT0lOVCA9ICcvYXV0aG9yaXphdGlvbnNlcnZlci9vYXV0aC90b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbGllbnRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IEF1dGhDb25maWcsIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGxvYWRDbGllbnRBdXRoZW50aWNhdGlvblRva2VuKCk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+IHtcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0T0F1dGhFbmRwb2ludCgpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoXG4gICAgICAgICdjbGllbnRfaWQnLFxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb25maWcuYXV0aGVudGljYXRpb24uY2xpZW50X2lkKVxuICAgICAgKVxuICAgICAgLnNldChcbiAgICAgICAgJ2NsaWVudF9zZWNyZXQnLFxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb25maWcuYXV0aGVudGljYXRpb24uY2xpZW50X3NlY3JldClcbiAgICAgIClcbiAgICAgIC5zZXQoJ2dyYW50X3R5cGUnLCAnY2xpZW50X2NyZWRlbnRpYWxzJyk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Q2xpZW50VG9rZW4+KHVybCwgcGFyYW1zLCB7IGhlYWRlcnMgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T0F1dGhFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJykgKyBPQVVUSF9FTkRQT0lOVDtcbiAgfVxufVxuIl19