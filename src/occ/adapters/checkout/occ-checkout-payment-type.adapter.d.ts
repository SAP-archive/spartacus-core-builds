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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LXBheW1lbnQtdHlwZS5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1jaGVja291dC1wYXltZW50LXR5cGUuYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYXltZW50VHlwZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL3BheW1lbnQtdHlwZS9wYXltZW50LXR5cGUuYWRhcHRlcic7XG5pbXBvcnQgeyBDYXJ0LCBQYXltZW50VHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NDaGVja291dFBheW1lbnRUeXBlQWRhcHRlciBpbXBsZW1lbnRzIFBheW1lbnRUeXBlQWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSwgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBsb2FkUGF5bWVudFR5cGVzKCk6IE9ic2VydmFibGU8UGF5bWVudFR5cGVbXT47XG4gICAgc2V0UGF5bWVudFR5cGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBwYXltZW50VHlwZTogc3RyaW5nLCBwdXJjaGFzZU9yZGVyTnVtYmVyPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBwcm90ZWN0ZWQgZ2V0Q2FydEVuZHBvaW50KHVzZXJJZDogc3RyaW5nKTogc3RyaW5nO1xufVxuIl19