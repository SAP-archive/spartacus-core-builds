/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { concatMap, switchMap, map, catchError } from 'rxjs/operators';
import { GlobalMessageType, AddMessage } from '../../../global-message/index';
import * as fromActions from '../actions/index';
import { OccUserService } from '../../occ/user.service';
var ForgotPasswordEffects = /** @class */ (function () {
    function ForgotPasswordEffects(actions$, occUserService) {
        var _this = this;
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.requestForgotPasswordEmail$ = this.actions$.pipe(ofType(fromActions.FORGOT_PASSWORD_EMAIL_REQUEST), map(function (action) {
            return action.payload;
        }), concatMap(function (userEmailAddress) {
            return _this.occUserService
                .requestForgotPasswordEmail(userEmailAddress)
                .pipe(switchMap(function () { return [
                new fromActions.ForgotPasswordEmailRequestSuccess(),
                new AddMessage({
                    text: {
                        raw: 'An email has been sent to you with information on how to reset your password.',
                    },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]; }), catchError(function (error) {
                return of(new fromActions.ForgotPasswordEmailRequestFail(error));
            }));
        }));
    }
    ForgotPasswordEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ForgotPasswordEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccUserService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ForgotPasswordEffects.prototype, "requestForgotPasswordEmail$", void 0);
    return ForgotPasswordEffects;
}());
export { ForgotPasswordEffects };
if (false) {
    /** @type {?} */
    ForgotPasswordEffects.prototype.requestForgotPasswordEmail$;
    /**
     * @type {?}
     * @private
     */
    ForgotPasswordEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ForgotPasswordEffects.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvZm9yZ290LXBhc3N3b3JkLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFOUUsT0FBTyxLQUFLLFdBQVcsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQ7SUFpQ0UsK0JBQ1UsUUFBaUIsRUFDakIsY0FBOEI7UUFGeEMsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWhDeEMsZ0NBQTJCLEdBSXZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLDZCQUE2QixDQUFDLEVBQ2pELEdBQUcsQ0FBQyxVQUFDLE1BQThDO1lBQ2pELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDLENBQUMsRUFDRixTQUFTLENBQUMsVUFBQSxnQkFBZ0I7WUFDeEIsT0FBTyxLQUFJLENBQUMsY0FBYztpQkFDdkIsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVDLElBQUksQ0FDSCxTQUFTLENBQUMsY0FBTSxPQUFBO2dCQUNkLElBQUksV0FBVyxDQUFDLGlDQUFpQyxFQUFFO2dCQUNuRCxJQUFJLFVBQVUsQ0FBQztvQkFDYixJQUFJLEVBQUU7d0JBQ0osR0FBRyxFQUNELCtFQUErRTtxQkFDbEY7b0JBQ0QsSUFBSSxFQUFFLGlCQUFpQixDQUFDLHFCQUFxQjtpQkFDOUMsQ0FBQzthQUNILEVBVGUsQ0FTZixDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUF6RCxDQUF5RCxDQUMxRCxDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBcENMLFVBQVU7Ozs7Z0JBVE0sT0FBTztnQkFPZixjQUFjOztJQUtyQjtRQURDLE1BQU0sRUFBRTswQ0FDb0IsVUFBVTs4RUE0QnJDO0lBTUosNEJBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXBDWSxxQkFBcUI7OztJQUNoQyw0REE2QkU7Ozs7O0lBR0EseUNBQXlCOzs7OztJQUN6QiwrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUsIEFkZE1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5cbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgT2NjVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvdXNlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tQWN0aW9ucy5Gb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdFN1Y2Nlc3NcbiAgICB8IEFkZE1lc3NhZ2VcbiAgICB8IGZyb21BY3Rpb25zLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5GT1JHT1RfUEFTU1dPUkRfRU1BSUxfUkVRVUVTVCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0KSA9PiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSksXG4gICAgY29uY2F0TWFwKHVzZXJFbWFpbEFkZHJlc3MgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjVXNlclNlcnZpY2VcbiAgICAgICAgLnJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiBbXG4gICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3RTdWNjZXNzKCksXG4gICAgICAgICAgICBuZXcgQWRkTWVzc2FnZSh7XG4gICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICByYXc6XG4gICAgICAgICAgICAgICAgICAnQW4gZW1haWwgaGFzIGJlZW4gc2VudCB0byB5b3Ugd2l0aCBpbmZvcm1hdGlvbiBvbiBob3cgdG8gcmVzZXQgeW91ciBwYXNzd29yZC4nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbnMuRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3RGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjVXNlclNlcnZpY2U6IE9jY1VzZXJTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==