import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
var ConsignmentTrackingEffects = /** @class */ (function () {
    function ConsignmentTrackingEffects(actions$, userOrderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userOrderConnector = userOrderConnector;
        this.loadConsignmentTracking$ = this.actions$.pipe(ofType(UserActions.LOAD_CONSIGNMENT_TRACKING), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.userOrderConnector
                .getConsignmentTracking(payload.orderCode, payload.consignmentCode, payload.userId)
                .pipe(map(function (tracking) {
                return new UserActions.LoadConsignmentTrackingSuccess(tracking);
            }), catchError(function (error) {
                return of(new UserActions.LoadConsignmentTrackingFail(makeErrorSerializable(error)));
            }));
        }));
    }
    ConsignmentTrackingEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserOrderConnector }
    ]; };
    __decorate([
        Effect()
    ], ConsignmentTrackingEffects.prototype, "loadConsignmentTracking$", void 0);
    ConsignmentTrackingEffects = __decorate([
        Injectable()
    ], ConsignmentTrackingEffects);
    return ConsignmentTrackingEffects;
}());
export { ConsignmentTrackingEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9jb25zaWdubWVudC10cmFja2luZy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DO0lBOEJFLG9DQUNVLFFBQWlCLEVBQ2pCLGtCQUFzQztRQUZoRCxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQTlCaEQsNkJBQXdCLEdBRXBCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDLEVBQzdDLEdBQUcsQ0FBQyxVQUFDLE1BQTJDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUNwRSxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2hCLE9BQU8sS0FBSSxDQUFDLGtCQUFrQjtpQkFDM0Isc0JBQXNCLENBQ3JCLE9BQU8sQ0FBQyxTQUFTLEVBQ2pCLE9BQU8sQ0FBQyxlQUFlLEVBQ3ZCLE9BQU8sQ0FBQyxNQUFNLENBQ2Y7aUJBQ0EsSUFBSSxDQUNILEdBQUcsQ0FDRCxVQUFDLFFBQTZCO2dCQUM1QixPQUFBLElBQUksV0FBVyxDQUFDLDhCQUE4QixDQUFDLFFBQVEsQ0FBQztZQUF4RCxDQUF3RCxDQUMzRCxFQUNELFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBQSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsMkJBQTJCLENBQ3pDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxDQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFGZ0IsT0FBTztnQkFDRyxrQkFBa0I7O0lBOUJoRDtRQURDLE1BQU0sRUFBRTtnRkEyQlA7SUE1QlMsMEJBQTBCO1FBRHRDLFVBQVUsRUFBRTtPQUNBLDBCQUEwQixDQWtDdEM7SUFBRCxpQ0FBQztDQUFBLEFBbENELElBa0NDO1NBbENZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY29uc2lnbm1lbnQtdHJhY2tpbmcubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJPcmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvb3JkZXIvdXNlci1vcmRlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnNpZ25tZW50VHJhY2tpbmdFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDb25zaWdubWVudFRyYWNraW5nJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Db25zaWdubWVudFRyYWNraW5nQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfQ09OU0lHTk1FTlRfVFJBQ0tJTkcpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5Mb2FkQ29uc2lnbm1lbnRUcmFja2luZykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlck9yZGVyQ29ubmVjdG9yXG4gICAgICAgIC5nZXRDb25zaWdubWVudFRyYWNraW5nKFxuICAgICAgICAgIHBheWxvYWQub3JkZXJDb2RlLFxuICAgICAgICAgIHBheWxvYWQuY29uc2lnbm1lbnRDb2RlLFxuICAgICAgICAgIHBheWxvYWQudXNlcklkXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKHRyYWNraW5nOiBDb25zaWdubWVudFRyYWNraW5nKSA9PlxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZENvbnNpZ25tZW50VHJhY2tpbmdTdWNjZXNzKHRyYWNraW5nKVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRDb25zaWdubWVudFRyYWNraW5nRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlck9yZGVyQ29ubmVjdG9yOiBVc2VyT3JkZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19