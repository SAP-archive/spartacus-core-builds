/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WindowRef } from '../../window/window-ref';
import * as fromStore from '../store/index';
import { StoreFinderSelectors } from '../store/selectors/index';
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
        return this.store.pipe(select(StoreFinderSelectors.getStoresLoading));
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
        return this.store.pipe(select(StoreFinderSelectors.getFindStoresEntities));
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
        return this.store.pipe(select(StoreFinderSelectors.getViewAllStoresLoading));
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
        return this.store.pipe(select(StoreFinderSelectors.getViewAllStoresEntities));
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
            this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition((/**
             * @param {?} pos
             * @return {?}
             */
            function (pos) {
                /** @type {?} */
                var longitudeLatitude = {
                    longitude: pos.coords.longitude,
                    latitude: pos.coords.latitude,
                };
                _this.clearWatchGeolocation(new fromStore.FindStores({ queryText: queryText, longitudeLatitude: longitudeLatitude }));
            }));
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
     * @protected
     */
    StoreFinderService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxLQUFLLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVFoRTtJQUlFLDRCQUNZLEtBQWtDLEVBQ2xDLE1BQWlCO1FBRGpCLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFKckIsdUJBQWtCLEdBQVcsSUFBSSxDQUFDO0lBS3ZDLENBQUM7SUFFSjs7T0FFRzs7Ozs7SUFDSCw2Q0FBZ0I7Ozs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGtEQUFxQjs7OztJQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsb0RBQXVCOzs7O0lBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDLENBQ3JELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gscURBQXdCOzs7O0lBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLENBQ3RELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCw2Q0FBZ0I7Ozs7Ozs7O0lBQWhCLFVBQ0UsU0FBaUIsRUFDakIsaUJBQTJCLEVBQzNCLFlBQXFDLEVBQ3JDLGNBQXVCO1FBRXZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUM7WUFDdkIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsaUJBQWlCLEVBQUUsaUJBQWlCO1lBQ3BDLFlBQVksRUFBRSxZQUFZO1lBQzFCLGNBQWMsRUFBRSxjQUFjO1NBQy9CLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDBDQUFhOzs7O0lBQWI7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwwQ0FBYTs7Ozs7SUFBYixVQUFjLE9BQWU7UUFDM0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsdUNBQVU7Ozs7OztJQUFWLFVBQVcsU0FBaUIsRUFBRSxhQUF1QjtRQUFyRCxpQkFpQkM7UUFoQkMsSUFBSSxhQUFhLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDN0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYTs7OztZQUNwRixVQUFDLEdBQWE7O29CQUNOLGlCQUFpQixHQUFhO29CQUNsQyxTQUFTLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTO29CQUMvQixRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRO2lCQUM5QjtnQkFDRCxLQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsV0FBQSxFQUFFLGlCQUFpQixtQkFBQSxFQUFFLENBQUMsQ0FDM0QsQ0FBQztZQUNKLENBQUMsRUFDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7OztJQUVPLGtEQUFxQjs7Ozs7SUFBN0IsVUFBOEIsY0FBc0I7UUFDbEQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssSUFBSSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQ3hCLENBQUM7WUFDRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBL0dGLFVBQVU7Ozs7Z0JBYmMsS0FBSztnQkFHckIsU0FBUzs7SUEwSGxCLHlCQUFDO0NBQUEsQUFoSEQsSUFnSEM7U0EvR1ksa0JBQWtCOzs7Ozs7SUFDN0IsZ0RBQTBDOzs7OztJQUd4QyxtQ0FBNEM7Ozs7O0lBQzVDLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiwgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdlb1BvaW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgRmluZFN0b3Jlc1N0YXRlLFxuICBTdGF0ZVdpdGhTdG9yZUZpbmRlcixcbiAgVmlld0FsbFN0b3Jlc1N0YXRlLFxufSBmcm9tICcuLi9zdG9yZS9zdG9yZS1maW5kZXItc3RhdGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb25maWcgfSBmcm9tICcuLy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBnZW9sb2NhdGlvbldhdGNoSWQ6IG51bWJlciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTdG9yZUZpbmRlcj4sXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHN0b3JlJ3MgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgZ2V0U3RvcmVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChTdG9yZUZpbmRlclNlbGVjdG9ycy5nZXRTdG9yZXNMb2FkaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvYnNlcnZhYmxlIGZvciBzdG9yZSdzIGVudGl0aWVzXG4gICAqL1xuICBnZXRGaW5kU3RvcmVzRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxGaW5kU3RvcmVzU3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChTdG9yZUZpbmRlclNlbGVjdG9ycy5nZXRGaW5kU3RvcmVzRW50aXRpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgdmlldyBhbGwgc3RvcmUncyBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBnZXRWaWV3QWxsU3RvcmVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFN0b3JlRmluZGVyU2VsZWN0b3JzLmdldFZpZXdBbGxTdG9yZXNMb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvYnNlcnZhYmxlIGZvciB2aWV3IGFsbCBzdG9yZSdzIGVudGl0aWVzXG4gICAqL1xuICBnZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMoKTogT2JzZXJ2YWJsZTxWaWV3QWxsU3RvcmVzU3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFN0b3JlRmluZGVyU2VsZWN0b3JzLmdldFZpZXdBbGxTdG9yZXNFbnRpdGllcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlIGZpbmRpbmcgYWN0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICogQHBhcmFtIHF1ZXJ5VGV4dCB0ZXh0IHF1ZXJ5XG4gICAqIEBwYXJhbSBsb25naXR1ZGVMYXRpdHVkZSBsb25naXR1ZGUgYW5kIGxhdGl0dWRlIGNvb3JkaW5hdGVzXG4gICAqIEBwYXJhbSBzZWFyY2hDb25maWcgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIGNvdW50cnlJc29Db2RlIGNvdW50cnkgSVNPIGNvZGVcbiAgICovXG4gIGZpbmRTdG9yZXNBY3Rpb24oXG4gICAgcXVlcnlUZXh0OiBzdHJpbmcsXG4gICAgbG9uZ2l0dWRlTGF0aXR1ZGU6IEdlb1BvaW50LFxuICAgIHNlYXJjaENvbmZpZzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsXG4gICAgY291bnRyeUlzb0NvZGU/OiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuRmluZFN0b3Jlcyh7XG4gICAgICAgIHF1ZXJ5VGV4dDogcXVlcnlUZXh0LFxuICAgICAgICBsb25naXR1ZGVMYXRpdHVkZTogbG9uZ2l0dWRlTGF0aXR1ZGUsXG4gICAgICAgIHNlYXJjaENvbmZpZzogc2VhcmNoQ29uZmlnLFxuICAgICAgICBjb3VudHJ5SXNvQ29kZTogY291bnRyeUlzb0NvZGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVmlldyBhbGwgc3RvcmVzXG4gICAqL1xuICB2aWV3QWxsU3RvcmVzKCkge1xuICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKG5ldyBmcm9tU3RvcmUuVmlld0FsbFN0b3JlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaWV3IGFsbCBzdG9yZXMgYnkgaWRcbiAgICogQHBhcmFtIHN0b3JlSWQgc3RvcmUgaWRcbiAgICovXG4gIHZpZXdTdG9yZUJ5SWQoc3RvcmVJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24obmV3IGZyb21TdG9yZS5GaW5kU3RvcmVCeUlkKHsgc3RvcmVJZCB9KSk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhbGwgc3RvcmVzXG4gICAqIEBwYXJhbSBxdWVyeVRleHQgdGV4dCBxdWVyeVxuICAgKiBAcGFyYW0gdXNlTXlMb2NhdGlvbiB1c2UgY3VycmVudCBsb2NhdGlvblxuICAgKi9cbiAgZmluZFN0b3JlcyhxdWVyeVRleHQ6IHN0cmluZywgdXNlTXlMb2NhdGlvbj86IGJvb2xlYW4pIHtcbiAgICBpZiAodXNlTXlMb2NhdGlvbiAmJiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKG5ldyBmcm9tU3RvcmUuT25Ib2xkKCkpO1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbldhdGNoSWQgPSB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXG4gICAgICAgIChwb3M6IFBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG9uZ2l0dWRlTGF0aXR1ZGU6IEdlb1BvaW50ID0ge1xuICAgICAgICAgICAgbG9uZ2l0dWRlOiBwb3MuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICAgIGxhdGl0dWRlOiBwb3MuY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24oXG4gICAgICAgICAgICBuZXcgZnJvbVN0b3JlLkZpbmRTdG9yZXMoeyBxdWVyeVRleHQsIGxvbmdpdHVkZUxhdGl0dWRlIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhcldhdGNoR2VvbG9jYXRpb24obmV3IGZyb21TdG9yZS5GaW5kU3RvcmVzKHsgcXVlcnlUZXh0IH0pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyV2F0Y2hHZW9sb2NhdGlvbihjYWxsYmFja0FjdGlvbjogQWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2goXG4gICAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkXG4gICAgICApO1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbldhdGNoSWQgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGNhbGxiYWNrQWN0aW9uKTtcbiAgfVxufVxuIl19