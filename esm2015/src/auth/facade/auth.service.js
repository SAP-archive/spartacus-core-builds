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
     * on whether there is an active storefront session or not.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsbUJBQW1CLEdBQ3BCLE1BQU0sK0JBQStCLENBQUM7QUFHdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBSXpELE1BQU0sT0FBTyxXQUFXOzs7O0lBQ3RCLFlBQXNCLEtBQTJCO1FBQTNCLFVBQUssR0FBTCxLQUFLLENBQXNCO0lBQUcsQ0FBQzs7Ozs7OztJQU9yRCxTQUFTLENBQUMsTUFBYyxFQUFFLFFBQWdCO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDNUIsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFPRCw0QkFBNEIsQ0FBQyxNQUFjLEVBQUUsUUFBZ0I7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLDZCQUE2QixDQUFDO1lBQzVDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQVFNLDZCQUE2QixDQUNsQyx5QkFBb0MsRUFD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RXZELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFDekMsTUFBTTs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQ3pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFDaEMsRUFDRCxHQUFHOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQ3RELENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFUyxtQkFBbUIsQ0FBQyxLQUErQjtRQUMzRCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBS0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDN0IsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7OztZQXZMRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFkZ0IsS0FBSzs7Ozs7Ozs7SUFnQlIsNEJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4sIFVzZXJUb2tlbiB9IGZyb20gJy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQXV0aCB9IGZyb20gJy4uL3N0b3JlL2F1dGgtc3RhdGUnO1xuaW1wb3J0IHsgQXV0aFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEF1dGg+KSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIG5ldyB1c2VyIHRva2VuXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAqL1xuICBhdXRob3JpemUodXNlcklkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW4oe1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgdXNlciB0b2tlbiBmb3IgYSBjdXN0b21lciBzdXBwb3J0IGFnZW50XG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAqL1xuICBhdXRob3JpemVDdXN0b21lclN1cHBvckFnZW50KHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBdXRoQWN0aW9ucy5Mb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbih7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGFuIEFTTSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbi5cbiAgICogQSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiBpcyBzdG9wZWQgYnkgY2FsbGluZyBsb2dvdXQoKS5cbiAgICogQHBhcmFtIGN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5cbiAgICogQHBhcmFtIGN1c3RvbWVySWRcbiAgICovXG4gIHB1YmxpYyBzdGFydEN1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbihcbiAgICBjdXN0b21lclN1cHBvcnRBZ2VudFRva2VuOiBVc2VyVG9rZW4sXG4gICAgY3VzdG9tZXJJZDogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHRoaXMuYXV0aG9yaXplV2l0aFRva2VuKHtcbiAgICAgIC4uLmN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4sXG4gICAgICB1c2VySWQ6IGN1c3RvbWVySWQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyB0aGUgdXNlcklkIHRoZSBPQ0MgY2FsbHMgc2hvdWxkIHVzZSwgZGVwZW5kaW5nXG4gICAqIG9uIHdoZXRoZXIgdGhlcmUgaXMgYW4gYWN0aXZlIHN0b3JlZnJvbnQgc2Vzc2lvbiBvciBub3QuXG4gICAqXG4gICAqIEl0IHJldHVybnMgdGhlIHVzZXJJZCBvZiB0aGUgY3VycmVudCBzdG9yZWZyb250IHVzZXIgb3IgJ2Fub255bW91cydcbiAgICogaW4gdGhlIGNhc2UgdGhlcmUgYXJlIG5vIHNpZ25lZCBpbiB1c2VyIGluIHRoZSBzdG9yZWZyb250LlxuICAgKlxuICAgKiBUaGUgdXNlciBpZCBvZiBhIHJlZ3VsYXIgY3VzdG9tZXIgc2Vzc2lvbiBpcyAnY3VycmVudCcuICBJbiB0aGUgY2FzZSBvZiBhblxuICAgKiBhc20gY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24sIHRoZSB1c2VySWQgd2lsbCBiZSB0aGUgY3VzdG9tZXJJZC5cbiAgICovXG4gIGdldE9jY1VzZXJJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFVzZXJUb2tlbigpLnBpcGUoXG4gICAgICBtYXAodXNlclRva2VuID0+IHtcbiAgICAgICAgaWYgKCEhdXNlclRva2VuICYmICEhdXNlclRva2VuLnVzZXJJZCkge1xuICAgICAgICAgIHJldHVybiB1c2VyVG9rZW4udXNlcklkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBhIGdpdmVuIHRva2VuIGlzIGEgY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24gdG9rZW4uXG4gICAqIEBwYXJhbSB1c2VyVG9rZW5cbiAgICovXG4gIGlzQ3VzdG9tZXJFbXVsYXRpb25Ub2tlbih1c2VyVG9rZW46IFVzZXJUb2tlbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXVzZXJUb2tlbi51c2VySWQgJiYgdXNlclRva2VuLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQ1VSUkVOVDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1c2VyJ3MgdG9rZW5cbiAgICovXG4gIGdldFVzZXJUb2tlbigpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KEF1dGhTZWxlY3RvcnMuZ2V0VXNlclRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudCdzIHRva2VuXG4gICAqL1xuICBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKCk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQXV0aFNlbGVjdG9ycy5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VzdG9tZXIgc3VwcG9ydCBhZ2VudCdzIHRva2VuIGxvYWRpbmcgc3RhdHVzXG4gICAqL1xuICBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEF1dGhTZWxlY3RvcnMuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkxvYWRpbmcpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoZXMgdGhlIHVzZXIgdG9rZW5cbiAgICogQHBhcmFtIHRva2VuIGEgdXNlciB0b2tlbiB0byByZWZyZXNoXG4gICAqL1xuICByZWZyZXNoVXNlclRva2VuKHRva2VuOiBVc2VyVG9rZW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEF1dGhBY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW4oe1xuICAgICAgICByZWZyZXNoVG9rZW46IHRva2VuLnJlZnJlc2hfdG9rZW4sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmUgdGhlIHByb3ZpZGVkIHRva2VuXG4gICAqL1xuICBhdXRob3JpemVXaXRoVG9rZW4odG9rZW46IFVzZXJUb2tlbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5TdWNjZXNzKHRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0IGEgc3RvcmVmcm9udCBjdXN0b21lclxuICAgKi9cbiAgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvZ291dCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgYSBjdXN0b21lciBzdXBwb3J0IGFnZW50XG4gICAqL1xuICBsb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGNsaWVudCB0b2tlbi4gIFRoZSBjbGllbnQgdG9rZW4gZnJvbSB0aGUgc3RvcmUgaXMgcmV0dXJuZWQgaWYgdGhlcmUgaXMgb25lLlxuICAgKiBPdGhlcndpc2UsIGFuIG5ldyB0b2tlbiBpcyBmZXRjaGVkIGZyb20gdGhlIGJhY2tlbmQgYW5kIHNhdmVkIGluIHRoZSBzdG9yZS5cbiAgICovXG4gIGdldENsaWVudFRva2VuKCk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEF1dGhTZWxlY3RvcnMuZ2V0Q2xpZW50VG9rZW5TdGF0ZSksXG4gICAgICBmaWx0ZXIoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvYWRDbGllbnRUb2tlbigpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT4gc3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgY2xpZW50VG9rZW4gZnJvbSB0aGUgYmFja2VuZCBhbnMgc2F2ZXMgaXQgaW4gdGhlIHN0b3JlIHdoZXJlIGdldENsaWVudFRva2VuIGNhbiB1c2UgaXQuXG4gICAqIFRoZSBuZXcgY2xpZW50VG9rZW4gaXMgcmV0dXJuZWQuXG4gICAqL1xuICByZWZyZXNoQ2xpZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj4ge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvYWRDbGllbnRUb2tlbigpKTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQXV0aFNlbGVjdG9ycy5nZXRDbGllbnRUb2tlblN0YXRlKSxcbiAgICAgIGZpbHRlcigoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT5cbiAgICAgICAgdGhpcy5pc0NsaWVudFRva2VuTG9hZGVkKHN0YXRlKVxuICAgICAgKSxcbiAgICAgIG1hcCgoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT4gc3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0NsaWVudFRva2VuTG9hZGVkKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHN0YXRlLnN1Y2Nlc3MgfHwgc3RhdGUuZXJyb3IpICYmICFzdGF0ZS5sb2FkaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbjsgYW5kIGBmYWxzZWAgaWYgdGhlIHVzZXIgaXMgYW5vbnltb3VzLlxuICAgKi9cbiAgaXNVc2VyTG9nZ2VkSW4oKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIG1hcCh1c2VyVG9rZW4gPT4gQm9vbGVhbih1c2VyVG9rZW4pICYmIEJvb2xlYW4odXNlclRva2VuLmFjY2Vzc190b2tlbikpXG4gICAgKTtcbiAgfVxufVxuIl19