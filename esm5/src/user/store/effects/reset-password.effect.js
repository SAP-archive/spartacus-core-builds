import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GlobalMessageType } from '../../../global-message/models/global-message.model';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
var ResetPasswordEffects = /** @class */ (function () {
    function ResetPasswordEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.resetPassword$ = this.actions$.pipe(ofType(UserActions.RESET_PASSWORD), map(function (action) { return action.payload; }), switchMap(function (_a) {
            var token = _a.token, password = _a.password;
            return _this.userAccountConnector.resetPassword(token, password).pipe(switchMap(function () { return [
                new UserActions.ResetPasswordSuccess(),
                new GlobalMessageActions.AddMessage({
                    text: { key: 'forgottenPassword.passwordResetSuccess' },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]; }), catchError(function (error) {
                var _a, _b;
                var actions = [new UserActions.ResetPasswordFail(makeErrorSerializable(error))];
                if ((_b = (_a = error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.errors) {
                    error.error.errors.forEach(function (err) {
                        if (err.message) {
                            actions.push(new GlobalMessageActions.AddMessage({
                                text: { raw: err.message },
                                type: GlobalMessageType.MSG_TYPE_ERROR,
                            }));
                        }
                    });
                }
                return from(actions);
            }));
        }));
    }
    ResetPasswordEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserConnector }
    ]; };
    __decorate([
        Effect()
    ], ResetPasswordEffects.prototype, "resetPassword$", void 0);
    ResetPasswordEffects = __decorate([
        Injectable()
    ], ResetPasswordEffects);
    return ResetPasswordEffects;
}());
export { ResetPasswordEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9yZXNldC1wYXNzd29yZC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQztJQXdDRSw4QkFDVSxRQUFpQixFQUNqQixvQkFBbUM7UUFGN0MsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBZTtRQXhDN0MsbUJBQWMsR0FJVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFDbEMsR0FBRyxDQUFDLFVBQUMsTUFBaUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzFELFNBQVMsQ0FBQyxVQUFDLEVBQW1CO2dCQUFqQixnQkFBSyxFQUFFLHNCQUFRO1lBQzFCLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNsRSxTQUFTLENBQUMsY0FBTSxPQUFBO2dCQUNkLElBQUksV0FBVyxDQUFDLG9CQUFvQixFQUFFO2dCQUN0QyxJQUFJLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztvQkFDbEMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFO29CQUN2RCxJQUFJLEVBQUUsaUJBQWlCLENBQUMscUJBQXFCO2lCQUM5QyxDQUFDO2FBQ0gsRUFOZSxDQU1mLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLOztnQkFDZCxJQUFNLE9BQU8sR0FFVCxDQUFDLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEUsZ0JBQUksS0FBSywwQ0FBRSxLQUFLLDBDQUFFLE1BQU0sRUFBRTtvQkFDeEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRzt3QkFDNUIsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFOzRCQUNmLE9BQU8sQ0FBQyxJQUFJLENBQ1YsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7Z0NBQ2xDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFO2dDQUMxQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYzs2QkFDdkMsQ0FBQyxDQUNILENBQUM7eUJBQ0g7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFGZ0IsT0FBTztnQkFDSyxhQUFhOztJQXhDN0M7UUFEQyxNQUFNLEVBQUU7Z0VBcUNQO0lBdENTLG9CQUFvQjtRQURoQyxVQUFVLEVBQUU7T0FDQSxvQkFBb0IsQ0E0Q2hDO0lBQUQsMkJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlc2V0UGFzc3dvcmQkOiBPYnNlcnZhYmxlPFxuICAgIHwgVXNlckFjdGlvbnMuUmVzZXRQYXNzd29yZFN1Y2Nlc3NcbiAgICB8IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2VcbiAgICB8IFVzZXJBY3Rpb25zLlJlc2V0UGFzc3dvcmRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlJFU0VUX1BBU1NXT1JEKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuUmVzZXRQYXNzd29yZCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgoeyB0b2tlbiwgcGFzc3dvcmQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFjY291bnRDb25uZWN0b3IucmVzZXRQYXNzd29yZCh0b2tlbiwgcGFzc3dvcmQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBbXG4gICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlJlc2V0UGFzc3dvcmRTdWNjZXNzKCksXG4gICAgICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdGV4dDogeyBrZXk6ICdmb3Jnb3R0ZW5QYXNzd29yZC5wYXNzd29yZFJlc2V0U3VjY2VzcycgfSxcbiAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTixcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IEFycmF5PFxuICAgICAgICAgICAgVXNlckFjdGlvbnMuUmVzZXRQYXNzd29yZEZhaWwgfCBHbG9iYWxNZXNzYWdlQWN0aW9ucy5BZGRNZXNzYWdlXG4gICAgICAgICAgPiA9IFtuZXcgVXNlckFjdGlvbnMuUmVzZXRQYXNzd29yZEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSldO1xuICAgICAgICAgIGlmIChlcnJvcj8uZXJyb3I/LmVycm9ycykge1xuICAgICAgICAgICAgZXJyb3IuZXJyb3IuZXJyb3JzLmZvckVhY2goZXJyID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVyci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB7IHJhdzogZXJyLm1lc3NhZ2UgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZnJvbShhY3Rpb25zKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckFjY291bnRDb25uZWN0b3I6IFVzZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19