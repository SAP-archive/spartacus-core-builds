/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference types="@types/googlemaps" />
import { ExternalJsFileLoader } from './external-js-file-loader.service';
import { Injectable } from '@angular/core';
import { StoreDataService } from '../facade/store-data.service';
import { StoreFinderConfig } from '../config/store-finder-config';
export class GoogleMapRendererService {
    /**
     * @param {?} config
     * @param {?} externalJsFileLoader
     * @param {?} storeDataService
     */
    constructor(config, externalJsFileLoader, storeDataService) {
        this.config = config;
        this.externalJsFileLoader = externalJsFileLoader;
        this.storeDataService = storeDataService;
        this.googleMap = null;
    }
    /**
     * Renders google map on the given element and draws markers on it.
     * If map already exists it will use an existing map otherwise it will create one
     * @param {?} mapElement HTML element inside of which the map will be displayed
     * @param {?} locations array containign geo data to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    renderMap(mapElement, locations, selectMarkerHandler) {
        if (this.googleMap === null) {
            this.externalJsFileLoader.load(this.config.googleMaps.apiUrl, { key: this.config.googleMaps.apiKey }, (/**
             * @return {?}
             */
            () => {
                this.drawMap(mapElement, locations, selectMarkerHandler);
            }));
        }
        else {
            this.drawMap(mapElement, locations, selectMarkerHandler);
        }
    }
    /**
     * Centers the map to the given point
     * @param {?} latitute latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    centerMap(latitute, longitude) {
        this.googleMap.panTo({ lat: latitute, lng: longitude });
        this.googleMap.setZoom(this.config.googleMaps.selectedMarkerScale);
    }
    /**
     * Defines and returns {\@link google.maps.LatLng} representing a point where the map will be centered
     * @private
     * @param {?} locations list of locations
     * @return {?}
     */
    defineMapCenter(locations) {
        return new google.maps.LatLng(this.storeDataService.getStoreLatitude(locations[0]), this.storeDataService.getStoreLongitude(locations[0]));
    }
    /**
     * Creates google map inside if the given HTML element centered to the given point
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be created
     * @param {?} mapCenter {\@link google.maps.LatLng} the point where the map will be centered
     * @return {?}
     */
    initMap(mapElement, mapCenter) {
        /** @type {?} */
        const gestureOption = 'greedy';
        /** @type {?} */
        const mapProp = {
            center: mapCenter,
            zoom: this.config.googleMaps.scale,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            gestureHandling: gestureOption,
        };
        this.googleMap = new google.maps.Map(mapElement, mapProp);
    }
    /**
     * Erases the current map's markers and create a new one based on the given locations
     * @private
     * @param {?} locations array of locations to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    createMarkers(locations, selectMarkerHandler) {
        this.markers = [];
        locations.forEach((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        (element, index) => {
            /** @type {?} */
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(this.storeDataService.getStoreLatitude(element), this.storeDataService.getStoreLongitude(element)),
                label: index + 1 + '',
            });
            this.markers.push(marker);
            marker.setMap(this.googleMap);
            marker.addListener('mouseover', (/**
             * @return {?}
             */
            function () {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }));
            marker.addListener('mouseout', (/**
             * @return {?}
             */
            function () {
                marker.setAnimation(null);
            }));
            if (selectMarkerHandler) {
                marker.addListener('click', (/**
                 * @return {?}
                 */
                function () {
                    selectMarkerHandler(index);
                }));
            }
        }));
    }
    /**
     * Initialize and draw the map
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be drawn
     * @param {?} locations array of locations to be displayed on the map
     * @param {?} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    drawMap(mapElement, locations, selectMarkerHandler) {
        this.initMap(mapElement, this.defineMapCenter(locations));
        this.createMarkers(locations, selectMarkerHandler);
    }
}
GoogleMapRendererService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleMapRendererService.ctorParameters = () => [
    { type: StoreFinderConfig },
    { type: ExternalJsFileLoader },
    { type: StoreDataService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoogleMapRendererService.prototype.googleMap;
    /**
     * @type {?}
     * @private
     */
    GoogleMapRendererService.prototype.markers;
    /**
     * @type {?}
     * @protected
     */
    GoogleMapRendererService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    GoogleMapRendererService.prototype.externalJsFileLoader;
    /**
     * @type {?}
     * @protected
     */
    GoogleMapRendererService.prototype.storeDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1yZW5kZXJlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zZXJ2aWNlL2dvb2dsZS1tYXAtcmVuZGVyZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHbEUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBSW5DLFlBQ1ksTUFBeUIsRUFDekIsb0JBQTBDLEVBQzFDLGdCQUFrQztRQUZsQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEMsY0FBUyxHQUFvQixJQUFJLENBQUM7SUFPdkMsQ0FBQzs7Ozs7Ozs7O0lBU0osU0FBUyxDQUNQLFVBQXVCLEVBQ3ZCLFNBQWdCLEVBQ2hCLG1CQUE4QjtRQUU5QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDN0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFOzs7WUFDdEMsR0FBRyxFQUFFO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQzNELENBQUMsRUFDRixDQUFDO1NBQ0g7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LE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBN0hGLFVBQVU7Ozs7WUFGRixpQkFBaUI7WUFIakIsb0JBQW9CO1lBRXBCLGdCQUFnQjs7Ozs7OztJQUt2Qiw2Q0FBMEM7Ozs7O0lBQzFDLDJDQUFzQzs7Ozs7SUFHcEMsMENBQW1DOzs7OztJQUNuQyx3REFBb0Q7Ozs7O0lBQ3BELG9EQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiQHR5cGVzL2dvb2dsZW1hcHNcIiAvPlxuaW1wb3J0IHsgRXh0ZXJuYWxKc0ZpbGVMb2FkZXIgfSBmcm9tICcuL2V4dGVybmFsLWpzLWZpbGUtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9zdG9yZS1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJDb25maWcgfSBmcm9tICcuLi9jb25maWcvc3RvcmUtZmluZGVyLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2Uge1xuICBwcml2YXRlIGdvb2dsZU1hcDogZ29vZ2xlLm1hcHMuTWFwID0gbnVsbDtcbiAgcHJpdmF0ZSBtYXJrZXJzOiBnb29nbGUubWFwcy5NYXJrZXJbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTdG9yZUZpbmRlckNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgZXh0ZXJuYWxKc0ZpbGVMb2FkZXI6IEV4dGVybmFsSnNGaWxlTG9hZGVyLFxuICAgIHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmVuZGVycyBnb29nbGUgbWFwIG9uIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBkcmF3cyBtYXJrZXJzIG9uIGl0LlxuICAgKiBJZiBtYXAgYWxyZWFkeSBleGlzdHMgaXQgd2lsbCB1c2UgYW4gZXhpc3RpbmcgbWFwIG90aGVyd2lzZSBpdCB3aWxsIGNyZWF0ZSBvbmVcbiAgICogQHBhcmFtIG1hcEVsZW1lbnQgSFRNTCBlbGVtZW50IGluc2lkZSBvZiB3aGljaCB0aGUgbWFwIHdpbGwgYmUgZGlzcGxheWVkXG4gICAqIEBwYXJhbSBsb2NhdGlvbnMgYXJyYXkgY29udGFpbmlnbiBnZW8gZGF0YSB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIG1hcFxuICAgKiBAcGFyYW0gc2VsZWN0TWFya2VySGFuZGxlciBmdW5jdGlvbiB0byBoYW5kbGUgd2hlbmV2ZXIgYSBtYXJrZXIgb24gYSBtYXAgaXMgY2xpY2tlZFxuICAgKi9cbiAgcmVuZGVyTWFwKFxuICAgIG1hcEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIGxvY2F0aW9uczogYW55W10sXG4gICAgc2VsZWN0TWFya2VySGFuZGxlcj86IEZ1bmN0aW9uXG4gICk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdvb2dsZU1hcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5leHRlcm5hbEpzRmlsZUxvYWRlci5sb2FkKFxuICAgICAgICB0aGlzLmNvbmZpZy5nb29nbGVNYXBzLmFwaVVybCxcbiAgICAgICAgeyBrZXk6IHRoaXMuY29uZmlnLmdvb2dsZU1hcHMuYXBpS2V5IH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXdNYXAobWFwRWxlbWVudCwgbG9jYXRpb25zLCBzZWxlY3RNYXJrZXJIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3TWFwKG1hcEVsZW1lbnQsIGxvY2F0aW9ucywgc2VsZWN0TWFya2VySGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENlbnRlcnMgdGhlIG1hcCB0byB0aGUgZ2l2ZW4gcG9pbnRcbiAgICogQHBhcmFtIGxhdGl0dXRlIGxhdGl0dWRlIG9mIHRoZSBuZXcgY2VudGVyXG4gICAqIEBwYXJhbSBsb25naXR1ZGUgbG9uZ2l0dWRlIG9mIHRoZSBuZXcgY2VudGVyXG4gICAqL1xuICBjZW50ZXJNYXAobGF0aXR1dGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdvb2dsZU1hcC5wYW5Ubyh7IGxhdDogbGF0aXR1dGUsIGxuZzogbG9uZ2l0dWRlIH0pO1xuICAgIHRoaXMuZ29vZ2xlTWFwLnNldFpvb20odGhpcy5jb25maWcuZ29vZ2xlTWFwcy5zZWxlY3RlZE1hcmtlclNjYWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGFuZCByZXR1cm5zIHtAbGluayBnb29nbGUubWFwcy5MYXRMbmd9IHJlcHJlc2VudGluZyBhIHBvaW50IHdoZXJlIHRoZSBtYXAgd2lsbCBiZSBjZW50ZXJlZFxuICAgKiBAcGFyYW0gbG9jYXRpb25zIGxpc3Qgb2YgbG9jYXRpb25zXG4gICAqL1xuICBwcml2YXRlIGRlZmluZU1hcENlbnRlcihsb2NhdGlvbnM6IGFueVtdKTogZ29vZ2xlLm1hcHMuTGF0TG5nIHtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcbiAgICAgIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxhdGl0dWRlKGxvY2F0aW9uc1swXSksXG4gICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMb25naXR1ZGUobG9jYXRpb25zWzBdKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBnb29nbGUgbWFwIGluc2lkZSBpZiB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGNlbnRlcmVkIHRvIHRoZSBnaXZlbiBwb2ludFxuICAgKiBAcGFyYW0gbWFwRWxlbWVudCB7QGxpbmsgSFRNTEVsZW1lbnR9IGluc2lkZSBvZiB3aGljaCB0aGUgbWFwIHdpbGwgYmUgY3JlYXRlZFxuICAgKiBAcGFyYW0gbWFwQ2VudGVyIHtAbGluayBnb29nbGUubWFwcy5MYXRMbmd9IHRoZSBwb2ludCB3aGVyZSB0aGUgbWFwIHdpbGwgYmUgY2VudGVyZWRcbiAgICovXG4gIHByaXZhdGUgaW5pdE1hcChcbiAgICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBtYXBDZW50ZXI6IGdvb2dsZS5tYXBzLkxhdExuZ1xuICApOiB2b2lkIHtcbiAgICB0eXBlIEdlc3R1cmVIYW5kbGluZ09wdGlvbnMgPSAnY29vcGVyYXRpdmUnIHwgJ2dyZWVkeScgfCAnbm9uZScgfCAnYXV0byc7XG4gICAgY29uc3QgZ2VzdHVyZU9wdGlvbjogR2VzdHVyZUhhbmRsaW5nT3B0aW9ucyA9ICdncmVlZHknO1xuXG4gICAgY29uc3QgbWFwUHJvcCA9IHtcbiAgICAgIGNlbnRlcjogbWFwQ2VudGVyLFxuICAgICAgem9vbTogdGhpcy5jb25maWcuZ29vZ2xlTWFwcy5zY2FsZSxcbiAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXG4gICAgICBnZXN0dXJlSGFuZGxpbmc6IGdlc3R1cmVPcHRpb24sXG4gICAgfTtcbiAgICB0aGlzLmdvb2dsZU1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudCwgbWFwUHJvcCk7XG4gIH1cblxuICAvKipcbiAgICogRXJhc2VzIHRoZSBjdXJyZW50IG1hcCdzIG1hcmtlcnMgYW5kIGNyZWF0ZSBhIG5ldyBvbmUgYmFzZWQgb24gdGhlIGdpdmVuIGxvY2F0aW9uc1xuICAgKiBAcGFyYW0gbG9jYXRpb25zIGFycmF5IG9mIGxvY2F0aW9ucyB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIG1hcFxuICAgKiBAcGFyYW0gc2VsZWN0TWFya2VySGFuZGxlciBmdW5jdGlvbiB0byBoYW5kbGUgd2hlbmV2ZXIgYSBtYXJrZXIgb24gYSBtYXAgaXMgY2xpY2tlZFxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVNYXJrZXJzKFxuICAgIGxvY2F0aW9uczogYW55W10sXG4gICAgc2VsZWN0TWFya2VySGFuZGxlcj86IEZ1bmN0aW9uXG4gICk6IHZvaWQge1xuICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgIGxvY2F0aW9ucy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFxuICAgICAgICAgIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxhdGl0dWRlKGVsZW1lbnQpLFxuICAgICAgICAgIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxvbmdpdHVkZShlbGVtZW50KVxuICAgICAgICApLFxuICAgICAgICBsYWJlbDogaW5kZXggKyAxICsgJycsXG4gICAgICB9KTtcbiAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICBtYXJrZXIuc2V0TWFwKHRoaXMuZ29vZ2xlTWFwKTtcbiAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24oZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkJPVU5DRSk7XG4gICAgICB9KTtcbiAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihudWxsKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHNlbGVjdE1hcmtlckhhbmRsZXIpIHtcbiAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGVjdE1hcmtlckhhbmRsZXIoaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGFuZCBkcmF3IHRoZSBtYXBcbiAgICogQHBhcmFtIG1hcEVsZW1lbnQge0BsaW5rIEhUTUxFbGVtZW50fSBpbnNpZGUgb2Ygd2hpY2ggdGhlIG1hcCB3aWxsIGJlIGRyYXduXG4gICAqIEBwYXJhbSBsb2NhdGlvbnMgYXJyYXkgb2YgbG9jYXRpb25zIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbWFwXG4gICAqIEBwYXJhbSBzZWxlY3RNYXJrZXJIYW5kbGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSB3aGVuZXZlciBhIG1hcmtlciBvbiBhIG1hcCBpcyBjbGlja2VkXG4gICAqL1xuICBwcml2YXRlIGRyYXdNYXAoXG4gICAgbWFwRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgbG9jYXRpb25zOiBhbnlbXSxcbiAgICBzZWxlY3RNYXJrZXJIYW5kbGVyOiBGdW5jdGlvblxuICApIHtcbiAgICB0aGlzLmluaXRNYXAobWFwRWxlbWVudCwgdGhpcy5kZWZpbmVNYXBDZW50ZXIobG9jYXRpb25zKSk7XG4gICAgdGhpcy5jcmVhdGVNYXJrZXJzKGxvY2F0aW9ucywgc2VsZWN0TWFya2VySGFuZGxlcik7XG4gIH1cbn1cbiJdfQ==