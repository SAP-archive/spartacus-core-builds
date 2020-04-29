import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import { GlobalMessageService, GlobalMessageType, } from '../../../global-message/index';
var OrderDetailsEffect = /** @class */ (function () {
    function OrderDetailsEffect(actions$, orderConnector, globalMessageService) {
        var _this = this;
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.globalMessageService = globalMessageService;
        this.loadOrderDetails$ = this.actions$.pipe(ofType(UserActions.LOAD_ORDER_DETAILS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.orderConnector.get(payload.userId, payload.orderCode).pipe(map(function (order) {
                return new UserActions.LoadOrderDetailsSuccess(order);
            }), catchError(function (error) {
                return of(new UserActions.LoadOrderDetailsFail(makeErrorSerializable(error)));
            }));
        }));
        this.cancelOrder$ = this.actions$.pipe(ofType(UserActions.CANCEL_ORDER), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.orderConnector
                .cancel(payload.userId, payload.orderCode, payload.cancelRequestInput)
                .pipe(map(function () { return new UserActions.CancelOrderSuccess(); }), catchError(function (error) {
                var _a;
                (_a = error.error) === null || _a === void 0 ? void 0 : _a.errors.forEach(function (err) {
                    return _this.globalMessageService.add(err.message, GlobalMessageType.MSG_TYPE_ERROR);
                });
                return of(new UserActions.CancelOrderFail(makeErrorSerializable(error)));
            }));
        }));
    }
    OrderDetailsEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserOrderConnector },
        { type: GlobalMessageService }
    ]; };
    __decorate([
        Effect()
    ], OrderDetailsEffect.prototype, "loadOrderDetails$", void 0);
    __decorate([
        Effect()
    ], OrderDetailsEffect.prototype, "cancelOrder$", void 0);
    OrderDetailsEffect = __decorate([
        Injectable()
    ], OrderDetailsEffect);
    return OrderDetailsEffect;
}());
export { OrderDetailsEffect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL29yZGVyLWRldGFpbHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixHQUNsQixNQUFNLCtCQUErQixDQUFDO0FBR3ZDO0lBNENFLDRCQUNVLFFBQWlCLEVBQ2pCLGNBQWtDLEVBQ2xDLG9CQUEwQztRQUhwRCxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ2xDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUE3Q3BELHNCQUFpQixHQUViLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLEdBQUcsQ0FBQyxVQUFDLE1BQW9DLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUM3RCxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2hCLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUNwRSxHQUFHLENBQUMsVUFBQyxLQUFZO2dCQUNmLE9BQU8sSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUMsS0FBSztnQkFDZixPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQXRFLENBQXNFLENBQ3ZFLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixpQkFBWSxHQUErQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0UsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFDaEMsR0FBRyxDQUFDLFVBQUMsTUFBK0IsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3hELFNBQVMsQ0FBQyxVQUFDLE9BQU87WUFDaEIsT0FBTyxLQUFJLENBQUMsY0FBYztpQkFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUM7aUJBQ3JFLElBQUksQ0FDSCxHQUFHLENBQUMsY0FBTSxPQUFBLElBQUksV0FBVyxDQUFDLGtCQUFrQixFQUFFLEVBQXBDLENBQW9DLENBQUMsRUFDL0MsVUFBVSxDQUFDLFVBQUMsS0FBSzs7Z0JBQ2YsTUFBQSxLQUFLLENBQUMsS0FBSywwQ0FBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztvQkFDOUIsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixHQUFHLENBQUMsT0FBTyxFQUNYLGlCQUFpQixDQUFDLGNBQWMsQ0FDakM7Z0JBSEQsQ0FHQyxFQUNEO2dCQUVGLE9BQU8sRUFBRSxDQUNQLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUM5RCxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUFNQyxDQUFDOztnQkFIZ0IsT0FBTztnQkFDRCxrQkFBa0I7Z0JBQ1osb0JBQW9COztJQTdDcEQ7UUFEQyxNQUFNLEVBQUU7aUVBZ0JQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7NERBdUJQO0lBMUNTLGtCQUFrQjtRQUQ5QixVQUFVLEVBQUU7T0FDQSxrQkFBa0IsQ0FpRDlCO0lBQUQseUJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQWpEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlck9yZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbHNFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgbG9hZE9yZGVyRGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuT3JkZXJEZXRhaWxzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfT1JERVJfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRPcmRlckRldGFpbHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyQ29ubmVjdG9yLmdldChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5vcmRlckNvZGUpLnBpcGUoXG4gICAgICAgIG1hcCgob3JkZXI6IE9yZGVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJEZXRhaWxzU3VjY2VzcyhvcmRlcik7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICBvZihuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyRGV0YWlsc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY2FuY2VsT3JkZXIkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLk9yZGVyRGV0YWlsc0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkNBTkNFTF9PUkRFUiksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkNhbmNlbE9yZGVyKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vcmRlckNvbm5lY3RvclxuICAgICAgICAuY2FuY2VsKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLm9yZGVyQ29kZSwgcGF5bG9hZC5jYW5jZWxSZXF1ZXN0SW5wdXQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiBuZXcgVXNlckFjdGlvbnMuQ2FuY2VsT3JkZXJTdWNjZXNzKCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBlcnJvci5lcnJvcj8uZXJyb3JzLmZvckVhY2goKGVycikgPT5cbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuQ2FuY2VsT3JkZXJGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb3JkZXJDb25uZWN0b3I6IFVzZXJPcmRlckNvbm5lY3RvcixcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG59XG4iXX0=