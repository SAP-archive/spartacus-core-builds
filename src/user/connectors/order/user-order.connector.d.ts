import { Observable } from 'rxjs';
import { UserOrderAdapter } from './user-order.adapter';
import { Order, OrderHistoryList } from '../../../model/order.model';
export declare class UserOrderConnector {
    protected adapter: UserOrderAdapter;
    constructor(adapter: UserOrderAdapter);
    get(userId: string, orderCode: string): Observable<Order>;
    getHistory(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
}
