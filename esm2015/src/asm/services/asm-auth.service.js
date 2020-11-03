import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, from, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../../auth/user-auth/facade/auth.service';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { AuthRedirectService } from '../../auth/user-auth/services/auth-redirect.service';
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
 * Version of AuthService that is working for both user na CS agent.
 * Overrides AuthService when ASM module is enabled.
 */
export class AsmAuthService extends AuthService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2FzbS9zZXJ2aWNlcy9hc20tYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDakcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7O0FBRWhGOzs7R0FHRztBQUlILE1BQU0sT0FBTyxjQUFlLFNBQVEsV0FBVztJQUM3QyxZQUNZLEtBQWlDLEVBQ2pDLGFBQTRCLEVBQzVCLHNCQUE4QyxFQUM5QyxrQkFBeUMsRUFDekMsbUJBQXdDLEVBQ3hDLG9CQUEwQyxFQUMxQyxjQUE4QjtRQUV4QyxLQUFL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RTtZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxFQUFFO1NBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUNELENBQUMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FDbkMsT0FBTyxDQUFDLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxZQUFZLENBQUM7WUFDNUIsQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQy9CLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsQ0FDekQsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztZQWpIRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXZCUSxLQUFLO1lBS0wsYUFBYTtZQUdiLHNCQUFzQjtZQU90QixxQkFBcUI7WUFSckIsbUJBQW1CO1lBSTFCLG9CQUFvQjtZQUdiLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0YXRlV2l0aENsaWVudEF1dGggfSBmcm9tICcuLi8uLi9hdXRoL2NsaWVudC1hdXRoL3N0b3JlL2NsaWVudC1hdXRoLXN0YXRlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBVc2VySWRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvZmFjYWRlL3VzZXItaWQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoVG9rZW4gfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9tb2RlbHMvYXV0aC10b2tlbi5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoUmVkaXJlY3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvc2VydmljZXMvYXV0aC1yZWRpcmVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IE9BdXRoTGliV3JhcHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9zZXJ2aWNlcy9vYXV0aC1saWItd3JhcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFzbUF1dGhTdG9yYWdlU2VydmljZSwgVG9rZW5UYXJnZXQgfSBmcm9tICcuL2FzbS1hdXRoLXN0b3JhZ2Uuc2VydmljZSc7XG5cbi8qKlxuICogVmVyc2lvbiBvZiBBdXRoU2VydmljZSB0aGF0IGlzIHdvcmtpbmcgZm9yIGJvdGggdXNlciBuYSBDUyBhZ2VudC5cbiAqIE92ZXJyaWRlcyBBdXRoU2VydmljZSB3aGVuIEFTTSBtb2R1bGUgaXMgZW5hYmxlZC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbUF1dGhTZXJ2aWNlIGV4dGVuZHMgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aENsaWVudEF1dGg+LFxuICAgIHByb3RlY3RlZCB1c2VySWRTZXJ2aWNlOiBVc2VySWRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBvQXV0aExpYldyYXBwZXJTZXJ2aWNlOiBPQXV0aExpYldyYXBwZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU3RvcmFnZVNlcnZpY2U6IEFzbUF1dGhTdG9yYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoXG4gICAgICBzdG9yZSxcbiAgICAgIHVzZXJJZFNlcnZpY2UsXG4gICAgICBvQXV0aExpYldyYXBwZXJTZXJ2aWNlLFxuICAgICAgYXV0aFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgYXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICAgIHJvdXRpbmdTZXJ2aWNlXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjYW5Vc2VyTG9naW4oKTogYm9vbGVhbiB7XG4gICAgbGV0IHRva2VuVGFyZ2V0OiBUb2tlblRhcmdldDtcbiAgICBsZXQgdG9rZW46IEF1dGhUb2tlbjtcblxuICAgIHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlXG4gICAgICAuZ2V0VG9rZW4oKVxuICAgICAgLnN1YnNjcmliZSgodG9rKSA9PiAodG9rZW4gPSB0b2spKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5hdXRoU3RvcmFnZVNlcnZpY2VcbiAgICAgIC5nZXRUb2tlblRhcmdldCgpXG4gICAgICAuc3Vic2NyaWJlKCh0b2tUYXJnZXQpID0+ICh0b2tlblRhcmdldCA9IHRva1RhcmdldCkpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gIShcbiAgICAgIEJvb2xlYW4odG9rZW4/LmFjY2Vzc190b2tlbikgJiYgdG9rZW5UYXJnZXQgPT09IFRva2VuVGFyZ2V0LkNTQWdlbnRcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdhcm5BYm91dExvZ2dlZENTQWdlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ2FzbS5hdXRoLmFnZW50TG9nZ2VkSW5FcnJvcicsXG4gICAgICB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgbmV3IHVzZXIgdG9rZW4gd2l0aCBSZXNvdXJjZSBPd25lciBQYXNzd29yZCBGbG93IHdoZW4gQ1MgYWdlbnQgaXMgbm90IGxvZ2dlZCBpbi5cbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICovXG4gIHB1YmxpYyBhc3luYyBhdXRob3JpemUodXNlcklkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5jYW5Vc2VyTG9naW4oKSkge1xuICAgICAgYXdhaXQgc3VwZXIuYXV0aG9yaXplKHVzZXJJZCwgcGFzc3dvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhcm5BYm91dExvZ2dlZENTQWdlbnQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBJbXBsaWNpdC9BdXRob3JpemF0aW9uIENvZGUgZmxvdyBieSByZWRpcmVjdGluZyB0byBPQXV0aCBzZXJ2ZXIgd2hlbiBDUyBhZ2VudCBpcyBub3QgbG9nZ2VkIGluLlxuICAgKi9cbiAgcHVibGljIGxvZ2luV2l0aFJlZGlyZWN0KCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhblVzZXJMb2dpbigpKSB7XG4gICAgICBzdXBlci5sb2dpbldpdGhSZWRpcmVjdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2FybkFib3V0TG9nZ2VkQ1NBZ2VudCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgYSBzdG9yZWZyb250IGN1c3RvbWVyLlxuICAgKi9cbiAgcHVibGljIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJJZFNlcnZpY2VcbiAgICAgIC5pc0VtdWxhdGVkKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBzd2l0Y2hNYXAoKGlzRW11bGF0ZWQpID0+IHtcbiAgICAgICAgICBpZiAoaXNFbXVsYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5hdXRoU3RvcmFnZVNlcnZpY2UuY2xlYXJFbXVsYXRlZFVzZXJUb2tlbigpO1xuICAgICAgICAgICAgdGhpcy51c2VySWRTZXJ2aWNlLmNsZWFyVXNlcklkKCk7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2dvdXQoKSk7XG4gICAgICAgICAgICByZXR1cm4gb2YodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKHN1cGVyLmxvZ291dCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAudG9Qcm9taXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdXNlciBpcyBsb2dnZWQgaW4gb3IgYmVpbmcgZW11bGF0ZWQuXG4gICAqL1xuICBwdWJsaWMgaXNVc2VyTG9nZ2VkSW4oKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5hdXRoU3RvcmFnZVNlcnZpY2UuZ2V0VG9rZW4oKSxcbiAgICAgIHRoaXMudXNlcklkU2VydmljZS5pc0VtdWxhdGVkKCksXG4gICAgICB0aGlzLmF1dGhTdG9yYWdlU2VydmljZS5nZXRUb2tlblRhcmdldCgpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbdG9rZW4sIGlzRW11bGF0ZWQsIHRva2VuVGFyZ2V0XSkgPT5cbiAgICAgICAgICBCb29sZWFuKHRva2VuPy5hY2Nlc3NfdG9rZW4pICYmXG4gICAgICAgICAgKHRva2VuVGFyZ2V0ID09PSBUb2tlblRhcmdldC5Vc2VyIHx8XG4gICAgICAgICAgICAodG9rZW5UYXJnZXQgPT09IFRva2VuVGFyZ2V0LkNTQWdlbnQgJiYgaXNFbXVsYXRlZCkpXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19