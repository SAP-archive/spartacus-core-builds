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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartEntryConnector, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsiY2FydC1lbnRyeS5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0RW50cnlBZGFwdGVyIH0gZnJvbSAnLi9jYXJ0LWVudHJ5LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FydE1vZGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydEVudHJ5Q29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogQ2FydEVudHJ5QWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBDYXJ0RW50cnlBZGFwdGVyKTtcbiAgICBhZGQodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eT86IG51bWJlcik6IE9ic2VydmFibGU8Q2FydE1vZGlmaWNhdGlvbj47XG4gICAgdXBkYXRlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgZW50cnlOdW1iZXI6IHN0cmluZywgcXR5OiBudW1iZXIsIHBpY2t1cFN0b3JlPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0TW9kaWZpY2F0aW9uPjtcbiAgICByZW1vdmUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBlbnRyeU51bWJlcjogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+O1xufVxuIl19