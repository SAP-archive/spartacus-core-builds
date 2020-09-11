import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { normalizeHttpError } from '../../../util/normalize-http-error';
import { UserCostCenterConnector } from '../../connectors/cost-center/user-cost-center.connector';
import { UserActions } from '../actions/index';
var UserCostCenterEffects = /** @class */ (function () {
    function UserCostCenterEffects(actions$, userCostCenterConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userCostCenterConnector = userCostCenterConnector;
        this.loadActiveCostCenters$ = this.actions$.pipe(ofType(UserActions.LOAD_ACTIVE_COST_CENTERS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.userCostCenterConnector.getActiveList(payload).pipe(
            // TODO(#8875): Should we use here serialize utils?
            map(function (data) {
                return new UserActions.LoadActiveCostCentersSuccess(data.values);
            }), catchError(function (error) {
                return of(new UserActions.LoadActiveCostCentersFail(normalizeHttpError(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItY29zdC1jZW50ZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQztJQXVCRSwrQkFDVSxRQUFpQixFQUNqQix1QkFBZ0Q7UUFGMUQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUF2QjFELDJCQUFzQixHQUVsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUM1QyxHQUFHLENBQUMsVUFBQyxNQUF5QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDbEUsU0FBUyxDQUFDLFVBQUMsT0FBTztZQUNoQixPQUFBLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSTtZQUN0RCxtREFBbUQ7WUFDbkQsR0FBRyxDQUNELFVBQUMsSUFBK0I7Z0JBQzlCLE9BQUEsSUFBSSxXQUFXLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUF6RCxDQUF5RCxDQUM1RCxFQUNELFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBQSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMseUJBQXlCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDckU7WUFGRCxDQUVDLENBQ0YsQ0FDRjtRQVhELENBV0MsQ0FDRixDQUNGLENBQUM7SUFLQyxDQUFDOztnQkFGZ0IsT0FBTztnQkFDUSx1QkFBdUI7O0lBdkIxRDtRQURDLE1BQU0sRUFBRTt5RUFvQlA7SUFyQlMscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQixDQTJCakM7SUFBRCw0QkFBQztDQUFBLEFBM0JELElBMkJDO1NBM0JZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFbnRpdGllc01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBDb3N0Q2VudGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JnLXVuaXQubW9kZWwnO1xuaW1wb3J0IHsgbm9ybWFsaXplSHR0cEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9ub3JtYWxpemUtaHR0cC1lcnJvcic7XG5pbXBvcnQgeyBVc2VyQ29zdENlbnRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29zdC1jZW50ZXIvdXNlci1jb3N0LWNlbnRlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJDb3N0Q2VudGVyRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQWN0aXZlQ29zdENlbnRlcnMkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJDb3N0Q2VudGVyQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfQUNUSVZFX0NPU1RfQ0VOVEVSUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRBY3RpdmVDb3N0Q2VudGVycykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT5cbiAgICAgIHRoaXMudXNlckNvc3RDZW50ZXJDb25uZWN0b3IuZ2V0QWN0aXZlTGlzdChwYXlsb2FkKS5waXBlKFxuICAgICAgICAvLyBUT0RPKCM4ODc1KTogU2hvdWxkIHdlIHVzZSBoZXJlIHNlcmlhbGl6ZSB1dGlscz9cbiAgICAgICAgbWFwKFxuICAgICAgICAgIChkYXRhOiBFbnRpdGllc01vZGVsPENvc3RDZW50ZXI+KSA9PlxuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRBY3RpdmVDb3N0Q2VudGVyc1N1Y2Nlc3MoZGF0YS52YWx1ZXMpXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRBY3RpdmVDb3N0Q2VudGVyc0ZhaWwobm9ybWFsaXplSHR0cEVycm9yKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJDb3N0Q2VudGVyQ29ubmVjdG9yOiBVc2VyQ29zdENlbnRlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=