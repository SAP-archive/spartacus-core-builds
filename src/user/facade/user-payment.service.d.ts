import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from '../../model/address.model';
import { PaymentDetails } from '../../model/cart.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
export declare class UserPaymentService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
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
}
