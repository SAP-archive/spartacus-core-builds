import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
var UserOrdersEffect = /** @class */ (function () {
    function UserOrdersEffect(actions$, orderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadUserOrders$ = this.actions$.pipe(ofType(UserActions.LOAD_USER_ORDERS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.orderConnector
                .getHistory(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map(function (orders) {
                return new UserActions.LoadUserOrdersSuccess(orders);
            }), catchError(function (error) {
                return of(new UserActions.LoadUserOrdersFail(makeErrorSerializable(error)));
            }));
        }));
        this.resetUserOrders$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE), map(function () {
            return new UserActions.ClearUserOrders();
        }));
    }
    UserOrdersEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserOrderConnector }
    ]; };
    __decorate([
        Effect()
    ], UserOrdersEffect.prototype, "loadUserOrders$", void 0);
    __decorate([
        Effect()
    ], UserOrdersEffect.prototype, "resetUserOrders$", void 0);
    UserOrdersEffect = __decorate([
        Injectable()
    ], UserOrdersEffect);
    return UserOrdersEffect;
}());
export { UserOrdersEffect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLW9yZGVycy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DO0lBQ0UsMEJBQ1UsUUFBaUIsRUFDakIsY0FBa0M7UUFGNUMsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUk1QyxvQkFBZSxHQUVYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQ3BDLEdBQUcsQ0FBQyxVQUFDLE1BQWtDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUMzRCxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2hCLE9BQU8sS0FBSSxDQUFDLGNBQWM7aUJBQ3ZCLFVBQVUsQ0FDVCxPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxRQUFRLEVBQ2hCLE9BQU8sQ0FBQyxXQUFXLEVBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQ2I7aUJBQ0EsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLE1BQXdCO2dCQUMzQixPQUFPLElBQUksV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFwRSxDQUFvRSxDQUNyRSxDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0YscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsRUFDMUMsR0FBRyxDQUFDO1lBQ0YsT0FBTyxJQUFJLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBbkNDLENBQUM7O2dCQUZnQixPQUFPO2dCQUNELGtCQUFrQjs7SUFJNUM7UUFEQyxNQUFNLEVBQUU7NkRBdUJQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7OERBUVA7SUF2Q1MsZ0JBQWdCO1FBRDVCLFVBQVUsRUFBRTtPQUNBLGdCQUFnQixDQXdDNUI7SUFBRCx1QkFBQztDQUFBLEFBeENELElBd0NDO1NBeENZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJPcmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvb3JkZXIvdXNlci1vcmRlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJPcmRlcnNFZmZlY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb3JkZXJDb25uZWN0b3I6IFVzZXJPcmRlckNvbm5lY3RvclxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyT3JkZXJzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyT3JkZXJzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfVVNFUl9PUkRFUlMpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5Mb2FkVXNlck9yZGVycykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub3JkZXJDb25uZWN0b3JcbiAgICAgICAgLmdldEhpc3RvcnkoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5wYWdlU2l6ZSxcbiAgICAgICAgICBwYXlsb2FkLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIHBheWxvYWQuc29ydFxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgob3JkZXJzOiBPcmRlckhpc3RvcnlMaXN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyT3JkZXJzU3VjY2VzcyhvcmRlcnMpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YobmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyT3JkZXJzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVzZXRVc2VyT3JkZXJzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5DbGVhclVzZXJPcmRlcnNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSksXG4gICAgbWFwKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuQ2xlYXJVc2VyT3JkZXJzKCk7XG4gICAgfSlcbiAgKTtcbn1cbiJdfQ==