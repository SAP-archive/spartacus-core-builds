import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { CustomerCouponSearchResult } from '../../model/customer-coupon.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import * as ɵngcc0 from '@angular/core';
export declare class CustomerCouponService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * Retrieves customer's coupons
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadCustomerCoupons(pageSize: number, currentPage?: number, sort?: string): void;
    /**
     * Returns customer coupon search result
     * @param pageSize page size
     */
    getCustomerCoupons(pageSize: number): Observable<CustomerCouponSearchResult>;
    /**
     * Returns a loaded flag for customer coupons
     */
    getCustomerCouponsLoaded(): Observable<boolean>;
    /**
     * Returns a loading flag for customer coupons
     */
    getCustomerCouponsLoading(): Observable<boolean>;
    /**
     * Subscribe a CustomerCoupon Notification
     * @param couponCode a customer coupon code
     */
    subscribeCustomerCoupon(couponCode: string): void;
    /**
     * Returns the subscribe customer coupon notification process loading flag
     */
    getSubscribeCustomerCouponResultLoading(): Observable<boolean>;
    /**
     * Returns the subscribe customer coupon notification process success flag
     */
    getSubscribeCustomerCouponResultSuccess(): Observable<boolean>;
    /**
     * Returns the subscribe customer coupon notification process error flag
     */
    getSubscribeCustomerCouponResultError(): Observable<boolean>;
    /**
     * Unsubscribe a CustomerCoupon Notification
     * @param couponCode a customer coupon code
     */
    unsubscribeCustomerCoupon(couponCode: string): void;
    /**
     * Returns the unsubscribe customer coupon notification process loading flag
     */
    getUnsubscribeCustomerCouponResultLoading(): Observable<boolean>;
    /**
     * Returns the unsubscribe customer coupon notification process success flag
     */
    getUnsubscribeCustomerCouponResultSuccess(): Observable<boolean>;
    /**
     * Returns the unsubscribe customer coupon notification process error flag
     */
    getUnsubscribeCustomerCouponResultError(): Observable<boolean>;
    /**
     * Claim a CustomerCoupon
     * @param couponCode a customer coupon code
     */
    claimCustomerCoupon(couponCode: string): void;
    /**
     * Returns the claim customer coupon notification process success flag
     */
    getClaimCustomerCouponResultSuccess(): Observable<boolean>;
    /**
     * Returns the claim customer coupon notification process loading flag
     */
    getClaimCustomerCouponResultLoading(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerCouponService, never>;
}

//# sourceMappingURL=customer-coupon.service.d.ts.map