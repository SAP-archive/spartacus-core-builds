/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as fromActions from '../actions/index';
import { OccUserService } from '../../occ/user.service';
import { GlobalMessageType, AddMessage } from '../../../global-message/index';
var ResetPasswordEffects = /** @class */ (function () {
    function ResetPasswordEffects(actions$, occUserService) {
        var _this = this;
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.resetPassword$ = this.actions$.pipe(ofType(fromActions.RESET_PASSWORD), map(function (action) {
            return action.payload;
        }), switchMap(function (_a) {
            var token = _a.token, password = _a.password;
            return _this.occUserService.resetPassword(token, password).pipe(switchMap(function () { return [
                new fromActions.ResetPasswordSuccess(),
                new AddMessage({
                    text: {
                        raw: 'Success! You can now login using your new password.',
                    },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]; }), catchError(function (error) { return of(new fromActions.ResetPasswordFail(error)); }));
        }));
    }
    ResetPasswordEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ResetPasswordEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccUserService }
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
    ResetPasswordEffects.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9yZXNldC1wYXNzd29yZC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEtBQUssV0FBVyxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFOUU7SUE0QkUsOEJBQ1UsUUFBaUIsRUFDakIsY0FBOEI7UUFGeEMsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTNCeEMsbUJBQWMsR0FJVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFDbEMsR0FBRyxDQUFDLFVBQUMsTUFBaUM7WUFDcEMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxVQUFDLEVBQW1CO2dCQUFqQixnQkFBSyxFQUFFLHNCQUFRO1lBQzFCLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDNUQsU0FBUyxDQUFDLGNBQU0sT0FBQTtnQkFDZCxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDdEMsSUFBSSxVQUFVLENBQUM7b0JBQ2IsSUFBSSxFQUFFO3dCQUNKLEdBQUcsRUFBRSxxREFBcUQ7cUJBQzNEO29CQUNELElBQUksRUFBRSxpQkFBaUIsQ0FBQyxxQkFBcUI7aUJBQzlDLENBQUM7YUFDSCxFQVJlLENBUWYsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQ2xFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBL0JMLFVBQVU7Ozs7Z0JBVE0sT0FBTztnQkFNZixjQUFjOztJQU1yQjtRQURDLE1BQU0sRUFBRTswQ0FDTyxVQUFVO2dFQXVCeEI7SUFNSiwyQkFBQztDQUFBLEFBaENELElBZ0NDO1NBL0JZLG9CQUFvQjs7O0lBQy9CLDhDQXdCRTs7Ozs7SUFHQSx3Q0FBeUI7Ozs7O0lBQ3pCLDhDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IE9jY1VzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSwgQWRkTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlc2V0UGFzc3dvcmQkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbUFjdGlvbnMuUmVzZXRQYXNzd29yZFN1Y2Nlc3NcbiAgICB8IEFkZE1lc3NhZ2VcbiAgICB8IGZyb21BY3Rpb25zLlJlc2V0UGFzc3dvcmRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlJFU0VUX1BBU1NXT1JEKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuUmVzZXRQYXNzd29yZCkgPT4ge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pLFxuICAgIHN3aXRjaE1hcCgoeyB0b2tlbiwgcGFzc3dvcmQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjVXNlclNlcnZpY2UucmVzZXRQYXNzd29yZCh0b2tlbiwgcGFzc3dvcmQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBbXG4gICAgICAgICAgbmV3IGZyb21BY3Rpb25zLlJlc2V0UGFzc3dvcmRTdWNjZXNzKCksXG4gICAgICAgICAgbmV3IEFkZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICByYXc6ICdTdWNjZXNzISBZb3UgY2FuIG5vdyBsb2dpbiB1c2luZyB5b3VyIG5ldyBwYXNzd29yZC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTixcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlJlc2V0UGFzc3dvcmRGYWlsKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY1VzZXJTZXJ2aWNlOiBPY2NVc2VyU2VydmljZVxuICApIHt9XG59XG4iXX0=