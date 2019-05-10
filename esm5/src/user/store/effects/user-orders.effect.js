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
import { OccOrderService } from '../../occ/index';
var UserOrdersEffect = /** @class */ (function () {
    function UserOrdersEffect(actions$, occOrderService) {
        var _this = this;
        this.actions$ = actions$;
        this.occOrderService = occOrderService;
        this.loadUserOrders$ = this.actions$.pipe(ofType(fromUserOrdersAction.LOAD_USER_ORDERS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.occOrderService
                .getOrders(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map(function (orders) {
                return new fromUserOrdersAction.LoadUserOrdersSuccess(orders);
            }), catchError(function (error) {
                return of(new fromUserOrdersAction.LoadUserOrdersFail(error));
            }));
        }));
        this.resetUserOrders$ = this.actions$.pipe(ofType(CLEAR_MISCS_DATA, fromUserOrdersAction.CLEAR_USER_ORDERS), map(function () {
            return new LoaderResetAction(USER_ORDERS);
        }));
    }
    UserOrdersEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserOrdersEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OccOrderService }
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
    UserOrdersEffect.prototype.occOrderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLW9yZGVycy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sS0FBSyxvQkFBb0IsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHbEQ7SUFFRSwwQkFDVSxRQUFpQixFQUNqQixlQUFnQztRQUYxQyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSTFDLG9CQUFlLEdBRVgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUM3QyxHQUFHLENBQUMsVUFBQyxNQUEyQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDcEUsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNmLE9BQU8sS0FBSSxDQUFDLGVBQWU7aUJBQ3hCLFNBQVMsQ0FDUixPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxRQUFRLEVBQ2hCLE9BQU8sQ0FBQyxXQUFXLEVBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQ2I7aUJBQ0EsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLE1BQXdCO2dCQUMzQixPQUFPLElBQUksb0JBQW9CLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQXRELENBQXNELENBQ3ZELENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixxQkFBZ0IsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZELE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNoRSxHQUFHLENBQUM7WUFDRixPQUFPLElBQUksaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQWpDQyxDQUFDOztnQkFMTCxVQUFVOzs7O2dCQWJNLE9BQU87Z0JBVWYsZUFBZTs7SUFXdEI7UUFEQyxNQUFNLEVBQUU7MENBQ1EsVUFBVTs2REFzQnpCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ1MsVUFBVTs4REFLMUI7SUFDSix1QkFBQztDQUFBLEFBdkNELElBdUNDO1NBdENZLGdCQUFnQjs7O0lBTTNCLDJDQXVCRTs7SUFFRiw0Q0FNRTs7Ozs7SUFuQ0Esb0NBQXlCOzs7OztJQUN6QiwyQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVVNFUl9PUkRFUlMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IENMRUFSX01JU0NTX0RBVEEgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21Vc2VyT3JkZXJzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdXNlci1vcmRlcnMuYWN0aW9uJztcbmltcG9ydCB7IExvYWRlclJlc2V0QWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgT2NjT3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2luZGV4JztcbmltcG9ydCB7IE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyT3JkZXJzRWZmZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY09yZGVyU2VydmljZTogT2NjT3JkZXJTZXJ2aWNlXG4gICkge31cblxuICBARWZmZWN0KClcbiAgbG9hZFVzZXJPcmRlcnMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21Vc2VyT3JkZXJzQWN0aW9uLlVzZXJPcmRlcnNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJPcmRlcnNBY3Rpb24uTE9BRF9VU0VSX09SREVSUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyT3JkZXJzQWN0aW9uLkxvYWRVc2VyT3JkZXJzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjT3JkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRPcmRlcnMoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5wYWdlU2l6ZSxcbiAgICAgICAgICBwYXlsb2FkLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIHBheWxvYWQuc29ydFxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgob3JkZXJzOiBPcmRlckhpc3RvcnlMaXN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyT3JkZXJzQWN0aW9uLkxvYWRVc2VyT3JkZXJzU3VjY2VzcyhvcmRlcnMpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tVXNlck9yZGVyc0FjdGlvbi5Mb2FkVXNlck9yZGVyc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldFVzZXJPcmRlcnMkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENMRUFSX01JU0NTX0RBVEEsIGZyb21Vc2VyT3JkZXJzQWN0aW9uLkNMRUFSX1VTRVJfT1JERVJTKSxcbiAgICBtYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBMb2FkZXJSZXNldEFjdGlvbihVU0VSX09SREVSUyk7XG4gICAgfSlcbiAgKTtcbn1cbiJdfQ==