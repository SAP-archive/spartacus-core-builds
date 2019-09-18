import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConsignmentTracking } from '../../model/consignment-tracking.model';
import { Order, OrderHistoryList } from '../../model/order.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
export declare class UserOrderService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>);
    /**
     * Returns an order's detail
     */
    getOrderDetails(): Observable<Order>;
    /**
     * Retrieves order's details
     *
     * @param orderCode an order code
     */
    loadOrderDetails(orderCode: string, userId?: string): void;
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
    /**
     *  Returns a consignment tracking detail
     */
    getConsignmentTracking(): Observable<ConsignmentTracking>;
    /**
     * Retrieves consignment tracking details
     * @param orderCode an order code
     * @param consignmentCode a consignment code
     */
    loadConsignmentTracking(orderCode: string, consignmentCode: string): void;
    /**
     * Cleaning consignment tracking
     */
    clearConsignmentTracking(): void;
}
