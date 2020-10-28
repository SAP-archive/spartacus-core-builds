import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../auth/user-auth/facade/auth.service';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { OAuthLibWrapperService } from '../../auth/user-auth/services/oauth-lib-wrapper.service';
import { AuthActions } from '../../auth/user-auth/store/actions';
import { OCC_USER_ID_ANONYMOUS, OCC_USER_ID_CURRENT, } from '../../occ/utils/occ-constants';
import { UserService } from '../../user/facade/user.service';
import { AsmAuthStorageService, TokenTarget, } from '../services/asm-auth-storage.service';
import { AsmActions } from '../store/actions';
import * as i0 from "@angular/core";
import * as i1 from "../../auth/user-auth/facade/auth.service";
import * as i2 from "../services/asm-auth-storage.service";
import * as i3 from "../../auth/user-auth/facade/user-id.service";
import * as i4 from "../../auth/user-auth/services/oauth-lib-wrapper.service";
import * as i5 from "@ngrx/store";
import * as i6 from "../../user/facade/user.service";
/**
 * Auth service for CS agent. Useful to login/logout agent, start emulation
 * or get information about the status of emulation.
 */
export class CsAgentAuthService {
    constructor(authService, authStorageService, userIdService, oAuthLibWrapperService, store, userService) {
        this.authService = authService;
        this.authStorageService = authStorageService;
        this.userIdService = userIdService;
        this.oAuthLibWrapperService = oAuthLibWrapperService;
        this.store = store;
        this.userService = userService;
    }
    /**
     * Loads access token for a customer support agent.
     * @param userId
     * @param password
     */
    authorizeCustomerSupportAgent(userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let userToken;
            this.authStorageService
                .getToken()
                .subscribe((token) => (userToken = token))
                .unsubscribe();
            this.authStorageService.switchTokenTargetToCSAgent();
            try {
                yield this.oAuthLibWrapperService.authorizeWithPasswordFlow(userId, password);
                // Start emulation for currently logged in user
                let customerId;
                this.userService
                    .get()
                    .subscribe((user) => (customerId = user === null || user === void 0 ? void 0 : user.customerId))
                    .unsubscribe();
                this.store.dispatch(new AuthActions.Logout());
                if (Boolean(customerId)) {
                    // OCC specific user id handling. Customize when implementing different backend
                    this.userIdService.setUserId(customerId);
                    this.authStorageService.setEmulatedUserToken(userToken);
                    this.store.dispatch(new AuthActions.Login());
                }
                else {
                    // When we can't get the customerId just end all current sessions
                    this.userIdService.setUserId(OCC_USER_ID_ANONYMOUS);
                    this.authStorageService.clearEmulatedUserToken();
                }
            }
            catch (_a) {
                this.authStorageService.switchTokenTargetToUser();
            }
        });
    }
    /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stopped by calling logout().
     * @param customerId
     */
    startCustomerEmulationSession(customerId) {
        this.authStorageService.clearEmulatedUserToken();
        // OCC specific user id handling. Customize when implementing different backend
        this.store.dispatch(new AuthActions.Logout());
        this.userIdService.setUserId(customerId);
        this.store.dispatch(new AuthActions.Login());
    }
    /**
     * Check if CS agent is currently logged in.
     *
     * @returns observable emitting true when CS agent is logged in or false when not.
     */
    isCustomerSupportAgentLoggedIn() {
        return combineLatest([
            this.authStorageService.getToken(),
            this.authStorageService.getTokenTarget(),
        ]).pipe(map(([token, tokenTarget]) => Boolean((token === null || token === void 0 ? void 0 : token.access_token) && tokenTarget === TokenTarget.CSAgent)));
    }
    /**
     * Utility function to determine if customer is emulated.
     *
     * @returns observable emitting true when there is active emulation session or false when not.
     */
    isCustomerEmulated() {
        return this.userIdService.isEmulated();
    }
    /**
     * Returns the customer support agent's token loading status
     */
    getCustomerSupportAgentTokenLoading() {
        // TODO(#8248): Create new loading state outside of store
        return of(false);
    }
    /**
     * Logout a customer support agent.
     */
    logoutCustomerSupportAgent() {
        return __awaiter(this, void 0, void 0, function* () {
            const emulatedToken = this.authStorageService.getEmulatedUserToken();
            let isCustomerEmulated;
            this.userIdService
                .isEmulated()
                .subscribe((emulated) => (isCustomerEmulated = emulated))
                .unsubscribe();
            yield this.oAuthLibWrapperService.revokeAndLogout();
            this.store.dispatch(new AsmActions.LogoutCustomerSupportAgent());
            this.authStorageService.setTokenTarget(TokenTarget.User);
            if (isCustomerEmulated && emulatedToken) {
                this.store.dispatch(new AuthActions.Logout());
                this.authStorageService.setToken(emulatedToken);
                this.userIdService.setUserId(OCC_USER_ID_CURRENT);
                this.authStorageService.clearEmulatedUserToken();
                this.store.dispatch(new AuthActions.Login());
            }
            else {
                this.authService.initLogout();
            }
        });
    }
}
CsAgentAuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CsAgentAuthService_Factory() { return new CsAgentAuthService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.AsmAuthStorageService), i0.ɵɵinject(i3.UserIdService), i0.ɵɵinject(i4.OAuthLibWrapperService), i0.ɵɵinject(i5.Store), i0.ɵɵinject(i6.UserService)); }, token: CsAgentAuthService, providedIn: "root" });
CsAgentAuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CsAgentAuthService.ctorParameters = () => [
    { type: AuthService },
    { type: AsmAuthStorageService },
    { type: UserIdService },
    { type: OAuthLibWrapperService },
    { type: Store },
    { type: UserService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9hc20vZmFjYWRlL2NzYWdlbnQtYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDakcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pFLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsbUJBQW1CLEdBQ3BCLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsV0FBVyxHQUNaLE1BQU0sc0NBQXNDLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7OztBQUc5Qzs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQ1ksV0FBd0IsRUFDeEIsa0JBQXlDLEVBQ3pDLGFBQTRCLEVBQzVCLHNCQUE4QyxFQUM5QyxLQUEwQixFQUMxQixXQUF3QjtRQUx4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBQ3pDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOzs7O09BSUc7SUFDRyw2QkFBNkIsQ0FDakMsTUFBYyxFQUNkLFFBQWdCOztZQUVoQixJQUFJLFNBQVMsQ0FBQztZQUNkLElBQUksQ0FBQyxrQkFBa0I7aUJBQ3BCLFFBQVEsRUFBRTtpQkFDVixTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO2lCQUN6QyxXQUFXLEVBQUUsQ0FBQztZQUVqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUNyRCxJQUFJO2dCQUNGLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLHlCQUF5QixDQUN6RCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUM7Z0JBQ0YsK0NBQStDO2dCQUMvQyxJQUFJLFVBQWtCLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxXQUFXO3FCQUNiLEdBQUcsRUFBRTtxQkFDTCxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxVQUFVLENBQUMsQ0FBQztxQkFDcEQsV0FBVyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBRTlDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUN2QiwrRUFBK0U7b0JBQy9FLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQzlDO3FCQUFNO29CQUNMLGlFQUFpRTtvQkFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixFQUFFLENBQUM7aUJBQ2xEO2FBQ0Y7WUFBQyxXQUFNO2dCQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO2FBQ25EO1FBQ0gsQ0FBQztLQUFBO0lBRUQ7Ozs7T0FJRztJQUNJLDZCQUE2QixDQUFDLFVBQWtCO1FBQ3JELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBRWpELCtFQUErRTtRQUMvRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSw4QkFBOEI7UUFDbkMsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxFQUFFO1NBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUMzQixPQUFPLENBQUMsQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsWUFBWSxLQUFJLFdBQVcsS0FBSyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQ3BFLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksa0JBQWtCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxtQ0FBbUM7UUFDeEMseURBQXlEO1FBQ3pELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUNHLDBCQUEwQjs7WUFDOUIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFFckUsSUFBSSxrQkFBa0IsQ0FBQztZQUN2QixJQUFJLENBQUMsYUFBYTtpQkFDZixVQUFVLEVBQUU7aUJBQ1osU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxDQUFDO2lCQUN4RCxXQUFXLEVBQUUsQ0FBQztZQUVqQixNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUVwRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFekQsSUFBSSxrQkFBa0IsSUFBSSxhQUFhLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDO0tBQUE7Ozs7WUFsSUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUF0QlEsV0FBVztZQVVsQixxQkFBcUI7WUFUZCxhQUFhO1lBQ2Isc0JBQXNCO1lBTHRCLEtBQUs7WUFXTCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJJZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9mYWNhZGUvdXNlci1pZC5zZXJ2aWNlJztcbmltcG9ydCB7IE9BdXRoTGliV3JhcHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9zZXJ2aWNlcy9vYXV0aC1saWItd3JhcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQge1xuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIE9DQ19VU0VSX0lEX0NVUlJFTlQsXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXNlci9mYWNhZGUvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEFzbUF1dGhTdG9yYWdlU2VydmljZSxcbiAgVG9rZW5UYXJnZXQsXG59IGZyb20gJy4uL3NlcnZpY2VzL2FzbS1hdXRoLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBc21BY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBc20gfSBmcm9tICcuLi9zdG9yZS9hc20tc3RhdGUnO1xuXG4vKipcbiAqIEF1dGggc2VydmljZSBmb3IgQ1MgYWdlbnQuIFVzZWZ1bCB0byBsb2dpbi9sb2dvdXQgYWdlbnQsIHN0YXJ0IGVtdWxhdGlvblxuICogb3IgZ2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGF0dXMgb2YgZW11bGF0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3NBZ2VudEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFN0b3JhZ2VTZXJ2aWNlOiBBc21BdXRoU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJJZFNlcnZpY2U6IFVzZXJJZFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG9BdXRoTGliV3JhcHBlclNlcnZpY2U6IE9BdXRoTGliV3JhcHBlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBc20+LFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhY2Nlc3MgdG9rZW4gZm9yIGEgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudC5cbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICovXG4gIGFzeW5jIGF1dGhvcml6ZUN1c3RvbWVyU3VwcG9ydEFnZW50KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmdcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHVzZXJUb2tlbjtcbiAgICB0aGlzLmF1dGhTdG9yYWdlU2VydmljZVxuICAgICAgLmdldFRva2VuKClcbiAgICAgIC5zdWJzY3JpYmUoKHRva2VuKSA9PiAodXNlclRva2VuID0gdG9rZW4pKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLmF1dGhTdG9yYWdlU2VydmljZS5zd2l0Y2hUb2tlblRhcmdldFRvQ1NBZ2VudCgpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLm9BdXRoTGliV3JhcHBlclNlcnZpY2UuYXV0aG9yaXplV2l0aFBhc3N3b3JkRmxvdyhcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBwYXNzd29yZFxuICAgICAgKTtcbiAgICAgIC8vIFN0YXJ0IGVtdWxhdGlvbiBmb3IgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyXG4gICAgICBsZXQgY3VzdG9tZXJJZDogc3RyaW5nO1xuICAgICAgdGhpcy51c2VyU2VydmljZVxuICAgICAgICAuZ2V0KClcbiAgICAgICAgLnN1YnNjcmliZSgodXNlcikgPT4gKGN1c3RvbWVySWQgPSB1c2VyPy5jdXN0b21lcklkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2dvdXQoKSk7XG5cbiAgICAgIGlmIChCb29sZWFuKGN1c3RvbWVySWQpKSB7XG4gICAgICAgIC8vIE9DQyBzcGVjaWZpYyB1c2VyIGlkIGhhbmRsaW5nLiBDdXN0b21pemUgd2hlbiBpbXBsZW1lbnRpbmcgZGlmZmVyZW50IGJhY2tlbmRcbiAgICAgICAgdGhpcy51c2VySWRTZXJ2aWNlLnNldFVzZXJJZChjdXN0b21lcklkKTtcbiAgICAgICAgdGhpcy5hdXRoU3RvcmFnZVNlcnZpY2Uuc2V0RW11bGF0ZWRVc2VyVG9rZW4odXNlclRva2VuKTtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9naW4oKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXaGVuIHdlIGNhbid0IGdldCB0aGUgY3VzdG9tZXJJZCBqdXN0IGVuZCBhbGwgY3VycmVudCBzZXNzaW9uc1xuICAgICAgICB0aGlzLnVzZXJJZFNlcnZpY2Uuc2V0VXNlcklkKE9DQ19VU0VSX0lEX0FOT05ZTU9VUyk7XG4gICAgICAgIHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLmNsZWFyRW11bGF0ZWRVc2VyVG9rZW4oKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLnN3aXRjaFRva2VuVGFyZ2V0VG9Vc2VyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhbiBBU00gY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24uXG4gICAqIEEgY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24gaXMgc3RvcHBlZCBieSBjYWxsaW5nIGxvZ291dCgpLlxuICAgKiBAcGFyYW0gY3VzdG9tZXJJZFxuICAgKi9cbiAgcHVibGljIHN0YXJ0Q3VzdG9tZXJFbXVsYXRpb25TZXNzaW9uKGN1c3RvbWVySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLmNsZWFyRW11bGF0ZWRVc2VyVG9rZW4oKTtcblxuICAgIC8vIE9DQyBzcGVjaWZpYyB1c2VyIGlkIGhhbmRsaW5nLiBDdXN0b21pemUgd2hlbiBpbXBsZW1lbnRpbmcgZGlmZmVyZW50IGJhY2tlbmRcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2dvdXQoKSk7XG4gICAgdGhpcy51c2VySWRTZXJ2aWNlLnNldFVzZXJJZChjdXN0b21lcklkKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2dpbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBDUyBhZ2VudCBpcyBjdXJyZW50bHkgbG9nZ2VkIGluLlxuICAgKlxuICAgKiBAcmV0dXJucyBvYnNlcnZhYmxlIGVtaXR0aW5nIHRydWUgd2hlbiBDUyBhZ2VudCBpcyBsb2dnZWQgaW4gb3IgZmFsc2Ugd2hlbiBub3QuXG4gICAqL1xuICBwdWJsaWMgaXNDdXN0b21lclN1cHBvcnRBZ2VudExvZ2dlZEluKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLmdldFRva2VuKCksXG4gICAgICB0aGlzLmF1dGhTdG9yYWdlU2VydmljZS5nZXRUb2tlblRhcmdldCgpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0b2tlbiwgdG9rZW5UYXJnZXRdKSA9PlxuICAgICAgICBCb29sZWFuKHRva2VuPy5hY2Nlc3NfdG9rZW4gJiYgdG9rZW5UYXJnZXQgPT09IFRva2VuVGFyZ2V0LkNTQWdlbnQpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBjdXN0b21lciBpcyBlbXVsYXRlZC5cbiAgICpcbiAgICogQHJldHVybnMgb2JzZXJ2YWJsZSBlbWl0dGluZyB0cnVlIHdoZW4gdGhlcmUgaXMgYWN0aXZlIGVtdWxhdGlvbiBzZXNzaW9uIG9yIGZhbHNlIHdoZW4gbm90LlxuICAgKi9cbiAgcHVibGljIGlzQ3VzdG9tZXJFbXVsYXRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy51c2VySWRTZXJ2aWNlLmlzRW11bGF0ZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzdXBwb3J0IGFnZW50J3MgdG9rZW4gbG9hZGluZyBzdGF0dXNcbiAgICovXG4gIHB1YmxpYyBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAvLyBUT0RPKCM4MjQ4KTogQ3JlYXRlIG5ldyBsb2FkaW5nIHN0YXRlIG91dHNpZGUgb2Ygc3RvcmVcbiAgICByZXR1cm4gb2YoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBhIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnQuXG4gICAqL1xuICBhc3luYyBsb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBlbXVsYXRlZFRva2VuID0gdGhpcy5hdXRoU3RvcmFnZVNlcnZpY2UuZ2V0RW11bGF0ZWRVc2VyVG9rZW4oKTtcblxuICAgIGxldCBpc0N1c3RvbWVyRW11bGF0ZWQ7XG4gICAgdGhpcy51c2VySWRTZXJ2aWNlXG4gICAgICAuaXNFbXVsYXRlZCgpXG4gICAgICAuc3Vic2NyaWJlKChlbXVsYXRlZCkgPT4gKGlzQ3VzdG9tZXJFbXVsYXRlZCA9IGVtdWxhdGVkKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgYXdhaXQgdGhpcy5vQXV0aExpYldyYXBwZXJTZXJ2aWNlLnJldm9rZUFuZExvZ291dCgpO1xuXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXNtQWN0aW9ucy5Mb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpKTtcbiAgICB0aGlzLmF1dGhTdG9yYWdlU2VydmljZS5zZXRUb2tlblRhcmdldChUb2tlblRhcmdldC5Vc2VyKTtcblxuICAgIGlmIChpc0N1c3RvbWVyRW11bGF0ZWQgJiYgZW11bGF0ZWRUb2tlbikge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9nb3V0KCkpO1xuICAgICAgdGhpcy5hdXRoU3RvcmFnZVNlcnZpY2Uuc2V0VG9rZW4oZW11bGF0ZWRUb2tlbik7XG4gICAgICB0aGlzLnVzZXJJZFNlcnZpY2Uuc2V0VXNlcklkKE9DQ19VU0VSX0lEX0NVUlJFTlQpO1xuICAgICAgdGhpcy5hdXRoU3RvcmFnZVNlcnZpY2UuY2xlYXJFbXVsYXRlZFVzZXJUb2tlbigpO1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9naW4oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaW5pdExvZ291dCgpO1xuICAgIH1cbiAgfVxufVxuIl19