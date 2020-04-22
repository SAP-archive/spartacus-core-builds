import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { WindowRef } from '../../window/window-ref';
import { StoreFinderActions } from '../store/actions/index';
import { StoreFinderSelectors } from '../store/selectors/index';
import { GlobalMessageService, GlobalMessageType, } from '../../global-message/index';
import { RoutingService } from '../../routing/index';
var StoreFinderService = /** @class */ (function () {
    function StoreFinderService(store, winRef, globalMessageService, routingService) {
        this.store = store;
        this.winRef = winRef;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.geolocationWatchId = null;
    }
    /**
     * Returns boolean observable for store's loading state
     */
    StoreFinderService.prototype.getStoresLoading = function () {
        return this.store.pipe(select(StoreFinderSelectors.getStoresLoading));
    };
    /**
     * Returns observable for store's entities
     */
    StoreFinderService.prototype.getFindStoresEntities = function () {
        return this.store.pipe(select(StoreFinderSelectors.getFindStoresEntities));
    };
    /**
     * Returns boolean observable for view all store's loading state
     */
    StoreFinderService.prototype.getViewAllStoresLoading = function () {
        return this.store.pipe(select(StoreFinderSelectors.getViewAllStoresLoading));
    };
    /**
     * Returns observable for view all store's entities
     */
    StoreFinderService.prototype.getViewAllStoresEntities = function () {
        return this.store.pipe(select(StoreFinderSelectors.getViewAllStoresEntities));
    };
    /**
     * Store finding action functionality
     * @param queryText text query
     * @param searchConfig search configuration
     * @param longitudeLatitude longitude and latitude coordinates
     * @param countryIsoCode country ISO code
     * @param useMyLocation current location coordinates
     * @param radius radius of the scope from the center point
     */
    StoreFinderService.prototype.findStoresAction = function (queryText, searchConfig, longitudeLatitude, countryIsoCode, useMyLocation, radius) {
        var _this = this;
        if (useMyLocation && this.winRef.nativeWindow) {
            this.clearWatchGeolocation(new StoreFinderActions.FindStoresOnHold());
            this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition(function (pos) {
                var position = {
                    longitude: pos.coords.longitude,
                    latitude: pos.coords.latitude,
                };
                _this.clearWatchGeolocation(new StoreFinderActions.FindStores({
                    queryText: queryText,
                    searchConfig: searchConfig,
                    longitudeLatitude: position,
                    countryIsoCode: countryIsoCode,
                    radius: radius,
                }));
            }, function () {
                _this.globalMessageService.add({ key: 'storeFinder.geolocationNotEnabled' }, GlobalMessageType.MSG_TYPE_ERROR);
                _this.routingService.go(['/store-finder']);
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
    };
    /**
     * View all stores
     */
    StoreFinderService.prototype.viewAllStores = function () {
        this.clearWatchGeolocation(new StoreFinderActions.ViewAllStores());
    };
    /**
     * View all stores by id
     * @param storeId store id
     */
    StoreFinderService.prototype.viewStoreById = function (storeId) {
        this.clearWatchGeolocation(new StoreFinderActions.FindStoreById({ storeId: storeId }));
    };
    StoreFinderService.prototype.clearWatchGeolocation = function (callbackAction) {
        if (this.geolocationWatchId !== null) {
            this.winRef.nativeWindow.navigator.geolocation.clearWatch(this.geolocationWatchId);
            this.geolocationWatchId = null;
        }
        this.store.dispatch(callbackAction);
    };
    StoreFinderService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef },
        { type: GlobalMessageService },
        { type: RoutingService }
    ]; };
    StoreFinderService = __decorate([
        Injectable()
    ], StoreFinderService);
    return StoreFinderService;
}());
export { StoreFinderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT2hFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3JEO0lBR0UsNEJBQ1ksS0FBa0MsRUFDbEMsTUFBaUIsRUFDakIsb0JBQTBDLEVBQzFDLGNBQThCO1FBSDlCLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFObEMsdUJBQWtCLEdBQVcsSUFBSSxDQUFDO0lBT3ZDLENBQUM7SUFFSjs7T0FFRztJQUNILDZDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxrREFBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMs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R0FBRyxJQUFJLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0QyxDQUFDOztnQkF4SGtCLEtBQUs7Z0JBQ0osU0FBUztnQkFDSyxvQkFBb0I7Z0JBQzFCLGNBQWM7O0lBUC9CLGtCQUFrQjtRQUQ5QixVQUFVLEVBQUU7T0FDQSxrQkFBa0IsQ0E2SDlCO0lBQUQseUJBQUM7Q0FBQSxBQTdIRCxJQTZIQztTQTdIWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24sIHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHZW9Qb2ludCB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQge1xuICBGaW5kU3RvcmVzU3RhdGUsXG4gIFN0YXRlV2l0aFN0b3JlRmluZGVyLFxuICBWaWV3QWxsU3RvcmVzU3RhdGUsXG59IGZyb20gJy4uL3N0b3JlL3N0b3JlLWZpbmRlci1zdGF0ZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyB9IGZyb20gJy4vLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclNlcnZpY2Uge1xuICBwcml2YXRlIGdlb2xvY2F0aW9uV2F0Y2hJZDogbnVtYmVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFN0b3JlRmluZGVyPixcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHN0b3JlJ3MgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgZ2V0U3RvcmVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChTdG9yZUZpbmRlclNlbGVjdG9ycy5nZXRTdG9yZXNMb2FkaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvYnNlcnZhYmxlIGZvciBzdG9yZSdzIGVudGl0aWVzXG4gICAqL1xuICBnZXRGaW5kU3RvcmVzRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxGaW5kU3RvcmVzU3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChTdG9yZUZpbmRlclNlbGVjdG9ycy5nZXRGaW5kU3RvcmVzRW50aXRpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgdmlldyBhbGwgc3RvcmUncyBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBnZXRWaWV3QWxsU3RvcmVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFN0b3JlRmluZGVyU2VsZWN0b3JzLmdldFZpZXdBbGxTdG9yZXNMb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvYnNlcnZhYmxlIGZvciB2aWV3IGFsbCBzdG9yZSdzIGVudGl0aWVzXG4gICAqL1xuICBnZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxWaWV3QWxsU3RvcmVzU3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFN0b3JlRmluZGVyU2VsZWN0b3JzLmdldFZpZXdBbGxTdG9yZXNFbnRpdGllcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlIGZpbmRpbmcgYWN0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICogQHBhcmFtIHF1ZXJ5VGV4dCB0ZXh0IHF1ZXJ5XG4gICAqIEBwYXJhbSBzZWFyY2hDb25maWcgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIGxvbmdpdHVkZUxhdGl0dWRlIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUgY29vcmRpbmF0ZXNcbiAgICogQHBhcmFtIGNvdW50cnlJc29Db2RlIGNvdW50cnkgSVNPIGNvZGVcbiAgICogQHBhcmFtIHVzZU15TG9jYXRpb24gY3VycmVudCBsb2NhdGlvbiBjb29yZGluYXRlc1xuICAgKiBAcGFyYW0gcmFkaXVzIHJhZGl1cyBvZiB0aGUgc2NvcGUgZnJvbSB0aGUgY2VudGVyIHBvaW50XG4gICAqL1xuICBmaW5kU3RvcmVzQWN0aW9uKFxuICAgIHF1ZXJ5VGV4dDogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZz86IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnQsXG4gICAgY291bnRyeUlzb0NvZGU/OiBzdHJpbmcsXG4gICAgdXNlTXlMb2NhdGlvbj86IGJvb2xlYW4sXG4gICAgcmFkaXVzPzogbnVtYmVyXG4gICkge1xuICAgIGlmICh1c2VNeUxvY2F0aW9uICYmIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24obmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVzT25Ib2xkKCkpO1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbldhdGNoSWQgPSB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXG4gICAgICAgIChwb3M6IFBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcG9zaXRpb246IEdlb1BvaW50ID0ge1xuICAgICAgICAgICAgbG9uZ2l0dWRlOiBwb3MuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICAgIGxhdGl0dWRlOiBwb3MuY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihcbiAgICAgICAgICAgIG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlcyh7XG4gICAgICAgICAgICAgIHF1ZXJ5VGV4dDogcXVlcnlUZXh0LFxuICAgICAgICAgICAgICBzZWFyY2hDb25maWc6IHNlYXJjaENvbmZpZyxcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlTGF0aXR1ZGU6IHBvc2l0aW9uLFxuICAgICAgICAgICAgICBjb3VudHJ5SXNvQ29kZTogY291bnRyeUlzb0NvZGUsXG4gICAgICAgICAgICAgIHJhZGl1czogcmFkaXVzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICB7IGtleTogJ3N0b3JlRmluZGVyLmdlb2xvY2F0aW9uTm90RW5hYmxlZCcgfSxcbiAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFsnL3N0b3JlLWZpbmRlciddKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24oXG4gICAgICAgIG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlcyh7XG4gICAgICAgICAgcXVlcnlUZXh0OiBxdWVyeVRleHQsXG4gICAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICAgICAgbG9uZ2l0dWRlTGF0aXR1ZGU6IGxvbmdpdHVkZUxhdGl0dWRlLFxuICAgICAgICAgIGNvdW50cnlJc29Db2RlOiBjb3VudHJ5SXNvQ29kZSxcbiAgICAgICAgICByYWRpdXM6IHJhZGl1cyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZpZXcgYWxsIHN0b3Jlc1xuICAgKi9cbiAgdmlld0FsbFN0b3JlcygpIHtcbiAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLlZpZXdBbGxTdG9yZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVmlldyBhbGwgc3RvcmVzIGJ5IGlkXG4gICAqIEBwYXJhbSBzdG9yZUlkIHN0b3JlIGlkXG4gICAqL1xuICB2aWV3U3RvcmVCeUlkKHN0b3JlSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKFxuICAgICAgbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVCeUlkKHsgc3RvcmVJZCB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyV2F0Y2hHZW9sb2NhdGlvbihjYWxsYmFja0FjdGlvbjogQWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2goXG4gICAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkXG4gICAgICApO1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbldhdGNoSWQgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGNhbGxiYWNrQWN0aW9uKTtcbiAgfVxufVxuIl19