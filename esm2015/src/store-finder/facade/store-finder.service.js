import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { WindowRef } from '../../window/window-ref';
import { StoreFinderActions } from '../store/actions/index';
import { StoreFinderSelectors } from '../store/selectors/index';
import { GlobalMessageService, GlobalMessageType, } from '../../global-message/index';
import { RoutingService } from '../../routing/index';
let StoreFinderService = class StoreFinderService {
    constructor(store, winRef, globalMessageService, routingService) {
        this.store = store;
        this.winRef = winRef;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.geolocationWatchId = null;
    }
    /**
     * Returns boolean observable for store's loading state
     */
    getStoresLoading() {
        return this.store.pipe(select(StoreFinderSelectors.getStoresLoading));
    }
    /**
     * Returns observable for store's entities
     */
    getFindStoresEntities() {
        return this.store.pipe(select(StoreFinderSelectors.getFindStoresEntities));
    }
    /**
     * Returns boolean observable for view all store's loading state
     */
    getViewAllStoresLoading() {
        return this.store.pipe(select(StoreFinderSelectors.getViewAllStoresLoading));
    }
    /**
     * Returns observable for view all store's entities
     */
    getViewAllStoresEntities() {
        return this.store.pipe(select(StoreFinderSelectors.getViewAllStoresEntities));
    }
    /**
     * Store finding action functionality
     * @param queryText text query
     * @param searchConfig search configuration
     * @param longitudeLatitude longitude and latitude coordinates
     * @param countryIsoCode country ISO code
     * @param useMyLocation current location coordinates
     */
    findStoresAction(queryText, searchConfig, longitudeLatitude, countryIsoCode, useMyLocation) {
        if (useMyLocation && this.winRef.nativeWindow) {
            this.clearWatchGeolocation(new StoreFinderActions.FindStoresOnHold());
            this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition((pos) => {
                const position = {
                    longitude: pos.coords.longitude,
                    latitude: pos.coords.latitude,
                };
                this.clearWatchGeolocation(new StoreFinderActions.FindStores({
                    queryText: queryText,
                    searchConfig: searchConfig,
                    longitudeLatitude: position,
                    countryIsoCode: countryIsoCode,
                }));
            }, () => {
                this.globalMessageService.add({ key: 'storeFinder.geolocationNotEnabled' }, GlobalMessageType.MSG_TYPE_ERROR);
                this.routingService.go(['/store-finder']);
            });
        }
        else {
            this.clearWatchGeolocation(new StoreFinderActions.FindStores({
                queryText: queryText,
                searchConfig: searchConfig,
                longitudeLatitude: longitudeLatitude,
                countryIsoCode: countryIsoCode,
            }));
        }
    }
    /**
     * View all stores
     */
    viewAllStores() {
        this.clearWatchGeolocation(new StoreFinderActions.ViewAllStores());
    }
    /**
     * View all stores by id
     * @param storeId store id
     */
    viewStoreById(storeId) {
        this.clearWatchGeolocation(new StoreFinderActions.FindStoreById({ storeId }));
    }
    clearWatchGeolocation(callbackAction) {
        if (this.geolocationWatchId !== null) {
            this.winRef.nativeWindow.navigator.geolocation.clearWatch(this.geolocationWatchId);
            this.geolocationWatchId = null;
        }
        this.store.dispatch(callbackAction);
    }
};
StoreFinderService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef },
    { type: GlobalMessageService },
    { type: RoutingService }
];
StoreFinderService = __decorate([
    Injectable()
], StoreFinderService);
export { StoreFinderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT2hFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3JELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBRzdCLFlBQ1ksS0FBa0MsRUFDbEMsTUFBaUIsRUFDakIsb0JBQTBDLEVBQzFDLGNBQThCO1FBSDlCLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFObEMsdUJBQWtCLEdBQVcsSUFBSSxDQUFDO0lBT3ZDLENBQUM7SUFFSjs7T0FFRztJQUNILGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQkFBcUI7UUFDbkIsT0FBTyxJ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QUFDO0lBQ3RDLENBQUM7Q0FDRixDQUFBOztZQXJIb0IsS0FBSztZQUNKLFNBQVM7WUFDSyxvQkFBb0I7WUFDMUIsY0FBYzs7QUFQL0Isa0JBQWtCO0lBRDlCLFVBQVUsRUFBRTtHQUNBLGtCQUFrQixDQXlIOUI7U0F6SFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uLCBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR2VvUG9pbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgRmluZFN0b3Jlc1N0YXRlLFxuICBTdGF0ZVdpdGhTdG9yZUZpbmRlcixcbiAgVmlld0FsbFN0b3Jlc1N0YXRlLFxufSBmcm9tICcuLi9zdG9yZS9zdG9yZS1maW5kZXItc3RhdGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb25maWcgfSBmcm9tICcuLy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBnZW9sb2NhdGlvbldhdGNoSWQ6IG51bWJlciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTdG9yZUZpbmRlcj4sXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBzdG9yZSdzIGxvYWRpbmcgc3RhdGVcbiAgICovXG4gIGdldFN0b3Jlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoU3RvcmVGaW5kZXJTZWxlY3RvcnMuZ2V0U3RvcmVzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb2JzZXJ2YWJsZSBmb3Igc3RvcmUncyBlbnRpdGllc1xuICAgKi9cbiAgZ2V0RmluZFN0b3Jlc0VudGl0aWVzKCk6IE9ic2VydmFibGU8RmluZFN0b3Jlc1N0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoU3RvcmVGaW5kZXJTZWxlY3RvcnMuZ2V0RmluZFN0b3Jlc0VudGl0aWVzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHZpZXcgYWxsIHN0b3JlJ3MgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTdG9yZUZpbmRlclNlbGVjdG9ycy5nZXRWaWV3QWxsU3RvcmVzTG9hZGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb2JzZXJ2YWJsZSBmb3IgdmlldyBhbGwgc3RvcmUncyBlbnRpdGllc1xuICAgKi9cbiAgZ2V0Vmlld0FsbFN0b3Jlc0VudGl0aWVzKCk6IE9ic2VydmFibGU8Vmlld0FsbFN0b3Jlc1N0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTdG9yZUZpbmRlclNlbGVjdG9ycy5nZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZSBmaW5kaW5nIGFjdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAqIEBwYXJhbSBxdWVyeVRleHQgdGV4dCBxdWVyeVxuICAgKiBAcGFyYW0gc2VhcmNoQ29uZmlnIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSBsb25naXR1ZGVMYXRpdHVkZSBsb25naXR1ZGUgYW5kIGxhdGl0dWRlIGNvb3JkaW5hdGVzXG4gICAqIEBwYXJhbSBjb3VudHJ5SXNvQ29kZSBjb3VudHJ5IElTTyBjb2RlXG4gICAqIEBwYXJhbSB1c2VNeUxvY2F0aW9uIGN1cnJlbnQgbG9jYXRpb24gY29vcmRpbmF0ZXNcbiAgICovXG4gIGZpbmRTdG9yZXNBY3Rpb24oXG4gICAgcXVlcnlUZXh0OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnPzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsXG4gICAgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBHZW9Qb2ludCxcbiAgICBjb3VudHJ5SXNvQ29kZT86IHN0cmluZyxcbiAgICB1c2VNeUxvY2F0aW9uPzogYm9vbGVhblxuICApIHtcbiAgICBpZiAodXNlTXlMb2NhdGlvbiAmJiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlc09uSG9sZCgpKTtcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkID0gdGhpcy53aW5SZWYubmF0aXZlV2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICAocG9zOiBQb3NpdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uOiBHZW9Qb2ludCA9IHtcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcG9zLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgICBsYXRpdHVkZTogcG9zLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24oXG4gICAgICAgICAgICBuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZXMoe1xuICAgICAgICAgICAgICBxdWVyeVRleHQ6IHF1ZXJ5VGV4dCxcbiAgICAgICAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICAgICAgICAgIGxvbmdpdHVkZUxhdGl0dWRlOiBwb3NpdGlvbixcbiAgICAgICAgICAgICAgY291bnRyeUlzb0NvZGU6IGNvdW50cnlJc29Db2RlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICB7IGtleTogJ3N0b3JlRmluZGVyLmdlb2xvY2F0aW9uTm90RW5hYmxlZCcgfSxcbiAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFsnL3N0b3JlLWZpbmRlciddKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24oXG4gICAgICAgIG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlcyh7XG4gICAgICAgICAgcXVlcnlUZXh0OiBxdWVyeVRleHQsXG4gICAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICAgICAgbG9uZ2l0dWRlTGF0aXR1ZGU6IGxvbmdpdHVkZUxhdGl0dWRlLFxuICAgICAgICAgIGNvdW50cnlJc29Db2RlOiBjb3VudHJ5SXNvQ29kZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZpZXcgYWxsIHN0b3Jlc1xuICAgKi9cbiAgdmlld0FsbFN0b3JlcygpIHtcbiAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLlZpZXdBbGxTdG9yZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVmlldyBhbGwgc3RvcmVzIGJ5IGlkXG4gICAqIEBwYXJhbSBzdG9yZUlkIHN0b3JlIGlkXG4gICAqL1xuICB2aWV3U3RvcmVCeUlkKHN0b3JlSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKFxuICAgICAgbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVCeUlkKHsgc3RvcmVJZCB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyV2F0Y2hHZW9sb2NhdGlvbihjYWxsYmFja0FjdGlvbjogQWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2goXG4gICAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkXG4gICAgICApO1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbldhdGNoSWQgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGNhbGxiYWNrQWN0aW9uKTtcbiAgfVxufVxuIl19