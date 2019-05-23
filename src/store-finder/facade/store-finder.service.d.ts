import { Store } from '@ngrx/store';
import { StateWithStoreFinder, FindStoresState, ViewAllStoresState } from '../store/store-finder-state';
import { StoreFinderSearchConfig } from './../model/search-config';
import { Observable } from 'rxjs';
import { WindowRef } from '../../window/window-ref';
import { GeoPoint } from '../../model/misc.model';
export declare class StoreFinderService {
    protected store: Store<StateWithStoreFinder>;
    protected winRef: WindowRef;
    private geolocationWatchId;
    constructor(store: Store<StateWithStoreFinder>, winRef: WindowRef);
    /**
     * Returns boolean observable for store's loading state
     */
    getStoresLoading(): Observable<boolean>;
    /**
     * Returns observable for store's entities
     */
    getFindStoresEntities(): Observable<FindStoresState>;
    /**
     * Returns boolean observable for view all store's loading state
     */
    getViewAllStoresLoading(): Observable<boolean>;
    /**
     * Returns observable for view all store's entities
     */
    getViewAllStoresEntities(): Observable<ViewAllStoresState>;
    /**
     * Store finding action functionality
     * @param queryText text query
     * @param longitudeLatitude longitude and latitude coordinates
     * @param searchConfig search configuration
     * @param countryIsoCode country ISO code
     */
    findStoresAction(queryText: string, longitudeLatitude: GeoPoint, searchConfig: StoreFinderSearchConfig, countryIsoCode?: string): void;
    /**
     * View all stores
     */
    viewAllStores(): void;
    /**
     * View all stores by id
     * @param storeId store id
     */
    viewStoreById(storeId: string): void;
    /**
     * Find all stores
     * @param queryText text query
     * @param useMyLocation use current location
     */
    findStores(queryText: string, useMyLocation?: boolean): void;
    private clearWatchGeolocation;
}
