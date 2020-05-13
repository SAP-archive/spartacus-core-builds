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
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "./active-cart.service";
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
    CartVoucherService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartVoucherService_Factory() { return new CartVoucherService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CartVoucherService, providedIn: "root" });
    CartVoucherService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartVoucherService);
    return CartVoucherService;
}());
export { CartVoucherService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC12b3VjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4Qix3QkFBd0IsR0FDekIsTUFBTSxpREFBaUQsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBSzFEO0lBQ0UsNEJBQ1ksS0FBcUQsRUFDckQsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRnBDLFVBQUssR0FBTCxLQUFLLENBQWdEO1FBQ3JELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKLHVDQUFVLEdBQVYsVUFBVyxTQUFpQixFQUFFLE1BQWU7UUFBN0MsaUJBVUM7UUFUQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBMkI7Z0JBQTNCLGtCQUEyQixFQUExQixpQkFBUyxFQUFFLHNCQUFjO1lBQ3JFLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQztnQkFDN0IsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixTQUFTLEVBQUUsU0FBUzthQUNyQixDQUFDLENBQ0g7UUFORCxDQU1DLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsU0FBaUIsRUFBRSxNQUFlO1FBQWhELGlCQVVDO1FBVEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQTJCO2dCQUEzQixrQkFBMkIsRUFBMUIsaUJBQVMsRUFBRSxzQkFBYztZQUNyRSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDaEMsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixTQUFTLEVBQUUsU0FBUzthQUNyQixDQUFDLENBQ0g7UUFORCxDQU1DLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxxRUFBcUU7SUFDckU7OztPQUdHO0lBQ0gscURBQXdCLEdBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7SUFFRCxxRUFBcUU7SUFDckU7OztPQUdHO0lBQ0gsdURBQTBCLEdBQTFCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7SUFFRCxxRUFBcUU7SUFDckU7OztPQUdHO0lBQ0gsdURBQTBCLEdBQTFCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7SUFFRCxxRUFBcUU7SUFDckU7OztPQUdHO0lBQ0gsMkRBQThCLEdBQTlCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTyxpREFBb0IsR0FBNUIsVUFBNkIsTUFBYztRQUN6QyxJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUNsQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sYUFBYSxDQUFDO2dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRTthQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7Z0JBbkZrQixLQUFLO2dCQUNDLFdBQVc7Z0JBQ0wsaUJBQWlCOzs7SUFKckMsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxrQkFBa0IsQ0FzRjlCOzZCQXhHRDtDQXdHQyxBQXRGRCxJQXNGQztTQXRGWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21Qcm9jZXNzU3RvcmUgZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NFcnJvckZhY3RvcnksXG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFZvdWNoZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxmcm9tUHJvY2Vzc1N0b3JlLlN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgYWRkVm91Y2hlcih2b3VjaGVySWQ6IHN0cmluZywgY2FydElkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb21iaW5lVXNlckFuZENhcnRJZChjYXJ0SWQpLnN1YnNjcmliZSgoW29jY1VzZXJJZCwgY2FydElkZW50aWZpZXJdKSA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyKHtcbiAgICAgICAgICB1c2VySWQ6IG9jY1VzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IGNhcnRJZGVudGlmaWVyLFxuICAgICAgICAgIHZvdWNoZXJJZDogdm91Y2hlcklkLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZW1vdmVWb3VjaGVyKHZvdWNoZXJJZDogc3RyaW5nLCBjYXJ0SWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbWJpbmVVc2VyQW5kQ2FydElkKGNhcnRJZCkuc3Vic2NyaWJlKChbb2NjVXNlcklkLCBjYXJ0SWRlbnRpZmllcl0pID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXIoe1xuICAgICAgICAgIHVzZXJJZDogb2NjVXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogY2FydElkZW50aWZpZXIsXG4gICAgICAgICAgdm91Y2hlcklkOiB2b3VjaGVySWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8vIFRPRE8oIzcyNDEpOiBSZW1vdmUgd2hlbiBzd2l0Y2hpbmcgdG8gZXZlbnQgc3lzdGVtIGZvciBhZGQgdm91Y2hlclxuICAvKipcbiAgICogR2V0IGFkZCB2b3VjaGVyIHByb2Nlc3MgZXJyb3IgZmxhZ1xuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjBcbiAgICovXG4gIGdldEFkZFZvdWNoZXJSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFRPRE8oIzcyNDEpOiBSZW1vdmUgd2hlbiBzd2l0Y2hpbmcgdG8gZXZlbnQgc3lzdGVtIGZvciBhZGQgdm91Y2hlclxuICAvKipcbiAgICogR2V0IGFkZCB2b3VjaGVyIHByb2Nlc3Mgc3VjY2VzcyBmbGFnXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMFxuICAgKi9cbiAgZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFRPRE8oIzcyNDEpOiBSZW1vdmUgd2hlbiBzd2l0Y2hpbmcgdG8gZXZlbnQgc3lzdGVtIGZvciBhZGQgdm91Y2hlclxuICAvKipcbiAgICogR2V0IGFkZCB2b3VjaGVyIHByb2Nlc3MgbG9hZGluZyBmbGFnXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMFxuICAgKi9cbiAgZ2V0QWRkVm91Y2hlclJlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFRPRE8oIzcyNDEpOiBSZW1vdmUgd2hlbiBzd2l0Y2hpbmcgdG8gZXZlbnQgc3lzdGVtIGZvciBhZGQgdm91Y2hlclxuICAvKipcbiAgICogUmVzZXQgYWRkIHZvdWNoZXIgcHJvY2Vzc1xuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjBcbiAgICovXG4gIHJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVzZXRBZGRWb3VjaGVyKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21iaW5lVXNlckFuZENhcnRJZChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8W3N0cmluZywgc3RyaW5nXT4ge1xuICAgIGlmIChjYXJ0SWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIG1hcCgodXNlcklkKSA9PiBbdXNlcklkLCBjYXJ0SWRdKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZUNhcnRJZCgpLFxuICAgICAgXSkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==