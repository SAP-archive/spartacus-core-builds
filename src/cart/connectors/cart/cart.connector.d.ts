import { Observable } from 'rxjs';
import { Cart } from '../../../model/cart.model';
import { CartAdapter } from './cart.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class CartConnector {
    protected adapter: CartAdapter;
    constructor(adapter: CartAdapter);
    loadAll(userId: string): Observable<Cart[]>;
    load(userId: string, cartId: string): Observable<Cart>;
    create(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<Cart>;
    delete(userId: string, cartId: string): Observable<{}>;
    addEmail(userId: string, cartId: string, email: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartConnector, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsiY2FydC5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENhcnRBZGFwdGVyIH0gZnJvbSAnLi9jYXJ0LmFkYXB0ZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydENvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IENhcnRBZGFwdGVyO1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IENhcnRBZGFwdGVyKTtcbiAgICBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0W10+O1xuICAgIGxvYWQodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBjcmVhdGUodXNlcklkOiBzdHJpbmcsIG9sZENhcnRJZD86IHN0cmluZywgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBkZWxldGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgYWRkRW1haWwodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG59XG4iXX0=