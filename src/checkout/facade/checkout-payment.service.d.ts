import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { CardType, PaymentDetails } from '../../model/cart.model';
import { StateWithProcess } from '../../process/store/process-state';
import { LoaderState } from '../../state/utils/loader/loader-state';
import { StateWithCheckout } from '../store/checkout-state';
import * as ɵngcc0 from '@angular/core';
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
    /**
     * Sets payment loading to true without having the flicker issue (GH-3102)
     */
    paymentProcessSuccess(): void;
    protected actionAllowed(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutPaymentService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LXBheW1lbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FyZFR5cGUsIFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDaGVja291dCB9IGZyb20gJy4uL3N0b3JlL2NoZWNrb3V0LXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoZWNrb3V0UGF5bWVudFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dCB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+O1xuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEdldCBjYXJkIHR5cGVzXG4gICAgICovXG4gICAgZ2V0Q2FyZFR5cGVzKCk6IE9ic2VydmFibGU8Q2FyZFR5cGVbXT47XG4gICAgLyoqXG4gICAgICogR2V0IHBheW1lbnQgZGV0YWlsc1xuICAgICAqL1xuICAgIGdldFBheW1lbnREZXRhaWxzKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+O1xuICAgIC8qKlxuICAgICAqIEdldCBzdGF0dXMgYWJvdXQgc2V0IFBheW1lbnQgRGV0YWlscyBwcm9jZXNzXG4gICAgICovXG4gICAgZ2V0U2V0UGF5bWVudERldGFpbHNSZXN1bHRQcm9jZXNzKCk6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+O1xuICAgIC8qKlxuICAgICAqIENsZWFyIGluZm8gYWJvdXQgcHJvY2VzcyBvZiBzZXR0aW5nIFBheW1lbnQgRGV0YWlsc1xuICAgICAqL1xuICAgIHJlc2V0U2V0UGF5bWVudERldGFpbHNQcm9jZXNzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTG9hZCB0aGUgc3VwcG9ydGVkIGNhcmQgdHlwZXNcbiAgICAgKi9cbiAgICBsb2FkU3VwcG9ydGVkQ2FyZFR5cGVzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHBheW1lbnQgZGV0YWlscyB1c2luZyB0aGUgZ2l2ZW4gcGF5bWVudERldGFpbHMgcGFyYW1cbiAgICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHM6IHRoZSBQYXltZW50RGV0YWlscyB0byBiZSBjcmVhdGVkXG4gICAgICovXG4gICAgY3JlYXRlUGF5bWVudERldGFpbHMocGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTZXQgcGF5bWVudCBkZXRhaWxzXG4gICAgICogQHBhcmFtIHBheW1lbnREZXRhaWxzIDogdGhlIFBheW1lbnREZXRhaWxzIHRvIGJlIHNldFxuICAgICAqL1xuICAgIHNldFBheW1lbnREZXRhaWxzKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0cyBwYXltZW50IGxvYWRpbmcgdG8gdHJ1ZSB3aXRob3V0IGhhdmluZyB0aGUgZmxpY2tlciBpc3N1ZSAoR0gtMzEwMilcbiAgICAgKi9cbiAgICBwYXltZW50UHJvY2Vzc1N1Y2Nlc3MoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuO1xufVxuIl19