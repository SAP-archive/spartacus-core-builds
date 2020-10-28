import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { OCC_USER_ID_CURRENT } from '../../../occ/utils/occ-constants';
import { RoutingService } from '../../../routing/facade/routing.service';
import { UserIdService } from '../facade/user-id.service';
import { AuthActions } from '../store/actions/index';
import { AuthRedirectService } from './auth-redirect.service';
import { AuthStorageService } from './auth-storage.service';
import { OAuthLibWrapperService } from './oauth-lib-wrapper.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../facade/user-id.service";
import * as i3 from "./oauth-lib-wrapper.service";
import * as i4 from "./auth-storage.service";
import * as i5 from "./auth-redirect.service";
import * as i6 from "../../../routing/facade/routing.service";
/**
 * Auth service for normal user authentication.
 * Use to check auth status, login/logout with different OAuth flows.
 */
export class BasicAuthService {
    constructor(store, userIdService, oAuthLibWrapperService, authStorageService, authRedirectService, routingService) {
        this.store = store;
        this.userIdService = userIdService;
        this.oAuthLibWrapperService = oAuthLibWrapperService;
        this.authStorageService = authStorageService;
        this.authRedirectService = authRedirectService;
        this.routingService = routingService;
    }
    /**
     * Check params in url and if there is an code/token then try to login with those.
     */
    checkOAuthParamsInUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.oAuthLibWrapperService.tryLogin();
                const token = this.authStorageService.getItem('access_token');
                // We get the result in the code flow even if we did not logged in that why we also need to check if we have access_token
                if (result && token) {
                    this.userIdService.setUserId(OCC_USER_ID_CURRENT);
                    this.store.dispatch(new AuthActions.Login());
                    this.authRedirectService.redirect();
                }
            }
            catch (_a) { }
        });
    }
    /**
     * Initialize Implicit/Authorization Code flow by redirecting to OAuth server.
     */
    loginWithRedirect() {
        this.oAuthLibWrapperService.initLoginFlow();
        return true;
    }
    /**
     * Loads a new user token with Resource Owner Password Flow.
     * @param userId
     * @param password
     */
    authorize(userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.oAuthLibWrapperService.authorizeWithPasswordFlow(userId, password);
                // OCC specific user id handling. Customize when implementing different backend
                this.userIdService.setUserId(OCC_USER_ID_CURRENT);
                this.store.dispatch(new AuthActions.Login());
                this.authRedirectService.redirect();
            }
            catch (_a) { }
        });
    }
    /**
     * Logout a storefront customer.
     */
    logout() {
        this.userIdService.clearUserId();
        return new Promise((resolve) => {
            this.oAuthLibWrapperService.revokeAndLogout().finally(() => {
                this.store.dispatch(new AuthActions.Logout());
                resolve();
            });
        });
    }
    /**
     * Returns `true` if the user is logged in; and `false` if the user is anonymous.
     */
    isUserLoggedIn() {
        return this.authStorageService.getToken().pipe(map((userToken) => Boolean(userToken === null || userToken === void 0 ? void 0 : userToken.access_token)), distinctUntilChanged());
    }
    /**
     * Initialize logout procedure by redirecting to the `logout` endpoint.
     */
    initLogout() {
        this.routingService.go({ cxRoute: 'logout' });
    }
}
BasicAuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BasicAuthService_Factory() { return new BasicAuthService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.UserIdService), i0.ɵɵinject(i3.OAuthLibWrapperService), i0.ɵɵinject(i4.AuthStorageService), i0.ɵɵinject(i5.AuthRedirectService), i0.ɵɵinject(i6.RoutingService)); }, token: BasicAuthService, providedIn: "root" });
BasicAuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
BasicAuthService.ctorParameters = () => [
    { type: Store },
    { type: UserIdService },
    { type: OAuthLibWrapperService },
    { type: AuthStorageService },
    { type: AuthRedirectService },
    { type: RoutingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMtYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC91c2VyLWF1dGgvc2VydmljZXMvYmFzaWMtYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUV6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7OztBQUVyRTs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQ1ksS0FBaUMsRUFDakMsYUFBNEIsRUFDNUIsc0JBQThDLEVBQzlDLGtCQUFzQyxFQUN0QyxtQkFBd0MsRUFDeEMsY0FBOEI7UUFMOUIsVUFBSyxHQUFMLEtBQUssQ0FBNEI7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3ZDLENBQUM7SUFFSjs7T0FFRztJQUNHLHFCQUFxQjs7WUFDekIsSUFBSTtnQkFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDNUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDOUQseUhBQXlIO2dCQUN6SCxJQUFJLE1BQU0sSUFBSSxLQUFLLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckM7YUFDRjtZQUFDLFdBQU0sR0FBRTtRQUNaLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ0gsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDVSxTQUFTLENBQUMsTUFBYyxFQUFFLFFBQWdCOztZQUNyRCxJQUFJO2dCQUNGLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLHlCQUF5QixDQUN6RCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUM7Z0JBQ0YsK0VBQStFO2dCQUMvRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUVsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUU3QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckM7WUFBQyxXQUFNLEdBQUU7UUFDWixDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNJLE1BQU07UUFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtnQkFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQzVDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxZQUFZLENBQUMsQ0FBQyxFQUNwRCxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztZQXJGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQWxCUSxLQUFLO1lBTUwsYUFBYTtZQUliLHNCQUFzQjtZQUR0QixrQkFBa0I7WUFEbEIsbUJBQW1CO1lBSm5CLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2xpZW50QXV0aCB9IGZyb20gJy4uLy4uL2NsaWVudC1hdXRoL3N0b3JlL2NsaWVudC1hdXRoLXN0YXRlJztcbmltcG9ydCB7IFVzZXJJZFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvdXNlci1pZC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBBdXRoUmVkaXJlY3RTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXJlZGlyZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBPQXV0aExpYldyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi9vYXV0aC1saWItd3JhcHBlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBBdXRoIHNlcnZpY2UgZm9yIG5vcm1hbCB1c2VyIGF1dGhlbnRpY2F0aW9uLlxuICogVXNlIHRvIGNoZWNrIGF1dGggc3RhdHVzLCBsb2dpbi9sb2dvdXQgd2l0aCBkaWZmZXJlbnQgT0F1dGggZmxvd3MuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCYXNpY0F1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbGllbnRBdXRoPixcbiAgICBwcm90ZWN0ZWQgdXNlcklkU2VydmljZTogVXNlcklkU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb0F1dGhMaWJXcmFwcGVyU2VydmljZTogT0F1dGhMaWJXcmFwcGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFN0b3JhZ2VTZXJ2aWNlOiBBdXRoU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIENoZWNrIHBhcmFtcyBpbiB1cmwgYW5kIGlmIHRoZXJlIGlzIGFuIGNvZGUvdG9rZW4gdGhlbiB0cnkgdG8gbG9naW4gd2l0aCB0aG9zZS5cbiAgICovXG4gIGFzeW5jIGNoZWNrT0F1dGhQYXJhbXNJblVybCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5vQXV0aExpYldyYXBwZXJTZXJ2aWNlLnRyeUxvZ2luKCk7XG4gICAgICBjb25zdCB0b2tlbiA9IHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgICAgLy8gV2UgZ2V0IHRoZSByZXN1bHQgaW4gdGhlIGNvZGUgZmxvdyBldmVuIGlmIHdlIGRpZCBub3QgbG9nZ2VkIGluIHRoYXQgd2h5IHdlIGFsc28gbmVlZCB0byBjaGVjayBpZiB3ZSBoYXZlIGFjY2Vzc190b2tlblxuICAgICAgaWYgKHJlc3VsdCAmJiB0b2tlbikge1xuICAgICAgICB0aGlzLnVzZXJJZFNlcnZpY2Uuc2V0VXNlcklkKE9DQ19VU0VSX0lEX0NVUlJFTlQpO1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2dpbigpKTtcbiAgICAgICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlZGlyZWN0KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7fVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgSW1wbGljaXQvQXV0aG9yaXphdGlvbiBDb2RlIGZsb3cgYnkgcmVkaXJlY3RpbmcgdG8gT0F1dGggc2VydmVyLlxuICAgKi9cbiAgbG9naW5XaXRoUmVkaXJlY3QoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5vQXV0aExpYldyYXBwZXJTZXJ2aWNlLmluaXRMb2dpbkZsb3coKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIG5ldyB1c2VyIHRva2VuIHdpdGggUmVzb3VyY2UgT3duZXIgUGFzc3dvcmQgRmxvdy5cbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICovXG4gIHB1YmxpYyBhc3luYyBhdXRob3JpemUodXNlcklkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5vQXV0aExpYldyYXBwZXJTZXJ2aWNlLmF1dGhvcml6ZVdpdGhQYXNzd29yZEZsb3coXG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcGFzc3dvcmRcbiAgICAgICk7XG4gICAgICAvLyBPQ0Mgc3BlY2lmaWMgdXNlciBpZCBoYW5kbGluZy4gQ3VzdG9taXplIHdoZW4gaW1wbGVtZW50aW5nIGRpZmZlcmVudCBiYWNrZW5kXG4gICAgICB0aGlzLnVzZXJJZFNlcnZpY2Uuc2V0VXNlcklkKE9DQ19VU0VSX0lEX0NVUlJFTlQpO1xuXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2dpbigpKTtcblxuICAgICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlZGlyZWN0KCk7XG4gICAgfSBjYXRjaCB7fVxuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBhIHN0b3JlZnJvbnQgY3VzdG9tZXIuXG4gICAqL1xuICBwdWJsaWMgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy51c2VySWRTZXJ2aWNlLmNsZWFyVXNlcklkKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLm9BdXRoTGliV3JhcHBlclNlcnZpY2UucmV2b2tlQW5kTG9nb3V0KCkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvZ291dCgpKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluOyBhbmQgYGZhbHNlYCBpZiB0aGUgdXNlciBpcyBhbm9ueW1vdXMuXG4gICAqL1xuICBwdWJsaWMgaXNVc2VyTG9nZ2VkSW4oKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLmdldFRva2VuKCkucGlwZShcbiAgICAgIG1hcCgodXNlclRva2VuKSA9PiBCb29sZWFuKHVzZXJUb2tlbj8uYWNjZXNzX3Rva2VuKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGxvZ291dCBwcm9jZWR1cmUgYnkgcmVkaXJlY3RpbmcgdG8gdGhlIGBsb2dvdXRgIGVuZHBvaW50LlxuICAgKi9cbiAgcHVibGljIGluaXRMb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dvdXQnIH0pO1xuICB9XG59XG4iXX0=