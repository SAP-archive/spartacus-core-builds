import { Observable } from 'rxjs';
import { CheckoutDeliveryAdapter } from './checkout-delivery.adapter';
import { Address } from '../../../model/address.model';
import { DeliveryMode } from '../../../model/order.model';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutDeliveryConnector {
    protected adapter: CheckoutDeliveryAdapter;
    constructor(adapter: CheckoutDeliveryAdapter);
    createAddress(userId: string, cartId: string, address: Address): Observable<Address>;
    setAddress(userId: string, cartId: string, addressId: string): Observable<any>;
    setMode(userId: string, cartId: string, deliveryModeId: string): Observable<any>;
    getMode(userId: string, cartId: string): Observable<DeliveryMode>;
    getSupportedModes(userId: string, cartId: string): Observable<DeliveryMode[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutDeliveryConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuY29ubmVjdG9yLmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LWRlbGl2ZXJ5LmNvbm5lY3Rvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoZWNrb3V0RGVsaXZlcnlBZGFwdGVyIH0gZnJvbSAnLi9jaGVja291dC1kZWxpdmVyeS5hZGFwdGVyJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3Ige1xuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBDaGVja291dERlbGl2ZXJ5QWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBDaGVja291dERlbGl2ZXJ5QWRhcHRlcik7XG4gICAgY3JlYXRlQWRkcmVzcyh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICAgIHNldEFkZHJlc3ModXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBhZGRyZXNzSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PjtcbiAgICBzZXRNb2RlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgZGVsaXZlcnlNb2RlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PjtcbiAgICBnZXRNb2RlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPjtcbiAgICBnZXRTdXBwb3J0ZWRNb2Rlcyh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZVtdPjtcbn1cbiJdfQ==