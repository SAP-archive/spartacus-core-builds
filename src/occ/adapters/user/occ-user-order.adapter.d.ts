import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order, OrderHistoryList } from '../../../model/order.model';
import { UserOrderAdapter } from '../../../user/connectors/order/user-order.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export declare class OccUserOrderAdapter implements UserOrderAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    protected getOrderEndpoint(userId: string): string;
    load(userId: string, orderCode: string): Observable<Order>;
    loadHistory(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
}
