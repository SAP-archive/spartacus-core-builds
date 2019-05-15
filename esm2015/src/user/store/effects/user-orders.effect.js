/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { USER_ORDERS } from '../user-state';
import { CLEAR_MISCS_DATA } from '../actions/index';
import * as fromUserOrdersAction from '../actions/user-orders.action';
import { LoaderResetAction } from '../../../state';
import { OrderConnector } from '../../connectors/order.connector';
export class UserOrdersEffect {
    /**
     * @param {?} actions$
     * @param {?} orderConnector
     */
    constructor(actions$, orderConnector) {
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadUserOrders$ = this.actions$.pipe(ofType(fromUserOrdersAction.LOAD_USER_ORDERS), map((action) => action.payload), switchMap(payload => {
            return this.orderConnector
                .getHistory(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map((orders) => {
                return new fromUserOrdersAction.LoadUserOrdersSuccess(orders);
            }), catchError(error => of(new fromUserOrdersAction.LoadUserOrdersFail(error))));
        }));
        this.resetUserOrders$ = this.actions$.pipe(ofType(CLEAR_MISCS_DATA, fromUserOrdersAction.CLEAR_USER_ORDERS), map(() => {
            return new LoaderResetAction(USER_ORDERS);
        }));
    }
}
UserOrdersEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserOrdersEffect.ctorParameters = () => [
    { type: Actions },
    { type: OrderConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserOrdersEffect.prototype, "loadUserOrders$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserOrdersEffect.prototype, "resetUserOrders$", void 0);
if (false) {
    /** @type {?} */
    UserOrdersEffect.prototype.loadUserOrders$;
    /** @type {?} */
    UserOrdersEffect.prototype.resetUserOrders$;
    /**
     * @type {?}
     * @private
     */
    UserOrdersEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UserOrdersEffect.prototype.orderConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLW9yZGVycy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sS0FBSyxvQkFBb0IsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHbEUsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsWUFDVSxRQUFpQixFQUNqQixjQUE4QjtRQUQ5QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUl4QyxvQkFBZSxHQUVYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsRUFDN0MsR0FBRyxDQUFDLENBQUMsTUFBMkMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNwRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsY0FBYztpQkFDdkIsVUFBVSxDQUNULE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLFFBQVEsRUFDaEIsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLElBQUksQ0FDYjtpQkFDQSxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsTUFBd0IsRUFBRSxFQUFFO2dCQUMvQixPQUFPLElBQUksb0JBQW9CLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3ZELENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixxQkFBZ0IsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZELE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNoRSxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFqQ0MsQ0FBQzs7O1lBTEwsVUFBVTs7OztZQWJNLE9BQU87WUFXZixjQUFjOztBQVVyQjtJQURDLE1BQU0sRUFBRTtzQ0FDUSxVQUFVO3lEQXNCekI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDUyxVQUFVOzBEQUsxQjs7O0lBL0JGLDJDQXVCRTs7SUFFRiw0Q0FNRTs7Ozs7SUFuQ0Esb0NBQXlCOzs7OztJQUN6QiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVVNFUl9PUkRFUlMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IENMRUFSX01JU0NTX0RBVEEgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21Vc2VyT3JkZXJzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdXNlci1vcmRlcnMuYWN0aW9uJztcbmltcG9ydCB7IExvYWRlclJlc2V0QWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9vcmRlci5jb25uZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlck9yZGVyc0VmZmVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvcmRlckNvbm5lY3RvcjogT3JkZXJDb25uZWN0b3JcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBsb2FkVXNlck9yZGVycyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbVVzZXJPcmRlcnNBY3Rpb24uVXNlck9yZGVyc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlck9yZGVyc0FjdGlvbi5MT0FEX1VTRVJfT1JERVJTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVzZXJPcmRlcnNBY3Rpb24uTG9hZFVzZXJPcmRlcnMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vcmRlckNvbm5lY3RvclxuICAgICAgICAuZ2V0SGlzdG9yeShcbiAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBwYXlsb2FkLnBhZ2VTaXplLFxuICAgICAgICAgIHBheWxvYWQuY3VycmVudFBhZ2UsXG4gICAgICAgICAgcGF5bG9hZC5zb3J0XG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChvcmRlcnM6IE9yZGVySGlzdG9yeUxpc3QpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbVVzZXJPcmRlcnNBY3Rpb24uTG9hZFVzZXJPcmRlcnNTdWNjZXNzKG9yZGVycyk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21Vc2VyT3JkZXJzQWN0aW9uLkxvYWRVc2VyT3JkZXJzRmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlc2V0VXNlck9yZGVycyQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ0xFQVJfTUlTQ1NfREFUQSwgZnJvbVVzZXJPcmRlcnNBY3Rpb24uQ0xFQVJfVVNFUl9PUkRFUlMpLFxuICAgIG1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IExvYWRlclJlc2V0QWN0aW9uKFVTRVJfT1JERVJTKTtcbiAgICB9KVxuICApO1xufVxuIl19