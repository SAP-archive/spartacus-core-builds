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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCustomerCouponAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCustomerCouponAdapter>;
}

//# sourceMappingURL=occ-customer-coupon.adapter.d.ts.map