/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromActions from '../actions/update-password.action';
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
            function (error) {
                return of(new fromActions.UpdatePasswordFail(makeHttpErrorSerializable(error)));
            })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXBkYXRlLXBhc3N3b3JkLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEtBQUssV0FBVyxNQUFNLG1DQUFtQyxDQUFDO0FBRWpFO0lBRUUsK0JBQ1UsUUFBaUIsRUFDakIsb0JBQW1DO1FBRjdDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUFJN0Msb0JBQWUsR0FFWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFDbkMsR0FBRzs7OztRQUFDLFVBQUMsTUFBa0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzNELFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZixPQUFBLEtBQUksQ0FBQyxvQkFBb0I7aUJBQ3RCLGNBQWMsQ0FDYixPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxXQUFXLEVBQ25CLE9BQU8sQ0FBQyxXQUFXLENBQ3BCO2lCQUNBLElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxFQUF2QyxDQUF1QyxFQUFDLEVBQ2pELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsa0JBQWtCLENBQ2hDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUNqQyxDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0Y7UUFmSCxDQWVHLEVBQ0osQ0FDRixDQUFDO0lBMUJDLENBQUM7O2dCQUxMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFJUCxhQUFhOztJQVdwQjtRQURDLE1BQU0sRUFBRTswQ0FDUSxVQUFVO2tFQXVCekI7SUFDSiw0QkFBQztDQUFBLEFBaENELElBZ0NDO1NBL0JZLHFCQUFxQjs7O0lBTWhDLGdEQXdCRTs7Ozs7SUE1QkEseUNBQXlCOzs7OztJQUN6QixxREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGNvbmNhdE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUh0dHBFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXBkYXRlLXBhc3N3b3JkLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcGRhdGVQYXNzd29yZEVmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckFjY291bnRDb25uZWN0b3I6IFVzZXJDb25uZWN0b3JcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVQYXNzd29yZCQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuVXBkYXRlUGFzc3dvcmRTdWNjZXNzIHwgZnJvbUFjdGlvbnMuVXBkYXRlUGFzc3dvcmRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlVQREFURV9QQVNTV09SRCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLlVwZGF0ZVBhc3N3b3JkKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMudXNlckFjY291bnRDb25uZWN0b3JcbiAgICAgICAgLnVwZGF0ZVBhc3N3b3JkKFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQub2xkUGFzc3dvcmQsXG4gICAgICAgICAgcGF5bG9hZC5uZXdQYXNzd29yZFxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChfID0+IG5ldyBmcm9tQWN0aW9ucy5VcGRhdGVQYXNzd29yZFN1Y2Nlc3MoKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5VcGRhdGVQYXNzd29yZEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUh0dHBFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==