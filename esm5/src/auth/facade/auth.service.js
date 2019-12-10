/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, take } from 'rxjs/operators';
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
        var _this = this;
        this.getUserToken()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} userToken
         * @return {?}
         */
        function (userToken) {
            _this.store.dispatch(new AuthActions.Logout());
            if (Boolean(userToken) && userToken.userId === OCC_USER_ID_CURRENT) {
                _this.store.dispatch(new AuthActions.RevokeUserToken(userToken));
            }
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG1CQUFtQixHQUNwQixNQUFNLCtCQUErQixDQUFDO0FBR3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUV6RDtJQUlFLHFCQUFzQixLQUEyQjtRQUEzQixVQUFLLEdBQUwsS0FBSyxDQUFzQjtJQUFHLENBQUM7SUFFckQ7Ozs7T0FJRzs7Ozs7OztJQUNILCtCQUFTOzs7Ozs7SUFBVCxVQUFVLE1BQWMsRUFBRSxRQUFnQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQzVCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHOzs7Ozs7Ozs7Ozs7SUFDSCxrQ0FBWTs7Ozs7Ozs7Ozs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDN0IsR0FBRzs7OztRQUFDLFVBQUEsU0FBUztZQUNYLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDckMsT0FB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RVMseUNBQW1COzs7OztJQUE3QixVQUE4QixLQUErQjtRQUMzRCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzFELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxvQ0FBYzs7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUM3QixHQUFHOzs7O1FBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBckQsQ0FBcUQsRUFBQyxDQUN4RSxDQUFDO0lBQ0osQ0FBQzs7Z0JBbElGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZmdCLEtBQUs7OztzQkFEdEI7Q0FpSkMsQUFuSUQsSUFtSUM7U0FoSVksV0FBVzs7Ozs7O0lBQ1YsNEJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4sIFVzZXJUb2tlbiB9IGZyb20gJy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQXV0aCB9IGZyb20gJy4uL3N0b3JlL2F1dGgtc3RhdGUnO1xuaW1wb3J0IHsgQXV0aFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQXV0aD4pIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgbmV3IHVzZXIgdG9rZW5cbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICovXG4gIGF1dGhvcml6ZSh1c2VySWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlbih7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyB0aGUgdXNlcklkIHRoZSBPQ0MgY2FsbHMgc2hvdWxkIHVzZSwgZGVwZW5kaW5nXG4gICAqIG9uIHdldGhlciB0aGVyZSBpcyBhbiBhY3RpdmUgc3RvcmVmcm9udCBzZXNzaW9uIG9yIG5vdC5cbiAgICpcbiAgICogSXQgcmV0dXJucyB0aGUgdXNlcklkIG9mIHRoZSBjdXJyZW50IHN0b3JlZnJvbnQgdXNlciBvciAnYW5vbnltb3VzJ1xuICAgKiBpbiB0aGUgY2FzZSB0aGVyZSBhcmUgbm8gc2lnbmVkIGluIHVzZXIgaW4gdGhlIHN0b3JlZnJvbnQuXG4gICAqXG4gICAqIFRoZSB1c2VyIGlkIG9mIGEgcmVndWxhciBjdXN0b21lciBzZXNzaW9uIGlzICdjdXJyZW50Jy4gIEluIHRoZSBjYXNlIG9mIGFuXG4gICAqIGFzbSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiwgdGhlIHVzZXJJZCB3aWxsIGJlIHRoZSBjdXN0b21lcklkLlxuICAgKi9cbiAgZ2V0T2NjVXNlcklkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIG1hcCh1c2VyVG9rZW4gPT4ge1xuICAgICAgICBpZiAoISF1c2VyVG9rZW4gJiYgISF1c2VyVG9rZW4udXNlcklkKSB7XG4gICAgICAgICAgcmV0dXJuIHVzZXJUb2tlbi51c2VySWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIE9DQ19VU0VSX0lEX0FOT05ZTU9VUztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVzZXIncyB0b2tlblxuICAgKi9cbiAgZ2V0VXNlclRva2VuKCk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQXV0aFNlbGVjdG9ycy5nZXRVc2VyVG9rZW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoZXMgdGhlIHVzZXIgdG9rZW5cbiAgICogQHBhcmFtIHRva2VuIGEgdXNlciB0b2tlbiB0byByZWZyZXNoXG4gICAqL1xuICByZWZyZXNoVXNlclRva2VuKHRva2VuOiBVc2VyVG9rZW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEF1dGhBY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW4oe1xuICAgICAgICByZWZyZXNoVG9rZW46IHRva2VuLnJlZnJlc2hfdG9rZW4sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmUgdGhlIHByb3ZpZGVkIHRva2VuXG4gICAqL1xuICBhdXRob3JpemVXaXRoVG9rZW4odG9rZW46IFVzZXJUb2tlbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5TdWNjZXNzKHRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0IGEgc3RvcmVmcm9udCBjdXN0b21lclxuICAgKi9cbiAgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKHVzZXJUb2tlbiA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvZ291dCgpKTtcbiAgICAgICAgaWYgKEJvb2xlYW4odXNlclRva2VuKSAmJiB1c2VyVG9rZW4udXNlcklkID09PSBPQ0NfVVNFUl9JRF9DVVJSRU5UKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuUmV2b2tlVXNlclRva2VuKHVzZXJUb2tlbikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY2xpZW50IHRva2VuLiAgVGhlIGNsaWVudCB0b2tlbiBmcm9tIHRoZSBzdG9yZSBpcyByZXR1cm5lZCBpZiB0aGVyZSBpcyBvbmUuXG4gICAqIE90aGVyd2lzZSwgYW4gbmV3IHRva2VuIGlzIGZldGNoZWQgZnJvbSB0aGUgYmFja2VuZCBhbmQgc2F2ZWQgaW4gdGhlIHN0b3JlLlxuICAgKi9cbiAgZ2V0Q2xpZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQXV0aFNlbGVjdG9ycy5nZXRDbGllbnRUb2tlblN0YXRlKSxcbiAgICAgIGZpbHRlcigoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0NsaWVudFRva2VuTG9hZGVkKHN0YXRlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9hZENsaWVudFRva2VuKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KSA9PiBzdGF0ZS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSBjbGllbnRUb2tlbiBmcm9tIHRoZSBiYWNrZW5kIGFucyBzYXZlcyBpdCBpbiB0aGUgc3RvcmUgd2hlcmUgZ2V0Q2xpZW50VG9rZW4gY2FuIHVzZSBpdC5cbiAgICogVGhlIG5ldyBjbGllbnRUb2tlbiBpcyByZXR1cm5lZC5cbiAgICovXG4gIHJlZnJlc2hDbGllbnRUb2tlbigpOiBPYnNlcnZhYmxlPENsaWVudFRva2VuPiB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9hZENsaWVudFRva2VuKCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBdXRoU2VsZWN0b3JzLmdldENsaWVudFRva2VuU3RhdGUpLFxuICAgICAgZmlsdGVyKChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KSA9PlxuICAgICAgICB0aGlzLmlzQ2xpZW50VG9rZW5Mb2FkZWQoc3RhdGUpXG4gICAgICApLFxuICAgICAgbWFwKChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KSA9PiBzdGF0ZS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzQ2xpZW50VG9rZW5Mb2FkZWQoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoc3RhdGUuc3VjY2VzcyB8fCBzdGF0ZS5lcnJvcikgJiYgIXN0YXRlLmxvYWRpbmc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluOyBhbmQgYGZhbHNlYCBpZiB0aGUgdXNlciBpcyBhbm9ueW1vdXMuXG4gICAqL1xuICBpc1VzZXJMb2dnZWRJbigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgbWFwKHVzZXJUb2tlbiA9PiBCb29sZWFuKHVzZXJUb2tlbikgJiYgQm9vbGVhbih1c2VyVG9rZW4uYWNjZXNzX3Rva2VuKSlcbiAgICApO1xuICB9XG59XG4iXX0=