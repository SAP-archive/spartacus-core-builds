import { Observable } from 'rxjs';
import { ConsignmentTracking } from '../../../model/consignment-tracking.model';
import { Order, OrderHistoryList } from '../../../model/order.model';
import { UserOrderAdapter } from './user-order.adapter';
export declare class UserOrderConnector {
    protected adapter: UserOrderAdapter;
    constructor(adapter: UserOrderAdapter);
    get(userId: string, orderCode: string): Observable<Order>;
    getHistory(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
    getConsignmentTracking(orderCode: string, consignmentCode: string): Observable<ConsignmentTracking>;
}
