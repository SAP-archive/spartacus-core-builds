/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
export class UserOrderService {
    /**
     * @param {?} store
     * @param {?=} authService
     */
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Returns an order's detail
     * @return {?}
     */
    getOrderDetails() {
        return this.store.pipe(select(UsersSelectors.getOrderDetails));
    }
    /**
     * Retrieves order's details
     *
     * @param {?} orderCode an order code
     * @return {?}
     */
    loadOrderDetails(orderCode) {
        this.authService
            .getOccUserId()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} occUserId
         * @return {?}
         */
        occUserId => this.store.dispatch(new UserActions.LoadOrderDetails({
            userId: occUserId,
            orderCode: orderCode,
        }))))
            .unsubscribe();
    }
    /**
     * Clears order's details
     * @return {?}
     */
    clearOrderDetails() {
        this.store.dispatch(new UserActions.ClearOrderDetails());
    }
    /**
     * Returns order history list
     * @param {?} pageSize
     * @return {?}
     */
    getOrderHistoryList(pageSize) {
        return this.store.pipe(select(UsersSelectors.getOrdersState), tap((/**
         * @param {?} orderListState
         * @return {?}
         */
        orderListState => {
            /** @type {?} */
            const attemptedLoad = orderListState.loading ||
                orderListState.success ||
                orderListState.error;
            if (!attemptedLoad) {
                this.loadOrderList(pageSize);
            }
        })), map((/**
         * @param {?} orderListState
         * @return {?}
         */
        orderListState => orderListState.value)));
    }
    /**
     * Returns a loaded flag for order history list
     * @return {?}
     */
    getOrderHistoryListLoaded() {
        return this.store.pipe(select(UsersSelectors.getOrdersLoaded));
    }
    /**
     * Retrieves an order list
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    loadOrderList(pageSize, currentPage, sort) {
        this.authService
            .getOccUserId()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} occUserId
         * @return {?}
         */
        occUserId => this.store.dispatch(new UserActions.LoadUserOrders({
            userId: occUserId,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort,
        }))))
            .unsubscribe();
    }
    /**
     * Cleaning order list
     * @return {?}
     */
    clearOrderList() {
        this.store.dispatch(new UserActions.ClearUserOrders());
    }
    /**
     *  Returns a consignment tracking detail
     * @return {?}
     */
    getConsignmentTracking() {
        return this.store.pipe(select(UsersSelectors.getConsignmentTracking));
    }
    /**
     * Retrieves consignment tracking details
     * @param {?} orderCode an order code
     * @param {?} consignmentCode a consignment code
     * @return {?}
     */
    loadConsignmentTracking(orderCode, consignmentCode) {
        this.store.dispatch(new UserActions.LoadConsignmentTracking({
            orderCode: orderCode,
            consignmentCode: consignmentCode,
        }));
    }
    /**
     * Cleaning consignment tracking
     * @return {?}
     */
    clearConsignmentTracking() {
        this.store.dispatch(new UserActions.ClearConsignmentTracking());
    }
}
UserOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserOrderService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
/** @nocollapse */ UserOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserOrderService_Factory() { return new UserOrderService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserOrderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserOrderService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    UserOrderService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFJN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQU0xRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQVkzQixZQUNZLEtBQW9ELEVBQ3BELFdBQXlCO1FBRHpCLFVBQUssR0FBTCxLQUFLLENBQStDO1FBQ3BELGdCQUFXLEdBQVgsV0FBVyxDQUFjO0lBQ2xDLENBQUM7Ozs7O0lBS0osZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7Ozs7SUFPRCxnQkFBZ0IsQ0FBQyxTQUFpQjtRQUNoQyxJQUFJLENBQUMsV0FBVzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDO1lBQy9CLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUMsQ0FDSCxFQUNGO2FBQ0EsV0FBVyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFLRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBS0QsbUJBQW1CLENBQUMsUUFBZ0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFDckMsR0FBRzs7OztRQUFDLGNBQWMsQ0FBQyxFQUFFOztrQkFDYixhQUFhLEdBQ2pCLGNBQWMsQ0FBQyxPQUFPO2dCQUN0QixjQUFjLENBQUMsT0FBTztnQkFDdEIsY0FBYyxDQUFDLEtBQUs7WUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QjtRQUNILENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUMsQ0FDNUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QseUJBQXlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7Ozs7O0lBUUQsYUFBYSxDQUFDLFFBQWdCLEVBQUUsV0FBb0IsRUFBRSxJQUFhO1FBQ2pFLElBQUksQ0FBQyxXQUFXO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVM7Ozs7UUFBQyxTQUFTLENBQUMsRUFBRSxDQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQzdCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUNILEVBQ0Y7YUFDQSxXQUFXLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUtELGNBQWM7UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBS0Qsc0JBQXNCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7OztJQU9ELHVCQUF1QixDQUFDLFNBQWlCLEVBQUUsZUFBdUI7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLHVCQUF1QixDQUFDO1lBQ3RDLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLGVBQWUsRUFBRSxlQUFlO1NBQ2pDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCx3QkFBd0I7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7OztZQXhJRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFiZ0IsS0FBSztZQUdiLFdBQVc7Ozs7Ozs7O0lBd0JoQixpQ0FBOEQ7Ozs7O0lBQzlELHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJPcmRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4yXG4gICAqICBVc2UgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICogIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgaW5zdGVhZFxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+Pik7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZT86IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvcmRlcidzIGRldGFpbFxuICAgKi9cbiAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlckRldGFpbHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgb3JkZXIncyBkZXRhaWxzXG4gICAqXG4gICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgKi9cbiAgbG9hZE9yZGVyRGV0YWlscyhvcmRlckNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUob2NjVXNlcklkID0+XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlckRldGFpbHMoe1xuICAgICAgICAgICAgdXNlcklkOiBvY2NVc2VySWQsXG4gICAgICAgICAgICBvcmRlckNvZGU6IG9yZGVyQ29kZSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgb3JkZXIncyBkZXRhaWxzXG4gICAqL1xuICBjbGVhck9yZGVyRGV0YWlscygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhck9yZGVyRGV0YWlscygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9yZGVyIGhpc3RvcnkgbGlzdFxuICAgKi9cbiAgZ2V0T3JkZXJIaXN0b3J5TGlzdChwYWdlU2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlcnNTdGF0ZSksXG4gICAgICB0YXAob3JkZXJMaXN0U3RhdGUgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICBvcmRlckxpc3RTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgb3JkZXJMaXN0U3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgIG9yZGVyTGlzdFN0YXRlLmVycm9yO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWRPcmRlckxpc3QocGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcChvcmRlckxpc3RTdGF0ZSA9PiBvcmRlckxpc3RTdGF0ZS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkZWQgZmxhZyBmb3Igb3JkZXIgaGlzdG9yeSBsaXN0XG4gICAqL1xuICBnZXRPcmRlckhpc3RvcnlMaXN0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyc0xvYWRlZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbiBvcmRlciBsaXN0XG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlIGN1cnJlbnQgcGFnZVxuICAgKiBAcGFyYW0gc29ydCBzb3J0XG4gICAqL1xuICBsb2FkT3JkZXJMaXN0KHBhZ2VTaXplOiBudW1iZXIsIGN1cnJlbnRQYWdlPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShvY2NVc2VySWQgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJPcmRlcnMoe1xuICAgICAgICAgICAgdXNlcklkOiBvY2NVc2VySWQsXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBzb3J0OiBzb3J0LFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIG9yZGVyIGxpc3RcbiAgICovXG4gIGNsZWFyT3JkZXJMaXN0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyVXNlck9yZGVycygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhIGNvbnNpZ25tZW50IHRyYWNraW5nIGRldGFpbFxuICAgKi9cbiAgZ2V0Q29uc2lnbm1lbnRUcmFja2luZygpOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zaWdubWVudFRyYWNraW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGNvbnNpZ25tZW50IHRyYWNraW5nIGRldGFpbHNcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAqIEBwYXJhbSBjb25zaWdubWVudENvZGUgYSBjb25zaWdubWVudCBjb2RlXG4gICAqL1xuICBsb2FkQ29uc2lnbm1lbnRUcmFja2luZyhvcmRlckNvZGU6IHN0cmluZywgY29uc2lnbm1lbnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRDb25zaWdubWVudFRyYWNraW5nKHtcbiAgICAgICAgb3JkZXJDb2RlOiBvcmRlckNvZGUsXG4gICAgICAgIGNvbnNpZ25tZW50Q29kZTogY29uc2lnbm1lbnRDb2RlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIGNvbnNpZ25tZW50IHRyYWNraW5nXG4gICAqL1xuICBjbGVhckNvbnNpZ25tZW50VHJhY2tpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJDb25zaWdubWVudFRyYWNraW5nKCkpO1xuICB9XG59XG4iXX0=