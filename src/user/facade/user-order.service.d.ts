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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVzZXItb3JkZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29uc2lnbm1lbnQtdHJhY2tpbmcubW9kZWwnO1xuaW1wb3J0IHsgQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0LCBPcmRlciwgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlck9yZGVyU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlPzogQXV0aFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMlxuICAgICAqICBVc2UgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICAgKiAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSBpbnN0ZWFkXG4gICAgICpcbiAgICAgKiAgVE9ETyhpc3N1ZTojNTYyOCkgRGVwcmVjYXRlZCBzaW5jZSAxLjMuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4pO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb3JkZXIncyBkZXRhaWxcbiAgICAgKi9cbiAgICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj47XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIG9yZGVyJ3MgZGV0YWlsc1xuICAgICAqXG4gICAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAgICovXG4gICAgbG9hZE9yZGVyRGV0YWlscyhvcmRlckNvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIG9yZGVyJ3MgZGV0YWlsc1xuICAgICAqL1xuICAgIGNsZWFyT3JkZXJEZXRhaWxzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBvcmRlciBoaXN0b3J5IGxpc3RcbiAgICAgKi9cbiAgICBnZXRPcmRlckhpc3RvcnlMaXN0KHBhZ2VTaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsb2FkZWQgZmxhZyBmb3Igb3JkZXIgaGlzdG9yeSBsaXN0XG4gICAgICovXG4gICAgZ2V0T3JkZXJIaXN0b3J5TGlzdExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbiBvcmRlciBsaXN0XG4gICAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICAgKiBAcGFyYW0gc29ydCBzb3J0XG4gICAgICovXG4gICAgbG9hZE9yZGVyTGlzdChwYWdlU2l6ZTogbnVtYmVyLCBjdXJyZW50UGFnZT86IG51bWJlciwgc29ydD86IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYW5pbmcgb3JkZXIgbGlzdFxuICAgICAqL1xuICAgIGNsZWFyT3JkZXJMaXN0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogIFJldHVybnMgYSBjb25zaWdubWVudCB0cmFja2luZyBkZXRhaWxcbiAgICAgKi9cbiAgICBnZXRDb25zaWdubWVudFRyYWNraW5nKCk6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRUcmFja2luZz47XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGNvbnNpZ25tZW50IHRyYWNraW5nIGRldGFpbHNcbiAgICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICAgKiBAcGFyYW0gY29uc2lnbm1lbnRDb2RlIGEgY29uc2lnbm1lbnQgY29kZVxuICAgICAqL1xuICAgIGxvYWRDb25zaWdubWVudFRyYWNraW5nKG9yZGVyQ29kZTogc3RyaW5nLCBjb25zaWdubWVudENvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYW5pbmcgY29uc2lnbm1lbnQgdHJhY2tpbmdcbiAgICAgKi9cbiAgICBjbGVhckNvbnNpZ25tZW50VHJhY2tpbmcoKTogdm9pZDtcbiAgICBjYW5jZWxPcmRlcihvcmRlckNvZGU6IHN0cmluZywgY2FuY2VsUmVxdWVzdElucHV0OiBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3QpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhbmNlbCBvcmRlciBsb2FkaW5nIGZsYWdcbiAgICAgKi9cbiAgICBnZXRDYW5jZWxPcmRlckxvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYW5jZWwgb3JkZXIgc3VjY2VzcyBmbGFnXG4gICAgICovXG4gICAgZ2V0Q2FuY2VsT3JkZXJTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBjYW5jZWwgb3JkZXIgcHJvY2VzcyBmbGFnc1xuICAgICAqL1xuICAgIHJlc2V0Q2FuY2VsT3JkZXJQcm9jZXNzU3RhdGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IG1ldGhvZCB0byBkaXN0aW5xdWlzaCBwcmUgLyBwb3N0IDEuMy4wIGluIGEgY29udmVuaWVudCB3YXkuXG4gICAgICpcbiAgICAgKi9cbiAgICBwcml2YXRlIHdpdGhVc2VySWQ7XG59XG4iXX0=