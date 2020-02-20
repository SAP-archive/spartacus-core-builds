import { __decorate } from "tslib";
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
        return this.store.pipe(select(UsersSelectors.getCustomerCouponsState), tap(function (customerCouponsState) {
            var attemptedLoad = customerCouponsState.loading ||
                customerCouponsState.success ||
                customerCouponsState.error;
            if (!attemptedLoad) {
                _this.loadCustomerCoupons(pageSize);
            }
        }), map(function (customerCouponsState) { return customerCouponsState.value; }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvY3VzdG9tZXItY291cG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFFTCxvQ0FBb0MsRUFDcEMsc0NBQXNDLEVBQ3RDLGdDQUFnQyxHQUNqQyxNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBRXpELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFLcEU7SUFDRSwrQkFBc0IsS0FBb0Q7UUFBcEQsVUFBSyxHQUFMLEtBQUssQ0FBK0M7SUFBRyxDQUFDO0lBRTlFOzs7OztPQUtHO0lBQ0gsbURBQW1CLEdBQW5CLFVBQ0UsUUFBZ0IsRUFDaEIsV0FBb0IsRUFDcEIsSUFBYTtRQUViLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztZQUNsQyxNQUFNLEVBQUUsbUJBQW1CO1lBQzNCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7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O0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILG1EQUFtQixHQUFuQixVQUFvQixVQUFrQjtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUM7WUFDbEMsTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixVQUFVLEVBQUUsVUFBVTtTQUN2QixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILG1FQUFtQyxHQUFuQztRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQ25FLENBQUM7SUFDSixDQUFDOztnQkE3SjRCLEtBQUs7OztJQUR2QixxQkFBcUI7UUFIakMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHFCQUFxQixDQStKakM7Z0NBdkxEO0NBdUxDLEFBL0pELElBK0pDO1NBL0pZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIFN0YXRlV2l0aFVzZXIsXG4gIFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCxcbiAgVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsXG4gIENMQUlNX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lELFxufSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NFcnJvckZhY3RvcnksXG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL21vZGVsL2N1c3RvbWVyLWNvdXBvbi5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4pIHt9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBjdXN0b21lcidzIGNvdXBvbnNcbiAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgKiBAcGFyYW0gY3VycmVudFBhZ2UgY3VycmVudCBwYWdlXG4gICAqIEBwYXJhbSBzb3J0IHNvcnRcbiAgICovXG4gIGxvYWRDdXN0b21lckNvdXBvbnMoXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZEN1c3RvbWVyQ291cG9ucyh7XG4gICAgICAgIHVzZXJJZDogT0NDX1VTRVJfSURfQ1VSUkVOVCxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXG4gICAgICAgIHNvcnQ6IHNvcnQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjdXN0b21lciBjb3Vwb24gc2VhcmNoIHJlc3VsdFxuICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAqL1xuICBnZXRDdXN0b21lckNvdXBvbnMocGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEN1c3RvbWVyQ291cG9uc1N0YXRlKSxcbiAgICAgIHRhcChjdXN0b21lckNvdXBvbnNTdGF0ZSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgIGN1c3RvbWVyQ291cG9uc1N0YXRlLmxvYWRpbmcgfHxcbiAgICAgICAgICBjdXN0b21lckNvdXBvbnNTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgY3VzdG9tZXJDb3Vwb25zU3RhdGUuZXJyb3I7XG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCkge1xuICAgICAgICAgIHRoaXMubG9hZEN1c3RvbWVyQ291cG9ucyhwYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKGN1c3RvbWVyQ291cG9uc1N0YXRlID0+IGN1c3RvbWVyQ291cG9uc1N0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRlZCBmbGFnIGZvciBjdXN0b21lciBjb3Vwb25zXG4gICAqL1xuICBnZXRDdXN0b21lckNvdXBvbnNMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q3VzdG9tZXJDb3Vwb25zTG9hZGVkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgY3VzdG9tZXIgY291cG9uc1xuICAgKi9cbiAgZ2V0Q3VzdG9tZXJDb3Vwb25zTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDdXN0b21lckNvdXBvbnNMb2FkaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIGEgQ3VzdG9tZXJDb3Vwb24gTm90aWZpY2F0aW9uXG4gICAqIEBwYXJhbSBjb3Vwb25Db2RlIGEgY3VzdG9tZXIgY291cG9uIGNvZGVcbiAgICovXG4gIHN1YnNjcmliZUN1c3RvbWVyQ291cG9uKGNvdXBvbkNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuU3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24oe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0NVUlJFTlQsXG4gICAgICAgIGNvdXBvbkNvZGU6IGNvdXBvbkNvZGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3Vic2NyaWJlIGN1c3RvbWVyIGNvdXBvbiBub3RpZmljYXRpb24gcHJvY2VzcyBlcnJvciBmbGFnXG4gICAqL1xuICBnZXRTdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgYSBDdXN0b21lckNvdXBvbiBOb3RpZmljYXRpb25cbiAgICogQHBhcmFtIGNvdXBvbkNvZGUgYSBjdXN0b21lciBjb3Vwb24gY29kZVxuICAgKi9cbiAgdW5zdWJzY3JpYmVDdXN0b21lckNvdXBvbihjb3Vwb25Db2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLlVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24oe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0NVUlJFTlQsXG4gICAgICAgIGNvdXBvbkNvZGU6IGNvdXBvbkNvZGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdW5zdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0VW5zdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdW5zdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0VW5zdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdW5zdWJzY3JpYmUgY3VzdG9tZXIgY291cG9uIG5vdGlmaWNhdGlvbiBwcm9jZXNzIGVycm9yIGZsYWdcbiAgICovXG4gIGdldFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xhaW0gYSBDdXN0b21lckNvdXBvblxuICAgKiBAcGFyYW0gY291cG9uQ29kZSBhIGN1c3RvbWVyIGNvdXBvbiBjb2RlXG4gICAqL1xuICBjbGFpbUN1c3RvbWVyQ291cG9uKGNvdXBvbkNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuQ2xhaW1DdXN0b21lckNvdXBvbih7XG4gICAgICAgIHVzZXJJZDogT0NDX1VTRVJfSURfQ1VSUkVOVCxcbiAgICAgICAgY291cG9uQ29kZTogY291cG9uQ29kZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjbGFpbSBjdXN0b21lciBjb3Vwb24gbm90aWZpY2F0aW9uIHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRDbGFpbUN1c3RvbWVyQ291cG9uUmVzdWx0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShDTEFJTV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxufVxuIl19