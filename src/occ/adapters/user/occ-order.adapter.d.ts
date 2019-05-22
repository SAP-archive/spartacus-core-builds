import { OrderAdapter } from '../../../user/connectors/order/order.adapter';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { Order, OrderHistoryList } from '../../../model/order.model';
import { ConverterService } from '../../../util/converter.service';
export declare class OccOrderAdapter implements OrderAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    protected getOrderEndpoint(userId: string): string;
    place(userId: string, cartId: string): Observable<Order>;
    load(userId: string, orderCode: string): Observable<Order>;
    loadHistory(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
}
