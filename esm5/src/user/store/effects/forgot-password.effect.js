/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { GlobalMessageType } from '../../../global-message/models/global-message.model';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
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
                new GlobalMessageActions.AddMessage({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvZm9yZ290LXBhc3N3b3JkLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxLQUFLLFdBQVcsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRDtJQWtDRSwrQkFDVSxRQUFpQixFQUNqQixvQkFBbUM7UUFGN0MsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBZTtRQWpDN0MsZ0NBQTJCLEdBSXZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLDZCQUE2QixDQUFDLEVBQ2pELEdBQUc7Ozs7UUFBQyxVQUFDLE1BQThDO1lBQ2pELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDLEVBQUMsRUFDRixTQUFTOzs7O1FBQUMsVUFBQSxnQkFBZ0I7WUFDeEIsT0FBTyxLQUFJLENBQUMsb0JBQW9CO2lCQUM3QiwwQkFBMEIsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUMsSUFBSSxDQUNILFNBQVM7OztZQUFDLGNBQU0sT0FBQTtnQkFDZCxJQUFJLFdBQVcsQ0FBQyxpQ0FBaUMsRUFBRTtnQkFDbkQsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7b0JBQ2xDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSwwQ0FBMEMsRUFBRTtvQkFDekQsSUFBSSxFQUFFLGlCQUFpQixDQUFDLHFCQUFxQjtpQkFDOUMsQ0FBQzthQUNILEVBTmUsQ0FNZixFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQyw4QkFBOEIsQ0FDNUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0Y7WUFKRCxDQUlDLEVBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQXJDTCxVQUFVOzs7O2dCQVRGLE9BQU87Z0JBTVAsYUFBYTs7SUFNcEI7UUFEQyxNQUFNLEVBQUU7MENBQ29CLFVBQVU7OEVBNkJyQztJQU1KLDRCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FyQ1kscUJBQXFCOzs7SUFDaEMsNERBOEJFOzs7OztJQUdBLHlDQUF5Qjs7Ozs7SUFDekIscURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBjb25jYXRNYXAsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsJDogT2JzZXJ2YWJsZTxcbiAgICB8IGZyb21BY3Rpb25zLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0U3VjY2Vzc1xuICAgIHwgR2xvYmFsTWVzc2FnZUFjdGlvbnMuQWRkTWVzc2FnZVxuICAgIHwgZnJvbUFjdGlvbnMuRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3RGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkZPUkdPVF9QQVNTV09SRF9FTUFJTF9SRVFVRVNUKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3QpID0+IHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KSxcbiAgICBjb25jYXRNYXAodXNlckVtYWlsQWRkcmVzcyA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWNjb3VudENvbm5lY3RvclxuICAgICAgICAucmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwodXNlckVtYWlsQWRkcmVzcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+IFtcbiAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5Gb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdFN1Y2Nlc3MoKSxcbiAgICAgICAgICAgIG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5BZGRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgdGV4dDogeyBrZXk6ICdmb3Jnb3R0ZW5QYXNzd29yZC5wYXNzd29yZFJlc2V0RW1haWxTZW50JyB9LFxuICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0RmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckFjY291bnRDb25uZWN0b3I6IFVzZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19