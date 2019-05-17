import { Observable } from 'rxjs';
import { CartAdapter } from './cart.adapter';
import { CheckoutDetails } from '../../../checkout/models/checkout.model';
import { Cart } from '../../../model/cart.model';
export declare class CartConnector {
    protected adapter: CartAdapter;
    constructor(adapter: CartAdapter);
    loadAll(userId: string, details?: boolean): Observable<Cart[]>;
    load(userId: string, cartId: string, details?: boolean): Observable<Cart>;
    loadCheckoutDetails(userId: string, cartId: string): Observable<CheckoutDetails>;
    create(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<Cart>;
}
