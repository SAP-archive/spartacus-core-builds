import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { ReturnRequestList, ReturnRequestEntryInputList, ReturnRequest, ReturnRequestModification } from '../../model/order.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import * as ɵngcc0 from '@angular/core';
export declare class OrderReturnRequestService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * Create order return request
     * @param orderCode an order code
     * @param returnRequestInput order return request entry input
     */
    createOrderReturnRequest(returnRequestInput: ReturnRequestEntryInputList): void;
    /**
     * Return an order return request
     */
    getOrderReturnRequest(): Observable<ReturnRequest>;
    /**
     * Gets order return request list
     */
    getOrderReturnRequestList(pageSize: number): Observable<ReturnRequestList>;
    /**
     * Loads order return request detail
     * @param returnRequestCode
     */
    loadOrderReturnRequestDetail(returnRequestCode: string): void;
    /**
     * Loads order return request list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadOrderReturnRequestList(pageSize: number, currentPage?: number, sort?: string): void;
    /**
     * Cleaning order return request list
     */
    clearOrderReturnRequestList(): void;
    /**
     * Get the order return request loading flag
     */
    getReturnRequestLoading(): Observable<boolean>;
    /**
     * Get the order return request success flag
     */
    getReturnRequestSuccess(): Observable<boolean>;
    /**
     * Cleaning order return request details
     */
    clearOrderReturnRequestDetail(): void;
    cancelOrderReturnRequest(returnRequestCode: string, returnRequestModification: ReturnRequestModification): void;
    /**
     * Returns the cancel return request loading flag
     */
    getCancelReturnRequestLoading(): Observable<boolean>;
    /**
     * Returns the cancel return request success flag
     */
    getCancelReturnRequestSuccess(): Observable<boolean>;
    /**
     * Resets the cancel return request process flags
     */
    resetCancelReturnRequestProcessState(): void;
    private withUserId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderReturnRequestService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3Quc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJvcmRlci1yZXR1cm4tcmVxdWVzdC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFJldHVyblJlcXVlc3RMaXN0LCBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QsIFJldHVyblJlcXVlc3QsIFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9yZGVyUmV0dXJuUmVxdWVzdFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgb3JkZXIgcmV0dXJuIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICAgKiBAcGFyYW0gcmV0dXJuUmVxdWVzdElucHV0IG9yZGVyIHJldHVybiByZXF1ZXN0IGVudHJ5IGlucHV0XG4gICAgICovXG4gICAgY3JlYXRlT3JkZXJSZXR1cm5SZXF1ZXN0KHJldHVyblJlcXVlc3RJbnB1dDogUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRMaXN0KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gb3JkZXIgcmV0dXJuIHJlcXVlc3RcbiAgICAgKi9cbiAgICBnZXRPcmRlclJldHVyblJlcXVlc3QoKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0PjtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yZGVyIHJldHVybiByZXF1ZXN0IGxpc3RcbiAgICAgKi9cbiAgICBnZXRPcmRlclJldHVyblJlcXVlc3RMaXN0KHBhZ2VTaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3RMaXN0PjtcbiAgICAvKipcbiAgICAgKiBMb2FkcyBvcmRlciByZXR1cm4gcmVxdWVzdCBkZXRhaWxcbiAgICAgKiBAcGFyYW0gcmV0dXJuUmVxdWVzdENvZGVcbiAgICAgKi9cbiAgICBsb2FkT3JkZXJSZXR1cm5SZXF1ZXN0RGV0YWlsKHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIExvYWRzIG9yZGVyIHJldHVybiByZXF1ZXN0IGxpc3RcbiAgICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAgICogQHBhcmFtIGN1cnJlbnRQYWdlIGN1cnJlbnQgcGFnZVxuICAgICAqIEBwYXJhbSBzb3J0IHNvcnRcbiAgICAgKi9cbiAgICBsb2FkT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdChwYWdlU2l6ZTogbnVtYmVyLCBjdXJyZW50UGFnZT86IG51bWJlciwgc29ydD86IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYW5pbmcgb3JkZXIgcmV0dXJuIHJlcXVlc3QgbGlzdFxuICAgICAqL1xuICAgIGNsZWFyT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgb3JkZXIgcmV0dXJuIHJlcXVlc3QgbG9hZGluZyBmbGFnXG4gICAgICovXG4gICAgZ2V0UmV0dXJuUmVxdWVzdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG9yZGVyIHJldHVybiByZXF1ZXN0IHN1Y2Nlc3MgZmxhZ1xuICAgICAqL1xuICAgIGdldFJldHVyblJlcXVlc3RTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogQ2xlYW5pbmcgb3JkZXIgcmV0dXJuIHJlcXVlc3QgZGV0YWlsc1xuICAgICAqL1xuICAgIGNsZWFyT3JkZXJSZXR1cm5SZXF1ZXN0RGV0YWlsKCk6IHZvaWQ7XG4gICAgY2FuY2VsT3JkZXJSZXR1cm5SZXF1ZXN0KHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcsIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb246IFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhbmNlbCByZXR1cm4gcmVxdWVzdCBsb2FkaW5nIGZsYWdcbiAgICAgKi9cbiAgICBnZXRDYW5jZWxSZXR1cm5SZXF1ZXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhbmNlbCByZXR1cm4gcmVxdWVzdCBzdWNjZXNzIGZsYWdcbiAgICAgKi9cbiAgICBnZXRDYW5jZWxSZXR1cm5SZXF1ZXN0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgY2FuY2VsIHJldHVybiByZXF1ZXN0IHByb2Nlc3MgZmxhZ3NcbiAgICAgKi9cbiAgICByZXNldENhbmNlbFJldHVyblJlcXVlc3RQcm9jZXNzU3RhdGUoKTogdm9pZDtcbiAgICBwcml2YXRlIHdpdGhVc2VySWQ7XG59XG4iXX0=