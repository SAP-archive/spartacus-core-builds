/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
export class OrderDetailsEffect {
    /**
     * @param {?} actions$
     * @param {?} orderConnector
     */
    constructor(actions$, orderConnector) {
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.loadOrderDetails$ = this.actions$.pipe(ofType(UserActions.LOAD_ORDER_DETAILS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.orderConnector.get(payload.userId, payload.orderCode).pipe(map((/**
             * @param {?} order
             * @return {?}
             */
            (order) => {
                return new UserActions.LoadOrderDetailsSuccess(order);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.LoadOrderDetailsFail(makeErrorSerializable(error))))));
        })));
    }
}
OrderDetailsEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderDetailsEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserOrderConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], OrderDetailsEffect.prototype, "loadOrderDetails$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL29yZGVyLWRldGFpbHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBbUI3QixZQUNVLFFBQWlCLEVBQ2pCLGNBQWtDO1FBRGxDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBbkI1QyxzQkFBaUIsR0FFYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN0QyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFvQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzdELFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDcEUsR0FBRzs7OztZQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ3ZFLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUF2QkwsVUFBVTs7OztZQVJGLE9BQU87WUFLUCxrQkFBa0I7O0FBTXpCO0lBREMsTUFBTSxFQUFFO3NDQUNVLFVBQVU7NkRBZTNCOzs7SUFoQkYsK0NBZ0JFOzs7OztJQUdBLHNDQUF5Qjs7Ozs7SUFDekIsNENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJPcmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvb3JkZXIvdXNlci1vcmRlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsc0VmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICBsb2FkT3JkZXJEZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5PcmRlckRldGFpbHNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuTE9BRF9PUkRFUl9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZE9yZGVyRGV0YWlscykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyQ29ubmVjdG9yLmdldChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5vcmRlckNvZGUpLnBpcGUoXG4gICAgICAgIG1hcCgob3JkZXI6IE9yZGVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJEZXRhaWxzU3VjY2VzcyhvcmRlcik7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlckRldGFpbHNGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9yZGVyQ29ubmVjdG9yOiBVc2VyT3JkZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19