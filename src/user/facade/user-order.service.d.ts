import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { ConsignmentTracking } from '../../model/consignment-tracking.model';
import { CancellationRequestEntryInputList, Order, OrderHistoryList } from '../../model/order.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import * as ɵngcc0 from '@angular/core';
export declare class UserOrderService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService?: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * @deprecated since version 1.2
     *  Use constructor(store: Store<StateWithUser | StateWithProcess<void>>,
     *  authService: AuthService) instead
     *
     *  TODO(issue:#5628) Deprecated since 1.3.0
     */
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
    cancelOrder(orderCode: string, cancelRequestInput: CancellationRequestEntryInputList): void;
    /**
     * Returns the cancel order loading flag
     */
    getCancelOrderLoading(): Observable<boolean>;
    /**
     * Returns the cancel order success flag
     */
    getCancelOrderSuccess(): Observable<boolean>;
    /**
     * Resets the cancel order process flags
     */
    resetCancelOrderProcessState(): void;
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     */
    private withUserId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserOrderService>;
}

//# sourceMappingURL=user-order.service.d.ts.map