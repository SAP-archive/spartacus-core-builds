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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuY29ubmVjdG9yLmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LWRlbGl2ZXJ5LmNvbm5lY3Rvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7QUFRQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dERlbGl2ZXJ5QWRhcHRlciB9IGZyb20gJy4vY2hlY2tvdXQtZGVsaXZlcnkuYWRhcHRlcic7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXI7XG4gICAgY29uc3RydWN0b3IoYWRhcHRlcjogQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIpO1xuICAgIGNyZWF0ZUFkZHJlc3ModXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgICBzZXRBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgYWRkcmVzc0lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgc2V0TW9kZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGRlbGl2ZXJ5TW9kZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZ2V0TW9kZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT47XG4gICAgZ2V0U3VwcG9ydGVkTW9kZXModXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT47XG59XG4iXX0=