import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
var OrderDetailsEffect = /** @class */ (function () {
    function OrderDetailsEffect(actions$, orderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
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
                return of(new UserActions.CancelOrderFail(makeErrorSerializable(error)));
            }));
        }));
    }
    OrderDetailsEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserOrderConnector }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL29yZGVyLWRldGFpbHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQztJQW1DRSw0QkFDVSxRQUFpQixFQUNqQixjQUFrQztRQUY1QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBbkM1QyxzQkFBaUIsR0FFYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN0QyxHQUFHLENBQUMsVUFBQyxNQUFvQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDN0QsU0FBUyxDQUFDLFVBQUMsT0FBTztZQUNoQixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDcEUsR0FBRyxDQUFDLFVBQUMsS0FBWTtnQkFDZixPQUFPLElBQUksV0FBVyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUF0RSxDQUFzRSxDQUN2RSxDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0YsaUJBQVksR0FBK0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQ2hDLEdBQUcsQ0FBQyxVQUFDLE1BQStCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN4RCxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2hCLE9BQU8sS0FBSSxDQUFDLGNBQWM7aUJBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDO2lCQUNyRSxJQUFJLENBQ0gsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFwQyxDQUFvQyxDQUFDLEVBQy9DLFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBakUsQ0FBaUUsQ0FDbEUsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQUZnQixPQUFPO2dCQUNELGtCQUFrQjs7SUFuQzVDO1FBREMsTUFBTSxFQUFFO2lFQWdCUDtJQUdGO1FBREMsTUFBTSxFQUFFOzREQWNQO0lBakNTLGtCQUFrQjtRQUQ5QixVQUFVLEVBQUU7T0FDQSxrQkFBa0IsQ0F1QzlCO0lBQUQseUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXZDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlck9yZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRPcmRlckRldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLk9yZGVyRGV0YWlsc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX09SREVSX0RFVEFJTFMpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJEZXRhaWxzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vcmRlckNvbm5lY3Rvci5nZXQocGF5bG9hZC51c2VySWQsIHBheWxvYWQub3JkZXJDb2RlKS5waXBlKFxuICAgICAgICBtYXAoKG9yZGVyOiBPcmRlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyRGV0YWlsc1N1Y2Nlc3Mob3JkZXIpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgb2YobmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlckRldGFpbHNGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNhbmNlbE9yZGVyJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5PcmRlckRldGFpbHNBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5DQU5DRUxfT1JERVIpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5DYW5jZWxPcmRlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub3JkZXJDb25uZWN0b3JcbiAgICAgICAgLmNhbmNlbChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5vcmRlckNvZGUsIHBheWxvYWQuY2FuY2VsUmVxdWVzdElucHV0KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4gbmV3IFVzZXJBY3Rpb25zLkNhbmNlbE9yZGVyU3VjY2VzcygpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5DYW5jZWxPcmRlckZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9yZGVyQ29ubmVjdG9yOiBVc2VyT3JkZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19