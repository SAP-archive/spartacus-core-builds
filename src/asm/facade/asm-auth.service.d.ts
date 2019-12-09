import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserToken } from '../../auth/models/token-types.model';
import { AuthService } from '../../auth/facade/auth.service';
import { StateWithAsm } from '../store/asm-state';
export declare class AsmAuthService {
    protected store: Store<StateWithAsm>;
    protected authService: AuthService;
    constructor(store: Store<StateWithAsm>, authService: AuthService);
    /**
     * Loads a user token for a customer support agent
     * @param userId
     * @param password
     */
    authorizeCustomerSupportAgent(userId: string, password: string): void;
    /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stoped by calling logout().
     * @param customerSupportAgentToken
     * @param customerId
     */
    startCustomerEmulationSession(customerSupportAgentToken: UserToken, customerId: string): void;
    /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param userToken
     */
    isCustomerEmulationToken(userToken: UserToken): boolean;
    /**
     * Returns the customer support agent's token
     */
    getCustomerSupportAgentToken(): Observable<UserToken>;
    /**
     * Returns the customer support agent's token loading status
     */
    getCustomerSupportAgentTokenLoading(): Observable<boolean>;
    /**
     * Logout a customer support agent
     */
    logoutCustomerSupportAgent(): void;
}
