import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { OCC_USER_ID_CURRENT } from '../../../occ/utils/occ-constants';
import { RoutingService } from '../../../routing/facade/routing.service';
import { AuthRedirectService } from '../services/auth-redirect.service';
import { AuthStorageService } from '../services/auth-storage.service';
import { OAuthLibWrapperService } from '../services/oauth-lib-wrapper.service';
import { AuthActions } from '../store/actions/index';
import { UserIdService } from './user-id.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "./user-id.service";
import * as i3 from "../services/oauth-lib-wrapper.service";
import * as i4 from "../services/auth-storage.service";
import * as i5 from "../services/auth-redirect.service";
import * as i6 from "../../../routing/facade/routing.service";
/**
 * Auth service for normal user authentication.
 * Use to check auth status, login/logout with different OAuth flows.
 */
export class AuthService {
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
    loginWithCredentials(userId, password) {
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
     * Revokes tokens and clears state for logged user (tokens, userId).
     * To perform logout it is best to use `logout` method. Use this method with caution.
     */
    coreLogout() {
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
     * Logout a storefront customer. It will initialize logout procedure by redirecting to the `logout` endpoint.
     */
    logout() {
        this.routingService.go({ cxRoute: 'logout' });
    }
}
AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.UserIdService), i0.ɵɵinject(i3.OAuthLibWrapperService), i0.ɵɵinject(i4.AuthStorageService), i0.ɵɵinject(i5.AuthRedirectService), i0.ɵɵinject(i6.RoutingService)); }, token: AuthService, providedIn: "root" });
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AuthService.ctorParameters = () => [
    { type: Store },
    { type: UserIdService },
    { type: OAuthLibWrapperService },
    { type: AuthStorageService },
    { type: AuthRedirectService },
    { type: RoutingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC91c2VyLWF1dGgvZmFjYWRlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7QUFFbEQ7OztHQUdHO0FBSUgsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFDWSxLQUFpQyxFQUNqQyxhQUE0QixFQUM1QixzQkFBOEMsRUFDOUMsa0JBQXNDLEVBQ3RDLG1CQUF3QyxFQUN4QyxjQUE4QjtRQUw5QixVQUFLLEdBQUwsS0FBSyxDQUE0QjtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdkMsQ0FBQztJQUVKOztPQUVHO0lBQ0cscUJBQXFCOztZQUN6QixJQUFJO2dCQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM1RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM5RCx5SEFBeUg7Z0JBQ3pILElBQUksTUFBTSxJQUFJLEtBQUssRUFBRTtvQkFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQzthQUNGO1lBQUMsV0FBTSxHQUFFO1FBQ1osQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUI7UUFDZixJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNHLG9CQUFvQixDQUFDLE1BQWMsRUFBRSxRQUFnQjs7WUFDekQsSUFBSTtnQkFDRixNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FDekQsTUFBTSxFQUNOLFFBQVEsQ0FDVCxDQUFDO2dCQUNGLCtFQUErRTtnQkFDL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFFbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFFN0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JDO1lBQUMsV0FBTSxHQUFFO1FBQ1osQ0FBQztLQUFBO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVTtRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO2dCQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsWUFBWSxDQUFDLENBQUMsRUFDcEQsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7WUF0RkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFsQlEsS0FBSztZQVVMLGFBQWE7WUFGYixzQkFBc0I7WUFEdEIsa0JBQWtCO1lBRGxCLG1CQUFtQjtZQUZuQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRlV2l0aENsaWVudEF1dGggfSBmcm9tICcuLi8uLi9jbGllbnQtYXV0aC9zdG9yZS9jbGllbnQtYXV0aC1zdGF0ZSc7XG5pbXBvcnQgeyBBdXRoUmVkaXJlY3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC1yZWRpcmVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGgtc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9BdXRoTGliV3JhcHBlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9vYXV0aC1saWItd3JhcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2VySWRTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLWlkLnNlcnZpY2UnO1xuXG4vKipcbiAqIEF1dGggc2VydmljZSBmb3Igbm9ybWFsIHVzZXIgYXV0aGVudGljYXRpb24uXG4gKiBVc2UgdG8gY2hlY2sgYXV0aCBzdGF0dXMsIGxvZ2luL2xvZ291dCB3aXRoIGRpZmZlcmVudCBPQXV0aCBmbG93cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbGllbnRBdXRoPixcbiAgICBwcm90ZWN0ZWQgdXNlcklkU2VydmljZTogVXNlcklkU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb0F1dGhMaWJXcmFwcGVyU2VydmljZTogT0F1dGhMaWJXcmFwcGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFN0b3JhZ2VTZXJ2aWNlOiBBdXRoU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIENoZWNrIHBhcmFtcyBpbiB1cmwgYW5kIGlmIHRoZXJlIGlzIGFuIGNvZGUvdG9rZW4gdGhlbiB0cnkgdG8gbG9naW4gd2l0aCB0aG9zZS5cbiAgICovXG4gIGFzeW5jIGNoZWNrT0F1dGhQYXJhbXNJblVybCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5vQXV0aExpYldyYXBwZXJTZXJ2aWNlLnRyeUxvZ2luKCk7XG4gICAgICBjb25zdCB0b2tlbiA9IHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgICAgLy8gV2UgZ2V0IHRoZSByZXN1bHQgaW4gdGhlIGNvZGUgZmxvdyBldmVuIGlmIHdlIGRpZCBub3QgbG9nZ2VkIGluIHRoYXQgd2h5IHdlIGFsc28gbmVlZCB0byBjaGVjayBpZiB3ZSBoYXZlIGFjY2Vzc190b2tlblxuICAgICAgaWYgKHJlc3VsdCAmJiB0b2tlbikge1xuICAgICAgICB0aGlzLnVzZXJJZFNlcnZpY2Uuc2V0VXNlcklkKE9DQ19VU0VSX0lEX0NVUlJFTlQpO1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2dpbigpKTtcbiAgICAgICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlZGlyZWN0KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7fVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgSW1wbGljaXQvQXV0aG9yaXphdGlvbiBDb2RlIGZsb3cgYnkgcmVkaXJlY3RpbmcgdG8gT0F1dGggc2VydmVyLlxuICAgKi9cbiAgbG9naW5XaXRoUmVkaXJlY3QoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5vQXV0aExpYldyYXBwZXJTZXJ2aWNlLmluaXRMb2dpbkZsb3coKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIG5ldyB1c2VyIHRva2VuIHdpdGggUmVzb3VyY2UgT3duZXIgUGFzc3dvcmQgRmxvdy5cbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICovXG4gIGFzeW5jIGxvZ2luV2l0aENyZWRlbnRpYWxzKHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMub0F1dGhMaWJXcmFwcGVyU2VydmljZS5hdXRob3JpemVXaXRoUGFzc3dvcmRGbG93KFxuICAgICAgICB1c2VySWQsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICApO1xuICAgICAgLy8gT0NDIHNwZWNpZmljIHVzZXIgaWQgaGFuZGxpbmcuIEN1c3RvbWl6ZSB3aGVuIGltcGxlbWVudGluZyBkaWZmZXJlbnQgYmFja2VuZFxuICAgICAgdGhpcy51c2VySWRTZXJ2aWNlLnNldFVzZXJJZChPQ0NfVVNFUl9JRF9DVVJSRU5UKTtcblxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9naW4oKSk7XG5cbiAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZWRpcmVjdCgpO1xuICAgIH0gY2F0Y2gge31cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXZva2VzIHRva2VucyBhbmQgY2xlYXJzIHN0YXRlIGZvciBsb2dnZWQgdXNlciAodG9rZW5zLCB1c2VySWQpLlxuICAgKiBUbyBwZXJmb3JtIGxvZ291dCBpdCBpcyBiZXN0IHRvIHVzZSBgbG9nb3V0YCBtZXRob2QuIFVzZSB0aGlzIG1ldGhvZCB3aXRoIGNhdXRpb24uXG4gICAqL1xuICBjb3JlTG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy51c2VySWRTZXJ2aWNlLmNsZWFyVXNlcklkKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLm9BdXRoTGliV3JhcHBlclNlcnZpY2UucmV2b2tlQW5kTG9nb3V0KCkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvZ291dCgpKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluOyBhbmQgYGZhbHNlYCBpZiB0aGUgdXNlciBpcyBhbm9ueW1vdXMuXG4gICAqL1xuICBpc1VzZXJMb2dnZWRJbigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU3RvcmFnZVNlcnZpY2UuZ2V0VG9rZW4oKS5waXBlKFxuICAgICAgbWFwKCh1c2VyVG9rZW4pID0+IEJvb2xlYW4odXNlclRva2VuPy5hY2Nlc3NfdG9rZW4pKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBhIHN0b3JlZnJvbnQgY3VzdG9tZXIuIEl0IHdpbGwgaW5pdGlhbGl6ZSBsb2dvdXQgcHJvY2VkdXJlIGJ5IHJlZGlyZWN0aW5nIHRvIHRoZSBgbG9nb3V0YCBlbmRwb2ludC5cbiAgICovXG4gIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ291dCcgfSk7XG4gIH1cbn1cbiJdfQ==