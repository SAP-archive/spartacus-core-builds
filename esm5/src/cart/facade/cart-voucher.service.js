import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { CartActions } from '../store/actions/index';
import { ADD_VOUCHER_PROCESS_ID } from '../store/multi-cart-state';
import { ActiveCartService } from './active-cart.service';
var CartVoucherService = /** @class */ (function () {
    function CartVoucherService(store, authService, activeCartService) {
        this.store = store;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    CartVoucherService.prototype.addVoucher = function (voucherId, cartId) {
        var _this = this;
        this.combineUserAndCartId(cartId).subscribe(function (_a) {
            var _b = __read(_a, 2), occUserId = _b[0], cartIdentifier = _b[1];
            return _this.store.dispatch(new CartActions.CartAddVoucher({
                userId: occUserId,
                cartId: cartIdentifier,
                voucherId: voucherId,
            }));
        });
    };
    CartVoucherService.prototype.removeVoucher = function (voucherId, cartId) {
        var _this = this;
        this.combineUserAndCartId(cartId).subscribe(function (_a) {
            var _b = __read(_a, 2), occUserId = _b[0], cartIdentifier = _b[1];
            return _this.store.dispatch(new CartActions.CartRemoveVoucher({
                userId: occUserId,
                cartId: cartIdentifier,
                voucherId: voucherId,
            }));
        });
    };
    // TODO(#7241): Remove when switching to event system for add voucher
    /**
     * Get add voucher process error flag
     * @deprecated since 2.0
     */
    CartVoucherService.prototype.getAddVoucherResultError = function () {
        return this.store.pipe(select(getProcessErrorFactory(ADD_VOUCHER_PROCESS_ID)));
    };
    // TODO(#7241): Remove when switching to event system for add voucher
    /**
     * Get add voucher process success flag
     * @deprecated since 2.0
     */
    CartVoucherService.prototype.getAddVoucherResultSuccess = function () {
        return this.store.pipe(select(getProcessSuccessFactory(ADD_VOUCHER_PROCESS_ID)));
    };
    // TODO(#7241): Remove when switching to event system for add voucher
    /**
     * Get add voucher process loading flag
     * @deprecated since 2.0
     */
    CartVoucherService.prototype.getAddVoucherResultLoading = function () {
        return this.store.pipe(select(getProcessLoadingFactory(ADD_VOUCHER_PROCESS_ID)));
    };
    // TODO(#7241): Remove when switching to event system for add voucher
    /**
     * Reset add voucher process
     * @deprecated since 2.0
     */
    CartVoucherService.prototype.resetAddVoucherProcessingState = function () {
        this.store.dispatch(new CartActions.CartResetAddVoucher());
    };
    CartVoucherService.prototype.combineUserAndCartId = function (cartId) {
        if (cartId) {
            return this.authService.getOccUserId().pipe(take(1), map(function (userId) { return [userId, cartId]; }));
        }
        else {
            return combineLatest([
                this.authService.getOccUserId(),
                this.activeCartService.getActiveCartId(),
            ]).pipe(take(1));
        }
    };
    CartVoucherService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService },
        { type: ActiveCartService }
    ]; };
    CartVoucherService = __decorate([
        Injectable()
    ], CartVoucherService);
    return CartVoucherService;
}());
export { CartVoucherService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC12b3VjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4Qix3QkFBd0IsR0FDekIsTUFBTSxpREFBaUQsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQ7SUFDRSw0QkFDWSxLQUFxRCxFQUNyRCxXQUF3QixFQUN4QixpQkFBb0M7UUFGcEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0Q7UUFDckQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM3QyxDQUFDO0lBRUosdUNBQVUsR0FBVixVQUFXLFNBQWlCLEVBQUUsTUFBZTtRQUE3QyxpQkFVQztRQVRDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUEyQjtnQkFBM0Isa0JBQTJCLEVBQTFCLGlCQUFTLEVBQUUsc0JBQWM7WUFDckUsT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDO2dCQUM3QixNQUFNLEVBQUUsU0FBUztnQkFDakIsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLFNBQVMsRUFBRSxTQUFTO2FBQ3JCLENBQUMsQ0FDSDtRQU5ELENBTUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELDBDQUFhLEdBQWIsVUFBYyxTQUFpQixFQUFFLE1BQWU7UUFBaEQsaUJBVUM7UUFUQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBMkI7Z0JBQTNCLGtCQUEyQixFQUExQixpQkFBUyxFQUFFLHNCQUFjO1lBQ3JFLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDO2dCQUNoQyxNQUFNLEVBQUUsU0FBUztnQkFDakIsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLFNBQVMsRUFBRSxTQUFTO2FBQ3JCLENBQUMsQ0FDSDtRQU5ELENBTUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELHFFQUFxRTtJQUNyRTs7O09BR0c7SUFDSCxxREFBd0IsR0FBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUN2RCxDQUFDO0lBQ0osQ0FBQztJQUVELHFFQUFxRTtJQUNyRTs7O09BR0c7SUFDSCx1REFBMEIsR0FBMUI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVELHFFQUFxRTtJQUNyRTs7O09BR0c7SUFDSCx1REFBMEIsR0FBMUI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVELHFFQUFxRTtJQUNyRTs7O09BR0c7SUFDSCwyREFBOEIsR0FBOUI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVPLGlEQUFvQixHQUE1QixVQUE2QixNQUFjO1FBQ3pDLElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQ2xDLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxhQUFhLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO2dCQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFO2FBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDOztnQkFuRmtCLEtBQUs7Z0JBQ0MsV0FBVztnQkFDTCxpQkFBaUI7O0lBSnJDLGtCQUFrQjtRQUQ5QixVQUFVLEVBQUU7T0FDQSxrQkFBa0IsQ0FzRjlCO0lBQUQseUJBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQXRGWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21Qcm9jZXNzU3RvcmUgZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NFcnJvckZhY3RvcnksXG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFZvdWNoZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxmcm9tUHJvY2Vzc1N0b3JlLlN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgYWRkVm91Y2hlcih2b3VjaGVySWQ6IHN0cmluZywgY2FydElkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb21iaW5lVXNlckFuZENhcnRJZChjYXJ0SWQpLnN1YnNjcmliZSgoW29jY1VzZXJJZCwgY2FydElkZW50aWZpZXJdKSA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyKHtcbiAgICAgICAgICB1c2VySWQ6IG9jY1VzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IGNhcnRJZGVudGlmaWVyLFxuICAgICAgICAgIHZvdWNoZXJJZDogdm91Y2hlcklkLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZW1vdmVWb3VjaGVyKHZvdWNoZXJJZDogc3RyaW5nLCBjYXJ0SWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbWJpbmVVc2VyQW5kQ2FydElkKGNhcnRJZCkuc3Vic2NyaWJlKChbb2NjVXNlcklkLCBjYXJ0SWRlbnRpZmllcl0pID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXIoe1xuICAgICAgICAgIHVzZXJJZDogb2NjVXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogY2FydElkZW50aWZpZXIsXG4gICAgICAgICAgdm91Y2hlcklkOiB2b3VjaGVySWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8vIFRPRE8oIzcyNDEpOiBSZW1vdmUgd2hlbiBzd2l0Y2hpbmcgdG8gZXZlbnQgc3lzdGVtIGZvciBhZGQgdm91Y2hlclxuICAvKipcbiAgICogR2V0IGFkZCB2b3VjaGVyIHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjBcbiAgICovXG4gIGdldEFkZFZvdWNoZXJSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFRPRE8oIzcyNDEpOiBSZW1vdmUgd2hlbiBzd2l0Y2hpbmcgdG8gZXZlbnQgc3lzdGVtIGZvciBhZGQgdm91Y2hlclxuICAvKipcbiAgICogR2V0IGFkZCB2b3VjaGVyIHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMFxuICAgKi9cbiAgZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFRPRE8oIzcyNDEpOiBSZW1vdmUgd2hlbiBzd2l0Y2hpbmcgdG8gZXZlbnQgc3lzdGVtIGZvciBhZGQgdm91Y2hlclxuICAvKipcbiAgICogR2V0IGFkZCB2b3VjaGVyIHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMFxuICAgKi9cbiAgZ2V0QWRkVm91Y2hlclJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFRPRE8oIzcyNDEpOiBSZW1vdmUgd2hlbiBzd2l0Y2hpbmcgdG8gZXZlbnQgc3lzdGVtIGZvciBhZGQgdm91Y2hlclxuICAvKipcbiAgICogUmVzZXQgYWRkIHZvdWNoZXIgcHJvY2Vzc1xuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjBcbiAgICovXG4gIHJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVzZXRBZGRWb3VjaGVyKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21iaW5lVXNlckFuZENhcnRJZChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8W3N0cmluZywgc3RyaW5nXT4ge1xuICAgIGlmIChjYXJ0SWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIG1hcCgodXNlcklkKSA9PiBbdXNlcklkLCBjYXJ0SWRdKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZUNhcnRJZCgpLFxuICAgICAgXSkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==