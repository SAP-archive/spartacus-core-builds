import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromProcessStore from '../../process/store/process-state';
import { UserRegisterFormData } from '../model/user.model';
import * as fromStore from '../store/index';
import { Title, User } from '../../model/misc.model';
import { Order, OrderHistoryList } from '../../model/order.model';
import { PaymentDetails } from '../../model/cart.model';
import { Address, Country, Region } from '../../model/address.model';
export declare class UserService {
    private store;
    constructor(store: Store<fromStore.StateWithUser | fromProcessStore.StateWithProcess<void>>);
    /**
     * Returns a user
     */
    get(): Observable<User>;
    /**
     * Loads the user's details
     */
    load(userId: string): void;
    /**
     * Register a new user
     *
     * @param submitFormData as UserRegisterFormData
     */
    register(userRegisterFormData: UserRegisterFormData): void;
    /**
     * Remove user account, that's also called close user's account
     *
     * @param userId
     */
    remove(userId: string): void;
    /**
     * Returns the remove user loading flag
     */
    getRemoveUserResultLoading(): Observable<boolean>;
    /**
     * Returns the remove user failure outcome.
     */
    getRemoveUserResultError(): Observable<boolean>;
    /**
     * Returns the remove user process success outcome.
     */
    getRemoveUserResultSuccess(): Observable<boolean>;
    /**
     * Resets the remove user process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     */
    resetRemoveUserProcessState(): void;
    /**
     * Returns an order's detail
     */
    getOrderDetails(): Observable<Order>;
    /**
     * Retrieves order's details
     *
     * @param userId a user's ID
     * @param orderCode an order code
     */
    loadOrderDetails(userId: string, orderCode: string): void;
    /**
     * Clears order's details
     */
    clearOrderDetails(): void;
    /**
     * Returns order history list
     */
    getOrderHistoryList(userId: string, pageSize: number): Observable<OrderHistoryList>;
    /**
     * Returns a loaded flag for order history list
     */
    getOrderHistoryListLoaded(): Observable<boolean>;
    /**
     * Loads all user's payment methods.
     * @param userId a user ID
     */
    loadPaymentMethods(userId: string): void;
    /**
     * Returns all user's payment methods
     */
    getPaymentMethods(): Observable<PaymentDetails[]>;
    /**
     * Returns a loading flag for payment methods
     */
    getPaymentMethodsLoading(): Observable<boolean>;
    /**
     * Sets the payment as a default one
     * @param userId a user ID
     * @param paymentMethodId a payment method ID
     */
    setPaymentMethodAsDefault(userId: string, paymentMethodId: string): void;
    /**
     * Deletes the payment method
     *
     * @param userId a user ID
     * @param paymentMethodId a payment method ID
     */
    deletePaymentMethod(userId: string, paymentMethodId: string): void;
    /**
     * Retrieves an order list
     * @param userId a user ID
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadOrderList(userId: string, pageSize: number, currentPage?: number, sort?: string): void;
    /**
     * Retrieves user's addresses
     * @param userId a user ID
     */
    loadAddresses(userId: string): void;
    /**
     * Adds user address
     * @param userId a user ID
     * @param address a user address
     */
    addUserAddress(userId: string, address: Address): void;
    /**
     * Sets user address as default
     * @param userId a user ID
     * @param addressId a user address ID
     */
    setAddressAsDefault(userId: string, addressId: string): void;
    /**
     * Updates existing user address
     * @param userId a user ID
     * @param addressId a user address ID
     * @param address a user address
     */
    updateUserAddress(userId: string, addressId: string, address: Address): void;
    /**
     * Deletes existing user address
     * @param userId a user ID
     * @param addressId a user address ID
     */
    deleteUserAddress(userId: string, addressId: string): void;
    /**
     * Returns addresses
     */
    getAddresses(): Observable<Address[]>;
    /**
     * Returns a loading flag for addresses
     */
    getAddressesLoading(): Observable<boolean>;
    /**
     * Returns titles
     */
    getTitles(): Observable<Title[]>;
    /**
     * Retrieves titles
     */
    loadTitles(): void;
    /**
     * Retrieves delivery countries
     */
    loadDeliveryCountries(): void;
    /**
     * Returns all delivery countries
     */
    getDeliveryCountries(): Observable<Country[]>;
    /**
     * Returns a country based on the provided `isocode`
     * @param isocode an isocode for a country
     */
    getCountry(isocode: string): Observable<Country>;
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param countryIsoCode
     */
    loadRegions(countryIsoCode: string): void;
    /**
     * Returns all regions
     */
    getRegions(): Observable<Region[]>;
    /**
     * Returns all billing countries
     */
    getAllBillingCountries(): Observable<Country[]>;
    /**
     * Retrieves billing countries
     */
    loadBillingCountries(): void;
    /**
     * Cleaning order list
     */
    clearOrderList(): void;
    /**
     * Return whether user's password is successfully reset
     */
    isPasswordReset(): Observable<boolean>;
    /**
     * Updates the user's details
     * @param userDetails to be updated
     */
    updatePersonalDetails(username: string, userDetails: User): void;
    /**
     * Returns the update user's personal details loading flag
     */
    getUpdatePersonalDetailsResultLoading(): Observable<boolean>;
    /**
     * Returns the update user's personal details error flag
     */
    getUpdatePersonalDetailsResultError(): Observable<boolean>;
    /**
     * Returns the update user's personal details success flag
     */
    getUpdatePersonalDetailsResultSuccess(): Observable<boolean>;
    /**
     * Resets the update user details processing state
     */
    resetUpdatePersonalDetailsProcessingState(): void;
    /**
     * Reset new password.  Part of the forgot password flow.
     * @param token
     * @param password
     */
    resetPassword(token: string, password: string): void;
    requestForgotPasswordEmail(userEmailAddress: string): void;
    /**
     * Updates the user's email
     * @param uid to be updated
     */
    updateEmail(uid: string, password: string, newUid: string): void;
    /**
     * Returns the update user's email success flag
     */
    getUpdateEmailResultSuccess(): Observable<boolean>;
    /**
     * Returns the update user's email error flag
     */
    getUpdateEmailResultError(): Observable<boolean>;
    /**
     * Returns the update user's email loading flag
     */
    getUpdateEmailResultLoading(): Observable<boolean>;
    /**
     * Resets the update user's email processing state
     */
    resetUpdateEmailResultState(): void;
    /**
     * Updates the password for an authenticated user
     * @param userId the user id for which the password will be updated
     * @param oldPassword the current password that will be changed
     * @param newPassword the new password
     */
    updatePassword(userId: string, oldPassword: string, newPassword: string): void;
    /**
     * Returns the update passwrod loading flag
     */
    getUpdatePasswordResultLoading(): Observable<boolean>;
    /**
     * Returns the update password failure outcome.
     */
    getUpdatePasswordResultError(): Observable<boolean>;
    /**
     * Returns the update password process success outcome.
     */
    getUpdatePasswordResultSuccess(): Observable<boolean>;
    /**
     * Resets the update password process state. The state needs to be reset after the process
     * concludes, regardless if it's a success or an error
     */
    resetUpdatePasswordProcessState(): void;
}
