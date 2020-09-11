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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsic3RvcmUtZmluZGVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IEdlb1BvaW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9wcm9kdWN0L21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IEZpbmRTdG9yZXNTdGF0ZSwgU3RhdGVXaXRoU3RvcmVGaW5kZXIsIFZpZXdBbGxTdG9yZXNTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlLWZpbmRlci1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdG9yZUZpbmRlclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU3RvcmVGaW5kZXI+O1xuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZjtcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBnZW9sb2NhdGlvbldhdGNoSWQ7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFN0b3JlRmluZGVyPiwgd2luUmVmOiBXaW5kb3dSZWYsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3Igc3RvcmUncyBsb2FkaW5nIHN0YXRlXG4gICAgICovXG4gICAgZ2V0U3RvcmVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSBmb3Igc3RvcmUncyBlbnRpdGllc1xuICAgICAqL1xuICAgIGdldEZpbmRTdG9yZXNFbnRpdGllcygpOiBPYnNlcnZhYmxlPEZpbmRTdG9yZXNTdGF0ZT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHZpZXcgYWxsIHN0b3JlJ3MgbG9hZGluZyBzdGF0ZVxuICAgICAqL1xuICAgIGdldFZpZXdBbGxTdG9yZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlIGZvciB2aWV3IGFsbCBzdG9yZSdzIGVudGl0aWVzXG4gICAgICovXG4gICAgZ2V0Vmlld0FsbFN0b3Jlc0VudGl0aWVzKCk6IE9ic2VydmFibGU8Vmlld0FsbFN0b3Jlc1N0YXRlPjtcbiAgICAvKipcbiAgICAgKiBTdG9yZSBmaW5kaW5nIGFjdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAgICogQHBhcmFtIHF1ZXJ5VGV4dCB0ZXh0IHF1ZXJ5XG4gICAgICogQHBhcmFtIHNlYXJjaENvbmZpZyBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIEBwYXJhbSBsb25naXR1ZGVMYXRpdHVkZSBsb25naXR1ZGUgYW5kIGxhdGl0dWRlIGNvb3JkaW5hdGVzXG4gICAgICogQHBhcmFtIGNvdW50cnlJc29Db2RlIGNvdW50cnkgSVNPIGNvZGVcbiAgICAgKiBAcGFyYW0gdXNlTXlMb2NhdGlvbiBjdXJyZW50IGxvY2F0aW9uIGNvb3JkaW5hdGVzXG4gICAgICogQHBhcmFtIHJhZGl1cyByYWRpdXMgb2YgdGhlIHNjb3BlIGZyb20gdGhlIGNlbnRlciBwb2ludFxuICAgICAqL1xuICAgIGZpbmRTdG9yZXNBY3Rpb24ocXVlcnlUZXh0OiBzdHJpbmcsIHNlYXJjaENvbmZpZz86IFNlYXJjaENvbmZpZywgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBHZW9Qb2ludCwgY291bnRyeUlzb0NvZGU/OiBzdHJpbmcsIHVzZU15TG9jYXRpb24/OiBib29sZWFuLCByYWRpdXM/OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFZpZXcgYWxsIHN0b3Jlc1xuICAgICAqL1xuICAgIHZpZXdBbGxTdG9yZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBWaWV3IGFsbCBzdG9yZXMgYnkgaWRcbiAgICAgKiBAcGFyYW0gc3RvcmVJZCBzdG9yZSBpZFxuICAgICAqL1xuICAgIHZpZXdTdG9yZUJ5SWQoc3RvcmVJZDogc3RyaW5nKTogdm9pZDtcbiAgICBwcml2YXRlIGNsZWFyV2F0Y2hHZW9sb2NhdGlvbjtcbn1cbiJdfQ==