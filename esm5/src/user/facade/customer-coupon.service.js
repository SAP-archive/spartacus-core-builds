import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { OCC_USER_ID_CURRENT } from '../../occ/utils/occ-constants';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { CLAIM_CUSTOMER_COUPON_PROCESS_ID, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, } from '../store/user-state';
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
    CustomerCouponService.prototype.loadCustomerCoupons = function (pageSize, currentPage, sort) {
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
    CustomerCouponService.prototype.getCustomerCoupons = function (pageSize) {
        var _this = this;
        return combineLatest([
            this.store.pipe(select(UsersSelectors.getCustomerCouponsState)),
            this.getClaimCustomerCouponResultLoading(),
        ]).pipe(filter(function (_a) {
            var _b = __read(_a, 2), loading = _b[1];
            return !loading;
        }), tap(function (_a) {
            var _b = __read(_a, 1), customerCouponsState = _b[0];
            var attemptedLoad = customerCouponsState.loading ||
                customerCouponsState.success ||
                customerCouponsState.error;
            if (!attemptedLoad) {
                _this.loadCustomerCoupons(pageSize);
            }
        }), map(function (_a) {
            var _b = __read(_a, 1), customerCouponsState = _b[0];
            return customerCouponsState.value;
        }));
    };
    /**
     * Returns a loaded flag for customer coupons
     */
    CustomerCouponService.prototype.getCustomerCouponsLoaded = function () {
        return this.store.pipe(select(UsersSelectors.getCustomerCouponsLoaded));
    };
    /**
     * Returns a loading flag for customer coupons
     */
    CustomerCouponService.prototype.getCustomerCouponsLoading = function () {
        return this.store.pipe(select(UsersSelectors.getCustomerCouponsLoading));
    };
    /**
     * Subscribe a CustomerCoupon Notification
     * @param couponCode a customer coupon code
     */
    CustomerCouponService.prototype.subscribeCustomerCoupon = function (couponCode) {
        this.store.dispatch(new UserActions.SubscribeCustomerCoupon({
            userId: OCC_USER_ID_CURRENT,
            couponCode: couponCode,
        }));
    };
    /**
     * Returns the subscribe customer coupon notification process loading flag
     */
    CustomerCouponService.prototype.getSubscribeCustomerCouponResultLoading = function () {
        return this.store.pipe(select(getProcessLoadingFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Returns the subscribe customer coupon notification process success flag
     */
    CustomerCouponService.prototype.getSubscribeCustomerCouponResultSuccess = function () {
        return this.store.pipe(select(getProcessSuccessFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Returns the subscribe customer coupon notification process error flag
     */
    CustomerCouponService.prototype.getSubscribeCustomerCouponResultError = function () {
        return this.store.pipe(select(getProcessErrorFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Unsubscribe a CustomerCoupon Notification
     * @param couponCode a customer coupon code
     */
    CustomerCouponService.prototype.unsubscribeCustomerCoupon = function (couponCode) {
        this.store.dispatch(new UserActions.UnsubscribeCustomerCoupon({
            userId: OCC_USER_ID_CURRENT,
            couponCode: couponCode,
        }));
    };
    /**
     * Returns the unsubscribe customer coupon notification process loading flag
     */
    CustomerCouponService.prototype.getUnsubscribeCustomerCouponResultLoading = function () {
        return this.store.pipe(select(getProcessLoadingFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Returns the unsubscribe customer coupon notification process success flag
     */
    CustomerCouponService.prototype.getUnsubscribeCustomerCouponResultSuccess = function () {
        return this.store.pipe(select(getProcessSuccessFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Returns the unsubscribe customer coupon notification process error flag
     */
    CustomerCouponService.prototype.getUnsubscribeCustomerCouponResultError = function () {
        return this.store.pipe(select(getProcessErrorFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Claim a CustomerCoupon
     * @param couponCode a customer coupon code
     */
    CustomerCouponService.prototype.claimCustomerCoupon = function (couponCode) {
        this.store.dispatch(new UserActions.ClaimCustomerCoupon({
            userId: OCC_USER_ID_CURRENT,
            couponCode: couponCode,
        }));
    };
    /**
     * Returns the claim customer coupon notification process success flag
     */
    CustomerCouponService.prototype.getClaimCustomerCouponResultSuccess = function () {
        return this.store.pipe(select(getProcessSuccessFactory(CLAIM_CUSTOMER_COUPON_PROCESS_ID)));
    };
    /**
     * Returns the claim customer coupon notification process loading flag
     */
    CustomerCouponService.prototype.getClaimCustomerCouponResultLoading = function () {
        return this.store.pipe(select(getProcessLoadingFactory(CLAIM_CUSTOMER_COUPON_PROCESS_ID)));
    };
    CustomerCouponService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    CustomerCouponService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomerCouponService_Factory() { return new CustomerCouponService(i0.ɵɵinject(i1.Store)); }, token: CustomerCouponService, providedIn: "root" });
    CustomerCouponService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CustomerCouponService);
    return CustomerCouponService;
}());
export { CustomerCouponService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvY3VzdG9tZXItY291cG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRSxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4Qix3QkFBd0IsR0FDekIsTUFBTSxpREFBaUQsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFDTCxnQ0FBZ0MsRUFFaEMsb0NBQW9DLEVBQ3BDLHNDQUFzQyxHQUN2QyxNQUFNLHFCQUFxQixDQUFDOzs7QUFLN0I7SUFDRSwrQkFBc0IsS0FBb0Q7UUFBcEQsVUFBSyxHQUFMLEtBQUssQ0FBK0M7SUFBRyxDQUFDO0lBRTlFOzs7OztPQUtHO0lBQ0gsbURBQW1CLEdBQW5CLFVBQ0UsUUFBZ0IsRUFDaEIsV0FBb0IsRUFDcEIsSUFBYTtRQUViLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztZQUNsQyxNQUFNLEVBQUUsbUJBQW1CO1lBQzNCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1lBQ3hC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cmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL21vZGVsL2N1c3RvbWVyLWNvdXBvbi5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBnZXRQcm9jZXNzRXJyb3JGYWN0b3J5LFxuICBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnksXG4gIGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIENMQUlNX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lELFxuICBTdGF0ZVdpdGhVc2VyLFxuICBTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsXG4gIFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lELFxufSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyQ291cG9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgY3VzdG9tZXIncyBjb3Vwb25zXG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlIGN1cnJlbnQgcGFnZVxuICAgKiBAcGFyYW0gc29ydCBzb3J0XG4gICAqL1xuICBsb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRDdXN0b21lckNvdXBvbnMoe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0NVUlJFTlQsXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxuICAgICAgICBzb3J0OiBzb3J0LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VzdG9tZXIgY291cG9uIHNlYXJjaCByZXN1bHRcbiAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgKi9cbiAgZ2V0Q3VzdG9tZXJDb3Vwb25zKHBhZ2VTaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0PiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDdXN0b21lckNvdXBvbnNTdGF0ZSkpLFxuICAgICAgdGhpcy5nZXRDbGFpbUN1c3RvbWVyQ291cG9uUmVzdWx0TG9hZGluZygpLFxuICAgIF0pLnBpcGUoXG4gICAgICBmaWx0ZXIoKFssIGxvYWRpbmddKSA9PiAhbG9hZGluZyksXG4gICAgICB0YXAoKFtjdXN0b21lckNvdXBvbnNTdGF0ZV0pID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgY3VzdG9tZXJDb3Vwb25zU3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgIGN1c3RvbWVyQ291cG9uc1N0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICBjdXN0b21lckNvdXBvbnNTdGF0ZS5lcnJvcjtcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkKSB7XG4gICAgICAgICAgdGhpcy5sb2FkQ3VzdG9tZXJDb3Vwb25zKHBhZ2VTaXplKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKFtjdXN0b21lckNvdXBvbnNTdGF0ZV0pID0+IGN1c3RvbWVyQ291cG9uc1N0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRlZCBmbGFnIGZvciBjdXN0b21lciBjb3Vwb25zXG4gICAqL1xuICBnZXRDdXN0b21lckNvdXBvbnNMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q3VzdG9tZXJDb3Vwb25zTG9hZGVkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgY3VzdG9tZXIgY291cG9uc1xuICAgKi9cbiAgZ2V0Q3VzdG9tZXJDb3Vwb25zTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDdXN0b21lckNvdXBvbnNMb2FkaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIGEgQ3VzdG9tZXJDb3Vwb24gTm90aWZpY2F0aW9uXG4gICAqIEBwYXJhbSBjb3Vwb25Db2RlIGEgY3VzdG9tZXIgY291cG9uIGNvZGVcbiAgICovXG4gIHN1YnNjcmliZUN1c3RvbWVyQ291cG9uKGNvdXBvbkNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuU3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24oe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0NVUlJFTlQsXG4gICAgICAgIGNvdXBvbkNvZGU6IGNvdXBvbkNvZGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRTdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgYSBDdXN0b21lckNvdXBvbiBOb3RpZmljYXRpb25cbiAgICogQHBhcmFtIGNvdXBvbkNvZGUgYSBjdXN0b21lciBjb3Vwb24gY29kZVxuICAgKi9cbiAgdW5zdWJzY3JpYmVDdXN0b21lckNvdXBvbihjb3Vwb25Db2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLlVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24oe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0NVUlJFTlQsXG4gICAgICAgIGNvdXBvbkNvZGU6IGNvdXBvbkNvZGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdW5zdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0VW5zdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdW5zdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0VW5zdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdW5zdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIGVycm9yIGZsYWdcbiAgICovXG4gIGdldFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xhaW0gYSBDdXN0b21lckNvdXBvblxuICAgKiBAcGFyYW0gY291cG9uQ29kZSBhIGN1c3RvbWVyIGNvdXBvbiBjb2RlXG4gICAqL1xuICBjbGFpbUN1c3RvbWVyQ291cG9uKGNvdXBvbkNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuQ2xhaW1DdXN0b21lckNvdXBvbih7XG4gICAgICAgIHVzZXJJZDogT0NDX1VTRVJfSURfQ1VSUkVOVCxcbiAgICAgICAgY291cG9uQ29kZTogY291cG9uQ29kZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjbGFpbSBjdXN0b21lciBjb3Vwb24gbm90aWZpY2F0aW9uIHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRDbGFpbUN1c3RvbWVyQ291cG9uUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShDTEFJTV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjbGFpbSBjdXN0b21lciBjb3Vwb24gbm90aWZpY2F0aW9uIHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRDbGFpbUN1c3RvbWVyQ291cG9uUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShDTEFJTV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxufVxuIl19