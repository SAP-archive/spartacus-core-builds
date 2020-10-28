import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/user-auth/facade/auth.service';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { OAuthLibWrapperService } from '../../auth/user-auth/services/oauth-lib-wrapper.service';
import { UserService } from '../../user/facade/user.service';
import { AsmAuthStorageService } from '../services/asm-auth-storage.service';
import { StateWithAsm } from '../store/asm-state';
/**
 * Auth service for CS agent. Useful to login/logout agent, start emulation
 * or get information about the status of emulation.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CsAgentAuthService {
    protected authService: AuthService;
    protected authStorageService: AsmAuthStorageService;
    protected userIdService: UserIdService;
    protected oAuthLibWrapperService: OAuthLibWrapperService;
    protected store: Store<StateWithAsm>;
    protected userService: UserService;
    constructor(authService: AuthService, authStorageService: AsmAuthStorageService, userIdService: UserIdService, oAuthLibWrapperService: OAuthLibWrapperService, store: Store<StateWithAsm>, userService: UserService);
    /**
     * Loads access token for a customer support agent.
     * @param userId
     * @param password
     */
    authorizeCustomerSupportAgent(userId: string, password: string): Promise<void>;
    /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stopped by calling logout().
     * @param customerId
     */
    startCustomerEmulationSession(customerId: string): void;
    /**
     * Check if CS agent is currently logged in.
     *
     * @returns observable emitting true when CS agent is logged in or false when not.
     */
    isCustomerSupportAgentLoggedIn(): Observable<boolean>;
    /**
     * Utility function to determine if customer is emulated.
     *
     * @returns observable emitting true when there is active emulation session or false when not.
     */
    isCustomerEmulated(): Observable<boolean>;
    /**
     * Returns the customer support agent's token loading status
     */
    getCustomerSupportAgentTokenLoading(): Observable<boolean>;
    /**
     * Logout a customer support agent.
     */
    logoutCustomerSupportAgent(): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CsAgentAuthService, never>;
}

//# sourceMappingURL=csagent-auth.service.d.ts.map