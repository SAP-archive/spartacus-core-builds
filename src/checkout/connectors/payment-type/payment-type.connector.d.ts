import { Observable } from 'rxjs';
import { PaymentTypeAdapter } from './payment-type.adapter';
import { PaymentType } from '../../../model/cart.model';
export declare class PaymentTypeConnector {
    protected adapter: PaymentTypeAdapter;
    constructor(adapter: PaymentTypeAdapter);
    getPaymentTypes(): Observable<PaymentType[]>;
    setPaymentType(userId: string, cartId: string, typeCode: string, poNumber?: string): Observable<any>;
}
