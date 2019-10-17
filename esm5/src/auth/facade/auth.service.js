/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { OCC_USER_ID_ANONYMOUS, OCC_USER_ID_CURRENT, } from '../../occ/utils/occ-constants';
import { AuthActions } from '../store/actions/index';
import { AuthSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var AuthService = /** @class */ (function () {
    function AuthService(store) {
        this.store = store;
    }
    /**
     * Loads a new user token
     * @param userId
     * @param password
     */
    /**
     * Loads a new user token
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    AuthService.prototype.authorize = /**
     * Loads a new user token
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    function (userId, password) {
        this.store.dispatch(new AuthActions.LoadUserToken({
            userId: userId,
            password: password,
        }));
    };
    /**
     * Loads a user token for a customer support agent
     * @param userId
     * @param password
     */
    /**
     * Loads a user token for a customer support agent
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    AuthService.prototype.authorizeCustomerSupporAgent = /**
     * Loads a user token for a customer support agent
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    function (userId, password) {
        this.store.dispatch(new AuthActions.LoadCustomerSupportAgentToken({
            userId: userId,
            password: password,
        }));
    };
    /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stoped by calling logout().
     * @param customerSupportAgentToken
     * @param customerId
     */
    /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stoped by calling logout().
     * @param {?} customerSupportAgentToken
     * @param {?} customerId
     * @return {?}
     */
    AuthService.prototype.startCustomerEmulationSession = /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stoped by calling logout().
     * @param {?} customerSupportAgentToken
     * @param {?} customerId
     * @return {?}
     */
    function (customerSupportAgentToken, customerId) {
        this.authorizeWithToken(tslib_1.__assign({}, customerSupportAgentToken, { userId: customerId }));
    };
    /**
     * This function provides the userId the OCC calls should use, depending
     * on wether there is an active storefront session or not.
     *
     * It returns the userId of the current storefront user or 'anonymous'
     * in the case there are no signed in user in the storefront.
     *
     * The user id of a regular customer session is 'current'.  In the case of an
     * asm customer emulation session, the userId will be the customerId.
     */
    /**
     * This function provides the userId the OCC calls should use, depending
     * on wether there is an active storefront session or not.
     *
     * It returns the userId of the current storefront user or 'anonymous'
     * in the case there are no signed in user in the storefront.
     *
     * The user id of a regular customer session is 'current'.  In the case of an
     * asm customer emulation session, the userId will be the customerId.
     * @return {?}
     */
    AuthService.prototype.getOccUserId = /**
     * This function provides the userId the OCC calls should use, depending
     * on wether there is an active storefront session or not.
     *
     * It returns the userId of the current storefront user or 'anonymous'
     * in the case there are no signed in user in the storefront.
     *
     * The user id of a regular customer session is 'current'.  In the case of an
     * asm customer emulation session, the userId will be the customerId.
     * @return {?}
     */
    function () {
        return this.getUserToken().pipe(map((/**
         * @param {?} userToken
         * @return {?}
         */
        function (userToken) {
            if (!!userToken && !!userToken.userId) {
                return userToken.userId;
            }
            else {
                return OCC_USER_ID_ANONYMOUS;
            }
        })));
    };
    /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param userToken
     */
    /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param {?} userToken
     * @return {?}
     */
    AuthService.prototype.isCustomerEmulationToken = /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param {?} userToken
     * @return {?}
     */
    function (userToken) {
        return !!userToken.userId && userToken.userId !== OCC_USER_ID_CURRENT;
    };
    /**
     * Returns the user's token
     */
    /**
     * Returns the user's token
     * @return {?}
     */
    AuthService.prototype.getUserToken = /**
     * Returns the user's token
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AuthSelectors.getUserToken));
    };
    /**
     * Returns the customer support agent's token
     */
    /**
     * Returns the customer support agent's token
     * @return {?}
     */
    AuthService.prototype.getCustomerSupportAgentToken = /**
     * Returns the customer support agent's token
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AuthSelectors.getCustomerSupportAgentToken));
    };
    /**
     * Returns the customer support agent's token loading status
     */
    /**
     * Returns the customer support agent's token loading status
     * @return {?}
     */
    AuthService.prototype.getCustomerSupportAgentTokenLoading = /**
     * Returns the customer support agent's token loading status
     * @return {?}
     */
    function () {
        return this.store.pipe(select(AuthSelectors.getCustomerSupportAgentTokenLoading));
    };
    /**
     * Refreshes the user token
     * @param token a user token to refresh
     */
    /**
     * Refreshes the user token
     * @param {?} token a user token to refresh
     * @return {?}
     */
    AuthService.prototype.refreshUserToken = /**
     * Refreshes the user token
     * @param {?} token a user token to refresh
     * @return {?}
     */
    function (token) {
        this.store.dispatch(new AuthActions.RefreshUserToken({
            refreshToken: token.refresh_token,
        }));
    };
    /**
     * Store the provided token
     */
    /**
     * Store the provided token
     * @param {?} token
     * @return {?}
     */
    AuthService.prototype.authorizeWithToken = /**
     * Store the provided token
     * @param {?} token
     * @return {?}
     */
    function (token) {
        this.store.dispatch(new AuthActions.LoadUserTokenSuccess(token));
    };
    /**
     * Logout a storefront customer
     */
    /**
     * Logout a storefront customer
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * Logout a storefront customer
     * @return {?}
     */
    function () {
        this.store.dispatch(new AuthActions.Logout());
    };
    /**
     * Logout a customer support agent
     */
    /**
     * Logout a customer support agent
     * @return {?}
     */
    AuthService.prototype.logoutCustomerSupportAgent = /**
     * Logout a customer support agent
     * @return {?}
     */
    function () {
        this.store.dispatch(new AuthActions.LogoutCustomerSupportAgent());
    };
    /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     */
    /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     * @return {?}
     */
    AuthService.prototype.getClientToken = /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.store.pipe(select(AuthSelectors.getClientTokenState), filter((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (_this.isClientTokenLoaded(state)) {
                return true;
            }
            else {
                if (!state.loading) {
                    _this.store.dispatch(new AuthActions.LoadClientToken());
                }
                return false;
            }
        })), map((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.value; })));
    };
    /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     */
    /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     * @return {?}
     */
    AuthService.prototype.refreshClientToken = /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     * @return {?}
     */
    function () {
        var _this = this;
        this.store.dispatch(new AuthActions.LoadClientToken());
        return this.store.pipe(select(AuthSelectors.getClientTokenState), filter((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return _this.isClientTokenLoaded(state);
        })), map((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.value; })));
    };
    /**
     * @protected
     * @param {?} state
     * @return {?}
     */
    AuthService.prototype.isClientTokenLoaded = /**
     * @protected
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return (state.success || state.error) && !state.loading;
    };
    /**
     * Returns `true` if the user is logged in; and `false` if the user is anonymous.
     */
    /**
     * Returns `true` if the user is logged in; and `false` if the user is anonymous.
     * @return {?}
     */
    AuthService.prototype.isUserLoggedIn = /**
     * Returns `true` if the user is logged in; and `false` if the user is anonymous.
     * @return {?}
     */
    function () {
        return this.getUserToken().pipe(map((/**
         * @param {?} userToken
         * @return {?}
         */
        function (userToken) { return Boolean(userToken) && Boolean(userToken.access_token); })));
    };
    AuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.Store)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());
