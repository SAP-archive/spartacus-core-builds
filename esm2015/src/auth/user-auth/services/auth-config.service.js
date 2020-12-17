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
     * Utility to make access to authentication config easier.
     */
    get config() {
        var _a, _b;
        return (_b = (_a = this.authConfig) === null || _a === void 0 ? void 0 : _a.authentication) !== null && _b !== void 0 ? _b : {};
    }
    /**
     * Get client_id
     *
     * @return client_id
     */
    getClientId() {
        var _a;
        return (_a = this.config.client_id) !== null && _a !== void 0 ? _a : '';
    }
    /**
     * Get client_secret. OAuth server shouldn't require it from web apps (but Hybris OAuth server requires).
     *
     * @return client_secret
     */
    getClientSecret() {
        var _a;
        return (_a = this.config.client_secret) !== null && _a !== void 0 ? _a : '';
    }
    /**
     * Returns base url of the authorization server
     */
    getBaseUrl() {
        var _a, _b, _c, _d, _e;
        return ((_a = this.config.baseUrl) !== null && _a !== void 0 ? _a : ((_e = (_d = (_c = (_b = this.occConfig) === null || _b === void 0 ? void 0 : _b.backend) === null || _c === void 0 ? void 0 : _c.occ) === null || _d === void 0 ? void 0 : _d.baseUrl) !== null && _e !== void 0 ? _e : '') + '/authorizationserver');
    }
    /**
     * Returns endpoint for getting the auth token
     */
    getTokenEndpoint() {
        var _a;
        const tokenEndpoint = (_a = this.config.tokenEndpoint) !== null && _a !== void 0 ? _a : '';
        return this.prefixEndpoint(tokenEndpoint);
    }
    /**
     * Returns url for redirect to the authorization server to get token/code
     */
    getLoginUrl() {
        var _a;
        const loginUrl = (_a = this.config.loginUrl) !== null && _a !== void 0 ? _a : '';
        return this.prefixEndpoint(loginUrl);
    }
    /**
     * Returns endpoint for token revocation (both access and refresh token).
     */
    getRevokeEndpoint() {
        var _a;
        const revokeEndpoint = (_a = this.config.revokeEndpoint) !== null && _a !== void 0 ? _a : '';
        return this.prefixEndpoint(revokeEndpoint);
    }
    /**
     * Returns logout url to redirect to on logout.
     */
    getLogoutUrl() {
        var _a;
        const logoutUrl = (_a = this.config.logoutUrl) !== null && _a !== void 0 ? _a : '';
        return this.prefixEndpoint(logoutUrl);
    }
    /**
     * Returns userinfo endpoint of the OAuth server.
     */
    getUserinfoEndpoint() {
        var _a;
        const userinfoEndpoint = (_a = this.config.userinfoEndpoint) !== null && _a !== void 0 ? _a : '';
        return this.prefixEndpoint(userinfoEndpoint);
    }
    /**
     * Returns configuration specific for the angular-oauth2-oidc library.
     */
    getOAuthLibConfig() {
        var _a;
        return (_a = this.config.OAuthLibConfig) !== null && _a !== void 0 ? _a : {};
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
        var _a;
        const responseType = (_a = this.config.OAuthLibConfig) === null || _a === void 0 ? void 0 : _a.responseType;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2F1dGgvdXNlci1hdXRoL3NlcnZpY2VzL2F1dGgtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBaUIsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFakQ7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFDWSxVQUFzQixFQUN0QixTQUFvQjtRQURwQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDN0IsQ0FBQztJQUVKOztPQUVHO0lBQ0gsSUFBWSxNQUFNOztRQUNoQixtQkFBTyxJQUFJLENBQUMsVUFBVSwwQ0FBRSxjQUFjLG1DQUFJLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFdBQVc7O1FBQ2hCLGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLG1DQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGVBQWU7O1FBQ3BCLGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLG1DQUFJLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVOztRQUNmLE9BQU8sT0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sbUNBQ25CLHlCQUFDLElBQUksQ0FBQyxTQUFTLDBDQUFFLE9BQU8sMENBQUUsR0FBRywwQ0FBRSxPQUFPLG1DQUFJLEVBQUUsQ0FBQyxHQUFHLHNCQUFzQixDQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0JBQWdCOztRQUNyQixNQUFNLGFBQWEsU0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsbUNBQUksRUFBRSxDQUFDO1FBQ3RELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXOztRQUNoQixNQUFNLFFBQVEsU0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsbUNBQUksRUFBRSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQkFBaUI7O1FBQ3RCLE1BQU0sY0FBYyxTQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxtQ0FBSSxFQUFFLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVk7O1FBQ2pCLE1BQU0sU0FBUyxTQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxtQ0FBSSxFQUFFLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7T0FFRztJQUNJLG1CQUFtQjs7UUFDeEIsTUFBTSxnQkFBZ0IsU0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixtQ0FBSSxFQUFFLENBQUM7UUFDNUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUJBQWlCOztRQUN0QixhQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxtQ0FBSSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVTLGNBQWMsQ0FBQyxRQUFnQjtRQUN2QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDakI7UUFDRCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxZQUFZOztRQUNqQixNQUFNLFlBQVksU0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsMENBQUUsWUFBWSxDQUFDO1FBQzlELElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQixPQUFPLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQzthQUNwQztpQkFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sU0FBUyxDQUFDLFlBQVksQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxPQUFPLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQzthQUM1QztTQUNGO1FBQ0QsT0FBTyxTQUFTLENBQUMseUJBQXlCLENBQUM7SUFDN0MsQ0FBQzs7OztZQXBIRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVZRLFVBQVU7WUFEVixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhMaWJDb25maWcgfSBmcm9tICcuLi9jb25maWcvYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgT0F1dGhGbG93IH0gZnJvbSAnLi4vbW9kZWxzL29hdXRoLWZsb3cnO1xuXG4vKipcbiAqIFV0aWxpdHkgc2VydmljZSBvbiB0b3Agb2YgdGhlIGF1dGhvcml6YXRpb24gY29uZmlnLlxuICogUHJvdmlkZXMgaGFuZHkgZGVmYXVsdHMsIHdoZW4gbm90IGV2ZXJ5dGhpbmcgaXMgc2V0IGluIHRoZSBjb25maWd1cmF0aW9uLlxuICogVXNlIHRoaXMgc2VydmljZSBpbnN0ZWFkIG9mIGRpcmVjdCBjb25maWd1cmF0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aENvbmZpZzogQXV0aENvbmZpZyxcbiAgICBwcm90ZWN0ZWQgb2NjQ29uZmlnOiBPY2NDb25maWdcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IHRvIG1ha2UgYWNjZXNzIHRvIGF1dGhlbnRpY2F0aW9uIGNvbmZpZyBlYXNpZXIuXG4gICAqL1xuICBwcml2YXRlIGdldCBjb25maWcoKTogQXV0aENvbmZpZ1snYXV0aGVudGljYXRpb24nXSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aENvbmZpZz8uYXV0aGVudGljYXRpb24gPz8ge307XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsaWVudF9pZFxuICAgKlxuICAgKiBAcmV0dXJuIGNsaWVudF9pZFxuICAgKi9cbiAgcHVibGljIGdldENsaWVudElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmNsaWVudF9pZCA/PyAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xpZW50X3NlY3JldC4gT0F1dGggc2VydmVyIHNob3VsZG4ndCByZXF1aXJlIGl0IGZyb20gd2ViIGFwcHMgKGJ1dCBIeWJyaXMgT0F1dGggc2VydmVyIHJlcXVpcmVzKS5cbiAgICpcbiAgICogQHJldHVybiBjbGllbnRfc2VjcmV0XG4gICAqL1xuICBwdWJsaWMgZ2V0Q2xpZW50U2VjcmV0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmNsaWVudF9zZWNyZXQgPz8gJyc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBiYXNlIHVybCBvZiB0aGUgYXV0aG9yaXphdGlvbiBzZXJ2ZXJcbiAgICovXG4gIHB1YmxpYyBnZXRCYXNlVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29uZmlnLmJhc2VVcmwgPz9cbiAgICAgICh0aGlzLm9jY0NvbmZpZz8uYmFja2VuZD8ub2NjPy5iYXNlVXJsID8/ICcnKSArICcvYXV0aG9yaXphdGlvbnNlcnZlcidcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZW5kcG9pbnQgZm9yIGdldHRpbmcgdGhlIGF1dGggdG9rZW5cbiAgICovXG4gIHB1YmxpYyBnZXRUb2tlbkVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgY29uc3QgdG9rZW5FbmRwb2ludCA9IHRoaXMuY29uZmlnLnRva2VuRW5kcG9pbnQgPz8gJyc7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4RW5kcG9pbnQodG9rZW5FbmRwb2ludCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIHJlZGlyZWN0IHRvIHRoZSBhdXRob3JpemF0aW9uIHNlcnZlciB0byBnZXQgdG9rZW4vY29kZVxuICAgKi9cbiAgcHVibGljIGdldExvZ2luVXJsKCk6IHN0cmluZyB7XG4gICAgY29uc3QgbG9naW5VcmwgPSB0aGlzLmNvbmZpZy5sb2dpblVybCA/PyAnJztcbiAgICByZXR1cm4gdGhpcy5wcmVmaXhFbmRwb2ludChsb2dpblVybCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBlbmRwb2ludCBmb3IgdG9rZW4gcmV2b2NhdGlvbiAoYm90aCBhY2Nlc3MgYW5kIHJlZnJlc2ggdG9rZW4pLlxuICAgKi9cbiAgcHVibGljIGdldFJldm9rZUVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgY29uc3QgcmV2b2tlRW5kcG9pbnQgPSB0aGlzLmNvbmZpZy5yZXZva2VFbmRwb2ludCA/PyAnJztcbiAgICByZXR1cm4gdGhpcy5wcmVmaXhFbmRwb2ludChyZXZva2VFbmRwb2ludCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBsb2dvdXQgdXJsIHRvIHJlZGlyZWN0IHRvIG9uIGxvZ291dC5cbiAgICovXG4gIHB1YmxpYyBnZXRMb2dvdXRVcmwoKTogc3RyaW5nIHtcbiAgICBjb25zdCBsb2dvdXRVcmwgPSB0aGlzLmNvbmZpZy5sb2dvdXRVcmwgPz8gJyc7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4RW5kcG9pbnQobG9nb3V0VXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHVzZXJpbmZvIGVuZHBvaW50IG9mIHRoZSBPQXV0aCBzZXJ2ZXIuXG4gICAqL1xuICBwdWJsaWMgZ2V0VXNlcmluZm9FbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVzZXJpbmZvRW5kcG9pbnQgPSB0aGlzLmNvbmZpZy51c2VyaW5mb0VuZHBvaW50ID8/ICcnO1xuICAgIHJldHVybiB0aGlzLnByZWZpeEVuZHBvaW50KHVzZXJpbmZvRW5kcG9pbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY29uZmlndXJhdGlvbiBzcGVjaWZpYyBmb3IgdGhlIGFuZ3VsYXItb2F1dGgyLW9pZGMgbGlicmFyeS5cbiAgICovXG4gIHB1YmxpYyBnZXRPQXV0aExpYkNvbmZpZygpOiBBdXRoTGliQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuT0F1dGhMaWJDb25maWcgPz8ge307XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJlZml4RW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHVybCA9IGVuZHBvaW50O1xuICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgdXJsID0gJy8nICsgdXJsO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGhpcy5nZXRCYXNlVXJsKCl9JHt1cmx9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSBPQXV0aCBmbG93IGJhc2VkIG9uIGF1dGggY29uZmlnLlxuICAgKiBVc2Ugd2hlbiB5b3UgaGF2ZSB0byBwZXJmb3JtIHBhcnRpY3VsYXIgYWN0aW9uIG9ubHkgaW4gc29tZSBvZiB0aGUgT0F1dGggZmxvdyBzY2VuYXJpb3MuXG4gICAqL1xuICBwdWJsaWMgZ2V0T0F1dGhGbG93KCk6IE9BdXRoRmxvdyB7XG4gICAgY29uc3QgcmVzcG9uc2VUeXBlID0gdGhpcy5jb25maWcuT0F1dGhMaWJDb25maWc/LnJlc3BvbnNlVHlwZTtcbiAgICBpZiAocmVzcG9uc2VUeXBlKSB7XG4gICAgICBjb25zdCB0eXBlcyA9IHJlc3BvbnNlVHlwZS5zcGxpdCgnICcpO1xuICAgICAgaWYgKHR5cGVzLmluY2x1ZGVzKCdjb2RlJykpIHtcbiAgICAgICAgcmV0dXJuIE9BdXRoRmxvdy5BdXRob3JpemF0aW9uQ29kZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZXMuaW5jbHVkZXMoJ3Rva2VuJykpIHtcbiAgICAgICAgcmV0dXJuIE9BdXRoRmxvdy5JbXBsaWNpdEZsb3c7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gT0F1dGhGbG93LlJlc291cmNlT3duZXJQYXNzd29yZEZsb3c7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPQXV0aEZsb3cuUmVzb3VyY2VPd25lclBhc3N3b3JkRmxvdztcbiAgfVxufVxuIl19