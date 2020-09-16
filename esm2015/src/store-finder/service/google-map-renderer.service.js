/// <reference types="@types/googlemaps" />
import { ExternalJsFileLoader } from './external-js-file-loader.service';
import { Injectable } from '@angular/core';
import { StoreDataService } from '../facade/store-data.service';
import { StoreFinderConfig } from '../config/store-finder-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/store-finder-config";
import * as i2 from "./external-js-file-loader.service";
import * as i3 from "../facade/store-data.service";
export class GoogleMapRendererService {
    constructor(config, externalJsFileLoader, storeDataService) {
        this.config = config;
        this.externalJsFileLoader = externalJsFileLoader;
        this.storeDataService = storeDataService;
        this.googleMap = null;
    }
    /**
     * Renders google map on the given element and draws markers on it.
     * If map already exists it will use an existing map otherwise it will create one
     * @param mapElement HTML element inside of which the map will be displayed
     * @param locations array containign geo data to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
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
     * @param latitute latitude of the new center
     * @param longitude longitude of the new center
     */
    centerMap(latitute, longitude) {
        this.googleMap.panTo({ lat: latitute, lng: longitude });
        this.googleMap.setZoom(this.config.googleMaps.selectedMarkerScale);
    }
    /**
     * Defines and returns {@link google.maps.LatLng} representing a point where the map will be centered
     * @param locations list of locations
     */
    defineMapCenter(locations) {
        return new google.maps.LatLng(this.storeDataService.getStoreLatitude(locations[0]), this.storeDataService.getStoreLongitude(locations[0]));
    }
    /**
     * Creates google map inside if the given HTML element centered to the given point
     * @param mapElement {@link HTMLElement} inside of which the map will be created
     * @param mapCenter {@link google.maps.LatLng} the point where the map will be centered
     */
    initMap(mapElement, mapCenter) {
        const gestureOption = 'greedy';
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
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    createMarkers(locations, selectMarkerHandler) {
        this.markers = [];
        locations.forEach((element, index) => {
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
     * @param mapElement {@link HTMLElement} inside of which the map will be drawn
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    drawMap(mapElement, locations, selectMarkerHandler) {
        this.initMap(mapElement, this.defineMapCenter(locations));
        this.createMarkers(locations, selectMarkerHandler);
    }
}
GoogleMapRendererService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GoogleMapRendererService_Factory() { return new GoogleMapRendererService(i0.ɵɵinject(i1.StoreFinderConfig), i0.ɵɵinject(i2.ExternalJsFileLoader), i0.ɵɵinject(i3.StoreDataService)); }, token: GoogleMapRendererService, providedIn: "root" });
GoogleMapRendererService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
GoogleMapRendererService.ctorParameters = () => [
    { type: StoreFinderConfig },
    { type: ExternalJsFileLoader },
    { type: StoreDataService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1yZW5kZXJlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvc3RvcmUtZmluZGVyL3NlcnZpY2UvZ29vZ2xlLW1hcC1yZW5kZXJlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7OztBQUtsRSxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLFlBQ1ksTUFBeUIsRUFDekIsb0JBQTBDLEVBQzFDLGdCQUFrQztRQUZsQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEMsY0FBUyxHQUFvQixJQUFJLENBQUM7SUFPdkMsQ0FBQztJQUVKOzs7Ozs7T0FNRztJQUNILFNBQVMsQ0FDUCxVQUF1QixFQUN2QixTQUFnQixFQUNoQixtQkFBOEI7UUFFOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMzQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQzdCLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUN0QyxHQUFHLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFD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Ozs7T0FLRztJQUNLLE9BQU8sQ0FDYixVQUF1QixFQUN2QixTQUFnQixFQUNoQixtQkFBNkI7UUFFN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztZQS9IRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLGlCQUFpQjtZQUhqQixvQkFBb0I7WUFFcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJAdHlwZXMvZ29vZ2xlbWFwc1wiIC8+XG5pbXBvcnQgeyBFeHRlcm5hbEpzRmlsZUxvYWRlciB9IGZyb20gJy4vZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3N0b3JlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zdG9yZS1maW5kZXItY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcFJlbmRlcmVyU2VydmljZSB7XG4gIHByaXZhdGUgZ29vZ2xlTWFwOiBnb29nbGUubWFwcy5NYXAgPSBudWxsO1xuICBwcml2YXRlIG1hcmtlcnM6IGdvb2dsZS5tYXBzLk1hcmtlcltdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IFN0b3JlRmluZGVyQ29uZmlnLFxuICAgIHByb3RlY3RlZCBleHRlcm5hbEpzRmlsZUxvYWRlcjogRXh0ZXJuYWxKc0ZpbGVMb2FkZXIsXG4gICAgcHJvdGVjdGVkIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGdvb2dsZSBtYXAgb24gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIGRyYXdzIG1hcmtlcnMgb24gaXQuXG4gICAqIElmIG1hcCBhbHJlYWR5IGV4aXN0cyBpdCB3aWxsIHVzZSBhbiBleGlzdGluZyBtYXAgb3RoZXJ3aXNlIGl0IHdpbGwgY3JlYXRlIG9uZVxuICAgKiBAcGFyYW0gbWFwRWxlbWVudCBIVE1MIGVsZW1lbnQgaW5zaWRlIG9mIHdoaWNoIHRoZSBtYXAgd2lsbCBiZSBkaXNwbGF5ZWRcbiAgICogQHBhcmFtIGxvY2F0aW9ucyBhcnJheSBjb250YWluaWduIGdlbyBkYXRhIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbWFwXG4gICAqIEBwYXJhbSBzZWxlY3RNYXJrZXJIYW5kbGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSB3aGVuZXZlciBhIG1hcmtlciBvbiBhIG1hcCBpcyBjbGlja2VkXG4gICAqL1xuICByZW5kZXJNYXAoXG4gICAgbWFwRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgbG9jYXRpb25zOiBhbnlbXSxcbiAgICBzZWxlY3RNYXJrZXJIYW5kbGVyPzogRnVuY3Rpb25cbiAgKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ29vZ2xlTWFwID09PSBudWxsKSB7XG4gICAgICB0aGlzLmV4dGVybmFsSnNGaWxlTG9hZGVyLmxvYWQoXG4gICAgICAgIHRoaXMuY29uZmlnLmdvb2dsZU1hcHMuYXBpVXJsLFxuICAgICAgICB7IGtleTogdGhpcy5jb25maWcuZ29vZ2xlTWFwcy5hcGlLZXkgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhd01hcChtYXBFbGVtZW50LCBsb2NhdGlvbnMsIHNlbGVjdE1hcmtlckhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdNYXAobWFwRWxlbWVudCwgbG9jYXRpb25zLCBzZWxlY3RNYXJrZXJIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2VudGVycyB0aGUgbWFwIHRvIHRoZSBnaXZlbiBwb2ludFxuICAgKiBAcGFyYW0gbGF0aXR1dGUgbGF0aXR1ZGUgb2YgdGhlIG5ldyBjZW50ZXJcbiAgICogQHBhcmFtIGxvbmdpdHVkZSBsb25naXR1ZGUgb2YgdGhlIG5ldyBjZW50ZXJcbiAgICovXG4gIGNlbnRlck1hcChsYXRpdHV0ZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ29vZ2xlTWFwLnBhblRvKHsgbGF0OiBsYXRpdHV0ZSwgbG5nOiBsb25naXR1ZGUgfSk7XG4gICAgdGhpcy5nb29nbGVNYXAuc2V0Wm9vbSh0aGlzLmNvbmZpZy5nb29nbGVNYXBzLnNlbGVjdGVkTWFya2VyU2NhbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgYW5kIHJldHVybnMge0BsaW5rIGdvb2dsZS5tYXBzLkxhdExuZ30gcmVwcmVzZW50aW5nIGEgcG9pbnQgd2hlcmUgdGhlIG1hcCB3aWxsIGJlIGNlbnRlcmVkXG4gICAqIEBwYXJhbSBsb2NhdGlvbnMgbGlzdCBvZiBsb2NhdGlvbnNcbiAgICovXG4gIHByaXZhdGUgZGVmaW5lTWFwQ2VudGVyKGxvY2F0aW9uczogYW55W10pOiBnb29nbGUubWFwcy5MYXRMbmcge1xuICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFxuICAgICAgdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTGF0aXR1ZGUobG9jYXRpb25zWzBdKSxcbiAgICAgIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxvbmdpdHVkZShsb2NhdGlvbnNbMF0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGdvb2dsZSBtYXAgaW5zaWRlIGlmIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQgY2VudGVyZWQgdG8gdGhlIGdpdmVuIHBvaW50XG4gICAqIEBwYXJhbSBtYXBFbGVtZW50IHtAbGluayBIVE1MRWxlbWVudH0gaW5zaWRlIG9mIHdoaWNoIHRoZSBtYXAgd2lsbCBiZSBjcmVhdGVkXG4gICAqIEBwYXJhbSBtYXBDZW50ZXIge0BsaW5rIGdvb2dsZS5tYXBzLkxhdExuZ30gdGhlIHBvaW50IHdoZXJlIHRoZSBtYXAgd2lsbCBiZSBjZW50ZXJlZFxuICAgKi9cbiAgcHJpdmF0ZSBpbml0TWFwKFxuICAgIG1hcEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIG1hcENlbnRlcjogZ29vZ2xlLm1hcHMuTGF0TG5nXG4gICk6IHZvaWQge1xuICAgIHR5cGUgR2VzdHVyZUhhbmRsaW5nT3B0aW9ucyA9ICdjb29wZXJhdGl2ZScgfCAnZ3JlZWR5JyB8ICdub25lJyB8ICdhdXRvJztcbiAgICBjb25zdCBnZXN0dXJlT3B0aW9uOiBHZXN0dXJlSGFuZGxpbmdPcHRpb25zID0gJ2dyZWVkeSc7XG5cbiAgICBjb25zdCBtYXBQcm9wID0ge1xuICAgICAgY2VudGVyOiBtYXBDZW50ZXIsXG4gICAgICB6b29tOiB0aGlzLmNvbmZpZy5nb29nbGVNYXBzLnNjYWxlLFxuICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcbiAgICAgIGdlc3R1cmVIYW5kbGluZzogZ2VzdHVyZU9wdGlvbixcbiAgICB9O1xuICAgIHRoaXMuZ29vZ2xlTWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBFbGVtZW50LCBtYXBQcm9wKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFcmFzZXMgdGhlIGN1cnJlbnQgbWFwJ3MgbWFya2VycyBhbmQgY3JlYXRlIGEgbmV3IG9uZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gbG9jYXRpb25zXG4gICAqIEBwYXJhbSBsb2NhdGlvbnMgYXJyYXkgb2YgbG9jYXRpb25zIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbWFwXG4gICAqIEBwYXJhbSBzZWxlY3RNYXJrZXJIYW5kbGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSB3aGVuZXZlciBhIG1hcmtlciBvbiBhIG1hcCBpcyBjbGlja2VkXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZU1hcmtlcnMoXG4gICAgbG9jYXRpb25zOiBhbnlbXSxcbiAgICBzZWxlY3RNYXJrZXJIYW5kbGVyPzogRnVuY3Rpb25cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5tYXJrZXJzID0gW107XG4gICAgbG9jYXRpb25zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXG4gICAgICAgICAgdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTGF0aXR1ZGUoZWxlbWVudCksXG4gICAgICAgICAgdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTG9uZ2l0dWRlKGVsZW1lbnQpXG4gICAgICAgICksXG4gICAgICAgIGxhYmVsOiBpbmRleCArIDEgKyAnJyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgICAgIG1hcmtlci5zZXRNYXAodGhpcy5nb29nbGVNYXApO1xuICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24oZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkJPVU5DRSk7XG4gICAgICB9KTtcbiAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24obnVsbCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChzZWxlY3RNYXJrZXJIYW5kbGVyKSB7XG4gICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZWN0TWFya2VySGFuZGxlcihpbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYW5kIGRyYXcgdGhlIG1hcFxuICAgKiBAcGFyYW0gbWFwRWxlbWVudCB7QGxpbmsgSFRNTEVsZW1lbnR9IGluc2lkZSBvZiB3aGljaCB0aGUgbWFwIHdpbGwgYmUgZHJhd25cbiAgICogQHBhcmFtIGxvY2F0aW9ucyBhcnJheSBvZiBsb2NhdGlvbnMgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBtYXBcbiAgICogQHBhcmFtIHNlbGVjdE1hcmtlckhhbmRsZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHdoZW5ldmVyIGEgbWFya2VyIG9uIGEgbWFwIGlzIGNsaWNrZWRcbiAgICovXG4gIHByaXZhdGUgZHJhd01hcChcbiAgICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBsb2NhdGlvbnM6IGFueVtdLFxuICAgIHNlbGVjdE1hcmtlckhhbmRsZXI6IEZ1bmN0aW9uXG4gICkge1xuICAgIHRoaXMuaW5pdE1hcChtYXBFbGVtZW50LCB0aGlzLmRlZmluZU1hcENlbnRlcihsb2NhdGlvbnMpKTtcbiAgICB0aGlzLmNyZWF0ZU1hcmtlcnMobG9jYXRpb25zLCBzZWxlY3RNYXJrZXJIYW5kbGVyKTtcbiAgfVxufVxuIl19