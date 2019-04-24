import { Observable } from 'rxjs';
import { PaymentDetails } from '../../occ/occ-models/occ.models';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { CartPaymentAdapter } from '../connectors/payment/cart-payment.adapter';
import { ConverterService } from '../../util/converter.service';
export declare class OccCartPaymentAdapter implements CartPaymentAdapter {
    protected http: HttpClient;
    private occEndpoints;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    private domparser;
    protected getCartEndpoint(userId: string): string;
    create(userId: string, cartId: string, paymentDetails: PaymentDetails): Observable<PaymentDetails>;
    set(userId: string, cartId: string, paymentDetailsId: string): Observable<any>;
    protected getProviderSubInfo(userId: string, cartId: string): Observable<any>;
    private createSubWithProvider;
    protected createDetailsWithParameters(userId: string, cartId: string, parameters: any): Observable<PaymentDetails>;
    private getPaymentSopResponseParams;
    private getParamsForPaymentProvider;
    private extractPaymentDetailsFromHtml;
    private convertToMap;
}
