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

//# sourceMappingURL=user-payment.service.d.ts.map