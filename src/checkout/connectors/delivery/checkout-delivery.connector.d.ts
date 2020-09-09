import { Observable } from 'rxjs';
import { CheckoutDeliveryAdapter } from './checkout-delivery.adapter';
import { Address } from '../../../model/address.model';
import { DeliveryMode } from '../../../model/order.model';
export declare class CheckoutDeliveryConnector {
    protected adapter: CheckoutDeliveryAdapter;
    constructor(adapter: CheckoutDeliveryAdapter);
    createAddress(userId: string, cartId: string, address: Address): Observable<Address>;
    setAddress(userId: string, cartId: string, addressId: string): Observable<any>;
    setMode(userId: string, cartId: string, deliveryModeId: string): Observable<any>;
    getMode(userId: string, cartId: string): Observable<DeliveryMode>;
    getSupportedModes(userId: string, cartId: string): Observable<DeliveryMode[]>;
}
