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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartConnector>;
}

//# sourceMappingURL=cart.connector.d.ts.map