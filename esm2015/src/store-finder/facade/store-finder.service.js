/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WindowRef } from '../../window/window-ref';
import { StoreFinderActions } from '../store/actions/index';
import { StoreFinderSelectors } from '../store/selectors/index';
export class StoreFinderService {
    /**
     * @param {?} store
     * @param {?} winRef
     */
    constructor(store, winRef) {
        this.store = store;
        this.winRef = winRef;
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
     * @param {?} longitudeLatitude longitude and latitude coordinates
     * @param {?} searchConfig search configuration
     * @param {?=} countryIsoCode country ISO code
     * @return {?}
     */
    findStoresAction(queryText, longitudeLatitude, searchConfig, countryIsoCode) {
        this.store.dispatch(new StoreFinderActions.FindStores({
            queryText: queryText,
            longitudeLatitude: longitudeLatitude,
            searchConfig: searchConfig,
            countryIsoCode: countryIsoCode,
        }));
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
     * Find all stores
     * @param {?} queryText text query
     * @param {?=} useMyLocation use current location
     * @return {?}
     */
    findStores(queryText, useMyLocation) {
        if (useMyLocation && this.winRef.nativeWindow) {
            this.clearWatchGeolocation(new StoreFinderActions.FindStoresOnHold());
            this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                /** @type {?} */
                const longitudeLatitude = {
                    longitude: pos.coords.longitude,
                    latitude: pos.coords.latitude,
                };
                this.clearWatchGeolocation(new StoreFinderActions.FindStores({ queryText, longitudeLatitude }));
            }));
        }
        else {
            this.clearWatchGeolocation(new StoreFinderActions.FindStores({ queryText }));
        }
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
    { type: WindowRef }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFTaEUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFHN0IsWUFDWSxLQUFrQyxFQUNsQyxNQUFpQjtRQURqQixVQUFLLEdBQUwsS0FBSyxDQUE2QjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBSnJCLHVCQUFrQixHQUFXLElBQUksQ0FBQztJQUt2QyxDQUFDOzs7OztJQUtKLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUtELHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFLRCx1QkFBdUI7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDLENBQ3JELENBQUM7SUFDSixDQUFDOzs7OztJQUtELHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCLENBQUMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztJQVNELGdCQUFnQixDQUNkLFNBQWlCLEVBQ2pCLGlCQUEyQixFQUMzQixZQUFxQyxFQUNyQyxjQUF1QjtRQUV2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7WUFDaEMsU0FBUyxFQUFFLFNBQVM7WUFDcEIsaUJBQWlCLEVBQUUsaUJBQWlCO1lBQ3BDLFlBQVksRUFBRSxZQUFZO1lBQzFCLGNBQWMsRUFBRSxjQUFjO1NBQy9CLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7SUFNRCxhQUFhLENBQUMsT0FBZTtRQUMzQixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksa0JBQWtCLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFPRCxVQUFVLENBQUMsU0FBaUIsRUFBRSxhQUF1QjtRQUNuRCxJQUFJLGFBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM3QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYTs7OztZQUNwRixDQUFDLEdBQWEsRUFBRSxFQUFFOztzQkFDVixpQkFBaUIsR0FBYTtvQkFDbEMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUztvQkFDL0IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUTtpQkFDOUI7Z0JBQ0QsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQ3BFLENBQUM7WUFDSixDQUFDLEVBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksa0JBQWtCLENBQUMsVUFBVSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FDakQsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsY0FBc0I7UUFDbEQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssSUFBSSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQ3hCLENBQUM7WUFDRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBbkhGLFVBQVU7Ozs7WUFiYyxLQUFLO1lBR3JCLFNBQVM7Ozs7Ozs7SUFZaEIsZ0RBQTBDOzs7OztJQUd4QyxtQ0FBNEM7Ozs7O0lBQzVDLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiwgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdlb1BvaW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIEZpbmRTdG9yZXNTdGF0ZSxcbiAgU3RhdGVXaXRoU3RvcmVGaW5kZXIsXG4gIFZpZXdBbGxTdG9yZXNTdGF0ZSxcbn0gZnJvbSAnLi4vc3RvcmUvc3RvcmUtZmluZGVyLXN0YXRlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi8uLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU2VydmljZSB7XG4gIHByaXZhdGUgZ2VvbG9jYXRpb25XYXRjaElkOiBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU3RvcmVGaW5kZXI+LFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBzdG9yZSdzIGxvYWRpbmcgc3RhdGVcbiAgICovXG4gIGdldFN0b3Jlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoU3RvcmVGaW5kZXJTZWxlY3RvcnMuZ2V0U3RvcmVzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb2JzZXJ2YWJsZSBmb3Igc3RvcmUncyBlbnRpdGllc1xuICAgKi9cbiAgZ2V0RmluZFN0b3Jlc0VudGl0aWVzKCk6IE9ic2VydmFibGU8RmluZFN0b3Jlc1N0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoU3RvcmVGaW5kZXJTZWxlY3RvcnMuZ2V0RmluZFN0b3Jlc0VudGl0aWVzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHZpZXcgYWxsIHN0b3JlJ3MgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTdG9yZUZpbmRlclNlbGVjdG9ycy5nZXRWaWV3QWxsU3RvcmVzTG9hZGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb2JzZXJ2YWJsZSBmb3IgdmlldyBhbGwgc3RvcmUncyBlbnRpdGllc1xuICAgKi9cbiAgZ2V0Vmlld0FsbFN0b3Jlc0VudGl0aWVzKCk6IE9ic2VydmFibGU8Vmlld0FsbFN0b3Jlc1N0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTdG9yZUZpbmRlclNlbGVjdG9ycy5nZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZSBmaW5kaW5nIGFjdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAqIEBwYXJhbSBxdWVyeVRleHQgdGV4dCBxdWVyeVxuICAgKiBAcGFyYW0gbG9uZ2l0dWRlTGF0aXR1ZGUgbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSBjb29yZGluYXRlc1xuICAgKiBAcGFyYW0gc2VhcmNoQ29uZmlnIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSBjb3VudHJ5SXNvQ29kZSBjb3VudHJ5IElTTyBjb2RlXG4gICAqL1xuICBmaW5kU3RvcmVzQWN0aW9uKFxuICAgIHF1ZXJ5VGV4dDogc3RyaW5nLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlOiBHZW9Qb2ludCxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGNvdW50cnlJc29Db2RlPzogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZXMoe1xuICAgICAgICBxdWVyeVRleHQ6IHF1ZXJ5VGV4dCxcbiAgICAgICAgbG9uZ2l0dWRlTGF0aXR1ZGU6IGxvbmdpdHVkZUxhdGl0dWRlLFxuICAgICAgICBzZWFyY2hDb25maWc6IHNlYXJjaENvbmZpZyxcbiAgICAgICAgY291bnRyeUlzb0NvZGU6IGNvdW50cnlJc29Db2RlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFZpZXcgYWxsIHN0b3Jlc1xuICAgKi9cbiAgdmlld0FsbFN0b3JlcygpIHtcbiAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLlZpZXdBbGxTdG9yZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVmlldyBhbGwgc3RvcmVzIGJ5IGlkXG4gICAqIEBwYXJhbSBzdG9yZUlkIHN0b3JlIGlkXG4gICAqL1xuICB2aWV3U3RvcmVCeUlkKHN0b3JlSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKFxuICAgICAgbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVCeUlkKHsgc3RvcmVJZCB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhbGwgc3RvcmVzXG4gICAqIEBwYXJhbSBxdWVyeVRleHQgdGV4dCBxdWVyeVxuICAgKiBAcGFyYW0gdXNlTXlMb2NhdGlvbiB1c2UgY3VycmVudCBsb2NhdGlvblxuICAgKi9cbiAgZmluZFN0b3JlcyhxdWVyeVRleHQ6IHN0cmluZywgdXNlTXlMb2NhdGlvbj86IGJvb2xlYW4pIHtcbiAgICBpZiAodXNlTXlMb2NhdGlvbiAmJiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuRmluZFN0b3Jlc09uSG9sZCgpKTtcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkID0gdGhpcy53aW5SZWYubmF0aXZlV2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICAocG9zOiBQb3NpdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZUxhdGl0dWRlOiBHZW9Qb2ludCA9IHtcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcG9zLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgICBsYXRpdHVkZTogcG9zLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKFxuICAgICAgICAgICAgbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5GaW5kU3RvcmVzKHsgcXVlcnlUZXh0LCBsb25naXR1ZGVMYXRpdHVkZSB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKFxuICAgICAgICBuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLkZpbmRTdG9yZXMoeyBxdWVyeVRleHQgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcldhdGNoR2VvbG9jYXRpb24oY2FsbGJhY2tBY3Rpb246IEFjdGlvbikge1xuICAgIGlmICh0aGlzLmdlb2xvY2F0aW9uV2F0Y2hJZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKFxuICAgICAgICB0aGlzLmdlb2xvY2F0aW9uV2F0Y2hJZFxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChjYWxsYmFja0FjdGlvbik7XG4gIH1cbn1cbiJdfQ==