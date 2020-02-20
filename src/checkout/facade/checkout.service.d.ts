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

//# sourceMappingURL=checkout.service.d.ts.map