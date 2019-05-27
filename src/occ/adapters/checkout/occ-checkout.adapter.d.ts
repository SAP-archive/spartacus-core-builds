import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { Order } from '../../../model/order.model';
import { ConverterService } from '../../../util/converter.service';
import { CheckoutAdapter } from '../../../checkout/connectors/checkout/checkout.adapter';
import { CheckoutDetails } from '../../../checkout/models/checkout.model';
export declare class OccCheckoutAdapter implements CheckoutAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    protected getEndpoint(userId: string, subEndpoint: string): string;
    placeOrder(userId: string, cartId: string): Observable<Order>;
    loadCheckoutDetails(userId: string, cartId: string): Observable<CheckoutDetails>;
}
