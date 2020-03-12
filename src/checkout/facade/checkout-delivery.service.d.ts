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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjaGVja291dC1kZWxpdmVyeS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBBZGRyZXNzVmFsaWRhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlIH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2hlY2tvdXQgfSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGVja291dERlbGl2ZXJ5U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBHZXQgc3VwcG9ydGVkIGRlbGl2ZXJ5IG1vZGVzXG4gICAgICovXG4gICAgZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZVtdPjtcbiAgICAvKipcbiAgICAgKiBHZXQgc2VsZWN0ZWQgZGVsaXZlcnkgbW9kZVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlKCk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPjtcbiAgICAvKipcbiAgICAgKiBHZXQgc2VsZWN0ZWQgZGVsaXZlcnkgbW9kZSBjb2RlXG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBHZXQgZGVsaXZlcnkgYWRkcmVzc1xuICAgICAqL1xuICAgIGdldERlbGl2ZXJ5QWRkcmVzcygpOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICAgIC8qKlxuICAgICAqIEdldCBzdGF0dXMgYWJvdXQgc3VjY2Vzc2Z1bGx5IHNldCBEZWxpdmVyeSBBZGRyZXNzXG4gICAgICovXG4gICAgZ2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2VzcygpOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPHZvaWQ+PjtcbiAgICAvKipcbiAgICAgKiBDbGVhciBpbmZvIGFib3V0IHByb2Nlc3Mgb2Ygc2V0dGluZyBEZWxpdmVyeSBBZGRyZXNzXG4gICAgICovXG4gICAgcmVzZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IHN0YXR1cyBhYm91dCBvZiBzZXQgRGVsaXZlcnkgTW9kZSBwcm9jZXNzXG4gICAgICovXG4gICAgZ2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcygpOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPHZvaWQ+PjtcbiAgICAvKipcbiAgICAgKiBDbGVhciBpbmZvIGFib3V0IHByb2Nlc3Mgb2Ygc2V0dGluZyBEZWxpdmVyeSBNb2RlXG4gICAgICovXG4gICAgcmVzZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXIgaW5mbyBhYm91dCBwcm9jZXNzIG9mIHNldHRpbmcgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzXG4gICAgICovXG4gICAgcmVzZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1Byb2Nlc3MoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgc3RhdHVzIGFib3V0IG9mIHNldCBzdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgcHJvY2Vzc1xuICAgICAqL1xuICAgIGdldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVQcm9jZXNzKCk6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+O1xuICAgIC8qKlxuICAgICAqIENsZWFyIHN1cHBvcnRlZCBkZWxpdmVyeSBtb2RlcyBsb2FkZWQgaW4gbGFzdCBjaGVja291dCBwcm9jZXNzXG4gICAgICovXG4gICAgY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgYWRkcmVzcyB2ZXJpZmljYXRpb24gcmVzdWx0c1xuICAgICAqL1xuICAgIGdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk6IE9ic2VydmFibGU8QWRkcmVzc1ZhbGlkYXRpb24gfCBzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgc2V0IGEgZGVsaXZlcnkgYWRkcmVzcyB1c2luZyB0aGUgYWRkcmVzcyBwYXJhbVxuICAgICAqIEBwYXJhbSBhZGRyZXNzIDogdGhlIEFkZHJlc3MgdG8gYmUgY3JlYXRlZCBhbmQgc2V0XG4gICAgICovXG4gICAgY3JlYXRlQW5kU2V0QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBMb2FkIHN1cHBvcnRlZCBkZWxpdmVyeSBtb2Rlc1xuICAgICAqL1xuICAgIGxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0IGRlbGl2ZXJ5IG1vZGVcbiAgICAgKiBAcGFyYW0gbW9kZSA6IFRoZSBkZWxpdmVyeSBtb2RlIHRvIGJlIHNldFxuICAgICAqL1xuICAgIHNldERlbGl2ZXJ5TW9kZShtb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFZlcmlmaWVzIHRoZSBhZGRyZXNzXG4gICAgICogQHBhcmFtIGFkZHJlc3MgOiB0aGUgYWRkcmVzcyB0byBiZSB2ZXJpZmllZFxuICAgICAqL1xuICAgIHZlcmlmeUFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0IGRlbGl2ZXJ5IGFkZHJlc3NcbiAgICAgKiBAcGFyYW0gYWRkcmVzcyA6IFRoZSBhZGRyZXNzIHRvIGJlIHNldFxuICAgICAqL1xuICAgIHNldERlbGl2ZXJ5QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbGVhciBhZGRyZXNzIHZlcmlmaWNhdGlvbiByZXN1bHRzXG4gICAgICovXG4gICAgY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFyIGFkZHJlc3MgYWxyZWFkeSBzZXR1cCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICAgKi9cbiAgICBjbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXIgc2VsZWN0ZWQgZGVsaXZlcnkgbW9kZSBzZXR1cCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICAgKi9cbiAgICBjbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXIgYWRkcmVzcyBhbmQgZGVsaXZlcnkgbW9kZSBhbHJlYWR5IHNldHVwIGluIGxhc3QgY2hlY2tvdXQgcHJvY2Vzc1xuICAgICAqL1xuICAgIGNsZWFyQ2hlY2tvdXREZWxpdmVyeURldGFpbHMoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuO1xufVxuIl19