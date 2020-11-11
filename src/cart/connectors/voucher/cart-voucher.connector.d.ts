import { Observable } from 'rxjs';
import { CartVoucherAdapter } from './cart-voucher.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class CartVoucherConnector {
    protected adapter: CartVoucherAdapter;
    constructor(adapter: CartVoucherAdapter);
    add(userId: string, cartId: string, voucherId: string): Observable<{}>;
    remove(userId: string, cartId: string, voucherId: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartVoucherConnector, never>;
}

//# sourceMappingURL=cart-voucher.connector.d.ts.map