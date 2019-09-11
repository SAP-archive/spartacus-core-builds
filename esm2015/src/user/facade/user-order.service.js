/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { USERID_CURRENT } from '../../occ/utils/occ-constants';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class UserOrderService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
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
        this.store.dispatch(new UserActions.LoadOrderDetails({
            userId: USERID_CURRENT,
            orderCode: orderCode,
        }));
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
        this.store.dispatch(new UserActions.LoadUserOrders({
            userId: USERID_CURRENT,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort,
        }));
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
    { type: Store }
];
/** @nocollapse */ UserOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserOrderService_Factory() { return new UserOrderService(i0.ɵɵinject(i1.Store)); }, token: UserOrderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserOrderService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFNMUQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixZQUFzQixLQUFvRDtRQUFwRCxVQUFLLEdBQUwsS0FBSyxDQUErQztJQUFHLENBQUM7Ozs7O0lBSzlFLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7O0lBT0QsZ0JBQWdCLENBQUMsU0FBaUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDO1lBQy9CLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBS0QsbUJBQW1CLENBQUMsUUFBZ0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFDckMsR0FBRzs7OztRQUFDLGNBQWMsQ0FBQyxFQUFFOztrQkFDYixhQUFhLEdBQ2pCLGNBQWMsQ0FBQyxPQUFPO2dCQUN0QixjQUFjLENBQUMsT0FBTztnQkFDdEIsY0FBYyxDQUFDLEtBQUs7WUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QjtRQUNILENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUMsQ0FDNUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QseUJBQXlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7Ozs7O0lBUUQsYUFBYSxDQUFDLFFBQWdCLEVBQUUsV0FBb0IsRUFBRSxJQUFhO1FBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDN0IsTUFBTSxFQUFFLGNBQWM7WUFDdEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsY0FBYztRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFLRCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7Ozs7O0lBT0QsdUJBQXVCLENBQUMsU0FBaUIsRUFBRSxlQUF1QjtRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUM7WUFDdEMsU0FBUyxFQUFFLFNBQVM7WUFDcEIsZUFBZSxFQUFFLGVBQWU7U0FDakMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUtELHdCQUF3QjtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7O1lBOUdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWJnQixLQUFLOzs7Ozs7OztJQWVSLGlDQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFVTRVJJRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck9yZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9yZGVyJ3MgZGV0YWlsXG4gICAqL1xuICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyRGV0YWlscykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBvcmRlcidzIGRldGFpbHNcbiAgICpcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAqL1xuICBsb2FkT3JkZXJEZXRhaWxzKG9yZGVyQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJEZXRhaWxzKHtcbiAgICAgICAgdXNlcklkOiBVU0VSSURfQ1VSUkVOVCxcbiAgICAgICAgb3JkZXJDb2RlOiBvcmRlckNvZGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIG9yZGVyJ3MgZGV0YWlsc1xuICAgKi9cbiAgY2xlYXJPcmRlckRldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJPcmRlckRldGFpbHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvcmRlciBoaXN0b3J5IGxpc3RcbiAgICovXG4gIGdldE9yZGVySGlzdG9yeUxpc3QocGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJzU3RhdGUpLFxuICAgICAgdGFwKG9yZGVyTGlzdFN0YXRlID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgb3JkZXJMaXN0U3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgIG9yZGVyTGlzdFN0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICBvcmRlckxpc3RTdGF0ZS5lcnJvcjtcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JkZXJMaXN0KHBhZ2VTaXplKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAob3JkZXJMaXN0U3RhdGUgPT4gb3JkZXJMaXN0U3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGVkIGZsYWcgZm9yIG9yZGVyIGhpc3RvcnkgbGlzdFxuICAgKi9cbiAgZ2V0T3JkZXJIaXN0b3J5TGlzdExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlcnNMb2FkZWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYW4gb3JkZXIgbGlzdFxuICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICogQHBhcmFtIHNvcnQgc29ydFxuICAgKi9cbiAgbG9hZE9yZGVyTGlzdChwYWdlU2l6ZTogbnVtYmVyLCBjdXJyZW50UGFnZT86IG51bWJlciwgc29ydD86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJPcmRlcnMoe1xuICAgICAgICB1c2VySWQ6IFVTRVJJRF9DVVJSRU5ULFxuICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgc29ydDogc29ydCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbmluZyBvcmRlciBsaXN0XG4gICAqL1xuICBjbGVhck9yZGVyTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhclVzZXJPcmRlcnMoKSk7XG4gIH1cblxuICAvKipcbiAgICogIFJldHVybnMgYSBjb25zaWdubWVudCB0cmFja2luZyBkZXRhaWxcbiAgICovXG4gIGdldENvbnNpZ25tZW50VHJhY2tpbmcoKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0Q29uc2lnbm1lbnRUcmFja2luZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBjb25zaWdubWVudCB0cmFja2luZyBkZXRhaWxzXG4gICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgKiBAcGFyYW0gY29uc2lnbm1lbnRDb2RlIGEgY29uc2lnbm1lbnQgY29kZVxuICAgKi9cbiAgbG9hZENvbnNpZ25tZW50VHJhY2tpbmcob3JkZXJDb2RlOiBzdHJpbmcsIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkQ29uc2lnbm1lbnRUcmFja2luZyh7XG4gICAgICAgIG9yZGVyQ29kZTogb3JkZXJDb2RlLFxuICAgICAgICBjb25zaWdubWVudENvZGU6IGNvbnNpZ25tZW50Q29kZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbmluZyBjb25zaWdubWVudCB0cmFja2luZ1xuICAgKi9cbiAgY2xlYXJDb25zaWdubWVudFRyYWNraW5nKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyQ29uc2lnbm1lbnRUcmFja2luZygpKTtcbiAgfVxufVxuIl19