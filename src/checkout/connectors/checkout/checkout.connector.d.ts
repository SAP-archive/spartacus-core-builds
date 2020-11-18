import { Observable } from 'rxjs';
import { Order } from '../../../model/order.model';
import { CheckoutDetails } from '../../models/checkout.model';
import { CheckoutAdapter } from './checkout.adapter';
export declare class CheckoutConnector {
    protected adapter: CheckoutAdapter;
    constructor(adapter: CheckoutAdapter);
    placeOrder(userId: string, cartId: string, termsChecked: boolean): Observable<Order>;
    loadCheckoutDetails(userId: string, cartId: string): Observable<CheckoutDetails>;
    clearCheckoutDeliveryAddress(userId: string, cartId: string): Observable<any>;
    clearCheckoutDeliveryMode(userId: string, cartId: string): Observable<any>;
}
