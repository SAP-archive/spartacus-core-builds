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
    private withUserId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderReturnRequestService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3Quc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJvcmRlci1yZXR1cm4tcmVxdWVzdC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdCwgUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRMaXN0LCBSZXR1cm5SZXF1ZXN0TGlzdCwgUmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3JkZXJSZXR1cm5SZXF1ZXN0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBvcmRlciByZXR1cm4gcmVxdWVzdFxuICAgICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgICAqIEBwYXJhbSByZXR1cm5SZXF1ZXN0SW5wdXQgb3JkZXIgcmV0dXJuIHJlcXVlc3QgZW50cnkgaW5wdXRcbiAgICAgKi9cbiAgICBjcmVhdGVPcmRlclJldHVyblJlcXVlc3QocmV0dXJuUmVxdWVzdElucHV0OiBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBvcmRlciByZXR1cm4gcmVxdWVzdFxuICAgICAqL1xuICAgIGdldE9yZGVyUmV0dXJuUmVxdWVzdCgpOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+O1xuICAgIC8qKlxuICAgICAqIEdldHMgb3JkZXIgcmV0dXJuIHJlcXVlc3QgbGlzdFxuICAgICAqL1xuICAgIGdldE9yZGVyUmV0dXJuUmVxdWVzdExpc3QocGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdExpc3Q+O1xuICAgIC8qKlxuICAgICAqIExvYWRzIG9yZGVyIHJldHVybiByZXF1ZXN0IGRldGFpbFxuICAgICAqIEBwYXJhbSByZXR1cm5SZXF1ZXN0Q29kZVxuICAgICAqL1xuICAgIGxvYWRPcmRlclJldHVyblJlcXVlc3REZXRhaWwocmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTG9hZHMgb3JkZXIgcmV0dXJuIHJlcXVlc3QgbGlzdFxuICAgICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICAgKiBAcGFyYW0gY3VycmVudFBhZ2UgY3VycmVudCBwYWdlXG4gICAgICogQHBhcmFtIHNvcnQgc29ydFxuICAgICAqL1xuICAgIGxvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0KHBhZ2VTaXplOiBudW1iZXIsIGN1cnJlbnRQYWdlPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbGVhbmluZyBvcmRlciByZXR1cm4gcmVxdWVzdCBsaXN0XG4gICAgICovXG4gICAgY2xlYXJPcmRlclJldHVyblJlcXVlc3RMaXN0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBvcmRlciByZXR1cm4gcmVxdWVzdCBsb2FkaW5nIGZsYWdcbiAgICAgKi9cbiAgICBnZXRSZXR1cm5SZXF1ZXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgb3JkZXIgcmV0dXJuIHJlcXVlc3Qgc3VjY2VzcyBmbGFnXG4gICAgICovXG4gICAgZ2V0UmV0dXJuUmVxdWVzdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBDbGVhbmluZyBvcmRlciByZXR1cm4gcmVxdWVzdCBkZXRhaWxzXG4gICAgICovXG4gICAgY2xlYXJPcmRlclJldHVyblJlcXVlc3REZXRhaWwoKTogdm9pZDtcbiAgICBjYW5jZWxPcmRlclJldHVyblJlcXVlc3QocmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZywgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbjogUmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2FuY2VsIHJldHVybiByZXF1ZXN0IGxvYWRpbmcgZmxhZ1xuICAgICAqL1xuICAgIGdldENhbmNlbFJldHVyblJlcXVlc3RMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2FuY2VsIHJldHVybiByZXF1ZXN0IHN1Y2Nlc3MgZmxhZ1xuICAgICAqL1xuICAgIGdldENhbmNlbFJldHVyblJlcXVlc3RTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBjYW5jZWwgcmV0dXJuIHJlcXVlc3QgcHJvY2VzcyBmbGFnc1xuICAgICAqL1xuICAgIHJlc2V0Q2FuY2VsUmV0dXJuUmVxdWVzdFByb2Nlc3NTdGF0ZSgpOiB2b2lkO1xuICAgIHByaXZhdGUgd2l0aFVzZXJJZDtcbn1cbiJdfQ==