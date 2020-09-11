import { UserPaymentAdapter } from './user-payment.adapter';
import { Observable } from 'rxjs';
import { PaymentDetails } from '../../../model/cart.model';
export declare class UserPaymentConnector {
    protected adapter: UserPaymentAdapter;
    constructor(adapter: UserPaymentAdapter);
    getAll(userId: string): Observable<PaymentDetails[]>;
    delete(userId: string, paymentMethodID: string): Observable<{}>;
    setDefault(userId: string, paymentMethodID: string): Observable<{}>;
}
