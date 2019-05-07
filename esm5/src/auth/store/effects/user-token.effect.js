/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from './../actions/user-token.action';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { UserAuthenticationTokenService } from './../../services/user-authentication/user-authentication-token.service';
import { Login } from '../actions/login-logout.action';
var UserTokenEffects = /** @class */ (function () {
    function UserTokenEffects(actions$, userTokenService) {
        var _this = this;
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadUserToken$ = this.actions$.pipe(ofType(fromActions.LOAD_USER_TOKEN), map(function (action) { return action.payload; }), mergeMap(function (_a) {
            var userId = _a.userId, password = _a.password;
            return _this.userTokenService.loadToken(userId, password).pipe(map(function (token) {
                /** @type {?} */
                var date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.userId = userId;
                token.expiration_time = date;
                return new fromActions.LoadUserTokenSuccess(token);
            }), catchError(function (error) { return of(new fromActions.LoadUserTokenFail(error)); }));
        }));
        this.login$ = this.actions$.pipe(ofType(fromActions.LOAD_USER_TOKEN_SUCCESS), map(function () { return new Login(); }));
        this.refreshUserToken$ = this.actions$.pipe(ofType(fromActions.REFRESH_USER_TOKEN), map(function (action) { return action.payload; }), switchMap(function (_a) {
            var userId = _a.userId, refreshToken = _a.refreshToken;
            return _this.userTokenService.refreshToken(refreshToken).pipe(map(function (token) {
                token.userId = userId;
                /** @type {?} */
                var date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.userId = userId;
                token.expiration_time = date;
                return new fromActions.RefreshUserTokenSuccess(token);
            }, catchError(function (error) { return of(new fromActions.RefreshUserTokenFail(error)); })));
        }));
    }
    UserTokenEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserTokenEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAuthenticationTokenService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserTokenEffects.prototype, "loadUserToken$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserTokenEffects.prototype, "login$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserTokenEffects.prototype, "refreshUserToken$", void 0);
    return UserTokenEffects;
}());
export { UserTokenEffects };
if (false) {
    /** @type {?} */
    UserTokenEffects.prototype.loadUserToken$;
    /** @type {?} */
    UserTokenEffects.prototype.login$;
    /** @type {?} */
    UserTokenEffects.prototype.refreshUserToken$;
    /**
     * @type {?}
     * @private
     */
    UserTokenEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UserTokenEffects.prototype.userTokenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9lZmZlY3RzL3VzZXItdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxLQUFLLFdBQVcsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFHeEgsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXZEO0lBNENFLDBCQUNVLFFBQWlCLEVBQ2pCLGdCQUFnRDtRQUYxRCxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFnQztRQTNDMUQsbUJBQWMsR0FBZ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzlELE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQ25DLEdBQUcsQ0FBQyxVQUFDLE1BQWlDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUMxRCxRQUFRLENBQUMsVUFBQyxFQUFvQjtnQkFBbEIsa0JBQU0sRUFBRSxzQkFBUTtZQUMxQixPQUFPLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDM0QsR0FBRyxDQUFDLFVBQUMsS0FBZ0I7O29CQUNiLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0RCxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDdEIsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLE9BQU8sSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FDbEUsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixXQUFNLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM1QyxNQUFNLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLEVBQzNDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxLQUFLLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FDdkIsQ0FBQztRQUdGLHNCQUFpQixHQUFnQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDakUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN0QyxHQUFHLENBQUMsVUFBQyxNQUFvQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDN0QsU0FBUyxDQUFDLFVBQUMsRUFBd0I7Z0JBQXRCLGtCQUFNLEVBQUUsOEJBQVk7WUFDL0IsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDMUQsR0FBRyxDQUFDLFVBQUMsS0FBZ0I7Z0JBQ25CLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztvQkFDaEIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RELEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN0QixLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDN0IsT0FBTyxJQUFJLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4RCxDQUFDLEVBQUUsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQS9DLENBQStDLENBQUMsQ0FBQyxDQUN6RSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQS9DTCxVQUFVOzs7O2dCQVhGLE9BQU87Z0JBTVAsOEJBQThCOztJQVFyQztRQURDLE1BQU0sRUFBRTswQ0FDTyxVQUFVOzREQWV4QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNELFVBQVU7b0RBR2hCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ1UsVUFBVTsrREFlM0I7SUFNSix1QkFBQztDQUFBLEFBaERELElBZ0RDO1NBL0NZLGdCQUFnQjs7O0lBQzNCLDBDQWdCRTs7SUFFRixrQ0FJRTs7SUFFRiw2Q0FnQkU7Ozs7O0lBR0Esb0NBQXlCOzs7OztJQUN6Qiw0Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLy4uL2FjdGlvbnMvdXNlci10b2tlbi5hY3Rpb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdXNlci1hdXRoZW50aWNhdGlvbi91c2VyLWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBVc2VyVG9rZW5BY3Rpb24gfSBmcm9tICcuLi9hY3Rpb25zL3VzZXItdG9rZW4uYWN0aW9uJztcbmltcG9ydCB7IExvZ2luIH0gZnJvbSAnLi4vYWN0aW9ucy9sb2dpbi1sb2dvdXQuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJUb2tlbkVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFVzZXJUb2tlbiQ6IE9ic2VydmFibGU8VXNlclRva2VuQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuTG9hZFVzZXJUb2tlbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKCh7IHVzZXJJZCwgcGFzc3dvcmQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlclRva2VuU2VydmljZS5sb2FkVG9rZW4odXNlcklkLCBwYXNzd29yZCkucGlwZShcbiAgICAgICAgbWFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKGRhdGUuZ2V0U2Vjb25kcygpICsgdG9rZW4uZXhwaXJlc19pbik7XG4gICAgICAgICAgdG9rZW4udXNlcklkID0gdXNlcklkO1xuICAgICAgICAgIHRva2VuLmV4cGlyYXRpb25fdGltZSA9IGRhdGU7XG4gICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9ucy5Mb2FkVXNlclRva2VuU3VjY2Vzcyh0b2tlbik7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5Mb2FkVXNlclRva2VuRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2dpbiQ6IE9ic2VydmFibGU8TG9naW4+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTUyksXG4gICAgbWFwKCgpID0+IG5ldyBMb2dpbigpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoVXNlclRva2VuJDogT2JzZXJ2YWJsZTxVc2VyVG9rZW5BY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5SRUZSRVNIX1VTRVJfVE9LRU4pLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5SZWZyZXNoVXNlclRva2VuKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKCh7IHVzZXJJZCwgcmVmcmVzaFRva2VuIH0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJUb2tlblNlcnZpY2UucmVmcmVzaFRva2VuKHJlZnJlc2hUb2tlbikucGlwZShcbiAgICAgICAgbWFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgICAgdG9rZW4udXNlcklkID0gdXNlcklkO1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGRhdGUuc2V0U2Vjb25kcyhkYXRlLmdldFNlY29uZHMoKSArIHRva2VuLmV4cGlyZXNfaW4pO1xuICAgICAgICAgIHRva2VuLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgICB0b2tlbi5leHBpcmF0aW9uX3RpbWUgPSBkYXRlO1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbnMuUmVmcmVzaFVzZXJUb2tlblN1Y2Nlc3ModG9rZW4pO1xuICAgICAgICB9LCBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5SZWZyZXNoVXNlclRva2VuRmFpbChlcnJvcikpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlclRva2VuU2VydmljZTogVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==