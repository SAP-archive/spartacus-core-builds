import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCheckoutStore from '../store/index';
import { CartDataService } from '../../cart/index';
import { PaymentDetails, CardType, Order, DeliveryMode, AddressValidation, Address } from '../../occ/occ-models/index';
export declare class CheckoutService {
    private checkoutStore;
    private cartData;
    constructor(checkoutStore: Store<fromCheckoutStore.StateWithCheckout>, cartData: CartDataService);
    /**
     * Get supported delivery modes
     */
    getSupportedDeliveryModes(): Observable<DeliveryMode[]>;
    /**
     * Get selected delivery mode
     */
    getSelectedDeliveryMode(): Observable<DeliveryMode>;
    /**
     * Get selected delivery mode code
     */
    getSelectedDeliveryModeCode(): Observable<string>;
    /**
     * Get card types
     */
    getCardTypes(): Observable<CardType[]>;
    /**
     * Get delivery address
     */
    getDeliveryAddress(): Observable<Address>;
    /**
     * Get address verification results
     */
    getAddressVerificationResults(): Observable<AddressValidation | string>;
    /**
     * Get payment details
     */
    getPaymentDetails(): Observable<PaymentDetails>;
    /**
     * Get order details
     */
    getOrderDetails(): Observable<Order>;
    /**
     * Create and set a delivery address using the address param
     * @param address : the Address to be created and set
     */
    createAndSetAddress(address: Address): void;
    /**
     * Load supported delivery modes
     */
    loadSupportedDeliveryModes(): void;
    /**
     * Set delivery mode
     * @param mode : The delivery mode to be set
     */
    setDeliveryMode(mode: string): void;
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
     * Places an order
     */
    placeOrder(): void;
    /**
     * Verifies the address
     * @param address : the address to be verified
     */
    verifyAddress(address: Address): void;
    /**
     * Set delivery address
     * @param address : The address to be set
     */
    setDeliveryAddress(address: Address): void;
    /**
     * Set payment details
     * @param paymentDetails : the PaymentDetails to be set
     */
    setPaymentDetails(paymentDetails: PaymentDetails): void;
    /**
     * Clear address verification results
     */
    clearAddressVerificationResults(): void;
    /**
     * Clear checkout data
     */
    clearCheckoutData(): void;
    /**
     * Clear checkout step
     * @param stepNumber : the step number to be cleared
     */
    clearCheckoutStep(stepNumber: number): void;
    loadCheckoutDetails(userId: string, cartId: string): void;
    getCheckoutDetailsLoaded(): Observable<boolean>;
    private actionAllowed;
}
