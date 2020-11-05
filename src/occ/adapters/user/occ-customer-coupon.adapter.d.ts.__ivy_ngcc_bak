import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerCoupon2Customer, CustomerCouponNotification, CustomerCouponSearchResult } from '../../../model/customer-coupon.model';
import { CustomerCouponAdapter } from '../../../user/connectors/customer-coupon/customer-coupon.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
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
}
