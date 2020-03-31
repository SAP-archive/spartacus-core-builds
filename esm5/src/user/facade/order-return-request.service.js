import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { CANCEL_RETURN_PROCESS_ID } from '../store/user-state';
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
    OrderReturnRequestService.prototype.createOrderReturnRequest = function (returnRequestInput) {
        var _this = this;
        this.withUserId(function (userId) {
            _this.store.dispatch(new UserActions.CreateOrderReturnRequest({
                userId: userId,
                returnRequestInput: returnRequestInput,
            }));
        });
    };
    /**
     * Return an order return request
     */
    OrderReturnRequestService.prototype.getOrderReturnRequest = function () {
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequest));
    };
    /**
     * Gets order return request list
     */
    OrderReturnRequestService.prototype.getOrderReturnRequestList = function (pageSize) {
        var _this = this;
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequestListState), tap(function (returnListState) {
            var attemptedLoad = returnListState.loading ||
                returnListState.success ||
                returnListState.error;
            if (!attemptedLoad) {
                _this.loadOrderReturnRequestList(pageSize);
            }
        }), map(function (returnListState) { return returnListState.value; }));
    };
    /**
     * Loads order return request detail
     * @param returnRequestCode
     */
    OrderReturnRequestService.prototype.loadOrderReturnRequestDetail = function (returnRequestCode) {
        var _this = this;
        this.withUserId(function (userId) {
            _this.store.dispatch(new UserActions.LoadOrderReturnRequest({
                userId: userId,
                returnRequestCode: returnRequestCode,
            }));
        });
    };
    /**
     * Loads order return request list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    OrderReturnRequestService.prototype.loadOrderReturnRequestList = function (pageSize, currentPage, sort) {
        var _this = this;
        this.withUserId(function (userId) {
            _this.store.dispatch(new UserActions.LoadOrderReturnRequestList({
                userId: userId,
                pageSize: pageSize,
                currentPage: currentPage,
                sort: sort,
            }));
        });
    };
    /**
     * Cleaning order return request list
     */
    OrderReturnRequestService.prototype.clearOrderReturnRequestList = function () {
        this.store.dispatch(new UserActions.ClearOrderReturnRequestList());
    };
    /**
     * Get the order return request loading flag
     */
    OrderReturnRequestService.prototype.getReturnRequestLoading = function () {
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequestLoading));
    };
    /**
     * Get the order return request success flag
     */
    OrderReturnRequestService.prototype.getReturnRequestSuccess = function () {
        return this.store.pipe(select(UsersSelectors.getOrderReturnRequestSuccess));
    };
    /**
     * Cleaning order return request details
     */
    OrderReturnRequestService.prototype.clearOrderReturnRequestDetail = function () {
        this.store.dispatch(new UserActions.ClearOrderReturnRequest());
    };
    /*
     * Cancel order return request
     */
    OrderReturnRequestService.prototype.cancelOrderReturnRequest = function (returnRequestCode, returnRequestModification) {
        var _this = this;
        this.withUserId(function (userId) {
            _this.store.dispatch(new UserActions.CancelOrderReturnRequest({
                userId: userId,
                returnRequestCode: returnRequestCode,
                returnRequestModification: returnRequestModification,
            }));
        });
    };
    /**
     * Returns the cancel return request loading flag
     */
    OrderReturnRequestService.prototype.getCancelReturnRequestLoading = function () {
        return this.store.pipe(select(getProcessLoadingFactory(CANCEL_RETURN_PROCESS_ID)));
    };
    /**
     * Returns the cancel return request success flag
     */
    OrderReturnRequestService.prototype.getCancelReturnRequestSuccess = function () {
        return this.store.pipe(select(getProcessSuccessFactory(CANCEL_RETURN_PROCESS_ID)));
    };
    /**
     * Resets the cancel return request process flags
     */
    OrderReturnRequestService.prototype.resetCancelReturnRequestProcessState = function () {
        return this.store.dispatch(new UserActions.ResetCancelReturnProcess());
    };
    /*
     * Utility method to distinquish user id in a convenient way
     */
    OrderReturnRequestService.prototype.withUserId = function (callback) {
        this.authService
            .getOccUserId()
            .pipe(take(1))
            .subscribe(function (userId) { return callback(userId); });
    };
    OrderReturnRequestService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    OrderReturnRequestService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderReturnRequestService_Factory() { return new OrderReturnRequestService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: OrderReturnRequestService, providedIn: "root" });
    OrderReturnRequestService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderReturnRequestService);
    return OrderReturnRequestService;
}());
export { OrderReturnRequestService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2ZhY2FkZS9vcmRlci1yZXR1cm4tcmVxdWVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQVE3RCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFpQixNQUFNLHFCQUFxQixDQUFDOzs7O0FBSzlFO0lBQ0UsbUNBQ1ksS0FBb0QsRUFDcEQsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOzs7O09BSUc7SUFDSCw0REFBd0IsR0FBeEIsVUFDRSxrQkFBK0M7UUFEakQsaUJBV0M7UUFSQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsTUFBTTtZQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3ZDLE1BQU0sUUFBQTtnQkFDTixrQkFBa0Isb0JBQUE7YUFDbkIsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJ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QixDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUVBQTZCLEdBQTdCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FDM0QsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILGlFQUE2QixHQUE3QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQzNELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCx3RUFBb0MsR0FBcEM7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7O09BRUc7SUFDSyw4Q0FBVSxHQUFsQixVQUFtQixRQUFrQztRQUNuRCxJQUFJLENBQUMsV0FBVzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUM3QyxDQUFDOztnQkFyS2tCLEtBQUs7Z0JBQ0MsV0FBVzs7O0lBSHpCLHlCQUF5QjtRQUhyQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1cseUJBQXlCLENBd0tyQztvQ0EvTEQ7Q0ErTEMsQUF4S0QsSUF3S0M7U0F4S1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgUmV0dXJuUmVxdWVzdCxcbiAgUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRMaXN0LFxuICBSZXR1cm5SZXF1ZXN0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbixcbn0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnksXG4gIGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IENBTkNFTF9SRVRVUk5fUFJPQ0VTU19JRCwgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJSZXR1cm5SZXF1ZXN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgb3JkZXIgcmV0dXJuIHJlcXVlc3RcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAqIEBwYXJhbSByZXR1cm5SZXF1ZXN0SW5wdXQgb3JkZXIgcmV0dXJuIHJlcXVlc3QgZW50cnkgaW5wdXRcbiAgICovXG4gIGNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdChcbiAgICByZXR1cm5SZXF1ZXN0SW5wdXQ6IFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdFxuICApOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdCh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHJldHVyblJlcXVlc3RJbnB1dCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIG9yZGVyIHJldHVybiByZXF1ZXN0XG4gICAqL1xuICBnZXRPcmRlclJldHVyblJlcXVlc3QoKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0KSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBvcmRlciByZXR1cm4gcmVxdWVzdCBsaXN0XG4gICAqL1xuICBnZXRPcmRlclJldHVyblJlcXVlc3RMaXN0KHBhZ2VTaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3RMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlclJldHVyblJlcXVlc3RMaXN0U3RhdGUpLFxuICAgICAgdGFwKChyZXR1cm5MaXN0U3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgcmV0dXJuTGlzdFN0YXRlLmxvYWRpbmcgfHxcbiAgICAgICAgICByZXR1cm5MaXN0U3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgIHJldHVybkxpc3RTdGF0ZS5lcnJvcjtcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdChwYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXR1cm5MaXN0U3RhdGUpID0+IHJldHVybkxpc3RTdGF0ZS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIG9yZGVyIHJldHVybiByZXF1ZXN0IGRldGFpbFxuICAgKiBAcGFyYW0gcmV0dXJuUmVxdWVzdENvZGVcbiAgICovXG4gIGxvYWRPcmRlclJldHVyblJlcXVlc3REZXRhaWwocmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyUmV0dXJuUmVxdWVzdCh7XG4gICAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgcmV0dXJuUmVxdWVzdENvZGUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIG9yZGVyIHJldHVybiByZXF1ZXN0IGxpc3RcbiAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgKiBAcGFyYW0gY3VycmVudFBhZ2UgY3VycmVudCBwYWdlXG4gICAqIEBwYXJhbSBzb3J0IHNvcnRcbiAgICovXG4gIGxvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0KFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0KHtcbiAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxuICAgICAgICAgIHNvcnQ6IHNvcnQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIG9yZGVyIHJldHVybiByZXF1ZXN0IGxpc3RcbiAgICovXG4gIGNsZWFyT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhck9yZGVyUmV0dXJuUmVxdWVzdExpc3QoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvcmRlciByZXR1cm4gcmVxdWVzdCBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFJldHVyblJlcXVlc3RMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyUmV0dXJuUmVxdWVzdExvYWRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9yZGVyIHJldHVybiByZXF1ZXN0IHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0UmV0dXJuUmVxdWVzdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0U3VjY2VzcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIG9yZGVyIHJldHVybiByZXF1ZXN0IGRldGFpbHNcbiAgICovXG4gIGNsZWFyT3JkZXJSZXR1cm5SZXF1ZXN0RGV0YWlsKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyT3JkZXJSZXR1cm5SZXF1ZXN0KCkpO1xuICB9XG5cbiAgLypcbiAgICogQ2FuY2VsIG9yZGVyIHJldHVybiByZXF1ZXN0XG4gICAqL1xuICBjYW5jZWxPcmRlclJldHVyblJlcXVlc3QoXG4gICAgcmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uOiBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uXG4gICk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuQ2FuY2VsT3JkZXJSZXR1cm5SZXF1ZXN0KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgcmV0dXJuUmVxdWVzdENvZGUsXG4gICAgICAgICAgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbixcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2FuY2VsIHJldHVybiByZXF1ZXN0IGxvYWRpbmcgZmxhZ1xuICAgKi9cbiAgZ2V0Q2FuY2VsUmV0dXJuUmVxdWVzdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoQ0FOQ0VMX1JFVFVSTl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhbmNlbCByZXR1cm4gcmVxdWVzdCBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldENhbmNlbFJldHVyblJlcXVlc3RTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KENBTkNFTF9SRVRVUk5fUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGNhbmNlbCByZXR1cm4gcmVxdWVzdCBwcm9jZXNzIGZsYWdzXG4gICAqL1xuICByZXNldENhbmNlbFJldHVyblJlcXVlc3RQcm9jZXNzU3RhdGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlc2V0Q2FuY2VsUmV0dXJuUHJvY2VzcygpKTtcbiAgfVxuXG4gIC8qXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIGRpc3RpbnF1aXNoIHVzZXIgaWQgaW4gYSBjb252ZW5pZW50IHdheVxuICAgKi9cbiAgcHJpdmF0ZSB3aXRoVXNlcklkKGNhbGxiYWNrOiAodXNlcklkOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKCh1c2VySWQpID0+IGNhbGxiYWNrKHVzZXJJZCkpO1xuICB9XG59XG4iXX0=