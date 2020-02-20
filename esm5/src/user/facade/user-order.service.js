import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_CURRENT } from '../../occ/index';
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
        this.withUserId(function (userId) {
            return _this.store.dispatch(new UserActions.LoadOrderDetails({
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
        this.withUserId(function (userId) {
            return _this.store.dispatch(new UserActions.LoadUserOrders({
                userId: userId,
                pageSize: pageSize,
                currentPage: currentPage,
                sort: sort,
            }));
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
        this.withUserId(function (userId) {
            return _this.store.dispatch(new UserActions.LoadConsignmentTracking({
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
        this.withUserId(function (userId) {
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
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     */
    UserOrderService.prototype.withUserId = function (callback) {
        if (this.authService) {
            this.authService
                .getOccUserId()
                .pipe(take(1))
                .subscribe(function (userId) { return callback(userId); });
        }
        else {
            // TODO(issue:#5628) Deprecated since 1.3.0
            callback(OCC_USER_ID_CURRENT);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFPN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdEQsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qix3QkFBd0IsR0FDekIsTUFBTSxpREFBaUQsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBaUIsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUs3RTtJQWNFLDBCQUNZLEtBQW9ELEVBQ3BELFdBQXlCO1FBRHpCLFVBQUssR0FBTCxLQUFLLENBQStDO1FBQ3BELGdCQUFXLEdBQVgsV0FBVyxDQUFjO0lBQ2xDLENBQUM7SUFFSjs7T0FFRztJQUNILDBDQUFlLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDJDQUFnQixHQUFoQixVQUFpQixTQUFpQjtRQUFsQyxpQkFTQztRQVJDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQSxNQUFN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QUFNO1NBQ25CLENBQUM7T0FDVyxnQkFBZ0IsQ0E4TDVCOzJCQXRORDtDQXNOQyxBQTlMRCxJQThMQztTQTlMWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29uc2lnbm1lbnQtdHJhY2tpbmcubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0LFxuICBPcmRlcixcbiAgT3JkZXJIaXN0b3J5TGlzdCxcbn0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgQ0FOQ0VMX09SREVSX1BST0NFU1NfSUQsIFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJPcmRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4yXG4gICAqICBVc2UgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICogIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgaW5zdGVhZFxuICAgKlxuICAgKiAgVE9ETyhpc3N1ZTojNTYyOCkgRGVwcmVjYXRlZCBzaW5jZSAxLjMuMFxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+Pik7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZT86IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvcmRlcidzIGRldGFpbFxuICAgKi9cbiAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlckRldGFpbHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgb3JkZXIncyBkZXRhaWxzXG4gICAqXG4gICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgKi9cbiAgbG9hZE9yZGVyRGV0YWlscyhvcmRlckNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJEZXRhaWxzKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgb3JkZXJDb2RlLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIG9yZGVyJ3MgZGV0YWlsc1xuICAgKi9cbiAgY2xlYXJPcmRlckRldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJPcmRlckRldGFpbHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvcmRlciBoaXN0b3J5IGxpc3RcbiAgICovXG4gIGdldE9yZGVySGlzdG9yeUxpc3QocGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJzU3RhdGUpLFxuICAgICAgdGFwKG9yZGVyTGlzdFN0YXRlID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgb3JkZXJMaXN0U3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgIG9yZGVyTGlzdFN0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICBvcmRlckxpc3RTdGF0ZS5lcnJvcjtcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JkZXJMaXN0KHBhZ2VTaXplKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAob3JkZXJMaXN0U3RhdGUgPT4gb3JkZXJMaXN0U3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGVkIGZsYWcgZm9yIG9yZGVyIGhpc3RvcnkgbGlzdFxuICAgKi9cbiAgZ2V0T3JkZXJIaXN0b3J5TGlzdExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlcnNMb2FkZWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYW4gb3JkZXIgbGlzdFxuICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICogQHBhcmFtIHNvcnQgc29ydFxuICAgKi9cbiAgbG9hZE9yZGVyTGlzdChwYWdlU2l6ZTogbnVtYmVyLCBjdXJyZW50UGFnZT86IG51bWJlciwgc29ydD86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlck9yZGVycyh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgICAgIHNvcnQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbmluZyBvcmRlciBsaXN0XG4gICAqL1xuICBjbGVhck9yZGVyTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhclVzZXJPcmRlcnMoKSk7XG4gIH1cblxuICAvKipcbiAgICogIFJldHVybnMgYSBjb25zaWdubWVudCB0cmFja2luZyBkZXRhaWxcbiAgICovXG4gIGdldENvbnNpZ25tZW50VHJhY2tpbmcoKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2lnbm1lbnRUcmFja2luZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBjb25zaWdubWVudCB0cmFja2luZyBkZXRhaWxzXG4gICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgKiBAcGFyYW0gY29uc2lnbm1lbnRDb2RlIGEgY29uc2lnbm1lbnQgY29kZVxuICAgKi9cbiAgbG9hZENvbnNpZ25tZW50VHJhY2tpbmcob3JkZXJDb2RlOiBzdHJpbmcsIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKHVzZXJJZCA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRDb25zaWdubWVudFRyYWNraW5nKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgb3JkZXJDb2RlLFxuICAgICAgICAgIGNvbnNpZ25tZW50Q29kZSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIGNvbnNpZ25tZW50IHRyYWNraW5nXG4gICAqL1xuICBjbGVhckNvbnNpZ25tZW50VHJhY2tpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJDb25zaWdubWVudFRyYWNraW5nKCkpO1xuICB9XG5cbiAgLypcbiAgICogQ2FuY2VsIGFuIG9yZGVyXG4gICAqL1xuICBjYW5jZWxPcmRlcihcbiAgICBvcmRlckNvZGU6IHN0cmluZyxcbiAgICBjYW5jZWxSZXF1ZXN0SW5wdXQ6IENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdFxuICApOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQodXNlcklkID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5DYW5jZWxPcmRlcih7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIG9yZGVyQ29kZSxcbiAgICAgICAgICBjYW5jZWxSZXF1ZXN0SW5wdXQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhbmNlbCBvcmRlciBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldENhbmNlbE9yZGVyTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShDQU5DRUxfT1JERVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjYW5jZWwgb3JkZXIgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRDYW5jZWxPcmRlclN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoQ0FOQ0VMX09SREVSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBjYW5jZWwgb3JkZXIgcHJvY2VzcyBmbGFnc1xuICAgKi9cbiAgcmVzZXRDYW5jZWxPcmRlclByb2Nlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRDYW5jZWxPcmRlclByb2Nlc3MoKSk7XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSBtZXRob2QgdG8gZGlzdGlucXVpc2ggcHJlIC8gcG9zdCAxLjMuMCBpbiBhIGNvbnZlbmllbnQgd2F5LlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSB3aXRoVXNlcklkKGNhbGxiYWNrOiAodXNlcklkOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRoU2VydmljZSkge1xuICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZSh1c2VySWQgPT4gY2FsbGJhY2sodXNlcklkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8oaXNzdWU6IzU2MjgpIERlcHJlY2F0ZWQgc2luY2UgMS4zLjBcbiAgICAgIGNhbGxiYWNrKE9DQ19VU0VSX0lEX0NVUlJFTlQpO1xuICAgIH1cbiAgfVxufVxuIl19