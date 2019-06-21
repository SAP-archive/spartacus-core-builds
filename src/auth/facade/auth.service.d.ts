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
     * Returns the user's token
     */
    getUserToken(): Observable<UserToken>;
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
     * Logout
     */
    logout(): void;
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
}
