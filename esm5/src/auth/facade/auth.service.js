import { __decorate } from "tslib";
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
    AuthService.prototype.authorize = function (userId, password) {
        this.store.dispatch(new AuthActions.LoadUserToken({
            userId: userId,
            password: password,
        }));
    };
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
    AuthService.prototype.getOccUserId = function () {
        return this.getUserToken().pipe(map(function (userToken) {
            if (!!userToken && !!userToken.userId) {
                return userToken.userId;
            }
            else {
                return OCC_USER_ID_ANONYMOUS;
            }
        }));
    };
    /**
     * Returns the user's token
     */
    AuthService.prototype.getUserToken = function () {
        return this.store.pipe(select(AuthSelectors.getUserToken));
    };
    /**
     * Refreshes the user token
     * @param token a user token to refresh
     */
    AuthService.prototype.refreshUserToken = function (token) {
        this.store.dispatch(new AuthActions.RefreshUserToken({
            refreshToken: token.refresh_token,
        }));
    };
    /**
     * Store the provided token
     */
    AuthService.prototype.authorizeWithToken = function (token) {
        this.store.dispatch(new AuthActions.LoadUserTokenSuccess(token));
    };
    /**
     * Logout a storefront customer
     */
    AuthService.prototype.logout = function () {
        var _this = this;
        this.getUserToken()
            .pipe(take(1))
            .subscribe(function (userToken) {
            _this.store.dispatch(new AuthActions.Logout());
            if (Boolean(userToken) && userToken.userId === OCC_USER_ID_CURRENT) {
                _this.store.dispatch(new AuthActions.RevokeUserToken(userToken));
            }
        });
    };
    /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     */
    AuthService.prototype.getClientToken = function () {
        var _this = this;
        return this.store.pipe(select(AuthSelectors.getClientTokenState), filter(function (state) {
            if (_this.isClientTokenLoaded(state)) {
                return true;
            }
            else {
                if (!state.loading) {
                    _this.store.dispatch(new AuthActions.LoadClientToken());
                }
                return false;
            }
        }), map(function (state) { return state.value; }));
    };
    /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     */
    AuthService.prototype.refreshClientToken = function () {
        var _this = this;
        this.store.dispatch(new AuthActions.LoadClientToken());
        return this.store.pipe(select(AuthSelectors.getClientTokenState), filter(function (state) {
            return _this.isClientTokenLoaded(state);
        }), map(function (state) { return state.value; }));
    };
    AuthService.prototype.isClientTokenLoaded = function (state) {
        return (state.success || state.error) && !state.loading;
    };
    /**
     * Returns `true` if the user is logged in; and `false` if the user is anonymous.
     */
    AuthService.prototype.isUserLoggedIn = function () {
        return this.getUserToken().pipe(map(function (userToken) { return Boolean(userToken) && Boolean(userToken.access_token); }));
    };
    AuthService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.Store)); }, token: AuthService, providedIn: "root" });
    AuthService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG1CQUFtQixHQUNwQixNQUFNLCtCQUErQixDQUFDO0FBR3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUt6RDtJQUNFLHFCQUFzQixLQUEyQjtRQUEzQixVQUFLLEdBQUwsS0FBSyxDQUFzQjtJQUFHLENBQUM7SUFFckQ7Ozs7T0FJRztJQUNILCtCQUFTLEdBQVQsVUFBVSxNQUFjLEVBQUUsUUFBZ0I7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUM1QixNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILGtDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzdCLEdBQUcsQ0FBQyxVQUFBLFNBQVM7WUFDWCxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUN6QjtpQkFBTTtnQkFD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LENBQUM7SUFDMUQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0NBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDN0IsR0FBRyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7O2dCQTlINEIsS0FBSzs7O0lBRHZCLFdBQVc7UUFIdkIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFdBQVcsQ0FnSXZCO3NCQWpKRDtDQWlKQyxBQWhJRCxJQWdJQztTQWhJWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4sIFVzZXJUb2tlbiB9IGZyb20gJy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQXV0aCB9IGZyb20gJy4uL3N0b3JlL2F1dGgtc3RhdGUnO1xuaW1wb3J0IHsgQXV0aFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQXV0aD4pIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgbmV3IHVzZXIgdG9rZW5cbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICovXG4gIGF1dGhvcml6ZSh1c2VySWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlbih7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyB0aGUgdXNlcklkIHRoZSBPQ0MgY2FsbHMgc2hvdWxkIHVzZSwgZGVwZW5kaW5nXG4gICAqIG9uIHdoZXRoZXIgdGhlcmUgaXMgYW4gYWN0aXZlIHN0b3JlZnJvbnQgc2Vzc2lvbiBvciBub3QuXG4gICAqXG4gICAqIEl0IHJldHVybnMgdGhlIHVzZXJJZCBvZiB0aGUgY3VycmVudCBzdG9yZWZyb250IHVzZXIgb3IgJ2Fub255bW91cydcbiAgICogaW4gdGhlIGNhc2UgdGhlcmUgYXJlIG5vIHNpZ25lZCBpbiB1c2VyIGluIHRoZSBzdG9yZWZyb250LlxuICAgKlxuICAgKiBUaGUgdXNlciBpZCBvZiBhIHJlZ3VsYXIgY3VzdG9tZXIgc2Vzc2lvbiBpcyAnY3VycmVudCcuICBJbiB0aGUgY2FzZSBvZiBhblxuICAgKiBhc20gY3VzdG9tZXIgZW11bGF0aW9uIHNlc3Npb24sIHRoZSB1c2VySWQgd2lsbCBiZSB0aGUgY3VzdG9tZXJJZC5cbiAgICovXG4gIGdldE9jY1VzZXJJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFVzZXJUb2tlbigpLnBpcGUoXG4gICAgICBtYXAodXNlclRva2VuID0+IHtcbiAgICAgICAgaWYgKCEhdXNlclRva2VuICYmICEhdXNlclRva2VuLnVzZXJJZCkge1xuICAgICAgICAgIHJldHVybiB1c2VyVG9rZW4udXNlcklkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1c2VyJ3MgdG9rZW5cbiAgICovXG4gIGdldFVzZXJUb2tlbigpOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KEF1dGhTZWxlY3RvcnMuZ2V0VXNlclRva2VuKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIHRoZSB1c2VyIHRva2VuXG4gICAqIEBwYXJhbSB0b2tlbiBhIHVzZXIgdG9rZW4gdG8gcmVmcmVzaFxuICAgKi9cbiAgcmVmcmVzaFVzZXJUb2tlbih0b2tlbjogVXNlclRva2VuKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBBdXRoQWN0aW9ucy5SZWZyZXNoVXNlclRva2VuKHtcbiAgICAgICAgcmVmcmVzaFRva2VuOiB0b2tlbi5yZWZyZXNoX3Rva2VuLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlIHRoZSBwcm92aWRlZCB0b2tlblxuICAgKi9cbiAgYXV0aG9yaXplV2l0aFRva2VuKHRva2VuOiBVc2VyVG9rZW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuU3VjY2Vzcyh0b2tlbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBhIHN0b3JlZnJvbnQgY3VzdG9tZXJcbiAgICovXG4gIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldFVzZXJUb2tlbigpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSh1c2VyVG9rZW4gPT4ge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoQWN0aW9ucy5Mb2dvdXQoKSk7XG4gICAgICAgIGlmIChCb29sZWFuKHVzZXJUb2tlbikgJiYgdXNlclRva2VuLnVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQ1VSUkVOVCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLlJldm9rZVVzZXJUb2tlbih1c2VyVG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGNsaWVudCB0b2tlbi4gIFRoZSBjbGllbnQgdG9rZW4gZnJvbSB0aGUgc3RvcmUgaXMgcmV0dXJuZWQgaWYgdGhlcmUgaXMgb25lLlxuICAgKiBPdGhlcndpc2UsIGFuIG5ldyB0b2tlbiBpcyBmZXRjaGVkIGZyb20gdGhlIGJhY2tlbmQgYW5kIHNhdmVkIGluIHRoZSBzdG9yZS5cbiAgICovXG4gIGdldENsaWVudFRva2VuKCk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KEF1dGhTZWxlY3RvcnMuZ2V0Q2xpZW50VG9rZW5TdGF0ZSksXG4gICAgICBmaWx0ZXIoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvYWRDbGllbnRUb2tlbigpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT4gc3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgY2xpZW50VG9rZW4gZnJvbSB0aGUgYmFja2VuZCBhbnMgc2F2ZXMgaXQgaW4gdGhlIHN0b3JlIHdoZXJlIGdldENsaWVudFRva2VuIGNhbiB1c2UgaXQuXG4gICAqIFRoZSBuZXcgY2xpZW50VG9rZW4gaXMgcmV0dXJuZWQuXG4gICAqL1xuICByZWZyZXNoQ2xpZW50VG9rZW4oKTogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbj4ge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkxvYWRDbGllbnRUb2tlbigpKTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQXV0aFNlbGVjdG9ycy5nZXRDbGllbnRUb2tlblN0YXRlKSxcbiAgICAgIGZpbHRlcigoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT5cbiAgICAgICAgdGhpcy5pc0NsaWVudFRva2VuTG9hZGVkKHN0YXRlKVxuICAgICAgKSxcbiAgICAgIG1hcCgoc3RhdGU6IExvYWRlclN0YXRlPENsaWVudFRva2VuPikgPT4gc3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0NsaWVudFRva2VuTG9hZGVkKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHN0YXRlLnN1Y2Nlc3MgfHwgc3RhdGUuZXJyb3IpICYmICFzdGF0ZS5sb2FkaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbjsgYW5kIGBmYWxzZWAgaWYgdGhlIHVzZXIgaXMgYW5vbnltb3VzLlxuICAgKi9cbiAgaXNVc2VyTG9nZ2VkSW4oKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIG1hcCh1c2VyVG9rZW4gPT4gQm9vbGVhbih1c2VyVG9rZW4pICYmIEJvb2xlYW4odXNlclRva2VuLmFjY2Vzc190b2tlbikpXG4gICAgKTtcbiAgfVxufVxuIl19