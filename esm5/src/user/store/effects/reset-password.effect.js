/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GlobalMessageType } from '../../../global-message/index';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
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
                new GlobalMessageActions.AddMessage({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9yZXNldC1wYXNzd29yZC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxLQUFLLFdBQVcsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRDtJQTBCRSw4QkFDVSxRQUFpQixFQUNqQixvQkFBbUM7UUFGN0MsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBZTtRQXpCN0MsbUJBQWMsR0FJVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFDbEMsR0FBRzs7OztRQUFDLFVBQUMsTUFBaUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzFELFNBQVM7Ozs7UUFBQyxVQUFDLEVBQW1CO2dCQUFqQixnQkFBSyxFQUFFLHNCQUFRO1lBQzFCLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNsRSxTQUFTOzs7WUFBQyxjQUFNLE9BQUE7Z0JBQ2QsSUFBSSxXQUFXLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3RDLElBQUksb0JBQW9CLENBQUMsVUFBVSxDQUFDO29CQUNsQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUU7b0JBQ3ZELElBQUksRUFBRSxpQkFBaUIsQ0FBQyxxQkFBcUI7aUJBQzlDLENBQUM7YUFDSCxFQU5lLENBTWYsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFuRSxDQUFtRSxFQUNwRSxDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBN0JMLFVBQVU7Ozs7Z0JBVEYsT0FBTztnQkFNUCxhQUFhOztJQU1wQjtRQURDLE1BQU0sRUFBRTswQ0FDTyxVQUFVO2dFQXFCeEI7SUFNSiwyQkFBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLG9CQUFvQjs7O0lBQy9CLDhDQXNCRTs7Ozs7SUFHQSx3Q0FBeUI7Ozs7O0lBQ3pCLG9EQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2Uvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlc2V0UGFzc3dvcmQkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbUFjdGlvbnMuUmVzZXRQYXNzd29yZFN1Y2Nlc3NcbiAgICB8IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2VcbiAgICB8IGZyb21BY3Rpb25zLlJlc2V0UGFzc3dvcmRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlJFU0VUX1BBU1NXT1JEKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuUmVzZXRQYXNzd29yZCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgoeyB0b2tlbiwgcGFzc3dvcmQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFjY291bnRDb25uZWN0b3IucmVzZXRQYXNzd29yZCh0b2tlbiwgcGFzc3dvcmQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBbXG4gICAgICAgICAgbmV3IGZyb21BY3Rpb25zLlJlc2V0UGFzc3dvcmRTdWNjZXNzKCksXG4gICAgICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdGV4dDogeyBrZXk6ICdmb3Jnb3R0ZW5QYXNzd29yZC5wYXNzd29yZFJlc2V0U3VjY2VzcycgfSxcbiAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTixcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbnMuUmVzZXRQYXNzd29yZEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckFjY291bnRDb25uZWN0b3I6IFVzZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19