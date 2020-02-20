import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentDetails } from '../../../model/cart.model';
import { UserPaymentAdapter } from '../../../user/connectors/payment/user-payment.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccUserPaymentAdapter implements UserPaymentAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    loadAll(userId: string): Observable<PaymentDetails[]>;
    delete(userId: string, paymentMethodID: string): Observable<{}>;
    setDefault(userId: string, paymentMethodID: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccUserPaymentAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccUserPaymentAdapter>;
}

//# sourceMappingURL=occ-user-payment.adapter.d.ts.map