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
    protected authService?: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * @deprecated since version 1.3
     *  Use constructor(store: Store<StateWithUser | StateWithProcess<void>>,
     *  authService: AuthService) instead
     *
     *  TODO(issue:#5628) Deprecated since 1.3.0
     */
    constructor(store: Store<StateWithUser | StateWithProcess<void>>);
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
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     */
    private withUserId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserPaymentService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidXNlci1wYXltZW50LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyUGF5bWVudFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZT86IEF1dGhTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiAgVXNlIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgICogIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgaW5zdGVhZFxuICAgICAqXG4gICAgICogIFRPRE8oaXNzdWU6IzU2MjgpIERlcHJlY2F0ZWQgc2luY2UgMS4zLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+KTtcbiAgICAvKipcbiAgICAgKiBMb2FkcyBhbGwgdXNlcidzIHBheW1lbnQgbWV0aG9kcy5cbiAgICAgKi9cbiAgICBsb2FkUGF5bWVudE1ldGhvZHMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCB1c2VyJ3MgcGF5bWVudCBtZXRob2RzXG4gICAgICovXG4gICAgZ2V0UGF5bWVudE1ldGhvZHMoKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbG9hZGluZyBmbGFnIGZvciBwYXltZW50IG1ldGhvZHNcbiAgICAgKi9cbiAgICBnZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBnZXRQYXltZW50TWV0aG9kc0xvYWRlZFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwYXltZW50IGFzIGEgZGVmYXVsdCBvbmVcbiAgICAgKiBAcGFyYW0gcGF5bWVudE1ldGhvZElkIGEgcGF5bWVudCBtZXRob2QgSURcbiAgICAgKi9cbiAgICBzZXRQYXltZW50TWV0aG9kQXNEZWZhdWx0KHBheW1lbnRNZXRob2RJZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSBwYXltZW50IG1ldGhvZFxuICAgICAqXG4gICAgICogQHBhcmFtIHBheW1lbnRNZXRob2RJZCBhIHBheW1lbnQgbWV0aG9kIElEXG4gICAgICovXG4gICAgZGVsZXRlUGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kSWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgYmlsbGluZyBjb3VudHJpZXNcbiAgICAgKi9cbiAgICBnZXRBbGxCaWxsaW5nQ291bnRyaWVzKCk6IE9ic2VydmFibGU8Q291bnRyeVtdPjtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYmlsbGluZyBjb3VudHJpZXNcbiAgICAgKi9cbiAgICBsb2FkQmlsbGluZ0NvdW50cmllcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kIHRvIGRpc3RpbnF1aXNoIHByZSAvIHBvc3QgMS4zLjAgaW4gYSBjb252ZW5pZW50IHdheS5cbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgd2l0aFVzZXJJZDtcbn1cbiJdfQ==