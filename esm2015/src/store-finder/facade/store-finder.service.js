import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { GlobalMessageService, GlobalMessageType, } from '../../global-message/index';
import { RoutingService } from '../../routing/index';
import { WindowRef } from '../../window/window-ref';
import { StoreFinderActions } from '../store/actions/index';
import { StoreFinderSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../window/window-ref";
import * as i3 from "../../global-message/facade/global-message.service";
import * as i4 from "../../routing/facade/routing.service";
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
     * @param radius radius of the scope from the center point
     */
    findStoresAction(queryText, searchConfig, longitudeLatitude, countryIsoCode, useMyLocation, radius) {
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
                    radius: radius,
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
                radius: radius,
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
StoreFinderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StoreFinderService_Factory() { return new StoreFinderService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.WindowRef), i0.ɵɵinject(i3.GlobalMessageService), i0.ɵɵinject(i4.RoutingService)); }, token: StoreFinderService, providedIn: "root" });
StoreFinderService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], StoreFinderService);
export { StoreFinderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSw0QkFBNEIsQ0FBQztBQUdwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7QUFVaEUsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFHN0IsWUFDWSxLQUFrQyxFQUNsQyxNQUFpQixFQUNqQixvQkFBMEMsRUFDMUMsY0FBOEI7UUFIOUIsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU5sQyx1QkFBa0IsR0FBVyxJQUFJLENBQUM7SUFPdkMsQ0FBQztJQUVKOztPQUVHO0lBQ0gsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7T0FFRztJQUNILHFCQUFxQjtRQUNuQixP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LENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0YsQ0FBQTs7WUF6SG9CLEtBQUs7WUFDSixTQUFTO1lBQ0ssb0JBQW9CO1lBQzFCLGNBQWM7OztBQVAvQixrQkFBa0I7SUFIOUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGtCQUFrQixDQTZIOUI7U0E3SFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uLCBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5pbXBvcnQgeyBHZW9Qb2ludCB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIEZpbmRTdG9yZXNTdGF0ZSxcbiAgU3RhdGVXaXRoU3RvcmVGaW5kZXIsXG4gIFZpZXdBbGxTdG9yZXNTdGF0ZSxcbn0gZnJvbSAnLi4vc3RvcmUvc3RvcmUtZmluZGVyLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU2VydmljZSB7XG4gIHByaXZhdGUgZ2VvbG9jYXRpb25XYXRjaElkOiBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU3RvcmVGaW5kZXI+LFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3Igc3RvcmUncyBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBnZXRTdG9yZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFN0b3JlRmluZGVyU2VsZWN0b3JzLmdldFN0b3Jlc0xvYWRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9ic2VydmFibGUgZm9yIHN0b3JlJ3MgZW50aXRpZXNcbiAgICovXG4gIGdldEZpbmRTdG9yZXNFbnRpdGllcygpOiBPYnNlcnZhYmxlPEZpbmRTdG9yZXNTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFN0b3JlRmluZGVyU2VsZWN0b3JzLmdldEZpbmRTdG9yZXNFbnRpdGllcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciB2aWV3IGFsbCBzdG9yZSdzIGxvYWRpbmcgc3RhdGVcbiAgICovXG4gIGdldFZpZXdBbGxTdG9yZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU3RvcmVGaW5kZXJTZWxlY3RvcnMuZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmcpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9ic2VydmFibGUgZm9yIHZpZXcgYWxsIHN0b3JlJ3MgZW50aXRpZXNcbiAgICovXG4gIGdldFZpZXdBbGxTdG9yZXNFbnRpdGllcygpOiBPYnNlcnZhYmxlPFZpZXdBbGxTdG9yZXNTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU3RvcmVGaW5kZXJTZWxlY3RvcnMuZ2V0Vmlld0FsbFN0b3Jlc0VudGl0aWVzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmUgZmluZGluZyBhY3Rpb24gZnVuY3Rpb25hbGl0eVxuICAgKiBAcGFyYW0gcXVlcnlUZXh0IHRleHQgcXVlcnlcbiAgICogQHBhcmFtIHNlYXJjaENvbmZpZyBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0gbG9uZ2l0dWRlTGF0aXR1ZGUgbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSBjb29yZGluYXRlc1xuICAgKiBAcGFyYW0gY291bnRyeUlzb0NvZGUgY291bnRyeSBJU08gY29kZVxuICAgKiBAcGFyYW0gdXNlTXlMb2NhdGlvbiBjdXJyZW50IGxvY2F0aW9uIGNvb3JkaW5hdGVzXG4gICAqIEBwYXJhbSByYWRpdXMgcmFkaXVzIG9mIHRoZSBzY29wZSBmcm9tIHRoZSBjZW50ZXIgcG9pbnRcbiAgICovXG4gIGZpbmRTdG9yZXNBY3Rpb24oXG4gICAgcXVlcnlUZXh0OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnPzogU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnQsXG4gICAgY291bnRyeUlzb0NvZGU/OiBzdHJpbmcsXG4gICAgdXNlTXlMb2NhdGlvbj86IGJvb2xlYW4sXG4gICAgcmFkaXVzPzogbnVtYmVyXG4gICkge1xuICAgIGlmICh1c2VNeUxvY2F0aW9uICYmIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24obmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVzT25Ib2xkKCkpO1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbldhdGNoSWQgPSB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXG4gICAgICAgIChwb3M6IFBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcG9zaXRpb246IEdlb1BvaW50ID0ge1xuICAgICAgICAgICAgbG9uZ2l0dWRlOiBwb3MuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICAgIGxhdGl0dWRlOiBwb3MuY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihcbiAgICAgICAgICAgIG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlcyh7XG4gICAgICAgICAgICAgIHF1ZXJ5VGV4dDogcXVlcnlUZXh0LFxuICAgICAgICAgICAgICBzZWFyY2hDb25maWc6IHNlYXJjaENvbmZpZyxcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlTGF0aXR1ZGU6IHBvc2l0aW9uLFxuICAgICAgICAgICAgICBjb3VudHJ5SXNvQ29kZTogY291bnRyeUlzb0NvZGUsXG4gICAgICAgICAgICAgIHJhZGl1czogcmFkaXVzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICB7IGtleTogJ3N0b3JlRmluZGVyLmdlb2xvY2F0aW9uTm90RW5hYmxlZCcgfSxcbiAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFsnL3N0b3JlLWZpbmRlciddKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24oXG4gICAgICAgIG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlcyh7XG4gICAgICAgICAgcXVlcnlUZXh0OiBxdWVyeVRleHQsXG4gICAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICAgICAgbG9uZ2l0dWRlTGF0aXR1ZGU6IGxvbmdpdHVkZUxhdGl0dWRlLFxuICAgICAgICAgIGNvdW50cnlJc29Db2RlOiBjb3VudHJ5SXNvQ29kZSxcbiAgICAgICAgICByYWRpdXM6IHJhZGl1cyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZpZXcgYWxsIHN0b3Jlc1xuICAgKi9cbiAgdmlld0FsbFN0b3JlcygpIHtcbiAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLlZpZXdBbGxTdG9yZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVmlldyBhbGwgc3RvcmVzIGJ5IGlkXG4gICAqIEBwYXJhbSBzdG9yZUlkIHN0b3JlIGlkXG4gICAqL1xuICB2aWV3U3RvcmVCeUlkKHN0b3JlSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKFxuICAgICAgbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVCeUlkKHsgc3RvcmVJZCB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyV2F0Y2hHZW9sb2NhdGlvbihjYWxsYmFja0FjdGlvbjogQWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2goXG4gICAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkXG4gICAgICApO1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbldhdGNoSWQgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGNhbGxiYWNrQWN0aW9uKTtcbiAgfVxufVxuIl19