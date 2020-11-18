import { Observable } from 'rxjs';
import { CustomerCouponSearchResult, CustomerCouponNotification, CustomerCoupon2Customer } from '../../../model/customer-coupon.model';
import { CustomerCouponAdapter } from './customer-coupon.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class CustomerCouponConnector {
    protected adapter: CustomerCouponAdapter;
    constructor(adapter: CustomerCouponAdapter);
    getCustomerCoupons(userId: string, pageSize: number, currentPage: number, sort: string): Observable<CustomerCouponSearchResult>;
    turnOnNotification(userId: string, couponCode: string): Observable<CustomerCouponNotification>;
    turnOffNotification(userId: string, couponCode: string): Observable<{}>;
    claimCustomerCoupon(userId: string, couponCode: string): Observable<CustomerCoupon2Customer>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerCouponConnector, never>;
}

//# sourceMappingURL=customer-coupon.connector.d.ts.map