/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/index';
import { WindowRef } from '../../window/window-ref';
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
        return this.store.pipe(select(fromStore.getStoresLoading));
    }
    /**
     * Returns observable for store's entities
     * @return {?}
     */
    getFindStoresEntities() {
        return this.store.pipe(select(fromStore.getFindStoresEntities));
    }
    /**
     * Returns boolean observable for view all store's loading state
     * @return {?}
     */
    getViewAllStoresLoading() {
        return this.store.pipe(select(fromStore.getViewAllStoresLoading));
    }
    /**
     * Returns observable for view all store's entities
     * @return {?}
     */
    getViewAllStoresEntities() {
        return this.store.pipe(select(fromStore.getViewAllStoresEntities));
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
        this.store.dispatch(new fromStore.FindStores({
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
        this.clearWatchGeolocation(new fromStore.ViewAllStores());
    }
    /**
     * View all stores by id
     * @param {?} storeId store id
     * @return {?}
     */
    viewStoreById(storeId) {
        this.clearWatchGeolocation(new fromStore.FindStoreById({ storeId }));
    }
    /**
     * Find all stores
     * @param {?} queryText text query
     * @param {?=} useMyLocation use current location
     * @return {?}
     */
    findStores(queryText, useMyLocation) {
        if (useMyLocation && this.winRef.nativeWindow) {
            this.clearWatchGeolocation(new fromStore.OnHold());
            this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition((pos) => {
                /** @type {?} */
                const longitudeLatitude = {
                    longitude: pos.coords.longitude,
                    latitude: pos.coords.latitude,
                };
                this.clearWatchGeolocation(new fromStore.FindStores({ queryText, longitudeLatitude }));
            });
        }
        else {
            this.clearWatchGeolocation(new fromStore.FindStores({ queryText }));
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
     * @private
     */
    StoreFinderService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    StoreFinderService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU9wRCxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUlwRCxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUc3QixZQUNVLEtBQWtDLEVBQ2xDLE1BQWlCO1FBRGpCLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFKbkIsdUJBQWtCLEdBQVcsSUFBSSxDQUFDO0lBS3ZDLENBQUM7Ozs7O0lBS0osZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUtELHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBS0QsdUJBQXVCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFLRCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7Ozs7SUFTRCxnQkFBZ0IsQ0FDZCxTQUFpQixFQUNqQixpQkFBMkIsRUFDM0IsWUFBcUMsRUFDckMsY0FBdUI7UUFFdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUN2QixTQUFTLEVBQUUsU0FBUztZQUNwQixpQkFBaUIsRUFBRSxpQkFBaUI7WUFDcEMsWUFBWSxFQUFFLFlBQVk7WUFDMUIsY0FBYyxFQUFFLGNBQWM7U0FDL0IsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUtELGFBQWE7UUFDWCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7SUFNRCxhQUFhLENBQUMsT0FBZTtRQUMzQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7Ozs7SUFPRCxVQUFVLENBQUMsU0FBaUIsRUFBRSxhQUF1QjtRQUNuRCxJQUFJLGFBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM3QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQ3BGLENBQUMsR0FBYSxFQUFFLEVBQUU7O3NCQUNWLGlCQUFpQixHQUFhO29CQUNsQyxTQUFTLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTO29CQUMvQixRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRO2lCQUM5QjtnQkFDRCxJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQzNELENBQUM7WUFDSixDQUFDLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsY0FBc0I7UUFDbEQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssSUFBSSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQ3hCLENBQUM7WUFDRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBM0dGLFVBQVU7Ozs7WUFiRixLQUFLO1lBVUwsU0FBUzs7Ozs7OztJQUtoQixnREFBMEM7Ozs7O0lBR3hDLG1DQUEwQzs7Ozs7SUFDMUMsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgU3RhdGVXaXRoU3RvcmVGaW5kZXIsXG4gIEZpbmRTdG9yZXNTdGF0ZSxcbiAgVmlld0FsbFN0b3Jlc1N0YXRlLFxufSBmcm9tICcuLi9zdG9yZS9zdG9yZS1maW5kZXItc3RhdGUnO1xuXG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb25maWcgfSBmcm9tICcuLy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgR2VvUG9pbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU2VydmljZSB7XG4gIHByaXZhdGUgZ2VvbG9jYXRpb25XYXRjaElkOiBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFN0b3JlRmluZGVyPixcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHN0b3JlJ3MgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgZ2V0U3RvcmVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0U3RvcmVzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb2JzZXJ2YWJsZSBmb3Igc3RvcmUncyBlbnRpdGllc1xuICAgKi9cbiAgZ2V0RmluZFN0b3Jlc0VudGl0aWVzKCk6IE9ic2VydmFibGU8RmluZFN0b3Jlc1N0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldEZpbmRTdG9yZXNFbnRpdGllcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciB2aWV3IGFsbCBzdG9yZSdzIGxvYWRpbmcgc3RhdGVcbiAgICovXG4gIGdldFZpZXdBbGxTdG9yZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRWaWV3QWxsU3RvcmVzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb2JzZXJ2YWJsZSBmb3IgdmlldyBhbGwgc3RvcmUncyBlbnRpdGllc1xuICAgKi9cbiAgZ2V0Vmlld0FsbFN0b3Jlc0VudGl0aWVzKCk6IE9ic2VydmFibGU8Vmlld0FsbFN0b3Jlc1N0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFZpZXdBbGxTdG9yZXNFbnRpdGllcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlIGZpbmRpbmcgYWN0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICogQHBhcmFtIHF1ZXJ5VGV4dCB0ZXh0IHF1ZXJ5XG4gICAqIEBwYXJhbSBsb25naXR1ZGVMYXRpdHVkZSBsb25naXR1ZGUgYW5kIGxhdGl0dWRlIGNvb3JkaW5hdGVzXG4gICAqIEBwYXJhbSBzZWFyY2hDb25maWcgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIGNvdW50cnlJc29Db2RlIGNvdW50cnkgSVNPIGNvZGVcbiAgICovXG4gIGZpbmRTdG9yZXNBY3Rpb24oXG4gICAgcXVlcnlUZXh0OiBzdHJpbmcsXG4gICAgbG9uZ2l0dWRlTGF0aXR1ZGU6IEdlb1BvaW50LFxuICAgIHNlYXJjaENvbmZpZzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsXG4gICAgY291bnRyeUlzb0NvZGU/OiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuRmluZFN0b3Jlcyh7XG4gICAgICAgIHF1ZXJ5VGV4dDogcXVlcnlUZXh0LFxuICAgICAgICBsb25naXR1ZGVMYXRpdHVkZTogbG9uZ2l0dWRlTGF0aXR1ZGUsXG4gICAgICAgIHNlYXJjaENvbmZpZzogc2VhcmNoQ29uZmlnLFxuICAgICAgICBjb3VudHJ5SXNvQ29kZTogY291bnRyeUlzb0NvZGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVmlldyBhbGwgc3RvcmVzXG4gICAqL1xuICB2aWV3QWxsU3RvcmVzKCkge1xuICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKG5ldyBmcm9tU3RvcmUuVmlld0FsbFN0b3JlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaWV3IGFsbCBzdG9yZXMgYnkgaWRcbiAgICogQHBhcmFtIHN0b3JlSWQgc3RvcmUgaWRcbiAgICovXG4gIHZpZXdTdG9yZUJ5SWQoc3RvcmVJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24obmV3IGZyb21TdG9yZS5GaW5kU3RvcmVCeUlkKHsgc3RvcmVJZCB9KSk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhbGwgc3RvcmVzXG4gICAqIEBwYXJhbSBxdWVyeVRleHQgdGV4dCBxdWVyeVxuICAgKiBAcGFyYW0gdXNlTXlMb2NhdGlvbiB1c2UgY3VycmVudCBsb2NhdGlvblxuICAgKi9cbiAgZmluZFN0b3JlcyhxdWVyeVRleHQ6IHN0cmluZywgdXNlTXlMb2NhdGlvbj86IGJvb2xlYW4pIHtcbiAgICBpZiAodXNlTXlMb2NhdGlvbiAmJiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKG5ldyBmcm9tU3RvcmUuT25Ib2xkKCkpO1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbldhdGNoSWQgPSB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXG4gICAgICAgIChwb3M6IFBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG9uZ2l0dWRlTGF0aXR1ZGU6IEdlb1BvaW50ID0ge1xuICAgICAgICAgICAgbG9uZ2l0dWRlOiBwb3MuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICAgIGxhdGl0dWRlOiBwb3MuY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24oXG4gICAgICAgICAgICBuZXcgZnJvbVN0b3JlLkZpbmRTdG9yZXMoeyBxdWVyeVRleHQsIGxvbmdpdHVkZUxhdGl0dWRlIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24obmV3IGZyb21TdG9yZS5GaW5kU3RvcmVzKHsgcXVlcnlUZXh0IH0pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyV2F0Y2hHZW9sb2NhdGlvbihjYWxsYmFja0FjdGlvbjogQWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2goXG4gICAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkXG4gICAgICApO1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbldhdGNoSWQgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGNhbGxiYWNrQWN0aW9uKTtcbiAgfVxufVxuIl19