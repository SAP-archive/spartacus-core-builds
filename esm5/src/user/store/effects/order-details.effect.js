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
                .pipe(map(function (_) { return new UserActions.CancelOrderSuccess(); }), catchError(function (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL29yZGVyLWRldGFpbHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQztJQW1DRSw0QkFDVSxRQUFpQixFQUNqQixjQUFrQztRQUY1QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBbkM1QyxzQkFBaUIsR0FFYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN0QyxHQUFHLENBQUMsVUFBQyxNQUFvQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDN0QsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNmLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUNwRSxHQUFHLENBQUMsVUFBQyxLQUFZO2dCQUNmLE9BQU8sSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQXRFLENBQXNFLENBQ3ZFLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixpQkFBWSxHQUErQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0UsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFDaEMsR0FBRyxDQUFDLFVBQUMsTUFBK0IsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3hELFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDZixPQUFPLEtBQUksQ0FBQyxjQUFjO2lCQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztpQkFDckUsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksV0FBVyxDQUFDLGtCQUFrQixFQUFFLEVBQXBDLENBQW9DLENBQUMsRUFDOUMsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFqRSxDQUFpRSxDQUNsRSxDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBRmdCLE9BQU87Z0JBQ0Qsa0JBQWtCOztJQW5DNUM7UUFEQyxNQUFNLEVBQUU7aUVBZ0JQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7NERBY1A7SUFqQ1Msa0JBQWtCO1FBRDlCLFVBQVUsRUFBRTtPQUNBLGtCQUFrQixDQXVDOUI7SUFBRCx5QkFBQztDQUFBLEFBdkNELElBdUNDO1NBdkNZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyT3JkZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbHNFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgbG9hZE9yZGVyRGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuT3JkZXJEZXRhaWxzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfT1JERVJfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRPcmRlckRldGFpbHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vcmRlckNvbm5lY3Rvci5nZXQocGF5bG9hZC51c2VySWQsIHBheWxvYWQub3JkZXJDb2RlKS5waXBlKFxuICAgICAgICBtYXAoKG9yZGVyOiBPcmRlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyRGV0YWlsc1N1Y2Nlc3Mob3JkZXIpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJEZXRhaWxzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjYW5jZWxPcmRlciQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuT3JkZXJEZXRhaWxzQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuQ0FOQ0VMX09SREVSKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuQ2FuY2VsT3JkZXIpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vcmRlckNvbm5lY3RvclxuICAgICAgICAuY2FuY2VsKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLm9yZGVyQ29kZSwgcGF5bG9hZC5jYW5jZWxSZXF1ZXN0SW5wdXQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChfID0+IG5ldyBVc2VyQWN0aW9ucy5DYW5jZWxPcmRlclN1Y2Nlc3MoKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IFVzZXJBY3Rpb25zLkNhbmNlbE9yZGVyRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb3JkZXJDb25uZWN0b3I6IFVzZXJPcmRlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=