export { AuthService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AuthService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG1CQUFtQixHQUNwQixNQUFNLCtCQUErQixDQUFDO0FBR3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUN6RDtJQUlFLHFCQUFzQixLQUEyQjtRQUEzQixVQUFLLEdBQUwsS0FBSyxDQUFzQjtJQUFHLENBQUM7SUFFckQ7Ozs7T0FJRzs7Ozs7OztJQUNILCtCQUFTOzs7Ozs7SUFBVCxVQUFVLE1BQWMsRUFBRSxRQUFnQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQzVCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILGtEQUE0Qjs7Ozs7O0lBQTVCLFVBQTZCLE1BQWMsRUFBRSxRQUFnQjtRQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsNkJBQTZCLENBQUM7WUFDNUMsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFF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LENBQUM7O2dCQXZMRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWRnQixLQUFLOzs7c0JBRHRCO0NBcU1DLEFBeExELElBd0xDO1NBckxZLFdBQVc7Ozs7OztJQUNWLDRCQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbiAgT0NDX1VTRVJfSURfQ1VSUkVOVCxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IENsaWVudFRva2VuLCBVc2VyVG9rZW4gfSBmcm9tICcuLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aEF1dGggfSBmcm9tICcuLi9zdG9yZS9hdXRoLXN0YXRlJztcbmltcG9ydCB7IEF1dGhTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBdXRoPikge31cblxuICAvKipcbiAgICogTG9hZHMgYSBuZXcgdXNlciB0b2tlblxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBwYXNzd29yZFxuICAgKi9cbiAgYXV0aG9yaXplKHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuKHtcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIHVzZXIgdG9rZW4gZm9yIGEgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudFxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBwYXNzd29yZFxuICAgKi9cbiAgYXV0aG9yaXplQ3VzdG9tZXJTdXBwb3JBZ2VudCh1c2VySWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQXV0aEFjdGlvbnMuTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4oe1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhbiBBU00gY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24uXG4gICAqIEEgY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24gaXMgc3RvcGVkIGJ5IGNhbGxpbmcgbG9nb3V0KCkuXG4gICAqIEBwYXJhbSBjdXN0b21lclN1cHBvcnRBZ2VudFRva2VuXG4gICAqIEBwYXJhbSBjdXN0b21lcklkXG4gICAqL1xuICBwdWJsaWMgc3RhcnRDdXN0b21lckVtdWxhdGlvblNlc3Npb24oXG4gICAgY3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbjogVXNlclRva2VuLFxuICAgIGN1c3RvbWVySWQ6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhvcml6ZVdpdGhUb2tlbih7XG4gICAgICAuLi5jdXN0b21lclN1cHBvcnRBZ2VudFRva2VuLFxuICAgICAgdXNlcklkOiBjdXN0b21lcklkLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcHJvdmlkZXMgdGhlIHVzZXJJZCB0aGUgT0NDIGNhbGxzIHNob3VsZCB1c2UsIGRlcGVuZGluZ1xuICAgKiBvbiB3ZXRoZXIgdGhlcmUgaXMgYW4gYWN0aXZlIHN0b3JlZnJvbnQgc2Vzc2lvbiBvciBub3QuXG4gICAqXG4gICAqIEl0IHJldHVybnMgdGhlIHVzZXJJZCBvZiB0aGUgY3VycmVudCBzdG9yZWZyb250IHVzZXIgb3IgJ2Fub255bW91cydcbiAgICogaW4gdGhlIGNhc2UgdGhlcmUgYXJlIG5vIHNpZ25lZCBpbiB1c2VyIGluIHRoZSBzdG9yZWZyb250LlxuICAgKlxuICAgKiBUaGUgdXNlciBpZCBvZiBhIHJlZ3VsYXIgY3VzdG9tZXIgc2Vzc2lvbiBpcyAnY3VycmVudCcuICBJbiB0aGUgY2FzZSBvZiBhblxuICAgKiBhc20gY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24sIHRoZSB1c2VySWQgd2lsbCBiZSB0aGUgY3VzdG9tZXJJZC5cbiAgICovXG4gIGdldE9jY1VzZXJJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFVzZXJUb2tlbigpLnBpcGUoXG4gICAgICBtYXAodXNlclRva2VuID0+IHtcbiAgICAgICAgaWYgKCEhdXNlclRva2VuICYmICEhdXNlclRva2VuLnVzZXJJZCkge1xuICAgICAgICAgIHJldHVybiB1c2VyVG9rZW4udXNlcklkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBhIGdpdmVuIHRva2VuIGlzIGEgY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24gdG9rZW4uXG4gICAqIEBwYXJhbSB1c2VyVG9rZW5cbiAgICovXG4gIGlzQ3VzdG9tZXJFbXVsYXRpb25Ub2tlbih1c2VyVG9rZW46IFVzZXJUb2tlbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXVzZXJUb2tlbi51c2VySWQgJiYgdXNlclRva2VuLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQ1VSUkVOVDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1c2VyJ3MgdG9rZW5cbiAgICovXG4gIGdldFVzZXJUb2tlbigpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KEF1dGhTZWxlY3RvcnMuZ2V0VXNlclRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudCdzIHRva2VuXG4gICAqL1xuICBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKCk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQXV0aFNlbGVjdG9ycy5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudCdzIHRva2VuIGxvYWRpbmcgc3RhdHVzXG4gICAqL1xuICBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEF1dGhTZWxlY3RvcnMuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkxvYWRpbmcpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoZXMgdGhlIHVzZXIgdG9rZW5cbiAgICogQHBhcmFtIHRva2VuIGEgdXNlciB0b2tlbiB0byByZWZyZXNoXG4gICAqL1xuICByZWZyZXNoVXNlclRva2VuKHRva2VuOiBVc2VyVG9rZW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEF1dGhBY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW4oe1xuICAgICAgICByZWZyZXNoVG9rZW46IHRva2VuLnJlZnJlc2hfdG9rZW4sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmUgdGhlIHByb3ZpZGVkIHRva2VuXG4gICAqL1xuICBhdXRob3JpemVXaXRoVG9rZW4odG9rZW46IFVzZXJUb2tlbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5TdWNjZXNzKHRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0IGEgc3RvcmVmcm9udCBjdXN0b21lclxuICAgKi9cbiAgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvZ291dCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgYSBjdXN0b21lciBzdXBwb3J0IGFnZW50XG4gICAqL1xuICBsb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGNsaWVudCB0b2tlbi4gIFRoZSBjbGllbnQgdG9rZW4gZnJvbSB0aGUgc3RvcmUgaXMgcmV0dXJuZWQgaWYgdGhlcmUgaXMgb25lLlxuICAgKiBPdGhlcndpc2UsIGFuIG5ldyB0b2tlbiBpcyBmZXRjaGVkIGZyb20gdGhlIGJhY2tlbmQgYW5kIHNhdmVkIGluIHRoZSBzdG9yZS5cbiAgICovXG4gIGdldENsaWVudFRva2VuKCk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEF1dGhTZWxlY3RvcnMuZ2V0Q2xpZW50VG9rZW5TdGF0ZSksXG4gICAgICBmaWx0ZXIoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvYWRDbGllbnRUb2tlbigpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT4gc3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgY2xpZW50VG9rZW4gZnJvbSB0aGUgYmFja2VuZCBhbnMgc2F2ZXMgaXQgaW4gdGhlIHN0b3JlIHdoZXJlIGdldENsaWVudFRva2VuIGNhbiB1c2UgaXQuXG4gICAqIFRoZSBuZXcgY2xpZW50VG9rZW4gaXMgcmV0dXJuZWQuXG4gICAqL1xuICByZWZyZXNoQ2xpZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj4ge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvYWRDbGllbnRUb2tlbigpKTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQXV0aFNlbGVjdG9ycy5nZXRDbGllbnRUb2tlblN0YXRlKSxcbiAgICAgIGZpbHRlcigoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT5cbiAgICAgICAgdGhpcy5pc0NsaWVudFRva2VuTG9hZGVkKHN0YXRlKVxuICAgICAgKSxcbiAgICAgIG1hcCgoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT4gc3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0NsaWVudFRva2VuTG9hZGVkKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHN0YXRlLnN1Y2Nlc3MgfHwgc3RhdGUuZXJyb3IpICYmICFzdGF0ZS5sb2FkaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbjsgYW5kIGBmYWxzZWAgaWYgdGhlIHVzZXIgaXMgYW5vbnltb3VzLlxuICAgKi9cbiAgaXNVc2VyTG9nZ2VkSW4oKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIG1hcCh1c2VyVG9rZW4gPT4gQm9vbGVhbih1c2VyVG9rZW4pICYmIEJvb2xlYW4odXNlclRva2VuLmFjY2Vzc190b2tlbikpXG4gICAgKTtcbiAgfVxufVxuIl19