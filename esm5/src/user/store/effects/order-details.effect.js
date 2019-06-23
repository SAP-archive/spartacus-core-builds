/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import * as fromOrderDetailsAction from '../actions/order-details.action';
var OrderDetailsEffect = /** @class */ (function () {
    function OrderDetailsEffect(actions$, orderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadOrderDetails$ = this.actions$.pipe(ofType(fromOrderDetailsAction.LOAD_ORDER_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.orderConnector.get(payload.userId, payload.orderCode).pipe(map((/**
             * @param {?} order
             * @return {?}
             */
            function (order) {
                return new fromOrderDetailsAction.LoadOrderDetailsSuccess(order);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromOrderDetailsAction.LoadOrderDetailsFail(makeErrorSerializable(error)));
            })));
        })));
    }
    OrderDetailsEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderDetailsEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserOrderConnector }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL29yZGVyLWRldGFpbHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxLQUFLLHNCQUFzQixNQUFNLGlDQUFpQyxDQUFDO0FBRTFFO0lBd0JFLDRCQUNVLFFBQWlCLEVBQ2pCLGNBQWtDO1FBRjVDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUF2QjVDLHNCQUFpQixHQUViLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsRUFDakQsR0FBRzs7OztRQUFDLFVBQUMsTUFBK0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ3hFLFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDcEUsR0FBRzs7OztZQUFDLFVBQUMsS0FBWTtnQkFDZixPQUFPLElBQUksc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkUsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLHNCQUFzQixDQUFDLG9CQUFvQixDQUM3QyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsRUFDRixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBM0JMLFVBQVU7Ozs7Z0JBUkYsT0FBTztnQkFLUCxrQkFBa0I7O0lBTXpCO1FBREMsTUFBTSxFQUFFOzBDQUNVLFVBQVU7aUVBbUIzQjtJQU1KLHlCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0EzQlksa0JBQWtCOzs7SUFDN0IsK0NBb0JFOzs7OztJQUdBLHNDQUF5Qjs7Ozs7SUFDekIsNENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJPcmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvb3JkZXIvdXNlci1vcmRlci5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgZnJvbU9yZGVyRGV0YWlsc0FjdGlvbiBmcm9tICcuLi9hY3Rpb25zL29yZGVyLWRldGFpbHMuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsc0VmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICBsb2FkT3JkZXJEZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uLk9yZGVyRGV0YWlsc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tT3JkZXJEZXRhaWxzQWN0aW9uLkxPQURfT1JERVJfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21PcmRlckRldGFpbHNBY3Rpb24uTG9hZE9yZGVyRGV0YWlscykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyQ29ubmVjdG9yLmdldChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5vcmRlckNvZGUpLnBpcGUoXG4gICAgICAgIG1hcCgob3JkZXI6IE9yZGVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uLkxvYWRPcmRlckRldGFpbHNTdWNjZXNzKG9yZGVyKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uLkxvYWRPcmRlckRldGFpbHNGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9yZGVyQ29ubmVjdG9yOiBVc2VyT3JkZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19