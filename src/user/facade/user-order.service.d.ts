import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order, OrderHistoryList } from '../../model/order.model';
import * as fromProcessStore from '../../process/store/process-state';
import * as fromStore from '../store/index';
export declare class UserOrderService {
    protected store: Store<fromStore.StateWithUser | fromProcessStore.StateWithProcess<void>>;
    constructor(store: Store<fromStore.StateWithUser | fromProcessStore.StateWithProcess<void>>);
    /**
     * Returns an order's detail
     */
    getOrderDetails(): Observable<Order>;
    /**
     * Retrieves order's details
     *
     * @param orderCode an order code
     */
    loadOrderDetails(orderCode: string): void;
    /**
     * Clears order's details
     */
    clearOrderDetails(): void;
    /**
     * Returns order history list
     */
    getOrderHistoryList(pageSize: number): Observable<OrderHistoryList>;
    /**
     * Returns a loaded flag for order history list
     */
    getOrderHistoryListLoaded(): Observable<boolean>;
    /**
     * Retrieves an order list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadOrderList(pageSize: number, currentPage?: number, sort?: string): void;
    /**
     * Cleaning order list
     */
    clearOrderList(): void;
}
