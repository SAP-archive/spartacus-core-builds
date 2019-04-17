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
export class UserOrdersEffect {
    /**
     * @param {?} actions$
     * @param {?} occOrderService
     */
    constructor(actions$, occOrderService) {
        this.actions$ = actions$;
        this.occOrderService = occOrderService;
        this.loadUserOrders$ = this.actions$.pipe(ofType(fromUserOrdersAction.LOAD_USER_ORDERS), map((action) => action.payload), switchMap(payload => {
            return this.occOrderService
                .getOrders(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
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
    { type: OccOrderService }
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
    UserOrdersEffect.prototype.occOrderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLW9yZGVycy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sS0FBSyxvQkFBb0IsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJbEQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsWUFDVSxRQUFpQixFQUNqQixlQUFnQztRQURoQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUkxQyxvQkFBZSxHQUVYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsRUFDN0MsR0FBRyxDQUFDLENBQUMsTUFBMkMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNwRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsZUFBZTtpQkFDeEIsU0FBUyxDQUNSLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLFFBQVEsRUFDaEIsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLElBQUksQ0FDYjtpQkFDQSxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsTUFBd0IsRUFBRSxFQUFFO2dCQUMvQixPQUFPLElBQUksb0JBQW9CLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3ZELENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixxQkFBZ0IsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZELE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNoRSxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFqQ0MsQ0FBQzs7O1lBTEwsVUFBVTs7OztZQWJNLE9BQU87WUFVZixlQUFlOztBQVd0QjtJQURDLE1BQU0sRUFBRTtzQ0FDUSxVQUFVO3lEQXNCekI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDUyxVQUFVOzBEQUsxQjs7O0lBL0JGLDJDQXVCRTs7SUFFRiw0Q0FNRTs7Ozs7SUFuQ0Esb0NBQXlCOzs7OztJQUN6QiwyQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVVNFUl9PUkRFUlMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IENMRUFSX01JU0NTX0RBVEEgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21Vc2VyT3JkZXJzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdXNlci1vcmRlcnMuYWN0aW9uJztcbmltcG9ydCB7IExvYWRlclJlc2V0QWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgT2NjT3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2luZGV4JztcbmltcG9ydCB7IE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyT3JkZXJzRWZmZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY09yZGVyU2VydmljZTogT2NjT3JkZXJTZXJ2aWNlXG4gICkge31cblxuICBARWZmZWN0KClcbiAgbG9hZFVzZXJPcmRlcnMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21Vc2VyT3JkZXJzQWN0aW9uLlVzZXJPcmRlcnNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJPcmRlcnNBY3Rpb24uTE9BRF9VU0VSX09SREVSUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyT3JkZXJzQWN0aW9uLkxvYWRVc2VyT3JkZXJzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjT3JkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRPcmRlcnMoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5wYWdlU2l6ZSxcbiAgICAgICAgICBwYXlsb2FkLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIHBheWxvYWQuc29ydFxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgob3JkZXJzOiBPcmRlckhpc3RvcnlMaXN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyT3JkZXJzQWN0aW9uLkxvYWRVc2VyT3JkZXJzU3VjY2VzcyhvcmRlcnMpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tVXNlck9yZGVyc0FjdGlvbi5Mb2FkVXNlck9yZGVyc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldFVzZXJPcmRlcnMkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENMRUFSX01JU0NTX0RBVEEsIGZyb21Vc2VyT3JkZXJzQWN0aW9uLkNMRUFSX1VTRVJfT1JERVJTKSxcbiAgICBtYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBMb2FkZXJSZXNldEFjdGlvbihVU0VSX09SREVSUyk7XG4gICAgfSlcbiAgKTtcbn1cbiJdfQ==