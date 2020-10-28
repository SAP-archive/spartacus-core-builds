import { Injectable } from '@angular/core';
import { OccConfig } from '../../../occ/config/occ-config';
import { AuthConfig } from '../config/auth-config';
import { OAuthFlow } from '../models/oauth-flow';
import * as i0 from "@angular/core";
import * as i1 from "../config/auth-config";
import * as i2 from "../../../occ/config/occ-config";
/**
 * Utility service on top of the authorization config.
 * Provides handy defaults, when not everything is set in the configuration.
 * Use this service instead of direct configuration.
 */
export class AuthConfigService {
    constructor(authConfig, occConfig) {
        this.authConfig = authConfig;
        this.occConfig = occConfig;
    }
    /**
     * Get client_id
     *
     * @return client_id
     */
    getClientId() {
        var _a;
        return (_a = this.authConfig.authentication.client_id) !== null && _a !== void 0 ? _a : '';
    }
    /**
     * Get client_secret. OAuth server shouldn't require it from web apps (but Hybris OAuth server requires).
     *
     * @return client_secret
     */
    getClientSecret() {
        var _a;
        return (_a = this.authConfig.authentication.client_secret) !== null && _a !== void 0 ? _a : '';
    }
    /**
     * Returns base url of the authorization server
     */
    getBaseUrl() {
        var _a;
        return ((_a = this.authConfig.authentication.baseUrl) !== null && _a !== void 0 ? _a : this.occConfig.backend.occ.baseUrl + '/authorizationserver');
    }
    /**
     * Returns endpoint for getting the auth token
     */
    getTokenEndpoint() {
        var _a;
        const tokenEndpoint = (_a = this.authConfig.authentication.tokenEndpoint) !== null && _a !== void 0 ? _a : '';
        return this.prefixEndpoint(tokenEndpoint);
    }
    /**
     * Returns url for redirect to the authorization server to get token/code
     */
    getLoginUrl() {
        var _a;
        const loginUrl = (_a = this.authConfig.authentication.loginUrl) !== null && _a !== void 0 ? _a : '';
        return this.prefixEndpoint(loginUrl);
    }
    /**
     * Returns endpoint for token revocation (both access and refresh token).
     */
    getRevokeEndpoint() {
        var _a;
        const revokeEndpoint = (_a = this.authConfig.authentication.revokeEndpoint) !== null && _a !== void 0 ? _a : '';
        return this.prefixEndpoint(revokeEndpoint);
    }
    /**
     * Returns logout url to redirect to on logout.
     */
    getLogoutUrl() {
        var _a;
        const logoutUrl = (_a = this.authConfig.authentication.logoutUrl) !== null && _a !== void 0 ? _a : '';
        return this.prefixEndpoint(logoutUrl);
    }
    /**
     * Returns userinfo endpoint of the OAuth server.
     */
    getUserinfoEndpoint() {
        var _a;
        const userinfoEndpoint = (_a = this.authConfig.authentication.userinfoEndpoint) !== null && _a !== void 0 ? _a : '';
        return this.prefixEndpoint(userinfoEndpoint);
    }
    /**
     * Returns configuration specific for the angular-oauth2-oidc library.
     */
    getOAuthLibConfig() {
        var _a, _b;
        return (_b = (_a = this.authConfig.authentication) === null || _a === void 0 ? void 0 : _a.OAuthLibConfig) !== null && _b !== void 0 ? _b : {};
    }
    prefixEndpoint(endpoint) {
        let url = endpoint;
        if (!url.startsWith('/')) {
            url = '/' + url;
        }
        return `${this.getBaseUrl()}${url}`;
    }
    /**
     * Returns the type of the OAuth flow based on auth config.
     * Use when you have to perform particular action only in some of the OAuth flow scenarios.
     */
    getOAuthFlow() {
        var _a, _b;
        const responseType = (_b = (_a = this.authConfig.authentication) === null || _a === void 0 ? void 0 : _a.OAuthLibConfig) === null || _b === void 0 ? void 0 : _b.responseType;
        if (responseType) {
            const types = responseType.split(' ');
            if (types.includes('code')) {
                return OAuthFlow.AuthorizationCode;
            }
            else if (types.includes('token')) {
                return OAuthFlow.ImplicitFlow;
            }
            else {
                return OAuthFlow.ResourceOwnerPasswordFlow;
            }
        }
        return OAuthFlow.ResourceOwnerPasswordFlow;
    }
}
AuthConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthConfigService_Factory() { return new AuthConfigService(i0.ɵɵinject(i1.AuthConfig), i0.ɵɵinject(i2.OccConfig)); }, token: AuthConfigService, providedIn: "root" });
AuthConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AuthConfigService.ctorParameters = () => [
    { type: AuthConfig },
    { type: OccConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2F1dGgvdXNlci1hdXRoL3NlcnZpY2VzL2F1dGgtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBaUIsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFakQ7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFDWSxVQUFzQixFQUN0QixTQUFvQjtRQURwQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDN0IsQ0FBQztJQUVKOzs7O09BSUc7SUFDSSxXQUFXOztRQUNoQixhQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsbUNBQUksRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZUFBZTs7UUFDcEIsYUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxhQUFhLG1DQUFJLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVOztRQUNmLE9BQU8sT0FDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxPQUFPLG1DQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUM1RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0JBQWdCOztRQUNyQixNQUFNLGFBQWEsU0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxhQUFhLG1DQUFJLEVBQUUsQ0FBQztRQUN6RSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksV0FBVzs7UUFDaEIsTUFBTSxRQUFRLFNBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxtQ0FBSSxFQUFFLENBQUM7UUFDL0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNJLGlCQUFpQjs7UUFDdEIsTUFBTSxjQUFjLFNBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsY0FBYyxtQ0FBSSxFQUFFLENBQUM7UUFDM0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVk7O1FBQ2pCLE1BQU0sU0FBUyxTQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsbUNBQUksRUFBRSxDQUFDO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxtQkFBbUI7O1FBQ3hCLE1BQU0sZ0JBQWdCLFNBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGdCQUFnQixtQ0FBSSxFQUFFLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUJBQWlCOztRQUN0QixtQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsMENBQUUsY0FBYyxtQ0FBSSxFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVTLGNBQWMsQ0FBQyxRQUFnQjtRQUN2QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDakI7UUFDRCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxZQUFZOztRQUNqQixNQUFNLFlBQVksZUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsMENBQUUsY0FBYywwQ0FDL0QsWUFBWSxDQUFDO1FBQ2pCLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQixPQUFPLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQzthQUNwQztpQkFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sU0FBUyxDQUFDLFlBQVksQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxPQUFPLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQzthQUM1QztTQUNGO1FBQ0QsT0FBTyxTQUFTLENBQUMseUJBQXlCLENBQUM7SUFDN0MsQ0FBQzs7OztZQS9HRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVZRLFVBQVU7WUFEVixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhMaWJDb25maWcgfSBmcm9tICcuLi9jb25maWcvYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgT0F1dGhGbG93IH0gZnJvbSAnLi4vbW9kZWxzL29hdXRoLWZsb3cnO1xuXG4vKipcbiAqIFV0aWxpdHkgc2VydmljZSBvbiB0b3Agb2YgdGhlIGF1dGhvcml6YXRpb24gY29uZmlnLlxuICogUHJvdmlkZXMgaGFuZHkgZGVmYXVsdHMsIHdoZW4gbm90IGV2ZXJ5dGhpbmcgaXMgc2V0IGluIHRoZSBjb25maWd1cmF0aW9uLlxuICogVXNlIHRoaXMgc2VydmljZSBpbnN0ZWFkIG9mIGRpcmVjdCBjb25maWd1cmF0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aENvbmZpZzogQXV0aENvbmZpZyxcbiAgICBwcm90ZWN0ZWQgb2NjQ29uZmlnOiBPY2NDb25maWdcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgY2xpZW50X2lkXG4gICAqXG4gICAqIEByZXR1cm4gY2xpZW50X2lkXG4gICAqL1xuICBwdWJsaWMgZ2V0Q2xpZW50SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoQ29uZmlnLmF1dGhlbnRpY2F0aW9uLmNsaWVudF9pZCA/PyAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xpZW50X3NlY3JldC4gT0F1dGggc2VydmVyIHNob3VsZG4ndCByZXF1aXJlIGl0IGZyb20gd2ViIGFwcHMgKGJ1dCBIeWJyaXMgT0F1dGggc2VydmVyIHJlcXVpcmVzKS5cbiAgICpcbiAgICogQHJldHVybiBjbGllbnRfc2VjcmV0XG4gICAqL1xuICBwdWJsaWMgZ2V0Q2xpZW50U2VjcmV0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aENvbmZpZy5hdXRoZW50aWNhdGlvbi5jbGllbnRfc2VjcmV0ID8/ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYmFzZSB1cmwgb2YgdGhlIGF1dGhvcml6YXRpb24gc2VydmVyXG4gICAqL1xuICBwdWJsaWMgZ2V0QmFzZVVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmF1dGhDb25maWcuYXV0aGVudGljYXRpb24uYmFzZVVybCA/P1xuICAgICAgdGhpcy5vY2NDb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCArICcvYXV0aG9yaXphdGlvbnNlcnZlcidcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZW5kcG9pbnQgZm9yIGdldHRpbmcgdGhlIGF1dGggdG9rZW5cbiAgICovXG4gIHB1YmxpYyBnZXRUb2tlbkVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgY29uc3QgdG9rZW5FbmRwb2ludCA9IHRoaXMuYXV0aENvbmZpZy5hdXRoZW50aWNhdGlvbi50b2tlbkVuZHBvaW50ID8/ICcnO1xuICAgIHJldHVybiB0aGlzLnByZWZpeEVuZHBvaW50KHRva2VuRW5kcG9pbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdXJsIGZvciByZWRpcmVjdCB0byB0aGUgYXV0aG9yaXphdGlvbiBzZXJ2ZXIgdG8gZ2V0IHRva2VuL2NvZGVcbiAgICovXG4gIHB1YmxpYyBnZXRMb2dpblVybCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxvZ2luVXJsID0gdGhpcy5hdXRoQ29uZmlnLmF1dGhlbnRpY2F0aW9uLmxvZ2luVXJsID8/ICcnO1xuICAgIHJldHVybiB0aGlzLnByZWZpeEVuZHBvaW50KGxvZ2luVXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGVuZHBvaW50IGZvciB0b2tlbiByZXZvY2F0aW9uIChib3RoIGFjY2VzcyBhbmQgcmVmcmVzaCB0b2tlbikuXG4gICAqL1xuICBwdWJsaWMgZ2V0UmV2b2tlRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICBjb25zdCByZXZva2VFbmRwb2ludCA9IHRoaXMuYXV0aENvbmZpZy5hdXRoZW50aWNhdGlvbi5yZXZva2VFbmRwb2ludCA/PyAnJztcbiAgICByZXR1cm4gdGhpcy5wcmVmaXhFbmRwb2ludChyZXZva2VFbmRwb2ludCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBsb2dvdXQgdXJsIHRvIHJlZGlyZWN0IHRvIG9uIGxvZ291dC5cbiAgICovXG4gIHB1YmxpYyBnZXRMb2dvdXRVcmwoKTogc3RyaW5nIHtcbiAgICBjb25zdCBsb2dvdXRVcmwgPSB0aGlzLmF1dGhDb25maWcuYXV0aGVudGljYXRpb24ubG9nb3V0VXJsID8/ICcnO1xuICAgIHJldHVybiB0aGlzLnByZWZpeEVuZHBvaW50KGxvZ291dFVybCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB1c2VyaW5mbyBlbmRwb2ludCBvZiB0aGUgT0F1dGggc2VydmVyLlxuICAgKi9cbiAgcHVibGljIGdldFVzZXJpbmZvRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB1c2VyaW5mb0VuZHBvaW50ID1cbiAgICAgIHRoaXMuYXV0aENvbmZpZy5hdXRoZW50aWNhdGlvbi51c2VyaW5mb0VuZHBvaW50ID8/ICcnO1xuICAgIHJldHVybiB0aGlzLnByZWZpeEVuZHBvaW50KHVzZXJpbmZvRW5kcG9pbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY29uZmlndXJhdGlvbiBzcGVjaWZpYyBmb3IgdGhlIGFuZ3VsYXItb2F1dGgyLW9pZGMgbGlicmFyeS5cbiAgICovXG4gIHB1YmxpYyBnZXRPQXV0aExpYkNvbmZpZygpOiBBdXRoTGliQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoQ29uZmlnLmF1dGhlbnRpY2F0aW9uPy5PQXV0aExpYkNvbmZpZyA/PyB7fTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwcmVmaXhFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgdXJsID0gZW5kcG9pbnQ7XG4gICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICB1cmwgPSAnLycgKyB1cmw7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLmdldEJhc2VVcmwoKX0ke3VybH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHR5cGUgb2YgdGhlIE9BdXRoIGZsb3cgYmFzZWQgb24gYXV0aCBjb25maWcuXG4gICAqIFVzZSB3aGVuIHlvdSBoYXZlIHRvIHBlcmZvcm0gcGFydGljdWxhciBhY3Rpb24gb25seSBpbiBzb21lIG9mIHRoZSBPQXV0aCBmbG93IHNjZW5hcmlvcy5cbiAgICovXG4gIHB1YmxpYyBnZXRPQXV0aEZsb3coKTogT0F1dGhGbG93IHtcbiAgICBjb25zdCByZXNwb25zZVR5cGUgPSB0aGlzLmF1dGhDb25maWcuYXV0aGVudGljYXRpb24/Lk9BdXRoTGliQ29uZmlnXG4gICAgICA/LnJlc3BvbnNlVHlwZTtcbiAgICBpZiAocmVzcG9uc2VUeXBlKSB7XG4gICAgICBjb25zdCB0eXBlcyA9IHJlc3BvbnNlVHlwZS5zcGxpdCgnICcpO1xuICAgICAgaWYgKHR5cGVzLmluY2x1ZGVzKCdjb2RlJykpIHtcbiAgICAgICAgcmV0dXJuIE9BdXRoRmxvdy5BdXRob3JpemF0aW9uQ29kZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZXMuaW5jbHVkZXMoJ3Rva2VuJykpIHtcbiAgICAgICAgcmV0dXJuIE9BdXRoRmxvdy5JbXBsaWNpdEZsb3c7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gT0F1dGhGbG93LlJlc291cmNlT3duZXJQYXNzd29yZEZsb3c7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPQXV0aEZsb3cuUmVzb3VyY2VPd25lclBhc3N3b3JkRmxvdztcbiAgfVxufVxuIl19