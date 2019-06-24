import { Observable } from 'rxjs';
import { Cart } from '../../../model/cart.model';
import { CartAdapter } from './cart.adapter';
export declare class CartConnector {
    protected adapter: CartAdapter;
    constructor(adapter: CartAdapter);
    loadAll(userId: string): Observable<Cart[]>;
    load(userId: string, cartId: string): Observable<Cart>;
    create(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<Cart>;
}
