/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { StateLoaderActions } from '../../../state/utils/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import { USER_ORDERS } from '../user-state';
var UserOrdersEffect = /** @class */ (function () {
    function UserOrdersEffect(actions$, orderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadUserOrders$ = this.actions$.pipe(ofType(UserActions.LOAD_USER_ORDERS), map((/**
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
                return new UserActions.LoadUserOrdersSuccess(orders);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.LoadUserOrdersFail(makeErrorSerializable(error)));
            })));
        })));
        this.resetUserOrders$ = this.actions$.pipe(ofType(UserActions.CLEAR_USER_MISCS_DATA, UserActions.CLEAR_USER_ORDERS), map((/**
         * @return {?}
         */
        function () {
            return new StateLoaderActions.LoaderResetAction(USER_ORDERS);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLW9yZGVycy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1QztJQUVFLDBCQUNVLFFBQWlCLEVBQ2pCLGNBQWtDO1FBRjVDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFJNUMsb0JBQWUsR0FFWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNwQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFrQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDM0QsU0FBUzs7OztRQUFDLFVBQUEsT0FBTztZQUNmLE9BQU8sS0FBSSxDQUFDLGNBQWM7aUJBQ3ZCLFVBQVUsQ0FDVCxPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxRQUFRLEVBQ2hCLE9BQU8sQ0FBQyxXQUFXLEVBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQ2I7aUJBQ0EsSUFBSSxDQUNILEdBQUc7Ozs7WUFBQyxVQUFDLE1BQXdCO2dCQUMzQixPQUFPLElBQUksV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFwRSxDQUFvRSxFQUNyRSxDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0YscUJBQWdCLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN2RCxNQUFNLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUN4RSxHQUFHOzs7UUFBQztZQUNGLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBakNDLENBQUM7O2dCQUxMLFVBQVU7Ozs7Z0JBWEYsT0FBTztnQkFPUCxrQkFBa0I7O0lBWXpCO1FBREMsTUFBTSxFQUFFOzBDQUNRLFVBQVU7NkRBc0J6QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNTLFVBQVU7OERBSzFCO0lBQ0osdUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXRDWSxnQkFBZ0I7OztJQU0zQiwyQ0F1QkU7O0lBRUYsNENBTUU7Ozs7O0lBbkNBLG9DQUF5Qjs7Ozs7SUFDekIsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlck9yZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVVNFUl9PUkRFUlMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJPcmRlcnNFZmZlY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb3JkZXJDb25uZWN0b3I6IFVzZXJPcmRlckNvbm5lY3RvclxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyT3JkZXJzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyT3JkZXJzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfVVNFUl9PUkRFUlMpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5Mb2FkVXNlck9yZGVycykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyQ29ubmVjdG9yXG4gICAgICAgIC5nZXRIaXN0b3J5KFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQucGFnZVNpemUsXG4gICAgICAgICAgcGF5bG9hZC5jdXJyZW50UGFnZSxcbiAgICAgICAgICBwYXlsb2FkLnNvcnRcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKG9yZGVyczogT3JkZXJIaXN0b3J5TGlzdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlck9yZGVyc1N1Y2Nlc3Mob3JkZXJzKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJPcmRlcnNGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldFVzZXJPcmRlcnMkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkNMRUFSX1VTRVJfTUlTQ1NfREFUQSwgVXNlckFjdGlvbnMuQ0xFQVJfVVNFUl9PUkRFUlMpLFxuICAgIG1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJSZXNldEFjdGlvbihVU0VSX09SREVSUyk7XG4gICAgfSlcbiAgKTtcbn1cbiJdfQ==