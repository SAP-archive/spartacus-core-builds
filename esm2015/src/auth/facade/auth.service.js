/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
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
     * Returns the user's token
     * @return {?}
     */
    getUserToken() {
        return this.store.pipe(select(AuthSelectors.getUserToken));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUt6RCxNQUFNLE9BQU8sV0FBVzs7OztJQUN0QixZQUFzQixLQUEyQjtRQUEzQixVQUFLLEdBQUwsS0FBSyxDQUFzQjtJQUFHLENBQUM7Ozs7Ozs7SUFPckQsU0FBUyxDQUFDLE1BQWMsRUFBRSxRQUFnQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQzVCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7Ozs7SUFZRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUM3QixHQUFHOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxPQUFPLHFCQUFxQixDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7OztJQU1ELGdCQUFnQixDQUFDLEtBQWdCO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvQixZQUFZLEVBQUUsS0FBSyxDQUFDLGFBQWE7U0FDbEMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCxrQkFBa0IsQ0FBQyxLQUFnQjtRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBS0QsTUFBTTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBTUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFDekMsTUFBTTs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFO1lBQ3pDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO29CQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2lCQUN4RDtnQkFDRCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxDQUN0RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBTUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFdkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUN6QyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUUsQ0FDekMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUNoQyxFQUNELEdBQUc7Ozs7UUFBQyxDQUFDLEtBQStCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVTLG1CQUFtQixDQUFDLEtBQStCO1FBQzNELE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFLRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUM3QixHQUFHOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBQyxDQUN4RSxDQUFDO0lBQ0osQ0FBQzs7O1lBM0hGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVpnQixLQUFLOzs7Ozs7OztJQWNSLDRCQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiwgVXNlclRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBdXRoIH0gZnJvbSAnLi4vc3RvcmUvYXV0aC1zdGF0ZSc7XG5pbXBvcnQgeyBBdXRoU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBdXRoPikge31cblxuICAvKipcbiAgICogTG9hZHMgYSBuZXcgdXNlciB0b2tlblxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBwYXNzd29yZFxuICAgKi9cbiAgYXV0aG9yaXplKHVzZXJJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuKHtcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIHRoZSB1c2VySWQgdGhlIE9DQyBjYWxscyBzaG91bGQgdXNlLCBkZXBlbmRpbmdcbiAgICogb24gd2V0aGVyIHRoZXJlIGlzIGFuIGFjdGl2ZSBzdG9yZWZyb250IHNlc3Npb24gb3Igbm90LlxuICAgKlxuICAgKiBJdCByZXR1cm5zIHRoZSB1c2VySWQgb2YgdGhlIGN1cnJlbnQgc3RvcmVmcm9udCB1c2VyIG9yICdhbm9ueW1vdXMnXG4gICAqIGluIHRoZSBjYXNlIHRoZXJlIGFyZSBubyBzaWduZWQgaW4gdXNlciBpbiB0aGUgc3RvcmVmcm9udC5cbiAgICpcbiAgICogVGhlIHVzZXIgaWQgb2YgYSByZWd1bGFyIGN1c3RvbWVyIHNlc3Npb24gaXMgJ2N1cnJlbnQnLiAgSW4gdGhlIGNhc2Ugb2YgYW5cbiAgICogYXNtIGN1c3RvbWVyIGVtdWxhdGlvbiBzZXNzaW9uLCB0aGUgdXNlcklkIHdpbGwgYmUgdGhlIGN1c3RvbWVySWQuXG4gICAqL1xuICBnZXRPY2NVc2VySWQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgbWFwKHVzZXJUb2tlbiA9PiB7XG4gICAgICAgIGlmICghIXVzZXJUb2tlbiAmJiAhIXVzZXJUb2tlbi51c2VySWQpIHtcbiAgICAgICAgICByZXR1cm4gdXNlclRva2VuLnVzZXJJZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXNlcidzIHRva2VuXG4gICAqL1xuICBnZXRVc2VyVG9rZW4oKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChBdXRoU2VsZWN0b3JzLmdldFVzZXJUb2tlbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyB0aGUgdXNlciB0b2tlblxuICAgKiBAcGFyYW0gdG9rZW4gYSB1c2VyIHRva2VuIHRvIHJlZnJlc2hcbiAgICovXG4gIHJlZnJlc2hVc2VyVG9rZW4odG9rZW46IFVzZXJUb2tlbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQXV0aEFjdGlvbnMuUmVmcmVzaFVzZXJUb2tlbih7XG4gICAgICAgIHJlZnJlc2hUb2tlbjogdG9rZW4ucmVmcmVzaF90b2tlbixcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZSB0aGUgcHJvdmlkZWQgdG9rZW5cbiAgICovXG4gIGF1dGhvcml6ZVdpdGhUb2tlbih0b2tlbjogVXNlclRva2VuKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3ModG9rZW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgYSBzdG9yZWZyb250IGN1c3RvbWVyXG4gICAqL1xuICBsb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQXV0aEFjdGlvbnMuTG9nb3V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjbGllbnQgdG9rZW4uICBUaGUgY2xpZW50IHRva2VuIGZyb20gdGhlIHN0b3JlIGlzIHJldHVybmVkIGlmIHRoZXJlIGlzIG9uZS5cbiAgICogT3RoZXJ3aXNlLCBhbiBuZXcgdG9rZW4gaXMgZmV0Y2hlZCBmcm9tIHRoZSBiYWNrZW5kIGFuZCBzYXZlZCBpbiB0aGUgc3RvcmUuXG4gICAqL1xuICBnZXRDbGllbnRUb2tlbigpOiBPYnNlcnZhYmxlPENsaWVudFRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChBdXRoU2VsZWN0b3JzLmdldENsaWVudFRva2VuU3RhdGUpLFxuICAgICAgZmlsdGVyKChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2xpZW50VG9rZW5Mb2FkZWQoc3RhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFzdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2FkQ2xpZW50VG9rZW4oKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+IHN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2hlcyBhIGNsaWVudFRva2VuIGZyb20gdGhlIGJhY2tlbmQgYW5zIHNhdmVzIGl0IGluIHRoZSBzdG9yZSB3aGVyZSBnZXRDbGllbnRUb2tlbiBjYW4gdXNlIGl0LlxuICAgKiBUaGUgbmV3IGNsaWVudFRva2VuIGlzIHJldHVybmVkLlxuICAgKi9cbiAgcmVmcmVzaENsaWVudFRva2VuKCk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+IHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2FkQ2xpZW50VG9rZW4oKSk7XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEF1dGhTZWxlY3RvcnMuZ2V0Q2xpZW50VG9rZW5TdGF0ZSksXG4gICAgICBmaWx0ZXIoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+XG4gICAgICAgIHRoaXMuaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZSlcbiAgICAgICksXG4gICAgICBtYXAoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+IHN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChzdGF0ZS5zdWNjZXNzIHx8IHN0YXRlLmVycm9yKSAmJiAhc3RhdGUubG9hZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdXNlciBpcyBsb2dnZWQgaW47IGFuZCBgZmFsc2VgIGlmIHRoZSB1c2VyIGlzIGFub255bW91cy5cbiAgICovXG4gIGlzVXNlckxvZ2dlZEluKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldFVzZXJUb2tlbigpLnBpcGUoXG4gICAgICBtYXAodXNlclRva2VuID0+IEJvb2xlYW4odXNlclRva2VuKSAmJiBCb29sZWFuKHVzZXJUb2tlbi5hY2Nlc3NfdG9rZW4pKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==