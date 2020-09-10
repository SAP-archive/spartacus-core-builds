import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { CheckoutActions } from '../store/actions/index';
import { CheckoutSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "../../cart/facade/active-cart.service";
var CheckoutCostCenterService = /** @class */ (function () {
    function CheckoutCostCenterService(checkoutStore, authService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    /**
     * Set cost center to cart
     * @param costCenterId : cost center id
     */
    CheckoutCostCenterService.prototype.setCostCenter = function (costCenterId) {
        var _this = this;
        var cartId;
        this.activeCartService
            .getActiveCartId()
            .pipe(take(1))
            .subscribe(function (activeCartId) { return (cartId = activeCartId); });
        this.authService.invokeWithUserId(function (userId) {
            if (userId && userId !== OCC_USER_ID_ANONYMOUS && cartId) {
                _this.checkoutStore.dispatch(new CheckoutActions.SetCostCenter({
                    userId: userId,
                    cartId: cartId,
                    costCenterId: costCenterId,
                }));
            }
        });
    };
    /**
     * Get cost center id from cart
     */
    CheckoutCostCenterService.prototype.getCostCenter = function () {
        var _this = this;
        return combineLatest([
            this.activeCartService.getActive(),
            this.checkoutStore.pipe(select(CheckoutSelectors.getCostCenter)),
        ]).pipe(filter(function (_a) {
            var _b = __read(_a, 1), cart = _b[0];
            return Boolean(cart);
        }), map(function (_a) {
            var _b = __read(_a, 2), cart = _b[0], costCenterId = _b[1];
            if (costCenterId === undefined && cart.costCenter) {
                costCenterId = cart.costCenter.code;
                _this.checkoutStore.dispatch(new CheckoutActions.SetCostCenterSuccess(cart.costCenter.code));
            }
            return costCenterId;
        }));
    };
    CheckoutCostCenterService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService },
        { type: ActiveCartService }
    ]; };
    CheckoutCostCenterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutCostCenterService_Factory() { return new CheckoutCostCenterService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CheckoutCostCenterService, providedIn: "root" });
    CheckoutCostCenterService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutCostCenterService);
    return CheckoutCostCenterService;
}());
export { CheckoutCostCenterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29zdC1jZW50ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQtY29zdC1jZW50ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBSzdEO0lBQ0UsbUNBQ1ksYUFBZ0UsRUFDaEUsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRnBDLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzdDLENBQUM7SUFFSjs7O09BR0c7SUFDSCxpREFBYSxHQUFiLFVBQWMsWUFBb0I7UUFBbEMsaUJBa0JDO1FBakJDLElBQUksTUFBTSxDQUFDO1FBQ1gsSUFBSSxDQUFDLGlCQUFpQjthQUNuQixlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQyxVQUFDLFlBQVksSUFBSyxPQUFBLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFDLE1BQU07WUFDdkMsSUFBSSxNQUFNLElBQUksTUFBTSxLQUFLLHFCQUFxQixJQUFJLE1BQU0sRUFBRTtnQkFDeEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLGFBQWEsQ0FBQztvQkFDaEMsTUFBTSxFQUFFLE1BQU07b0JBQ2QsTUFBTSxFQUFFLE1BQU07b0JBQ2QsWUFBWSxFQUFFLFlBQVk7aUJBQzNCLENBQUMsQ0FDSCxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILGlEQUFhLEdBQWI7UUFBQSxpQkFnQkM7UUFmQyxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRSxDQUFDLENBQUMsSUFBSSxDQUNMLE1BQU0sQ0FBQyxVQUFDLEVBQU07Z0JBQU4sa0JBQU0sRUFBTCxZQUFJO1lBQU0sT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQWIsQ0FBYSxDQUFDLEVBQ2pDLEdBQUcsQ0FBQyxVQUFDLEVBQW9CO2dCQUFwQixrQkFBb0IsRUFBbkIsWUFBSSxFQUFFLG9CQUFZO1lBQ3RCLElBQUksWUFBWSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNqRCxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUMvRCxDQUFDO2FBQ0g7WUFDRCxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBaEQwQixLQUFLO2dCQUNQLFdBQVc7Z0JBQ0wsaUJBQWlCOzs7SUFKckMseUJBQXlCO1FBSHJDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx5QkFBeUIsQ0FtRHJDO29DQWxFRDtDQWtFQyxBQW5ERCxJQW1EQztTQW5EWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSwgbWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aENoZWNrb3V0IH0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dCB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFNldCBjb3N0IGNlbnRlciB0byBjYXJ0XG4gICAqIEBwYXJhbSBjb3N0Q2VudGVySWQgOiBjb3N0IGNlbnRlciBpZFxuICAgKi9cbiAgc2V0Q29zdENlbnRlcihjb3N0Q2VudGVySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjYXJ0SWQ7XG4gICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmdldEFjdGl2ZUNhcnRJZCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoYWN0aXZlQ2FydElkKSA9PiAoY2FydElkID0gYWN0aXZlQ2FydElkKSk7XG5cbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmludm9rZVdpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgaWYgKHVzZXJJZCAmJiB1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyAmJiBjYXJ0SWQpIHtcbiAgICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0Q29zdENlbnRlcih7XG4gICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZDogY2FydElkLFxuICAgICAgICAgICAgY29zdENlbnRlcklkOiBjb3N0Q2VudGVySWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY29zdCBjZW50ZXIgaWQgZnJvbSBjYXJ0XG4gICAqL1xuICBnZXRDb3N0Q2VudGVyKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRDb3N0Q2VudGVyKSksXG4gICAgXSkucGlwZShcbiAgICAgIGZpbHRlcigoW2NhcnRdKSA9PiBCb29sZWFuKGNhcnQpKSxcbiAgICAgIG1hcCgoW2NhcnQsIGNvc3RDZW50ZXJJZF0pID0+IHtcbiAgICAgICAgaWYgKGNvc3RDZW50ZXJJZCA9PT0gdW5kZWZpbmVkICYmIGNhcnQuY29zdENlbnRlcikge1xuICAgICAgICAgIGNvc3RDZW50ZXJJZCA9IGNhcnQuY29zdENlbnRlci5jb2RlO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0Q29zdENlbnRlclN1Y2Nlc3MoY2FydC5jb3N0Q2VudGVyLmNvZGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29zdENlbnRlcklkO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=