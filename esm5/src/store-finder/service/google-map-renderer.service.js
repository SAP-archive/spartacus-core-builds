import { __decorate } from "tslib";
/// <reference types="@types/googlemaps" />
import { ExternalJsFileLoader } from './external-js-file-loader.service';
import { Injectable } from '@angular/core';
import { StoreDataService } from '../facade/store-data.service';
import { StoreFinderConfig } from '../config/store-finder-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/store-finder-config";
import * as i2 from "./external-js-file-loader.service";
import * as i3 from "../facade/store-data.service";
var GoogleMapRendererService = /** @class */ (function () {
    function GoogleMapRendererService(config, externalJsFileLoader, storeDataService) {
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
    GoogleMapRendererService.prototype.renderMap = function (mapElement, locations, selectMarkerHandler) {
        var _this = this;
        if (this.googleMap === null) {
            this.externalJsFileLoader.load(this.config.googleMaps.apiUrl, { key: this.config.googleMaps.apiKey }, function () {
                _this.drawMap(mapElement, locations, selectMarkerHandler);
            });
        }
        else {
            this.drawMap(mapElement, locations, selectMarkerHandler);
        }
    };
    /**
     * Centers the map to the given point
     * @param latitute latitude of the new center
     * @param longitude longitude of the new center
     */
    GoogleMapRendererService.prototype.centerMap = function (latitute, longitude) {
        this.googleMap.panTo({ lat: latitute, lng: longitude });
        this.googleMap.setZoom(this.config.googleMaps.selectedMarkerScale);
    };
    /**
     * Defines and returns {@link google.maps.LatLng} representing a point where the map will be centered
     * @param locations list of locations
     */
    GoogleMapRendererService.prototype.defineMapCenter = function (locations) {
        return new google.maps.LatLng(this.storeDataService.getStoreLatitude(locations[0]), this.storeDataService.getStoreLongitude(locations[0]));
    };
    /**
     * Creates google map inside if the given HTML element centered to the given point
     * @param mapElement {@link HTMLElement} inside of which the map will be created
     * @param mapCenter {@link google.maps.LatLng} the point where the map will be centered
     */
    GoogleMapRendererService.prototype.initMap = function (mapElement, mapCenter) {
        var gestureOption = 'greedy';
        var mapProp = {
            center: mapCenter,
            zoom: this.config.googleMaps.scale,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            gestureHandling: gestureOption,
        };
        this.googleMap = new google.maps.Map(mapElement, mapProp);
    };
    /**
     * Erases the current map's markers and create a new one based on the given locations
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    GoogleMapRendererService.prototype.createMarkers = function (locations, selectMarkerHandler) {
        var _this = this;
        this.markers = [];
        locations.forEach(function (element, index) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(_this.storeDataService.getStoreLatitude(element), _this.storeDataService.getStoreLongitude(element)),
                label: index + 1 + '',
            });
            _this.markers.push(marker);
            marker.setMap(_this.googleMap);
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
    };
    /**
     * Initialize and draw the map
     * @param mapElement {@link HTMLElement} inside of which the map will be drawn
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    GoogleMapRendererService.prototype.drawMap = function (mapElement, locations, selectMarkerHandler) {
        this.initMap(mapElement, this.defineMapCenter(locations));
        this.createMarkers(locations, selectMarkerHandler);
    };
    GoogleMapRendererService.ctorParameters = function () { return [
        { type: StoreFinderConfig },
        { type: ExternalJsFileLoader },
        { type: StoreDataService }
    ]; };
    GoogleMapRendererService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GoogleMapRendererService_Factory() { return new GoogleMapRendererService(i0.ɵɵinject(i1.StoreFinderConfig), i0.ɵɵinject(i2.ExternalJsFileLoader), i0.ɵɵinject(i3.StoreDataService)); }, token: GoogleMapRendererService, providedIn: "root" });
    GoogleMapRendererService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], GoogleMapRendererService);
    return GoogleMapRendererService;
}());
export { GoogleMapRendererService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1yZW5kZXJlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zZXJ2aWNlL2dvb2dsZS1tYXAtcmVuZGVyZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkNBQTJDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBS2xFO0lBSUUsa0NBQ1ksTUFBeUIsRUFDekIsb0JBQTBDLEVBQzFDLGdCQUFrQztRQUZsQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEMsY0FBUyxHQUFvQixJQUFJLENBQUM7SUFPdkMsQ0FBQztJQUVKOzs7Ozs7T0FNRztJQUNILDRDQUFTLEdBQVQsVUFDRSxVQUF1QixFQUN2QixTQUFnQixFQUNoQixtQkFBOEI7UUFIaEMsaUJBZ0JDO1FBWEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMzQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQzdCLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUN0QztnQkFDRSxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQ0YsQ0FBQztT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QUFDO0lBRUQ7Ozs7O09BS0c7SUFDSywwQ0FBTyxHQUFmLFVBQ0UsVUFBdUIsRUFDdkIsU0FBZ0IsRUFDaEIsbUJBQTZCO1FBRTdCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQXZIbUIsaUJBQWlCO2dCQUNILG9CQUFvQjtnQkFDeEIsZ0JBQWdCOzs7SUFQbkMsd0JBQXdCO1FBSHBDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx3QkFBd0IsQ0E2SHBDO21DQXRJRDtDQXNJQyxBQTdIRCxJQTZIQztTQTdIWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIkB0eXBlcy9nb29nbGVtYXBzXCIgLz5cbmltcG9ydCB7IEV4dGVybmFsSnNGaWxlTG9hZGVyIH0gZnJvbSAnLi9leHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3N0b3JlLWZpbmRlci1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBnb29nbGVNYXA6IGdvb2dsZS5tYXBzLk1hcCA9IG51bGw7XG4gIHByaXZhdGUgbWFya2VyczogZ29vZ2xlLm1hcHMuTWFya2VyW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU3RvcmVGaW5kZXJDb25maWcsXG4gICAgcHJvdGVjdGVkIGV4dGVybmFsSnNGaWxlTG9hZGVyOiBFeHRlcm5hbEpzRmlsZUxvYWRlcixcbiAgICBwcm90ZWN0ZWQgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgZ29vZ2xlIG1hcCBvbiB0aGUgZ2l2ZW4gZWxlbWVudCBhbmQgZHJhd3MgbWFya2VycyBvbiBpdC5cbiAgICogSWYgbWFwIGFscmVhZHkgZXhpc3RzIGl0IHdpbGwgdXNlIGFuIGV4aXN0aW5nIG1hcCBvdGhlcndpc2UgaXQgd2lsbCBjcmVhdGUgb25lXG4gICAqIEBwYXJhbSBtYXBFbGVtZW50IEhUTUwgZWxlbWVudCBpbnNpZGUgb2Ygd2hpY2ggdGhlIG1hcCB3aWxsIGJlIGRpc3BsYXllZFxuICAgKiBAcGFyYW0gbG9jYXRpb25zIGFycmF5IGNvbnRhaW5pZ24gZ2VvIGRhdGEgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBtYXBcbiAgICogQHBhcmFtIHNlbGVjdE1hcmtlckhhbmRsZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHdoZW5ldmVyIGEgbWFya2VyIG9uIGEgbWFwIGlzIGNsaWNrZWRcbiAgICovXG4gIHJlbmRlck1hcChcbiAgICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBsb2NhdGlvbnM6IGFueVtdLFxuICAgIHNlbGVjdE1hcmtlckhhbmRsZXI/OiBGdW5jdGlvblxuICApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nb29nbGVNYXAgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZXh0ZXJuYWxKc0ZpbGVMb2FkZXIubG9hZChcbiAgICAgICAgdGhpcy5jb25maWcuZ29vZ2xlTWFwcy5hcGlVcmwsXG4gICAgICAgIHsga2V5OiB0aGlzLmNvbmZpZy5nb29nbGVNYXBzLmFwaUtleSB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3TWFwKG1hcEVsZW1lbnQsIGxvY2F0aW9ucywgc2VsZWN0TWFya2VySGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd01hcChtYXBFbGVtZW50LCBsb2NhdGlvbnMsIHNlbGVjdE1hcmtlckhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDZW50ZXJzIHRoZSBtYXAgdG8gdGhlIGdpdmVuIHBvaW50XG4gICAqIEBwYXJhbSBsYXRpdHV0ZSBsYXRpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgKiBAcGFyYW0gbG9uZ2l0dWRlIGxvbmdpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgKi9cbiAgY2VudGVyTWFwKGxhdGl0dXRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nb29nbGVNYXAucGFuVG8oeyBsYXQ6IGxhdGl0dXRlLCBsbmc6IGxvbmdpdHVkZSB9KTtcbiAgICB0aGlzLmdvb2dsZU1hcC5zZXRab29tKHRoaXMuY29uZmlnLmdvb2dsZU1hcHMuc2VsZWN0ZWRNYXJrZXJTY2FsZSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyBhbmQgcmV0dXJucyB7QGxpbmsgZ29vZ2xlLm1hcHMuTGF0TG5nfSByZXByZXNlbnRpbmcgYSBwb2ludCB3aGVyZSB0aGUgbWFwIHdpbGwgYmUgY2VudGVyZWRcbiAgICogQHBhcmFtIGxvY2F0aW9ucyBsaXN0IG9mIGxvY2F0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBkZWZpbmVNYXBDZW50ZXIobG9jYXRpb25zOiBhbnlbXSk6IGdvb2dsZS5tYXBzLkxhdExuZyB7XG4gICAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXG4gICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMYXRpdHVkZShsb2NhdGlvbnNbMF0pLFxuICAgICAgdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTG9uZ2l0dWRlKGxvY2F0aW9uc1swXSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgZ29vZ2xlIG1hcCBpbnNpZGUgaWYgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBjZW50ZXJlZCB0byB0aGUgZ2l2ZW4gcG9pbnRcbiAgICogQHBhcmFtIG1hcEVsZW1lbnQge0BsaW5rIEhUTUxFbGVtZW50fSBpbnNpZGUgb2Ygd2hpY2ggdGhlIG1hcCB3aWxsIGJlIGNyZWF0ZWRcbiAgICogQHBhcmFtIG1hcENlbnRlciB7QGxpbmsgZ29vZ2xlLm1hcHMuTGF0TG5nfSB0aGUgcG9pbnQgd2hlcmUgdGhlIG1hcCB3aWxsIGJlIGNlbnRlcmVkXG4gICAqL1xuICBwcml2YXRlIGluaXRNYXAoXG4gICAgbWFwRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgbWFwQ2VudGVyOiBnb29nbGUubWFwcy5MYXRMbmdcbiAgKTogdm9pZCB7XG4gICAgdHlwZSBHZXN0dXJlSGFuZGxpbmdPcHRpb25zID0gJ2Nvb3BlcmF0aXZlJyB8ICdncmVlZHknIHwgJ25vbmUnIHwgJ2F1dG8nO1xuICAgIGNvbnN0IGdlc3R1cmVPcHRpb246IEdlc3R1cmVIYW5kbGluZ09wdGlvbnMgPSAnZ3JlZWR5JztcblxuICAgIGNvbnN0IG1hcFByb3AgPSB7XG4gICAgICBjZW50ZXI6IG1hcENlbnRlcixcbiAgICAgIHpvb206IHRoaXMuY29uZmlnLmdvb2dsZU1hcHMuc2NhbGUsXG4gICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxuICAgICAgZ2VzdHVyZUhhbmRsaW5nOiBnZXN0dXJlT3B0aW9uLFxuICAgIH07XG4gICAgdGhpcy5nb29nbGVNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQsIG1hcFByb3ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEVyYXNlcyB0aGUgY3VycmVudCBtYXAncyBtYXJrZXJzIGFuZCBjcmVhdGUgYSBuZXcgb25lIGJhc2VkIG9uIHRoZSBnaXZlbiBsb2NhdGlvbnNcbiAgICogQHBhcmFtIGxvY2F0aW9ucyBhcnJheSBvZiBsb2NhdGlvbnMgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBtYXBcbiAgICogQHBhcmFtIHNlbGVjdE1hcmtlckhhbmRsZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHdoZW5ldmVyIGEgbWFya2VyIG9uIGEgbWFwIGlzIGNsaWNrZWRcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlTWFya2VycyhcbiAgICBsb2NhdGlvbnM6IGFueVtdLFxuICAgIHNlbGVjdE1hcmtlckhhbmRsZXI/OiBGdW5jdGlvblxuICApOiB2b2lkIHtcbiAgICB0aGlzLm1hcmtlcnMgPSBbXTtcbiAgICBsb2NhdGlvbnMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcbiAgICAgICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMYXRpdHVkZShlbGVtZW50KSxcbiAgICAgICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMb25naXR1ZGUoZWxlbWVudClcbiAgICAgICAgKSxcbiAgICAgICAgbGFiZWw6IGluZGV4ICsgMSArICcnLFxuICAgICAgfSk7XG4gICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgbWFya2VyLnNldE1hcCh0aGlzLmdvb2dsZU1hcCk7XG4gICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihnb29nbGUubWFwcy5BbmltYXRpb24uQk9VTkNFKTtcbiAgICAgIH0pO1xuICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihudWxsKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHNlbGVjdE1hcmtlckhhbmRsZXIpIHtcbiAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxlY3RNYXJrZXJIYW5kbGVyKGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhbmQgZHJhdyB0aGUgbWFwXG4gICAqIEBwYXJhbSBtYXBFbGVtZW50IHtAbGluayBIVE1MRWxlbWVudH0gaW5zaWRlIG9mIHdoaWNoIHRoZSBtYXAgd2lsbCBiZSBkcmF3blxuICAgKiBAcGFyYW0gbG9jYXRpb25zIGFycmF5IG9mIGxvY2F0aW9ucyB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIG1hcFxuICAgKiBAcGFyYW0gc2VsZWN0TWFya2VySGFuZGxlciBmdW5jdGlvbiB0byBoYW5kbGUgd2hlbmV2ZXIgYSBtYXJrZXIgb24gYSBtYXAgaXMgY2xpY2tlZFxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3TWFwKFxuICAgIG1hcEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIGxvY2F0aW9uczogYW55W10sXG4gICAgc2VsZWN0TWFya2VySGFuZGxlcjogRnVuY3Rpb25cbiAgKSB7XG4gICAgdGhpcy5pbml0TWFwKG1hcEVsZW1lbnQsIHRoaXMuZGVmaW5lTWFwQ2VudGVyKGxvY2F0aW9ucykpO1xuICAgIHRoaXMuY3JlYXRlTWFya2Vycyhsb2NhdGlvbnMsIHNlbGVjdE1hcmtlckhhbmRsZXIpO1xuICB9XG59XG4iXX0=