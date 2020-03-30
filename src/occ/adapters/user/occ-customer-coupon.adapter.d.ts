import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { CustomerCouponAdapter } from '../../../user/connectors/customer-coupon/customer-coupon.adapter';
import { CustomerCouponSearchResult, CustomerCouponNotification, CustomerCoupon2Customer } from '../../../model/customer-coupon.model';
import { ConverterService } from '../../../util/converter.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCustomerCouponAdapter implements CustomerCouponAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    getCustomerCoupons(userId: string, pageSize: number, currentPage: number, sort: string): Observable<CustomerCouponSearchResult>;
    turnOffNotification(userId: string, couponCode: string): Observable<{}>;
    turnOnNotification(userId: string, couponCode: string): Observable<CustomerCouponNotification>;
    claimCustomerCoupon(userId: string, couponCode: string): Observable<CustomerCoupon2Customer>;
    private newHttpHeader;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCustomerCouponAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCustomerCouponAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWN1c3RvbWVyLWNvdXBvbi5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1jdXN0b21lci1jb3Vwb24uYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb25BZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2N1c3RvbWVyLWNvdXBvbi9jdXN0b21lci1jb3Vwb24uYWRhcHRlcic7XG5pbXBvcnQgeyBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCwgQ3VzdG9tZXJDb3Vwb25Ob3RpZmljYXRpb24sIEN1c3RvbWVyQ291cG9uMkN1c3RvbWVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY3VzdG9tZXItY291cG9uLm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY0N1c3RvbWVyQ291cG9uQWRhcHRlciBpbXBsZW1lbnRzIEN1c3RvbWVyQ291cG9uQWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSwgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBnZXRDdXN0b21lckNvdXBvbnModXNlcklkOiBzdHJpbmcsIHBhZ2VTaXplOiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIsIHNvcnQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQ+O1xuICAgIHR1cm5PZmZOb3RpZmljYXRpb24odXNlcklkOiBzdHJpbmcsIGNvdXBvbkNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuICAgIHR1cm5Pbk5vdGlmaWNhdGlvbih1c2VySWQ6IHN0cmluZywgY291cG9uQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvbk5vdGlmaWNhdGlvbj47XG4gICAgY2xhaW1DdXN0b21lckNvdXBvbih1c2VySWQ6IHN0cmluZywgY291cG9uQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvbjJDdXN0b21lcj47XG4gICAgcHJpdmF0ZSBuZXdIdHRwSGVhZGVyO1xufVxuIl19