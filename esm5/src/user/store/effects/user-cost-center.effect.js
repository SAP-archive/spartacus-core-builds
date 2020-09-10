import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserActions } from '../actions/index';
import { UserCostCenterConnector } from '../../connectors/cost-center/user-cost-center.connector';
var UserCostCenterEffects = /** @class */ (function () {
    function UserCostCenterEffects(actions$, userCostCenterConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userCostCenterConnector = userCostCenterConnector;
        this.loadActiveCostCenters$ = this.actions$.pipe(ofType(UserActions.LOAD_ACTIVE_COST_CENTERS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.userCostCenterConnector.getActiveList(payload).pipe(map(function (data) {
                return new UserActions.LoadActiveCostCentersSuccess(data.values);
            }), catchError(function (error) {
                return of(new UserActions.LoadActiveCostCentersFail(makeErrorSerializable(error)));
            }));
        }));
    }
    UserCostCenterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserCostCenterConnector }
    ]; };
    __decorate([
        Effect()
    ], UserCostCenterEffects.prototype, "loadActiveCostCenters$", void 0);
    UserCostCenterEffects = __decorate([
        Injectable()
    ], UserCostCenterEffects);
    return UserCostCenterEffects;
}());
export { UserCostCenterEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItY29zdC1jZW50ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUdsRztJQXdCRSwrQkFDVSxRQUFpQixFQUNqQix1QkFBZ0Q7UUFGMUQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUF4QjFELDJCQUFzQixHQUVsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUM1QyxHQUFHLENBQUMsVUFBQyxNQUF5QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDbEUsU0FBUyxDQUFDLFVBQUMsT0FBTztZQUNoQixPQUFBLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUN0RCxHQUFHLENBQ0QsVUFBQyxJQUErQjtnQkFDOUIsT0FBQSxJQUFJLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQXpELENBQXlELENBQzVELEVBQ0QsVUFBVSxDQUFDLFVBQUMsS0FBSztnQkFDZixPQUFBLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQyx5QkFBeUIsQ0FDdkMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0Y7WUFKRCxDQUlDLENBQ0YsQ0FDRjtRQVpELENBWUMsQ0FDRixDQUNGLENBQUM7SUFLQyxDQUFDOztnQkFGZ0IsT0FBTztnQkFDUSx1QkFBdUI7O0lBeEIxRDtRQURDLE1BQU0sRUFBRTt5RUFxQlA7SUF0QlMscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQixDQTRCakM7SUFBRCw0QkFBQztDQUFBLEFBNUJELElBNEJDO1NBNUJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3N0Q2VudGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JnLXVuaXQubW9kZWwnO1xuaW1wb3J0IHsgRW50aXRpZXNNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQ29zdENlbnRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29zdC1jZW50ZXIvdXNlci1jb3N0LWNlbnRlci5jb25uZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckNvc3RDZW50ZXJFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRBY3RpdmVDb3N0Q2VudGVycyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlckNvc3RDZW50ZXJBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuTE9BRF9BQ1RJVkVfQ09TVF9DRU5URVJTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZEFjdGl2ZUNvc3RDZW50ZXJzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKChwYXlsb2FkKSA9PlxuICAgICAgdGhpcy51c2VyQ29zdENlbnRlckNvbm5lY3Rvci5nZXRBY3RpdmVMaXN0KHBheWxvYWQpLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAoZGF0YTogRW50aXRpZXNNb2RlbDxDb3N0Q2VudGVyPikgPT5cbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkQWN0aXZlQ29zdENlbnRlcnNTdWNjZXNzKGRhdGEudmFsdWVzKVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkQWN0aXZlQ29zdENlbnRlcnNGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQ29zdENlbnRlckNvbm5lY3RvcjogVXNlckNvc3RDZW50ZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19