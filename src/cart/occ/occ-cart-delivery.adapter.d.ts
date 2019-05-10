import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { CartDeliveryAdapter } from '../connectors/delivery/cart-delivery.adapter';
import { ConverterService } from '../../util/converter.service';
import { Address } from '../../model/address.model';
import { DeliveryMode } from '../../model/order.model';
export declare class OccCartDeliveryAdapter implements CartDeliveryAdapter {
    protected http: HttpClient;
    private occEndpoints;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    protected getCartEndpoint(userId: string): string;
    createAddress(userId: string, cartId: string, address: Address): Observable<Address>;
    setAddress(userId: string, cartId: string, addressId: string): Observable<any>;
    setMode(userId: string, cartId: string, deliveryModeId: string): Observable<any>;
    getMode(userId: string, cartId: string): Observable<any>;
    getSupportedModes(userId: string, cartId: string): Observable<DeliveryMode[]>;
}
