import { Observable } from 'rxjs';
import { CheckoutAdapter } from './checkout.adapter';
import { Order } from '../../../model/order.model';
import { CheckoutDetails } from '../../models/checkout.model';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutConnector {
    protected adapter: CheckoutAdapter;
    constructor(adapter: CheckoutAdapter);
    placeOrder(userId: string, cartId: string): Observable<Order>;
    loadCheckoutDetails(userId: string, cartId: string): Observable<CheckoutDetails>;
    clearCheckoutDeliveryAddress(userId: string, cartId: string): Observable<any>;
    clearCheckoutDeliveryMode(userId: string, cartId: string): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutConnector>;
}

//# sourceMappingURL=checkout.connector.d.ts.map