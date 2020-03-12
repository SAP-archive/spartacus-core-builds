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
    /**
     * Utility method to distinquish pre / post 1.3.0 in a convenient way.
     *
     */
    private withUserId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserAddressService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidXNlci1hZGRyZXNzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBDb3VudHJ5LCBSZWdpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlckFkZHJlc3NTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PjtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHVzZXIncyBhZGRyZXNzZXNcbiAgICAgKi9cbiAgICBsb2FkQWRkcmVzc2VzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQWRkcyB1c2VyIGFkZHJlc3NcbiAgICAgKiBAcGFyYW0gYWRkcmVzcyBhIHVzZXIgYWRkcmVzc1xuICAgICAqL1xuICAgIGFkZFVzZXJBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldHMgdXNlciBhZGRyZXNzIGFzIGRlZmF1bHRcbiAgICAgKiBAcGFyYW0gYWRkcmVzc0lkIGEgdXNlciBhZGRyZXNzIElEXG4gICAgICovXG4gICAgc2V0QWRkcmVzc0FzRGVmYXVsdChhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBleGlzdGluZyB1c2VyIGFkZHJlc3NcbiAgICAgKiBAcGFyYW0gYWRkcmVzc0lkIGEgdXNlciBhZGRyZXNzIElEXG4gICAgICogQHBhcmFtIGFkZHJlc3MgYSB1c2VyIGFkZHJlc3NcbiAgICAgKi9cbiAgICB1cGRhdGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBleGlzdGluZyB1c2VyIGFkZHJlc3NcbiAgICAgKiBAcGFyYW0gYWRkcmVzc0lkIGEgdXNlciBhZGRyZXNzIElEXG4gICAgICovXG4gICAgZGVsZXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWRkcmVzc2VzXG4gICAgICovXG4gICAgZ2V0QWRkcmVzc2VzKCk6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbG9hZGluZyBmbGFnIGZvciBhZGRyZXNzZXNcbiAgICAgKi9cbiAgICBnZXRBZGRyZXNzZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgZ2V0QWRkcmVzc2VzTG9hZGVkU3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBkZWxpdmVyeSBjb3VudHJpZXNcbiAgICAgKi9cbiAgICBsb2FkRGVsaXZlcnlDb3VudHJpZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBkZWxpdmVyeSBjb3VudHJpZXNcbiAgICAgKi9cbiAgICBnZXREZWxpdmVyeUNvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGNvdW50cnkgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGBpc29jb2RlYFxuICAgICAqIEBwYXJhbSBpc29jb2RlIGFuIGlzb2NvZGUgZm9yIGEgY291bnRyeVxuICAgICAqL1xuICAgIGdldENvdW50cnkoaXNvY29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb3VudHJ5PjtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgcmVnaW9ucyBmb3Igc3BlY2lmaWVkIGNvdW50cnkgYnkgYGNvdW50cnlJc29Db2RlYFxuICAgICAqIEBwYXJhbSBjb3VudHJ5SXNvQ29kZVxuICAgICAqL1xuICAgIGxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFyIHJlZ2lvbnMgaW4gc3RvcmUgLSB1c2VmdWwgd2hlbiBjaGFuZ2luZyBjb3VudHJ5XG4gICAgICovXG4gICAgY2xlYXJSZWdpb25zKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgcmVnaW9uc1xuICAgICAqL1xuICAgIGdldFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVnaW9uW10+O1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kIHRvIGRpc3RpbnF1aXNoIHByZSAvIHBvc3QgMS4zLjAgaW4gYSBjb252ZW5pZW50IHdheS5cbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgd2l0aFVzZXJJZDtcbn1cbiJdfQ==