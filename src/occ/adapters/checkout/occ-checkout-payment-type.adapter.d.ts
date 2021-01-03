import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentTypeAdapter } from '../../../checkout/connectors/payment-type/payment-type.adapter';
import { Cart, PaymentType } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCheckoutPaymentTypeAdapter implements PaymentTypeAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    loadPaymentTypes(): Observable<PaymentType[]>;
    setPaymentType(userId: string, cartId: string, paymentType: string, purchaseOrderNumber?: string): Observable<Cart>;
    protected getCartEndpoint(userId: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCheckoutPaymentTypeAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCheckoutPaymentTypeAdapter>;
}

//# sourceMappingURL=occ-checkout-payment-type.adapter.d.ts.map