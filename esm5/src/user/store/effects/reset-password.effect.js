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
                    text: 'Success! You can now login using your new password.',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9yZXNldC1wYXNzd29yZC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEtBQUssV0FBVyxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFOUU7SUEwQkUsOEJBQ1UsUUFBaUIsRUFDakIsY0FBOEI7UUFGeEMsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXpCeEMsbUJBQWMsR0FJVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFDbEMsR0FBRyxDQUFDLFVBQUMsTUFBaUM7WUFDcEMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxVQUFDLEVBQW1CO2dCQUFqQixnQkFBSyxFQUFFLHNCQUFRO1lBQzFCLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDNUQsU0FBUyxDQUFDLGNBQU0sT0FBQTtnQkFDZCxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDdEMsSUFBSSxVQUFVLENBQUM7b0JBQ2IsSUFBSSxFQUFFLHFEQUFxRDtvQkFDM0QsSUFBSSxFQUFFLGlCQUFpQixDQUFDLHFCQUFxQjtpQkFDOUMsQ0FBQzthQUNILEVBTmUsQ0FNZixDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FDbEUsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkE3QkwsVUFBVTs7OztnQkFUTSxPQUFPO2dCQU1mLGNBQWM7O0lBTXJCO1FBREMsTUFBTSxFQUFFOzBDQUNPLFVBQVU7Z0VBcUJ4QjtJQU1KLDJCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3Qlksb0JBQW9COzs7SUFDL0IsOENBc0JFOzs7OztJQUdBLHdDQUF5Qjs7Ozs7SUFDekIsOENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgT2NjVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlLCBBZGRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgcmVzZXRQYXNzd29yZCQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tQWN0aW9ucy5SZXNldFBhc3N3b3JkU3VjY2Vzc1xuICAgIHwgQWRkTWVzc2FnZVxuICAgIHwgZnJvbUFjdGlvbnMuUmVzZXRQYXNzd29yZEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuUkVTRVRfUEFTU1dPUkQpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5SZXNldFBhc3N3b3JkKSA9PiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSksXG4gICAgc3dpdGNoTWFwKCh7IHRva2VuLCBwYXNzd29yZCB9KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NVc2VyU2VydmljZS5yZXNldFBhc3N3b3JkKHRva2VuLCBwYXNzd29yZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IFtcbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuUmVzZXRQYXNzd29yZFN1Y2Nlc3MoKSxcbiAgICAgICAgICBuZXcgQWRkTWVzc2FnZSh7XG4gICAgICAgICAgICB0ZXh0OiAnU3VjY2VzcyEgWW91IGNhbiBub3cgbG9naW4gdXNpbmcgeW91ciBuZXcgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTixcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlJlc2V0UGFzc3dvcmRGYWlsKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY1VzZXJTZXJ2aWNlOiBPY2NVc2VyU2VydmljZVxuICApIHt9XG59XG4iXX0=