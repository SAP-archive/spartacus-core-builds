import { __decorate } from "tslib";
/// <reference types="@types/googlemaps" />
import { ExternalJsFileLoader } from './external-js-file-loader.service';
import { Injectable } from '@angular/core';
import { StoreDataService } from '../facade/store-data.service';
import { StoreFinderConfig } from '../config/store-finder-config';
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
    GoogleMapRendererService = __decorate([
        Injectable()
    ], GoogleMapRendererService);
    return GoogleMapRendererService;
}());
export { GoogleMapRendererService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1yZW5kZXJlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zZXJ2aWNlL2dvb2dsZS1tYXAtcmVuZGVyZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkNBQTJDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHbEU7SUFJRSxrQ0FDWSxNQUF5QixFQUN6QixvQkFBMEMsRUFDMUMsZ0JBQWtDO1FBRmxDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU50QyxjQUFTLEdBQW9CLElBQUksQ0FBQztJQU92QyxDQUFDO0lBRUo7Ozs7OztPQU1HO0lBQ0gsNENBQVMsR0FBVCxVQUNFLFVBQXVCLEVBQ3ZCLFNBQWdCLEVBQ2hCLG1CQUE4QjtRQUhoQyxpQkFnQkM7UUFYQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDN0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQ3RDO2dCQUNFLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FDRixDQUFDO1NBQ0g7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SUFFRDs7Ozs7T0FLRztJQUNLLDBDQUFPLEdBQWYsVUFDRSxVQUF1QixFQUN2QixTQUFnQixFQUNoQixtQkFBNkI7UUFFN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBdkhtQixpQkFBaUI7Z0JBQ0gsb0JBQW9CO2dCQUN4QixnQkFBZ0I7O0lBUG5DLHdCQUF3QjtRQURwQyxVQUFVLEVBQUU7T0FDQSx3QkFBd0IsQ0E2SHBDO0lBQUQsK0JBQUM7Q0FBQSxBQTdIRCxJQTZIQztTQTdIWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIkB0eXBlcy9nb29nbGVtYXBzXCIgLz5cbmltcG9ydCB7IEV4dGVybmFsSnNGaWxlTG9hZGVyIH0gZnJvbSAnLi9leHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3N0b3JlLWZpbmRlci1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBnb29nbGVNYXA6IGdvb2dsZS5tYXBzLk1hcCA9IG51bGw7XG4gIHByaXZhdGUgbWFya2VyczogZ29vZ2xlLm1hcHMuTWFya2VyW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU3RvcmVGaW5kZXJDb25maWcsXG4gICAgcHJvdGVjdGVkIGV4dGVybmFsSnNGaWxlTG9hZGVyOiBFeHRlcm5hbEpzRmlsZUxvYWRlcixcbiAgICBwcm90ZWN0ZWQgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgZ29vZ2xlIG1hcCBvbiB0aGUgZ2l2ZW4gZWxlbWVudCBhbmQgZHJhd3MgbWFya2VycyBvbiBpdC5cbiAgICogSWYgbWFwIGFscmVhZHkgZXhpc3RzIGl0IHdpbGwgdXNlIGFuIGV4aXN0aW5nIG1hcCBvdGhlcndpc2UgaXQgd2lsbCBjcmVhdGUgb25lXG4gICAqIEBwYXJhbSBtYXBFbGVtZW50IEhUTUwgZWxlbWVudCBpbnNpZGUgb2Ygd2hpY2ggdGhlIG1hcCB3aWxsIGJlIGRpc3BsYXllZFxuICAgKiBAcGFyYW0gbG9jYXRpb25zIGFycmF5IGNvbnRhaW5pZ24gZ2VvIGRhdGEgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBtYXBcbiAgICogQHBhcmFtIHNlbGVjdE1hcmtlckhhbmRsZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHdoZW5ldmVyIGEgbWFya2VyIG9uIGEgbWFwIGlzIGNsaWNrZWRcbiAgICovXG4gIHJlbmRlck1hcChcbiAgICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBsb2NhdGlvbnM6IGFueVtdLFxuICAgIHNlbGVjdE1hcmtlckhhbmRsZXI/OiBGdW5jdGlvblxuICApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nb29nbGVNYXAgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZXh0ZXJuYWxKc0ZpbGVMb2FkZXIubG9hZChcbiAgICAgICAgdGhpcy5jb25maWcuZ29vZ2xlTWFwcy5hcGlVcmwsXG4gICAgICAgIHsga2V5OiB0aGlzLmNvbmZpZy5nb29nbGVNYXBzLmFwaUtleSB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3TWFwKG1hcEVsZW1lbnQsIGxvY2F0aW9ucywgc2VsZWN0TWFya2VySGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd01hcChtYXBFbGVtZW50LCBsb2NhdGlvbnMsIHNlbGVjdE1hcmtlckhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDZW50ZXJzIHRoZSBtYXAgdG8gdGhlIGdpdmVuIHBvaW50XG4gICAqIEBwYXJhbSBsYXRpdHV0ZSBsYXRpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgKiBAcGFyYW0gbG9uZ2l0dWRlIGxvbmdpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgKi9cbiAgY2VudGVyTWFwKGxhdGl0dXRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nb29nbGVNYXAucGFuVG8oeyBsYXQ6IGxhdGl0dXRlLCBsbmc6IGxvbmdpdHVkZSB9KTtcbiAgICB0aGlzLmdvb2dsZU1hcC5zZXRab29tKHRoaXMuY29uZmlnLmdvb2dsZU1hcHMuc2VsZWN0ZWRNYXJrZXJTY2FsZSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyBhbmQgcmV0dXJucyB7QGxpbmsgZ29vZ2xlLm1hcHMuTGF0TG5nfSByZXByZXNlbnRpbmcgYSBwb2ludCB3aGVyZSB0aGUgbWFwIHdpbGwgYmUgY2VudGVyZWRcbiAgICogQHBhcmFtIGxvY2F0aW9ucyBsaXN0IG9mIGxvY2F0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBkZWZpbmVNYXBDZW50ZXIobG9jYXRpb25zOiBhbnlbXSk6IGdvb2dsZS5tYXBzLkxhdExuZyB7XG4gICAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXG4gICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMYXRpdHVkZShsb2NhdGlvbnNbMF0pLFxuICAgICAgdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTG9uZ2l0dWRlKGxvY2F0aW9uc1swXSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgZ29vZ2xlIG1hcCBpbnNpZGUgaWYgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBjZW50ZXJlZCB0byB0aGUgZ2l2ZW4gcG9pbnRcbiAgICogQHBhcmFtIG1hcEVsZW1lbnQge0BsaW5rIEhUTUxFbGVtZW50fSBpbnNpZGUgb2Ygd2hpY2ggdGhlIG1hcCB3aWxsIGJlIGNyZWF0ZWRcbiAgICogQHBhcmFtIG1hcENlbnRlciB7QGxpbmsgZ29vZ2xlLm1hcHMuTGF0TG5nfSB0aGUgcG9pbnQgd2hlcmUgdGhlIG1hcCB3aWxsIGJlIGNlbnRlcmVkXG4gICAqL1xuICBwcml2YXRlIGluaXRNYXAoXG4gICAgbWFwRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgbWFwQ2VudGVyOiBnb29nbGUubWFwcy5MYXRMbmdcbiAgKTogdm9pZCB7XG4gICAgdHlwZSBHZXN0dXJlSGFuZGxpbmdPcHRpb25zID0gJ2Nvb3BlcmF0aXZlJyB8ICdncmVlZHknIHwgJ25vbmUnIHwgJ2F1dG8nO1xuICAgIGNvbnN0IGdlc3R1cmVPcHRpb246IEdlc3R1cmVIYW5kbGluZ09wdGlvbnMgPSAnZ3JlZWR5JztcblxuICAgIGNvbnN0IG1hcFByb3AgPSB7XG4gICAgICBjZW50ZXI6IG1hcENlbnRlcixcbiAgICAgIHpvb206IHRoaXMuY29uZmlnLmdvb2dsZU1hcHMuc2NhbGUsXG4gICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxuICAgICAgZ2VzdHVyZUhhbmRsaW5nOiBnZXN0dXJlT3B0aW9uLFxuICAgIH07XG4gICAgdGhpcy5nb29nbGVNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQsIG1hcFByb3ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEVyYXNlcyB0aGUgY3VycmVudCBtYXAncyBtYXJrZXJzIGFuZCBjcmVhdGUgYSBuZXcgb25lIGJhc2VkIG9uIHRoZSBnaXZlbiBsb2NhdGlvbnNcbiAgICogQHBhcmFtIGxvY2F0aW9ucyBhcnJheSBvZiBsb2NhdGlvbnMgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBtYXBcbiAgICogQHBhcmFtIHNlbGVjdE1hcmtlckhhbmRsZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHdoZW5ldmVyIGEgbWFya2VyIG9uIGEgbWFwIGlzIGNsaWNrZWRcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlTWFya2VycyhcbiAgICBsb2NhdGlvbnM6IGFueVtdLFxuICAgIHNlbGVjdE1hcmtlckhhbmRsZXI/OiBGdW5jdGlvblxuICApOiB2b2lkIHtcbiAgICB0aGlzLm1hcmtlcnMgPSBbXTtcbiAgICBsb2NhdGlvbnMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcbiAgICAgICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMYXRpdHVkZShlbGVtZW50KSxcbiAgICAgICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMb25naXR1ZGUoZWxlbWVudClcbiAgICAgICAgKSxcbiAgICAgICAgbGFiZWw6IGluZGV4ICsgMSArICcnLFxuICAgICAgfSk7XG4gICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgbWFya2VyLnNldE1hcCh0aGlzLmdvb2dsZU1hcCk7XG4gICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5CT1VOQ0UpO1xuICAgICAgfSk7XG4gICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24obnVsbCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChzZWxlY3RNYXJrZXJIYW5kbGVyKSB7XG4gICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxlY3RNYXJrZXJIYW5kbGVyKGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhbmQgZHJhdyB0aGUgbWFwXG4gICAqIEBwYXJhbSBtYXBFbGVtZW50IHtAbGluayBIVE1MRWxlbWVudH0gaW5zaWRlIG9mIHdoaWNoIHRoZSBtYXAgd2lsbCBiZSBkcmF3blxuICAgKiBAcGFyYW0gbG9jYXRpb25zIGFycmF5IG9mIGxvY2F0aW9ucyB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIG1hcFxuICAgKiBAcGFyYW0gc2VsZWN0TWFya2VySGFuZGxlciBmdW5jdGlvbiB0byBoYW5kbGUgd2hlbmV2ZXIgYSBtYXJrZXIgb24gYSBtYXAgaXMgY2xpY2tlZFxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3TWFwKFxuICAgIG1hcEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIGxvY2F0aW9uczogYW55W10sXG4gICAgc2VsZWN0TWFya2VySGFuZGxlcjogRnVuY3Rpb25cbiAgKSB7XG4gICAgdGhpcy5pbml0TWFwKG1hcEVsZW1lbnQsIHRoaXMuZGVmaW5lTWFwQ2VudGVyKGxvY2F0aW9ucykpO1xuICAgIHRoaXMuY3JlYXRlTWFya2Vycyhsb2NhdGlvbnMsIHNlbGVjdE1hcmtlckhhbmRsZXIpO1xuICB9XG59XG4iXX0=