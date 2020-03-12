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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImF1dGguc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiwgVXNlclRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aEF1dGggfSBmcm9tICcuLi9zdG9yZS9hdXRoLXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEF1dGg+O1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBdXRoPik7XG4gICAgLyoqXG4gICAgICogTG9hZHMgYSBuZXcgdXNlciB0b2tlblxuICAgICAqIEBwYXJhbSB1c2VySWRcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICAgKi9cbiAgICBhdXRob3JpemUodXNlcklkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gcHJvdmlkZXMgdGhlIHVzZXJJZCB0aGUgT0NDIGNhbGxzIHNob3VsZCB1c2UsIGRlcGVuZGluZ1xuICAgICAqIG9uIHdoZXRoZXIgdGhlcmUgaXMgYW4gYWN0aXZlIHN0b3JlZnJvbnQgc2Vzc2lvbiBvciBub3QuXG4gICAgICpcbiAgICAgKiBJdCByZXR1cm5zIHRoZSB1c2VySWQgb2YgdGhlIGN1cnJlbnQgc3RvcmVmcm9udCB1c2VyIG9yICdhbm9ueW1vdXMnXG4gICAgICogaW4gdGhlIGNhc2UgdGhlcmUgYXJlIG5vIHNpZ25lZCBpbiB1c2VyIGluIHRoZSBzdG9yZWZyb250LlxuICAgICAqXG4gICAgICogVGhlIHVzZXIgaWQgb2YgYSByZWd1bGFyIGN1c3RvbWVyIHNlc3Npb24gaXMgJ2N1cnJlbnQnLiAgSW4gdGhlIGNhc2Ugb2YgYW5cbiAgICAgKiBhc20gY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24sIHRoZSB1c2VySWQgd2lsbCBiZSB0aGUgY3VzdG9tZXJJZC5cbiAgICAgKi9cbiAgICBnZXRPY2NVc2VySWQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVzZXIncyB0b2tlblxuICAgICAqL1xuICAgIGdldFVzZXJUb2tlbigpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj47XG4gICAgLyoqXG4gICAgICogUmVmcmVzaGVzIHRoZSB1c2VyIHRva2VuXG4gICAgICogQHBhcmFtIHRva2VuIGEgdXNlciB0b2tlbiB0byByZWZyZXNoXG4gICAgICovXG4gICAgcmVmcmVzaFVzZXJUb2tlbih0b2tlbjogVXNlclRva2VuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTdG9yZSB0aGUgcHJvdmlkZWQgdG9rZW5cbiAgICAgKi9cbiAgICBhdXRob3JpemVXaXRoVG9rZW4odG9rZW46IFVzZXJUb2tlbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTG9nb3V0IGEgc3RvcmVmcm9udCBjdXN0b21lclxuICAgICAqL1xuICAgIGxvZ291dCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBjbGllbnQgdG9rZW4uICBUaGUgY2xpZW50IHRva2VuIGZyb20gdGhlIHN0b3JlIGlzIHJldHVybmVkIGlmIHRoZXJlIGlzIG9uZS5cbiAgICAgKiBPdGhlcndpc2UsIGFuIG5ldyB0b2tlbiBpcyBmZXRjaGVkIGZyb20gdGhlIGJhY2tlbmQgYW5kIHNhdmVkIGluIHRoZSBzdG9yZS5cbiAgICAgKi9cbiAgICBnZXRDbGllbnRUb2tlbigpOiBPYnNlcnZhYmxlPENsaWVudFRva2VuPjtcbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIGEgY2xpZW50VG9rZW4gZnJvbSB0aGUgYmFja2VuZCBhbnMgc2F2ZXMgaXQgaW4gdGhlIHN0b3JlIHdoZXJlIGdldENsaWVudFRva2VuIGNhbiB1c2UgaXQuXG4gICAgICogVGhlIG5ldyBjbGllbnRUb2tlbiBpcyByZXR1cm5lZC5cbiAgICAgKi9cbiAgICByZWZyZXNoQ2xpZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj47XG4gICAgcHJvdGVjdGVkIGlzQ2xpZW50VG9rZW5Mb2FkZWQoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPik6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluOyBhbmQgYGZhbHNlYCBpZiB0aGUgdXNlciBpcyBhbm9ueW1vdXMuXG4gICAgICovXG4gICAgaXNVc2VyTG9nZ2VkSW4oKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbn1cbiJdfQ==