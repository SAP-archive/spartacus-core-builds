import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_CURRENT } from '../../occ/index';
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
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     */
    withUserId(callback) {
        if (this.authService) {
            this.authService
                .getOccUserId()
                .pipe(take(1))
                .subscribe(userId => callback(userId));
        }
        else {
            // TODO(issue:#5628) Deprecated since 1.3.0
            callback(OCC_USER_ID_CURRENT);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBTTFELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBYzdCLFlBQ1ksS0FBb0QsRUFDcEQsV0FBeUI7UUFEekIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWM7SUFDbEMsQ0FBQztJQUVKOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDcEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDhCQUE4QjtRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLDhCQUE4QixDQUFDLENBQ3RELENBQUM7SUFDSixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gseUJBQXlCLENBQUMsZUFBdUI7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsMkJBQTJCLENBQUM7WUFDMUMsTUFBTTtZQUNOLGVBQWU7U0FDaEIsQ0FBQyxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUJBQW1CLENBQUMsZUFBdUI7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUM7WUFDdEMsTUFBTTtZQUNOLGVBQWU7U0FDaEIsQ0FBQyxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFvQjtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFVBQVUsQ0FBQyxRQUFrQztRQUNuRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVc7aUJBQ2IsWUFBWSxFQUFFO2lCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNMLDJDQUEyQztZQUMzQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7Q0FDRixDQUFBOztZQTVGb0IsS0FBSztZQUNFLFdBQVc7OztBQWhCMUIsa0JBQWtCO0lBSDlCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxrQkFBa0IsQ0EyRzlCO1NBM0dZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi9vY2MvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlclBheW1lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiAgVXNlIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAqICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIGluc3RlYWRcbiAgICpcbiAgICogIFRPRE8oaXNzdWU6IzU2MjgpIERlcHJlY2F0ZWQgc2luY2UgMS4zLjBcbiAgICovXG4gIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4pO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U/OiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIGFsbCB1c2VyJ3MgcGF5bWVudCBtZXRob2RzLlxuICAgKi9cbiAgbG9hZFBheW1lbnRNZXRob2RzKCk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyUGF5bWVudE1ldGhvZHModXNlcklkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIHVzZXIncyBwYXltZW50IG1ldGhvZHNcbiAgICovXG4gIGdldFBheW1lbnRNZXRob2RzKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFBheW1lbnRNZXRob2RzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgcGF5bWVudCBtZXRob2RzXG4gICAqL1xuICBnZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKSk7XG4gIH1cblxuICBnZXRQYXltZW50TWV0aG9kc0xvYWRlZFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRQYXltZW50TWV0aG9kc0xvYWRlZFN1Y2Nlc3MpXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyB0aGUgcGF5bWVudCBhcyBhIGRlZmF1bHQgb25lXG4gICAqIEBwYXJhbSBwYXltZW50TWV0aG9kSWQgYSBwYXltZW50IG1ldGhvZCBJRFxuICAgKi9cbiAgc2V0UGF5bWVudE1ldGhvZEFzRGVmYXVsdChwYXltZW50TWV0aG9kSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5TZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2Qoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBwYXltZW50TWV0aG9kSWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIHRoZSBwYXltZW50IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0gcGF5bWVudE1ldGhvZElkIGEgcGF5bWVudCBtZXRob2QgSURcbiAgICovXG4gIGRlbGV0ZVBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQodXNlcklkID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuRGVsZXRlVXNlclBheW1lbnRNZXRob2Qoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBwYXltZW50TWV0aG9kSWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBiaWxsaW5nIGNvdW50cmllc1xuICAgKi9cbiAgZ2V0QWxsQmlsbGluZ0NvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEFsbEJpbGxpbmdDb3VudHJpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYmlsbGluZyBjb3VudHJpZXNcbiAgICovXG4gIGxvYWRCaWxsaW5nQ291bnRyaWVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRCaWxsaW5nQ291bnRyaWVzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIGRpc3RpbnF1aXNoIHByZSAvIHBvc3QgMS4zLjAgaW4gYSBjb252ZW5pZW50IHdheS5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgd2l0aFVzZXJJZChjYWxsYmFjazogKHVzZXJJZDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UpIHtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUodXNlcklkID0+IGNhbGxiYWNrKHVzZXJJZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPKGlzc3VlOiM1NjI4KSBEZXByZWNhdGVkIHNpbmNlIDEuMy4wXG4gICAgICBjYWxsYmFjayhPQ0NfVVNFUl9JRF9DVVJSRU5UKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==