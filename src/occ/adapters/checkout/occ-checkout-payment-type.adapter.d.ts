import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentTypeAdapter } from '../../../checkout/connectors/payment-type/payment-type.adapter';
import { Cart, PaymentType } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export declare class OccCheckoutPaymentTypeAdapter implements PaymentTypeAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    loadPaymentTypes(): Observable<PaymentType[]>;
    setPaymentType(userId: string, cartId: string, paymentType: string, purchaseOrderNumber?: string): Observable<Cart>;
    protected getCartEndpoint(userId: string): string;
}
