import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImF1dGguc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4sIFVzZXJUb2tlbiB9IGZyb20gJy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBdXRoIH0gZnJvbSAnLi4vc3RvcmUvYXV0aC1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBdXRoPjtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoQXV0aD4pO1xuICAgIC8qKlxuICAgICAqIExvYWRzIGEgbmV3IHVzZXIgdG9rZW5cbiAgICAgKiBAcGFyYW0gdXNlcklkXG4gICAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAgICovXG4gICAgYXV0aG9yaXplKHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIHRoZSB1c2VySWQgdGhlIE9DQyBjYWxscyBzaG91bGQgdXNlLCBkZXBlbmRpbmdcbiAgICAgKiBvbiB3aGV0aGVyIHRoZXJlIGlzIGFuIGFjdGl2ZSBzdG9yZWZyb250IHNlc3Npb24gb3Igbm90LlxuICAgICAqXG4gICAgICogSXQgcmV0dXJucyB0aGUgdXNlcklkIG9mIHRoZSBjdXJyZW50IHN0b3JlZnJvbnQgdXNlciBvciAnYW5vbnltb3VzJ1xuICAgICAqIGluIHRoZSBjYXNlIHRoZXJlIGFyZSBubyBzaWduZWQgaW4gdXNlciBpbiB0aGUgc3RvcmVmcm9udC5cbiAgICAgKlxuICAgICAqIFRoZSB1c2VyIGlkIG9mIGEgcmVndWxhciBjdXN0b21lciBzZXNzaW9uIGlzICdjdXJyZW50Jy4gIEluIHRoZSBjYXNlIG9mIGFuXG4gICAgICogYXNtIGN1c3RvbWVyIGVtdWxhdGlvbiBzZXNzaW9uLCB0aGUgdXNlcklkIHdpbGwgYmUgdGhlIGN1c3RvbWVySWQuXG4gICAgICovXG4gICAgZ2V0T2NjVXNlcklkKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1c2VyJ3MgdG9rZW5cbiAgICAgKi9cbiAgICBnZXRVc2VyVG9rZW4oKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+O1xuICAgIC8qKlxuICAgICAqIFJlZnJlc2hlcyB0aGUgdXNlciB0b2tlblxuICAgICAqIEBwYXJhbSB0b2tlbiBhIHVzZXIgdG9rZW4gdG8gcmVmcmVzaFxuICAgICAqL1xuICAgIHJlZnJlc2hVc2VyVG9rZW4odG9rZW46IFVzZXJUb2tlbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU3RvcmUgdGhlIHByb3ZpZGVkIHRva2VuXG4gICAgICovXG4gICAgYXV0aG9yaXplV2l0aFRva2VuKHRva2VuOiBVc2VyVG9rZW4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIExvZ291dCBhIHN0b3JlZnJvbnQgY3VzdG9tZXJcbiAgICAgKi9cbiAgICBsb2dvdXQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY2xpZW50IHRva2VuLiAgVGhlIGNsaWVudCB0b2tlbiBmcm9tIHRoZSBzdG9yZSBpcyByZXR1cm5lZCBpZiB0aGVyZSBpcyBvbmUuXG4gICAgICogT3RoZXJ3aXNlLCBhbiBuZXcgdG9rZW4gaXMgZmV0Y2hlZCBmcm9tIHRoZSBiYWNrZW5kIGFuZCBzYXZlZCBpbiB0aGUgc3RvcmUuXG4gICAgICovXG4gICAgZ2V0Q2xpZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj47XG4gICAgLyoqXG4gICAgICogRmV0Y2hlcyBhIGNsaWVudFRva2VuIGZyb20gdGhlIGJhY2tlbmQgYW5zIHNhdmVzIGl0IGluIHRoZSBzdG9yZSB3aGVyZSBnZXRDbGllbnRUb2tlbiBjYW4gdXNlIGl0LlxuICAgICAqIFRoZSBuZXcgY2xpZW50VG9rZW4gaXMgcmV0dXJuZWQuXG4gICAgICovXG4gICAgcmVmcmVzaENsaWVudFRva2VuKCk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+O1xuICAgIHByb3RlY3RlZCBpc0NsaWVudFRva2VuTG9hZGVkKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbjsgYW5kIGBmYWxzZWAgaWYgdGhlIHVzZXIgaXMgYW5vbnltb3VzLlxuICAgICAqL1xuICAgIGlzVXNlckxvZ2dlZEluKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG59XG4iXX0=