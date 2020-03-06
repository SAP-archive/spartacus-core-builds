import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { CardType, PaymentDetails } from '../../model/cart.model';
import { StateWithProcess } from '../../process/store/process-state';
import { LoaderState } from '../../state/utils/loader/loader-state';
import { StateWithCheckout } from '../store/checkout-state';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutPaymentService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LXBheW1lbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2NhcnQvZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FyZFR5cGUsIFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDaGVja291dCB9IGZyb20gJy4uL3N0b3JlL2NoZWNrb3V0LXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoZWNrb3V0UGF5bWVudFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dCB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dCB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSk7XG4gICAgLyoqXG4gICAgICogR2V0IGNhcmQgdHlwZXNcbiAgICAgKi9cbiAgICBnZXRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPjtcbiAgICAvKipcbiAgICAgKiBHZXQgcGF5bWVudCBkZXRhaWxzXG4gICAgICovXG4gICAgZ2V0UGF5bWVudERldGFpbHMoKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz47XG4gICAgLyoqXG4gICAgICogR2V0IHN0YXR1cyBhYm91dCBzZXQgUGF5bWVudCBEZXRhaWxzIHByb2Nlc3NcbiAgICAgKi9cbiAgICBnZXRTZXRQYXltZW50RGV0YWlsc1Jlc3VsdFByb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj47XG4gICAgLyoqXG4gICAgICogQ2xlYXIgaW5mbyBhYm91dCBwcm9jZXNzIG9mIHNldHRpbmcgUGF5bWVudCBEZXRhaWxzXG4gICAgICovXG4gICAgcmVzZXRTZXRQYXltZW50RGV0YWlsc1Byb2Nlc3MoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBMb2FkIHRoZSBzdXBwb3J0ZWQgY2FyZCB0eXBlc1xuICAgICAqL1xuICAgIGxvYWRTdXBwb3J0ZWRDYXJkVHlwZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcGF5bWVudCBkZXRhaWxzIHVzaW5nIHRoZSBnaXZlbiBwYXltZW50RGV0YWlscyBwYXJhbVxuICAgICAqIEBwYXJhbSBwYXltZW50RGV0YWlsczogdGhlIFBheW1lbnREZXRhaWxzIHRvIGJlIGNyZWF0ZWRcbiAgICAgKi9cbiAgICBjcmVhdGVQYXltZW50RGV0YWlscyhwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldCBwYXltZW50IGRldGFpbHNcbiAgICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHMgOiB0aGUgUGF5bWVudERldGFpbHMgdG8gYmUgc2V0XG4gICAgICovXG4gICAgc2V0UGF5bWVudERldGFpbHMocGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTZXRzIHBheW1lbnQgbG9hZGluZyB0byB0cnVlIHdpdGhvdXQgaGF2aW5nIHRoZSBmbGlja2VyIGlzc3VlIChHSC0zMTAyKVxuICAgICAqL1xuICAgIHBheW1lbnRQcm9jZXNzU3VjY2VzcygpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBhY3Rpb25BbGxvd2VkKCk6IGJvb2xlYW47XG59XG4iXX0=