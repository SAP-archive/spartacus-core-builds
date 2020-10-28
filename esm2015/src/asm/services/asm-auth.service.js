import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, from, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { AuthRedirectService } from '../../auth/user-auth/services/auth-redirect.service';
import { BasicAuthService } from '../../auth/user-auth/services/basic-auth.service';
import { OAuthLibWrapperService } from '../../auth/user-auth/services/oauth-lib-wrapper.service';
import { AuthActions } from '../../auth/user-auth/store/actions/index';
import { GlobalMessageService, GlobalMessageType, } from '../../global-message/index';
import { RoutingService } from '../../routing/facade/routing.service';
import { AsmAuthStorageService, TokenTarget } from './asm-auth-storage.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/user-auth/facade/user-id.service";
import * as i3 from "../../auth/user-auth/services/oauth-lib-wrapper.service";
import * as i4 from "./asm-auth-storage.service";
import * as i5 from "../../auth/user-auth/services/auth-redirect.service";
import * as i6 from "../../global-message/facade/global-message.service";
import * as i7 from "../../routing/facade/routing.service";
/**
 * Version of BasicAuthService that is working for both user na CS agent.
 * Overrides BasicAuthService when ASM module is enabled.
 */
export class AsmAuthService extends BasicAuthService {
    constructor(store, userIdService, oAuthLibWrapperService, authStorageService, authRedirectService, globalMessageService, routingService) {
        super(store, userIdService, oAuthLibWrapperService, authStorageService, authRedirectService, routingService);
        this.store = store;
        this.userIdService = userIdService;
        this.oAuthLibWrapperService = oAuthLibWrapperService;
        this.authStorageService = authStorageService;
        this.authRedirectService = authRedirectService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
    }
    canUserLogin() {
        let tokenTarget;
        let token;
        this.authStorageService
            .getToken()
            .subscribe((tok) => (token = tok))
            .unsubscribe();
        this.authStorageService
            .getTokenTarget()
            .subscribe((tokTarget) => (tokenTarget = tokTarget))
            .unsubscribe();
        return !(Boolean(token === null || token === void 0 ? void 0 : token.access_token) && tokenTarget === TokenTarget.CSAgent);
    }
    warnAboutLoggedCSAgent() {
        this.globalMessageService.add({
            key: 'asm.auth.agentLoggedInError',
        }, GlobalMessageType.MSG_TYPE_ERROR);
    }
    /**
     * Loads a new user token with Resource Owner Password Flow when CS agent is not logged in.
     * @param userId
     * @param password
     */
    authorize(userId, password) {
        const _super = Object.create(null, {
            authorize: { get: () => super.authorize }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (this.canUserLogin()) {
                yield _super.authorize.call(this, userId, password);
            }
            else {
                this.warnAboutLoggedCSAgent();
            }
        });
    }
    /**
     * Initialize Implicit/Authorization Code flow by redirecting to OAuth server when CS agent is not logged in.
     */
    loginWithRedirect() {
        if (this.canUserLogin()) {
            super.loginWithRedirect();
            return true;
        }
        else {
            this.warnAboutLoggedCSAgent();
            return false;
        }
    }
    /**
     * Logout a storefront customer.
     */
    logout() {
        return this.userIdService
            .isEmulated()
            .pipe(take(1), switchMap((isEmulated) => {
            if (isEmulated) {
                this.authStorageService.clearEmulatedUserToken();
                this.userIdService.clearUserId();
                this.store.dispatch(new AuthActions.Logout());
                return of(true);
            }
            else {
                return from(super.logout());
            }
        }))
            .toPromise();
    }
    /**
     * Returns `true` if user is logged in or being emulated.
     */
    isUserLoggedIn() {
        return combineLatest([
            this.authStorageService.getToken(),
            this.userIdService.isEmulated(),
            this.authStorageService.getTokenTarget(),
        ]).pipe(map(([token, isEmulated, tokenTarget]) => Boolean(token === null || token === void 0 ? void 0 : token.access_token) &&
            (tokenTarget === TokenTarget.User ||
                (tokenTarget === TokenTarget.CSAgent && isEmulated))));
    }
}
AsmAuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmAuthService_Factory() { return new AsmAuthService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.UserIdService), i0.ɵɵinject(i3.OAuthLibWrapperService), i0.ɵɵinject(i4.AsmAuthStorageService), i0.ɵɵinject(i5.AuthRedirectService), i0.ɵɵinject(i6.GlobalMessageService), i0.ɵɵinject(i7.RoutingService)); }, token: AsmAuthService, providedIn: "root" });
AsmAuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AsmAuthService.ctorParameters = () => [
    { type: Store },
    { type: UserIdService },
    { type: OAuthLibWrapperService },
    { type: AsmAuthStorageService },
    { type: AuthRedirectService },
    { type: GlobalMessageService },
    { type: RoutingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2FzbS9zZXJ2aWNlcy9hc20tYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7Ozs7QUFFaEY7OztHQUdHO0FBSUgsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7SUFDbEQsWUFDWSxLQUFpQyxFQUNqQyxhQUE0QixFQUM1QixzQkFBOEMsRUFDOUMsa0JBQXlDLEVBQ3pDLG1CQUF3QyxFQUN4QyxvQkFBMEMsRUFDMUMsY0FBOEI7UUFFeEMs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LEVBQUU7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRTtTQUN6QyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FDRCxDQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQ25DLE9BQU8sQ0FBQyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsWUFBWSxDQUFDO1lBQzVCLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUMvQixDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQ3pELENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7WUFqSEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUF2QlEsS0FBSztZQUtMLGFBQWE7WUFHYixzQkFBc0I7WUFPdEIscUJBQXFCO1lBVHJCLG1CQUFtQjtZQUsxQixvQkFBb0I7WUFHYixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoVG9rZW4gfSBmcm9tICcuLi8uLi9hdXRoJztcbmltcG9ydCB7IFN0YXRlV2l0aENsaWVudEF1dGggfSBmcm9tICcuLi8uLi9hdXRoL2NsaWVudC1hdXRoL3N0b3JlL2NsaWVudC1hdXRoLXN0YXRlJztcbmltcG9ydCB7IFVzZXJJZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9mYWNhZGUvdXNlci1pZC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhSZWRpcmVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9zZXJ2aWNlcy9hdXRoLXJlZGlyZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzaWNBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvdXNlci1hdXRoL3NlcnZpY2VzL2Jhc2ljLWF1dGguc2VydmljZSc7XG5pbXBvcnQgeyBPQXV0aExpYldyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvc2VydmljZXMvb2F1dGgtbGliLXdyYXBwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uL2F1dGgvdXNlci1hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBBc21BdXRoU3RvcmFnZVNlcnZpY2UsIFRva2VuVGFyZ2V0IH0gZnJvbSAnLi9hc20tYXV0aC1zdG9yYWdlLnNlcnZpY2UnO1xuXG4vKipcbiAqIFZlcnNpb24gb2YgQmFzaWNBdXRoU2VydmljZSB0aGF0IGlzIHdvcmtpbmcgZm9yIGJvdGggdXNlciBuYSBDUyBhZ2VudC5cbiAqIE92ZXJyaWRlcyBCYXNpY0F1dGhTZXJ2aWNlIHdoZW4gQVNNIG1vZHVsZSBpcyBlbmFibGVkLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtQXV0aFNlcnZpY2UgZXh0ZW5kcyBCYXNpY0F1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbGllbnRBdXRoPixcbiAgICBwcm90ZWN0ZWQgdXNlcklkU2VydmljZTogVXNlcklkU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb0F1dGhMaWJXcmFwcGVyU2VydmljZTogT0F1dGhMaWJXcmFwcGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFN0b3JhZ2VTZXJ2aWNlOiBBc21BdXRoU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKFxuICAgICAgc3RvcmUsXG4gICAgICB1c2VySWRTZXJ2aWNlLFxuICAgICAgb0F1dGhMaWJXcmFwcGVyU2VydmljZSxcbiAgICAgIGF1dGhTdG9yYWdlU2VydmljZSxcbiAgICAgIGF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgICByb3V0aW5nU2VydmljZVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2FuVXNlckxvZ2luKCk6IGJvb2xlYW4ge1xuICAgIGxldCB0b2tlblRhcmdldDogVG9rZW5UYXJnZXQ7XG4gICAgbGV0IHRva2VuOiBBdXRoVG9rZW47XG5cbiAgICB0aGlzLmF1dGhTdG9yYWdlU2VydmljZVxuICAgICAgLmdldFRva2VuKClcbiAgICAgIC5zdWJzY3JpYmUoKHRvaykgPT4gKHRva2VuID0gdG9rKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlXG4gICAgICAuZ2V0VG9rZW5UYXJnZXQoKVxuICAgICAgLnN1YnNjcmliZSgodG9rVGFyZ2V0KSA9PiAodG9rZW5UYXJnZXQgPSB0b2tUYXJnZXQpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuICEoXG4gICAgICBCb29sZWFuKHRva2VuPy5hY2Nlc3NfdG9rZW4pICYmIHRva2VuVGFyZ2V0ID09PSBUb2tlblRhcmdldC5DU0FnZW50XG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB3YXJuQWJvdXRMb2dnZWRDU0FnZW50KCk6IHZvaWQge1xuICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAge1xuICAgICAgICBrZXk6ICdhc20uYXV0aC5hZ2VudExvZ2dlZEluRXJyb3InLFxuICAgICAgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIG5ldyB1c2VyIHRva2VuIHdpdGggUmVzb3VyY2UgT3duZXIgUGFzc3dvcmQgRmxvdyB3aGVuIENTIGFnZW50IGlzIG5vdCBsb2dnZWQgaW4uXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgYXV0aG9yaXplKHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuY2FuVXNlckxvZ2luKCkpIHtcbiAgICAgIGF3YWl0IHN1cGVyLmF1dGhvcml6ZSh1c2VySWQsIHBhc3N3b3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53YXJuQWJvdXRMb2dnZWRDU0FnZW50KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgSW1wbGljaXQvQXV0aG9yaXphdGlvbiBDb2RlIGZsb3cgYnkgcmVkaXJlY3RpbmcgdG8gT0F1dGggc2VydmVyIHdoZW4gQ1MgYWdlbnQgaXMgbm90IGxvZ2dlZCBpbi5cbiAgICovXG4gIHB1YmxpYyBsb2dpbldpdGhSZWRpcmVjdCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jYW5Vc2VyTG9naW4oKSkge1xuICAgICAgc3VwZXIubG9naW5XaXRoUmVkaXJlY3QoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhcm5BYm91dExvZ2dlZENTQWdlbnQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0IGEgc3RvcmVmcm9udCBjdXN0b21lci5cbiAgICovXG4gIHB1YmxpYyBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy51c2VySWRTZXJ2aWNlXG4gICAgICAuaXNFbXVsYXRlZCgpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgc3dpdGNoTWFwKChpc0VtdWxhdGVkKSA9PiB7XG4gICAgICAgICAgaWYgKGlzRW11bGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLmNsZWFyRW11bGF0ZWRVc2VyVG9rZW4oKTtcbiAgICAgICAgICAgIHRoaXMudXNlcklkU2VydmljZS5jbGVhclVzZXJJZCgpO1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9nb3V0KCkpO1xuICAgICAgICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShzdXBlci5sb2dvdXQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHVzZXIgaXMgbG9nZ2VkIGluIG9yIGJlaW5nIGVtdWxhdGVkLlxuICAgKi9cbiAgcHVibGljIGlzVXNlckxvZ2dlZEluKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLmdldFRva2VuKCksXG4gICAgICB0aGlzLnVzZXJJZFNlcnZpY2UuaXNFbXVsYXRlZCgpLFxuICAgICAgdGhpcy5hdXRoU3RvcmFnZVNlcnZpY2UuZ2V0VG9rZW5UYXJnZXQoKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW3Rva2VuLCBpc0VtdWxhdGVkLCB0b2tlblRhcmdldF0pID0+XG4gICAgICAgICAgQm9vbGVhbih0b2tlbj8uYWNjZXNzX3Rva2VuKSAmJlxuICAgICAgICAgICh0b2tlblRhcmdldCA9PT0gVG9rZW5UYXJnZXQuVXNlciB8fFxuICAgICAgICAgICAgKHRva2VuVGFyZ2V0ID09PSBUb2tlblRhcmdldC5DU0FnZW50ICYmIGlzRW11bGF0ZWQpKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==