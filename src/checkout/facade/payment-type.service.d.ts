import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { PaymentType } from '../../model/cart.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithCheckout } from '../store/checkout-state';
import * as ɵngcc0 from '@angular/core';
export declare class PaymentTypeService {
    protected checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>;
    protected activeCartService: ActiveCartService;
    protected userIdService: UserIdService;
    constructor(checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>, activeCartService: ActiveCartService, userIdService: UserIdService);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaymentTypeService, never>;
}

//# sourceMappingURL=payment-type.service.d.ts.map