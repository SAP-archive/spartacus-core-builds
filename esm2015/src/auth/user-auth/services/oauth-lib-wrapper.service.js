import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { WindowRef } from '../../../window/window-ref';
import { AuthConfigService } from './auth-config.service';
import * as i0 from "@angular/core";
import * as i1 from "angular-oauth2-oidc";
import * as i2 from "./auth-config.service";
import * as i3 from "../../../window/window-ref";
/**
 * Wrapper service on the library OAuthService. Normalizes the lib API for services.
 * Use this service when you want to access low level OAuth library methods.
 */
export class OAuthLibWrapperService {
    constructor(oAuthService, authConfigService, platformId, winRef) {
        this.oAuthService = oAuthService;
        this.authConfigService = authConfigService;
        this.platformId = platformId;
        this.winRef = winRef;
        this.initialize();
    }
    initialize() {
        var _a, _b, _c, _d;
        const isSSR = isPlatformServer(this.platformId);
        this.oAuthService.configure(Object.assign({ tokenEndpoint: this.authConfigService.getTokenEndpoint(), loginUrl: this.authConfigService.getLoginUrl(), clientId: this.authConfigService.getClientId(), dummyClientSecret: this.authConfigService.getClientSecret(), revocationEndpoint: this.authConfigService.getRevokeEndpoint(), logoutUrl: this.authConfigService.getLogoutUrl(), userinfoEndpoint: this.authConfigService.getUserinfoEndpoint(), issuer: (_b = (_a = this.authConfigService.getOAuthLibConfig()) === null || _a === void 0 ? void 0 : _a.issuer) !== null && _b !== void 0 ? _b : this.authConfigService.getBaseUrl(), redirectUri: ((_d = (_c = this.authConfigService.getOAuthLibConfig()) === null || _c === void 0 ? void 0 : _c.redirectUri) !== null && _d !== void 0 ? _d : !isSSR) ? this.winRef.nativeWindow.location.origin
                : '' }, this.authConfigService.getOAuthLibConfig()));
    }
    /**
     * Authorize with ResourceOwnerPasswordFlow.
     *
     * @param userId
     * @param password
     *
     * @return token response from the lib
     */
    authorizeWithPasswordFlow(userId, password) {
        return this.oAuthService.fetchTokenUsingPasswordFlow(userId, password);
    }
    /**
     * Refresh access_token.
     */
    refreshToken() {
        this.oAuthService.refreshToken();
    }
    /**
     * Revoke access tokens and clear tokens in lib state.
     */
    revokeAndLogout() {
        return new Promise((resolve) => {
            this.oAuthService
                .revokeTokenAndLogout()
                .catch(() => {
                // when there would be some kind of error during revocation we can't do anything else, so at least we logout user.
                this.oAuthService.logOut();
            })
                .finally(() => {
                resolve();
            });
        });
    }
    /**
     * Clear tokens in library state (no revocation).
     */
    logout() {
        this.oAuthService.logOut();
    }
    /**
     * Returns Open Id token. Might be empty, when it was not requested with the `responseType` config.
     *
     * @return id token
     */
    getIdToken() {
        return this.oAuthService.getIdToken();
    }
    /**
     * Initialize Implicit Flow or Authorization Code flows with the redirect to OAuth login url.
     */
    initLoginFlow() {
        return this.oAuthService.initLoginFlow();
    }
    /**
     * Tries to login user based on `code` or `token` present in the url.
     */
    tryLogin() {
        return this.oAuthService.tryLogin({
            // We don't load discovery document, because it doesn't contain revoke endpoint information
            disableOAuth2StateCheck: true,
        });
    }
}
OAuthLibWrapperService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OAuthLibWrapperService_Factory() { return new OAuthLibWrapperService(i0.ɵɵinject(i1.OAuthService), i0.ɵɵinject(i2.AuthConfigService), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i3.WindowRef)); }, token: OAuthLibWrapperService, providedIn: "root" });
OAuthLibWrapperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OAuthLibWrapperService.ctorParameters = () => [
    { type: OAuthService },
    { type: AuthConfigService },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: WindowRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgtbGliLXdyYXBwZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2F1dGgvdXNlci1hdXRoL3NlcnZpY2VzL29hdXRoLWxpYi13cmFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQWlCLE1BQU0scUJBQXFCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUUxRDs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFlBQ1ksWUFBMEIsRUFDMUIsaUJBQW9DLEVBQ2YsVUFBa0IsRUFDdkMsTUFBaUI7UUFIakIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNmLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUUzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVTLFVBQVU7O1FBQ2xCLE1BQU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsaUJBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsRUFDeEQsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFDOUMsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFDOUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxFQUMzRCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsRUFDOUQsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsRUFDaEQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLEVBQzlELE1BQU0sY0FDSixJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsMENBQUUsTUFBTSxtQ0FDbEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxFQUNyQyxXQUFXLEVBQ1QsYUFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsMENBQUUsV0FBVyxtQ0FBSSxDQUFDLEtBQUssRUFDL0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUMxQyxDQUFDLENBQUMsRUFBRSxJQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxFQUM3QyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCx5QkFBeUIsQ0FDdkIsTUFBYyxFQUNkLFFBQWdCO1FBRWhCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNiLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsWUFBWTtpQkFDZCxvQkFBb0IsRUFBRTtpQkFDdEIsS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDVixrSEFBa0g7Z0JBQ2xILElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDN0IsQ0FBQyxDQUFDO2lCQUNELE9BQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDaEMsMkZBQTJGO1lBQzNGLHVCQUF1QixFQUFFLElBQUk7U0FDOUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXhHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVZRLFlBQVk7WUFFWixpQkFBaUI7WUFhcUIsTUFBTSx1QkFBaEQsTUFBTSxTQUFDLFdBQVc7WUFkZCxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UsIFRva2VuUmVzcG9uc2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLWNvbmZpZy5zZXJ2aWNlJztcblxuLyoqXG4gKiBXcmFwcGVyIHNlcnZpY2Ugb24gdGhlIGxpYnJhcnkgT0F1dGhTZXJ2aWNlLiBOb3JtYWxpemVzIHRoZSBsaWIgQVBJIGZvciBzZXJ2aWNlcy5cbiAqIFVzZSB0aGlzIHNlcnZpY2Ugd2hlbiB5b3Ugd2FudCB0byBhY2Nlc3MgbG93IGxldmVsIE9BdXRoIGxpYnJhcnkgbWV0aG9kcy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9BdXRoTGliV3JhcHBlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb0F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhDb25maWdTZXJ2aWNlOiBBdXRoQ29uZmlnU2VydmljZSxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGlzU1NSID0gaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpO1xuICAgIHRoaXMub0F1dGhTZXJ2aWNlLmNvbmZpZ3VyZSh7XG4gICAgICB0b2tlbkVuZHBvaW50OiB0aGlzLmF1dGhDb25maWdTZXJ2aWNlLmdldFRva2VuRW5kcG9pbnQoKSxcbiAgICAgIGxvZ2luVXJsOiB0aGlzLmF1dGhDb25maWdTZXJ2aWNlLmdldExvZ2luVXJsKCksXG4gICAgICBjbGllbnRJZDogdGhpcy5hdXRoQ29uZmlnU2VydmljZS5nZXRDbGllbnRJZCgpLFxuICAgICAgZHVtbXlDbGllbnRTZWNyZXQ6IHRoaXMuYXV0aENvbmZpZ1NlcnZpY2UuZ2V0Q2xpZW50U2VjcmV0KCksXG4gICAgICByZXZvY2F0aW9uRW5kcG9pbnQ6IHRoaXMuYXV0aENvbmZpZ1NlcnZpY2UuZ2V0UmV2b2tlRW5kcG9pbnQoKSxcbiAgICAgIGxvZ291dFVybDogdGhpcy5hdXRoQ29uZmlnU2VydmljZS5nZXRMb2dvdXRVcmwoKSxcbiAgICAgIHVzZXJpbmZvRW5kcG9pbnQ6IHRoaXMuYXV0aENvbmZpZ1NlcnZpY2UuZ2V0VXNlcmluZm9FbmRwb2ludCgpLFxuICAgICAgaXNzdWVyOlxuICAgICAgICB0aGlzLmF1dGhDb25maWdTZXJ2aWNlLmdldE9BdXRoTGliQ29uZmlnKCk/Lmlzc3VlciA/P1xuICAgICAgICB0aGlzLmF1dGhDb25maWdTZXJ2aWNlLmdldEJhc2VVcmwoKSxcbiAgICAgIHJlZGlyZWN0VXJpOlxuICAgICAgICB0aGlzLmF1dGhDb25maWdTZXJ2aWNlLmdldE9BdXRoTGliQ29uZmlnKCk/LnJlZGlyZWN0VXJpID8/ICFpc1NTUlxuICAgICAgICAgID8gdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgICAgIDogJycsXG4gICAgICAuLi50aGlzLmF1dGhDb25maWdTZXJ2aWNlLmdldE9BdXRoTGliQ29uZmlnKCksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXV0aG9yaXplIHdpdGggUmVzb3VyY2VPd25lclBhc3N3b3JkRmxvdy5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICpcbiAgICogQHJldHVybiB0b2tlbiByZXNwb25zZSBmcm9tIHRoZSBsaWJcbiAgICovXG4gIGF1dGhvcml6ZVdpdGhQYXNzd29yZEZsb3coXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xuICApOiBQcm9taXNlPFRva2VuUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5vQXV0aFNlcnZpY2UuZmV0Y2hUb2tlblVzaW5nUGFzc3dvcmRGbG93KHVzZXJJZCwgcGFzc3dvcmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggYWNjZXNzX3Rva2VuLlxuICAgKi9cbiAgcmVmcmVzaFRva2VuKCk6IHZvaWQge1xuICAgIHRoaXMub0F1dGhTZXJ2aWNlLnJlZnJlc2hUb2tlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldm9rZSBhY2Nlc3MgdG9rZW5zIGFuZCBjbGVhciB0b2tlbnMgaW4gbGliIHN0YXRlLlxuICAgKi9cbiAgcmV2b2tlQW5kTG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLm9BdXRoU2VydmljZVxuICAgICAgICAucmV2b2tlVG9rZW5BbmRMb2dvdXQoKVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIC8vIHdoZW4gdGhlcmUgd291bGQgYmUgc29tZSBraW5kIG9mIGVycm9yIGR1cmluZyByZXZvY2F0aW9uIHdlIGNhbid0IGRvIGFueXRoaW5nIGVsc2UsIHNvIGF0IGxlYXN0IHdlIGxvZ291dCB1c2VyLlxuICAgICAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLmxvZ091dCgpO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0b2tlbnMgaW4gbGlicmFyeSBzdGF0ZSAobm8gcmV2b2NhdGlvbikuXG4gICAqL1xuICBsb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5vQXV0aFNlcnZpY2UubG9nT3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBPcGVuIElkIHRva2VuLiBNaWdodCBiZSBlbXB0eSwgd2hlbiBpdCB3YXMgbm90IHJlcXVlc3RlZCB3aXRoIHRoZSBgcmVzcG9uc2VUeXBlYCBjb25maWcuXG4gICAqXG4gICAqIEByZXR1cm4gaWQgdG9rZW5cbiAgICovXG4gIGdldElkVG9rZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vQXV0aFNlcnZpY2UuZ2V0SWRUb2tlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgSW1wbGljaXQgRmxvdyBvciBBdXRob3JpemF0aW9uIENvZGUgZmxvd3Mgd2l0aCB0aGUgcmVkaXJlY3QgdG8gT0F1dGggbG9naW4gdXJsLlxuICAgKi9cbiAgaW5pdExvZ2luRmxvdygpIHtcbiAgICByZXR1cm4gdGhpcy5vQXV0aFNlcnZpY2UuaW5pdExvZ2luRmxvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIGxvZ2luIHVzZXIgYmFzZWQgb24gYGNvZGVgIG9yIGB0b2tlbmAgcHJlc2VudCBpbiB0aGUgdXJsLlxuICAgKi9cbiAgdHJ5TG9naW4oKSB7XG4gICAgcmV0dXJuIHRoaXMub0F1dGhTZXJ2aWNlLnRyeUxvZ2luKHtcbiAgICAgIC8vIFdlIGRvbid0IGxvYWQgZGlzY292ZXJ5IGRvY3VtZW50LCBiZWNhdXNlIGl0IGRvZXNuJ3QgY29udGFpbiByZXZva2UgZW5kcG9pbnQgaW5mb3JtYXRpb25cbiAgICAgIGRpc2FibGVPQXV0aDJTdGF0ZUNoZWNrOiB0cnVlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=