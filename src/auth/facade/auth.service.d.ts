import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoaderState } from '../../state/utils/loader/loader-state';
import { ClientToken, UserToken } from '../models/token-types.model';
import { StateWithAuth } from '../store/auth-state';
import * as ɵngcc0 from '@angular/core';
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
     * Calls provided callback with current user id.
     *
     * @param cb callback function to invoke
     */
    invokeWithUserId(cb: (userId: string) => any): Subscription;
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
     * Logout a storefront customer
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
    /**
     * Returns `true` if the user is logged in; and `false` if the user is anonymous.
     */
    isUserLoggedIn(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthService, never>;
}

//# sourceMappingURL=auth.service.d.ts.map