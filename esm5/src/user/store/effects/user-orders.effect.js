/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoaderResetAction } from '../../../state';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { CLEAR_MISCS_DATA } from '../actions/index';
import * as fromUserOrdersAction from '../actions/user-orders.action';
import { USER_ORDERS } from '../user-state';
var UserOrdersEffect = /** @class */ (function () {
    function UserOrdersEffect(actions$, orderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadUserOrders$ = this.actions$.pipe(ofType(fromUserOrdersAction.LOAD_USER_ORDERS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.orderConnector
                .getHistory(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map((/**
             * @param {?} orders
             * @return {?}
             */
            function (orders) {
                return new fromUserOrdersAction.LoadUserOrdersSuccess(orders);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromUserOrdersAction.LoadUserOrdersFail(makeHttpErrorSerializable(error)));
            })));
        })));
        this.resetUserOrders$ = this.actions$.pipe(ofType(CLEAR_MISCS_DATA, fromUserOrdersAction.CLEAR_USER_ORDERS), map((/**
         * @return {?}
         */
        function () {
            return new LoaderResetAction(USER_ORDERS);
        })));
    }
    UserOrdersEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserOrdersEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserOrderConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserOrdersEffect.prototype, "loadUserOrders$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserOrdersEffect.prototype, "resetUserOrders$", void 0);
    return UserOrdersEffect;
}());
export { UserOrdersEffect };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLW9yZGVycy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEtBQUssb0JBQW9CLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1QztJQUVFLDBCQUNVLFFBQWlCLEVBQ2pCLGNBQWtDO1FBRjVDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFJNUMsb0JBQWUsR0FFWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLEVBQzdDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQTJDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNwRSxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBTyxLQUFJLENBQUMsY0FBYztpQkFDdkIsVUFBVSxDQUNULE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLFFBQVEsRUFDaEIsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLElBQUksQ0FDYjtpQkFDQSxJQUFJLENBQ0gsR0FBRzs7OztZQUFDLFVBQUMsTUFBd0I7Z0JBQzNCLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRSxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksb0JBQW9CLENBQUMsa0JBQWtCLENBQ3pDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUNqQyxDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixxQkFBZ0IsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZELE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNoRSxHQUFHOzs7UUFBQztZQUNGLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBckNDLENBQUM7O2dCQUxMLFVBQVU7Ozs7Z0JBWkYsT0FBTztnQkFPUCxrQkFBa0I7O0lBYXpCO1FBREMsTUFBTSxFQUFFOzBDQUNRLFVBQVU7NkRBMEJ6QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNTLFVBQVU7OERBSzFCO0lBQ0osdUJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTFDWSxnQkFBZ0I7OztJQU0zQiwyQ0EyQkU7O0lBRUYsNENBTUU7Ozs7O0lBdkNBLG9DQUF5Qjs7Ozs7SUFDekIsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkZXJSZXNldEFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlck9yZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDTEVBUl9NSVNDU19EQVRBIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgKiBhcyBmcm9tVXNlck9yZGVyc0FjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3VzZXItb3JkZXJzLmFjdGlvbic7XG5pbXBvcnQgeyBVU0VSX09SREVSUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlck9yZGVyc0VmZmVjdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvcmRlckNvbm5lY3RvcjogVXNlck9yZGVyQ29ubmVjdG9yXG4gICkge31cblxuICBARWZmZWN0KClcbiAgbG9hZFVzZXJPcmRlcnMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21Vc2VyT3JkZXJzQWN0aW9uLlVzZXJPcmRlcnNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJPcmRlcnNBY3Rpb24uTE9BRF9VU0VSX09SREVSUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyT3JkZXJzQWN0aW9uLkxvYWRVc2VyT3JkZXJzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub3JkZXJDb25uZWN0b3JcbiAgICAgICAgLmdldEhpc3RvcnkoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5wYWdlU2l6ZSxcbiAgICAgICAgICBwYXlsb2FkLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIHBheWxvYWQuc29ydFxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgob3JkZXJzOiBPcmRlckhpc3RvcnlMaXN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyT3JkZXJzQWN0aW9uLkxvYWRVc2VyT3JkZXJzU3VjY2VzcyhvcmRlcnMpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgZnJvbVVzZXJPcmRlcnNBY3Rpb24uTG9hZFVzZXJPcmRlcnNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVzZXRVc2VyT3JkZXJzJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDTEVBUl9NSVNDU19EQVRBLCBmcm9tVXNlck9yZGVyc0FjdGlvbi5DTEVBUl9VU0VSX09SREVSUyksXG4gICAgbWFwKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgTG9hZGVyUmVzZXRBY3Rpb24oVVNFUl9PUkRFUlMpO1xuICAgIH0pXG4gICk7XG59XG4iXX0=