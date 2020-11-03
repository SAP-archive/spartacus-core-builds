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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC91c2VyLWF1dGgvZmFjYWRlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7QUFFbEQ7OztHQUdHO0FBSUgsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFDWSxLQUFpQyxFQUNqQyxhQUE0QixFQUM1QixzQkFBOEMsRUFDOUMsa0JBQXNDLEVBQ3RDLG1CQUF3QyxFQUN4QyxjQUE4QjtRQUw5QixVQUFLLEdBQUwsS0FBSyxDQUE0QjtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdkMsQ0FBQztJQUVKOztPQUVHO0lBQ0cscUJBQXFCOztZQUN6QixJQUFJO2dCQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM1RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM5RCx5SEFBeUg7Z0JBQ3pILElBQUksTUFBTSxJQUFJLEtBQUssRUFBRTtvQkFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQzthQUNGO1lBQUMsV0FBTSxHQUFFO1FBQ1osQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUI7UUFDZixJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNVLFNBQVMsQ0FBQyxNQUFjLEVBQUUsUUFBZ0I7O1lBQ3JELElBQUk7Z0JBQ0YsTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMseUJBQXlCLENBQ3pELE1BQU0sRUFDTixRQUFRLENBQ1QsQ0FBQztnQkFDRiwrRUFBK0U7Z0JBQy9FLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBRWxELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBRTdDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQztZQUFDLFdBQU0sR0FBRTtRQUNaLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ0ksTUFBTTtRQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO2dCQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxjQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLFlBQVksQ0FBQyxDQUFDLEVBQ3BELG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O1lBckZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBbEJRLEtBQUs7WUFVTCxhQUFhO1lBRmIsc0JBQXNCO1lBRHRCLGtCQUFrQjtZQURsQixtQkFBbUI7WUFGbkIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDbGllbnRBdXRoIH0gZnJvbSAnLi4vLi4vY2xpZW50LWF1dGgvc3RvcmUvY2xpZW50LWF1dGgtc3RhdGUnO1xuaW1wb3J0IHsgQXV0aFJlZGlyZWN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGgtcmVkaXJlY3Quc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBPQXV0aExpYldyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvb2F1dGgtbGliLXdyYXBwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcklkU2VydmljZSB9IGZyb20gJy4vdXNlci1pZC5zZXJ2aWNlJztcblxuLyoqXG4gKiBBdXRoIHNlcnZpY2UgZm9yIG5vcm1hbCB1c2VyIGF1dGhlbnRpY2F0aW9uLlxuICogVXNlIHRvIGNoZWNrIGF1dGggc3RhdHVzLCBsb2dpbi9sb2dvdXQgd2l0aCBkaWZmZXJlbnQgT0F1dGggZmxvd3MuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2xpZW50QXV0aD4sXG4gICAgcHJvdGVjdGVkIHVzZXJJZFNlcnZpY2U6IFVzZXJJZFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG9BdXRoTGliV3JhcHBlclNlcnZpY2U6IE9BdXRoTGliV3JhcHBlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTdG9yYWdlU2VydmljZTogQXV0aFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBDaGVjayBwYXJhbXMgaW4gdXJsIGFuZCBpZiB0aGVyZSBpcyBhbiBjb2RlL3Rva2VuIHRoZW4gdHJ5IHRvIGxvZ2luIHdpdGggdGhvc2UuXG4gICAqL1xuICBhc3luYyBjaGVja09BdXRoUGFyYW1zSW5VcmwoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMub0F1dGhMaWJXcmFwcGVyU2VydmljZS50cnlMb2dpbigpO1xuICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmF1dGhTdG9yYWdlU2VydmljZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICAgIC8vIFdlIGdldCB0aGUgcmVzdWx0IGluIHRoZSBjb2RlIGZsb3cgZXZlbiBpZiB3ZSBkaWQgbm90IGxvZ2dlZCBpbiB0aGF0IHdoeSB3ZSBhbHNvIG5lZWQgdG8gY2hlY2sgaWYgd2UgaGF2ZSBhY2Nlc3NfdG9rZW5cbiAgICAgIGlmIChyZXN1bHQgJiYgdG9rZW4pIHtcbiAgICAgICAgdGhpcy51c2VySWRTZXJ2aWNlLnNldFVzZXJJZChPQ0NfVVNFUl9JRF9DVVJSRU5UKTtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9naW4oKSk7XG4gICAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZWRpcmVjdCgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge31cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIEltcGxpY2l0L0F1dGhvcml6YXRpb24gQ29kZSBmbG93IGJ5IHJlZGlyZWN0aW5nIHRvIE9BdXRoIHNlcnZlci5cbiAgICovXG4gIGxvZ2luV2l0aFJlZGlyZWN0KCk6IGJvb2xlYW4ge1xuICAgIHRoaXMub0F1dGhMaWJXcmFwcGVyU2VydmljZS5pbml0TG9naW5GbG93KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgYSBuZXcgdXNlciB0b2tlbiB3aXRoIFJlc291cmNlIE93bmVyIFBhc3N3b3JkIEZsb3cuXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgYXV0aG9yaXplKHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMub0F1dGhMaWJXcmFwcGVyU2VydmljZS5hdXRob3JpemVXaXRoUGFzc3dvcmRGbG93KFxuICAgICAgICB1c2VySWQsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICApO1xuICAgICAgLy8gT0NDIHNwZWNpZmljIHVzZXIgaWQgaGFuZGxpbmcuIEN1c3RvbWl6ZSB3aGVuIGltcGxlbWVudGluZyBkaWZmZXJlbnQgYmFja2VuZFxuICAgICAgdGhpcy51c2VySWRTZXJ2aWNlLnNldFVzZXJJZChPQ0NfVVNFUl9JRF9DVVJSRU5UKTtcblxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9naW4oKSk7XG5cbiAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZWRpcmVjdCgpO1xuICAgIH0gY2F0Y2gge31cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgYSBzdG9yZWZyb250IGN1c3RvbWVyLlxuICAgKi9cbiAgcHVibGljIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHRoaXMudXNlcklkU2VydmljZS5jbGVhclVzZXJJZCgpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5vQXV0aExpYldyYXBwZXJTZXJ2aWNlLnJldm9rZUFuZExvZ291dCgpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2dvdXQoKSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbjsgYW5kIGBmYWxzZWAgaWYgdGhlIHVzZXIgaXMgYW5vbnltb3VzLlxuICAgKi9cbiAgcHVibGljIGlzVXNlckxvZ2dlZEluKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTdG9yYWdlU2VydmljZS5nZXRUb2tlbigpLnBpcGUoXG4gICAgICBtYXAoKHVzZXJUb2tlbikgPT4gQm9vbGVhbih1c2VyVG9rZW4/LmFjY2Vzc190b2tlbikpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBsb2dvdXQgcHJvY2VkdXJlIGJ5IHJlZGlyZWN0aW5nIHRvIHRoZSBgbG9nb3V0YCBlbmRwb2ludC5cbiAgICovXG4gIHB1YmxpYyBpbml0TG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9nb3V0JyB9KTtcbiAgfVxufVxuIl19