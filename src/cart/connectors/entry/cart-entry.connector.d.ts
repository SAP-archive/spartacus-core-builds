import { Observable } from 'rxjs';
import { CartModification } from '../../../occ/occ-models/occ.models';
import { CartEntryAdapter } from './cart-entry.adapter';
export declare class CartEntryConnector {
    private adapter;
    constructor(adapter: CartEntryAdapter);
    add(userId: string, cartId: string, productCode: string, quantity?: number): Observable<CartModification>;
    update(userId: string, cartId: string, entryNumber: string, qty: number, pickupStore?: string): Observable<CartModification>;
    remove(userId: string, cartId: string, entryNumber: string): Observable<any>;
}
