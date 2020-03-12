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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LWRlbGl2ZXJ5LmFkYXB0ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLWNoZWNrb3V0LWRlbGl2ZXJ5LmFkYXB0ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7OztBQVdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoZWNrb3V0RGVsaXZlcnlBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9kZWxpdmVyeS9jaGVja291dC1kZWxpdmVyeS5hZGFwdGVyJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIgaW1wbGVtZW50cyBDaGVja291dERlbGl2ZXJ5QWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSwgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBwcm90ZWN0ZWQgZ2V0Q2FydEVuZHBvaW50KHVzZXJJZDogc3RyaW5nKTogc3RyaW5nO1xuICAgIGNyZWF0ZUFkZHJlc3ModXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgICBzZXRBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgYWRkcmVzc0lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgc2V0TW9kZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGRlbGl2ZXJ5TW9kZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZ2V0TW9kZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZ2V0U3VwcG9ydGVkTW9kZXModXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT47XG59XG4iXX0=