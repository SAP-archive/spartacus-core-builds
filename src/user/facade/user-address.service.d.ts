import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { Address, Country, Region } from '../../model/address.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
export declare class UserAddressService {
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
}
