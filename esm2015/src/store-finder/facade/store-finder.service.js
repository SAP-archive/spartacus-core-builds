/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WindowRef } from '../../window/window-ref';
import * as fromStore from '../store/index';
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
                this.clearWatchGeolocation(new fromStore.FindStores({ queryText, longitudeLatitude }));
            }));
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
     * @protected
     */
    StoreFinderService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxLQUFLLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVNoRSxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUc3QixZQUNZLEtBQWtDLEVBQ2xDLE1BQWlCO1FBRGpCLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFKckIsdUJBQWtCLEdBQVcsSUFBSSxDQUFDO0lBS3ZDLENBQUM7Ozs7O0lBS0osZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBS0QscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7OztJQUtELHVCQUF1QjtRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsQ0FDckQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0Qsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUN0RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBU0QsZ0JBQWdCLENBQ2QsU0FBaUIsRUFDakIsaUJBQTJCLEVBQzNCLFlBQXFDLEVBQ3JDLGNBQXVCO1FBRXZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUM7WUFDdkIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsaUJBQWlCLEVBQUUsaUJBQWlCO1lBQ3BDLFlBQVksRUFBRSxZQUFZO1lBQzFCLGNBQWMsRUFBRSxjQUFjO1NBQy9CLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBTUQsYUFBYSxDQUFDLE9BQWU7UUFDM0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7O0lBT0QsVUFBVSxDQUFDLFNBQWlCLEVBQUUsYUFBdUI7UUFDbkQsSUFBSSxhQUFhLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDN0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYTs7OztZQUNwRixDQUFDLEdBQWEsRUFBRSxFQUFFOztzQkFDVixpQkFBaUIsR0FBYTtvQkFDbEMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUztvQkFDL0IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUTtpQkFDOUI7Z0JBQ0QsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUMzRCxDQUFDO1lBQ0osQ0FBQyxFQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLGNBQXNCO1FBQ2xELElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLElBQUksRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FDdkQsSUFBSSxDQUFDLGtCQUFrQixDQUN4QixDQUFDO1lBQ0YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQS9HRixVQUFVOzs7O1lBYmMsS0FBSztZQUdyQixTQUFTOzs7Ozs7O0lBWWhCLGdEQUEwQzs7Ozs7SUFHeEMsbUNBQTRDOzs7OztJQUM1QyxvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24sIHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHZW9Qb2ludCB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIEZpbmRTdG9yZXNTdGF0ZSxcbiAgU3RhdGVXaXRoU3RvcmVGaW5kZXIsXG4gIFZpZXdBbGxTdG9yZXNTdGF0ZSxcbn0gZnJvbSAnLi4vc3RvcmUvc3RvcmUtZmluZGVyLXN0YXRlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi8uLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU2VydmljZSB7XG4gIHByaXZhdGUgZ2VvbG9jYXRpb25XYXRjaElkOiBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU3RvcmVGaW5kZXI+LFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBzdG9yZSdzIGxvYWRpbmcgc3RhdGVcbiAgICovXG4gIGdldFN0b3Jlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoU3RvcmVGaW5kZXJTZWxlY3RvcnMuZ2V0U3RvcmVzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb2JzZXJ2YWJsZSBmb3Igc3RvcmUncyBlbnRpdGllc1xuICAgKi9cbiAgZ2V0RmluZFN0b3Jlc0VudGl0aWVzKCk6IE9ic2VydmFibGU8RmluZFN0b3Jlc1N0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoU3RvcmVGaW5kZXJTZWxlY3RvcnMuZ2V0RmluZFN0b3Jlc0VudGl0aWVzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHZpZXcgYWxsIHN0b3JlJ3MgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTdG9yZUZpbmRlclNlbGVjdG9ycy5nZXRWaWV3QWxsU3RvcmVzTG9hZGluZylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb2JzZXJ2YWJsZSBmb3IgdmlldyBhbGwgc3RvcmUncyBlbnRpdGllc1xuICAgKi9cbiAgZ2V0Vmlld0FsbFN0b3Jlc0VudGl0aWVzKCk6IE9ic2VydmFibGU8Vmlld0FsbFN0b3Jlc1N0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTdG9yZUZpbmRlclNlbGVjdG9ycy5nZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZSBmaW5kaW5nIGFjdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAqIEBwYXJhbSBxdWVyeVRleHQgdGV4dCBxdWVyeVxuICAgKiBAcGFyYW0gbG9uZ2l0dWRlTGF0aXR1ZGUgbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSBjb29yZGluYXRlc1xuICAgKiBAcGFyYW0gc2VhcmNoQ29uZmlnIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSBjb3VudHJ5SXNvQ29kZSBjb3VudHJ5IElTTyBjb2RlXG4gICAqL1xuICBmaW5kU3RvcmVzQWN0aW9uKFxuICAgIHF1ZXJ5VGV4dDogc3RyaW5nLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlOiBHZW9Qb2ludCxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGNvdW50cnlJc29Db2RlPzogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkZpbmRTdG9yZXMoe1xuICAgICAgICBxdWVyeVRleHQ6IHF1ZXJ5VGV4dCxcbiAgICAgICAgbG9uZ2l0dWRlTGF0aXR1ZGU6IGxvbmdpdHVkZUxhdGl0dWRlLFxuICAgICAgICBzZWFyY2hDb25maWc6IHNlYXJjaENvbmZpZyxcbiAgICAgICAgY291bnRyeUlzb0NvZGU6IGNvdW50cnlJc29Db2RlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFZpZXcgYWxsIHN0b3Jlc1xuICAgKi9cbiAgdmlld0FsbFN0b3JlcygpIHtcbiAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihuZXcgZnJvbVN0b3JlLlZpZXdBbGxTdG9yZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVmlldyBhbGwgc3RvcmVzIGJ5IGlkXG4gICAqIEBwYXJhbSBzdG9yZUlkIHN0b3JlIGlkXG4gICAqL1xuICB2aWV3U3RvcmVCeUlkKHN0b3JlSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKG5ldyBmcm9tU3RvcmUuRmluZFN0b3JlQnlJZCh7IHN0b3JlSWQgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYWxsIHN0b3Jlc1xuICAgKiBAcGFyYW0gcXVlcnlUZXh0IHRleHQgcXVlcnlcbiAgICogQHBhcmFtIHVzZU15TG9jYXRpb24gdXNlIGN1cnJlbnQgbG9jYXRpb25cbiAgICovXG4gIGZpbmRTdG9yZXMocXVlcnlUZXh0OiBzdHJpbmcsIHVzZU15TG9jYXRpb24/OiBib29sZWFuKSB7XG4gICAgaWYgKHVzZU15TG9jYXRpb24gJiYgdGhpcy53aW5SZWYubmF0aXZlV2luZG93KSB7XG4gICAgICB0aGlzLmNsZWFyV2F0Y2hHZW9sb2NhdGlvbihuZXcgZnJvbVN0b3JlLk9uSG9sZCgpKTtcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkID0gdGhpcy53aW5SZWYubmF0aXZlV2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICAocG9zOiBQb3NpdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZUxhdGl0dWRlOiBHZW9Qb2ludCA9IHtcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcG9zLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgICBsYXRpdHVkZTogcG9zLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKFxuICAgICAgICAgICAgbmV3IGZyb21TdG9yZS5GaW5kU3RvcmVzKHsgcXVlcnlUZXh0LCBsb25naXR1ZGVMYXRpdHVkZSB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJXYXRjaEdlb2xvY2F0aW9uKG5ldyBmcm9tU3RvcmUuRmluZFN0b3Jlcyh7IHF1ZXJ5VGV4dCB9KSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcldhdGNoR2VvbG9jYXRpb24oY2FsbGJhY2tBY3Rpb246IEFjdGlvbikge1xuICAgIGlmICh0aGlzLmdlb2xvY2F0aW9uV2F0Y2hJZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKFxuICAgICAgICB0aGlzLmdlb2xvY2F0aW9uV2F0Y2hJZFxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb25XYXRjaElkID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChjYWxsYmFja0FjdGlvbik7XG4gIH1cbn1cbiJdfQ==