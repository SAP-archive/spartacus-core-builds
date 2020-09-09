import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { CardType, PaymentDetails } from '../../model/cart.model';
import { StateWithProcess } from '../../process/store/process-state';
import { LoaderState } from '../../state/utils/loader/loader-state';
import { StateWithCheckout } from '../store/checkout-state';
export declare class CheckoutPaymentService {
    protected checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>;
    protected authService: AuthService;
    protected activeCartService: ActiveCartService;
    constructor(checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>, authService: AuthService, activeCartService: ActiveCartService);
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
    /**
     * Sets payment loading to true without having the flicker issue (GH-3102)
     */
    paymentProcessSuccess(): void;
    protected actionAllowed(): boolean;
}
