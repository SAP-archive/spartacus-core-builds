/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
var UpdatePasswordEffects = /** @class */ (function () {
    function UpdatePasswordEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updatePassword$ = this.actions$.pipe(ofType(UserActions.UPDATE_PASSWORD), map((/**
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
            function (_) { return new UserActions.UpdatePasswordSuccess(); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.UpdatePasswordFail(makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXBkYXRlLXBhc3N3b3JkLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0M7SUFFRSwrQkFDVSxRQUFpQixFQUNqQixvQkFBbUM7UUFGN0MsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBZTtRQUk3QyxvQkFBZSxHQUVYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUNuQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFrQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDM0QsU0FBUzs7OztRQUFDLFVBQUEsT0FBTztZQUNmLE9BQUEsS0FBSSxDQUFDLG9CQUFvQjtpQkFDdEIsY0FBYyxDQUNiLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLFdBQVcsQ0FDcEI7aUJBQ0EsSUFBSSxDQUNILEdBQUc7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksV0FBVyxDQUFDLHFCQUFxQixFQUFFLEVBQXZDLENBQXVDLEVBQUMsRUFDakQsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQXBFLENBQW9FLEVBQ3JFLENBQ0Y7UUFYSCxDQVdHLEVBQ0osQ0FDRixDQUFDO0lBdEJDLENBQUM7O2dCQUxMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFJUCxhQUFhOztJQVdwQjtRQURDLE1BQU0sRUFBRTswQ0FDUSxVQUFVO2tFQW1CekI7SUFDSiw0QkFBQztDQUFBLEFBNUJELElBNEJDO1NBM0JZLHFCQUFxQjs7O0lBTWhDLGdEQW9CRTs7Ozs7SUF4QkEseUNBQXlCOzs7OztJQUN6QixxREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGNvbmNhdE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZVBhc3N3b3JkJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5VcGRhdGVQYXNzd29yZFN1Y2Nlc3MgfCBVc2VyQWN0aW9ucy5VcGRhdGVQYXNzd29yZEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuVVBEQVRFX1BBU1NXT1JEKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuVXBkYXRlUGFzc3dvcmQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBjb25jYXRNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy51c2VyQWNjb3VudENvbm5lY3RvclxuICAgICAgICAudXBkYXRlUGFzc3dvcmQoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5vbGRQYXNzd29yZCxcbiAgICAgICAgICBwYXlsb2FkLm5ld1Bhc3N3b3JkXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKF8gPT4gbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZVBhc3N3b3JkU3VjY2VzcygpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgVXNlckFjdGlvbnMuVXBkYXRlUGFzc3dvcmRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==