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
var UserOrderService = /** @class */ (function () {
    function UserOrderService(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Returns an order's detail
     */
    UserOrderService.prototype.getOrderDetails = function () {
        return this.store.pipe(select(UsersSelectors.getOrderDetails));
    };
    /**
     * Retrieves order's details
     *
     * @param orderCode an order code
     */
    UserOrderService.prototype.loadOrderDetails = function (orderCode) {
        var _this = this;
        this.authService.invokeWithUserId(function (userId) {
            _this.store.dispatch(new UserActions.LoadOrderDetails({
                userId: userId,
                orderCode: orderCode,
            }));
        });
    };
    /**
     * Clears order's details
     */
    UserOrderService.prototype.clearOrderDetails = function () {
        this.store.dispatch(new UserActions.ClearOrderDetails());
    };
    /**
     * Returns order history list
     */
    UserOrderService.prototype.getOrderHistoryList = function (pageSize) {
        var _this = this;
        return this.store.pipe(select(UsersSelectors.getOrdersState), tap(function (orderListState) {
            var attemptedLoad = orderListState.loading ||
                orderListState.success ||
                orderListState.error;
            if (!attemptedLoad) {
                _this.loadOrderList(pageSize);
            }
        }), map(function (orderListState) { return orderListState.value; }));
    };
    /**
     * Returns a loaded flag for order history list
     */
    UserOrderService.prototype.getOrderHistoryListLoaded = function () {
        return this.store.pipe(select(UsersSelectors.getOrdersLoaded));
    };
    /**
     * Retrieves an order list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    UserOrderService.prototype.loadOrderList = function (pageSize, currentPage, sort) {
        var _this = this;
        this.authService.invokeWithUserId(function (userId) {
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                _this.store.dispatch(new UserActions.LoadUserOrders({
                    userId: userId,
                    pageSize: pageSize,
                    currentPage: currentPage,
                    sort: sort,
                }));
            }
        });
    };
    /**
     * Cleaning order list
     */
    UserOrderService.prototype.clearOrderList = function () {
        this.store.dispatch(new UserActions.ClearUserOrders());
    };
    /**
     *  Returns a consignment tracking detail
     */
    UserOrderService.prototype.getConsignmentTracking = function () {
        return this.store.pipe(select(UsersSelectors.getConsignmentTracking));
    };
    /**
     * Retrieves consignment tracking details
     * @param orderCode an order code
     * @param consignmentCode a consignment code
     */
    UserOrderService.prototype.loadConsignmentTracking = function (orderCode, consignmentCode) {
        var _this = this;
        this.authService.invokeWithUserId(function (userId) {
            _this.store.dispatch(new UserActions.LoadConsignmentTracking({
                userId: userId,
                orderCode: orderCode,
                consignmentCode: consignmentCode,
            }));
        });
    };
    /**
     * Cleaning consignment tracking
     */
    UserOrderService.prototype.clearConsignmentTracking = function () {
        this.store.dispatch(new UserActions.ClearConsignmentTracking());
    };
    /*
     * Cancel an order
     */
    UserOrderService.prototype.cancelOrder = function (orderCode, cancelRequestInput) {
        var _this = this;
        this.authService.invokeWithUserId(function (userId) {
            _this.store.dispatch(new UserActions.CancelOrder({
                userId: userId,
                orderCode: orderCode,
                cancelRequestInput: cancelRequestInput,
            }));
        });
    };
    /**
     * Returns the cancel order loading flag
     */
    UserOrderService.prototype.getCancelOrderLoading = function () {
        return this.store.pipe(select(getProcessLoadingFactory(CANCEL_ORDER_PROCESS_ID)));
    };
    /**
     * Returns the cancel order success flag
     */
    UserOrderService.prototype.getCancelOrderSuccess = function () {
        return this.store.pipe(select(getProcessSuccessFactory(CANCEL_ORDER_PROCESS_ID)));
    };
    /**
     * Resets the cancel order process flags
     */
    UserOrderService.prototype.resetCancelOrderProcessState = function () {
        return this.store.dispatch(new UserActions.ResetCancelOrderProcess());
    };
    UserOrderService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    UserOrderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserOrderService_Factory() { return new UserOrderService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserOrderService, providedIn: "root" });
    UserOrderService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UserOrderService);
    return UserOrderService;
}());
export { UserOrderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU83RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV0RSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFpQixNQUFNLHFCQUFxQixDQUFDOzs7O0FBSzdFO0lBQ0UsMEJBQ1ksS0FBb0QsRUFDcEQsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOztPQUVHO0lBQ0gsMENBQWUsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMkNBQWdCLEdBQWhCLFVBQWlCLFNBQWlCO1FBQWxDLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFDLE1B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QXFEO1FBRnZELGlCQWFDO1FBVEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFDLE1BQU07WUFDdkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQztnQkFDMUIsTUFBTSxRQUFBO2dCQUNOLFNBQVMsV0FBQTtnQkFDVCxrQkFBa0Isb0JBQUE7YUFDbkIsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILGdEQUFxQixHQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxnREFBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsdURBQTRCLEdBQTVCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Z0JBaEtrQixLQUFLO2dCQUNDLFdBQVc7OztJQUh6QixnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQW1LNUI7MkJBM0xEO0NBMkxDLEFBbktELElBbUtDO1NBbktZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQge1xuICBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3QsXG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxufSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgQ0FOQ0VMX09SREVSX1BST0NFU1NfSUQsIFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJPcmRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvcmRlcidzIGRldGFpbFxuICAgKi9cbiAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlckRldGFpbHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgb3JkZXIncyBkZXRhaWxzXG4gICAqXG4gICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgKi9cbiAgbG9hZE9yZGVyRGV0YWlscyhvcmRlckNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyRGV0YWlscyh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIG9yZGVyQ29kZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIG9yZGVyJ3MgZGV0YWlsc1xuICAgKi9cbiAgY2xlYXJPcmRlckRldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJPcmRlckRldGFpbHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvcmRlciBoaXN0b3J5IGxpc3RcbiAgICovXG4gIGdldE9yZGVySGlzdG9yeUxpc3QocGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJzU3RhdGUpLFxuICAgICAgdGFwKChvcmRlckxpc3RTdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICBvcmRlckxpc3RTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgb3JkZXJMaXN0U3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgIG9yZGVyTGlzdFN0YXRlLmVycm9yO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWRPcmRlckxpc3QocGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgob3JkZXJMaXN0U3RhdGUpID0+IG9yZGVyTGlzdFN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRlZCBmbGFnIGZvciBvcmRlciBoaXN0b3J5IGxpc3RcbiAgICovXG4gIGdldE9yZGVySGlzdG9yeUxpc3RMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJzTG9hZGVkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFuIG9yZGVyIGxpc3RcbiAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgKiBAcGFyYW0gY3VycmVudFBhZ2UgY3VycmVudCBwYWdlXG4gICAqIEBwYXJhbSBzb3J0IHNvcnRcbiAgICovXG4gIGxvYWRPcmRlckxpc3QocGFnZVNpemU6IG51bWJlciwgY3VycmVudFBhZ2U/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmludm9rZVdpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgaWYgKHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyT3JkZXJzKHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgICAgY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBzb3J0LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5pbmcgb3JkZXIgbGlzdFxuICAgKi9cbiAgY2xlYXJPcmRlckxpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJVc2VyT3JkZXJzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqICBSZXR1cm5zIGEgY29uc2lnbm1lbnQgdHJhY2tpbmcgZGV0YWlsXG4gICAqL1xuICBnZXRDb25zaWdubWVudFRyYWNraW5nKCk6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRUcmFja2luZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNpZ25tZW50VHJhY2tpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgY29uc2lnbm1lbnQgdHJhY2tpbmcgZGV0YWlsc1xuICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICogQHBhcmFtIGNvbnNpZ25tZW50Q29kZSBhIGNvbnNpZ25tZW50IGNvZGVcbiAgICovXG4gIGxvYWRDb25zaWdubWVudFRyYWNraW5nKG9yZGVyQ29kZTogc3RyaW5nLCBjb25zaWdubWVudENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZENvbnNpZ25tZW50VHJhY2tpbmcoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBvcmRlckNvZGUsXG4gICAgICAgICAgY29uc2lnbm1lbnRDb2RlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbmluZyBjb25zaWdubWVudCB0cmFja2luZ1xuICAgKi9cbiAgY2xlYXJDb25zaWdubWVudFRyYWNraW5nKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyQ29uc2lnbm1lbnRUcmFja2luZygpKTtcbiAgfVxuXG4gIC8qXG4gICAqIENhbmNlbCBhbiBvcmRlclxuICAgKi9cbiAgY2FuY2VsT3JkZXIoXG4gICAgb3JkZXJDb2RlOiBzdHJpbmcsXG4gICAgY2FuY2VsUmVxdWVzdElucHV0OiBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3RcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5pbnZva2VXaXRoVXNlcklkKCh1c2VySWQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5DYW5jZWxPcmRlcih7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIG9yZGVyQ29kZSxcbiAgICAgICAgICBjYW5jZWxSZXF1ZXN0SW5wdXQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhbmNlbCBvcmRlciBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldENhbmNlbE9yZGVyTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShDQU5DRUxfT1JERVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjYW5jZWwgb3JkZXIgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRDYW5jZWxPcmRlclN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoQ0FOQ0VMX09SREVSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBjYW5jZWwgb3JkZXIgcHJvY2VzcyBmbGFnc1xuICAgKi9cbiAgcmVzZXRDYW5jZWxPcmRlclByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRDYW5jZWxPcmRlclByb2Nlc3MoKSk7XG4gIH1cbn1cbiJdfQ==