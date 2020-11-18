import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromCustomerCouponsAction from '../actions/customer-coupon.action';
import { CustomerCouponConnector } from '../../connectors/customer-coupon/customer-coupon.connector';
export declare class CustomerCouponEffects {
    private actions$;
    private customerCouponConnector;
    loadCustomerCoupons$: Observable<fromCustomerCouponsAction.CustomerCouponAction>;
    subscribeCustomerCoupon$: Observable<fromCustomerCouponsAction.CustomerCouponAction>;
    unsubscribeCustomerCoupon$: Observable<fromCustomerCouponsAction.CustomerCouponAction>;
    claimCustomerCoupon$: Observable<fromCustomerCouponsAction.CustomerCouponAction>;
    constructor(actions$: Actions, customerCouponConnector: CustomerCouponConnector);
}
