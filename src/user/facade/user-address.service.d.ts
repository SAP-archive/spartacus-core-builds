import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Address, Country, Region } from '../../model/address.model';
import * as fromProcessStore from '../../process/store/process-state';
import * as fromStore from '../store/index';
export declare class UserAddressService {
    protected store: Store<fromStore.StateWithUser | fromProcessStore.StateWithProcess<void>>;
    constructor(store: Store<fromStore.StateWithUser | fromProcessStore.StateWithProcess<void>>);
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
}
