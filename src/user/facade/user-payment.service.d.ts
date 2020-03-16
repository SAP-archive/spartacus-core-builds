import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { Country } from '../../model/address.model';
import { PaymentDetails } from '../../model/cart.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import * as ɵngcc0 from '@angular/core';
export declare class UserPaymentService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * Loads all user's payment methods.
     */
    loadPaymentMethods(): void;
    /**
     * Returns all user's payment methods
     */
    getPaymentMethods(): Observable<PaymentDetails[]>;
    /**
     * Returns a loading flag for payment methods
     */
    getPaymentMethodsLoading(): Observable<boolean>;
    getPaymentMethodsLoadedSuccess(): Observable<boolean>;
    /**
     * Sets the payment as a default one
     * @param paymentMethodId a payment method ID
     */
    setPaymentMethodAsDefault(paymentMethodId: string): void;
    /**
     * Deletes the payment method
     *
     * @param paymentMethodId a payment method ID
     */
    deletePaymentMethod(paymentMethodId: string): void;
    /**
     * Returns all billing countries
     */
    getAllBillingCountries(): Observable<Country[]>;
    /**
     * Retrieves billing countries
     */
    loadBillingCountries(): void;
    private withUserId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserPaymentService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidXNlci1wYXltZW50LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENvdW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJQYXltZW50U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIExvYWRzIGFsbCB1c2VyJ3MgcGF5bWVudCBtZXRob2RzLlxuICAgICAqL1xuICAgIGxvYWRQYXltZW50TWV0aG9kcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIHVzZXIncyBwYXltZW50IG1ldGhvZHNcbiAgICAgKi9cbiAgICBnZXRQYXltZW50TWV0aG9kcygpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIHBheW1lbnQgbWV0aG9kc1xuICAgICAqL1xuICAgIGdldFBheW1lbnRNZXRob2RzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGdldFBheW1lbnRNZXRob2RzTG9hZGVkU3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBheW1lbnQgYXMgYSBkZWZhdWx0IG9uZVxuICAgICAqIEBwYXJhbSBwYXltZW50TWV0aG9kSWQgYSBwYXltZW50IG1ldGhvZCBJRFxuICAgICAqL1xuICAgIHNldFBheW1lbnRNZXRob2RBc0RlZmF1bHQocGF5bWVudE1ldGhvZElkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgdGhlIHBheW1lbnQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGF5bWVudE1ldGhvZElkIGEgcGF5bWVudCBtZXRob2QgSURcbiAgICAgKi9cbiAgICBkZWxldGVQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2RJZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBiaWxsaW5nIGNvdW50cmllc1xuICAgICAqL1xuICAgIGdldEFsbEJpbGxpbmdDb3VudHJpZXMoKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBiaWxsaW5nIGNvdW50cmllc1xuICAgICAqL1xuICAgIGxvYWRCaWxsaW5nQ291bnRyaWVzKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSB3aXRoVXNlcklkO1xufVxuIl19