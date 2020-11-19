import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckoutPaymentAdapter } from '../../../checkout/connectors/payment/checkout-payment.adapter';
import { CardType, PaymentDetails } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCheckoutPaymentAdapter implements CheckoutPaymentAdapter {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCheckoutPaymentAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCheckoutPaymentAdapter>;
}

//# sourceMappingURL=occ-checkout-payment.adapter.d.ts.map