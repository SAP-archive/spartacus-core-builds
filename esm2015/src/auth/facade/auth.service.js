/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { OCC_USER_ID_ANONYMOUS, OCC_USER_ID_CURRENT, } from '../../occ/utils/occ-constants';
import { AuthActions } from '../store/actions/index';
import { AuthSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class AuthService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Loads a new user token
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    authorize(userId, password) {
        this.store.dispatch(new AuthActions.LoadUserToken({
            userId: userId,
            password: password,
        }));
    }
    /**
     * Loads a user token for a customer support agent
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    authorizeCustomerSupporAgent(userId, password) {
        this.store.dispatch(new AuthActions.LoadCustomerSupportAgentToken({
            userId: userId,
            password: password,
        }));
    }
    /**
     * Starts an ASM customer emulation session.
     * A customer emulation session is stoped by calling logout().
     * @param {?} customerSupportAgentToken
     * @param {?} customerId
     * @return {?}
     */
    startCustomerEmulationSession(customerSupportAgentToken, customerId) {
        this.authorizeWithToken(Object.assign({}, customerSupportAgentToken, { userId: customerId }));
    }
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
    getOccUserId() {
        return this.getUserToken().pipe(map((/**
         * @param {?} userToken
         * @return {?}
         */
        userToken => {
            if (!!userToken && !!userToken.userId) {
                return userToken.userId;
            }
            else {
                return OCC_USER_ID_ANONYMOUS;
            }
        })));
    }
    /**
     * Utility function to determine if a given token is a customer emulation session token.
     * @param {?} userToken
     * @return {?}
     */
    isCustomerEmulationToken(userToken) {
        return !!userToken.userId && userToken.userId !== OCC_USER_ID_CURRENT;
    }
    /**
     * Returns the user's token
     * @return {?}
     */
    getUserToken() {
        return this.store.pipe(select(AuthSelectors.getUserToken));
    }
    /**
     * Returns the customer support agent's token
     * @return {?}
     */
    getCustomerSupportAgentToken() {
        return this.store.pipe(select(AuthSelectors.getCustomerSupportAgentToken));
    }
    /**
     * Returns the customer support agent's token loading status
     * @return {?}
     */
    getCustomerSupportAgentTokenLoading() {
        return this.store.pipe(select(AuthSelectors.getCustomerSupportAgentTokenLoading));
    }
    /**
     * Refreshes the user token
     * @param {?} token a user token to refresh
     * @return {?}
     */
    refreshUserToken(token) {
        this.store.dispatch(new AuthActions.RefreshUserToken({
            refreshToken: token.refresh_token,
        }));
    }
    /**
     * Store the provided token
     * @param {?} token
     * @return {?}
     */
    authorizeWithToken(token) {
        this.store.dispatch(new AuthActions.LoadUserTokenSuccess(token));
    }
    /**
     * Logout a storefront customer
     * @return {?}
     */
    logout() {
        this.store.dispatch(new AuthActions.Logout());
    }
    /**
     * Logout a customer support agent
     * @return {?}
     */
    logoutCustomerSupportAgent() {
        this.store.dispatch(new AuthActions.LogoutCustomerSupportAgent());
    }
    /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     * @return {?}
     */
    getClientToken() {
        return this.store.pipe(select(AuthSelectors.getClientTokenState), filter((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            if (this.isClientTokenLoaded(state)) {
                return true;
            }
            else {
                if (!state.loading) {
                    this.store.dispatch(new AuthActions.LoadClientToken());
                }
                return false;
            }
        })), map((/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.value)));
    }
    /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     * @return {?}
     */
    refreshClientToken() {
        this.store.dispatch(new AuthActions.LoadClientToken());
        return this.store.pipe(select(AuthSelectors.getClientTokenState), filter((/**
         * @param {?} state
         * @return {?}
         */
        (state) => this.isClientTokenLoaded(state))), map((/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.value)));
    }
    /**
     * @protected
     * @param {?} state
     * @return {?}
     */
    isClientTokenLoaded(state) {
        return (state.success || state.error) && !state.loading;
    }
    /**
     * Returns `true` if the user is logged in; and `false` if the user is anonymous.
     * @return {?}
     */
    isUserLoggedIn() {
        return this.getUserToken().pipe(map((/**
         * @param {?} userToken
         * @return {?}
         */
        userToken => Boolean(userToken) && Boolean(userToken.access_token))));
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ AuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.Store)); }, token: AuthService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AuthService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsbUJBQW1CLEdBQ3BCLE1BQU0sK0JBQStCLENBQUM7QUFHdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBSXpELE1BQU0sT0FBTyxXQUFXOzs7O0lBQ3RCLFlBQXNCLEtBQTJCO1FBQTNCLFVBQUssR0FBTCxLQUFLLENBQXNCO0lBQUcsQ0FBQzs7Ozs7OztJQU9yRCxTQUFTLENBQUMsTUFBYyxFQUFFLFFBQWdCO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDNUIsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFPRCw0QkFBNEIsQ0FBQyxNQUFjLEVBQUUsUUFBZ0I7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLDZCQUE2QixDQUFDO1lBQzVDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQVFNLDZCQUE2QixDQUNsQyx5QkFBb0MsRUFD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RXZELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFDekMsTUFBTTs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQ3pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFDaEMsRUFDRCxHQUFHOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQ3RELENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFUyxtQkFBbUIsQ0FBQyxLQUErQjtRQUMzRCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBS0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDN0IsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7OztZQXZMRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFkZ0IsS0FBSzs7Ozs7Ozs7SUFnQlIsNEJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4sIFVzZXJUb2tlbiB9IGZyb20gJy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQXV0aCB9IGZyb20gJy4uL3N0b3JlL2F1dGgtc3RhdGUnO1xuaW1wb3J0IHsgQXV0aFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEF1dGg+KSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIG5ldyB1c2VyIHRva2VuXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAqL1xuICBhdXRob3JpemUodXNlcklkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW4oe1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgdXNlciB0b2tlbiBmb3IgYSBjdXN0b21lciBzdXBwb3J0IGFnZW50XG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAqL1xuICBhdXRob3JpemVDdXN0b21lclN1cHBvckFnZW50KHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBdXRoQWN0aW9ucy5Mb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbih7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGFuIEFTTSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbi5cbiAgICogQSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiBpcyBzdG9wZWQgYnkgY2FsbGluZyBsb2dvdXQoKS5cbiAgICogQHBhcmFtIGN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5cbiAgICogQHBhcmFtIGN1c3RvbWVySWRcbiAgICovXG4gIHB1YmxpYyBzdGFydEN1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbihcbiAgICBjdXN0b21lclN1cHBvcnRBZ2VudFRva2VuOiBVc2VyVG9rZW4sXG4gICAgY3VzdG9tZXJJZDogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHRoaXMuYXV0aG9yaXplV2l0aFRva2VuKHtcbiAgICAgIC4uLmN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4sXG4gICAgICB1c2VySWQ6IGN1c3RvbWVySWQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyB0aGUgdXNlcklkIHRoZSBPQ0MgY2FsbHMgc2hvdWxkIHVzZSwgZGVwZW5kaW5nXG4gICAqIG9uIHdldGhlciB0aGVyZSBpcyBhbiBhY3RpdmUgc3RvcmVmcm9udCBzZXNzaW9uIG9yIG5vdC5cbiAgICpcbiAgICogSXQgcmV0dXJucyB0aGUgdXNlcklkIG9mIHRoZSBjdXJyZW50IHN0b3JlZnJvbnQgdXNlciBvciAnYW5vbnltb3VzJ1xuICAgKiBpbiB0aGUgY2FzZSB0aGVyZSBhcmUgbm8gc2lnbmVkIGluIHVzZXIgaW4gdGhlIHN0b3JlZnJvbnQuXG4gICAqXG4gICAqIFRoZSB1c2VyIGlkIG9mIGEgcmVndWxhciBjdXN0b21lciBzZXNzaW9uIGlzICdjdXJyZW50Jy4gIEluIHRoZSBjYXNlIG9mIGFuXG4gICAqIGFzbSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiwgdGhlIHVzZXJJZCB3aWxsIGJlIHRoZSBjdXN0b21lcklkLlxuICAgKi9cbiAgZ2V0T2NjVXNlcklkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIG1hcCh1c2VyVG9rZW4gPT4ge1xuICAgICAgICBpZiAoISF1c2VyVG9rZW4gJiYgISF1c2VyVG9rZW4udXNlcklkKSB7XG4gICAgICAgICAgcmV0dXJuIHVzZXJUb2tlbi51c2VySWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIE9DQ19VU0VSX0lEX0FOT05ZTU9VUztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGEgZ2l2ZW4gdG9rZW4gaXMgYSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiB0b2tlbi5cbiAgICogQHBhcmFtIHVzZXJUb2tlblxuICAgKi9cbiAgaXNDdXN0b21lckVtdWxhdGlvblRva2VuKHVzZXJUb2tlbjogVXNlclRva2VuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdXNlclRva2VuLnVzZXJJZCAmJiB1c2VyVG9rZW4udXNlcklkICE9PSBPQ0NfVVNFUl9JRF9DVVJSRU5UO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVzZXIncyB0b2tlblxuICAgKi9cbiAgZ2V0VXNlclRva2VuKCk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQXV0aFNlbGVjdG9ycy5nZXRVc2VyVG9rZW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzdXBwb3J0IGFnZW50J3MgdG9rZW5cbiAgICovXG4gIGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChBdXRoU2VsZWN0b3JzLmdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXN0b21lciBzdXBwb3J0IGFnZW50J3MgdG9rZW4gbG9hZGluZyBzdGF0dXNcbiAgICovXG4gIGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5Mb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQXV0aFNlbGVjdG9ycy5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuTG9hZGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyB0aGUgdXNlciB0b2tlblxuICAgKiBAcGFyYW0gdG9rZW4gYSB1c2VyIHRva2VuIHRvIHJlZnJlc2hcbiAgICovXG4gIHJlZnJlc2hVc2VyVG9rZW4odG9rZW46IFVzZXJUb2tlbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQXV0aEFjdGlvbnMuUmVmcmVzaFVzZXJUb2tlbih7XG4gICAgICAgIHJlZnJlc2hUb2tlbjogdG9rZW4ucmVmcmVzaF90b2tlbixcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZSB0aGUgcHJvdmlkZWQgdG9rZW5cbiAgICovXG4gIGF1dGhvcml6ZVdpdGhUb2tlbih0b2tlbjogVXNlclRva2VuKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3ModG9rZW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgYSBzdG9yZWZyb250IGN1c3RvbWVyXG4gICAqL1xuICBsb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9nb3V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBhIGN1c3RvbWVyIHN1cHBvcnQgYWdlbnRcbiAgICovXG4gIGxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCkpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY2xpZW50IHRva2VuLiAgVGhlIGNsaWVudCB0b2tlbiBmcm9tIHRoZSBzdG9yZSBpcyByZXR1cm5lZCBpZiB0aGVyZSBpcyBvbmUuXG4gICAqIE90aGVyd2lzZSwgYW4gbmV3IHRva2VuIGlzIGZldGNoZWQgZnJvbSB0aGUgYmFja2VuZCBhbmQgc2F2ZWQgaW4gdGhlIHN0b3JlLlxuICAgKi9cbiAgZ2V0Q2xpZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQXV0aFNlbGVjdG9ycy5nZXRDbGllbnRUb2tlblN0YXRlKSxcbiAgICAgIGZpbHRlcigoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0NsaWVudFRva2VuTG9hZGVkKHN0YXRlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9hZENsaWVudFRva2VuKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KSA9PiBzdGF0ZS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSBjbGllbnRUb2tlbiBmcm9tIHRoZSBiYWNrZW5kIGFucyBzYXZlcyBpdCBpbiB0aGUgc3RvcmUgd2hlcmUgZ2V0Q2xpZW50VG9rZW4gY2FuIHVzZSBpdC5cbiAgICogVGhlIG5ldyBjbGllbnRUb2tlbiBpcyByZXR1cm5lZC5cbiAgICovXG4gIHJlZnJlc2hDbGllbnRUb2tlbigpOiBPYnNlcnZhYmxlPENsaWVudFRva2VuPiB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9hZENsaWVudFRva2VuKCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBdXRoU2VsZWN0b3JzLmdldENsaWVudFRva2VuU3RhdGUpLFxuICAgICAgZmlsdGVyKChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KSA9PlxuICAgICAgICB0aGlzLmlzQ2xpZW50VG9rZW5Mb2FkZWQoc3RhdGUpXG4gICAgICApLFxuICAgICAgbWFwKChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KSA9PiBzdGF0ZS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzQ2xpZW50VG9rZW5Mb2FkZWQoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoc3RhdGUuc3VjY2VzcyB8fCBzdGF0ZS5lcnJvcikgJiYgIXN0YXRlLmxvYWRpbmc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluOyBhbmQgYGZhbHNlYCBpZiB0aGUgdXNlciBpcyBhbm9ueW1vdXMuXG4gICAqL1xuICBpc1VzZXJMb2dnZWRJbigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgbWFwKHVzZXJUb2tlbiA9PiBCb29sZWFuKHVzZXJUb2tlbikgJiYgQm9vbGVhbih1c2VyVG9rZW4uYWNjZXNzX3Rva2VuKSlcbiAgICApO1xuICB9XG59XG4iXX0=