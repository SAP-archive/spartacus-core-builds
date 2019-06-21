/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
import * as fromUserPaymentMethodsAction from '../actions/payment-methods.action';
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
            error => of(new fromUserPaymentMethodsAction.LoadUserPaymentMethodsFail(makeHttpErrorSerializable(error))))));
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
            data => [
                new fromUserPaymentMethodsAction.SetDefaultUserPaymentMethodSuccess(data),
                new fromUserPaymentMethodsAction.LoadUserPaymentMethods(payload.userId),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromUserPaymentMethodsAction.SetDefaultUserPaymentMethodFail(makeHttpErrorSerializable(error))))));
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
            data => [
                new fromUserPaymentMethodsAction.DeleteUserPaymentMethodSuccess(data),
                new fromUserPaymentMethodsAction.LoadUserPaymentMethods(payload.userId),
            ])), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromUserPaymentMethodsAction.DeleteUserPaymentMethodFail(makeHttpErrorSerializable(error))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvcGF5bWVudC1tZXRob2RzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEtBQUssNEJBQTRCLE1BQU0sbUNBQW1DLENBQUM7QUFHbEYsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFxRnBDLFlBQ1UsUUFBaUIsRUFDakIsMEJBQWdEO1FBRGhELGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFzQjtRQXJGMUQsNEJBQXVCLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM5RCxNQUFNLENBQUMsNEJBQTRCLENBQUMseUJBQXlCLENBQUMsRUFDOUQsR0FBRzs7OztRQUNELENBQUMsTUFBMkQsRUFBRSxFQUFFLENBQzlELE1BQU0sQ0FBQyxPQUFPLEVBQ2pCLEVBQ0QsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3pELEdBQUc7Ozs7WUFBQyxDQUFDLFFBQTBCLEVBQUUsRUFBRTtnQkFDakMsT0FBTyxJQUFJLDRCQUE0QixDQUFDLDZCQUE2QixDQUNuRSxRQUFRLENBQ1QsQ0FBQztZQUNKLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSw0QkFBNEIsQ0FBQywwQkFBMEIsQ0FDekQseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQ2pDLENBQ0YsRUFDRixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0YsaUNBQTRCLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuRSxNQUFNLENBQUMsNEJBQTRCLENBQUMsK0JBQStCLENBQUMsRUFDcEUsR0FBRzs7OztRQUNELENBQUMsTUFBZ0UsRUFBRSxFQUFFLENBQ25FLE1BQU0sQ0FBQyxPQUFPLEVBQ2pCLEVBQ0QsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQjtpQkFDbkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztpQkFDbkQsSUFBSSxDQUNILFNBQVM7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNoQixJQUFJLDRCQUE0QixDQUFDLGtDQUFrQyxDQUNqRSxJQUFJLENBQ0w7Z0JBQ0QsSUFBSSw0QkFBNEIsQ0FBQyxzQkFBc0IsQ0FDckQsT0FBTyxDQUFDLE1BQU0sQ0FDZjthQUNGLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUNBLElBQUksNEJBQTRCLENBQUMsK0JBQStCLENBQzlELHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUNqQyxDQUNGLEVBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUVGLDZCQUF3QixHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDL0QsTUFBTSxDQUFDLDRCQUE0QixDQUFDLDBCQUEwQixDQUFDLEVBQy9ELEdBQUc7Ozs7UUFDRCxDQUFDLE1BQTRELEVBQUUsRUFBRSxDQUMvRCxNQUFNLENBQUMsT0FBTyxFQUNqQixFQUNELFFBQVE7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQywwQkFBMEI7aUJBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUM7aUJBQy9DLElBQUksQ0FDSCxTQUFTOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSw0QkFBNEIsQ0FBQyw4QkFBOEIsQ0FDN0QsSUFBSSxDQUNMO2dCQUNELElBQUksNEJBQTRCLENBQUMsc0JBQXNCLENBQ3JELE9BQU8sQ0FBQyxNQUFNLENBQ2Y7YUFDRixFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLDRCQUE0QixDQUFDLDJCQUEyQixDQUMxRCx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FDakMsQ0FDRixFQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUF6RkwsVUFBVTs7OztZQVRGLE9BQU87WUFNUCxvQkFBb0I7O0FBTTNCO0lBREMsTUFBTSxFQUFFO3NDQUNnQixVQUFVOzBFQXNCakM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDcUIsVUFBVTsrRUEyQnRDO0FBRUY7SUFEQyxNQUFNLEVBQUU7c0NBQ2lCLFVBQVU7MkVBMkJsQzs7O0lBbEZGLDREQXVCRTs7SUFFRixpRUE0QkU7O0lBQ0YsNkRBNEJFOzs7OztJQUdBLDZDQUF5Qjs7Ozs7SUFDekIsK0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUh0dHBFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyUGF5bWVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcGF5bWVudC91c2VyLXBheW1lbnQuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9wYXltZW50LW1ldGhvZHMuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJQYXltZW50TWV0aG9kc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFVzZXJQYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5MT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkxvYWRVc2VyUGF5bWVudE1ldGhvZHMpID0+XG4gICAgICAgIGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJQYXltZW50TWV0aG9kQ29ubmVjdG9yLmdldEFsbChwYXlsb2FkKS5waXBlKFxuICAgICAgICBtYXAoKHBheW1lbnRzOiBQYXltZW50RGV0YWlsc1tdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkxvYWRVc2VyUGF5bWVudE1ldGhvZHNTdWNjZXNzKFxuICAgICAgICAgICAgcGF5bWVudHNcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uTG9hZFVzZXJQYXltZW50TWV0aG9kc0ZhaWwoXG4gICAgICAgICAgICAgIG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5TRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLlNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZCkgPT5cbiAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlclBheW1lbnRNZXRob2RDb25uZWN0b3JcbiAgICAgICAgLnNldERlZmF1bHQocGF5bG9hZC51c2VySWQsIHBheWxvYWQucGF5bWVudE1ldGhvZElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PiBbXG4gICAgICAgICAgICBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5TZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RTdWNjZXNzKFxuICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uTG9hZFVzZXJQYXltZW50TWV0aG9kcyhcbiAgICAgICAgICAgICAgcGF5bG9hZC51c2VySWRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLlNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUh0dHBFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuICBARWZmZWN0KClcbiAgZGVsZXRlVXNlclBheW1lbnRNZXRob2QkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0QpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uRGVsZXRlVXNlclBheW1lbnRNZXRob2QpID0+XG4gICAgICAgIGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJQYXltZW50TWV0aG9kQ29ubmVjdG9yXG4gICAgICAgIC5kZWxldGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQucGF5bWVudE1ldGhvZElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PiBbXG4gICAgICAgICAgICBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5EZWxldGVVc2VyUGF5bWVudE1ldGhvZFN1Y2Nlc3MoXG4gICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5Mb2FkVXNlclBheW1lbnRNZXRob2RzKFxuICAgICAgICAgICAgICBwYXlsb2FkLnVzZXJJZFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uRGVsZXRlVXNlclBheW1lbnRNZXRob2RGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlclBheW1lbnRNZXRob2RDb25uZWN0b3I6IFVzZXJQYXltZW50Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==