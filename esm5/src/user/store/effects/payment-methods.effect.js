/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
import * as fromUserPaymentMethodsAction from '../actions/payment-methods.action';
var UserPaymentMethodsEffects = /** @class */ (function () {
    function UserPaymentMethodsEffects(actions$, userPaymentMethodConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userPaymentMethodConnector = userPaymentMethodConnector;
        this.loadUserPaymentMethods$ = this.actions$.pipe(ofType(fromUserPaymentMethodsAction.LOAD_USER_PAYMENT_METHODS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return action.payload;
        })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userPaymentMethodConnector.getAll(payload).pipe(map((/**
             * @param {?} payments
             * @return {?}
             */
            function (payments) {
                return new fromUserPaymentMethodsAction.LoadUserPaymentMethodsSuccess(payments);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromUserPaymentMethodsAction.LoadUserPaymentMethodsFail(makeErrorSerializable(error)));
            })));
        })));
        this.setDefaultUserPaymentMethod$ = this.actions$.pipe(ofType(fromUserPaymentMethodsAction.SET_DEFAULT_USER_PAYMENT_METHOD), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return action.payload;
        })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userPaymentMethodConnector
                .setDefault(payload.userId, payload.paymentMethodId)
                .pipe(switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return [
                new fromUserPaymentMethodsAction.SetDefaultUserPaymentMethodSuccess(data),
                new fromUserPaymentMethodsAction.LoadUserPaymentMethods(payload.userId),
            ]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromUserPaymentMethodsAction.SetDefaultUserPaymentMethodFail(makeErrorSerializable(error)));
            })));
        })));
        this.deleteUserPaymentMethod$ = this.actions$.pipe(ofType(fromUserPaymentMethodsAction.DELETE_USER_PAYMENT_METHOD), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return action.payload;
        })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userPaymentMethodConnector
                .delete(payload.userId, payload.paymentMethodId)
                .pipe(switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return [
                new fromUserPaymentMethodsAction.DeleteUserPaymentMethodSuccess(data),
                new fromUserPaymentMethodsAction.LoadUserPaymentMethods(payload.userId),
            ]; })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromUserPaymentMethodsAction.DeleteUserPaymentMethodFail(makeErrorSerializable(error)));
            })));
        })));
    }
    UserPaymentMethodsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserPaymentMethodsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserPaymentConnector }
    ]; };
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
    return UserPaymentMethodsEffects;
}());
export { UserPaymentMethodsEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvcGF5bWVudC1tZXRob2RzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEtBQUssNEJBQTRCLE1BQU0sbUNBQW1DLENBQUM7QUFFbEY7SUFzRkUsbUNBQ1UsUUFBaUIsRUFDakIsMEJBQWdEO1FBRjFELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQXNCO1FBckYxRCw0QkFBdUIsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzlELE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyx5QkFBeUIsQ0FBQyxFQUM5RCxHQUFHOzs7O1FBQ0QsVUFBQyxNQUEyRDtZQUMxRCxPQUFBLE1BQU0sQ0FBQyxPQUFPO1FBQWQsQ0FBYyxFQUNqQixFQUNELFFBQVE7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZCxPQUFPLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUN6RCxHQUFHOzs7O1lB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Y29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlclBheW1lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BheW1lbnQvdXNlci1wYXltZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvcGF5bWVudC1tZXRob2RzLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUGF5bWVudE1ldGhvZHNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EUyksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5Mb2FkVXNlclBheW1lbnRNZXRob2RzKSA9PlxuICAgICAgICBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyUGF5bWVudE1ldGhvZENvbm5lY3Rvci5nZXRBbGwocGF5bG9hZCkucGlwZShcbiAgICAgICAgbWFwKChwYXltZW50czogUGF5bWVudERldGFpbHNbXSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5Mb2FkVXNlclBheW1lbnRNZXRob2RzU3VjY2VzcyhcbiAgICAgICAgICAgIHBheW1lbnRzXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkxvYWRVc2VyUGF5bWVudE1ldGhvZHNGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5TRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLlNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZCkgPT5cbiAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlclBheW1lbnRNZXRob2RDb25uZWN0b3JcbiAgICAgICAgLnNldERlZmF1bHQocGF5bG9hZC51c2VySWQsIHBheWxvYWQucGF5bWVudE1ldGhvZElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PiBbXG4gICAgICAgICAgICBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5TZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RTdWNjZXNzKFxuICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uTG9hZFVzZXJQYXltZW50TWV0aG9kcyhcbiAgICAgICAgICAgICAgcGF5bG9hZC51c2VySWRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLlNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG4gIEBFZmZlY3QoKVxuICBkZWxldGVVc2VyUGF5bWVudE1ldGhvZCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5ERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRCksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5EZWxldGVVc2VyUGF5bWVudE1ldGhvZCkgPT5cbiAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlclBheW1lbnRNZXRob2RDb25uZWN0b3JcbiAgICAgICAgLmRlbGV0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5wYXltZW50TWV0aG9kSWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChkYXRhID0+IFtcbiAgICAgICAgICAgIG5ldyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkRlbGV0ZVVzZXJQYXltZW50TWV0aG9kU3VjY2VzcyhcbiAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG5ldyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkxvYWRVc2VyUGF5bWVudE1ldGhvZHMoXG4gICAgICAgICAgICAgIHBheWxvYWQudXNlcklkXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5EZWxldGVVc2VyUGF5bWVudE1ldGhvZEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJQYXltZW50TWV0aG9kQ29ubmVjdG9yOiBVc2VyUGF5bWVudENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=