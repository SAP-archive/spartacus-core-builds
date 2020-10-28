import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { CANCEL_REPLENISHMENT_ORDER_PROCESS_ID, } from '../store/user-state';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/user-auth/facade/user-id.service";
export class UserReplenishmentOrderService {
    constructor(store, userIdService) {
        this.store = store;
        this.userIdService = userIdService;
    }
    /**
     * Returns replenishment order details for a given 'current' user
     *
     * @param replenishmentOrderCode a replenishment order code
     */
    loadReplenishmentOrderDetails(replenishmentOrderCode) {
        this.userIdService.invokeWithUserId((userId) => {
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                this.store.dispatch(new UserActions.LoadReplenishmentOrderDetails({
                    userId,
                    replenishmentOrderCode,
                }));
            }
        });
    }
    /**
     * Returns a replenishment order details
     */
    getReplenishmentOrderDetails() {
        return this.store.pipe(select(UsersSelectors.getReplenishmentOrderDetailsValue));
    }
    /**
     * Returns a replenishment order details loading flag
     */
    getReplenishmentOrderDetailsLoading() {
        return this.store.pipe(select(UsersSelectors.getReplenishmentOrderDetailsLoading));
    }
    /**
     * Returns a replenishment order details success flag
     */
    getReplenishmentOrderDetailsSuccess() {
        return this.store.pipe(select(UsersSelectors.getReplenishmentOrderDetailsSuccess));
    }
    /**
     * Returns a replenishment order details error flag
     */
    getReplenishmentOrderDetailsError() {
        return this.store.pipe(select(UsersSelectors.getReplenishmentOrderDetailsError));
    }
    /**
     * Clears the replenishment orders details state
     */
    clearReplenishmentOrderDetails() {
        this.store.dispatch(new UserActions.ClearReplenishmentOrderDetails());
    }
    /**
     * Cancels a specific replenishment order for a given 'current' user
     *
     * @param replenishmentOrderCode a replenishment order code
     */
    cancelReplenishmentOrder(replenishmentOrderCode) {
        this.userIdService.invokeWithUserId((userId) => {
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                this.store.dispatch(new UserActions.CancelReplenishmentOrder({
                    userId,
                    replenishmentOrderCode,
                }));
            }
        });
    }
    /**
     * Returns the cancel replenishment order loading flag
     */
    getCancelReplenishmentOrderLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(CANCEL_REPLENISHMENT_ORDER_PROCESS_ID)));
    }
    /**
     * Returns the cancel replenishment order success flag
     */
    getCancelReplenishmentOrderSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(CANCEL_REPLENISHMENT_ORDER_PROCESS_ID)));
    }
    /**
     * Returns the cancel replenishment order error flag
     */
    getCancelReplenishmentOrderError() {
        return this.store.pipe(select(getProcessErrorFactory(CANCEL_REPLENISHMENT_ORDER_PROCESS_ID)));
    }
    /**
     * Clears the cancel replenishment order processing state
     */
    clearCancelReplenishmentOrderProcessState() {
        this.store.dispatch(new UserActions.ClearCancelReplenishmentOrder());
    }
    /**
     * Returns replenishment order history list
     */
    getReplenishmentOrderHistoryList(pageSize) {
        return this.store.pipe(select(UsersSelectors.getReplenishmentOrdersState), tap((replenishmentOrderListState) => {
            const attemptedLoad = replenishmentOrderListState.loading ||
                replenishmentOrderListState.success ||
                replenishmentOrderListState.error;
            if (!attemptedLoad) {
                this.loadReplenishmentOrderList(pageSize);
            }
        }), map((replenishmentOrderListState) => replenishmentOrderListState.value));
    }
    /**
     * Returns a loading flag for replenishment order history list
     */
    getReplenishmentOrderHistoryListLoading() {
        return this.store.pipe(select(UsersSelectors.getReplenishmentOrdersLoading));
    }
    /**
     * Returns a error flag for replenishment order history list
     */
    getReplenishmentOrderHistoryListError() {
        return this.store.pipe(select(UsersSelectors.getReplenishmentOrdersError));
    }
    /**
     * Returns a success flag for replenishment order history list
     */
    getReplenishmentOrderHistoryListSuccess() {
        return this.store.pipe(select(UsersSelectors.getReplenishmentOrdersSuccess));
    }
    /**
     * Retrieves a replenishment order list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadReplenishmentOrderList(pageSize, currentPage, sort) {
        this.userIdService.invokeWithUserId((userId) => {
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                this.store.dispatch(new UserActions.LoadUserReplenishmentOrders({
                    userId,
                    pageSize,
                    currentPage,
                    sort,
                }));
            }
        });
    }
    /**
     * Cleaning replenishment order list
     */
    clearReplenishmentOrderList() {
        this.store.dispatch(new UserActions.ClearUserReplenishmentOrders());
    }
}
UserReplenishmentOrderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserReplenishmentOrderService_Factory() { return new UserReplenishmentOrderService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.UserIdService)); }, token: UserReplenishmentOrderService, providedIn: "root" });
UserReplenishmentOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
UserReplenishmentOrderService.ctorParameters = () => [
    { type: Store },
    { type: UserIdService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZXBsZW5pc2htZW50LW9yZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91c2VyL2ZhY2FkZS91c2VyLXJlcGxlbmlzaG1lbnQtb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBSzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUNMLHFDQUFxQyxHQUV0QyxNQUFNLHFCQUFxQixDQUFDOzs7O0FBSzdCLE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsWUFDWSxLQUFvRCxFQUNwRCxhQUE0QjtRQUQ1QixVQUFLLEdBQUwsS0FBSyxDQUErQztRQUNwRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNyQyxDQUFDO0lBRUo7Ozs7T0FJRztJQUNILDZCQUE2QixDQUFDLHNCQUE4QjtRQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxNQUFNLEtBQUsscUJBQXFCLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxLQUFL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OztZQXhCZ0IsS0FBSztZQUdiLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVc2VySWRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvZmFjYWRlL3VzZXItaWQuc2VydmljZSc7XG5pbXBvcnQge1xuICBSZXBsZW5pc2htZW50T3JkZXIsXG4gIFJlcGxlbmlzaG1lbnRPcmRlckxpc3QsXG59IGZyb20gJy4uLy4uL21vZGVsL3JlcGxlbmlzaG1lbnQtb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBnZXRQcm9jZXNzRXJyb3JGYWN0b3J5LFxuICBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnksXG4gIGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIENBTkNFTF9SRVBMRU5JU0hNRU5UX09SREVSX1BST0NFU1NfSUQsXG4gIFN0YXRlV2l0aFVzZXIsXG59IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlclJlcGxlbmlzaG1lbnRPcmRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgdXNlcklkU2VydmljZTogVXNlcklkU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcmVwbGVuaXNobWVudCBvcmRlciBkZXRhaWxzIGZvciBhIGdpdmVuICdjdXJyZW50JyB1c2VyXG4gICAqXG4gICAqIEBwYXJhbSByZXBsZW5pc2htZW50T3JkZXJDb2RlIGEgcmVwbGVuaXNobWVudCBvcmRlciBjb2RlXG4gICAqL1xuICBsb2FkUmVwbGVuaXNobWVudE9yZGVyRGV0YWlscyhyZXBsZW5pc2htZW50T3JkZXJDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJJZFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICBpZiAodXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHMoe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgcmVwbGVuaXNobWVudE9yZGVyQ29kZSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZXBsZW5pc2htZW50IG9yZGVyIGRldGFpbHNcbiAgICovXG4gIGdldFJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxSZXBsZW5pc2htZW50T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHNWYWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZXBsZW5pc2htZW50IG9yZGVyIGRldGFpbHMgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRSZXBsZW5pc2htZW50T3JkZXJEZXRhaWxzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHNMb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlcGxlbmlzaG1lbnQgb3JkZXIgZGV0YWlscyBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHNTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0UmVwbGVuaXNobWVudE9yZGVyRGV0YWlsc1N1Y2Nlc3MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVwbGVuaXNobWVudCBvcmRlciBkZXRhaWxzIGVycm9yIGZsYWdcbiAgICovXG4gIGdldFJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHNFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHNFcnJvcilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgcmVwbGVuaXNobWVudCBvcmRlcnMgZGV0YWlscyBzdGF0ZVxuICAgKi9cbiAgY2xlYXJSZXBsZW5pc2htZW50T3JkZXJEZXRhaWxzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyUmVwbGVuaXNobWVudE9yZGVyRGV0YWlscygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIGEgc3BlY2lmaWMgcmVwbGVuaXNobWVudCBvcmRlciBmb3IgYSBnaXZlbiAnY3VycmVudCcgdXNlclxuICAgKlxuICAgKiBAcGFyYW0gcmVwbGVuaXNobWVudE9yZGVyQ29kZSBhIHJlcGxlbmlzaG1lbnQgb3JkZXIgY29kZVxuICAgKi9cbiAgY2FuY2VsUmVwbGVuaXNobWVudE9yZGVyKHJlcGxlbmlzaG1lbnRPcmRlckNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXNlcklkU2VydmljZS5pbnZva2VXaXRoVXNlcklkKCh1c2VySWQpID0+IHtcbiAgICAgIGlmICh1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5DYW5jZWxSZXBsZW5pc2htZW50T3JkZXIoe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgcmVwbGVuaXNobWVudE9yZGVyQ29kZSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhbmNlbCByZXBsZW5pc2htZW50IG9yZGVyIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0Q2FuY2VsUmVwbGVuaXNobWVudE9yZGVyTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShDQU5DRUxfUkVQTEVOSVNITUVOVF9PUkRFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhbmNlbCByZXBsZW5pc2htZW50IG9yZGVyIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0Q2FuY2VsUmVwbGVuaXNobWVudE9yZGVyU3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShDQU5DRUxfUkVQTEVOSVNITUVOVF9PUkRFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhbmNlbCByZXBsZW5pc2htZW50IG9yZGVyIGVycm9yIGZsYWdcbiAgICovXG4gIGdldENhbmNlbFJlcGxlbmlzaG1lbnRPcmRlckVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShDQU5DRUxfUkVQTEVOSVNITUVOVF9PUkRFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgY2FuY2VsIHJlcGxlbmlzaG1lbnQgb3JkZXIgcHJvY2Vzc2luZyBzdGF0ZVxuICAgKi9cbiAgY2xlYXJDYW5jZWxSZXBsZW5pc2htZW50T3JkZXJQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJDYW5jZWxSZXBsZW5pc2htZW50T3JkZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByZXBsZW5pc2htZW50IG9yZGVyIGhpc3RvcnkgbGlzdFxuICAgKi9cbiAgZ2V0UmVwbGVuaXNobWVudE9yZGVySGlzdG9yeUxpc3QoXG4gICAgcGFnZVNpemU6IG51bWJlclxuICApOiBPYnNlcnZhYmxlPFJlcGxlbmlzaG1lbnRPcmRlckxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFJlcGxlbmlzaG1lbnRPcmRlcnNTdGF0ZSksXG4gICAgICB0YXAoKHJlcGxlbmlzaG1lbnRPcmRlckxpc3RTdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICByZXBsZW5pc2htZW50T3JkZXJMaXN0U3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgIHJlcGxlbmlzaG1lbnRPcmRlckxpc3RTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgcmVwbGVuaXNobWVudE9yZGVyTGlzdFN0YXRlLmVycm9yO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWRSZXBsZW5pc2htZW50T3JkZXJMaXN0KHBhZ2VTaXplKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHJlcGxlbmlzaG1lbnRPcmRlckxpc3RTdGF0ZSkgPT4gcmVwbGVuaXNobWVudE9yZGVyTGlzdFN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgcmVwbGVuaXNobWVudCBvcmRlciBoaXN0b3J5IGxpc3RcbiAgICovXG4gIGdldFJlcGxlbmlzaG1lbnRPcmRlckhpc3RvcnlMaXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFJlcGxlbmlzaG1lbnRPcmRlcnNMb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGVycm9yIGZsYWcgZm9yIHJlcGxlbmlzaG1lbnQgb3JkZXIgaGlzdG9yeSBsaXN0XG4gICAqL1xuICBnZXRSZXBsZW5pc2htZW50T3JkZXJIaXN0b3J5TGlzdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFJlcGxlbmlzaG1lbnRPcmRlcnNFcnJvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdWNjZXNzIGZsYWcgZm9yIHJlcGxlbmlzaG1lbnQgb3JkZXIgaGlzdG9yeSBsaXN0XG4gICAqL1xuICBnZXRSZXBsZW5pc2htZW50T3JkZXJIaXN0b3J5TGlzdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRSZXBsZW5pc2htZW50T3JkZXJzU3VjY2VzcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhIHJlcGxlbmlzaG1lbnQgb3JkZXIgbGlzdFxuICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICogQHBhcmFtIHNvcnQgc29ydFxuICAgKi9cbiAgbG9hZFJlcGxlbmlzaG1lbnRPcmRlckxpc3QoXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJJZFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICBpZiAodXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJSZXBsZW5pc2htZW50T3JkZXJzKHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgICAgY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBzb3J0LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5pbmcgcmVwbGVuaXNobWVudCBvcmRlciBsaXN0XG4gICAqL1xuICBjbGVhclJlcGxlbmlzaG1lbnRPcmRlckxpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJVc2VyUmVwbGVuaXNobWVudE9yZGVycygpKTtcbiAgfVxufVxuIl19