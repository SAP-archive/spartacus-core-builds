import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { CANCEL_ORDER_PROCESS_ID } from '../store/user-state';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
let UserOrderService = class UserOrderService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
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
                this.store.dispatch(new UserActions.LoadUserOrders({
                    userId,
                    pageSize,
                    currentPage,
                    sort,
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
};
UserOrderService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
UserOrderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserOrderService_Factory() { return new UserOrderService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserOrderService, providedIn: "root" });
UserOrderService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserOrderService);
export { UserOrderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU83RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV0RSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFpQixNQUFNLHFCQUFxQixDQUFDOzs7O0FBSzdFLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLFlBQ1ksS0FBb0QsRUFDcEQsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOztPQUVHO0lBQ0gsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsZ0JBQWdCLENBQUMsU0FBaUI7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxD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Q0FDakIsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDO2dCQUMxQixNQUFNO2dCQUNOLFNBQVM7Z0JBQ1Qsa0JBQWtCO2FBQ25CLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FDMUQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsNEJBQTRCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FDRixDQUFBOztZQWpLb0IsS0FBSztZQUNDLFdBQVc7OztBQUh6QixnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQW1LNUI7U0FuS1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7XG4gIENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgT3JkZXIsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG59IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5LFxuICBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnksXG59IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2Vyc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBDQU5DRUxfT1JERVJfUFJPQ0VTU19JRCwgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck9yZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9yZGVyJ3MgZGV0YWlsXG4gICAqL1xuICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyRGV0YWlscykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBvcmRlcidzIGRldGFpbHNcbiAgICpcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAqL1xuICBsb2FkT3JkZXJEZXRhaWxzKG9yZGVyQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5pbnZva2VXaXRoVXNlcklkKCh1c2VySWQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJEZXRhaWxzKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgb3JkZXJDb2RlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgb3JkZXIncyBkZXRhaWxzXG4gICAqL1xuICBjbGVhck9yZGVyRGV0YWlscygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhck9yZGVyRGV0YWlscygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9yZGVyIGhpc3RvcnkgbGlzdFxuICAgKi9cbiAgZ2V0T3JkZXJIaXN0b3J5TGlzdChwYWdlU2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlcnNTdGF0ZSksXG4gICAgICB0YXAoKG9yZGVyTGlzdFN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgIG9yZGVyTGlzdFN0YXRlLmxvYWRpbmcgfHxcbiAgICAgICAgICBvcmRlckxpc3RTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgb3JkZXJMaXN0U3RhdGUuZXJyb3I7XG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCkge1xuICAgICAgICAgIHRoaXMubG9hZE9yZGVyTGlzdChwYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChvcmRlckxpc3RTdGF0ZSkgPT4gb3JkZXJMaXN0U3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGVkIGZsYWcgZm9yIG9yZGVyIGhpc3RvcnkgbGlzdFxuICAgKi9cbiAgZ2V0T3JkZXJIaXN0b3J5TGlzdExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlcnNMb2FkZWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYW4gb3JkZXIgbGlzdFxuICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICogQHBhcmFtIHNvcnQgc29ydFxuICAgKi9cbiAgbG9hZE9yZGVyTGlzdChwYWdlU2l6ZTogbnVtYmVyLCBjdXJyZW50UGFnZT86IG51bWJlciwgc29ydD86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICBpZiAodXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJPcmRlcnMoe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgICAgICBjdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbmluZyBvcmRlciBsaXN0XG4gICAqL1xuICBjbGVhck9yZGVyTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhclVzZXJPcmRlcnMoKSk7XG4gIH1cblxuICAvKipcbiAgICogIFJldHVybnMgYSBjb25zaWdubWVudCB0cmFja2luZyBkZXRhaWxcbiAgICovXG4gIGdldENvbnNpZ25tZW50VHJhY2tpbmcoKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2lnbm1lbnRUcmFja2luZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBjb25zaWdubWVudCB0cmFja2luZyBkZXRhaWxzXG4gICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgKiBAcGFyYW0gY29uc2lnbm1lbnRDb2RlIGEgY29uc2lnbm1lbnQgY29kZVxuICAgKi9cbiAgbG9hZENvbnNpZ25tZW50VHJhY2tpbmcob3JkZXJDb2RlOiBzdHJpbmcsIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5pbnZva2VXaXRoVXNlcklkKCh1c2VySWQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkQ29uc2lnbm1lbnRUcmFja2luZyh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIG9yZGVyQ29kZSxcbiAgICAgICAgICBjb25zaWdubWVudENvZGUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIGNvbnNpZ25tZW50IHRyYWNraW5nXG4gICAqL1xuICBjbGVhckNvbnNpZ25tZW50VHJhY2tpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJDb25zaWdubWVudFRyYWNraW5nKCkpO1xuICB9XG5cbiAgLypcbiAgICogQ2FuY2VsIGFuIG9yZGVyXG4gICAqL1xuICBjYW5jZWxPcmRlcihcbiAgICBvcmRlckNvZGU6IHN0cmluZyxcbiAgICBjYW5jZWxSZXF1ZXN0SW5wdXQ6IENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdFxuICApOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmludm9rZVdpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkNhbmNlbE9yZGVyKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgb3JkZXJDb2RlLFxuICAgICAgICAgIGNhbmNlbFJlcXVlc3RJbnB1dCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2FuY2VsIG9yZGVyIGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0Q2FuY2VsT3JkZXJMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KENBTkNFTF9PUkRFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhbmNlbCBvcmRlciBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldENhbmNlbE9yZGVyU3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShDQU5DRUxfT1JERVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGNhbmNlbCBvcmRlciBwcm9jZXNzIGZsYWdzXG4gICAqL1xuICByZXNldENhbmNlbE9yZGVyUHJvY2Vzc1N0YXRlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5SZXNldENhbmNlbE9yZGVyUHJvY2VzcygpKTtcbiAgfVxufVxuIl19