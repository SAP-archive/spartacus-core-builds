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
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromActions from '../actions/index';
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
                return of(new fromActions.ForgotPasswordEmailRequestFail(makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvZm9yZ290LXBhc3N3b3JkLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sS0FBSyxXQUFXLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQ7SUFrQ0UsK0JBQ1UsUUFBaUIsRUFDakIsb0JBQW1DO1FBRjdDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUFqQzdDLGdDQUEyQixHQUl2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxFQUNqRCxHQUFHOzs7O1FBQUMsVUFBQyxNQUE4QztZQUNqRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQyxFQUFDLEVBQ0YsU0FBUzs7OztRQUFDLFVBQUEsZ0JBQWdCO1lBQ3hCLE9BQU8sS0FBSSxDQUFDLG9CQUFvQjtpQkFDN0IsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVDLElBQUksQ0FDSCxTQUFTOzs7WUFBQyxjQUFNLE9BQUE7Z0JBQ2QsSUFBSSxXQUFXLENBQUMsaUNBQWlDLEVBQUU7Z0JBQ25ELElBQUksVUFBVSxDQUFDO29CQUNiLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSwwQ0FBMEMsRUFBRTtvQkFDekQsSUFBSSxFQUFFLGlCQUFpQixDQUFDLHFCQUFxQjtpQkFDOUMsQ0FBQzthQUNILEVBTmUsQ0FNZixFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQyw4QkFBOEIsQ0FDNUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0Y7WUFKRCxDQUlDLEVBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQXJDTCxVQUFVOzs7O2dCQVJGLE9BQU87Z0JBS1AsYUFBYTs7SUFNcEI7UUFEQyxNQUFNLEVBQUU7MENBQ29CLFVBQVU7OEVBNkJyQztJQU1KLDRCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FyQ1kscUJBQXFCOzs7SUFDaEMsNERBOEJFOzs7OztJQUdBLHlDQUF5Qjs7Ozs7SUFDekIscURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBjb25jYXRNYXAsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWRkTWVzc2FnZSwgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tQWN0aW9ucy5Gb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdFN1Y2Nlc3NcbiAgICB8IEFkZE1lc3NhZ2VcbiAgICB8IGZyb21BY3Rpb25zLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5GT1JHT1RfUEFTU1dPUkRfRU1BSUxfUkVRVUVTVCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0KSA9PiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSksXG4gICAgY29uY2F0TWFwKHVzZXJFbWFpbEFkZHJlc3MgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFjY291bnRDb25uZWN0b3JcbiAgICAgICAgLnJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiBbXG4gICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3RTdWNjZXNzKCksXG4gICAgICAgICAgICBuZXcgQWRkTWVzc2FnZSh7XG4gICAgICAgICAgICAgIHRleHQ6IHsga2V5OiAnZm9yZ290dGVuUGFzc3dvcmQucGFzc3dvcmRSZXNldEVtYWlsU2VudCcgfSxcbiAgICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5Gb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBY2NvdW50Q29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==