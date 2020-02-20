import { Observable } from 'rxjs';
import { CartEntryAdapter } from './cart-entry.adapter';
import { CartModification } from '../../../model/cart.model';
import * as ɵngcc0 from '@angular/core';
export declare class CartEntryConnector {
    protected adapter: CartEntryAdapter;
    constructor(adapter: CartEntryAdapter);
    add(userId: string, cartId: string, productCode: string, quantity?: number): Observable<CartModification>;
    update(userId: string, cartId: string, entryNumber: string, qty: number, pickupStore?: string): Observable<CartModification>;
    remove(userId: string, cartId: string, entryNumber: string): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartEntryConnector>;
}

//# sourceMappingURL=cart-entry.connector.d.ts.map