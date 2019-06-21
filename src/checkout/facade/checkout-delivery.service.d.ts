import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartDataService } from '../../cart/index';
import { Address, AddressValidation } from '../../model/address.model';
import { DeliveryMode } from '../../model/order.model';
import * as fromCheckoutStore from '../store/index';
export declare class CheckoutDeliveryService {
    protected checkoutStore: Store<fromCheckoutStore.StateWithCheckout>;
    protected cartData: CartDataService;
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
     * Get delivery address
     */
    getDeliveryAddress(): Observable<Address>;
    /**
     * Get address verification results
     */
    getAddressVerificationResults(): Observable<AddressValidation | string>;
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
     * Clear address verification results
     */
    clearAddressVerificationResults(): void;
    protected actionAllowed(): boolean;
}
