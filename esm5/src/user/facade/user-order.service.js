/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { USERID_CURRENT } from '../../occ/utils/occ-constants';
import * as fromStore from '../store/index';
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
        return this.store.pipe(select(fromStore.getOrderDetails));
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
        this.store.dispatch(new fromStore.LoadOrderDetails({
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
        this.store.dispatch(new fromStore.ClearOrderDetails());
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
        return this.store.pipe(select(fromStore.getOrdersState), tap((/**
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
        return this.store.pipe(select(fromStore.getOrdersLoaded));
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
        this.store.dispatch(new fromStore.LoadUserOrders({
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
        this.store.dispatch(new fromStore.ClearUserOrders());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRCxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDOzs7QUFFNUM7SUFJRSwwQkFDWSxLQUVUO1FBRlMsVUFBSyxHQUFMLEtBQUssQ0FFZDtJQUNBLENBQUM7SUFFSjs7T0FFRzs7Ozs7SUFDSCwwQ0FBZTs7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCwyQ0FBZ0I7Ozs7OztJQUFoQixVQUFpQixTQUFpQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFLGNBQWM7WUFDdEIsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsNENBQWlCOzs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsOENBQW1COzs7OztJQUFuQixVQUFvQixRQUFnQjtRQUFwQyxpQkFjQztRQWJDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQ2hDLEdBQUc7Ozs7UUFBQyxVQUFBLGNBQWM7O2dCQUNWLGFBQWEsR0FDakIsY0FBYyxDQUFDLE9BQU87Z0JBQ3RCLGNBQWMsQ0FBQyxPQUFPO2dCQUN0QixjQUFjLENBQUMsS0FBSztZQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNsQixLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLEtBQUssRUFBcEIsQ0FBb0IsRUFBQyxDQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG9EQUF5Qjs7OztJQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7SUFDSCx3Q0FBYTs7Ozs7OztJQUFiLFVBQWMsUUFBZ0IsRUFBRSxXQUFvQixFQUFFLElBQWE7UUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQztZQUMzQixNQUFNLEVBQUUsY0FBYztZQUN0QixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsV0FBVztZQUN4QixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHlDQUFjOzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O2dCQXRGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZnQixLQUFLOzs7MkJBRHRCO0NBZ0dDLEFBdkZELElBdUZDO1NBcEZZLGdCQUFnQjs7Ozs7O0lBRXpCLGlDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXIsIE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIGZyb21Qcm9jZXNzU3RvcmUgZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyT3JkZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxcbiAgICAgIGZyb21TdG9yZS5TdGF0ZVdpdGhVc2VyIHwgZnJvbVByb2Nlc3NTdG9yZS5TdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+XG4gICAgPlxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb3JkZXIncyBkZXRhaWxcbiAgICovXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldE9yZGVyRGV0YWlscykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBvcmRlcidzIGRldGFpbHNcbiAgICpcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAqL1xuICBsb2FkT3JkZXJEZXRhaWxzKG9yZGVyQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuTG9hZE9yZGVyRGV0YWlscyh7XG4gICAgICAgIHVzZXJJZDogVVNFUklEX0NVUlJFTlQsXG4gICAgICAgIG9yZGVyQ29kZTogb3JkZXJDb2RlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBvcmRlcidzIGRldGFpbHNcbiAgICovXG4gIGNsZWFyT3JkZXJEZXRhaWxzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5DbGVhck9yZGVyRGV0YWlscygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9yZGVyIGhpc3RvcnkgbGlzdFxuICAgKi9cbiAgZ2V0T3JkZXJIaXN0b3J5TGlzdChwYWdlU2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuZ2V0T3JkZXJzU3RhdGUpLFxuICAgICAgdGFwKG9yZGVyTGlzdFN0YXRlID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgb3JkZXJMaXN0U3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgIG9yZGVyTGlzdFN0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICBvcmRlckxpc3RTdGF0ZS5lcnJvcjtcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JkZXJMaXN0KHBhZ2VTaXplKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAob3JkZXJMaXN0U3RhdGUgPT4gb3JkZXJMaXN0U3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGVkIGZsYWcgZm9yIG9yZGVyIGhpc3RvcnkgbGlzdFxuICAgKi9cbiAgZ2V0T3JkZXJIaXN0b3J5TGlzdExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0T3JkZXJzTG9hZGVkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFuIG9yZGVyIGxpc3RcbiAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgKiBAcGFyYW0gY3VycmVudFBhZ2UgY3VycmVudCBwYWdlXG4gICAqIEBwYXJhbSBzb3J0IHNvcnRcbiAgICovXG4gIGxvYWRPcmRlckxpc3QocGFnZVNpemU6IG51bWJlciwgY3VycmVudFBhZ2U/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5Mb2FkVXNlck9yZGVycyh7XG4gICAgICAgIHVzZXJJZDogVVNFUklEX0NVUlJFTlQsXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxuICAgICAgICBzb3J0OiBzb3J0LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIG9yZGVyIGxpc3RcbiAgICovXG4gIGNsZWFyT3JkZXJMaXN0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5DbGVhclVzZXJPcmRlcnMoKSk7XG4gIH1cbn1cbiJdfQ==