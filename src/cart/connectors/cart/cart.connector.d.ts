import { Observable } from 'rxjs';
import { Cart } from '../../../occ/occ-models/occ.models';
import { CartAdapter } from './cart.adapter';
export declare class CartConnector {
    private adapter;
    constructor(adapter: CartAdapter);
    loadAll(userId: string, details?: boolean): Observable<Cart[]>;
    load(userId: string, cartId: string, details?: boolean): Observable<Cart>;
    create(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<Cart>;
}
