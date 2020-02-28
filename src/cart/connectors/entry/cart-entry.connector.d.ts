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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsiY2FydC1lbnRyeS5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7O0FBTUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydEVudHJ5QWRhcHRlciB9IGZyb20gJy4vY2FydC1lbnRyeS5hZGFwdGVyJztcbmltcG9ydCB7IENhcnRNb2RpZmljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRFbnRyeUNvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IENhcnRFbnRyeUFkYXB0ZXI7XG4gICAgY29uc3RydWN0b3IoYWRhcHRlcjogQ2FydEVudHJ5QWRhcHRlcik7XG4gICAgYWRkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgcHJvZHVjdENvZGU6IHN0cmluZywgcXVhbnRpdHk/OiBudW1iZXIpOiBPYnNlcnZhYmxlPENhcnRNb2RpZmljYXRpb24+O1xuICAgIHVwZGF0ZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGVudHJ5TnVtYmVyOiBzdHJpbmcsIHF0eTogbnVtYmVyLCBwaWNrdXBTdG9yZT86IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydE1vZGlmaWNhdGlvbj47XG4gICAgcmVtb3ZlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgZW50cnlOdW1iZXI6IHN0cmluZyk6IE9ic2VydmFibGU8YW55Pjtcbn1cbiJdfQ==