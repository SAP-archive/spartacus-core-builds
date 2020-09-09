import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { ReturnRequest, ReturnRequestEntryInputList, ReturnRequestList, ReturnRequestModification } from '../../model/order.model';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderReturnRequestService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3Quc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJvcmRlci1yZXR1cm4tcmVxdWVzdC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0LCBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QsIFJldHVyblJlcXVlc3RMaXN0LCBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PjtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG9yZGVyIHJldHVybiByZXF1ZXN0XG4gICAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAgICogQHBhcmFtIHJldHVyblJlcXVlc3RJbnB1dCBvcmRlciByZXR1cm4gcmVxdWVzdCBlbnRyeSBpbnB1dFxuICAgICAqL1xuICAgIGNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdChyZXR1cm5SZXF1ZXN0SW5wdXQ6IFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIG9yZGVyIHJldHVybiByZXF1ZXN0XG4gICAgICovXG4gICAgZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0KCk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD47XG4gICAgLyoqXG4gICAgICogR2V0cyBvcmRlciByZXR1cm4gcmVxdWVzdCBsaXN0XG4gICAgICovXG4gICAgZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0TGlzdChwYWdlU2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0TGlzdD47XG4gICAgLyoqXG4gICAgICogTG9hZHMgb3JkZXIgcmV0dXJuIHJlcXVlc3QgZGV0YWlsXG4gICAgICogQHBhcmFtIHJldHVyblJlcXVlc3RDb2RlXG4gICAgICovXG4gICAgbG9hZE9yZGVyUmV0dXJuUmVxdWVzdERldGFpbChyZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBMb2FkcyBvcmRlciByZXR1cm4gcmVxdWVzdCBsaXN0XG4gICAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICAgKiBAcGFyYW0gc29ydCBzb3J0XG4gICAgICovXG4gICAgbG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3QocGFnZVNpemU6IG51bWJlciwgY3VycmVudFBhZ2U/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFuaW5nIG9yZGVyIHJldHVybiByZXF1ZXN0IGxpc3RcbiAgICAgKi9cbiAgICBjbGVhck9yZGVyUmV0dXJuUmVxdWVzdExpc3QoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG9yZGVyIHJldHVybiByZXF1ZXN0IGxvYWRpbmcgZmxhZ1xuICAgICAqL1xuICAgIGdldFJldHVyblJlcXVlc3RMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBvcmRlciByZXR1cm4gcmVxdWVzdCBzdWNjZXNzIGZsYWdcbiAgICAgKi9cbiAgICBnZXRSZXR1cm5SZXF1ZXN0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIENsZWFuaW5nIG9yZGVyIHJldHVybiByZXF1ZXN0IGRldGFpbHNcbiAgICAgKi9cbiAgICBjbGVhck9yZGVyUmV0dXJuUmVxdWVzdERldGFpbCgpOiB2b2lkO1xuICAgIGNhbmNlbE9yZGVyUmV0dXJuUmVxdWVzdChyZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nLCByZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uOiBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYW5jZWwgcmV0dXJuIHJlcXVlc3QgbG9hZGluZyBmbGFnXG4gICAgICovXG4gICAgZ2V0Q2FuY2VsUmV0dXJuUmVxdWVzdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYW5jZWwgcmV0dXJuIHJlcXVlc3Qgc3VjY2VzcyBmbGFnXG4gICAgICovXG4gICAgZ2V0Q2FuY2VsUmV0dXJuUmVxdWVzdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGNhbmNlbCByZXR1cm4gcmVxdWVzdCBwcm9jZXNzIGZsYWdzXG4gICAgICovXG4gICAgcmVzZXRDYW5jZWxSZXR1cm5SZXF1ZXN0UHJvY2Vzc1N0YXRlKCk6IHZvaWQ7XG59XG4iXX0=