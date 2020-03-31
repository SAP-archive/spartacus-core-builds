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
        this.withUserId((userId) => this.store.dispatch(new UserActions.LoadUserPaymentMethods(userId)));
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
        this.withUserId((userId) => this.store.dispatch(new UserActions.SetDefaultUserPaymentMethod({
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
        this.withUserId((userId) => this.store.dispatch(new UserActions.DeleteUserPaymentMethod({
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
            .subscribe((userId) => callback(userId));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUk3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBTTFELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBQzdCLFlBQ1ksS0FBb0QsRUFDcEQsV0FBd0I7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBK0M7UUFDcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUNwRSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsOEJBQThCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsOEJBQThCLENBQUMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7SUFDRDs7O09BR0c7SUFDSCx5QkFBeUIsQ0FBQyxlQUF1QjtRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLDJCQUEyQixDQUFDO1lBQzFDLE1BQU07WUFDTixlQUFlO1NBQ2hCLENBQUMsQ0FDSCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG1CQUFtQixDQUFDLGVBQXVCO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUM7WUFDdEMsTUFBTTtZQUNOLGVBQWU7U0FDaEIsQ0FBQyxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFvQjtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssVUFBVSxDQUFDLFFBQWtDO1FBQ25ELElBQUksQ0FBQyxXQUFXO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGLENBQUE7O1lBdEZvQixLQUFLO1lBQ0MsV0FBVzs7O0FBSHpCLGtCQUFrQjtJQUg5QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csa0JBQWtCLENBd0Y5QjtTQXhGWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENvdW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2Vyc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyUGF5bWVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogTG9hZHMgYWxsIHVzZXIncyBwYXltZW50IG1ldGhvZHMuXG4gICAqL1xuICBsb2FkUGF5bWVudE1ldGhvZHMoKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKCh1c2VySWQpID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlclBheW1lbnRNZXRob2RzKHVzZXJJZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB1c2VyJ3MgcGF5bWVudCBtZXRob2RzXG4gICAqL1xuICBnZXRQYXltZW50TWV0aG9kcygpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRQYXltZW50TWV0aG9kcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIHBheW1lbnQgbWV0aG9kc1xuICAgKi9cbiAgZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFBheW1lbnRNZXRob2RzTG9hZGluZykpO1xuICB9XG5cbiAgZ2V0UGF5bWVudE1ldGhvZHNMb2FkZWRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0UGF5bWVudE1ldGhvZHNMb2FkZWRTdWNjZXNzKVxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIHBheW1lbnQgYXMgYSBkZWZhdWx0IG9uZVxuICAgKiBAcGFyYW0gcGF5bWVudE1ldGhvZElkIGEgcGF5bWVudCBtZXRob2QgSURcbiAgICovXG4gIHNldFBheW1lbnRNZXRob2RBc0RlZmF1bHQocGF5bWVudE1ldGhvZElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQoKHVzZXJJZCkgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5TZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2Qoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBwYXltZW50TWV0aG9kSWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIHRoZSBwYXltZW50IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0gcGF5bWVudE1ldGhvZElkIGEgcGF5bWVudCBtZXRob2QgSURcbiAgICovXG4gIGRlbGV0ZVBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQoKHVzZXJJZCkgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5EZWxldGVVc2VyUGF5bWVudE1ldGhvZCh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHBheW1lbnRNZXRob2RJZCxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGJpbGxpbmcgY291bnRyaWVzXG4gICAqL1xuICBnZXRBbGxCaWxsaW5nQ291bnRyaWVzKCk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0QWxsQmlsbGluZ0NvdW50cmllcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBiaWxsaW5nIGNvdW50cmllc1xuICAgKi9cbiAgbG9hZEJpbGxpbmdDb3VudHJpZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuTG9hZEJpbGxpbmdDb3VudHJpZXMoKSk7XG4gIH1cblxuICAvKlxuICAgKiBVdGlsaXR5IG1ldGhvZCB0byBkaXN0aW5xdWlzaCB1c2VyIGlkIGluIGEgY29udmVuaWVudCB3YXlcbiAgICovXG4gIHByaXZhdGUgd2l0aFVzZXJJZChjYWxsYmFjazogKHVzZXJJZDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgodXNlcklkKSA9PiBjYWxsYmFjayh1c2VySWQpKTtcbiAgfVxufVxuIl19