/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AddMessage, GlobalMessageType } from '../../../global-message/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromActions from '../actions/index';
var ResetPasswordEffects = /** @class */ (function () {
    function ResetPasswordEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.resetPassword$ = this.actions$.pipe(ofType(fromActions.RESET_PASSWORD), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var token = _a.token, password = _a.password;
            return _this.userAccountConnector.resetPassword(token, password).pipe(switchMap((/**
             * @return {?}
             */
            function () { return [
                new fromActions.ResetPasswordSuccess(),
                new AddMessage({
                    text: { key: 'forgottenPassword.passwordResetSuccess' },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.ResetPasswordFail(makeErrorSerializable(error)));
            })));
        })));
    }
    ResetPasswordEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ResetPasswordEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ResetPasswordEffects.prototype, "resetPassword$", void 0);
    return ResetPasswordEffects;
}());
export { ResetPasswordEffects };
if (false) {
    /** @type {?} */
    ResetPasswordEffects.prototype.resetPassword$;
    /**
     * @type {?}
     * @private
     */
    ResetPasswordEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ResetPasswordEffects.prototype.userAccountConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9yZXNldC1wYXNzd29yZC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sS0FBSyxXQUFXLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQ7SUEwQkUsOEJBQ1UsUUFBaUIsRUFDakIsb0JBQW1DO1FBRjdDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUF6QjdDLG1CQUFjLEdBSVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQ2xDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQWlDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUMxRCxTQUFTOzs7O1FBQUMsVUFBQyxFQUFtQjtnQkFBakIsZ0JBQUssRUFBRSxzQkFBUTtZQUMxQixPQUFPLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDbEUsU0FBUzs7O1lBQUMsY0FBTSxPQUFBO2dCQUNkLElBQUksV0FBVyxDQUFDLG9CQUFvQixFQUFFO2dCQUN0QyxJQUFJLFVBQVUsQ0FBQztvQkFDYixJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUU7b0JBQ3ZELElBQUksRUFBRSxpQkFBaUIsQ0FBQyxxQkFBcUI7aUJBQzlDLENBQUM7YUFDSCxFQU5lLENBTWYsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFuRSxDQUFtRSxFQUNwRSxDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBN0JMLFVBQVU7Ozs7Z0JBUkYsT0FBTztnQkFLUCxhQUFhOztJQU1wQjtRQURDLE1BQU0sRUFBRTswQ0FDTyxVQUFVO2dFQXFCeEI7SUFNSiwyQkFBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLG9CQUFvQjs7O0lBQy9CLDhDQXNCRTs7Ozs7SUFHQSx3Q0FBeUI7Ozs7O0lBQ3pCLG9EQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBZGRNZXNzYWdlLCBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgcmVzZXRQYXNzd29yZCQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tQWN0aW9ucy5SZXNldFBhc3N3b3JkU3VjY2Vzc1xuICAgIHwgQWRkTWVzc2FnZVxuICAgIHwgZnJvbUFjdGlvbnMuUmVzZXRQYXNzd29yZEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuUkVTRVRfUEFTU1dPUkQpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5SZXNldFBhc3N3b3JkKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKCh7IHRva2VuLCBwYXNzd29yZCB9KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWNjb3VudENvbm5lY3Rvci5yZXNldFBhc3N3b3JkKHRva2VuLCBwYXNzd29yZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IFtcbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuUmVzZXRQYXNzd29yZFN1Y2Nlc3MoKSxcbiAgICAgICAgICBuZXcgQWRkTWVzc2FnZSh7XG4gICAgICAgICAgICB0ZXh0OiB7IGtleTogJ2ZvcmdvdHRlblBhc3N3b3JkLnBhc3N3b3JkUmVzZXRTdWNjZXNzJyB9LFxuICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9ucy5SZXNldFBhc3N3b3JkRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=