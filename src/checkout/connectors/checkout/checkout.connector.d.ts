import { Observable } from 'rxjs';
import { CheckoutAdapter } from './checkout.adapter';
import { Order } from '../../../model/order.model';
import { CheckoutDetails } from '../../models/checkout.model';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutConnector {
    protected adapter: CheckoutAdapter;
    constructor(adapter: CheckoutAdapter);
    placeOrder(userId: string, cartId: string): Observable<Order>;
    loadCheckoutDetails(userId: string, cartId: string): Observable<CheckoutDetails>;
    clearCheckoutDeliveryAddress(userId: string, cartId: string): Observable<any>;
    clearCheckoutDeliveryMode(userId: string, cartId: string): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuY29ubmVjdG9yLmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbm5lY3Rvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBZGFwdGVyIH0gZnJvbSAnLi9jaGVja291dC5hZGFwdGVyJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NoZWNrb3V0Lm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoZWNrb3V0Q29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogQ2hlY2tvdXRBZGFwdGVyO1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IENoZWNrb3V0QWRhcHRlcik7XG4gICAgcGxhY2VPcmRlcih1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPjtcbiAgICBsb2FkQ2hlY2tvdXREZXRhaWxzKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2hlY2tvdXREZXRhaWxzPjtcbiAgICBjbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PjtcbiAgICBjbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55Pjtcbn1cbiJdfQ==