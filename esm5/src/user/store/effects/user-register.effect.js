/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { LoadUserToken, Logout } from '../../../auth/index';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
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
                new LoadUserToken({
                    userId: user.uid,
                    password: user.password,
                }),
                new fromActions.RegisterUserSuccess(),
            ]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.RegisterUserFail(makeHttpErrorSerializable(error)));
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
                new Logout(),
            ]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.RemoveUserFail(makeHttpErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItcmVnaXN0ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sS0FBSyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFFL0Q7SUEyQ0UsNkJBQ1UsUUFBaUIsRUFDakIsYUFBNEI7UUFGdEMsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBMUN0QyxrQkFBYSxHQUVULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUNqQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFnQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDekQsUUFBUTs7OztRQUFDLFVBQUMsSUFBZ0I7WUFDeEIsT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3BDLFNBQVM7Ozs7WUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBO2dCQUNuQixJQUFJLGFBQWEsQ0FBQztvQkFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQ3hCLENBQUM7Z0JBQ0YsSUFBSSxXQUFXLENBQUMsbUJBQW1CLEVBQUU7YUFDdEMsRUFOb0IsQ0FNcEIsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUF0RSxDQUFzRSxFQUN2RSxDQUNGO1FBWEQsQ0FXQyxFQUNGLENBQ0YsQ0FBQztRQUdGLGdCQUFXLEdBRVAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQy9CLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQThCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUN2RCxRQUFROzs7O1FBQUMsVUFBQyxNQUFjO1lBQ3RCLE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMzQyxTQUFTOzs7O1lBQUMsVUFBQSxPQUFPLElBQUksT0FBQTtnQkFDbkIsSUFBSSxXQUFXLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ25DLElBQUksTUFBTSxFQUFFO2FBQ2IsRUFIb0IsQ0FHcEIsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBcEUsQ0FBb0UsRUFDckUsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQTlDTCxVQUFVOzs7O2dCQVRGLE9BQU87Z0JBTVAsYUFBYTs7SUFNcEI7UUFEQyxNQUFNLEVBQUU7MENBQ00sVUFBVTs4REFtQnZCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ksVUFBVTs0REFnQnJCO0lBTUosMEJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQTlDWSxtQkFBbUI7OztJQUM5Qiw0Q0FvQkU7O0lBRUYsMENBaUJFOzs7OztJQUdBLHVDQUF5Qjs7Ozs7SUFDekIsNENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2FkVXNlclRva2VuLCBMb2dvdXQgfSBmcm9tICcuLi8uLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJSZWdpc3RlckVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgcmVnaXN0ZXJVc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5Vc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbiB8IExvYWRVc2VyVG9rZW5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuUkVHSVNURVJfVVNFUiksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLlJlZ2lzdGVyVXNlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKCh1c2VyOiBVc2VyU2lnblVwKSA9PlxuICAgICAgdGhpcy51c2VyQ29ubmVjdG9yLnJlZ2lzdGVyKHVzZXIpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChfcmVzdWx0ID0+IFtcbiAgICAgICAgICBuZXcgTG9hZFVzZXJUb2tlbih7XG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIudWlkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgbmV3IGZyb21BY3Rpb25zLlJlZ2lzdGVyVXNlclN1Y2Nlc3MoKSxcbiAgICAgICAgXSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbnMuUmVnaXN0ZXJVc2VyRmFpbChtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbW92ZVVzZXIkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlVzZXJSZWdpc3Rlck9yUmVtb3ZlQWN0aW9uIHwgTG9nb3V0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlJFTU9WRV9VU0VSKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuUmVtb3ZlVXNlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKCh1c2VySWQ6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckNvbm5lY3Rvci5yZW1vdmUodXNlcklkKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoX3Jlc3VsdCA9PiBbXG4gICAgICAgICAgbmV3IGZyb21BY3Rpb25zLlJlbW92ZVVzZXJTdWNjZXNzKCksXG4gICAgICAgICAgbmV3IExvZ291dCgpLFxuICAgICAgICBdKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9ucy5SZW1vdmVVc2VyRmFpbChtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckNvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=