/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * Renders google map on the given element and draws markers on it.
     * If map already exists it will use an existing map otherwise it will create one
     * @param {?} mapElement HTML element inside of which the map will be displayed
     * @param {?} locations array containign geo data to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    GoogleMapRendererService.prototype.renderMap = /**
     * Renders google map on the given element and draws markers on it.
     * If map already exists it will use an existing map otherwise it will create one
     * @param {?} mapElement HTML element inside of which the map will be displayed
     * @param {?} locations array containign geo data to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    function (mapElement, locations, selectMarkerHandler) {
        var _this = this;
        if (this.googleMap === null) {
            this.externalJsFileLoader.load(this.config.googleMaps.apiUrl, { key: this.config.googleMaps.apiKey }, (/**
             * @return {?}
             */
            function () {
                _this.drawMap(mapElement, locations, selectMarkerHandler);
            }));
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
    /**
     * Centers the map to the given point
     * @param {?} latitute latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    GoogleMapRendererService.prototype.centerMap = /**
     * Centers the map to the given point
     * @param {?} latitute latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    function (latitute, longitude) {
        this.googleMap.panTo({ lat: latitute, lng: longitude });
        this.googleMap.setZoom(this.config.googleMaps.selectedMarkerScale);
    };
    /**
     * Defines and returns {@link google.maps.LatLng} representing a point where the map will be centered
     * @param locations list of locations
     */
    /**
     * Defines and returns {\@link google.maps.LatLng} representing a point where the map will be centered
     * @private
     * @param {?} locations list of locations
     * @return {?}
     */
    GoogleMapRendererService.prototype.defineMapCenter = /**
     * Defines and returns {\@link google.maps.LatLng} representing a point where the map will be centered
     * @private
     * @param {?} locations list of locations
     * @return {?}
     */
    function (locations) {
        return new google.maps.LatLng(this.storeDataService.getStoreLatitude(locations[0]), this.storeDataService.getStoreLongitude(locations[0]));
    };
    /**
     * Creates google map inside if the given HTML element centered to the given point
     * @param mapElement {@link HTMLElement} inside of which the map will be created
     * @param mapCenter {@link google.maps.LatLng} the point where the map will be centered
     */
    /**
     * Creates google map inside if the given HTML element centered to the given point
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be created
     * @param {?} mapCenter {\@link google.maps.LatLng} the point where the map will be centered
     * @return {?}
     */
    GoogleMapRendererService.prototype.initMap = /**
     * Creates google map inside if the given HTML element centered to the given point
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be created
     * @param {?} mapCenter {\@link google.maps.LatLng} the point where the map will be centered
     * @return {?}
     */
    function (mapElement, mapCenter) {
        /** @type {?} */
        var mapProp = {
            center: mapCenter,
            zoom: this.config.googleMaps.scale,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.googleMap = new google.maps.Map(mapElement, mapProp);
    };
    /**
     * Erases the current map's markers and create a new one based on the given locations
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    /**
     * Erases the current map's markers and create a new one based on the given locations
     * @private
     * @param {?} locations array of locations to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    GoogleMapRendererService.prototype.createMarkers = /**
     * Erases the current map's markers and create a new one based on the given locations
     * @private
     * @param {?} locations array of locations to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    function (locations, selectMarkerHandler) {
        var _this = this;
        this.markers = [];
        locations.forEach((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        function (element, index) {
            /** @type {?} */
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(_this.storeDataService.getStoreLatitude(element), _this.storeDataService.getStoreLongitude(element)),
                label: index + 1 + '',
            });
            _this.markers.push(marker);
            marker.setMap(_this.googleMap);
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
    };
    /**
     * Initialize and draw the map
     * @param mapElement {@link HTMLElement} inside of which the map will be drawn
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    /**
     * Initialize and draw the map
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be drawn
     * @param {?} locations array of locations to be displayed on the map
     * @param {?} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    GoogleMapRendererService.prototype.drawMap = /**
     * Initialize and draw the map
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be drawn
     * @param {?} locations array of locations to be displayed on the map
     * @param {?} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    function (mapElement, locations, selectMarkerHandler) {
        this.initMap(mapElement, this.defineMapCenter(locations));
        this.createMarkers(locations, selectMarkerHandler);
    };
    GoogleMapRendererService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleMapRendererService.ctorParameters = function () { return [
        { type: StoreFinderConfig },
        { type: ExternalJsFileLoader },
        { type: StoreDataService }
    ]; };
    return GoogleMapRendererService;
}());
export { GoogleMapRendererService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1yZW5kZXJlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zZXJ2aWNlL2dvb2dsZS1tYXAtcmVuZGVyZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFbEU7SUFLRSxrQ0FDWSxNQUF5QixFQUN6QixvQkFBMEMsRUFDMUMsZ0JBQWtDO1FBRmxDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU50QyxjQUFTLEdBQW9CLElBQUksQ0FBQztJQU92QyxDQUFDO0lBRUo7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCw0Q0FBUzs7Ozs7Ozs7SUFBVCxVQUNFLFVBQXVCLEVBQ3ZCLFNBQWdCLEVBQ2hCLG1CQUE4QjtRQUhoQyxpQkFnQkM7UUFYQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDN0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFOzs7WUFDdEM7Z0JBQ0UsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUNGLENB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RDs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ0ssMENBQU87Ozs7Ozs7O0lBQWYsVUFDRSxVQUF1QixFQUN2QixTQUFnQixFQUNoQixtQkFBNkI7UUFFN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBekhGLFVBQVU7Ozs7Z0JBRkYsaUJBQWlCO2dCQUhqQixvQkFBb0I7Z0JBRXBCLGdCQUFnQjs7SUE2SHpCLCtCQUFDO0NBQUEsQUExSEQsSUEwSEM7U0F6SFksd0JBQXdCOzs7Ozs7SUFDbkMsNkNBQTBDOzs7OztJQUMxQywyQ0FBc0M7Ozs7O0lBR3BDLDBDQUFtQzs7Ozs7SUFDbkMsd0RBQW9EOzs7OztJQUNwRCxvREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIkB0eXBlcy9nb29nbGVtYXBzXCIgLz5cbmltcG9ydCB7IEV4dGVybmFsSnNGaWxlTG9hZGVyIH0gZnJvbSAnLi9leHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3N0b3JlLWZpbmRlci1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBnb29nbGVNYXA6IGdvb2dsZS5tYXBzLk1hcCA9IG51bGw7XG4gIHByaXZhdGUgbWFya2VyczogZ29vZ2xlLm1hcHMuTWFya2VyW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU3RvcmVGaW5kZXJDb25maWcsXG4gICAgcHJvdGVjdGVkIGV4dGVybmFsSnNGaWxlTG9hZGVyOiBFeHRlcm5hbEpzRmlsZUxvYWRlcixcbiAgICBwcm90ZWN0ZWQgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgZ29vZ2xlIG1hcCBvbiB0aGUgZ2l2ZW4gZWxlbWVudCBhbmQgZHJhd3MgbWFya2VycyBvbiBpdC5cbiAgICogSWYgbWFwIGFscmVhZHkgZXhpc3RzIGl0IHdpbGwgdXNlIGFuIGV4aXN0aW5nIG1hcCBvdGhlcndpc2UgaXQgd2lsbCBjcmVhdGUgb25lXG4gICAqIEBwYXJhbSBtYXBFbGVtZW50IEhUTUwgZWxlbWVudCBpbnNpZGUgb2Ygd2hpY2ggdGhlIG1hcCB3aWxsIGJlIGRpc3BsYXllZFxuICAgKiBAcGFyYW0gbG9jYXRpb25zIGFycmF5IGNvbnRhaW5pZ24gZ2VvIGRhdGEgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBtYXBcbiAgICogQHBhcmFtIHNlbGVjdE1hcmtlckhhbmRsZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHdoZW5ldmVyIGEgbWFya2VyIG9uIGEgbWFwIGlzIGNsaWNrZWRcbiAgICovXG4gIHJlbmRlck1hcChcbiAgICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBsb2NhdGlvbnM6IGFueVtdLFxuICAgIHNlbGVjdE1hcmtlckhhbmRsZXI/OiBGdW5jdGlvblxuICApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nb29nbGVNYXAgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZXh0ZXJuYWxKc0ZpbGVMb2FkZXIubG9hZChcbiAgICAgICAgdGhpcy5jb25maWcuZ29vZ2xlTWFwcy5hcGlVcmwsXG4gICAgICAgIHsga2V5OiB0aGlzLmNvbmZpZy5nb29nbGVNYXBzLmFwaUtleSB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3TWFwKG1hcEVsZW1lbnQsIGxvY2F0aW9ucywgc2VsZWN0TWFya2VySGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd01hcChtYXBFbGVtZW50LCBsb2NhdGlvbnMsIHNlbGVjdE1hcmtlckhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDZW50ZXJzIHRoZSBtYXAgdG8gdGhlIGdpdmVuIHBvaW50XG4gICAqIEBwYXJhbSBsYXRpdHV0ZSBsYXRpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgKiBAcGFyYW0gbG9uZ2l0dWRlIGxvbmdpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgKi9cbiAgY2VudGVyTWFwKGxhdGl0dXRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nb29nbGVNYXAucGFuVG8oeyBsYXQ6IGxhdGl0dXRlLCBsbmc6IGxvbmdpdHVkZSB9KTtcbiAgICB0aGlzLmdvb2dsZU1hcC5zZXRab29tKHRoaXMuY29uZmlnLmdvb2dsZU1hcHMuc2VsZWN0ZWRNYXJrZXJTY2FsZSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyBhbmQgcmV0dXJucyB7QGxpbmsgZ29vZ2xlLm1hcHMuTGF0TG5nfSByZXByZXNlbnRpbmcgYSBwb2ludCB3aGVyZSB0aGUgbWFwIHdpbGwgYmUgY2VudGVyZWRcbiAgICogQHBhcmFtIGxvY2F0aW9ucyBsaXN0IG9mIGxvY2F0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBkZWZpbmVNYXBDZW50ZXIobG9jYXRpb25zOiBhbnlbXSk6IGdvb2dsZS5tYXBzLkxhdExuZyB7XG4gICAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXG4gICAgICB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMYXRpdHVkZShsb2NhdGlvbnNbMF0pLFxuICAgICAgdGhpcy5zdG9yZURhdGFTZXJ2aWNlLmdldFN0b3JlTG9uZ2l0dWRlKGxvY2F0aW9uc1swXSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgZ29vZ2xlIG1hcCBpbnNpZGUgaWYgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBjZW50ZXJlZCB0byB0aGUgZ2l2ZW4gcG9pbnRcbiAgICogQHBhcmFtIG1hcEVsZW1lbnQge0BsaW5rIEhUTUxFbGVtZW50fSBpbnNpZGUgb2Ygd2hpY2ggdGhlIG1hcCB3aWxsIGJlIGNyZWF0ZWRcbiAgICogQHBhcmFtIG1hcENlbnRlciB7QGxpbmsgZ29vZ2xlLm1hcHMuTGF0TG5nfSB0aGUgcG9pbnQgd2hlcmUgdGhlIG1hcCB3aWxsIGJlIGNlbnRlcmVkXG4gICAqL1xuICBwcml2YXRlIGluaXRNYXAoXG4gICAgbWFwRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgbWFwQ2VudGVyOiBnb29nbGUubWFwcy5MYXRMbmdcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgbWFwUHJvcCA9IHtcbiAgICAgIGNlbnRlcjogbWFwQ2VudGVyLFxuICAgICAgem9vbTogdGhpcy5jb25maWcuZ29vZ2xlTWFwcy5zY2FsZSxcbiAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXG4gICAgfTtcbiAgICB0aGlzLmdvb2dsZU1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudCwgbWFwUHJvcCk7XG4gIH1cblxuICAvKipcbiAgICogRXJhc2VzIHRoZSBjdXJyZW50IG1hcCdzIG1hcmtlcnMgYW5kIGNyZWF0ZSBhIG5ldyBvbmUgYmFzZWQgb24gdGhlIGdpdmVuIGxvY2F0aW9uc1xuICAgKiBAcGFyYW0gbG9jYXRpb25zIGFycmF5IG9mIGxvY2F0aW9ucyB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIG1hcFxuICAgKiBAcGFyYW0gc2VsZWN0TWFya2VySGFuZGxlciBmdW5jdGlvbiB0byBoYW5kbGUgd2hlbmV2ZXIgYSBtYXJrZXIgb24gYSBtYXAgaXMgY2xpY2tlZFxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVNYXJrZXJzKFxuICAgIGxvY2F0aW9uczogYW55W10sXG4gICAgc2VsZWN0TWFya2VySGFuZGxlcj86IEZ1bmN0aW9uXG4gICk6IHZvaWQge1xuICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgIGxvY2F0aW9ucy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFxuICAgICAgICAgIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxhdGl0dWRlKGVsZW1lbnQpLFxuICAgICAgICAgIHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxvbmdpdHVkZShlbGVtZW50KVxuICAgICAgICApLFxuICAgICAgICBsYWJlbDogaW5kZXggKyAxICsgJycsXG4gICAgICB9KTtcbiAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICBtYXJrZXIuc2V0TWFwKHRoaXMuZ29vZ2xlTWFwKTtcbiAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24oZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkJPVU5DRSk7XG4gICAgICB9KTtcbiAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihudWxsKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHNlbGVjdE1hcmtlckhhbmRsZXIpIHtcbiAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGVjdE1hcmtlckhhbmRsZXIoaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGFuZCBkcmF3IHRoZSBtYXBcbiAgICogQHBhcmFtIG1hcEVsZW1lbnQge0BsaW5rIEhUTUxFbGVtZW50fSBpbnNpZGUgb2Ygd2hpY2ggdGhlIG1hcCB3aWxsIGJlIGRyYXduXG4gICAqIEBwYXJhbSBsb2NhdGlvbnMgYXJyYXkgb2YgbG9jYXRpb25zIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbWFwXG4gICAqIEBwYXJhbSBzZWxlY3RNYXJrZXJIYW5kbGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSB3aGVuZXZlciBhIG1hcmtlciBvbiBhIG1hcCBpcyBjbGlja2VkXG4gICAqL1xuICBwcml2YXRlIGRyYXdNYXAoXG4gICAgbWFwRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgbG9jYXRpb25zOiBhbnlbXSxcbiAgICBzZWxlY3RNYXJrZXJIYW5kbGVyOiBGdW5jdGlvblxuICApIHtcbiAgICB0aGlzLmluaXRNYXAobWFwRWxlbWVudCwgdGhpcy5kZWZpbmVNYXBDZW50ZXIobG9jYXRpb25zKSk7XG4gICAgdGhpcy5jcmVhdGVNYXJrZXJzKGxvY2F0aW9ucywgc2VsZWN0TWFya2VySGFuZGxlcik7XG4gIH1cbn1cbiJdfQ==