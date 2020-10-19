import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { PaymentType } from '../../model/cart.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithCheckout } from '../store/checkout-state';
export declare class PaymentTypeService {
    protected checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>;
    protected authService: AuthService;
    protected activeCartService: ActiveCartService;
    constructor(checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>, authService: AuthService, activeCartService: ActiveCartService);
    /**
     * Get payment types
     */
    getPaymentTypes(): Observable<PaymentType[]>;
    /**
     * Load the supported payment types
     */
    loadPaymentTypes(): void;
    /**
     * Set payment type to cart
     * @param typeCode
     * @param poNumber : purchase order number
     */
    setPaymentType(typeCode: string, poNumber?: string): void;
    /**
     * Get the selected payment type
     */
    getSelectedPaymentType(): Observable<string>;
    /**
     * Get whether the selected payment type is "ACCOUNT" payment
     */
    isAccountPayment(): Observable<boolean>;
    /**
     * Get PO Number
     */
    getPoNumber(): Observable<string>;
}
