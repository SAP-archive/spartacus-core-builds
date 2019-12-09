import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoaderState } from '../../state/utils/loader/loader-state';
import { ClientToken, UserToken } from '../models/token-types.model';
import { StateWithAuth } from '../store/auth-state';
export declare class AuthService {
    protected store: Store<StateWithAuth>;
    constructor(store: Store<StateWithAuth>);
    /**
     * Loads a new user token
     * @param userId
     * @param password
     */
    authorize(userId: string, password: string): void;
    /**
     * Loads a user token for a customer support agent
     * @param userId
     * @param password
     */
    authorizeCustomerSupporAgent(userId: string, password: string): void;
    /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stoped by calling logout().
     * @param customerSupportAgentToken
     * @param customerId
     */
    startCustomerEmulationSession(customerSupportAgentToken: UserToken, customerId: string): void;
    /**
     * This function provides the userId the OCC calls should use, depending
     * on whether there is an active storefront session or not.
     *
     * It returns the userId of the current storefront user or 'anonymous'
     * in the case there are no signed in user in the storefront.
     *
     * The user id of a regular customer session is 'current'.  In the case of an
     * asm customer emulation session, the userId will be the customerId.
     */
    getOccUserId(): Observable<string>;
    /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param userToken
     */
    isCustomerEmulationToken(userToken: UserToken): boolean;
    /**
     * Returns the user's token
     */
    getUserToken(): Observable<UserToken>;
    /**
     * Returns the customer support agent's token
     */
    getCustomerSupportAgentToken(): Observable<UserToken>;
    /**
     * Returns the customer support agent's token loading status
     */
    getCustomerSupportAgentTokenLoading(): Observable<boolean>;
    /**
     * Refreshes the user token
     * @param token a user token to refresh
     */
    refreshUserToken(token: UserToken): void;
    /**
     * Store the provided token
     */
    authorizeWithToken(token: UserToken): void;
    /**
     * Logout a storefront customer
     */
    logout(): void;
    /**
     * Logout a customer support agent
     */
    logoutCustomerSupportAgent(): void;
    /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     */
    getClientToken(): Observable<ClientToken>;
    /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     */
    refreshClientToken(): Observable<ClientToken>;
    protected isClientTokenLoaded(state: LoaderState<ClientToken>): boolean;
    /**
     * Returns `true` if the user is logged in; and `false` if the user is anonymous.
     */
    isUserLoggedIn(): Observable<boolean>;
}
