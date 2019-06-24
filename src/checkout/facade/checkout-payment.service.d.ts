import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { CardType, PaymentDetails } from '../../model/cart.model';
import * as fromCheckoutStore from '../store/index';
export declare class CheckoutPaymentService {
    protected checkoutStore: Store<fromCheckoutStore.StateWithCheckout>;
    protected cartData: CartDataService;
    constructor(checkoutStore: Store<fromCheckoutStore.StateWithCheckout>, cartData: CartDataService);
    /**
     * Get card types
     */
    getCardTypes(): Observable<CardType[]>;
    /**
     * Get payment details
     */
    getPaymentDetails(): Observable<PaymentDetails>;
    /**
     * Load the supported card types
     */
    loadSupportedCardTypes(): void;
    /**
     * Create payment details using the given paymentDetails param
     * @param paymentDetails: the PaymentDetails to be created
     */
    createPaymentDetails(paymentDetails: PaymentDetails): void;
    /**
     * Set payment details
     * @param paymentDetails : the PaymentDetails to be set
     */
    setPaymentDetails(paymentDetails: PaymentDetails): void;
    protected actionAllowed(): boolean;
}
