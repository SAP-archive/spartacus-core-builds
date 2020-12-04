import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { normalizeHttpError } from '../../../util/normalize-http-error';
import { UserNotificationPreferenceConnector } from '../../connectors/notification-preference/user-notification-preference.connector';
import { UserActions } from '../actions/index';
export class NotificationPreferenceEffects {
    constructor(actions$, connector) {
        this.actions$ = actions$;
        this.connector = connector;
        this.loadPreferences$ = this.actions$.pipe(ofType(UserActions.LOAD_NOTIFICATION_PREFERENCES), map((action) => action.payload), switchMap((payload) => this.connector.loadAll(payload).pipe(map((preferences) => new UserActions.LoadNotificationPreferencesSuccess(preferences)), catchError((error) => of(new UserActions.LoadNotificationPreferencesFail(normalizeHttpError(error)))))));
        this.updatePreferences$ = this.actions$.pipe(ofType(UserActions.UPDATE_NOTIFICATION_PREFERENCES), map((action) => action.payload), mergeMap((payload) => this.connector.update(payload.userId, payload.preferences).pipe(map(() => new UserActions.UpdateNotificationPreferencesSuccess(payload.preferences)), catchError((error) => of(new UserActions.UpdateNotificationPreferencesFail(normalizeHttpError(error)))))));
    }
}
NotificationPreferenceEffects.decorators = [
    { type: Injectable }
];
NotificationPreferenceEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserNotificationPreferenceConnector }
];
__decorate([
    Effect()
], NotificationPreferenceEffects.prototype, "loadPreferences$", void 0);
__decorate([
    Effect()
], NotificationPreferenceEffects.prototype, "updatePreferences$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXByZWZlcmVuY2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvdXNlci9zdG9yZS9lZmZlY3RzL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDdEksT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU0sT0FBTyw2QkFBNkI7SUFpRHhDLFlBQ1UsUUFBaUIsRUFDakIsU0FBOEM7UUFEOUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFxQztRQWpEeEQscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQUMsRUFDakQsR0FBRyxDQUFDLENBQUMsTUFBK0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUN4RSxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2xDLEdBQUcsQ0FDRCxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQ2QsSUFBSSxXQUFXLENBQUMsa0NBQWtDLENBQUMsV0FBVyxDQUFDLENBQ2xFLEVBQ0QsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDbkIsRUFBRSxDQUNBLElBQUksV0FBVyxDQUFDLCtCQUErQixDQUM3QyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FDMUIsQ0FDRixDQUNGLENBQ0YsQ0FDRixDQUNGLENBQUM7UUFHRix1QkFBa0IsR0FFZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQywrQkFBK0IsQ0FBQyxFQUNuRCxHQUFHLENBQUMsQ0FBQyxNQUFpRCxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQzFFLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDN0QsR0FBRyxDQUNELEdBQUcsRUFBRSxDQUNILElBQUksV0FBVyxDQUFDLG9DQUFvQyxDQUNsRCxPQUFPLENBQUMsV0FBVyxDQUNwQixDQUNKLEVBQ0QsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDbkIsRUFBRSxDQUNBLElBQUksV0FBVyxDQUFDLGlDQUFpQyxDQUMvQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FDMUIsQ0FDRixDQUNGLENBQ0YsQ0FDRixDQUNGLENBQUM7SUFLQyxDQUFDOzs7WUFyREwsVUFBVTs7O1lBUEYsT0FBTztZQUlQLG1DQUFtQzs7QUFNMUM7SUFEQyxNQUFNLEVBQUU7dUVBcUJQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7eUVBdUJQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBub3JtYWxpemVIdHRwRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL25vcm1hbGl6ZS1odHRwLWVycm9yJztcbmltcG9ydCB7IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS91c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uUHJlZmVyZW5jZUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFByZWZlcmVuY2VzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Ob3RpZmljYXRpb25QcmVmZXJlbmNlQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZE5vdGlmaWNhdGlvblByZWZlcmVuY2VzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKChwYXlsb2FkKSA9PlxuICAgICAgdGhpcy5jb25uZWN0b3IubG9hZEFsbChwYXlsb2FkKS5waXBlKFxuICAgICAgICBtYXAoXG4gICAgICAgICAgKHByZWZlcmVuY2VzKSA9PlxuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWROb3RpZmljYXRpb25QcmVmZXJlbmNlc1N1Y2Nlc3MocHJlZmVyZW5jZXMpXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWROb3RpZmljYXRpb25QcmVmZXJlbmNlc0ZhaWwoXG4gICAgICAgICAgICAgIG5vcm1hbGl6ZUh0dHBFcnJvcihlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZVByZWZlcmVuY2VzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Ob3RpZmljYXRpb25QcmVmZXJlbmNlQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlVQREFURV9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVMpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5VcGRhdGVOb3RpZmljYXRpb25QcmVmZXJlbmNlcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PlxuICAgICAgdGhpcy5jb25uZWN0b3IudXBkYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLnByZWZlcmVuY2VzKS5waXBlKFxuICAgICAgICBtYXAoXG4gICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVOb3RpZmljYXRpb25QcmVmZXJlbmNlc1N1Y2Nlc3MoXG4gICAgICAgICAgICAgIHBheWxvYWQucHJlZmVyZW5jZXNcbiAgICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuVXBkYXRlTm90aWZpY2F0aW9uUHJlZmVyZW5jZXNGYWlsKFxuICAgICAgICAgICAgICBub3JtYWxpemVIdHRwRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjb25uZWN0b3I6IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==