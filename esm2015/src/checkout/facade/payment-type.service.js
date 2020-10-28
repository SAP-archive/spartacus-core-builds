import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map, pluck, shareReplay, take, tap, withLatestFrom, } from 'rxjs/operators';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { B2BPaymentTypeEnum } from '../../model/cart.model';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { getProcessStateFactory } from '../../process/store/selectors/process-group.selectors';
import { CheckoutActions } from '../store/actions/index';
import { GET_PAYMENT_TYPES_PROCESS_ID, } from '../store/checkout-state';
import { CheckoutSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../cart/facade/active-cart.service";
import * as i3 from "../../auth/user-auth/facade/user-id.service";
export class PaymentTypeService {
    constructor(checkoutStore, activeCartService, userIdService) {
        this.checkoutStore = checkoutStore;
        this.activeCartService = activeCartService;
        this.userIdService = userIdService;
    }
    /**
     * Get payment types
     */
    getPaymentTypes() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getAllPaymentTypes), withLatestFrom(this.checkoutStore.pipe(select(getProcessStateFactory(GET_PAYMENT_TYPES_PROCESS_ID)))), tap(([_, loadingState]) => {
            if (!(loadingState.loading || loadingState.success || loadingState.error)) {
                this.loadPaymentTypes();
            }
        }), pluck(0), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Load the supported payment types
     */
    loadPaymentTypes() {
        this.checkoutStore.dispatch(new CheckoutActions.LoadPaymentTypes());
    }
    /**
     * Set payment type to cart
     * @param typeCode
     * @param poNumber : purchase order number
     */
    setPaymentType(typeCode, poNumber) {
        let cartId;
        this.activeCartService
            .getActiveCartId()
            .pipe(take(1))
            .subscribe((activeCartId) => (cartId = activeCartId));
        this.userIdService.invokeWithUserId((userId) => {
            if (userId && userId !== OCC_USER_ID_ANONYMOUS && cartId) {
                this.checkoutStore.dispatch(new CheckoutActions.SetPaymentType({
                    userId: userId,
                    cartId: cartId,
                    typeCode: typeCode,
                    poNumber: poNumber,
                }));
            }
        });
    }
    /**
     * Get the selected payment type
     */
    getSelectedPaymentType() {
        return combineLatest([
            this.activeCartService.getActive(),
            this.checkoutStore.pipe(select(CheckoutSelectors.getSelectedPaymentType)),
        ]).pipe(tap(([cart, selected]) => {
            if (selected === undefined) {
                // in b2b, cart always has paymentType (default value 'CARD')
                if (cart && cart.paymentType) {
                    this.checkoutStore.dispatch(new CheckoutActions.SetPaymentTypeSuccess(cart));
                }
            }
        }), map(([, selected]) => selected));
    }
    /**
     * Get whether the selected payment type is "ACCOUNT" payment
     */
    isAccountPayment() {
        return this.getSelectedPaymentType().pipe(map((selected) => selected === B2BPaymentTypeEnum.ACCOUNT_PAYMENT));
    }
    /**
     * Get PO Number
     */
    getPoNumber() {
        return combineLatest([
            this.activeCartService.getActive(),
            this.checkoutStore.pipe(select(CheckoutSelectors.getPoNumer)),
        ]).pipe(tap(([cart, po]) => {
            if (po === undefined && cart && cart.purchaseOrderNumber) {
                this.checkoutStore.dispatch(new CheckoutActions.SetPaymentTypeSuccess(cart));
            }
        }), map(([_, po]) => po));
    }
}
PaymentTypeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaymentTypeService_Factory() { return new PaymentTypeService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.ActiveCartService), i0.ɵɵinject(i3.UserIdService)); }, token: PaymentTypeService, providedIn: "root" });
PaymentTypeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PaymentTypeService.ctorParameters = () => [
    { type: Store },
    { type: ActiveCartService },
    { type: UserIdService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jaGVja291dC9mYWNhZGUvcGF5bWVudC10eXBlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxHQUFHLEVBQ0gsS0FBSyxFQUNMLFdBQVcsRUFDWCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQWUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUNMLDRCQUE0QixHQUU3QixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUs3RCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQ1ksYUFBZ0UsRUFDaEUsaUJBQW9DLEVBQ3BDLGFBQTRCO1FBRjVCLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNoRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdB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LGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNULE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlELENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQixJQUFJLEVBQUUsS0FBSyxTQUFTLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtnQkFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUNoRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQ3JCLENBQUM7SUFDSixDQUFDOzs7O1lBbEhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBekJnQixLQUFLO1lBV2IsaUJBQWlCO1lBRGpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgbWFwLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVzZXJJZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9mYWNhZGUvdXNlci1pZC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBCMkJQYXltZW50VHlwZUVudW0sIFBheW1lbnRUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLWdyb3VwLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIEdFVF9QQVlNRU5UX1RZUEVTX1BST0NFU1NfSUQsXG4gIFN0YXRlV2l0aENoZWNrb3V0LFxufSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50VHlwZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VySWRTZXJ2aWNlOiBVc2VySWRTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogR2V0IHBheW1lbnQgdHlwZXNcbiAgICovXG4gIGdldFBheW1lbnRUeXBlcygpOiBPYnNlcnZhYmxlPFBheW1lbnRUeXBlW10+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0QWxsUGF5bWVudFR5cGVzKSxcbiAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeShHRVRfUEFZTUVOVF9UWVBFU19QUk9DRVNTX0lEKSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHRhcCgoW18sIGxvYWRpbmdTdGF0ZV0pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEobG9hZGluZ1N0YXRlLmxvYWRpbmcgfHwgbG9hZGluZ1N0YXRlLnN1Y2Nlc3MgfHwgbG9hZGluZ1N0YXRlLmVycm9yKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWRQYXltZW50VHlwZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBwbHVjaygwKSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIHN1cHBvcnRlZCBwYXltZW50IHR5cGVzXG4gICAqL1xuICBsb2FkUGF5bWVudFR5cGVzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRQYXltZW50VHlwZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHBheW1lbnQgdHlwZSB0byBjYXJ0XG4gICAqIEBwYXJhbSB0eXBlQ29kZVxuICAgKiBAcGFyYW0gcG9OdW1iZXIgOiBwdXJjaGFzZSBvcmRlciBudW1iZXJcbiAgICovXG4gIHNldFBheW1lbnRUeXBlKHR5cGVDb2RlOiBzdHJpbmcsIHBvTnVtYmVyPzogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGNhcnRJZDtcbiAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlQ2FydElkKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChhY3RpdmVDYXJ0SWQpID0+IChjYXJ0SWQgPSBhY3RpdmVDYXJ0SWQpKTtcblxuICAgIHRoaXMudXNlcklkU2VydmljZS5pbnZva2VXaXRoVXNlcklkKCh1c2VySWQpID0+IHtcbiAgICAgIGlmICh1c2VySWQgJiYgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgJiYgY2FydElkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnRUeXBlKHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiBjYXJ0SWQsXG4gICAgICAgICAgICB0eXBlQ29kZTogdHlwZUNvZGUsXG4gICAgICAgICAgICBwb051bWJlcjogcG9OdW1iZXIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlbGVjdGVkIHBheW1lbnQgdHlwZVxuICAgKi9cbiAgZ2V0U2VsZWN0ZWRQYXltZW50VHlwZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQYXltZW50VHlwZSkpLFxuICAgIF0pLnBpcGUoXG4gICAgICB0YXAoKFtjYXJ0LCBzZWxlY3RlZF0pID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBpbiBiMmIsIGNhcnQgYWx3YXlzIGhhcyBwYXltZW50VHlwZSAoZGVmYXVsdCB2YWx1ZSAnQ0FSRCcpXG4gICAgICAgICAgaWYgKGNhcnQgJiYgY2FydC5wYXltZW50VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnRUeXBlU3VjY2VzcyhjYXJ0KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbLCBzZWxlY3RlZF0pID0+IHNlbGVjdGVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdGhlIHNlbGVjdGVkIHBheW1lbnQgdHlwZSBpcyBcIkFDQ09VTlRcIiBwYXltZW50XG4gICAqL1xuICBpc0FjY291bnRQYXltZW50KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkUGF5bWVudFR5cGUoKS5waXBlKFxuICAgICAgbWFwKChzZWxlY3RlZCkgPT4gc2VsZWN0ZWQgPT09IEIyQlBheW1lbnRUeXBlRW51bS5BQ0NPVU5UX1BBWU1FTlQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgUE8gTnVtYmVyXG4gICAqL1xuICBnZXRQb051bWJlcigpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0UG9OdW1lcikpLFxuICAgIF0pLnBpcGUoXG4gICAgICB0YXAoKFtjYXJ0LCBwb10pID0+IHtcbiAgICAgICAgaWYgKHBvID09PSB1bmRlZmluZWQgJiYgY2FydCAmJiBjYXJ0LnB1cmNoYXNlT3JkZXJOdW1iZXIpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnRUeXBlU3VjY2VzcyhjYXJ0KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbXywgcG9dKSA9PiBwbylcbiAgICApO1xuICB9XG59XG4iXX0=