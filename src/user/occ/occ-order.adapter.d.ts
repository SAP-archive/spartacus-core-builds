import { OrderAdapter } from '../connectors/order.adapter';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { Order, OrderHistoryList } from '../../model/order.model';
import { ConverterService } from '../../util/converter.service';
export declare class OccOrderAdapter implements OrderAdapter {
    private http;
    private occEndpoints;
    private converter;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    protected getOrderEndpoint(userId: string): string;
    place(userId: string, cartId: string): Observable<Order>;
    load(userId: string, orderCode: string): Observable<Order>;
    loadHistory(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
}
