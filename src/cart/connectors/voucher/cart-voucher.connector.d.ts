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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJjYXJ0LXZvdWNoZXIuY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRWb3VjaGVyQWRhcHRlciB9IGZyb20gJy4vY2FydC12b3VjaGVyLmFkYXB0ZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydFZvdWNoZXJDb25uZWN0b3Ige1xuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBDYXJ0Vm91Y2hlckFkYXB0ZXI7XG4gICAgY29uc3RydWN0b3IoYWRhcHRlcjogQ2FydFZvdWNoZXJBZGFwdGVyKTtcbiAgICBhZGQodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCB2b3VjaGVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuICAgIHJlbW92ZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIHZvdWNoZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG59XG4iXX0=