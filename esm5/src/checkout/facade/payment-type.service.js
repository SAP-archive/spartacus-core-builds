import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map, pluck, shareReplay, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { B2BPaymentTypeEnum } from '../../model/cart.model';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { getProcessStateFactory } from '../../process/store/selectors/process-group.selectors';
import { CheckoutActions } from '../store/actions/index';
import { GET_PAYMENT_TYPES_PROCESS_ID, } from '../store/checkout-state';
import { CheckoutSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "../../cart/facade/active-cart.service";
var PaymentTypeService = /** @class */ (function () {
    function PaymentTypeService(checkoutStore, authService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    /**
     * Get payment types
     */
    PaymentTypeService.prototype.getPaymentTypes = function () {
        var _this = this;
        return this.checkoutStore.pipe(select(CheckoutSelectors.getAllPaymentTypes), withLatestFrom(this.checkoutStore.pipe(select(getProcessStateFactory(GET_PAYMENT_TYPES_PROCESS_ID)))), tap(function (_a) {
            var _b = __read(_a, 2), _ = _b[0], loadingState = _b[1];
            if (!(loadingState.loading || loadingState.success || loadingState.error)) {
                _this.loadPaymentTypes();
            }
        }), pluck(0), shareReplay({ bufferSize: 1, refCount: true }));
    };
    /**
     * Load the supported payment types
     */
    PaymentTypeService.prototype.loadPaymentTypes = function () {
        this.checkoutStore.dispatch(new CheckoutActions.LoadPaymentTypes());
    };
    /**
     * Set payment type to cart
     * @param typeCode
     * @param poNumber : purchase order number
     */
    PaymentTypeService.prototype.setPaymentType = function (typeCode, poNumber) {
        var _this = this;
        var cartId;
        this.activeCartService
            .getActiveCartId()
            .pipe(take(1))
            .subscribe(function (activeCartId) { return (cartId = activeCartId); });
        this.authService.invokeWithUserId(function (userId) {
            if (userId && userId !== OCC_USER_ID_ANONYMOUS && cartId) {
                _this.checkoutStore.dispatch(new CheckoutActions.SetPaymentType({
                    userId: userId,
                    cartId: cartId,
                    typeCode: typeCode,
                    poNumber: poNumber,
                }));
            }
        });
    };
    /**
     * Get the selected payment type
     */
    PaymentTypeService.prototype.getSelectedPaymentType = function () {
        var _this = this;
        return combineLatest([
            this.activeCartService.getActive(),
            this.checkoutStore.pipe(select(CheckoutSelectors.getSelectedPaymentType)),
        ]).pipe(tap(function (_a) {
            var _b = __read(_a, 2), cart = _b[0], selected = _b[1];
            if (selected === undefined) {
                // in b2b, cart always has paymentType (default value 'CARD')
                if (cart && cart.paymentType) {
                    _this.checkoutStore.dispatch(new CheckoutActions.SetPaymentTypeSuccess(cart));
                }
            }
        }), map(function (_a) {
            var _b = __read(_a, 2), selected = _b[1];
            return selected;
        }));
    };
    /**
     * Get whether the selected payment type is "ACCOUNT" payment
     */
    PaymentTypeService.prototype.isAccountPayment = function () {
        return this.getSelectedPaymentType().pipe(map(function (selected) { return selected === B2BPaymentTypeEnum.ACCOUNT_PAYMENT; }));
    };
    /**
     * Get PO Number
     */
    PaymentTypeService.prototype.getPoNumber = function () {
        var _this = this;
        return combineLatest([
            this.activeCartService.getActive(),
            this.checkoutStore.pipe(select(CheckoutSelectors.getPoNumer)),
        ]).pipe(tap(function (_a) {
            var _b = __read(_a, 2), cart = _b[0], po = _b[1];
            if (po === undefined && cart && cart.purchaseOrderNumber) {
                _this.checkoutStore.dispatch(new CheckoutActions.SetPaymentTypeSuccess(cart));
            }
        }), map(function (_a) {
            var _b = __read(_a, 2), _ = _b[0], po = _b[1];
            return po;
        }));
    };
    PaymentTypeService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService },
        { type: ActiveCartService }
    ]; };
    PaymentTypeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaymentTypeService_Factory() { return new PaymentTypeService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ActiveCartService)); }, token: PaymentTypeService, providedIn: "root" });
    PaymentTypeService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PaymentTypeService);
    return PaymentTypeService;
}());
export { PaymentTypeService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvZmFjYWRlL3BheW1lbnQtdHlwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLEdBQUcsRUFDSCxLQUFLLEVBQ0wsV0FBVyxFQUNYLElBQUksRUFDSixHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBZSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsNEJBQTRCLEdBRTdCLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBSzdEO0lBQ0UsNEJBQ1ksYUFBZ0UsRUFDaEUsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRnBDLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzdDLENBQUM7SUFF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QUFFLENBQUMsSUFBSSxDQUN2QyxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLEtBQUssa0JBQWtCLENBQUMsZUFBZSxFQUEvQyxDQUErQyxDQUFDLENBQ25FLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCx3Q0FBVyxHQUFYO1FBQUEsaUJBY0M7UUFiQyxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5RCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxVQUFDLEVBQVU7Z0JBQVYsa0JBQVUsRUFBVCxZQUFJLEVBQUUsVUFBRTtZQUNaLElBQUksRUFBRSxLQUFLLFNBQVMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUN4RCxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQ2hELENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxVQUFDLEVBQU87Z0JBQVAsa0JBQU8sRUFBTixTQUFDLEVBQUUsVUFBRTtZQUFNLE9BQUEsRUFBRTtRQUFGLENBQUUsQ0FBQyxDQUNyQixDQUFDO0lBQ0osQ0FBQzs7Z0JBN0cwQixLQUFLO2dCQUNQLFdBQVc7Z0JBQ0wsaUJBQWlCOzs7SUFKckMsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxrQkFBa0IsQ0FnSDlCOzZCQTNJRDtDQTJJQyxBQWhIRCxJQWdIQztTQWhIWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgbWFwLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBCMkJQYXltZW50VHlwZUVudW0sIFBheW1lbnRUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLWdyb3VwLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIEdFVF9QQVlNRU5UX1RZUEVTX1BST0NFU1NfSUQsXG4gIFN0YXRlV2l0aENoZWNrb3V0LFxufSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50VHlwZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgcGF5bWVudCB0eXBlc1xuICAgKi9cbiAgZ2V0UGF5bWVudFR5cGVzKCk6IE9ic2VydmFibGU8UGF5bWVudFR5cGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRBbGxQYXltZW50VHlwZXMpLFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KEdFVF9QQVlNRU5UX1RZUEVTX1BST0NFU1NfSUQpKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgdGFwKChbXywgbG9hZGluZ1N0YXRlXSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShsb2FkaW5nU3RhdGUubG9hZGluZyB8fCBsb2FkaW5nU3RhdGUuc3VjY2VzcyB8fCBsb2FkaW5nU3RhdGUuZXJyb3IpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZFBheW1lbnRUeXBlcygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHBsdWNrKDApLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgc3VwcG9ydGVkIHBheW1lbnQgdHlwZXNcbiAgICovXG4gIGxvYWRQYXltZW50VHlwZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKG5ldyBDaGVja291dEFjdGlvbnMuTG9hZFBheW1lbnRUeXBlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcGF5bWVudCB0eXBlIHRvIGNhcnRcbiAgICogQHBhcmFtIHR5cGVDb2RlXG4gICAqIEBwYXJhbSBwb051bWJlciA6IHB1cmNoYXNlIG9yZGVyIG51bWJlclxuICAgKi9cbiAgc2V0UGF5bWVudFR5cGUodHlwZUNvZGU6IHN0cmluZywgcG9OdW1iZXI/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgY2FydElkO1xuICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmVDYXJ0SWQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKGFjdGl2ZUNhcnRJZCkgPT4gKGNhcnRJZCA9IGFjdGl2ZUNhcnRJZCkpO1xuXG4gICAgdGhpcy5hdXRoU2VydmljZS5pbnZva2VXaXRoVXNlcklkKCh1c2VySWQpID0+IHtcbiAgICAgIGlmICh1c2VySWQgJiYgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgJiYgY2FydElkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnRUeXBlKHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiBjYXJ0SWQsXG4gICAgICAgICAgICB0eXBlQ29kZTogdHlwZUNvZGUsXG4gICAgICAgICAgICBwb051bWJlcjogcG9OdW1iZXIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlbGVjdGVkIHBheW1lbnQgdHlwZVxuICAgKi9cbiAgZ2V0U2VsZWN0ZWRQYXltZW50VHlwZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQYXltZW50VHlwZSkpLFxuICAgIF0pLnBpcGUoXG4gICAgICB0YXAoKFtjYXJ0LCBzZWxlY3RlZF0pID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBpbiBiMmIsIGNhcnQgYWx3YXlzIGhhcyBwYXltZW50VHlwZSAoZGVmYXVsdCB2YWx1ZSAnQ0FSRCcpXG4gICAgICAgICAgaWYgKGNhcnQgJiYgY2FydC5wYXltZW50VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnRUeXBlU3VjY2VzcyhjYXJ0KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbLCBzZWxlY3RlZF0pID0+IHNlbGVjdGVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdGhlIHNlbGVjdGVkIHBheW1lbnQgdHlwZSBpcyBcIkFDQ09VTlRcIiBwYXltZW50XG4gICAqL1xuICBpc0FjY291bnRQYXltZW50KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkUGF5bWVudFR5cGUoKS5waXBlKFxuICAgICAgbWFwKChzZWxlY3RlZCkgPT4gc2VsZWN0ZWQgPT09IEIyQlBheW1lbnRUeXBlRW51bS5BQ0NPVU5UX1BBWU1FTlQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgUE8gTnVtYmVyXG4gICAqL1xuICBnZXRQb051bWJlcigpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0UG9OdW1lcikpLFxuICAgIF0pLnBpcGUoXG4gICAgICB0YXAoKFtjYXJ0LCBwb10pID0+IHtcbiAgICAgICAgaWYgKHBvID09PSB1bmRlZmluZWQgJiYgY2FydCAmJiBjYXJ0LnB1cmNoYXNlT3JkZXJOdW1iZXIpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnRUeXBlU3VjY2VzcyhjYXJ0KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbXywgcG9dKSA9PiBwbylcbiAgICApO1xuICB9XG59XG4iXX0=