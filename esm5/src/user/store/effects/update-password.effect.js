/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as fromActions from '../actions/update-password.action';
import { UserConnector } from '../../connectors/user/user.connector';
var UpdatePasswordEffects = /** @class */ (function () {
    function UpdatePasswordEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updatePassword$ = this.actions$.pipe(ofType(fromActions.UPDATE_PASSWORD), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userAccountConnector
                .updatePassword(payload.userId, payload.oldPassword, payload.newPassword)
                .pipe(map((/**
             * @param {?} _
             * @return {?}
             */
            function (_) { return new fromActions.UpdatePasswordSuccess(); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new fromActions.UpdatePasswordFail(error)); })));
        })));
    }
    UpdatePasswordEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UpdatePasswordEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UpdatePasswordEffects.prototype, "updatePassword$", void 0);
    return UpdatePasswordEffects;
}());
export { UpdatePasswordEffects };
if (false) {
    /** @type {?} */
    UpdatePasswordEffects.prototype.updatePassword$;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordEffects.prototype.userAccountConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXBkYXRlLXBhc3N3b3JkLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sS0FBSyxXQUFXLE1BQU0sbUNBQW1DLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJFO0lBRUUsK0JBQ1UsUUFBaUIsRUFDakIsb0JBQW1DO1FBRjdDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUFJN0Msb0JBQWUsR0FFWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFDbkMsR0FBRzs7OztRQUFDLFVBQUMsTUFBa0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzNELFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZixPQUFBLEtBQUksQ0FBQyxvQkFBb0I7aUJBQ3RCLGNBQWMsQ0FDYixPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxXQUFXLEVBQ25CLE9BQU8sQ0FBQyxXQUFXLENBQ3BCO2lCQUNBLElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxFQUF2QyxDQUF1QyxFQUFDLEVBQ2pELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUE3QyxDQUE2QyxFQUFDLENBQ25FO1FBVEgsQ0FTRyxFQUNKLENBQ0YsQ0FBQztJQXBCQyxDQUFDOztnQkFMTCxVQUFVOzs7O2dCQU5GLE9BQU87Z0JBSVAsYUFBYTs7SUFVcEI7UUFEQyxNQUFNLEVBQUU7MENBQ1EsVUFBVTtrRUFpQnpCO0lBQ0osNEJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXpCWSxxQkFBcUI7OztJQU1oQyxnREFrQkU7Ozs7O0lBdEJBLHlDQUF5Qjs7Ozs7SUFDekIscURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBjb25jYXRNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXBkYXRlLXBhc3N3b3JkLmFjdGlvbic7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZVBhc3N3b3JkJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5VcGRhdGVQYXNzd29yZFN1Y2Nlc3MgfCBmcm9tQWN0aW9ucy5VcGRhdGVQYXNzd29yZEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuVVBEQVRFX1BBU1NXT1JEKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuVXBkYXRlUGFzc3dvcmQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBjb25jYXRNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy51c2VyQWNjb3VudENvbm5lY3RvclxuICAgICAgICAudXBkYXRlUGFzc3dvcmQoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5vbGRQYXNzd29yZCxcbiAgICAgICAgICBwYXlsb2FkLm5ld1Bhc3N3b3JkXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKF8gPT4gbmV3IGZyb21BY3Rpb25zLlVwZGF0ZVBhc3N3b3JkU3VjY2VzcygpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5VcGRhdGVQYXNzd29yZEZhaWwoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==