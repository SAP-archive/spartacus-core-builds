import { Observable } from 'rxjs';
import { CartAdapter } from './cart.adapter';
import { UICart } from '../../model/cart';
export declare class CartConnector {
    private adapter;
    constructor(adapter: CartAdapter);
    loadAll(userId: string, details?: boolean): Observable<UICart[]>;
    load(userId: string, cartId: string, details?: boolean): Observable<UICart>;
    create(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<UICart>;
}
