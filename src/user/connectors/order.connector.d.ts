import { Observable } from 'rxjs';
import { OrderAdapter } from './order.adapter';
import { Order, OrderHistoryList } from '../../model/order.model';
export declare class OrderConnector {
    protected adapter: OrderAdapter;
    constructor(adapter: OrderAdapter);
    place(userId: string, cartId: string): Observable<Order>;
    get(userId: string, orderCode: string): Observable<Order>;
    getHistory(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
}
