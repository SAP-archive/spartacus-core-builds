import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateWithClientAuth } from '../../auth/client-auth/store/client-auth-state';
import { AuthService } from '../../auth/user-auth/facade/auth.service';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { AuthRedirectService } from '../../auth/user-auth/services/auth-redirect.service';
import { OAuthLibWrapperService } from '../../auth/user-auth/services/oauth-lib-wrapper.service';
import { GlobalMessageService } from '../../global-message/index';
import { RoutingService } from '../../routing/facade/routing.service';
import { AsmAuthStorageService } from './asm-auth-storage.service';
/**
 * Version of AuthService that is working for both user na CS agent.
 * Overrides AuthService when ASM module is enabled.
 */
import * as ɵngcc0 from '@angular/core';
export declare class AsmAuthService extends AuthService {
    protected store: Store<StateWithClientAuth>;
    protected userIdService: UserIdService;
    protected oAuthLibWrapperService: OAuthLibWrapperService;
    protected authStorageService: AsmAuthStorageService;
    protected authRedirectService: AuthRedirectService;
    protected globalMessageService: GlobalMessageService;
    protected routingService: RoutingService;
    constructor(store: Store<StateWithClientAuth>, userIdService: UserIdService, oAuthLibWrapperService: OAuthLibWrapperService, authStorageService: AsmAuthStorageService, authRedirectService: AuthRedirectService, globalMessageService: GlobalMessageService, routingService: RoutingService);
    protected canUserLogin(): boolean;
    protected warnAboutLoggedCSAgent(): void;
    /**
     * Loads a new user token with Resource Owner Password Flow when CS agent is not logged in.
     * @param userId
     * @param password
     */
    loginWithCredentials(userId: string, password: string): Promise<void>;
    /**
     * Initialize Implicit/Authorization Code flow by redirecting to OAuth server when CS agent is not logged in.
     */
    loginWithRedirect(): boolean;
    /**
     * Revokes tokens and clears state for logged user (tokens, userId).
     * To perform logout it is best to use `logout` method. Use this method with caution.
     */
    coreLogout(): Promise<any>;
    /**
     * Returns `true` if user is logged in or being emulated.
     */
    isUserLoggedIn(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmAuthService, never>;
}

//# sourceMappingURL=asm-auth.service.d.ts.map