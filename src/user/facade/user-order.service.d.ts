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
    protected authService: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserOrderService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVzZXItb3JkZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7IENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCwgT3JkZXIsIE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJPcmRlclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9yZGVyJ3MgZGV0YWlsXG4gICAgICovXG4gICAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBvcmRlcidzIGRldGFpbHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgICAqL1xuICAgIGxvYWRPcmRlckRldGFpbHMob3JkZXJDb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFycyBvcmRlcidzIGRldGFpbHNcbiAgICAgKi9cbiAgICBjbGVhck9yZGVyRGV0YWlscygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgb3JkZXIgaGlzdG9yeSBsaXN0XG4gICAgICovXG4gICAgZ2V0T3JkZXJIaXN0b3J5TGlzdChwYWdlU2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbG9hZGVkIGZsYWcgZm9yIG9yZGVyIGhpc3RvcnkgbGlzdFxuICAgICAqL1xuICAgIGdldE9yZGVySGlzdG9yeUxpc3RMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYW4gb3JkZXIgbGlzdFxuICAgICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICAgKiBAcGFyYW0gY3VycmVudFBhZ2UgY3VycmVudCBwYWdlXG4gICAgICogQHBhcmFtIHNvcnQgc29ydFxuICAgICAqL1xuICAgIGxvYWRPcmRlckxpc3QocGFnZVNpemU6IG51bWJlciwgY3VycmVudFBhZ2U/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFuaW5nIG9yZGVyIGxpc3RcbiAgICAgKi9cbiAgICBjbGVhck9yZGVyTGlzdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqICBSZXR1cm5zIGEgY29uc2lnbm1lbnQgdHJhY2tpbmcgZGV0YWlsXG4gICAgICovXG4gICAgZ2V0Q29uc2lnbm1lbnRUcmFja2luZygpOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBjb25zaWdubWVudCB0cmFja2luZyBkZXRhaWxzXG4gICAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAgICogQHBhcmFtIGNvbnNpZ25tZW50Q29kZSBhIGNvbnNpZ25tZW50IGNvZGVcbiAgICAgKi9cbiAgICBsb2FkQ29uc2lnbm1lbnRUcmFja2luZyhvcmRlckNvZGU6IHN0cmluZywgY29uc2lnbm1lbnRDb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFuaW5nIGNvbnNpZ25tZW50IHRyYWNraW5nXG4gICAgICovXG4gICAgY2xlYXJDb25zaWdubWVudFRyYWNraW5nKCk6IHZvaWQ7XG4gICAgY2FuY2VsT3JkZXIob3JkZXJDb2RlOiBzdHJpbmcsIGNhbmNlbFJlcXVlc3RJbnB1dDogQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYW5jZWwgb3JkZXIgbG9hZGluZyBmbGFnXG4gICAgICovXG4gICAgZ2V0Q2FuY2VsT3JkZXJMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2FuY2VsIG9yZGVyIHN1Y2Nlc3MgZmxhZ1xuICAgICAqL1xuICAgIGdldENhbmNlbE9yZGVyU3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgY2FuY2VsIG9yZGVyIHByb2Nlc3MgZmxhZ3NcbiAgICAgKi9cbiAgICByZXNldENhbmNlbE9yZGVyUHJvY2Vzc1N0YXRlKCk6IHZvaWQ7XG59XG4iXX0=