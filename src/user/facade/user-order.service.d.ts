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
    private withUserId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserOrderService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVzZXItb3JkZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQgeyBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3QsIE9yZGVyLCBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyT3JkZXJTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PjtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvcmRlcidzIGRldGFpbFxuICAgICAqL1xuICAgIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPjtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgb3JkZXIncyBkZXRhaWxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICAgKi9cbiAgICBsb2FkT3JkZXJEZXRhaWxzKG9yZGVyQ29kZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbGVhcnMgb3JkZXIncyBkZXRhaWxzXG4gICAgICovXG4gICAgY2xlYXJPcmRlckRldGFpbHMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG9yZGVyIGhpc3RvcnkgbGlzdFxuICAgICAqL1xuICAgIGdldE9yZGVySGlzdG9yeUxpc3QocGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxvYWRlZCBmbGFnIGZvciBvcmRlciBoaXN0b3J5IGxpc3RcbiAgICAgKi9cbiAgICBnZXRPcmRlckhpc3RvcnlMaXN0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFuIG9yZGVyIGxpc3RcbiAgICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAgICogQHBhcmFtIGN1cnJlbnRQYWdlIGN1cnJlbnQgcGFnZVxuICAgICAqIEBwYXJhbSBzb3J0IHNvcnRcbiAgICAgKi9cbiAgICBsb2FkT3JkZXJMaXN0KHBhZ2VTaXplOiBudW1iZXIsIGN1cnJlbnRQYWdlPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbGVhbmluZyBvcmRlciBsaXN0XG4gICAgICovXG4gICAgY2xlYXJPcmRlckxpc3QoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiAgUmV0dXJucyBhIGNvbnNpZ25tZW50IHRyYWNraW5nIGRldGFpbFxuICAgICAqL1xuICAgIGdldENvbnNpZ25tZW50VHJhY2tpbmcoKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPjtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgY29uc2lnbm1lbnQgdHJhY2tpbmcgZGV0YWlsc1xuICAgICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgICAqIEBwYXJhbSBjb25zaWdubWVudENvZGUgYSBjb25zaWdubWVudCBjb2RlXG4gICAgICovXG4gICAgbG9hZENvbnNpZ25tZW50VHJhY2tpbmcob3JkZXJDb2RlOiBzdHJpbmcsIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbGVhbmluZyBjb25zaWdubWVudCB0cmFja2luZ1xuICAgICAqL1xuICAgIGNsZWFyQ29uc2lnbm1lbnRUcmFja2luZygpOiB2b2lkO1xuICAgIGNhbmNlbE9yZGVyKG9yZGVyQ29kZTogc3RyaW5nLCBjYW5jZWxSZXF1ZXN0SW5wdXQ6IENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2FuY2VsIG9yZGVyIGxvYWRpbmcgZmxhZ1xuICAgICAqL1xuICAgIGdldENhbmNlbE9yZGVyTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhbmNlbCBvcmRlciBzdWNjZXNzIGZsYWdcbiAgICAgKi9cbiAgICBnZXRDYW5jZWxPcmRlclN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGNhbmNlbCBvcmRlciBwcm9jZXNzIGZsYWdzXG4gICAgICovXG4gICAgcmVzZXRDYW5jZWxPcmRlclByb2Nlc3NTdGF0ZSgpOiB2b2lkO1xuICAgIHByaXZhdGUgd2l0aFVzZXJJZDtcbn1cbiJdfQ==