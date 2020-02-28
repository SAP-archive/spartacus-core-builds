import { Observable } from 'rxjs';
import { CartVoucherAdapter } from './cart-voucher.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class CartVoucherConnector {
    protected adapter: CartVoucherAdapter;
    constructor(adapter: CartVoucherAdapter);
    add(userId: string, cartId: string, voucherId: string): Observable<{}>;
    remove(userId: string, cartId: string, voucherId: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartVoucherConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJjYXJ0LXZvdWNoZXIuY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0Vm91Y2hlckFkYXB0ZXIgfSBmcm9tICcuL2NhcnQtdm91Y2hlci5hZGFwdGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRWb3VjaGVyQ29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogQ2FydFZvdWNoZXJBZGFwdGVyO1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IENhcnRWb3VjaGVyQWRhcHRlcik7XG4gICAgYWRkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgdm91Y2hlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICByZW1vdmUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCB2b3VjaGVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xufVxuIl19