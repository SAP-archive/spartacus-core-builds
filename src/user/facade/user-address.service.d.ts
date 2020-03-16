import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { Address, Country, Region } from '../../model/address.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import * as ɵngcc0 from '@angular/core';
export declare class UserAddressService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * Retrieves user's addresses
     */
    loadAddresses(): void;
    /**
     * Adds user address
     * @param address a user address
     */
    addUserAddress(address: Address): void;
    /**
     * Sets user address as default
     * @param addressId a user address ID
     */
    setAddressAsDefault(addressId: string): void;
    /**
     * Updates existing user address
     * @param addressId a user address ID
     * @param address a user address
     */
    updateUserAddress(addressId: string, address: Address): void;
    /**
     * Deletes existing user address
     * @param addressId a user address ID
     */
    deleteUserAddress(addressId: string): void;
    /**
     * Returns addresses
     */
    getAddresses(): Observable<Address[]>;
    /**
     * Returns a loading flag for addresses
     */
    getAddressesLoading(): Observable<boolean>;
    getAddressesLoadedSuccess(): Observable<boolean>;
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
     * Clear regions in store - useful when changing country
     */
    clearRegions(): void;
    /**
     * Returns all regions
     */
    getRegions(countryIsoCode: string): Observable<Region[]>;
    private withUserId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserAddressService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidXNlci1hZGRyZXNzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEFkZHJlc3MsIENvdW50cnksIFJlZ2lvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyQWRkcmVzc1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdXNlcidzIGFkZHJlc3Nlc1xuICAgICAqL1xuICAgIGxvYWRBZGRyZXNzZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBBZGRzIHVzZXIgYWRkcmVzc1xuICAgICAqIEBwYXJhbSBhZGRyZXNzIGEgdXNlciBhZGRyZXNzXG4gICAgICovXG4gICAgYWRkVXNlckFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0cyB1c2VyIGFkZHJlc3MgYXMgZGVmYXVsdFxuICAgICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICAgKi9cbiAgICBzZXRBZGRyZXNzQXNEZWZhdWx0KGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGV4aXN0aW5nIHVzZXIgYWRkcmVzc1xuICAgICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICAgKiBAcGFyYW0gYWRkcmVzcyBhIHVzZXIgYWRkcmVzc1xuICAgICAqL1xuICAgIHVwZGF0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGV4aXN0aW5nIHVzZXIgYWRkcmVzc1xuICAgICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICAgKi9cbiAgICBkZWxldGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhZGRyZXNzZXNcbiAgICAgKi9cbiAgICBnZXRBZGRyZXNzZXMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzW10+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIGFkZHJlc3Nlc1xuICAgICAqL1xuICAgIGdldEFkZHJlc3Nlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBnZXRBZGRyZXNzZXNMb2FkZWRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGRlbGl2ZXJ5IGNvdW50cmllc1xuICAgICAqL1xuICAgIGxvYWREZWxpdmVyeUNvdW50cmllcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGRlbGl2ZXJ5IGNvdW50cmllc1xuICAgICAqL1xuICAgIGdldERlbGl2ZXJ5Q291bnRyaWVzKCk6IE9ic2VydmFibGU8Q291bnRyeVtdPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY291bnRyeSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgYGlzb2NvZGVgXG4gICAgICogQHBhcmFtIGlzb2NvZGUgYW4gaXNvY29kZSBmb3IgYSBjb3VudHJ5XG4gICAgICovXG4gICAgZ2V0Q291bnRyeShpc29jb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvdW50cnk+O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyByZWdpb25zIGZvciBzcGVjaWZpZWQgY291bnRyeSBieSBgY291bnRyeUlzb0NvZGVgXG4gICAgICogQHBhcmFtIGNvdW50cnlJc29Db2RlXG4gICAgICovXG4gICAgbG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXIgcmVnaW9ucyBpbiBzdG9yZSAtIHVzZWZ1bCB3aGVuIGNoYW5naW5nIGNvdW50cnlcbiAgICAgKi9cbiAgICBjbGVhclJlZ2lvbnMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCByZWdpb25zXG4gICAgICovXG4gICAgZ2V0UmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWdpb25bXT47XG4gICAgcHJpdmF0ZSB3aXRoVXNlcklkO1xufVxuIl19