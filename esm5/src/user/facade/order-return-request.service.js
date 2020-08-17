import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
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
        this.authService.invokeWithUserId(function (userId) {
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
        this.authService.invokeWithUserId(function (userId) {
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
        this.authService.invokeWithUserId(function (userId) {
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                _this.store.dispatch(new UserActions.LoadOrderReturnRequestList({
                    userId: userId,
                    pageSize: pageSize,
                    currentPage: currentPage,
                    sort: sort,
                }));
            }
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
        this.authService.invokeWithUserId(function (userId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2ZhY2FkZS9vcmRlci1yZXR1cm4tcmVxdWVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsd0JBQXdCLEdBQ3pCLE1BQU0saURBQWlELENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQWlCLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFLOUU7SUFDRSxtQ0FDWSxLQUFvRCxFQUNwRCxXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUErQztRQUNwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDO0lBRUo7Ozs7T0FJRztJQUNILDREQUF3QixHQUF4QixVQUNFLGtCQUErQztRQURqRCxpQkFXQztRQVJDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsVUFBQyxNQUFNO1lBQ3ZDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDdkMsTUFBTSxRQUFBO2dCQUNOLGtCQUFrQixv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QUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLHdCQUF3QixDQUFDO2dCQUN2QyxNQUFNLFFBQUE7Z0JBQ04saUJBQWlCLG1CQUFBO2dCQUNqQix5QkFBeUIsMkJBQUE7YUFDMUIsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILGlFQUE2QixHQUE3QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQzNELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpRUFBNkIsR0FBN0I7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUMzRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0VBQW9DLEdBQXBDO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Z0JBN0prQixLQUFLO2dCQUNDLFdBQVc7OztJQUh6Qix5QkFBeUI7UUFIckMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHlCQUF5QixDQWdLckM7b0NBeExEO0NBd0xDLEFBaEtELElBZ0tDO1NBaEtZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFJldHVyblJlcXVlc3QsXG4gIFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdExpc3QsXG4gIFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24sXG59IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5LFxuICBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnksXG59IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2Vyc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBDQU5DRUxfUkVUVVJOX1BST0NFU1NfSUQsIFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyUmV0dXJuUmVxdWVzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogQ3JlYXRlIG9yZGVyIHJldHVybiByZXF1ZXN0XG4gICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgKiBAcGFyYW0gcmV0dXJuUmVxdWVzdElucHV0IG9yZGVyIHJldHVybiByZXF1ZXN0IGVudHJ5IGlucHV0XG4gICAqL1xuICBjcmVhdGVPcmRlclJldHVyblJlcXVlc3QoXG4gICAgcmV0dXJuUmVxdWVzdElucHV0OiBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3RcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5pbnZva2VXaXRoVXNlcklkKCh1c2VySWQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5DcmVhdGVPcmRlclJldHVyblJlcXVlc3Qoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICByZXR1cm5SZXF1ZXN0SW5wdXQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBvcmRlciByZXR1cm4gcmVxdWVzdFxuICAgKi9cbiAgZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0KCk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyUmV0dXJuUmVxdWVzdCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgb3JkZXIgcmV0dXJuIHJlcXVlc3QgbGlzdFxuICAgKi9cbiAgZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0TGlzdChwYWdlU2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0TGlzdFN0YXRlKSxcbiAgICAgIHRhcCgocmV0dXJuTGlzdFN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgIHJldHVybkxpc3RTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgcmV0dXJuTGlzdFN0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICByZXR1cm5MaXN0U3RhdGUuZXJyb3I7XG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCkge1xuICAgICAgICAgIHRoaXMubG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3QocGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmV0dXJuTGlzdFN0YXRlKSA9PiByZXR1cm5MaXN0U3RhdGUudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBvcmRlciByZXR1cm4gcmVxdWVzdCBkZXRhaWxcbiAgICogQHBhcmFtIHJldHVyblJlcXVlc3RDb2RlXG4gICAqL1xuICBsb2FkT3JkZXJSZXR1cm5SZXF1ZXN0RGV0YWlsKHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmludm9rZVdpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlclJldHVyblJlcXVlc3Qoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICByZXR1cm5SZXF1ZXN0Q29kZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgb3JkZXIgcmV0dXJuIHJlcXVlc3QgbGlzdFxuICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICogQHBhcmFtIHNvcnQgc29ydFxuICAgKi9cbiAgbG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3QoXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuaW52b2tlV2l0aFVzZXJJZCgodXNlcklkKSA9PiB7XG4gICAgICBpZiAodXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3Qoe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgICAgICBjdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbmluZyBvcmRlciByZXR1cm4gcmVxdWVzdCBsaXN0XG4gICAqL1xuICBjbGVhck9yZGVyUmV0dXJuUmVxdWVzdExpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJPcmRlclJldHVyblJlcXVlc3RMaXN0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3JkZXIgcmV0dXJuIHJlcXVlc3QgbG9hZGluZyBmbGFnXG4gICAqL1xuICBnZXRSZXR1cm5SZXF1ZXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRPcmRlclJldHVyblJlcXVlc3RMb2FkaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvcmRlciByZXR1cm4gcmVxdWVzdCBzdWNjZXNzIGZsYWdcbiAgICovXG4gIGdldFJldHVyblJlcXVlc3RTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldE9yZGVyUmV0dXJuUmVxdWVzdFN1Y2Nlc3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbmluZyBvcmRlciByZXR1cm4gcmVxdWVzdCBkZXRhaWxzXG4gICAqL1xuICBjbGVhck9yZGVyUmV0dXJuUmVxdWVzdERldGFpbCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhck9yZGVyUmV0dXJuUmVxdWVzdCgpKTtcbiAgfVxuXG4gIC8qXG4gICAqIENhbmNlbCBvcmRlciByZXR1cm4gcmVxdWVzdFxuICAgKi9cbiAgY2FuY2VsT3JkZXJSZXR1cm5SZXF1ZXN0KFxuICAgIHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbjogUmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvblxuICApOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmludm9rZVdpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkNhbmNlbE9yZGVyUmV0dXJuUmVxdWVzdCh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHJldHVyblJlcXVlc3RDb2RlLFxuICAgICAgICAgIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb24sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhbmNlbCByZXR1cm4gcmVxdWVzdCBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldENhbmNlbFJldHVyblJlcXVlc3RMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KENBTkNFTF9SRVRVUk5fUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjYW5jZWwgcmV0dXJuIHJlcXVlc3Qgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBnZXRDYW5jZWxSZXR1cm5SZXF1ZXN0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShDQU5DRUxfUkVUVVJOX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBjYW5jZWwgcmV0dXJuIHJlcXVlc3QgcHJvY2VzcyBmbGFnc1xuICAgKi9cbiAgcmVzZXRDYW5jZWxSZXR1cm5SZXF1ZXN0UHJvY2Vzc1N0YXRlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5SZXNldENhbmNlbFJldHVyblByb2Nlc3MoKSk7XG4gIH1cbn1cbiJdfQ==