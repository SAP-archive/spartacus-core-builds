/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { AddMessage, GlobalMessageType } from '../../../global-message/index';
import * as fromActions from '../actions/index';
import { UserConnector } from '../../connectors/user/user.connector';
var ForgotPasswordEffects = /** @class */ (function () {
    function ForgotPasswordEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.requestForgotPasswordEmail$ = this.actions$.pipe(ofType(fromActions.FORGOT_PASSWORD_EMAIL_REQUEST), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return action.payload;
        })), concatMap((/**
         * @param {?} userEmailAddress
         * @return {?}
         */
        function (userEmailAddress) {
            return _this.userAccountConnector
                .requestForgotPasswordEmail(userEmailAddress)
                .pipe(switchMap((/**
             * @return {?}
             */
            function () { return [
                new fromActions.ForgotPasswordEmailRequestSuccess(),
                new AddMessage({
                    text: { key: 'forgottenPassword.passwordResetEmailSent' },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.ForgotPasswordEmailRequestFail(error));
            })));
        })));
    }
    ForgotPasswordEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ForgotPasswordEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserConnector }
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
    ForgotPasswordEffects.prototype.userAccountConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvZm9yZ290LXBhc3N3b3JkLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFOUUsT0FBTyxLQUFLLFdBQVcsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFckU7SUE4QkUsK0JBQ1UsUUFBaUIsRUFDakIsb0JBQW1DO1FBRjdDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUE3QjdDLGdDQUEyQixHQUl2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxFQUNqRCxHQUFHOzs7O1FBQUMsVUFBQyxNQUE4QztZQUNqRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQyxFQUFDLEVBQ0YsU0FBUzs7OztRQUFDLFVBQUEsZ0JBQWdCO1lBQ3hCLE9BQU8sS0FBSSxDQUFDLG9CQUFvQjtpQkFDN0IsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVDLElBQUksQ0FDSCxTQUFTOzs7WUFBQyxjQUFNLE9BQUE7Z0JBQ2QsSUFBSSxXQUFXLENBQUMsaUNBQWlDLEVBQUU7Z0JBQ25ELElBQUksVUFBVSxDQUFDO29CQUNiLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSwwQ0FBMEMsRUFBRTtvQkFDekQsSUFBSSxFQUFFLGlCQUFpQixDQUFDLHFCQUFxQjtpQkFDOUMsQ0FBQzthQUNILEVBTmUsQ0FNZixFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUF6RCxDQUF5RCxFQUMxRCxDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBakNMLFVBQVU7Ozs7Z0JBVEYsT0FBTztnQkFPUCxhQUFhOztJQUtwQjtRQURDLE1BQU0sRUFBRTswQ0FDb0IsVUFBVTs4RUF5QnJDO0lBTUosNEJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWpDWSxxQkFBcUI7OztJQUNoQyw0REEwQkU7Ozs7O0lBR0EseUNBQXlCOzs7OztJQUN6QixxREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBjb25jYXRNYXAsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWRkTWVzc2FnZSwgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5cbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgcmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbUFjdGlvbnMuRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3RTdWNjZXNzXG4gICAgfCBBZGRNZXNzYWdlXG4gICAgfCBmcm9tQWN0aW9ucy5Gb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuRk9SR09UX1BBU1NXT1JEX0VNQUlMX1JFUVVFU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5Gb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdCkgPT4ge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pLFxuICAgIGNvbmNhdE1hcCh1c2VyRW1haWxBZGRyZXNzID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBY2NvdW50Q29ubmVjdG9yXG4gICAgICAgIC5yZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gW1xuICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0U3VjY2VzcygpLFxuICAgICAgICAgICAgbmV3IEFkZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0ZXh0OiB7IGtleTogJ2ZvcmdvdHRlblBhc3N3b3JkLnBhc3N3b3JkUmVzZXRFbWFpbFNlbnQnIH0sXG4gICAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9ucy5Gb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdEZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=