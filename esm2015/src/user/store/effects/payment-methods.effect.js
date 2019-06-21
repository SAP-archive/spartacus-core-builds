/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as fromUserPaymentMethodsAction from '../actions/payment-methods.action';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
export class UserPaymentMethodsEffects {
    /**
     * @param {?} actions$
     * @param {?} userPaymentMethodConnector
     */
    constructor(actions$, userPaymentMethodConnector) {
        this.actions$ = actions$;
        this.userPaymentMethodConnector = userPaymentMethodConnector;
        this.loadUserPaymentMethods$ = this.actions$.pipe(ofType(fromUserPaymentMethodsAction.LOAD_USER_PAYMENT_METHODS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userPaymentMethodConnector.getAll(payload).pipe(map((/**
             * @param {?} payments
             * @return {?}
             */
            (payments) => {
                return new fromUserPaymentMethodsAction.LoadUserPaymentMethodsSuccess(payments);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromUserPaymentMethodsAction.LoadUserPaymentMethodsFail(error)))));
        })));
        this.setDefaultUserPaymentMethod$ = this.actions$.pipe(ofType(fromUserPaymentMethodsAction.SET_DEFAULT_USER_PAYMENT_METHOD), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userPaymentMethodConnector
                .setDefault(payload.userId, payload.paymentMethodId)
                .pipe(switchMap((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                return [
                    new fromUserPaymentMethodsAction.SetDefaultUserPaymentMethodSuccess(data),
                    new fromUserPaymentMethodsAction.LoadUserPaymentMethods(payload.userId),
                ];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromUserPaymentMethodsAction.SetDefaultUserPaymentMethodFail(error)))));
        })));
        this.deleteUserPaymentMethod$ = this.actions$.pipe(ofType(fromUserPaymentMethodsAction.DELETE_USER_PAYMENT_METHOD), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userPaymentMethodConnector
                .delete(payload.userId, payload.paymentMethodId)
                .pipe(switchMap((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                return [
                    new fromUserPaymentMethodsAction.DeleteUserPaymentMethodSuccess(data),
                    new fromUserPaymentMethodsAction.LoadUserPaymentMethods(payload.userId),
                ];
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromUserPaymentMethodsAction.DeleteUserPaymentMethodFail(error)))));
        })));
    }
}
UserPaymentMethodsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserPaymentMethodsEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserPaymentConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserPaymentMethodsEffects.prototype, "loadUserPaymentMethods$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserPaymentMethodsEffects.prototype, "setDefaultUserPaymentMethod$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserPaymentMethodsEffects.prototype, "deleteUserPaymentMethod$", void 0);
if (false) {
    /** @type {?} */
    UserPaymentMethodsEffects.prototype.loadUserPaymentMethods$;
    /** @type {?} */
    UserPaymentMethodsEffects.prototype.setDefaultUserPaymentMethod$;
    /** @type {?} */
    UserPaymentMethodsEffects.prototype.deleteUserPaymentMethod$;
    /**
     * @type {?}
     * @private
     */
    UserPaymentMethodsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UserPaymentMethodsEffects.prototype.userPaymentMethodConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvcGF5bWVudC1tZXRob2RzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEtBQUssNEJBQTRCLE1BQU0sbUNBQW1DLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFJdkYsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFxRnBDLFlBQ1UsUUFBaUIsRUFDakIsMEJBQWdEO1FBRGhELGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFzQjtRQXJGMUQsNEJBQXVCLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzRCxNQUFNLENBQUMsNEJBQTRCLENBQUMseUJBQXlCLENBQUMsRUFDOUQsR0FBRzs7OztRQUNELENBQUMsTUFBMkQsRUFBRSxFQUFFLENBQzlELE1BQU0sQ0FBQyxPQUFPLEVBQ2pCLEVBQ0QsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3pELEdBQUc7Ozs7WUFBQyxDQUFDLFFBQTBCLEVBQUUsRUFBRTtnQkFDakMsT0FBTyxJQUFJLDRCQUE0QixDQUFDLDZCQUE2QixDQUNuRSxRQUFRLENBQ1QsQ0FBQztZQUNKLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSw0QkFBNEIsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUN2RSxDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0YsaUNBQTRCLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoRSxNQUFNLENBQUMsNEJBQTRCLENBQUMsK0JBQStCLENBQUMsRUFDcEUsR0FBRzs7OztRQUNELENBQUMsTUFBZ0UsRUFBRSxFQUFFLENBQ25FLE1BQU0sQ0FBQyxPQUFPLEVBQ2pCLEVBQ0QsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQjtpQkFDbkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztpQkFDbkQsSUFBSSxDQUNILFNBQVM7Ozs7WUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUN0QixPQUFPO29CQUNMLElBQUksNEJBQTRCLENBQUMsa0NBQWtDLENBQ2pFLElBQUksQ0FDTDtvQkFDRCxJQUFJLDRCQUE0QixDQUFDLHNCQUFzQixDQUNyRCxPQUFPLENBQUMsTUFBTSxDQUNmO2lCQUNGLENBQUM7WUFDSixDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUNBLElBQUksNEJBQTRCLENBQUMsK0JBQStCLENBQzlELEtBQUssQ0FDTixDQUNGLEVBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUVGLDZCQUF3QixHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDNUQsTUFBTSxDQUFDLDRCQUE0QixDQUFDLDBCQUEwQixDQUFDLEVBQy9ELEdBQUc7Ozs7UUFDRCxDQUFDLE1BQTRELEVBQUUsRUFBRSxDQUMvRCxNQUFNLENBQUMsT0FBTyxFQUNqQixFQUNELFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQywwQkFBMEI7aUJBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUM7aUJBQy9DLElBQUksQ0FDSCxTQUFTOzs7O1lBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDdEIsT0FBTztvQkFDTCxJQUFJLDRCQUE0QixDQUFDLDhCQUE4QixDQUM3RCxJQUFJLENBQ0w7b0JBQ0QsSUFBSSw0QkFBNEIsQ0FBQyxzQkFBc0IsQ0FDckQsT0FBTyxDQUFDLE1BQU0sQ0FDZjtpQkFDRixDQUFDO1lBQ0osQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLDRCQUE0QixDQUFDLDJCQUEyQixDQUMxRCxLQUFLLENBQ04sQ0FDRixFQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUF6RkwsVUFBVTs7OztZQVBGLE9BQU87WUFJUCxvQkFBb0I7O0FBTTNCO0lBREMsTUFBTSxFQUFFO3NDQUNnQixVQUFVOzBFQWtCakM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDcUIsVUFBVTsrRUE2QnRDO0FBRUY7SUFEQyxNQUFNLEVBQUU7c0NBQ2lCLFVBQVU7MkVBNkJsQzs7O0lBbEZGLDREQW1CRTs7SUFFRixpRUE4QkU7O0lBQ0YsNkRBOEJFOzs7OztJQUdBLDZDQUF5Qjs7Ozs7SUFDekIsK0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvcGF5bWVudC1tZXRob2RzLmFjdGlvbic7XG5pbXBvcnQgeyBVc2VyUGF5bWVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcGF5bWVudC91c2VyLXBheW1lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUGF5bWVudE1ldGhvZHNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EUyksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5Mb2FkVXNlclBheW1lbnRNZXRob2RzKSA9PlxuICAgICAgICBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyUGF5bWVudE1ldGhvZENvbm5lY3Rvci5nZXRBbGwocGF5bG9hZCkucGlwZShcbiAgICAgICAgbWFwKChwYXltZW50czogUGF5bWVudERldGFpbHNbXSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5Mb2FkVXNlclBheW1lbnRNZXRob2RzU3VjY2VzcyhcbiAgICAgICAgICAgIHBheW1lbnRzXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5Mb2FkVXNlclBheW1lbnRNZXRob2RzRmFpbChlcnJvcikpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLlNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0QpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kKSA9PlxuICAgICAgICBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyUGF5bWVudE1ldGhvZENvbm5lY3RvclxuICAgICAgICAuc2V0RGVmYXVsdChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5wYXltZW50TWV0aG9kSWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5TZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RTdWNjZXNzKFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uTG9hZFVzZXJQYXltZW50TWV0aG9kcyhcbiAgICAgICAgICAgICAgICBwYXlsb2FkLnVzZXJJZFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kRmFpbChcbiAgICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG4gIEBFZmZlY3QoKVxuICBkZWxldGVVc2VyUGF5bWVudE1ldGhvZCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5ERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRCksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5EZWxldGVVc2VyUGF5bWVudE1ldGhvZCkgPT5cbiAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlclBheW1lbnRNZXRob2RDb25uZWN0b3JcbiAgICAgICAgLmRlbGV0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5wYXltZW50TWV0aG9kSWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5EZWxldGVVc2VyUGF5bWVudE1ldGhvZFN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5Mb2FkVXNlclBheW1lbnRNZXRob2RzKFxuICAgICAgICAgICAgICAgIHBheWxvYWQudXNlcklkXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5EZWxldGVVc2VyUGF5bWVudE1ldGhvZEZhaWwoXG4gICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyUGF5bWVudE1ldGhvZENvbm5lY3RvcjogVXNlclBheW1lbnRDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19