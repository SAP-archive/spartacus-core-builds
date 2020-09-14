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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserPaymentConnector, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJ1c2VyLXBheW1lbnQuY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlclBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi91c2VyLXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlclBheW1lbnRDb25uZWN0b3Ige1xuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBVc2VyUGF5bWVudEFkYXB0ZXI7XG4gICAgY29uc3RydWN0b3IoYWRhcHRlcjogVXNlclBheW1lbnRBZGFwdGVyKTtcbiAgICBnZXRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICAgIGRlbGV0ZSh1c2VySWQ6IHN0cmluZywgcGF5bWVudE1ldGhvZElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICBzZXREZWZhdWx0KHVzZXJJZDogc3RyaW5nLCBwYXltZW50TWV0aG9kSUQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xufVxuIl19