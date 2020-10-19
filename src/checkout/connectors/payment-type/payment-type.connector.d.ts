import { Observable } from 'rxjs';
import { PaymentTypeAdapter } from './payment-type.adapter';
import { PaymentType } from '../../../model/cart.model';
import * as ɵngcc0 from '@angular/core';
export declare class PaymentTypeConnector {
    protected adapter: PaymentTypeAdapter;
    constructor(adapter: PaymentTypeAdapter);
    getPaymentTypes(): Observable<PaymentType[]>;
    setPaymentType(userId: string, cartId: string, typeCode: string, poNumber?: string): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaymentTypeConnector, never>;
}

//# sourceMappingURL=payment-type.connector.d.ts.map