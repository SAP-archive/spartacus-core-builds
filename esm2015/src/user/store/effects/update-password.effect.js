/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { OccUserService } from '../../occ/index';
import * as fromActions from '../actions/update-password.action';
export class UpdatePasswordEffects {
    /**
     * @param {?} actions$
     * @param {?} occUserService
     */
    constructor(actions$, occUserService) {
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.updatePassword$ = this.actions$.pipe(ofType(fromActions.UPDATE_PASSWORD), map((action) => action.payload), concatMap(payload => this.occUserService
            .updatePassword(payload.userId, payload.oldPassword, payload.newPassword)
            .pipe(map(_ => new fromActions.UpdatePasswordSuccess()), catchError(error => of(new fromActions.UpdatePasswordFail(error))))));
    }
}
UpdatePasswordEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UpdatePasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UpdatePasswordEffects.prototype, "updatePassword$", void 0);
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
    UpdatePasswordEffects.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXBkYXRlLXBhc3N3b3JkLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEtBQUssV0FBVyxNQUFNLG1DQUFtQyxDQUFDO0FBR2pFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBQ2hDLFlBQ1UsUUFBaUIsRUFDakIsY0FBOEI7UUFEOUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFJeEMsb0JBQWUsR0FFWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFDbkMsR0FBRyxDQUFDLENBQUMsTUFBa0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUMzRCxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDbEIsSUFBSSxDQUFDLGNBQWM7YUFDaEIsY0FBYyxDQUNiLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLFdBQVcsQ0FDcEI7YUFDQSxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxFQUNqRCxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNuRSxDQUNKLENBQ0YsQ0FBQztJQXBCQyxDQUFDOzs7WUFMTCxVQUFVOzs7O1lBTkYsT0FBTztZQUdQLGNBQWM7O0FBV3JCO0lBREMsTUFBTSxFQUFFO3NDQUNRLFVBQVU7OERBaUJ6Qjs7O0lBbEJGLGdEQWtCRTs7Ozs7SUF0QkEseUNBQXlCOzs7OztJQUN6QiwrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGNvbmNhdE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91cGRhdGUtcGFzc3dvcmQuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvY2NVc2VyU2VydmljZTogT2NjVXNlclNlcnZpY2VcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVQYXNzd29yZCQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuVXBkYXRlUGFzc3dvcmRTdWNjZXNzIHwgZnJvbUFjdGlvbnMuVXBkYXRlUGFzc3dvcmRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlVQREFURV9QQVNTV09SRCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLlVwZGF0ZVBhc3N3b3JkKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMub2NjVXNlclNlcnZpY2VcbiAgICAgICAgLnVwZGF0ZVBhc3N3b3JkKFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQub2xkUGFzc3dvcmQsXG4gICAgICAgICAgcGF5bG9hZC5uZXdQYXNzd29yZFxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChfID0+IG5ldyBmcm9tQWN0aW9ucy5VcGRhdGVQYXNzd29yZFN1Y2Nlc3MoKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuVXBkYXRlUGFzc3dvcmRGYWlsKGVycm9yKSkpXG4gICAgICAgIClcbiAgICApXG4gICk7XG59XG4iXX0=