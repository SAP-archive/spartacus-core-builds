/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromActions from '../actions/user-register.action';
var UserRegisterEffects = /** @class */ (function () {
    function UserRegisterEffects(actions$, userConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userConnector = userConnector;
        this.registerUser$ = this.actions$.pipe(ofType(fromActions.REGISTER_USER), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            return _this.userConnector.register(user).pipe(switchMap((/**
             * @param {?} _result
             * @return {?}
             */
            function (_result) { return [
                new AuthActions.LoadUserToken({
                    userId: user.uid,
                    password: user.password,
                }),
                new fromActions.RegisterUserSuccess(),
            ]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.RegisterUserFail(makeErrorSerializable(error)));
            })));
        })));
        this.removeUser$ = this.actions$.pipe(ofType(fromActions.REMOVE_USER), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            return _this.userConnector.remove(userId).pipe(switchMap((/**
             * @param {?} _result
             * @return {?}
             */
            function (_result) { return [
                new fromActions.RemoveUserSuccess(),
                new AuthActions.Logout(),
            ]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.RemoveUserFail(makeErrorSerializable(error)));
            })));
        })));
    }
    UserRegisterEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserRegisterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserConnector }
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
    UserRegisterEffects.prototype.userConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItcmVnaXN0ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxLQUFLLFdBQVcsTUFBTSxpQ0FBaUMsQ0FBQztBQUUvRDtJQTJDRSw2QkFDVSxRQUFpQixFQUNqQixhQUE0QjtRQUZ0QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUExQ3RDLGtCQUFhLEdBRVQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQ2pDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQWdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUN6RCxRQUFROzs7O1FBQUMsVUFBQyxJQUFnQjtZQUN4QixPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDcEMsU0FBUzs7OztZQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUE7Z0JBQ25CLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQztvQkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQ3hCLENBQUM7Z0JBQ0YsSUFBSSxXQUFXLENBQUMsbUJBQW1CLEVBQUU7YUFDdEMsRUFOb0IsQ0FNcEIsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFsRSxDQUFrRSxFQUNuRSxDQUNGO1FBWEQsQ0FXQyxFQUNGLENBQ0YsQ0FBQztRQUdGLGdCQUFXLEdBRVAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQy9CLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQThCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUN2RCxRQUFROzs7O1FBQUMsVUFBQyxNQUFjO1lBQ3RCLE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMzQyxTQUFTOzs7O1lBQUMsVUFBQSxPQUFPLElBQUksT0FBQTtnQkFDbkIsSUFBSSxXQUFXLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ25DLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTthQUN6QixFQUhvQixDQUdwQixFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFoRSxDQUFnRSxFQUNqRSxDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBOUNMLFVBQVU7Ozs7Z0JBVEYsT0FBTztnQkFNUCxhQUFhOztJQU1wQjtRQURDLE1BQU0sRUFBRTswQ0FDTSxVQUFVOzhEQW1CdkI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDSSxVQUFVOzREQWdCckI7SUFNSiwwQkFBQztDQUFBLEFBL0NELElBK0NDO1NBOUNZLG1CQUFtQjs7O0lBQzlCLDRDQW9CRTs7SUFFRiwwQ0FpQkU7Ozs7O0lBR0EsdUNBQXlCOzs7OztJQUN6Qiw0Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlci1yZWdpc3Rlci5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJlZ2lzdGVyRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZWdpc3RlclVzZXIkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlVzZXJSZWdpc3Rlck9yUmVtb3ZlQWN0aW9uIHwgQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5SRUdJU1RFUl9VU0VSKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuUmVnaXN0ZXJVc2VyKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHVzZXI6IFVzZXJTaWduVXApID0+XG4gICAgICB0aGlzLnVzZXJDb25uZWN0b3IucmVnaXN0ZXIodXNlcikucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKF9yZXN1bHQgPT4gW1xuICAgICAgICAgIG5ldyBBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuKHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlci51aWQsXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuUmVnaXN0ZXJVc2VyU3VjY2VzcygpLFxuICAgICAgICBdKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9ucy5SZWdpc3RlclVzZXJGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVVc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5Vc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbiB8IEF1dGhBY3Rpb25zLkxvZ291dFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5SRU1PVkVfVVNFUiksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLlJlbW92ZVVzZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgodXNlcklkOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJDb25uZWN0b3IucmVtb3ZlKHVzZXJJZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKF9yZXN1bHQgPT4gW1xuICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5SZW1vdmVVc2VyU3VjY2VzcygpLFxuICAgICAgICAgIG5ldyBBdXRoQWN0aW9ucy5Mb2dvdXQoKSxcbiAgICAgICAgXSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbnMuUmVtb3ZlVXNlckZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckNvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=