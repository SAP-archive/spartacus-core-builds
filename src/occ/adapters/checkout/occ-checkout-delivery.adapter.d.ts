import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckoutDeliveryAdapter } from '../../../checkout/connectors/delivery/checkout-delivery.adapter';
import { Address } from '../../../model/address.model';
import { DeliveryMode } from '../../../model/order.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCheckoutDeliveryAdapter implements CheckoutDeliveryAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    protected getCartEndpoint(userId: string): string;
    createAddress(userId: string, cartId: string, address: Address): Observable<Address>;
    setAddress(userId: string, cartId: string, addressId: string): Observable<any>;
    setMode(userId: string, cartId: string, deliveryModeId: string): Observable<any>;
    getMode(userId: string, cartId: string): Observable<any>;
    getSupportedModes(userId: string, cartId: string): Observable<DeliveryMode[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCheckoutDeliveryAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCheckoutDeliveryAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LWRlbGl2ZXJ5LmFkYXB0ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLWNoZWNrb3V0LWRlbGl2ZXJ5LmFkYXB0ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7OztBQVdBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dERlbGl2ZXJ5QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvZGVsaXZlcnkvY2hlY2tvdXQtZGVsaXZlcnkuYWRhcHRlcic7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY0NoZWNrb3V0RGVsaXZlcnlBZGFwdGVyIGltcGxlbWVudHMgQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSk7XG4gICAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZztcbiAgICBjcmVhdGVBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8QWRkcmVzcz47XG4gICAgc2V0QWRkcmVzcyh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGFkZHJlc3NJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHNldE1vZGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBkZWxpdmVyeU1vZGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGdldE1vZGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGdldFN1cHBvcnRlZE1vZGVzKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlW10+O1xufVxuIl19