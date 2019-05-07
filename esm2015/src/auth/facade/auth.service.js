/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            userId: token.userId,
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
        return this.store.pipe(select(getClientTokenState), filter((state) => {
            if (this.isClientTokenLoaded(state)) {
                return true;
            }
            else {
                if (!state.loading) {
                    this.store.dispatch(new LoadClientToken());
                }
                return false;
            }
        }), map((state) => state.value));
    }
    /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     * @return {?}
     */
    refreshClientToken() {
        this.store.dispatch(new LoadClientToken());
        return this.store.pipe(select(getClientTokenState), filter((state) => this.isClientTokenLoaded(state)), map((state) => state.value));
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
/** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.Store)); }, token: AuthService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUQsT0FBTyxFQUNMLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsZ0JBQWdCLEdBQ2pCLE1BQU0sb0NBQW9DLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7QUFLdkUsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFBb0IsS0FBMkI7UUFBM0IsVUFBSyxHQUFMLEtBQUssQ0FBc0I7SUFBRyxDQUFDOzs7Ozs7O0lBT25ELFNBQVMsQ0FBQyxNQUFjLEVBQUUsUUFBZ0I7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksYUFBYSxDQUFDO1lBQ2hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUtELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7OztJQU1ELGdCQUFnQixDQUFDLEtBQWdCO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGdCQUFnQixDQUFDO1lBQ25CLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixZQUFZLEVBQUUsS0FBSyxDQUFDLGFBQWE7U0FDbEMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCxrQkFBa0IsQ0FBQyxLQUFnQjtRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFLRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQU1ELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFDM0IsTUFBTSxDQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFO1lBQ3pDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO29CQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7aUJBQzVDO2dCQUNELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQ3RELENBQUM7SUFDSixDQUFDOzs7Ozs7SUFNRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBRTNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUMzQixNQUFNLENBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUUsQ0FDekMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUNoQyxFQUNELEdBQUcsQ0FBQyxDQUFDLEtBQStCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVTLG1CQUFtQixDQUFDLEtBQStCO1FBQzNELE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDMUQsQ0FBQzs7O1lBN0ZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXJCZ0IsS0FBSzs7Ozs7Ozs7SUF1QlIsNEJBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcblxuaW1wb3J0IHsgQ2xpZW50VG9rZW4sIFVzZXJUb2tlbiB9IGZyb20gJy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBdXRoIH0gZnJvbSAnLi4vc3RvcmUvYXV0aC1zdGF0ZSc7XG5pbXBvcnQgeyBMb2FkQ2xpZW50VG9rZW4gfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2NsaWVudC10b2tlbi5hY3Rpb24nO1xuaW1wb3J0IHsgTG9nb3V0IH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9sb2dpbi1sb2dvdXQuYWN0aW9uJztcbmltcG9ydCB7XG4gIExvYWRVc2VyVG9rZW4sXG4gIExvYWRVc2VyVG9rZW5TdWNjZXNzLFxuICBSZWZyZXNoVXNlclRva2VuLFxufSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3VzZXItdG9rZW4uYWN0aW9uJztcbmltcG9ydCB7IGdldENsaWVudFRva2VuU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvY2xpZW50LXRva2VuLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRVc2VyVG9rZW4gfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvdXNlci10b2tlbi5zZWxlY3RvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBdXRoPikge31cblxuICAvKipcbiAgICogTG9hZHMgYSBuZXcgdXNlciB0b2tlblxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBwYXNzd29yZFxuICAgKi9cbiAgYXV0aG9yaXplKHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBMb2FkVXNlclRva2VuKHtcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1c2VyJ3MgdG9rZW5cbiAgICovXG4gIGdldFVzZXJUb2tlbigpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGdldFVzZXJUb2tlbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyB0aGUgdXNlciB0b2tlblxuICAgKiBAcGFyYW0gdG9rZW4gYSB1c2VyIHRva2VuIHRvIHJlZnJlc2hcbiAgICovXG4gIHJlZnJlc2hVc2VyVG9rZW4odG9rZW46IFVzZXJUb2tlbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgUmVmcmVzaFVzZXJUb2tlbih7XG4gICAgICAgIHVzZXJJZDogdG9rZW4udXNlcklkLFxuICAgICAgICByZWZyZXNoVG9rZW46IHRva2VuLnJlZnJlc2hfdG9rZW4sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmUgdGhlIHByb3ZpZGVkIHRva2VuXG4gICAqL1xuICBhdXRob3JpemVXaXRoVG9rZW4odG9rZW46IFVzZXJUb2tlbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRVc2VyVG9rZW5TdWNjZXNzKHRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0XG4gICAqL1xuICBsb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTG9nb3V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjbGllbnQgdG9rZW4uICBUaGUgY2xpZW50IHRva2VuIGZyb20gdGhlIHN0b3JlIGlzIHJldHVybmVkIGlmIHRoZXJlIGlzIG9uZS5cbiAgICogT3RoZXJ3aXNlLCBhbiBuZXcgdG9rZW4gaXMgZmV0Y2hlZCBmcm9tIHRoZSBiYWNrZW5kIGFuZCBzYXZlZCBpbiB0aGUgc3RvcmUuXG4gICAqL1xuICBnZXRDbGllbnRUb2tlbigpOiBPYnNlcnZhYmxlPENsaWVudFRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRDbGllbnRUb2tlblN0YXRlKSxcbiAgICAgIGZpbHRlcigoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0NsaWVudFRva2VuTG9hZGVkKHN0YXRlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTG9hZENsaWVudFRva2VuKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KSA9PiBzdGF0ZS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSBjbGllbnRUb2tlbiBmcm9tIHRoZSBiYWNrZW5kIGFucyBzYXZlcyBpdCBpbiB0aGUgc3RvcmUgd2hlcmUgZ2V0Q2xpZW50VG9rZW4gY2FuIHVzZSBpdC5cbiAgICogVGhlIG5ldyBjbGllbnRUb2tlbiBpcyByZXR1cm5lZC5cbiAgICovXG4gIHJlZnJlc2hDbGllbnRUb2tlbigpOiBPYnNlcnZhYmxlPENsaWVudFRva2VuPiB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTG9hZENsaWVudFRva2VuKCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRDbGllbnRUb2tlblN0YXRlKSxcbiAgICAgIGZpbHRlcigoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT5cbiAgICAgICAgdGhpcy5pc0NsaWVudFRva2VuTG9hZGVkKHN0YXRlKVxuICAgICAgKSxcbiAgICAgIG1hcCgoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT4gc3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0NsaWVudFRva2VuTG9hZGVkKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHN0YXRlLnN1Y2Nlc3MgfHwgc3RhdGUuZXJyb3IpICYmICFzdGF0ZS5sb2FkaW5nO1xuICB9XG59XG4iXX0=