import { Observable } from 'rxjs';
import { CartAdapter } from './cart.adapter';
import { Cart } from '../../../model/cart.model';
export declare class CartConnector {
    protected adapter: CartAdapter;
    constructor(adapter: CartAdapter);
    loadAll(userId: string, details?: boolean): Observable<Cart[]>;
    load(userId: string, cartId: string, details?: boolean): Observable<Cart>;
    create(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<Cart>;
}
