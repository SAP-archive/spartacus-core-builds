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
import { LoadUserToken } from '../../../auth/index';
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
    return UserRegisterEffects;
}());
export { UserRegisterEffects };
if (false) {
    /** @type {?} */
    UserRegisterEffects.prototype.registerUser$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItcmVnaXN0ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sS0FBSyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RDtJQXNCRSw2QkFBb0IsUUFBaUIsRUFBVSxXQUEyQjtRQUExRSxpQkFBOEU7UUFBMUQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQW5CMUUsa0JBQWEsR0FFVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFDakMsR0FBRyxDQUFDLFVBQUMsTUFBZ0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3pELFFBQVEsQ0FBQyxVQUFDLElBQTBCO1lBQ2xDLE9BQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM3QyxTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQTtnQkFDbkIsSUFBSSxhQUFhLENBQUM7b0JBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRztvQkFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2lCQUN4QixDQUFDO2dCQUNGLElBQUksV0FBVyxDQUFDLG1CQUFtQixFQUFFO2FBQ3RDLEVBTm9CLENBTXBCLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUNqRSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUUyRSxDQUFDOztnQkF0Qi9FLFVBQVU7Ozs7Z0JBVk0sT0FBTztnQkFRZixjQUFjOztJQUtyQjtRQURDLE1BQU0sRUFBRTswQ0FDTSxVQUFVOzhEQWlCdkI7SUFHSiwwQkFBQztDQUFBLEFBdkJELElBdUJDO1NBdEJZLG1CQUFtQjs7O0lBQzlCLDRDQWtCRTs7Ozs7SUFFVSx1Q0FBeUI7Ozs7O0lBQUUsMENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBtZXJnZU1hcCwgY2F0Y2hFcnJvciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uJztcbmltcG9ydCB7IExvYWRVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IFVzZXJSZWdpc3RlckZvcm1EYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9tb2RlbC91c2VyLm1vZGVsJztcbmltcG9ydCB7IE9jY1VzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9vY2MvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJlZ2lzdGVyRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZWdpc3RlclVzZXIkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlVzZXJSZWdpc3RlckFjdGlvbiB8IExvYWRVc2VyVG9rZW5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuUkVHSVNURVJfVVNFUiksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLlJlZ2lzdGVyVXNlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKCh1c2VyOiBVc2VyUmVnaXN0ZXJGb3JtRGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXJVc2VyKHVzZXIpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChfcmVzdWx0ID0+IFtcbiAgICAgICAgICBuZXcgTG9hZFVzZXJUb2tlbih7XG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIudWlkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgbmV3IGZyb21BY3Rpb25zLlJlZ2lzdGVyVXNlclN1Y2Nlc3MoKSxcbiAgICAgICAgXSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlJlZ2lzdGVyVXNlckZhaWwoZXJyb3IpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBPY2NVc2VyU2VydmljZSkge31cbn1cbiJdfQ==