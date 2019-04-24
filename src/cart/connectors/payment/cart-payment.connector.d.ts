import { Observable } from 'rxjs';
import { PaymentDetails } from '../../../occ/occ-models/occ.models';
import { CartPaymentAdapter } from './cart-payment.adapter';
export declare class CartPaymentConnector {
    private adapter;
    constructor(adapter: CartPaymentAdapter);
    create(userId: string, cartId: string, paymentDetails: PaymentDetails): Observable<PaymentDetails>;
    set(userId: string, cartId: string, paymentDetailsId: string): Observable<any>;
}
