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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutPaymentConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsiY2hlY2tvdXQtcGF5bWVudC5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dFBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi9jaGVja291dC1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FyZFR5cGUsIFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGVja291dFBheW1lbnRDb25uZWN0b3Ige1xuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBDaGVja291dFBheW1lbnRBZGFwdGVyO1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IENoZWNrb3V0UGF5bWVudEFkYXB0ZXIpO1xuICAgIGNyZWF0ZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+O1xuICAgIHNldCh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIHBheW1lbnREZXRhaWxzSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PjtcbiAgICBnZXRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPjtcbn1cbiJdfQ==