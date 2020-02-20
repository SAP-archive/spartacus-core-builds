import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { CANCEL_RETURN_PROCESS_ID } from '../store/user-state';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { OCC_USER_ID_CURRENT } from '../../occ/index';
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
        this.withUserId(userId => {
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
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequestListState), tap(returnListState => {
            const attemptedLoad = returnListState.loading ||
                returnListState.success ||
                returnListState.error;
            if (!attemptedLoad) {
                this.loadOrderReturnRequestList(pageSize);
            }
        }), map(returnListState => returnListState.value));
    }
    /**
     * Loads order return request detail
     * @param returnRequestCode
     */
    loadOrderReturnRequestDetail(returnRequestCode) {
        this.withUserId(userId => {
            this.store.dispatch(new UserActions.LoadOrderReturnRequest({
                userId: userId,
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
        this.withUserId(userId => {
            this.store.dispatch(new UserActions.LoadOrderReturnRequestList({
                userId: userId,
                pageSize: pageSize,
                currentPage: currentPage,
                sort: sort,
            }));
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
        this.withUserId(userId => {
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
    /*
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     */
    withUserId(callback) {
        if (this.authService) {
            this.authService
                .getOccUserId()
                .pipe(take(1))
                .subscribe(userId => callback(userId));
        }
        else {
            // TODO(issue:#5628) Deprecated since 1.3.0
            callback(OCC_USER_ID_CURRENT);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2ZhY2FkZS9vcmRlci1yZXR1cm4tcmVxdWVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU83RCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBRXpELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLdEQsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFDcEMsWUFDWSxLQUFvRCxFQUNwRCxXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUErQztRQUNwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDO0lBRUo7Ozs7T0FJRztJQUNILHdCQUF3QixDQUN0QixrQkFBK0M7UUFFL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3ZDLE1BQU07Z0JB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RztJQUNILDZCQUE2QjtRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUMzRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsNkJBQTZCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQzNELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQ0FBb0M7UUFDbEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFVBQVUsQ0FBQyxRQUFrQztRQUNuRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVc7aUJBQ2IsWUFBWSxFQUFFO2lCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNMLDJDQUEyQztZQUMzQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7Q0FDRixDQUFBOztZQTVLb0IsS0FBSztZQUNDLFdBQVc7OztBQUh6Qix5QkFBeUI7SUFIckMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHlCQUF5QixDQThLckM7U0E5S1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgUmV0dXJuUmVxdWVzdExpc3QsXG4gIFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdCxcbiAgUmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbixcbn0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5LFxuICBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnksXG59IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgQ0FOQ0VMX1JFVFVSTl9QUk9DRVNTX0lEIH0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBvcmRlciByZXR1cm4gcmVxdWVzdFxuICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICogQHBhcmFtIHJldHVyblJlcXVlc3RJbnB1dCBvcmRlciByZXR1cm4gcmVxdWVzdCBlbnRyeSBpbnB1dFxuICAgKi9cbiAgY3JlYXRlT3JkZXJSZXR1cm5SZXF1ZXN0KFxuICAgIHJldHVyblJlcXVlc3RJbnB1dDogUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdCh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHJldHVyblJlcXVlc3RJbnB1dCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIG9yZGVyIHJldHVybiByZXF1ZXN0XG4gICAqL1xuICBnZXRPcmRlclJldHVyblJlcXVlc3QoKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0KSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBvcmRlciByZXR1cm4gcmVxdWVzdCBsaXN0XG4gICAqL1xuICBnZXRPcmRlclJldHVyblJlcXVlc3RMaXN0KHBhZ2VTaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3RMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlclJldHVyblJlcXVlc3RMaXN0U3RhdGUpLFxuICAgICAgdGFwKHJldHVybkxpc3RTdGF0ZSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgIHJldHVybkxpc3RTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgcmV0dXJuTGlzdFN0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICByZXR1cm5MaXN0U3RhdGUuZXJyb3I7XG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCkge1xuICAgICAgICAgIHRoaXMubG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3QocGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcChyZXR1cm5MaXN0U3RhdGUgPT4gcmV0dXJuTGlzdFN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgb3JkZXIgcmV0dXJuIHJlcXVlc3QgZGV0YWlsXG4gICAqIEBwYXJhbSByZXR1cm5SZXF1ZXN0Q29kZVxuICAgKi9cbiAgbG9hZE9yZGVyUmV0dXJuUmVxdWVzdERldGFpbChyZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKHVzZXJJZCA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyUmV0dXJuUmVxdWVzdCh7XG4gICAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgcmV0dXJuUmVxdWVzdENvZGUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIG9yZGVyIHJldHVybiByZXF1ZXN0IGxpc3RcbiAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgKiBAcGFyYW0gY3VycmVudFBhZ2UgY3VycmVudCBwYWdlXG4gICAqIEBwYXJhbSBzb3J0IHNvcnRcbiAgICovXG4gIGxvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0KFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQodXNlcklkID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdCh7XG4gICAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgICBzb3J0OiBzb3J0LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbmluZyBvcmRlciByZXR1cm4gcmVxdWVzdCBsaXN0XG4gICAqL1xuICBjbGVhck9yZGVyUmV0dXJuUmVxdWVzdExpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJPcmRlclJldHVyblJlcXVlc3RMaXN0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3JkZXIgcmV0dXJuIHJlcXVlc3QgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRSZXR1cm5SZXF1ZXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlclJldHVyblJlcXVlc3RMb2FkaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvcmRlciByZXR1cm4gcmVxdWVzdCBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFJldHVyblJlcXVlc3RTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyUmV0dXJuUmVxdWVzdFN1Y2Nlc3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbmluZyBvcmRlciByZXR1cm4gcmVxdWVzdCBkZXRhaWxzXG4gICAqL1xuICBjbGVhck9yZGVyUmV0dXJuUmVxdWVzdERldGFpbCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhck9yZGVyUmV0dXJuUmVxdWVzdCgpKTtcbiAgfVxuXG4gIC8qXG4gICAqIENhbmNlbCBvcmRlciByZXR1cm4gcmVxdWVzdFxuICAgKi9cbiAgY2FuY2VsT3JkZXJSZXR1cm5SZXF1ZXN0KFxuICAgIHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbjogUmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvblxuICApOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQodXNlcklkID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5DYW5jZWxPcmRlclJldHVyblJlcXVlc3Qoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICByZXR1cm5SZXF1ZXN0Q29kZSxcbiAgICAgICAgICByZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjYW5jZWwgcmV0dXJuIHJlcXVlc3QgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRDYW5jZWxSZXR1cm5SZXF1ZXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShDQU5DRUxfUkVUVVJOX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2FuY2VsIHJldHVybiByZXF1ZXN0IHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0Q2FuY2VsUmV0dXJuUmVxdWVzdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoQ0FOQ0VMX1JFVFVSTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgY2FuY2VsIHJldHVybiByZXF1ZXN0IHByb2Nlc3MgZmxhZ3NcbiAgICovXG4gIHJlc2V0Q2FuY2VsUmV0dXJuUmVxdWVzdFByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRDYW5jZWxSZXR1cm5Qcm9jZXNzKCkpO1xuICB9XG5cbiAgLypcbiAgICogVXRpbGl0eSBtZXRob2QgdG8gZGlzdGlucXVpc2ggcHJlIC8gcG9zdCAxLjMuMCBpbiBhIGNvbnZlbmllbnQgd2F5LlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSB3aXRoVXNlcklkKGNhbGxiYWNrOiAodXNlcklkOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRoU2VydmljZSkge1xuICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZSh1c2VySWQgPT4gY2FsbGJhY2sodXNlcklkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8oaXNzdWU6IzU2MjgpIERlcHJlY2F0ZWQgc2luY2UgMS4zLjBcbiAgICAgIGNhbGxiYWNrKE9DQ19VU0VSX0lEX0NVUlJFTlQpO1xuICAgIH1cbiAgfVxufVxuIl19