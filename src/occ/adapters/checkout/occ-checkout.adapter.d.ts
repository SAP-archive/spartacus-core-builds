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
    placeOrder(userId: string, cartId: string): Observable<Order>;
    loadCheckoutDetails(userId: string, cartId: string): Observable<CheckoutDetails>;
    clearCheckoutDeliveryAddress(userId: string, cartId: string): Observable<any>;
    clearCheckoutDeliveryMode(userId: string, cartId: string): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCheckoutAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCheckoutAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LmFkYXB0ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLWNoZWNrb3V0LmFkYXB0ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7O0FBVUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoZWNrb3V0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuYWRhcHRlcic7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9tb2RlbHMvY2hlY2tvdXQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY0NoZWNrb3V0QWRhcHRlciBpbXBsZW1lbnRzIENoZWNrb3V0QWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSwgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBwcm90ZWN0ZWQgZ2V0RW5kcG9pbnQodXNlcklkOiBzdHJpbmcsIHN1YkVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgcGxhY2VPcmRlcih1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPjtcbiAgICBsb2FkQ2hlY2tvdXREZXRhaWxzKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2hlY2tvdXREZXRhaWxzPjtcbiAgICBjbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PjtcbiAgICBjbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55Pjtcbn1cbiJdfQ==