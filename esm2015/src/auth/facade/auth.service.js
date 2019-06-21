/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { LoadClientToken } from '../store/actions/client-token.action';
import { Logout } from '../store/actions/login-logout.action';
import { LoadUserToken, LoadUserTokenSuccess, RefreshUserToken, } from '../store/actions/user-token.action';
import { getClientTokenState } from '../store/selectors/client-token.selectors';
import { getUserToken } from '../store/selectors/user-token.selectors';
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
        this.store.dispatch(new LoadUserToken({
            userId: userId,
            password: password,
        }));
    }
    /**
     * Returns the user's token
     * @return {?}
     */
    getUserToken() {
        return this.store.pipe(select(getUserToken));
    }
    /**
     * Refreshes the user token
     * @param {?} token a user token to refresh
     * @return {?}
     */
    refreshUserToken(token) {
        this.store.dispatch(new RefreshUserToken({
            refreshToken: token.refresh_token,
        }));
    }
    /**
     * Store the provided token
     * @param {?} token
     * @return {?}
     */
    authorizeWithToken(token) {
        this.store.dispatch(new LoadUserTokenSuccess(token));
    }
    /**
     * Logout
     * @return {?}
     */
    logout() {
        this.store.dispatch(new Logout());
    }
    /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     * @return {?}
     */
    getClientToken() {
        return this.store.pipe(select(getClientTokenState), filter((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            if (this.isClientTokenLoaded(state)) {
                return true;
            }
            else {
                if (!state.loading) {
                    this.store.dispatch(new LoadClientToken());
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
        this.store.dispatch(new LoadClientToken());
        return this.store.pipe(select(getClientTokenState), filter((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUQsT0FBTyxFQUNMLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsZ0JBQWdCLEdBQ2pCLE1BQU0sb0NBQW9DLENBQUM7QUFFNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7QUFLdkUsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFBc0IsS0FBMkI7UUFBM0IsVUFBSyxHQUFMLEtBQUssQ0FBc0I7SUFBRyxDQUFDOzs7Ozs7O0lBT3JELFNBQVMsQ0FBQyxNQUFjLEVBQUUsUUFBZ0I7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksYUFBYSxDQUFDO1lBQ2hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUtELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7OztJQU1ELGdCQUFnQixDQUFDLEtBQWdCO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGdCQUFnQixDQUFDO1lBQ25CLFlBQVksRUFBRSxLQUFLLENBQUMsYUFBYTtTQUNsQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELGtCQUFrQixDQUFDLEtBQWdCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUtELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBTUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUMzQixNQUFNOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUU7WUFDekMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQztpQkFDNUM7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQStCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQU1ELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQzNCLE1BQU07Ozs7UUFBQyxDQUFDLEtBQStCLEVBQUUsRUFBRSxDQUN6QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQ2hDLEVBQ0QsR0FBRzs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxDQUN0RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRVMsbUJBQW1CLENBQUMsS0FBK0I7UUFDM0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUMxRCxDQUFDOzs7WUE1RkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBbEJnQixLQUFLOzs7Ozs7OztJQW9CUiw0QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4sIFVzZXJUb2tlbiB9IGZyb20gJy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkQ2xpZW50VG9rZW4gfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2NsaWVudC10b2tlbi5hY3Rpb24nO1xuaW1wb3J0IHsgTG9nb3V0IH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9sb2dpbi1sb2dvdXQuYWN0aW9uJztcbmltcG9ydCB7XG4gIExvYWRVc2VyVG9rZW4sXG4gIExvYWRVc2VyVG9rZW5TdWNjZXNzLFxuICBSZWZyZXNoVXNlclRva2VuLFxufSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3VzZXItdG9rZW4uYWN0aW9uJztcbmltcG9ydCB7IFN0YXRlV2l0aEF1dGggfSBmcm9tICcuLi9zdG9yZS9hdXRoLXN0YXRlJztcbmltcG9ydCB7IGdldENsaWVudFRva2VuU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvY2xpZW50LXRva2VuLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRVc2VyVG9rZW4gfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvdXNlci10b2tlbi5zZWxlY3RvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEF1dGg+KSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIG5ldyB1c2VyIHRva2VuXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAqL1xuICBhdXRob3JpemUodXNlcklkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IExvYWRVc2VyVG9rZW4oe1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVzZXIncyB0b2tlblxuICAgKi9cbiAgZ2V0VXNlclRva2VuKCk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZ2V0VXNlclRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIHRoZSB1c2VyIHRva2VuXG4gICAqIEBwYXJhbSB0b2tlbiBhIHVzZXIgdG9rZW4gdG8gcmVmcmVzaFxuICAgKi9cbiAgcmVmcmVzaFVzZXJUb2tlbih0b2tlbjogVXNlclRva2VuKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBSZWZyZXNoVXNlclRva2VuKHtcbiAgICAgICAgcmVmcmVzaFRva2VuOiB0b2tlbi5yZWZyZXNoX3Rva2VuLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlIHRoZSBwcm92aWRlZCB0b2tlblxuICAgKi9cbiAgYXV0aG9yaXplV2l0aFRva2VuKHRva2VuOiBVc2VyVG9rZW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBMb2FkVXNlclRva2VuU3VjY2Vzcyh0b2tlbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dFxuICAgKi9cbiAgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvZ291dCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY2xpZW50IHRva2VuLiAgVGhlIGNsaWVudCB0b2tlbiBmcm9tIHRoZSBzdG9yZSBpcyByZXR1cm5lZCBpZiB0aGVyZSBpcyBvbmUuXG4gICAqIE90aGVyd2lzZSwgYW4gbmV3IHRva2VuIGlzIGZldGNoZWQgZnJvbSB0aGUgYmFja2VuZCBhbmQgc2F2ZWQgaW4gdGhlIHN0b3JlLlxuICAgKi9cbiAgZ2V0Q2xpZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0Q2xpZW50VG9rZW5TdGF0ZSksXG4gICAgICBmaWx0ZXIoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRDbGllbnRUb2tlbigpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT4gc3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgY2xpZW50VG9rZW4gZnJvbSB0aGUgYmFja2VuZCBhbnMgc2F2ZXMgaXQgaW4gdGhlIHN0b3JlIHdoZXJlIGdldENsaWVudFRva2VuIGNhbiB1c2UgaXQuXG4gICAqIFRoZSBuZXcgY2xpZW50VG9rZW4gaXMgcmV0dXJuZWQuXG4gICAqL1xuICByZWZyZXNoQ2xpZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj4ge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRDbGllbnRUb2tlbigpKTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0Q2xpZW50VG9rZW5TdGF0ZSksXG4gICAgICBmaWx0ZXIoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+XG4gICAgICAgIHRoaXMuaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZSlcbiAgICAgICksXG4gICAgICBtYXAoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+IHN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChzdGF0ZS5zdWNjZXNzIHx8IHN0YXRlLmVycm9yKSAmJiAhc3RhdGUubG9hZGluZztcbiAgfVxufVxuIl19