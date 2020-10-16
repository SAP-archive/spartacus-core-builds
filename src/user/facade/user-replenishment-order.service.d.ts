import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { ReplenishmentOrder, ReplenishmentOrderList } from '../../model/replenishment-order.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
export declare class UserReplenishmentOrderService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * Returns replenishment order details for a given 'current' user
     *
     * @param replenishmentOrderCode a replenishment order code
     */
    loadReplenishmentOrderDetails(replenishmentOrderCode: string): void;
    /**
     * Returns a replenishment order details
     */
    getReplenishmentOrderDetails(): Observable<ReplenishmentOrder>;
    /**
     * Returns a replenishment order details loading flag
     */
    getReplenishmentOrderDetailsLoading(): Observable<boolean>;
    /**
     * Returns a replenishment order details success flag
     */
    getReplenishmentOrderDetailsSuccess(): Observable<boolean>;
    /**
     * Returns a replenishment order details error flag
     */
    getReplenishmentOrderDetailsError(): Observable<boolean>;
    /**
     * Clears the replenishment orders details state
     */
    clearReplenishmentOrderDetails(): void;
    /**
     * Cancels a specific replenishment order for a given 'current' user
     *
     * @param replenishmentOrderCode a replenishment order code
     */
    cancelReplenishmentOrder(replenishmentOrderCode: string): void;
    /**
     * Returns the cancel replenishment order loading flag
     */
    getCancelReplenishmentOrderLoading(): Observable<boolean>;
    /**
     * Returns the cancel replenishment order success flag
     */
    getCancelReplenishmentOrderSuccess(): Observable<boolean>;
    /**
     * Returns the cancel replenishment order error flag
     */
    getCancelReplenishmentOrderError(): Observable<boolean>;
    /**
     * Clears the cancel replenishment order processing state
     */
    clearCancelReplenishmentOrderProcessState(): void;
    /**
     * Returns replenishment order history list
     */
    getReplenishmentOrderHistoryList(pageSize: number): Observable<ReplenishmentOrderList>;
    /**
     * Returns a loading flag for replenishment order history list
     */
    getReplenishmentOrderHistoryListLoading(): Observable<boolean>;
    /**
     * Returns a error flag for replenishment order history list
     */
    getReplenishmentOrderHistoryListError(): Observable<boolean>;
    /**
     * Returns a success flag for replenishment order history list
     */
    getReplenishmentOrderHistoryListSuccess(): Observable<boolean>;
    /**
     * Retrieves a replenishment order list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadReplenishmentOrderList(pageSize?: number, currentPage?: number, sort?: string): void;
    /**
     * Cleaning replenishment order list
     */
    clearReplenishmentOrderList(): void;
}
