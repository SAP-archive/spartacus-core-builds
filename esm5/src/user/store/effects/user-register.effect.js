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
import { UserActions } from '../actions/index';
var UserRegisterEffects = /** @class */ (function () {
    function UserRegisterEffects(actions$, userConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userConnector = userConnector;
        this.registerUser$ = this.actions$.pipe(ofType(UserActions.REGISTER_USER), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            return _this.userConnector.register(user).pipe(map((/**
             * @return {?}
             */
            function () { return new UserActions.RegisterUserSuccess(); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.RegisterUserFail(makeErrorSerializable(error)));
            })));
        })));
        this.removeUser$ = this.actions$.pipe(ofType(UserActions.REMOVE_USER), map((/**
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
                new UserActions.RemoveUserSuccess(),
                new AuthActions.Logout(),
            ]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.RemoveUserFail(makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItcmVnaXN0ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DO0lBcUNFLDZCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCO1FBRnRDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXBDdEMsa0JBQWEsR0FFVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFDakMsR0FBRzs7OztRQUFDLFVBQUMsTUFBZ0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ3pELFFBQVE7Ozs7UUFBQyxVQUFDLElBQWdCO1lBQ3hCLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNwQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsSUFBSSxXQUFXLENBQUMsbUJBQW1CLEVBQUUsRUFBckMsQ0FBcUMsRUFBQyxFQUNoRCxVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBbEUsQ0FBa0UsRUFDbkUsQ0FDRjtRQUxELENBS0MsRUFDRixDQUNGLENBQUM7UUFHRixnQkFBVyxHQUVQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUMvQixHQUFHOzs7O1FBQUMsVUFBQyxNQUE4QixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDdkQsUUFBUTs7OztRQUFDLFVBQUMsTUFBYztZQUN0QixPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDM0MsU0FBUzs7OztZQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUE7Z0JBQ25CLElBQUksV0FBVyxDQUFDLGlCQUFpQixFQUFFO2dCQUNuQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7YUFDekIsRUFIb0IsQ0FHcEIsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBaEUsQ0FBZ0UsRUFDakUsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQXhDTCxVQUFVOzs7O2dCQVRGLE9BQU87Z0JBTVAsYUFBYTs7SUFNcEI7UUFEQyxNQUFNLEVBQUU7MENBQ00sVUFBVTs4REFhdkI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDSSxVQUFVOzREQWdCckI7SUFNSiwwQkFBQztDQUFBLEFBekNELElBeUNDO1NBeENZLG1CQUFtQjs7O0lBQzlCLDRDQWNFOztJQUVGLDBDQWlCRTs7Ozs7SUFHQSx1Q0FBeUI7Ozs7O0lBQ3pCLDRDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlclNpZ25VcCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJSZWdpc3RlckVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgcmVnaXN0ZXJVc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5SRUdJU1RFUl9VU0VSKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuUmVnaXN0ZXJVc2VyKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHVzZXI6IFVzZXJTaWduVXApID0+XG4gICAgICB0aGlzLnVzZXJDb25uZWN0b3IucmVnaXN0ZXIodXNlcikucGlwZShcbiAgICAgICAgbWFwKCgpID0+IG5ldyBVc2VyQWN0aW9ucy5SZWdpc3RlclVzZXJTdWNjZXNzKCkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IFVzZXJBY3Rpb25zLlJlZ2lzdGVyVXNlckZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbW92ZVVzZXIkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJSZWdpc3Rlck9yUmVtb3ZlQWN0aW9uIHwgQXV0aEFjdGlvbnMuTG9nb3V0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlJFTU9WRV9VU0VSKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuUmVtb3ZlVXNlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKCh1c2VySWQ6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckNvbm5lY3Rvci5yZW1vdmUodXNlcklkKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoX3Jlc3VsdCA9PiBbXG4gICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlJlbW92ZVVzZXJTdWNjZXNzKCksXG4gICAgICAgICAgbmV3IEF1dGhBY3Rpb25zLkxvZ291dCgpLFxuICAgICAgICBdKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5SZW1vdmVVc2VyRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQ29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==