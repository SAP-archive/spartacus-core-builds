import { Observable } from 'rxjs';
import { CartList, Cart, CartModification, Address, DeliveryModeList, PaymentDetails } from '../../occ/occ-models/occ.models';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
export declare class OccCartService {
    protected http: HttpClient;
    private occEndpoints;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService);
    protected getCartEndpoint(userId: string): string;
    loadAllCarts(userId: string, details?: boolean): Observable<CartList>;
    loadCart(userId: string, cartId: string, details?: boolean): Observable<Cart>;
    createCart(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<Cart>;
    addEntry(userId: string, cartId: string, productCode: string, quantity?: number): Observable<CartModification>;
    updateEntry(userId: string, cartId: string, entryNumber: string, qty: number, pickupStore?: string): Observable<CartModification>;
    removeEntry(userId: string, cartId: string, entryNumber: string): Observable<any>;
    createAddressOnCart(userId: string, cartId: string, address: any): Observable<Address>;
    setDeliveryAddress(userId: string, cartId: string, addressId: string): Observable<any>;
    setDeliveryMode(userId: string, cartId: string, deliveryModeId: string): Observable<any>;
    getDeliveryMode(userId: string, cartId: string): Observable<any>;
    getSupportedDeliveryModes(userId: string, cartId: string): Observable<DeliveryModeList>;
    getPaymentProviderSubInfo(userId: string, cartId: string): Observable<any>;
    createSubWithPaymentProvider(postUrl: string, parameters: any): Observable<any>;
    createPaymentDetails(userId: string, cartId: string, parameters: any): Observable<PaymentDetails>;
    setPaymentDetails(userId: string, cartId: string, paymentDetailsId: any): Observable<any>;
}
