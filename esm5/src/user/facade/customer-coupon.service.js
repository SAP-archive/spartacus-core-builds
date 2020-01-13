/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, CLAIM_CUSTOMER_COUPON_PROCESS_ID, } from '../store/user-state';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { OCC_USER_ID_CURRENT } from '../../occ/utils/occ-constants';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var CustomerCouponService = /** @class */ (function () {
    function CustomerCouponService(store) {
        this.store = store;
    }
    /**
     * Retrieves customer's coupons
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    /**
     * Retrieves customer's coupons
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    CustomerCouponService.prototype.loadCustomerCoupons = /**
     * Retrieves customer's coupons
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    function (pageSize, currentPage, sort) {
        this.store.dispatch(new UserActions.LoadCustomerCoupons({
            userId: OCC_USER_ID_CURRENT,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort,
        }));
    };
    /**
     * Returns customer coupon search result
     * @param pageSize page size
     */
    /**
     * Returns customer coupon search result
     * @param {?} pageSize page size
     * @return {?}
     */
    CustomerCouponService.prototype.getCustomerCoupons = /**
     * Returns customer coupon search result
     * @param {?} pageSize page size
     * @return {?}
     */
    function (pageSize) {
        var _this = this;
        return this.store.pipe(select(UsersSelectors.getCustomerCouponsState), tap((/**
         * @param {?} customerCouponsState
         * @return {?}
         */
        function (customerCouponsState) {
            /** @type {?} */
            var attemptedLoad = customerCouponsState.loading ||
                customerCouponsState.success ||
                customerCouponsState.error;
            if (!attemptedLoad) {
                _this.loadCustomerCoupons(pageSize);
            }
        })), map((/**
         * @param {?} customerCouponsState
         * @return {?}
         */
        function (customerCouponsState) { return customerCouponsState.value; })));
    };
    /**
     * Returns a loaded flag for customer coupons
     */
    /**
     * Returns a loaded flag for customer coupons
     * @return {?}
     */
    CustomerCouponService.prototype.getCustomerCouponsLoaded = /**
     * Returns a loaded flag for customer coupons
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getCustomerCouponsLoaded));
    };
    /**
     * Returns a loading flag for customer coupons
     */
    /**
     * Returns a loading flag for customer coupons
     * @return {?}
     */
    CustomerCouponService.prototype.getCustomerCouponsLoading = /**
     * Returns a loading flag for customer coupons
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getCustomerCouponsLoading));
    };
    /**
     * Subscribe a CustomerCoupon Notification
     * @param couponCode a customer coupon code
     */
    /**
     * Subscribe a CustomerCoupon Notification
     * @param {?} couponCode a customer coupon code
     * @return {?}
     */
    CustomerCouponService.prototype.subscribeCustomerCoupon = /**
     * Subscribe a CustomerCoupon Notification
     * @param {?} couponCode a customer coupon code
     * @return {?}
     */
    function (couponCode) {
        this.store.dispatch(new UserActions.SubscribeCustomerCoupon({
            userId: OCC_USER_ID_CURRENT,
            couponCode: couponCode,
        }));
    };
    /**
     * Returns the subscribe customer coupon notification process loading flag
     */
    /**
     * Returns the subscribe customer coupon notification process loading flag
     * @return {?}
     */
    CustomerCouponService.prototype.getSubscribeCustomerCouponResultLoading = /**
     * Returns the subscribe customer coupon notification process loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Returns the subscribe customer coupon notification process success flag
     */
    /**
     * Returns the subscribe customer coupon notification process success flag
     * @return {?}
     */
    CustomerCouponService.prototype.getSubscribeCustomerCouponResultSuccess = /**
     * Returns the subscribe customer coupon notification process success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Returns the subscribe customer coupon notification process error flag
     */
    /**
     * Returns the subscribe customer coupon notification process error flag
     * @return {?}
     */
    CustomerCouponService.prototype.getSubscribeCustomerCouponResultError = /**
     * Returns the subscribe customer coupon notification process error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Unsubscribe a CustomerCoupon Notification
     * @param couponCode a customer coupon code
     */
    /**
     * Unsubscribe a CustomerCoupon Notification
     * @param {?} couponCode a customer coupon code
     * @return {?}
     */
    CustomerCouponService.prototype.unsubscribeCustomerCoupon = /**
     * Unsubscribe a CustomerCoupon Notification
     * @param {?} couponCode a customer coupon code
     * @return {?}
     */
    function (couponCode) {
        this.store.dispatch(new UserActions.UnsubscribeCustomerCoupon({
            userId: OCC_USER_ID_CURRENT,
            couponCode: couponCode,
        }));
    };
    /**
     * Returns the unsubscribe customer coupon notification process loading flag
     */
    /**
     * Returns the unsubscribe customer coupon notification process loading flag
     * @return {?}
     */
    CustomerCouponService.prototype.getUnsubscribeCustomerCouponResultLoading = /**
     * Returns the unsubscribe customer coupon notification process loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Returns the unsubscribe customer coupon notification process success flag
     */
    /**
     * Returns the unsubscribe customer coupon notification process success flag
     * @return {?}
     */
    CustomerCouponService.prototype.getUnsubscribeCustomerCouponResultSuccess = /**
     * Returns the unsubscribe customer coupon notification process success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Returns the unsubscribe customer coupon notification process error flag
     */
    /**
     * Returns the unsubscribe customer coupon notification process error flag
     * @return {?}
     */
    CustomerCouponService.prototype.getUnsubscribeCustomerCouponResultError = /**
     * Returns the unsubscribe customer coupon notification process error flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Claim a CustomerCoupon
     * @param couponCode a customer coupon code
     */
    /**
     * Claim a CustomerCoupon
     * @param {?} couponCode a customer coupon code
     * @return {?}
     */
    CustomerCouponService.prototype.claimCustomerCoupon = /**
     * Claim a CustomerCoupon
     * @param {?} couponCode a customer coupon code
     * @return {?}
     */
    function (couponCode) {
        this.store.dispatch(new UserActions.ClaimCustomerCoupon({
            userId: OCC_USER_ID_CURRENT,
            couponCode: couponCode,
        }));
    };
    /**
     * Returns the claim customer coupon notification process success flag
     */
    /**
     * Returns the claim customer coupon notification process success flag
     * @return {?}
     */
    CustomerCouponService.prototype.getClaimCustomerCouponResultSuccess = /**
     * Returns the claim customer coupon notification process success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(CLAIM_CUSTOMER_COUPON_PROCESS_ID)));
    };
    CustomerCouponService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CustomerCouponService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ CustomerCouponService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CustomerCouponService_Factory() { return new CustomerCouponService(i0.ɵɵinject(i1.Store)); }, token: CustomerCouponService, providedIn: "root" });
    return CustomerCouponService;
}());
export { CustomerCouponService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CustomerCouponService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvY3VzdG9tZXItY291cG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFFTCxvQ0FBb0MsRUFDcEMsc0NBQXNDLEVBQ3RDLGdDQUFnQyxHQUNqQyxNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBRXpELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFFcEU7SUFJRSwrQkFBc0IsS0FBb0Q7UUFBcEQsVUFBSyxHQUFMLEtBQUssQ0FBK0M7SUFBRyxDQUFDO0lBRTlFOzs7OztPQUtHOzs7Ozs7OztJQUNILG1EQUFtQjs7Ozs7OztJQUFuQixVQUNFLFFBQWdCLEVBQ2hCLFdBQW9CLEVBQ3BCLElBQWE7UUFFYixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUM7WUFDbEMsTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsV0FBVztZQUN4QixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FDSCxDQUFD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O0lBQXZDO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FDdkUsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILG1EQUFtQjs7Ozs7SUFBbkIsVUFBb0IsVUFBa0I7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUFDO1lBQ2xDLE1BQU0sRUFBRSxtQkFBbUI7WUFDM0IsVUFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsbUVBQW1DOzs7O0lBQW5DO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FDbkUsQ0FBQztJQUNKLENBQUM7O2dCQWpLRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXRCZ0IsS0FBSzs7O2dDQUR0QjtDQXVMQyxBQWxLRCxJQWtLQztTQS9KWSxxQkFBcUI7Ozs7OztJQUNwQixzQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2Vyc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQge1xuICBTdGF0ZVdpdGhVc2VyLFxuICBTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsXG4gIFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lELFxuICBDTEFJTV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBnZXRQcm9jZXNzRXJyb3JGYWN0b3J5LFxuICBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnksXG4gIGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi9tb2RlbC9jdXN0b21lci1jb3Vwb24ubW9kZWwnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyQ291cG9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgY3VzdG9tZXIncyBjb3Vwb25zXG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlIGN1cnJlbnQgcGFnZVxuICAgKiBAcGFyYW0gc29ydCBzb3J0XG4gICAqL1xuICBsb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRDdXN0b21lckNvdXBvbnMoe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0NVUlJFTlQsXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxuICAgICAgICBzb3J0OiBzb3J0LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VzdG9tZXIgY291cG9uIHNlYXJjaCByZXN1bHRcbiAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgKi9cbiAgZ2V0Q3VzdG9tZXJDb3Vwb25zKHBhZ2VTaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDdXN0b21lckNvdXBvbnNTdGF0ZSksXG4gICAgICB0YXAoY3VzdG9tZXJDb3Vwb25zU3RhdGUgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICBjdXN0b21lckNvdXBvbnNTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgY3VzdG9tZXJDb3Vwb25zU3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgIGN1c3RvbWVyQ291cG9uc1N0YXRlLmVycm9yO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWRDdXN0b21lckNvdXBvbnMocGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcChjdXN0b21lckNvdXBvbnNTdGF0ZSA9PiBjdXN0b21lckNvdXBvbnNTdGF0ZS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkZWQgZmxhZyBmb3IgY3VzdG9tZXIgY291cG9uc1xuICAgKi9cbiAgZ2V0Q3VzdG9tZXJDb3Vwb25zTG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEN1c3RvbWVyQ291cG9uc0xvYWRlZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIGN1c3RvbWVyIGNvdXBvbnNcbiAgICovXG4gIGdldEN1c3RvbWVyQ291cG9uc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q3VzdG9tZXJDb3Vwb25zTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSBhIEN1c3RvbWVyQ291cG9uIE5vdGlmaWNhdGlvblxuICAgKiBAcGFyYW0gY291cG9uQ29kZSBhIGN1c3RvbWVyIGNvdXBvbiBjb2RlXG4gICAqL1xuICBzdWJzY3JpYmVDdXN0b21lckNvdXBvbihjb3Vwb25Db2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLlN1YnNjcmliZUN1c3RvbWVyQ291cG9uKHtcbiAgICAgICAgdXNlcklkOiBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxuICAgICAgICBjb3Vwb25Db2RlOiBjb3Vwb25Db2RlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN1YnNjcmliZSBjdXN0b21lciBjb3Vwb24gbm90aWZpY2F0aW9uIHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRTdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN1YnNjcmliZSBjdXN0b21lciBjb3Vwb24gbm90aWZpY2F0aW9uIHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRTdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN1YnNjcmliZSBjdXN0b21lciBjb3Vwb24gbm90aWZpY2F0aW9uIHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0U3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIGEgQ3VzdG9tZXJDb3Vwb24gTm90aWZpY2F0aW9uXG4gICAqIEBwYXJhbSBjb3Vwb25Db2RlIGEgY3VzdG9tZXIgY291cG9uIGNvZGVcbiAgICovXG4gIHVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24oY291cG9uQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5VbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uKHtcbiAgICAgICAgdXNlcklkOiBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxuICAgICAgICBjb3Vwb25Db2RlOiBjb3Vwb25Db2RlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVuc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVuc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVuc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsYWltIGEgQ3VzdG9tZXJDb3Vwb25cbiAgICogQHBhcmFtIGNvdXBvbkNvZGUgYSBjdXN0b21lciBjb3Vwb24gY29kZVxuICAgKi9cbiAgY2xhaW1DdXN0b21lckNvdXBvbihjb3Vwb25Db2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLkNsYWltQ3VzdG9tZXJDb3Vwb24oe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0NVUlJFTlQsXG4gICAgICAgIGNvdXBvbkNvZGU6IGNvdXBvbkNvZGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xhaW0gY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0Q2xhaW1DdXN0b21lckNvdXBvblJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoQ0xBSU1fQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==