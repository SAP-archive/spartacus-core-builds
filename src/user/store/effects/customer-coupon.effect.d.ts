import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromCustomerCouponsAction from '../actions/customer-coupon.action';
import { CustomerCouponConnector } from '../../connectors/customer-coupon/customer-coupon.connector';
import * as ɵngcc0 from '@angular/core';
export declare class CustomerCouponEffects {
    private actions$;
    private customerCouponConnector;
    loadCustomerCoupons$: Observable<fromCustomerCouponsAction.CustomerCouponAction>;
    subscribeCustomerCoupon$: Observable<fromCustomerCouponsAction.CustomerCouponAction>;
    unsubscribeCustomerCoupon$: Observable<fromCustomerCouponsAction.CustomerCouponAction>;
    claimCustomerCoupon$: Observable<fromCustomerCouponsAction.CustomerCouponAction>;
    constructor(actions$: Actions, customerCouponConnector: CustomerCouponConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerCouponEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CustomerCouponEffects>;
}

//# sourceMappingURL=customer-coupon.effect.d.ts.map