/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { LoadClientToken } from '../store/actions/client-token.action';
import { Login, Logout } from '../store/actions/login-logout.action';
import { LoadUserToken, RefreshUserToken, LoadUserTokenSuccess, } from '../store/actions/user-token.action';
import { getClientTokenState } from '../store/selectors/client-token.selectors';
import { getUserToken } from '../store/selectors/user-token.selectors';
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
        this.store.dispatch(new LoadUserToken({
            userId: userId,
            password: password,
        }));
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
        return this.store.pipe(select(getUserToken));
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
        this.store.dispatch(new RefreshUserToken({
            userId: token.userId,
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
        this.store.dispatch(new LoadUserTokenSuccess(token));
    };
    /**
     * Login
     */
    /**
     * Login
     * @return {?}
     */
    AuthService.prototype.login = /**
     * Login
     * @return {?}
     */
    function () {
        this.store.dispatch(new Login());
    };
    /**
     * Logout
     */
    /**
     * Logout
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * Logout
     * @return {?}
     */
    function () {
        this.store.dispatch(new Logout());
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
        return this.store.pipe(select(getClientTokenState), filter(function (state) {
            if (_this.isClientTokenLoaded(state)) {
                return true;
            }
            else {
                if (!state.loading) {
                    _this.store.dispatch(new LoadClientToken());
                }
                return false;
            }
        }), map(function (state) { return state.value; }));
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
        this.store.dispatch(new LoadClientToken());
        return this.store.pipe(select(getClientTokenState), filter(function (state) {
            return _this.isClientTokenLoaded(state);
        }), map(function (state) { return state.value; }));
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
    AuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.Store)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());
export { AuthService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFDTCxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLG9CQUFvQixHQUNyQixNQUFNLG9DQUFvQyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7O0FBRXZFO0lBSUUscUJBQW9CLEtBQTJCO1FBQTNCLFVBQUssR0FBTCxLQUFLLENBQXNCO0lBQUcsQ0FBQztJQUVuRDs7OztPQUlHOzs7Ozs7O0lBQ0gsK0JBQVM7Ozs7OztJQUFULFVBQVUsTUFBYyxFQUFFLFFBQWdCO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGFBQWEsQ0FBQztZQUNoQixNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGtDQUFZOzs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHNDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsS0FBZ0I7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksZ0JBQWdCLENBQUM7WUFDbkIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFlBQVksRUFBRSxLQUFLLENBQUMsYUFBYTtTQUNsQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsd0NBQWtCOzs7OztJQUFsQixVQUFtQixLQUFnQjtRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDJCQUFLOzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDRCQUFNOzs7O0lBQU47UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsb0NBQWM7Ozs7O0lBQWQ7UUFBQSxpQkFlQztRQWRDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUMzQixNQUFNLENBQUMsVUFBQyxLQUErQjtZQUNyQyxJQUFJLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO2lCQUM1QztnQkFDRCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLFVBQUMsS0FBK0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDLENBQ3RELENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCx3Q0FBa0I7Ozs7O0lBQWxCO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQzNCLE1BQU0sQ0FBQyxVQUFDLEtBQStCO1lBQ3JDLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztRQUEvQixDQUErQixDQUNoQyxFQUNELEdBQUcsQ0FBQyxVQUFDLEtBQStCLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUN0RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRVMseUNBQW1COzs7OztJQUE3QixVQUE4QixLQUErQjtRQUMzRCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzFELENBQUM7O2dCQXBHRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXJCZ0IsS0FBSzs7O3NCQUZ0QjtDQTBIQyxBQXJHRCxJQXFHQztTQWxHWSxXQUFXOzs7Ozs7SUFDViw0QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuXG5pbXBvcnQgeyBDbGllbnRUb2tlbiwgVXNlclRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aEF1dGggfSBmcm9tICcuLi9zdG9yZS9hdXRoLXN0YXRlJztcbmltcG9ydCB7IExvYWRDbGllbnRUb2tlbiB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvY2xpZW50LXRva2VuLmFjdGlvbic7XG5pbXBvcnQgeyBMb2dpbiwgTG9nb3V0IH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9sb2dpbi1sb2dvdXQuYWN0aW9uJztcbmltcG9ydCB7XG4gIExvYWRVc2VyVG9rZW4sXG4gIFJlZnJlc2hVc2VyVG9rZW4sXG4gIExvYWRVc2VyVG9rZW5TdWNjZXNzLFxufSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3VzZXItdG9rZW4uYWN0aW9uJztcbmltcG9ydCB7IGdldENsaWVudFRva2VuU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvY2xpZW50LXRva2VuLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRVc2VyVG9rZW4gfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvdXNlci10b2tlbi5zZWxlY3RvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBdXRoPikge31cblxuICAvKipcbiAgICogTG9hZHMgYSBuZXcgdXNlciB0b2tlblxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBwYXNzd29yZFxuICAgKi9cbiAgYXV0aG9yaXplKHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBMb2FkVXNlclRva2VuKHtcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1c2VyJ3MgdG9rZW5cbiAgICovXG4gIGdldFVzZXJUb2tlbigpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGdldFVzZXJUb2tlbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyB0aGUgdXNlciB0b2tlblxuICAgKiBAcGFyYW0gdG9rZW4gYSB1c2VyIHRva2VuIHRvIHJlZnJlc2hcbiAgICovXG4gIHJlZnJlc2hVc2VyVG9rZW4odG9rZW46IFVzZXJUb2tlbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgUmVmcmVzaFVzZXJUb2tlbih7XG4gICAgICAgIHVzZXJJZDogdG9rZW4udXNlcklkLFxuICAgICAgICByZWZyZXNoVG9rZW46IHRva2VuLnJlZnJlc2hfdG9rZW4sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmUgdGhlIHByb3ZpZGVkIHRva2VuXG4gICAqL1xuICBhdXRob3JpemVXaXRoVG9rZW4odG9rZW46IFVzZXJUb2tlbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRVc2VyVG9rZW5TdWNjZXNzKHRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogTG9naW5cbiAgICovXG4gIGxvZ2luKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvZ2luKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dFxuICAgKi9cbiAgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvZ291dCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY2xpZW50IHRva2VuLiAgVGhlIGNsaWVudCB0b2tlbiBmcm9tIHRoZSBzdG9yZSBpcyByZXR1cm5lZCBpZiB0aGVyZSBpcyBvbmUuXG4gICAqIE90aGVyd2lzZSwgYW4gbmV3IHRva2VuIGlzIGZldGNoZWQgZnJvbSB0aGUgYmFja2VuZCBhbmQgc2F2ZWQgaW4gdGhlIHN0b3JlLlxuICAgKi9cbiAgZ2V0Q2xpZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0Q2xpZW50VG9rZW5TdGF0ZSksXG4gICAgICBmaWx0ZXIoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRDbGllbnRUb2tlbigpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT4gc3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgY2xpZW50VG9rZW4gZnJvbSB0aGUgYmFja2VuZCBhbnMgc2F2ZXMgaXQgaW4gdGhlIHN0b3JlIHdoZXJlIGdldENsaWVudFRva2VuIGNhbiB1c2UgaXQuXG4gICAqIFRoZSBuZXcgY2xpZW50VG9rZW4gaXMgcmV0dXJuZWQuXG4gICAqL1xuICByZWZyZXNoQ2xpZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj4ge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRDbGllbnRUb2tlbigpKTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0Q2xpZW50VG9rZW5TdGF0ZSksXG4gICAgICBmaWx0ZXIoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+XG4gICAgICAgIHRoaXMuaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZSlcbiAgICAgICksXG4gICAgICBtYXAoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+IHN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChzdGF0ZS5zdWNjZXNzIHx8IHN0YXRlLmVycm9yKSAmJiAhc3RhdGUubG9hZGluZztcbiAgfVxufVxuIl19