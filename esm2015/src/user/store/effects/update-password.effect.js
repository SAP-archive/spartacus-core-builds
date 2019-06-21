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
export class UpdatePasswordEffects {
    /**
     * @param {?} actions$
     * @param {?} userAccountConnector
     */
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updatePassword$ = this.actions$.pipe(ofType(fromActions.UPDATE_PASSWORD), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.userAccountConnector
            .updatePassword(payload.userId, payload.oldPassword, payload.newPassword)
            .pipe(map((/**
         * @param {?} _
         * @return {?}
         */
        _ => new fromActions.UpdatePasswordSuccess())), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new fromActions.UpdatePasswordFail(makeHttpErrorSerializable(error)))))))));
    }
}
UpdatePasswordEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UpdatePasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
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
    UpdatePasswordEffects.prototype.userAccountConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXBkYXRlLXBhc3N3b3JkLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEtBQUssV0FBVyxNQUFNLG1DQUFtQyxDQUFDO0FBR2pFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBQ2hDLFlBQ1UsUUFBaUIsRUFDakIsb0JBQW1DO1FBRG5DLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFlO1FBSTdDLG9CQUFlLEdBRVgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQ25DLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWtDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDM0QsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2xCLElBQUksQ0FBQyxvQkFBb0I7YUFDdEIsY0FBYyxDQUNiLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLFdBQVcsQ0FDcEI7YUFDQSxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMscUJBQXFCLEVBQUUsRUFBQyxFQUNqRCxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUNBLElBQUksV0FBVyxDQUFDLGtCQUFrQixDQUNoQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FDakMsQ0FDRixFQUNGLENBQ0YsRUFDSixDQUNGLENBQUM7SUExQkMsQ0FBQzs7O1lBTEwsVUFBVTs7OztZQVBGLE9BQU87WUFJUCxhQUFhOztBQVdwQjtJQURDLE1BQU0sRUFBRTtzQ0FDUSxVQUFVOzhEQXVCekI7OztJQXhCRixnREF3QkU7Ozs7O0lBNUJBLHlDQUF5Qjs7Ozs7SUFDekIscURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBjb25jYXRNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VwZGF0ZS1wYXNzd29yZC5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBY2NvdW50Q29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yXG4gICkge31cblxuICBARWZmZWN0KClcbiAgdXBkYXRlUGFzc3dvcmQkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlVwZGF0ZVBhc3N3b3JkU3VjY2VzcyB8IGZyb21BY3Rpb25zLlVwZGF0ZVBhc3N3b3JkRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5VUERBVEVfUEFTU1dPUkQpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5VcGRhdGVQYXNzd29yZCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLnVzZXJBY2NvdW50Q29ubmVjdG9yXG4gICAgICAgIC51cGRhdGVQYXNzd29yZChcbiAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBwYXlsb2FkLm9sZFBhc3N3b3JkLFxuICAgICAgICAgIHBheWxvYWQubmV3UGFzc3dvcmRcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXyA9PiBuZXcgZnJvbUFjdGlvbnMuVXBkYXRlUGFzc3dvcmRTdWNjZXNzKCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuVXBkYXRlUGFzc3dvcmRGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG59XG4iXX0=