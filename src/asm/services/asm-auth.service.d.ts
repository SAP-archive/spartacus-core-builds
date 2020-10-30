import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateWithClientAuth } from '../../auth/client-auth/store/client-auth-state';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { AuthRedirectService } from '../../auth/user-auth/services/auth-redirect.service';
import { BasicAuthService } from '../../auth/user-auth/services/basic-auth.service';
import { OAuthLibWrapperService } from '../../auth/user-auth/services/oauth-lib-wrapper.service';
import { GlobalMessageService } from '../../global-message/index';
import { RoutingService } from '../../routing/facade/routing.service';
import { AsmAuthStorageService } from './asm-auth-storage.service';
/**
 * Version of BasicAuthService that is working for both user na CS agent.
 * Overrides BasicAuthService when ASM module is enabled.
 */
import * as ɵngcc0 from '@angular/core';
export declare class AsmAuthService extends BasicAuthService {
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
    authorize(userId: string, password: string): Promise<void>;
    /**
     * Initialize Implicit/Authorization Code flow by redirecting to OAuth server when CS agent is not logged in.
     */
    loginWithRedirect(): boolean;
    /**
     * Logout a storefront customer.
     */
    logout(): Promise<any>;
    /**
     * Returns `true` if user is logged in or being emulated.
     */
    isUserLoggedIn(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmAuthService, never>;
}

//# sourceMappingURL=asm-auth.service.d.ts.map