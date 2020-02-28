import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { Address, AddressValidation } from '../../model/address.model';
import { DeliveryMode } from '../../model/order.model';
import { StateWithProcess } from '../../process/store/process-state';
import { LoaderState } from '../../state/utils/loader/loader-state';
import { StateWithCheckout } from '../store/checkout-state';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutDeliveryService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjaGVja291dC1kZWxpdmVyeS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1ZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aENoZWNrb3V0IH0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dCB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+O1xuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEdldCBzdXBwb3J0ZWQgZGVsaXZlcnkgbW9kZXNcbiAgICAgKi9cbiAgICBnZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlW10+O1xuICAgIC8qKlxuICAgICAqIEdldCBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlXG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUoKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+O1xuICAgIC8qKlxuICAgICAqIEdldCBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlIGNvZGVcbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIEdldCBkZWxpdmVyeSBhZGRyZXNzXG4gICAgICovXG4gICAgZ2V0RGVsaXZlcnlBZGRyZXNzKCk6IE9ic2VydmFibGU8QWRkcmVzcz47XG4gICAgLyoqXG4gICAgICogR2V0IHN0YXR1cyBhYm91dCBzdWNjZXNzZnVsbHkgc2V0IERlbGl2ZXJ5IEFkZHJlc3NcbiAgICAgKi9cbiAgICBnZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKCk6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+O1xuICAgIC8qKlxuICAgICAqIENsZWFyIGluZm8gYWJvdXQgcHJvY2VzcyBvZiBzZXR0aW5nIERlbGl2ZXJ5IEFkZHJlc3NcbiAgICAgKi9cbiAgICByZXNldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgc3RhdHVzIGFib3V0IG9mIHNldCBEZWxpdmVyeSBNb2RlIHByb2Nlc3NcbiAgICAgKi9cbiAgICBnZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzKCk6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+O1xuICAgIC8qKlxuICAgICAqIENsZWFyIGluZm8gYWJvdXQgcHJvY2VzcyBvZiBzZXR0aW5nIERlbGl2ZXJ5IE1vZGVcbiAgICAgKi9cbiAgICByZXNldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbGVhciBpbmZvIGFib3V0IHByb2Nlc3Mgb2Ygc2V0dGluZyBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXNcbiAgICAgKi9cbiAgICByZXNldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzUHJvY2VzcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCBzdGF0dXMgYWJvdXQgb2Ygc2V0IHN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBwcm9jZXNzXG4gICAgICovXG4gICAgZ2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZVByb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj47XG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3VwcG9ydGVkIGRlbGl2ZXJ5IG1vZGVzIGxvYWRlZCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICAgKi9cbiAgICBjbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCBhZGRyZXNzIHZlcmlmaWNhdGlvbiByZXN1bHRzXG4gICAgICovXG4gICAgZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzVmFsaWRhdGlvbiB8IHN0cmluZz47XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCBzZXQgYSBkZWxpdmVyeSBhZGRyZXNzIHVzaW5nIHRoZSBhZGRyZXNzIHBhcmFtXG4gICAgICogQHBhcmFtIGFkZHJlc3MgOiB0aGUgQWRkcmVzcyB0byBiZSBjcmVhdGVkIGFuZCBzZXRcbiAgICAgKi9cbiAgICBjcmVhdGVBbmRTZXRBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIExvYWQgc3VwcG9ydGVkIGRlbGl2ZXJ5IG1vZGVzXG4gICAgICovXG4gICAgbG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTZXQgZGVsaXZlcnkgbW9kZVxuICAgICAqIEBwYXJhbSBtb2RlIDogVGhlIGRlbGl2ZXJ5IG1vZGUgdG8gYmUgc2V0XG4gICAgICovXG4gICAgc2V0RGVsaXZlcnlNb2RlKG1vZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVmVyaWZpZXMgdGhlIGFkZHJlc3NcbiAgICAgKiBAcGFyYW0gYWRkcmVzcyA6IHRoZSBhZGRyZXNzIHRvIGJlIHZlcmlmaWVkXG4gICAgICovXG4gICAgdmVyaWZ5QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTZXQgZGVsaXZlcnkgYWRkcmVzc1xuICAgICAqIEBwYXJhbSBhZGRyZXNzIDogVGhlIGFkZHJlc3MgdG8gYmUgc2V0XG4gICAgICovXG4gICAgc2V0RGVsaXZlcnlBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFyIGFkZHJlc3MgdmVyaWZpY2F0aW9uIHJlc3VsdHNcbiAgICAgKi9cbiAgICBjbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXIgYWRkcmVzcyBhbHJlYWR5IHNldHVwIGluIGxhc3QgY2hlY2tvdXQgcHJvY2Vzc1xuICAgICAqL1xuICAgIGNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbGVhciBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlIHNldHVwIGluIGxhc3QgY2hlY2tvdXQgcHJvY2Vzc1xuICAgICAqL1xuICAgIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbGVhciBhZGRyZXNzIGFuZCBkZWxpdmVyeSBtb2RlIGFscmVhZHkgc2V0dXAgaW4gbGFzdCBjaGVja291dCBwcm9jZXNzXG4gICAgICovXG4gICAgY2xlYXJDaGVja291dERlbGl2ZXJ5RGV0YWlscygpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBhY3Rpb25BbGxvd2VkKCk6IGJvb2xlYW47XG59XG4iXX0=