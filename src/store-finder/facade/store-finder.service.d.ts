import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GeoPoint } from '../../model/misc.model';
import { WindowRef } from '../../window/window-ref';
import { FindStoresState, StateWithStoreFinder, ViewAllStoresState } from '../store/store-finder-state';
import { StoreFinderSearchConfig } from './../model/search-config';
import { GlobalMessageService } from '../../global-message/index';
import { RoutingService } from '../../routing/index';
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
    findStoresAction(queryText: string, searchConfig?: StoreFinderSearchConfig, longitudeLatitude?: GeoPoint, countryIsoCode?: string, useMyLocation?: boolean, radius?: number): void;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsic3RvcmUtZmluZGVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHZW9Qb2ludCB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgRmluZFN0b3Jlc1N0YXRlLCBTdGF0ZVdpdGhTdG9yZUZpbmRlciwgVmlld0FsbFN0b3Jlc1N0YXRlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUtZmluZGVyLXN0YXRlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi8uLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0b3JlRmluZGVyU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTdG9yZUZpbmRlcj47XG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmO1xuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcml2YXRlIGdlb2xvY2F0aW9uV2F0Y2hJZDtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoU3RvcmVGaW5kZXI+LCB3aW5SZWY6IFdpbmRvd1JlZiwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBzdG9yZSdzIGxvYWRpbmcgc3RhdGVcbiAgICAgKi9cbiAgICBnZXRTdG9yZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlIGZvciBzdG9yZSdzIGVudGl0aWVzXG4gICAgICovXG4gICAgZ2V0RmluZFN0b3Jlc0VudGl0aWVzKCk6IE9ic2VydmFibGU8RmluZFN0b3Jlc1N0YXRlPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgdmlldyBhbGwgc3RvcmUncyBsb2FkaW5nIHN0YXRlXG4gICAgICovXG4gICAgZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG9ic2VydmFibGUgZm9yIHZpZXcgYWxsIHN0b3JlJ3MgZW50aXRpZXNcbiAgICAgKi9cbiAgICBnZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxWaWV3QWxsU3RvcmVzU3RhdGU+O1xuICAgIC8qKlxuICAgICAqIFN0b3JlIGZpbmRpbmcgYWN0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBAcGFyYW0gcXVlcnlUZXh0IHRleHQgcXVlcnlcbiAgICAgKiBAcGFyYW0gc2VhcmNoQ29uZmlnIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHBhcmFtIGxvbmdpdHVkZUxhdGl0dWRlIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUgY29vcmRpbmF0ZXNcbiAgICAgKiBAcGFyYW0gY291bnRyeUlzb0NvZGUgY291bnRyeSBJU08gY29kZVxuICAgICAqIEBwYXJhbSB1c2VNeUxvY2F0aW9uIGN1cnJlbnQgbG9jYXRpb24gY29vcmRpbmF0ZXNcbiAgICAgKiBAcGFyYW0gcmFkaXVzIHJhZGl1cyBvZiB0aGUgc2NvcGUgZnJvbSB0aGUgY2VudGVyIHBvaW50XG4gICAgICovXG4gICAgZmluZFN0b3Jlc0FjdGlvbihxdWVyeVRleHQ6IHN0cmluZywgc2VhcmNoQ29uZmlnPzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnQsIGNvdW50cnlJc29Db2RlPzogc3RyaW5nLCB1c2VNeUxvY2F0aW9uPzogYm9vbGVhbiwgcmFkaXVzPzogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBWaWV3IGFsbCBzdG9yZXNcbiAgICAgKi9cbiAgICB2aWV3QWxsU3RvcmVzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVmlldyBhbGwgc3RvcmVzIGJ5IGlkXG4gICAgICogQHBhcmFtIHN0b3JlSWQgc3RvcmUgaWRcbiAgICAgKi9cbiAgICB2aWV3U3RvcmVCeUlkKHN0b3JlSWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBjbGVhcldhdGNoR2VvbG9jYXRpb247XG59XG4iXX0=