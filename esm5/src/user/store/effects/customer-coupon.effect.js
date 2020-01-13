/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromCustomerCouponsAction from '../actions/customer-coupon.action';
import { CustomerCouponConnector } from '../../connectors/customer-coupon/customer-coupon.connector';
import { makeErrorSerializable } from '../../../util/serialization-utils';
var CustomerCouponEffects = /** @class */ (function () {
    function CustomerCouponEffects(actions$, customerCouponConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.customerCouponConnector = customerCouponConnector;
        this.loadCustomerCoupons$ = this.actions$.pipe(ofType(fromCustomerCouponsAction.LOAD_CUSTOMER_COUPONS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.customerCouponConnector
                .getCustomerCoupons(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map((/**
             * @param {?} coupons
             * @return {?}
             */
            function (coupons) {
                return new fromCustomerCouponsAction.LoadCustomerCouponsSuccess(coupons);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromCustomerCouponsAction.LoadCustomerCouponsFail(makeErrorSerializable(error)));
            })));
        })));
        this.subscribeCustomerCoupon$ = this.actions$.pipe(ofType(fromCustomerCouponsAction.SUBSCRIBE_CUSTOMER_COUPON), map((/**
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
            return _this.customerCouponConnector
                .turnOnNotification(payload.userId, payload.couponCode)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return new fromCustomerCouponsAction.SubscribeCustomerCouponSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromCustomerCouponsAction.SubscribeCustomerCouponFail(makeErrorSerializable(error)));
            })));
        })));
        this.unsubscribeCustomerCoupon$ = this.actions$.pipe(ofType(fromCustomerCouponsAction.UNSUBSCRIBE_CUSTOMER_COUPON), map((/**
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
            return _this.customerCouponConnector
                .turnOffNotification(payload.userId, payload.couponCode)
                .pipe(map((/**
             * @return {?}
             */
            function () {
                return new fromCustomerCouponsAction.UnsubscribeCustomerCouponSuccess(payload.couponCode);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromCustomerCouponsAction.UnsubscribeCustomerCouponFail(makeErrorSerializable(error)));
            })));
        })));
        this.claimCustomerCoupon$ = this.actions$.pipe(ofType(fromCustomerCouponsAction.CLAIM_CUSTOMER_COUPON), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.customerCouponConnector
                .claimCustomerCoupon(payload.userId, payload.couponCode)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return new fromCustomerCouponsAction.ClaimCustomerCouponSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromCustomerCouponsAction.ClaimCustomerCouponFail(makeErrorSerializable(error)));
            })));
        })));
    }
    CustomerCouponEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CustomerCouponEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CustomerCouponConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CustomerCouponEffects.prototype, "loadCustomerCoupons$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CustomerCouponEffects.prototype, "subscribeCustomerCoupon$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CustomerCouponEffects.prototype, "unsubscribeCustomerCoupon$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CustomerCouponEffects.prototype, "claimCustomerCoupon$", void 0);
    return CustomerCouponEffects;
}());
export { CustomerCouponEffects };
if (false) {
    /** @type {?} */
    CustomerCouponEffects.prototype.loadCustomerCoupons$;
    /** @type {?} */
    CustomerCouponEffects.prototype.subscribeCustomerCoupon$;
    /** @type {?} */
    CustomerCouponEffects.prototype.unsubscribeCustomerCoupon$;
    /** @type {?} */
    CustomerCouponEffects.prototype.claimCustomerCoupon$;
    /**
     * @type {?}
     * @private
     */
    CustomerCouponEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CustomerCouponEffects.prototype.customerCouponConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvY3VzdG9tZXItY291cG9uLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sS0FBSyx5QkFBeUIsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVyRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRTtJQXlIRSwrQkFDVSxRQUFpQixFQUNqQix1QkFBZ0Q7UUFGMUQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUF4SDFELHlCQUFvQixHQUVoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHlCQUF5QixDQUFDLHFCQUFxQixDQUFDLEVBQ3ZELEdBQUc7Ozs7UUFDRCxVQUFDLE1BQXFELElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFDMUUsRUFDRCxRQUFROzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBTyxLQUFJLENBQUMsdUJBQXVCO2lCQUNoQyxrQkFBa0IsQ0FDakIsT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsUUFBUSxFQUNoQixP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S0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLHlCQUF5QixDQUFDLHVCQUF1QixDQUNuRCxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsRUFDRixDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBNUhMLFVBQVU7Ozs7Z0JBUkYsT0FBTztnQkFJUCx1QkFBdUI7O0lBTzlCO1FBREMsTUFBTSxFQUFFOzBDQUNhLFVBQVU7dUVBOEI5QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNpQixVQUFVOzJFQTBCbEM7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDbUIsVUFBVTs2RUEwQnBDO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ2EsVUFBVTt1RUF5QjlCO0lBTUosNEJBQUM7Q0FBQSxBQTdIRCxJQTZIQztTQTVIWSxxQkFBcUI7OztJQUNoQyxxREErQkU7O0lBRUYseURBMkJFOztJQUVGLDJEQTJCRTs7SUFFRixxREEwQkU7Ozs7O0lBR0EseUNBQXlCOzs7OztJQUN6Qix3REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBmcm9tQ3VzdG9tZXJDb3Vwb25zQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvY3VzdG9tZXItY291cG9uLmFjdGlvbic7XG5pbXBvcnQgeyBDdXN0b21lckNvdXBvbkNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY3VzdG9tZXItY291cG9uL2N1c3RvbWVyLWNvdXBvbi5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jdXN0b21lci1jb3Vwb24ubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyQ291cG9uRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQ3VzdG9tZXJDb3Vwb25zJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQ3VzdG9tZXJDb3Vwb25zQWN0aW9uLkN1c3RvbWVyQ291cG9uQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21DdXN0b21lckNvdXBvbnNBY3Rpb24uTE9BRF9DVVNUT01FUl9DT1VQT05TKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBmcm9tQ3VzdG9tZXJDb3Vwb25zQWN0aW9uLkxvYWRDdXN0b21lckNvdXBvbnMpID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbWVyQ291cG9uQ29ubmVjdG9yXG4gICAgICAgIC5nZXRDdXN0b21lckNvdXBvbnMoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5wYWdlU2l6ZSxcbiAgICAgICAgICBwYXlsb2FkLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIHBheWxvYWQuc29ydFxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoY291cG9uczogQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbUN1c3RvbWVyQ291cG9uc0FjdGlvbi5Mb2FkQ3VzdG9tZXJDb3Vwb25zU3VjY2VzcyhcbiAgICAgICAgICAgICAgY291cG9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21DdXN0b21lckNvdXBvbnNBY3Rpb24uTG9hZEN1c3RvbWVyQ291cG9uc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHN1YnNjcmliZUN1c3RvbWVyQ291cG9uJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQ3VzdG9tZXJDb3Vwb25zQWN0aW9uLkN1c3RvbWVyQ291cG9uQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21DdXN0b21lckNvdXBvbnNBY3Rpb24uU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTiksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogZnJvbUN1c3RvbWVyQ291cG9uc0FjdGlvbi5TdWJzY3JpYmVDdXN0b21lckNvdXBvbikgPT5cbiAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tZXJDb3Vwb25Db25uZWN0b3JcbiAgICAgICAgLnR1cm5Pbk5vdGlmaWNhdGlvbihwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jb3Vwb25Db2RlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQ3VzdG9tZXJDb3Vwb25zQWN0aW9uLlN1YnNjcmliZUN1c3RvbWVyQ291cG9uU3VjY2VzcyhcbiAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21DdXN0b21lckNvdXBvbnNBY3Rpb24uU3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25GYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1bnN1YnNjcmliZUN1c3RvbWVyQ291cG9uJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQ3VzdG9tZXJDb3Vwb25zQWN0aW9uLkN1c3RvbWVyQ291cG9uQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21DdXN0b21lckNvdXBvbnNBY3Rpb24uVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBmcm9tQ3VzdG9tZXJDb3Vwb25zQWN0aW9uLlVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24pID0+XG4gICAgICAgIGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbWVyQ291cG9uQ29ubmVjdG9yXG4gICAgICAgIC50dXJuT2ZmTm90aWZpY2F0aW9uKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNvdXBvbkNvZGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21DdXN0b21lckNvdXBvbnNBY3Rpb24uVW5zdWJzY3JpYmVDdXN0b21lckNvdXBvblN1Y2Nlc3MoXG4gICAgICAgICAgICAgIHBheWxvYWQuY291cG9uQ29kZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21DdXN0b21lckNvdXBvbnNBY3Rpb24uVW5zdWJzY3JpYmVDdXN0b21lckNvdXBvbkZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsYWltQ3VzdG9tZXJDb3Vwb24kOiBPYnNlcnZhYmxlPFxuICAgIGZyb21DdXN0b21lckNvdXBvbnNBY3Rpb24uQ3VzdG9tZXJDb3Vwb25BY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUN1c3RvbWVyQ291cG9uc0FjdGlvbi5DTEFJTV9DVVNUT01FUl9DT1VQT04pLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IGZyb21DdXN0b21lckNvdXBvbnNBY3Rpb24uQ2xhaW1DdXN0b21lckNvdXBvbikgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tZXJDb3Vwb25Db25uZWN0b3JcbiAgICAgICAgLmNsYWltQ3VzdG9tZXJDb3Vwb24ocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY291cG9uQ29kZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQ3VzdG9tZXJDb3Vwb25zQWN0aW9uLkNsYWltQ3VzdG9tZXJDb3Vwb25TdWNjZXNzKFxuICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgZnJvbUN1c3RvbWVyQ291cG9uc0FjdGlvbi5DbGFpbUN1c3RvbWVyQ291cG9uRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY3VzdG9tZXJDb3Vwb25Db25uZWN0b3I6IEN1c3RvbWVyQ291cG9uQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==