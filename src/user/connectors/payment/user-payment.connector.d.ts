import { UserPaymentAdapter } from './user-payment.adapter';
import { Observable } from 'rxjs';
import { PaymentDetails } from '../../../model/cart.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserPaymentConnector {
    protected adapter: UserPaymentAdapter;
    constructor(adapter: UserPaymentAdapter);
    getAll(userId: string): Observable<PaymentDetails[]>;
    delete(userId: string, paymentMethodID: string): Observable<{}>;
    setDefault(userId: string, paymentMethodID: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserPaymentConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJ1c2VyLXBheW1lbnQuY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7OztBQU1BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4vdXNlci1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJQYXltZW50Q29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogVXNlclBheW1lbnRBZGFwdGVyO1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IFVzZXJQYXltZW50QWRhcHRlcik7XG4gICAgZ2V0QWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgICBkZWxldGUodXNlcklkOiBzdHJpbmcsIHBheW1lbnRNZXRob2RJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgc2V0RGVmYXVsdCh1c2VySWQ6IHN0cmluZywgcGF5bWVudE1ldGhvZElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9Pjtcbn1cbiJdfQ==