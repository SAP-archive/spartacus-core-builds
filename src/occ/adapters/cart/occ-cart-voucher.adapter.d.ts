import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartVoucherAdapter } from '../../../cart/connectors/voucher/cart-voucher.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCartVoucherAdapter implements CartVoucherAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    protected getCartVoucherEndpoint(userId: string, cartId: any): string;
    protected getHeaders(userId: string): HttpHeaders;
    add(userId: string, cartId: string, voucherId: string): Observable<{}>;
    remove(userId: string, cartId: string, voucherId: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCartVoucherAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCartVoucherAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtdm91Y2hlci5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1jYXJ0LXZvdWNoZXIuYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7QUFTQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRWb3VjaGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy92b3VjaGVyL2NhcnQtdm91Y2hlci5hZGFwdGVyJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjQ2FydFZvdWNoZXJBZGFwdGVyIGltcGxlbWVudHMgQ2FydFZvdWNoZXJBZGFwdGVyIHtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIHByb3RlY3RlZCBnZXRDYXJ0Vm91Y2hlckVuZHBvaW50KHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IGFueSk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgZ2V0SGVhZGVycyh1c2VySWQ6IHN0cmluZyk6IEh0dHBIZWFkZXJzO1xuICAgIGFkZCh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIHZvdWNoZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgcmVtb3ZlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgdm91Y2hlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9Pjtcbn1cbiJdfQ==