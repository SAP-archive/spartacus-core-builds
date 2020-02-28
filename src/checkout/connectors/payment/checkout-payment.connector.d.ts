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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsiY2hlY2tvdXQtcGF5bWVudC5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7O0FBTUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQYXltZW50QWRhcHRlciB9IGZyb20gJy4vY2hlY2tvdXQtcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IENhcmRUeXBlLCBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hlY2tvdXRQYXltZW50Q29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogQ2hlY2tvdXRQYXltZW50QWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBDaGVja291dFBheW1lbnRBZGFwdGVyKTtcbiAgICBjcmVhdGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPjtcbiAgICBzZXQodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBwYXltZW50RGV0YWlsc0lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZ2V0Q2FyZFR5cGVzKCk6IE9ic2VydmFibGU8Q2FyZFR5cGVbXT47XG59XG4iXX0=