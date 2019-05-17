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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU9wRCxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUdwRDtJQUlFLDRCQUNVLEtBQWtDLEVBQ2xDLE1BQWlCO1FBRGpCLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFKbkIsdUJBQWtCLEdBQVcsSUFBSSxDQUFDO0lBS3ZDLENBQUM7SUFFSjs7T0FFRzs7Ozs7SUFDSCw2Q0FBZ0I7Ozs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxrREFBcUI7Ozs7SUFBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxvREFBdUI7Ozs7SUFBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxxREFBd0I7Ozs7SUFBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILDZDQUFnQjs7Ozs7Ozs7SUFBaEIsVUFDRSxTQUFpQixFQUNqQixpQkFBMkIsRUFDM0IsWUFBcUMsRUFDckMsY0FBdUI7UUFFdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUN2QixTQUFTLEVBQUUsU0FBUztZQUNwQixpQkFBaUIsRUFBRSxpQkFBaUI7WUFDcEMsWUFBWSxFQUFFLFlBQVk7WUFDMUIsY0FBYyxFQUFFLGNBQWM7U0FDL0IsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMENBQWE7Ozs7SUFBYjtRQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDBDQUFhOzs7OztJQUFiLFVBQWMsT0FBZTtRQUMzQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCx1Q0FBVTs7Ozs7O0lBQVYsVUFBVyxTQUFpQixFQUFFLGFBQXVCO1FBQXJELGlCQWlCQztRQWhCQyxJQUFJLGFBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM3QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQ3BGLFVBQUMsR0FBYTs7b0JBQ04saUJBQWlCLEdBQWE7b0JBQ2xDLFNBQVMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVM7b0JBQy9CLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVE7aUJBQzlCO2dCQUNELEtBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUUsaUJBQWlCLG1CQUFBLEVBQUUsQ0FBQyxDQUMzRCxDQUFDO1lBQ0osQ0FBQyxDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sa0RBQXFCOzs7OztJQUE3QixVQUE4QixjQUFzQjtRQUNsRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxJQUFJLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQ3ZELElBQUksQ0FBQyxrQkFBa0IsQ0FDeEIsQ0FBQztZQUNGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0QyxDQUFDOztnQkEzR0YsVUFBVTs7OztnQkFiRixLQUFLO2dCQVVMLFNBQVM7O0lBK0dsQix5QkFBQztDQUFBLEFBNUdELElBNEdDO1NBM0dZLGtCQUFrQjs7Ozs7O0lBQzdCLGdEQUEwQzs7Ozs7SUFHeEMsbUNBQTBDOzs7OztJQUMxQyxvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBTdGF0ZVdpdGhTdG9yZUZpbmRlcixcbiAgRmluZFN0b3Jlc1N0YXRlLFxuICBWaWV3QWxsU3RvcmVzU3RhdGUsXG59IGZyb20gJy4uL3N0b3JlL3N0b3JlLWZpbmRlci1zdGF0ZSc7XG5cbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyB9IGZyb20gJy4vLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBHZW9Qb2ludCB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBnZW9sb2NhdGlvbldhdGNoSWQ6IG51bWJlciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU3RvcmVGaW5kZXI+LFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3Igc3RvcmUncyBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBnZXRTdG9yZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRTdG9yZXNMb2FkaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvYnNlcnZhYmxlIGZvciBzdG9yZSdzIGVudGl0aWVzXG4gICAqL1xuICBnZXRGaW5kU3RvcmVzRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxGaW5kU3RvcmVzU3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0RmluZFN0b3Jlc0VudGl0aWVzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHZpZXcgYWxsIHN0b3JlJ3MgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFZpZXdBbGxTdG9yZXNMb2FkaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvYnNlcnZhYmxlIGZvciB2aWV3IGFsbCBzdG9yZSdzIGVudGl0aWVzXG4gICAqL1xuICBnZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxWaWV3QWxsU3RvcmVzU3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0Vmlld0FsbFN0b3Jlc0VudGl0aWVzKSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmUgZmluZGluZyBhY3Rpb24gZnVuY3Rpb25hbGl0eVxuICAgKiBAcGFyYW0gcXVlcnlUZXh0IHRleHQgcXVlcnlcbiAgICogQHBhcmFtIGxvbmdpdHVkZUxhdGl0dWRlIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUgY29vcmRpbmF0ZXNcbiAgICogQHBhcmFtIHNlYXJjaENvbmZpZyBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0gY291bnRyeUlzb0NvZGUgY291bnRyeSBJU08gY29kZVxuICAgKi9cbiAgZmluZFN0b3Jlc0FjdGlvbihcbiAgICBxdWVyeVRleHQ6IHN0cmluZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZTogR2VvUG9pbnQsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBjb3VudHJ5SXNvQ29kZT86IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5GaW5kU3RvcmVzKHtcbiAgICAgICAgcXVlcnlUZXh0OiBxdWVyeVRleHQsXG4gICAgICAgIGxvbmdpdHVkZUxhdGl0dWRlOiBsb25naXR1ZGVMYXRpdHVkZSxcbiAgICAgICAgc2VhcmNoQ29uZmlnOiBzZWFyY2hDb25maWcsXG4gICAgICAgIGNvdW50cnlJc29Db2RlOiBjb3VudHJ5SXNvQ29kZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaWV3IGFsbCBzdG9yZXNcbiAgICovXG4gIHZpZXdBbGxTdG9yZXMoKSB7XG4gICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24obmV3IGZyb21TdG9yZS5WaWV3QWxsU3RvcmVzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZpZXcgYWxsIHN0b3JlcyBieSBpZFxuICAgKiBAcGFyYW0gc3RvcmVJZCBzdG9yZSBpZFxuICAgKi9cbiAgdmlld1N0b3JlQnlJZChzdG9yZUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihuZXcgZnJvbVN0b3JlLkZpbmRTdG9yZUJ5SWQoeyBzdG9yZUlkIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFsbCBzdG9yZXNcbiAgICogQHBhcmFtIHF1ZXJ5VGV4dCB0ZXh0IHF1ZXJ5XG4gICAqIEBwYXJhbSB1c2VNeUxvY2F0aW9uIHVzZSBjdXJyZW50IGxvY2F0aW9uXG4gICAqL1xuICBmaW5kU3RvcmVzKHF1ZXJ5VGV4dDogc3RyaW5nLCB1c2VNeUxvY2F0aW9uPzogYm9vbGVhbikge1xuICAgIGlmICh1c2VNeUxvY2F0aW9uICYmIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24obmV3IGZyb21TdG9yZS5PbkhvbGQoKSk7XG4gICAgICB0aGlzLmdlb2xvY2F0aW9uV2F0Y2hJZCA9IHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihcbiAgICAgICAgKHBvczogUG9zaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBsb25naXR1ZGVMYXRpdHVkZTogR2VvUG9pbnQgPSB7XG4gICAgICAgICAgICBsb25naXR1ZGU6IHBvcy5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICAgICAgbGF0aXR1ZGU6IHBvcy5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihcbiAgICAgICAgICAgIG5ldyBmcm9tU3RvcmUuRmluZFN0b3Jlcyh7IHF1ZXJ5VGV4dCwgbG9uZ2l0dWRlTGF0aXR1ZGUgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihuZXcgZnJvbVN0b3JlLkZpbmRTdG9yZXMoeyBxdWVyeVRleHQgfSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJXYXRjaEdlb2xvY2F0aW9uKGNhbGxiYWNrQWN0aW9uOiBBY3Rpb24pIHtcbiAgICBpZiAodGhpcy5nZW9sb2NhdGlvbldhdGNoSWQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaChcbiAgICAgICAgdGhpcy5nZW9sb2NhdGlvbldhdGNoSWRcbiAgICAgICk7XG4gICAgICB0aGlzLmdlb2xvY2F0aW9uV2F0Y2hJZCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goY2FsbGJhY2tBY3Rpb24pO1xuICB9XG59XG4iXX0=