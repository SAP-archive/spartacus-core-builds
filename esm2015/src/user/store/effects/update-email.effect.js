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
import * as fromUpdateEmailAction from '../actions/update-email.action';
export class UpdateEmailEffects {
    /**
     * @param {?} actions$
     * @param {?} userAccountConnector
     */
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updateEmail$ = this.actions$.pipe(ofType(fromUpdateEmailAction.UPDATE_EMAIL), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.userAccountConnector
            .updateEmail(payload.uid, payload.password, payload.newUid)
            .pipe(map((/**
         * @return {?}
         */
        () => new fromUpdateEmailAction.UpdateEmailSuccessAction(payload.newUid))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new fromUpdateEmailAction.UpdateEmailErrorAction(makeHttpErrorSerializable(error)))))))));
    }
}
UpdateEmailEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UpdateEmailEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UpdateEmailEffects.prototype, "updateEmail$", void 0);
if (false) {
    /** @type {?} */
    UpdateEmailEffects.prototype.updateEmail$;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailEffects.prototype.userAccountConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXBkYXRlLWVtYWlsLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sZ0NBQWdDLENBQUM7QUFHeEUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFDN0IsWUFDVSxRQUFpQixFQUNqQixvQkFBbUM7UUFEbkMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUFJN0MsaUJBQVksR0FHUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxFQUMxQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUErQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ3hFLFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUNsQixJQUFJLENBQUMsb0JBQW9CO2FBQ3RCLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUMxRCxJQUFJLENBQ0gsR0FBRzs7O1FBQ0QsR0FBRyxFQUFFLENBQ0gsSUFBSSxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQ3JFLEVBQ0QsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLHFCQUFxQixDQUFDLHNCQUFzQixDQUM5Qyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FDakMsQ0FDRixFQUNGLENBQ0YsRUFDSixDQUNGLENBQUM7SUExQkMsQ0FBQzs7O1lBTEwsVUFBVTs7OztZQVBGLE9BQU87WUFJUCxhQUFhOztBQVdwQjtJQURDLE1BQU0sRUFBRTtzQ0FDSyxVQUFVO3dEQXVCdEI7OztJQXhCRiwwQ0F3QkU7Ozs7O0lBNUJBLHNDQUF5Qjs7Ozs7SUFDekIsa0RBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBjb25jYXRNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tVXBkYXRlRW1haWxBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy91cGRhdGUtZW1haWwuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZUVtYWlsJDogT2JzZXJ2YWJsZTxcbiAgICB8IGZyb21VcGRhdGVFbWFpbEFjdGlvbi5VcGRhdGVFbWFpbFN1Y2Nlc3NBY3Rpb25cbiAgICB8IGZyb21VcGRhdGVFbWFpbEFjdGlvbi5VcGRhdGVFbWFpbEVycm9yQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21VcGRhdGVFbWFpbEFjdGlvbi5VUERBVEVfRU1BSUwpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tVXBkYXRlRW1haWxBY3Rpb24uVXBkYXRlRW1haWxBY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBjb25jYXRNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy51c2VyQWNjb3VudENvbm5lY3RvclxuICAgICAgICAudXBkYXRlRW1haWwocGF5bG9hZC51aWQsIHBheWxvYWQucGFzc3dvcmQsIHBheWxvYWQubmV3VWlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgICBuZXcgZnJvbVVwZGF0ZUVtYWlsQWN0aW9uLlVwZGF0ZUVtYWlsU3VjY2Vzc0FjdGlvbihwYXlsb2FkLm5ld1VpZClcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgZnJvbVVwZGF0ZUVtYWlsQWN0aW9uLlVwZGF0ZUVtYWlsRXJyb3JBY3Rpb24oXG4gICAgICAgICAgICAgICAgbWFrZUh0dHBFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==