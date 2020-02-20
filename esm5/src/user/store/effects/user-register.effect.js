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
            return _this.userConnector.remove(userId).pipe(switchMap(function (_result) { return [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItcmVnaXN0ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQztJQTBERSw2QkFDVSxRQUFpQixFQUNqQixhQUE0QjtRQUZ0QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUExRHRDLGtCQUFhLEdBRVQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQ2pDLEdBQUcsQ0FBQyxVQUFDLE1BQWdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN6RCxRQUFRLENBQUMsVUFBQyxJQUFnQjtZQUN4QixPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDcEMsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFyQyxDQUFxQyxDQUFDLEVBQ2hELFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFsRSxDQUFrRSxDQUNuRSxDQUNGO1FBTEQsQ0FLQyxDQUNGLENBQ0YsQ0FBQztRQUdGLG1CQUFjLEdBRVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxVQUFDLE1BQWlDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUMxRCxRQUFRLENBQUMsVUFBQyxFQUFrQjtnQkFBaEIsY0FBSSxFQUFFLHNCQUFRO1lBQ3hCLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDbkQsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUE7Z0JBQ2hCLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQztvQkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNoQixRQUFRLEVBQUUsUUFBUTtpQkFDbkIsQ0FBQztnQkFDRixJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRTthQUN2QyxFQU5pQixDQU1qQixDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQW5FLENBQW1FLENBQ3BFLENBQ0Y7UUFYRCxDQVdDLENBQ0YsQ0FDRixDQUFDO1FBR0YsZ0JBQVcsR0FFUCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFDL0IsR0FBRyxDQUFDLFVBQUMsTUFBOEIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3ZELFFBQVEsQ0FBQyxVQUFDLE1BQWM7WUFDdEIsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzNDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBO2dCQUNuQixJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDbkMsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO2FBQ3pCLEVBSG9CLENBR3BCLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQWhFLENBQWdFLENBQ2pFLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFGZ0IsT0FBTztnQkFDRixhQUFhOztJQTFEdEM7UUFEQyxNQUFNLEVBQUU7OERBY1A7SUFHRjtRQURDLE1BQU0sRUFBRTsrREFvQlA7SUFHRjtRQURDLE1BQU0sRUFBRTs0REFpQlA7SUF4RFMsbUJBQW1CO1FBRC9CLFVBQVUsRUFBRTtPQUNBLG1CQUFtQixDQThEL0I7SUFBRCwwQkFBQztDQUFBLEFBOURELElBOERDO1NBOURZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlclNpZ25VcCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJSZWdpc3RlckVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgcmVnaXN0ZXJVc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5SRUdJU1RFUl9VU0VSKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuUmVnaXN0ZXJVc2VyKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHVzZXI6IFVzZXJTaWduVXApID0+XG4gICAgICB0aGlzLnVzZXJDb25uZWN0b3IucmVnaXN0ZXIodXNlcikucGlwZShcbiAgICAgICAgbWFwKCgpID0+IG5ldyBVc2VyQWN0aW9ucy5SZWdpc3RlclVzZXJTdWNjZXNzKCkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IFVzZXJBY3Rpb25zLlJlZ2lzdGVyVXNlckZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlZ2lzdGVyR3Vlc3QkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJSZWdpc3Rlck9yUmVtb3ZlQWN0aW9uIHwgQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5SRUdJU1RFUl9HVUVTVCksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLlJlZ2lzdGVyR3Vlc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgoeyBndWlkLCBwYXNzd29yZCB9KSA9PlxuICAgICAgdGhpcy51c2VyQ29ubmVjdG9yLnJlZ2lzdGVyR3Vlc3QoZ3VpZCwgcGFzc3dvcmQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCh1c2VyID0+IFtcbiAgICAgICAgICBuZXcgQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlbih7XG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIudWlkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5SZWdpc3Rlckd1ZXN0U3VjY2VzcygpLFxuICAgICAgICBdKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5SZWdpc3Rlckd1ZXN0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVtb3ZlVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24gfCBBdXRoQWN0aW9ucy5Mb2dvdXRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuUkVNT1ZFX1VTRVIpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5SZW1vdmVVc2VyKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHVzZXJJZDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQ29ubmVjdG9yLnJlbW92ZSh1c2VySWQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChfcmVzdWx0ID0+IFtcbiAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuUmVtb3ZlVXNlclN1Y2Nlc3MoKSxcbiAgICAgICAgICBuZXcgQXV0aEFjdGlvbnMuTG9nb3V0KCksXG4gICAgICAgIF0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IFVzZXJBY3Rpb25zLlJlbW92ZVVzZXJGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJDb25uZWN0b3I6IFVzZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19