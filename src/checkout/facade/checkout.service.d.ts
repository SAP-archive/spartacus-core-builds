import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { Order } from '../../model/order.model';
import { StateWithCheckout } from '../store/checkout-state';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutService {
    protected checkoutStore: Store<StateWithCheckout>;
    protected cartData: CartDataService;
    constructor(checkoutStore: Store<StateWithCheckout>, cartData: CartDataService);
    /**
     * Places an order
     */
    placeOrder(): void;
    /**
     * Clear checkout data
     */
    clearCheckoutData(): void;
    /**
     * Clear checkout step
     * @param stepNumber : the step number to be cleared
     */
    clearCheckoutStep(stepNumber: number): void;
    /**
     * Load checkout details data
     * @param cartId : string Cart ID of loaded cart
     */
    loadCheckoutDetails(cartId: string): void;
    /**
     * Get status of checkout details loaded
     */
    getCheckoutDetailsLoaded(): Observable<boolean>;
    /**
     * Get order details
     */
    getOrderDetails(): Observable<Order>;
    protected actionAllowed(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CheckoutService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjaGVja291dC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aENoZWNrb3V0IH0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hlY2tvdXRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQ+O1xuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0PiwgY2FydERhdGE6IENhcnREYXRhU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUGxhY2VzIGFuIG9yZGVyXG4gICAgICovXG4gICAgcGxhY2VPcmRlcigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFyIGNoZWNrb3V0IGRhdGFcbiAgICAgKi9cbiAgICBjbGVhckNoZWNrb3V0RGF0YSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFyIGNoZWNrb3V0IHN0ZXBcbiAgICAgKiBAcGFyYW0gc3RlcE51bWJlciA6IHRoZSBzdGVwIG51bWJlciB0byBiZSBjbGVhcmVkXG4gICAgICovXG4gICAgY2xlYXJDaGVja291dFN0ZXAoc3RlcE51bWJlcjogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBMb2FkIGNoZWNrb3V0IGRldGFpbHMgZGF0YVxuICAgICAqIEBwYXJhbSBjYXJ0SWQgOiBzdHJpbmcgQ2FydCBJRCBvZiBsb2FkZWQgY2FydFxuICAgICAqL1xuICAgIGxvYWRDaGVja291dERldGFpbHMoY2FydElkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCBzdGF0dXMgb2YgY2hlY2tvdXQgZGV0YWlscyBsb2FkZWRcbiAgICAgKi9cbiAgICBnZXRDaGVja291dERldGFpbHNMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBHZXQgb3JkZXIgZGV0YWlsc1xuICAgICAqL1xuICAgIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPjtcbiAgICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuO1xufVxuIl19