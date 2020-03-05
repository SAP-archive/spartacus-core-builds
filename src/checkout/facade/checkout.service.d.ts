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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CheckoutService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjaGVja291dC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aENoZWNrb3V0IH0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hlY2tvdXRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQ+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dD4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBQbGFjZXMgYW4gb3JkZXJcbiAgICAgKi9cbiAgICBwbGFjZU9yZGVyKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXIgY2hlY2tvdXQgZGF0YVxuICAgICAqL1xuICAgIGNsZWFyQ2hlY2tvdXREYXRhKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXIgY2hlY2tvdXQgc3RlcFxuICAgICAqIEBwYXJhbSBzdGVwTnVtYmVyIDogdGhlIHN0ZXAgbnVtYmVyIHRvIGJlIGNsZWFyZWRcbiAgICAgKi9cbiAgICBjbGVhckNoZWNrb3V0U3RlcChzdGVwTnVtYmVyOiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIExvYWQgY2hlY2tvdXQgZGV0YWlscyBkYXRhXG4gICAgICogQHBhcmFtIGNhcnRJZCA6IHN0cmluZyBDYXJ0IElEIG9mIGxvYWRlZCBjYXJ0XG4gICAgICovXG4gICAgbG9hZENoZWNrb3V0RGV0YWlscyhjYXJ0SWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IHN0YXR1cyBvZiBjaGVja291dCBkZXRhaWxzIGxvYWRlZFxuICAgICAqL1xuICAgIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIEdldCBvcmRlciBkZXRhaWxzXG4gICAgICovXG4gICAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+O1xuICAgIHByb3RlY3RlZCBhY3Rpb25BbGxvd2VkKCk6IGJvb2xlYW47XG59XG4iXX0=