/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { LoadOpenIdToken, LoadUserToken, Logout } from '../../../auth/index';
import { UserAccountConnector } from '../../connectors/account/user-account.connector';
import * as fromActions from '../actions/user-register.action';
var UserRegisterEffects = /** @class */ (function () {
    function UserRegisterEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.registerUser$ = this.actions$.pipe(ofType(fromActions.REGISTER_USER), map(function (action) { return action.payload; }), mergeMap(function (user) {
            return _this.userAccountConnector.register(user).pipe(switchMap(function (_result) { return [
                new LoadUserToken({
                    userId: user.uid,
                    password: user.password,
                }),
                new LoadOpenIdToken({
                    username: user.uid,
                    password: user.password,
                }),
                new fromActions.RegisterUserSuccess(),
            ]; }), catchError(function (error) { return of(new fromActions.RegisterUserFail(error)); }));
        }));
        this.removeUser$ = this.actions$.pipe(ofType(fromActions.REMOVE_USER), map(function (action) { return action.payload; }), mergeMap(function (userId) {
            return _this.userAccountConnector.remove(userId).pipe(switchMap(function (_result) { return [
                new fromActions.RemoveUserSuccess(),
                new Logout(),
            ]; }), catchError(function (error) { return of(new fromActions.RemoveUserFail(error)); }));
        }));
    }
    UserRegisterEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserRegisterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAccountConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserRegisterEffects.prototype, "registerUser$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserRegisterEffects.prototype, "removeUser$", void 0);
    return UserRegisterEffects;
}());
export { UserRegisterEffects };
if (false) {
    /** @type {?} */
    UserRegisterEffects.prototype.registerUser$;
    /** @type {?} */
    UserRegisterEffects.prototype.removeUser$;
    /**
     * @type {?}
     * @private
     */
    UserRegisterEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UserRegisterEffects.prototype.userAccountConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItcmVnaXN0ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sS0FBSyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFFL0Q7SUEyQ0UsNkJBQ1UsUUFBaUIsRUFDakIsb0JBQTBDO1FBRnBELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBMUNwRCxrQkFBYSxHQUVULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUNqQyxHQUFHLENBQUMsVUFBQyxNQUFnQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDekQsUUFBUSxDQUFDLFVBQUMsSUFBZ0I7WUFDeEIsT0FBTyxLQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDbEQsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUE7Z0JBQ25CLElBQUksYUFBYSxDQUFDO29CQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUc7b0JBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDeEIsQ0FBQztnQkFDRixJQUFJLGVBQWUsQ0FBQztvQkFDbEIsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNsQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQ3hCLENBQUM7Z0JBQ0YsSUFBSSxXQUFXLENBQUMsbUJBQW1CLEVBQUU7YUFDdEMsRUFWb0IsQ0FVcEIsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQ2pFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0YsZ0JBQVcsR0FFUCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFDL0IsR0FBRyxDQUFDLFVBQUMsTUFBOEIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3ZELFFBQVEsQ0FBQyxVQUFDLE1BQWM7WUFDdEIsT0FBTyxLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDbEQsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUE7Z0JBQ25CLElBQUksV0FBVyxDQUFDLGlCQUFpQixFQUFFO2dCQUNuQyxJQUFJLE1BQU0sRUFBRTthQUNiLEVBSG9CLENBR3BCLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FDL0QsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkE5Q0wsVUFBVTs7OztnQkFSRixPQUFPO2dCQUtQLG9CQUFvQjs7SUFNM0I7UUFEQyxNQUFNLEVBQUU7MENBQ00sVUFBVTs4REFxQnZCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ksVUFBVTs0REFjckI7SUFNSiwwQkFBQztDQUFBLEFBL0NELElBK0NDO1NBOUNZLG1CQUFtQjs7O0lBQzlCLDRDQXNCRTs7SUFFRiwwQ0FlRTs7Ozs7SUFHQSx1Q0FBeUI7Ozs7O0lBQ3pCLG1EQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTG9hZE9wZW5JZFRva2VuLCBMb2FkVXNlclRva2VuLCBMb2dvdXQgfSBmcm9tICcuLi8uLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFVzZXJBY2NvdW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hY2NvdW50L3VzZXItYWNjb3VudC5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLXJlZ2lzdGVyLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUmVnaXN0ZXJFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlZ2lzdGVyVXNlciQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24gfCBMb2FkVXNlclRva2VuIHwgTG9hZE9wZW5JZFRva2VuXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlJFR0lTVEVSX1VTRVIpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5SZWdpc3RlclVzZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgodXNlcjogVXNlclNpZ25VcCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFjY291bnRDb25uZWN0b3IucmVnaXN0ZXIodXNlcikucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKF9yZXN1bHQgPT4gW1xuICAgICAgICAgIG5ldyBMb2FkVXNlclRva2VuKHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlci51aWQsXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgTG9hZE9wZW5JZFRva2VuKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVpZCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5SZWdpc3RlclVzZXJTdWNjZXNzKCksXG4gICAgICAgIF0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5SZWdpc3RlclVzZXJGYWlsKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbW92ZVVzZXIkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlVzZXJSZWdpc3Rlck9yUmVtb3ZlQWN0aW9uIHwgTG9nb3V0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlJFTU9WRV9VU0VSKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuUmVtb3ZlVXNlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKCh1c2VySWQ6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFjY291bnRDb25uZWN0b3IucmVtb3ZlKHVzZXJJZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKF9yZXN1bHQgPT4gW1xuICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5SZW1vdmVVc2VyU3VjY2VzcygpLFxuICAgICAgICAgIG5ldyBMb2dvdXQoKSxcbiAgICAgICAgXSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlJlbW92ZVVzZXJGYWlsKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBY2NvdW50Q29ubmVjdG9yOiBVc2VyQWNjb3VudENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=