import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { Address, AddressValidation } from '../../model/address.model';
import { DeliveryMode } from '../../model/order.model';
import { StateWithCheckout } from '../store/checkout-state';
import { StateWithProcess } from '../../process/store/process-state';
import { LoaderState } from '../../state/utils/loader/loader-state';
export declare class CheckoutDeliveryService {
    protected checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>;
    protected cartData: CartDataService;
    constructor(checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>, cartData: CartDataService);
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
     * Get status about successfully set Delivery Address
     */
    getSetDeliveryAddressProcess(): Observable<LoaderState<void>>;
    /**
     * Clear info about process of setting Delivery Address
     */
    resetSetDeliveryAddressProcess(): void;
    /**
     * Get status about of set Delivery Mode process
     */
    getSetDeliveryModeProcess(): Observable<LoaderState<void>>;
    /**
     * Clear info about process of setting Delivery Mode
     */
    resetSetDeliveryModeProcess(): void;
    /**
     * Clear info about process of setting Supported Delivery Modes
     */
    resetLoadSupportedDeliveryModesProcess(): void;
    /**
     * Get status about of set supported Delivery Modes process
     */
    getLoadSupportedDeliveryModeProcess(): Observable<LoaderState<void>>;
    /**
     * Clear supported delivery modes loaded in last checkout process
     */
    clearCheckoutDeliveryModes(): void;
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
    /**
     * Clear address already setup in last checkout process
     */
    clearCheckoutDeliveryAddress(): void;
    /**
     * Clear selected delivery mode setup in last checkout process
     */
    clearCheckoutDeliveryMode(): void;
    /**
     * Clear address and delivery mode already setup in last checkout process
     */
    clearCheckoutDeliveryDetails(): void;
    protected actionAllowed(): boolean;
}
