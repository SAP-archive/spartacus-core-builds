import { Observable } from 'rxjs';
import { Address, DeliveryMode } from '../../../occ/occ-models/occ.models';
import { CartDeliveryAdapter } from './cart-delivery.adapter';
export declare class CartDeliveryConnector {
    private adapter;
    constructor(adapter: CartDeliveryAdapter);
    createAddress(userId: string, cartId: string, address: Address): Observable<Address>;
    setAddress(userId: string, cartId: string, addressId: string): Observable<any>;
    setMode(userId: string, cartId: string, deliveryModeId: string): Observable<any>;
    getMode(userId: string, cartId: string): Observable<DeliveryMode>;
    getSupportedModes(userId: string, cartId: string): Observable<DeliveryMode[]>;
}
