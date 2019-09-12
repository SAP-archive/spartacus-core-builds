/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WindowRef } from '../../window/window-ref';
import { StoreFinderActions } from '../store/actions/index';
import { StoreFinderSelectors } from '../store/selectors/index';
import { GlobalMessageService, GlobalMessageType, } from '../../global-message/index';
import { RoutingService } from '../../routing/index';
export class StoreFinderService {
    /**
     * @param {?} store
     * @param {?} winRef
     * @param {?} globalMessageService
     * @param {?} routingService
     */
    constructor(store, winRef, globalMessageService, routingService) {
        this.store = store;
        this.winRef = winRef;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.geolocationWatchId = null;
    }
    /**
     * Returns boolean observable for store's loading state
     * @return {?}
     */
    getStoresLoading() {
        return this.store.pipe(select(StoreFinderSelectors.getStoresLoading));
    }
    /**
     * Returns observable for store's entities
     * @return {?}
     */
    getFindStoresEntities() {
        return this.store.pipe(select(StoreFinderSelectors.getFindStoresEntities));
    }
    /**
     * Returns boolean observable for view all store's loading state
     * @return {?}
     */
    getViewAllStoresLoading() {
        return this.store.pipe(select(StoreFinderSelectors.getViewAllStoresLoading));
    }
    /**
     * Returns observable for view all store's entities
     * @return {?}
     */
    getViewAllStoresEntities() {
        return this.store.pipe(select(StoreFinderSelectors.getViewAllStoresEntities));
    }
    /**
     * Store finding action functionality
     * @param {?} queryText text query
     * @param {?=} searchConfig search configuration
     * @param {?=} longitudeLatitude longitude and latitude coordinates
     * @param {?=} countryIsoCode country ISO code
     * @param {?=} useMyLocation current location coordinates
     * @return {?}
     */
    findStoresAction(queryText, searchConfig, longitudeLatitude, countryIsoCode, useMyLocation) {
        if (useMyLocation && this.winRef.nativeWindow) {
            this.clearWatchGeolocation(new StoreFinderActions.FindStoresOnHold());
            this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                /** @type {?} */
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
            }), (/**
             * @return {?}
             */
            () => {
                this.globalMessageService.add({ key: 'storeFinder.geolocationNotEnabled' }, GlobalMessageType.MSG_TYPE_ERROR);
                this.routingService.go(['/store-finder']);
            }));
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
     * @return {?}
     */
    viewAllStores() {
        this.clearWatchGeolocation(new StoreFinderActions.ViewAllStores());
    }
    /**
     * View all stores by id
     * @param {?} storeId store id
     * @return {?}
     */
    viewStoreById(storeId) {
        this.clearWatchGeolocation(new StoreFinderActions.FindStoreById({ storeId }));
    }
    /**
     * @private
     * @param {?} callbackAction
     * @return {?}
     */
    clearWatchGeolocation(callbackAction) {
        if (this.geolocationWatchId !== null) {
            this.winRef.nativeWindow.navigator.geolocation.clearWatch(this.geolocationWatchId);
            this.geolocationWatchId = null;
        }
        this.store.dispatch(callbackAction);
    }
}
StoreFinderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StoreFinderService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef },
    { type: GlobalMessageService },
    { type: RoutingService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StoreFinderService.prototype.geolocationWatchId;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderService.prototype.winRef;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderService.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderService.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPaEUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHckQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7OztJQUc3QixZQUNZLEtBQWtDLEVBQ2xDLE1BQWlCLEVBQ2pCLG9CQUEwQyxFQUMxQyxjQUE4QjtRQUg5QixVQUFLLEdBQUwsS0FBSyxDQUE2QjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTmxDLHVCQUFrQixHQUFXLElBQUksQ0FBQztJQU92QyxDQUFDOzs7OztJQUtKLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUtELHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFD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b0I7WUFHYixjQUFjOzs7Ozs7O0lBSXJCLGdEQUEwQzs7Ozs7SUFHeEMsbUNBQTRDOzs7OztJQUM1QyxvQ0FBMkI7Ozs7O0lBQzNCLGtEQUFvRDs7Ozs7SUFDcEQsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uLCBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR2VvUG9pbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgRmluZFN0b3Jlc1N0YXRlLFxuICBTdGF0ZVdpdGhTdG9yZUZpbmRlcixcbiAgVmlld0FsbFN0b3Jlc1N0YXRlLFxufSBmcm9tICcuLi9zdG9yZS9zdG9yZS1maW5kZXItc3RhdGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb25maWcgfSBmcm9tICcuLy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBnZW9sb2NhdGlvbldhdGNoSWQ6IG51bWJlciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTdG9yZUZpbmRlcj4sXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBzdG9yZSdzIGxvYWRpbmcgc3RhdGVcbiAgICovXG4gIGdldFN0b3Jlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoU3RvcmVGaW5kZXJTZWxlY3RvcnMuZ2V0U3RvcmVzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb2JzZXJ2YWJsZSBmb3Igc3RvcmUncyBlbnRpdGllc1xuICAgKi9cbiAgZ2V0RmluZFN0b3Jlc0VudGl0aWVzKCk6IE9ic2VydmFibGU8RmluZFN0b3Jlc1N0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoU3RvcmVGaW5kZXJTZWxlY3RvcnMuZ2V0RmluZFN0b3Jlc0VudGl0aWVzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHZpZXcgYWxsIHN0b3JlJ3MgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTdG9yZUZpbmRlclNlbGVjdG9ycy5nZXRWaWV3QWxsU3RvcmVzTG9hZGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb2JzZXJ2YWJsZSBmb3IgdmlldyBhbGwgc3RvcmUncyBlbnRpdGllc1xuICAgKi9cbiAgZ2V0Vmlld0FsbFN0b3Jlc0VudGl0aWVzKCk6IE9ic2VydmFibGU8Vmlld0FsbFN0b3Jlc1N0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTdG9yZUZpbmRlclNlbGVjdG9ycy5nZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZSBmaW5kaW5nIGFjdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAqIEBwYXJhbSBxdWVyeVRleHQgdGV4dCBxdWVyeVxuICAgKiBAcGFyYW0gc2VhcmNoQ29uZmlnIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSBsb25naXR1ZGVMYXRpdHVkZSBsb25naXR1ZGUgYW5kIGxhdGl0dWRlIGNvb3JkaW5hdGVzXG4gICAqIEBwYXJhbSBjb3VudHJ5SXNvQ29kZSBjb3VudHJ5IElTTyBjb2RlXG4gICAqIEBwYXJhbSB1c2VNeUxvY2F0aW9uIGN1cnJlbnQgbG9jYXRpb24gY29vcmRpbmF0ZXNcbiAgICovXG4gIGZpbmRTdG9yZXNBY3Rpb24oXG4gICAgcXVlcnlUZXh0OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnPzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsXG4gICAgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBHZW9Qb2ludCxcbiAgICBjb3VudHJ5SXNvQ29kZT86IHN0cmluZyxcbiAgICB1c2VNeUxvY2F0aW9uPzogYm9vbGVhblxuICApIHtcbiAgICBpZiAodXNlTXlMb2NhdGlvbiAmJiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlc09uSG9sZCgpKTtcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkID0gdGhpcy53aW5SZWYubmF0aXZlV2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICAocG9zOiBQb3NpdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uOiBHZW9Qb2ludCA9IHtcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcG9zLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgICBsYXRpdHVkZTogcG9zLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24oXG4gICAgICAgICAgICBuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZXMoe1xuICAgICAgICAgICAgICBxdWVyeVRleHQ6IHF1ZXJ5VGV4dCxcbiAgICAgICAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICAgICAgICAgIGxvbmdpdHVkZUxhdGl0dWRlOiBwb3NpdGlvbixcbiAgICAgICAgICAgICAgY291bnRyeUlzb0NvZGU6IGNvdW50cnlJc29Db2RlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICB7IGtleTogJ3N0b3JlRmluZGVyLmdlb2xvY2F0aW9uTm90RW5hYmxlZCcgfSxcbiAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFsnL3N0b3JlLWZpbmRlciddKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24oXG4gICAgICAgIG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlcyh7XG4gICAgICAgICAgcXVlcnlUZXh0OiBxdWVyeVRleHQsXG4gICAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICAgICAgbG9uZ2l0dWRlTGF0aXR1ZGU6IGxvbmdpdHVkZUxhdGl0dWRlLFxuICAgICAgICAgIGNvdW50cnlJc29Db2RlOiBjb3VudHJ5SXNvQ29kZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZpZXcgYWxsIHN0b3Jlc1xuICAgKi9cbiAgdmlld0FsbFN0b3JlcygpIHtcbiAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLlZpZXdBbGxTdG9yZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVmlldyBhbGwgc3RvcmVzIGJ5IGlkXG4gICAqIEBwYXJhbSBzdG9yZUlkIHN0b3JlIGlkXG4gICAqL1xuICB2aWV3U3RvcmVCeUlkKHN0b3JlSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKFxuICAgICAgbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVCeUlkKHsgc3RvcmVJZCB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyV2F0Y2hHZW9sb2NhdGlvbihjYWxsYmFja0FjdGlvbjogQWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2goXG4gICAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkXG4gICAgICApO1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbldhdGNoSWQgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGNhbGxiYWNrQWN0aW9uKTtcbiAgfVxufVxuIl19