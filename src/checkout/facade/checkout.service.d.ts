import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { Order } from '../../model/order.model';
import * as fromCheckoutStore from '../store/index';
export declare class CheckoutService {
    protected checkoutStore: Store<fromCheckoutStore.StateWithCheckout>;
    protected cartData: CartDataService;
    constructor(checkoutStore: Store<fromCheckoutStore.StateWithCheckout>, cartData: CartDataService);
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
    loadCheckoutDetails(cartId: string): void;
    getCheckoutDetailsLoaded(): Observable<boolean>;
    /**
     * Get order details
     */
    getOrderDetails(): Observable<Order>;
    protected actionAllowed(): boolean;
}
