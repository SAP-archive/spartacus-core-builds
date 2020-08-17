import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { CANCEL_RETURN_PROCESS_ID } from '../store/user-state';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
let OrderReturnRequestService = class OrderReturnRequestService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Create order return request
     * @param orderCode an order code
     * @param returnRequestInput order return request entry input
     */
    createOrderReturnRequest(returnRequestInput) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.CreateOrderReturnRequest({
                userId,
                returnRequestInput,
            }));
        });
    }
    /**
     * Return an order return request
     */
    getOrderReturnRequest() {
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequest));
    }
    /**
     * Gets order return request list
     */
    getOrderReturnRequestList(pageSize) {
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequestListState), tap((returnListState) => {
            const attemptedLoad = returnListState.loading ||
                returnListState.success ||
                returnListState.error;
            if (!attemptedLoad) {
                this.loadOrderReturnRequestList(pageSize);
            }
        }), map((returnListState) => returnListState.value));
    }
    /**
     * Loads order return request detail
     * @param returnRequestCode
     */
    loadOrderReturnRequestDetail(returnRequestCode) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.LoadOrderReturnRequest({
                userId,
                returnRequestCode,
            }));
        });
    }
    /**
     * Loads order return request list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadOrderReturnRequestList(pageSize, currentPage, sort) {
        this.authService.invokeWithUserId((userId) => {
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                this.store.dispatch(new UserActions.LoadOrderReturnRequestList({
                    userId,
                    pageSize,
                    currentPage,
                    sort,
                }));
            }
        });
    }
    /**
     * Cleaning order return request list
     */
    clearOrderReturnRequestList() {
        this.store.dispatch(new UserActions.ClearOrderReturnRequestList());
    }
    /**
     * Get the order return request loading flag
     */
    getReturnRequestLoading() {
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequestLoading));
    }
    /**
     * Get the order return request success flag
     */
    getReturnRequestSuccess() {
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequestSuccess));
    }
    /**
     * Cleaning order return request details
     */
    clearOrderReturnRequestDetail() {
        this.store.dispatch(new UserActions.ClearOrderReturnRequest());
    }
    /*
     * Cancel order return request
     */
    cancelOrderReturnRequest(returnRequestCode, returnRequestModification) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.CancelOrderReturnRequest({
                userId,
                returnRequestCode,
                returnRequestModification,
            }));
        });
    }
    /**
     * Returns the cancel return request loading flag
     */
    getCancelReturnRequestLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(CANCEL_RETURN_PROCESS_ID)));
    }
    /**
     * Returns the cancel return request success flag
     */
    getCancelReturnRequestSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(CANCEL_RETURN_PROCESS_ID)));
    }
    /**
     * Resets the cancel return request process flags
     */
    resetCancelReturnRequestProcessState() {
        return this.store.dispatch(new UserActions.ResetCancelReturnProcess());
    }
};
OrderReturnRequestService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
OrderReturnRequestService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderReturnRequestService_Factory() { return new OrderReturnRequestService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: OrderReturnRequestService, providedIn: "root" });
OrderReturnRequestService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderReturnRequestService);
export { OrderReturnRequestService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2ZhY2FkZS9vcmRlci1yZXR1cm4tcmVxdWVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsd0JBQXdCLEdBQ3pCLE1BQU0saURBQWlELENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQWlCLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFLOUUsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFDcEMsWUFDWSxLQUFvRCxFQUNwRCxXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUErQztRQUNwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDO0lBRUo7Ozs7T0FJRztJQUNILHdCQUF3QixDQUN0QixrQkFBK0M7UUFFL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDdkMs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MUIsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILDZCQUE2QjtRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUMzRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsNkJBQTZCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQzNELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQ0FBb0M7UUFDbEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUNGLENBQUE7O1lBOUpvQixLQUFLO1lBQ0MsV0FBVzs7O0FBSHpCLHlCQUF5QjtJQUhyQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1cseUJBQXlCLENBZ0tyQztTQWhLWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1xuICBSZXR1cm5SZXF1ZXN0LFxuICBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QsXG4gIFJldHVyblJlcXVlc3RMaXN0LFxuICBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uLFxufSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgQ0FOQ0VMX1JFVFVSTl9QUk9DRVNTX0lELCBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBvcmRlciByZXR1cm4gcmVxdWVzdFxuICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICogQHBhcmFtIHJldHVyblJlcXVlc3RJbnB1dCBvcmRlciByZXR1cm4gcmVxdWVzdCBlbnRyeSBpbnB1dFxuICAgKi9cbiAgY3JlYXRlT3JkZXJSZXR1cm5SZXF1ZXN0KFxuICAgIHJldHVyblJlcXVlc3RJbnB1dDogUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuQ3JlYXRlT3JkZXJSZXR1cm5SZXF1ZXN0KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgcmV0dXJuUmVxdWVzdElucHV0LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gb3JkZXIgcmV0dXJuIHJlcXVlc3RcbiAgICovXG4gIGdldE9yZGVyUmV0dXJuUmVxdWVzdCgpOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlclJldHVyblJlcXVlc3QpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIG9yZGVyIHJldHVybiByZXF1ZXN0IGxpc3RcbiAgICovXG4gIGdldE9yZGVyUmV0dXJuUmVxdWVzdExpc3QocGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdExpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyUmV0dXJuUmVxdWVzdExpc3RTdGF0ZSksXG4gICAgICB0YXAoKHJldHVybkxpc3RTdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICByZXR1cm5MaXN0U3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgIHJldHVybkxpc3RTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgcmV0dXJuTGlzdFN0YXRlLmVycm9yO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0KHBhZ2VTaXplKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHJldHVybkxpc3RTdGF0ZSkgPT4gcmV0dXJuTGlzdFN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgb3JkZXIgcmV0dXJuIHJlcXVlc3QgZGV0YWlsXG4gICAqIEBwYXJhbSByZXR1cm5SZXF1ZXN0Q29kZVxuICAgKi9cbiAgbG9hZE9yZGVyUmV0dXJuUmVxdWVzdERldGFpbChyZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5pbnZva2VXaXRoVXNlcklkKCh1c2VySWQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJSZXR1cm5SZXF1ZXN0KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgcmV0dXJuUmVxdWVzdENvZGUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIG9yZGVyIHJldHVybiByZXF1ZXN0IGxpc3RcbiAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgKiBAcGFyYW0gY3VycmVudFBhZ2UgY3VycmVudCBwYWdlXG4gICAqIEBwYXJhbSBzb3J0IHNvcnRcbiAgICovXG4gIGxvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0KFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmludm9rZVdpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgaWYgKHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0KHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgICAgY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBzb3J0LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5pbmcgb3JkZXIgcmV0dXJuIHJlcXVlc3QgbGlzdFxuICAgKi9cbiAgY2xlYXJPcmRlclJldHVyblJlcXVlc3RMaXN0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9yZGVyIHJldHVybiByZXF1ZXN0IGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0UmV0dXJuUmVxdWVzdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0TG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3JkZXIgcmV0dXJuIHJlcXVlc3Qgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRSZXR1cm5SZXF1ZXN0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlclJldHVyblJlcXVlc3RTdWNjZXNzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5pbmcgb3JkZXIgcmV0dXJuIHJlcXVlc3QgZGV0YWlsc1xuICAgKi9cbiAgY2xlYXJPcmRlclJldHVyblJlcXVlc3REZXRhaWwoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJPcmRlclJldHVyblJlcXVlc3QoKSk7XG4gIH1cblxuICAvKlxuICAgKiBDYW5jZWwgb3JkZXIgcmV0dXJuIHJlcXVlc3RcbiAgICovXG4gIGNhbmNlbE9yZGVyUmV0dXJuUmVxdWVzdChcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb246IFJldHVyblJlcXVlc3RNb2RpZmljYXRpb25cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5pbnZva2VXaXRoVXNlcklkKCh1c2VySWQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5DYW5jZWxPcmRlclJldHVyblJlcXVlc3Qoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICByZXR1cm5SZXF1ZXN0Q29kZSxcbiAgICAgICAgICByZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjYW5jZWwgcmV0dXJuIHJlcXVlc3QgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRDYW5jZWxSZXR1cm5SZXF1ZXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShDQU5DRUxfUkVUVVJOX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2FuY2VsIHJldHVybiByZXF1ZXN0IHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0Q2FuY2VsUmV0dXJuUmVxdWVzdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoQ0FOQ0VMX1JFVFVSTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgY2FuY2VsIHJldHVybiByZXF1ZXN0IHByb2Nlc3MgZmxhZ3NcbiAgICovXG4gIHJlc2V0Q2FuY2VsUmV0dXJuUmVxdWVzdFByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRDYW5jZWxSZXR1cm5Qcm9jZXNzKCkpO1xuICB9XG59XG4iXX0=