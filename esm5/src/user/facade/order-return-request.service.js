/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { CANCEL_RETURN_PROCESS_ID } from '../store/user-state';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { OCC_USER_ID_CURRENT } from '../../occ/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
var OrderReturnRequestService = /** @class */ (function () {
    function OrderReturnRequestService(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Create order return request
     * @param orderCode an order code
     * @param returnRequestInput order return request entry input
     */
    /**
     * Create order return request
     * @param {?} returnRequestInput order return request entry input
     * @return {?}
     */
    OrderReturnRequestService.prototype.createOrderReturnRequest = /**
     * Create order return request
     * @param {?} returnRequestInput order return request entry input
     * @return {?}
     */
    function (returnRequestInput) {
        var _this = this;
        this.withUserId((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            _this.store.dispatch(new UserActions.CreateOrderReturnRequest({
                userId: userId,
                returnRequestInput: returnRequestInput,
            }));
        }));
    };
    /**
     * Return an order return request
     */
    /**
     * Return an order return request
     * @return {?}
     */
    OrderReturnRequestService.prototype.getOrderReturnRequest = /**
     * Return an order return request
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequest));
    };
    /**
     * Gets order return request list
     */
    /**
     * Gets order return request list
     * @param {?} pageSize
     * @return {?}
     */
    OrderReturnRequestService.prototype.getOrderReturnRequestList = /**
     * Gets order return request list
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        var _this = this;
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequestListState), tap((/**
         * @param {?} returnListState
         * @return {?}
         */
        function (returnListState) {
            /** @type {?} */
            var attemptedLoad = returnListState.loading ||
                returnListState.success ||
                returnListState.error;
            if (!attemptedLoad) {
                _this.loadOrderReturnRequestList(pageSize);
            }
        })), map((/**
         * @param {?} returnListState
         * @return {?}
         */
        function (returnListState) { return returnListState.value; })));
    };
    /**
     * Loads order return request detail
     * @param returnRequestCode
     */
    /**
     * Loads order return request detail
     * @param {?} returnRequestCode
     * @return {?}
     */
    OrderReturnRequestService.prototype.loadOrderReturnRequestDetail = /**
     * Loads order return request detail
     * @param {?} returnRequestCode
     * @return {?}
     */
    function (returnRequestCode) {
        var _this = this;
        this.withUserId((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            _this.store.dispatch(new UserActions.LoadOrderReturnRequest({
                userId: userId,
                returnRequestCode: returnRequestCode,
            }));
        }));
    };
    /**
     * Loads order return request list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    /**
     * Loads order return request list
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    OrderReturnRequestService.prototype.loadOrderReturnRequestList = /**
     * Loads order return request list
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
            _this.store.dispatch(new UserActions.LoadOrderReturnRequestList({
                userId: userId,
                pageSize: pageSize,
                currentPage: currentPage,
                sort: sort,
            }));
        }));
    };
    /**
     * Cleaning order return request list
     */
    /**
     * Cleaning order return request list
     * @return {?}
     */
    OrderReturnRequestService.prototype.clearOrderReturnRequestList = /**
     * Cleaning order return request list
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.ClearOrderReturnRequestList());
    };
    /**
     * Get the order return request loading flag
     */
    /**
     * Get the order return request loading flag
     * @return {?}
     */
    OrderReturnRequestService.prototype.getReturnRequestLoading = /**
     * Get the order return request loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequestLoading));
    };
    /**
     * Get the order return request success flag
     */
    /**
     * Get the order return request success flag
     * @return {?}
     */
    OrderReturnRequestService.prototype.getReturnRequestSuccess = /**
     * Get the order return request success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequestSuccess));
    };
    /**
     * Cleaning order return request details
     */
    /**
     * Cleaning order return request details
     * @return {?}
     */
    OrderReturnRequestService.prototype.clearOrderReturnRequestDetail = /**
     * Cleaning order return request details
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.ClearOrderReturnRequest());
    };
    /*
     * Cancel order return request
     */
    /*
       * Cancel order return request
       */
    /**
     * @param {?} returnRequestCode
     * @param {?} returnRequestModification
     * @return {?}
     */
    OrderReturnRequestService.prototype.cancelOrderReturnRequest = /*
       * Cancel order return request
       */
    /**
     * @param {?} returnRequestCode
     * @param {?} returnRequestModification
     * @return {?}
     */
    function (returnRequestCode, returnRequestModification) {
        var _this = this;
        this.withUserId((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            _this.store.dispatch(new UserActions.CancelOrderReturnRequest({
                userId: userId,
                returnRequestCode: returnRequestCode,
                returnRequestModification: returnRequestModification,
            }));
        }));
    };
    /**
     * Returns the cancel return request loading flag
     */
    /**
     * Returns the cancel return request loading flag
     * @return {?}
     */
    OrderReturnRequestService.prototype.getCancelReturnRequestLoading = /**
     * Returns the cancel return request loading flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(CANCEL_RETURN_PROCESS_ID)));
    };
    /**
     * Returns the cancel return request success flag
     */
    /**
     * Returns the cancel return request success flag
     * @return {?}
     */
    OrderReturnRequestService.prototype.getCancelReturnRequestSuccess = /**
     * Returns the cancel return request success flag
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(CANCEL_RETURN_PROCESS_ID)));
    };
    /**
     * Resets the cancel return request process flags
     */
    /**
     * Resets the cancel return request process flags
     * @return {?}
     */
    OrderReturnRequestService.prototype.resetCancelReturnRequestProcessState = /**
     * Resets the cancel return request process flags
     * @return {?}
     */
    function () {
        return this.store.dispatch(new UserActions.ResetCancelReturnProcess());
    };
    /*
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     */
    /*
       * Utility method to distinquish pre / post 1.3.0 in a convenient way.
       *
       */
    /**
     * @private
     * @param {?} callback
     * @return {?}
     */
    OrderReturnRequestService.prototype.withUserId = /*
       * Utility method to distinquish pre / post 1.3.0 in a convenient way.
       *
       */
    /**
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
    OrderReturnRequestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OrderReturnRequestService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    /** @nocollapse */ OrderReturnRequestService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OrderReturnRequestService_Factory() { return new OrderReturnRequestService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: OrderReturnRequestService, providedIn: "root" });
    return OrderReturnRequestService;
}());
export { OrderReturnRequestService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OrderReturnRequestService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    OrderReturnRequestService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2ZhY2FkZS9vcmRlci1yZXR1cm4tcmVxdWVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU83RCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBRXpELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFdEQ7SUFJRSxtQ0FDWSxLQUFvRCxFQUNwRCxXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUErQztRQUNwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDO0lBRUo7Ozs7T0FJRzs7Ozs7O0lBQ0gsNERBQXdCOzs7OztJQUF4QixVQUNFLGtCQUErQztRQURqRCxpQkFXQztRQVJDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ3BCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDdkMsTUFBTSxRQUFBO2dC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O0lBQ0gsQ0FBQzs7Z0JBaExGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBdkJnQixLQUFLO2dCQUdiLFdBQVc7OztvQ0FKcEI7Q0F1TUMsQUFqTEQsSUFpTEM7U0E5S1kseUJBQXlCOzs7Ozs7SUFFbEMsMENBQThEOzs7OztJQUM5RCxnREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1xuICBSZXR1cm5SZXF1ZXN0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRMaXN0LFxuICBSZXR1cm5SZXF1ZXN0LFxuICBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uLFxufSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQge1xuICBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnksXG4gIGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBDQU5DRUxfUkVUVVJOX1BST0NFU1NfSUQgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2Vyc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vb2NjL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyUmV0dXJuUmVxdWVzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogQ3JlYXRlIG9yZGVyIHJldHVybiByZXF1ZXN0XG4gICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgKiBAcGFyYW0gcmV0dXJuUmVxdWVzdElucHV0IG9yZGVyIHJldHVybiByZXF1ZXN0IGVudHJ5IGlucHV0XG4gICAqL1xuICBjcmVhdGVPcmRlclJldHVyblJlcXVlc3QoXG4gICAgcmV0dXJuUmVxdWVzdElucHV0OiBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3RcbiAgKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKHVzZXJJZCA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuQ3JlYXRlT3JkZXJSZXR1cm5SZXF1ZXN0KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgcmV0dXJuUmVxdWVzdElucHV0LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gb3JkZXIgcmV0dXJuIHJlcXVlc3RcbiAgICovXG4gIGdldE9yZGVyUmV0dXJuUmVxdWVzdCgpOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlclJldHVyblJlcXVlc3QpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIG9yZGVyIHJldHVybiByZXF1ZXN0IGxpc3RcbiAgICovXG4gIGdldE9yZGVyUmV0dXJuUmVxdWVzdExpc3QocGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdExpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyUmV0dXJuUmVxdWVzdExpc3RTdGF0ZSksXG4gICAgICB0YXAocmV0dXJuTGlzdFN0YXRlID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgcmV0dXJuTGlzdFN0YXRlLmxvYWRpbmcgfHxcbiAgICAgICAgICByZXR1cm5MaXN0U3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgIHJldHVybkxpc3RTdGF0ZS5lcnJvcjtcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdChwYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKHJldHVybkxpc3RTdGF0ZSA9PiByZXR1cm5MaXN0U3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBvcmRlciByZXR1cm4gcmVxdWVzdCBkZXRhaWxcbiAgICogQHBhcmFtIHJldHVyblJlcXVlc3RDb2RlXG4gICAqL1xuICBsb2FkT3JkZXJSZXR1cm5SZXF1ZXN0RGV0YWlsKHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQodXNlcklkID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJSZXR1cm5SZXF1ZXN0KHtcbiAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICByZXR1cm5SZXF1ZXN0Q29kZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgb3JkZXIgcmV0dXJuIHJlcXVlc3QgbGlzdFxuICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICogQHBhcmFtIHNvcnQgc29ydFxuICAgKi9cbiAgbG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3QoXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0KHtcbiAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxuICAgICAgICAgIHNvcnQ6IHNvcnQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIG9yZGVyIHJldHVybiByZXF1ZXN0IGxpc3RcbiAgICovXG4gIGNsZWFyT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhck9yZGVyUmV0dXJuUmVxdWVzdExpc3QoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvcmRlciByZXR1cm4gcmVxdWVzdCBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFJldHVyblJlcXVlc3RMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyUmV0dXJuUmVxdWVzdExvYWRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9yZGVyIHJldHVybiByZXF1ZXN0IHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0UmV0dXJuUmVxdWVzdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0U3VjY2VzcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIG9yZGVyIHJldHVybiByZXF1ZXN0IGRldGFpbHNcbiAgICovXG4gIGNsZWFyT3JkZXJSZXR1cm5SZXF1ZXN0RGV0YWlsKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyT3JkZXJSZXR1cm5SZXF1ZXN0KCkpO1xuICB9XG5cbiAgLypcbiAgICogQ2FuY2VsIG9yZGVyIHJldHVybiByZXF1ZXN0XG4gICAqL1xuICBjYW5jZWxPcmRlclJldHVyblJlcXVlc3QoXG4gICAgcmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uOiBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uXG4gICk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkNhbmNlbE9yZGVyUmV0dXJuUmVxdWVzdCh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHJldHVyblJlcXVlc3RDb2RlLFxuICAgICAgICAgIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb24sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhbmNlbCByZXR1cm4gcmVxdWVzdCBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldENhbmNlbFJldHVyblJlcXVlc3RMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KENBTkNFTF9SRVRVUk5fUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjYW5jZWwgcmV0dXJuIHJlcXVlc3Qgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRDYW5jZWxSZXR1cm5SZXF1ZXN0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShDQU5DRUxfUkVUVVJOX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBjYW5jZWwgcmV0dXJuIHJlcXVlc3QgcHJvY2VzcyBmbGFnc1xuICAgKi9cbiAgcmVzZXRDYW5jZWxSZXR1cm5SZXF1ZXN0UHJvY2Vzc1N0YXRlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5SZXNldENhbmNlbFJldHVyblByb2Nlc3MoKSk7XG4gIH1cblxuICAvKlxuICAgKiBVdGlsaXR5IG1ldGhvZCB0byBkaXN0aW5xdWlzaCBwcmUgLyBwb3N0IDEuMy4wIGluIGEgY29udmVuaWVudCB3YXkuXG4gICAqXG4gICAqL1xuICBwcml2YXRlIHdpdGhVc2VySWQoY2FsbGJhY2s6ICh1c2VySWQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKHVzZXJJZCA9PiBjYWxsYmFjayh1c2VySWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETyhpc3N1ZTojNTYyOCkgRGVwcmVjYXRlZCBzaW5jZSAxLjMuMFxuICAgICAgY2FsbGJhY2soT0NDX1VTRVJfSURfQ1VSUkVOVCk7XG4gICAgfVxuICB9XG59XG4iXX0=