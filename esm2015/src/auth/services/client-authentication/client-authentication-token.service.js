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
        return this.http
            .post(url, params, { headers })
            .pipe(catchError((error) => throwError(error.json())));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zZXJ2aWNlcy9jbGllbnQtYXV0aGVudGljYXRpb24vY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0UsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztNQUloRCxjQUFjLEdBQUcsa0NBQWtDO0FBR3pELE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7O0lBQzNDLFlBQXNCLE1BQWtCLEVBQVksSUFBZ0I7UUFBOUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFZLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDOzs7O0lBRXhFLDZCQUE2Qjs7Y0FDckIsR0FBRyxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7Y0FDckMsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO2FBQzVCLEdBQUcsQ0FDRixXQUFXLEVBQ1gsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQ3pEO2FBQ0EsR0FBRyxDQUNGLGVBQWUsRUFDZixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FDN0Q7YUFDQSxHQUFHLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDOztjQUVwQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBYyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVTLGdCQUFnQjtRQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUM7SUFDbEUsQ0FBQzs7O1lBM0JGLFVBQVU7Ozs7WUFORixVQUFVO1lBSlYsVUFBVTs7Ozs7OztJQVlMLGtEQUE0Qjs7Ozs7SUFBRSxnREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYXV0aC1jb25maWcnO1xuXG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5cbmNvbnN0IE9BVVRIX0VORFBPSU5UID0gJy9hdXRob3JpemF0aW9uc2VydmVyL29hdXRoL3Rva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogQXV0aENvbmZpZywgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgbG9hZENsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW4oKTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj4ge1xuICAgIGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRPQXV0aEVuZHBvaW50KCk7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldChcbiAgICAgICAgJ2NsaWVudF9pZCcsXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5jbGllbnRfaWQpXG4gICAgICApXG4gICAgICAuc2V0KFxuICAgICAgICAnY2xpZW50X3NlY3JldCcsXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5jbGllbnRfc2VjcmV0KVxuICAgICAgKVxuICAgICAgLnNldCgnZ3JhbnRfdHlwZScsICdjbGllbnRfY3JlZGVudGlhbHMnKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PENsaWVudFRva2VuPih1cmwsIHBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRPQXV0aEVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnKSArIE9BVVRIX0VORFBPSU5UO1xuICB9XG59XG4iXX0=