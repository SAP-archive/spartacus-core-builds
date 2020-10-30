import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalMessageService } from '../../global-message/index';
import { GeoPoint } from '../../model/misc.model';
import { SearchConfig } from '../../product/model/search-config';
import { RoutingService } from '../../routing/index';
import { WindowRef } from '../../window/window-ref';
import { FindStoresState, StateWithStoreFinder, ViewAllStoresState } from '../store/store-finder-state';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderService {
    protected store: Store<StateWithStoreFinder>;
    protected winRef: WindowRef;
    protected globalMessageService: GlobalMessageService;
    protected routingService: RoutingService;
    private geolocationWatchId;
    constructor(store: Store<StateWithStoreFinder>, winRef: WindowRef, globalMessageService: GlobalMessageService, routingService: RoutingService);
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
     * @param searchConfig search configuration
     * @param longitudeLatitude longitude and latitude coordinates
     * @param countryIsoCode country ISO code
     * @param useMyLocation current location coordinates
     * @param radius radius of the scope from the center point
     */
    findStoresAction(queryText: string, searchConfig?: SearchConfig, longitudeLatitude?: GeoPoint, countryIsoCode?: string, useMyLocation?: boolean, radius?: number): void;
    /**
     * View all stores
     */
    viewAllStores(): void;
    /**
     * View all stores by id
     * @param storeId store id
     */
    viewStoreById(storeId: string): void;
    private clearWatchGeolocation;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderService, never>;
}

//# sourceMappingURL=store-finder.service.d.ts.map