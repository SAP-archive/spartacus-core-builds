import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { Address, AddressValidation } from '../../model/address.model';
import { DeliveryMode } from '../../model/order.model';
import { StateWithProcess } from '../../process/store/process-state';
import { LoaderState } from '../../state/utils/loader/loader-state';
import { StateWithCheckout } from '../store/checkout-state';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutDeliveryService {
    protected checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>;
    protected authService: AuthService;
    protected activeCartService: ActiveCartService;
    constructor(checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>, authService: AuthService, activeCartService: ActiveCartService);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjaGVja291dC1kZWxpdmVyeS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2NhcnQvZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1ZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aENoZWNrb3V0IH0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dCB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dCB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSk7XG4gICAgLyoqXG4gICAgICogR2V0IHN1cHBvcnRlZCBkZWxpdmVyeSBtb2Rlc1xuICAgICAqL1xuICAgIGdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT47XG4gICAgLyoqXG4gICAgICogR2V0IHNlbGVjdGVkIGRlbGl2ZXJ5IG1vZGVcbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT47XG4gICAgLyoqXG4gICAgICogR2V0IHNlbGVjdGVkIGRlbGl2ZXJ5IG1vZGUgY29kZVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogR2V0IGRlbGl2ZXJ5IGFkZHJlc3NcbiAgICAgKi9cbiAgICBnZXREZWxpdmVyeUFkZHJlc3MoKTogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgICAvKipcbiAgICAgKiBHZXQgc3RhdHVzIGFib3V0IHN1Y2Nlc3NmdWxseSBzZXQgRGVsaXZlcnkgQWRkcmVzc1xuICAgICAqL1xuICAgIGdldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj47XG4gICAgLyoqXG4gICAgICogQ2xlYXIgaW5mbyBhYm91dCBwcm9jZXNzIG9mIHNldHRpbmcgRGVsaXZlcnkgQWRkcmVzc1xuICAgICAqL1xuICAgIHJlc2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2VzcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCBzdGF0dXMgYWJvdXQgb2Ygc2V0IERlbGl2ZXJ5IE1vZGUgcHJvY2Vzc1xuICAgICAqL1xuICAgIGdldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj47XG4gICAgLyoqXG4gICAgICogQ2xlYXIgaW5mbyBhYm91dCBwcm9jZXNzIG9mIHNldHRpbmcgRGVsaXZlcnkgTW9kZVxuICAgICAqL1xuICAgIHJlc2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFyIGluZm8gYWJvdXQgcHJvY2VzcyBvZiBzZXR0aW5nIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2Rlc1xuICAgICAqL1xuICAgIHJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IHN0YXR1cyBhYm91dCBvZiBzZXQgc3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIHByb2Nlc3NcbiAgICAgKi9cbiAgICBnZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlUHJvY2VzcygpOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPHZvaWQ+PjtcbiAgICAvKipcbiAgICAgKiBDbGVhciBzdXBwb3J0ZWQgZGVsaXZlcnkgbW9kZXMgbG9hZGVkIGluIGxhc3QgY2hlY2tvdXQgcHJvY2Vzc1xuICAgICAqL1xuICAgIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IGFkZHJlc3MgdmVyaWZpY2F0aW9uIHJlc3VsdHNcbiAgICAgKi9cbiAgICBnZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpOiBPYnNlcnZhYmxlPEFkZHJlc3NWYWxpZGF0aW9uIHwgc3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIHNldCBhIGRlbGl2ZXJ5IGFkZHJlc3MgdXNpbmcgdGhlIGFkZHJlc3MgcGFyYW1cbiAgICAgKiBAcGFyYW0gYWRkcmVzcyA6IHRoZSBBZGRyZXNzIHRvIGJlIGNyZWF0ZWQgYW5kIHNldFxuICAgICAqL1xuICAgIGNyZWF0ZUFuZFNldEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTG9hZCBzdXBwb3J0ZWQgZGVsaXZlcnkgbW9kZXNcbiAgICAgKi9cbiAgICBsb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldCBkZWxpdmVyeSBtb2RlXG4gICAgICogQHBhcmFtIG1vZGUgOiBUaGUgZGVsaXZlcnkgbW9kZSB0byBiZSBzZXRcbiAgICAgKi9cbiAgICBzZXREZWxpdmVyeU1vZGUobW9kZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBWZXJpZmllcyB0aGUgYWRkcmVzc1xuICAgICAqIEBwYXJhbSBhZGRyZXNzIDogdGhlIGFkZHJlc3MgdG8gYmUgdmVyaWZpZWRcbiAgICAgKi9cbiAgICB2ZXJpZnlBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldCBkZWxpdmVyeSBhZGRyZXNzXG4gICAgICogQHBhcmFtIGFkZHJlc3MgOiBUaGUgYWRkcmVzcyB0byBiZSBzZXRcbiAgICAgKi9cbiAgICBzZXREZWxpdmVyeUFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXIgYWRkcmVzcyB2ZXJpZmljYXRpb24gcmVzdWx0c1xuICAgICAqL1xuICAgIGNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbGVhciBhZGRyZXNzIGFscmVhZHkgc2V0dXAgaW4gbGFzdCBjaGVja291dCBwcm9jZXNzXG4gICAgICovXG4gICAgY2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFyIHNlbGVjdGVkIGRlbGl2ZXJ5IG1vZGUgc2V0dXAgaW4gbGFzdCBjaGVja291dCBwcm9jZXNzXG4gICAgICovXG4gICAgY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFyIGFkZHJlc3MgYW5kIGRlbGl2ZXJ5IG1vZGUgYWxyZWFkeSBzZXR1cCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICAgKi9cbiAgICBjbGVhckNoZWNrb3V0RGVsaXZlcnlEZXRhaWxzKCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGFjdGlvbkFsbG93ZWQoKTogYm9vbGVhbjtcbn1cbiJdfQ==