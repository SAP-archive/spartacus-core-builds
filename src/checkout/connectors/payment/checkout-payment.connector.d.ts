import { Observable } from 'rxjs';
import { CheckoutPaymentAdapter } from './checkout-payment.adapter';
import { CardType, PaymentDetails } from '../../../model/cart.model';
export declare class CheckoutPaymentConnector {
    protected adapter: CheckoutPaymentAdapter;
    constructor(adapter: CheckoutPaymentAdapter);
    create(userId: string, cartId: string, paymentDetails: PaymentDetails): Observable<PaymentDetails>;
    set(userId: string, cartId: string, paymentDetailsId: string): Observable<any>;
    getCardTypes(): Observable<CardType[]>;
}
