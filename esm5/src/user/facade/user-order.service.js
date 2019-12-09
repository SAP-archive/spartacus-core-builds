/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_CURRENT } from '../../occ/index';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
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
        var _this = this;
        this.withUserId((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            return _this.store.dispatch(new UserActions.LoadOrderDetails({
                userId: userId,
                orderCode: orderCode,
            }));
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
        var _this = this;
        this.withUserId((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            return _this.store.dispatch(new UserActions.LoadUserOrders({
                userId: userId,
                pageSize: pageSize,
                currentPage: currentPage,
                sort: sort,
            }));
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
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     */
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     * @private
     * @param {?} callback
     * @return {?}
     */
    UserOrderService.prototype.withUserId = /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     * @private
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        if (this.authService) {
            this.authService
                .getOccUserId()
                .pipe(take(1))
                .subscribe((/**
             * @param {?} userId
             * @return {?}
             */
            function (userId) { return callback(userId); }));
        }
        else {
            // TODO(issue:#5628) Deprecated since 1.3.0
            callback(OCC_USER_ID_CURRENT);
        }
    };
    UserOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserOrderService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    /** @nocollapse */ UserOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserOrderService_Factory() { return new UserOrderService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserOrderService, providedIn: "root" });
    return UserOrderService;
}());
export { UserOrderService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUcxRDtJQWlCRSwwQkFDWSxLQUFvRCxFQUNwRCxXQUF5QjtRQUR6QixVQUFLLEdBQUwsS0FBSyxDQUErQztRQUNwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYztJQUNsQyxDQUFDO0lBRUo7O09BRUc7Ozs7O0lBQ0gsMENBQWU7Ozs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsMkNBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsU0FBaUI7UUFBbEMsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUEsTUFBTTtZQUNwQixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDL0IsTUFB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QSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQWhCLENBQWdCLEVBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsMkNBQTJDO1lBQzNDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Z0JBbEpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZGdCLEtBQUs7Z0JBR2IsV0FBVzs7OzJCQUpwQjtDQWdLQyxBQW5KRCxJQW1KQztTQWhKWSxnQkFBZ0I7Ozs7OztJQWV6QixpQ0FBOEQ7Ozs7O0lBQzlELHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi9vY2MvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck9yZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjJcbiAgICogIFVzZSBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgKiAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSBpbnN0ZWFkXG4gICAqXG4gICAqICBUT0RPKGlzc3VlOiM1NjI4KSBEZXByZWNhdGVkIHNpbmNlIDEuMy4wXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+KTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlPzogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9yZGVyJ3MgZGV0YWlsXG4gICAqL1xuICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyRGV0YWlscykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBvcmRlcidzIGRldGFpbHNcbiAgICpcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAqL1xuICBsb2FkT3JkZXJEZXRhaWxzKG9yZGVyQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKHVzZXJJZCA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlckRldGFpbHMoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBvcmRlckNvZGUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgb3JkZXIncyBkZXRhaWxzXG4gICAqL1xuICBjbGVhck9yZGVyRGV0YWlscygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhck9yZGVyRGV0YWlscygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9yZGVyIGhpc3RvcnkgbGlzdFxuICAgKi9cbiAgZ2V0T3JkZXJIaXN0b3J5TGlzdChwYWdlU2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlcnNTdGF0ZSksXG4gICAgICB0YXAob3JkZXJMaXN0U3RhdGUgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICBvcmRlckxpc3RTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgb3JkZXJMaXN0U3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgIG9yZGVyTGlzdFN0YXRlLmVycm9yO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWRPcmRlckxpc3QocGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcChvcmRlckxpc3RTdGF0ZSA9PiBvcmRlckxpc3RTdGF0ZS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkZWQgZmxhZyBmb3Igb3JkZXIgaGlzdG9yeSBsaXN0XG4gICAqL1xuICBnZXRPcmRlckhpc3RvcnlMaXN0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyc0xvYWRlZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbiBvcmRlciBsaXN0XG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlIGN1cnJlbnQgcGFnZVxuICAgKiBAcGFyYW0gc29ydCBzb3J0XG4gICAqL1xuICBsb2FkT3JkZXJMaXN0KHBhZ2VTaXplOiBudW1iZXIsIGN1cnJlbnRQYWdlPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKHVzZXJJZCA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyT3JkZXJzKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgICAgY3VycmVudFBhZ2UsXG4gICAgICAgICAgc29ydCxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIG9yZGVyIGxpc3RcbiAgICovXG4gIGNsZWFyT3JkZXJMaXN0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyVXNlck9yZGVycygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhIGNvbnNpZ25tZW50IHRyYWNraW5nIGRldGFpbFxuICAgKi9cbiAgZ2V0Q29uc2lnbm1lbnRUcmFja2luZygpOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRDb25zaWdubWVudFRyYWNraW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGNvbnNpZ25tZW50IHRyYWNraW5nIGRldGFpbHNcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAqIEBwYXJhbSBjb25zaWdubWVudENvZGUgYSBjb25zaWdubWVudCBjb2RlXG4gICAqL1xuICBsb2FkQ29uc2lnbm1lbnRUcmFja2luZyhvcmRlckNvZGU6IHN0cmluZywgY29uc2lnbm1lbnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRDb25zaWdubWVudFRyYWNraW5nKHtcbiAgICAgICAgb3JkZXJDb2RlOiBvcmRlckNvZGUsXG4gICAgICAgIGNvbnNpZ25tZW50Q29kZTogY29uc2lnbm1lbnRDb2RlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIGNvbnNpZ25tZW50IHRyYWNraW5nXG4gICAqL1xuICBjbGVhckNvbnNpZ25tZW50VHJhY2tpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJDb25zaWdubWVudFRyYWNraW5nKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIGRpc3RpbnF1aXNoIHByZSAvIHBvc3QgMS4zLjAgaW4gYSBjb252ZW5pZW50IHdheS5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgd2l0aFVzZXJJZChjYWxsYmFjazogKHVzZXJJZDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UpIHtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUodXNlcklkID0+IGNhbGxiYWNrKHVzZXJJZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPKGlzc3VlOiM1NjI4KSBEZXByZWNhdGVkIHNpbmNlIDEuMy4wXG4gICAgICBjYWxsYmFjayhPQ0NfVVNFUl9JRF9DVVJSRU5UKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==