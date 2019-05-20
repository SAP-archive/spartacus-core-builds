import { Observable } from 'rxjs';
import { CartPaymentAdapter } from './cart-payment.adapter';
import { CardType, PaymentDetails } from '../../../model/cart.model';
export declare class CartPaymentConnector {
    protected adapter: CartPaymentAdapter;
    constructor(adapter: CartPaymentAdapter);
    create(userId: string, cartId: string, paymentDetails: PaymentDetails): Observable<PaymentDetails>;
    set(userId: string, cartId: string, paymentDetailsId: string): Observable<any>;
    getCardTypes(): Observable<CardType[]>;
}
