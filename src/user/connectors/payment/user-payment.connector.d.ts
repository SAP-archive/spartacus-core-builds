import { UserPaymentAdapter } from './user-payment.adapter';
import { Observable } from 'rxjs';
import { PaymentDetails } from '../../../model/cart.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserPaymentConnector {
    protected adapter: UserPaymentAdapter;
    constructor(adapter: UserPaymentAdapter);
    getAll(userId: string): Observable<PaymentDetails[]>;
    delete(userId: string, paymentMethodID: string): Observable<{}>;
    setDefault(userId: string, paymentMethodID: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserPaymentConnector>;
}

//# sourceMappingURL=user-payment.connector.d.ts.map