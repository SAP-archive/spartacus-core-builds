import { UserPaymentAdapter } from '../../../user/connectors/payment/user-payment.adapter';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { Observable } from 'rxjs';
import { PaymentDetails } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
export declare class OccUserPaymentAdapter implements UserPaymentAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    private getPaymentDetailsEndpoint;
    loadAll(userId: string): Observable<PaymentDetails[]>;
    delete(userId: string, paymentMethodID: string): Observable<{}>;
    setDefault(userId: string, paymentMethodID: string): Observable<{}>;
}
