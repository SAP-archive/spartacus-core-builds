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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuY29ubmVjdG9yLmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbm5lY3Rvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7OztBQU9BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoZWNrb3V0QWRhcHRlciB9IGZyb20gJy4vY2hlY2tvdXQuYWRhcHRlcic7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVscy9jaGVja291dC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGVja291dENvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IENoZWNrb3V0QWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBDaGVja291dEFkYXB0ZXIpO1xuICAgIHBsYWNlT3JkZXIodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj47XG4gICAgbG9hZENoZWNrb3V0RGV0YWlscyh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENoZWNrb3V0RGV0YWlscz47XG4gICAgY2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcyh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG59XG4iXX0=