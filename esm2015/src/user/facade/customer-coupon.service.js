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
export class CustomerCouponService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Retrieves customer's coupons
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    loadCustomerCoupons(pageSize, currentPage, sort) {
        this.store.dispatch(new UserActions.LoadCustomerCoupons({
            userId: OCC_USER_ID_CURRENT,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort,
        }));
    }
    /**
     * Returns customer coupon search result
     * @param {?} pageSize page size
     * @return {?}
     */
    getCustomerCoupons(pageSize) {
        return this.store.pipe(select(UsersSelectors.getCustomerCouponsState), tap((/**
         * @param {?} customerCouponsState
         * @return {?}
         */
        customerCouponsState => {
            /** @type {?} */
            const attemptedLoad = customerCouponsState.loading ||
                customerCouponsState.success ||
                customerCouponsState.error;
            if (!attemptedLoad) {
                this.loadCustomerCoupons(pageSize);
            }
        })), map((/**
         * @param {?} customerCouponsState
         * @return {?}
         */
        customerCouponsState => customerCouponsState.value)));
    }
    /**
     * Returns a loaded flag for customer coupons
     * @return {?}
     */
    getCustomerCouponsLoaded() {
        return this.store.pipe(select(UsersSelectors.getCustomerCouponsLoaded));
    }
    /**
     * Returns a loading flag for customer coupons
     * @return {?}
     */
    getCustomerCouponsLoading() {
        return this.store.pipe(select(UsersSelectors.getCustomerCouponsLoading));
    }
    /**
     * Subscribe a CustomerCoupon Notification
     * @param {?} couponCode a customer coupon code
     * @return {?}
     */
    subscribeCustomerCoupon(couponCode) {
        this.store.dispatch(new UserActions.SubscribeCustomerCoupon({
            userId: OCC_USER_ID_CURRENT,
            couponCode: couponCode,
        }));
    }
    /**
     * Returns the subscribe customer coupon notification process loading flag
     * @return {?}
     */
    getSubscribeCustomerCouponResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the subscribe customer coupon notification process success flag
     * @return {?}
     */
    getSubscribeCustomerCouponResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the subscribe customer coupon notification process error flag
     * @return {?}
     */
    getSubscribeCustomerCouponResultError() {
        return this.store.pipe(select(getProcessErrorFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Unsubscribe a CustomerCoupon Notification
     * @param {?} couponCode a customer coupon code
     * @return {?}
     */
    unsubscribeCustomerCoupon(couponCode) {
        this.store.dispatch(new UserActions.UnsubscribeCustomerCoupon({
            userId: OCC_USER_ID_CURRENT,
            couponCode: couponCode,
        }));
    }
    /**
     * Returns the unsubscribe customer coupon notification process loading flag
     * @return {?}
     */
    getUnsubscribeCustomerCouponResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the unsubscribe customer coupon notification process success flag
     * @return {?}
     */
    getUnsubscribeCustomerCouponResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the unsubscribe customer coupon notification process error flag
     * @return {?}
     */
    getUnsubscribeCustomerCouponResultError() {
        return this.store.pipe(select(getProcessErrorFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Claim a CustomerCoupon
     * @param {?} couponCode a customer coupon code
     * @return {?}
     */
    claimCustomerCoupon(couponCode) {
        this.store.dispatch(new UserActions.ClaimCustomerCoupon({
            userId: OCC_USER_ID_CURRENT,
            couponCode: couponCode,
        }));
    }
    /**
     * Returns the claim customer coupon notification process success flag
     * @return {?}
     */
    getClaimCustomerCouponResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(CLAIM_CUSTOMER_COUPON_PROCESS_ID)));
    }
}
CustomerCouponService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CustomerCouponService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ CustomerCouponService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CustomerCouponService_Factory() { return new CustomerCouponService(i0.ɵɵinject(i1.Store)); }, token: CustomerCouponService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CustomerCouponService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvY3VzdG9tZXItY291cG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFFTCxvQ0FBb0MsRUFDcEMsc0NBQXNDLEVBQ3RDLGdDQUFnQyxHQUNqQyxNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBRXpELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFLcEUsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUNoQyxZQUFzQixLQUFvRDtRQUFwRCxVQUFLLEdBQUwsS0FBSyxDQUErQztJQUFHLENBQUM7Ozs7Ozs7O0lBUTlFLG1CQUFtQixDQUNqQixRQUFnQixFQUNoQixXQUFvQixFQUNwQixJQUFhO1FBRWIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUFDO1lBQ2xDLE1BQU0sRUFBRSxtQkFBbUI7WUFDM0IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQ0gsQ0FBQztJQUNK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U0FDdkIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUtELG1DQUFtQztRQUNqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQzs7O1lBaktGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXRCZ0IsS0FBSzs7Ozs7Ozs7SUF3QlIsc0NBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgU3RhdGVXaXRoVXNlcixcbiAgU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lELFxuICBVTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCxcbiAgQ0xBSU1fQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5LFxuICBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnksXG59IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCB7IEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY3VzdG9tZXItY291cG9uLm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lckNvdXBvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+Pikge31cblxuICAvKipcbiAgICogUmV0cmlldmVzIGN1c3RvbWVyJ3MgY291cG9uc1xuICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICogQHBhcmFtIHNvcnQgc29ydFxuICAgKi9cbiAgbG9hZEN1c3RvbWVyQ291cG9ucyhcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkQ3VzdG9tZXJDb3Vwb25zKHtcbiAgICAgICAgdXNlcklkOiBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxuICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgc29ydDogc29ydCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1c3RvbWVyIGNvdXBvbiBzZWFyY2ggcmVzdWx0XG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICovXG4gIGdldEN1c3RvbWVyQ291cG9ucyhwYWdlU2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q3VzdG9tZXJDb3Vwb25zU3RhdGUpLFxuICAgICAgdGFwKGN1c3RvbWVyQ291cG9uc1N0YXRlID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgY3VzdG9tZXJDb3Vwb25zU3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgIGN1c3RvbWVyQ291cG9uc1N0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICBjdXN0b21lckNvdXBvbnNTdGF0ZS5lcnJvcjtcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkKSB7XG4gICAgICAgICAgdGhpcy5sb2FkQ3VzdG9tZXJDb3Vwb25zKHBhZ2VTaXplKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoY3VzdG9tZXJDb3Vwb25zU3RhdGUgPT4gY3VzdG9tZXJDb3Vwb25zU3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGVkIGZsYWcgZm9yIGN1c3RvbWVyIGNvdXBvbnNcbiAgICovXG4gIGdldEN1c3RvbWVyQ291cG9uc0xvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDdXN0b21lckNvdXBvbnNMb2FkZWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGluZyBmbGFnIGZvciBjdXN0b21lciBjb3Vwb25zXG4gICAqL1xuICBnZXRDdXN0b21lckNvdXBvbnNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEN1c3RvbWVyQ291cG9uc0xvYWRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgYSBDdXN0b21lckNvdXBvbiBOb3RpZmljYXRpb25cbiAgICogQHBhcmFtIGNvdXBvbkNvZGUgYSBjdXN0b21lciBjb3Vwb24gY29kZVxuICAgKi9cbiAgc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24oY291cG9uQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5TdWJzY3JpYmVDdXN0b21lckNvdXBvbih7XG4gICAgICAgIHVzZXJJZDogT0NDX1VTRVJfSURfQ1VSUkVOVCxcbiAgICAgICAgY291cG9uQ29kZTogY291cG9uQ29kZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0U3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0U3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIGVycm9yIGZsYWdcbiAgICovXG4gIGdldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBhIEN1c3RvbWVyQ291cG9uIE5vdGlmaWNhdGlvblxuICAgKiBAcGFyYW0gY291cG9uQ29kZSBhIGN1c3RvbWVyIGNvdXBvbiBjb2RlXG4gICAqL1xuICB1bnN1YnNjcmliZUN1c3RvbWVyQ291cG9uKGNvdXBvbkNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuVW5zdWJzY3JpYmVDdXN0b21lckNvdXBvbih7XG4gICAgICAgIHVzZXJJZDogT0NDX1VTRVJfSURfQ1VSUkVOVCxcbiAgICAgICAgY291cG9uQ29kZTogY291cG9uQ29kZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1bnN1YnNjcmliZSBjdXN0b21lciBjb3Vwb24gbm90aWZpY2F0aW9uIHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShVTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1bnN1YnNjcmliZSBjdXN0b21lciBjb3Vwb24gbm90aWZpY2F0aW9uIHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShVTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1bnN1YnNjcmliZSBjdXN0b21lciBjb3Vwb24gbm90aWZpY2F0aW9uIHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0VW5zdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShVTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGFpbSBhIEN1c3RvbWVyQ291cG9uXG4gICAqIEBwYXJhbSBjb3Vwb25Db2RlIGEgY3VzdG9tZXIgY291cG9uIGNvZGVcbiAgICovXG4gIGNsYWltQ3VzdG9tZXJDb3Vwb24oY291cG9uQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5DbGFpbUN1c3RvbWVyQ291cG9uKHtcbiAgICAgICAgdXNlcklkOiBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxuICAgICAgICBjb3Vwb25Db2RlOiBjb3Vwb25Db2RlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNsYWltIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldENsYWltQ3VzdG9tZXJDb3Vwb25SZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KENMQUlNX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG59XG4iXX0=