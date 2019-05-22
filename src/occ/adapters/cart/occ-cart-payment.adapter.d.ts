import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { CartPaymentAdapter } from '../../../cart/connectors/payment/cart-payment.adapter';
import { ConverterService } from '../../../util/converter.service';
import { CardType, PaymentDetails } from '../../../model/cart.model';
export declare class OccCartPaymentAdapter implements CartPaymentAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    private domparser;
    protected getCartEndpoint(userId: string): string;
    create(userId: string, cartId: string, paymentDetails: PaymentDetails): Observable<PaymentDetails>;
    set(userId: string, cartId: string, paymentDetailsId: string): Observable<any>;
    loadCardTypes(): Observable<CardType[]>;
    protected getProviderSubInfo(userId: string, cartId: string): Observable<any>;
    protected createSubWithProvider(postUrl: string, parameters: any): Observable<any>;
    protected createDetailsWithParameters(userId: string, cartId: string, parameters: any): Observable<PaymentDetails>;
    private getParamsForPaymentProvider;
    private extractPaymentDetailsFromHtml;
    private convertToMap;
}
