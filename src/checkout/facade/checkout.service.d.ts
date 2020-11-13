import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { Order } from '../../model/order.model';
import { ORDER_TYPE, ReplenishmentOrder, ScheduleReplenishmentForm } from '../../model/replenishment-order.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithCheckout } from '../store/checkout-state';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutService {
    protected checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>;
    protected activeCartService: ActiveCartService;
    protected userIdService: UserIdService;
    constructor(checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>, activeCartService: ActiveCartService, userIdService: UserIdService);
    /**
     * Places an order
     */
    placeOrder(termsChecked: boolean): void;
    /**
     * Schedule a replenishment order
     */
    scheduleReplenishmentOrder(scheduleReplenishmentForm: ScheduleReplenishmentForm, termsChecked: boolean): void;
    /**
     * Returns the place or schedule replenishment order's loading flag
     */
    getPlaceOrderLoading(): Observable<boolean>;
    /**
     * Returns the place or schedule replenishment order's success flag
     */
    getPlaceOrderSuccess(): Observable<boolean>;
    /**
     * Returns the place or schedule replenishment order's error flag
     */
    getPlaceOrderError(): Observable<boolean>;
    /**
     * Resets the place or schedule replenishment order's processing state
     */
    clearPlaceOrderState(): void;
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
    getOrderDetails(): Observable<Order | ReplenishmentOrder>;
    /**
     * Set checkout order type
     * @param orderType : an enum of types of order we are placing
     */
    setOrderType(orderType: ORDER_TYPE): void;
    /**
     * Get current checkout order type
     */
    getCurrentOrderType(): Observable<ORDER_TYPE>;
    protected actionAllowed(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutService, never>;
}

//# sourceMappingURL=checkout.service.d.ts.map