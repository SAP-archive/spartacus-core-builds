import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order, OrderHistoryList } from '../../occ/occ-models/index';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
export declare class OccOrderService {
    protected http: HttpClient;
    private occEndpoints;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService);
    protected getOrderEndpoint(userId: string): string;
    placeOrder(userId: string, cartId: string): Observable<Order>;
    getOrders(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
    getOrder(userId: string, orderCode: string): Observable<Order>;
}
