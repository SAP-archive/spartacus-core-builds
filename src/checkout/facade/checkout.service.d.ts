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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjaGVja291dC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2hlY2tvdXQgfSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGVja291dFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dD47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFBsYWNlcyBhbiBvcmRlclxuICAgICAqL1xuICAgIHBsYWNlT3JkZXIoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbGVhciBjaGVja291dCBkYXRhXG4gICAgICovXG4gICAgY2xlYXJDaGVja291dERhdGEoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbGVhciBjaGVja291dCBzdGVwXG4gICAgICogQHBhcmFtIHN0ZXBOdW1iZXIgOiB0aGUgc3RlcCBudW1iZXIgdG8gYmUgY2xlYXJlZFxuICAgICAqL1xuICAgIGNsZWFyQ2hlY2tvdXRTdGVwKHN0ZXBOdW1iZXI6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTG9hZCBjaGVja291dCBkZXRhaWxzIGRhdGFcbiAgICAgKiBAcGFyYW0gY2FydElkIDogc3RyaW5nIENhcnQgSUQgb2YgbG9hZGVkIGNhcnRcbiAgICAgKi9cbiAgICBsb2FkQ2hlY2tvdXREZXRhaWxzKGNhcnRJZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgc3RhdHVzIG9mIGNoZWNrb3V0IGRldGFpbHMgbG9hZGVkXG4gICAgICovXG4gICAgZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogR2V0IG9yZGVyIGRldGFpbHNcbiAgICAgKi9cbiAgICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj47XG4gICAgcHJvdGVjdGVkIGFjdGlvbkFsbG93ZWQoKTogYm9vbGVhbjtcbn1cbiJdfQ==