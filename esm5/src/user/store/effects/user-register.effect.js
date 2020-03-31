import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
var UserRegisterEffects = /** @class */ (function () {
    function UserRegisterEffects(actions$, userConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userConnector = userConnector;
        this.registerUser$ = this.actions$.pipe(ofType(UserActions.REGISTER_USER), map(function (action) { return action.payload; }), mergeMap(function (user) {
            return _this.userConnector.register(user).pipe(map(function () { return new UserActions.RegisterUserSuccess(); }), catchError(function (error) {
                return of(new UserActions.RegisterUserFail(makeErrorSerializable(error)));
            }));
        }));
        this.registerGuest$ = this.actions$.pipe(ofType(UserActions.REGISTER_GUEST), map(function (action) { return action.payload; }), mergeMap(function (_a) {
            var guid = _a.guid, password = _a.password;
            return _this.userConnector.registerGuest(guid, password).pipe(switchMap(function (user) { return [
                new AuthActions.LoadUserToken({
                    userId: user.uid,
                    password: password,
                }),
                new UserActions.RegisterGuestSuccess(),
            ]; }), catchError(function (error) {
                return of(new UserActions.RegisterGuestFail(makeErrorSerializable(error)));
            }));
        }));
        this.removeUser$ = this.actions$.pipe(ofType(UserActions.REMOVE_USER), map(function (action) { return action.payload; }), mergeMap(function (userId) {
            return _this.userConnector.remove(userId).pipe(switchMap(function () { return [
                new UserActions.RemoveUserSuccess(),
                new AuthActions.Logout(),
            ]; }), catchError(function (error) {
                return of(new UserActions.RemoveUserFail(makeErrorSerializable(error)));
            }));
        }));
    }
    UserRegisterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserConnector }
    ]; };
    __decorate([
        Effect()
    ], UserRegisterEffects.prototype, "registerUser$", void 0);
    __decorate([
        Effect()
    ], UserRegisterEffects.prototype, "registerGuest$", void 0);
    __decorate([
        Effect()
    ], UserRegisterEffects.prototype, "removeUser$", void 0);
    UserRegisterEffects = __decorate([
        Injectable()
    ], UserRegisterEffects);
    return UserRegisterEffects;
}());
export { UserRegisterEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItcmVnaXN0ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQztJQTBERSw2QkFDVSxRQUFpQixFQUNqQixhQUE0QjtRQUZ0QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUExRHRDLGtCQUFhLEdBRVQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQ2pDLEdBQUcsQ0FBQyxVQUFDLE1BQWdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN6RCxRQUFRLENBQUMsVUFBQyxJQUFnQjtZQUN4QixPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDcEMsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFyQyxDQUFxQyxDQUFDLEVBQ2hELFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFsRSxDQUFrRSxDQUNuRSxDQUNGO1FBTEQsQ0FLQyxDQUNGLENBQ0YsQ0FBQztRQUdGLG1CQUFjLEdBRVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxVQUFDLE1BQWlDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUMxRCxRQUFRLENBQUMsVUFBQyxFQUFrQjtnQkFBaEIsY0FBSSxFQUFFLHNCQUFRO1lBQ3hCLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDbkQsU0FBUyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUE7Z0JBQ2xCLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQztvQkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNoQixRQUFRLEVBQUUsUUFBUTtpQkFDbkIsQ0FBQztnQkFDRixJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRTthQUN2QyxFQU5tQixDQU1uQixDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUMsS0FBSztnQkFDZixPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQW5FLENBQW1FLENBQ3BFLENBQ0Y7UUFYRCxDQVdDLENBQ0YsQ0FDRixDQUFDO1FBR0YsZ0JBQVcsR0FFUCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFDL0IsR0FBRyxDQUFDLFVBQUMsTUFBOEIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3ZELFFBQVEsQ0FBQyxVQUFDLE1BQWM7WUFDdEIsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzNDLFNBQVMsQ0FBQyxjQUFNLE9BQUE7Z0JBQ2QsSUFBSSxXQUFXLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ25DLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTthQUN6QixFQUhlLENBR2YsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBaEUsQ0FBZ0UsQ0FDakUsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQUZnQixPQUFPO2dCQUNGLGFBQWE7O0lBMUR0QztRQURDLE1BQU0sRUFBRTs4REFjUDtJQUdGO1FBREMsTUFBTSxFQUFFOytEQW9CUDtJQUdGO1FBREMsTUFBTSxFQUFFOzREQWlCUDtJQXhEUyxtQkFBbUI7UUFEL0IsVUFBVSxFQUFFO09BQ0EsbUJBQW1CLENBOEQvQjtJQUFELDBCQUFDO0NBQUEsQUE5REQsSUE4REM7U0E5RFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJlZ2lzdGVyRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZWdpc3RlclVzZXIkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJSZWdpc3Rlck9yUmVtb3ZlQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlJFR0lTVEVSX1VTRVIpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5SZWdpc3RlclVzZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgodXNlcjogVXNlclNpZ25VcCkgPT5cbiAgICAgIHRoaXMudXNlckNvbm5lY3Rvci5yZWdpc3Rlcih1c2VyKS5waXBlKFxuICAgICAgICBtYXAoKCkgPT4gbmV3IFVzZXJBY3Rpb25zLlJlZ2lzdGVyVXNlclN1Y2Nlc3MoKSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5SZWdpc3RlclVzZXJGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWdpc3Rlckd1ZXN0JDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbiB8IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuUkVHSVNURVJfR1VFU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5SZWdpc3Rlckd1ZXN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHsgZ3VpZCwgcGFzc3dvcmQgfSkgPT5cbiAgICAgIHRoaXMudXNlckNvbm5lY3Rvci5yZWdpc3Rlckd1ZXN0KGd1aWQsIHBhc3N3b3JkKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKHVzZXIpID0+IFtcbiAgICAgICAgICBuZXcgQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlbih7XG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIudWlkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5SZWdpc3Rlckd1ZXN0U3VjY2VzcygpLFxuICAgICAgICBdKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgb2YobmV3IFVzZXJBY3Rpb25zLlJlZ2lzdGVyR3Vlc3RGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVVc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbiB8IEF1dGhBY3Rpb25zLkxvZ291dFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5SRU1PVkVfVVNFUiksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLlJlbW92ZVVzZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgodXNlcklkOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJDb25uZWN0b3IucmVtb3ZlKHVzZXJJZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IFtcbiAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuUmVtb3ZlVXNlclN1Y2Nlc3MoKSxcbiAgICAgICAgICBuZXcgQXV0aEFjdGlvbnMuTG9nb3V0KCksXG4gICAgICAgIF0pLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICBvZihuZXcgVXNlckFjdGlvbnMuUmVtb3ZlVXNlckZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckNvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=