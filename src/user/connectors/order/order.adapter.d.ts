import { Observable } from 'rxjs';
import { Order, OrderHistoryList } from '../../../model/order.model';
export declare abstract class OrderAdapter {
    /**
     * Abstract method used to place an order.
     *
     * @param userId The `userId` for given user
     * @param cartId The `cartId` for cart used for placing order
     */
    abstract place(userId: string, cartId: string): Observable<Order>;
    /**
     * Abstract method used to load order data.
     *
     * @param userId The `userId` for given user
     * @param orderCode The `orderCode` for given order
     */
    abstract load(userId: string, orderCode: string): Observable<Order>;
    /**
     * Abstract method used to load order history for an user.
     *
     * @param userId The `userId` for given user
     * @param pageSize
     * @param currentPage
     * @param sort Sorting method
     */
    abstract loadHistory(userId: string, pageSize: number, currentPage: number, sort: string): Observable<OrderHistoryList>;
}
