/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.externalJsFileLoader.load(this.config.googleMaps.apiUrl, { key: this.config.googleMaps.apiKey }, () => {
                this.drawMap(mapElement, locations, selectMarkerHandler);
            });
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
        const mapProp = {
            center: mapCenter,
            zoom: this.config.googleMaps.scale,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
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
        locations.forEach((element, index) => {
            /** @type {?} */
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(this.storeDataService.getStoreLatitude(element), this.storeDataService.getStoreLongitude(element)),
                label: index + 1 + '',
            });
            this.markers.push(marker);
            marker.setMap(this.googleMap);
            marker.addListener('mouseover', function () {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            });
            marker.addListener('mouseout', function () {
                marker.setAnimation(null);
            });
            if (selectMarkerHandler) {
                marker.addListener('click', function () {
                    selectMarkerHandler(index);
                });
            }
        });
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
     * @private
     */
    GoogleMapRendererService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    GoogleMapRendererService.prototype.externalJsFileLoader;
    /**
     * @type {?}
     * @private
     */
    GoogleMapRendererService.prototype.storeDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1yZW5kZXJlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zZXJ2aWNlL2dvb2dsZS1tYXAtcmVuZGVyZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHbEUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBSW5DLFlBQ1UsTUFBeUIsRUFDekIsb0JBQTBDLEVBQzFDLGdCQUFrQztRQUZsQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOcEMsY0FBUyxHQUFvQixJQUFJLENBQUM7SUFPdkMsQ0FBQzs7Ozs7Ozs7O0lBU0osU0FBUyxDQUNQLFVBQXVCLEVBQ3ZCLFNBQWdCLEVBQ2hCLG1CQUE4QjtRQUU5QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDN0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQ3RDLEdBQUcsRUFBRTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQ0YsQ0FBQztTQUNIO2FB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QUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBekhGLFVBQVU7Ozs7WUFGRixpQkFBaUI7WUFIakIsb0JBQW9CO1lBRXBCLGdCQUFnQjs7Ozs7OztJQUt2Qiw2Q0FBMEM7Ozs7O0lBQzFDLDJDQUFzQzs7Ozs7SUFHcEMsMENBQWlDOzs7OztJQUNqQyx3REFBa0Q7Ozs7O0lBQ2xELG9EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiQHR5cGVzL2dvb2dsZW1hcHNcIiAvPlxuaW1wb3J0IHsgRXh0ZXJuYWxKc0ZpbGVMb2FkZXIgfSBmcm9tICcuL2V4dGVybmFsLWpzLWZpbGUtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9zdG9yZS1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJDb25maWcgfSBmcm9tICcuLi9jb25maWcvc3RvcmUtZmluZGVyLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2Uge1xuICBwcml2YXRlIGdvb2dsZU1hcDogZ29vZ2xlLm1hcHMuTWFwID0gbnVsbDtcbiAgcHJpdmF0ZSBtYXJrZXJzOiBnb29nbGUubWFwcy5NYXJrZXJbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogU3RvcmVGaW5kZXJDb25maWcsXG4gICAgcHJpdmF0ZSBleHRlcm5hbEpzRmlsZUxvYWRlcjogRXh0ZXJuYWxKc0ZpbGVMb2FkZXIsXG4gICAgcHJpdmF0ZSBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmVuZGVycyBnb29nbGUgbWFwIG9uIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBkcmF3cyBtYXJrZXJzIG9uIGl0LlxuICAgKiBJZiBtYXAgYWxyZWFkeSBleGlzdHMgaXQgd2lsbCB1c2UgYW4gZXhpc3RpbmcgbWFwIG90aGVyd2lzZSBpdCB3aWxsIGNyZWF0ZSBvbmVcbiAgICogQHBhcmFtIG1hcEVsZW1lbnQgSFRNTCBlbGVtZW50IGluc2lkZSBvZiB3aGljaCB0aGUgbWFwIHdpbGwgYmUgZGlzcGxheWVkXG4gICAqIEBwYXJhbSBsb2NhdGlvbnMgYXJyYXkgY29udGFpbmlnbiBnZW8gZGF0YSB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIG1hcFxuICAgKiBAcGFyYW0gc2VsZWN0TWFya2VySGFuZGxlciBmdW5jdGlvbiB0byBoYW5kbGUgd2hlbmV2ZXIgYSBtYXJrZXIgb24gYSBtYXAgaXMgY2xpY2tlZFxuICAgKi9cbiAgcmVuZGVyTWFwKFxuICAgIG1hcEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIGxvY2F0aW9uczogYW55W10sXG4gICAgc2VsZWN0TWFya2VySGFuZGxlcj86IEZ1bmN0aW9uXG4gICk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdvb2dsZU1hcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5leHRlcm5hbEpzRmlsZUxvYWRlci5sb2FkKFxuICAgICAgICB0aGlzLmNvbmZpZy5nb29nbGVNYXBzLmFwaVVybCxcbiAgICAgICAgeyBrZXk6IHRoaXMuY29uZmlnLmdvb2dsZU1hcHMuYXBpS2V5IH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXdNYXAobWFwRWxlbWVudCwgbG9jYXRpb25zLCBzZWxlY3RNYXJrZXJIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3TWFwKG1hcEVsZW1lbnQsIGxvY2F0aW9ucywgc2VsZWN0TWFya2VySGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENlbnRlcnMgdGhlIG1hcCB0byB0aGUgZ2l2ZW4gcG9pbnRcbiAgICogQHBhcmFtIGxhdGl0dXRlIGxhdGl0dWRlIG9mIHRoZSBuZXcgY2VudGVyXG4gICAqIEBwYXJhbSBsb25naXR1ZGUgbG9uZ2l0dWRlIG9mIHRoZSBuZXcgY2VudGVyXG4gICAqL1xuICBjZW50ZXJNYXAobGF0aXR1dGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdvb2dsZU1hcC5wYW5Ubyh7IGxhdDogbGF0aXR1dGUsIGxuZzogbG9uZ2l0dWRlIH0pO1xuICAgIHRoaXMuZ29vZ2xlTWFwLnNldFpvb20odGhpcy5jb25maWcuZ29vZ2xlTWFwcy5zZWxlY3RlZE1hcmtlclNjYWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGFuZCByZXR1cm5zIHtAbGluayBnb29nbGUubWFwcy5MYXRMbmd9IHJlcHJlc2VudGluZyBhIHBvaW50IHdoZXJlIHRoZSBtYXAgd2lsbCBiZSBjZW50ZXJlZFxuICAgKiBAcGFyYW0gbG9jYXRpb25zIGxpc3Qgb2YgbG9jYXRpb25zXG4gICAqL1xuICBwcml2YXRlIGRlZmluZU1hcENlbnRlcihsb2NhdGlvbnM6IGFueVtdKTogZ29vZ2xlLm1hcHMuTGF0TG5nIHtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcbiAgICAgIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxhdGl0dWRlKGxvY2F0aW9uc1swXSksXG4gICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMb25naXR1ZGUobG9jYXRpb25zWzBdKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBnb29nbGUgbWFwIGluc2lkZSBpZiB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGNlbnRlcmVkIHRvIHRoZSBnaXZlbiBwb2ludFxuICAgKiBAcGFyYW0gbWFwRWxlbWVudCB7QGxpbmsgSFRNTEVsZW1lbnR9IGluc2lkZSBvZiB3aGljaCB0aGUgbWFwIHdpbGwgYmUgY3JlYXRlZFxuICAgKiBAcGFyYW0gbWFwQ2VudGVyIHtAbGluayBnb29nbGUubWFwcy5MYXRMbmd9IHRoZSBwb2ludCB3aGVyZSB0aGUgbWFwIHdpbGwgYmUgY2VudGVyZWRcbiAgICovXG4gIHByaXZhdGUgaW5pdE1hcChcbiAgICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBtYXBDZW50ZXI6IGdvb2dsZS5tYXBzLkxhdExuZ1xuICApOiB2b2lkIHtcbiAgICBjb25zdCBtYXBQcm9wID0ge1xuICAgICAgY2VudGVyOiBtYXBDZW50ZXIsXG4gICAgICB6b29tOiB0aGlzLmNvbmZpZy5nb29nbGVNYXBzLnNjYWxlLFxuICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcbiAgICB9O1xuICAgIHRoaXMuZ29vZ2xlTWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBFbGVtZW50LCBtYXBQcm9wKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFcmFzZXMgdGhlIGN1cnJlbnQgbWFwJ3MgbWFya2VycyBhbmQgY3JlYXRlIGEgbmV3IG9uZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gbG9jYXRpb25zXG4gICAqIEBwYXJhbSBsb2NhdGlvbnMgYXJyYXkgb2YgbG9jYXRpb25zIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbWFwXG4gICAqIEBwYXJhbSBzZWxlY3RNYXJrZXJIYW5kbGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSB3aGVuZXZlciBhIG1hcmtlciBvbiBhIG1hcCBpcyBjbGlja2VkXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZU1hcmtlcnMoXG4gICAgbG9jYXRpb25zOiBhbnlbXSxcbiAgICBzZWxlY3RNYXJrZXJIYW5kbGVyPzogRnVuY3Rpb25cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5tYXJrZXJzID0gW107XG4gICAgbG9jYXRpb25zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXG4gICAgICAgICAgdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTGF0aXR1ZGUoZWxlbWVudCksXG4gICAgICAgICAgdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTG9uZ2l0dWRlKGVsZW1lbnQpXG4gICAgICAgICksXG4gICAgICAgIGxhYmVsOiBpbmRleCArIDEgKyAnJyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgICAgIG1hcmtlci5zZXRNYXAodGhpcy5nb29nbGVNYXApO1xuICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihnb29nbGUubWFwcy5BbmltYXRpb24uQk9VTkNFKTtcbiAgICAgIH0pO1xuICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKG51bGwpO1xuICAgICAgfSk7XG4gICAgICBpZiAoc2VsZWN0TWFya2VySGFuZGxlcikge1xuICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZWN0TWFya2VySGFuZGxlcihpbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYW5kIGRyYXcgdGhlIG1hcFxuICAgKiBAcGFyYW0gbWFwRWxlbWVudCB7QGxpbmsgSFRNTEVsZW1lbnR9IGluc2lkZSBvZiB3aGljaCB0aGUgbWFwIHdpbGwgYmUgZHJhd25cbiAgICogQHBhcmFtIGxvY2F0aW9ucyBhcnJheSBvZiBsb2NhdGlvbnMgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBtYXBcbiAgICogQHBhcmFtIHNlbGVjdE1hcmtlckhhbmRsZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHdoZW5ldmVyIGEgbWFya2VyIG9uIGEgbWFwIGlzIGNsaWNrZWRcbiAgICovXG4gIHByaXZhdGUgZHJhd01hcChcbiAgICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBsb2NhdGlvbnM6IGFueVtdLFxuICAgIHNlbGVjdE1hcmtlckhhbmRsZXI6IEZ1bmN0aW9uXG4gICkge1xuICAgIHRoaXMuaW5pdE1hcChtYXBFbGVtZW50LCB0aGlzLmRlZmluZU1hcENlbnRlcihsb2NhdGlvbnMpKTtcbiAgICB0aGlzLmNyZWF0ZU1hcmtlcnMobG9jYXRpb25zLCBzZWxlY3RNYXJrZXJIYW5kbGVyKTtcbiAgfVxufVxuIl19