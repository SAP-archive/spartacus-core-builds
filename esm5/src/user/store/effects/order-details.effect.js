/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromOrderDetailsAction from '../actions/order-details.action';
import { OrderConnector } from '../../connectors/order.connector';
var OrderDetailsEffect = /** @class */ (function () {
    function OrderDetailsEffect(actions$, orderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadOrderDetails$ = this.actions$.pipe(ofType(fromOrderDetailsAction.LOAD_ORDER_DETAILS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.orderConnector.get(payload.userId, payload.orderCode).pipe(map(function (order) {
                return new fromOrderDetailsAction.LoadOrderDetailsSuccess(order);
            }), catchError(function (error) {
                return of(new fromOrderDetailsAction.LoadOrderDetailsFail(error));
            }));
        }));
    }
    OrderDetailsEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderDetailsEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OrderConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], OrderDetailsEffect.prototype, "loadOrderDetails$", void 0);
    return OrderDetailsEffect;
}());
export { OrderDetailsEffect };
if (false) {
    /** @type {?} */
    OrderDetailsEffect.prototype.loadOrderDetails$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailsEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailsEffect.prototype.orderConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL29yZGVyLWRldGFpbHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxLQUFLLHNCQUFzQixNQUFNLGlDQUFpQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVsRTtJQW9CRSw0QkFDVSxRQUFpQixFQUNqQixjQUE4QjtRQUZ4QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBbkJ4QyxzQkFBaUIsR0FFYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLEVBQ2pELEdBQUcsQ0FBQyxVQUFDLE1BQStDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN4RSxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBTyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ3BFLEdBQUcsQ0FBQyxVQUFDLEtBQVk7Z0JBQ2YsT0FBTyxJQUFJLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUExRCxDQUEwRCxDQUMzRCxDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBdkJMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFLUCxjQUFjOztJQUtyQjtRQURDLE1BQU0sRUFBRTswQ0FDVSxVQUFVO2lFQWUzQjtJQU1KLHlCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2Qlksa0JBQWtCOzs7SUFDN0IsK0NBZ0JFOzs7OztJQUdBLHNDQUF5Qjs7Ozs7SUFDekIsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIGZyb21PcmRlckRldGFpbHNBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9vcmRlci1kZXRhaWxzLmFjdGlvbic7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9vcmRlci5jb25uZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRPcmRlckRldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21PcmRlckRldGFpbHNBY3Rpb24uT3JkZXJEZXRhaWxzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21PcmRlckRldGFpbHNBY3Rpb24uTE9BRF9PUkRFUl9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbU9yZGVyRGV0YWlsc0FjdGlvbi5Mb2FkT3JkZXJEZXRhaWxzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub3JkZXJDb25uZWN0b3IuZ2V0KHBheWxvYWQudXNlcklkLCBwYXlsb2FkLm9yZGVyQ29kZSkucGlwZShcbiAgICAgICAgbWFwKChvcmRlcjogT3JkZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21PcmRlckRldGFpbHNBY3Rpb24uTG9hZE9yZGVyRGV0YWlsc1N1Y2Nlc3Mob3JkZXIpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uLkxvYWRPcmRlckRldGFpbHNGYWlsKGVycm9yKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvcmRlckNvbm5lY3RvcjogT3JkZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19