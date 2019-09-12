import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { CardType, PaymentDetails } from '../../model/cart.model';
import { StateWithCheckout } from '../store/checkout-state';
import { StateWithProcess } from '../../process/store/process-state';
import { LoaderState } from '../../state/utils/loader/loader-state';
export declare class CheckoutPaymentService {
    protected checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>;
    protected cartData: CartDataService;
    constructor(checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>, cartData: CartDataService);
    /**
     * Get card types
     */
    getCardTypes(): Observable<CardType[]>;
    /**
     * Get payment details
     */
    getPaymentDetails(): Observable<PaymentDetails>;
    /**
     * Get status about set Payment Details process
     */
    getSetPaymentDetailsResultProcess(): Observable<LoaderState<void>>;
    /**
     * Clear info about process of setting Payment Details
     */
    resetSetPaymentDetailsProcess(): void;
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
