/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import * as fromActions from '../actions/user-register.action';
import { LoadUserToken, Logout } from '../../../auth/index';
import { OccUserService } from '../../../user/occ/index';
var UserRegisterEffects = /** @class */ (function () {
    function UserRegisterEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.registerUser$ = this.actions$.pipe(ofType(fromActions.REGISTER_USER), map(function (action) { return action.payload; }), mergeMap(function (user) {
            return _this.userService.registerUser(user).pipe(switchMap(function (_result) { return [
                new LoadUserToken({
                    userId: user.uid,
                    password: user.password,
                }),
                new fromActions.RegisterUserSuccess(),
            ]; }), catchError(function (error) { return of(new fromActions.RegisterUserFail(error)); }));
        }));
        this.removeUser$ = this.actions$.pipe(ofType(fromActions.REMOVE_USER), map(function (action) { return action.payload; }), mergeMap(function (userId) {
            return _this.userService.removeUser(userId).pipe(switchMap(function (_result) { return [
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
        { type: OccUserService }
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
    UserRegisterEffects.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItcmVnaXN0ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sS0FBSyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQ7SUF1Q0UsNkJBQW9CLFFBQWlCLEVBQVUsV0FBMkI7UUFBMUUsaUJBQThFO1FBQTFELGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFwQzFFLGtCQUFhLEdBRVQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQ2pDLEdBQUcsQ0FBQyxVQUFDLE1BQWdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN6RCxRQUFRLENBQUMsVUFBQyxJQUEwQjtZQUNsQyxPQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDN0MsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUE7Z0JBQ25CLElBQUksYUFBYSxDQUFDO29CQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUc7b0JBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDeEIsQ0FBQztnQkFDRixJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRTthQUN0QyxFQU5vQixDQU1wQixDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FDakUsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixnQkFBVyxHQUVQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUMvQixHQUFHLENBQUMsVUFBQyxNQUE4QixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDdkQsUUFBUSxDQUFDLFVBQUMsTUFBYztZQUN0QixPQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDN0MsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUE7Z0JBQ25CLElBQUksV0FBVyxDQUFDLGlCQUFpQixFQUFFO2dCQUNuQyxJQUFJLE1BQU0sRUFBRTthQUNiLEVBSG9CLENBR3BCLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FDL0QsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFFMkUsQ0FBQzs7Z0JBdkMvRSxVQUFVOzs7O2dCQVZNLE9BQU87Z0JBUWYsY0FBYzs7SUFLckI7UUFEQyxNQUFNLEVBQUU7MENBQ00sVUFBVTs4REFpQnZCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ksVUFBVTs0REFjckI7SUFHSiwwQkFBQztDQUFBLEFBeENELElBd0NDO1NBdkNZLG1CQUFtQjs7O0lBQzlCLDRDQWtCRTs7SUFFRiwwQ0FlRTs7Ozs7SUFFVSx1Q0FBeUI7Ozs7O0lBQUUsMENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBtZXJnZU1hcCwgY2F0Y2hFcnJvciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uJztcbmltcG9ydCB7IExvYWRVc2VyVG9rZW4sIExvZ291dCB9IGZyb20gJy4uLy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgVXNlclJlZ2lzdGVyRm9ybURhdGEgfSBmcm9tICcuLi8uLi8uLi91c2VyL21vZGVsL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgT2NjVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91c2VyL29jYy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUmVnaXN0ZXJFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlZ2lzdGVyVXNlciQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24gfCBMb2FkVXNlclRva2VuXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlJFR0lTVEVSX1VTRVIpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5SZWdpc3RlclVzZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgodXNlcjogVXNlclJlZ2lzdGVyRm9ybURhdGEpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyVXNlcih1c2VyKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoX3Jlc3VsdCA9PiBbXG4gICAgICAgICAgbmV3IExvYWRVc2VyVG9rZW4oe1xuICAgICAgICAgICAgdXNlcklkOiB1c2VyLnVpZCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5SZWdpc3RlclVzZXJTdWNjZXNzKCksXG4gICAgICAgIF0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5SZWdpc3RlclVzZXJGYWlsKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbW92ZVVzZXIkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlVzZXJSZWdpc3Rlck9yUmVtb3ZlQWN0aW9uIHwgTG9nb3V0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlJFTU9WRV9VU0VSKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuUmVtb3ZlVXNlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKCh1c2VySWQ6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UucmVtb3ZlVXNlcih1c2VySWQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChfcmVzdWx0ID0+IFtcbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuUmVtb3ZlVXNlclN1Y2Nlc3MoKSxcbiAgICAgICAgICBuZXcgTG9nb3V0KCksXG4gICAgICAgIF0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5SZW1vdmVVc2VyRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgdXNlclNlcnZpY2U6IE9jY1VzZXJTZXJ2aWNlKSB7fVxufVxuIl19