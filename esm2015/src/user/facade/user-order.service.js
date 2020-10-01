import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { RoutingService } from '../../routing/facade/routing.service';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { CANCEL_ORDER_PROCESS_ID } from '../store/user-state';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "../../routing/facade/routing.service";
export class UserOrderService {
    constructor(store, authService, routingService) {
        this.store = store;
        this.authService = authService;
        this.routingService = routingService;
    }
    /**
     * Returns an order's detail
     */
    getOrderDetails() {
        return this.store.pipe(select(UsersSelectors.getOrderDetails));
    }
    /**
     * Retrieves order's details
     *
     * @param orderCode an order code
     */
    loadOrderDetails(orderCode) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.LoadOrderDetails({
                userId,
                orderCode,
            }));
        });
    }
    /**
     * Clears order's details
     */
    clearOrderDetails() {
        this.store.dispatch(new UserActions.ClearOrderDetails());
    }
    /**
     * Returns order history list
     */
    getOrderHistoryList(pageSize) {
        return this.store.pipe(select(UsersSelectors.getOrdersState), tap((orderListState) => {
            const attemptedLoad = orderListState.loading ||
                orderListState.success ||
                orderListState.error;
            if (!attemptedLoad) {
                this.loadOrderList(pageSize);
            }
        }), map((orderListState) => orderListState.value));
    }
    /**
     * Returns a loaded flag for order history list
     */
    getOrderHistoryListLoaded() {
        return this.store.pipe(select(UsersSelectors.getOrdersLoaded));
    }
    /**
     * Retrieves an order list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadOrderList(pageSize, currentPage, sort) {
        this.authService.invokeWithUserId((userId) => {
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                let replenishmentOrderCode;
                this.routingService
                    .getRouterState()
                    .pipe(take(1))
                    .subscribe((data) => {
                    var _a, _b;
                    replenishmentOrderCode = (_b = (_a = data === null || data === void 0 ? void 0 : data.state) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.replenishmentOrderCode;
                })
                    .unsubscribe();
                this.store.dispatch(new UserActions.LoadUserOrders({
                    userId,
                    pageSize,
                    currentPage,
                    sort,
                    replenishmentOrderCode,
                }));
            }
        });
    }
    /**
     * Cleaning order list
     */
    clearOrderList() {
        this.store.dispatch(new UserActions.ClearUserOrders());
    }
    /**
     *  Returns a consignment tracking detail
     */
    getConsignmentTracking() {
        return this.store.pipe(select(UsersSelectors.getConsignmentTracking));
    }
    /**
     * Retrieves consignment tracking details
     * @param orderCode an order code
     * @param consignmentCode a consignment code
     */
    loadConsignmentTracking(orderCode, consignmentCode) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.LoadConsignmentTracking({
                userId,
                orderCode,
                consignmentCode,
            }));
        });
    }
    /**
     * Cleaning consignment tracking
     */
    clearConsignmentTracking() {
        this.store.dispatch(new UserActions.ClearConsignmentTracking());
    }
    /*
     * Cancel an order
     */
    cancelOrder(orderCode, cancelRequestInput) {
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.CancelOrder({
                userId,
                orderCode,
                cancelRequestInput,
            }));
        });
    }
    /**
     * Returns the cancel order loading flag
     */
    getCancelOrderLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(CANCEL_ORDER_PROCESS_ID)));
    }
    /**
     * Returns the cancel order success flag
     */
    getCancelOrderSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(CANCEL_ORDER_PROCESS_ID)));
    }
    /**
     * Resets the cancel order process flags
     */
    resetCancelOrderProcessState() {
        return this.store.dispatch(new UserActions.ResetCancelOrderProcess());
    }
}
UserOrderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserOrderService_Factory() { return new UserOrderService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.RoutingService)); }, token: UserOrderService, providedIn: "root" });
UserOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
UserOrderService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: RoutingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvdXNlci9mYWNhZGUvdXNlci1vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsd0JBQXdCLEdBQ3pCLE1BQU0saURBQWlELENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFpQixNQUFNLHFCQUFxQixDQUFDOzs7OztBQUs3RSxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQ1ksS0FBb0QsRUFDcEQsV0FBd0IsRUFDeEIsY0FBOEI7UUFGOUIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3ZDLENBQUM7SUFFSjs7T0FFRztJQUNILGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMs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dkJnQixLQUFLO1lBR2IsV0FBVztZQWFYLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29uc2lnbm1lbnQtdHJhY2tpbmcubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0LFxuICBPcmRlcixcbiAgT3JkZXJIaXN0b3J5TGlzdCxcbn0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnksXG4gIGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IENBTkNFTF9PUkRFUl9QUk9DRVNTX0lELCBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyT3JkZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvcmRlcidzIGRldGFpbFxuICAgKi9cbiAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlckRldGFpbHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgb3JkZXIncyBkZXRhaWxzXG4gICAqXG4gICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgKi9cbiAgbG9hZE9yZGVyRGV0YWlscyhvcmRlckNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyRGV0YWlscyh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIG9yZGVyQ29kZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIG9yZGVyJ3MgZGV0YWlsc1xuICAgKi9cbiAgY2xlYXJPcmRlckRldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJPcmRlckRldGFpbHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvcmRlciBoaXN0b3J5IGxpc3RcbiAgICovXG4gIGdldE9yZGVySGlzdG9yeUxpc3QocGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJzU3RhdGUpLFxuICAgICAgdGFwKChvcmRlckxpc3RTdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICBvcmRlckxpc3RTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgb3JkZXJMaXN0U3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgIG9yZGVyTGlzdFN0YXRlLmVycm9yO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWRPcmRlckxpc3QocGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgob3JkZXJMaXN0U3RhdGUpID0+IG9yZGVyTGlzdFN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRlZCBmbGFnIGZvciBvcmRlciBoaXN0b3J5IGxpc3RcbiAgICovXG4gIGdldE9yZGVySGlzdG9yeUxpc3RMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJzTG9hZGVkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFuIG9yZGVyIGxpc3RcbiAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgKiBAcGFyYW0gY3VycmVudFBhZ2UgY3VycmVudCBwYWdlXG4gICAqIEBwYXJhbSBzb3J0IHNvcnRcbiAgICovXG4gIGxvYWRPcmRlckxpc3QocGFnZVNpemU6IG51bWJlciwgY3VycmVudFBhZ2U/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmludm9rZVdpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgaWYgKHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgIGxldCByZXBsZW5pc2htZW50T3JkZXJDb2RlOiBzdHJpbmc7XG5cbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXBsZW5pc2htZW50T3JkZXJDb2RlID1cbiAgICAgICAgICAgICAgZGF0YT8uc3RhdGU/LnBhcmFtcz8ucmVwbGVuaXNobWVudE9yZGVyQ29kZTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyT3JkZXJzKHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgICAgY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgcmVwbGVuaXNobWVudE9yZGVyQ29kZSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIG9yZGVyIGxpc3RcbiAgICovXG4gIGNsZWFyT3JkZXJMaXN0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyVXNlck9yZGVycygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhIGNvbnNpZ25tZW50IHRyYWNraW5nIGRldGFpbFxuICAgKi9cbiAgZ2V0Q29uc2lnbm1lbnRUcmFja2luZygpOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zaWdubWVudFRyYWNraW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGNvbnNpZ25tZW50IHRyYWNraW5nIGRldGFpbHNcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAqIEBwYXJhbSBjb25zaWdubWVudENvZGUgYSBjb25zaWdubWVudCBjb2RlXG4gICAqL1xuICBsb2FkQ29uc2lnbm1lbnRUcmFja2luZyhvcmRlckNvZGU6IHN0cmluZywgY29uc2lnbm1lbnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmludm9rZVdpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRDb25zaWdubWVudFRyYWNraW5nKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgb3JkZXJDb2RlLFxuICAgICAgICAgIGNvbnNpZ25tZW50Q29kZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5pbmcgY29uc2lnbm1lbnQgdHJhY2tpbmdcbiAgICovXG4gIGNsZWFyQ29uc2lnbm1lbnRUcmFja2luZygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhckNvbnNpZ25tZW50VHJhY2tpbmcoKSk7XG4gIH1cblxuICAvKlxuICAgKiBDYW5jZWwgYW4gb3JkZXJcbiAgICovXG4gIGNhbmNlbE9yZGVyKFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNhbmNlbFJlcXVlc3RJbnB1dDogQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuQ2FuY2VsT3JkZXIoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBvcmRlckNvZGUsXG4gICAgICAgICAgY2FuY2VsUmVxdWVzdElucHV0LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjYW5jZWwgb3JkZXIgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRDYW5jZWxPcmRlckxvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoQ0FOQ0VMX09SREVSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2FuY2VsIG9yZGVyIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0Q2FuY2VsT3JkZXJTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KENBTkNFTF9PUkRFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgY2FuY2VsIG9yZGVyIHByb2Nlc3MgZmxhZ3NcbiAgICovXG4gIHJlc2V0Q2FuY2VsT3JkZXJQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlc2V0Q2FuY2VsT3JkZXJQcm9jZXNzKCkpO1xuICB9XG59XG4iXX0=