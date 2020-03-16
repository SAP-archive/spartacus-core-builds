import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
let UserPaymentService = class UserPaymentService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Loads all user's payment methods.
     */
    loadPaymentMethods() {
        this.withUserId(userId => this.store.dispatch(new UserActions.LoadUserPaymentMethods(userId)));
    }
    /**
     * Returns all user's payment methods
     */
    getPaymentMethods() {
        return this.store.pipe(select(UsersSelectors.getPaymentMethods));
    }
    /**
     * Returns a loading flag for payment methods
     */
    getPaymentMethodsLoading() {
        return this.store.pipe(select(UsersSelectors.getPaymentMethodsLoading));
    }
    getPaymentMethodsLoadedSuccess() {
        return this.store.pipe(select(UsersSelectors.getPaymentMethodsLoadedSuccess));
    }
    /**
     * Sets the payment as a default one
     * @param paymentMethodId a payment method ID
     */
    setPaymentMethodAsDefault(paymentMethodId) {
        this.withUserId(userId => this.store.dispatch(new UserActions.SetDefaultUserPaymentMethod({
            userId,
            paymentMethodId,
        })));
    }
    /**
     * Deletes the payment method
     *
     * @param paymentMethodId a payment method ID
     */
    deletePaymentMethod(paymentMethodId) {
        this.withUserId(userId => this.store.dispatch(new UserActions.DeleteUserPaymentMethod({
            userId,
            paymentMethodId,
        })));
    }
    /**
     * Returns all billing countries
     */
    getAllBillingCountries() {
        return this.store.pipe(select(UsersSelectors.getAllBillingCountries));
    }
    /**
     * Retrieves billing countries
     */
    loadBillingCountries() {
        this.store.dispatch(new UserActions.LoadBillingCountries());
    }
    /*
     * Utility method to distinquish user id in a convenient way
     */
    withUserId(callback) {
        this.authService
            .getOccUserId()
            .pipe(take(1))
            .subscribe(userId => callback(userId));
    }
};
UserPaymentService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
UserPaymentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserPaymentService_Factory() { return new UserPaymentService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserPaymentService, providedIn: "root" });
UserPaymentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserPaymentService);
export { UserPaymentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUk3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBTTFELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBQzdCLFlBQ1ksS0FBb0QsRUFDcEQsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDcEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDhCQUE4QjtRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLDhCQUE4QixDQUFDLENBQ3RELENBQUM7SUFDSixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gseUJBQXlCLENBQUMsZUFBdUI7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsMkJBQTJCLENBQUM7WUFDMUMsTUFBTTtZQUNOLGVBQWU7U0FDaEIsQ0FBQyxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUJBQW1CLENBQUMsZUFBdUI7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUM7WUFDdEMsTUFBTTtZQUNOLGVBQWU7U0FDaEIsQ0FBQyxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFvQjtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssVUFBVSxDQUFDLFFBQWtDO1FBQ25ELElBQUksQ0FBQyxXQUFXO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRixDQUFBOztZQXRGb0IsS0FBSztZQUNDLFdBQVc7OztBQUh6QixrQkFBa0I7SUFIOUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGtCQUFrQixDQXdGOUI7U0F4Rlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlclBheW1lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIGFsbCB1c2VyJ3MgcGF5bWVudCBtZXRob2RzLlxuICAgKi9cbiAgbG9hZFBheW1lbnRNZXRob2RzKCk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyUGF5bWVudE1ldGhvZHModXNlcklkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIHVzZXIncyBwYXltZW50IG1ldGhvZHNcbiAgICovXG4gIGdldFBheW1lbnRNZXRob2RzKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFBheW1lbnRNZXRob2RzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgcGF5bWVudCBtZXRob2RzXG4gICAqL1xuICBnZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKSk7XG4gIH1cblxuICBnZXRQYXltZW50TWV0aG9kc0xvYWRlZFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRQYXltZW50TWV0aG9kc0xvYWRlZFN1Y2Nlc3MpXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyB0aGUgcGF5bWVudCBhcyBhIGRlZmF1bHQgb25lXG4gICAqIEBwYXJhbSBwYXltZW50TWV0aG9kSWQgYSBwYXltZW50IG1ldGhvZCBJRFxuICAgKi9cbiAgc2V0UGF5bWVudE1ldGhvZEFzRGVmYXVsdChwYXltZW50TWV0aG9kSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5TZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2Qoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBwYXltZW50TWV0aG9kSWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIHRoZSBwYXltZW50IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0gcGF5bWVudE1ldGhvZElkIGEgcGF5bWVudCBtZXRob2QgSURcbiAgICovXG4gIGRlbGV0ZVBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQodXNlcklkID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuRGVsZXRlVXNlclBheW1lbnRNZXRob2Qoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBwYXltZW50TWV0aG9kSWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBiaWxsaW5nIGNvdW50cmllc1xuICAgKi9cbiAgZ2V0QWxsQmlsbGluZ0NvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEFsbEJpbGxpbmdDb3VudHJpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYmlsbGluZyBjb3VudHJpZXNcbiAgICovXG4gIGxvYWRCaWxsaW5nQ291bnRyaWVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRCaWxsaW5nQ291bnRyaWVzKCkpO1xuICB9XG5cbiAgLypcbiAgICogVXRpbGl0eSBtZXRob2QgdG8gZGlzdGlucXVpc2ggdXNlciBpZCBpbiBhIGNvbnZlbmllbnQgd2F5XG4gICAqL1xuICBwcml2YXRlIHdpdGhVc2VySWQoY2FsbGJhY2s6ICh1c2VySWQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUodXNlcklkID0+IGNhbGxiYWNrKHVzZXJJZCkpO1xuICB9XG59XG4iXX0=