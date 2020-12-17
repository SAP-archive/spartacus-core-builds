import { Observable } from 'rxjs';
import { CheckoutPaymentAdapter } from './checkout-payment.adapter';
import { CardType, PaymentDetails } from '../../../model/cart.model';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutPaymentConnector {
    protected adapter: CheckoutPaymentAdapter;
    constructor(adapter: CheckoutPaymentAdapter);
    create(userId: string, cartId: string, paymentDetails: PaymentDetails): Observable<PaymentDetails>;
    set(userId: string, cartId: string, paymentDetailsId: string): Observable<any>;
    getCardTypes(): Observable<CardType[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutPaymentConnector, never>;
}

//# sourceMappingURL=checkout-payment.connector.d.ts.map