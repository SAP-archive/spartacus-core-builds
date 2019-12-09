/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserNotificationPreferenceConnector } from '../../connectors/notification-preference/user-notification-preference.connector';
import { UserActions } from '../actions/index';
export class NotificationPreferenceEffects {
    /**
     * @param {?} actions$
     * @param {?} connector
     */
    constructor(actions$, connector) {
        this.actions$ = actions$;
        this.connector = connector;
        this.loadPreferences$ = this.actions$.pipe(ofType(UserActions.LOAD_NOTIFICATION_PREFERENCES), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.connector.loadAll(payload).pipe(map((/**
         * @param {?} preferences
         * @return {?}
         */
        preferences => new UserActions.LoadNotificationPreferencesSuccess(preferences))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UserActions.LoadNotificationPreferencesFail(makeErrorSerializable(error)))))))));
        this.updatePreferences$ = this.actions$.pipe(ofType(UserActions.UPDATE_NOTIFICATION_PREFERENCES), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.connector.update(payload.userId, payload.preferences).pipe(map((/**
         * @return {?}
         */
        () => new UserActions.UpdateNotificationPreferencesSuccess(payload.preferences))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UserActions.UpdateNotificationPreferencesFail(makeErrorSerializable(error)))))))));
    }
}
NotificationPreferenceEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NotificationPreferenceEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserNotificationPreferenceConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], NotificationPreferenceEffects.prototype, "loadPreferences$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], NotificationPreferenceEffects.prototype, "updatePreferences$", void 0);
if (false) {
    /** @type {?} */
    NotificationPreferenceEffects.prototype.loadPreferences$;
    /** @type {?} */
    NotificationPreferenceEffects.prototype.updatePreferences$;
    /**
     * @type {?}
     * @private
     */
    NotificationPreferenceEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    NotificationPreferenceEffects.prototype.connector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXByZWZlcmVuY2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDdEksT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBaUR4QyxZQUNVLFFBQWlCLEVBQ2pCLFNBQThDO1FBRDlDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBcUM7UUFqRHhELHFCQUFnQixHQUVaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLDZCQUE2QixDQUFDLEVBQ2pELEdBQUc7Ozs7UUFBQyxDQUFDLE1BQStDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDeEUsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbEMsR0FBRzs7OztRQUNELFdBQVcsQ0FBQyxFQUFFLENBQ1osSUFBSSxXQUFXLENBQUMsa0NBQWtDLENBQUMsV0FBVyxDQUFDLEVBQ2xFLEVBQ0QsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQywrQkFBK0IsQ0FDN0MscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0YsRUFDRixDQUNGLEVBQ0YsQ0FDRixDQUFDO1FBR0YsdUJBQWtCLEdBRWQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsK0JBQStCLENBQUMsRUFDbkQsR0FBRzs7OztRQUFDLENBQUMsTUFBaUQsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUMxRSxRQUFROzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUM3RCxHQUFHOzs7UUFDRCxHQUFHLEVBQUUsQ0FDSCxJQUFJLFdBQVcsQ0FBQyxvQ0FBb0MsQ0FDbEQsT0FBTyxDQUFDLFdBQVcsQ0FDcEIsRUFDSixFQUNELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsaUNBQWlDLENBQy9DLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGLEVBQ0YsQ0FDRixFQUNGLENBQ0YsQ0FBQztJQUtDLENBQUM7OztZQXJETCxVQUFVOzs7O1lBUEYsT0FBTztZQUlQLG1DQUFtQzs7QUFNMUM7SUFEQyxNQUFNLEVBQUU7c0NBQ1MsVUFBVTt1RUFvQjFCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ1csVUFBVTt5RUFzQjVCOzs7SUE5Q0YseURBcUJFOztJQUVGLDJEQXVCRTs7Ozs7SUFHQSxpREFBeUI7Ozs7O0lBQ3pCLGtEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS91c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uUHJlZmVyZW5jZUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFByZWZlcmVuY2VzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Ob3RpZmljYXRpb25QcmVmZXJlbmNlQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZE5vdGlmaWNhdGlvblByZWZlcmVuY2VzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY29ubmVjdG9yLmxvYWRBbGwocGF5bG9hZCkucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIHByZWZlcmVuY2VzID0+XG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZE5vdGlmaWNhdGlvblByZWZlcmVuY2VzU3VjY2VzcyhwcmVmZXJlbmNlcylcbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWROb3RpZmljYXRpb25QcmVmZXJlbmNlc0ZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZVByZWZlcmVuY2VzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Ob3RpZmljYXRpb25QcmVmZXJlbmNlQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlVQREFURV9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVMpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5VcGRhdGVOb3RpZmljYXRpb25QcmVmZXJlbmNlcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMuY29ubmVjdG9yLnVwZGF0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5wcmVmZXJlbmNlcykucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgICgpID0+XG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuVXBkYXRlTm90aWZpY2F0aW9uUHJlZmVyZW5jZXNTdWNjZXNzKFxuICAgICAgICAgICAgICBwYXlsb2FkLnByZWZlcmVuY2VzXG4gICAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVOb3RpZmljYXRpb25QcmVmZXJlbmNlc0ZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNvbm5lY3RvcjogVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19