import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { CLAIM_CUSTOMER_COUPON_PROCESS_ID, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, } from '../store/user-state';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/user-auth/facade/user-id.service";
export class CustomerCouponService {
    constructor(store, userIdService) {
        this.store = store;
        this.userIdService = userIdService;
    }
    /**
     * Retrieves customer's coupons
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadCustomerCoupons(pageSize, currentPage, sort) {
        this.userIdService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.LoadCustomerCoupons({
                userId,
                pageSize: pageSize,
                currentPage: currentPage,
                sort: sort,
            }));
        });
    }
    /**
     * Returns customer coupon search result
     * @param pageSize page size
     */
    getCustomerCoupons(pageSize) {
        return combineLatest([
            this.store.pipe(select(UsersSelectors.getCustomerCouponsState)),
            this.getClaimCustomerCouponResultLoading(),
        ]).pipe(filter(([, loading]) => !loading), tap(([customerCouponsState]) => {
            const attemptedLoad = customerCouponsState.loading ||
                customerCouponsState.success ||
                customerCouponsState.error;
            if (!attemptedLoad) {
                this.loadCustomerCoupons(pageSize);
            }
        }), map(([customerCouponsState]) => customerCouponsState.value));
    }
    /**
     * Returns a loaded flag for customer coupons
     */
    getCustomerCouponsLoaded() {
        return this.store.pipe(select(UsersSelectors.getCustomerCouponsLoaded));
    }
    /**
     * Returns a loading flag for customer coupons
     */
    getCustomerCouponsLoading() {
        return this.store.pipe(select(UsersSelectors.getCustomerCouponsLoading));
    }
    /**
     * Subscribe a CustomerCoupon Notification
     * @param couponCode a customer coupon code
     */
    subscribeCustomerCoupon(couponCode) {
        this.userIdService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.SubscribeCustomerCoupon({
                userId,
                couponCode: couponCode,
            }));
        });
    }
    /**
     * Returns the subscribe customer coupon notification process loading flag
     */
    getSubscribeCustomerCouponResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the subscribe customer coupon notification process success flag
     */
    getSubscribeCustomerCouponResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the subscribe customer coupon notification process error flag
     */
    getSubscribeCustomerCouponResultError() {
        return this.store.pipe(select(getProcessErrorFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Unsubscribe a CustomerCoupon Notification
     * @param couponCode a customer coupon code
     */
    unsubscribeCustomerCoupon(couponCode) {
        this.userIdService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.UnsubscribeCustomerCoupon({
                userId,
                couponCode: couponCode,
            }));
        });
    }
    /**
     * Returns the unsubscribe customer coupon notification process loading flag
     */
    getUnsubscribeCustomerCouponResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the unsubscribe customer coupon notification process success flag
     */
    getUnsubscribeCustomerCouponResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the unsubscribe customer coupon notification process error flag
     */
    getUnsubscribeCustomerCouponResultError() {
        return this.store.pipe(select(getProcessErrorFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Claim a CustomerCoupon
     * @param couponCode a customer coupon code
     */
    claimCustomerCoupon(couponCode) {
        this.userIdService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.ClaimCustomerCoupon({
                userId,
                couponCode,
            }));
        });
    }
    /**
     * Returns the claim customer coupon notification process success flag
     */
    getClaimCustomerCouponResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(CLAIM_CUSTOMER_COUPON_PROCESS_ID)));
    }
    /**
     * Returns the claim customer coupon notification process loading flag
     */
    getClaimCustomerCouponResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(CLAIM_CUSTOMER_COUPON_PROCESS_ID)));
    }
}
CustomerCouponService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomerCouponService_Factory() { return new CustomerCouponService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.UserIdService)); }, token: CustomerCouponService, providedIn: "root" });
CustomerCouponService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CustomerCouponService.ctorParameters = () => [
    { type: Store },
    { type: UserIdService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91c2VyL2ZhY2FkZS9jdXN0b21lci1jb3Vwb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRzVFLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUNMLGdDQUFnQyxFQUVoQyxvQ0FBb0MsRUFDcEMsc0NBQXNDLEdBQ3ZDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFLN0IsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxZQUNZLEtBQW9ELEVBQ3BELGFBQTRCO1FBRDVCLFVBQUssR0FBTCxLQUFLLENBQStDO1FBQ3BELGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ3JDLENBQUM7SUFFSjs7Ozs7T0FLRztJQUNILG1CQUFtQixDQUNqQixRQUFnQixFQUNoQixXQUFvQixFQUNwQixJQUFhO1FBRWIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxL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TEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUF0QmdCLEtBQUs7WUFHYixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVc2VySWRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvZmFjYWRlL3VzZXItaWQuc2VydmljZSc7XG5pbXBvcnQgeyBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL21vZGVsL2N1c3RvbWVyLWNvdXBvbi5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NFcnJvckZhY3RvcnksXG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQ0xBSU1fQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsXG4gIFN0YXRlV2l0aFVzZXIsXG4gIFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCxcbiAgVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIHVzZXJJZFNlcnZpY2U6IFVzZXJJZFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgY3VzdG9tZXIncyBjb3Vwb25zXG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlIGN1cnJlbnQgcGFnZVxuICAgKiBAcGFyYW0gc29ydCBzb3J0XG4gICAqL1xuICBsb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJJZFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZEN1c3RvbWVyQ291cG9ucyh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXG4gICAgICAgICAgc29ydDogc29ydCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjdXN0b21lciBjb3Vwb24gc2VhcmNoIHJlc3VsdFxuICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAqL1xuICBnZXRDdXN0b21lckNvdXBvbnMocGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEN1c3RvbWVyQ291cG9uc1N0YXRlKSksXG4gICAgICB0aGlzLmdldENsYWltQ3VzdG9tZXJDb3Vwb25SZXN1bHRMb2FkaW5nKCksXG4gICAgXSkucGlwZShcbiAgICAgIGZpbHRlcigoWywgbG9hZGluZ10pID0+ICFsb2FkaW5nKSxcbiAgICAgIHRhcCgoW2N1c3RvbWVyQ291cG9uc1N0YXRlXSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICBjdXN0b21lckNvdXBvbnNTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgY3VzdG9tZXJDb3Vwb25zU3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgIGN1c3RvbWVyQ291cG9uc1N0YXRlLmVycm9yO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWRDdXN0b21lckNvdXBvbnMocGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoW2N1c3RvbWVyQ291cG9uc1N0YXRlXSkgPT4gY3VzdG9tZXJDb3Vwb25zU3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGVkIGZsYWcgZm9yIGN1c3RvbWVyIGNvdXBvbnNcbiAgICovXG4gIGdldEN1c3RvbWVyQ291cG9uc0xvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDdXN0b21lckNvdXBvbnNMb2FkZWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGluZyBmbGFnIGZvciBjdXN0b21lciBjb3Vwb25zXG4gICAqL1xuICBnZXRDdXN0b21lckNvdXBvbnNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEN1c3RvbWVyQ291cG9uc0xvYWRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgYSBDdXN0b21lckNvdXBvbiBOb3RpZmljYXRpb25cbiAgICogQHBhcmFtIGNvdXBvbkNvZGUgYSBjdXN0b21lciBjb3Vwb24gY29kZVxuICAgKi9cbiAgc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24oY291cG9uQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51c2VySWRTZXJ2aWNlLmludm9rZVdpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlN1YnNjcmliZUN1c3RvbWVyQ291cG9uKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY291cG9uQ29kZTogY291cG9uQ29kZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRTdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgYSBDdXN0b21lckNvdXBvbiBOb3RpZmljYXRpb25cbiAgICogQHBhcmFtIGNvdXBvbkNvZGUgYSBjdXN0b21lciBjb3Vwb24gY29kZVxuICAgKi9cbiAgdW5zdWJzY3JpYmVDdXN0b21lckNvdXBvbihjb3Vwb25Db2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJJZFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuVW5zdWJzY3JpYmVDdXN0b21lckNvdXBvbih7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNvdXBvbkNvZGU6IGNvdXBvbkNvZGUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVuc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVuc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVuc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsYWltIGEgQ3VzdG9tZXJDb3Vwb25cbiAgICogQHBhcmFtIGNvdXBvbkNvZGUgYSBjdXN0b21lciBjb3Vwb24gY29kZVxuICAgKi9cbiAgY2xhaW1DdXN0b21lckNvdXBvbihjb3Vwb25Db2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJJZFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuQ2xhaW1DdXN0b21lckNvdXBvbih7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNvdXBvbkNvZGUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNsYWltIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldENsYWltQ3VzdG9tZXJDb3Vwb25SZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KENMQUlNX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNsYWltIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldENsYWltQ3VzdG9tZXJDb3Vwb25SZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KENMQUlNX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG59XG4iXX0=