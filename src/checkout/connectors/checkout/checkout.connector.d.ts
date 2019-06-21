import { Observable } from 'rxjs';
import { CheckoutAdapter } from './checkout.adapter';
import { Order } from '../../../model/order.model';
import { CheckoutDetails } from '../../models/checkout.model';
export declare class CheckoutConnector {
    protected adapter: CheckoutAdapter;
    constructor(adapter: CheckoutAdapter);
    placeOrder(userId: string, cartId: string): Observable<Order>;
    loadCheckoutDetails(userId: string, cartId: string): Observable<CheckoutDetails>;
}
