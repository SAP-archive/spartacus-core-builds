import { Observable } from 'rxjs';
import { CartEntryAdapter } from './cart-entry.adapter';
import { CartModification } from '../../../model/cart.model';
export declare class CartEntryConnector {
    private adapter;
    constructor(adapter: CartEntryAdapter);
    add(userId: string, cartId: string, productCode: string, quantity?: number): Observable<CartModification>;
    update(userId: string, cartId: string, entryNumber: string, qty: number, pickupStore?: string): Observable<CartModification>;
    remove(userId: string, cartId: string, entryNumber: string): Observable<any>;
}
