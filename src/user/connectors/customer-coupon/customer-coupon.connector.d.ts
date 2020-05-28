import { Observable } from 'rxjs';
import { CustomerCouponSearchResult, CustomerCouponNotification, CustomerCoupon2Customer } from '../../../model/customer-coupon.model';
import { CustomerCouponAdapter } from './customer-coupon.adapter';
export declare class CustomerCouponConnector {
    protected adapter: CustomerCouponAdapter;
    constructor(adapter: CustomerCouponAdapter);
    getCustomerCoupons(userId: string, pageSize: number, currentPage: number, sort: string): Observable<CustomerCouponSearchResult>;
    turnOnNotification(userId: string, couponCode: string): Observable<CustomerCouponNotification>;
    turnOffNotification(userId: string, couponCode: string): Observable<{}>;
    claimCustomerCoupon(userId: string, couponCode: string): Observable<CustomerCoupon2Customer>;
}
