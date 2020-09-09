import { Observable } from 'rxjs';
import { CartVoucherAdapter } from './cart-voucher.adapter';
export declare class CartVoucherConnector {
    protected adapter: CartVoucherAdapter;
    constructor(adapter: CartVoucherAdapter);
    add(userId: string, cartId: string, voucherId: string): Observable<{}>;
    remove(userId: string, cartId: string, voucherId: string): Observable<{}>;
}
