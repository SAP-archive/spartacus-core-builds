/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/index';
import { WindowRef } from '../../window/window-ref';
var StoreFinderService = /** @class */ (function () {
    function StoreFinderService(store, winRef) {
        this.store = store;
        this.winRef = winRef;
        this.geolocationWatchId = null;
    }
    /**
     * Returns boolean observable for store's loading state
     */
    /**
     * Returns boolean observable for store's loading state
     * @return {?}
     */
    StoreFinderService.prototype.getStoresLoading = /**
     * Returns boolean observable for store's loading state
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getStoresLoading));
    };
    /**
     * Returns observable for store's entities
     */
    /**
     * Returns observable for store's entities
     * @return {?}
     */
    StoreFinderService.prototype.getFindStoresEntities = /**
     * Returns observable for store's entities
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getFindStoresEntities));
    };
    /**
     * Returns boolean observable for view all store's loading state
     */
    /**
     * Returns boolean observable for view all store's loading state
     * @return {?}
     */
    StoreFinderService.prototype.getViewAllStoresLoading = /**
     * Returns boolean observable for view all store's loading state
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getViewAllStoresLoading));
    };
    /**
     * Returns observable for view all store's entities
     */
    /**
     * Returns observable for view all store's entities
     * @return {?}
     */
    StoreFinderService.prototype.getViewAllStoresEntities = /**
     * Returns observable for view all store's entities
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getViewAllStoresEntities));
    };
    /**
     * Store finding action functionality
     * @param queryText text query
     * @param longitudeLatitude longitude and latitude coordinates
     * @param searchConfig search configuration
     * @param countryIsoCode country ISO code
     */
    /**
     * Store finding action functionality
     * @param {?} queryText text query
     * @param {?} longitudeLatitude longitude and latitude coordinates
     * @param {?} searchConfig search configuration
     * @param {?=} countryIsoCode country ISO code
     * @return {?}
     */
    StoreFinderService.prototype.findStoresAction = /**
     * Store finding action functionality
     * @param {?} queryText text query
     * @param {?} longitudeLatitude longitude and latitude coordinates
     * @param {?} searchConfig search configuration
     * @param {?=} countryIsoCode country ISO code
     * @return {?}
     */
    function (queryText, longitudeLatitude, searchConfig, countryIsoCode) {
        this.store.dispatch(new fromStore.FindStores({
            queryText: queryText,
            longitudeLatitude: longitudeLatitude,
            searchConfig: searchConfig,
            countryIsoCode: countryIsoCode,
        }));
    };
    /**
     * View all stores
     */
    /**
     * View all stores
     * @return {?}
     */
    StoreFinderService.prototype.viewAllStores = /**
     * View all stores
     * @return {?}
     */
    function () {
        this.clearWatchGeolocation(new fromStore.ViewAllStores());
    };
    /**
     * View all stores by id
     * @param storeId store id
     */
    /**
     * View all stores by id
     * @param {?} storeId store id
     * @return {?}
     */
    StoreFinderService.prototype.viewStoreById = /**
     * View all stores by id
     * @param {?} storeId store id
     * @return {?}
     */
    function (storeId) {
        this.clearWatchGeolocation(new fromStore.FindStoreById({ storeId: storeId }));
    };
    /**
     * Find all stores
     * @param queryText text query
     * @param useMyLocation use current location
     */
    /**
     * Find all stores
     * @param {?} queryText text query
     * @param {?=} useMyLocation use current location
     * @return {?}
     */
    StoreFinderService.prototype.findStores = /**
     * Find all stores
     * @param {?} queryText text query
     * @param {?=} useMyLocation use current location
     * @return {?}
     */
    function (queryText, useMyLocation) {
        var _this = this;
        if (useMyLocation && this.winRef.nativeWindow) {
            this.clearWatchGeolocation(new fromStore.OnHold());
            this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition(function (pos) {
                /** @type {?} */
                var longitudeLatitude = {
                    longitude: pos.coords.longitude,
                    latitude: pos.coords.latitude,
                };
                _this.clearWatchGeolocation(new fromStore.FindStores({ queryText: queryText, longitudeLatitude: longitudeLatitude }));
            });
        }
        else {
            this.clearWatchGeolocation(new fromStore.FindStores({ queryText: queryText }));
        }
    };
    /**
     * @private
     * @param {?} callbackAction
     * @return {?}
     */
    StoreFinderService.prototype.clearWatchGeolocation = /**
     * @private
     * @param {?} callbackAction
     * @return {?}
     */
    function (callbackAction) {
        if (this.geolocationWatchId !== null) {
            this.winRef.nativeWindow.navigator.geolocation.clearWatch(this.geolocationWatchId);
            this.geolocationWatchId = null;
        }
        this.store.dispatch(callbackAction);
    };
    StoreFinderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StoreFinderService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef }
    ]; };
    return StoreFinderService;
}());
export { StoreFinderService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU9wRCxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBSTVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVwRDtJQUlFLDRCQUNVLEtBQWtDLEVBQ2xDLE1BQWlCO1FBRGpCLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFKbkIsdUJBQWtCLEdBQVcsSUFBSSxDQUFDO0lBS3ZDLENBQUM7SUFFSjs7T0FFRzs7Ozs7SUFDSCw2Q0FBZ0I7Ozs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxrREFBcUI7Ozs7SUFBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxvREFBdUI7Ozs7SUFBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxxREFBd0I7Ozs7SUFBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILDZDQUFnQjs7Ozs7Ozs7SUFBaEIsVUFDRSxTQUFpQixFQUNqQixpQkFBb0MsRUFDcEMsWUFBcUMsRUFDckMsY0FBdUI7UUFFdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUN2QixTQUFTLEVBQUUsU0FBUztZQUNwQixpQkFBaUIsRUFBRSxpQkFBaUI7WUFDcEMsWUFBWSxFQUFFLFlBQVk7WUFDMUIsY0FBYyxFQUFFLGNBQWM7U0FDL0IsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMENBQWE7Ozs7SUFBYjtRQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDBDQUFhOzs7OztJQUFiLFVBQWMsT0FBZTtRQUMzQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCx1Q0FBVTs7Ozs7O0lBQVYsVUFBVyxTQUFpQixFQUFFLGFBQXVCO1FBQXJELGlCQWlCQztRQWhCQyxJQUFJLGFBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM3QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQ3BGLFVBQUMsR0FBYTs7b0JBQ04saUJBQWlCLEdBQXNCO29CQUMzQyxTQUFTLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTO29CQUMvQixRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRO2lCQUM5QjtnQkFDRCxLQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsV0FBQSxFQUFFLGlCQUFpQixtQkFBQSxFQUFFLENBQUMsQ0FDM0QsQ0FBQztZQUNKLENBQUMsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7OztJQUVPLGtEQUFxQjs7Ozs7SUFBN0IsVUFBOEIsY0FBc0I7UUFDbEQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssSUFBSSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQ3hCLENBQUM7WUFDRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBM0dGLFVBQVU7Ozs7Z0JBYkYsS0FBSztnQkFXTCxTQUFTOztJQThHbEIseUJBQUM7Q0FBQSxBQTVHRCxJQTRHQztTQTNHWSxrQkFBa0I7Ozs7OztJQUM3QixnREFBMEM7Ozs7O0lBR3hDLG1DQUEwQzs7Ozs7SUFDMUMsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgU3RhdGVXaXRoU3RvcmVGaW5kZXIsXG4gIEZpbmRTdG9yZXNTdGF0ZSxcbiAgVmlld0FsbFN0b3Jlc1N0YXRlLFxufSBmcm9tICcuLi9zdG9yZS9zdG9yZS1maW5kZXItc3RhdGUnO1xuXG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb25maWcgfSBmcm9tICcuLy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgTG9uZ2l0dWRlTGF0aXR1ZGUgfSBmcm9tICcuLy4uL21vZGVsL2xvbmdpdHVkZS1sYXRpdHVkZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclNlcnZpY2Uge1xuICBwcml2YXRlIGdlb2xvY2F0aW9uV2F0Y2hJZDogbnVtYmVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTdG9yZUZpbmRlcj4sXG4gICAgcHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBzdG9yZSdzIGxvYWRpbmcgc3RhdGVcbiAgICovXG4gIGdldFN0b3Jlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFN0b3Jlc0xvYWRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9ic2VydmFibGUgZm9yIHN0b3JlJ3MgZW50aXRpZXNcbiAgICovXG4gIGdldEZpbmRTdG9yZXNFbnRpdGllcygpOiBPYnNlcnZhYmxlPEZpbmRTdG9yZXNTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRGaW5kU3RvcmVzRW50aXRpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgdmlldyBhbGwgc3RvcmUncyBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBnZXRWaWV3QWxsU3RvcmVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9ic2VydmFibGUgZm9yIHZpZXcgYWxsIHN0b3JlJ3MgZW50aXRpZXNcbiAgICovXG4gIGdldFZpZXdBbGxTdG9yZXNFbnRpdGllcygpOiBPYnNlcnZhYmxlPFZpZXdBbGxTdG9yZXNTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZSBmaW5kaW5nIGFjdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAqIEBwYXJhbSBxdWVyeVRleHQgdGV4dCBxdWVyeVxuICAgKiBAcGFyYW0gbG9uZ2l0dWRlTGF0aXR1ZGUgbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSBjb29yZGluYXRlc1xuICAgKiBAcGFyYW0gc2VhcmNoQ29uZmlnIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSBjb3VudHJ5SXNvQ29kZSBjb3VudHJ5IElTTyBjb2RlXG4gICAqL1xuICBmaW5kU3RvcmVzQWN0aW9uKFxuICAgIHF1ZXJ5VGV4dDogc3RyaW5nLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlOiBMb25naXR1ZGVMYXRpdHVkZSxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGNvdW50cnlJc29Db2RlPzogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkZpbmRTdG9yZXMoe1xuICAgICAgICBxdWVyeVRleHQ6IHF1ZXJ5VGV4dCxcbiAgICAgICAgbG9uZ2l0dWRlTGF0aXR1ZGU6IGxvbmdpdHVkZUxhdGl0dWRlLFxuICAgICAgICBzZWFyY2hDb25maWc6IHNlYXJjaENvbmZpZyxcbiAgICAgICAgY291bnRyeUlzb0NvZGU6IGNvdW50cnlJc29Db2RlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFZpZXcgYWxsIHN0b3Jlc1xuICAgKi9cbiAgdmlld0FsbFN0b3JlcygpIHtcbiAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihuZXcgZnJvbVN0b3JlLlZpZXdBbGxTdG9yZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVmlldyBhbGwgc3RvcmVzIGJ5IGlkXG4gICAqIEBwYXJhbSBzdG9yZUlkIHN0b3JlIGlkXG4gICAqL1xuICB2aWV3U3RvcmVCeUlkKHN0b3JlSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKG5ldyBmcm9tU3RvcmUuRmluZFN0b3JlQnlJZCh7IHN0b3JlSWQgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYWxsIHN0b3Jlc1xuICAgKiBAcGFyYW0gcXVlcnlUZXh0IHRleHQgcXVlcnlcbiAgICogQHBhcmFtIHVzZU15TG9jYXRpb24gdXNlIGN1cnJlbnQgbG9jYXRpb25cbiAgICovXG4gIGZpbmRTdG9yZXMocXVlcnlUZXh0OiBzdHJpbmcsIHVzZU15TG9jYXRpb24/OiBib29sZWFuKSB7XG4gICAgaWYgKHVzZU15TG9jYXRpb24gJiYgdGhpcy53aW5SZWYubmF0aXZlV2luZG93KSB7XG4gICAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihuZXcgZnJvbVN0b3JlLk9uSG9sZCgpKTtcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkID0gdGhpcy53aW5SZWYubmF0aXZlV2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICAocG9zOiBQb3NpdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZUxhdGl0dWRlOiBMb25naXR1ZGVMYXRpdHVkZSA9IHtcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcG9zLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgICBsYXRpdHVkZTogcG9zLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKFxuICAgICAgICAgICAgbmV3IGZyb21TdG9yZS5GaW5kU3RvcmVzKHsgcXVlcnlUZXh0LCBsb25naXR1ZGVMYXRpdHVkZSB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKG5ldyBmcm9tU3RvcmUuRmluZFN0b3Jlcyh7IHF1ZXJ5VGV4dCB9KSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcldhdGNoR2VvbG9jYXRpb24oY2FsbGJhY2tBY3Rpb246IEFjdGlvbikge1xuICAgIGlmICh0aGlzLmdlb2xvY2F0aW9uV2F0Y2hJZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKFxuICAgICAgICB0aGlzLmdlb2xvY2F0aW9uV2F0Y2hJZFxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChjYWxsYmFja0FjdGlvbik7XG4gIH1cbn1cbiJdfQ==