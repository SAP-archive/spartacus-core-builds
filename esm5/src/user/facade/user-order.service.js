/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { USERID_CURRENT } from '../../occ/utils/occ-constants';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var UserOrderService = /** @class */ (function () {
    function UserOrderService(store) {
        this.store = store;
    }
    /**
     * Returns an order's detail
     */
    /**
     * Returns an order's detail
     * @return {?}
     */
    UserOrderService.prototype.getOrderDetails = /**
     * Returns an order's detail
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getOrderDetails));
    };
    /**
     * Retrieves order's details
     *
     * @param orderCode an order code
     */
    /**
     * Retrieves order's details
     *
     * @param {?} orderCode an order code
     * @return {?}
     */
    UserOrderService.prototype.loadOrderDetails = /**
     * Retrieves order's details
     *
     * @param {?} orderCode an order code
     * @return {?}
     */
    function (orderCode) {
        this.store.dispatch(new UserActions.LoadOrderDetails({
            userId: USERID_CURRENT,
            orderCode: orderCode,
        }));
    };
    /**
     * Clears order's details
     */
    /**
     * Clears order's details
     * @return {?}
     */
    UserOrderService.prototype.clearOrderDetails = /**
     * Clears order's details
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.ClearOrderDetails());
    };
    /**
     * Returns order history list
     */
    /**
     * Returns order history list
     * @param {?} pageSize
     * @return {?}
     */
    UserOrderService.prototype.getOrderHistoryList = /**
     * Returns order history list
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        var _this = this;
        return this.store.pipe(select(UsersSelectors.getOrdersState), tap((/**
         * @param {?} orderListState
         * @return {?}
         */
        function (orderListState) {
            /** @type {?} */
            var attemptedLoad = orderListState.loading ||
                orderListState.success ||
                orderListState.error;
            if (!attemptedLoad) {
                _this.loadOrderList(pageSize);
            }
        })), map((/**
         * @param {?} orderListState
         * @return {?}
         */
        function (orderListState) { return orderListState.value; })));
    };
    /**
     * Returns a loaded flag for order history list
     */
    /**
     * Returns a loaded flag for order history list
     * @return {?}
     */
    UserOrderService.prototype.getOrderHistoryListLoaded = /**
     * Returns a loaded flag for order history list
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getOrdersLoaded));
    };
    /**
     * Retrieves an order list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    /**
     * Retrieves an order list
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    UserOrderService.prototype.loadOrderList = /**
     * Retrieves an order list
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    function (pageSize, currentPage, sort) {
        this.store.dispatch(new UserActions.LoadUserOrders({
            userId: USERID_CURRENT,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort,
        }));
    };
    /**
     * Cleaning order list
     */
    /**
     * Cleaning order list
     * @return {?}
     */
    UserOrderService.prototype.clearOrderList = /**
     * Cleaning order list
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.ClearUserOrders());
    };
    /**
     *  Returns a consignment tracking detail
     */
    /**
     *  Returns a consignment tracking detail
     * @return {?}
     */
    UserOrderService.prototype.getConsignmentTracking = /**
     *  Returns a consignment tracking detail
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getConsignmentTracking));
    };
    /**
     * Retrieves consignment tracking details
     * @param orderCode an order code
     * @param consignmentCode a consignment code
     */
    /**
     * Retrieves consignment tracking details
     * @param {?} orderCode an order code
     * @param {?} consignmentCode a consignment code
     * @return {?}
     */
    UserOrderService.prototype.loadConsignmentTracking = /**
     * Retrieves consignment tracking details
     * @param {?} orderCode an order code
     * @param {?} consignmentCode a consignment code
     * @return {?}
     */
    function (orderCode, consignmentCode) {
        this.store.dispatch(new UserActions.LoadConsignmentTracking({
            orderCode: orderCode,
            consignmentCode: consignmentCode,
        }));
    };
    /**
     * Cleaning consignment tracking
     */
    /**
     * Cleaning consignment tracking
     * @return {?}
     */
    UserOrderService.prototype.clearConsignmentTracking = /**
     * Cleaning consignment tracking
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.ClearConsignmentTracking());
    };
    UserOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserOrderService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ UserOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserOrderService_Factory() { return new UserOrderService(i0.ɵɵinject(i1.Store)); }, token: UserOrderService, providedIn: "root" });
    return UserOrderService;
}());
export { UserOrderService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserOrderService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFHMUQ7SUFJRSwwQkFBc0IsS0FBb0Q7UUFBcEQsVUFBSyxHQUFMLEtBQUssQ0FBK0M7SUFBRyxDQUFDO0lBRTlFOztPQUVHOzs7OztJQUNILDBDQUFlOzs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILDJDQUFnQjs7Ozs7O0lBQWhCLFVBQWlCLFNBQWlCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvQixNQUFNLEVBQUUsY0FBYztZQUN0QixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw0Q0FBaUI7Ozs7SUFBakI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCw4Q0FBbUI7Ozs7O0lBQW5CLFVBQW9CLFFBQWdCO1FBQXBDLGlCQWNDO1FBYkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFDckMsR0FBRzs7OztRQUFDLFVBQUEsY0FBYzs7Z0JBQ1YsYUFBYSxHQUNqQixjQUFjLENBQUMsT0FBTztnQkFDdEIsY0FBYyxDQUFDLE9BQU87Z0JBQ3RCLGNBQWMsQ0FBQyxLQUFLO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUI7UUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsS0FBSyxFQUFwQixDQUFvQixFQUFDLENBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsb0RBQXlCOzs7O0lBQXpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7OztJQUNILHdDQUFhOzs7Ozs7O0lBQWIsVUFBYyxRQUFnQixFQUFFLFdBQW9CLEVBQUUsSUFBYTtRQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQzdCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseUNBQWM7Ozs7SUFBZDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGlEQUFzQjs7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxrREFBdUI7Ozs7OztJQUF2QixVQUF3QixTQUFpQixFQUFFLGVBQXVCO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztZQUN0QyxTQUFTLEVBQUUsU0FBUztZQUNwQixlQUFlLEVBQUUsZUFBZTtTQUNqQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtREFBd0I7Ozs7SUFBeEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0JBOUdGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBYmdCLEtBQUs7OzsyQkFEdEI7Q0EySEMsQUEvR0QsSUErR0M7U0E1R1ksZ0JBQWdCOzs7Ozs7SUFDZixpQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29uc2lnbm1lbnQtdHJhY2tpbmcubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXIsIE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJPcmRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+Pikge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvcmRlcidzIGRldGFpbFxuICAgKi9cbiAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlckRldGFpbHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgb3JkZXIncyBkZXRhaWxzXG4gICAqXG4gICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgKi9cbiAgbG9hZE9yZGVyRGV0YWlscyhvcmRlckNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyRGV0YWlscyh7XG4gICAgICAgIHVzZXJJZDogVVNFUklEX0NVUlJFTlQsXG4gICAgICAgIG9yZGVyQ29kZTogb3JkZXJDb2RlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBvcmRlcidzIGRldGFpbHNcbiAgICovXG4gIGNsZWFyT3JkZXJEZXRhaWxzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyT3JkZXJEZXRhaWxzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb3JkZXIgaGlzdG9yeSBsaXN0XG4gICAqL1xuICBnZXRPcmRlckhpc3RvcnlMaXN0KHBhZ2VTaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyc1N0YXRlKSxcbiAgICAgIHRhcChvcmRlckxpc3RTdGF0ZSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgIG9yZGVyTGlzdFN0YXRlLmxvYWRpbmcgfHxcbiAgICAgICAgICBvcmRlckxpc3RTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgb3JkZXJMaXN0U3RhdGUuZXJyb3I7XG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCkge1xuICAgICAgICAgIHRoaXMubG9hZE9yZGVyTGlzdChwYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKG9yZGVyTGlzdFN0YXRlID0+IG9yZGVyTGlzdFN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRlZCBmbGFnIGZvciBvcmRlciBoaXN0b3J5IGxpc3RcbiAgICovXG4gIGdldE9yZGVySGlzdG9yeUxpc3RMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJzTG9hZGVkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFuIG9yZGVyIGxpc3RcbiAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgKiBAcGFyYW0gY3VycmVudFBhZ2UgY3VycmVudCBwYWdlXG4gICAqIEBwYXJhbSBzb3J0IHNvcnRcbiAgICovXG4gIGxvYWRPcmRlckxpc3QocGFnZVNpemU6IG51bWJlciwgY3VycmVudFBhZ2U/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyT3JkZXJzKHtcbiAgICAgICAgdXNlcklkOiBVU0VSSURfQ1VSUkVOVCxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXG4gICAgICAgIHNvcnQ6IHNvcnQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5pbmcgb3JkZXIgbGlzdFxuICAgKi9cbiAgY2xlYXJPcmRlckxpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJVc2VyT3JkZXJzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqICBSZXR1cm5zIGEgY29uc2lnbm1lbnQgdHJhY2tpbmcgZGV0YWlsXG4gICAqL1xuICBnZXRDb25zaWdubWVudFRyYWNraW5nKCk6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRUcmFja2luZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldENvbnNpZ25tZW50VHJhY2tpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgY29uc2lnbm1lbnQgdHJhY2tpbmcgZGV0YWlsc1xuICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICogQHBhcmFtIGNvbnNpZ25tZW50Q29kZSBhIGNvbnNpZ25tZW50IGNvZGVcbiAgICovXG4gIGxvYWRDb25zaWdubWVudFRyYWNraW5nKG9yZGVyQ29kZTogc3RyaW5nLCBjb25zaWdubWVudENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZENvbnNpZ25tZW50VHJhY2tpbmcoe1xuICAgICAgICBvcmRlckNvZGU6IG9yZGVyQ29kZSxcbiAgICAgICAgY29uc2lnbm1lbnRDb2RlOiBjb25zaWdubWVudENvZGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5pbmcgY29uc2lnbm1lbnQgdHJhY2tpbmdcbiAgICovXG4gIGNsZWFyQ29uc2lnbm1lbnRUcmFja2luZygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhckNvbnNpZ25tZW50VHJhY2tpbmcoKSk7XG4gIH1cbn1cbiJdfQ==