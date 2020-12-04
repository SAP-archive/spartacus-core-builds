import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { normalizeHttpError } from '../../../util/normalize-http-error';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
export class UpdatePasswordEffects {
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updatePassword$ = this.actions$.pipe(ofType(UserActions.UPDATE_PASSWORD), map((action) => action.payload), concatMap((payload) => this.userAccountConnector
            .updatePassword(payload.userId, payload.oldPassword, payload.newPassword)
            .pipe(map(() => new UserActions.UpdatePasswordSuccess()), catchError((error) => of(new UserActions.UpdatePasswordFail(normalizeHttpError(error)))))));
    }
}
UpdatePasswordEffects.decorators = [
    { type: Injectable }
];
UpdatePasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect()
], UpdatePasswordEffects.prototype, "updatePassword$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91cGRhdGUtcGFzc3dvcmQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxZQUNVLFFBQWlCLEVBQ2pCLG9CQUFtQztRQURuQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBZTtRQUk3QyxvQkFBZSxHQUVYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUNuQyxHQUFHLENBQUMsQ0FBQyxNQUFrQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQzNELFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQ3BCLElBQUksQ0FBQyxvQkFBb0I7YUFDdEIsY0FBYyxDQUNiLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLFdBQVcsQ0FDcEI7YUFDQSxJQUFJLENBQ0gsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsRUFDbEQsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDbkIsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDbEUsQ0FDRixDQUNKLENBQ0YsQ0FBQztJQXRCQyxDQUFDOzs7WUFMTCxVQUFVOzs7WUFQRixPQUFPO1lBSVAsYUFBYTs7QUFXcEI7SUFEQyxNQUFNLEVBQUU7OERBb0JQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBjb25jYXRNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG5vcm1hbGl6ZUh0dHBFcnJvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvbm9ybWFsaXplLWh0dHAtZXJyb3InO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBY2NvdW50Q29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yXG4gICkge31cblxuICBARWZmZWN0KClcbiAgdXBkYXRlUGFzc3dvcmQkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVwZGF0ZVBhc3N3b3JkU3VjY2VzcyB8IFVzZXJBY3Rpb25zLlVwZGF0ZVBhc3N3b3JkRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5VUERBVEVfUEFTU1dPUkQpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5VcGRhdGVQYXNzd29yZCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcCgocGF5bG9hZCkgPT5cbiAgICAgIHRoaXMudXNlckFjY291bnRDb25uZWN0b3JcbiAgICAgICAgLnVwZGF0ZVBhc3N3b3JkKFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQub2xkUGFzc3dvcmQsXG4gICAgICAgICAgcGF5bG9hZC5uZXdQYXNzd29yZFxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiBuZXcgVXNlckFjdGlvbnMuVXBkYXRlUGFzc3dvcmRTdWNjZXNzKCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YobmV3IFVzZXJBY3Rpb25zLlVwZGF0ZVBhc3N3b3JkRmFpbChub3JtYWxpemVIdHRwRXJyb3IoZXJyb3IpKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG59XG4iXX0=