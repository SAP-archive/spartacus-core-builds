import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckoutAdapter } from '../../../checkout/connectors/checkout/checkout.adapter';
import { CheckoutDetails } from '../../../checkout/models/checkout.model';
import { Order } from '../../../model/order.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCheckoutAdapter implements CheckoutAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    protected getEndpoint(userId: string, subEndpoint: string): string;
    placeOrder(userId: string, cartId: string, termsChecked: boolean): Observable<Order>;
    loadCheckoutDetails(userId: string, cartId: string): Observable<CheckoutDetails>;
    clearCheckoutDeliveryAddress(userId: string, cartId: string): Observable<any>;
    clearCheckoutDeliveryMode(userId: string, cartId: string): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCheckoutAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCheckoutAdapter>;
}

//# sourceMappingURL=occ-checkout.adapter.d.ts.map