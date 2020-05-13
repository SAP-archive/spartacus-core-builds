import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { Order } from '../../model/order.model';
import { StateWithCheckout } from '../store/checkout-state';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutService {
    protected checkoutStore: Store<StateWithCheckout>;
    protected authService: AuthService;
    protected activeCartService: ActiveCartService;
    constructor(checkoutStore: Store<StateWithCheckout>, authService: AuthService, activeCartService: ActiveCartService);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjaGVja291dC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2NhcnQvZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDaGVja291dCB9IGZyb20gJy4uL3N0b3JlL2NoZWNrb3V0LXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoZWNrb3V0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0PjtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQ+LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUGxhY2VzIGFuIG9yZGVyXG4gICAgICovXG4gICAgcGxhY2VPcmRlcigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFyIGNoZWNrb3V0IGRhdGFcbiAgICAgKi9cbiAgICBjbGVhckNoZWNrb3V0RGF0YSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFyIGNoZWNrb3V0IHN0ZXBcbiAgICAgKiBAcGFyYW0gc3RlcE51bWJlciA6IHRoZSBzdGVwIG51bWJlciB0byBiZSBjbGVhcmVkXG4gICAgICovXG4gICAgY2xlYXJDaGVja291dFN0ZXAoc3RlcE51bWJlcjogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBMb2FkIGNoZWNrb3V0IGRldGFpbHMgZGF0YVxuICAgICAqIEBwYXJhbSBjYXJ0SWQgOiBzdHJpbmcgQ2FydCBJRCBvZiBsb2FkZWQgY2FydFxuICAgICAqL1xuICAgIGxvYWRDaGVja291dERldGFpbHMoY2FydElkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCBzdGF0dXMgb2YgY2hlY2tvdXQgZGV0YWlscyBsb2FkZWRcbiAgICAgKi9cbiAgICBnZXRDaGVja291dERldGFpbHNMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBHZXQgb3JkZXIgZGV0YWlsc1xuICAgICAqL1xuICAgIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPjtcbiAgICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuO1xufVxuIl19